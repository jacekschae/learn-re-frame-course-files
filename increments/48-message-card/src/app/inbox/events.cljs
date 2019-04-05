(ns app.inbox.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx]]))

(reg-event-db
 :clear-notifications
 (fn [db [_ uid-inbox]]
   (let [uid (get-in db [:auth :uid])]
     (assoc-in db [:users uid :inboxes uid-inbox :notifications] 0))))

(reg-event-db
 :send-notification
 (fn [db [_ {:keys [notify inbox-id]}]]
   (let [uid (get-in db [:auth :uid])
         notifications-count (get-in db [:users notify :inboxes uid :notifications])]
     (-> db
         (assoc-in [:users notify :inboxes uid] {:id inbox-id
                                                 :notifications (inc notifications-count)
                                                 :updated-at (js/Date.now)})
         (assoc-in [:users uid :inboxes notify] {:id inbox-id
                                                 :updated-at (js/Date.now)})))))

(reg-event-fx
 :insert-message
 (fn [{:keys [db]} [_ {:keys [message]}]]
   (let [uid (get-in db [:auth :uid])
         inbox-id (get-in db [:nav :active-inbox])
         participants (get-in db [:inboxes inbox-id :participants])
         conversation-with (first (disj participants uid))]
     {:db (update-in db [:inboxes inbox-id :messages] conj {:message message
                                                            :author uid
                                                            :created-at (js/Date.now)})
      :dispatch [:send-notification {:notify conversation-with :inbox-id inbox-id}]})))
