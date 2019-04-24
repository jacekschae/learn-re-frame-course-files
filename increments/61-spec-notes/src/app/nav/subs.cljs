(ns app.nav.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
 :nav
 (fn [db _]
   (get db :nav)))

(reg-sub
 :active-nav
 :<- [:nav]
 (fn [nav _]
   (get nav :active-nav)))

(reg-sub
 :active-page
 :<- [:nav]
 (fn [nav _]
   (get nav :active-page)))

(reg-sub
 :active-modal
 :<- [:nav]
 (fn [nav _]
   (get nav :active-modal)))

(reg-sub
 :active-inbox
 :<- [:nav]
 (fn [nav _]
   (:active-inbox nav)))

(reg-sub
 :active-recipe
 :<- [:nav]
 (fn [nav _]
   (:active-recipe nav)))
