goog.provide('app.nav.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
var G__26019_26047 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__26020_26048 = ((function (G__26019_26047){
return (function (p__26021){
var map__26022 = p__26021;
var map__26022__$1 = (((((!((map__26022 == null))))?(((((map__26022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26022):map__26022);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26022__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return app.router.set_token_BANG_(path);
});})(G__26019_26047))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26019_26047,G__26020_26048) : re_frame.core.reg_fx.call(null,G__26019_26047,G__26020_26048));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),(function (db,p__26025){
var vec__26026 = p__26025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26026,(0),null);
var map__26029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26026,(1),null);
var map__26029__$1 = (((((!((map__26029 == null))))?(((((map__26029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26029):map__26029);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26029__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26029__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),handler),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603).cljs$core$IFn$_invoke$arity$1(route_params)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),(function (db,p__26031){
var vec__26032 = p__26031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26032,(0),null);
var active_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26032,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-nav","active-nav",-275650057)], null),active_nav);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__26036){
var vec__26037 = p__26036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26037,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26037,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-modal","active-modal",1608517958)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-modal","open-modal",947793572),(function (db,p__26041){
var vec__26043 = p__26041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26043,(0),null);
var modal_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26043,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-modal","active-modal",1608517958)], null),modal_name);
}));

//# sourceMappingURL=app.nav.events.js.map
