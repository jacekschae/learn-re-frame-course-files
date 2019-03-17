goog.provide('app.nav.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
var G__23723_23768 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__23724_23769 = ((function (G__23723_23768){
return (function (p__23728){
var map__23729 = p__23728;
var map__23729__$1 = (((((!((map__23729 == null))))?(((((map__23729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23729):map__23729);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23729__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return app.router.set_token_BANG_(path);
});})(G__23723_23768))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__23723_23768,G__23724_23769) : re_frame.core.reg_fx.call(null,G__23723_23768,G__23724_23769));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),(function (db,p__23744){
var vec__23745 = p__23744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23745,(0),null);
var map__23748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23745,(1),null);
var map__23748__$1 = (((((!((map__23748 == null))))?(((((map__23748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23748):map__23748);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23748__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23748__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),handler),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603).cljs$core$IFn$_invoke$arity$1(route_params)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),(function (db,p__23756){
var vec__23758 = p__23756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23758,(0),null);
var active_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23758,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-nav","active-nav",-275650057)], null),active_nav);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__23761){
var vec__23762 = p__23761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23762,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23762,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page);
}));

//# sourceMappingURL=app.nav.events.js.map
