(ns app.auth.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :uid
 (fn [db _]
   (get-in db [:auth :uid])))

(reg-sub
 :users
 (fn [db _]
   (:users db)))

(reg-sub
 :logged-in?
 :<- [:uid]
 (fn [uid _]
   (boolean uid)))

(reg-sub
 :user-profile
 :<- [:uid]
 :<- [:users]
 (fn [[uid users] _]
   (get-in users [uid :profile])))

(reg-sub
 :user
 :<- [:uid]
 :<- [:users]
 (fn [[uid users] _]
   (get users uid)))

(reg-sub
 :chef?
 :<- [:uid]
 :<- [:users]
 (fn [[uid users] _]
   (= (get-in users [uid :role]) :chef)))

(reg-sub
 :user-image
 :<- [:users]
 (fn [users [_ uid]]
   (get-in users [uid :profile :img])))
