goog.provide('app.nav.views.authenticated');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
goog.require('app.nav.views.nav_item');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.nav.views.authenticated.authenticated = (function app$nav$views$authenticated$authenticated(){
var active_page = cljs.core.deref((function (){var G__26900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26900) : re_frame.core.subscribe.call(null,G__26900));
})());
var nav_items = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"name","name",1843675177),"Saved",new cljs.core.Keyword(null,"href","href",-793805698),app.router.path_for(new cljs.core.Keyword(null,"saved","saved",288760660)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__26901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"saved","saved",288760660)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26901) : re_frame.core.dispatch.call(null,G__26901));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"name","name",1843675177),"Recipes",new cljs.core.Keyword(null,"href","href",-793805698),app.router.path_for(new cljs.core.Keyword(null,"recipes","recipes",-325236209)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__26902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26902) : re_frame.core.dispatch.call(null,G__26902));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),new cljs.core.Keyword(null,"name","name",1843675177),"Inbox",new cljs.core.Keyword(null,"href","href",-793805698),app.router.path_for(new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__26903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26903) : re_frame.core.dispatch.call(null,G__26903));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810),new cljs.core.Keyword(null,"name","name",1843675177),"Chef",new cljs.core.Keyword(null,"href","href",-793805698),app.router.path_for(new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__26904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26904) : re_frame.core.dispatch.call(null,G__26904));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"name","name",1843675177),"Profile",new cljs.core.Keyword(null,"href","href",-793805698),app.router.path_for(new cljs.core.Keyword(null,"profile","profile",-545963874)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__26905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"profile","profile",-545963874)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26905) : re_frame.core.dispatch.call(null,G__26905));
});})(active_page))
], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"py","py",1397985916),(1)], null),(function (){var iter__4523__auto__ = ((function (active_page,nav_items){
return (function app$nav$views$authenticated$authenticated_$_iter__26906(s__26907){
return (new cljs.core.LazySeq(null,((function (active_page,nav_items){
return (function (){
var s__26907__$1 = s__26907;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26907__$1);
if(temp__5457__auto__){
var s__26907__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26907__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26907__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26909 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26908 = (0);
while(true){
if((i__26908 < size__4522__auto__)){
var map__26910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26908);
var map__26910__$1 = (((((!((map__26910 == null))))?(((((map__26910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26910):map__26910);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
cljs.core.chunk_append(b__26909,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null));

var G__26919 = (i__26908 + (1));
i__26908 = G__26919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26909),app$nav$views$authenticated$authenticated_$_iter__26906(cljs.core.chunk_rest(s__26907__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26909),null);
}
} else {
var map__26912 = cljs.core.first(s__26907__$2);
var map__26912__$1 = (((((!((map__26912 == null))))?(((((map__26912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26912):map__26912);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26912__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26912__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26912__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26912__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null),app$nav$views$authenticated$authenticated_$_iter__26906(cljs.core.rest(s__26907__$2)));
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

//# sourceMappingURL=app.nav.views.authenticated.js.map
