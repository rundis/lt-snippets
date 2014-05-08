(ns lt.plugins.lt-snippets.snippets
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.console :as console]
            [lt.util.load :as load]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))


(def snippet-dir (files/lt-user-dir "snippets"))

(defn get-snippet-dir []
  (let [default (files/lt-user-dir "settings/snippets")]
    (if (files/exists? default)
      default
      (files/lt-user-dir "snippets"))))



(defn load-if-exists [path file]
  (let [fullpath (files/join path file)]
    (if-not (files/exists? fullpath)
      fullpath
      (s/replace(files/bomless-read fullpath) #"\n$" ""))))


(defn resolve-modes [a b]
  {:+ (->>
       (clojure.set/union (:+ a) (:+ b))
       (remove (or (:- b) #{}))
       (into #{}))
   :- (->>
       (clojure.set/union (:- a) (:- b))
       (remove (or (:+ b) #{}))
       (into #{}))})


(defn load-files [path snipgroup]
  (let [gm (:modes snipgroup)]
    {:modes gm
     :helper (:helper snipgroup)
     :snippets (->>
                (map (fn [item]
                       (if-let [file (:snippet-file item)]
                         (assoc item :snippet (load-if-exists (files/parent path) file))
                         item))
                     (:snippets snipgroup))
                (map (fn [item]
                       (if-let [sm (:modes item)]
                         (assoc item :modes (resolve-modes gm (:modes item)))
                         (assoc item :modes gm))))
                )}))


(defn maybe-load-helpers [path snipgroup]
  (when (and (:helper snipgroup) (.-snip$ js/window))
    (load/js (files/join (files/parent path) (:helper snipgroup)) :sync))
  snipgroup)


(defn load-one [path]
  (try
   (->>
    (files/bomless-read path)
    (cljs.reader/read-string)
    (load-files path)
    (maybe-load-helpers path))
  (catch :default e
    (console/log (str "Not able to read: " path)) e)))


(defn load-all []
  (->>
   (files/filter-walk (fn [path] (= (files/ext path) "edn")) (get-snippet-dir))
   (map load-one)))



(defn all []
  (load-all))

(defn degroup [snippets]
  (mapcat identity (map (fn [snip] (:snippets snip)) snippets)))

(defn by-key [key snippets]
  (filter #(= key (:key %)) (degroup snippets)))

(defn satisfies-modes? [modes item]
  (if (and (seq(clojure.set/intersection modes (-> item :modes :+)))
           (empty? (clojure.set/intersection modes (-> item :modes :-))))
    true
    false
    ))

(defn by
  ([key snippets]
   (by-key key snippets))
  ([key modes snippets]
   (filter (partial satisfies-modes? modes) (by-key key snippets))))

(defn by-mode [modes snippets]
  (->>
   (degroup snippets)
   (filter (partial satisfies-modes? modes))))


(defn get-shortcuts []
  (mapcat identity (map (fn [keygroup]
                          (map (fn [km]
                                 (hash-map :tag (first keygroup)
                                           :shortcut (first km)
                                           :key (last (first (first (rest km))))))
                               (filter #(.contains (str %) ":snippet.by_key") (first (rest keygroup)))))
                        (seq @keyboard/keys))))


(defn all-keymapped []
  (let [snippets (degroup (all))
        shortcuts (get-shortcuts)]
    (map (fn [snip]
           (assoc snip :shortcut (when-let [sc (some #(if (= (:key snip) (:key %)) %)  shortcuts)] (:shortcut sc))))
         snippets)))


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


(defn get-tabstops[snippet]
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


