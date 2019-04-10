(ns app.inbox.views.inbox-page
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [app.components.page-nav :refer [page-nav]]
            [app.inbox.views.message-card :refer [message-card]]
            ["@smooth-ui/core-sc" :refer [Row Col Box Button Input]]))

(defn inbox-page
  []
  (let [initial-values {:message ""}
        values (r/atom initial-values)
        save (fn [event {:keys [message]}]
               (.preventDefault event)
               (rf/dispatch [:insert-message {:message (str/trim message)}])
               (reset! values initial-values))]
    (fn []
      (let [inbox-messages @(rf/subscribe [:inbox-messages])
            conversation-with @(rf/subscribe [:conversation-with])]
        [:> Box
         [page-nav {:left :inboxes
                    :center conversation-with}]
         [:> Row {:justify-content "center"}
          [:> Col {:xs 12 :md 6}
           [:> Box {:display "flex"}
            [:> Box {:width "100%"}
             [:form {:on-submit #(save % @values)}
              [:> Input {:control true
                         :value (:message @values)
                         :on-change #(swap! values assoc :message (.. % -target -value))}]]]
            [:> Box
             [:> Button {:size "sm"
                         :mt "6px"
                         :ml -50
                         :on-click #(save % @values)}
              "Send"]]]
           [:> Box {:background "white"
                    :border-radius 10
                    :mt 10}
            (for [message inbox-messages]
              ^{:key (:created-at message)}
              [message-card message])]]]]))))
