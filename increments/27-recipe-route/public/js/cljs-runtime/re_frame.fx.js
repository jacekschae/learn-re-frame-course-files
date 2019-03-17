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
var _STAR_current_trace_STAR__orig_val__23121 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23122 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23122;

try{try{var seq__23131 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23132 = null;
var count__23133 = (0);
var i__23134 = (0);
while(true){
if((i__23134 < count__23133)){
var vec__23154 = chunk__23132.cljs$core$IIndexed$_nth$arity$2(null,i__23134);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23154,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23154,(1),null);
var temp__5455__auto___23362 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23362)){
var effect_fn_23363 = temp__5455__auto___23362;
(effect_fn_23363.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23363.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23363.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23368 = seq__23131;
var G__23369 = chunk__23132;
var G__23370 = count__23133;
var G__23371 = (i__23134 + (1));
seq__23131 = G__23368;
chunk__23132 = G__23369;
count__23133 = G__23370;
i__23134 = G__23371;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23131);
if(temp__5457__auto__){
var seq__23131__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23131__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23131__$1);
var G__23372 = cljs.core.chunk_rest(seq__23131__$1);
var G__23373 = c__4550__auto__;
var G__23374 = cljs.core.count(c__4550__auto__);
var G__23375 = (0);
seq__23131 = G__23372;
chunk__23132 = G__23373;
count__23133 = G__23374;
i__23134 = G__23375;
continue;
} else {
var vec__23166 = cljs.core.first(seq__23131__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(1),null);
var temp__5455__auto___23380 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23380)){
var effect_fn_23381 = temp__5455__auto___23380;
(effect_fn_23381.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23381.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23381.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23382 = cljs.core.next(seq__23131__$1);
var G__23383 = null;
var G__23384 = (0);
var G__23385 = (0);
seq__23131 = G__23382;
chunk__23132 = G__23383;
count__23133 = G__23384;
i__23134 = G__23385;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23386 = re_frame.interop.now();
var duration__22753__auto___23387 = (end__22752__auto___23386 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23387,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23386);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23121;
}} else {
var seq__23175 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23176 = null;
var count__23177 = (0);
var i__23178 = (0);
while(true){
if((i__23178 < count__23177)){
var vec__23205 = chunk__23176.cljs$core$IIndexed$_nth$arity$2(null,i__23178);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(1),null);
var temp__5455__auto___23400 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23400)){
var effect_fn_23401 = temp__5455__auto___23400;
(effect_fn_23401.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23401.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23401.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23404 = seq__23175;
var G__23405 = chunk__23176;
var G__23406 = count__23177;
var G__23407 = (i__23178 + (1));
seq__23175 = G__23404;
chunk__23176 = G__23405;
count__23177 = G__23406;
i__23178 = G__23407;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23175);
if(temp__5457__auto__){
var seq__23175__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23175__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23175__$1);
var G__23412 = cljs.core.chunk_rest(seq__23175__$1);
var G__23413 = c__4550__auto__;
var G__23414 = cljs.core.count(c__4550__auto__);
var G__23415 = (0);
seq__23175 = G__23412;
chunk__23176 = G__23413;
count__23177 = G__23414;
i__23178 = G__23415;
continue;
} else {
var vec__23219 = cljs.core.first(seq__23175__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(1),null);
var temp__5455__auto___23422 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23422)){
var effect_fn_23423 = temp__5455__auto___23422;
(effect_fn_23423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23423.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23424 = cljs.core.next(seq__23175__$1);
var G__23425 = null;
var G__23426 = (0);
var G__23427 = (0);
seq__23175 = G__23424;
chunk__23176 = G__23425;
count__23177 = G__23426;
i__23178 = G__23427;
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
var seq__23227 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23228 = null;
var count__23229 = (0);
var i__23230 = (0);
while(true){
if((i__23230 < count__23229)){
var map__23266 = chunk__23228.cljs$core$IIndexed$_nth$arity$2(null,i__23230);
var map__23266__$1 = (((((!((map__23266 == null))))?(((((map__23266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23266):map__23266);
var effect = map__23266__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23266__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23266__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23227,chunk__23228,count__23229,i__23230,map__23266,map__23266__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23227,chunk__23228,count__23229,i__23230,map__23266,map__23266__$1,effect,ms,dispatch))
,ms);
}


var G__23428 = seq__23227;
var G__23429 = chunk__23228;
var G__23430 = count__23229;
var G__23431 = (i__23230 + (1));
seq__23227 = G__23428;
chunk__23228 = G__23429;
count__23229 = G__23430;
i__23230 = G__23431;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23227);
if(temp__5457__auto__){
var seq__23227__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23227__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23227__$1);
var G__23438 = cljs.core.chunk_rest(seq__23227__$1);
var G__23439 = c__4550__auto__;
var G__23440 = cljs.core.count(c__4550__auto__);
var G__23441 = (0);
seq__23227 = G__23438;
chunk__23228 = G__23439;
count__23229 = G__23440;
i__23230 = G__23441;
continue;
} else {
var map__23285 = cljs.core.first(seq__23227__$1);
var map__23285__$1 = (((((!((map__23285 == null))))?(((((map__23285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23285):map__23285);
var effect = map__23285__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23285__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23227,chunk__23228,count__23229,i__23230,map__23285,map__23285__$1,effect,ms,dispatch,seq__23227__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23227,chunk__23228,count__23229,i__23230,map__23285,map__23285__$1,effect,ms,dispatch,seq__23227__$1,temp__5457__auto__))
,ms);
}


var G__23450 = cljs.core.next(seq__23227__$1);
var G__23451 = null;
var G__23452 = (0);
var G__23453 = (0);
seq__23227 = G__23450;
chunk__23228 = G__23451;
count__23229 = G__23452;
i__23230 = G__23453;
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
var seq__23310 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23311 = null;
var count__23312 = (0);
var i__23313 = (0);
while(true){
if((i__23313 < count__23312)){
var event = chunk__23311.cljs$core$IIndexed$_nth$arity$2(null,i__23313);
re_frame.router.dispatch(event);


var G__23465 = seq__23310;
var G__23466 = chunk__23311;
var G__23467 = count__23312;
var G__23468 = (i__23313 + (1));
seq__23310 = G__23465;
chunk__23311 = G__23466;
count__23312 = G__23467;
i__23313 = G__23468;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23310);
if(temp__5457__auto__){
var seq__23310__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23310__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23310__$1);
var G__23472 = cljs.core.chunk_rest(seq__23310__$1);
var G__23473 = c__4550__auto__;
var G__23474 = cljs.core.count(c__4550__auto__);
var G__23475 = (0);
seq__23310 = G__23472;
chunk__23311 = G__23473;
count__23312 = G__23474;
i__23313 = G__23475;
continue;
} else {
var event = cljs.core.first(seq__23310__$1);
re_frame.router.dispatch(event);


var G__23476 = cljs.core.next(seq__23310__$1);
var G__23477 = null;
var G__23478 = (0);
var G__23479 = (0);
seq__23310 = G__23476;
chunk__23311 = G__23477;
count__23312 = G__23478;
i__23313 = G__23479;
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
var seq__23323 = cljs.core.seq(value);
var chunk__23324 = null;
var count__23325 = (0);
var i__23326 = (0);
while(true){
if((i__23326 < count__23325)){
var event = chunk__23324.cljs$core$IIndexed$_nth$arity$2(null,i__23326);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23484 = seq__23323;
var G__23485 = chunk__23324;
var G__23486 = count__23325;
var G__23487 = (i__23326 + (1));
seq__23323 = G__23484;
chunk__23324 = G__23485;
count__23325 = G__23486;
i__23326 = G__23487;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23323);
if(temp__5457__auto__){
var seq__23323__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23323__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23323__$1);
var G__23488 = cljs.core.chunk_rest(seq__23323__$1);
var G__23489 = c__4550__auto__;
var G__23490 = cljs.core.count(c__4550__auto__);
var G__23491 = (0);
seq__23323 = G__23488;
chunk__23324 = G__23489;
count__23325 = G__23490;
i__23326 = G__23491;
continue;
} else {
var event = cljs.core.first(seq__23323__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23493 = cljs.core.next(seq__23323__$1);
var G__23494 = null;
var G__23495 = (0);
var G__23496 = (0);
seq__23323 = G__23493;
chunk__23324 = G__23494;
count__23325 = G__23495;
i__23326 = G__23496;
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
