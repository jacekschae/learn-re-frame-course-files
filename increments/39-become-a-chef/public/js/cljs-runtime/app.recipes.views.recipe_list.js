goog.provide('app.recipes.views.recipe_list');
goog.require('cljs.core');
goog.require('app.recipes.views.recipe_card');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.recipes.views.recipe_list.recipe_list = (function app$recipes$views$recipe_list$recipe_list(items){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cards"], null),(function (){var iter__4523__auto__ = (function app$recipes$views$recipe_list$recipe_list_$_iter__26060(s__26061){
return (new cljs.core.LazySeq(null,(function (){
var s__26061__$1 = s__26061;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26061__$1);
if(temp__5457__auto__){
var s__26061__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26061__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26061__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26063 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26062 = (0);
while(true){
if((i__26062 < size__4522__auto__)){
var recipe = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26062);
cljs.core.chunk_append(b__26063,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.recipes.views.recipe_card.recipe_card,recipe], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipe)], null)));

var G__26074 = (i__26062 + (1));
i__26062 = G__26074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26063),app$recipes$views$recipe_list$recipe_list_$_iter__26060(cljs.core.chunk_rest(s__26061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26063),null);
}
} else {
var recipe = cljs.core.first(s__26061__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.recipes.views.recipe_card.recipe_card,recipe], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipe)], null)),app$recipes$views$recipe_list$recipe_list_$_iter__26060(cljs.core.rest(s__26061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(items);
})()], null);
});

//# sourceMappingURL=app.recipes.views.recipe_list.js.map
