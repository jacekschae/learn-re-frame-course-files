(ns app.recipes.events
  (:require [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :save-recipe
 (fn [db [_ recipe-id]]
   (let [uid (get-in db [:auth :uid])]
     (-> db
         (update-in [:users uid :saved] conj recipe-id)
         (update-in [:recipes recipe-id :saved-count] inc)))))
