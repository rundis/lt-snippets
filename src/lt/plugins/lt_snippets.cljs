(ns lt.plugins.lt-snippets
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.sidebar.command :as scmd]
            [lt.plugins.auto-complete :as auto-complete]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s]
            [lt.plugins.lt-snippets.snippets :as snippets]
            [lt.plugins.lt-snippets.snippet-form :as snippet-form]
            [lt.plugins.lt-snippets.select-form :as select-form])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defn find-pos [ed from txt]
  (->>
   (range (:line from) (+ 1 (:line (editor/->cursor ed))))
   (map #(hash-map :line % :text (.-text (editor/line-handle ed %))))
   (filter #(.contains (:text %) txt))
   (map #(dissoc (assoc % :ch (.indexOf (:text %) txt)) :text))
   (first)))

(defn ->token [ed]
  (editor/->token ed (editor/->cursor ed)))

(defn clear-token [ed]
  (let [token (->token ed)
        line (:line (editor/->cursor ed))]
    (editor/replace ed {:line line :ch (:start token)} {:line line :ch (:end token)} "")))

(defn snippet-by-token [ed]
  (snippets/by (:string (->token ed)) (:tags @ed) (snippets/all)))


(behavior ::indent-snippet
          :desc "Indent inserted snippet (and move cursor accordingly)"
          :triggers #{:snippet.indent}
          :reaction (fn [this info]
                      (let [bm (editor/bookmark (:ed info) (:focuspos info) nil)]
                        (editor/set-selection (:ed info) (:from info) (:to info))
                        (editor/indent-selection (:ed info) "smart")
                        (editor/move-cursor (:ed info) (lt.util.cljs/js->clj (.find bm)))
                        (.clear bm)
                        (editor/indent-selection (:ed info) "smart")
                        (editor/focus (:ed info)))))


(behavior ::complete-snippet
          :desc "Insert a completed snippet into the given editor"
          :triggers #{:snippet.complete}
          :reaction (fn [this ed snippet & {:keys [no-indent] :or {no-indent false}}]
                      (let [pos (editor/->cursor ed)
                            info {:ed ed :from pos}
                            cur (fn [e] (editor/->cursor e))]
                        (editor/insert-at-cursor ed snippet)
                         (if-not (.contains snippet "$0")
                           (when-not no-indent
                            (object/raise this :snippet.indent (assoc info :to (cur ed) :focuspos (cur ed))))
                          (when-let [cursor (find-pos ed pos "$0")]
                            (editor/replace ed cursor (update-in cursor [:ch] + 2 ) "")
                            (if-not no-indent
                              (object/raise this :snippet.indent (assoc info :to (cur ed) :focuspos cursor))
                              (editor/move-cursor ed cursor)))))))


(behavior ::initiate-snippet
          :desc "Display snippet form if snippet template contains tabstops, otherwise insert directly"
          :triggers #{:snippet.initiate}
          :reaction (fn [this ed item]
                      (let [pos (editor/->cursor ed)
                            snippet (:snippet item)]
                        (if (snippets/tabstops? snippet)
                          (object/raise this :snippet.complete ed snippet)
                          (snippet-form/make {:cb-obj this
                                              :ed ed
                                              :item item
                                              :pos pos})))))


(behavior ::maybe-select-snippet
          :desc "Prompt for snippet selection if multiple given, otherwise initiate snippet"
          :triggers #{:snippet.select.maybe}
          :reaction (fn [this ed items]
                      (when (seq items)
                        (if (= 1 (count items))
                          (object/raise this :snippet.initiate ed (first items))
                          (select-form/make {:cb-obj this
                                             :ed ed
                                             :pos (editor/->cursor ed)
                                             :items items})))))

(defn sel-cb [ed fun c]
  (fun "")
  (object/raise lt-snippets :snippet.initiate ed (get (js->clj c) "item")))


(defn snip-hints [ed]
    (flatten
     (map #(vec [#js {:select (partial sel-cb ed)
                      :text (str (:key %) " - " (:name %) " (snip)")
                      :completion (:key %)
                      :item %}])
          (snippets/by-mode (:tags @ed) (snippets/all)))))


(behavior ::use-local-hints
          :desc "Enables applicable snippets to be shown in autocomplete"
          :triggers #{:hints+}
          :reaction (fn [editor hints token]
                      (when (not= token (::token @editor))
                        (object/merge! editor {::token token})
                        (object/raise auto-complete/hinter :refresh!))
                      (concat hints (snip-hints editor))))

(object/object* ::lt-snippets
                :tags [:lt-snippets]
                :name "lt-snippets")

(def lt-snippets (object/create ::lt-snippets))


(behavior ::set-selected
          :triggers #{:select}
          :reaction (fn [this v]
                      (scmd/exec-active! v)))

(defn selector [opts]
  (doto (scmd/filter-list opts)
    (object/add-behavior! ::set-selected)))


(def add-selector
  (selector {:items snippets/all-keymapped
             :key :name
             :transform #(str "<p>" (:name %4) "</p>"
                              "<p class='binding'>"
                              (str "<b>Key</b>: " (:key %4) (when-let [km (:shortcut %4)] (str " <b>keymap</b>: " km)) "</p>"))}))


(cmd/command {:command :snippet.select
              :desc "Snippets: Select snippet"
              :options add-selector
              :exec (fn [item]
                      (object/raise lt-snippets :snippet.initiate (pool/last-active) item))})

(cmd/command {:command :snippet.by_token
              :desc "Snippets: Expand by editor token"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (when-let [items (seq (snippet-by-token ed))]
                          (clear-token ed)
                          (object/raise lt-snippets :snippet.select.maybe ed items))))})


(cmd/command {:command :snippet.by_key
              :desc "Snippets: Invoke snippet by its key (and editor tag)"
              :hidden true
              :exec (fn [key]
                      (when-let [ed (pool/last-active)]
                        (object/raise lt-snippets :snippet.select.maybe ed (snippets/by key (:tags @ed) (snippets/all)))))})


