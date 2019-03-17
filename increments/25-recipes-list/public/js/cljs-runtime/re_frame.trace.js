goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22768){
var map__22769 = p__22768;
var map__22769__$1 = (((((!((map__22769 == null))))?(((((map__22769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22769):map__22769);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22773_22802 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22774_22803 = null;
var count__22775_22804 = (0);
var i__22776_22805 = (0);
while(true){
if((i__22776_22805 < count__22775_22804)){
var vec__22788_22806 = chunk__22774_22803.cljs$core$IIndexed$_nth$arity$2(null,i__22776_22805);
var k_22807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788_22806,(0),null);
var cb_22808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788_22806,(1),null);
try{var G__22792_22809 = cljs.core.deref(re_frame.trace.traces);
(cb_22808.cljs$core$IFn$_invoke$arity$1 ? cb_22808.cljs$core$IFn$_invoke$arity$1(G__22792_22809) : cb_22808.call(null,G__22792_22809));
}catch (e22791){var e_22810 = e22791;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22807,"while storing",cljs.core.deref(re_frame.trace.traces),e_22810], 0));
}

var G__22811 = seq__22773_22802;
var G__22812 = chunk__22774_22803;
var G__22813 = count__22775_22804;
var G__22814 = (i__22776_22805 + (1));
seq__22773_22802 = G__22811;
chunk__22774_22803 = G__22812;
count__22775_22804 = G__22813;
i__22776_22805 = G__22814;
continue;
} else {
var temp__5457__auto___22815 = cljs.core.seq(seq__22773_22802);
if(temp__5457__auto___22815){
var seq__22773_22816__$1 = temp__5457__auto___22815;
if(cljs.core.chunked_seq_QMARK_(seq__22773_22816__$1)){
var c__4550__auto___22817 = cljs.core.chunk_first(seq__22773_22816__$1);
var G__22818 = cljs.core.chunk_rest(seq__22773_22816__$1);
var G__22819 = c__4550__auto___22817;
var G__22820 = cljs.core.count(c__4550__auto___22817);
var G__22821 = (0);
seq__22773_22802 = G__22818;
chunk__22774_22803 = G__22819;
count__22775_22804 = G__22820;
i__22776_22805 = G__22821;
continue;
} else {
var vec__22793_22822 = cljs.core.first(seq__22773_22816__$1);
var k_22823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22793_22822,(0),null);
var cb_22824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22793_22822,(1),null);
try{var G__22798_22825 = cljs.core.deref(re_frame.trace.traces);
(cb_22824.cljs$core$IFn$_invoke$arity$1 ? cb_22824.cljs$core$IFn$_invoke$arity$1(G__22798_22825) : cb_22824.call(null,G__22798_22825));
}catch (e22796){var e_22826 = e22796;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22823,"while storing",cljs.core.deref(re_frame.trace.traces),e_22826], 0));
}

var G__22827 = cljs.core.next(seq__22773_22816__$1);
var G__22828 = null;
var G__22829 = (0);
var G__22830 = (0);
seq__22773_22802 = G__22827;
chunk__22774_22803 = G__22828;
count__22775_22804 = G__22829;
i__22776_22805 = G__22830;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
