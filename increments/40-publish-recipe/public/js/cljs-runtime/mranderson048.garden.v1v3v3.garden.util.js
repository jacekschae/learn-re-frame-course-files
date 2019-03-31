goog.provide('mranderson048.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson048.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
mranderson048.garden.v1v3v3.garden.util.format = (function mranderson048$garden$v1v3v3$garden$util$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24632 = arguments.length;
var i__4731__auto___24633 = (0);
while(true){
if((i__4731__auto___24633 < len__4730__auto___24632)){
args__4736__auto__.push((arguments[i__4731__auto___24633]));

var G__24634 = (i__4731__auto___24633 + (1));
i__4731__auto___24633 = G__24634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq24555){
var G__24556 = cljs.core.first(seq24555);
var seq24555__$1 = cljs.core.next(seq24555);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24556,seq24555__$1);
});


/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
mranderson048.garden.v1v3v3.garden.util.to_str = (function mranderson048$garden$v1v3v3$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (mranderson048.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (mranderson048.garden.v1v3v3.garden.util.to_str["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(mranderson048.garden.v1v3v3.garden.util.ToString,"_",true);

var G__24570_24642 = mranderson048.garden.v1v3v3.garden.util.to_str;
var G__24571_24643 = "_";
var G__24572_24644 = ((function (G__24570_24642,G__24571_24643){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__24570_24642,G__24571_24643))
;
goog.object.set(G__24570_24642,G__24571_24643,G__24572_24644);

goog.object.set(mranderson048.garden.v1v3v3.garden.util.ToString,"null",true);

var G__24573_24645 = mranderson048.garden.v1v3v3.garden.util.to_str;
var G__24574_24646 = "null";
var G__24575_24647 = ((function (G__24573_24645,G__24574_24646){
return (function (this$){
return "";
});})(G__24573_24645,G__24574_24646))
;
goog.object.set(G__24573_24645,G__24574_24646,G__24575_24647);
/**
 * Convert a variable number of values into strings.
 */
mranderson048.garden.v1v3v3.garden.util.as_str = (function mranderson048$garden$v1v3v3$garden$util$as_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24650 = arguments.length;
var i__4731__auto___24651 = (0);
while(true){
if((i__4731__auto___24651 < len__4730__auto___24650)){
args__4736__auto__.push((arguments[i__4731__auto___24651]));

var G__24652 = (i__4731__auto___24651 + (1));
i__4731__auto___24651 = G__24652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.util.to_str,args));
});

mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq24577){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24577));
});

/**
 * Convert a string to an integer with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.string__GT_int = (function mranderson048$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24655 = arguments.length;
var i__4731__auto___24656 = (0);
while(true){
if((i__4731__auto___24656 < len__4730__auto___24655)){
args__4736__auto__.push((arguments[i__4731__auto___24656]));

var G__24657 = (i__4731__auto___24656 + (1));
i__4731__auto___24656 = G__24657;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__24580){
var vec__24581 = p__24580;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24581,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq24578){
var G__24579 = cljs.core.first(seq24578);
var seq24578__$1 = cljs.core.next(seq24578);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24579,seq24578__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.int__GT_string = (function mranderson048$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24661 = arguments.length;
var i__4731__auto___24663 = (0);
while(true){
if((i__4731__auto___24663 < len__4730__auto___24661)){
args__4736__auto__.push((arguments[i__4731__auto___24663]));

var G__24664 = (i__4731__auto___24663 + (1));
i__4731__auto___24663 = G__24664;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__24590){
var vec__24591 = p__24590;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24591,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq24584){
var G__24585 = cljs.core.first(seq24584);
var seq24584__$1 = cljs.core.next(seq24584);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24585,seq24584__$1);
});

/**
 * Return a space separated list of values.
 */
mranderson048.garden.v1v3v3.garden.util.space_join = (function mranderson048$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson048.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson048.garden.v1v3v3.garden.util.comma_join = (function mranderson048$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4523__auto__ = (function mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__24601(s__24602){
return (new cljs.core.LazySeq(null,(function (){
var s__24602__$1 = s__24602;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24602__$1);
if(temp__5457__auto__){
var s__24602__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24602__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__24602__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__24604 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__24603 = (0);
while(true){
if((i__24603 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__24603);
cljs.core.chunk_append(b__24604,((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.util.space_join(x):mranderson048.garden.v1v3v3.garden.util.to_str(x)));

var G__24682 = (i__24603 + (1));
i__24603 = G__24682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24604),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__24601(cljs.core.chunk_rest(s__24602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24604),null);
}
} else {
var x = cljs.core.first(s__24602__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?mranderson048.garden.v1v3v3.garden.util.space_join(x):mranderson048.garden.v1v3v3.garden.util.to_str(x)),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__24601(cljs.core.rest(s__24602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson048.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson048$garden$v1v3v3$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
mranderson048.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson048.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_media_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_import_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.prefix = (function mranderson048$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson048$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return mranderson048.garden.v1v3v3.garden.util.prefix(p__$1,s);
} else {
return mranderson048.garden.v1v3v3.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson048.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
mranderson048.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4222__auto__ = a;
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var top = (function (){var x__4219__auto__ = a;
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson048.garden.v1v3v3.garden.util.clip = (function mranderson048$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__24620 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24620,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24620,(1),null);
var x__4219__auto__ = a__$1;
var y__4220__auto__ = (function (){var x__4222__auto__ = b__$1;
var y__4223__auto__ = n;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson048.garden.v1v3v3.garden.util.average = (function mranderson048$garden$v1v3v3$garden$util$average(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24705 = arguments.length;
var i__4731__auto___24707 = (0);
while(true){
if((i__4731__auto___24707 < len__4730__auto___24705)){
args__4736__auto__.push((arguments[i__4731__auto___24707]));

var G__24710 = (i__4731__auto___24707 + (1));
i__4731__auto___24707 = G__24710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq24623){
var G__24624 = cljs.core.first(seq24623);
var seq24623__$1 = cljs.core.next(seq24623);
var G__24625 = cljs.core.first(seq24623__$1);
var seq24623__$2 = cljs.core.next(seq24623__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24624,G__24625,seq24623__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
mranderson048.garden.v1v3v3.garden.util.cartesian_product = (function mranderson048$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24716 = arguments.length;
var i__4731__auto___24717 = (0);
while(true){
if((i__4731__auto___24717 < len__4730__auto___24716)){
args__4736__auto__.push((arguments[i__4731__auto___24717]));

var G__24718 = (i__4731__auto___24717 + (1));
i__4731__auto___24717 = G__24718;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function mranderson048$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__24724 = (i - (1));
var G__24725 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__24724;
v_seqs__$2 = G__24725;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return mranderson048$garden$v1v3v3$garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq24627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24627));
});


//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.util.js.map
