(ns app.nav.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :active-nav
 (fn [db _]
   (get-in db [:nav :active-nav])))

(reg-sub
 :active-page
 (fn [db _]
   (get-in db [:nav :active-page])))

(reg-sub
 :active-modal
 (fn [db _]
   (get-in db [:nav :active-modal])))
