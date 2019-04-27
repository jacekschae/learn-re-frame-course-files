(ns app.inbox.subs
  (:require [re-frame.core :refer [reg-sub]]))

(defn reverse-cmp
  [a b]
  (compare b a))

(reg-sub
 :user-inboxes
 (fn [db _]
   (let [uid (get-in db [:auth :uid])]
     (sort-by :update-at reverse-cmp (get-in db [:users uid :inboxes])))))
