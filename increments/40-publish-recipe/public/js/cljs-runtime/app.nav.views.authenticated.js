goog.provide('app.nav.views.authenticated');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
goog.require('app.nav.views.nav_item');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.nav.views.authenticated.authenticated = (function app$nav$views$authenticated$authenticated(){
var active_page = cljs.core.deref((function (){var G__25997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25997) : re_frame.core.subscribe.call(null,G__25997));
})());
var chef_QMARK_ = cljs.core.deref((function (){var G__25998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chef?","chef?",500132224)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25998) : re_frame.core.subscribe.call(null,G__25998));
})());
var nav_items = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"name","name",1843675177),"Saved",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__25999 = new cljs.core.Keyword(null,"saved","saved",288760660);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__25999) : app.router.path_for.call(null,G__25999));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page,chef_QMARK_){
return (function (){
var G__26000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"saved","saved",288760660)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26000) : re_frame.core.dispatch.call(null,G__26000));
});})(active_page,chef_QMARK_))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"name","name",1843675177),"Recipes",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__26001 = new cljs.core.Keyword(null,"recipes","recipes",-325236209);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__26001) : app.router.path_for.call(null,G__26001));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page,chef_QMARK_){
return (function (){
var G__26002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26002) : re_frame.core.dispatch.call(null,G__26002));
});})(active_page,chef_QMARK_))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),new cljs.core.Keyword(null,"name","name",1843675177),"Inbox",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__26003 = new cljs.core.Keyword(null,"inboxes","inboxes",-619615989);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__26003) : app.router.path_for.call(null,G__26003));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page,chef_QMARK_){
return (function (){
var G__26004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"inboxes","inboxes",-619615989)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26004) : re_frame.core.dispatch.call(null,G__26004));
});})(active_page,chef_QMARK_))
], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810),new cljs.core.Keyword(null,"name","name",1843675177),"Chef",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__26005 = new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__26005) : app.router.path_for.call(null,G__26005));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page,chef_QMARK_){
return (function (){
var G__26006 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26006) : re_frame.core.dispatch.call(null,G__26006));
});})(active_page,chef_QMARK_))
,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),chef_QMARK_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"name","name",1843675177),"Profile",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__26007 = new cljs.core.Keyword(null,"profile","profile",-545963874);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__26007) : app.router.path_for.call(null,G__26007));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page,chef_QMARK_){
return (function (){
var G__26008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"profile","profile",-545963874)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26008) : re_frame.core.dispatch.call(null,G__26008));
});})(active_page,chef_QMARK_))
], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"py","py",1397985916),(1)], null),(function (){var iter__4523__auto__ = ((function (active_page,chef_QMARK_,nav_items){
return (function app$nav$views$authenticated$authenticated_$_iter__26009(s__26010){
return (new cljs.core.LazySeq(null,((function (active_page,chef_QMARK_,nav_items){
return (function (){
var s__26010__$1 = s__26010;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26010__$1);
if(temp__5457__auto__){
var s__26010__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26010__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26010__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26012 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26011 = (0);
while(true){
if((i__26011 < size__4522__auto__)){
var map__26013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26011);
var map__26013__$1 = (((((!((map__26013 == null))))?(((((map__26013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26013):map__26013);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26013__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26013__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26013__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26013__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26013__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
if(cljs.core.not(hidden_QMARK_)){
cljs.core.chunk_append(b__26012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null));

var G__26034 = (i__26011 + (1));
i__26011 = G__26034;
continue;
} else {
var G__26035 = (i__26011 + (1));
i__26011 = G__26035;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26012),app$nav$views$authenticated$authenticated_$_iter__26009(cljs.core.chunk_rest(s__26010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26012),null);
}
} else {
var map__26015 = cljs.core.first(s__26010__$2);
var map__26015__$1 = (((((!((map__26015 == null))))?(((((map__26015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26015):map__26015);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
if(cljs.core.not(hidden_QMARK_)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null),app$nav$views$authenticated$authenticated_$_iter__26009(cljs.core.rest(s__26010__$2)));
} else {
var G__26052 = cljs.core.rest(s__26010__$2);
s__26010__$1 = G__26052;
continue;
}
}
} else {
return null;
}
break;
}
});})(active_page,chef_QMARK_,nav_items))
,null,null));
});})(active_page,chef_QMARK_,nav_items))
;
return iter__4523__auto__(nav_items);
})()], null);
});

//# sourceMappingURL=app.nav.views.authenticated.js.map
