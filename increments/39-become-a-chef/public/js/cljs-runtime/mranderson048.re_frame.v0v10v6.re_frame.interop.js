goog.provide('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('mranderson048.reagent.v0v8v0.reagent.core');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
mranderson048.re_frame.v0v10v6.re_frame.interop.next_tick = goog.async.nextTick;
mranderson048.re_frame.v0v10v6.re_frame.interop.empty_queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
mranderson048.re_frame.v0v10v6.re_frame.interop.after_render = mranderson048.reagent.v0v8v0.reagent.core.after_render;
/**
 * @define {boolean}
 */
mranderson048.re_frame.v0v10v6.re_frame.interop.debug_enabled_QMARK_ = goog.DEBUG;
mranderson048.re_frame.v0v10v6.re_frame.interop.ratom = (function mranderson048$re_frame$v0v10v6$re_frame$interop$ratom(x){
return mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(x);
});
mranderson048.re_frame.v0v10v6.re_frame.interop.ratom_QMARK_ = (function mranderson048$re_frame$v0v10v6$re_frame$interop$ratom_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom,x);
}
});
mranderson048.re_frame.v0v10v6.re_frame.interop.deref_QMARK_ = (function mranderson048$re_frame$v0v10v6$re_frame$interop$deref_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
mranderson048.re_frame.v0v10v6.re_frame.interop.make_reaction = (function mranderson048$re_frame$v0v10v6$re_frame$interop$make_reaction(f){
return mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction(f);
});
mranderson048.re_frame.v0v10v6.re_frame.interop.add_on_dispose_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$interop$add_on_dispose_BANG_(a_ratom,f){
return mranderson048.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_(a_ratom,f);
});
mranderson048.re_frame.v0v10v6.re_frame.interop.dispose_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$interop$dispose_BANG_(a_ratom){
return mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_(a_ratom);
});
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
});
mranderson048.re_frame.v0v10v6.re_frame.interop.now = (function mranderson048$re_frame$v0v10v6$re_frame$interop$now(){
if((((typeof performance !== 'undefined')) && ((typeof performance !== 'undefined') && (typeof performance.now !== 'undefined')))){
return performance.now();
} else {
return Date.now();
}
});
/**
 * Produces an id for reactive Reagent values
 *   e.g. reactions, ratoms, cursors.
 */
mranderson048.re_frame.v0v10v6.re_frame.interop.reagent_id = (function mranderson048$re_frame$v0v10v6$re_frame$interop$reagent_id(reactive_val){
if((((!((reactive_val == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === reactive_val.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$))))?true:false):false)){
return [(function (){var pred__20956 = cljs.core.instance_QMARK_;
var expr__20957 = reactive_val;
if(cljs.core.truth_((pred__20956.cljs$core$IFn$_invoke$arity$2 ? pred__20956.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom.RAtom,expr__20957) : pred__20956.call(null,mranderson048.reagent.v0v8v0.reagent.ratom.RAtom,expr__20957)))){
return "ra";
} else {
if(cljs.core.truth_((pred__20956.cljs$core$IFn$_invoke$arity$2 ? pred__20956.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom.RCursor,expr__20957) : pred__20956.call(null,mranderson048.reagent.v0v8v0.reagent.ratom.RCursor,expr__20957)))){
return "rc";
} else {
if(cljs.core.truth_((pred__20956.cljs$core$IFn$_invoke$arity$2 ? pred__20956.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom.Reaction,expr__20957) : pred__20956.call(null,mranderson048.reagent.v0v8v0.reagent.ratom.Reaction,expr__20957)))){
return "rx";
} else {
if(cljs.core.truth_((pred__20956.cljs$core$IFn$_invoke$arity$2 ? pred__20956.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom.Track,expr__20957) : pred__20956.call(null,mranderson048.reagent.v0v8v0.reagent.ratom.Track,expr__20957)))){
return "tr";
} else {
return "other";
}
}
}
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(reactive_val))].join('');
} else {
return null;
}
});

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.interop.js.map
