(ns app.components.form-group
  (:require ["@smooth-ui/core-sc" :refer [FormGroup Label Input]]))

(defn form-group
  [{:keys [id label type values]}]
  [:> FormGroup
   [:> Label {:html-for id} label]
   [:> Input {:control true
              :id id
              :type type
              :value (id @values)
              :on-change #(swap! values assoc id (.. % -target -value))}]])
