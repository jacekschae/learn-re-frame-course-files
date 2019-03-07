(ns app.recipes.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :drafts
 (fn [db _]
   (let [recipes (vals (get-in db [:recipes]))
         uid (get-in db [:auth :uid])
         filters [#(= (:public? %) false) #(= (:cook %) uid)]]
     (filter (apply every-pred filters) recipes))))

(reg-sub
 :public
 (fn [db _]
   (let [recipes (vals (get-in db [:recipes]))]
     (filter #(= (:public? %) true) recipes))))
