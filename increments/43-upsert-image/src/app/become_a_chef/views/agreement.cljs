(ns app.become-a-chef.views.agreement
  (:require [re-frame.core :as rf]
            [app.router :as router]
            [app.components.modal :refer [modal]]
            ["@smooth-ui/core-sc" :refer [Button Box]]))

(defn agreement
  []
  (let [logged-in? @(rf/subscribe [:logged-in?])]
    (if logged-in?
      [:> Box
       [:> Button {:on-click #(rf/dispatch [:open-modal :agreement])}
        "Get Started"]
       [modal {:modal-name :agreement
               :header "Become a Chef"
               :body "I agree to cook"
               :footer [:<>
                        [:> Button {:on-click #(rf/dispatch [:close-modal])
                                    :variant "light"}
                         "Cancel"]
                        [:> Button {:on-click #(rf/dispatch [:agree-to-cook])}
                         "Agree"]]}]]
      [:> Button {:as "a"
                  :color "white"
                  :href (router/path-for :sign-up)
                  :on-click #(rf/dispatch [:set-active-nav :sign-up])}
       "Sign up"])))
