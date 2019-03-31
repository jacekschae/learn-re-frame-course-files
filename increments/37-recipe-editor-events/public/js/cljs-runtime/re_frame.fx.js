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
var _STAR_current_trace_STAR__orig_val__23261 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23262 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23262;

try{try{var seq__23266 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23267 = null;
var count__23268 = (0);
var i__23269 = (0);
while(true){
if((i__23269 < count__23268)){
var vec__23287 = chunk__23267.cljs$core$IIndexed$_nth$arity$2(null,i__23269);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23287,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23287,(1),null);
var temp__5455__auto___23409 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23409)){
var effect_fn_23410 = temp__5455__auto___23409;
(effect_fn_23410.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23410.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23410.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23411 = seq__23266;
var G__23412 = chunk__23267;
var G__23413 = count__23268;
var G__23414 = (i__23269 + (1));
seq__23266 = G__23411;
chunk__23267 = G__23412;
count__23268 = G__23413;
i__23269 = G__23414;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23266);
if(temp__5457__auto__){
var seq__23266__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23266__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23266__$1);
var G__23415 = cljs.core.chunk_rest(seq__23266__$1);
var G__23417 = c__4550__auto__;
var G__23418 = cljs.core.count(c__4550__auto__);
var G__23419 = (0);
seq__23266 = G__23415;
chunk__23267 = G__23417;
count__23268 = G__23418;
i__23269 = G__23419;
continue;
} else {
var vec__23295 = cljs.core.first(seq__23266__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(1),null);
var temp__5455__auto___23420 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23420)){
var effect_fn_23421 = temp__5455__auto___23420;
(effect_fn_23421.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23421.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23421.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23422 = cljs.core.next(seq__23266__$1);
var G__23423 = null;
var G__23424 = (0);
var G__23425 = (0);
seq__23266 = G__23422;
chunk__23267 = G__23423;
count__23268 = G__23424;
i__23269 = G__23425;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23426 = re_frame.interop.now();
var duration__22753__auto___23427 = (end__22752__auto___23426 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23427,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23426);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23261;
}} else {
var seq__23303 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23304 = null;
var count__23305 = (0);
var i__23306 = (0);
while(true){
if((i__23306 < count__23305)){
var vec__23313 = chunk__23304.cljs$core$IIndexed$_nth$arity$2(null,i__23306);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23313,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23313,(1),null);
var temp__5455__auto___23431 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23431)){
var effect_fn_23433 = temp__5455__auto___23431;
(effect_fn_23433.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23433.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23433.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23434 = seq__23303;
var G__23435 = chunk__23304;
var G__23436 = count__23305;
var G__23437 = (i__23306 + (1));
seq__23303 = G__23434;
chunk__23304 = G__23435;
count__23305 = G__23436;
i__23306 = G__23437;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23303);
if(temp__5457__auto__){
var seq__23303__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23303__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23303__$1);
var G__23438 = cljs.core.chunk_rest(seq__23303__$1);
var G__23439 = c__4550__auto__;
var G__23440 = cljs.core.count(c__4550__auto__);
var G__23441 = (0);
seq__23303 = G__23438;
chunk__23304 = G__23439;
count__23305 = G__23440;
i__23306 = G__23441;
continue;
} else {
var vec__23323 = cljs.core.first(seq__23303__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23323,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23323,(1),null);
var temp__5455__auto___23442 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23442)){
var effect_fn_23443 = temp__5455__auto___23442;
(effect_fn_23443.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23443.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23443.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23447 = cljs.core.next(seq__23303__$1);
var G__23448 = null;
var G__23449 = (0);
var G__23450 = (0);
seq__23303 = G__23447;
chunk__23304 = G__23448;
count__23305 = G__23449;
i__23306 = G__23450;
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
var seq__23336 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23337 = null;
var count__23338 = (0);
var i__23339 = (0);
while(true){
if((i__23339 < count__23338)){
var map__23356 = chunk__23337.cljs$core$IIndexed$_nth$arity$2(null,i__23339);
var map__23356__$1 = (((((!((map__23356 == null))))?(((((map__23356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23356):map__23356);
var effect = map__23356__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23356__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23356__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23336,chunk__23337,count__23338,i__23339,map__23356,map__23356__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23336,chunk__23337,count__23338,i__23339,map__23356,map__23356__$1,effect,ms,dispatch))
,ms);
}


var G__23451 = seq__23336;
var G__23452 = chunk__23337;
var G__23453 = count__23338;
var G__23454 = (i__23339 + (1));
seq__23336 = G__23451;
chunk__23337 = G__23452;
count__23338 = G__23453;
i__23339 = G__23454;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23336);
if(temp__5457__auto__){
var seq__23336__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23336__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23336__$1);
var G__23455 = cljs.core.chunk_rest(seq__23336__$1);
var G__23456 = c__4550__auto__;
var G__23457 = cljs.core.count(c__4550__auto__);
var G__23458 = (0);
seq__23336 = G__23455;
chunk__23337 = G__23456;
count__23338 = G__23457;
i__23339 = G__23458;
continue;
} else {
var map__23370 = cljs.core.first(seq__23336__$1);
var map__23370__$1 = (((((!((map__23370 == null))))?(((((map__23370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23370):map__23370);
var effect = map__23370__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23370__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23370__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23336,chunk__23337,count__23338,i__23339,map__23370,map__23370__$1,effect,ms,dispatch,seq__23336__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23336,chunk__23337,count__23338,i__23339,map__23370,map__23370__$1,effect,ms,dispatch,seq__23336__$1,temp__5457__auto__))
,ms);
}


var G__23459 = cljs.core.next(seq__23336__$1);
var G__23460 = null;
var G__23461 = (0);
var G__23462 = (0);
seq__23336 = G__23459;
chunk__23337 = G__23460;
count__23338 = G__23461;
i__23339 = G__23462;
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
var seq__23379 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23380 = null;
var count__23381 = (0);
var i__23382 = (0);
while(true){
if((i__23382 < count__23381)){
var event = chunk__23380.cljs$core$IIndexed$_nth$arity$2(null,i__23382);
re_frame.router.dispatch(event);


var G__23463 = seq__23379;
var G__23464 = chunk__23380;
var G__23465 = count__23381;
var G__23466 = (i__23382 + (1));
seq__23379 = G__23463;
chunk__23380 = G__23464;
count__23381 = G__23465;
i__23382 = G__23466;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23379);
if(temp__5457__auto__){
var seq__23379__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23379__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23379__$1);
var G__23467 = cljs.core.chunk_rest(seq__23379__$1);
var G__23468 = c__4550__auto__;
var G__23469 = cljs.core.count(c__4550__auto__);
var G__23470 = (0);
seq__23379 = G__23467;
chunk__23380 = G__23468;
count__23381 = G__23469;
i__23382 = G__23470;
continue;
} else {
var event = cljs.core.first(seq__23379__$1);
re_frame.router.dispatch(event);


var G__23471 = cljs.core.next(seq__23379__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23379 = G__23471;
chunk__23380 = G__23472;
count__23381 = G__23473;
i__23382 = G__23474;
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
var seq__23398 = cljs.core.seq(value);
var chunk__23399 = null;
var count__23400 = (0);
var i__23401 = (0);
while(true){
if((i__23401 < count__23400)){
var event = chunk__23399.cljs$core$IIndexed$_nth$arity$2(null,i__23401);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23487 = seq__23398;
var G__23488 = chunk__23399;
var G__23489 = count__23400;
var G__23490 = (i__23401 + (1));
seq__23398 = G__23487;
chunk__23399 = G__23488;
count__23400 = G__23489;
i__23401 = G__23490;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23398);
if(temp__5457__auto__){
var seq__23398__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23398__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23398__$1);
var G__23496 = cljs.core.chunk_rest(seq__23398__$1);
var G__23497 = c__4550__auto__;
var G__23498 = cljs.core.count(c__4550__auto__);
var G__23499 = (0);
seq__23398 = G__23496;
chunk__23399 = G__23497;
count__23400 = G__23498;
i__23401 = G__23499;
continue;
} else {
var event = cljs.core.first(seq__23398__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23500 = cljs.core.next(seq__23398__$1);
var G__23501 = null;
var G__23502 = (0);
var G__23503 = (0);
seq__23398 = G__23500;
chunk__23399 = G__23501;
count__23400 = G__23502;
i__23401 = G__23503;
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
