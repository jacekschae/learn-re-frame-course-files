goog.provide('day8.re_frame_10x');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.styles');
goog.require('day8.re_frame_10x.view.container');
goog.require('day8.re_frame_10x.subs');
goog.require('day8.re_frame_10x.events');
goog.require('day8.re_frame_10x.db');
goog.require('re_frame.trace');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('goog.object');
goog.require('re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('mranderson048.reagent.v0v8v0.reagent.core');

/** @define {boolean} */
goog.define("day8.re_frame_10x.debug_QMARK_",false);
day8.re_frame_10x.fiber_component_path = (function day8$re_frame_10x$fiber_component_path(fiber){
var name = (function (){var G__25826 = fiber;
var G__25826__$1 = (((G__25826 == null))?null:(G__25826["type"]));
if((G__25826__$1 == null)){
return null;
} else {
return (G__25826__$1["displayName"]);
}
})();
var parent = (function (){var G__25832 = fiber;
if((G__25832 == null)){
return null;
} else {
return (G__25832["return"]);
}
})();
var path = (function (){var G__25833 = parent;
var G__25833__$1 = (((G__25833 == null))?null:(day8.re_frame_10x.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__25833) : day8.re_frame_10x.fiber_component_path.call(null,G__25833)));
if((G__25833__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25833__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
day8.re_frame_10x.component_path = (function day8$re_frame_10x$component_path(c){
var temp__5455__auto__ = (function (){var G__25834 = c;
if((G__25834 == null)){
return null;
} else {
return (G__25834["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var fiber = temp__5455__auto__;
return day8.re_frame_10x.fiber_component_path(fiber);
} else {
return reagent.impl.component.component_path(c);
}
});
day8.re_frame_10x.comp_name = (function day8$re_frame_10x$comp_name(c){
var n = (function (){var or__4131__auto__ = day8.re_frame_10x.component_path(c);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__25836 = c;
var G__25836__$1 = (((G__25836 == null))?null:G__25836.constructor);
if((G__25836__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name(G__25836__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return n;
} else {
return "";
}
});
day8.re_frame_10x.operation_name = cljs.core.memoize((function (component){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.component_path(component),/ > /));
}));
day8.re_frame_10x.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame_10x$mp_render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__25841 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25842 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame_10x.component_path(c)], null),new cljs.core.Keyword(null,"operation","operation",-1267664310),(day8.re_frame_10x.operation_name.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.operation_name.cljs$core$IFn$_invoke$arity$1(c) : day8.re_frame_10x.operation_name.call(null,c))], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25842;

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered(c);
var res = (((rat == null))?reagent.ratom.run_in_reaction(((function (rat,_,_STAR_current_trace_STAR__orig_val__25841,_STAR_current_trace_STAR__temp_val__25842,c){
return (function (){
return reagent.impl.component.do_render(c);
});})(rat,_,_STAR_current_trace_STAR__orig_val__25841,_STAR_current_trace_STAR__temp_val__25842,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22748__auto___25932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,(function (){var G__25844 = cljs_ratom;
var G__25845 = "watching";
var G__25846 = new cljs.core.Keyword(null,"none","none",1333468478);
return goog.object.get(G__25844,G__25845,G__25846);
})()):null)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,(function (){var G__25847 = cljs_ratom;
var G__25848 = "watching";
var G__25849 = new cljs.core.Keyword(null,"none","none",1333468478);
return goog.object.get(G__25847,G__25848,G__25849);
})()):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22748__auto___25932;

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___25933 = re_frame.interop.now();
var duration__22747__auto___25934 = (end__22746__auto___25933 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___25934,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___25933);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25841;
}} else {
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered(c);
var res = (((rat == null))?reagent.ratom.run_in_reaction(((function (rat,_,c){
return (function (){
return reagent.impl.component.do_render(c);
});})(rat,_,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22748__auto___25939 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,(function (){var G__25850 = cljs_ratom;
var G__25851 = "watching";
var G__25852 = new cljs.core.Keyword(null,"none","none",1333468478);
return goog.object.get(G__25850,G__25851,G__25852);
})()):null)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,(function (){var G__25853 = cljs_ratom;
var G__25854 = "watching";
var G__25855 = new cljs.core.Keyword(null,"none","none",1333468478);
return goog.object.get(G__25853,G__25854,G__25855);
})()):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22748__auto___25939;

} else {
}

return res;
}
}
})], null);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.real_custom_wrapper !== 'undefined')){
} else {
day8.re_frame_10x.real_custom_wrapper = reagent.impl.component.custom_wrapper;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.real_next_tick !== 'undefined')){
} else {
day8.re_frame_10x.real_next_tick = reagent.impl.batching.next_tick;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.real_schedule !== 'undefined')){
} else {
day8.re_frame_10x.real_schedule = reagent.impl.batching.schedule;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.do_after_render_trace_scheduled_QMARK_ !== 'undefined')){
} else {
day8.re_frame_10x.do_after_render_trace_scheduled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
day8.re_frame_10x.monkey_patch_reagent = (function day8$re_frame_10x$monkey_patch_reagent(){
reagent.impl.component.static_fns = day8.re_frame_10x.static_fns;

reagent.impl.component.custom_wrapper = (function (key,f){
var G__25856 = key;
var G__25856__$1 = (((G__25856 instanceof cljs.core.Keyword))?G__25856.fqn:null);
switch (G__25856__$1) {
case "componentWillUnmount":
return ((function (G__25856,G__25856__$1){
return (function (){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__25857_25943 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25858_25944 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),key,new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.comp_name(c),/ > /)),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame_10x.component_path(c),new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id((c["cljsRatom"]))], null)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25858_25944;

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___25945 = re_frame.interop.now();
var duration__22747__auto___25946 = (end__22746__auto___25945 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___25946,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___25945);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25857_25943;
}} else {
}

return (day8.re_frame_10x.real_custom_wrapper.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.real_custom_wrapper.cljs$core$IFn$_invoke$arity$2(key,f) : day8.re_frame_10x.real_custom_wrapper.call(null,key,f)).call(c,c);
});
;})(G__25856,G__25856__$1))

