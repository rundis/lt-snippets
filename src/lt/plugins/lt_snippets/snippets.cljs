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
      (files/bomless-read fullpath))))


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
  (->>
   (files/bomless-read path)
   (cljs.reader/read-string)
   (load-files path)
   (maybe-load-helpers path)))


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

(by "tc" #{:editor.groovy} (all) )


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


(defn get-tabstops[snippet]
  (->>
   (re-seq #"\$\{\d+\:[^\x0A\x0D\u2028\u2029\}]*\}|\$\d+" snippet)
   (filter #(not (= % "$0")))
   (map #(hash-map :num (re-find #"\d+" %)
                   :placeholder (when-let [ph (re-find #"\$\{\d+\:([^\x0A\x0D\u2028\u2029\}]*)\}" %)] (last ph))
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
  (filter (complement s/blank?) (js->clj (.split snippet #"(\$\{\d+\:[^\x0A\x0D\u2028\u2029\}]*\}|\$\d+|\$\{__[^\x0A\x0D\u2028\u2029\}]*__\})"))))


(defn resolve-placeholder [ph]
  (if-let [code (re-find #"__([^\x0A\x0D\u2028\u2029\}]*)__" ph)]
    (js/window.eval (last code))
    ph))

(defn inline-code-frag? [frag]
  (re-seq #"\$\{__[^\x0A\x0D\u2028\u2029\}]*__\}" frag))

(defn mirrored-transformation? [mirror]
  (re-seq #"\$\{\d+\:__[^\x0A\x0D\u2028\u2029\}]*__\}" mirror))

(defn resolve-mirror [mirror, v]
  (if-let [code (re-find #"__([^\x0A\x0D\u2028\u2029\}]*)__" mirror)]
    ((js/window.eval (last code)) v)
    v))


(js/window.eval "snip$.currPath(); snip$.groovy.toUpper")
