goog.provide('app.become_a_chef.views.become_a_chef');
goog.require('cljs.core');
goog.require('app.components.page_nav');
goog.require('app.become_a_chef.views.agreement');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
var module$node_modules$styled_icons$fa_regular$CheckCircle=shadow.js.require("module$node_modules$styled_icons$fa_regular$CheckCircle", {});
app.become_a_chef.views.become_a_chef.become_a_chef = (function app$become_a_chef$views$become_a_chef$become_a_chef(){
var steps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Create your recipes for free",new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),"Start by creating a draft. Add name and cooking time. Make your recipe stand out by adding picture and describe all needed ingredients and steps."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Publish and get noticed",new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),"Easily publish your recipes and allow people to get in touch with you via one click. Await a message for your first cooking event."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Cook for the first time",new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),"Talk to the interested person and agree on the date, time, and location. Show your best at the even and become a chef."], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.page_nav.page_nav,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),"Become a Chef",new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.become_a_chef.views.agreement.agreement], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"py","py",1397985916),(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"md","md",707286655),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-rounded","img.img-rounded",-1085183245),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1546889699/cheffy/become-a-chef.jpg",new cljs.core.Keyword(null,"alt","alt",-3214426),"become a chef"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"md","md",707286655),(6)], null),(function (){var iter__4523__auto__ = ((function (steps){
return (function app$become_a_chef$views$become_a_chef$become_a_chef_$_iter__25985(s__25986){
return (new cljs.core.LazySeq(null,((function (steps){
return (function (){
var s__25986__$1 = s__25986;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__25986__$1);
if(temp__5457__auto__){
var s__25986__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25986__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__25986__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__25988 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__25987 = (0);
while(true){
if((i__25987 < size__4522__auto__)){
var map__25989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__25987);
var map__25989__$1 = (((((!((map__25989 == null))))?(((((map__25989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25989):map__25989);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"header","header",119441134));
var sub_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"sub-header","sub-header",1915186221));
cljs.core.chunk_append(b__25988,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"py","py",1397985916),(4),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"baseline"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_regular$CheckCircle.CheckCircle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(22),new cljs.core.Keyword(null,"color","color",1011675173),"#27AB83"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4"], null),header], null),sub_header], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)));

var G__25993 = (i__25987 + (1));
i__25987 = G__25993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25988),app$become_a_chef$views$become_a_chef$become_a_chef_$_iter__25985(cljs.core.chunk_rest(s__25986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25988),null);
}
} else {
var map__25991 = cljs.core.first(s__25986__$2);
var map__25991__$1 = (((((!((map__25991 == null))))?(((((map__25991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25991):map__25991);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25991__$1,new cljs.core.Keyword(null,"header","header",119441134));
var sub_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25991__$1,new cljs.core.Keyword(null,"sub-header","sub-header",1915186221));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"py","py",1397985916),(4),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"baseline"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_regular$CheckCircle.CheckCircle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(22),new cljs.core.Keyword(null,"color","color",1011675173),"#27AB83"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4"], null),header], null),sub_header], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)),app$become_a_chef$views$become_a_chef$become_a_chef_$_iter__25985(cljs.core.rest(s__25986__$2)));
}
} else {
return null;
}
break;
}
});})(steps))
,null,null));
});})(steps))
;
return iter__4523__auto__(steps);
})()], null)], null)], null)], null);
});

//# sourceMappingURL=app.become_a_chef.views.become_a_chef.js.map
