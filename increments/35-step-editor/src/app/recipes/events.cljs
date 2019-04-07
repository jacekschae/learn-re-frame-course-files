(ns app.recipes.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx]]))

(reg-event-db
 :save-recipe
 (fn [db [_ recipe-id]]
   (let [uid (get-in db [:auth :uid])]
     (-> db
         (update-in [:users uid :saved] conj recipe-id)
         (update-in [:recipes recipe-id :saved-count] inc)))))

(reg-event-fx
 :delete-ingredient
 (fn [{:keys [db]} [_ ingredient-id]]
   (let [recipe-id (get-in db [:nav :active-recipe])]
     {:db (update-in db [:recipes recipe-id :ingredients] dissoc ingredient-id)
      :dispatch [:close-modal]})))

(reg-event-fx
 :upsert-ingredient
 (fn [{:keys [db]} [_ {:keys [id name amount measure]}]]
   (let [recipe-id (get-in db [:nav :active-recipe])
         ingredients (get-in db [:recipes recipe-id :ingredients])
         order (or (get-in ingredients [id :order])
                   (inc (count ingredients)))]
     {:db (assoc-in db [:recipes recipe-id :ingredients id] {:id id
                                                             :order order
                                                             :name name
                                                             :amount amount
                                                             :measure measure})
      :dispatch [:close-modal]})))
