(ns app.inbox.views.inboxes-page
  (:require [re-frame.core :as rf]
            [app.inbox.views.inbox-card :refer [inbox-card]]
            [app.components.page-nav :refer [page-nav]]
            ["@smooth-ui/core-sc" :refer [Box]]))

(defn inboxes-page
  []
  (let [user-inboxes @(rf/subscribe [:user-inboxes])]
    [:> Box
     [page-nav {:center "Inbox"}]
     [:> Box {:class "cards"}
      (for [[k {:keys [id notifications updated-at]}] user-inboxes
            :let [notifications? (> notifications 0)]]
        [inbox-card {:uid k
                     :id id
                     :notifications? notifications?
                     :notifications notifications
                     :updated-at updated-at}])]]))
