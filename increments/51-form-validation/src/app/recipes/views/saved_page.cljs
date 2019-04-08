(ns app.recipes.views.saved-page
  (:require [re-frame.core :as rf]
            [app.components.page-nav :refer [page-nav]]
            [app.recipes.views.recipe-list :refer [recipe-list]]
            ["@smooth-ui/core-sc" :refer [Box Typography]]
            ["styled-icons/fa-regular/Heart" :refer [Heart]]))

(defn saved-page
  []
  (let [saved @(rf/subscribe [:saved])]
    [:> Box
     [page-nav {:center "Saved"}]
     (if (seq saved)
       [recipe-list saved]
       [:> Box {:text-align "center"}
        [:> Typography {:variant "h5"
                        :py 20}
         "Your saved recipes will apear here"]
        [:> Heart {:size 36}]])]))
