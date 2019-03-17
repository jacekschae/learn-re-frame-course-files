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

try{try{var seq__23222 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23223 = null;
var count__23224 = (0);
var i__23225 = (0);
while(true){
if((i__23225 < count__23224)){
var vec__23248 = chunk__23223.cljs$core$IIndexed$_nth$arity$2(null,i__23225);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248,(1),null);
var temp__5455__auto___23427 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23427)){
var effect_fn_23428 = temp__5455__auto___23427;
(effect_fn_23428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23428.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23428.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23429 = seq__23222;
var G__23430 = chunk__23223;
var G__23431 = count__23224;
var G__23432 = (i__23225 + (1));
seq__23222 = G__23429;
chunk__23223 = G__23430;
count__23224 = G__23431;
i__23225 = G__23432;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23222);
if(temp__5457__auto__){
var seq__23222__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23222__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23222__$1);
var G__23433 = cljs.core.chunk_rest(seq__23222__$1);
var G__23434 = c__4550__auto__;
var G__23435 = cljs.core.count(c__4550__auto__);
var G__23436 = (0);
seq__23222 = G__23433;
chunk__23223 = G__23434;
count__23224 = G__23435;
i__23225 = G__23436;
continue;
} else {
var vec__23260 = cljs.core.first(seq__23222__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23260,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23260,(1),null);
var temp__5455__auto___23437 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23437)){
var effect_fn_23438 = temp__5455__auto___23437;
(effect_fn_23438.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23438.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23438.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23439 = cljs.core.next(seq__23222__$1);
var G__23440 = null;
var G__23441 = (0);
var G__23442 = (0);
seq__23222 = G__23439;
chunk__23223 = G__23440;
count__23224 = G__23441;
i__23225 = G__23442;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23443 = re_frame.interop.now();
var duration__22753__auto___23444 = (end__22752__auto___23443 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23444,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23443);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23207;
}} else {
var seq__23267 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23268 = null;
var count__23269 = (0);
var i__23270 = (0);
while(true){
if((i__23270 < count__23269)){
var vec__23304 = chunk__23268.cljs$core$IIndexed$_nth$arity$2(null,i__23270);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(1),null);
var temp__5455__auto___23445 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23445)){
var effect_fn_23446 = temp__5455__auto___23445;
(effect_fn_23446.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23446.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23446.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23449 = seq__23267;
var G__23450 = chunk__23268;
var G__23451 = count__23269;
var G__23452 = (i__23270 + (1));
seq__23267 = G__23449;
chunk__23268 = G__23450;
count__23269 = G__23451;
i__23270 = G__23452;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23267);
if(temp__5457__auto__){
var seq__23267__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23267__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23267__$1);
var G__23454 = cljs.core.chunk_rest(seq__23267__$1);
var G__23455 = c__4550__auto__;
var G__23456 = cljs.core.count(c__4550__auto__);
var G__23457 = (0);
seq__23267 = G__23454;
chunk__23268 = G__23455;
count__23269 = G__23456;
i__23270 = G__23457;
continue;
} else {
var vec__23311 = cljs.core.first(seq__23267__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(1),null);
var temp__5455__auto___23458 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23458)){
var effect_fn_23459 = temp__5455__auto___23458;
(effect_fn_23459.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23459.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23459.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23461 = cljs.core.next(seq__23267__$1);
var G__23462 = null;
var G__23463 = (0);
var G__23464 = (0);
seq__23267 = G__23461;
chunk__23268 = G__23462;
count__23269 = G__23463;
i__23270 = G__23464;
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
var seq__23324 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23325 = null;
var count__23326 = (0);
var i__23327 = (0);
while(true){
if((i__23327 < count__23326)){
var map__23349 = chunk__23325.cljs$core$IIndexed$_nth$arity$2(null,i__23327);
var map__23349__$1 = (((((!((map__23349 == null))))?(((((map__23349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23349):map__23349);
var effect = map__23349__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23349__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23349__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23324,chunk__23325,count__23326,i__23327,map__23349,map__23349__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23324,chunk__23325,count__23326,i__23327,map__23349,map__23349__$1,effect,ms,dispatch))
,ms);
}


var G__23465 = seq__23324;
var G__23466 = chunk__23325;
var G__23467 = count__23326;
var G__23468 = (i__23327 + (1));
seq__23324 = G__23465;
chunk__23325 = G__23466;
count__23326 = G__23467;
i__23327 = G__23468;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23324);
if(temp__5457__auto__){
var seq__23324__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23324__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23324__$1);
var G__23469 = cljs.core.chunk_rest(seq__23324__$1);
var G__23470 = c__4550__auto__;
var G__23471 = cljs.core.count(c__4550__auto__);
var G__23472 = (0);
seq__23324 = G__23469;
chunk__23325 = G__23470;
count__23326 = G__23471;
i__23327 = G__23472;
continue;
} else {
var map__23371 = cljs.core.first(seq__23324__$1);
var map__23371__$1 = (((((!((map__23371 == null))))?(((((map__23371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23371):map__23371);
var effect = map__23371__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23324,chunk__23325,count__23326,i__23327,map__23371,map__23371__$1,effect,ms,dispatch,seq__23324__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23324,chunk__23325,count__23326,i__23327,map__23371,map__23371__$1,effect,ms,dispatch,seq__23324__$1,temp__5457__auto__))
,ms);
}


var G__23474 = cljs.core.next(seq__23324__$1);
var G__23475 = null;
var G__23476 = (0);
var G__23477 = (0);
seq__23324 = G__23474;
chunk__23325 = G__23475;
count__23326 = G__23476;
i__23327 = G__23477;
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
var seq__23383 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23384 = null;
var count__23385 = (0);
var i__23386 = (0);
while(true){
if((i__23386 < count__23385)){
var event = chunk__23384.cljs$core$IIndexed$_nth$arity$2(null,i__23386);
re_frame.router.dispatch(event);


var G__23485 = seq__23383;
var G__23486 = chunk__23384;
var G__23487 = count__23385;
var G__23488 = (i__23386 + (1));
seq__23383 = G__23485;
chunk__23384 = G__23486;
count__23385 = G__23487;
i__23386 = G__23488;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23383);
if(temp__5457__auto__){
var seq__23383__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23383__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23383__$1);
var G__23489 = cljs.core.chunk_rest(seq__23383__$1);
var G__23490 = c__4550__auto__;
var G__23491 = cljs.core.count(c__4550__auto__);
var G__23492 = (0);
seq__23383 = G__23489;
chunk__23384 = G__23490;
count__23385 = G__23491;
i__23386 = G__23492;
continue;
} else {
var event = cljs.core.first(seq__23383__$1);
re_frame.router.dispatch(event);


var G__23496 = cljs.core.next(seq__23383__$1);
var G__23497 = null;
var G__23498 = (0);
var G__23499 = (0);
seq__23383 = G__23496;
chunk__23384 = G__23497;
count__23385 = G__23498;
i__23386 = G__23499;
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
var seq__23404 = cljs.core.seq(value);
var chunk__23405 = null;
var count__23406 = (0);
var i__23407 = (0);
while(true){
if((i__23407 < count__23406)){
var event = chunk__23405.cljs$core$IIndexed$_nth$arity$2(null,i__23407);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23500 = seq__23404;
var G__23501 = chunk__23405;
var G__23502 = count__23406;
var G__23503 = (i__23407 + (1));
seq__23404 = G__23500;
chunk__23405 = G__23501;
count__23406 = G__23502;
i__23407 = G__23503;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23404);
if(temp__5457__auto__){
var seq__23404__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23404__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23404__$1);
var G__23508 = cljs.core.chunk_rest(seq__23404__$1);
var G__23509 = c__4550__auto__;
var G__23510 = cljs.core.count(c__4550__auto__);
var G__23511 = (0);
seq__23404 = G__23508;
chunk__23405 = G__23509;
count__23406 = G__23510;
i__23407 = G__23511;
continue;
} else {
var event = cljs.core.first(seq__23404__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23512 = cljs.core.next(seq__23404__$1);
var G__23513 = null;
var G__23514 = (0);
var G__23515 = (0);
seq__23404 = G__23512;
chunk__23405 = G__23513;
count__23406 = G__23514;
i__23407 = G__23515;
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
