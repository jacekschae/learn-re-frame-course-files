goog.provide('app.recipes.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-recipe","save-recipe",1451304654),(function (db,p__27504){
var vec__27505 = p__27504;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27505,(0),null);
var recipe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27505,(1),null);
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"saved","saved",288760660)], null),cljs.core.conj,recipe_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"saved-count","saved-count",1526301101)], null),cljs.core.inc);
}));

//# sourceMappingURL=app.recipes.events.js.map
