goog.provide('app.recipes.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__23726_23754 = new cljs.core.Keyword(null,"drafts","drafts",1523624562);
var G__23727_23755 = ((function (G__23726_23754){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var filters = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (recipes,uid,G__23726_23754){
return (function (p1__23722_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__23722_SHARP_),false);
});})(recipes,uid,G__23726_23754))
,((function (recipes,uid,G__23726_23754){
return (function (p1__23725_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cook","cook",1825923808).cljs$core$IFn$_invoke$arity$1(p1__23725_SHARP_),uid);
});})(recipes,uid,G__23726_23754))
], null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,filters),recipes);
});})(G__23726_23754))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23726_23754,G__23727_23755) : re_frame.core.reg_sub.call(null,G__23726_23754,G__23727_23755));
var G__23739_23765 = new cljs.core.Keyword(null,"public","public",1566243851);
var G__23740_23766 = ((function (G__23739_23765){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (recipes,G__23739_23765){
return (function (p1__23737_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__23737_SHARP_),true);
});})(recipes,G__23739_23765))
,recipes);
});})(G__23739_23765))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23739_23765,G__23740_23766) : re_frame.core.reg_sub.call(null,G__23739_23765,G__23740_23766));
var G__23750_23770 = new cljs.core.Keyword(null,"recipe","recipe",-17826617);
var G__23751_23771 = ((function (G__23750_23770){
return (function (db,_){
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),active_recipe], null));
});})(G__23750_23770))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23750_23770,G__23751_23771) : re_frame.core.reg_sub.call(null,G__23750_23770,G__23751_23771));

//# sourceMappingURL=app.recipes.subs.js.map
