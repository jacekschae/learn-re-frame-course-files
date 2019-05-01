(ns app.recipes.views.publish-recipe
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.modal :refer [modal]]
            [app.components.form-group :refer [form-group]]
            [app.helpers :as h]
            ["@smooth-ui/core-sc" :refer [Button Box]]))

(defn publish-recipe
  []
  (let [initial-values {:price ""}
        values (r/atom initial-values)
        open-modal (fn [{:keys [modal-name recipe]}]
                     (rf/dispatch [:open-modal modal-name])
                     (reset! values recipe))
        publish (fn [event {:keys [price]}]
                  (.preventDefault event)
                  (rf/dispatch [:publish-recipe {:price (js/parseInt price)}])
                  (reset! values initial-values))]
    (fn []
      (let [{:keys [price public?]} @(rf/subscribe [:recipe])]
        [:> Box
         (cond
           public? [:> Button {:on-click #(open-modal {:modal-name :publish-recipe})}
                    (h/format-price price)]
           (not public?) [:> Button {:on-click #(open-modal {:modal-name :publish-recipe
                                                             :recipe {:price price}})}
                          "Publish"])
         [modal {:modal-name :publish-recipe
                 :header "Recipe"
                 :body [:form {:on-submit #(publish % @values)}
                        [form-group {:id :price
                                     :label "Price (in cents)"
                                     :values values
                                     :type "number"}]]
                 :footer [:<>
                          (when public?
                            [:a {:href "#"
                                 :on-click #(rf/dispatch [:unpublish-recipe])}
                             "Unpublish"])
                          [:> Button {:on-click #(rf/dispatch [:close-modal])
                                      :variant "light"}
                           "Cancel"]
                          [:> Button {:on-click #(publish % @values)}
                           "Publish"]]}]]))))
