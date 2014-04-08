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
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(object/object* ::lt-snippets
                :tags [:lt-snippets]
                :behaviors [::show-snippet-hints]
                :name "lt-snippets")

(def snippets (object/create ::lt-snippets))

(defn get-tabstops[snippet]
  (into #{} (filter #(not (= % "$0")) (re-seq #"\$\d+" snippet))))

(defn tabstop-to-input [tabstop]
  (str "<input type='text' class='snipvar-" (s/replace tabstop "$" "") "'" "/>"))

(defn tabstop-to-mirror [tabstop]
  (str "<input type='text' disabled='disabled' class='snipvar-" (s/replace tabstop "$" "") "'" "/>"))


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

;; Jeepus this is really bad, there must be a better way ?
(defn text-width [text]
  (let [el (first (dom/make (str "<span style='position:absolute;visibility:hidden'>" text "</span>")))]
    (dom/append (dom/$ :div.snippet-form) el)
    (let [width (dom/width el)]
      (dom/remove el)
      (+ width 5))))


(defui snippet-form [this info]
  [:div.snippet-form "Snippet content"]
  :click (fn [e]
           (dom/prevent e)
           (object/raise this :remove.snippet.form)))


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

(defn resize-form-input [el]
  (let [v (.-value el)]
    (set! (.-width (.-style el)) (text-width v))))

(defn set-mirrored-values [form el]
  (let [c (.-className el)
        v (.-value el)]
    (doseq [mirr (rest (dom/$$ (str "input." c)  form))]
      (set! (.-value mirr) v)
      (resize-form-input mirr))))

(defn complete-snippet [this ed form]
  (let [inputs (dom/$$ :input form)
        snippet (->@this :item :snippet)]
    (when inputs
      (let [kv (into {} (map #(hash-map (s/replace (.-className %) #"snipvar-" "$") (.-value %)) inputs))
            result (map-replace kv snippet)]
        (object/raise this :remove.snippet.form)
        (editor/focus ed)
        (let [pos (editor/->cursor ed)]
          (editor/insert-at-cursor ed result)
          (when-not (.contains result "$0")
            (editor/set-selection ed pos (editor/->cursor ed))
            (editor/indent-selection ed "smart"))
          (find-line-containing ed "$0" (fn [line-no]
                                        (let [ch (.indexOf (editor/line ed line-no) "$0")]
                                          (editor/replace ed {:line line-no :ch ch} {:line line-no :ch (+ 2 ch)} "var hello = 0;")
                                          (editor/set-selection ed pos (editor/->cursor ed))
                                          (editor/indent-selection ed "smart")
                                          (editor/move-cursor ed {:line line-no :ch ch})))))))))

(object/object* ::inline-form
                :triggers #{:click :clear!}
                :tags #{:inline :inline.snippet.form}
                :init (fn [this info]
                        (when-let [ed (editor/->cm-ed (:ed info))]
                          (let [content (snippet-form this info)
                                line (-> info :pos :line)
                                snippet (-> info :item :snippet)]
                            (dom/html content (snippet-to-form snippet (get-tabstops snippet)))
                            (doseq [el (dom/$$ :input content)]
                              ;;(resize-form-input el)
                              (dom/on el "keyup" (fn [ev]
                                                   (resize-form-input (.-target ev))
                                                   (set-mirrored-values content (.-target ev)))))

                            (dom/on content "keydown" (fn [ev]
                                                        (let [kc (.-keyCode ev)]
                                                        (cond
                                                         (= 13 kc) (complete-snippet this ed content)
                                                         (= 9 kc) (println "Tab")
                                                         (= 27 kc) (do
                                                                     (object/raise this :remove.snippet.form)
                                                                     (editor/focus ed))))))

                            (object/merge! this (assoc info
                                                  :mark (editor/bookmark ed
                                                                         {:line line :ch (-> info :pos :ch)}
                                                                         {:widget content
                                                                          :insertLeft true})))
                            (doseq [el (dom/$$ :input content)]
                              (resize-form-input el))
                            content))))


(def snippet-dir (files/lt-user-dir "snippets"))

(defn read-snippets []
  (->
   (filter #(= (files/ext % ) "edn") (files/ls-sync snippet-dir))
   ((partial map #(cljs.reader/read-string (files/bomless-read (files/join snippet-dir %)))))
   ((partial mapcat identity))))


(defn snippet-by-key [key]
  (some #(when (= key (:key %)) %) (read-snippets)))


;; **************** SELECTING SNIPPETS ******************
(behavior ::set-selected
          :triggers #{:select}
          :reaction (fn [this v]
                      (scmd/exec-active! v)))

(defn selector [opts]
  (doto (scmd/filter-list opts)
    (object/add-behavior! ::set-selected)))


(def add-selector
  (selector {:items read-snippets
             :key :key
             :transform #(str "<p>" %3 "</p><p class='binding'>" (:name %4) "</p>")}))

(defn insert-snippet [item]
  (let [ed (pool/last-active)
        pos (editor/->cursor ed)]
    (let [form-ui (object/create ::inline-form {:ed ed :item item :pos pos})]
      (dom/focus(dom/$ :input)))))
;;(editor/line-widget ed (:line pos) (snippet-form item))))
;;     (editor/insert-at-cursor ed (:snippet item))
;;     (editor/set-selection ed pos (editor/->cursor ed))
;;     (editor/indent-selection ed "smart")))



(cmd/command {:command :snippet.select
              :desc "Select snippet to invoke"
              :options add-selector
              :exec (fn [item]
                      (insert-snippet item))})


(cmd/command {:command :snippet.by_key
              :desc "Invoke snippet by its key"
              :hidden true
              :exec (fn [key]
                      (insert-snippet (snippet-by-key key)))})