break;
default:
return (day8.re_frame_10x.real_custom_wrapper.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.real_custom_wrapper.cljs$core$IFn$_invoke$arity$2(key,f) : day8.re_frame_10x.real_custom_wrapper.call(null,key,f));

}
});

return reagent.impl.batching.next_tick = (function (f){
var G__25862 = (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__25863 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25864 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf","raf",-1295410152)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25864;

try{try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__25867_25947 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25868_25948 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25868_25948;

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___25949 = re_frame.interop.now();
var duration__22747__auto___25950 = (end__22746__auto___25949 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___25950,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___25949);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25867_25947;
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__25877 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25878 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25878;

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___25951 = re_frame.interop.now();
var duration__22747__auto___25952 = (end__22746__auto___25951 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___25952,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___25951);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25877;
}} else {
return null;
}
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___25953 = re_frame.interop.now();
var duration__22747__auto___25954 = (end__22746__auto___25953 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___25954,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___25953);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25863;
}} else {
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__25880_25955 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25881_25956 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25881_25956;

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___25957 = re_frame.interop.now();
var duration__22747__auto___25958 = (end__22746__auto___25957 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___25958,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___25957);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25880_25955;
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__25882 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25883 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25883;

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___25959 = re_frame.interop.now();
var duration__22747__auto___25960 = (end__22746__auto___25959 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___25960,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___25959);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25882;
}} else {
return null;
}
} else {
return null;
}
}
});
return (day8.re_frame_10x.real_next_tick.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.real_next_tick.cljs$core$IFn$_invoke$arity$1(G__25862) : day8.re_frame_10x.real_next_tick.call(null,G__25862));
});
});
/**
 * Sets up any initial state that needs to be there for tracing. Does not enable tracing.
 */
day8.re_frame_10x.init_tracing_BANG_ = (function day8$re_frame_10x$init_tracing_BANG_(){
return day8.re_frame_10x.monkey_patch_reagent();
});
day8.re_frame_10x.resizer_style = (function day8$re_frame_10x$resizer_style(draggable_area){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (draggable_area / (2)))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null);
});
day8.re_frame_10x.ease_transition = "left 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out";
day8.re_frame_10x.devtools_outer = (function day8$re_frame_10x$devtools_outer(opts){
var position = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833));
var panel_width_PERCENT_ = (function (){var G__25903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25903) : mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__25903));
})();
var showing_QMARK_ = (function (){var G__25904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25904) : mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__25904));
})();
var dragging_QMARK_ = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var pin_to_bottom_QMARK_ = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var selected_tab = (function (){var G__25907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25907) : mranderson048.re_frame.v0v10v6.re_frame.core.subscribe.call(null,G__25907));
})();
var window_width = mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.innerWidth);
var handle_window_resize = (function (){
var G__25908_25961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),window.innerWidth], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25908_25961) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__25908_25961));

return ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width){
return (function (e){
var window_width_val = window.innerWidth;
var G__25910_25962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),window_width_val], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25910_25962) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__25910_25962));

return cljs.core.reset_BANG_(window_width,window_width_val);
});
;})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width))
})()
;
var handle_keys = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize){
return (function (e){
var combo_key_QMARK_ = (function (){var or__4131__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return e.altKey;
}
}
})();
var tag_name = e.target.tagName;
var code = e.code;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(cljs.core.truth_((function (){var and__4120__auto__ = (!(entering_input_QMARK_));
if(and__4120__auto__){
return combo_key_QMARK_;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"KeyH");
if(and__4120__auto__){
return e.ctrlKey;
} else {
return and__4120__auto__;
}
})())){
var G__25914_25963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573)], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25914_25963) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__25914_25963));

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize))
;
var handle_mousemove = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys){
return (function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var x = e.clientX;
var y = e.clientY;
var new_window_width = window.innerWidth;
e.preventDefault();

var G__25915_25964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),((new_window_width - x) / new_window_width)], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25915_25964) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__25915_25964));

return cljs.core.reset_BANG_(window_width,new_window_width);
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys))
;
var handle_mouse_up = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove){
return (function (e){
return cljs.core.reset_BANG_(dragging_QMARK_,false);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove))
;
return mranderson048.reagent.v0v8v0.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.addEventListener("keydown",handle_keys);

window.addEventListener("mousemove",handle_mousemove);

window.addEventListener("mouseup",handle_mouse_up);

return window.addEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.removeEventListener("keydown",handle_keys);

window.removeEventListener("mousemove",handle_mousemove);

window.removeEventListener("mouseup",handle_mouse_up);

return window.removeEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
var draggable_area = (10);
var left = (cljs.core.truth_(cljs.core.deref(showing_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((1) - cljs.core.deref(panel_width_PERCENT_)))),"%"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(window_width)),"px"].join(''));
var transition = (cljs.core.truth_(cljs.core.deref(dragging_QMARK_))?"":day8.re_frame_10x.ease_transition);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrapper","div.panel-wrapper",-807046921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99999999)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["rgba(0, 0, 0, 0.3) 0px 0px 4px",transition,"0px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * cljs.core.deref(panel_width_PERCENT_))),"%"].join(''),"white",(1),"flex","fixed","100%",left])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-resizer","div.panel-resizer",1762174164),(cljs.core.truth_(cljs.core.deref(showing_QMARK_))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.resizer_style(draggable_area),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
return cljs.core.reset_BANG_(dragging_QMARK_,true);
});})(draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.container.devtools_inner,opts], null)], null)], null);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null));
});
day8.re_frame_10x.panel_div = (function day8$re_frame_10x$panel_div(){
var id = "--re-frame-10x--";
var panel = document.getElementById(id);
if(cljs.core.truth_(panel)){
return panel;
} else {
var new_panel = document.createElement("div");
new_panel.setAttribute("id",id);

document.body.appendChild(new_panel);

window.focus(new_panel);

return new_panel;
}
});
day8.re_frame_10x.inject_devtools_BANG_ = (function day8$re_frame_10x$inject_devtools_BANG_(){
day8.re_frame_10x.styles.inject_trace_styles(document);

return mranderson048.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.devtools_outer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),day8.re_frame_10x.debug_QMARK_], null)], null),day8.re_frame_10x.panel_div());
});
day8.re_frame_10x.traced_result = (function day8$re_frame_10x$traced_result(trace_id,fragment_id){
var trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25926_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trace_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__25926_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null))));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142),fragment_id,new cljs.core.Keyword(null,"result","result",1415092211)], null));
});
day8.re_frame_10x.init_db_BANG_ = (function day8$re_frame_10x$init_db_BANG_(){
return day8.re_frame_10x.db.init_db(day8.re_frame_10x.debug_QMARK_);
});
day8.re_frame_10x.factory_reset_BANG_ = (function day8$re_frame_10x$factory_reset_BANG_(){
var G__25931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25931) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__25931));
});
goog.exportSymbol('day8.re_frame_10x.factory_reset_BANG_', day8.re_frame_10x.factory_reset_BANG_);

//# sourceMappingURL=day8.re_frame_10x.js.map
