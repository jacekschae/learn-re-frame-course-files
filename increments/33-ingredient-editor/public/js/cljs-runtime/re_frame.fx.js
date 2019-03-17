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
var _STAR_current_trace_STAR__orig_val__23195 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23196 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23196;

try{try{var seq__23202 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23206 = null;
var count__23207 = (0);
var i__23208 = (0);
while(true){
if((i__23208 < count__23207)){
var vec__23231 = chunk__23206.cljs$core$IIndexed$_nth$arity$2(null,i__23208);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23231,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23231,(1),null);
var temp__5455__auto___23399 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23399)){
var effect_fn_23402 = temp__5455__auto___23399;
(effect_fn_23402.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23402.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23402.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23403 = seq__23202;
var G__23404 = chunk__23206;
var G__23405 = count__23207;
var G__23406 = (i__23208 + (1));
seq__23202 = G__23403;
chunk__23206 = G__23404;
count__23207 = G__23405;
i__23208 = G__23406;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23202);
if(temp__5457__auto__){
var seq__23202__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23202__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23202__$1);
var G__23409 = cljs.core.chunk_rest(seq__23202__$1);
var G__23410 = c__4550__auto__;
var G__23411 = cljs.core.count(c__4550__auto__);
var G__23412 = (0);
seq__23202 = G__23409;
chunk__23206 = G__23410;
count__23207 = G__23411;
i__23208 = G__23412;
continue;
} else {
var vec__23242 = cljs.core.first(seq__23202__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(1),null);
var temp__5455__auto___23413 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23413)){
var effect_fn_23414 = temp__5455__auto___23413;
(effect_fn_23414.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23414.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23414.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23415 = cljs.core.next(seq__23202__$1);
var G__23416 = null;
var G__23417 = (0);
var G__23418 = (0);
seq__23202 = G__23415;
chunk__23206 = G__23416;
count__23207 = G__23417;
i__23208 = G__23418;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___23419 = re_frame.interop.now();
var duration__22747__auto___23420 = (end__22746__auto___23419 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___23420,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___23419);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23195;
}} else {
var seq__23250 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23251 = null;
var count__23252 = (0);
var i__23253 = (0);
while(true){
if((i__23253 < count__23252)){
var vec__23280 = chunk__23251.cljs$core$IIndexed$_nth$arity$2(null,i__23253);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(1),null);
var temp__5455__auto___23421 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23421)){
var effect_fn_23422 = temp__5455__auto___23421;
(effect_fn_23422.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23422.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23422.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23423 = seq__23250;
var G__23424 = chunk__23251;
var G__23425 = count__23252;
var G__23426 = (i__23253 + (1));
seq__23250 = G__23423;
chunk__23251 = G__23424;
count__23252 = G__23425;
i__23253 = G__23426;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23250);
if(temp__5457__auto__){
var seq__23250__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23250__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23250__$1);
var G__23427 = cljs.core.chunk_rest(seq__23250__$1);
var G__23428 = c__4550__auto__;
var G__23429 = cljs.core.count(c__4550__auto__);
var G__23430 = (0);
seq__23250 = G__23427;
chunk__23251 = G__23428;
count__23252 = G__23429;
i__23253 = G__23430;
continue;
} else {
var vec__23287 = cljs.core.first(seq__23250__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23287,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23287,(1),null);
var temp__5455__auto___23431 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23431)){
var effect_fn_23432 = temp__5455__auto___23431;
(effect_fn_23432.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23432.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23432.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23433 = cljs.core.next(seq__23250__$1);
var G__23434 = null;
var G__23435 = (0);
var G__23436 = (0);
seq__23250 = G__23433;
chunk__23251 = G__23434;
count__23252 = G__23435;
i__23253 = G__23436;
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
var seq__23295 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23296 = null;
var count__23297 = (0);
var i__23298 = (0);
while(true){
if((i__23298 < count__23297)){
var map__23315 = chunk__23296.cljs$core$IIndexed$_nth$arity$2(null,i__23298);
var map__23315__$1 = (((((!((map__23315 == null))))?(((((map__23315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23315):map__23315);
var effect = map__23315__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23315__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23315__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23295,chunk__23296,count__23297,i__23298,map__23315,map__23315__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23295,chunk__23296,count__23297,i__23298,map__23315,map__23315__$1,effect,ms,dispatch))
,ms);
}


var G__23438 = seq__23295;
var G__23439 = chunk__23296;
var G__23440 = count__23297;
var G__23441 = (i__23298 + (1));
seq__23295 = G__23438;
chunk__23296 = G__23439;
count__23297 = G__23440;
i__23298 = G__23441;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23295);
if(temp__5457__auto__){
var seq__23295__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23295__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23295__$1);
var G__23442 = cljs.core.chunk_rest(seq__23295__$1);
var G__23443 = c__4550__auto__;
var G__23444 = cljs.core.count(c__4550__auto__);
var G__23445 = (0);
seq__23295 = G__23442;
chunk__23296 = G__23443;
count__23297 = G__23444;
i__23298 = G__23445;
continue;
} else {
var map__23320 = cljs.core.first(seq__23295__$1);
var map__23320__$1 = (((((!((map__23320 == null))))?(((((map__23320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23320):map__23320);
var effect = map__23320__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23295,chunk__23296,count__23297,i__23298,map__23320,map__23320__$1,effect,ms,dispatch,seq__23295__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23295,chunk__23296,count__23297,i__23298,map__23320,map__23320__$1,effect,ms,dispatch,seq__23295__$1,temp__5457__auto__))
,ms);
}


var G__23450 = cljs.core.next(seq__23295__$1);
var G__23451 = null;
var G__23452 = (0);
var G__23453 = (0);
seq__23295 = G__23450;
chunk__23296 = G__23451;
count__23297 = G__23452;
i__23298 = G__23453;
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
var seq__23340 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23341 = null;
var count__23342 = (0);
var i__23343 = (0);
while(true){
if((i__23343 < count__23342)){
var event = chunk__23341.cljs$core$IIndexed$_nth$arity$2(null,i__23343);
re_frame.router.dispatch(event);


var G__23458 = seq__23340;
var G__23459 = chunk__23341;
var G__23460 = count__23342;
var G__23461 = (i__23343 + (1));
seq__23340 = G__23458;
chunk__23341 = G__23459;
count__23342 = G__23460;
i__23343 = G__23461;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23340);
if(temp__5457__auto__){
var seq__23340__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23340__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23340__$1);
var G__23465 = cljs.core.chunk_rest(seq__23340__$1);
var G__23466 = c__4550__auto__;
var G__23467 = cljs.core.count(c__4550__auto__);
var G__23468 = (0);
seq__23340 = G__23465;
chunk__23341 = G__23466;
count__23342 = G__23467;
i__23343 = G__23468;
continue;
} else {
var event = cljs.core.first(seq__23340__$1);
re_frame.router.dispatch(event);


var G__23469 = cljs.core.next(seq__23340__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__23340 = G__23469;
chunk__23341 = G__23470;
count__23342 = G__23471;
i__23343 = G__23472;
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
var seq__23365 = cljs.core.seq(value);
var chunk__23366 = null;
var count__23368 = (0);
var i__23369 = (0);
while(true){
if((i__23369 < count__23368)){
var event = chunk__23366.cljs$core$IIndexed$_nth$arity$2(null,i__23369);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23477 = seq__23365;
var G__23478 = chunk__23366;
var G__23479 = count__23368;
var G__23480 = (i__23369 + (1));
seq__23365 = G__23477;
chunk__23366 = G__23478;
count__23368 = G__23479;
i__23369 = G__23480;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23365);
if(temp__5457__auto__){
var seq__23365__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23365__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23365__$1);
var G__23481 = cljs.core.chunk_rest(seq__23365__$1);
var G__23482 = c__4550__auto__;
var G__23483 = cljs.core.count(c__4550__auto__);
var G__23484 = (0);
seq__23365 = G__23481;
chunk__23366 = G__23482;
count__23368 = G__23483;
i__23369 = G__23484;
continue;
} else {
var event = cljs.core.first(seq__23365__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23487 = cljs.core.next(seq__23365__$1);
var G__23488 = null;
var G__23489 = (0);
var G__23490 = (0);
seq__23365 = G__23487;
chunk__23366 = G__23488;
count__23368 = G__23489;
i__23369 = G__23490;
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
