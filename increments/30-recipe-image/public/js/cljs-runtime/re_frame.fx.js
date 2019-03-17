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
var _STAR_current_trace_STAR__orig_val__23135 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23136 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23136;

try{try{var seq__23144 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23145 = null;
var count__23146 = (0);
var i__23147 = (0);
while(true){
if((i__23147 < count__23146)){
var vec__23171 = chunk__23145.cljs$core$IIndexed$_nth$arity$2(null,i__23147);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171,(1),null);
var temp__5455__auto___23378 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23378)){
var effect_fn_23383 = temp__5455__auto___23378;
(effect_fn_23383.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23383.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23383.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23384 = seq__23144;
var G__23385 = chunk__23145;
var G__23386 = count__23146;
var G__23387 = (i__23147 + (1));
seq__23144 = G__23384;
chunk__23145 = G__23385;
count__23146 = G__23386;
i__23147 = G__23387;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23144);
if(temp__5457__auto__){
var seq__23144__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23144__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23144__$1);
var G__23390 = cljs.core.chunk_rest(seq__23144__$1);
var G__23391 = c__4550__auto__;
var G__23392 = cljs.core.count(c__4550__auto__);
var G__23393 = (0);
seq__23144 = G__23390;
chunk__23145 = G__23391;
count__23146 = G__23392;
i__23147 = G__23393;
continue;
} else {
var vec__23180 = cljs.core.first(seq__23144__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23180,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23180,(1),null);
var temp__5455__auto___23394 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23394)){
var effect_fn_23395 = temp__5455__auto___23394;
(effect_fn_23395.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23395.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23395.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23396 = cljs.core.next(seq__23144__$1);
var G__23397 = null;
var G__23398 = (0);
var G__23399 = (0);
seq__23144 = G__23396;
chunk__23145 = G__23397;
count__23146 = G__23398;
i__23147 = G__23399;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22746__auto___23400 = re_frame.interop.now();
var duration__22747__auto___23405 = (end__22746__auto___23400 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22747__auto___23405,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22746__auto___23400);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23135;
}} else {
var seq__23212 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23213 = null;
var count__23214 = (0);
var i__23215 = (0);
while(true){
if((i__23215 < count__23214)){
var vec__23240 = chunk__23213.cljs$core$IIndexed$_nth$arity$2(null,i__23215);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23240,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23240,(1),null);
var temp__5455__auto___23410 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23410)){
var effect_fn_23411 = temp__5455__auto___23410;
(effect_fn_23411.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23411.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23411.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23412 = seq__23212;
var G__23413 = chunk__23213;
var G__23414 = count__23214;
var G__23415 = (i__23215 + (1));
seq__23212 = G__23412;
chunk__23213 = G__23413;
count__23214 = G__23414;
i__23215 = G__23415;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23212);
if(temp__5457__auto__){
var seq__23212__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23212__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23212__$1);
var G__23418 = cljs.core.chunk_rest(seq__23212__$1);
var G__23419 = c__4550__auto__;
var G__23420 = cljs.core.count(c__4550__auto__);
var G__23421 = (0);
seq__23212 = G__23418;
chunk__23213 = G__23419;
count__23214 = G__23420;
i__23215 = G__23421;
continue;
} else {
var vec__23253 = cljs.core.first(seq__23212__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(1),null);
var temp__5455__auto___23426 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23426)){
var effect_fn_23427 = temp__5455__auto___23426;
(effect_fn_23427.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23427.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23427.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23432 = cljs.core.next(seq__23212__$1);
var G__23433 = null;
var G__23434 = (0);
var G__23435 = (0);
seq__23212 = G__23432;
chunk__23213 = G__23433;
count__23214 = G__23434;
i__23215 = G__23435;
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
var seq__23269 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23270 = null;
var count__23271 = (0);
var i__23272 = (0);
while(true){
if((i__23272 < count__23271)){
var map__23312 = chunk__23270.cljs$core$IIndexed$_nth$arity$2(null,i__23272);
var map__23312__$1 = (((((!((map__23312 == null))))?(((((map__23312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23312):map__23312);
var effect = map__23312__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23269,chunk__23270,count__23271,i__23272,map__23312,map__23312__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23269,chunk__23270,count__23271,i__23272,map__23312,map__23312__$1,effect,ms,dispatch))
,ms);
}


var G__23449 = seq__23269;
var G__23450 = chunk__23270;
var G__23451 = count__23271;
var G__23452 = (i__23272 + (1));
seq__23269 = G__23449;
chunk__23270 = G__23450;
count__23271 = G__23451;
i__23272 = G__23452;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23269);
if(temp__5457__auto__){
var seq__23269__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23269__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23269__$1);
var G__23453 = cljs.core.chunk_rest(seq__23269__$1);
var G__23454 = c__4550__auto__;
var G__23455 = cljs.core.count(c__4550__auto__);
var G__23456 = (0);
seq__23269 = G__23453;
chunk__23270 = G__23454;
count__23271 = G__23455;
i__23272 = G__23456;
continue;
} else {
var map__23332 = cljs.core.first(seq__23269__$1);
var map__23332__$1 = (((((!((map__23332 == null))))?(((((map__23332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23332):map__23332);
var effect = map__23332__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23332__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23332__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23269,chunk__23270,count__23271,i__23272,map__23332,map__23332__$1,effect,ms,dispatch,seq__23269__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23269,chunk__23270,count__23271,i__23272,map__23332,map__23332__$1,effect,ms,dispatch,seq__23269__$1,temp__5457__auto__))
,ms);
}


var G__23457 = cljs.core.next(seq__23269__$1);
var G__23458 = null;
var G__23459 = (0);
var G__23460 = (0);
seq__23269 = G__23457;
chunk__23270 = G__23458;
count__23271 = G__23459;
i__23272 = G__23460;
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
var seq__23345 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23346 = null;
var count__23347 = (0);
var i__23348 = (0);
while(true){
if((i__23348 < count__23347)){
var event = chunk__23346.cljs$core$IIndexed$_nth$arity$2(null,i__23348);
re_frame.router.dispatch(event);


var G__23461 = seq__23345;
var G__23462 = chunk__23346;
var G__23463 = count__23347;
var G__23464 = (i__23348 + (1));
seq__23345 = G__23461;
chunk__23346 = G__23462;
count__23347 = G__23463;
i__23348 = G__23464;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23345);
if(temp__5457__auto__){
var seq__23345__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23345__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23345__$1);
var G__23465 = cljs.core.chunk_rest(seq__23345__$1);
var G__23466 = c__4550__auto__;
var G__23467 = cljs.core.count(c__4550__auto__);
var G__23468 = (0);
seq__23345 = G__23465;
chunk__23346 = G__23466;
count__23347 = G__23467;
i__23348 = G__23468;
continue;
} else {
var event = cljs.core.first(seq__23345__$1);
re_frame.router.dispatch(event);


var G__23469 = cljs.core.next(seq__23345__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__23345 = G__23469;
chunk__23346 = G__23470;
count__23347 = G__23471;
i__23348 = G__23472;
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
var seq__23357 = cljs.core.seq(value);
var chunk__23358 = null;
var count__23359 = (0);
var i__23360 = (0);
while(true){
if((i__23360 < count__23359)){
var event = chunk__23358.cljs$core$IIndexed$_nth$arity$2(null,i__23360);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23477 = seq__23357;
var G__23478 = chunk__23358;
var G__23479 = count__23359;
var G__23480 = (i__23360 + (1));
seq__23357 = G__23477;
chunk__23358 = G__23478;
count__23359 = G__23479;
i__23360 = G__23480;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23357);
if(temp__5457__auto__){
var seq__23357__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23357__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23357__$1);
var G__23481 = cljs.core.chunk_rest(seq__23357__$1);
var G__23482 = c__4550__auto__;
var G__23483 = cljs.core.count(c__4550__auto__);
var G__23484 = (0);
seq__23357 = G__23481;
chunk__23358 = G__23482;
count__23359 = G__23483;
i__23360 = G__23484;
continue;
} else {
var event = cljs.core.first(seq__23357__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23488 = cljs.core.next(seq__23357__$1);
var G__23489 = null;
var G__23490 = (0);
var G__23491 = (0);
seq__23357 = G__23488;
chunk__23358 = G__23489;
count__23359 = G__23490;
i__23360 = G__23491;
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
