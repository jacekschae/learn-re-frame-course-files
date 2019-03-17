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
var _STAR_current_trace_STAR__orig_val__23174 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23175 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23175;

try{try{var seq__23182 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23183 = null;
var count__23184 = (0);
var i__23185 = (0);
while(true){
if((i__23185 < count__23184)){
var vec__23210 = chunk__23183.cljs$core$IIndexed$_nth$arity$2(null,i__23185);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210,(1),null);
var temp__5455__auto___23380 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23380)){
var effect_fn_23381 = temp__5455__auto___23380;
(effect_fn_23381.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23381.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23381.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23386 = seq__23182;
var G__23387 = chunk__23183;
var G__23388 = count__23184;
var G__23389 = (i__23185 + (1));
seq__23182 = G__23386;
chunk__23183 = G__23387;
count__23184 = G__23388;
i__23185 = G__23389;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23182);
if(temp__5457__auto__){
var seq__23182__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23182__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23182__$1);
var G__23398 = cljs.core.chunk_rest(seq__23182__$1);
var G__23399 = c__4550__auto__;
var G__23400 = cljs.core.count(c__4550__auto__);
var G__23401 = (0);
seq__23182 = G__23398;
chunk__23183 = G__23399;
count__23184 = G__23400;
i__23185 = G__23401;
continue;
} else {
var vec__23219 = cljs.core.first(seq__23182__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(1),null);
var temp__5455__auto___23408 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23408)){
var effect_fn_23409 = temp__5455__auto___23408;
(effect_fn_23409.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23409.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23409.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23414 = cljs.core.next(seq__23182__$1);
var G__23415 = null;
var G__23416 = (0);
var G__23417 = (0);
seq__23182 = G__23414;
chunk__23183 = G__23415;
count__23184 = G__23416;
i__23185 = G__23417;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23418 = re_frame.interop.now();
var duration__22753__auto___23419 = (end__22752__auto___23418 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23419,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23418);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23174;
}} else {
var seq__23226 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23227 = null;
var count__23228 = (0);
var i__23229 = (0);
while(true){
if((i__23229 < count__23228)){
var vec__23254 = chunk__23227.cljs$core$IIndexed$_nth$arity$2(null,i__23229);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(1),null);
var temp__5455__auto___23428 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23428)){
var effect_fn_23429 = temp__5455__auto___23428;
(effect_fn_23429.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23429.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23429.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23434 = seq__23226;
var G__23435 = chunk__23227;
var G__23436 = count__23228;
var G__23437 = (i__23229 + (1));
seq__23226 = G__23434;
chunk__23227 = G__23435;
count__23228 = G__23436;
i__23229 = G__23437;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23226);
if(temp__5457__auto__){
var seq__23226__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23226__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23226__$1);
var G__23438 = cljs.core.chunk_rest(seq__23226__$1);
var G__23439 = c__4550__auto__;
var G__23440 = cljs.core.count(c__4550__auto__);
var G__23441 = (0);
seq__23226 = G__23438;
chunk__23227 = G__23439;
count__23228 = G__23440;
i__23229 = G__23441;
continue;
} else {
var vec__23268 = cljs.core.first(seq__23226__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23268,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23268,(1),null);
var temp__5455__auto___23443 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23443)){
var effect_fn_23444 = temp__5455__auto___23443;
(effect_fn_23444.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23444.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23444.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23445 = cljs.core.next(seq__23226__$1);
var G__23446 = null;
var G__23447 = (0);
var G__23448 = (0);
seq__23226 = G__23445;
chunk__23227 = G__23446;
count__23228 = G__23447;
i__23229 = G__23448;
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
var seq__23279 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23280 = null;
var count__23281 = (0);
var i__23282 = (0);
while(true){
if((i__23282 < count__23281)){
var map__23309 = chunk__23280.cljs$core$IIndexed$_nth$arity$2(null,i__23282);
var map__23309__$1 = (((((!((map__23309 == null))))?(((((map__23309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23309):map__23309);
var effect = map__23309__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23309__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23309__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23279,chunk__23280,count__23281,i__23282,map__23309,map__23309__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23279,chunk__23280,count__23281,i__23282,map__23309,map__23309__$1,effect,ms,dispatch))
,ms);
}


var G__23455 = seq__23279;
var G__23456 = chunk__23280;
var G__23457 = count__23281;
var G__23458 = (i__23282 + (1));
seq__23279 = G__23455;
chunk__23280 = G__23456;
count__23281 = G__23457;
i__23282 = G__23458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23279);
if(temp__5457__auto__){
var seq__23279__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23279__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23279__$1);
var G__23459 = cljs.core.chunk_rest(seq__23279__$1);
var G__23460 = c__4550__auto__;
var G__23461 = cljs.core.count(c__4550__auto__);
var G__23462 = (0);
seq__23279 = G__23459;
chunk__23280 = G__23460;
count__23281 = G__23461;
i__23282 = G__23462;
continue;
} else {
var map__23321 = cljs.core.first(seq__23279__$1);
var map__23321__$1 = (((((!((map__23321 == null))))?(((((map__23321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23321):map__23321);
var effect = map__23321__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23279,chunk__23280,count__23281,i__23282,map__23321,map__23321__$1,effect,ms,dispatch,seq__23279__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23279,chunk__23280,count__23281,i__23282,map__23321,map__23321__$1,effect,ms,dispatch,seq__23279__$1,temp__5457__auto__))
,ms);
}


var G__23470 = cljs.core.next(seq__23279__$1);
var G__23471 = null;
var G__23472 = (0);
var G__23473 = (0);
seq__23279 = G__23470;
chunk__23280 = G__23471;
count__23281 = G__23472;
i__23282 = G__23473;
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
var seq__23334 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23335 = null;
var count__23336 = (0);
var i__23337 = (0);
while(true){
if((i__23337 < count__23336)){
var event = chunk__23335.cljs$core$IIndexed$_nth$arity$2(null,i__23337);
re_frame.router.dispatch(event);


var G__23479 = seq__23334;
var G__23480 = chunk__23335;
var G__23481 = count__23336;
var G__23482 = (i__23337 + (1));
seq__23334 = G__23479;
chunk__23335 = G__23480;
count__23336 = G__23481;
i__23337 = G__23482;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23334);
if(temp__5457__auto__){
var seq__23334__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23334__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23334__$1);
var G__23483 = cljs.core.chunk_rest(seq__23334__$1);
var G__23484 = c__4550__auto__;
var G__23485 = cljs.core.count(c__4550__auto__);
var G__23486 = (0);
seq__23334 = G__23483;
chunk__23335 = G__23484;
count__23336 = G__23485;
i__23337 = G__23486;
continue;
} else {
var event = cljs.core.first(seq__23334__$1);
re_frame.router.dispatch(event);


var G__23488 = cljs.core.next(seq__23334__$1);
var G__23489 = null;
var G__23490 = (0);
var G__23491 = (0);
seq__23334 = G__23488;
chunk__23335 = G__23489;
count__23336 = G__23490;
i__23337 = G__23491;
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
var seq__23339 = cljs.core.seq(value);
var chunk__23340 = null;
var count__23341 = (0);
var i__23342 = (0);
while(true){
if((i__23342 < count__23341)){
var event = chunk__23340.cljs$core$IIndexed$_nth$arity$2(null,i__23342);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23500 = seq__23339;
var G__23501 = chunk__23340;
var G__23502 = count__23341;
var G__23503 = (i__23342 + (1));
seq__23339 = G__23500;
chunk__23340 = G__23501;
count__23341 = G__23502;
i__23342 = G__23503;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23339);
if(temp__5457__auto__){
var seq__23339__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23339__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23339__$1);
var G__23504 = cljs.core.chunk_rest(seq__23339__$1);
var G__23505 = c__4550__auto__;
var G__23506 = cljs.core.count(c__4550__auto__);
var G__23507 = (0);
seq__23339 = G__23504;
chunk__23340 = G__23505;
count__23341 = G__23506;
i__23342 = G__23507;
continue;
} else {
var event = cljs.core.first(seq__23339__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23510 = cljs.core.next(seq__23339__$1);
var G__23511 = null;
var G__23512 = (0);
var G__23513 = (0);
seq__23339 = G__23510;
chunk__23340 = G__23511;
count__23341 = G__23512;
i__23342 = G__23513;
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
