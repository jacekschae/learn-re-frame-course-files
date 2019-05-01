(ns app.spec
  (:require [cljs.spec.alpha :as s]
            [re-frame.core :as rf]))

(defn check-and-throw
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check faild: " (s/explain-str a-spec db)) {}))))

(s/def ::uid (s/nilable string?))
(s/def ::auth (s/map-of keyword? ::uid))

(s/def ::errors (s/map-of keyword? string?))

(s/def ::inboxes (s/map-of keyword? map?))

(s/def ::nav (s/map-of keyword? (s/nilable keyword?)))

(s/def ::recipes (s/map-of keyword? map?))

(s/def ::users (s/map-of string? map?))

(s/def ::db (s/keys :req-un [::auth ::errors ::inboxes ::nav ::recipes ::users]))

(def check-spec-interceptor (rf/after (partial check-and-throw ::db)))
