(ns app.errors.events
  (:require [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :has-value?
 (fn [db [_ id]]
   (assoc-in db [:errors id] "Can't be blank")))

(reg-event-db
 :clear-error
 (fn [db [_ id]]
   (update-in db [:errors] dissoc id)))
