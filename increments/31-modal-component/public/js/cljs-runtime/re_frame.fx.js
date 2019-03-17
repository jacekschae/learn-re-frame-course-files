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
var _STAR_current_trace_STAR__orig_val__23047 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23048 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23048;

try{try{var seq__23056 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23057 = null;
var count__23058 = (0);
var i__23059 = (0);
while(true){
if((i__23059 < count__23058)){
var vec__23090 = chunk__23057.cljs$core$IIndexed$_nth$arity$2(null,i__23059);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(1),null);
var temp__5455__auto___23243 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23243)){
var effect_fn_23244 = temp__5455__auto___23243;
(effect_fn_23244.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23244.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23244.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23245 = seq__23056;
var G__23246 = chunk__23057;
var G__23247 = count__23058;
var G__23248 = (i__23059 + (1));
seq__23056 = G__23245;
chunk__23057 = G__23246;
count__23058 = G__23247;
i__23059 = G__23248;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23056);
if(temp__5457__auto__){
var seq__23056__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23056__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23056__$1);
var G__23249 = cljs.core.chunk_rest(seq__23056__$1);
var G__23250 = c__4550__auto__;
var G__23251 = cljs.core.count(c__4550__auto__);
var G__23252 = (0);
seq__23056 = G__23249;
chunk__23057 = G__23250;
count__23058 = G__23251;
i__23059 = G__23252;
continue;
} else {
var vec__23096 = cljs.core.first(seq__23056__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23096,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23096,(1),null);
var temp__5455__auto___23253 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23253)){
var effect_fn_23254 = temp__5455__auto___23253;
(effect_fn_23254.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23254.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23254.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23255 = cljs.core.next(seq__23056__$1);
var G__23256 = null;
var G__23257 = (0);
var G__23258 = (0);
seq__23056 = G__23255;
chunk__23057 = G__23256;
count__23058 = G__23257;
i__23059 = G__23258;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23259 = re_frame.interop.now();
var duration__22753__auto___23260 = (end__22752__auto___23259 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23260,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23259);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23047;
}} else {
var seq__23105 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23106 = null;
var count__23107 = (0);
var i__23108 = (0);
while(true){
if((i__23108 < count__23107)){
var vec__23130 = chunk__23106.cljs$core$IIndexed$_nth$arity$2(null,i__23108);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23130,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23130,(1),null);
var temp__5455__auto___23281 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23281)){
var effect_fn_23282 = temp__5455__auto___23281;
(effect_fn_23282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23283 = seq__23105;
var G__23284 = chunk__23106;
var G__23285 = count__23107;
var G__23286 = (i__23108 + (1));
seq__23105 = G__23283;
chunk__23106 = G__23284;
count__23107 = G__23285;
i__23108 = G__23286;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23105);
if(temp__5457__auto__){
var seq__23105__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23105__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23105__$1);
var G__23289 = cljs.core.chunk_rest(seq__23105__$1);
var G__23290 = c__4550__auto__;
var G__23291 = cljs.core.count(c__4550__auto__);
var G__23292 = (0);
seq__23105 = G__23289;
chunk__23106 = G__23290;
count__23107 = G__23291;
i__23108 = G__23292;
continue;
} else {
var vec__23142 = cljs.core.first(seq__23105__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23142,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23142,(1),null);
var temp__5455__auto___23299 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23299)){
var effect_fn_23300 = temp__5455__auto___23299;
(effect_fn_23300.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23300.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23300.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23305 = cljs.core.next(seq__23105__$1);
var G__23306 = null;
var G__23307 = (0);
var G__23308 = (0);
seq__23105 = G__23305;
chunk__23106 = G__23306;
count__23107 = G__23307;
i__23108 = G__23308;
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
var seq__23152 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23153 = null;
var count__23154 = (0);
var i__23155 = (0);
while(true){
if((i__23155 < count__23154)){
var map__23181 = chunk__23153.cljs$core$IIndexed$_nth$arity$2(null,i__23155);
var map__23181__$1 = (((((!((map__23181 == null))))?(((((map__23181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23181):map__23181);
var effect = map__23181__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23152,chunk__23153,count__23154,i__23155,map__23181,map__23181__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23152,chunk__23153,count__23154,i__23155,map__23181,map__23181__$1,effect,ms,dispatch))
,ms);
}


var G__23327 = seq__23152;
var G__23328 = chunk__23153;
var G__23329 = count__23154;
var G__23330 = (i__23155 + (1));
seq__23152 = G__23327;
chunk__23153 = G__23328;
count__23154 = G__23329;
i__23155 = G__23330;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23152);
if(temp__5457__auto__){
var seq__23152__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23152__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23152__$1);
var G__23331 = cljs.core.chunk_rest(seq__23152__$1);
var G__23332 = c__4550__auto__;
var G__23333 = cljs.core.count(c__4550__auto__);
var G__23334 = (0);
seq__23152 = G__23331;
chunk__23153 = G__23332;
count__23154 = G__23333;
i__23155 = G__23334;
continue;
} else {
var map__23194 = cljs.core.first(seq__23152__$1);
var map__23194__$1 = (((((!((map__23194 == null))))?(((((map__23194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23194):map__23194);
var effect = map__23194__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23194__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23194__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23152,chunk__23153,count__23154,i__23155,map__23194,map__23194__$1,effect,ms,dispatch,seq__23152__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23152,chunk__23153,count__23154,i__23155,map__23194,map__23194__$1,effect,ms,dispatch,seq__23152__$1,temp__5457__auto__))
,ms);
}


var G__23339 = cljs.core.next(seq__23152__$1);
var G__23340 = null;
var G__23341 = (0);
var G__23342 = (0);
seq__23152 = G__23339;
chunk__23153 = G__23340;
count__23154 = G__23341;
i__23155 = G__23342;
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
var seq__23211 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23212 = null;
var count__23213 = (0);
var i__23214 = (0);
while(true){
if((i__23214 < count__23213)){
var event = chunk__23212.cljs$core$IIndexed$_nth$arity$2(null,i__23214);
re_frame.router.dispatch(event);


var G__23350 = seq__23211;
var G__23351 = chunk__23212;
var G__23352 = count__23213;
var G__23353 = (i__23214 + (1));
seq__23211 = G__23350;
chunk__23212 = G__23351;
count__23213 = G__23352;
i__23214 = G__23353;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23211);
if(temp__5457__auto__){
var seq__23211__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23211__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23211__$1);
var G__23356 = cljs.core.chunk_rest(seq__23211__$1);
var G__23357 = c__4550__auto__;
var G__23358 = cljs.core.count(c__4550__auto__);
var G__23359 = (0);
seq__23211 = G__23356;
chunk__23212 = G__23357;
count__23213 = G__23358;
i__23214 = G__23359;
continue;
} else {
var event = cljs.core.first(seq__23211__$1);
re_frame.router.dispatch(event);


var G__23360 = cljs.core.next(seq__23211__$1);
var G__23361 = null;
var G__23362 = (0);
var G__23363 = (0);
seq__23211 = G__23360;
chunk__23212 = G__23361;
count__23213 = G__23362;
i__23214 = G__23363;
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
var seq__23218 = cljs.core.seq(value);
var chunk__23219 = null;
var count__23220 = (0);
var i__23221 = (0);
while(true){
if((i__23221 < count__23220)){
var event = chunk__23219.cljs$core$IIndexed$_nth$arity$2(null,i__23221);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23365 = seq__23218;
var G__23366 = chunk__23219;
var G__23367 = count__23220;
var G__23368 = (i__23221 + (1));
seq__23218 = G__23365;
chunk__23219 = G__23366;
count__23220 = G__23367;
i__23221 = G__23368;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23218);
if(temp__5457__auto__){
var seq__23218__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23218__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23218__$1);
var G__23369 = cljs.core.chunk_rest(seq__23218__$1);
var G__23370 = c__4550__auto__;
var G__23371 = cljs.core.count(c__4550__auto__);
var G__23372 = (0);
seq__23218 = G__23369;
chunk__23219 = G__23370;
count__23220 = G__23371;
i__23221 = G__23372;
continue;
} else {
var event = cljs.core.first(seq__23218__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23373 = cljs.core.next(seq__23218__$1);
var G__23374 = null;
var G__23375 = (0);
var G__23376 = (0);
seq__23218 = G__23373;
chunk__23219 = G__23374;
count__23220 = G__23375;
i__23221 = G__23376;
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
