(ns app.auth.views.profile
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.page-nav :refer [page-nav]]
            [app.components.form-group :refer [form-group]]
            ["@smooth-ui/core-sc" :refer [Row Col Box Typography Button]]))

(defn profile
  []
  (let [{:keys [first-name last-name]} @(rf/subscribe [:user-profile])
        initial-values {:first-name first-name :last-name last-name}
        values (r/atom initial-values)]
    (fn []
      [:<>
       [page-nav {:center "Profile"
                  :right [:> Button {:variant "light"
                                     :on-click #(rf/dispatch [:log-out])}
                          "Logout"]}]
       [:> Row {:justify-content "center"}
        [:> Col {:xs 12 :sm 6}
         [:> Box {:background-color "white"
                  :border-radius 10
                  :p 3
                  :pt 1}
          [:> Typography {:variant "h4"
                          :py 10
                          :font-weight 700}
           "Personal Info"]
          [form-group {:id :first-name
                       :label "First Name"
                       :type "text"
                       :values values}]
          [form-group {:id :last-name
                       :label "Last Name"
                       :type "text"
                       :values values}]
          [:> Box {:display "flex"
                   :justify-content "flex-end"}
           [:> Button {:on-click #(rf/dispatch [:update-profile @values])}
            "Save"]]]
         [:> Box {:background-color "white"
                  :border-radius 10
                  :p 3
                  :pt 1
                  :mt 40}
          [:> Typography {:variant "h4"
                          :py 10
                          :font-weight 700}
           "Danger Zone"]
          [:> Button {:variant "danger"
                      :on-click #(when (js/confirm "This will delete your account")
                                   (rf/dispatch [:delete-account]))}
           "Delete Account"]]]]])))
