(ns app.recipes.views.recipe-page
  (:require [re-frame.core :as rf]
            [app.router :as router]
            [app.components.page-nav :refer [page-nav]]
            [app.recipes.views.recipe-info :refer [recipe-info]]
            [app.recipes.views.recipe-image :refer [recipe-image]]
            [app.recipes.views.recipe-ingredients :refer [recipe-ingredients]]
            [app.recipes.views.recipe-steps :refer [recipe-steps]]
            [app.recipes.views.recipe-editor :refer [recipe-editor]]
            [app.recipes.views.publish-recipe :refer [publish-recipe]]
            [app.recipes.views.request-to-cook :refer [request-to-cook]]
            ["@smooth-ui/core-sc" :refer [Box Row Col Button]]))

(defn recipe-page
  []
  (let [{:keys [name]} @(rf/subscribe [:recipe])
        author? @(rf/subscribe [:author?])
        active-nav @(rf/subscribe [:active-nav])
        logged-in? @(rf/subscribe [:logged-in?])
        chef? @(rf/subscribe [:chef?])]
    [:> Box
     [page-nav {:left (if (= active-nav :saved)
                        :saved
                        :recipes)
                :center (if author?
                          [recipe-editor]
                          name)
                :right (cond
                         (not logged-in?) [:> Button {:as "a"
                                                      :color "white"
                                                      :href (router/path-for :sign-up)
                                                      :on-click #(rf/dispatch [:set-active-nav :sign-up])}
                                           "Sign up"]
                         (not chef?) [:> Button {:as "a"
                                                 :color "white"
                                                 :href (router/path-for :become-a-chef)
                                                 :on-click #(rf/dispatch [:set-active-nav :become-a-chef])}
                                      "Become a Chef"]
                         author? [publish-recipe]
                         (not author?) [request-to-cook])}]
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
