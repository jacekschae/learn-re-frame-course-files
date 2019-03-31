goog.provide('app.recipes.views.recipe_editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('app.components.modal');
goog.require('app.components.form_group');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
var module$node_modules$styled_icons$fa_solid$Plus=shadow.js.require("module$node_modules$styled_icons$fa_solid$Plus", {});
app.recipes.views.recipe_editor.recipe_editor = (function app$recipes$views$recipe_editor$recipe_editor(){
var initial_values = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = ((function (initial_values,values){
return (function (p__26072){
var map__26073 = p__26072;
var map__26073__$1 = (((((!((map__26073 == null))))?(((((map__26073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26073):map__26073);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26073__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var recipe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26073__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
var G__26077_26095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),modal_name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26077_26095) : re_frame.core.dispatch.call(null,G__26077_26095));

return cljs.core.reset_BANG_(values,recipe);
});})(initial_values,values))
;
var save = ((function (initial_values,values,open_modal){
return (function (p__26079){
var map__26081 = p__26079;
var map__26081__$1 = (((((!((map__26081 == null))))?(((((map__26081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26081):map__26081);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var prep_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26081__$1,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172));
var G__26086_26098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-recipe","upsert-recipe",-378628019),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.trim(name),new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),parseInt(prep_time)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26086_26098) : re_frame.core.dispatch.call(null,G__26086_26098));

return cljs.core.reset_BANG_(values,initial_values);
});})(initial_values,values,open_modal))
;
return ((function (initial_values,values,open_modal,save){
return (function (){
var map__26088 = cljs.core.deref((function (){var G__26089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26089) : re_frame.core.subscribe.call(null,G__26089));
})());
var map__26088__$1 = (((((!((map__26088 == null))))?(((((map__26088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26088):map__26088);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var prep_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26088__$1,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172));
var active_page = cljs.core.deref((function (){var G__26091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26091) : re_frame.core.subscribe.call(null,G__26091));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"recipe","recipe",-17826617)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h2",new cljs.core.Keyword(null,"class","class",-2030961996),"editable",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"recipe-editor","recipe-editor",-1313452010),new cljs.core.Keyword(null,"recipe","recipe",-17826617),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),prep_time], null)], null));
});})(map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save))
], null),name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"recipe-editor","recipe-editor",-1313452010),new cljs.core.Keyword(null,"recipe","recipe",-17826617),initial_values], null));
});})(map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_solid$Plus.Plus,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"recipe-editor","recipe-editor",-1313452010),new cljs.core.Keyword(null,"header","header",119441134),"Recipe",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172),new cljs.core.Keyword(null,"label","label",1718410804),"Cooking time (min)",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save){
return (function (){
if(cljs.core.truth_(confirm("Are you sure?"))){
var G__26093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-recipe","delete-recipe",-1409286669)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26093) : re_frame.core.dispatch.call(null,G__26093));
} else {
return null;
}
});})(map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save))
], null),"Delete"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"light",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save){
return (function (){
var G__26094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26094) : re_frame.core.dispatch.call(null,G__26094));
});})(map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save))
], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save){
return (function (){
return save(cljs.core.deref(values));
});})(map__26088,map__26088__$1,name,prep_time,active_page,initial_values,values,open_modal,save))
], null),"Save"], null)], null)], null)], null)], null);
});
;})(initial_values,values,open_modal,save))
});

//# sourceMappingURL=app.recipes.views.recipe_editor.js.map
