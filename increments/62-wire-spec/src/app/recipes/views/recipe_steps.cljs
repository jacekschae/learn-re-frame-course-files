(ns app.recipes.views.recipe-steps
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [clojure.string :as str]
            [app.components.modal :refer [modal]]
            [app.components.form-group :refer [form-group]]
            ["@smooth-ui/core-sc" :refer [Box Typography Row Col Button Textarea]]
            ["styled-icons/fa-solid/Plus" :refer [Plus]]))

(defn recipe-steps
  []
  (let [initial-values {:id nil :desc ""}
        values (r/atom initial-values)
        open-modal (fn [{:keys [modal-name step]}]
                     (rf/dispatch [:open-modal modal-name])
                     (reset! values step))
        save (fn [{:keys [id desc]}]
               (when (not (str/blank? desc))
                 (rf/dispatch [:upsert-step {:id (or id (keyword (str "step-" (random-uuid))))
                                             :desc (str/trim desc)}])
                 (reset! values initial-values)))]

    (fn []
      (let [steps @(rf/subscribe [:steps])
            author? @(rf/subscribe [:author?])]
        [:> Box {:background-color "white"
                 :border-radius 10
                 :p 2
                 :pt 0}
         [:> Box {:display "flex"
                  :justify-content "flex-start"}
          [:> Box
           [:> Typography {:variant "h5"
                           :py 15
                           :m 0}
            "Steps"]]
          [:> Box {:my 15
                   :pl 10}
           [:> Button {:variant "light"
                       :size "sm"
                       :on-click #(open-modal {:modal-name :step-editor
                                               :step initial-values})}
            [:> Plus {:size 12}]]]]
         [:> Box
          (for [{:keys [id desc] :as step} steps]
            ^{:key id}
            [:> Box {:py 10}
             [:> Row (when author?
                       {:on-click #(open-modal {:modal-name :step-editor
                                                :step step})
                        :class "editable"})
              [:> Col {:py 10}
               desc]]])
          (when author?
            [modal {:modal-name :step-editor
                    :header "Step"
                    :body [:<>
                           [form-group {:id :desc
                                        :label "Description"
                                        :type "text"
                                        :values values
                                        :element Textarea}]]
                    :footer [:<>
                             (when-let [step-id (:id @values)]
                               [:a {:href "#"
                                    :on-click #(when (js/confirm "Are you sure?")
                                                 (rf/dispatch [:delete-step step-id]))}
                                "Delete"])
                             [:> Button {:variant "light"
                                         :mx 10
                                         :on-click #(rf/dispatch [:close-modal])}
                              "Cancel"]
                             [:> Button {:on-click #(save @values)}
                              "Save"]]}])]]))))
