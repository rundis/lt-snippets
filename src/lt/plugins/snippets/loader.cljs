(ns lt.plugins.snippets.loader
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.console :as console]
            [lt.util.load :as load]
            [clojure.string :as s])
  (:require-macros [lt.macros :refer [defui behavior]]))




(behavior ::set-snippet-dir
          :triggers #{:object.instant}
          :desc "Snippets: Set root directory for snippets"
          :type :user
          :params [{:label "snippet-dir"}]
          :exclusive true
          :reaction (fn [this snippet-dir]
                      (object/merge! this {::snippet-dir snippet-dir})))

(object/object* ::loader
                :tags [:snippets.loader]
                :name "loader")

(def loader (object/create ::loader))



(defn get-snippet-dir []
  (let [snip-dir (or (::snippet-dir @loader) (files/lt-user-dir "User/snippets"))]
    (if (files/exists? snip-dir)
      snip-dir
      (do
        (console/log (str "Snippet dir does not exists. Creating: " snip-dir))
        (files/mkdir snip-dir)
        snip-dir))))


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


(defn str-contains [a b]
  (> (.indexOf a b) -1 ))

(defn get-shortcuts []
  (mapcat identity (map (fn [keygroup]
                          (map (fn [km]
                                 (hash-map :tag (first keygroup)
                                           :shortcut (first km)
                                           :key (last (first (first (rest km))))))
                               (filter #(str-contains (str %) ":snippet.by-key") (first (rest keygroup)))))
                        (seq @keyboard/keys))))


(defn all-keymapped []
  (let [snippets (degroup (all))
        shortcuts (get-shortcuts)]
    (map (fn [snip]
           (assoc snip :shortcut (when-let [sc (some #(if (= (:key snip) (:key %)) %)  shortcuts)] (:shortcut sc))))
         snippets)))
