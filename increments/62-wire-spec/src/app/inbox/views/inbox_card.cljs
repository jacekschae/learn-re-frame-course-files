(ns app.inbox.views.inbox-card
  (:require [re-frame.core :as rf]
            [app.router :as router]
            [app.helpers :as h]
            ["@smooth-ui/core-sc" :refer [Box Typography]]
            ["styled-icons/material/NotificationsActive" :refer [NotificationsActive]]
            ["styled-icons/material/NotificationsNone" :refer [NotificationsNone]]
            ["styled-icons/boxicons-regular/MessageRounded" :refer [MessageRounded]]))

(defn inbox-card
  [{:keys [uid-inbox inbox-id notifications? notifications updated-at]}]
  (let [user-image @(rf/subscribe [:user-image uid-inbox])]
    [:> Box {:as "a"
             :class "inbox-card"
             :href (router/path-for :inbox :inbox-id inbox-id)
             :on-click (when notifications? #(rf/dispatch [:clear-notifications uid-inbox]))}
     [:> Box {:display "flex"
              :align-items "center"
              :p 3}
      [:img {:src user-image
             :alt "user image"
             :class "img-circle"}]
      [:> Box {:pl 3}
       [:> Typography {:variant "h5"}
        uid-inbox]
       [:> Box {:my 10
                :display "flex"
                :align-items "center"}
        (if notifications?
          [:> Box {:display "flex"}
           [:> Box
            [:> NotificationsActive {:size 20}]]
           [:> Box {:pl 10}
            notifications]]
          [:> NotificationsNone {:size 20}])
        [:> Box {:display "flex"
                 :pl 5}
         [:> Box
          [:> MessageRounded {:size 20}]]
         [:> Box {:pl 10}
          (h/time-ago updated-at)]]]]]]))
