(ns app.recipes.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :recipes
 (fn [db _]
   (:recipes db)))

(reg-sub
 :drafts
 :<- [:recipes]
 :<- [:uid]
 (fn [[recipes uid] _]
   (let [filters [#(= (:public? %) false) #(= (:cook %) uid)]]
     (filter (apply every-pred filters) (vals recipes)))))

(reg-sub
 :public
 :<- [:recipes]
 (fn [recipes _]
   (filter #(= (:public? %) true) (vals recipes))))

(reg-sub
 :saved
 :<- [:recipes]
 :<- [:user]
 (fn [[recipes user] _]
   (let [saved (:saved user)]
     (filter #(contains? saved (:id %)) (vals recipes)))))

(reg-sub
 :recipe
 :<- [:recipes]
 :<- [:active-recipe]
 (fn [[recipes active-recipe] _]
   (get recipes active-recipe)))

(reg-sub
 :author?
 :<- [:recipe]
 :<- [:uid]
 (fn [[recipe uid] _]
   (= uid (:cook recipe))))

(reg-sub
 :ingredients
 :<- [:recipe]
 (fn [recipe _]
   (let [ingredients (:ingredients recipe)]
     (->> ingredients
          (vals)
          (sort-by :order)))))

(reg-sub
 :steps
 :<- [:recipe]
 (fn [recipe _]
   (let [steps (:steps recipe)]
     (->> steps
          (vals)
          (sort-by :order)))))
