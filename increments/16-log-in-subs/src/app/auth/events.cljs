(ns app.auth.events
  (:require [re-frame.core :refer [reg-event-fx]]))

(reg-event-fx
 :log-in ;; cofx {:db db :dispatch [:set-active-nav :saved]}
 (fn [{:keys [db]} [_ {:keys [email password]}]]
   (let [user (get-in db [:users email])
         correct-password? (= (get-in user [:profile :password]) password)]
     (cond
       (not user)
       {:db (assoc-in db [:errors :email] "User not found")}

       (not correct-password?)
       {:db (assoc-in db [:errors :email] "Wrong password")}

       correct-password?
       {:db (-> db
                (assoc-in [:auth :uid] email)
                (update-in [:errors] dissoc :email))
        :dispatch [:set-active-nav :saved]}))))
