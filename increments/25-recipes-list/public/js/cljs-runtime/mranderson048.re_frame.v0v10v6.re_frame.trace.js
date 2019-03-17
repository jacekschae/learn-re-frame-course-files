goog.provide('mranderson048.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
mranderson048.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
mranderson048.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
mranderson048.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.next_id = (function mranderson048$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace = (function mranderson048$re_frame$v0v10v6$re_frame$trace$start_trace(p__21449){
var map__21450 = p__21449;
var map__21450__$1 = (((((!((map__21450 == null))))?(((((map__21450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21450):map__21450);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),mranderson048.re_frame.v0v10v6.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], null);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce = (function mranderson048$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce = mranderson048.re_frame.v0v10v6.re_frame.trace.debounce((function mranderson048$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__21452_21479 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__21453_21480 = null;
var count__21454_21481 = (0);
var i__21455_21482 = (0);
while(true){
if((i__21455_21482 < count__21454_21481)){
var vec__21466_21483 = chunk__21453_21480.cljs$core$IIndexed$_nth$arity$2(null,i__21455_21482);
var k_21484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21466_21483,(0),null);
var cb_21485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21466_21483,(1),null);
try{var G__21470_21486 = cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces);
(cb_21485.cljs$core$IFn$_invoke$arity$1 ? cb_21485.cljs$core$IFn$_invoke$arity$1(G__21470_21486) : cb_21485.call(null,G__21470_21486));
}catch (e21469){var e_21487 = e21469;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21484,"while storing",cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_21487], 0));
}

var G__21488 = seq__21452_21479;
var G__21489 = chunk__21453_21480;
var G__21490 = count__21454_21481;
var G__21491 = (i__21455_21482 + (1));
seq__21452_21479 = G__21488;
chunk__21453_21480 = G__21489;
count__21454_21481 = G__21490;
i__21455_21482 = G__21491;
continue;
} else {
var temp__5457__auto___21494 = cljs.core.seq(seq__21452_21479);
if(temp__5457__auto___21494){
var seq__21452_21498__$1 = temp__5457__auto___21494;
if(cljs.core.chunked_seq_QMARK_(seq__21452_21498__$1)){
var c__4550__auto___21499 = cljs.core.chunk_first(seq__21452_21498__$1);
var G__21500 = cljs.core.chunk_rest(seq__21452_21498__$1);
var G__21501 = c__4550__auto___21499;
var G__21502 = cljs.core.count(c__4550__auto___21499);
var G__21503 = (0);
seq__21452_21479 = G__21500;
chunk__21453_21480 = G__21501;
count__21454_21481 = G__21502;
i__21455_21482 = G__21503;
continue;
} else {
var vec__21471_21507 = cljs.core.first(seq__21452_21498__$1);
var k_21508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471_21507,(0),null);
var cb_21509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471_21507,(1),null);
try{var G__21475_21510 = cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces);
(cb_21509.cljs$core$IFn$_invoke$arity$1 ? cb_21509.cljs$core$IFn$_invoke$arity$1(G__21475_21510) : cb_21509.call(null,G__21475_21510));
}catch (e21474){var e_21513 = e21474;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21508,"while storing",cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_21513], 0));
}

var G__21515 = cljs.core.next(seq__21452_21498__$1);
var G__21516 = null;
var G__21517 = (0);
var G__21518 = (0);
seq__21452_21479 = G__21515;
chunk__21453_21480 = G__21516;
count__21454_21481 = G__21517;
i__21455_21482 = G__21518;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time);
mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
(mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.trace.js.map
