goog.provide('app.components.modal');
goog.require('cljs.core');
goog.require('re_frame.core');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.components.modal.modal = (function app$components$modal$modal(p__26057){
var map__26061 = p__26057;
var map__26061__$1 = (((((!((map__26061 == null))))?(((((map__26061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26061):map__26061);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var active_modal = cljs.core.deref((function (){var G__26069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-modal","active-modal",1608517958)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26069) : re_frame.core.subscribe.call(null,G__26069));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opened","opened",-1451743091),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_modal,modal_name),new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (active_modal,map__26061,map__26061__$1,modal_name,header,body,footer){
return (function (){
var G__26070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26070) : re_frame.core.dispatch.call(null,G__26070));
});})(active_modal,map__26061,map__26061__$1,modal_name,header,body,footer))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ModalDialog,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ModalContent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),(15),new cljs.core.Keyword(null,"variant","variant",-424354234),"h4"], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ModalBody,body], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ModalFooter,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f0f4f8",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0 0 10px 10px"], null),footer], null)], null)], null)], null);
});

//# sourceMappingURL=app.components.modal.js.map
