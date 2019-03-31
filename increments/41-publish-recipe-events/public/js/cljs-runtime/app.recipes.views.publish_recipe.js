goog.provide('app.recipes.views.publish_recipe');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('app.components.modal');
goog.require('app.components.form_group');
goog.require('app.helpers');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.recipes.views.publish_recipe.publish_recipe = (function app$recipes$views$publish_recipe$publish_recipe(){
var initial_values = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"price","price",22129180),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = ((function (initial_values,values){
return (function (p__27114){
var map__27115 = p__27114;
var map__27115__$1 = (((((!((map__27115 == null))))?(((((map__27115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27115):map__27115);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var recipe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
var G__27117_27128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),modal_name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27117_27128) : re_frame.core.dispatch.call(null,G__27117_27128));

return cljs.core.reset_BANG_(values,recipe);
});})(initial_values,values))
;
var publish = ((function (initial_values,values,open_modal){
return (function (p__27118){
var map__27119 = p__27118;
var map__27119__$1 = (((((!((map__27119 == null))))?(((((map__27119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27119):map__27119);
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27119__$1,new cljs.core.Keyword(null,"price","price",22129180));
var G__27121_27129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"publish-recipe","publish-recipe",53101208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"price","price",22129180),parseInt(price)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27121_27129) : re_frame.core.dispatch.call(null,G__27121_27129));

return cljs.core.reset_BANG_(values,initial_values);
});})(initial_values,values,open_modal))
;
return ((function (initial_values,values,open_modal,publish){
return (function (){
var map__27122 = cljs.core.deref((function (){var G__27123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27123) : re_frame.core.subscribe.call(null,G__27123));
})());
var map__27122__$1 = (((((!((map__27122 == null))))?(((((map__27122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27122):map__27122);
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27122__$1,new cljs.core.Keyword(null,"price","price",22129180));
var public_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27122__$1,new cljs.core.Keyword(null,"public?","public?",786025269));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,(cljs.core.truth_(public_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"publish-recipe","publish-recipe",53101208)], null));
});})(map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish))
], null),app.helpers.format_price(price)], null):((cljs.core.not(public_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"publish-recipe","publish-recipe",53101208),new cljs.core.Keyword(null,"recipe","recipe",-17826617),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"price","price",22129180),price], null)], null));
});})(map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish))
], null),"Publish"], null):null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"publish-recipe","publish-recipe",53101208),new cljs.core.Keyword(null,"header","header",119441134),"Recipe",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"label","label",1718410804),"Price (in cents)",new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"type","type",1174270348),"number"], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(public_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish){
return (function (){
var G__27125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unpublish-recipe","unpublish-recipe",-1577620848)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27125) : re_frame.core.dispatch.call(null,G__27125));
});})(map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish))
], null),"Unpublish"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish){
return (function (){
var G__27126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27126) : re_frame.core.dispatch.call(null,G__27126));
});})(map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish))
,new cljs.core.Keyword(null,"variant","variant",-424354234),"light"], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish){
return (function (){
return publish(cljs.core.deref(values));
});})(map__27122,map__27122__$1,price,public_QMARK_,initial_values,values,open_modal,publish))
], null),"Publish"], null)], null)], null)], null)], null);
});
;})(initial_values,values,open_modal,publish))
});

//# sourceMappingURL=app.recipes.views.publish_recipe.js.map
