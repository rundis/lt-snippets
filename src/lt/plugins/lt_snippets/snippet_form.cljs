(ns lt.plugins.lt-snippets.snippet-form
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s]
            [lt.plugins.lt-snippets.snippets :as snippets])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn tabstop-to-input [tabstop]
  (str "<span contenteditable='true'"
       " data-ph='" (if (:placeholder tabstop) (:placeholder tabstop) (str "#" (:num tabstop))) "'"
       " data-ts='" (:text tabstop) "'"
       " class='snipvar-" (:num tabstop) "'>"
       (when-let [v (:placeholder tabstop)] v)
       "</span>"))

(defn tabstop-to-mirror [tabstop]
  (str "<span class='snipvar-" (:num tabstop) "'"
       " data-ts='" (:text tabstop) "'" "></span>"))


(defn replace-tabstops [snippet]
  (loop [tokens (vec (snippets/tokenize snippet))
         tabstops (snippets/get-tabstops snippet)]
    (cond
     (empty? tabstops) tokens
     :else (let [tabstop (first tabstops)
                 idx (.indexOf (clj->js tokens) (:text tabstop))]
             (recur
              (assoc tokens idx (if (:mirrored tabstop) (tabstop-to-mirror tabstop) (tabstop-to-input tabstop)))
              (rest tabstops))))))

(defn escapeSnippet [snippet]
  (let [pre (.createElement js/document "pre")
        tn (.createTextNode js/document snippet)]
    (.appendChild pre tn)
    (.-innerHTML pre)))


(defn snippet-to-form [snippet]
  (->>
   (s/replace snippet "$0" "")
   (escapeSnippet)
   (replace-tabstops)
   (s/join)))


(defn map-replace [m text]
  (reduce
    (fn [acc [k v]] (s/replace acc (str k) (str v)))
    text m))


(defn set-mirrored-values [form el]
  (let [c (.-className el)
        v (dom/html el)]
    (doseq [mirr (dom/$$ (str "." c ":not([contenteditable=true])")  form)]
      (dom/html mirr v))))

(defn form-to-snippet [form snippet]
  (when-let [inputs (dom/$$ :span form)]
    (map-replace
     (into {} (map #(hash-map (dom/attr % "data-ts") (dom/html %)) inputs))
     snippet)))


(defui form [this info]
  [:div.snippet-form "Snippet content"]
  :click (fn [e]
           (dom/focus (dom/$ :span (dom/$ :div.snippet-form)))
           (dom/prevent e)))


(behavior ::remove-snippet-form
          :desc "Behavior to remove inline snippet form (default on enter and esc or last/no inputs)"
          :triggers #{:remove.snippet.form}
          :reaction (fn [this]
                      (.clear (:snipmark @this))
                      (object/raise this :clear)
                      (object/destroy! this)))

(defn last-tabstop? [form el]
  (=
   (.-className el)
   (.-className (last (dom/$$ "span[contenteditable=true]" form)))))

(defn first-tabstop? [form el]
  (=
   (.-className el)
   (.-className (last (dom/$$ "span[contenteditable=true]" form)))))



(defn complete-snippet-form [this ed form cb-obj]
  (let [snip (form-to-snippet form (-> @this :item :snippet))]
    (object/raise this :remove.snippet.form)
    (editor/focus ed)
    (object/raise cb-obj :snippet.complete ed snip)))


(object/object* ::inline-form
                :triggers #{:click :clear!}
                :tags #{:inline :inline.snippet.form}
                :init (fn [this info]
                        (when-let [ed (editor/->cm-ed (:ed info))]
                          (let [content (form this info)
                                line (-> info :pos :line)
                                snippet (-> info :item :snippet)
                                cb-obj (:cb-obj info)]

                            (dom/html content (snippet-to-form snippet))

                            (doseq [el (dom/$$ "span[contenteditable=true]" content)]
                              (set-mirrored-values content el)
                              (dom/on el "focus" (fn [ev]
                                                   (let [sel (.getSelection js/window)
                                                         r (.createRange js/document)]
                                                     (.selectNodeContents r el)
                                                     (.removeAllRanges sel)
                                                     (.addRange sel r)))))

                            (dom/on content "keyup" (fn [ev]
                                                      (set-mirrored-values content (.-target ev))))

                            (dom/on content "keydown" (fn [ev]
                                                        (let [kc (.-keyCode ev)
                                                              el (.-target ev)]
                                                        (cond
                                                         (= 13 kc) (do
                                                                     (dom/stop-propagation ev)
                                                                     (dom/prevent ev)
                                                                     (complete-snippet-form this ed content cb-obj))

                                                         (= 9 kc)  (when (last-tabstop? content el)
                                                                     (dom/stop-propagation ev)
                                                                     (dom/prevent ev)
                                                                     (complete-snippet-form this ed content cb-obj))
                                                         (= 27 kc) (do
                                                                     (object/raise this :remove.snippet.form)
                                                                     (editor/focus ed))))))

                            (object/merge! this (assoc info
                                                  :snipmark (editor/bookmark ed
                                                                         {:line line :ch (-> info :pos :ch)}
                                                                         {:widget content
                                                                          :insertLeft true})))
                            (dom/focus (dom/$ "span[contenteditable=true]" content))

                            content))))

(defn make [info]
  (object/create ::inline-form info))



