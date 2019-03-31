goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34929){
var map__34930 = p__34929;
var map__34930__$1 = (((((!((map__34930 == null))))?(((((map__34930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34930):map__34930);
var m = map__34930__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34930__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34933_35280 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34934_35281 = null;
var count__34935_35282 = (0);
var i__34936_35283 = (0);
while(true){
if((i__34936_35283 < count__34935_35282)){
var f_35284 = chunk__34934_35281.cljs$core$IIndexed$_nth$arity$2(null,i__34936_35283);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35284], 0));


var G__35285 = seq__34933_35280;
var G__35286 = chunk__34934_35281;
var G__35287 = count__34935_35282;
var G__35288 = (i__34936_35283 + (1));
seq__34933_35280 = G__35285;
chunk__34934_35281 = G__35286;
count__34935_35282 = G__35287;
i__34936_35283 = G__35288;
continue;
} else {
var temp__5457__auto___35290 = cljs.core.seq(seq__34933_35280);
if(temp__5457__auto___35290){
var seq__34933_35291__$1 = temp__5457__auto___35290;
if(cljs.core.chunked_seq_QMARK_(seq__34933_35291__$1)){
var c__4550__auto___35292 = cljs.core.chunk_first(seq__34933_35291__$1);
var G__35293 = cljs.core.chunk_rest(seq__34933_35291__$1);
var G__35294 = c__4550__auto___35292;
var G__35295 = cljs.core.count(c__4550__auto___35292);
var G__35296 = (0);
seq__34933_35280 = G__35293;
chunk__34934_35281 = G__35294;
count__34935_35282 = G__35295;
i__34936_35283 = G__35296;
continue;
} else {
var f_35297 = cljs.core.first(seq__34933_35291__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35297], 0));


var G__35298 = cljs.core.next(seq__34933_35291__$1);
var G__35299 = null;
var G__35300 = (0);
var G__35301 = (0);
seq__34933_35280 = G__35298;
chunk__34934_35281 = G__35299;
count__34935_35282 = G__35300;
i__34936_35283 = G__35301;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35302 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35302], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35302)))?cljs.core.second(arglists_35302):arglists_35302)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34947_35306 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34948_35307 = null;
var count__34949_35308 = (0);
var i__34950_35309 = (0);
while(true){
if((i__34950_35309 < count__34949_35308)){
var vec__34983_35311 = chunk__34948_35307.cljs$core$IIndexed$_nth$arity$2(null,i__34950_35309);
var name_35312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983_35311,(0),null);
var map__34986_35313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983_35311,(1),null);
var map__34986_35314__$1 = (((((!((map__34986_35313 == null))))?(((((map__34986_35313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34986_35313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34986_35313):map__34986_35313);
var doc_35315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986_35314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34986_35314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35312], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35316], 0));

if(cljs.core.truth_(doc_35315)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35315], 0));
} else {
}


var G__35320 = seq__34947_35306;
var G__35321 = chunk__34948_35307;
var G__35322 = count__34949_35308;
var G__35323 = (i__34950_35309 + (1));
seq__34947_35306 = G__35320;
chunk__34948_35307 = G__35321;
count__34949_35308 = G__35322;
i__34950_35309 = G__35323;
continue;
} else {
var temp__5457__auto___35324 = cljs.core.seq(seq__34947_35306);
if(temp__5457__auto___35324){
var seq__34947_35325__$1 = temp__5457__auto___35324;
if(cljs.core.chunked_seq_QMARK_(seq__34947_35325__$1)){
var c__4550__auto___35326 = cljs.core.chunk_first(seq__34947_35325__$1);
var G__35327 = cljs.core.chunk_rest(seq__34947_35325__$1);
var G__35328 = c__4550__auto___35326;
var G__35329 = cljs.core.count(c__4550__auto___35326);
var G__35330 = (0);
seq__34947_35306 = G__35327;
chunk__34948_35307 = G__35328;
count__34949_35308 = G__35329;
i__34950_35309 = G__35330;
continue;
} else {
var vec__34996_35331 = cljs.core.first(seq__34947_35325__$1);
var name_35332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34996_35331,(0),null);
var map__34999_35333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34996_35331,(1),null);
var map__34999_35334__$1 = (((((!((map__34999_35333 == null))))?(((((map__34999_35333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34999_35333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34999_35333):map__34999_35333);
var doc_35335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34999_35334__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34999_35334__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35332], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35336], 0));

if(cljs.core.truth_(doc_35335)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35335], 0));
} else {
}


var G__35339 = cljs.core.next(seq__34947_35325__$1);
var G__35340 = null;
var G__35341 = (0);
var G__35342 = (0);
seq__34947_35306 = G__35339;
chunk__34948_35307 = G__35340;
count__34949_35308 = G__35341;
i__34950_35309 = G__35342;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35002 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35003 = null;
var count__35004 = (0);
var i__35005 = (0);
while(true){
if((i__35005 < count__35004)){
var role = chunk__35003.cljs$core$IIndexed$_nth$arity$2(null,i__35005);
var temp__5457__auto___35348__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35348__$1)){
var spec_35349 = temp__5457__auto___35348__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35349)], 0));
} else {
}


