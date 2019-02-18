(ns app.auth.views.profile
  (:require [app.components.page-nav :refer [page-nav]]))

(defn profile
  []
  [page-nav {:center "Profile"}])
