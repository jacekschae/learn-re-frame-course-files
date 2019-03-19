(ns app.recipes.views.recipe-page
  (:require [re-frame.core :as rf]
            [app.components.page-nav :refer [page-nav]]
            [app.recipes.views.recipe-info :refer [recipe-info]]
            [app.recipes.views.recipe-image :refer [recipe-image]]
            [app.recipes.views.recipe-ingredients :refer [recipe-ingredients]]
            [app.recipes.views.recipe-steps :refer [recipe-steps]]
            [app.recipes.views.recipe-editor :refer [recipe-editor]]
            ["@smooth-ui/core-sc" :refer [Box Row Col]]))

(defn recipe-page
  []
  (let [{:keys [name]} @(rf/subscribe [:recipe])
        author? @(rf/subscribe [:author?])]
    [:> Box
     [page-nav {:center (if author?
                          [recipe-editor]
                          name)}]
     [:> Box
      [:> Row
       [:> Col {:xs 12 :sm 6}
        [:> Box {:pb 20}
         [recipe-info]]
        [:> Box {:pb 20}
         [recipe-image]]
        [:> Box {:pb 20}
         [recipe-ingredients]]]
       [:> Col {:xs 12 :sm 6}
        [:> Box {:pb 20}
         [recipe-steps]]]]]]))
