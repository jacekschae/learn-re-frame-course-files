goog.provide('app.nav.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
var G__26030_26057 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__26031_26058 = ((function (G__26030_26057){
return (function (p__26032){
var map__26034 = p__26032;
var map__26034__$1 = (((((!((map__26034 == null))))?(((((map__26034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26034):map__26034);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26034__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return app.router.set_token_BANG_(path);
});})(G__26030_26057))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26030_26057,G__26031_26058) : re_frame.core.reg_fx.call(null,G__26030_26057,G__26031_26058));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),(function (db,p__26039){
var vec__26040 = p__26039;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26040,(0),null);
var map__26043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26040,(1),null);
var map__26043__$1 = (((((!((map__26043 == null))))?(((((map__26043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26043):map__26043);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26043__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26043__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),handler),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603).cljs$core$IFn$_invoke$arity$1(route_params)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),(function (db,p__26045){
var vec__26046 = p__26045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26046,(0),null);
var active_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26046,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-nav","active-nav",-275650057)], null),active_nav);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__26049){
var vec__26050 = p__26049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26050,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26050,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-modal","active-modal",1608517958)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-modal","open-modal",947793572),(function (db,p__26053){
var vec__26054 = p__26053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26054,(0),null);
var modal_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26054,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-modal","active-modal",1608517958)], null),modal_name);
}));

//# sourceMappingURL=app.nav.events.js.map
