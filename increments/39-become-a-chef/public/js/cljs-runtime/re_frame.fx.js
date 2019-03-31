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
var _STAR_current_trace_STAR__orig_val__23171 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23172 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23172;

try{try{var seq__23179 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23180 = null;
var count__23181 = (0);
var i__23182 = (0);
while(true){
if((i__23182 < count__23181)){
var vec__23208 = chunk__23180.cljs$core$IIndexed$_nth$arity$2(null,i__23182);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23208,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23208,(1),null);
var temp__5455__auto___23389 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23389)){
var effect_fn_23390 = temp__5455__auto___23389;
(effect_fn_23390.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23390.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23390.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23391 = seq__23179;
var G__23392 = chunk__23180;
var G__23393 = count__23181;
var G__23394 = (i__23182 + (1));
seq__23179 = G__23391;
chunk__23180 = G__23392;
count__23181 = G__23393;
i__23182 = G__23394;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23179);
if(temp__5457__auto__){
var seq__23179__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23179__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23179__$1);
var G__23399 = cljs.core.chunk_rest(seq__23179__$1);
var G__23400 = c__4550__auto__;
var G__23401 = cljs.core.count(c__4550__auto__);
var G__23402 = (0);
seq__23179 = G__23399;
chunk__23180 = G__23400;
count__23181 = G__23401;
i__23182 = G__23402;
continue;
} else {
var vec__23215 = cljs.core.first(seq__23179__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23215,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23215,(1),null);
var temp__5455__auto___23407 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23407)){
var effect_fn_23412 = temp__5455__auto___23407;
(effect_fn_23412.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23412.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23412.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23413 = cljs.core.next(seq__23179__$1);
var G__23414 = null;
var G__23415 = (0);
var G__23416 = (0);
seq__23179 = G__23413;
chunk__23180 = G__23414;
count__23181 = G__23415;
i__23182 = G__23416;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23421 = re_frame.interop.now();
var duration__22753__auto___23422 = (end__22752__auto___23421 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23422,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23421);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23171;
}} else {
var seq__23222 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23223 = null;
var count__23224 = (0);
var i__23225 = (0);
while(true){
if((i__23225 < count__23224)){
var vec__23253 = chunk__23223.cljs$core$IIndexed$_nth$arity$2(null,i__23225);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(1),null);
var temp__5455__auto___23424 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23424)){
var effect_fn_23425 = temp__5455__auto___23424;
(effect_fn_23425.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23425.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23425.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23426 = seq__23222;
var G__23427 = chunk__23223;
var G__23428 = count__23224;
var G__23429 = (i__23225 + (1));
seq__23222 = G__23426;
chunk__23223 = G__23427;
count__23224 = G__23428;
i__23225 = G__23429;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23222);
if(temp__5457__auto__){
var seq__23222__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23222__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23222__$1);
var G__23430 = cljs.core.chunk_rest(seq__23222__$1);
var G__23431 = c__4550__auto__;
var G__23432 = cljs.core.count(c__4550__auto__);
var G__23433 = (0);
seq__23222 = G__23430;
chunk__23223 = G__23431;
count__23224 = G__23432;
i__23225 = G__23433;
continue;
} else {
var vec__23262 = cljs.core.first(seq__23222__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(1),null);
var temp__5455__auto___23434 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23434)){
var effect_fn_23435 = temp__5455__auto___23434;
(effect_fn_23435.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23435.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23435.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23436 = cljs.core.next(seq__23222__$1);
var G__23437 = null;
var G__23438 = (0);
var G__23439 = (0);
seq__23222 = G__23436;
chunk__23223 = G__23437;
count__23224 = G__23438;
i__23225 = G__23439;
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
var seq__23275 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23276 = null;
var count__23277 = (0);
var i__23278 = (0);
while(true){
if((i__23278 < count__23277)){
var map__23305 = chunk__23276.cljs$core$IIndexed$_nth$arity$2(null,i__23278);
var map__23305__$1 = (((((!((map__23305 == null))))?(((((map__23305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23305):map__23305);
var effect = map__23305__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23275,chunk__23276,count__23277,i__23278,map__23305,map__23305__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23275,chunk__23276,count__23277,i__23278,map__23305,map__23305__$1,effect,ms,dispatch))
,ms);
}


var G__23445 = seq__23275;
var G__23446 = chunk__23276;
var G__23447 = count__23277;
var G__23448 = (i__23278 + (1));
seq__23275 = G__23445;
chunk__23276 = G__23446;
count__23277 = G__23447;
i__23278 = G__23448;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23275);
if(temp__5457__auto__){
var seq__23275__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23275__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23275__$1);
var G__23449 = cljs.core.chunk_rest(seq__23275__$1);
var G__23450 = c__4550__auto__;
var G__23451 = cljs.core.count(c__4550__auto__);
var G__23452 = (0);
seq__23275 = G__23449;
chunk__23276 = G__23450;
count__23277 = G__23451;
i__23278 = G__23452;
continue;
} else {
var map__23320 = cljs.core.first(seq__23275__$1);
var map__23320__$1 = (((((!((map__23320 == null))))?(((((map__23320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23320):map__23320);
var effect = map__23320__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23320__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23275,chunk__23276,count__23277,i__23278,map__23320,map__23320__$1,effect,ms,dispatch,seq__23275__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23275,chunk__23276,count__23277,i__23278,map__23320,map__23320__$1,effect,ms,dispatch,seq__23275__$1,temp__5457__auto__))
,ms);
}


var G__23454 = cljs.core.next(seq__23275__$1);
var G__23455 = null;
var G__23456 = (0);
var G__23457 = (0);
seq__23275 = G__23454;
chunk__23276 = G__23455;
count__23277 = G__23456;
i__23278 = G__23457;
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
var seq__23341 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23342 = null;
var count__23343 = (0);
var i__23344 = (0);
while(true){
if((i__23344 < count__23343)){
var event = chunk__23342.cljs$core$IIndexed$_nth$arity$2(null,i__23344);
re_frame.router.dispatch(event);


var G__23462 = seq__23341;
var G__23463 = chunk__23342;
var G__23464 = count__23343;
var G__23465 = (i__23344 + (1));
seq__23341 = G__23462;
chunk__23342 = G__23463;
count__23343 = G__23464;
i__23344 = G__23465;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23341);
if(temp__5457__auto__){
var seq__23341__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23341__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23341__$1);
var G__23466 = cljs.core.chunk_rest(seq__23341__$1);
var G__23467 = c__4550__auto__;
var G__23468 = cljs.core.count(c__4550__auto__);
var G__23469 = (0);
seq__23341 = G__23466;
chunk__23342 = G__23467;
count__23343 = G__23468;
i__23344 = G__23469;
continue;
} else {
var event = cljs.core.first(seq__23341__$1);
re_frame.router.dispatch(event);


var G__23471 = cljs.core.next(seq__23341__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23341 = G__23471;
chunk__23342 = G__23472;
count__23343 = G__23473;
i__23344 = G__23474;
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
var seq__23355 = cljs.core.seq(value);
var chunk__23356 = null;
var count__23357 = (0);
var i__23358 = (0);
while(true){
if((i__23358 < count__23357)){
var event = chunk__23356.cljs$core$IIndexed$_nth$arity$2(null,i__23358);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23478 = seq__23355;
var G__23479 = chunk__23356;
var G__23480 = count__23357;
var G__23481 = (i__23358 + (1));
seq__23355 = G__23478;
chunk__23356 = G__23479;
count__23357 = G__23480;
i__23358 = G__23481;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23355);
if(temp__5457__auto__){
var seq__23355__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23355__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23355__$1);
var G__23485 = cljs.core.chunk_rest(seq__23355__$1);
var G__23486 = c__4550__auto__;
var G__23487 = cljs.core.count(c__4550__auto__);
var G__23488 = (0);
seq__23355 = G__23485;
chunk__23356 = G__23486;
count__23357 = G__23487;
i__23358 = G__23488;
continue;
} else {
var event = cljs.core.first(seq__23355__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23493 = cljs.core.next(seq__23355__$1);
var G__23494 = null;
var G__23495 = (0);
var G__23496 = (0);
seq__23355 = G__23493;
chunk__23356 = G__23494;
count__23357 = G__23495;
i__23358 = G__23496;
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
