(ns app.errors.events
  (:require [re-frame.core :refer [reg-event-db]]
            [day8.re-frame.tracing :refer-macros [fn-traced]]))

(reg-event-db
 :has-value?
 (fn-traced [db [_ id]]
            (assoc-in db [:errors id] "Can't be blank")))

(reg-event-db
 :clear-error
 (fn-traced [db [_ id]]
            (update-in db [:errors] dissoc id)))
