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
var _STAR_current_trace_STAR__orig_val__23165 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23166 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23166;

try{try{var seq__23177 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23178 = null;
var count__23179 = (0);
var i__23180 = (0);
while(true){
if((i__23180 < count__23179)){
var vec__23205 = chunk__23178.cljs$core$IIndexed$_nth$arity$2(null,i__23180);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(1),null);
var temp__5455__auto___23397 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23397)){
var effect_fn_23398 = temp__5455__auto___23397;
(effect_fn_23398.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23398.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23398.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23403 = seq__23177;
var G__23404 = chunk__23178;
var G__23405 = count__23179;
var G__23406 = (i__23180 + (1));
seq__23177 = G__23403;
chunk__23178 = G__23404;
count__23179 = G__23405;
i__23180 = G__23406;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23177);
if(temp__5457__auto__){
var seq__23177__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23177__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23177__$1);
var G__23407 = cljs.core.chunk_rest(seq__23177__$1);
var G__23408 = c__4550__auto__;
var G__23409 = cljs.core.count(c__4550__auto__);
var G__23410 = (0);
seq__23177 = G__23407;
chunk__23178 = G__23408;
count__23179 = G__23409;
i__23180 = G__23410;
continue;
} else {
var vec__23215 = cljs.core.first(seq__23177__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23215,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23215,(1),null);
var temp__5455__auto___23415 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23415)){
var effect_fn_23417 = temp__5455__auto___23415;
(effect_fn_23417.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23417.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23417.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23418 = cljs.core.next(seq__23177__$1);
var G__23419 = null;
var G__23420 = (0);
var G__23421 = (0);
seq__23177 = G__23418;
chunk__23178 = G__23419;
count__23179 = G__23420;
i__23180 = G__23421;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23422 = re_frame.interop.now();
var duration__22753__auto___23423 = (end__22752__auto___23422 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23423,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23422);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23165;
}} else {
var seq__23222 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23223 = null;
var count__23224 = (0);
var i__23225 = (0);
while(true){
if((i__23225 < count__23224)){
var vec__23248 = chunk__23223.cljs$core$IIndexed$_nth$arity$2(null,i__23225);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248,(1),null);
var temp__5455__auto___23426 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23426)){
var effect_fn_23427 = temp__5455__auto___23426;
(effect_fn_23427.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23427.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23427.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23431 = seq__23222;
var G__23432 = chunk__23223;
var G__23433 = count__23224;
var G__23434 = (i__23225 + (1));
seq__23222 = G__23431;
chunk__23223 = G__23432;
count__23224 = G__23433;
i__23225 = G__23434;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23222);
if(temp__5457__auto__){
var seq__23222__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23222__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23222__$1);
var G__23435 = cljs.core.chunk_rest(seq__23222__$1);
var G__23436 = c__4550__auto__;
var G__23437 = cljs.core.count(c__4550__auto__);
var G__23438 = (0);
seq__23222 = G__23435;
chunk__23223 = G__23436;
count__23224 = G__23437;
i__23225 = G__23438;
continue;
} else {
var vec__23259 = cljs.core.first(seq__23222__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23259,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23259,(1),null);
var temp__5455__auto___23439 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23439)){
var effect_fn_23440 = temp__5455__auto___23439;
(effect_fn_23440.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23440.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23440.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23441 = cljs.core.next(seq__23222__$1);
var G__23442 = null;
var G__23443 = (0);
var G__23444 = (0);
seq__23222 = G__23441;
chunk__23223 = G__23442;
count__23224 = G__23443;
i__23225 = G__23444;
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
var seq__23276 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23277 = null;
var count__23278 = (0);
var i__23279 = (0);
while(true){
if((i__23279 < count__23278)){
var map__23313 = chunk__23277.cljs$core$IIndexed$_nth$arity$2(null,i__23279);
var map__23313__$1 = (((((!((map__23313 == null))))?(((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23313):map__23313);
var effect = map__23313__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23276,chunk__23277,count__23278,i__23279,map__23313,map__23313__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23276,chunk__23277,count__23278,i__23279,map__23313,map__23313__$1,effect,ms,dispatch))
,ms);
}


var G__23446 = seq__23276;
var G__23447 = chunk__23277;
var G__23448 = count__23278;
var G__23449 = (i__23279 + (1));
seq__23276 = G__23446;
chunk__23277 = G__23447;
count__23278 = G__23448;
i__23279 = G__23449;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23276);
if(temp__5457__auto__){
var seq__23276__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23276__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23276__$1);
var G__23450 = cljs.core.chunk_rest(seq__23276__$1);
var G__23451 = c__4550__auto__;
var G__23452 = cljs.core.count(c__4550__auto__);
var G__23453 = (0);
seq__23276 = G__23450;
chunk__23277 = G__23451;
count__23278 = G__23452;
i__23279 = G__23453;
continue;
} else {
var map__23322 = cljs.core.first(seq__23276__$1);
var map__23322__$1 = (((((!((map__23322 == null))))?(((((map__23322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23322):map__23322);
var effect = map__23322__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23276,chunk__23277,count__23278,i__23279,map__23322,map__23322__$1,effect,ms,dispatch,seq__23276__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23276,chunk__23277,count__23278,i__23279,map__23322,map__23322__$1,effect,ms,dispatch,seq__23276__$1,temp__5457__auto__))
,ms);
}


var G__23454 = cljs.core.next(seq__23276__$1);
var G__23455 = null;
var G__23456 = (0);
var G__23457 = (0);
seq__23276 = G__23454;
chunk__23277 = G__23455;
count__23278 = G__23456;
i__23279 = G__23457;
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
var seq__23329 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23330 = null;
var count__23331 = (0);
var i__23332 = (0);
while(true){
if((i__23332 < count__23331)){
var event = chunk__23330.cljs$core$IIndexed$_nth$arity$2(null,i__23332);
re_frame.router.dispatch(event);


var G__23467 = seq__23329;
var G__23468 = chunk__23330;
var G__23469 = count__23331;
var G__23470 = (i__23332 + (1));
seq__23329 = G__23467;
chunk__23330 = G__23468;
count__23331 = G__23469;
i__23332 = G__23470;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23329);
if(temp__5457__auto__){
var seq__23329__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23329__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23329__$1);
var G__23471 = cljs.core.chunk_rest(seq__23329__$1);
var G__23472 = c__4550__auto__;
var G__23473 = cljs.core.count(c__4550__auto__);
var G__23474 = (0);
seq__23329 = G__23471;
chunk__23330 = G__23472;
count__23331 = G__23473;
i__23332 = G__23474;
continue;
} else {
var event = cljs.core.first(seq__23329__$1);
re_frame.router.dispatch(event);


var G__23478 = cljs.core.next(seq__23329__$1);
var G__23479 = null;
var G__23480 = (0);
var G__23481 = (0);
seq__23329 = G__23478;
chunk__23330 = G__23479;
count__23331 = G__23480;
i__23332 = G__23481;
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
var seq__23368 = cljs.core.seq(value);
var chunk__23369 = null;
var count__23370 = (0);
var i__23371 = (0);
while(true){
if((i__23371 < count__23370)){
var event = chunk__23369.cljs$core$IIndexed$_nth$arity$2(null,i__23371);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23485 = seq__23368;
var G__23486 = chunk__23369;
var G__23487 = count__23370;
var G__23488 = (i__23371 + (1));
seq__23368 = G__23485;
chunk__23369 = G__23486;
count__23370 = G__23487;
i__23371 = G__23488;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23368);
if(temp__5457__auto__){
var seq__23368__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23368__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23368__$1);
var G__23489 = cljs.core.chunk_rest(seq__23368__$1);
var G__23490 = c__4550__auto__;
var G__23491 = cljs.core.count(c__4550__auto__);
var G__23492 = (0);
seq__23368 = G__23489;
chunk__23369 = G__23490;
count__23370 = G__23491;
i__23371 = G__23492;
continue;
} else {
var event = cljs.core.first(seq__23368__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23493 = cljs.core.next(seq__23368__$1);
var G__23494 = null;
var G__23495 = (0);
var G__23496 = (0);
seq__23368 = G__23493;
chunk__23369 = G__23494;
count__23370 = G__23495;
i__23371 = G__23496;
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
