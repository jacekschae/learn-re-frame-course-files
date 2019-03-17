goog.provide('app.recipes.views.recipe_ingredients');
goog.require('cljs.core');
goog.require('re_frame.core');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.recipes.views.recipe_ingredients.recipe_ingredients = (function app$recipes$views$recipe_ingredients$recipe_ingredients(){
var ingredients = cljs.core.deref((function (){var G__26129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26129) : re_frame.core.subscribe.call(null,G__26129));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"pt","pt",556460867),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5",new cljs.core.Keyword(null,"py","py",1397985916),(15),new cljs.core.Keyword(null,"m","m",1632677161),(0)], null),"Ingredients"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),(15),new cljs.core.Keyword(null,"pl","pl",-1690940563),(10)], null),"PLUS"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,(function (){var iter__4523__auto__ = ((function (ingredients){
return (function app$recipes$views$recipe_ingredients$recipe_ingredients_$_iter__26130(s__26131){
return (new cljs.core.LazySeq(null,((function (ingredients){
return (function (){
var s__26131__$1 = s__26131;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26131__$1);
if(temp__5457__auto__){
var s__26131__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26131__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26131__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26133 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26132 = (0);
while(true){
if((i__26132 < size__4522__auto__)){
var map__26134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26132);
var map__26134__$1 = (((((!((map__26134 == null))))?(((((map__26134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26134):map__26134);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26134__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26134__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__26133,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),amount," ",measure], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,name], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__26138 = (i__26132 + (1));
i__26132 = G__26138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26133),app$recipes$views$recipe_ingredients$recipe_ingredients_$_iter__26130(cljs.core.chunk_rest(s__26131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26133),null);
}
} else {
var map__26136 = cljs.core.first(s__26131__$2);
var map__26136__$1 = (((((!((map__26136 == null))))?(((((map__26136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26136):map__26136);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26136__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26136__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26136__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26136__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),amount," ",measure], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,name], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),app$recipes$views$recipe_ingredients$recipe_ingredients_$_iter__26130(cljs.core.rest(s__26131__$2)));
}
} else {
return null;
}
break;
}
});})(ingredients))
,null,null));
});})(ingredients))
;
return iter__4523__auto__(ingredients);
})()], null)], null);
});

//# sourceMappingURL=app.recipes.views.recipe_ingredients.js.map
