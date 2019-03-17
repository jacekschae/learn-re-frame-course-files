goog.provide('app.recipes.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__27938_27945 = new cljs.core.Keyword(null,"drafts","drafts",1523624562);
var G__27939_27946 = ((function (G__27938_27945){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var filters = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (recipes,uid,G__27938_27945){
return (function (p1__27936_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__27936_SHARP_),false);
});})(recipes,uid,G__27938_27945))
,((function (recipes,uid,G__27938_27945){
return (function (p1__27937_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cook","cook",1825923808).cljs$core$IFn$_invoke$arity$1(p1__27937_SHARP_),uid);
});})(recipes,uid,G__27938_27945))
], null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,filters),recipes);
});})(G__27938_27945))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27938_27945,G__27939_27946) : re_frame.core.reg_sub.call(null,G__27938_27945,G__27939_27946));
var G__27941_27947 = new cljs.core.Keyword(null,"public","public",1566243851);
var G__27942_27948 = ((function (G__27941_27947){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (recipes,G__27941_27947){
return (function (p1__27940_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__27940_SHARP_),true);
});})(recipes,G__27941_27947))
,recipes);
});})(G__27941_27947))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27941_27947,G__27942_27948) : re_frame.core.reg_sub.call(null,G__27941_27947,G__27942_27948));
var G__27943_27949 = new cljs.core.Keyword(null,"recipe","recipe",-17826617);
var G__27944_27950 = ((function (G__27943_27949){
return (function (db,_){
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),active_recipe], null));
});})(G__27943_27949))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27943_27949,G__27944_27950) : re_frame.core.reg_sub.call(null,G__27943_27949,G__27944_27950));

//# sourceMappingURL=app.recipes.subs.js.map
