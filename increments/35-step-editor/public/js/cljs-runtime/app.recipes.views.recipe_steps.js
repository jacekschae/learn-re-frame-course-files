goog.provide('app.recipes.views.recipe_steps');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('app.components.modal');
goog.require('app.components.form_group');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
var module$node_modules$styled_icons$fa_solid$Plus=shadow.js.require("module$node_modules$styled_icons$fa_solid$Plus", {});
app.recipes.views.recipe_steps.recipe_steps = (function app$recipes$views$recipe_steps$recipe_steps(){
var initial_values = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"desc","desc",2093485764),""], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var open_modal = ((function (initial_values,values){
return (function (p__41609){
var map__41612 = p__41609;
var map__41612__$1 = (((((!((map__41612 == null))))?(((((map__41612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41612):map__41612);
var modal_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var G__41620_41667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-modal","open-modal",947793572),modal_name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41620_41667) : re_frame.core.dispatch.call(null,G__41620_41667));

return cljs.core.reset_BANG_(values,step);
});})(initial_values,values))
;
var save = ((function (initial_values,values,open_modal){
return (function (p__41636){
var map__41637 = p__41636;
var map__41637__$1 = (((((!((map__41637 == null))))?(((((map__41637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41637):map__41637);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41637__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41637__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var G__41641_41669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-step","upsert-step",-776873689),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["step-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''));
}
})(),new cljs.core.Keyword(null,"desc","desc",2093485764),clojure.string.trim(desc)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41641_41669) : re_frame.core.dispatch.call(null,G__41641_41669));

return cljs.core.reset_BANG_(values,initial_values);
});})(initial_values,values,open_modal))
;
return ((function (initial_values,values,open_modal,save){
return (function (){
var steps = cljs.core.deref((function (){var G__41647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41647) : re_frame.core.subscribe.call(null,G__41647));
})());
var author_QMARK_ = cljs.core.deref((function (){var G__41648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author?","author?",-1083349935)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41648) : re_frame.core.subscribe.call(null,G__41648));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"pt","pt",556460867),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5",new cljs.core.Keyword(null,"py","py",1397985916),(15),new cljs.core.Keyword(null,"m","m",1632677161),(0)], null),"Steps"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my","my",-1055703269),(15),new cljs.core.Keyword(null,"pl","pl",-1690940563),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"light",new cljs.core.Keyword(null,"size","size",1098693007),"sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"step","step",1288888124),initial_values], null));
});})(steps,author_QMARK_,initial_values,values,open_modal,save))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_solid$Plus.Plus,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,(function (){var iter__4523__auto__ = ((function (steps,author_QMARK_,initial_values,values,open_modal,save){
return (function app$recipes$views$recipe_steps$recipe_steps_$_iter__41649(s__41650){
return (new cljs.core.LazySeq(null,((function (steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
var s__41650__$1 = s__41650;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__41650__$1);
if(temp__5457__auto__){
var s__41650__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41650__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__41650__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__41652 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__41651 = (0);
while(true){
if((i__41651 < size__4522__auto__)){
var map__41655 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__41651);
var map__41655__$1 = (((((!((map__41655 == null))))?(((((map__41655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41655):map__41655);
var step = map__41655__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41655__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41655__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append(b__41652,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41651,map__41655,map__41655__$1,step,id,desc,c__4521__auto__,size__4522__auto__,b__41652,s__41650__$2,temp__5457__auto__,steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"step","step",1288888124),step], null));
});})(i__41651,map__41655,map__41655__$1,step,id,desc,c__4521__auto__,size__4522__auto__,b__41652,s__41650__$2,temp__5457__auto__,steps,author_QMARK_,initial_values,values,open_modal,save))
,new cljs.core.Keyword(null,"class","class",-2030961996),"editable"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),desc], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__41672 = (i__41651 + (1));
i__41651 = G__41672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41652),app$recipes$views$recipe_steps$recipe_steps_$_iter__41649(cljs.core.chunk_rest(s__41650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41652),null);
}
} else {
var map__41661 = cljs.core.first(s__41650__$2);
var map__41661__$1 = (((((!((map__41661 == null))))?(((((map__41661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41661):map__41661);
var step = map__41661__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41661__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41661__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__41661,map__41661__$1,step,id,desc,s__41650__$2,temp__5457__auto__,steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
return open_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"step","step",1288888124),step], null));
});})(map__41661,map__41661__$1,step,id,desc,s__41650__$2,temp__5457__auto__,steps,author_QMARK_,initial_values,values,open_modal,save))
,new cljs.core.Keyword(null,"class","class",-2030961996),"editable"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(10)], null),desc], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),app$recipes$views$recipe_steps$recipe_steps_$_iter__41649(cljs.core.rest(s__41650__$2)));
}
} else {
return null;
}
break;
}
});})(steps,author_QMARK_,initial_values,values,open_modal,save))
,null,null));
});})(steps,author_QMARK_,initial_values,values,open_modal,save))
;
return iter__4523__auto__(steps);
})(),(cljs.core.truth_(author_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.modal.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal-name","modal-name",-2096322394),new cljs.core.Keyword(null,"step-editor","step-editor",1799616437),new cljs.core.Keyword(null,"header","header",119441134),"Step",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.form_group.form_group,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"label","label",1718410804),"Description",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"textarea","textarea",-650375824),true], null)], null)], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(values));
if(cljs.core.truth_(temp__5457__auto__)){
var step_id = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (step_id,temp__5457__auto__,steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
if(cljs.core.truth_(confirm("Are you sure?"))){
var G__41664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-step","delete-step",587926903),step_id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41664) : re_frame.core.dispatch.call(null,G__41664));
} else {
return null;
}
});})(step_id,temp__5457__auto__,steps,author_QMARK_,initial_values,values,open_modal,save))
], null),"Delete"], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"light",new cljs.core.Keyword(null,"mx","mx",-199887020),(10),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
var G__41665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41665) : re_frame.core.dispatch.call(null,G__41665));
});})(steps,author_QMARK_,initial_values,values,open_modal,save))
], null),"Cancel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (steps,author_QMARK_,initial_values,values,open_modal,save){
return (function (){
return save(cljs.core.deref(values));
});})(steps,author_QMARK_,initial_values,values,open_modal,save))
], null),"Save"], null)], null)], null)], null):null)], null)], null);
});
;})(initial_values,values,open_modal,save))
});

//# sourceMappingURL=app.recipes.views.recipe_steps.js.map
