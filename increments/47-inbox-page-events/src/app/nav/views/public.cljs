(ns app.nav.views.public
  (:require [re-frame.core :as rf]
            [app.router :as router]
            [app.nav.views.nav-item :refer [nav-item]]
            ["@smooth-ui/core-sc" :refer [Box]]))

(defn public
  []
  (let [active-page @(rf/subscribe [:active-page])
        nav-items [{:id :recipes
                    :name "Recipes"
                    :href (router/path-for :recipes)
                    :dispatch #(rf/dispatch [:set-active-nav :recipes])}
                   {:id :become-a-chef
                    :name "Chef"
                    :href (router/path-for :become-a-chef)
                    :dispatch #(rf/dispatch [:set-active-nav :become-a-chef])}
                   {:id :sign-up
                    :name "Sign up"
                    :href (router/path-for :sign-up)
                    :dispatch #(rf/dispatch [:set-active-nav :sign-up])}
                   {:id :log-in
                    :name "Log in"
                    :href (router/path-for :log-in)
                    :dispatch #(rf/dispatch [:set-active-nav :log-in])}]]
    [:> Box {:display "flex"
             :justify-content "flex-end"
             :py 1}
     (for [{:keys [id name href dispatch]} nav-items]
       [nav-item {:key id
                  :id id
                  :name name
                  :href href
                  :dispatch dispatch
                  :active-page active-page}])]))
