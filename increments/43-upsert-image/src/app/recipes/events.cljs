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
 :delete-step
 (fn [{:keys [db]} [_ step-id]]
   (let [recipe-id (get-in db [:nav :active-recipe])]
     {:db (update-in db [:recipes recipe-id :steps] dissoc step-id)
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

(reg-event-fx
 :upsert-step
 (fn [{:keys [db]} [_ {:keys [id desc]}]]
   (let [recipe-id (get-in db [:nav :active-recipe])
         steps (get-in db [:recipes recipe-id :steps])
         order (or (get-in steps [id :order])
                   (inc (count steps)))]
     {:db (assoc-in db [:recipes recipe-id :steps id] {:id id
                                                       :order order
                                                       :desc desc})
      :dispatch [:close-modal]})))

(reg-event-fx
 :upsert-recipe
 (fn [{:keys [db]} [_ {:keys [name prep-time]}]]
   (let [recipe-id (get-in db [:nav :active-recipe])
         id (or recipe-id (keyword (str "recipe-" (random-uuid))))
         uid (get-in db [:auth :uid])]
     {:db (update-in db [:recipes id] merge {:id id
                                             :name name
                                             :prep-time prep-time
                                             :cook uid
                                             :public? false})
      :dispatch [:close-modal]})))

(reg-event-fx
 :delete-recipe
 (fn [{:keys [db]} _]
   (let [recipe-id (get-in db [:nav :active-recipe])]
     {:db (update-in db [:recipes] dissoc recipe-id)
      :dispatch-n [[:set-active-page :recipes]
                   [:set-active-nav :recipes]]
      :navigate-to {:path "/recipes/"}})))

(reg-event-fx
 :publish-recipe
 (fn [{:keys [db]} [_ {:keys [price]}]]
   (let [recipe-id (get-in db [:nav :active-recipe])]
     {:db (update-in db [:recipes recipe-id] merge {:price price
                                                    :public? true})
      :dispatch [:close-modal]})))

(reg-event-fx
 :unpublish-recipe
 (fn [{:keys [db]} _]
   (let [recipe-id (get-in db [:nav :active-recipe])]
     {:db (assoc-in db [:recipes recipe-id :public?] false)
      :dispatch [:close-modal]})))
