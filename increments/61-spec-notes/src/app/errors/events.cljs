(ns app.errors.events
  (:require [re-frame.core :refer [reg-event-db]]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [app.spec :as spec]))

(reg-event-db
 :has-value?
 spec/check-spec-interceptor
 (fn-traced [db [_ id]]
            (assoc-in db [:errors id] "Can't be blank")))

(reg-event-db
 :clear-error
 spec/check-spec-interceptor
 (fn-traced [db [_ id]]
            (update-in db [:errors] dissoc id)))
