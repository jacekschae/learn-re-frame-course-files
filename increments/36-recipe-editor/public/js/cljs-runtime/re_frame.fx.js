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
var _STAR_current_trace_STAR__orig_val__23190 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23191 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23191;

try{try{var seq__23196 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23197 = null;
var count__23198 = (0);
var i__23199 = (0);
while(true){
if((i__23199 < count__23198)){
var vec__23219 = chunk__23197.cljs$core$IIndexed$_nth$arity$2(null,i__23199);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(1),null);
var temp__5455__auto___23405 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23405)){
var effect_fn_23406 = temp__5455__auto___23405;
(effect_fn_23406.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23406.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23406.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23408 = seq__23196;
var G__23409 = chunk__23197;
var G__23410 = count__23198;
var G__23411 = (i__23199 + (1));
seq__23196 = G__23408;
chunk__23197 = G__23409;
count__23198 = G__23410;
i__23199 = G__23411;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23196);
if(temp__5457__auto__){
var seq__23196__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23196__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23196__$1);
var G__23412 = cljs.core.chunk_rest(seq__23196__$1);
var G__23413 = c__4550__auto__;
var G__23414 = cljs.core.count(c__4550__auto__);
var G__23415 = (0);
seq__23196 = G__23412;
chunk__23197 = G__23413;
count__23198 = G__23414;
i__23199 = G__23415;
continue;
} else {
var vec__23228 = cljs.core.first(seq__23196__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23228,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23228,(1),null);
var temp__5455__auto___23416 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23416)){
var effect_fn_23417 = temp__5455__auto___23416;
(effect_fn_23417.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23417.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23417.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23418 = cljs.core.next(seq__23196__$1);
var G__23419 = null;
var G__23420 = (0);
var G__23421 = (0);
seq__23196 = G__23418;
chunk__23197 = G__23419;
count__23198 = G__23420;
i__23199 = G__23421;
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
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23190;
}} else {
var seq__23237 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23238 = null;
var count__23239 = (0);
var i__23240 = (0);
while(true){
if((i__23240 < count__23239)){
var vec__23266 = chunk__23238.cljs$core$IIndexed$_nth$arity$2(null,i__23240);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23266,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23266,(1),null);
var temp__5455__auto___23424 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23424)){
var effect_fn_23425 = temp__5455__auto___23424;
(effect_fn_23425.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23425.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23425.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23426 = seq__23237;
var G__23427 = chunk__23238;
var G__23428 = count__23239;
var G__23429 = (i__23240 + (1));
seq__23237 = G__23426;
chunk__23238 = G__23427;
count__23239 = G__23428;
i__23240 = G__23429;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23237);
if(temp__5457__auto__){
var seq__23237__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23237__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23237__$1);
var G__23430 = cljs.core.chunk_rest(seq__23237__$1);
var G__23431 = c__4550__auto__;
var G__23432 = cljs.core.count(c__4550__auto__);
var G__23433 = (0);
seq__23237 = G__23430;
chunk__23238 = G__23431;
count__23239 = G__23432;
i__23240 = G__23433;
continue;
} else {
var vec__23276 = cljs.core.first(seq__23237__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23276,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23276,(1),null);
var temp__5455__auto___23434 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23434)){
var effect_fn_23435 = temp__5455__auto___23434;
(effect_fn_23435.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23435.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23435.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23436 = cljs.core.next(seq__23237__$1);
var G__23437 = null;
var G__23438 = (0);
var G__23439 = (0);
seq__23237 = G__23436;
chunk__23238 = G__23437;
count__23239 = G__23438;
i__23240 = G__23439;
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
var seq__23289 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23290 = null;
var count__23291 = (0);
var i__23292 = (0);
while(true){
if((i__23292 < count__23291)){
var map__23321 = chunk__23290.cljs$core$IIndexed$_nth$arity$2(null,i__23292);
var map__23321__$1 = (((((!((map__23321 == null))))?(((((map__23321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23321):map__23321);
var effect = map__23321__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23289,chunk__23290,count__23291,i__23292,map__23321,map__23321__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23289,chunk__23290,count__23291,i__23292,map__23321,map__23321__$1,effect,ms,dispatch))
,ms);
}


var G__23441 = seq__23289;
var G__23442 = chunk__23290;
var G__23443 = count__23291;
var G__23444 = (i__23292 + (1));
seq__23289 = G__23441;
chunk__23290 = G__23442;
count__23291 = G__23443;
i__23292 = G__23444;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23289);
if(temp__5457__auto__){
var seq__23289__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23289__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23289__$1);
var G__23445 = cljs.core.chunk_rest(seq__23289__$1);
var G__23446 = c__4550__auto__;
var G__23447 = cljs.core.count(c__4550__auto__);
var G__23448 = (0);
seq__23289 = G__23445;
chunk__23290 = G__23446;
count__23291 = G__23447;
i__23292 = G__23448;
continue;
} else {
var map__23326 = cljs.core.first(seq__23289__$1);
var map__23326__$1 = (((((!((map__23326 == null))))?(((((map__23326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23326):map__23326);
var effect = map__23326__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23326__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23326__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23289,chunk__23290,count__23291,i__23292,map__23326,map__23326__$1,effect,ms,dispatch,seq__23289__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23289,chunk__23290,count__23291,i__23292,map__23326,map__23326__$1,effect,ms,dispatch,seq__23289__$1,temp__5457__auto__))
,ms);
}


var G__23450 = cljs.core.next(seq__23289__$1);
var G__23451 = null;
var G__23452 = (0);
var G__23453 = (0);
seq__23289 = G__23450;
chunk__23290 = G__23451;
count__23291 = G__23452;
i__23292 = G__23453;
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
var seq__23346 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23347 = null;
var count__23348 = (0);
var i__23349 = (0);
while(true){
if((i__23349 < count__23348)){
var event = chunk__23347.cljs$core$IIndexed$_nth$arity$2(null,i__23349);
re_frame.router.dispatch(event);


var G__23461 = seq__23346;
var G__23462 = chunk__23347;
var G__23463 = count__23348;
var G__23464 = (i__23349 + (1));
seq__23346 = G__23461;
chunk__23347 = G__23462;
count__23348 = G__23463;
i__23349 = G__23464;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23346);
if(temp__5457__auto__){
var seq__23346__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23346__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23346__$1);
var G__23468 = cljs.core.chunk_rest(seq__23346__$1);
var G__23469 = c__4550__auto__;
var G__23470 = cljs.core.count(c__4550__auto__);
var G__23471 = (0);
seq__23346 = G__23468;
chunk__23347 = G__23469;
count__23348 = G__23470;
i__23349 = G__23471;
continue;
} else {
var event = cljs.core.first(seq__23346__$1);
re_frame.router.dispatch(event);


var G__23472 = cljs.core.next(seq__23346__$1);
var G__23473 = null;
var G__23474 = (0);
var G__23475 = (0);
seq__23346 = G__23472;
chunk__23347 = G__23473;
count__23348 = G__23474;
i__23349 = G__23475;
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
var seq__23362 = cljs.core.seq(value);
var chunk__23363 = null;
var count__23364 = (0);
var i__23365 = (0);
while(true){
if((i__23365 < count__23364)){
var event = chunk__23363.cljs$core$IIndexed$_nth$arity$2(null,i__23365);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23482 = seq__23362;
var G__23483 = chunk__23363;
var G__23484 = count__23364;
var G__23485 = (i__23365 + (1));
seq__23362 = G__23482;
chunk__23363 = G__23483;
count__23364 = G__23484;
i__23365 = G__23485;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23362);
if(temp__5457__auto__){
var seq__23362__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23362__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23362__$1);
var G__23486 = cljs.core.chunk_rest(seq__23362__$1);
var G__23487 = c__4550__auto__;
var G__23488 = cljs.core.count(c__4550__auto__);
var G__23489 = (0);
seq__23362 = G__23486;
chunk__23363 = G__23487;
count__23364 = G__23488;
i__23365 = G__23489;
continue;
} else {
var event = cljs.core.first(seq__23362__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23490 = cljs.core.next(seq__23362__$1);
var G__23491 = null;
var G__23492 = (0);
var G__23493 = (0);
seq__23362 = G__23490;
chunk__23363 = G__23491;
count__23364 = G__23492;
i__23365 = G__23493;
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
