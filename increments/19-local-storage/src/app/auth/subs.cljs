(ns app.auth.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :logged-in?
 (fn [db _]
   (boolean (get-in db [:auth :uid]))))

(reg-sub
 :active-user-profile
 (fn [db _]
   (let [uid (get-in db [:auth :uid])]
     (get-in db [:users uid :profile]))))
