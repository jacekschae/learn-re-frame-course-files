goog.provide('app.nav.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
var G__26862_26897 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__26863_26899 = ((function (G__26862_26897){
return (function (p__26864){
var map__26865 = p__26864;
var map__26865__$1 = (((((!((map__26865 == null))))?(((((map__26865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26865):map__26865);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26865__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return app.router.set_token_BANG_(path);
});})(G__26862_26897))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26862_26897,G__26863_26899) : re_frame.core.reg_fx.call(null,G__26862_26897,G__26863_26899));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),(function (db,p__26871){
var vec__26874 = p__26871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26874,(0),null);
var map__26877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26874,(1),null);
var map__26877__$1 = (((((!((map__26877 == null))))?(((((map__26877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26877):map__26877);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26877__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),handler);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),(function (db,p__26887){
var vec__26889 = p__26887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26889,(0),null);
var active_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26889,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-nav","active-nav",-275650057)], null),active_nav);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__26892){
var vec__26893 = p__26892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page);
}));

//# sourceMappingURL=app.nav.events.js.map
