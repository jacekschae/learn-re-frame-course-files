goog.provide('app.recipes.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-recipe","save-recipe",1451304654),(function (db,p__26727){
var vec__26730 = p__26727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730,(0),null);
var recipe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730,(1),null);
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"saved","saved",288760660)], null),cljs.core.conj,recipe_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"saved-count","saved-count",1526301101)], null),cljs.core.inc);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-ingredient","delete-ingredient",443101563),(function (p__26733,p__26734){
var map__26736 = p__26733;
var map__26736__$1 = (((((!((map__26736 == null))))?(((((map__26736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26736):map__26736);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26736__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26737 = p__26734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(0),null);
var ingredient_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(1),null);
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null),cljs.core.dissoc,ingredient_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-step","delete-step",587926903),(function (p__26742,p__26743){
var map__26744 = p__26742;
var map__26744__$1 = (((((!((map__26744 == null))))?(((((map__26744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26744):map__26744);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26744__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26745 = p__26743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(0),null);
var step_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(1),null);
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"steps","steps",-128433302)], null),cljs.core.dissoc,step_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-ingredient","upsert-ingredient",-1543603235),(function (p__26749,p__26750){
var map__26751 = p__26749;
var map__26751__$1 = (((((!((map__26751 == null))))?(((((map__26751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26751):map__26751);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26751__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26752 = p__26750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(0),null);
var map__26755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(1),null);
var map__26755__$1 = (((((!((map__26755 == null))))?(((((map__26755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26755):map__26755);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26755__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26755__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26755__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-step","upsert-step",-776873689),(function (p__26758,p__26759){
var map__26760 = p__26758;
var map__26760__$1 = (((((!((map__26760 == null))))?(((((map__26760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26760):map__26760);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26760__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26761 = p__26759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(0),null);
var map__26764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(1),null);
var map__26764__$1 = (((((!((map__26764 == null))))?(((((map__26764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26764):map__26764);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
var steps = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"steps","steps",-128433302)], null));
var order = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(steps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"order","order",-1254677256)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (cljs.core.count(steps) + (1));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"steps","steps",-128433302),id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"desc","desc",2093485764),desc], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));

//# sourceMappingURL=app.recipes.events.js.map