var G__35350 = seq__35002;
var G__35351 = chunk__35003;
var G__35352 = count__35004;
var G__35353 = (i__35005 + (1));
seq__35002 = G__35350;
chunk__35003 = G__35351;
count__35004 = G__35352;
i__35005 = G__35353;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__35002);
if(temp__5457__auto____$1){
var seq__35002__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35002__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35002__$1);
var G__35355 = cljs.core.chunk_rest(seq__35002__$1);
var G__35356 = c__4550__auto__;
var G__35357 = cljs.core.count(c__4550__auto__);
var G__35358 = (0);
seq__35002 = G__35355;
chunk__35003 = G__35356;
count__35004 = G__35357;
i__35005 = G__35358;
continue;
} else {
var role = cljs.core.first(seq__35002__$1);
var temp__5457__auto___35361__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35361__$2)){
var spec_35362 = temp__5457__auto___35361__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35362)], 0));
} else {
}


var G__35365 = cljs.core.next(seq__35002__$1);
var G__35366 = null;
var G__35367 = (0);
var G__35368 = (0);
seq__35002 = G__35365;
chunk__35003 = G__35366;
count__35004 = G__35367;
i__35005 = G__35368;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35377 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35378 = cljs.core.ex_cause(t);
via = G__35377;
t = G__35378;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35067 = datafied_throwable;
var map__35067__$1 = (((((!((map__35067 == null))))?(((((map__35067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35067):map__35067);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35067__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35067__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35067__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35068 = cljs.core.last(via);
var map__35068__$1 = (((((!((map__35068 == null))))?(((((map__35068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35068):map__35068);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35069 = data;
var map__35069__$1 = (((((!((map__35069 == null))))?(((((map__35069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35069):map__35069);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35069__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35069__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35069__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35070 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35070__$1 = (((((!((map__35070 == null))))?(((((map__35070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35070):map__35070);
var top_data = map__35070__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35070__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35084 = phase;
var G__35084__$1 = (((G__35084 instanceof cljs.core.Keyword))?G__35084.fqn:null);
switch (G__35084__$1) {
case "read-source":
var map__35090 = data;
var map__35090__$1 = (((((!((map__35090 == null))))?(((((map__35090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35090):map__35090);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35090__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35090__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35095 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35095__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35095,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35095);
var G__35095__$2 = (cljs.core.truth_((function (){var fexpr__35097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35097.cljs$core$IFn$_invoke$arity$1 ? fexpr__35097.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35097.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35095__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35095__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35095__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35095__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35099 = top_data;
var G__35099__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35099,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35099);
var G__35099__$2 = (cljs.core.truth_((function (){var fexpr__35104 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35104.cljs$core$IFn$_invoke$arity$1 ? fexpr__35104.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35104.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35099__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35099__$1);
var G__35099__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35099__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35099__$2);
var G__35099__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35099__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35099__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35099__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35099__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35113 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113,(3),null);
var G__35120 = top_data;
var G__35120__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35120,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35120);
var G__35120__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35120__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35120__$1);
var G__35120__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35120__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35120__$2);
var G__35120__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35120__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35120__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35120__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35120__$4;
}

break;
case "execution":
var vec__35123 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__35123,source__$1,method,file,line,G__35084,G__35084__$1,map__35067,map__35067__$1,via,trace,phase,map__35068,map__35068__$1,type,message,data,map__35069,map__35069__$1,problems,fn,caller,map__35070,map__35070__$1,top_data,source){
return (function (p1__35064_SHARP_){
var or__4131__auto__ = (p1__35064_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__35133 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35133.cljs$core$IFn$_invoke$arity$1 ? fexpr__35133.cljs$core$IFn$_invoke$arity$1(p1__35064_SHARP_) : fexpr__35133.call(null,p1__35064_SHARP_));
}
});})(vec__35123,source__$1,method,file,line,G__35084,G__35084__$1,map__35067,map__35067__$1,via,trace,phase,map__35068,map__35068__$1,type,message,data,map__35069,map__35069__$1,problems,fn,caller,map__35070,map__35070__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35141 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35141__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35141,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35141);
var G__35141__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35141__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35141__$1);
var G__35141__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35141__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35141__$2);
var G__35141__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35141__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35141__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35141__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35141__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35084__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35188){
var map__35190 = p__35188;
var map__35190__$1 = (((((!((map__35190 == null))))?(((((map__35190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35190):map__35190);
var triage_data = map__35190__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35192 = phase;
var G__35192__$1 = (((G__35192 instanceof cljs.core.Keyword))?G__35192.fqn:null);
switch (G__35192__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35193 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35194 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35195 = loc;
var G__35196 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35201_35491 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35202_35492 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35203_35493 = true;
var _STAR_print_fn_STAR__temp_val__35204_35494 = ((function (_STAR_print_newline_STAR__orig_val__35201_35491,_STAR_print_fn_STAR__orig_val__35202_35492,_STAR_print_newline_STAR__temp_val__35203_35493,sb__4661__auto__,G__35193,G__35194,G__35195,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35201_35491,_STAR_print_fn_STAR__orig_val__35202_35492,_STAR_print_newline_STAR__temp_val__35203_35493,sb__4661__auto__,G__35193,G__35194,G__35195,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35203_35493;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35204_35494;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35201_35491,_STAR_print_fn_STAR__orig_val__35202_35492,_STAR_print_newline_STAR__temp_val__35203_35493,_STAR_print_fn_STAR__temp_val__35204_35494,sb__4661__auto__,G__35193,G__35194,G__35195,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__35201_35491,_STAR_print_fn_STAR__orig_val__35202_35492,_STAR_print_newline_STAR__temp_val__35203_35493,_STAR_print_fn_STAR__temp_val__35204_35494,sb__4661__auto__,G__35193,G__35194,G__35195,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35160_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35160_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35201_35491,_STAR_print_fn_STAR__orig_val__35202_35492,_STAR_print_newline_STAR__temp_val__35203_35493,_STAR_print_fn_STAR__temp_val__35204_35494,sb__4661__auto__,G__35193,G__35194,G__35195,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35201_35491,_STAR_print_fn_STAR__orig_val__35202_35492,_STAR_print_newline_STAR__temp_val__35203_35493,_STAR_print_fn_STAR__temp_val__35204_35494,sb__4661__auto__,G__35193,G__35194,G__35195,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35202_35492;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35201_35491;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35193,G__35194,G__35195,G__35196) : format.call(null,G__35193,G__35194,G__35195,G__35196));

break;
case "macroexpansion":
var G__35218 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35219 = cause_type;
var G__35220 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35221 = loc;
var G__35222 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35218,G__35219,G__35220,G__35221,G__35222) : format.call(null,G__35218,G__35219,G__35220,G__35221,G__35222));

break;
case "compile-syntax-check":
var G__35227 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35228 = cause_type;
var G__35229 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35230 = loc;
var G__35231 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35227,G__35228,G__35229,G__35230,G__35231) : format.call(null,G__35227,G__35228,G__35229,G__35230,G__35231));

break;
case "compilation":
var G__35232 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35233 = cause_type;
var G__35234 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35235 = loc;
var G__35236 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35232,G__35233,G__35234,G__35235,G__35236) : format.call(null,G__35232,G__35233,G__35234,G__35235,G__35236));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35238 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35239 = symbol;
var G__35240 = loc;
var G__35241 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35246_35531 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35247_35532 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35248_35533 = true;
var _STAR_print_fn_STAR__temp_val__35249_35534 = ((function (_STAR_print_newline_STAR__orig_val__35246_35531,_STAR_print_fn_STAR__orig_val__35247_35532,_STAR_print_newline_STAR__temp_val__35248_35533,sb__4661__auto__,G__35238,G__35239,G__35240,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35246_35531,_STAR_print_fn_STAR__orig_val__35247_35532,_STAR_print_newline_STAR__temp_val__35248_35533,sb__4661__auto__,G__35238,G__35239,G__35240,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35248_35533;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35249_35534;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35246_35531,_STAR_print_fn_STAR__orig_val__35247_35532,_STAR_print_newline_STAR__temp_val__35248_35533,_STAR_print_fn_STAR__temp_val__35249_35534,sb__4661__auto__,G__35238,G__35239,G__35240,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__35246_35531,_STAR_print_fn_STAR__orig_val__35247_35532,_STAR_print_newline_STAR__temp_val__35248_35533,_STAR_print_fn_STAR__temp_val__35249_35534,sb__4661__auto__,G__35238,G__35239,G__35240,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35169_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35169_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35246_35531,_STAR_print_fn_STAR__orig_val__35247_35532,_STAR_print_newline_STAR__temp_val__35248_35533,_STAR_print_fn_STAR__temp_val__35249_35534,sb__4661__auto__,G__35238,G__35239,G__35240,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35246_35531,_STAR_print_fn_STAR__orig_val__35247_35532,_STAR_print_newline_STAR__temp_val__35248_35533,_STAR_print_fn_STAR__temp_val__35249_35534,sb__4661__auto__,G__35238,G__35239,G__35240,G__35192,G__35192__$1,loc,class_name,simple_class,cause_type,format,map__35190,map__35190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35247_35532;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35246_35531;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35238,G__35239,G__35240,G__35241) : format.call(null,G__35238,G__35239,G__35240,G__35241));
} else {
var G__35250 = "Execution error%s at %s(%s).\n%s\n";
var G__35251 = cause_type;
var G__35252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35253 = loc;
var G__35254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35250,G__35251,G__35252,G__35253,G__35254) : format.call(null,G__35250,G__35251,G__35252,G__35253,G__35254));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35192__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
