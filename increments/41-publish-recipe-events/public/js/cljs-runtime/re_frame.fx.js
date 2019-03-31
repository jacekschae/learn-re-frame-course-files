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
var _STAR_current_trace_STAR__orig_val__23252 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23253 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23253;

try{try{var seq__23261 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23262 = null;
var count__23263 = (0);
var i__23264 = (0);
while(true){
if((i__23264 < count__23263)){
var vec__23289 = chunk__23262.cljs$core$IIndexed$_nth$arity$2(null,i__23264);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23289,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23289,(1),null);
var temp__5455__auto___23431 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23431)){
var effect_fn_23432 = temp__5455__auto___23431;
(effect_fn_23432.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23432.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23432.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23433 = seq__23261;
var G__23434 = chunk__23262;
var G__23435 = count__23263;
var G__23436 = (i__23264 + (1));
seq__23261 = G__23433;
chunk__23262 = G__23434;
count__23263 = G__23435;
i__23264 = G__23436;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23261);
if(temp__5457__auto__){
var seq__23261__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23261__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23261__$1);
var G__23437 = cljs.core.chunk_rest(seq__23261__$1);
var G__23438 = c__4550__auto__;
var G__23439 = cljs.core.count(c__4550__auto__);
var G__23440 = (0);
seq__23261 = G__23437;
chunk__23262 = G__23438;
count__23263 = G__23439;
i__23264 = G__23440;
continue;
} else {
var vec__23301 = cljs.core.first(seq__23261__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301,(1),null);
var temp__5455__auto___23441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23441)){
var effect_fn_23442 = temp__5455__auto___23441;
(effect_fn_23442.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23442.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23442.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23443 = cljs.core.next(seq__23261__$1);
var G__23444 = null;
var G__23445 = (0);
var G__23446 = (0);
seq__23261 = G__23443;
chunk__23262 = G__23444;
count__23263 = G__23445;
i__23264 = G__23446;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___23447 = re_frame.interop.now();
var duration__22747__auto___23448 = (end__22746__auto___23447 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___23448,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___23447);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23252;
}} else {
var seq__23310 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23311 = null;
var count__23312 = (0);
var i__23313 = (0);
while(true){
if((i__23313 < count__23312)){
var vec__23326 = chunk__23311.cljs$core$IIndexed$_nth$arity$2(null,i__23313);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23326,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23326,(1),null);
var temp__5455__auto___23450 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23450)){
var effect_fn_23451 = temp__5455__auto___23450;
(effect_fn_23451.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23451.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23451.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23452 = seq__23310;
var G__23453 = chunk__23311;
var G__23454 = count__23312;
var G__23455 = (i__23313 + (1));
seq__23310 = G__23452;
chunk__23311 = G__23453;
count__23312 = G__23454;
i__23313 = G__23455;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23310);
if(temp__5457__auto__){
var seq__23310__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23310__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23310__$1);
var G__23456 = cljs.core.chunk_rest(seq__23310__$1);
var G__23457 = c__4550__auto__;
var G__23458 = cljs.core.count(c__4550__auto__);
var G__23459 = (0);
seq__23310 = G__23456;
chunk__23311 = G__23457;
count__23312 = G__23458;
i__23313 = G__23459;
continue;
} else {
var vec__23332 = cljs.core.first(seq__23310__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23332,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23332,(1),null);
var temp__5455__auto___23460 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23460)){
var effect_fn_23461 = temp__5455__auto___23460;
(effect_fn_23461.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23461.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23461.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23462 = cljs.core.next(seq__23310__$1);
var G__23463 = null;
var G__23464 = (0);
var G__23465 = (0);
seq__23310 = G__23462;
chunk__23311 = G__23463;
count__23312 = G__23464;
i__23313 = G__23465;
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
var seq__23346 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23347 = null;
var count__23348 = (0);
var i__23349 = (0);
while(true){
if((i__23349 < count__23348)){
var map__23376 = chunk__23347.cljs$core$IIndexed$_nth$arity$2(null,i__23349);
var map__23376__$1 = (((((!((map__23376 == null))))?(((((map__23376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23376):map__23376);
var effect = map__23376__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23346,chunk__23347,count__23348,i__23349,map__23376,map__23376__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23346,chunk__23347,count__23348,i__23349,map__23376,map__23376__$1,effect,ms,dispatch))
,ms);
}


var G__23482 = seq__23346;
var G__23483 = chunk__23347;
var G__23484 = count__23348;
var G__23485 = (i__23349 + (1));
seq__23346 = G__23482;
chunk__23347 = G__23483;
count__23348 = G__23484;
i__23349 = G__23485;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23346);
if(temp__5457__auto__){
var seq__23346__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23346__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23346__$1);
var G__23487 = cljs.core.chunk_rest(seq__23346__$1);
var G__23488 = c__4550__auto__;
var G__23489 = cljs.core.count(c__4550__auto__);
var G__23490 = (0);
seq__23346 = G__23487;
chunk__23347 = G__23488;
count__23348 = G__23489;
i__23349 = G__23490;
continue;
} else {
var map__23382 = cljs.core.first(seq__23346__$1);
var map__23382__$1 = (((((!((map__23382 == null))))?(((((map__23382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23382):map__23382);
var effect = map__23382__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23382__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23382__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23346,chunk__23347,count__23348,i__23349,map__23382,map__23382__$1,effect,ms,dispatch,seq__23346__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23346,chunk__23347,count__23348,i__23349,map__23382,map__23382__$1,effect,ms,dispatch,seq__23346__$1,temp__5457__auto__))
,ms);
}


var G__23495 = cljs.core.next(seq__23346__$1);
var G__23496 = null;
var G__23497 = (0);
var G__23498 = (0);
seq__23346 = G__23495;
chunk__23347 = G__23496;
count__23348 = G__23497;
i__23349 = G__23498;
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
var seq__23412 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23413 = null;
var count__23414 = (0);
var i__23415 = (0);
while(true){
if((i__23415 < count__23414)){
var event = chunk__23413.cljs$core$IIndexed$_nth$arity$2(null,i__23415);
re_frame.router.dispatch(event);


var G__23504 = seq__23412;
var G__23505 = chunk__23413;
var G__23506 = count__23414;
var G__23507 = (i__23415 + (1));
seq__23412 = G__23504;
chunk__23413 = G__23505;
count__23414 = G__23506;
i__23415 = G__23507;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23412);
if(temp__5457__auto__){
var seq__23412__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23412__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23412__$1);
var G__23508 = cljs.core.chunk_rest(seq__23412__$1);
var G__23509 = c__4550__auto__;
var G__23510 = cljs.core.count(c__4550__auto__);
var G__23511 = (0);
seq__23412 = G__23508;
chunk__23413 = G__23509;
count__23414 = G__23510;
i__23415 = G__23511;
continue;
} else {
var event = cljs.core.first(seq__23412__$1);
re_frame.router.dispatch(event);


var G__23515 = cljs.core.next(seq__23412__$1);
var G__23516 = null;
var G__23517 = (0);
var G__23518 = (0);
seq__23412 = G__23515;
chunk__23413 = G__23516;
count__23414 = G__23517;
i__23415 = G__23518;
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
var seq__23426 = cljs.core.seq(value);
var chunk__23427 = null;
var count__23428 = (0);
var i__23429 = (0);
while(true){
if((i__23429 < count__23428)){
var event = chunk__23427.cljs$core$IIndexed$_nth$arity$2(null,i__23429);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23533 = seq__23426;
var G__23534 = chunk__23427;
var G__23535 = count__23428;
var G__23536 = (i__23429 + (1));
seq__23426 = G__23533;
chunk__23427 = G__23534;
count__23428 = G__23535;
i__23429 = G__23536;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23426);
if(temp__5457__auto__){
var seq__23426__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23426__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23426__$1);
var G__23541 = cljs.core.chunk_rest(seq__23426__$1);
var G__23542 = c__4550__auto__;
var G__23543 = cljs.core.count(c__4550__auto__);
var G__23544 = (0);
seq__23426 = G__23541;
chunk__23427 = G__23542;
count__23428 = G__23543;
i__23429 = G__23544;
continue;
} else {
var event = cljs.core.first(seq__23426__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23545 = cljs.core.next(seq__23426__$1);
var G__23546 = null;
var G__23547 = (0);
var G__23548 = (0);
seq__23426 = G__23545;
chunk__23427 = G__23546;
count__23428 = G__23547;
i__23429 = G__23548;
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
