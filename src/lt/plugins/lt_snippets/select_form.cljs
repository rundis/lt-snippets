(ns lt.plugins.lt-snippets.select-form
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


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
                                cb-obj (:cb-obj info)
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
                                                                         (object/raise cb-obj :snippet.initiate ed {:snippet snippet})))
                                                           (= 27 kc) (do
                                                                       (dom/stop-propagation ev)
                                                                       (dom/prevent ev)
                                                                       (remove-form this)
                                                                       (editor/focus ed))))))

                            (dom/val (dom/$ :option content) 0)
                            (dom/focus (dom/$ :select content))
                            content))))

(defn make [info]
  (object/create ::inline-select-form info))
