(ns app.inbox.views.inbox-card
  (:require [re-frame.core :as rf]
            [app.router :as router]
            [app.helpers :as h]
            ["@smooth-ui/core-sc" :refer [Box Typography]]
            ["styled-icons/material/NotificationsActive" :refer [NotificationsActive]]
            ["styled-icons/material/NotificationsNone" :refer [NotificationsNone]]
            ["styled-icons/boxicons-regular/MessageRounded" :refer [MessageRounded]]))

(defn inbox-card
  [{:keys [uid id notifications? notifications updated-at]}]
  (let [user-image @(rf/subscribe [:user-image uid])]
    [:> Box {:as "a"
             :href (router/path-for :inbox :inbox-id id)
             :class "inbox-card"
             :on-click (when notifications? #(rf/dispatch [:clear-notifications {:inbox uid}]))}
     [:> Box {:display "flex"
              :align-items "center"
              :p 3}
      [:img.img-circle {:src user-image
                        :alt "user image"}
       [:> Box {:my 10
                :display "flex"
                :align-items "flex-start"}
        (if notifications?
          [:> Box {:display "flex"
                   :align-items "center"}
           [:> Box
            [:> NotificationsActive {:size 20}]]
           [:> Box {:pl 10}
            notifications]]
          [:> NotificationsNone {:size 20}])
        [:> Box {:display "flex"
                 :align-items "center"
                 :pl 5}
         [:> Box
          [:> MessageRounded {:size 20}]]
         [:> Box
          (h/time-ago updated-at)]]]]]]))
