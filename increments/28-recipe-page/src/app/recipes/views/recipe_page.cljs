(ns app.recipes.views.recipe-page
  (:require [re-frame.core :as rf]
            [app.components.page-nav :refer [page-nav]]
            ["@smooth-ui/core-sc" :refer [Box Row Col]]))

(defn recipe-page
  []
  (let [{:keys [name]} @(rf/subscribe [:recipe])]
    [:> Box
     [page-nav {:center name}]
     [:> Box
      [:> Row
       [:> Col {:xs 12 :sm 6}
        [:> Box {:pb 20}
         "recipe-info"]
        [:> Box {:pb 20}
         "recipe-image"]
        [:> Box {:pb 20}
         "recipe-ingredients"]]
       [:> Col {:xs 12 :sm 6}
        [:> Box {:pb 20}
         "recipe-steps"]]]]]))
