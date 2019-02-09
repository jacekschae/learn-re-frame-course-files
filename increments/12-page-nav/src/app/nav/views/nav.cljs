(ns app.nav.views.nav
  (:require [app.nav.views.authenticated :refer [authenticated]]
            [app.nav.views.public :refer [public]]))

(defn nav
  []
  (let [user false]
    (if user
      [authenticated]
      [public])))
