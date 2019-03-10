(ns app.auth.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :logged-in?
 (fn [db _]
   (boolean (get-in db [:auth :uid]))))
