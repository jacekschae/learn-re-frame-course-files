goog.provide('app.nav.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
var G__25989_26014 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__25990_26015 = ((function (G__25989_26014){
return (function (p__25992){
var map__25993 = p__25992;
var map__25993__$1 = (((((!((map__25993 == null))))?(((((map__25993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25993):map__25993);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return app.router.set_token_BANG_(path);
});})(G__25989_26014))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__25989_26014,G__25990_26015) : re_frame.core.reg_fx.call(null,G__25989_26014,G__25990_26015));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),(function (db,p__25995){
var vec__25996 = p__25995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25996,(0),null);
var map__25999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25996,(1),null);
var map__25999__$1 = (((((!((map__25999 == null))))?(((((map__25999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25999):map__25999);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25999__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),handler);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),(function (db,p__26001){
var vec__26004 = p__26001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26004,(0),null);
var active_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26004,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-nav","active-nav",-275650057)], null),active_nav);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__26008){
var vec__26011 = p__26008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26011,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26011,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page);
}));

//# sourceMappingURL=app.nav.events.js.map
