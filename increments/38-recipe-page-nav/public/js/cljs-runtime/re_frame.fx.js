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
var _STAR_current_trace_STAR__orig_val__23207 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23208 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23208;

try{try{var seq__23213 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23214 = null;
var count__23215 = (0);
var i__23216 = (0);
while(true){
if((i__23216 < count__23215)){
var vec__23240 = chunk__23214.cljs$core$IIndexed$_nth$arity$2(null,i__23216);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23240,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23240,(1),null);
var temp__5455__auto___23411 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23411)){
var effect_fn_23412 = temp__5455__auto___23411;
(effect_fn_23412.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23412.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23412.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23414 = seq__23213;
var G__23415 = chunk__23214;
var G__23416 = count__23215;
var G__23417 = (i__23216 + (1));
seq__23213 = G__23414;
chunk__23214 = G__23415;
count__23215 = G__23416;
i__23216 = G__23417;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23213);
if(temp__5457__auto__){
var seq__23213__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23213__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23213__$1);
var G__23418 = cljs.core.chunk_rest(seq__23213__$1);
var G__23419 = c__4550__auto__;
var G__23420 = cljs.core.count(c__4550__auto__);
var G__23421 = (0);
seq__23213 = G__23418;
chunk__23214 = G__23419;
count__23215 = G__23420;
i__23216 = G__23421;
continue;
} else {
var vec__23254 = cljs.core.first(seq__23213__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(1),null);
var temp__5455__auto___23422 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23422)){
var effect_fn_23423 = temp__5455__auto___23422;
(effect_fn_23423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23423.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23424 = cljs.core.next(seq__23213__$1);
var G__23425 = null;
var G__23426 = (0);
var G__23427 = (0);
seq__23213 = G__23424;
chunk__23214 = G__23425;
count__23215 = G__23426;
i__23216 = G__23427;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23428 = re_frame.interop.now();
var duration__22753__auto___23429 = (end__22752__auto___23428 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23429,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23428);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23207;
}} else {
var seq__23260 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23261 = null;
var count__23262 = (0);
var i__23263 = (0);
while(true){
if((i__23263 < count__23262)){
var vec__23287 = chunk__23261.cljs$core$IIndexed$_nth$arity$2(null,i__23263);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23287,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23287,(1),null);
var temp__5455__auto___23431 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23431)){
var effect_fn_23432 = temp__5455__auto___23431;
(effect_fn_23432.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23432.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23432.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23433 = seq__23260;
var G__23434 = chunk__23261;
var G__23435 = count__23262;
var G__23436 = (i__23263 + (1));
seq__23260 = G__23433;
chunk__23261 = G__23434;
count__23262 = G__23435;
i__23263 = G__23436;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23260);
if(temp__5457__auto__){
var seq__23260__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23260__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23260__$1);
var G__23437 = cljs.core.chunk_rest(seq__23260__$1);
var G__23438 = c__4550__auto__;
var G__23439 = cljs.core.count(c__4550__auto__);
var G__23440 = (0);
seq__23260 = G__23437;
chunk__23261 = G__23438;
count__23262 = G__23439;
i__23263 = G__23440;
continue;
} else {
var vec__23295 = cljs.core.first(seq__23260__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(1),null);
var temp__5455__auto___23441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23441)){
var effect_fn_23442 = temp__5455__auto___23441;
(effect_fn_23442.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23442.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23442.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23443 = cljs.core.next(seq__23260__$1);
var G__23444 = null;
var G__23445 = (0);
var G__23446 = (0);
seq__23260 = G__23443;
chunk__23261 = G__23444;
count__23262 = G__23445;
i__23263 = G__23446;
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
var seq__23303 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23304 = null;
var count__23305 = (0);
var i__23306 = (0);
while(true){
if((i__23306 < count__23305)){
var map__23324 = chunk__23304.cljs$core$IIndexed$_nth$arity$2(null,i__23306);
var map__23324__$1 = (((((!((map__23324 == null))))?(((((map__23324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23324):map__23324);
var effect = map__23324__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23303,chunk__23304,count__23305,i__23306,map__23324,map__23324__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23303,chunk__23304,count__23305,i__23306,map__23324,map__23324__$1,effect,ms,dispatch))
,ms);
}


var G__23455 = seq__23303;
var G__23456 = chunk__23304;
var G__23457 = count__23305;
var G__23458 = (i__23306 + (1));
seq__23303 = G__23455;
chunk__23304 = G__23456;
count__23305 = G__23457;
i__23306 = G__23458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23303);
if(temp__5457__auto__){
var seq__23303__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23303__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23303__$1);
var G__23459 = cljs.core.chunk_rest(seq__23303__$1);
var G__23460 = c__4550__auto__;
var G__23461 = cljs.core.count(c__4550__auto__);
var G__23462 = (0);
seq__23303 = G__23459;
chunk__23304 = G__23460;
count__23305 = G__23461;
i__23306 = G__23462;
continue;
} else {
var map__23348 = cljs.core.first(seq__23303__$1);
var map__23348__$1 = (((((!((map__23348 == null))))?(((((map__23348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23348):map__23348);
var effect = map__23348__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23303,chunk__23304,count__23305,i__23306,map__23348,map__23348__$1,effect,ms,dispatch,seq__23303__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23303,chunk__23304,count__23305,i__23306,map__23348,map__23348__$1,effect,ms,dispatch,seq__23303__$1,temp__5457__auto__))
,ms);
}


var G__23469 = cljs.core.next(seq__23303__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__23303 = G__23469;
chunk__23304 = G__23470;
count__23305 = G__23471;
i__23306 = G__23472;
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
var seq__23356 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23357 = null;
var count__23358 = (0);
var i__23359 = (0);
while(true){
if((i__23359 < count__23358)){
var event = chunk__23357.cljs$core$IIndexed$_nth$arity$2(null,i__23359);
re_frame.router.dispatch(event);


var G__23480 = seq__23356;
var G__23481 = chunk__23357;
var G__23482 = count__23358;
var G__23483 = (i__23359 + (1));
seq__23356 = G__23480;
chunk__23357 = G__23481;
count__23358 = G__23482;
i__23359 = G__23483;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23356);
if(temp__5457__auto__){
var seq__23356__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23356__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23356__$1);
var G__23488 = cljs.core.chunk_rest(seq__23356__$1);
var G__23489 = c__4550__auto__;
var G__23490 = cljs.core.count(c__4550__auto__);
var G__23491 = (0);
seq__23356 = G__23488;
chunk__23357 = G__23489;
count__23358 = G__23490;
i__23359 = G__23491;
continue;
} else {
var event = cljs.core.first(seq__23356__$1);
re_frame.router.dispatch(event);


var G__23492 = cljs.core.next(seq__23356__$1);
var G__23493 = null;
var G__23494 = (0);
var G__23495 = (0);
seq__23356 = G__23492;
chunk__23357 = G__23493;
count__23358 = G__23494;
i__23359 = G__23495;
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
var seq__23397 = cljs.core.seq(value);
var chunk__23398 = null;
var count__23399 = (0);
var i__23400 = (0);
while(true){
if((i__23400 < count__23399)){
var event = chunk__23398.cljs$core$IIndexed$_nth$arity$2(null,i__23400);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23499 = seq__23397;
var G__23500 = chunk__23398;
var G__23501 = count__23399;
var G__23502 = (i__23400 + (1));
seq__23397 = G__23499;
chunk__23398 = G__23500;
count__23399 = G__23501;
i__23400 = G__23502;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23397);
if(temp__5457__auto__){
var seq__23397__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23397__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23397__$1);
var G__23503 = cljs.core.chunk_rest(seq__23397__$1);
var G__23504 = c__4550__auto__;
var G__23505 = cljs.core.count(c__4550__auto__);
var G__23506 = (0);
seq__23397 = G__23503;
chunk__23398 = G__23504;
count__23399 = G__23505;
i__23400 = G__23506;
continue;
} else {
var event = cljs.core.first(seq__23397__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23507 = cljs.core.next(seq__23397__$1);
var G__23508 = null;
var G__23509 = (0);
var G__23510 = (0);
seq__23397 = G__23507;
chunk__23398 = G__23508;
count__23399 = G__23509;
i__23400 = G__23510;
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
