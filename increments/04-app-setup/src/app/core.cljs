(ns app.core
  (:require [reagent.core :as r]))

(defn app
  []
  [:div "Cheffy"])

(defn ^:dev/after-load start
  []
  (r/render [app]
    (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))
