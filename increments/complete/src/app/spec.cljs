(ns app.spec
  (:require [cljs.spec.alpha :as s]
            [re-frame.core :as rf]))

(defn check-and-throw
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check faild: " (s/explain-str a-spec db)) {}))))

(s/def ::auth (s/map-of keyword? (s/nilable string?)))

(s/def ::errors (s/map-of keyword? string?))

(s/def :inbox.messages/message string?)
(s/def :inbox.messages/auhtor string?)
(s/def :inbox.messages/created-at number?)
(s/def :inbox.messages/map (s/keys :req-un [:inbox.messages/message :inbox.messages/author :inbox.messages/created-at]))
(s/def :inbox/messages (s/coll-of :inbox.messages/map :kind vector?))
(s/def :inbox/participants (s/coll-of string? :kind set?))
(s/def :inbox/map (s/keys :req-un [:inbox/participants :inbox/messages]))
(s/def ::inboxes (s/map-of keyword? :inbox/map))

(s/def ::nav (s/map-of keyword? (s/nilable keyword?)))

(s/def :recipe/id keyword?)
(s/def :recipe/public? boolean?)
(s/def :recipe/pre-time number?)
(s/def :recipe/name string?)
(s/def :recipe/image string?)
(s/def :recipe/saved-count number?)
(s/def :recipe/ingredients map?)
(s/def :recipe/steps map?)
(s/def :recipe/cook string?)
(s/def :recipe/price number?)
(s/def :recipe/map (s/keys :req-un [:recipe/id :recipe/public? :recipe/prep-time :recipe/name]
                           :opt-un [:recipe/image :recipe/saved-count :recipe/ingredients :recipe/steps :recipe/cook :recipe/price]))
(s/def ::recipes (s/map-of :recipe/id :recipe/map))

(s/def :user.inbox/id keyword?)
(s/def :user.inbox/updated-at number?)
(s/def :user.inbox/notifications number?)
(s/def :user/inbox (s/keys :req-un [:user.inbox/id :user.inbox/updated-at :user.inbox/notifications]))
(s/def :user/uid string?)
(s/def :user/profile (s/map-of keyword? string?))
(s/def :user/role keyword?)
(s/def :user/saved set?)
(s/def :user/inboxes (s/map-of string? :user/inbox))
(s/def :user/map (s/keys :req-un [:user/uid :user/profile :user/role :user/saved :user/inboxes]))
(s/def ::users (s/map-of :user/uid :user/map))

(s/def ::db (s/keys :req-un [::auth ::errors ::inboxes ::nav ::recipes ::users]))

(def check-spec-interceptor (rf/after (partial check-and-throw ::db)))
