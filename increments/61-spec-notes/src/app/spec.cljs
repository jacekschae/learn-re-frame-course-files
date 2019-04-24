(ns app.spec
  (:require [re-frame.core :as rf]
            [cljs.spec.alpha :as s]))

; (s/def ::uid (s/nilable string?))
; (s/def ::auth (s/keys :req [::uid]))
;
; (s/def ::errors map?)
;
; (s/def ::message string?)
; (s/def ::author string?)
; (s/def ::created-at number?)
; (s/def ::message-map (s/keys :req-un [::message ::auhtor ::created-at]))
; (s/def ::participants (s/coll-of string? :kind set?))
; (s/def ::messages (s/coll-of ::message-map :kind vector?))
; (s/def ::inbox-id (s/keys :req [::participants ::messages]))
; (s/def ::inboxes (s/keys :req [::inbox-id]))
;
; ; (s/def ::nav (s/map-of keyword? (s/nilable keyword?)))
;
; (s/def ::id keyword?)
; (s/def ::public boolean?)
; (s/def ::prep-time number?)
; (s/def ::name string?)
; (s/def ::img string?)
; (s/def ::saved-count number?)
; (s/def ::ingredients map?)
; (s/def ::steps map?)
; (s/def ::cook string?)
; (s/def ::price number?)
; (s/def ::recipe-id (s/keys :req [::id ::public? ::prep-time ::name]
;                            :opt [::img ::saved-count ::ingredients ::steps ::cook ::price]))
; (s/def ::recipes (s/keys :req-un [::recipe-id]))
;
; (s/def ::inboxes (s/map-of string? map?))
; (s/def ::saved set?)
; (s/def ::role keyword?)
; (s/def ::profile (s/map-of keyword? map?))
; (s/def ::user (s/keys :reg [::uid ::profile ::role ::saved ::inboxes]))
; (s/def ::users (s/map-of string? map?))

(s/def ::auth (s/map-of keyword? map))
(s/def ::errors (s/map-of keyword? map))
(s/def ::inboxes (s/map-of keyword? map))
(s/def ::nav (s/map-of keyword? map))
(s/def ::recipes (s/map-of keyword? map))
(s/def ::users (s/map-of string? map))

(s/def ::db (s/keys :req-un [::auth ::errors ::inboxes ::nav ::recipes ::users]))

(defn check-and-throw
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "speck check failed: " (s/explain-str a-spec db)) {}))))

(def check-spec-interceptor (rf/after (partial check-and-throw ::db)))
