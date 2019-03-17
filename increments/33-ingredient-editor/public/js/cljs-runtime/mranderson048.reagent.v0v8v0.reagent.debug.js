goog.provide('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26986__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26987__i = 0, G__26987__a = new Array(arguments.length -  0);
while (G__26987__i < G__26987__a.length) {G__26987__a[G__26987__i] = arguments[G__26987__i + 0]; ++G__26987__i;}
  args = new cljs.core.IndexedSeq(G__26987__a,0,null);
} 
return G__26986__delegate.call(this,args);};
G__26986.cljs$lang$maxFixedArity = 0;
G__26986.cljs$lang$applyTo = (function (arglist__26988){
var args = cljs.core.seq(arglist__26988);
return G__26986__delegate(args);
});
G__26986.cljs$core$IFn$_invoke$arity$variadic = G__26986__delegate;
return G__26986;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26989__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26990__i = 0, G__26990__a = new Array(arguments.length -  0);
while (G__26990__i < G__26990__a.length) {G__26990__a[G__26990__i] = arguments[G__26990__i + 0]; ++G__26990__i;}
  args = new cljs.core.IndexedSeq(G__26990__a,0,null);
} 
return G__26989__delegate.call(this,args);};
G__26989.cljs$lang$maxFixedArity = 0;
G__26989.cljs$lang$applyTo = (function (arglist__26991){
var args = cljs.core.seq(arglist__26991);
return G__26989__delegate(args);
});
G__26989.cljs$core$IFn$_invoke$arity$variadic = G__26989__delegate;
return G__26989;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v8v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v8v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v8v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.debug.js.map
