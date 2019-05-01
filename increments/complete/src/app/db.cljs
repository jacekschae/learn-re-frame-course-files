(ns app.db
  (:require [re-frame.core :as rf]
            [app.spec :refer [check-spec-interceptor]]))

(def initial-app-db {:auth {:uid nil}
                     :errors {}
                     :inboxes {:inbox-01 {:participants #{"mike@mailinator.com" "jade@mailinator.com"}
                                          :messages [{:message "first message"
                                                      :author "mike@mailinator.com"
                                                      :created-at 1544614386378}
                                                     {:message "second message"
                                                      :author "jade@mailinator.com"
                                                      :created-at 1544514356378}
                                                     {:message "third message"
                                                      :author "mike@mailinator.com"
                                                      :created-at 1544414336378}
                                                     {:message "fourth message"
                                                      :author "mike@mailinator.com"
                                                      :created-at 1544314316378}]}
                               :inbox-02 {:participants #{"mike@mailinator.com" "mark@mailinator.com"}
                                          :messages [{:message "first message"
                                                      :author "mike@mailinator.com"
                                                      :created-at 1544714386378}
                                                     {:message "second message"
                                                      :author "mark@mailinator.com"
                                                      :created-at 1544614386378}
                                                     {:message "third message"
                                                      :author "mike@mailinator.com"
                                                      :created-at 1544514386378}
                                                     {:message "fourth message"
                                                      :author "mike@mailinator.com"
                                                      :created-at 1544414386378}]}}
                     :nav {:active-page :recipes
                           :active-nav :recipes
                           :active-modal nil
                           :active-recipe nil
                           :active-inbox nil}
                     :recipes {}
                     :users {"mike@mailinator.com" {:uid "mike@mailinator.com"
                                                    :profile {:first-name "Mike"
                                                              :last-name "Jordan"
                                                              :img "https://res.cloudinary.com/schae/image/upload/f_auto,h_400,q_80/v1548196567/cheffy/mike.jpg"
                                                              :email "mike@mailinator.com"
                                                              :password "password"}
                                                    :role :user
                                                    :saved #{}
                                                    :inboxes {"jade@mailinator.com" {:id :inbox-01
                                                                                     :updated-at 1538697210534
                                                                                     :notifications 3}
                                                              "mark@mailinator.com" {:id :inbox-02
                                                                                     :notifications 6
                                                                                     :updated-at 1538697210537}}}
                             "jade@mailinator.com" {:uid "jade@mailinator.com"
                                                    :profile {:first-name "Jade"
                                                              :last-name "Miller"
                                                              :img "https://res.cloudinary.com/schae/image/upload/f_auto,q_80/v1548196567/cheffy/jade.jpg"
                                                              :email "jade@mailinator.com"
                                                              :password "password"}
                                                    :role :user
                                                    :saved #{}
                                                    :inboxes {"mike@mailinator.com" {:id :inbox-01
                                                                                     :updated-at 1538697210534
                                                                                     :notifications 3}}}
                             "mark@mailinator.com" {:uid "mark@mailinator.com"
                                                    :profile {:first-name "Mark"
                                                              :last-name "Slack"
                                                              :img "https://res.cloudinary.com/schae/image/upload/f_auto,q_80/v1548196567/cheffy/mark.jpg"
                                                              :email "mark@mailinator.com"
                                                              :password "password"}
                                                    :role :user
                                                    :saved #{}
                                                    :inboxes {"mike@mailinator.com" {:id :inbox-02
                                                                                     :notifications 6
                                                                                     :updated-at 1538697210537}}}}})

(rf/reg-event-fx
 :initialize-db
 [(rf/inject-cofx :local-store-user)
  check-spec-interceptor]
 (fn [{:keys [local-store-user]} _]
   {:db (assoc-in initial-app-db [:auth] local-store-user)}))
