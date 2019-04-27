(ns app.inbox.events
  (:require [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :clear-notifications
 (fn [db [_ uid-inbox]]
   (let [uid (get-in db [:auth :uid])]
     (assoc-in db [:users uid :inboxes uid-inbox :notifications] 0))))
