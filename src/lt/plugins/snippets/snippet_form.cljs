(ns lt.plugins.snippets.snippet-form
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as s]
            [lt.plugins.snippets.snip :as snippets])
  (:require-macros [lt.macros :refer [defui behavior]]))




(defn comp-tabstop [a b]
  (cond
   (and (:placeholder a) (not (:placeholder b))) true
   (and (:placeholder b) (not (:placeholder a))) false
   :else false))


(def patterns
  {:ts-ph-js  "\\$\\{\\d+\\:__[^\\x0A\\x0D\\u2028\\u2029\\__]*__\\}"
   :ts-ph "\\$\\{\\d+\\:[^\\x0A\\x0D\\u2028\\u2029\\}]*\\}"
   :ts "\\$\\d+"
   :frag "\\$\\{__[^\\x0A\\x0D\\u2028\\u2029\\__]*__\\}"
   :js-code "__([^\\x0A\\x0D\\u2028\\u2029\\__]*)__"
   :ts-ph-js-group "\\$\\{\\d+\\:(__[^\\x0A\\x0D\\u2028\\u2029\\__]*__)\\}"
   :ts-ph-group "\\$\\{\\d+\\:([^\\x0A\\x0D\\u2028\\u2029\\}]*)\\}"
   })

(defn pattern-join [ps j]
  (s/join j (clj->js (map #(% patterns) ps))))


(defn get-tabstops [snippet]
  (->>
   (re-seq (re-pattern (pattern-join [:ts-ph-js :ts-ph :ts] "|")) snippet)
   (filter #(not (= % "$0")))
   (map #(hash-map :num (re-find #"\d+" %)
                   :placeholder (when-let [ph  (re-find (re-pattern (pattern-join [:ts-ph-js-group :ts-ph-group] "|")) %)]
                                  (or (nth ph 1) (last ph)))
                   :text %))
   (group-by :num)
   (map (fn [ts]
          (map-indexed (fn [idx tsi]
                         (if (> idx 0)
                           (assoc tsi :mirrored true)
                           tsi))
                       (sort (comp comp-tabstop) (last ts)))))
   (mapcat identity)))


(defn tabstops? [snippet]
  (empty? (get-tabstops snippet)))


(defn tokenize [snippet]
  (js->clj (.split
            snippet
            (re-pattern (str "(" (pattern-join [:ts-ph-js :ts-ph :ts :frag] "|") ")")))))

(defn safe-eval [frag]
  (try
    (js/window.eval frag)
    (catch :default e
      (console/error (str "Failed to evaluate js: " frag)))))


(defn resolve-placeholder [ph]
  (if-let [code (re-find (re-pattern (:js-code patterns)) ph)]
    (safe-eval (last code))
    ph))


(defn inline-code-frag? [frag]
  (re-seq (re-pattern (:frag patterns)) frag))

(defn mirrored-transformation? [mirror]
  (re-seq (re-pattern (:ts-ph-js patterns)) mirror))


(defn resolve-mirror [mirror, v]
  (if-let [code (re-find (re-pattern (:js-code patterns)) mirror)]
    (let [js-fun  (safe-eval (last code))]
      (if js-fun
        (js-fun v)
        (console/error (str "Error resolving mirror. Expression does not resolve to a (valid) function: " (last code)))))
    v))



(defn tabstop-to-input [tabstop]
  (let [ph (resolve-placeholder (:placeholder tabstop))]
    (str "<span contenteditable='true'"
         " data-ph='" (if (:placeholder tabstop) ph (str "#" (:num tabstop))) "'"
         " data-ts='" (:text tabstop) "'"
         " class='replace snipvar-" (:num tabstop) "'>"
         ph
         "</span>")))

(defn tabstop-to-mirror [tabstop]
  (str "<span class='replace snipvar-" (:num tabstop) "'"
       " data-ts='" (:text tabstop) "'" "></span>"))


(defn replace-tabstops [snippet]
  (loop [tokens (vec (tokenize snippet))
         tabstops (get-tabstops snippet)]
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


(defn inline-code-to-span [frag]
  (str "<div class='replace codeblock' data-ts='" frag "'>" (resolve-placeholder frag) "</div>"))


(defn resolve-inline-code [tokens]
  (map #(if (inline-code-frag? %) (inline-code-to-span %) %) tokens))

(defn snippet-to-form [snippet]
  (->>
   (s/replace snippet "$0" "")
   (escapeSnippet)
   (replace-tabstops)
   (resolve-inline-code)
   (s/join)))


(defn map-replace [m text]
  (reduce
    (fn [acc [k v]] (s/replace acc (str k) (str v)))
    text m))


(defn snipvar-class [classnames]
  (re-find #"snipvar-\d+" classnames))


(defn set-mirror-value [mirr v]
  (let [ts (dom/attr mirr "data-ts")]
    (if (mirrored-transformation? ts)
      (dom/html mirr (resolve-mirror ts v))
      (dom/html mirr v))))


(defn set-mirrored-values [form el]
  (let [c (snipvar-class (.-className el))]
    (doseq [mirr (dom/$$ (str "." c ":not([contenteditable=true])")  form)]
      (set-mirror-value mirr (dom/html el)))))

(defn form-to-snippet [form snippet]
  (when-let [inputs (dom/$$ ".replace" form)]
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


(defn taborder [el]
  (s/replace (snipvar-class (.-className el)) "snipvar-" ""))

(defn tabstops [form]
  (into [] (sort #(compare (taborder %1) (taborder %2)) (seq (dom/$$ "span[contenteditable=true]")))))

(defn tabstops-count [form]
  (count (tabstops form)))

(defn tabstop-idx [form el]
  (.indexOf (clj->js (tabstops form)) el))

(defn next-tabstop-el [form el]
  (nth (tabstops form) (inc (tabstop-idx form el))))

(defn move-next-tab [form el]
  (dom/focus (next-tabstop-el form el)))

(defn prev-tabstop-el [form el]
  (nth (tabstops form) (dec (tabstop-idx form el))))

(defn move-prev-tab [form el]
  (dom/focus (prev-tabstop-el form el)))

(defn last-tabstop? [form el]
  (= (tabstops-count form) (inc (tabstop-idx form el))))

(defn first-tabstop? [form el]
  (= 0 (tabstop-idx form el)))

(defn first-tabstop [form]
  (first (tabstops form)))


(defn complete-snippet-form [this ed form cb-obj]
  (let [snip (form-to-snippet form (-> @this :item :snippet))
        no-indent (boolean (-> @this :item :no-indent))]
    (object/raise this :remove.snippet.form)
    (editor/focus ed)
    (object/raise cb-obj :snippet.complete ed snip :no-indent no-indent)))



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

                            (dom/on content "keydown"
                                    (fn [ev]
                                      (let [kc (.-keyCode ev)
                                            el (.-target ev)]
                                        (cond
                                         (= 13 kc) (do
                                                     (dom/stop-propagation ev)
                                                     (dom/prevent ev)
                                                     (complete-snippet-form this ed content cb-obj))
                                         (and (= 9 kc) (not (.-shiftKey ev))) (do
                                                                                (dom/stop-propagation ev)
                                                                                (dom/prevent ev)
                                                                                (cond
                                                                                 (last-tabstop? content el)
                                                                                 (complete-snippet-form this ed content cb-obj)
                                                                                 :else (move-next-tab form el)))
                                         (and (= 9 kc)  (.-shiftKey ev)) (do
                                                                           (dom/stop-propagation ev)
                                                                           (dom/prevent ev)
                                                                           (cond
                                                                            (first-tabstop? content el)
                                                                            (complete-snippet-form this ed content cb-obj)
                                                                            :else (move-prev-tab form el)))

                                         (= 27 kc) (do
                                                     (object/raise this :remove.snippet.form)
                                                     (editor/focus ed))))))

                            (object/merge! this (assoc info
                                                  :snipmark (editor/bookmark ed
                                                                             {:line line :ch (-> info :pos :ch)}
                                                                             {:widget content
                                                                              :insertLeft true})))
                            (dom/focus (first-tabstop content))

                            content))))

(defn make [info]
  (object/create ::inline-form info))



