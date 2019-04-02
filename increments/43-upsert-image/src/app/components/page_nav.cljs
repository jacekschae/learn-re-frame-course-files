(ns app.components.page-nav
  (:require [app.router :as router]
            ["@smooth-ui/core-sc" :refer [Box Button Typography]]
            ["styled-icons/fa-solid/ChevronLeft" :refer [ChevronLeft]]))

(defn page-nav
  [{:keys [left center right]}]
  [:> Box {:py 20
           :display "flex"
           :justify-content "space-between"
           :align-items "center"}
   [:> Box
    (when left
      [:> Button {:as "a"
                  :my 20
                  :variant "light"
                  :aria-label "Back"
                  :href (router/path-for left)}
       [:> ChevronLeft {:size 16}]])]
   [:> Box
    [:> Typography {:variant "h2"
                    :py 20
                    :font-weight 700}
     center]]
   [:> Box
    (when right
      right)]])
