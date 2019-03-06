(ns app.router
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :as rf]))

(def routes ["/" {""              :recipes
                  "become-a-chef" :become-a-chef
                  "saved/"        :saved
                  "recipes/"      {"" :recipes
                                   [:recipe-id] :recipe}
                  "inbox/"        {"" :inboxes
                                   [:inbox-id] :inbox}
                  "profile"       :profile
                  "sign-up"       :sign-up
                  "log-in"        :log-in}])

(def history
  (let [dispatch #(rf/dispatch [:route-changed %])
        match #(bidi/match-route routes %)]
    (pushy/pushy dispatch match)))

(defn start!
  []
  (pushy/start! history))

(defn path-for
  [route]
  (bidi/path-for routes route))

(defn set-token!
  [token]
  (pushy/set-token! history token))
