(ns app.recipes.views.recipe-list
  (:require ["@smooth-ui/core-sc" :refer [Box]]))

(defn recipe-list
  [items]
  [:> Box {:class "cards"}
   (for [recipe items]
     ^{:key (:id recipe)}
     (:name recipe))])
