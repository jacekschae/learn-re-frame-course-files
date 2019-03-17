goog.provide('app.recipes.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-recipe","save-recipe",1451304654),(function (db,p__26210){
var vec__26211 = p__26210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26211,(0),null);
var recipe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26211,(1),null);
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"saved","saved",288760660)], null),cljs.core.conj,recipe_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"saved-count","saved-count",1526301101)], null),cljs.core.inc);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-ingredient","delete-ingredient",443101563),(function (p__26214,p__26215){
var map__26216 = p__26214;
var map__26216__$1 = (((((!((map__26216 == null))))?(((((map__26216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26216):map__26216);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26216__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26217 = p__26215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217,(0),null);
var ingredient_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26217,(1),null);
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null),cljs.core.dissoc,ingredient_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-ingredient","upsert-ingredient",-1543603235),(function (p__26221,p__26222){
var map__26223 = p__26221;
var map__26223__$1 = (((((!((map__26223 == null))))?(((((map__26223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26223):map__26223);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26223__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26224 = p__26222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(0),null);
var map__26227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(1),null);
var map__26227__$1 = (((((!((map__26227 == null))))?(((((map__26227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26227):map__26227);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
var ingredients = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null));
var order = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ingredients,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"order","order",-1254677256)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (cljs.core.count(ingredients) + (1));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),id], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"amount","amount",364489504),amount,new cljs.core.Keyword(null,"measure","measure",-1857519826),measure], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));

//# sourceMappingURL=app.recipes.events.js.map
