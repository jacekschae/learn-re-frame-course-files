(ns app.recipes.views.recipe-image
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [app.components.form-group :refer [form-group]]
            ["@smooth-ui/core-sc" :refer [Box Button Typography
                                          Modal ModalContent ModalDialog ModalBody ModalFooter]]))

(defn recipe-image
  []
  (let [initial-values {:img ""}
        values (r/atom initial-values)
        {:keys [img name]} @(rf/subscribe [:recipe])
        author? @(rf/subscribe [:author?])
        open-modal (fn [{:keys [modal-name recipe]}]
                     (rf/dispatch [:open-modal modal-name])
                     (reset! values recipe))
        save (fn [img]
               (rf/dispatch [:upsert-image img])
               (reset! values initial-values))]

    (fn []
      (let [active-modal @(rf/subscribe [:active-modal])]
        [:<>
         [:> Box {:class (when author? "editable")
                  :background-image (str "url(" (or img "/img/placeholder.jpg") ")")
                  :background-size "cover"
                  :min-height "400px"
                  :border-radius 10
                  :alt name
                  :on-click (when author? #(open-modal {:modal-name :image-editor
                                                        :recipe {:img img}}))}]
         (when author?
           [:> Modal {:opened (= active-modal :image-editor)
                      :on-close #(rf/dispatch [:close-modal])}
            [:> ModalDialog
             [:> ModalContent {:border-radius 10}
              [:> Typography {:p 15
                              :variant "h4"}
               "Image"]
              [:> ModalBody
               [form-group {:id :img
                            :label "URL"
                            :type "text"
                            :values values}]]
              [:> ModalFooter
               [:<>
                [:> Button {:on-click #(rf/dispatch [:close-modal])
                            :variant "light"}
                 "Cancel"]
                [:> Button {:on-click #(save @values)}
                 "Save"]]]]]])]))))
