goog.provide('mranderson048.re_frame.v0v10v6.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.subs.kind) : mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__21508_21608 = cljs.core.seq(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction));
var chunk__21509_21609 = null;
var count__21510_21610 = (0);
var i__21511_21611 = (0);
while(true){
if((i__21511_21611 < count__21510_21610)){
var vec__21520_21612 = chunk__21509_21609.cljs$core$IIndexed$_nth$arity$2(null,i__21511_21611);
var k_21613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21520_21612,(0),null);
var rxn_21614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21520_21612,(1),null);
mranderson048.re_frame.v0v10v6.re_frame.interop.dispose_BANG_(rxn_21614);


var G__21615 = seq__21508_21608;
var G__21616 = chunk__21509_21609;
var G__21617 = count__21510_21610;
var G__21618 = (i__21511_21611 + (1));
seq__21508_21608 = G__21615;
chunk__21509_21609 = G__21616;
count__21510_21610 = G__21617;
i__21511_21611 = G__21618;
continue;
} else {
var temp__5457__auto___21619 = cljs.core.seq(seq__21508_21608);
if(temp__5457__auto___21619){
var seq__21508_21620__$1 = temp__5457__auto___21619;
if(cljs.core.chunked_seq_QMARK_(seq__21508_21620__$1)){
var c__4550__auto___21621 = cljs.core.chunk_first(seq__21508_21620__$1);
var G__21622 = cljs.core.chunk_rest(seq__21508_21620__$1);
var G__21623 = c__4550__auto___21621;
var G__21624 = cljs.core.count(c__4550__auto___21621);
var G__21625 = (0);
seq__21508_21608 = G__21622;
chunk__21509_21609 = G__21623;
count__21510_21610 = G__21624;
i__21511_21611 = G__21625;
continue;
} else {
var vec__21525_21629 = cljs.core.first(seq__21508_21620__$1);
var k_21630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21525_21629,(0),null);
var rxn_21631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21525_21629,(1),null);
mranderson048.re_frame.v0v10v6.re_frame.interop.dispose_BANG_(rxn_21631);


var G__21632 = cljs.core.next(seq__21508_21620__$1);
var G__21633 = null;
var G__21634 = (0);
var G__21635 = (0);
seq__21508_21608 = G__21632;
chunk__21509_21609 = G__21633;
count__21510_21610 = G__21634;
i__21511_21611 = G__21635;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$subs$clear_all_handlers_BANG_(){
mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.subs.kind);

return mranderson048.re_frame.v0v10v6.re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return = (function mranderson048$re_frame$v0v10v6$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson048.re_frame.v0v10v6.re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21530 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21531 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(r)], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21531;

try{try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (_STAR_current_trace_STAR__orig_val__21530,_STAR_current_trace_STAR__temp_val__21531,cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,cache_key)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key);
} else {
return query_cache;
}
});})(_STAR_current_trace_STAR__orig_val__21530,_STAR_current_trace_STAR__temp_val__21531,cache_key))
);
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__21429__auto___21636 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__21430__auto___21637 = (end__21429__auto___21636 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21430__auto___21637,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__21429__auto___21636);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21530;
}} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,cache_key)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key);
} else {
return query_cache;
}
});})(cache_key))
);
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction,((function (cache_key){
return (function (query_cache){
if(mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_(query_cache,cache_key)){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",cache_key], 0));
} else {
}
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_cache,cache_key,r);
});})(cache_key))
);

if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21640 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21640;

} else {
}

return r;
});
mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup = (function mranderson048$re_frame$v0v10v6$re_frame$subs$cache_lookup(var_args){
var G__21535 = arguments.length;
switch (G__21535) {
case 1:
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson048.re-frame.v0v10v6.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe = (function mranderson048$re_frame$v0v10v6$re_frame$subs$subscribe(var_args){
var G__21541 = arguments.length;
switch (G__21541) {
case 1:
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21542 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21543 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21543;

try{try{var temp__5455__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21647 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21647;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21650 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21650;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21653 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21653;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query) : handler_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query)));
}
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__21429__auto___21654 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__21430__auto___21655 = (end__21429__auto___21654 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21430__auto___21655,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__21429__auto___21654);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21542;
}} else {
var temp__5455__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21656 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21656;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21657 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21657;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21658 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21658;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query) : handler_fn.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,query)));
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21546 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21547 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21547;

try{try{var temp__5455__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21659 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21659;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21660 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21660;

} else {
}

if(mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___21661 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___21661)){
var not_reactive_21662 = temp__5457__auto___21661;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_21662], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21663 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21663;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR__orig_val__21546,_STAR_current_trace_STAR__temp_val__21547){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR__orig_val__21546,_STAR_current_trace_STAR__temp_val__21547))
);
var sub = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR__orig_val__21546,_STAR_current_trace_STAR__temp_val__21547){
return (function (){
var G__21551 = mranderson048.re_frame.v0v10v6.re_frame.db.app_db;
var G__21552 = query;
var G__21553 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__21551,G__21552,G__21553) : handler_fn.call(null,G__21551,G__21552,G__21553));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR__orig_val__21546,_STAR_current_trace_STAR__temp_val__21547))
);
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return(query,dynv,mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR__orig_val__21546,_STAR_current_trace_STAR__temp_val__21547){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR__orig_val__21546,_STAR_current_trace_STAR__temp_val__21547))
));
}
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__21429__auto___21666 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__21430__auto___21667 = (end__21429__auto___21666 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21430__auto___21667,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__21429__auto___21666);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21546;
}} else {
var temp__5455__auto__ = mranderson048.re_frame.v0v10v6.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21668 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21668;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21670 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21670;

} else {
}

