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
var len__4730__auto___40935 = arguments.length;
var i__4731__auto___40936 = (0);
while(true){
if((i__4731__auto___40936 < len__4730__auto___40935)){
args__4736__auto__.push((arguments[i__4731__auto___40936]));

var G__40937 = (i__4731__auto___40936 + (1));
i__4731__auto___40936 = G__40937;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40685){
var G__40686 = cljs.core.first(seq40685);
var seq40685__$1 = cljs.core.next(seq40685);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40686,seq40685__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__40698){
var map__40699 = p__40698;
var map__40699__$1 = (((((!((map__40699 == null))))?(((((map__40699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40699):map__40699);
var src = map__40699__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__40705 = cljs.core.seq(sources);
var chunk__40706 = null;
var count__40707 = (0);
var i__40708 = (0);
while(true){
if((i__40708 < count__40707)){
var map__40713 = chunk__40706.cljs$core$IIndexed$_nth$arity$2(null,i__40708);
var map__40713__$1 = (((((!((map__40713 == null))))?(((((map__40713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40713):map__40713);
var src = map__40713__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__40938 = seq__40705;
var G__40939 = chunk__40706;
var G__40940 = count__40707;
var G__40941 = (i__40708 + (1));
seq__40705 = G__40938;
chunk__40706 = G__40939;
count__40707 = G__40940;
i__40708 = G__40941;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40705);
if(temp__5457__auto__){
var seq__40705__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40705__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40705__$1);
var G__40942 = cljs.core.chunk_rest(seq__40705__$1);
var G__40943 = c__4550__auto__;
var G__40944 = cljs.core.count(c__4550__auto__);
var G__40945 = (0);
seq__40705 = G__40942;
chunk__40706 = G__40943;
count__40707 = G__40944;
i__40708 = G__40945;
continue;
} else {
var map__40726 = cljs.core.first(seq__40705__$1);
var map__40726__$1 = (((((!((map__40726 == null))))?(((((map__40726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40726):map__40726);
var src = map__40726__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40726__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40726__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40726__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40726__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__40946 = cljs.core.next(seq__40705__$1);
var G__40947 = null;
var G__40948 = (0);
var G__40949 = (0);
seq__40705 = G__40946;
chunk__40706 = G__40947;
count__40707 = G__40948;
i__40708 = G__40949;
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
var seq__40729 = cljs.core.seq(js_requires);
var chunk__40730 = null;
var count__40731 = (0);
var i__40732 = (0);
while(true){
if((i__40732 < count__40731)){
var js_ns = chunk__40730.cljs$core$IIndexed$_nth$arity$2(null,i__40732);
var require_str_40952 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40952);


var G__40953 = seq__40729;
var G__40954 = chunk__40730;
var G__40955 = count__40731;
var G__40956 = (i__40732 + (1));
seq__40729 = G__40953;
chunk__40730 = G__40954;
count__40731 = G__40955;
i__40732 = G__40956;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40729);
if(temp__5457__auto__){
var seq__40729__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40729__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40729__$1);
var G__40957 = cljs.core.chunk_rest(seq__40729__$1);
var G__40958 = c__4550__auto__;
var G__40959 = cljs.core.count(c__4550__auto__);
var G__40960 = (0);
seq__40729 = G__40957;
chunk__40730 = G__40958;
count__40731 = G__40959;
i__40732 = G__40960;
continue;
} else {
var js_ns = cljs.core.first(seq__40729__$1);
var require_str_40961 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40961);


var G__40962 = cljs.core.next(seq__40729__$1);
var G__40963 = null;
var G__40964 = (0);
var G__40965 = (0);
seq__40729 = G__40962;
chunk__40730 = G__40963;
count__40731 = G__40964;
i__40732 = G__40965;
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
var G__40738 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__40738) : callback.call(null,G__40738));
} else {
var G__40743 = shadow.cljs.devtools.client.env.files_url();
var G__40744 = ((function (G__40743){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__40743))
;
var G__40745 = "POST";
var G__40746 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__40747 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__40743,G__40744,G__40745,G__40746,G__40747);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__40766){
var map__40767 = p__40766;
var map__40767__$1 = (((((!((map__40767 == null))))?(((((map__40767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40767):map__40767);
var msg = map__40767__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40767__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40767__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__40769 = info;
var map__40769__$1 = (((((!((map__40769 == null))))?(((((map__40769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40769):map__40769);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40769__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40769__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40771(s__40772){
return (new cljs.core.LazySeq(null,((function (map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info){
return (function (){
var s__40772__$1 = s__40772;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__40772__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__40778 = cljs.core.first(xs__6012__auto__);
var map__40778__$1 = (((((!((map__40778 == null))))?(((((map__40778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40778):map__40778);
var src = map__40778__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40778__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40778__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__40772__$1,map__40778,map__40778__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40771_$_iter__40773(s__40774){
return (new cljs.core.LazySeq(null,((function (s__40772__$1,map__40778,map__40778__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info){
return (function (){
var s__40774__$1 = s__40774;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__40774__$1);
if(temp__5457__auto____$1){
var s__40774__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40774__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40774__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40776 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40775 = (0);
while(true){
if((i__40775 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40775);
cljs.core.chunk_append(b__40776,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40969 = (i__40775 + (1));
i__40775 = G__40969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40776),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40771_$_iter__40773(cljs.core.chunk_rest(s__40774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40776),null);
}
} else {
var warning = cljs.core.first(s__40774__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40771_$_iter__40773(cljs.core.rest(s__40774__$2)));
}
} else {
return null;
}
break;
}
});})(s__40772__$1,map__40778,map__40778__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info))
,null,null));
});})(s__40772__$1,map__40778,map__40778__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40771(cljs.core.rest(s__40772__$1)));
} else {
var G__40970 = cljs.core.rest(s__40772__$1);
s__40772__$1 = G__40970;
continue;
}
} else {
var G__40971 = cljs.core.rest(s__40772__$1);
s__40772__$1 = G__40971;
continue;
}
} else {
return null;
}
break;
}
});})(map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info))
,null,null));
});})(map__40769,map__40769__$1,sources,compiled,map__40767,map__40767__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__40784_40972 = cljs.core.seq(warnings);
var chunk__40785_40973 = null;
var count__40786_40974 = (0);
var i__40787_40975 = (0);
while(true){
if((i__40787_40975 < count__40786_40974)){
var map__40793_40976 = chunk__40785_40973.cljs$core$IIndexed$_nth$arity$2(null,i__40787_40975);
var map__40793_40977__$1 = (((((!((map__40793_40976 == null))))?(((((map__40793_40976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40793_40976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40793_40976):map__40793_40976);
var w_40978 = map__40793_40977__$1;
var msg_40979__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40793_40977__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40793_40977__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40793_40977__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40793_40977__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40982)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40980),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40981),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40979__$1)].join(''));


var G__40983 = seq__40784_40972;
var G__40984 = chunk__40785_40973;
var G__40985 = count__40786_40974;
var G__40986 = (i__40787_40975 + (1));
seq__40784_40972 = G__40983;
chunk__40785_40973 = G__40984;
count__40786_40974 = G__40985;
i__40787_40975 = G__40986;
continue;
} else {
var temp__5457__auto___40987 = cljs.core.seq(seq__40784_40972);
if(temp__5457__auto___40987){
var seq__40784_40988__$1 = temp__5457__auto___40987;
if(cljs.core.chunked_seq_QMARK_(seq__40784_40988__$1)){
var c__4550__auto___40989 = cljs.core.chunk_first(seq__40784_40988__$1);
var G__40990 = cljs.core.chunk_rest(seq__40784_40988__$1);
var G__40991 = c__4550__auto___40989;
var G__40992 = cljs.core.count(c__4550__auto___40989);
var G__40993 = (0);
seq__40784_40972 = G__40990;
chunk__40785_40973 = G__40991;
count__40786_40974 = G__40992;
i__40787_40975 = G__40993;
continue;
} else {
var map__40797_40994 = cljs.core.first(seq__40784_40988__$1);
var map__40797_40995__$1 = (((((!((map__40797_40994 == null))))?(((((map__40797_40994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40797_40994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40797_40994):map__40797_40994);
var w_40996 = map__40797_40995__$1;
var msg_40997__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40797_40995__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40797_40995__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40797_40995__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40797_40995__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41000)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40998),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40999),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40997__$1)].join(''));


var G__41001 = cljs.core.next(seq__40784_40988__$1);
var G__41002 = null;
var G__41003 = (0);
var G__41004 = (0);
seq__40784_40972 = G__41001;
chunk__40785_40973 = G__41002;
count__40786_40974 = G__41003;
i__40787_40975 = G__41004;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info){
return (function (p__40799){
var map__40800 = p__40799;
var map__40800__$1 = (((((!((map__40800 == null))))?(((((map__40800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40800):map__40800);
var src = map__40800__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info){
return (function (p__40802){
var map__40803 = p__40802;
var map__40803__$1 = (((((!((map__40803 == null))))?(((((map__40803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40803):map__40803);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40803__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info){
return (function (p__40805){
var map__40806 = p__40805;
var map__40806__$1 = (((((!((map__40806 == null))))?(((((map__40806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40806):map__40806);
var rc = map__40806__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40806__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info){
return (function (p1__40765_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40765_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__40769,map__40769__$1,sources,compiled,warnings,map__40767,map__40767__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__40808){
var map__40809 = p__40808;
var map__40809__$1 = (((((!((map__40809 == null))))?(((((map__40809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40809):map__40809);
var msg = map__40809__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40811 = cljs.core.seq(updates);
var chunk__40813 = null;
var count__40814 = (0);
var i__40815 = (0);
while(true){
if((i__40815 < count__40814)){
var path = chunk__40813.cljs$core$IIndexed$_nth$arity$2(null,i__40815);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40841_41005 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40844_41006 = null;
var count__40845_41007 = (0);
var i__40846_41008 = (0);
while(true){
if((i__40846_41008 < count__40845_41007)){
var node_41009 = chunk__40844_41006.cljs$core$IIndexed$_nth$arity$2(null,i__40846_41008);
var path_match_41010 = shadow.cljs.devtools.client.browser.match_paths(node_41009.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41010)){
var new_link_41011 = (function (){var G__40854 = node_41009.cloneNode(true);
G__40854.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41010),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40854;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41010], 0));

goog.dom.insertSiblingAfter(new_link_41011,node_41009);

goog.dom.removeNode(node_41009);


var G__41012 = seq__40841_41005;
var G__41013 = chunk__40844_41006;
var G__41014 = count__40845_41007;
var G__41015 = (i__40846_41008 + (1));
seq__40841_41005 = G__41012;
chunk__40844_41006 = G__41013;
count__40845_41007 = G__41014;
i__40846_41008 = G__41015;
continue;
} else {
var G__41016 = seq__40841_41005;
var G__41017 = chunk__40844_41006;
var G__41018 = count__40845_41007;
var G__41019 = (i__40846_41008 + (1));
seq__40841_41005 = G__41016;
chunk__40844_41006 = G__41017;
count__40845_41007 = G__41018;
i__40846_41008 = G__41019;
continue;
}
} else {
var temp__5457__auto___41020 = cljs.core.seq(seq__40841_41005);
if(temp__5457__auto___41020){
var seq__40841_41021__$1 = temp__5457__auto___41020;
if(cljs.core.chunked_seq_QMARK_(seq__40841_41021__$1)){
var c__4550__auto___41022 = cljs.core.chunk_first(seq__40841_41021__$1);
var G__41023 = cljs.core.chunk_rest(seq__40841_41021__$1);
var G__41024 = c__4550__auto___41022;
var G__41025 = cljs.core.count(c__4550__auto___41022);
var G__41026 = (0);
seq__40841_41005 = G__41023;
chunk__40844_41006 = G__41024;
count__40845_41007 = G__41025;
i__40846_41008 = G__41026;
continue;
} else {
var node_41027 = cljs.core.first(seq__40841_41021__$1);
var path_match_41028 = shadow.cljs.devtools.client.browser.match_paths(node_41027.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41028)){
var new_link_41029 = (function (){var G__40855 = node_41027.cloneNode(true);
G__40855.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41028),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40855;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41028], 0));

goog.dom.insertSiblingAfter(new_link_41029,node_41027);

goog.dom.removeNode(node_41027);


var G__41030 = cljs.core.next(seq__40841_41021__$1);
var G__41031 = null;
var G__41032 = (0);
var G__41033 = (0);
seq__40841_41005 = G__41030;
chunk__40844_41006 = G__41031;
count__40845_41007 = G__41032;
i__40846_41008 = G__41033;
continue;
} else {
var G__41034 = cljs.core.next(seq__40841_41021__$1);
var G__41035 = null;
var G__41036 = (0);
var G__41037 = (0);
seq__40841_41005 = G__41034;
chunk__40844_41006 = G__41035;
count__40845_41007 = G__41036;
i__40846_41008 = G__41037;
continue;
}
}
} else {
}
}
break;
}


var G__41038 = seq__40811;
var G__41039 = chunk__40813;
var G__41040 = count__40814;
var G__41041 = (i__40815 + (1));
seq__40811 = G__41038;
chunk__40813 = G__41039;
count__40814 = G__41040;
i__40815 = G__41041;
continue;
} else {
var G__41042 = seq__40811;
var G__41043 = chunk__40813;
var G__41044 = count__40814;
var G__41045 = (i__40815 + (1));
seq__40811 = G__41042;
chunk__40813 = G__41043;
count__40814 = G__41044;
i__40815 = G__41045;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40811);
if(temp__5457__auto__){
var seq__40811__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40811__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40811__$1);
var G__41046 = cljs.core.chunk_rest(seq__40811__$1);
var G__41047 = c__4550__auto__;
var G__41048 = cljs.core.count(c__4550__auto__);
var G__41049 = (0);
seq__40811 = G__41046;
chunk__40813 = G__41047;
count__40814 = G__41048;
i__40815 = G__41049;
continue;
} else {
var path = cljs.core.first(seq__40811__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40860_41050 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40863_41051 = null;
var count__40864_41052 = (0);
var i__40865_41053 = (0);
while(true){
if((i__40865_41053 < count__40864_41052)){
var node_41054 = chunk__40863_41051.cljs$core$IIndexed$_nth$arity$2(null,i__40865_41053);
var path_match_41055 = shadow.cljs.devtools.client.browser.match_paths(node_41054.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41055)){
var new_link_41056 = (function (){var G__40885 = node_41054.cloneNode(true);
G__40885.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41055),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40885;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41055], 0));

goog.dom.insertSiblingAfter(new_link_41056,node_41054);

goog.dom.removeNode(node_41054);


var G__41057 = seq__40860_41050;
var G__41058 = chunk__40863_41051;
var G__41059 = count__40864_41052;
var G__41060 = (i__40865_41053 + (1));
seq__40860_41050 = G__41057;
chunk__40863_41051 = G__41058;
count__40864_41052 = G__41059;
i__40865_41053 = G__41060;
continue;
} else {
var G__41061 = seq__40860_41050;
var G__41062 = chunk__40863_41051;
var G__41063 = count__40864_41052;
var G__41064 = (i__40865_41053 + (1));
seq__40860_41050 = G__41061;
chunk__40863_41051 = G__41062;
count__40864_41052 = G__41063;
i__40865_41053 = G__41064;
continue;
}
} else {
var temp__5457__auto___41065__$1 = cljs.core.seq(seq__40860_41050);
if(temp__5457__auto___41065__$1){
var seq__40860_41066__$1 = temp__5457__auto___41065__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40860_41066__$1)){
var c__4550__auto___41067 = cljs.core.chunk_first(seq__40860_41066__$1);
var G__41068 = cljs.core.chunk_rest(seq__40860_41066__$1);
var G__41069 = c__4550__auto___41067;
var G__41070 = cljs.core.count(c__4550__auto___41067);
var G__41071 = (0);
seq__40860_41050 = G__41068;
chunk__40863_41051 = G__41069;
count__40864_41052 = G__41070;
i__40865_41053 = G__41071;
continue;
} else {
var node_41072 = cljs.core.first(seq__40860_41066__$1);
var path_match_41073 = shadow.cljs.devtools.client.browser.match_paths(node_41072.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41073)){
var new_link_41074 = (function (){var G__40889 = node_41072.cloneNode(true);
G__40889.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41073),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40889;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41073], 0));

goog.dom.insertSiblingAfter(new_link_41074,node_41072);

goog.dom.removeNode(node_41072);


var G__41075 = cljs.core.next(seq__40860_41066__$1);
var G__41076 = null;
var G__41077 = (0);
var G__41078 = (0);
seq__40860_41050 = G__41075;
chunk__40863_41051 = G__41076;
count__40864_41052 = G__41077;
i__40865_41053 = G__41078;
continue;
} else {
var G__41079 = cljs.core.next(seq__40860_41066__$1);
var G__41080 = null;
var G__41081 = (0);
var G__41082 = (0);
seq__40860_41050 = G__41079;
chunk__40863_41051 = G__41080;
count__40864_41052 = G__41081;
i__40865_41053 = G__41082;
continue;
}
}
} else {
}
}
break;
}


var G__41083 = cljs.core.next(seq__40811__$1);
var G__41084 = null;
var G__41085 = (0);
var G__41086 = (0);
seq__40811 = G__41083;
chunk__40813 = G__41084;
count__40814 = G__41085;
i__40815 = G__41086;
continue;
} else {
var G__41088 = cljs.core.next(seq__40811__$1);
var G__41089 = null;
var G__41090 = (0);
var G__41091 = (0);
seq__40811 = G__41088;
chunk__40813 = G__41089;
count__40814 = G__41090;
i__40815 = G__41091;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__40904){
var map__40905 = p__40904;
var map__40905__$1 = (((((!((map__40905 == null))))?(((((map__40905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40905):map__40905);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40905__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40905__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__40905,map__40905__$1,id,js){
return (function (){
return eval(js);
});})(map__40905,map__40905__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__40907){
var map__40908 = p__40907;
var map__40908__$1 = (((((!((map__40908 == null))))?(((((map__40908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40908):map__40908);
var msg = map__40908__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40908__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40908__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40908__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40908__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__40908,map__40908__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__40910){
var map__40911 = p__40910;
var map__40911__$1 = (((((!((map__40911 == null))))?(((((map__40911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40911):map__40911);
var src = map__40911__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40911__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__40908,map__40908__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__40908,map__40908__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__40908,map__40908__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__40913){
var map__40914 = p__40913;
var map__40914__$1 = (((((!((map__40914 == null))))?(((((map__40914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40914):map__40914);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__40914,map__40914__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__40914,map__40914__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__40919){
var map__40920 = p__40919;
var map__40920__$1 = (((((!((map__40920 == null))))?(((((map__40920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40920):map__40920);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40920__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40920__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__40925){
var map__40926 = p__40925;
var map__40926__$1 = (((((!((map__40926 == null))))?(((((map__40926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40926):map__40926);
var msg = map__40926__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40926__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__40928 = type;
var G__40928__$1 = (((G__40928 instanceof cljs.core.Keyword))?G__40928.fqn:null);
switch (G__40928__$1) {
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
var G__40929 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__40930 = ((function (G__40929){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__40929))
;
var G__40931 = "POST";
var G__40932 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__40933 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__40929,G__40930,G__40931,G__40932,G__40933);
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
}catch (e40934){var e = e40934;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___41154 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___41154)){
var s_41155 = temp__5457__auto___41154;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_41155.onclose = ((function (s_41155,temp__5457__auto___41154){
return (function (e){
return null;
});})(s_41155,temp__5457__auto___41154))
;

s_41155.close();

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
