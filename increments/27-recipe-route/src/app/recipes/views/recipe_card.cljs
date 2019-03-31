(ns app.recipes.views.recipe-card
  (:require [app.router :as router]
            ["@smooth-ui/core-sc" :refer [Button Box Typography]]
            ["styled-icons/fa-solid/Heart" :refer [Heart]]
            ["styled-icons/fa-regular/Clock" :refer [Clock]]))

(defn recipe-card
  [{:keys [name saved-count prep-time img id]}]
  [:> Box {:as "a"
           :href (router/path-for :recipes)
           :class "recipe-card"}
   [:> Box {:class "img-card"
            :background-image (str "url(" (or img "/img/placeholder.jpg") ")")
            :background-size "cover"
            :min-height "280px"
            :alt name}]
   [:> Box {:p 2}
    [:> Typography {:variant "h6"
                    :font-weight 700}
     name]]
   [:> Box {:pl 2
            :pb 2
            :display "flex"}
    [:> Box {:display "flex"
             :align-items "center"}
     [:> Heart {:size 16}]
     [:> Box {:pl 10}
      saved-count]]
    [:> Box {:display "flex"
             :align-items "center"
             :pl 5}
     [:> Clock {:size 16}]
     [:> Box {:pl 10}
      prep-time " min"]]]])
