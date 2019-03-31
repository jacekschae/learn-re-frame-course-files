goog.provide('app.components.form_group');
goog.require('cljs.core');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.components.form_group.form_group = (function app$components$form_group$form_group(p__25828){
var map__25829 = p__25828;
var map__25829__$1 = (((((!((map__25829 == null))))?(((((map__25829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25829):map__25829);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"values","values",372645556));
var textarea = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25829__$1,new cljs.core.Keyword(null,"textarea","textarea",-650375824));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.FormGroup,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),id], null),label], null),(cljs.core.truth_(textarea)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Textarea,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"control","control",1892578036),true,new cljs.core.Keyword(null,"rows","rows",850049680),(6),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__25834 = cljs.core.deref(values);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__25834) : id.call(null,G__25834));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__25829,map__25829__$1,id,label,type,values,textarea){
return (function (p1__25826_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(values,cljs.core.assoc,id,p1__25826_SHARP_.target.value);
});})(map__25829,map__25829__$1,id,label,type,values,textarea))
], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"control","control",1892578036),true,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__25835 = cljs.core.deref(values);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__25835) : id.call(null,G__25835));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__25829,map__25829__$1,id,label,type,values,textarea){
return (function (p1__25827_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(values,cljs.core.assoc,id,p1__25827_SHARP_.target.value);
});})(map__25829,map__25829__$1,id,label,type,values,textarea))
], null)], null))], null);
});

//# sourceMappingURL=app.components.form_group.js.map
