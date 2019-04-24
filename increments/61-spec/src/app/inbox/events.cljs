(ns app.inbox.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx]]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [app.helpers :as h]))

(reg-event-db
 :clear-notifications
 (fn-traced [db [_ uid-inbox]]
            (let [uid (get-in db [:auth :uid])]
              (assoc-in db [:users uid :inboxes uid-inbox :notifications] 0))))

(defn send-notification
  [{:keys [db notify inbox-id]}]
  (let [uid (get-in db [:auth :uid])
        notifications-count (get-in db [:users notify :inboxes uid :notifications])]
    (-> db
        (assoc-in [:users notify :inboxes uid] {:id inbox-id
                                                :notifications (inc notifications-count)
                                                :updated-at (js/Date.now)})
        (assoc-in [:users uid :inboxes notify] {:id inbox-id
                                                :updated-at (js/Date.now)}))))

(reg-event-db
 :insert-message
 (fn-traced [db [_ {:keys [message]}]]
            (let [uid (get-in db [:auth :uid])
                  inbox-id (get-in db [:nav :active-inbox])
                  participants (get-in db [:inboxes inbox-id :participants])
                  conversation-with (first (disj participants uid))]
              (update-in db [:inboxes inbox-id :messages] conj {:message message
                                                                :author uid
                                                                :created-at (js/Date.now)})
              (send-notification {:db db :notify conversation-with :inbox-id inbox-id}))))

(reg-event-db
 :request-message
 (fn-traced [db [_ {:keys [message]}]]
            (let [uid (get-in db [:auth :uid])
                  recipe-id (get-in db [:nav :active-recipe])
                  cook (get-in db [:recipes recipe-id :cook])
                  existing-inbox-id (get-in db [:users uid :inboxes cook :id])
                  new-inbox-id (keyword (str "inbox-" (random-uuid)))
                  message {:message message
                           :author uid
                           :created-at (js/Date.now)}]
              (if existing-inbox-id
                (update-in db [:inboxes existing-inbox-id :messages] conj message)
                (assoc-in db [:inboxes new-inbox-id] {:messages [message]
                                                      :participants #{uid cook}}))
              (h/close-modal db)
              (send-notification {:db db :notify cook :inbox-id (or existing-inbox-id new-inbox-id)}))))
