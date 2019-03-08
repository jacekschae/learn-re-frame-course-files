(ns app.recipes.views.recipe-info
  (:require [re-frame.core :as rf]
            ["styled-icons/fa-regular/Heart" :refer [Heart]]
            ["styled-icons/fa-solid/Heart" :rename {Heart SolidHeart}]
            ["styled-icons/fa-regular/Clock" :refer [Clock]]
            ["@smooth-ui/core-sc" :refer [Box Typography]]))

(defn recipe-info
  []
  (let [{:keys [id saved-count prep-time cook]} @(rf/subscribe [:recipe])
        ; {:keys [uid saved]} @(rf/subscribe [:active-user])
        logged-in?          @(rf/subscribe [:logged-in?])
        not-logged-in?      (not logged-in?)]
        ; saved?              (contains? saved id)
        ; author?             (= cook uid)
        ; can-add-saved?      (not (or not-logged-in? author? saved?))]
    [:> Box {:p 2
             :background-color "white"
             :border-radius 10}
     [:> Box
      [:> Typography {:variant "h5"}
       cook]]
     [:> Box {:display "felx"
              :color "#486581"}
      [:> Box {:display "felx"}
       [:> SolidHeart {:size 16
                       :color "#D64545"}
        [:> Heart {:size 16}]]
       [:> Box {:pl 10}
        saved-count]]
      [:> Box {:display "felx"
               :pl 3}
       [:> Clock {:size 16}]
       [:> Box {:pl 10}
        prep-time " min"]]]]))
