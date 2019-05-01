(ns app.helpers
  (:require [cljs-time.core :as t]))

;; https://stackoverflow.com/questions/32511405/how-would-time-ago-function-implementation-look-like-in-clojure
(defn time-ago
  [timestamp]
  (let [units [{:name "second" :limit 60 :in-second 1}
               {:name "minute" :limit 3600 :in-second 60}
               {:name "hour" :limit 86400 :in-second 3600}
               {:name "day" :limit 604800 :in-second 86400}
               {:name "week" :limit 2629743 :in-second 604800}
               {:name "month" :limit 31556926 :in-second 2629743}
               {:name "year" :limit js/Number.MAX_VALUE :in-second 31556926}]
        time (js/Date. timestamp)
        diff (t/in-seconds (t/interval time (t/now)))]
    (if (< diff 5)
      "just now"
      (let [unit (first (drop-while #(or (>= diff (:limit %))
                                         (not (:limit %)))
                                    units))]
        (-> (/ diff (:in-second unit))
            Math/floor
            int
            (#(str % " " (:name unit) (when (> % 1) "s") " ago")))))))

(defn format-price
  [cents]
  (str (/ (js/parseInt cents) 100) " €"))

(defn valid-number?
  [val]
  (and (not (js/isNaN (js/parseInt val)))
       (number? (js/parseInt val))))