if(mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___21671 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___21671)){
var not_reactive_21672 = temp__5457__auto___21671;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_21672], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21673 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21673;

} else {
}

return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__))
);
var sub = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5455__auto__){
return (function (){
var G__21557 = mranderson048.re_frame.v0v10v6.re_frame.db.app_db;
var G__21558 = query;
var G__21559 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__21557,G__21558,G__21559) : handler_fn.call(null,G__21557,G__21558,G__21559));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__))
);
return mranderson048.re_frame.v0v10v6.re_frame.subs.cache_and_return(query,dynv,mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__))
));
}
}
}
});

mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.map_vals = (function mranderson048$re_frame$v0v10v6$re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__21561){
var vec__21562 = p__21561;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals = (function mranderson048$re_frame$v0v10v6$re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_(signals)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
return mranderson048.re_frame.v0v10v6.re_frame.subs.map_vals(f,signals);
} else {
if(mranderson048.re_frame.v0v10v6.re_frame.interop.deref_QMARK_(signals)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(signals) : f.call(null,signals));
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.to_seq = (function mranderson048$re_frame$v0v10v6$re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals = (function mranderson048$re_frame$v0v10v6$re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals(cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_(signals)){
cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
mranderson048.re_frame.v0v10v6.re_frame.subs.map_vals(cljs.core.deref,signals);
} else {
if(mranderson048.re_frame.v0v10v6.re_frame.interop.deref_QMARK_(signals)){
cljs.core.deref(signals);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals], 0));

}
}
}

if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21674 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.subs.to_seq(mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals(mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id,signals)))], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.subs.to_seq(mranderson048.re_frame.v0v10v6.re_frame.subs.map_signals(mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id,signals)))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21674;

} else {
}

return dereffed_signals;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub = (function mranderson048$re_frame$v0v10v6$re_frame$subs$reg_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21675 = arguments.length;
var i__4731__auto___21676 = (0);
while(true){
if((i__4731__auto___21676 < len__4730__auto___21675)){
args__4736__auto__.push((arguments[i__4731__auto___21676]));

var G__21677 = (i__4731__auto___21676 + (1));
i__4731__auto___21676 = G__21677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__21580 = cljs.core.count(input_args);
switch (G__21580) {
case (0):
return ((function (G__21580,computation_fn,input_args,err_header){
return (function() {
var G__21679 = null;
var G__21679__1 = (function (_){
return mranderson048.re_frame.v0v10v6.re_frame.db.app_db;
});
var G__21679__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v6.re_frame.db.app_db;
});
G__21679 = function(_,___$1){
switch(arguments.length){
case 1:
return G__21679__1.call(this,_);
case 2:
return G__21679__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21679.cljs$core$IFn$_invoke$arity$1 = G__21679__1;
G__21679.cljs$core$IFn$_invoke$arity$2 = G__21679__2;
return G__21679;
})()
;})(G__21580,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__21582 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__21582,marker,vec,G__21580,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1 = (function (_){
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn;
})()
;})(vec__21582,marker,vec,G__21580,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__21580,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe,vecs);
});
var mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.subs.subscribe,vecs);
});
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v6$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__21580,computation_fn,input_args,err_header))

}
})();
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v6.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn = null;
var mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21585 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21586 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21586;

try{try{var subscription = (function (){var G__21589 = mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__21590 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__21589,G__21590) : computation_fn.call(null,G__21589,G__21590));
})();
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21700 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21700;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__21429__auto___21701 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__21430__auto___21702 = (end__21429__auto___21701 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21430__auto___21702,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__21429__auto___21701);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21585;
}} else {
var subscription = (function (){var G__21591 = mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__21592 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__21591,G__21592) : computation_fn.call(null,G__21591,G__21592));
})();
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21704 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21704;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(reaction));

return reaction;
});
var mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21594 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21595 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v6.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21595;

try{try{var subscription = (function (){var G__21597 = mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__21598 = query_vec;
var G__21599 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__21597,G__21598,G__21599) : computation_fn.call(null,G__21597,G__21598,G__21599));
})();
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21710 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21710;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__21429__auto___21713 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__21430__auto___21714 = (end__21429__auto___21713 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21430__auto___21714,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__21429__auto___21713);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21594;
}} else {
var subscription = (function (){var G__21603 = mranderson048.re_frame.v0v10v6.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__21604 = query_vec;
var G__21605 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__21603,G__21604,G__21605) : computation_fn.call(null,G__21603,G__21604,G__21605));
})();
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__21431__auto___21715 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = new_trace__21431__auto___21715;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id(reaction));

return reaction;
});
mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__2;
mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn__3;
return mranderson048$re_frame$v0v10v6$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.re_frame.v0v10v6.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq21573){
var G__21574 = cljs.core.first(seq21573);
var seq21573__$1 = cljs.core.next(seq21573);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21574,seq21573__$1);
});


//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.subs.js.map
