goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23311 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23312 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23312;

try{try{var seq__23315 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23316 = null;
var count__23317 = (0);
var i__23318 = (0);
while(true){
if((i__23318 < count__23317)){
var vec__23339 = chunk__23316.cljs$core$IIndexed$_nth$arity$2(null,i__23318);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339,(1),null);
var temp__5455__auto___23443 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23443)){
var effect_fn_23444 = temp__5455__auto___23443;
(effect_fn_23444.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23444.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23444.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23445 = seq__23315;
var G__23446 = chunk__23316;
var G__23447 = count__23317;
var G__23448 = (i__23318 + (1));
seq__23315 = G__23445;
chunk__23316 = G__23446;
count__23317 = G__23447;
i__23318 = G__23448;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23315);
if(temp__5457__auto__){
var seq__23315__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23315__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23315__$1);
var G__23453 = cljs.core.chunk_rest(seq__23315__$1);
var G__23454 = c__4550__auto__;
var G__23455 = cljs.core.count(c__4550__auto__);
var G__23456 = (0);
seq__23315 = G__23453;
chunk__23316 = G__23454;
count__23317 = G__23455;
i__23318 = G__23456;
continue;
} else {
var vec__23354 = cljs.core.first(seq__23315__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23354,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23354,(1),null);
var temp__5455__auto___23457 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23457)){
var effect_fn_23462 = temp__5455__auto___23457;
(effect_fn_23462.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23462.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23462.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23463 = cljs.core.next(seq__23315__$1);
var G__23464 = null;
var G__23465 = (0);
var G__23466 = (0);
seq__23315 = G__23463;
chunk__23316 = G__23464;
count__23317 = G__23465;
i__23318 = G__23466;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___23473 = re_frame.interop.now();
var duration__22747__auto___23474 = (end__22746__auto___23473 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___23474,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___23473);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23311;
}} else {
var seq__23362 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23363 = null;
var count__23364 = (0);
var i__23365 = (0);
while(true){
if((i__23365 < count__23364)){
var vec__23376 = chunk__23363.cljs$core$IIndexed$_nth$arity$2(null,i__23365);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23376,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23376,(1),null);
var temp__5455__auto___23487 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23487)){
var effect_fn_23488 = temp__5455__auto___23487;
(effect_fn_23488.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23488.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23488.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23489 = seq__23362;
var G__23490 = chunk__23363;
var G__23491 = count__23364;
var G__23492 = (i__23365 + (1));
seq__23362 = G__23489;
chunk__23363 = G__23490;
count__23364 = G__23491;
i__23365 = G__23492;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23362);
if(temp__5457__auto__){
var seq__23362__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23362__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23362__$1);
var G__23497 = cljs.core.chunk_rest(seq__23362__$1);
var G__23498 = c__4550__auto__;
var G__23499 = cljs.core.count(c__4550__auto__);
var G__23500 = (0);
seq__23362 = G__23497;
chunk__23363 = G__23498;
count__23364 = G__23499;
i__23365 = G__23500;
continue;
} else {
var vec__23379 = cljs.core.first(seq__23362__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23379,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23379,(1),null);
var temp__5455__auto___23505 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23505)){
var effect_fn_23506 = temp__5455__auto___23505;
(effect_fn_23506.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23506.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23506.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23507 = cljs.core.next(seq__23362__$1);
var G__23508 = null;
var G__23509 = (0);
var G__23510 = (0);
seq__23362 = G__23507;
chunk__23363 = G__23508;
count__23364 = G__23509;
i__23365 = G__23510;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23385 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23386 = null;
var count__23387 = (0);
var i__23388 = (0);
while(true){
if((i__23388 < count__23387)){
var map__23397 = chunk__23386.cljs$core$IIndexed$_nth$arity$2(null,i__23388);
var map__23397__$1 = (((((!((map__23397 == null))))?(((((map__23397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23397):map__23397);
var effect = map__23397__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23397__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23397__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23385,chunk__23386,count__23387,i__23388,map__23397,map__23397__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23385,chunk__23386,count__23387,i__23388,map__23397,map__23397__$1,effect,ms,dispatch))
,ms);
}


var G__23523 = seq__23385;
var G__23524 = chunk__23386;
var G__23525 = count__23387;
var G__23526 = (i__23388 + (1));
seq__23385 = G__23523;
chunk__23386 = G__23524;
count__23387 = G__23525;
i__23388 = G__23526;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23385);
if(temp__5457__auto__){
var seq__23385__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23385__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23385__$1);
var G__23531 = cljs.core.chunk_rest(seq__23385__$1);
var G__23532 = c__4550__auto__;
var G__23533 = cljs.core.count(c__4550__auto__);
var G__23534 = (0);
seq__23385 = G__23531;
chunk__23386 = G__23532;
count__23387 = G__23533;
i__23388 = G__23534;
continue;
} else {
var map__23405 = cljs.core.first(seq__23385__$1);
var map__23405__$1 = (((((!((map__23405 == null))))?(((((map__23405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23405):map__23405);
var effect = map__23405__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23385,chunk__23386,count__23387,i__23388,map__23405,map__23405__$1,effect,ms,dispatch,seq__23385__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23385,chunk__23386,count__23387,i__23388,map__23405,map__23405__$1,effect,ms,dispatch,seq__23385__$1,temp__5457__auto__))
,ms);
}


var G__23543 = cljs.core.next(seq__23385__$1);
var G__23544 = null;
var G__23545 = (0);
var G__23546 = (0);
seq__23385 = G__23543;
chunk__23386 = G__23544;
count__23387 = G__23545;
i__23388 = G__23546;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__23408 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23409 = null;
var count__23410 = (0);
var i__23411 = (0);
while(true){
if((i__23411 < count__23410)){
var event = chunk__23409.cljs$core$IIndexed$_nth$arity$2(null,i__23411);
re_frame.router.dispatch(event);


var G__23563 = seq__23408;
var G__23564 = chunk__23409;
var G__23565 = count__23410;
var G__23566 = (i__23411 + (1));
seq__23408 = G__23563;
chunk__23409 = G__23564;
count__23410 = G__23565;
i__23411 = G__23566;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23408);
if(temp__5457__auto__){
var seq__23408__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23408__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23408__$1);
var G__23567 = cljs.core.chunk_rest(seq__23408__$1);
var G__23568 = c__4550__auto__;
var G__23569 = cljs.core.count(c__4550__auto__);
var G__23570 = (0);
seq__23408 = G__23567;
chunk__23409 = G__23568;
count__23410 = G__23569;
i__23411 = G__23570;
continue;
} else {
var event = cljs.core.first(seq__23408__$1);
re_frame.router.dispatch(event);


var G__23571 = cljs.core.next(seq__23408__$1);
var G__23572 = null;
var G__23573 = (0);
var G__23574 = (0);
seq__23408 = G__23571;
chunk__23409 = G__23572;
count__23410 = G__23573;
i__23411 = G__23574;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23418 = cljs.core.seq(value);
var chunk__23419 = null;
var count__23420 = (0);
var i__23421 = (0);
while(true){
if((i__23421 < count__23420)){
var event = chunk__23419.cljs$core$IIndexed$_nth$arity$2(null,i__23421);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23584 = seq__23418;
var G__23585 = chunk__23419;
var G__23586 = count__23420;
var G__23587 = (i__23421 + (1));
seq__23418 = G__23584;
chunk__23419 = G__23585;
count__23420 = G__23586;
i__23421 = G__23587;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23418);
if(temp__5457__auto__){
var seq__23418__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23418__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23418__$1);
var G__23591 = cljs.core.chunk_rest(seq__23418__$1);
var G__23592 = c__4550__auto__;
var G__23593 = cljs.core.count(c__4550__auto__);
var G__23594 = (0);
seq__23418 = G__23591;
chunk__23419 = G__23592;
count__23420 = G__23593;
i__23421 = G__23594;
continue;
} else {
var event = cljs.core.first(seq__23418__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23599 = cljs.core.next(seq__23418__$1);
var G__23600 = null;
var G__23601 = (0);
var G__23602 = (0);
seq__23418 = G__23599;
chunk__23419 = G__23600;
count__23420 = G__23601;
i__23421 = G__23602;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
