(ns lt.plugins.lt-snippets
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s]
            [lt.plugins.lt-snippets.snippets :as snippets]
            [lt.plugins.lt-snippets.snippet-form :as snippet-form]
            [lt.plugins.lt-snippets.select-form :as select-form])
  (:require-macros [lt.macros :refer [defui behavior]]))


(object/object* ::lt-snippets
                :tags [:lt-snippets]
                :behaviors [::show-snippet-hints]
                :name "lt-snippets")

(def lt-snippets (object/create ::lt-snippets))

(defn find-pos [ed from txt]
  (->>
   (range (:line from) (+ 1 (:line (editor/->cursor ed))))
   (map #(hash-map :line % :text (.-text (editor/line-handle ed %))))
   (filter #(.contains (:text %) txt))
   (map #(dissoc (assoc % :ch (.indexOf (:text %) txt)) :text))
   (first)))


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


(defn insert-snippet [item]
  (when item
    (let [ed (pool/last-active)
          pos (editor/->cursor ed)
          snippet (:snippet item)]
      (if (snippets/tabstops? snippet)
        (complete-snippet ed snippet)
        (snippet-form/make {:callback complete-snippet :ed ed :item item :pos pos})))))


(defn ->token [ed]
  (editor/->token ed (editor/->cursor ed)))

(defn clear-token [ed]
  (let [token (->token ed)
        line (:line (editor/->cursor ed))]
    (editor/replace ed {:line line :ch (:start token)} {:line line :ch (:stop token)} "")))

(defn snippet-by-token [ed]
  (snippets/by (:string (->token ed)) (:tags @ed) (snippets/all)))



(defn maybe-select-snippet [ed items]
  (when (seq items)
    (if (= 1 (count items))
      (insert-snippet (first items))
      (select-form/make {:callback insert-snippet :ed ed :pos (editor/->cursor ed) :items items}))))



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

(cmd/command {:command :snippet.by_token
              :desc "Snippets: Expand by editor token"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [items (seq (snippet-by-token ed))]
                          (clear-token ed)
                          (maybe-select-snippet ed items))))})


(cmd/command {:command :snippet.by_key
              :desc "Snippets: Invoke snippet by its key (and editor tag)"
              :hidden true
              :exec (fn [key]
                      (when-let [ed (pool/last-active)]
                        (maybe-select-snippet ed (snippets/by key (:tags @ed) (snippets/all)))))})

