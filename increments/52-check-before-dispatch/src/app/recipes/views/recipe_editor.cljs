(ns app.recipes.views.recipe-editor
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [app.components.modal :refer [modal]]
            [app.components.form-group :refer [form-group]]
            ["@smooth-ui/core-sc" :refer [Row Col Button Typography]]
            ["styled-icons/fa-solid/Plus" :refer [Plus]]))

(defn recipe-editor
  []
  (let [initial-values {:name "" :prep-time ""}
        values (r/atom initial-values)
        open-modal (fn [{:keys [modal-name recipe]}]
                     (rf/dispatch [:open-modal modal-name])
                     (reset! values recipe))
        save (fn [event {:keys [name prep-time]}]
               (.preventDefault event)
               (rf/dispatch [:upsert-recipe {:name (str/trim name)
                                             :prep-time (js/parseInt prep-time)}])
               (reset! values initial-values))]
    (fn []
      (let [{:keys [name prep-time]} @(rf/subscribe [:recipe])
            active-page @(rf/subscribe [:active-page])]
        [:<>
         (if (= active-page :recipe)
           [:> Typography {:variant "h2"
                           :class "editable"
                           :font-weight 700
                           :on-click #(open-modal {:modal-name :recipe-editor
                                                   :recipe {:name name :prep-time prep-time}})}
            name]
           [:> Button {:on-click #(open-modal {:modal-name :recipe-editor
                                               :recipe initial-values})}
            [:> Plus {:size 16}]])
         [modal {:modal-name :recipe-editor
                 :header "Recipe"
                 :body [:form {:on-submit #(save % @values)}
                        [:> Row
                         [:> Col
                          [form-group {:id :name
                                       :label "Name"
                                       :type "text"
                                       :values values}]]
                         [:> Col {:xs 4}
                          [form-group {:id :prep-time
                                       :label "Cooking time (min)"
                                       :type "number"
                                       :values values
                                       :on-key-down #(when (= (.-which %) 13)
                                                       (save % @values))}]]]]
                 :footer [:<>
                          (when name
                            [:a {:href "#"
                                 :on-click #(when (js/confirm "Are you sure?")
                                              (rf/dispatch [:delete-recipe]))}
                             "Delete"])
                          [:> Button {:variant "light"
                                      :on-click #(rf/dispatch [:close-modal])}
                           "Cancel"]
                          [:> Button {:on-click #(save % @values)}
                           "Save"]]}]]))))
