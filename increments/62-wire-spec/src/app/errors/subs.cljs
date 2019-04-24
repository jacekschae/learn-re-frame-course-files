(ns app.errors.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :errors
 (fn [db _]
   (:errors db)))
