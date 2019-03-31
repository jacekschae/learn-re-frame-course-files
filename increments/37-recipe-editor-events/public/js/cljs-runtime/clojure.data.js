goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__20758){
var vec__20759 = p__20758;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20759,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20759,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__20767 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__20778 = arguments.length;
switch (G__20778) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__20831_21028 = clojure.data.equality_partition;
var G__20832_21029 = "null";
var G__20833_21030 = ((function (G__20831_21028,G__20832_21029){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20831_21028,G__20832_21029))
;
goog.object.set(G__20831_21028,G__20832_21029,G__20833_21030);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__20839_21040 = clojure.data.equality_partition;
var G__20840_21041 = "string";
var G__20841_21042 = ((function (G__20839_21040,G__20840_21041){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20839_21040,G__20840_21041))
;
goog.object.set(G__20839_21040,G__20840_21041,G__20841_21042);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__20844_21045 = clojure.data.equality_partition;
var G__20845_21046 = "number";
var G__20846_21047 = ((function (G__20844_21045,G__20845_21046){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20844_21045,G__20845_21046))
;
goog.object.set(G__20844_21045,G__20845_21046,G__20846_21047);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__20849_21050 = clojure.data.equality_partition;
var G__20850_21051 = "array";
var G__20851_21052 = ((function (G__20849_21050,G__20850_21051){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__20849_21050,G__20850_21051))
;
goog.object.set(G__20849_21050,G__20850_21051,G__20851_21052);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__20863_21055 = clojure.data.equality_partition;
var G__20864_21056 = "function";
var G__20865_21057 = ((function (G__20863_21055,G__20864_21056){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20863_21055,G__20864_21056))
;
goog.object.set(G__20863_21055,G__20864_21056,G__20865_21057);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__20870_21088 = clojure.data.equality_partition;
var G__20871_21089 = "boolean";
var G__20872_21090 = ((function (G__20870_21088,G__20871_21089){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20870_21088,G__20871_21089))
;
goog.object.set(G__20870_21088,G__20871_21089,G__20872_21090);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__20873_21110 = clojure.data.equality_partition;
var G__20874_21111 = "_";
var G__20875_21112 = ((function (G__20873_21110,G__20874_21111){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__20873_21110,G__20874_21111))
;
goog.object.set(G__20873_21110,G__20874_21111,G__20875_21112);
goog.object.set(clojure.data.Diff,"null",true);

var G__20893_21131 = clojure.data.diff_similar;
var G__20894_21132 = "null";
var G__20895_21133 = ((function (G__20893_21131,G__20894_21132){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20893_21131,G__20894_21132))
;
goog.object.set(G__20893_21131,G__20894_21132,G__20895_21133);

goog.object.set(clojure.data.Diff,"string",true);

var G__20899_21138 = clojure.data.diff_similar;
var G__20900_21139 = "string";
var G__20901_21140 = ((function (G__20899_21138,G__20900_21139){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20899_21138,G__20900_21139))
;
goog.object.set(G__20899_21138,G__20900_21139,G__20901_21140);

goog.object.set(clojure.data.Diff,"number",true);

var G__20906_21146 = clojure.data.diff_similar;
var G__20907_21147 = "number";
var G__20908_21148 = ((function (G__20906_21146,G__20907_21147){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20906_21146,G__20907_21147))
;
goog.object.set(G__20906_21146,G__20907_21147,G__20908_21148);

goog.object.set(clojure.data.Diff,"array",true);

var G__20911_21151 = clojure.data.diff_similar;
var G__20912_21152 = "array";
var G__20913_21153 = ((function (G__20911_21151,G__20912_21152){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__20911_21151,G__20912_21152))
;
goog.object.set(G__20911_21151,G__20912_21152,G__20913_21153);

goog.object.set(clojure.data.Diff,"function",true);

var G__20916_21158 = clojure.data.diff_similar;
var G__20917_21159 = "function";
var G__20918_21160 = ((function (G__20916_21158,G__20917_21159){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20916_21158,G__20917_21159))
;
goog.object.set(G__20916_21158,G__20917_21159,G__20918_21160);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__20924_21163 = clojure.data.diff_similar;
var G__20925_21164 = "boolean";
var G__20926_21165 = ((function (G__20924_21163,G__20925_21164){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20924_21163,G__20925_21164))
;
goog.object.set(G__20924_21163,G__20925_21164,G__20926_21165);

goog.object.set(clojure.data.Diff,"_",true);

var G__20935_21168 = clojure.data.diff_similar;
var G__20936_21169 = "_";
var G__20937_21170 = ((function (G__20935_21168,G__20936_21169){
return (function (a,b){
var fexpr__20955 = (function (){var G__20956 = clojure.data.equality_partition(a);
var G__20956__$1 = (((G__20956 instanceof cljs.core.Keyword))?G__20956.fqn:null);
switch (G__20956__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20956__$1)].join('')));

}
})();
return (fexpr__20955.cljs$core$IFn$_invoke$arity$2 ? fexpr__20955.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__20955.call(null,a,b));
});})(G__20935_21168,G__20936_21169))
;
goog.object.set(G__20935_21168,G__20936_21169,G__20937_21170);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
