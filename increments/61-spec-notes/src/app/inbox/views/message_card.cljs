(ns app.inbox.views.message-card
  (:require [re-frame.core :as rf]
            [app.helpers :as h]
            ["@smooth-ui/core-sc" :refer [Box Typography]]))

(defn message-card
  [{:keys [message author created-at]}]
  (let [user-image @(rf/subscribe [:user-image author])]
    [:> Box {:p 2
             :pl 3}
     [:> Box {:display "flex"
              :justify-content "flex-start"}
      [:> Box {:py 3}
       [:img {:src user-image
              :alt "user image"
              :class "img-circle-sm"}]]
      [:> Box {:pl 20
               :pt 20}
       message
       [:> Box {:pt 10}
        [:> Typography {:color "#9FB3C8"
                        :font-size 1}
         (h/time-ago created-at)]]]]]))
