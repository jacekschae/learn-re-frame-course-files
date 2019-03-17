(ns app.nav.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :active-nav
 (fn [db _]
   (get-in db [:nav :active-nav])))
