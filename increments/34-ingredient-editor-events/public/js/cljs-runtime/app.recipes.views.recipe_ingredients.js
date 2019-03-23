goog.provide('app.recipes.views.recipe_ingredients');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('app.components.modal');
goog.require('app.components.form_group');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
var module$node_modules$styled_icons$fa_solid$Plus=shadow.js.require("module$node_modules$styled_icons$fa_solid$Plus", {});
app.recipes.views.recipe_ingredients.recipe_ingredients = (function app$recipes$views$recipe_ingredients$recipe_ingredients(){
var initial_values = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"amount","amount",364489504),(0),new cljs.core.Keyword(null,"measure","measure",-1857519826),"",new cljs.core.Keyword(null,"name","name",1843675177),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = ((function (initial_values,values){
return (function (p__26579){
var map__26580 = p__26579;
var map__26580__$1 = (((((!((map__26580 == null))))?(((((map__26580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26580):map__26580);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26580__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var ingredient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26580__$1,new cljs.core.Keyword(null,"ingredient","ingredient",1011156019));
var G__26582_26599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),modal_name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26582_26599) : re_frame.core.dispatch.call(null,G__26582_26599));

return cljs.core.reset_BANG_(values,ingredient);
});})(initial_values,values))
;
var save = ((function (initial_values,values,open_modal){
return (function (p__26583){
var map__26584 = p__26583;
var map__26584__$1 = (((((!((map__26584 == null))))?(((((map__26584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26584):map__26584);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26584__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26584__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26584__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__26586_26600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-ingredient","upsert-ingredient",-1543603235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["ingredient-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''));
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(name),new cljs.core.Keyword(null,"amount","amount",364489504),parseInt(amount),new cljs.core.Keyword(null,"measure","measure",-1857519826),clojure.string.trim(measure)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26586_26600) : re_frame.core.dispatch.call(null,G__26586_26600));

return cljs.core.reset_BANG_(values,initial_values);
});})(initial_values,values,open_modal))
;
var ingredients = cljs.core.deref((function (){var G__26587 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26587) : re_frame.core.subscribe.call(null,G__26587));
})());
var author_QMARK_ = cljs.core.deref((function (){var G__26588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author?","author?",-1083349935)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26588) : re_frame.core.subscribe.call(null,G__26588));
})());
return ((function (initial_values,values,open_modal,save,ingredients,author_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"pt","pt",556460867),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5",new cljs.core.Keyword(null,"py","py",1397985916),(15),new cljs.core.Keyword(null,"m","m",1632677161),(0)], null),"Ingredients"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),(15),new cljs.core.Keyword(null,"pl","pl",-1690940563),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"light",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (initial_values,values,open_modal,save,ingredients,author_QMARK_){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"ingredient-editor","ingredient-editor",-375505998),new cljs.core.Keyword(null,"ingredient","ingredient",1011156019),initial_values], null));
});})(initial_values,values,open_modal,save,ingredients,author_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_solid$Plus.Plus,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,(function (){var iter__4523__auto__ = ((function (initial_values,values,open_modal,save,ingredients,author_QMARK_){
return (function app$recipes$views$recipe_ingredients$recipe_ingredients_$_iter__26589(s__26590){
return (new cljs.core.LazySeq(null,((function (initial_values,values,open_modal,save,ingredients,author_QMARK_){
return (function (){
var s__26590__$1 = s__26590;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26590__$1);
if(temp__5457__auto__){
var s__26590__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26590__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26590__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26592 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26591 = (0);
while(true){
if((i__26591 < size__4522__auto__)){
var map__26593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26591);
var map__26593__$1 = (((((!((map__26593 == null))))?(((((map__26593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26593):map__26593);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26593__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26593__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26593__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26593__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__26592,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),amount," ",measure], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,name], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__26605 = (i__26591 + (1));
i__26591 = G__26605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26592),app$recipes$views$recipe_ingredients$recipe_ingredients_$_iter__26589(cljs.core.chunk_rest(s__26590__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26592),null);
}
} else {
var map__26595 = cljs.core.first(s__26590__$2);
var map__26595__$1 = (((((!((map__26595 == null))))?(((((map__26595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26595):map__26595);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26595__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26595__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26595__$1,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),amount," ",measure], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,name], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),app$recipes$views$recipe_ingredients$recipe_ingredients_$_iter__26589(cljs.core.rest(s__26590__$2)));
}
} else {
return null;
}
break;
}
});})(initial_values,values,open_modal,save,ingredients,author_QMARK_))
,null,null));
});})(initial_values,values,open_modal,save,ingredients,author_QMARK_))
;
return iter__4523__auto__(ingredients);
})(),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"ingredient-editor","ingredient-editor",-375505998),new cljs.core.Keyword(null,"header","header",119441134),"Ingredient",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"label","label",1718410804),"Amount",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"label","label",1718410804),"Measure",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(values));
if(cljs.core.truth_(temp__5457__auto__)){
var ingredient_id = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ingredient_id,temp__5457__auto__,initial_values,values,open_modal,save,ingredients,author_QMARK_){
return (function (){
if(cljs.core.truth_(confirm("Are you sure?"))){
var G__26597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-ingredient","delete-ingredient",443101563),ingredient_id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26597) : re_frame.core.dispatch.call(null,G__26597));
} else {
return null;
}
});})(ingredient_id,temp__5457__auto__,initial_values,values,open_modal,save,ingredients,author_QMARK_))
], null),"Delete"], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"light",new cljs.core.Keyword(null,"mx","mx",-199887020),(10),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (initial_values,values,open_modal,save,ingredients,author_QMARK_){
return (function (){
var G__26598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26598) : re_frame.core.dispatch.call(null,G__26598));
});})(initial_values,values,open_modal,save,ingredients,author_QMARK_))
], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (initial_values,values,open_modal,save,ingredients,author_QMARK_){
return (function (){
return save(cljs.core.deref(values));
});})(initial_values,values,open_modal,save,ingredients,author_QMARK_))
], null)], null)], null)], null)], null):null)], null)], null);
});
;})(initial_values,values,open_modal,save,ingredients,author_QMARK_))
});

//# sourceMappingURL=app.recipes.views.recipe_ingredients.js.map