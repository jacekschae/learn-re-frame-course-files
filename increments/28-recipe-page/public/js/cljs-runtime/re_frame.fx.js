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
var _STAR_current_trace_STAR__orig_val__23145 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23146 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23146;

try{try{var seq__23150 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23151 = null;
var count__23152 = (0);
var i__23153 = (0);
while(true){
if((i__23153 < count__23152)){
var vec__23183 = chunk__23151.cljs$core$IIndexed$_nth$arity$2(null,i__23153);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23183,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23183,(1),null);
var temp__5455__auto___23363 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23363)){
var effect_fn_23364 = temp__5455__auto___23363;
(effect_fn_23364.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23364.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23364.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23365 = seq__23150;
var G__23366 = chunk__23151;
var G__23367 = count__23152;
var G__23368 = (i__23153 + (1));
seq__23150 = G__23365;
chunk__23151 = G__23366;
count__23152 = G__23367;
i__23153 = G__23368;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23150);
if(temp__5457__auto__){
var seq__23150__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23150__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23150__$1);
var G__23369 = cljs.core.chunk_rest(seq__23150__$1);
var G__23370 = c__4550__auto__;
var G__23371 = cljs.core.count(c__4550__auto__);
var G__23372 = (0);
seq__23150 = G__23369;
chunk__23151 = G__23370;
count__23152 = G__23371;
i__23153 = G__23372;
continue;
} else {
var vec__23193 = cljs.core.first(seq__23150__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(1),null);
var temp__5455__auto___23373 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23373)){
var effect_fn_23374 = temp__5455__auto___23373;
(effect_fn_23374.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23374.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23374.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23377 = cljs.core.next(seq__23150__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__23150 = G__23377;
chunk__23151 = G__23378;
count__23152 = G__23379;
i__23153 = G__23380;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23381 = re_frame.interop.now();
var duration__22753__auto___23382 = (end__22752__auto___23381 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23382,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23381);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23145;
}} else {
var seq__23199 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23200 = null;
var count__23201 = (0);
var i__23202 = (0);
while(true){
if((i__23202 < count__23201)){
var vec__23216 = chunk__23200.cljs$core$IIndexed$_nth$arity$2(null,i__23202);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216,(1),null);
var temp__5455__auto___23384 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23384)){
var effect_fn_23385 = temp__5455__auto___23384;
(effect_fn_23385.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23385.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23385.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23386 = seq__23199;
var G__23387 = chunk__23200;
var G__23388 = count__23201;
var G__23389 = (i__23202 + (1));
seq__23199 = G__23386;
chunk__23200 = G__23387;
count__23201 = G__23388;
i__23202 = G__23389;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23199);
if(temp__5457__auto__){
var seq__23199__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23199__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23199__$1);
var G__23390 = cljs.core.chunk_rest(seq__23199__$1);
var G__23391 = c__4550__auto__;
var G__23392 = cljs.core.count(c__4550__auto__);
var G__23393 = (0);
seq__23199 = G__23390;
chunk__23200 = G__23391;
count__23201 = G__23392;
i__23202 = G__23393;
continue;
} else {
var vec__23226 = cljs.core.first(seq__23199__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23226,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23226,(1),null);
var temp__5455__auto___23394 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23394)){
var effect_fn_23395 = temp__5455__auto___23394;
(effect_fn_23395.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23395.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23395.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23396 = cljs.core.next(seq__23199__$1);
var G__23397 = null;
var G__23398 = (0);
var G__23399 = (0);
seq__23199 = G__23396;
chunk__23200 = G__23397;
count__23201 = G__23398;
i__23202 = G__23399;
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
var seq__23233 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23234 = null;
var count__23235 = (0);
var i__23236 = (0);
while(true){
if((i__23236 < count__23235)){
var map__23273 = chunk__23234.cljs$core$IIndexed$_nth$arity$2(null,i__23236);
var map__23273__$1 = (((((!((map__23273 == null))))?(((((map__23273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23273):map__23273);
var effect = map__23273__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23233,chunk__23234,count__23235,i__23236,map__23273,map__23273__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23233,chunk__23234,count__23235,i__23236,map__23273,map__23273__$1,effect,ms,dispatch))
,ms);
}


var G__23406 = seq__23233;
var G__23407 = chunk__23234;
var G__23408 = count__23235;
var G__23409 = (i__23236 + (1));
seq__23233 = G__23406;
chunk__23234 = G__23407;
count__23235 = G__23408;
i__23236 = G__23409;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23233);
if(temp__5457__auto__){
var seq__23233__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23233__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23233__$1);
var G__23411 = cljs.core.chunk_rest(seq__23233__$1);
var G__23412 = c__4550__auto__;
var G__23413 = cljs.core.count(c__4550__auto__);
var G__23414 = (0);
seq__23233 = G__23411;
chunk__23234 = G__23412;
count__23235 = G__23413;
i__23236 = G__23414;
continue;
} else {
var map__23291 = cljs.core.first(seq__23233__$1);
var map__23291__$1 = (((((!((map__23291 == null))))?(((((map__23291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23291):map__23291);
var effect = map__23291__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23233,chunk__23234,count__23235,i__23236,map__23291,map__23291__$1,effect,ms,dispatch,seq__23233__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23233,chunk__23234,count__23235,i__23236,map__23291,map__23291__$1,effect,ms,dispatch,seq__23233__$1,temp__5457__auto__))
,ms);
}


var G__23419 = cljs.core.next(seq__23233__$1);
var G__23420 = null;
var G__23421 = (0);
var G__23422 = (0);
seq__23233 = G__23419;
chunk__23234 = G__23420;
count__23235 = G__23421;
i__23236 = G__23422;
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
var seq__23300 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23301 = null;
var count__23302 = (0);
var i__23303 = (0);
while(true){
if((i__23303 < count__23302)){
var event = chunk__23301.cljs$core$IIndexed$_nth$arity$2(null,i__23303);
re_frame.router.dispatch(event);


var G__23435 = seq__23300;
var G__23436 = chunk__23301;
var G__23437 = count__23302;
var G__23438 = (i__23303 + (1));
seq__23300 = G__23435;
chunk__23301 = G__23436;
count__23302 = G__23437;
i__23303 = G__23438;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23300);
if(temp__5457__auto__){
var seq__23300__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23300__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23300__$1);
var G__23450 = cljs.core.chunk_rest(seq__23300__$1);
var G__23451 = c__4550__auto__;
var G__23452 = cljs.core.count(c__4550__auto__);
var G__23453 = (0);
seq__23300 = G__23450;
chunk__23301 = G__23451;
count__23302 = G__23452;
i__23303 = G__23453;
continue;
} else {
var event = cljs.core.first(seq__23300__$1);
re_frame.router.dispatch(event);


var G__23454 = cljs.core.next(seq__23300__$1);
var G__23455 = null;
var G__23456 = (0);
var G__23457 = (0);
seq__23300 = G__23454;
chunk__23301 = G__23455;
count__23302 = G__23456;
i__23303 = G__23457;
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
var seq__23336 = cljs.core.seq(value);
var chunk__23337 = null;
var count__23338 = (0);
var i__23339 = (0);
while(true){
if((i__23339 < count__23338)){
var event = chunk__23337.cljs$core$IIndexed$_nth$arity$2(null,i__23339);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23469 = seq__23336;
var G__23470 = chunk__23337;
var G__23471 = count__23338;
var G__23472 = (i__23339 + (1));
seq__23336 = G__23469;
chunk__23337 = G__23470;
count__23338 = G__23471;
i__23339 = G__23472;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23336);
if(temp__5457__auto__){
var seq__23336__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23336__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23336__$1);
var G__23473 = cljs.core.chunk_rest(seq__23336__$1);
var G__23474 = c__4550__auto__;
var G__23475 = cljs.core.count(c__4550__auto__);
var G__23476 = (0);
seq__23336 = G__23473;
chunk__23337 = G__23474;
count__23338 = G__23475;
i__23339 = G__23476;
continue;
} else {
var event = cljs.core.first(seq__23336__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23477 = cljs.core.next(seq__23336__$1);
var G__23478 = null;
var G__23479 = (0);
var G__23480 = (0);
seq__23336 = G__23477;
chunk__23337 = G__23478;
count__23338 = G__23479;
i__23339 = G__23480;
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
