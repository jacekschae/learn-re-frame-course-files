goog.provide('app.recipes.views.recipe_image');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.components.form_group');
goog.require('app.components.modal');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.recipes.views.recipe_image.recipe_image = (function app$recipes$views$recipe_image$recipe_image(){
var initial_values = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img","img",1442687358),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var map__26109 = cljs.core.deref((function (){var G__26110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26110) : re_frame.core.subscribe.call(null,G__26110));
})());
var map__26109__$1 = (((((!((map__26109 == null))))?(((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26109):map__26109);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26109__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var author_QMARK_ = (function (){var G__26117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author?","author?",-1083349935)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26117) : re_frame.core.subscribe.call(null,G__26117));
})();
var open_modal = ((function (initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_){
return (function (p__26118){
var map__26119 = p__26118;
var map__26119__$1 = (((((!((map__26119 == null))))?(((((map__26119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26119):map__26119);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26119__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var recipe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26119__$1,new cljs.core.Keyword(null,"recipe","recipe",-17826617));
var G__26122_26149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),modal_name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26122_26149) : re_frame.core.dispatch.call(null,G__26122_26149));

return cljs.core.reset_BANG_(values,recipe);
});})(initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_))
;
var save = ((function (initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal){
return (function (img__$1){
var G__26123_26155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-image","upsert-image",304504604),img__$1], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26123_26155) : re_frame.core.dispatch.call(null,G__26123_26155));

return cljs.core.reset_BANG_(values,initial_values);
});})(initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal))
;
return ((function (initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(author_QMARK_)?"editable":null),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = img;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "/img/placeholder.jpg";
}
})()),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"alt","alt",-3214426),name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(author_QMARK_)?((function (initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"image-editor","image-editor",-2051753721),new cljs.core.Keyword(null,"recipe","recipe",-17826617),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img","img",1442687358),img], null)], null));
});})(initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save))
:null)], null)], null),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"image-editor","image-editor",-2051753721),new cljs.core.Keyword(null,"header","header",119441134),"Image",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"label","label",1718410804),"URL",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save){
return (function (){
var G__26124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26124) : re_frame.core.dispatch.call(null,G__26124));
});})(initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save))
,new cljs.core.Keyword(null,"variant","variant",-424354234),"light"], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save){
return (function (){
return save(cljs.core.deref(values));
});})(initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save))
], null),"Save"], null)], null)], null)], null):null)], null);
});
;})(initial_values,values,map__26109,map__26109__$1,img,name,author_QMARK_,open_modal,save))
});

//# sourceMappingURL=app.recipes.views.recipe_image.js.map
