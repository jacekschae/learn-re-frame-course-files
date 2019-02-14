(ns app.recipes.views.recipes
  (:require [app.components.page-nav :refer [page-nav]]))

(defn recipes
  []
  [page-nav {:center "Recipes"}])
