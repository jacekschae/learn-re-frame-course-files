goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40985 = arguments.length;
var i__4731__auto___40986 = (0);
while(true){
if((i__4731__auto___40986 < len__4730__auto___40985)){
args__4736__auto__.push((arguments[i__4731__auto___40986]));

var G__40987 = (i__4731__auto___40986 + (1));
i__4731__auto___40986 = G__40987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40718){
var G__40719 = cljs.core.first(seq40718);
var seq40718__$1 = cljs.core.next(seq40718);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40719,seq40718__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__40747){
var map__40748 = p__40747;
var map__40748__$1 = (((((!((map__40748 == null))))?(((((map__40748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40748):map__40748);
var src = map__40748__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40748__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40748__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40763 = cljs.core.seq(sources);
var chunk__40764 = null;
var count__40765 = (0);
var i__40766 = (0);
while(true){
if((i__40766 < count__40765)){
var map__40781 = chunk__40764.cljs$core$IIndexed$_nth$arity$2(null,i__40766);
var map__40781__$1 = (((((!((map__40781 == null))))?(((((map__40781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40781):map__40781);
var src = map__40781__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__40996 = seq__40763;
var G__40997 = chunk__40764;
var G__40998 = count__40765;
var G__40999 = (i__40766 + (1));
seq__40763 = G__40996;
chunk__40764 = G__40997;
count__40765 = G__40998;
i__40766 = G__40999;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40763);
if(temp__5457__auto__){
var seq__40763__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40763__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40763__$1);
var G__41000 = cljs.core.chunk_rest(seq__40763__$1);
var G__41001 = c__4550__auto__;
var G__41002 = cljs.core.count(c__4550__auto__);
var G__41003 = (0);
seq__40763 = G__41000;
chunk__40764 = G__41001;
count__40765 = G__41002;
i__40766 = G__41003;
continue;
} else {
var map__40783 = cljs.core.first(seq__40763__$1);
var map__40783__$1 = (((((!((map__40783 == null))))?(((((map__40783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40783):map__40783);
var src = map__40783__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__41004 = cljs.core.next(seq__40763__$1);
var G__41005 = null;
var G__41006 = (0);
var G__41007 = (0);
seq__40763 = G__41004;
chunk__40764 = G__41005;
count__40765 = G__41006;
i__40766 = G__41007;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40788 = cljs.core.seq(js_requires);
var chunk__40789 = null;
var count__40790 = (0);
var i__40791 = (0);
while(true){
if((i__40791 < count__40790)){
var js_ns = chunk__40789.cljs$core$IIndexed$_nth$arity$2(null,i__40791);
var require_str_41008 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41008);


var G__41009 = seq__40788;
var G__41010 = chunk__40789;
var G__41011 = count__40790;
var G__41012 = (i__40791 + (1));
seq__40788 = G__41009;
chunk__40789 = G__41010;
count__40790 = G__41011;
i__40791 = G__41012;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40788);
if(temp__5457__auto__){
var seq__40788__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40788__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40788__$1);
var G__41013 = cljs.core.chunk_rest(seq__40788__$1);
var G__41014 = c__4550__auto__;
var G__41015 = cljs.core.count(c__4550__auto__);
var G__41016 = (0);
seq__40788 = G__41013;
chunk__40789 = G__41014;
count__40790 = G__41015;
i__40791 = G__41016;
continue;
} else {
var js_ns = cljs.core.first(seq__40788__$1);
var require_str_41017 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41017);


var G__41018 = cljs.core.next(seq__40788__$1);
var G__41019 = null;
var G__41020 = (0);
var G__41021 = (0);
seq__40788 = G__41018;
chunk__40789 = G__41019;
count__40790 = G__41020;
i__40791 = G__41021;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__40803 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__40803) : callback.call(null,G__40803));
} else {
var G__40804 = shadow.cljs.devtools.client.env.files_url();
var G__40805 = ((function (G__40804){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__40804))
;
var G__40806 = "POST";
var G__40807 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__40808 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__40804,G__40805,G__40806,G__40807,G__40808);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__40810){
var map__40811 = p__40810;
var map__40811__$1 = (((((!((map__40811 == null))))?(((((map__40811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40811):map__40811);
var msg = map__40811__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40811__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40811__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__40813 = info;
var map__40813__$1 = (((((!((map__40813 == null))))?(((((map__40813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40813):map__40813);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40813__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40813__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40815(s__40816){
return (new cljs.core.LazySeq(null,((function (map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info){
return (function (){
var s__40816__$1 = s__40816;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__40816__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__40822 = cljs.core.first(xs__6012__auto__);
var map__40822__$1 = (((((!((map__40822 == null))))?(((((map__40822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40822):map__40822);
var src = map__40822__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40822__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40822__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__40816__$1,map__40822,map__40822__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40815_$_iter__40817(s__40818){
return (new cljs.core.LazySeq(null,((function (s__40816__$1,map__40822,map__40822__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info){
return (function (){
var s__40818__$1 = s__40818;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__40818__$1);
if(temp__5457__auto____$1){
var s__40818__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40818__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40818__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40820 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40819 = (0);
while(true){
if((i__40819 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40819);
cljs.core.chunk_append(b__40820,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41022 = (i__40819 + (1));
i__40819 = G__41022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40820),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40815_$_iter__40817(cljs.core.chunk_rest(s__40818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40820),null);
}
} else {
var warning = cljs.core.first(s__40818__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40815_$_iter__40817(cljs.core.rest(s__40818__$2)));
}
} else {
return null;
}
break;
}
});})(s__40816__$1,map__40822,map__40822__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info))
,null,null));
});})(s__40816__$1,map__40822,map__40822__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40815(cljs.core.rest(s__40816__$1)));
} else {
var G__41023 = cljs.core.rest(s__40816__$1);
s__40816__$1 = G__41023;
continue;
}
} else {
var G__41024 = cljs.core.rest(s__40816__$1);
s__40816__$1 = G__41024;
continue;
}
} else {
return null;
}
break;
}
});})(map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info))
,null,null));
});})(map__40813,map__40813__$1,sources,compiled,map__40811,map__40811__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__40824_41025 = cljs.core.seq(warnings);
var chunk__40825_41026 = null;
var count__40826_41027 = (0);
var i__40827_41028 = (0);
while(true){
if((i__40827_41028 < count__40826_41027)){
var map__40834_41029 = chunk__40825_41026.cljs$core$IIndexed$_nth$arity$2(null,i__40827_41028);
var map__40834_41030__$1 = (((((!((map__40834_41029 == null))))?(((((map__40834_41029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40834_41029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40834_41029):map__40834_41029);
var w_41031 = map__40834_41030__$1;
var msg_41032__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40834_41030__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40834_41030__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40834_41030__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40834_41030__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41035)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41033),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41034),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41032__$1)].join(''));


var G__41036 = seq__40824_41025;
var G__41037 = chunk__40825_41026;
var G__41038 = count__40826_41027;
var G__41039 = (i__40827_41028 + (1));
seq__40824_41025 = G__41036;
chunk__40825_41026 = G__41037;
count__40826_41027 = G__41038;
i__40827_41028 = G__41039;
continue;
} else {
var temp__5457__auto___41040 = cljs.core.seq(seq__40824_41025);
if(temp__5457__auto___41040){
var seq__40824_41041__$1 = temp__5457__auto___41040;
if(cljs.core.chunked_seq_QMARK_(seq__40824_41041__$1)){
var c__4550__auto___41042 = cljs.core.chunk_first(seq__40824_41041__$1);
var G__41043 = cljs.core.chunk_rest(seq__40824_41041__$1);
var G__41044 = c__4550__auto___41042;
var G__41045 = cljs.core.count(c__4550__auto___41042);
var G__41046 = (0);
seq__40824_41025 = G__41043;
chunk__40825_41026 = G__41044;
count__40826_41027 = G__41045;
i__40827_41028 = G__41046;
continue;
} else {
var map__40836_41047 = cljs.core.first(seq__40824_41041__$1);
var map__40836_41048__$1 = (((((!((map__40836_41047 == null))))?(((((map__40836_41047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40836_41047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40836_41047):map__40836_41047);
var w_41049 = map__40836_41048__$1;
var msg_41050__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40836_41048__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40836_41048__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40836_41048__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40836_41048__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41053)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41051),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41052),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41050__$1)].join(''));


var G__41054 = cljs.core.next(seq__40824_41041__$1);
var G__41055 = null;
var G__41056 = (0);
var G__41057 = (0);
seq__40824_41025 = G__41054;
chunk__40825_41026 = G__41055;
count__40826_41027 = G__41056;
i__40827_41028 = G__41057;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info){
return (function (p__40838){
var map__40839 = p__40838;
var map__40839__$1 = (((((!((map__40839 == null))))?(((((map__40839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40839):map__40839);
var src = map__40839__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info){
return (function (p__40841){
var map__40842 = p__40841;
var map__40842__$1 = (((((!((map__40842 == null))))?(((((map__40842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40842):map__40842);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40842__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info){
return (function (p__40844){
var map__40845 = p__40844;
var map__40845__$1 = (((((!((map__40845 == null))))?(((((map__40845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40845):map__40845);
var rc = map__40845__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info){
return (function (p1__40809_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40809_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__40813,map__40813__$1,sources,compiled,warnings,map__40811,map__40811__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4120__auto__){
return rel_new;
} else {
return and__4120__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__40848){
var map__40851 = p__40848;
var map__40851__$1 = (((((!((map__40851 == null))))?(((((map__40851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40851):map__40851);
var msg = map__40851__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40851__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40853 = cljs.core.seq(updates);
var chunk__40855 = null;
var count__40856 = (0);
var i__40857 = (0);
while(true){
if((i__40857 < count__40856)){
var path = chunk__40855.cljs$core$IIndexed$_nth$arity$2(null,i__40857);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40897_41063 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40900_41064 = null;
var count__40901_41065 = (0);
var i__40902_41066 = (0);
while(true){
if((i__40902_41066 < count__40901_41065)){
var node_41067 = chunk__40900_41064.cljs$core$IIndexed$_nth$arity$2(null,i__40902_41066);
var path_match_41068 = shadow.cljs.devtools.client.browser.match_paths(node_41067.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41068)){
var new_link_41069 = (function (){var G__40907 = node_41067.cloneNode(true);
G__40907.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41068),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40907;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41068], 0));

goog.dom.insertSiblingAfter(new_link_41069,node_41067);

goog.dom.removeNode(node_41067);


var G__41070 = seq__40897_41063;
var G__41071 = chunk__40900_41064;
var G__41072 = count__40901_41065;
var G__41073 = (i__40902_41066 + (1));
seq__40897_41063 = G__41070;
chunk__40900_41064 = G__41071;
count__40901_41065 = G__41072;
i__40902_41066 = G__41073;
continue;
} else {
var G__41074 = seq__40897_41063;
var G__41075 = chunk__40900_41064;
var G__41076 = count__40901_41065;
var G__41077 = (i__40902_41066 + (1));
seq__40897_41063 = G__41074;
chunk__40900_41064 = G__41075;
count__40901_41065 = G__41076;
i__40902_41066 = G__41077;
continue;
}
} else {
var temp__5457__auto___41078 = cljs.core.seq(seq__40897_41063);
if(temp__5457__auto___41078){
var seq__40897_41079__$1 = temp__5457__auto___41078;
if(cljs.core.chunked_seq_QMARK_(seq__40897_41079__$1)){
var c__4550__auto___41080 = cljs.core.chunk_first(seq__40897_41079__$1);
var G__41081 = cljs.core.chunk_rest(seq__40897_41079__$1);
var G__41082 = c__4550__auto___41080;
var G__41083 = cljs.core.count(c__4550__auto___41080);
var G__41084 = (0);
seq__40897_41063 = G__41081;
chunk__40900_41064 = G__41082;
count__40901_41065 = G__41083;
i__40902_41066 = G__41084;
continue;
} else {
var node_41085 = cljs.core.first(seq__40897_41079__$1);
var path_match_41086 = shadow.cljs.devtools.client.browser.match_paths(node_41085.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41086)){
var new_link_41087 = (function (){var G__40910 = node_41085.cloneNode(true);
G__40910.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41086),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40910;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41086], 0));

goog.dom.insertSiblingAfter(new_link_41087,node_41085);

goog.dom.removeNode(node_41085);


var G__41088 = cljs.core.next(seq__40897_41079__$1);
var G__41089 = null;
var G__41090 = (0);
var G__41091 = (0);
seq__40897_41063 = G__41088;
chunk__40900_41064 = G__41089;
count__40901_41065 = G__41090;
i__40902_41066 = G__41091;
continue;
} else {
var G__41092 = cljs.core.next(seq__40897_41079__$1);
var G__41093 = null;
var G__41094 = (0);
var G__41095 = (0);
seq__40897_41063 = G__41092;
chunk__40900_41064 = G__41093;
count__40901_41065 = G__41094;
i__40902_41066 = G__41095;
continue;
}
}
} else {
}
}
break;
}


var G__41096 = seq__40853;
var G__41097 = chunk__40855;
var G__41098 = count__40856;
var G__41099 = (i__40857 + (1));
seq__40853 = G__41096;
chunk__40855 = G__41097;
count__40856 = G__41098;
i__40857 = G__41099;
continue;
} else {
var G__41100 = seq__40853;
var G__41101 = chunk__40855;
var G__41102 = count__40856;
var G__41103 = (i__40857 + (1));
seq__40853 = G__41100;
chunk__40855 = G__41101;
count__40856 = G__41102;
i__40857 = G__41103;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40853);
if(temp__5457__auto__){
var seq__40853__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40853__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40853__$1);
var G__41104 = cljs.core.chunk_rest(seq__40853__$1);
var G__41105 = c__4550__auto__;
var G__41106 = cljs.core.count(c__4550__auto__);
var G__41107 = (0);
seq__40853 = G__41104;
chunk__40855 = G__41105;
count__40856 = G__41106;
i__40857 = G__41107;
continue;
} else {
var path = cljs.core.first(seq__40853__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40912_41108 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40915_41109 = null;
var count__40916_41110 = (0);
var i__40917_41111 = (0);
while(true){
if((i__40917_41111 < count__40916_41110)){
var node_41112 = chunk__40915_41109.cljs$core$IIndexed$_nth$arity$2(null,i__40917_41111);
var path_match_41113 = shadow.cljs.devtools.client.browser.match_paths(node_41112.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41113)){
var new_link_41114 = (function (){var G__40922 = node_41112.cloneNode(true);
G__40922.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41113),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40922;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41113], 0));

goog.dom.insertSiblingAfter(new_link_41114,node_41112);

goog.dom.removeNode(node_41112);


var G__41115 = seq__40912_41108;
var G__41116 = chunk__40915_41109;
var G__41117 = count__40916_41110;
var G__41118 = (i__40917_41111 + (1));
seq__40912_41108 = G__41115;
chunk__40915_41109 = G__41116;
count__40916_41110 = G__41117;
i__40917_41111 = G__41118;
continue;
} else {
var G__41119 = seq__40912_41108;
var G__41120 = chunk__40915_41109;
var G__41121 = count__40916_41110;
var G__41122 = (i__40917_41111 + (1));
seq__40912_41108 = G__41119;
chunk__40915_41109 = G__41120;
count__40916_41110 = G__41121;
i__40917_41111 = G__41122;
continue;
}
} else {
var temp__5457__auto___41123__$1 = cljs.core.seq(seq__40912_41108);
if(temp__5457__auto___41123__$1){
var seq__40912_41124__$1 = temp__5457__auto___41123__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40912_41124__$1)){
var c__4550__auto___41125 = cljs.core.chunk_first(seq__40912_41124__$1);
var G__41126 = cljs.core.chunk_rest(seq__40912_41124__$1);
var G__41127 = c__4550__auto___41125;
var G__41128 = cljs.core.count(c__4550__auto___41125);
var G__41129 = (0);
seq__40912_41108 = G__41126;
chunk__40915_41109 = G__41127;
count__40916_41110 = G__41128;
i__40917_41111 = G__41129;
continue;
} else {
var node_41130 = cljs.core.first(seq__40912_41124__$1);
var path_match_41131 = shadow.cljs.devtools.client.browser.match_paths(node_41130.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41131)){
var new_link_41132 = (function (){var G__40923 = node_41130.cloneNode(true);
G__40923.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41131),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40923;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41131], 0));

goog.dom.insertSiblingAfter(new_link_41132,node_41130);

goog.dom.removeNode(node_41130);


var G__41133 = cljs.core.next(seq__40912_41124__$1);
var G__41134 = null;
var G__41135 = (0);
var G__41136 = (0);
seq__40912_41108 = G__41133;
chunk__40915_41109 = G__41134;
count__40916_41110 = G__41135;
i__40917_41111 = G__41136;
continue;
} else {
var G__41137 = cljs.core.next(seq__40912_41124__$1);
var G__41138 = null;
var G__41139 = (0);
var G__41140 = (0);
seq__40912_41108 = G__41137;
chunk__40915_41109 = G__41138;
count__40916_41110 = G__41139;
i__40917_41111 = G__41140;
continue;
}
}
} else {
}
}
break;
}


var G__41141 = cljs.core.next(seq__40853__$1);
var G__41142 = null;
var G__41143 = (0);
var G__41144 = (0);
seq__40853 = G__41141;
chunk__40855 = G__41142;
count__40856 = G__41143;
i__40857 = G__41144;
continue;
} else {
var G__41145 = cljs.core.next(seq__40853__$1);
var G__41146 = null;
var G__41147 = (0);
var G__41148 = (0);
seq__40853 = G__41145;
chunk__40855 = G__41146;
count__40856 = G__41147;
i__40857 = G__41148;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__40924){
var map__40925 = p__40924;
var map__40925__$1 = (((((!((map__40925 == null))))?(((((map__40925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40925):map__40925);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40925__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40925__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__40925,map__40925__$1,id,js){
return (function (){
return eval(js);
});})(map__40925,map__40925__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__40927){
var map__40928 = p__40927;
var map__40928__$1 = (((((!((map__40928 == null))))?(((((map__40928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40928):map__40928);
var msg = map__40928__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40928__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40928__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40928__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__40928,map__40928__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__40930){
var map__40931 = p__40930;
var map__40931__$1 = (((((!((map__40931 == null))))?(((((map__40931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40931):map__40931);
var src = map__40931__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40931__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__40928,map__40928__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__40928,map__40928__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__40928,map__40928__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__40933){
var map__40934 = p__40933;
var map__40934__$1 = (((((!((map__40934 == null))))?(((((map__40934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40934):map__40934);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40934__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__40934,map__40934__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__40934,map__40934__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__40936){
var map__40937 = p__40936;
var map__40937__$1 = (((((!((map__40937 == null))))?(((((map__40937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40937):map__40937);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__40939){
var map__40940 = p__40939;
var map__40940__$1 = (((((!((map__40940 == null))))?(((((map__40940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40940):map__40940);
var msg = map__40940__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40940__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__40944 = type;
var G__40944__$1 = (((G__40944 instanceof cljs.core.Keyword))?G__40944.fqn:null);
switch (G__40944__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__40952 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__40953 = ((function (G__40952){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__40952))
;
var G__40954 = "POST";
var G__40955 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__40956 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__40952,G__40953,G__40954,G__40955,G__40956);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e40967){var e = e40967;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___41150 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___41150)){
var s_41151 = temp__5457__auto___41150;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_41151.onclose = ((function (s_41151,temp__5457__auto___41150){
return (function (e){
return null;
});})(s_41151,temp__5457__auto___41150))
;

s_41151.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
