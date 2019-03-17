goog.provide('mranderson048.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.fx.kind) : mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
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
mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21729 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21730 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21730;

try{try{var seq__21731 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21732 = null;
var count__21733 = (0);
var i__21734 = (0);
while(true){
if((i__21734 < count__21733)){
var vec__21741 = chunk__21732.cljs$core$IIndexed$_nth$arity$2(null,i__21734);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(1),null);
var temp__5455__auto___21800 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21800)){
var effect_fn_21801 = temp__5455__auto___21800;
(effect_fn_21801.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21801.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21801.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21802 = seq__21731;
var G__21803 = chunk__21732;
var G__21804 = count__21733;
var G__21805 = (i__21734 + (1));
seq__21731 = G__21802;
chunk__21732 = G__21803;
count__21733 = G__21804;
i__21734 = G__21805;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21731);
if(temp__5457__auto__){
var seq__21731__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21731__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21731__$1);
var G__21808 = cljs.core.chunk_rest(seq__21731__$1);
var G__21809 = c__4550__auto__;
var G__21810 = cljs.core.count(c__4550__auto__);
var G__21811 = (0);
seq__21731 = G__21808;
chunk__21732 = G__21809;
count__21733 = G__21810;
i__21734 = G__21811;
continue;
} else {
var vec__21745 = cljs.core.first(seq__21731__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(1),null);
var temp__5455__auto___21814 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21814)){
var effect_fn_21816 = temp__5455__auto___21814;
(effect_fn_21816.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21816.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21816.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21818 = cljs.core.next(seq__21731__$1);
var G__21819 = null;
var G__21820 = (0);
var G__21821 = (0);
seq__21731 = G__21818;
chunk__21732 = G__21819;
count__21733 = G__21820;
i__21734 = G__21821;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__21429__auto___21822 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__21430__auto___21823 = (end__21429__auto___21822 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21430__auto___21823,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__21429__auto___21822);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21729;
}} else {
var seq__21748 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21749 = null;
var count__21750 = (0);
var i__21751 = (0);
while(true){
if((i__21751 < count__21750)){
var vec__21758 = chunk__21749.cljs$core$IIndexed$_nth$arity$2(null,i__21751);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21758,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21758,(1),null);
var temp__5455__auto___21827 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21827)){
var effect_fn_21828 = temp__5455__auto___21827;
(effect_fn_21828.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21828.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21828.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21830 = seq__21748;
var G__21831 = chunk__21749;
var G__21832 = count__21750;
var G__21833 = (i__21751 + (1));
seq__21748 = G__21830;
chunk__21749 = G__21831;
count__21750 = G__21832;
i__21751 = G__21833;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21748);
if(temp__5457__auto__){
var seq__21748__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21748__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21748__$1);
var G__21834 = cljs.core.chunk_rest(seq__21748__$1);
var G__21835 = c__4550__auto__;
var G__21836 = cljs.core.count(c__4550__auto__);
var G__21837 = (0);
seq__21748 = G__21834;
chunk__21749 = G__21835;
count__21750 = G__21836;
i__21751 = G__21837;
continue;
} else {
var vec__21761 = cljs.core.first(seq__21748__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21761,(1),null);
var temp__5455__auto___21839 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21839)){
var effect_fn_21841 = temp__5455__auto___21839;
(effect_fn_21841.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21841.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21841.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21842 = cljs.core.next(seq__21748__$1);
var G__21843 = null;
var G__21844 = (0);
var G__21845 = (0);
seq__21748 = G__21842;
chunk__21749 = G__21843;
count__21750 = G__21844;
i__21751 = G__21845;
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__21765 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21766 = null;
var count__21767 = (0);
var i__21768 = (0);
while(true){
if((i__21768 < count__21767)){
var map__21775 = chunk__21766.cljs$core$IIndexed$_nth$arity$2(null,i__21768);
var map__21775__$1 = (((((!((map__21775 == null))))?(((((map__21775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21775):map__21775);
var effect = map__21775__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21775__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21775__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__21765,chunk__21766,count__21767,i__21768,map__21775,map__21775__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__21765,chunk__21766,count__21767,i__21768,map__21775,map__21775__$1,effect,ms,dispatch))
,ms);
}


var G__21851 = seq__21765;
var G__21852 = chunk__21766;
var G__21853 = count__21767;
var G__21854 = (i__21768 + (1));
seq__21765 = G__21851;
chunk__21766 = G__21852;
count__21767 = G__21853;
i__21768 = G__21854;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21765);
if(temp__5457__auto__){
var seq__21765__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21765__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21765__$1);
var G__21855 = cljs.core.chunk_rest(seq__21765__$1);
var G__21856 = c__4550__auto__;
var G__21857 = cljs.core.count(c__4550__auto__);
var G__21858 = (0);
seq__21765 = G__21855;
chunk__21766 = G__21856;
count__21767 = G__21857;
i__21768 = G__21858;
continue;
} else {
var map__21778 = cljs.core.first(seq__21765__$1);
var map__21778__$1 = (((((!((map__21778 == null))))?(((((map__21778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21778):map__21778);
var effect = map__21778__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21778__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21778__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__21765,chunk__21766,count__21767,i__21768,map__21778,map__21778__$1,effect,ms,dispatch,seq__21765__$1,temp__5457__auto__){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__21765,chunk__21766,count__21767,i__21768,map__21778,map__21778__$1,effect,ms,dispatch,seq__21765__$1,temp__5457__auto__))
,ms);
}


var G__21859 = cljs.core.next(seq__21765__$1);
var G__21860 = null;
var G__21861 = (0);
var G__21862 = (0);
seq__21765 = G__21859;
chunk__21766 = G__21860;
count__21767 = G__21861;
i__21768 = G__21862;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__21780 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21781 = null;
var count__21782 = (0);
var i__21783 = (0);
while(true){
if((i__21783 < count__21782)){
var event = chunk__21781.cljs$core$IIndexed$_nth$arity$2(null,i__21783);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__21863 = seq__21780;
var G__21864 = chunk__21781;
var G__21865 = count__21782;
var G__21866 = (i__21783 + (1));
seq__21780 = G__21863;
chunk__21781 = G__21864;
count__21782 = G__21865;
i__21783 = G__21866;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21780);
if(temp__5457__auto__){
var seq__21780__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21780__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21780__$1);
var G__21867 = cljs.core.chunk_rest(seq__21780__$1);
var G__21868 = c__4550__auto__;
var G__21869 = cljs.core.count(c__4550__auto__);
var G__21870 = (0);
seq__21780 = G__21867;
chunk__21781 = G__21868;
count__21782 = G__21869;
i__21783 = G__21870;
continue;
} else {
var event = cljs.core.first(seq__21780__$1);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__21871 = cljs.core.next(seq__21780__$1);
var G__21872 = null;
var G__21873 = (0);
var G__21874 = (0);
seq__21780 = G__21871;
chunk__21781 = G__21872;
count__21782 = G__21873;
i__21783 = G__21874;
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21796 = cljs.core.seq(value);
var chunk__21797 = null;
var count__21798 = (0);
var i__21799 = (0);
while(true){
if((i__21799 < count__21798)){
var event = chunk__21797.cljs$core$IIndexed$_nth$arity$2(null,i__21799);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21877 = seq__21796;
var G__21878 = chunk__21797;
var G__21879 = count__21798;
var G__21880 = (i__21799 + (1));
seq__21796 = G__21877;
chunk__21797 = G__21878;
count__21798 = G__21879;
i__21799 = G__21880;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21796);
if(temp__5457__auto__){
var seq__21796__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21796__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21796__$1);
var G__21881 = cljs.core.chunk_rest(seq__21796__$1);
var G__21882 = c__4550__auto__;
var G__21883 = cljs.core.count(c__4550__auto__);
var G__21884 = (0);
seq__21796 = G__21881;
chunk__21797 = G__21882;
count__21798 = G__21883;
i__21799 = G__21884;
continue;
} else {
var event = cljs.core.first(seq__21796__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21885 = cljs.core.next(seq__21796__$1);
var G__21886 = null;
var G__21887 = (0);
var G__21888 = (0);
seq__21796 = G__21885;
chunk__21797 = G__21886;
count__21798 = G__21887;
i__21799 = G__21888;
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
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.fx.js.map
