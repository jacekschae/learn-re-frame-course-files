goog.provide('app.recipes.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__26147_26179 = new cljs.core.Keyword(null,"drafts","drafts",1523624562);
var G__26148_26180 = ((function (G__26147_26179){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var filters = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (recipes,uid,G__26147_26179){
return (function (p1__26145_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__26145_SHARP_),false);
});})(recipes,uid,G__26147_26179))
,((function (recipes,uid,G__26147_26179){
return (function (p1__26146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cook","cook",1825923808).cljs$core$IFn$_invoke$arity$1(p1__26146_SHARP_),uid);
});})(recipes,uid,G__26147_26179))
], null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,filters),recipes);
});})(G__26147_26179))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26147_26179,G__26148_26180) : re_frame.core.reg_sub.call(null,G__26147_26179,G__26148_26180));
var G__26151_26182 = new cljs.core.Keyword(null,"public","public",1566243851);
var G__26152_26183 = ((function (G__26151_26182){
return (function (db,_){
var recipes = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (recipes,G__26151_26182){
return (function (p1__26150_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"public?","public?",786025269).cljs$core$IFn$_invoke$arity$1(p1__26150_SHARP_),true);
});})(recipes,G__26151_26182))
,recipes);
});})(G__26151_26182))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26151_26182,G__26152_26183) : re_frame.core.reg_sub.call(null,G__26151_26182,G__26152_26183));
var G__26154_26184 = new cljs.core.Keyword(null,"recipe","recipe",-17826617);
var G__26155_26185 = ((function (G__26154_26184){
return (function (db,_){
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),active_recipe], null));
});})(G__26154_26184))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26154_26184,G__26155_26185) : re_frame.core.reg_sub.call(null,G__26154_26184,G__26155_26185));
var G__26156_26186 = new cljs.core.Keyword(null,"author?","author?",-1083349935);
var G__26157_26187 = ((function (G__26156_26186){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
var recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),active_recipe], null));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword(null,"cook","cook",1825923808).cljs$core$IFn$_invoke$arity$1(recipe));
});})(G__26156_26186))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26156_26186,G__26157_26187) : re_frame.core.reg_sub.call(null,G__26156_26186,G__26157_26187));
var G__26158_26191 = new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917);
var G__26159_26192 = ((function (G__26158_26191){
return (function (db,_){
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
var ingredients = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),active_recipe,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals(ingredients));
});})(G__26158_26191))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26158_26191,G__26159_26192) : re_frame.core.reg_sub.call(null,G__26158_26191,G__26159_26192));
var G__26173_26198 = new cljs.core.Keyword(null,"steps","steps",-128433302);
var G__26174_26199 = ((function (G__26173_26198){
return (function (db,_){
var active_recipe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
var steps = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),active_recipe,new cljs.core.Keyword(null,"steps","steps",-128433302)], null));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals(steps));
});})(G__26173_26198))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26173_26198,G__26174_26199) : re_frame.core.reg_sub.call(null,G__26173_26198,G__26174_26199));

//# sourceMappingURL=app.recipes.subs.js.map
