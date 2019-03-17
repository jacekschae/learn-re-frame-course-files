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
var _STAR_current_trace_STAR__orig_val__23180 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23181 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23181;

try{try{var seq__23188 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23189 = null;
var count__23190 = (0);
var i__23191 = (0);
while(true){
if((i__23191 < count__23190)){
var vec__23212 = chunk__23189.cljs$core$IIndexed$_nth$arity$2(null,i__23191);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23212,(1),null);
var temp__5455__auto___23414 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23414)){
var effect_fn_23415 = temp__5455__auto___23414;
(effect_fn_23415.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23415.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23415.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23416 = seq__23188;
var G__23417 = chunk__23189;
var G__23418 = count__23190;
var G__23419 = (i__23191 + (1));
seq__23188 = G__23416;
chunk__23189 = G__23417;
count__23190 = G__23418;
i__23191 = G__23419;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23188);
if(temp__5457__auto__){
var seq__23188__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23188__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23188__$1);
var G__23420 = cljs.core.chunk_rest(seq__23188__$1);
var G__23421 = c__4550__auto__;
var G__23422 = cljs.core.count(c__4550__auto__);
var G__23423 = (0);
seq__23188 = G__23420;
chunk__23189 = G__23421;
count__23190 = G__23422;
i__23191 = G__23423;
continue;
} else {
var vec__23219 = cljs.core.first(seq__23188__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(1),null);
var temp__5455__auto___23425 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23425)){
var effect_fn_23426 = temp__5455__auto___23425;
(effect_fn_23426.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23426.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23426.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23427 = cljs.core.next(seq__23188__$1);
var G__23428 = null;
var G__23429 = (0);
var G__23430 = (0);
seq__23188 = G__23427;
chunk__23189 = G__23428;
count__23190 = G__23429;
i__23191 = G__23430;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22752__auto___23431 = re_frame.interop.now();
var duration__22753__auto___23432 = (end__22752__auto___23431 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22753__auto___23432,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22752__auto___23431);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23180;
}} else {
var seq__23230 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23231 = null;
var count__23232 = (0);
var i__23233 = (0);
while(true){
if((i__23233 < count__23232)){
var vec__23264 = chunk__23231.cljs$core$IIndexed$_nth$arity$2(null,i__23233);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23264,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23264,(1),null);
var temp__5455__auto___23433 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23433)){
var effect_fn_23434 = temp__5455__auto___23433;
(effect_fn_23434.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23434.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23434.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23438 = seq__23230;
var G__23439 = chunk__23231;
var G__23440 = count__23232;
var G__23441 = (i__23233 + (1));
seq__23230 = G__23438;
chunk__23231 = G__23439;
count__23232 = G__23440;
i__23233 = G__23441;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23230);
if(temp__5457__auto__){
var seq__23230__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23230__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23230__$1);
var G__23442 = cljs.core.chunk_rest(seq__23230__$1);
var G__23443 = c__4550__auto__;
var G__23444 = cljs.core.count(c__4550__auto__);
var G__23445 = (0);
seq__23230 = G__23442;
chunk__23231 = G__23443;
count__23232 = G__23444;
i__23233 = G__23445;
continue;
} else {
var vec__23280 = cljs.core.first(seq__23230__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(1),null);
var temp__5455__auto___23446 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23446)){
var effect_fn_23447 = temp__5455__auto___23446;
(effect_fn_23447.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23447.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23447.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23448 = cljs.core.next(seq__23230__$1);
var G__23449 = null;
var G__23450 = (0);
var G__23451 = (0);
seq__23230 = G__23448;
chunk__23231 = G__23449;
count__23232 = G__23450;
i__23233 = G__23451;
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
var map__23322 = chunk__23296.cljs$core$IIndexed$_nth$arity$2(null,i__23298);
var map__23322__$1 = (((((!((map__23322 == null))))?(((((map__23322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23322):map__23322);
var effect = map__23322__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23295,chunk__23296,count__23297,i__23298,map__23322,map__23322__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23295,chunk__23296,count__23297,i__23298,map__23322,map__23322__$1,effect,ms,dispatch))
,ms);
}


var G__23455 = seq__23295;
var G__23456 = chunk__23296;
var G__23457 = count__23297;
var G__23458 = (i__23298 + (1));
seq__23295 = G__23455;
chunk__23296 = G__23456;
count__23297 = G__23457;
i__23298 = G__23458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23295);
if(temp__5457__auto__){
var seq__23295__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23295__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23295__$1);
var G__23459 = cljs.core.chunk_rest(seq__23295__$1);
var G__23460 = c__4550__auto__;
var G__23461 = cljs.core.count(c__4550__auto__);
var G__23462 = (0);
seq__23295 = G__23459;
chunk__23296 = G__23460;
count__23297 = G__23461;
i__23298 = G__23462;
continue;
} else {
var map__23324 = cljs.core.first(seq__23295__$1);
var map__23324__$1 = (((((!((map__23324 == null))))?(((((map__23324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23324):map__23324);
var effect = map__23324__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23324__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23295,chunk__23296,count__23297,i__23298,map__23324,map__23324__$1,effect,ms,dispatch,seq__23295__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23295,chunk__23296,count__23297,i__23298,map__23324,map__23324__$1,effect,ms,dispatch,seq__23295__$1,temp__5457__auto__))
,ms);
}


var G__23464 = cljs.core.next(seq__23295__$1);
var G__23465 = null;
var G__23466 = (0);
var G__23467 = (0);
seq__23295 = G__23464;
chunk__23296 = G__23465;
count__23297 = G__23466;
i__23298 = G__23467;
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
var seq__23335 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23336 = null;
var count__23337 = (0);
var i__23338 = (0);
while(true){
if((i__23338 < count__23337)){
var event = chunk__23336.cljs$core$IIndexed$_nth$arity$2(null,i__23338);
re_frame.router.dispatch(event);


var G__23475 = seq__23335;
var G__23476 = chunk__23336;
var G__23477 = count__23337;
var G__23478 = (i__23338 + (1));
seq__23335 = G__23475;
chunk__23336 = G__23476;
count__23337 = G__23477;
i__23338 = G__23478;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23335);
if(temp__5457__auto__){
var seq__23335__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23335__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23335__$1);
var G__23490 = cljs.core.chunk_rest(seq__23335__$1);
var G__23491 = c__4550__auto__;
var G__23492 = cljs.core.count(c__4550__auto__);
var G__23493 = (0);
seq__23335 = G__23490;
chunk__23336 = G__23491;
count__23337 = G__23492;
i__23338 = G__23493;
continue;
} else {
var event = cljs.core.first(seq__23335__$1);
re_frame.router.dispatch(event);


var G__23495 = cljs.core.next(seq__23335__$1);
var G__23496 = null;
var G__23497 = (0);
var G__23498 = (0);
seq__23335 = G__23495;
chunk__23336 = G__23496;
count__23337 = G__23497;
i__23338 = G__23498;
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
var seq__23367 = cljs.core.seq(value);
var chunk__23368 = null;
var count__23369 = (0);
var i__23370 = (0);
while(true){
if((i__23370 < count__23369)){
var event = chunk__23368.cljs$core$IIndexed$_nth$arity$2(null,i__23370);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23505 = seq__23367;
var G__23506 = chunk__23368;
var G__23507 = count__23369;
var G__23508 = (i__23370 + (1));
seq__23367 = G__23505;
chunk__23368 = G__23506;
count__23369 = G__23507;
i__23370 = G__23508;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23367);
if(temp__5457__auto__){
var seq__23367__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23367__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__23367__$1);
var G__23512 = cljs.core.chunk_rest(seq__23367__$1);
var G__23513 = c__4550__auto__;
var G__23514 = cljs.core.count(c__4550__auto__);
var G__23515 = (0);
seq__23367 = G__23512;
chunk__23368 = G__23513;
count__23369 = G__23514;
i__23370 = G__23515;
continue;
} else {
var event = cljs.core.first(seq__23367__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23516 = cljs.core.next(seq__23367__$1);
var G__23517 = null;
var G__23518 = (0);
var G__23519 = (0);
seq__23367 = G__23516;
chunk__23368 = G__23517;
count__23369 = G__23518;
i__23370 = G__23519;
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
