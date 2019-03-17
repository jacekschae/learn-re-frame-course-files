goog.provide('app.recipes.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__26026_26031 = new cljs.core.Keyword(null,"drafts","drafts",1523624562);
var G__26027_26032 = ((function (G__26026_26031){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var filters = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (recipes,uid,G__26026_26031){
return (function (p1__26024_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__26024_SHARP_),false);
});})(recipes,uid,G__26026_26031))
,((function (recipes,uid,G__26026_26031){
return (function (p1__26025_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cook","cook",1825923808).cljs$core$IFn$_invoke$arity$1(p1__26025_SHARP_),uid);
});})(recipes,uid,G__26026_26031))
], null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,filters),recipes);
});})(G__26026_26031))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26026_26031,G__26027_26032) : re_frame.core.reg_sub.call(null,G__26026_26031,G__26027_26032));
var G__26029_26033 = new cljs.core.Keyword(null,"public","public",1566243851);
var G__26030_26034 = ((function (G__26029_26033){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (recipes,G__26029_26033){
return (function (p1__26028_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__26028_SHARP_),true);
});})(recipes,G__26029_26033))
,recipes);
});})(G__26029_26033))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26029_26033,G__26030_26034) : re_frame.core.reg_sub.call(null,G__26029_26033,G__26030_26034));

//# sourceMappingURL=app.recipes.subs.js.map
