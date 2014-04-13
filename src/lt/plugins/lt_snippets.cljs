(ns lt.plugins.lt-snippets
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.plugins.auto-complete :as hinter]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [lt.objs.keyboard :as keyboard]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(object/object* ::lt-snippets
                :tags [:lt-snippets]
                :behaviors [::show-snippet-hints]
                :name "lt-snippets")

(def snippets (object/create ::lt-snippets))

(defn get-tabstops[snippet]
  (into #{} (filter #(not (= % "$0")) (re-seq #"\$\d+" snippet))))

(defn tabstops? [snippet]
  (empty? (get-tabstops snippet)))

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


(defn find-line-containing [ed txt callback]
  (.eachLine (.getDoc (editor/->cm-ed ed)) (fn [line-handle]
                                             (when (.contains (.-text line-handle) txt)
                                               (callback (.-line(.lineInfo (editor/->cm-ed ed) line-handle)))))))

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
  (editor/move-cursor ed focus))


(defn complete-snippet [ed snippet]
  (let [pos (editor/->cursor ed)]
    (editor/insert-at-cursor ed snippet)
    (if-not (.contains snippet "$0")
      (indent-and-move ed pos (editor/->cursor ed) (editor/->cursor ed))
      (find-line-containing ed "$0" (fn [line-no]
                                        (let [ch (.indexOf (editor/line ed line-no) "$0")]
                                          (editor/replace ed {:line line-no :ch ch} {:line line-no :ch (+ 2 ch)} "")
                                          (indent-and-move ed pos (editor/->cursor ed) {:line line-no :ch ch}))))
      )
    ))

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
      (if (tabstops? snippet)
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
                            (dom/html content (snippet-to-form snippet (get-tabstops snippet)))
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




(def snippet-dir (files/lt-user-dir "snippets"))


(defn load-snippets [path snipgroup]
  {:mode (:mode snipgroup)
   :snippets (map (fn [item]
                    (if-let [file (:snippet-file item)]
                      (assoc item :snippet (files/bomless-read (files/join path file)))
                      item))
                  (:snippets snipgroup))})

(defn load-snippet-definition [path]
  (->
   (files/bomless-read path)
   (cljs.reader/read-string)
   ((partial load-snippets (files/parent path)))))


(defn load-snippet-definitions []
  (->
   (files/filter-walk (fn [path] (= (files/ext path) "edn")) snippet-dir)
   ((partial map load-snippet-definition))))


(defn degroup-snippets [snippets]
  (mapcat identity (map (fn [snip] (:snippets snip)) snippets)))

(defn snippet-by-key [key snippets]
  (some #(when (= key (:key %)) %)
        (degroup-snippets snippets)))


(defn snippet-by
  ([key snippets]
   (snippet-by-key key snippets))
  ([key modes snippets]
   (snippet-by-key key (filter #(contains? modes (keyword (:mode %))) snippets))))


(defn get-snippet-shortcuts []
  (mapcat identity (map (fn [keygroup]
                         (map (fn [km]
                                (hash-map :tag (first keygroup)
                                          :shortcut (first km)
                                          :key (last (first (first (rest km))))))
                              (filter #(.contains (str %) ":snippet.by_key") (first (rest keygroup)))))
                       (seq @keyboard/keys))))


(defn get-snippets []
  (let [snippets (degroup-snippets (load-snippet-definitions))
        shortcuts (get-snippet-shortcuts)]
    (map (fn [snip]
           (assoc snip :shortcut (when-let [sc (some #(if (= (:key snip) (:key %)) %)  shortcuts)] (:shortcut sc))))
         snippets)))



;; **************** SELECTING SNIPPETS ******************
(behavior ::set-selected
          :triggers #{:select}
          :reaction (fn [this v]
                      (scmd/exec-active! v)))

(defn selector [opts]
  (doto (scmd/filter-list opts)
    (object/add-behavior! ::set-selected)))


(def add-selector
  (selector {:items get-snippets
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
                      (let [ed (pool/last-active)
                            snippets (load-snippet-definitions)]
                        (if ed
                          (insert-snippet (snippet-by key (:tags @ed) snippets))
                          (insert-snippet (snippet-by key snippets)))))})

(defn ->token [ed]
  (editor/->token ed (editor/->cursor ed)))

(defn clear-token [ed]
  (let [token (->token ed)
        line (:line (editor/->cursor ed))]
    (editor/replace ed {:line line :ch (:start token)} {:line line :ch (:stop token)} "")))

(defn snippet-by-token [ed]
  (snippet-by (:string (->token ed)) (:tags @ed) (load-snippet-definitions)))

(cmd/command {:command :snippet.by_token
              :desc "Expand snippet by editor token"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [item (snippet-by-token ed)]
                          (clear-token ed)
                          (insert-snippet item))))})
