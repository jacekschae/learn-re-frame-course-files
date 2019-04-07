(ns app.recipes.views.recipe-ingredients
  (:require [re-frame.core :as rf]
            ["@smooth-ui/core-sc" :refer [Box Typography Row Col]]))

(defn recipe-ingredients
  []
  (let [ingredients @(rf/subscribe [:ingredients])]
    [:> Box {:background-color "white"
             :border-radius 10
             :p 2
             :pt 0}
     [:> Box {:display "flex"
              :justify-content "flex-start"}
      [:> Box
       [:> Typography {:variant "h5"
                       :py 15
                       :m 0}
        "Ingredients"]]
      [:> Box {:my 15
               :pl 10}
       "PLUS"]]
     [:> Box
      (for [{:keys [id amount measure name]} ingredients]
        ^{:key id}
        [:> Box {:py 10}
         [:> Row
          [:> Col {:xs 3}
           amount " " measure]
          [:> Col
           name]]])]]))
