(ns lt.plugins.lt-snippets
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s]
            [lt.plugins.lt-snippets.snippets :as snippets])
  (:require-macros [lt.macros :refer [defui behavior]]))


(object/object* ::lt-snippets
                :tags [:lt-snippets]
                :behaviors [::show-snippet-hints]
                :name "lt-snippets")

(def lt-snippets (object/create ::lt-snippets))

(defn tabstop-to-input [tabstop]
  (str "<span contenteditable='true' data-ph='" (s/replace tabstop "$" "#") "' class='snipvar-" (s/replace tabstop "$" "") "'></span>"))

(defn tabstop-to-mirror [tabstop]
  (str "<span class='snipvar-" (s/replace tabstop "$" "") "'" "></span>"))


(defn snippet-to-form [snippet tabstops]
  (loop [snippet (s/replace snippet "$0" "")
         tabstops tabstops]
    (cond
     (empty? tabstops) snippet
     :else (let [tabstop (first tabstops)]
             (recur
              (s/replace
               (s/replace-first snippet tabstop (tabstop-to-input tabstop))
               tabstop (tabstop-to-mirror tabstop))
              (rest tabstops))))))

(defui snippet-form [this info]
  [:div.snippet-form "Snippet content"]
  :click (fn [e]
           (dom/focus (dom/$ :span (dom/$ :div.snippet-form)))
           (dom/prevent e)))


(behavior ::remove-snippet-form
          :desc "Behavior to remove inline snippet for (default on enter and esc or last/no inputs)"
          :triggers #{:remove.snippet.form}
          :reaction (fn [this]
                      (.clear (:mark @this))
                      (object/raise this :clear)
                      (object/destroy! this)))

