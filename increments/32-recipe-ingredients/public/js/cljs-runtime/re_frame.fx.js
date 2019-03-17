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
var _STAR_current_trace_STAR__orig_val__23124 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23125 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23125;

try{try{var seq__23133 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23134 = null;
var count__23135 = (0);
var i__23136 = (0);
while(true){
if((i__23136 < count__23135)){
var vec__23156 = chunk__23134.cljs$core$IIndexed$_nth$arity$2(null,i__23136);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23156,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23156,(1),null);
var temp__5455__auto___23289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23289)){
var effect_fn_23290 = temp__5455__auto___23289;
(effect_fn_23290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23291 = seq__23133;
var G__23292 = chunk__23134;
var G__23293 = count__23135;
var G__23294 = (i__23136 + (1));
seq__23133 = G__23291;
chunk__23134 = G__23292;
count__23135 = G__23293;
i__23136 = G__23294;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23133);
if(temp__5457__auto__){
var seq__23133__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23133__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23133__$1);
var G__23295 = cljs.core.chunk_rest(seq__23133__$1);
var G__23296 = c__4550__auto__;
var G__23297 = cljs.core.count(c__4550__auto__);
var G__23298 = (0);
seq__23133 = G__23295;
chunk__23134 = G__23296;
count__23135 = G__23297;
i__23136 = G__23298;
continue;
} else {
var vec__23161 = cljs.core.first(seq__23133__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161,(1),null);
var temp__5455__auto___23299 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23299)){
var effect_fn_23300 = temp__5455__auto___23299;
(effect_fn_23300.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23300.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23300.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23306 = cljs.core.next(seq__23133__$1);
var G__23307 = null;
var G__23308 = (0);
var G__23309 = (0);
seq__23133 = G__23306;
chunk__23134 = G__23307;
count__23135 = G__23308;
i__23136 = G__23309;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23310 = re_frame.interop.now();
var duration__22753__auto___23311 = (end__22752__auto___23310 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23311,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23310);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23124;
}} else {
var seq__23167 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23168 = null;
var count__23169 = (0);
var i__23170 = (0);
while(true){
if((i__23170 < count__23169)){
var vec__23188 = chunk__23168.cljs$core$IIndexed$_nth$arity$2(null,i__23170);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23188,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23188,(1),null);
var temp__5455__auto___23316 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23316)){
var effect_fn_23317 = temp__5455__auto___23316;
(effect_fn_23317.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23317.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23317.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23318 = seq__23167;
var G__23319 = chunk__23168;
var G__23320 = count__23169;
var G__23321 = (i__23170 + (1));
seq__23167 = G__23318;
chunk__23168 = G__23319;
count__23169 = G__23320;
i__23170 = G__23321;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23167);
if(temp__5457__auto__){
var seq__23167__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23167__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23167__$1);
var G__23322 = cljs.core.chunk_rest(seq__23167__$1);
var G__23323 = c__4550__auto__;
var G__23324 = cljs.core.count(c__4550__auto__);
var G__23325 = (0);
seq__23167 = G__23322;
chunk__23168 = G__23323;
count__23169 = G__23324;
i__23170 = G__23325;
continue;
} else {
var vec__23199 = cljs.core.first(seq__23167__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23199,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23199,(1),null);
var temp__5455__auto___23326 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23326)){
var effect_fn_23327 = temp__5455__auto___23326;
(effect_fn_23327.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23327.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23327.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23328 = cljs.core.next(seq__23167__$1);
var G__23329 = null;
var G__23330 = (0);
var G__23331 = (0);
seq__23167 = G__23328;
chunk__23168 = G__23329;
count__23169 = G__23330;
i__23170 = G__23331;
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
var seq__23206 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23207 = null;
var count__23208 = (0);
var i__23209 = (0);
while(true){
if((i__23209 < count__23208)){
var map__23229 = chunk__23207.cljs$core$IIndexed$_nth$arity$2(null,i__23209);
var map__23229__$1 = (((((!((map__23229 == null))))?(((((map__23229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23229):map__23229);
var effect = map__23229__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23206,chunk__23207,count__23208,i__23209,map__23229,map__23229__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23206,chunk__23207,count__23208,i__23209,map__23229,map__23229__$1,effect,ms,dispatch))
,ms);
}


var G__23340 = seq__23206;
var G__23341 = chunk__23207;
var G__23342 = count__23208;
var G__23343 = (i__23209 + (1));
seq__23206 = G__23340;
chunk__23207 = G__23341;
count__23208 = G__23342;
i__23209 = G__23343;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23206);
if(temp__5457__auto__){
var seq__23206__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23206__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23206__$1);
var G__23348 = cljs.core.chunk_rest(seq__23206__$1);
var G__23349 = c__4550__auto__;
var G__23350 = cljs.core.count(c__4550__auto__);
var G__23351 = (0);
seq__23206 = G__23348;
chunk__23207 = G__23349;
count__23208 = G__23350;
i__23209 = G__23351;
continue;
} else {
var map__23245 = cljs.core.first(seq__23206__$1);
var map__23245__$1 = (((((!((map__23245 == null))))?(((((map__23245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23245):map__23245);
var effect = map__23245__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23245__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23245__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23206,chunk__23207,count__23208,i__23209,map__23245,map__23245__$1,effect,ms,dispatch,seq__23206__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23206,chunk__23207,count__23208,i__23209,map__23245,map__23245__$1,effect,ms,dispatch,seq__23206__$1,temp__5457__auto__))
,ms);
}


var G__23364 = cljs.core.next(seq__23206__$1);
var G__23365 = null;
var G__23366 = (0);
var G__23367 = (0);
seq__23206 = G__23364;
chunk__23207 = G__23365;
count__23208 = G__23366;
i__23209 = G__23367;
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
var seq__23260 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23261 = null;
var count__23262 = (0);
var i__23263 = (0);
while(true){
if((i__23263 < count__23262)){
var event = chunk__23261.cljs$core$IIndexed$_nth$arity$2(null,i__23263);
re_frame.router.dispatch(event);


var G__23386 = seq__23260;
var G__23387 = chunk__23261;
var G__23388 = count__23262;
var G__23389 = (i__23263 + (1));
seq__23260 = G__23386;
chunk__23261 = G__23387;
count__23262 = G__23388;
i__23263 = G__23389;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23260);
if(temp__5457__auto__){
var seq__23260__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23260__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23260__$1);
var G__23426 = cljs.core.chunk_rest(seq__23260__$1);
var G__23427 = c__4550__auto__;
var G__23428 = cljs.core.count(c__4550__auto__);
var G__23429 = (0);
seq__23260 = G__23426;
chunk__23261 = G__23427;
count__23262 = G__23428;
i__23263 = G__23429;
continue;
} else {
var event = cljs.core.first(seq__23260__$1);
re_frame.router.dispatch(event);


var G__23430 = cljs.core.next(seq__23260__$1);
var G__23431 = null;
var G__23432 = (0);
var G__23433 = (0);
seq__23260 = G__23430;
chunk__23261 = G__23431;
count__23262 = G__23432;
i__23263 = G__23433;
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
var seq__23278 = cljs.core.seq(value);
var chunk__23279 = null;
var count__23280 = (0);
var i__23281 = (0);
while(true){
if((i__23281 < count__23280)){
var event = chunk__23279.cljs$core$IIndexed$_nth$arity$2(null,i__23281);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23438 = seq__23278;
var G__23439 = chunk__23279;
var G__23440 = count__23280;
var G__23441 = (i__23281 + (1));
seq__23278 = G__23438;
chunk__23279 = G__23439;
count__23280 = G__23440;
i__23281 = G__23441;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23278);
if(temp__5457__auto__){
var seq__23278__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23278__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23278__$1);
var G__23442 = cljs.core.chunk_rest(seq__23278__$1);
var G__23443 = c__4550__auto__;
var G__23444 = cljs.core.count(c__4550__auto__);
var G__23445 = (0);
seq__23278 = G__23442;
chunk__23279 = G__23443;
count__23280 = G__23444;
i__23281 = G__23445;
continue;
} else {
var event = cljs.core.first(seq__23278__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23450 = cljs.core.next(seq__23278__$1);
var G__23451 = null;
var G__23452 = (0);
var G__23453 = (0);
seq__23278 = G__23450;
chunk__23279 = G__23451;
count__23280 = G__23452;
i__23281 = G__23453;
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
