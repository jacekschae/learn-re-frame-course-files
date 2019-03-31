goog.provide('app.recipes.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-recipe","save-recipe",1451304654),(function (db,p__26141){
var vec__26142 = p__26141;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26142,(0),null);
var recipe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26142,(1),null);
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"saved","saved",288760660)], null),cljs.core.conj,recipe_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"saved-count","saved-count",1526301101)], null),cljs.core.inc);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-ingredient","delete-ingredient",443101563),(function (p__26145,p__26146){
var map__26147 = p__26145;
var map__26147__$1 = (((((!((map__26147 == null))))?(((((map__26147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26147):map__26147);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26147__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26148 = p__26146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26148,(0),null);
var ingredient_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26148,(1),null);
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null),cljs.core.dissoc,ingredient_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-step","delete-step",587926903),(function (p__26160,p__26161){
var map__26163 = p__26160;
var map__26163__$1 = (((((!((map__26163 == null))))?(((((map__26163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26163):map__26163);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26165 = p__26161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26165,(0),null);
var step_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26165,(1),null);
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),recipe_id,new cljs.core.Keyword(null,"steps","steps",-128433302)], null),cljs.core.dissoc,step_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-ingredient","upsert-ingredient",-1543603235),(function (p__26172,p__26173){
var map__26175 = p__26172;
var map__26175__$1 = (((((!((map__26175 == null))))?(((((map__26175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26175):map__26175);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26175__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26176 = p__26173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26176,(0),null);
var map__26179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26176,(1),null);
var map__26179__$1 = (((((!((map__26179 == null))))?(((((map__26179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26179):map__26179);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-step","upsert-step",-776873689),(function (p__26190,p__26191){
var map__26192 = p__26190;
var map__26192__$1 = (((((!((map__26192 == null))))?(((((map__26192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26192):map__26192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26192__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26193 = p__26191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26193,(0),null);
var map__26196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26193,(1),null);
var map__26196__$1 = (((((!((map__26196 == null))))?(((((map__26196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26196):map__26196);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26196__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26196__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-recipe","upsert-recipe",-378628019),(function (p__26203,p__26204){
var map__26206 = p__26203;
var map__26206__$1 = (((((!((map__26206 == null))))?(((((map__26206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26206):map__26206);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26206__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26207 = p__26204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207,(0),null);
var map__26210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207,(1),null);
var map__26210__$1 = (((((!((map__26210 == null))))?(((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26210):map__26210);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var prep_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172));
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
var id = (function (){var or__4131__auto__ = recipe_id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["recipe-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''));
}
})();
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209),id], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),prep_time,new cljs.core.Keyword(null,"cook","cook",1825923808),uid,new cljs.core.Keyword(null,"public?","public?",786025269),false], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-recipe","delete-recipe",-1409286669),(function (p__26217,_){
var map__26218 = p__26217;
var map__26218__$1 = (((((!((map__26218 == null))))?(((((map__26218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26218):map__26218);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26218__$1,new cljs.core.Keyword(null,"db","db",993250759));
var recipe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-recipe","active-recipe",1029354148)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null),cljs.core.dissoc,recipe_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/recipes/"], null)], null);
}));

//# sourceMappingURL=app.recipes.events.js.map
