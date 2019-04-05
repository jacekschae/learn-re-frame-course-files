(ns app.db
  (:require [re-frame.core :as rf]))

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
                     :recipes {:rec-01 {:id :rec-01
                                        :public? false
                                        :prep-time 30
                                        :name "Pesto Pasta"
                                        :img "https://res.cloudinary.com/schae/image/upload/f_auto,h_400,q_80/v1548183188/cheffy/recipes/pasta-pesto.jpg"
                                        :saved-count 4
                                        :ingredients {:ing-01 {:id :ing-01
                                                               :order 1
                                                               :name "Pasta"
                                                               :amount 250
                                                               :measure "gram"}
                                                      :ing-02 {:id :ing-02
                                                               :order 2
                                                               :name "Tomatoes"
                                                               :amount 100
                                                               :measure "gram"}
                                                      :ing-03 {:id :ing-03
                                                               :order 3
                                                               :name "Pesto"
                                                               :amount 150
                                                               :measure "gram"}
                                                      :ing-04 {:id :ing-04
                                                               :order 4
                                                               :name "Lettuce"
                                                               :amount 100
                                                               :measure "gram"}}
                                        :steps {:step-01 {:id :step-01
                                                          :order 1
                                                          :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa orci, imperdiet sit amet ultricies vitae, consectetur nec est. Proin laoreet odio elit, vel rutrum tortor finibus non. Etiam auctor lorem eget diam sollicitudin condimentum. Nam quis posuere diam. Nulla vel arcu ac eros vestibulum accumsan in quis eros."}

                                                :step-02 {:id :step-02
                                                          :order 2
                                                          :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa orci, imperdiet sit amet ultricies vitae, consectetur nec est. Proin laoreet odio elit, vel rutrum tortor finibus non. Etiam auctor lorem eget diam sollicitudin condimentum. Nam quis posuere diam. Nulla vel arcu ac eros vestibulum accumsan in quis eros."}
                                                :step-03 {:id :step-03
                                                          :order 3
                                                          :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa orci, imperdiet sit amet ultricies vitae, consectetur nec est. Proin laoreet odio elit, vel rutrum tortor finibus non. Etiam auctor lorem eget diam sollicitudin condimentum. Nam quis posuere diam. Nulla vel arcu ac eros vestibulum accumsan in quis eros."}
                                                :step-04 {:id :step-04
                                                          :order 4
                                                          :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa orci, imperdiet sit amet ultricies vitae, consectetur nec est. Proin laoreet odio elit, vel rutrum tortor finibus non. Etiam auctor lorem eget diam sollicitudin condimentum. Nam quis posuere diam. Nulla vel arcu ac eros vestibulum accumsan in quis eros."}
                                                :step-05 {:id :step-05
                                                          :order 5
                                                          :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa orci, imperdiet sit amet ultricies vitae, consectetur nec est. Proin laoreet odio elit, vel rutrum tortor finibus non. Etiam auctor lorem eget diam sollicitudin condimentum. Nam quis posuere diam. Nulla vel arcu ac eros vestibulum accumsan in quis eros."}}
                                        :cook "mike@mailinator.com"
                                        :price 3900}
                               :rec-02 {:id :rec-02
                                        :prep-time 45
                                        :public? true
                                        :name "Splitony's Pizza"
                                        :img "https://res.cloudinary.com/schae/image/upload/f_auto,h_400,q_80/v1548183465/cheffy/recipes/pizza.jpg"
                                        :saved-count 5
                                        :ingredients {:ing-01 {:id :ing-01
                                                               :name "Pizza dough"
                                                               :amount 350
                                                               :measure "gram"}
                                                      :ing-02 {:id :ing-02
                                                               :name "Tomatoe sauce"
                                                               :amount 100
                                                               :measure "gram"}
                                                      :ing-03 {:id :ing-03
                                                               :name "Shraded Mozarella"
                                                               :amount 250
                                                               :measure "gram"}
                                                      :ing-04 {:id :ing-04
                                                               :name "Olives"
                                                               :amount 50
                                                               :measure "gram"}
                                                      :ing-05 {:id :ing-05
                                                               :name "Onions"
                                                               :amount 50
                                                               :measure "gram"}
                                                      :ing-06 {:id :ing-06
                                                               :name "Red & Green Peppers"
                                                               :amount 100
                                                               :measure "grams"}}
                                        :steps {:step-01 {:id :step-01
                                                          :order 1
                                                          :desc "First step"}
                                                :step-02 {:id :step-02
                                                          :order 2
                                                          :desc "Second step"}
                                                :step-03 {:id :step-03
                                                          :order 3
                                                          :desc "Third step"}
                                                :step-04 {:id :step-04
                                                          :order 4
                                                          :desc "Fourth step"}
                                                :step-05 {:id :step-05
                                                          :order 5
                                                          :desc "Fifth step"}}
                                        :cook "mike@mailinator.com"
                                        :price 3400}
                               :rec-03 {:id :rec-03
                                        :prep-time 15
                                        :public? false
                                        :name "Pancakes"
                                        :img "https://res.cloudinary.com/schae/image/upload/f_auto,h_400,q_80/v1548184422/cheffy/recipes/oatmeal-pancakes.jpg"
                                        :saved-count 5
                                        :ingredients {:ing-01 {:id :ing-01
                                                               :name "whites"
                                                               :amount 3
                                                               :measure "egg"}
                                                      :ing-02 {:id :ing-02
                                                               :name "whole"
                                                               :amount 1
                                                               :measure "egg"}
                                                      :ing-03 {:id :ing-03
                                                               :name "Oatmeal"
                                                               :amount 1
                                                               :measure "cup"}
                                                      :ing-04 {:id :ing-04
                                                               :name "Banana"
                                                               :amount 1
                                                               :measure "medium"}
                                                      :ing-05 {:id :ing-05
                                                               :name "Cocount oil"
                                                               :amount 1
                                                               :measure "spoon"}
                                                      :ing-06 {:id :ing-06
                                                               :name "Flax seeds"
                                                               :amount 2
                                                               :measure "table spoons"}}
                                        :steps {:step-01 {:id :step-01
                                                          :order 1
                                                          :desc "Preheat a pan on mid-high"}
                                                :step-02 {:id :step-02
                                                          :order 2
                                                          :desc "Put all ingredients into a blender and mix until creamy - 30 seconds should be enough"}
                                                :step-03 {:id :step-03
                                                          :order 3
                                                          :desc "Pour mix onto the hot pan and cover with a lid"}
                                                :step-04 {:id :step-04
                                                          :order 4
                                                          :desc "Cook for 5-10 minutes and flip to the other side - the lid is your friend. Cook for another 3-5 minutes"}
                                                :step-05 {:id :step-05
                                                          :order 4
                                                          :desc "Serve hot with marmalaids, honey, syrup, peanut butter etc."}}
                                        :cook "jade@mailinator.com"
                                        :price 1900}
                               :rec-04 {:id :rec-04
                                        :prep-time 15
                                        :public? true
                                        :name "Avocado Salad"
                                        :img "https://res.cloudinary.com/schae/image/upload/f_auto,h_400,q_80/v1548183354/cheffy/recipes/vegie-salad.jpg"
                                        :saved-count 5
                                        :ingredients {:ing-01 {:id :ing-01
                                                               :name "Eggs"
                                                               :amount 2
                                                               :measure ""}
                                                      :ing-02 {:id :ing-02
                                                               :name "Milk"
                                                               :amount 100
                                                               :measure "Mililiters"}
                                                      :ing-03 {:id :ing-03
                                                               :name "Yeast"
                                                               :amount 10
                                                               :measure "gram"}}
                                        :steps {:step-01 {:id :step-01
                                                          :order 1
                                                          :desc "First step"}
                                                :step-02 {:id :step-02
                                                          :order 2
                                                          :desc "Second step"}
                                                :step-03 {:id :step-03
                                                          :order 3
                                                          :desc "Third step"}
                                                :step-04 {:id :step-04
                                                          :order 4
                                                          :desc "Fourth step"}
                                                :step-05 {:id :step-05
                                                          :order 5
                                                          :desc "Fifth step"}}
                                        :cook "jade@mailinator.com"
                                        :price 2900}
                               :rec-05 {:id :rec-05
                                        :prep-time 15
                                        :public? true
                                        :name "Banana Waffles"
                                        :img "https://res.cloudinary.com/schae/image/upload/c_scale,f_auto,h_400,q_80/v1548162102/cheffy/recipes/banana-oatmeal-waffles.jpg"
                                        :saved-count 8
                                        :ingredients {:ing-01 {:id :ing-01
                                                               :name "whites"
                                                               :amount 3
                                                               :measure "egg"}
                                                      :ing-02 {:id :ing-02
                                                               :name "whole"
                                                               :amount 1
                                                               :measure "egg"}
                                                      :ing-03 {:id :ing-03
                                                               :name "Oatmeal"
                                                               :amount 1
                                                               :measure "cup"}
                                                      :ing-04 {:id :ing-04
                                                               :name "Banana"
                                                               :amount 1
                                                               :measure "medium"}
                                                      :ing-05 {:id :ing-05
                                                               :name "Cocount oil"
                                                               :amount 1
                                                               :measure "spoon"}
                                                      :ing-06 {:id :ing-06
                                                               :name "Almonds"
                                                               :amount 0.5
                                                               :measure "cup"}}
                                        :steps {:step-01 {:id :step-01
                                                          :order 1
                                                          :desc "Preheat waffle iron"}
                                                :step-02 {:id :step-02
                                                          :order 2
                                                          :desc "Blend all the ingredients"}
                                                :step-03 {:id :step-03
                                                          :order 3
                                                          :desc "Pour mix onto hot waffle iron and wait until ready"}
                                                :step-04 {:id :step-04
                                                          :order 4
                                                          :desc "Serve hot with marmalaids, honey, syrup, peanut butter etc."}}
                                        :cook "jade@mailinator.com"
                                        :price 2900}}
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
 [(rf/inject-cofx :local-store-user)]
 (fn [{:keys [local-store-user]} _]
   {:db (assoc-in initial-app-db [:auth] local-store-user)}))
