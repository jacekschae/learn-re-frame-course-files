goog.provide('app.nav.views.public$');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
goog.require('app.nav.views.nav_item');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.nav.views.public$.public$ = (function app$nav$views$public$public(){
var active_page = cljs.core.deref((function (){var G__31760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31760) : re_frame.core.subscribe.call(null,G__31760));
})());
var nav_items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"name","name",1843675177),"Recipes",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__31761 = new cljs.core.Keyword(null,"recipes","recipes",-325236209);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__31761) : app.router.path_for.call(null,G__31761));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__31763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31763) : re_frame.core.dispatch.call(null,G__31763));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810),new cljs.core.Keyword(null,"name","name",1843675177),"Chef",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__31771 = new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__31771) : app.router.path_for.call(null,G__31771));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__31774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31774) : re_frame.core.dispatch.call(null,G__31774));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),new cljs.core.Keyword(null,"name","name",1843675177),"Sign up",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__31776 = new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__31776) : app.router.path_for.call(null,G__31776));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__31777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31777) : re_frame.core.dispatch.call(null,G__31777));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"log-in","log-in",526627385),new cljs.core.Keyword(null,"name","name",1843675177),"Log in",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__31779 = new cljs.core.Keyword(null,"log-in","log-in",526627385);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__31779) : app.router.path_for.call(null,G__31779));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__31780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"log-in","log-in",526627385)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31780) : re_frame.core.dispatch.call(null,G__31780));
});})(active_page))
], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"py","py",1397985916),(1)], null),(function (){var iter__4523__auto__ = ((function (active_page,nav_items){
return (function app$nav$views$public$public_$_iter__31783(s__31784){
return (new cljs.core.LazySeq(null,((function (active_page,nav_items){
return (function (){
var s__31784__$1 = s__31784;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__31784__$1);
if(temp__5457__auto__){
var s__31784__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31784__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__31784__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__31786 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__31785 = (0);
while(true){
if((i__31785 < size__4522__auto__)){
var map__31803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__31785);
var map__31803__$1 = (((((!((map__31803 == null))))?(((((map__31803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31803):map__31803);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31803__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31803__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
cljs.core.chunk_append(b__31786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null));

var G__31823 = (i__31785 + (1));
i__31785 = G__31823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31786),app$nav$views$public$public_$_iter__31783(cljs.core.chunk_rest(s__31784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31786),null);
}
} else {
var map__31809 = cljs.core.first(s__31784__$2);
var map__31809__$1 = (((((!((map__31809 == null))))?(((((map__31809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31809):map__31809);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31809__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31809__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null),app$nav$views$public$public_$_iter__31783(cljs.core.rest(s__31784__$2)));
}
} else {
return null;
}
break;
}
});})(active_page,nav_items))
,null,null));
});})(active_page,nav_items))
;
return iter__4523__auto__(nav_items);
})()], null);
});

//# sourceMappingURL=app.nav.views.public.js.map
