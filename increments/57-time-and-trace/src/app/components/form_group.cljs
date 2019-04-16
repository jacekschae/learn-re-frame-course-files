(ns app.components.form-group
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
            ["@smooth-ui/core-sc" :refer [FormGroup Label Input Textarea ControlFeedback]]))

(defn form-group
  [{:keys [id label type values textarea on-key-down]}]
  (let [errors @(rf/subscribe [:errors])
        input-error (get errors id)
        is-empty? (str/blank? (id @values))
        valid (if input-error
                false
                nil)
        validate (fn []
                   (if is-empty?
                     (rf/dispatch [:has-value? id])
                     (rf/dispatch [:clear-error id])))]
    [:> FormGroup
     [:> Label {:html-for id} label]
     (if textarea
       [:> Textarea {:control true
                     :valid valid
                     :on-blur validate
                     :rows 6
                     :id id
                     :type type
                     :value (id @values)
                     :on-change #(swap! values assoc id (.. % -target -value))}]
       [:> Input {:control true
                  :valid valid
                  :on-blur validate
                  :id id
                  :type type
                  :value (id @values)
                  :on-change #(swap! values assoc id (.. % -target -value))
                  :on-key-down on-key-down}])
     (when input-error
       [:> ControlFeedback {:valid false}
        input-error])]))