(defn find-pos [ed from txt]
  (->>
   (range (:line from) (+ 1 (:line (editor/->cursor ed))))
   (map #(hash-map :line % :text (.-text (editor/line-handle ed %))))
   (filter #(.contains (:text %) txt))
   (map #(dissoc (assoc % :ch (.indexOf (:text %) txt)) :text))
   (first)))


(defn map-replace [m text]
  (reduce
    (fn [acc [k v]] (s/replace acc (str k) (str v)))
    text m))


(defn set-mirrored-values [form el]
  (let [c (.-className el)
        v (dom/html el)]
    (doseq [mirr (rest (dom/$$ (str "span." c)  form))]
      (dom/html mirr v))))



(defn form-to-snippet [form snippet]
  (when-let [inputs (dom/$$ :span form)]
    (map-replace
     (into {} (map #(hash-map (s/replace (.-className %) #"snipvar-" "$") (dom/html %)) inputs))
     snippet)))

(defn indent-and-move [ed from to focus]
  (editor/set-selection ed from to)
  (editor/indent-selection ed "smart")
  (editor/move-cursor ed focus)
  (editor/indent-selection ed "smart")
  (editor/focus ed))


(defn complete-snippet [ed snippet]
  (let [pos (editor/->cursor ed)]
    (editor/insert-at-cursor ed snippet)
    (if-not (.contains snippet "$0")
      (indent-and-move ed pos (editor/->cursor ed) (editor/->cursor ed))
      (when-let [cursor (find-pos ed pos "$0")]
        (editor/replace ed cursor (update-in cursor [:ch] + 2 ) "")
        (indent-and-move ed pos (editor/->cursor ed) cursor)))))

(defn complete-snippet-form [this ed form]
  (let [snip (form-to-snippet form (-> @this :item :snippet))]
    (object/raise this :remove.snippet.form)
    (editor/focus ed)
    (complete-snippet ed snip)))


(defn insert-snippet [item]
  (when item
    (let [ed (pool/last-active)
          pos (editor/->cursor ed)
          snippet (:snippet item)]
      (if (snippets/tabstops? snippet)
        (complete-snippet ed snippet)
        (object/create ::inline-form {:ed ed :item item :pos pos})))))


(defn last-tabstop? [form el]
  (=
   (.-className el)
   (.-className (last (dom/$$ "span[contenteditable=true]" form)))))


(object/object* ::inline-form
                :triggers #{:click :clear!}
                :tags #{:inline :inline.snippet.form}
                :init (fn [this info]
                        (when-let [ed (editor/->cm-ed (:ed info))]
                          (let [content (snippet-form this info)
                                line (-> info :pos :line)
                                snippet (-> info :item :snippet)]
                            (dom/html content (snippet-to-form snippet (snippets/get-tabstops snippet)))
                            (dom/on content "keyup" (fn [ev]
                                                      (set-mirrored-values content (.-target ev))))

                            (dom/on content "keydown" (fn [ev]
                                                        (let [kc (.-keyCode ev)
                                                              el (.-target ev)]
                                                        (cond
                                                         (= 13 kc) (do
                                                                     (dom/stop-propagation ev)
                                                                     (dom/prevent ev)
                                                                     (complete-snippet-form this ed content))

                                                         (= 9 kc)  (when (last-tabstop? content el)
                                                                     (dom/stop-propagation ev)
                                                                     (dom/prevent ev)
                                                                     (complete-snippet-form this ed content))
                                                         (= 27 kc) (do
                                                                     (object/raise this :remove.snippet.form)
                                                                     (editor/focus ed))))))

                            (object/merge! this (assoc info
                                                  :mark (editor/bookmark ed
                                                                         {:line line :ch (-> info :pos :ch)}
                                                                         {:widget content
                                                                          :insertLeft true})))
                            (dom/focus (dom/$ :span content))
                            content))))



;; **************** SELECTING SNIPPETS ******************
(behavior ::set-selected
          :triggers #{:select}
          :reaction (fn [this v]
                      (scmd/exec-active! v)))

(defn selector [opts]
  (doto (scmd/filter-list opts)
    (object/add-behavior! ::set-selected)))


(def add-selector
  (selector {:items snippets/all-keymapped
             :key :key
             :transform #(str "<p>" (:name %4) "</p>"
                              "<p class='binding'>"
                              (str "Key: " %3 (when-let [km (:shortcut %4)] (str " keymap: " km)) "</p>"))}))



(cmd/command {:command :snippet.select
              :desc "Snippets: Select snippet"
              :options add-selector
              :exec (fn [item]
                      (insert-snippet item))})


(cmd/command {:command :snippet.by_key
              :desc "Snippets: Invoke snippet by its key (and editor tag)"
              :hidden true
              :exec (fn [key]
                      (when-let [ed (pool/last-active)]
                        (maybe-select-snippet ed (snippets/by key (:tags @ed) (snippets/all)))))})

(defn ->token [ed]
  (editor/->token ed (editor/->cursor ed)))

(defn clear-token [ed]
  (let [token (->token ed)
        line (:line (editor/->cursor ed))]
    (editor/replace ed {:line line :ch (:start token)} {:line line :ch (:stop token)} "")))

(defn snippet-by-token [ed]
  (snippets/by (:string (->token ed)) (:tags @ed) (snippets/all)))

(cmd/command {:command :snippet.by_token
              :desc "Expand snippet by editor token"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [items (snippet-by-token ed)]
                          (clear-token ed)
                          (maybe-select-snippet ed items))))})



(defn maybe-select-snippet [ed items]
  (if (= 1 (count items))
    (insert-snippet (first items))
    (object/create ::inline-select-form {:ed ed :pos (editor/->cursor ed) :items items})))

(defui snippet-select-item [idx item]
  [:option {:value idx :data-snippet (:snippet item) :selected (= idx 0)} (:name item)])

(defui snippet-select-form [this items]
  [:div.snippet-select-form
   [:select {:size (count items)}
    (map-indexed snippet-select-item items)]])

(object/object* ::inline-select-form
                :triggers #{:click :clear!}
                :tags #{:inline :inline.snippet.select.form}
                :init (fn [this info]
                        (when-let [ed (editor/->cm-ed (:ed info))]
                          (let [content (snippet-select-form this (:items info))
                                line (-> info :pos :line)
                                remove-form (fn [this]
                                         (.clear (:mark @this))
                                         (object/raise this :clear)
                                         (object/destroy! this))]
                            (object/merge! this (assoc info
                                                  :mark (editor/bookmark ed
                                                                         {:line line :ch (-> info :pos :ch)}
                                                                         {:widget content
                                                                          :insertLeft false})))
                            (dom/on content "keydown" (fn [ev]
                                                        (let [kc (.-keyCode ev)
                                                              el (.-target ev)]
                                                          (cond
                                                           (= 13 kc) (do
                                                                       (dom/stop-propagation ev)
                                                                       (dom/prevent ev)
                                                                       (let [snippet (dom/attr (dom/$ "option:checked" el) "data-snippet")]
                                                                         (remove-form this)
                                                                         (insert-snippet {:snippet snippet})))
                                                           (= 27 kc) (do
                                                                       (dom/stop-propagation ev)
                                                                       (dom/prevent ev)
                                                                       (remove-form this)
                                                                       (editor/focus ed))))))

                            (dom/val (dom/$ :option content) 0)
                            (dom/focus (dom/$ :select content))
                            content))))
