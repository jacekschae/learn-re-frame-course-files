(ns app.become-a-chef.views.become-a-chef
  (:require [app.components.page-nav :refer [page-nav]]
            [app.become-a-chef.views.agreement :refer [agreement]]
            ["@smooth-ui/core-sc" :refer [Row Col Box Typography]]
            ["styled-icons/fa-regular/CheckCircle" :refer [CheckCircle]]))

(defn become-a-chef
  []
  (let [steps [{:header "Create your recipes for free"
                :sub-header "Start by creating a draft. Add name and cooking time. Make your recipe stand out by adding picture and describe all needed ingredients and steps."}
               {:header "Publish and get noticed"
                :sub-header "Easily publish your recipes and allow people to get in touch with you via one click. Await a message for your first cooking event."}
               {:header "Cook for the first time"
                :sub-header "Talk to the interested person and agree on the date, time, and location. Show your best at the even and become a chef."}]]
    [:> Box
     [page-nav {:center "Become a Chef"
                :right [agreement]}]
     [:> Box {:py 5}
      [:> Row
       [:> Col {:xs 12 :md 6}
        [:img.img-rounded {:src "https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1546889699/cheffy/become-a-chef.jpg"
                           :alt "become a chef"}]]
       [:> Col {:xs 12 :md 6}
        (for [{:keys [header sub-header]} steps]
          ^{:key header}
          [:> Box {:py 4
                   :display "flex"
                   :justify-content "flex-start"
                   :align-items "baseline"}
           [:> Box {:p 10}
            [:> CheckCircle {:size 22
                             :color "#27AB83"}]]
           [:> Box {:p 10}
            [:> Typography {:variant "h4"}
             header]
            sub-header]])]]]]))
