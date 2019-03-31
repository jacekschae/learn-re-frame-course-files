(ns app.recipes.views.recipe-info
  (:require [re-frame.core :as rf]
            ["@smooth-ui/core-sc" :refer [Box Typography]]
            ["styled-icons/fa-solid/Heart" :rename {Heart SolidHeart}]
            ["styled-icons/fa-regular/Clock" :refer [Clock]]
            ["styled-icons/fa-regular/Heart" :refer [Heart]]))

(defn recipe-info
  []
  (let [{:keys [id cook saved-count prep-time]} @(rf/subscribe [:recipe])
        {:keys [uid saved]} @(rf/subscribe [:user])
        logged-in? @(rf/subscribe [:logged-in?])
        saved? (contains? saved id)
        author? (= cook uid)
        can-save? (and logged-in? (not author?) (not saved?))]
    [:> Box {:p 2
             :background-color "white"
             :border-radius 10}
     [:> Typography {:variant "h5"}
      cook]
     [:> Box {:display "flex"}
      [:> Box {:display "flex"
               :align-items "center"}
       (if saved?
         [:> SolidHeart {:size 16
                         :color "#D64545"}]
         [:> Box {:as (if can-save? "a" "span")
                  :href "#"
                  :on-click (when can-save? #(rf/dispatch [:save-recipe id]))}
          [:> Heart {:size 16}]])
       [:> Box {:pl 10}
        saved-count]]
      [:> Box {:display "flex"
               :align-items "center"
               :pl 5}
       [:> Clock {:size 16}]
       [:> Box {:pl 10}
        prep-time " min"]]]]))
