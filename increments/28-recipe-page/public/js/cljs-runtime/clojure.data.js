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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__20751){
var vec__20754 = p__20751;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20754,(1),null);
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
var vec__20759 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20759,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20759,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20759,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__20774 = arguments.length;
switch (G__20774) {
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

var G__20808_21033 = clojure.data.equality_partition;
var G__20809_21034 = "null";
var G__20810_21035 = ((function (G__20808_21033,G__20809_21034){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20808_21033,G__20809_21034))
;
goog.object.set(G__20808_21033,G__20809_21034,G__20810_21035);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__20814_21042 = clojure.data.equality_partition;
var G__20815_21043 = "string";
var G__20816_21044 = ((function (G__20814_21042,G__20815_21043){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20814_21042,G__20815_21043))
;
goog.object.set(G__20814_21042,G__20815_21043,G__20816_21044);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__20820_21047 = clojure.data.equality_partition;
var G__20821_21048 = "number";
var G__20822_21049 = ((function (G__20820_21047,G__20821_21048){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20820_21047,G__20821_21048))
;
goog.object.set(G__20820_21047,G__20821_21048,G__20822_21049);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__20825_21052 = clojure.data.equality_partition;
var G__20826_21053 = "array";
var G__20827_21054 = ((function (G__20825_21052,G__20826_21053){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__20825_21052,G__20826_21053))
;
goog.object.set(G__20825_21052,G__20826_21053,G__20827_21054);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__20855_21055 = clojure.data.equality_partition;
var G__20856_21056 = "function";
var G__20857_21057 = ((function (G__20855_21055,G__20856_21056){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20855_21055,G__20856_21056))
;
goog.object.set(G__20855_21055,G__20856_21056,G__20857_21057);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__20864_21061 = clojure.data.equality_partition;
var G__20865_21062 = "boolean";
var G__20866_21063 = ((function (G__20864_21061,G__20865_21062){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__20864_21061,G__20865_21062))
;
goog.object.set(G__20864_21061,G__20865_21062,G__20866_21063);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__20867_21066 = clojure.data.equality_partition;
var G__20868_21067 = "_";
var G__20869_21068 = ((function (G__20867_21066,G__20868_21067){
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
});})(G__20867_21066,G__20868_21067))
;
goog.object.set(G__20867_21066,G__20868_21067,G__20869_21068);
goog.object.set(clojure.data.Diff,"null",true);

var G__20879_21085 = clojure.data.diff_similar;
var G__20880_21086 = "null";
var G__20881_21087 = ((function (G__20879_21085,G__20880_21086){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20879_21085,G__20880_21086))
;
goog.object.set(G__20879_21085,G__20880_21086,G__20881_21087);

goog.object.set(clojure.data.Diff,"string",true);

var G__20890_21091 = clojure.data.diff_similar;
var G__20891_21092 = "string";
var G__20892_21093 = ((function (G__20890_21091,G__20891_21092){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20890_21091,G__20891_21092))
;
goog.object.set(G__20890_21091,G__20891_21092,G__20892_21093);

goog.object.set(clojure.data.Diff,"number",true);

var G__20895_21096 = clojure.data.diff_similar;
var G__20896_21097 = "number";
var G__20897_21098 = ((function (G__20895_21096,G__20896_21097){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20895_21096,G__20896_21097))
;
goog.object.set(G__20895_21096,G__20896_21097,G__20897_21098);

goog.object.set(clojure.data.Diff,"array",true);

var G__20900_21104 = clojure.data.diff_similar;
var G__20901_21105 = "array";
var G__20902_21106 = ((function (G__20900_21104,G__20901_21105){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__20900_21104,G__20901_21105))
;
goog.object.set(G__20900_21104,G__20901_21105,G__20902_21106);

goog.object.set(clojure.data.Diff,"function",true);

var G__20907_21109 = clojure.data.diff_similar;
var G__20908_21110 = "function";
var G__20909_21111 = ((function (G__20907_21109,G__20908_21110){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20907_21109,G__20908_21110))
;
goog.object.set(G__20907_21109,G__20908_21110,G__20909_21111);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__20912_21114 = clojure.data.diff_similar;
var G__20913_21115 = "boolean";
var G__20914_21116 = ((function (G__20912_21114,G__20913_21115){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20912_21114,G__20913_21115))
;
goog.object.set(G__20912_21114,G__20913_21115,G__20914_21116);

goog.object.set(clojure.data.Diff,"_",true);

var G__20917_21123 = clojure.data.diff_similar;
var G__20918_21124 = "_";
var G__20919_21125 = ((function (G__20917_21123,G__20918_21124){
return (function (a,b){
var fexpr__20926 = (function (){var G__20928 = clojure.data.equality_partition(a);
var G__20928__$1 = (((G__20928 instanceof cljs.core.Keyword))?G__20928.fqn:null);
switch (G__20928__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20928__$1)].join('')));

}
})();
return (fexpr__20926.cljs$core$IFn$_invoke$arity$2 ? fexpr__20926.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__20926.call(null,a,b));
});})(G__20917_21123,G__20918_21124))
;
goog.object.set(G__20917_21123,G__20918_21124,G__20919_21125);
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
