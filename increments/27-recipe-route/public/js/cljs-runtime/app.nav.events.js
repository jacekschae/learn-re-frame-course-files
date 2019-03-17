goog.provide('app.nav.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
var G__31752_31800 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__31753_31801 = ((function (G__31752_31800){
return (function (p__31754){
var map__31755 = p__31754;
var map__31755__$1 = (((((!((map__31755 == null))))?(((((map__31755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31755):map__31755);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31755__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return app.router.set_token_BANG_(path);
});})(G__31752_31800))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__31752_31800,G__31753_31801) : re_frame.core.reg_fx.call(null,G__31752_31800,G__31753_31801));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),(function (db,p__31762){
var vec__31767 = p__31762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31767,(0),null);
var map__31770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31767,(1),null);
var map__31770__$1 = (((((!((map__31770 == null))))?(((((map__31770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31770):map__31770);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31770__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),handler);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),(function (db,p__31787){
var vec__31789 = p__31787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31789,(0),null);
var active_nav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31789,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-nav","active-nav",-275650057)], null),active_nav);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__31793){
var vec__31795 = p__31793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page);
}));

//# sourceMappingURL=app.nav.events.js.map
