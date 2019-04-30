(ns app.auth.views.log-in
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.page-nav :refer [page-nav]]
            ["@smooth-ui/core-sc" :refer [Row Col FormGroup Label Input Box Button]]))

(defn log-in
  []
  (let [initial-values {:email "" :password ""}
        values (r/atom initial-values)]
    (fn []
      [:> Row {:justify-content "center"}
       [:> Col {:xs 12 :sm 6}
        [page-nav {:center "Log in"}]
        [:> FormGroup
         [:> Label {:html-for :email} "Email"]
         [:> Input {:control true
                    :id :email
                    :type "email"
                    :value (:email @values)
                    :on-change #(swap! values assoc :email (.. % -target -value))}]]
        [:> FormGroup
         [:> Label {:html-for :password} "Password"]
         [:> Input {:control true
                    :id :password
                    :type "password"
                    :value (:password @values)
                    :on-change #(swap! values assoc :password (.. % -target -value))}]]
        [:> Box {:display "flex"
                 :justify-content "space-between"}
         [:> Box {:py 1
                  :pr 2}
          [:a {:href "#sign-up"
               :on-click #(rf/dispatch [:set-active-nav :sign-up])}
           "New to Cheffy? Create an account!"]]
         [:> Box
          [:> Button {:on-click #(js/console.log "log-in")}
           "Log in"]]]]])))
