goog.provide('zprint.zprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('zprint.ansi');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
/**
 * Produce a blank string of desired size.
 */
zprint.zprint.blanks = (function zprint$zprint$blanks(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," "));
});
/**
 * Produce a dot string of desired size.
 */
zprint.zprint.dots = (function zprint$zprint$dots(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"."));
});
/**
 * error
 */
zprint.zprint.indent = (function zprint$zprint$indent(){
return null;
});
/**
 * Make a version of conj! that take multiple arguments.
 */
zprint.zprint.conj_it_BANG_ = (function zprint$zprint$conj_it_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32673 = arguments.length;
var i__4731__auto___32674 = (0);
while(true){
if((i__4731__auto___32674 < len__4730__auto___32673)){
args__4736__auto__.push((arguments[i__4731__auto___32674]));

var G__32675 = (i__4731__auto___32674 + (1));
i__4731__auto___32674 = G__32675;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var out = cljs.core.first(rest);
var more = cljs.core.next(rest);
while(true){
if(more){
var G__32676 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(more));
var G__32677 = cljs.core.next(more);
out = G__32676;
more = G__32677;
continue;
} else {
return out;
}
break;
}
});

zprint.zprint.conj_it_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zprint.zprint.conj_it_BANG_.cljs$lang$applyTo = (function (seq31693){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31693));
});

/**
 * Do split for newlines, instead of using regular expressions.
 */
zprint.zprint.split_lf = (function zprint$zprint$split_lf(s){
var input = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(input)){
return out;
} else {
var next_lf = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(input,"\n");
var chunk = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input,(0),next_lf):input);
var G__32678 = (cljs.core.truth_(next_lf)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(next_lf + (1))):null);
var G__32679 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,chunk);
input = G__32678;
out = G__32679;
continue;
}
break;
}
});
/**
 * Do split for newlines, instead of using regular expressions.
 *   Maximum split is 2.
 */
zprint.zprint.split_lf_2 = (function zprint$zprint$split_lf_2(s){
var temp__5455__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"\n");
if(cljs.core.truth_(temp__5455__auto__)){
var next_lf = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),next_lf),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(next_lf + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}
});
zprint.zprint.zpmap = (function zprint$zprint$zpmap(var_args){
var G__31700 = arguments.length;
switch (G__31700) {
case 3:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3 = (function (options,f,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll);
});

zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4 = (function (options,f,coll1,coll2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,coll1,coll2);
});

zprint.zprint.zpmap.cljs$lang$maxFixedArity = 4;

/**
 * Takes an option map and the return from zfuture.  If the
 *   options map has (:parallel? options) as true, then deref
 *   the value, otherwise just pass it through.
 */
zprint.zprint.zat = (function zprint$zprint$zat(options,value){
return value;
});
zprint.zprint.fzprint_dbg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Accept a style-vec that we are about to hand to style-lines, and
 *   output it if called for, to aid in debugging.
 */
zprint.zprint.log_lines = (function zprint$zprint$log_lines(p__31707,dbg_output,ind,style_vec){
var map__31708 = p__31707;
var map__31708__$1 = (((((!((map__31708 == null))))?(((((map__31708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31708):map__31708);
var options = map__31708__$1;
var dbg_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31708__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31708__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31708__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
if(cljs.core.truth_(dbg_print_QMARK_)){
if(cljs.core.truth_(style_vec)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dbg_indent,dbg_output,"--------------","in-hang?",in_hang_QMARK_], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,zprint.zprint.blanks(ind),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,style_vec))], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dbg_indent,dbg_output,"--------------- no style-vec"], 0));
}
} else {
return null;
}
});
/**
 * Show this thing as a function?
 */
zprint.zprint.showfn_QMARK_ = (function zprint$zprint$showfn_QMARK_(fn_map,f){
if((!(typeof f === 'string'))){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var or__4131__auto__ = (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(f_str) : fn_map.call(null,f_str));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.re_find(/clojure/,f_str);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__4131__auto____$2 = cljs.core.re_find(/clojure/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f))));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var G__31718 = cljs.core.name(f);
return (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(G__31718) : fn_map.call(null,G__31718));
}
}catch (e31716){var e = e31716;
return null;
}} else {
return null;
}
}
}
} else {
return null;
}
});
/**
 * Show this thing as a user defined function?  Assumes that we
 *   have already handled any clojure defined functions!
 */
zprint.zprint.show_user_fn_QMARK_ = (function zprint$zprint$show_user_fn_QMARK_(options,f){
if((!(typeof f === 'string'))){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var user_fn_map = new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227).cljs$core$IFn$_invoke$arity$1(options);
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_fn_map,f_str);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__4131__auto____$1 = (!(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f))))));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_fn_map,cljs.core.name(f));
}
}catch (e31726){var e = e31726;
return null;
}} else {
return null;
}
}
} else {
return null;
}
});
zprint.zprint.right_separator_map = new cljs.core.PersistentArrayMap(null, 3, [")",(1),"]",(1),"}",(1)], null);
/**
 * Given the fn-style, is the first output good enough to be worth
 *   doing. p is pretty, which is typically hanging, and b is basic, which
 *   is typically flow. p-count is the number of elements in the hang.
 */
zprint.zprint.good_enough_QMARK_ = (function zprint$zprint$good_enough_QMARK_(caller,p__31736,fn_style,p_count,indent_diff,p__31737,p__31738){
var map__31740 = p__31736;
var map__31740__$1 = (((((!((map__31740 == null))))?(((((map__31740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31740):map__31740);
var options = map__31740__$1;
var map__31741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31740__$1,new cljs.core.Keyword(null,"tuning","tuning",-48660925));
var map__31741__$1 = (((((!((map__31741 == null))))?(((((map__31741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31741):map__31741);
var hang_flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548));
var hang_type_flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590));
var hang_flow_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586));
var general_hang_adjust = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987));
var hang_if_equal_flow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992));
var map__31742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31740__$1,caller);
var map__31742__$1 = (((((!((map__31742 == null))))?(((((map__31742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31742):map__31742);
var hang_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31742__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31742__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var hang_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31742__$1,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063));
var hang_adjust = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31742__$1,new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31740__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31740__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31740__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__31743 = p__31737;
var p_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31743,(0),null);
var p_maxwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31743,(1),null);
var p_length_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31743,(2),null);
var p_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31743,(3),null);
var vec__31746 = p__31738;
var b_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(0),null);
var b_maxwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(2),null);
var b_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(3),null);
var p_last_maxwidth = cljs.core.last(p_length_seq);
var hang_diff__$1 = (function (){var or__4131__auto__ = hang_diff;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var hang_expand__$1 = (function (){var or__4131__auto__ = hang_expand;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return 1000.0;
}
})();
var hang_adjust__$1 = (function (){var or__4131__auto__ = hang_adjust;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return general_hang_adjust;
}
})();
var options__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = p_what;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return b_what;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),true):options);
var result = ((cljs.core.not(b_lines))?true:(function (){var and__4120__auto__ = p_lines;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = (p_last_maxwidth <= (width - (zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt))));
if(and__4120__auto____$1){
var and__4120__auto____$2 = (p_maxwidth <= width);
if(and__4120__auto____$2){
var or__4131__auto__ = (p_lines === (0));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto____$3 = (b_lines > (0));
if(and__4120__auto____$3){
var and__4120__auto____$4 = (p_count > (0));
if(and__4120__auto____$4){
if(cljs.core.truth_((function (){var and__4120__auto____$5 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p_lines,b_lines);
if(and__4120__auto____$5){
return hang_if_equal_flow_QMARK_;
} else {
return and__4120__auto____$5;
}
})())){
return true;
} else {
var and__4120__auto____$5 = (((indent_diff <= hang_diff__$1))?true:(((p_lines - (1)) / p_count) <= hang_expand__$1));
if(and__4120__auto____$5){
var and__4120__auto____$6 = (cljs.core.truth_(hang_size)?(p_lines < hang_size):true);
if(and__4120__auto____$6){
var factor = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?hang_type_flow:hang_flow);
if((p_lines > hang_flow_limit)){
return ((p_lines - (1)) <= b_lines);
} else {
return (((p_lines + hang_adjust__$1) / b_lines) < factor);
}
} else {
return and__4120__auto____$6;
}
} else {
return and__4120__auto____$5;
}
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),(cljs.core.truth_(result)?"++++++":"XXXXXX"),"p-what",p_what,"good-enough? caller:",caller,"fn-style:",fn_style,"width:",width,"rightcnt:",rightcnt,"hang-expand:",hang_expand__$1,"p-count:",p_count,"p-lines:",p_lines,"p-maxwidth:",p_maxwidth,"indent-diff:",indent_diff,"hang-diff:",hang_diff__$1,"p-last-maxwidth:",p_last_maxwidth,"b-lines:",b_lines,"b-maxwidth:",b_maxwidth], 0));
} else {
}

return result;
});
/**
 * Add :in-hang? true to the options map.
 */
zprint.zprint.in_hang = (function zprint$zprint$in_hang(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639).cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return true;
}
})());
} else {
return options;
}
}
});
/**
 * Scan a collection, and return the number of nils or empty collections
 *   present (if any), and nil otherwise.
 */
zprint.zprint.contains_nil_QMARK_ = (function zprint$zprint$contains_nil_QMARK_(coll){
var n = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31822_SHARP_){
if(cljs.core.coll_QMARK_(p1__31822_SHARP_)){
return cljs.core.empty_QMARK_(p1__31822_SHARP_);
} else {
return (p1__31822_SHARP_ == null);
}
}),coll));
if((!((n === (0))))){
return n;
} else {
return null;
}
});
/**
 * Concatentate multiple sequences, but if any of them are nil, return nil.
 *   This version is 15-20% slower than the version below. Keeping it around
 *   just for illustrative purposes.
 */
zprint.zprint.concat_no_nil_alt = (function zprint$zprint$concat_no_nil_alt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32705 = arguments.length;
var i__4731__auto___32706 = (0);
while(true){
if((i__4731__auto___32706 < len__4730__auto___32705)){
args__4736__auto__.push((arguments[i__4731__auto___32706]));

var G__32713 = (i__4731__auto___32706 + (1));
i__4731__auto___32706 = G__32713;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_alt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

zprint.zprint.concat_no_nil_alt.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var coll = rest;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var c = cljs.core.first(coll);
if(cljs.core.not(c)){
return cljs.core.persistent_BANG_(out);
} else {
if(((((cljs.core.coll_QMARK_(c)) && ((!(cljs.core.empty_QMARK_(c)))))) || ((!((c == null)))))){
var G__32714 = cljs.core.next(coll);
var G__32715 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,c);
coll = G__32714;
out = G__32715;
continue;
} else {
return null;
}
}
break;
}
});

zprint.zprint.concat_no_nil_alt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zprint.zprint.concat_no_nil_alt.cljs$lang$applyTo = (function (seq31827){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31827));
});

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil.
 */
zprint.zprint.concat_no_nil = (function zprint$zprint$concat_no_nil(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32717 = arguments.length;
var i__4731__auto___32718 = (0);
while(true){
if((i__4731__auto___32718 < len__4730__auto___32717)){
args__4736__auto__.push((arguments[i__4731__auto___32718]));

var G__32719 = (i__4731__auto___32718 + (1));
i__4731__auto___32718 = G__32719;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.coll_QMARK_(o)){
if(cljs.core.empty_QMARK_(o)){
return cljs.core.reduced(null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,o);
}
} else {
if((o == null)){
return cljs.core.reduced(null);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_(result);
} else {
return null;
}
});

zprint.zprint.concat_no_nil.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zprint.zprint.concat_no_nil.cljs$lang$applyTo = (function (seq31830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31830));
});

/**
 * Ensure that whatever we have is a vector.
 */
zprint.zprint.force_vector = (function zprint$zprint$force_vector(coll){
if(cljs.core.vector_QMARK_(coll)){
return coll;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coll);
}
});
/**
 * Takes a string, and returns the fn-style if it is a keyword and
 *   without the : it can be found in the fn-map.
 */
zprint.zprint.keyword_fn_QMARK_ = (function zprint$zprint$keyword_fn_QMARK_(options,s){
var vec__31831 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/^:/);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31831,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31831,(1),null);
if(cljs.core.truth_(right)){
var fexpr__31834 = new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__31834.cljs$core$IFn$_invoke$arity$1 ? fexpr__31834.cljs$core$IFn$_invoke$arity$1(right) : fexpr__31834.call(null,right));
} else {
return null;
}
});
/**
 * Take the vector carrying the intermediate results, and
 *   do the right thing with a new string. Vector is
 *   [ 0 out - vector accumulating line lengths 
 *  1 cur-len - length of current line
 *  just-eol? - did we just do an eol?
 *  ]
 *   s - string to add to current line
 *   tag - element type of string (comment's don't count in length)
 *   eol? - should we terminate line after adding count of s
 */
zprint.zprint.accumulate_ll = (function zprint$zprint$accumulate_ll(count_comment_QMARK_,p__31835,s,tag,eol_QMARK_){
var vec__31836 = p__31835;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836,(0),null);
var cur_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836,(3),null);
var in$ = vec__31836;
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var count_s = ((((comment_QMARK_) && (cljs.core.not(count_comment_QMARK_))))?(0):cljs.core.count(s));
if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = eol_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var and__4120__auto____$1 = just_eol_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return (count_s === (0));
} else {
return and__4120__auto____$1;
}
})());
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return comment_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cur_len + count_s)),(0),true,comment_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,(cur_len + count_s),null,comment_QMARK_], null);

}
});
zprint.zprint.generate_ll = (function zprint$zprint$generate_ll(count_comment_QMARK_,p__31839,p__31840){
var vec__31841 = p__31839;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31841,(0),null);
var cur_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31841,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31841,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31841,(3),null);
var in$ = vec__31841;
var vec__31844 = p__31840;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31844,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31844,(1),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31844,(2),null);
var element = vec__31844;
var vec__31849 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"newline","newline",1790071323)))))?zprint.zprint.split_lf_2(s):(new cljs.core.List(null,s,null,(1),null)));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31849,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31849,(1),null);
var in$__$1 = zprint.zprint.accumulate_ll(count_comment_QMARK_,in$,l,tag,(!((r == null))));
var in$__$2 = ((cljs.core.empty_QMARK_(r))?in$__$1:zprint.zprint.accumulate_ll(count_comment_QMARK_,in$__$1,r,tag,null));
return in$__$2;
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments elsewhere.
 *   Note that only vectors with :whitespace, :indent, or :newline are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character. A single comment is counted as two lines. Lots of edge
 *   conditions that are really quite important.
 */
zprint.zprint.line_lengths_iter = (function zprint$zprint$line_lengths_iter(options,ind,style_vec){
var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var ind__$1 = ((cljs.core.coll_QMARK_(ind))?cljs.core.first(ind):ind);
var next_vec = style_vec;
var current_string = null;
var line_length = ind__$1;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(next_vec)) && (cljs.core.empty_QMARK_(current_string)))){
if((((line_length === (0))) && (cljs.core.not(previous_comment_QMARK_)))){
return out;
} else {
if(cljs.core.truth_(previous_comment_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(out,line_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,line_length);

}
}
} else {
var advance_QMARK_ = cljs.core.empty_QMARK_(current_string);
var vec__31872 = ((advance_QMARK_)?cljs.core.first(next_vec):null);
var next_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31872,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31872,(1),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31872,(2),null);
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var s = ((advance_QMARK_)?next_string:current_string);
var vec__31875 = (cljs.core.truth_(s)?((((comment_QMARK_) && (cljs.core.not(count_comment_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null):(cljs.core.truth_((function (){var or__4131__auto__ = ((advance_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"indent","indent",-148200125))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return current_string;
}
})())?zprint.zprint.split_lf_2(s):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)
)):null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31875,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31875,(1),null);
var force_newline_QMARK_ = (function (){var and__4120__auto__ = previous_comment_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core.empty_QMARK_(l)));
} else {
return and__4120__auto__;
}
})();
var r__$1 = (cljs.core.truth_(force_newline_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''):r);
var l__$1 = (cljs.core.truth_(force_newline_QMARK_)?null:l);
var new_line_length = (line_length + cljs.core.count(l__$1));
var G__32749 = ((advance_QMARK_)?cljs.core.next(next_vec):next_vec);
var G__32750 = r__$1;
var G__32751 = (cljs.core.truth_(r__$1)?(0):new_line_length);
var G__32752 = comment_QMARK_;
var G__32753 = (cljs.core.truth_(r__$1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_line_length):out);
next_vec = G__32749;
current_string = G__32750;
line_length = G__32751;
previous_comment_QMARK_ = G__32752;
out = G__32753;
continue;
}
break;
}
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments at the
 *   end. Note that only vectors with :whitespace or :indent are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character.
 */
zprint.zprint.line_lengths = (function zprint$zprint$line_lengths(options,ind,style_vec){
var length_vec = cljs.core.first((function (){var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var vec__31886 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.generate_ll,count_comment_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,((cljs.core.coll_QMARK_(ind))?cljs.core.first(ind):ind),null,null], null),style_vec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31886,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31886,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31886,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31886,(3),null);
var result = vec__31886;
if(cljs.core.truth_((function (){var and__4120__auto__ = just_eol_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(just_comment_QMARK_);
} else {
return and__4120__auto__;
}
})())){
return result;
} else {
return zprint.zprint.accumulate_ll(count_comment_QMARK_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,(2),null),"",null,true);
}
})());
return length_vec;
});
/**
 * This looks at a style vec and doesn't do all that style-lines does.
 *   It just looks for a new-line in the strings, and returns true if it
 *   doesn't find one.
 */
zprint.zprint.single_line_QMARK_ = (function zprint$zprint$single_line_QMARK_(style_vec){
return cljs.core.not(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__31891_SHARP_,p2__31892_SHARP_){
var or__4131__auto__ = p1__31891_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p2__31892_SHARP_;
}
}),false,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31893_SHARP_){
return clojure.string.includes_QMARK_(cljs.core.first(p1__31893_SHARP_),"\n");
}),style_vec)));
});
/**
 * Given a style-vec, come up with a string that gives some hint of 
 *   where this style-vec came from.
 */
zprint.zprint.find_what = (function zprint$zprint$find_what(style_vec){
var s_vec = style_vec;
while(true){
if(cljs.core.truth_(s_vec)){
var vec__31899 = cljs.core.first(s_vec);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31899,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31899,(1),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31899,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"element","element",1974019749))){
return what;
} else {
var G__32759 = cljs.core.next(s_vec);
s_vec = G__32759;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Take a style output, and tell us how many lines it takes to print it
 *   and the maximum width that it reaches. Returns 
 *   [<line-count> <max-width> [line-lengths]].
 *   Doesn't require any max-width inside the style-vec. Also returns the
 *   line lengths in case that is helpful (since we have them anyway).
 *   If (:dbg-ge options) has value, then uses find-what to see if what it
 *   finds matches the value, and if it does, place the value in the
 *   resulting vector.
 */
zprint.zprint.style_lines = (function zprint$zprint$style_lines(options,ind,style_vec){
if(cljs.core.truth_((function (){var and__4120__auto__ = style_vec;
if(cljs.core.truth_(and__4120__auto__)){
return (((!(cljs.core.empty_QMARK_(style_vec)))) && (cljs.core.not(zprint.zprint.contains_nil_QMARK_(style_vec))));
} else {
return and__4120__auto__;
}
})())){
var lengths = zprint.zprint.line_lengths_iter(options,ind,style_vec);
var result = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(lengths),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,lengths),lengths], null);
var dbg_ge = new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017).cljs$core$IFn$_invoke$arity$1(options);
var what = (cljs.core.truth_((function (){var and__4120__auto__ = dbg_ge;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.zprint.find_what(style_vec),dbg_ge);
} else {
return and__4120__auto__;
}
})())?dbg_ge:null);
if(cljs.core.truth_(what)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,what);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Given output from style-lines and options, see if it fits the width.  
 *   Return the number of lines it takes if it fits, nil otherwise.
 */
zprint.zprint.fzfit = (function zprint$zprint$fzfit(p__31907,p__31908){
var map__31909 = p__31907;
var map__31909__$1 = (((((!((map__31909 == null))))?(((((map__31909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31909):map__31909);
var options = map__31909__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31909__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31909__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31909__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__31910 = p__31908;
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31910,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31910,(1),null);
var style_lines_return = vec__31910;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzfit: fixed-rightcnt:",(zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt)),"line-count:",line_count,"max-width:",max_width,"width:",width], 0));
} else {
}

if(cljs.core.truth_(style_lines_return)){
if((max_width <= (width - (zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt))))){
return line_count;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given the return from style-lines  and options, 
 *   return true if it fits on a single line.
 */
zprint.zprint.fzfit_one_line = (function zprint$zprint$fzfit_one_line(options,style_lines_return){
var lines = zprint.zprint.fzfit(options,style_lines_return);
return ((typeof lines === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lines,(1))));
});
/**
 * Increase the rightmost count, if any, and return one if not.
 */
zprint.zprint.rightmost = (function zprint$zprint$rightmost(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$2(options,(0)) + (1)));
});
/**
 * Remove the rightmost count.
 */
zprint.zprint.not_rightmost = (function zprint$zprint$not_rightmost(options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
});
/**
 * Handle the complexity of commas and rightmost-pair with options.
 *   If it isn't a rightmost, it loses rightmost status.
 *   If it is a rightmost, and in the rightmost pair, it gain one rightmost
 *   since it has the right end thing (and we don't care about the comma).
 *   If it is the rightmost of the non-rightmost-pair, then the comma
 *   matters, and we handle that appropriately.  Whew!
 */
zprint.zprint.c_r_pair = (function zprint$zprint$c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,rightmost_QMARK_,options){
if(cljs.core.not(rightmost_QMARK_)){
return zprint.zprint.not_rightmost(options);
} else {
if(cljs.core.truth_(rightmost_pair_QMARK_)){
return options;
} else {
if(cljs.core.truth_(commas_QMARK_)){
return zprint.zprint.rightmost(zprint.zprint.not_rightmost(options));
} else {
return zprint.zprint.not_rightmost(options);
}
}
}
});
/**
 * Handle issue with rightcnt.
 */
zprint.zprint.fix_rightcnt = (function zprint$zprint$fix_rightcnt(rightcnt){
if(typeof rightcnt === 'number'){
return rightcnt;
} else {
return (0);
}
});
zprint.zprint.str__GT_key = cljs.core.PersistentHashMap.fromArrays(["]","'",")","`","~@","~","#{","(","#(","{","}","[","#_","@"],[new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"deref","deref",-145586795)]);
/**
 * Look up the thing in the zprint-color-map.  Accepts keywords or
 *   strings.
 */
zprint.zprint.zcolor_map = (function zprint$zprint$zcolor_map(p__31914,key_or_str){
var map__31915 = p__31914;
var map__31915__$1 = (((((!((map__31915 == null))))?(((((map__31915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31915):map__31915);
var options = map__31915__$1;
var color_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31915__$1,new cljs.core.Keyword(null,"color-map","color-map",-207789684));
var G__31917 = (((key_or_str instanceof cljs.core.Keyword))?key_or_str:(zprint.zprint.str__GT_key.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.str__GT_key.cljs$core$IFn$_invoke$arity$1(key_or_str) : zprint.zprint.str__GT_key.call(null,key_or_str)));
return (color_map.cljs$core$IFn$_invoke$arity$1 ? color_map.cljs$core$IFn$_invoke$arity$1(G__31917) : color_map.call(null,G__31917));
});
/**
 * Take a style-vec, and if hangflow? is true, return a
 *   vector [hang-or-flow style-vec], else return style-vec.
 *   But a nil style-vec returns nil.
 */
zprint.zprint.hangflow = (function zprint$zprint$hangflow(hangflow_QMARK_,hang_or_flow,style_vec){
if(cljs.core.truth_(style_vec)){
if(cljs.core.truth_(hangflow_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,style_vec], null);
} else {
return style_vec;
}
} else {
return null;
}
});
/**
 * Try to hang something and if it doesn't hang at all, then flow it,
 *   but strongly prefer hang.  Has hang and flow indents, and fzfn is the
 *   fzprint-? function to use with zloc.  Callers need to know whether this
 *   was hang or flow, so it returns [{:hang | :flow} style-vec] all the time.
 */
zprint.zprint.fzprint_hang_unless_fail = (function zprint$zprint$fzprint_hang_unless_fail(options,hindent,findent,fzfn,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail:",(function (){var G__31918 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__31918) : zprint.zfns.zstring.call(null,G__31918));
})()], 0));
} else {
}

var hanging = (function (){var G__31919 = zprint.zprint.in_hang(options);
var G__31920 = hindent;
var G__31921 = zloc;
return (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(G__31919,G__31920,G__31921) : fzfn.call(null,G__31919,G__31920,G__31921));
})();
var value__31671__auto__ = (cljs.core.truth_((function (){var and__4120__auto__ = hanging;
if(cljs.core.truth_(and__4120__auto__)){
return zprint.zprint.fzfit(options,zprint.zprint.style_lines(options,hindent,hanging));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),hanging], null):(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hang failed, doing flow"], 0));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : fzfn.call(null,options,findent,zloc))], 0))], null);
})()
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__31671__auto__], 0))], 0));
} else {
}

return value__31671__auto__;
});
/**
 * Given a style-vec with exactly one thing in it, replace the color
 *   with whatever local color we have determined is correct.
 */
zprint.zprint.replace_color = (function zprint$zprint$replace_color(local_color,style_vec){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(style_vec),(1))){
var vec__31922 = style_vec;
var vec__31925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31922,(0),null);
var string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31925,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31925,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31925,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,local_color,element], null)], null);
} else {
return style_vec;
}
});
/**
 * Print a single pair of things (though it might not be exactly a
 *   pair, given comments and :extend and the like), like bindings in
 *   a let, clauses in a cond, keys and values in a map.  Controlled
 *   by various maps, the key of which is caller.  This will return a
 *   style-vec (or nil), unless hangflow? is true, in which case it
 *   will return [:hang <style-vec>] or [:flow <style-vec>] so that
 *   the upstream folks know whether this was a hang or flow and can
 *   do the right thing based on that.
 */
zprint.zprint.fzprint_two_up = (function zprint$zprint$fzprint_two_up(caller,p__31928,ind,commas_QMARK_,justify_width,rightmost_pair_QMARK_,p__31929){
var map__31930 = p__31928;
var map__31930__$1 = (((((!((map__31930 == null))))?(((((map__31930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31930):map__31930);
var options = map__31930__$1;
var map__31931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,caller);
var map__31931__$1 = (((((!((map__31931 == null))))?(((((map__31931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31931):map__31931);
var hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var dbg_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325));
var dbg_cnt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"dbg-cnt?","dbg-cnt?",-1638028976));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var indent_arg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874));
var flow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"flow?","flow?",96929057));
var key_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"key-color","key-color",-209002572));
var key_depth_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819));
var key_value_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var dbg_indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var do_in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947));
var map_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var vec__31932 = p__31929;
var lloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31932,(0),null);
var rloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31932,(1),null);
var xloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31932,(2),null);
var pair = vec__31932;
if(cljs.core.truth_(dbg_cnt_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["two-up: caller:",caller,"hang?",hang_QMARK_,"dbg?",dbg_QMARK_], 0));
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return dbg_local_QMARK_;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = dbg_indent;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),"==========================",["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = dbg_indent;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})())].join(''),"fzprint-two-up:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zstring.call(null,lloc)),"caller:",caller,"count:",cljs.core.count(pair),"ind:",ind,"indent:",indent,"indent-arg:",indent_arg,"justify-width:",justify_width,"one-line?:",one_line_QMARK_,"hang?:",hang_QMARK_,"in-hang?",in_hang_QMARK_,"do-in-hang?",do_in_hang_QMARK_,"flow?",flow_QMARK_,"commas?",commas_QMARK_,"rightmost-pair?",rightmost_pair_QMARK_], 0));
} else {
}

var local_hang_QMARK_ = (function (){var or__4131__auto__ = one_line_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return hang_QMARK_;
}
})();
var indent__$1 = (function (){var or__4131__auto__ = indent;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return indent_arg;
}
})();
var local_options = ((cljs.core.not(local_hang_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var loptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,null,options);
var roptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),options);
var local_roptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),local_options);
var value_color_map = (function (){var and__4120__auto__ = key_value_color;
if(cljs.core.truth_(and__4120__auto__)){
var G__31943 = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zsexpr.call(null,lloc));
return (key_value_color.cljs$core$IFn$_invoke$arity$1 ? key_value_color.cljs$core$IFn$_invoke$arity$1(G__31943) : key_value_color.call(null,G__31943));
} else {
return and__4120__auto__;
}
})();
var local_roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)], 0)):local_roptions);
var roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)], 0)):roptions);
var modifier_set = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller)));
var modifier_QMARK_ = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = modifier_set;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = (function (){var G__31947 = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zstring.call(null,lloc));
return (modifier_set.cljs$core$IFn$_invoke$arity$1 ? modifier_set.cljs$core$IFn$_invoke$arity$1(G__31947) : modifier_set.call(null,G__31947));
})();
if(cljs.core.truth_(and__4120__auto____$1)){
return (cljs.core.count(pair) > (2));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (zprint.zprint.middle_element_QMARK_.cljs$core$IFn$_invoke$arity$2 ? zprint.zprint.middle_element_QMARK_.cljs$core$IFn$_invoke$arity$2(options,rloc) : zprint.zprint.middle_element_QMARK_.call(null,options,rloc));
}
})();
var local_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(key_depth_color,(map_depth - (1)));
var local_color__$1 = (cljs.core.truth_(key_color)?(function (){var G__31948 = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zsexpr.call(null,lloc));
return (key_color.cljs$core$IFn$_invoke$arity$1 ? key_color.cljs$core$IFn$_invoke$arity$1(G__31948) : key_color.call(null,G__31948));
})():local_color);
var arg_1 = (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(loptions,ind,lloc) : zprint.zprint.fzprint_STAR_.call(null,loptions,ind,lloc));
var arg_1__$1 = (cljs.core.truth_(local_color__$1)?zprint.zprint.replace_color(local_color__$1,arg_1):arg_1);
var vec__31937 = zprint.zprint.style_lines(options,ind,arg_1__$1);
var arg_1_line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31937,(0),null);
var arg_1_max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31937,(1),null);
var arg_1_lines = vec__31937;
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up before modifier: arg-1-line-count:",arg_1_line_count,"arg-1-max-width:",arg_1_max_width], 0)):null);
var modifier_QMARK___$1 = (cljs.core.truth_((function (){var and__4120__auto__ = arg_1_line_count;
if(cljs.core.truth_(and__4120__auto__)){
return (arg_1_line_count > (1));
} else {
return and__4120__auto__;
}
})())?null:modifier_QMARK_);
var combined_arg_1 = (cljs.core.truth_(modifier_QMARK___$1)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),(function (){var G__31949 = zprint.zprint.in_hang(loptions);
var G__31950 = (ind + arg_1_max_width);
var G__31951 = rloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__31949,G__31950,G__31951) : zprint.zprint.fzprint_STAR_.call(null,G__31949,G__31950,G__31951));
})()], 0)):arg_1__$1);
var arg_1__$2 = (cljs.core.truth_(combined_arg_1)?combined_arg_1:arg_1__$1);
var modifier_QMARK___$2 = (cljs.core.truth_(combined_arg_1)?modifier_QMARK___$1:null);
var vec__31940 = (cljs.core.truth_(combined_arg_1)?zprint.zprint.style_lines(options,ind,arg_1__$2):arg_1_lines);
var arg_1_line_count__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31940,(0),null);
var arg_1_max_width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31940,(1),null);
var arg_1_lines__$1 = vec__31940;
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up after modifier: arg-1-line-count:",arg_1_line_count__$1,"arg-1-max-width:",arg_1_max_width__$1], 0)):null);
var lloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?rloc:lloc);
var rloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?xloc:rloc);
var arg_1_fit_oneline_QMARK_ = ((cljs.core.not(flow_QMARK_)) && (zprint.zprint.fzfit_one_line(loptions,arg_1_lines__$1)));
var arg_1_fit_QMARK_ = (function (){var or__4131__auto__ = arg_1_fit_oneline_QMARK_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
if(cljs.core.not(one_line_QMARK_)){
return zprint.zprint.fzfit(loptions,arg_1_lines__$1);
} else {
return null;
}
}
})();
var arg_1_width = ((function (){var or__4131__auto__ = arg_1_max_width__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - ind);
if(cljs.core.truth_((function (){var and__4120__auto__ = arg_1__$2;
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto__ = arg_1_fit_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(in_hang_QMARK_);
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(roptions__$1,ind,lloc__$1) : zprint.zprint.fzprint_STAR_.call(null,roptions__$1,ind,lloc__$1))], null);
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(2));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = modifier_QMARK___$2;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(3));
} else {
return and__4120__auto__;
}
}
})())){
var hanging_width = (cljs.core.truth_(justify_width)?justify_width:arg_1_width);
var hanging_spaces = (cljs.core.truth_(justify_width)?((justify_width - arg_1_width) + (1)):(1));
var hanging_indent = (((1) + hanging_width) + ind);
var flow_indent = (indent__$1 + ind);
if(cljs.core.truth_((function (){var and__4120__auto__ = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1));
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zprint.keyword_fn_QMARK_(options,(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)));
if(cljs.core.truth_(and__4120__auto____$1)){
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc__$1) : zprint.zfns.zvector_QMARK_.call(null,rloc__$1));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var vec__31953 = zprint.zprint.fzprint_hang_unless_fail(loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_binding_vec,rloc__$1);
var hang_or_flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31953,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31953,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks(hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null)], 0)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$3,style_vec], 0))], null);
} else {
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before hang.  hanging tried?",((arg_1_fit_oneline_QMARK_) && (((cljs.core.not(flow_QMARK_)) && ((flow_indent >= hanging_indent)))))], 0)):null);
var hanging = ((((arg_1_fit_oneline_QMARK_) || (((cljs.core.not(flow_QMARK_)) && ((flow_indent >= hanging_indent))))))?(function (){var G__31959 = (((flow_indent < hanging_indent))?zprint.zprint.in_hang(local_roptions__$1):local_roptions__$1);
var G__31960 = hanging_indent;
var G__31961 = rloc__$1;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__31959,G__31960,G__31961) : zprint.zprint.fzprint_STAR_.call(null,G__31959,G__31960,G__31961));
})():null);
var hang_count = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(rloc__$1) : zprint.zfns.zcount.call(null,rloc__$1));
var ___$3 = zprint.zprint.log_lines(options,"fzprint-two-up: hanging:",hanging_indent,hanging);
var hanging_lines = zprint.zprint.style_lines(options,hanging_indent,hanging);
var fit_QMARK_ = zprint.zprint.fzfit_one_line(local_roptions__$1,hanging_lines);
var hanging_lines__$1 = ((fit_QMARK_)?hanging_lines:(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(one_line_QMARK_);
if(and__4120__auto__){
return hang_QMARK_;
} else {
return and__4120__auto__;
}
})())?hanging_lines:null));
var ___$4 = zprint.zprint.log_lines(options,"fzprint-two-up: hanging-2:",hanging_indent,hanging);
var flow_it_QMARK_ = ((((((cljs.core.not(hanging_lines__$1)) && (cljs.core.not(one_line_QMARK_)))) || (cljs.core.not((function (){var or__4131__auto__ = fit_QMARK_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
return one_line_QMARK_;
}
})())))) && ((((flow_indent < hanging_indent)) || (cljs.core.not(hanging_lines__$1)))));
var ___$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before flow. flow-it?",flow_it_QMARK_], 0)):null);
var flow = ((flow_it_QMARK_)?(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(roptions__$1,flow_indent,rloc__$1) : zprint.zprint.fzprint_STAR_.call(null,roptions__$1,flow_indent,rloc__$1)):null);
var ___$6 = zprint.zprint.log_lines(options,"fzprint-two-up: flow:",(indent__$1 + ind),flow);
var flow_lines = zprint.zprint.style_lines(options,(indent__$1 + ind),flow);
if(cljs.core.truth_(dbg_local_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: local-hang:",local_hang_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: one-line?:",one_line_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging-indent:",hanging_indent], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging-lines:",hanging_lines__$1], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow?:",flow_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow-it?:",flow_it_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: fit?:",fit_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow-indent:",flow_indent], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),hanging], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: (+ indent ind):",(indent__$1 + ind)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),flow], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before good-enough"], 0));
} else {
}

if(fit_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks(hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging], 0))], null);
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = hanging_lines__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return flow_lines;
}
})())){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_(caller,roptions__$1,new cljs.core.Keyword(null,"none-two-up","none-two-up",-457831686),hang_count,(hanging_indent - flow_indent),hanging_lines__$1,flow_lines))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks(hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging], 0))], null);
} else {
if(cljs.core.truth_(justify_width)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),flow], 0))], null);
}
}
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(function (){var G__31967 = options;
var G__31968 = (indent__$1 + ind);
var G__31969 = (cljs.core.truth_(modifier_QMARK___$2)?cljs.core.nnext(pair):cljs.core.next(pair));
var G__31970 = new cljs.core.Keyword(null,"force-nl","force-nl",-755040826);
return (zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4 ? zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4(G__31967,G__31968,G__31969,G__31970) : zprint.zprint.fzprint_flow_seq.call(null,G__31967,G__31968,G__31969,G__31970));
})()], 0))], null);

}
}
} else {
return null;
}
});
/**
 * Figure the width for a justification of a set of pairs in coll.  
 *   Also, decide if it makes any sense to justify the pairs at all.
 *   For instance, they all need to be one-line.
 */
zprint.zprint.fzprint_justify_width = (function zprint$zprint$fzprint_justify_width(caller,p__31976,ind,coll){
var map__31977 = p__31976;
var map__31977__$1 = (((((!((map__31977 == null))))?(((((map__31977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31977):map__31977);
var options = map__31977__$1;
var map__31978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31977__$1,caller);
var map__31978__$1 = (((((!((map__31978 == null))))?(((((map__31978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31978):map__31978);
var justify_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31978__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var firsts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__31977,map__31977__$1,options,map__31978,map__31978__$1,justify_QMARK_){
return (function (p1__31971_SHARP_){
if((cljs.core.count(p1__31971_SHARP_) > (1))){
var G__31982 = options;
var G__31983 = ind;
var G__31984 = cljs.core.first(p1__31971_SHARP_);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__31982,G__31983,G__31984) : zprint.zprint.fzprint_STAR_.call(null,G__31982,G__31983,G__31984));
} else {
return null;
}
});})(map__31977,map__31977__$1,options,map__31978,map__31978__$1,justify_QMARK_))
,coll));
var style_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.style_lines,options,ind),firsts);
var each_one_line_QMARK_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (firsts,style_seq,map__31977,map__31977__$1,options,map__31978,map__31978__$1,justify_QMARK_){
return (function (p1__31972_SHARP_,p2__31973_SHARP_){
if(cljs.core.truth_(p1__31972_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p2__31973_SHARP_),(1));
} else {
return null;
}
});})(firsts,style_seq,map__31977,map__31977__$1,options,map__31978,map__31978__$1,justify_QMARK_))
,true,style_seq);
var justify_width = (cljs.core.truth_(each_one_line_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (firsts,style_seq,each_one_line_QMARK_,map__31977,map__31977__$1,options,map__31978,map__31978__$1,justify_QMARK_){
return (function (p1__31974_SHARP_,p2__31975_SHARP_){
var x__4219__auto__ = p1__31974_SHARP_;
var y__4220__auto__ = cljs.core.second(p2__31975_SHARP_);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});})(firsts,style_seq,each_one_line_QMARK_,map__31977,map__31977__$1,options,map__31978,map__31978__$1,justify_QMARK_))
,(0),style_seq):null);
if(cljs.core.truth_(justify_width)){
return (justify_width - ind);
} else {
return null;
}
});
/**
 * Take a size and a collection of vectors with two or more elements
 *   per vector.  The elements are zlocs, the vectors are not.  Return
 *   the remaining character count or nil if it for sure doesn't fit.
 *   In order to be sure it doesn't fit, this version doesn't assume
 *   *any* separators, so it really underestimates the size.
 */
zprint.zprint.fit_within_QMARK_ = (function zprint$zprint$fit_within_QMARK_(var_args){
var G__31986 = arguments.length;
switch (G__31986) {
case 3:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (size,coll,depth){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (size__$1,element){
var or__4131__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0)))?zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3(size__$1,element,(depth + (1))):(function (){var remaining = (size__$1 - cljs.core.count((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zstring.call(null,element))));
if((remaining > (0))){
return remaining;
} else {
return null;
}
})());
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.reduced(null);
}
}),size,coll);
});

zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (size,coll){
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3(size,coll,(0));
});

zprint.zprint.fit_within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Convert a hangflow style-vec to a regular style-vec.
 */
zprint.zprint.remove_hangflow = (function zprint$zprint$remove_hangflow(hf_style_vec){
if(cljs.core.truth_(hf_style_vec)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,hf_style_vec);
} else {
return null;
}
});
/**
 * Accept a sequence of pairs, and map fzprint-two-up across those pairs.
 *   If you have :one-line? set, this will return nil if it is way over,
 *   but it can't accurately tell exactly what will fit on one line, since
 *   it doesn't know the separators and such.  So, :one-line? true is a
 *   performance optimization, so it doesn't do a whole huge map just to
 *   find out that it could not possibly have fit on one line.  So, this
 *   returns a sequence of style-vecs, where the indentation for the
 *   stuff inside of the pairs is already there, but the separators of
 *   the style-vecs (including indentation and commas) is done by the
 *   caller of fzprint-map-two-up. Always returns a sequence of vector pairs:
 *   [[:hang <style-vec-for-one-pair>] [:flow <style-vec-for-one-pair>] ...].
 *   If you want a style vec instead, call remove-hangflow on the return 
 *   from fzprint-map-two-up.  This will use one-line?, but not check to see
 *   that it actually fits.  If you care about that, then you should check the
 *   return yourself.  It will, however, make an estimate of whether or not
 *   it will fit and if it clearly doesn't, it will return a nil.
 */
zprint.zprint.fzprint_map_two_up = (function zprint$zprint$fzprint_map_two_up(caller,p__31987,ind,commas_QMARK_,coll){
var map__31988 = p__31987;
var map__31988__$1 = (((((!((map__31988 == null))))?(((((map__31988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31988):map__31988);
var options = map__31988__$1;
var map__31989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31988__$1,caller);
var map__31989__$1 = (((((!((map__31989 == null))))?(((((map__31989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31989):map__31989);
var justify_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31989__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var force_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31989__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31988__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31988__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31988__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31988__$1,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892));
var caller_map = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var len = cljs.core.count(coll);
var justify_width = (cljs.core.truth_((function (){var and__4120__auto__ = justify_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(one_line_QMARK_);
} else {
return and__4120__auto__;
}
})())?zprint.zprint.fzprint_justify_width(caller,options,ind,coll):null);
var caller_options = (cljs.core.truth_(justify_width)?(options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller)):null);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: one-line?",new cljs.core.Keyword(null,"one-line?","one-line?",2055953111).cljs$core$IFn$_invoke$arity$1(options),"justify?:",justify_QMARK_], 0));
} else {
}

if(cljs.core.not((function (){var and__4120__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = force_nl_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return (len > (1));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var justify_width__$1 = justify_width;
var justify_options = (cljs.core.truth_(justify_width__$1)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,cljs.core.PersistentArrayMap.createAsIfByAssoc([caller,(function (){var G__31994 = new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243);
return (caller_options.cljs$core$IFn$_invoke$arity$1 ? caller_options.cljs$core$IFn$_invoke$arity$1(G__31994) : caller_options.call(null,G__31994));
})()])], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuning","tuning",-48660925),(function (){var G__31995 = new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675);
return (caller_options.cljs$core$IFn$_invoke$arity$1 ? caller_options.cljs$core$IFn$_invoke$arity$1(G__31995) : caller_options.call(null,G__31995));
})()], null)], 0)):options);
while(true){
var beginning_coll = cljs.core.butlast(coll);
var beginning_remaining = (cljs.core.truth_(one_line_QMARK_)?zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((width - ind),beginning_coll):true);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: remaining:",(width - ind),"beginning-remaining:",beginning_remaining], 0)):null);
var beginning = (cljs.core.truth_(beginning_remaining)?zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3(options,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(zprint.zprint.fzprint_two_up,caller,justify_options,ind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([commas_QMARK_,justify_width__$1,null], 0)),beginning_coll):null);
var beginning__$1 = (cljs.core.truth_(zprint.zprint.contains_nil_QMARK_(beginning))?null:beginning);
var end_coll = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(coll)], null);
var end_remaining = (cljs.core.truth_(one_line_QMARK_)?(function (){var and__4120__auto__ = beginning__$1;
if(cljs.core.truth_(and__4120__auto__)){
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((beginning_remaining - rightcnt),end_coll);
} else {
return and__4120__auto__;
}
})():true);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: beginning-remaining:",beginning_remaining,"rightcnt:",rightcnt,"end-remaining:",end_remaining], 0)):null);
var end = (cljs.core.truth_(end_remaining)?(function (){var temp__5457__auto__ = zprint.zprint.fzprint_two_up(caller,justify_options,ind,commas_QMARK_,justify_width__$1,new cljs.core.Keyword(null,"rightmost-pair","rightmost-pair",-39229380),cljs.core.first(end_coll));
if(cljs.core.truth_(temp__5457__auto__)){
var end_result = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_result], null);
} else {
return null;
}
})():null);
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(1)))?end:zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning__$1,end], 0))
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: len:",len,"(nil? end):",(end == null),"end:",end,"(nil? beginning):",(beginning__$1 == null),"beginning:",beginning__$1,"(count end):",cljs.core.count(end),"(count beginnging):",cljs.core.count(beginning__$1),"justify-width:",justify_width__$1,"result:",result], 0));
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = result;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(justify_width__$1);
}
})())){
return result;
} else {
var G__32939 = null;
var G__32940 = options;
justify_width__$1 = G__32939;
justify_options = G__32940;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Do a key comparison that works well for numbers as well as
 *   strings.
 */
zprint.zprint.compare_keys = (function zprint$zprint$compare_keys(x,y){
if(((typeof x === 'number') && (typeof y === 'number'))){
return cljs.core.compare(x,y);
} else {
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));

}
});
/**
 * Do a key comparison that places ordered keys first.
 */
zprint.zprint.compare_ordered_keys = (function zprint$zprint$compare_ordered_keys(key_value,zdotdotdot,x,y){
if(cljs.core.truth_((function (){var and__4120__auto__ = (key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x));
if(cljs.core.truth_(and__4120__auto__)){
return (key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.compare((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x)),(key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y)));
} else {
if(cljs.core.truth_((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x)))){
return (-1);
} else {
if(cljs.core.truth_((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y)))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zdotdotdot,x)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zdotdotdot,y)){
return (-1);
} else {
return zprint.zprint.compare_keys(x,y);

}
}
}
}
}
});
/**
 * A variety of sorting and ordering options for the output of
 *   partition-all-2-nc.  It can sort, which is the default, but if
 *   the caller has a key-order vector, it will extract any keys in
 *   that vector and place them first (in order) before sorting the
 *   other keys.  If sorting is not called for, does nothing.
 */
zprint.zprint.order_out = (function zprint$zprint$order_out(caller,p__31998,access,out){
var map__31999 = p__31998;
var map__31999__$1 = (((((!((map__31999 == null))))?(((((map__31999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31999):map__31999);
var options = map__31999__$1;
var map__32000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31999__$1,caller);
var map__32000__$1 = (((((!((map__32000 == null))))?(((((map__32000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32000):map__32000);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32000__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32000__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var key_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32000__$1,new cljs.core.Keyword(null,"key-order","key-order",-356936372));
var key_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32000__$1,new cljs.core.Keyword(null,"key-value","key-value",-34906839));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31999__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_((function (){var and__4120__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((function (map__31999,map__31999__$1,options,map__32000,map__32000__$1,sort_QMARK_,sort_in_code_QMARK_,key_order,key_value,in_code_QMARK_){
return (function (p1__31996_SHARP_,p2__31997_SHARP_){
var G__32004 = (function (){var G__32006 = (access.cljs$core$IFn$_invoke$arity$1 ? access.cljs$core$IFn$_invoke$arity$1(p1__31996_SHARP_) : access.call(null,p1__31996_SHARP_));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__32006) : zprint.zfns.zsexpr.call(null,G__32006));
})();
var G__32005 = (function (){var G__32007 = (access.cljs$core$IFn$_invoke$arity$1 ? access.cljs$core$IFn$_invoke$arity$1(p2__31997_SHARP_) : access.call(null,p2__31997_SHARP_));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__32007) : zprint.zfns.zsexpr.call(null,G__32007));
})();
var fexpr__32003 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.compare_ordered_keys,(function (){var or__4131__auto__ = key_value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)));
return (fexpr__32003.cljs$core$IFn$_invoke$arity$2 ? fexpr__32003.cljs$core$IFn$_invoke$arity$2(G__32004,G__32005) : fexpr__32003.call(null,G__32004,G__32005));
});})(map__31999,map__31999__$1,options,map__32000,map__32000__$1,sort_QMARK_,sort_in_code_QMARK_,key_order,key_value,in_code_QMARK_))
,out);
} else {
return out;
}
});
/**
 * This checks to see if an element should be considered part of a
 *   pair if it comes between other elements, and a single element on
 *   its own if it would otherwise be the first part of a pair.  Mostly
 *   this will trigger on comments, but a #_(...) element will also
 *   trigger this.
 */
zprint.zprint.pair_element_QMARK_ = (function zprint$zprint$pair_element_QMARK_(zloc){
var or__4131__auto__ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (zprint.zfns.zuneval_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zuneval_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zuneval_QMARK_.call(null,zloc));
}
});
/**
 * This checks to see if an element should be considered the middle element
 *   of a pair.  At some point, we can expand this, but for now there is only
 *   one middle element.
 */
zprint.zprint.middle_element_QMARK_ = (function zprint$zprint$middle_element_QMARK_(p__32008,zloc){
var map__32009 = p__32008;
var map__32009__$1 = (((((!((map__32009 == null))))?(((((map__32009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32009):map__32009);
var options = map__32009__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32009__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_code_QMARK_,"condp")){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),":>>");
} else {
return null;
}
});
/**
 * If given a non-collection, simply does a dissoc of the key, but
 *   if given a sequence of keys, will remove the final one.
 */
zprint.zprint.remove_key_seq = (function zprint$zprint$remove_key_seq(m,ks){
if(cljs.core.coll_QMARK_(ks)){
var this_key = cljs.core.first(ks);
var next_key = cljs.core.next(ks);
if(next_key){
var removed_map = (function (){var G__32011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,this_key);
var G__32012 = cljs.core.next(ks);
return (zprint.zprint.remove_key_seq.cljs$core$IFn$_invoke$arity$2 ? zprint.zprint.remove_key_seq.cljs$core$IFn$_invoke$arity$2(G__32011,G__32012) : zprint.zprint.remove_key_seq.call(null,G__32011,G__32012));
})();
if(cljs.core.empty_QMARK_(removed_map)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,this_key);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,this_key,removed_map);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,this_key);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,ks);
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map, and terminate the reduce if it changes
 *   the map.
 */
zprint.zprint.ignore_key_seq_silent = (function zprint$zprint$ignore_key_seq_silent(m,ks){
if(cljs.core.coll_QMARK_(ks)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return zprint.zprint.remove_key_seq(m,ks);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,ks);
}
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map leaving behind a key :zprint-ignored, 
 *   and terminate the reduce if it changes the map.
 */
zprint.zprint.ignore_key_seq = (function zprint$zprint$ignore_key_seq(m,ks){
if(cljs.core.coll_QMARK_(ks)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc_in(m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
}
});
/**
 * Take a map and remove any of the key sequences specified from it.
 *   Note that this only works for sexpressions, not for actual zippers.
 */
zprint.zprint.map_ignore = (function zprint$zprint$map_ignore(caller,p__32013,zloc){
var map__32014 = p__32013;
var map__32014__$1 = (((((!((map__32014 == null))))?(((((map__32014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32014):map__32014);
var options = map__32014__$1;
var map__32015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014__$1,caller);
var map__32015__$1 = (((((!((map__32015 == null))))?(((((map__32015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32015):map__32015);
var key_ignore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32015__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32015__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var ignored_silent = (cljs.core.truth_(key_ignore_silent)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zprint.ignore_key_seq_silent,zloc,key_ignore_silent):zloc);
var ignored = (cljs.core.truth_(key_ignore)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zprint.ignore_key_seq,ignored_silent,key_ignore):ignored_silent);
return ignored;
});
/**
 * Input is (zseqnws zloc) where one assumes that these are pairs.
 *   Thus, a seq of zlocs.  Output is a sequence of seqs, where the
 *   seqs are usually pairs, but might be single things.  Doesn't pair
 *   up comments or #_(...) unevaled sexpressions.  The ones before
 *   the first part of a pair come as a single element in what would
 *   usually be a pair, and the ones between the first and second parts
 *   of a pair come inside the pair.  There may be an arbitrary number
 *   of elements between the first and second elements of the pair
 *   (one per line).  If there are any comments or unevaled sexpressions,
 *   don't sort the keys, as we might lose track of where the comments
 *   or unevaled s-expressions go.
 */
zprint.zprint.partition_all_2_nc = (function zprint$zprint$partition_all_2_nc(p__32019,coll){
var map__32020 = p__32019;
var map__32020__$1 = (((((!((map__32020 == null))))?(((((map__32020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32020):map__32020);
var options = map__32020__$1;
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32020__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
var remaining = coll;
var no_sort_QMARK_ = null;
var index = (0);
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.not(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [no_sort_QMARK_,cljs.core.persistent_BANG_(out)], null);
} else {
var vec__32030 = (cljs.core.truth_(zprint.zprint.pair_element_QMARK_(cljs.core.first(remaining)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),true], null):(cljs.core.truth_((function (){var or__4131__auto__ = zprint.zprint.pair_element_QMARK_(cljs.core.second(remaining));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zprint.middle_element_QMARK_(options,cljs.core.second(remaining));
}
})())?(function (){var vec__32033 = cljs.core.split_with(((function (remaining,no_sort_QMARK_,index,out,map__32020,map__32020__$1,options,max_length){
return (function (p1__32018_SHARP_){
var or__4131__auto__ = zprint.zprint.pair_element_QMARK_(p1__32018_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zprint.middle_element_QMARK_(options,p1__32018_SHARP_);
}
});})(remaining,no_sort_QMARK_,index,out,map__32020,map__32020__$1,options,max_length))
,cljs.core.next(remaining));
var comment_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32033,(0),null);
var rest_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32033,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(rest_seq),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),comment_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rest_seq)], null)], 0))),true], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(remaining),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),null], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(cljs.core.next(remaining)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining),cljs.core.second(remaining)], null),null], null)
)));
var new_remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32030,(0),null);
var pair_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32030,(1),null);
var new_no_sort_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32030,(2),null);
var G__33000 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,max_length))?new_remaining:(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null)));
var G__33001 = (function (){var or__4131__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new_no_sort_QMARK_;
}
})();
var G__33002 = (index + (1));
var G__33003 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,pair_vec);
remaining = G__33000;
no_sort_QMARK_ = G__33001;
index = G__33002;
out = G__33003;
continue;
}
break;
}
}
});
/**
 * Take a seq, and if it is contains a single symbol, simply return
 *   it in another seq.  If it contains something else, remove any non
 *   collections off of the end and return them in their own double seqs,
 *   as well as return the remainder (the beginning) as a double seq.
 */
zprint.zprint.cleave_end = (function zprint$zprint$cleave_end(coll){
if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var G__32038 = cljs.core.first(coll);
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32038) : zprint.zfns.zsymbol_QMARK_.call(null,G__32038));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__32039 = cljs.core.first(coll);
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32039) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,G__32039));
}
})())){
return (new cljs.core.List(null,coll,null,(1),null));
} else {
var rev_seq = cljs.core.reverse(coll);
var vec__32040 = cljs.core.split_with(((function (rev_seq){
return (function (p1__32036_SHARP_){
return cljs.core.not((function (){var or__4131__auto__ = (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32036_SHARP_) : zprint.zfns.zcoll_QMARK_.call(null,p1__32036_SHARP_));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (zprint.zfns.zreader_cond_w_coll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_coll_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32036_SHARP_) : zprint.zfns.zreader_cond_w_coll_QMARK_.call(null,p1__32036_SHARP_));
}
})());
});})(rev_seq))
,rev_seq);
var split_non_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,(1),null);
var split_non_coll__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.reverse(split_non_coll));
var remainder = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(coll) - cljs.core.count(split_non_coll__$1)),coll);
if(cljs.core.empty_QMARK_(remainder)){
return split_non_coll__$1;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,remainder,null,(1),null)),split_non_coll__$1);
}
}
});
/**
 * Similar to partition-all-2-nc, but instead of trying to pair things
 *   up (modulo comments and unevaled expressions), this begins things
 *   with a symbol, and then accumulates collections until the next symbol.
 *   Returns a seq of seqs, where the first thing in each internal seq is
 *   a protocol and the remaining thing in that seq are the expressions that
 *   follow.  If there is a single thing, it is returned in its own internal
 *   seq. ((P (foo [this a) (bar-me [this] b) (barx [this y] (+ c y))) ...)
 *   Made harder by the fact that the symbol might be inside of a #?() reader
 *   conditional.  It handles comments before symbols on the symbol indent, 
 *   and the comments before the collections on the collection indent.  
 *   Since it doesn't know how many collections there are, this is not trivial.  
 *   Must be called with a sequence of z-things
 */
zprint.zprint.partition_all_sym = (function zprint$zprint$partition_all_sym(options,modifier_set,coll){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"partition-all-sym: coll:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,coll)], 0));
} else {
}

var part_sym = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__32044_SHARP_){
var or__4131__auto__ = (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32044_SHARP_) : zprint.zfns.zsymbol_QMARK_.call(null,p1__32044_SHARP_));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32044_SHARP_) : zprint.zfns.znil_QMARK_.call(null,p1__32044_SHARP_));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32044_SHARP_) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,p1__32044_SHARP_));
}
}
}),coll);
var split_non_coll = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(zprint.zprint.cleave_end,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([part_sym], 0));
var remaining = split_non_coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return cljs.core.persistent_BANG_(out);
} else {
var vec__32062 = (cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = (function (){var G__32071 = cljs.core.ffirst(remaining);
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32071) : zprint.zfns.zsymbol_QMARK_.call(null,G__32071));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__32073 = cljs.core.ffirst(remaining);
return (zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32073) : zprint.zfns.znil_QMARK_.call(null,G__32073));
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var G__32074 = cljs.core.ffirst(remaining);
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32074) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,G__32074));
}
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core.empty_QMARK_(cljs.core.second(remaining))));
} else {
return and__4120__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(remaining)),(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext(remaining,(2)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),cljs.core.second(remaining)))], null):(cljs.core.truth_((function (){var and__4120__auto__ = modifier_set;
if(cljs.core.truth_(and__4120__auto__)){
var G__32075 = (function (){var G__32076 = cljs.core.ffirst(remaining);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32076) : zprint.zfns.zstring.call(null,G__32076));
})();
return (modifier_set.cljs$core$IFn$_invoke$arity$1 ? modifier_set.cljs$core$IFn$_invoke$arity$1(G__32075) : modifier_set.call(null,G__32075));
} else {
return and__4120__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(remaining)),(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext(remaining,(2)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),cljs.core.second(remaining)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.next(cljs.core.next(cljs.core.first(remaining))))?cljs.core.cons(cljs.core.next(cljs.core.next(cljs.core.first(remaining))),cljs.core.next(remaining)):cljs.core.next(remaining)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(new cljs.core.List(null,cljs.core.ffirst(remaining),(new cljs.core.List(null,cljs.core.second(cljs.core.first(remaining)),null,(1),null)),(2),null)))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons(cljs.core.next(cljs.core.first(remaining)),cljs.core.next(remaining)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(new cljs.core.List(null,cljs.core.ffirst(remaining),null,(1),null)))], null))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(remaining))], null)
);
var next_remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32062,(0),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32062,(1),null);
var G__33059 = next_remaining;
var G__33060 = new_out;
remaining = G__33059;
out = G__33060;
continue;
}
break;
}
});
/**
 * Create an r-str-vec with, possibly, a newline at the beginning if
 *   the last thing before it is a comment.
 */
zprint.zprint.rstr_vec = (function zprint$zprint$rstr_vec(var_args){
var G__32078 = arguments.length;
switch (G__32078) {
case 5:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc,r_str,r_type){
var nl = (cljs.core.truth_((function (){var G__32079 = (zprint.zfns.zlast.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlast.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zlast.call(null,zloc));
return (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32079) : zprint.zfns.zcomment_QMARK_.call(null,G__32079));
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null):null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_str,zprint.zprint.zcolor_map(options,(function (){var or__4131__auto__ = r_type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return r_str;
}
})()),(function (){var or__4131__auto__ = r_type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"right","right",-452581833);
}
})()], null)], null));
});

zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,r_str){
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5(options,ind,zloc,r_str,null);
});

zprint.zprint.rstr_vec.cljs$lang$maxFixedArity = 5;

zprint.zprint.fzprint_binding_vec = (function zprint$zprint$fzprint_binding_vec(p__32081,ind,zloc){
var map__32082 = p__32081;
var map__32082__$1 = (((((!((map__32082 == null))))?(((((map__32082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32082):map__32082);
var options = map__32082__$1;
var map__32084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32082__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var map__32084__$1 = (((((!((map__32084 == null))))?(((((map__32084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32084):map__32084);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32084__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-binding-vec:",(function (){var G__32089 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32089) : zprint.zfns.zstring.call(null,G__32089));
})()], 0));
} else {
}

var options__$1 = zprint.zprint.rightmost(options);
var l_str = "[";
var r_str = "]";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options__$1,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,(ind + (1)),zloc,r_str);
var value__31671__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)),(0)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0)):zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32091 = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(options__$1);
var G__32092 = (ind + (1));
var G__32093 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"binding","binding",539932593),options__$1,(ind + (1)),false,cljs.core.second(zprint.zprint.partition_all_2_nc(options__$1,(zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zseqnws.call(null,zloc)))));
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__32091,G__32092,G__32093) : zprint.zprint.interpose_nl_hf.call(null,G__32091,G__32092,G__32093));
})(),r_str_vec], 0)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-binding-vec exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__31671__auto__], 0))], 0));
} else {
}

return value__31671__auto__;
});
/**
 * Try to hang something and try to flow it, and then see which is
 *   better.  Has hang and flow indents. fzfn is the function to use 
 *   to do zloc.  Note what fzfn does with the input.  For instance,
 *   fzprint-pairs does a (zmap-right identity zloc).  Presumably the
 *   caller knows what the fzfn does, so it has to count the items
 *   itself and pass it in here as zloc-count if it isn't just (zcount zloc).
 */
zprint.zprint.fzprint_hang = (function zprint$zprint$fzprint_hang(p__32099,caller,hindent,findent,fzfn,zloc_count,zloc){
var map__32101 = p__32099;
var map__32101__$1 = (((((!((map__32101 == null))))?(((((map__32101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32101):map__32101);
var options = map__32101__$1;
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32101__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang:",(function (){var G__32104 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32104) : zprint.zfns.zstring.call(null,G__32104));
})(),"caller:",caller], 0));
} else {
}

var hanging = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent);
if(and__4120__auto__){
var G__32108 = new cljs.core.Keyword(null,"hang?","hang?",-579442854);
var fexpr__32107 = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller));
return (fexpr__32107.cljs$core$IFn$_invoke$arity$1 ? fexpr__32107.cljs$core$IFn$_invoke$arity$1(G__32108) : fexpr__32107.call(null,G__32108));
} else {
return and__4120__auto__;
}
})())?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),(function (){var G__32109 = zprint.zprint.in_hang(options);
var G__32110 = hindent;
var G__32111 = zloc;
return (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(G__32109,G__32110,G__32111) : fzfn.call(null,G__32109,G__32110,G__32111));
})()], 0)):null);
var hang_count = (function (){var or__4131__auto__ = zloc_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
}
})();
var hr_lines = zprint.zprint.style_lines(options,(hindent - (1)),hanging);
if(cljs.core.truth_((function (){var or__4131__auto__ = zprint.zprint.fzfit_one_line(options,hr_lines);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging;
} else {
var flow = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : fzfn.call(null,options,findent,zloc))], 0));
var _ = zprint.zprint.log_lines(options,"fzprint-hang: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines(options,findent,flow);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: ending: hang-count:",hang_count,"hanging:",hanging,"flow:",flow], 0)):null);
var hr_good_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options))))?zprint.zprint.good_enough_QMARK_(caller,options,new cljs.core.Keyword(null,"none-hang","none-hang",-1101780299),hang_count,(hindent - findent),hr_lines,fd_lines):null);
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging;
} else {
return flow;
}
}
});
/**
 * Always prints pairs on a different line from other pairs.
 */
zprint.zprint.fzprint_pairs = (function zprint$zprint$fzprint_pairs(p__32122,ind,zloc){
var map__32123 = p__32122;
var map__32123__$1 = (((((!((map__32123 == null))))?(((((map__32123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32123):map__32123);
var options = map__32123__$1;
var map__32124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32123__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var map__32124__$1 = (((((!((map__32124 == null))))?(((((map__32124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32124):map__32124);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32124__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs:",(function (){var G__32128 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32128) : zprint.zfns.zstring.call(null,G__32128));
})()], 0));
} else {
}

var value__31671__auto__ = (function (){var G__32131 = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options);
var G__32132 = ind;
var G__32133 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"pair","pair",-447516312),options,ind,false,(function (){var vec__32136 = zprint.zprint.partition_all_2_nc(options,(zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_right.call(null,cljs.core.identity,zloc)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32136,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32136,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: partition:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,cljs.core.first),part)], 0));
} else {
}

return part;
})());
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__32131,G__32132,G__32133) : zprint.zprint.interpose_nl_hf.call(null,G__32131,G__32132,G__32133));
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__31671__auto__], 0))], 0));
} else {
}

return value__31671__auto__;
});
/**
 * Print things with a symbol and collections following.  Kind of like with
 *   pairs, but not quite. This skips over zloc and does everything to the
 *   right of it!
 */
zprint.zprint.fzprint_extend = (function zprint$zprint$fzprint_extend(p__32147,ind,zloc){
var map__32148 = p__32147;
var map__32148__$1 = (((((!((map__32148 == null))))?(((((map__32148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32148):map__32148);
var options = map__32148__$1;
var map__32149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32148__$1,new cljs.core.Keyword(null,"extend","extend",1836484006));
var map__32149__$1 = (((((!((map__32149 == null))))?(((((map__32149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32149):map__32149);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32149__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend:",(function (){var G__32153 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32153) : zprint.zfns.zstring.call(null,G__32153));
})()], 0));
} else {
}

var value__31671__auto__ = (function (){var G__32154 = new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options);
var G__32155 = ind;
var G__32156 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"extend","extend",1836484006),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)),ind,false,(function (){var part = zprint.zprint.partition_all_sym(options,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options)),(zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_right.call(null,cljs.core.identity,zloc)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: partition:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (part,G__32154,G__32155,map__32148,map__32148__$1,options,map__32149,map__32149__$1,nl_separator_QMARK_){
return (function (p1__32142_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,p1__32142_SHARP_);
});})(part,G__32154,G__32155,map__32148,map__32148__$1,options,map__32149,map__32149__$1,nl_separator_QMARK_))
,part)], 0));
} else {
}

return part;
})());
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__32154,G__32155,G__32156) : zprint.zprint.interpose_nl_hf.call(null,G__32154,G__32155,G__32156));
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__31671__auto__], 0))], 0));
} else {
}

return value__31671__auto__;
});
/**
 * Given a transient vector v, concatenate all of the other
 *   elements in all of the remaining collections onto v.
 */
zprint.zprint.concatv_BANG_ = (function zprint$zprint$concatv_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33117 = arguments.length;
var i__4731__auto___33118 = (0);
while(true){
if((i__4731__auto___33118 < len__4730__auto___33117)){
args__4736__auto__.push((arguments[i__4731__auto___33118]));

var G__33119 = (i__4731__auto___33118 + (1));
i__4731__auto___33118 = G__33119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (v,rest){
var cols = rest;
var out = v;
while(true){
if(cljs.core.truth_(cols)){
var G__33120 = cljs.core.next(cols);
var G__33121 = (function (){var col = cljs.core.first(cols);
var out__$1 = out;
while(true){
if(cljs.core.truth_(col)){
var G__33122 = cljs.core.next(col);
var G__33123 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out__$1,cljs.core.first(col));
col = G__33122;
out__$1 = G__33123;
continue;
} else {
return out__$1;
}
break;
}
})();
cols = G__33120;
out = G__33121;
continue;
} else {
return out;
}
break;
}
});

zprint.zprint.concatv_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.zprint.concatv_BANG_.cljs$lang$applyTo = (function (seq32159){
var G__32160 = cljs.core.first(seq32159);
var seq32159__$1 = cljs.core.next(seq32159);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32160,seq32159__$1);
});

/**
 * Do a fzprint-seq like thing, but do it incrementally and
 *   if it gets too big, return nil.
 */
zprint.zprint.fzprint_one_line = (function zprint$zprint$fzprint_one_line(options,ind,zloc){
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-one-line:"], 0));
} else {
}

var seq_right = (zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc));
var len = cljs.core.count(seq_right);
var last_index = (len - (1));
var gt_1_QMARK_ = (cljs.core.count(seq_right) > (1));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true);
var zloc_seq = seq_right;
var new_ind = cljs.core.long$(ind);
var index = (0);
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(zloc_seq)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: exiting count:",cljs.core.count(out)], 0));
} else {
}

return cljs.core.persistent_BANG_(out);
} else {
var next_zloc = cljs.core.first(zloc_seq);
var vec__32171 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!((index === (0)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null):null),options__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,zprint.zprint.not_rightmost(options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),zprint.zprint.not_rightmost(options__$1)], null)
));
var sep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171,(0),null);
var next_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32171,(1),null);
var next_out = (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(next_options,new_ind,next_zloc) : zprint.zprint.fzprint_STAR_.call(null,next_options,new_ind,next_zloc));
var _ = zprint.zprint.log_lines(options__$1,"fzprint-one-line:",new_ind,next_out);
var vec__32174 = zprint.zprint.style_lines(options__$1,new_ind,next_out);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32174,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32174,(1),null);
var next_lines = vec__32174;
if((!(zprint.zprint.fzfit_one_line(next_options,next_lines)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: failed, too wide or too many lines!"], 0));
} else {
}

return null;
} else {
var G__33124 = cljs.core.next(zloc_seq);
var G__33125 = (cljs.core.long$(max_width) + (1));
var G__33126 = (index + (1));
var G__33127 = zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep,next_out], 0));
zloc_seq = G__33124;
new_ind = G__33125;
index = G__33126;
out = G__33127;
continue;
}
}
break;
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc) when zloc
 *   is a collection, or (zmap-right identity zloc) when zloc is already
 *   inside of a collection, and return a seq of the fzprint* of each 
 *   element.  No spacing between any of these elements. Note that this
 *   is not a style-vec, but a seq of style-vecs of each of the elements.
 *   These would need to be concatenated together to become a style-vec.
 *   ind is either a constant or a seq of indents, one for each element in
 *   zloc-seq.
 */
zprint.zprint.fzprint_seq = (function zprint$zprint$fzprint_seq(p__32181,ind,zloc_seq){
var map__32182 = p__32181;
var map__32182__$1 = (((((!((map__32182 == null))))?(((((map__32182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32182):map__32182);
var options = map__32182__$1;
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32182__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var len = cljs.core.count(zloc_seq);
var zloc_seq__$1 = (((len > max_length))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_length,zloc_seq),(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null))):zloc_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-seq: (count zloc-seq):",len], 0));
} else {
}

if(cljs.core.empty_QMARK_(zloc_seq__$1)){
return null;
} else {
var left = zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4(options,((function (len,zloc_seq__$1,map__32182,map__32182__$1,options,max_length){
return (function (p1__32179_SHARP_,p2__32180_SHARP_){
var G__32184 = zprint.zprint.not_rightmost(options);
var G__32185 = p1__32179_SHARP_;
var G__32186 = p2__32180_SHARP_;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32184,G__32185,G__32186) : zprint.zprint.fzprint_STAR_.call(null,G__32184,G__32185,G__32186));
});})(len,zloc_seq__$1,map__32182,map__32182__$1,options,max_length))
,((cljs.core.coll_QMARK_(ind))?ind:cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ind)),cljs.core.butlast(zloc_seq__$1));
var right = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32187 = options;
var G__32188 = ((cljs.core.coll_QMARK_(ind))?cljs.core.last(ind):ind);
var G__32189 = cljs.core.last(zloc_seq__$1);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32187,G__32188,G__32189) : zprint.zprint.fzprint_STAR_.call(null,G__32187,G__32188,G__32189));
})()], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(1))){
return right;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left,right], 0));

}
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc) or
 *   and return a style-vec of the result.  Either it fits on one line, 
 *   or it is rendered on multiple lines.  You can force multiple lines 
 *   with force-nl?. If you want it to do less than everything in the 
 *   original zloc, modify the result of (zmap identity zloc) to just 
 *   contain what you want to print. ind is either a single indent,
 *   or a seq of indents, one for each element in zloc-seq.
 */
zprint.zprint.fzprint_flow_seq = (function zprint$zprint$fzprint_flow_seq(var_args){
var G__32192 = arguments.length;
switch (G__32192) {
case 4:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc_seq,force_nl_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: count zloc-seq:",cljs.core.count(zloc_seq)], 0));
} else {
}

var coll_print = zprint.zprint.fzprint_seq(options,ind,zloc_seq);
var one_line = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),coll_print));
var _ = zprint.zprint.log_lines(options,"fzprint-flow-seq:",ind,one_line);
var one_line_lines = zprint.zprint.style_lines(options,ind,one_line);
var value__31671__auto__ = ((((cljs.core.not(force_nl_QMARK_)) && (zprint.zprint.fzfit_one_line(options,one_line_lines))))?one_line:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,((cljs.core.coll_QMARK_(ind))?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll_print,one_line,_,one_line_lines){
return (function (p1__32190_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(p1__32190_SHARP_))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)],null));
});})(coll_print,one_line,_,one_line_lines))
,ind),coll_print)):cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),coll_print))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__31671__auto__], 0))], 0));
} else {
}

return value__31671__auto__;
});

zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc_seq){
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4(options,ind,zloc_seq,null);
});

zprint.zprint.fzprint_flow_seq.cljs$lang$maxFixedArity = 4;

/**
 * Try out the given zloc, and if it fits on the current line, just
 *   do that. It might fit on the same line, as this may not be the rest
 *   of the list that we are printing. If not, check it out with good-enough?
 *   and do the best you can.  Three choices, really: fits on same line, 
 *   does ok as hanging, or better with flow. hindent is hang-indent, and 
 *   findent is flow-indent, and each contains the initial separator.  
 *   Might be nice if the fn-style actually got sent to this fn.
 */
zprint.zprint.fzprint_hang_one = (function zprint$zprint$fzprint_hang_one(caller,p__32199,hindent,findent,zloc){
var map__32200 = p__32199;
var map__32200__$1 = (((((!((map__32200 == null))))?(((((map__32200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32200):map__32200);
var options = map__32200__$1;
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32200__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hindent:",hindent,"findent:",findent], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"h1 caller:",caller,(function (){var G__32202 = (cljs.core.truth_((zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcoll_QMARK_.call(null,zloc)))?(zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc)):zloc);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32202) : zprint.zfns.zstring.call(null,G__32202));
})()], 0));
} else {
}

var local_options = ((((cljs.core.not(one_line_QMARK_)) && (cljs.core.not(new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var hanging = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent))?(function (){var G__32203 = zprint.zprint.in_hang(local_options);
var G__32204 = hindent;
var G__32205 = zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32203,G__32204,G__32205) : zprint.zprint.fzprint_STAR_.call(null,G__32203,G__32204,G__32205));
})():null);
var hang_count = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
var hanging__$1 = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging], 0));
var _ = zprint.zprint.log_lines(options,"fzprint-hang-one: hanging:",(hindent - (1)),hanging__$1);
var hr_lines = zprint.zprint.style_lines(options,(hindent - (1)),hanging__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hr-lines:",hr_lines,"hang-count:",hang_count], 0));
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = zprint.zprint.fzfit_one_line(options,hr_lines);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : zprint.zprint.fzprint_STAR_.call(null,options,findent,zloc))], 0));
var ___$1 = zprint.zprint.log_lines(options,"fzprint-hang-one: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines(options,findent,flow);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: fd-lines:",fd_lines], 0)):null);
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: ending: hang-count:",hang_count,"hanging:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hanging__$1], 0)),"flow:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([flow], 0))], 0)):null);
var hr_good_QMARK_ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
if(cljs.core.truth_(and__4120__auto__)){
return zprint.zprint.good_enough_QMARK_(caller,options,new cljs.core.Keyword(null,"none-hang-one","none-hang-one",-1392848107),hang_count,(hindent - findent),hr_lines,fd_lines);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Given a seq of zlocs, work backwards from the end, and see how
 *   many elements are pairs of constants (using zconstant?).  So that
 *   (... :a (stuff) :b (bother)) returns 4, since both :a and :b are
 *   zconstant? true. This is made more difficult by having to skip
 *   comments along the way as part of the pair check, but keep track
 *   of the ones we skip so the count is right in the end.  We don't
 *   expect any whitespace in this, because this seq should have been
 *   produced by zmap-right or its equivalent, which already skips the
 *   whitespace.
 */
zprint.zprint.count_constant_pairs = (function zprint$zprint$count_constant_pairs(seq_right){
var seq_right_rev = cljs.core.reverse(seq_right);
var element_count = (0);
var constant_required_QMARK_ = null;
var pair_size = (0);
while(true){
var element = cljs.core.first(seq_right_rev);
if(cljs.core.empty_QMARK_(seq_right_rev)){
return (element_count - pair_size);
} else {
var comment_QMARK_ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zcomment_QMARK_.call(null,element));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(comment_QMARK_);
if(and__4120__auto__){
var and__4120__auto____$1 = constant_required_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not((zprint.zfns.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zconstant_QMARK_.call(null,element)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return (element_count - pair_size);
} else {
var G__33135 = cljs.core.next(seq_right_rev);
var G__33136 = (element_count + (1));
var G__33137 = (cljs.core.truth_(comment_QMARK_)?constant_required_QMARK_:cljs.core.not(constant_required_QMARK_));
var G__33138 = (cljs.core.truth_((function (){var and__4120__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(comment_QMARK_);
} else {
return and__4120__auto__;
}
})())?(0):(pair_size + (1)));
seq_right_rev = G__33135;
element_count = G__33136;
constant_required_QMARK_ = G__33137;
pair_size = G__33138;
continue;
}
}
break;
}
});
/**
 * Argument is result of (zmap-right identity zloc), that is to say
 *   a seq of zlocs.  Output is a [pair-seq non-paired-item-count],
 *   if any.  If there are no pair-seqs, pair-seq must be nil, not
 *   an empty seq.
 */
zprint.zprint.constant_pair = (function zprint$zprint$constant_pair(caller,p__32206,seq_right){
var map__32207 = p__32206;
var map__32207__$1 = (((((!((map__32207 == null))))?(((((map__32207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32207):map__32207);
var options = map__32207__$1;
var map__32208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32207__$1,caller);
var map__32208__$1 = (((((!((map__32208 == null))))?(((((map__32208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32208):map__32208);
var constant_pair_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32208__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32208__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
if(cljs.core.truth_(constant_pair_QMARK_)){
var paired_item_count = zprint.zprint.count_constant_pairs(seq_right);
var non_paired_item_count = (cljs.core.count(seq_right) - paired_item_count);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"constant-pair: non-paired-items:",non_paired_item_count], 0)):null);
var pair_seq = (((paired_item_count >= constant_pair_min))?cljs.core.second(zprint.zprint.partition_all_2_nc(options,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,seq_right))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair_seq,non_paired_item_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.count(seq_right)], null);
}
});
/**
 * zloc is already down inside a collection, it is not the collection
 *   itself. Operate on what is to the right of zloc.  We already know
 *   that the given zloc won't fit on the current line. [Besides, we
 *   ensure that if there are two things remaining anyway. ???] So
 *   now, try hanging and see if that is better than flow.  Unless
 *   :hang? is nil, in which case we will just flow.  hindent is
 *   hang-indent, and findent is flow-indent. This should never be
 *   called with :one-line because this is only called from fzprint-list*
 *   after the one-line processing is done. If the hindent equals the
 *   flow indent, then just do flow.  Do only zloc-count non-whitespace
 *   elements of zloc.
 */
zprint.zprint.fzprint_hang_remaining = (function zprint$zprint$fzprint_hang_remaining(var_args){
var G__32219 = arguments.length;
switch (G__32219) {
case 7:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__32220,hindent,findent,zloc,fn_style,zloc_count){
var map__32221 = p__32220;
var map__32221__$1 = (((((!((map__32221 == null))))?(((((map__32221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32221):map__32221);
var options = map__32221__$1;
var map__32222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32221__$1,caller);
var map__32222__$1 = (((((!((map__32222 == null))))?(((((map__32222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32222):map__32222);
var hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var constant_pair_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
var hang_avoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var hang_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32221__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32221__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"hr",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"hindent:",hindent,"findent:",findent,"caller:",caller,"nl-separator?:",nl_separator_QMARK_], 0));
} else {
}

var seq_right = (zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_right.call(null,cljs.core.identity,zloc));
var seq_right__$1 = (cljs.core.truth_(zloc_count)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(zloc_count,seq_right):seq_right);
var vec__32228 = zprint.zprint.constant_pair(caller,options,seq_right__$1);
var pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32228,(0),null);
var non_paired_item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32228,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining count pair-seq:",cljs.core.count(pair_seq)], 0)):null);
var flow = (function (){var flow_result = ((cljs.core.not(pair_seq))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_seq(options,findent,seq_right__$1))):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3(options,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.fzprint_STAR_,zprint.zprint.not_rightmost(options),findent),cljs.core.take.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,seq_right__$1)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(function (){var G__32237 = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options);
var G__32238 = findent;
var G__32239 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"pair","pair",-447516312),options,findent,null,pair_seq);
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__32237,G__32238,G__32239) : zprint.zprint.interpose_nl_hf.call(null,G__32237,G__32238,G__32239));
})()], 0)):(function (){var G__32240 = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options);
var G__32241 = findent;
var G__32242 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"pair","pair",-447516312),options,findent,null,pair_seq);
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__32240,G__32241,G__32242) : zprint.zprint.interpose_nl_hf.call(null,G__32240,G__32241,G__32242));
})()));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_result,zprint.zprint.style_lines(options,findent,flow_result)], null);
})();
var hang_QMARK___$1 = (function (){var and__4120__auto__ = hang_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent)) && (((cljs.core.not(hang_avoid)) || ((cljs.core.count(seq_right__$1) < ((width - hindent) * hang_avoid))))));
} else {
return and__4120__auto__;
}
})();
var hanging = (function (){var hang_result = (cljs.core.truth_(hang_QMARK___$1)?((cljs.core.not(pair_seq))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(hindent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_seq(zprint.zprint.in_hang(options),hindent,seq_right__$1))):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var value__31671__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(hindent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3(options,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.fzprint_STAR_,zprint.zprint.not_rightmost(zprint.zprint.in_hang(options)),hindent),cljs.core.take.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,seq_right__$1))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: mapv:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__31671__auto__], 0))], 0));
} else {
}

return value__31671__auto__;
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(hindent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(function (){var value__31671__auto__ = (function (){var G__32243 = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options);
var G__32244 = hindent;
var G__32245 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"pair","pair",-447516312),zprint.zprint.in_hang(options),hindent,null,pair_seq);
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__32243,G__32244,G__32245) : zprint.zprint.interpose_nl_hf.call(null,G__32243,G__32244,G__32245));
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: fzprint-hang:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__31671__auto__], 0))], 0));
} else {
}

return value__31671__auto__;
})()], 0)):(function (){var G__32246 = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options);
var G__32247 = hindent;
var G__32248 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"pair","pair",-447516312),zprint.zprint.in_hang(options),hindent,null,pair_seq);
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__32246,G__32247,G__32248) : zprint.zprint.interpose_nl_hf.call(null,G__32246,G__32247,G__32248));
})())):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_result,zprint.zprint.style_lines(options,hindent,hang_result)], null);
})();
var vec__32231 = zprint.zprint.zat(options,flow);
var flow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32231,(0),null);
var flow_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32231,(1),null);
var vec__32234 = zprint.zprint.zat(options,hanging);
var hanging__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32234,(0),null);
var hanging_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32234,(1),null);
var hang_count = cljs.core.count(seq_right__$1);
var ___$1 = zprint.zprint.log_lines(options,"fzprint-hang-remaining: hanging:",hindent,hanging__$1);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: hanging-lines:",hanging_lines,"hang-count:",hang_count], 0)):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: flow-lines:",flow_lines], 0));
} else {
}

if(cljs.core.truth_(dbg_QMARK_)){
if((hang_count === (0))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hang-count = 0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc) : zprint.zfns.zmap_right.call(null,zprint.zfns.zstring,zloc)))], 0));
} else {
}
} else {
}

zprint.zprint.log_lines(options,"fzprint-hang-remaining: flow",findent,flow__$1);

if(cljs.core.truth_(flow_lines)){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_(caller,options,fn_style,hang_count,(hindent - findent),hanging_lines,flow_lines))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging__$1], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),flow__$1], 0));
}
} else {
return null;
}
});

zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,hindent,findent,zloc,fn_style){
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7(caller,options,hindent,findent,zloc,fn_style,null);
});

zprint.zprint.fzprint_hang_remaining.cljs$lang$maxFixedArity = 7;

zprint.zprint.body_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null,new cljs.core.Keyword(null,"none-body","none-body",-171554854),null], null), null);
zprint.zprint.body_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null);
zprint.zprint.noarg1_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null], null), null);
zprint.zprint.noarg1_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)], null);
/**
 * Set noarg1 in the options if it is the right fn-type.
 */
zprint.zprint.noarg1 = (function zprint$zprint$noarg1(options,fn_type){
if(cljs.core.truth_((zprint.zprint.noarg1_set.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.noarg1_set.cljs$core$IFn$_invoke$arity$1(fn_type) : zprint.zprint.noarg1_set.call(null,fn_type)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430),true);
} else {
return options;
}
});
zprint.zprint.fn_style__GT_caller = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"pair","pair",-447516312)], null);
/**
 * Should we allow this function to print on a single line?
 */
zprint.zprint.allow_one_line_QMARK_ = (function zprint$zprint$allow_one_line_QMARK_(p__32254,len,fn_style){
var map__32255 = p__32254;
var map__32255__$1 = (((((!((map__32255 == null))))?(((((map__32255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32255):map__32255);
var options = map__32255__$1;
var fn_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32255__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var fn_gt2_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32255__$1,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537));
var fn_gt3_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32255__$1,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985));
return cljs.core.not((function (){var or__4131__auto__ = (fn_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_force_nl.call(null,fn_style));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = (len > (3));
if(and__4120__auto__){
return (fn_gt2_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_gt2_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_gt2_force_nl.call(null,fn_style));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var and__4120__auto__ = (len > (4));
if(and__4120__auto__){
return (fn_gt3_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_gt3_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_gt3_force_nl.call(null,fn_style));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var temp__5455__auto__ = (zprint.zprint.fn_style__GT_caller.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fn_style__GT_caller.cljs$core$IFn$_invoke$arity$1(fn_style) : zprint.zprint.fn_style__GT_caller.call(null,fn_style));
if(cljs.core.truth_(temp__5455__auto__)){
var future_caller = temp__5455__auto__;
var caller_map = (future_caller.cljs$core$IFn$_invoke$arity$1 ? future_caller.cljs$core$IFn$_invoke$arity$1(options) : future_caller.call(null,options));
var or__4131__auto____$3 = new cljs.core.Keyword(null,"flow?","flow?",96929057).cljs$core$IFn$_invoke$arity$1(caller_map);
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
return new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1(caller_map);
}
} else {
return null;
}
}
}
}
})());
});
/**
 * Print a list, which might be a list or an anon fn.  
 *   Lots of work to make a list look good, as that is typically code. 
 *   Presently all of the callers of this are :list.
 */
zprint.zprint.fzprint_list_STAR_ = (function zprint$zprint$fzprint_list_STAR_(caller,l_str,r_str,p__32262,ind,zloc){
var map__32263 = p__32262;
var map__32263__$1 = (((((!((map__32263 == null))))?(((((map__32263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32263):map__32263);
var options = map__32263__$1;
var map__32264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263__$1,caller);
var map__32264__$1 = (((((!((map__32264 == null))))?(((((map__32264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32264):map__32264);
var indent_arg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32264__$1,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32264__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var user_fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263__$1,new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var fn_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917));
var no_arg1_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263__$1,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430));
var fn_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var len = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
var l_str_len = cljs.core.count(l_str);
var arg_1_coll_QMARK_ = cljs.core.not((function (){var or__4131__auto__ = (function (){var G__32269 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32269) : zprint.zfns.zkeyword_QMARK_.call(null,G__32269));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__32270 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32270) : zprint.zfns.zsymbol_QMARK_.call(null,G__32270));
}
})());
var fn_str = (((!(arg_1_coll_QMARK_)))?(function (){var G__32271 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32271) : zprint.zfns.zstring.call(null,G__32271));
})():null);
var fn_style__$1 = (function (){var or__4131__auto__ = fn_style;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(fn_str) : fn_map.call(null,fn_str));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (user_fn_map.cljs$core$IFn$_invoke$arity$1 ? user_fn_map.cljs$core$IFn$_invoke$arity$1(fn_str) : user_fn_map.call(null,fn_str));
}
}
})();
var fn_style__$2 = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(fn_style__$1);
if(and__4120__auto__){
return fn_str;
} else {
return and__4120__auto__;
}
})())?(function (){var G__32273 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(fn_str,/\//));
return (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(G__32273) : fn_map.call(null,G__32273));
})():fn_style__$1);
var indent__$1 = (cljs.core.truth_((zprint.zprint.body_set.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.body_set.cljs$core$IFn$_invoke$arity$1(fn_style__$2) : zprint.zprint.body_set.call(null,fn_style__$2)))?indent:(function (){var or__4131__auto__ = indent_arg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return indent;
}
})());
var one_line_ok_QMARK_ = zprint.zprint.allow_one_line_QMARK_(options,len,fn_style__$2);
var fn_style__$3 = (function (){var or__4131__auto__ = (zprint.zprint.body_map.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.body_map.cljs$core$IFn$_invoke$arity$1(fn_style__$2) : zprint.zprint.body_map.call(null,fn_style__$2));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fn_style__$2;
}
})();
var fn_style__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$3,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?fn_style__$3:(((len < (3)))?null:fn_style__$3));
var fn_style__$5 = (cljs.core.truth_(no_arg1_QMARK_)?(function (){var or__4131__auto__ = (zprint.zprint.noarg1_map.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.noarg1_map.cljs$core$IFn$_invoke$arity$1(fn_style__$4) : zprint.zprint.noarg1_map.call(null,fn_style__$4));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fn_style__$4;
}
})():fn_style__$4);
var options__$1 = (cljs.core.truth_(no_arg1_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430)):options);
var indent_adj = (l_str_len - (1));
var default_indent = (cljs.core.truth_((function (){var G__32276 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32276) : zprint.zfns.zlist_QMARK_.call(null,G__32276));
})())?indent__$1:l_str_len);
var arg_1_indent = ((cljs.core.not((function (){var or__4131__auto__ = arg_1_coll_QMARK_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var G__32281 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32281) : zprint.zfns.zcomment_QMARK_.call(null,G__32281));
}
})()))?((ind + (l_str_len + (1))) + cljs.core.count(fn_str)):null);
var options__$2 = (((!(arg_1_coll_QMARK_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),fn_str):options__$1);
var options__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$2,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342),(cljs.core.long$((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()) + (1)));
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options__$3))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$3)),"fzs",fn_str], 0)):null);
var new_ind = (indent__$1 + ind);
var one_line_ind = (l_str_len + ind);
var options__$4 = (cljs.core.truth_(fn_style__$5)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$3,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917)):options__$3);
var loptions = zprint.zprint.not_rightmost(options__$4);
var roptions = options__$4;
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options__$4,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$4,(indent__$1 + ind),zloc,r_str);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint-list*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"fn-str",fn_str,"fn-style:",fn_style__$5,"ind:",ind,"indent:",indent__$1,"default-indent:",default_indent,"one-line-ok?",one_line_ok_QMARK_,"arg-1-coll?",arg_1_coll_QMARK_,"arg-1-indent:",arg_1_indent,"l-str:",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str),"'"].join(''),"indent-adj:",indent_adj,"len:",len,"one-line?:",one_line_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$4)], 0)):null);
var one_line = (((len === (0)))?new cljs.core.Keyword(null,"empty","empty",767870958):((one_line_ok_QMARK_)?zprint.zprint.fzprint_one_line(options__$4,one_line_ind,zloc):null));
if(cljs.core.truth_(one_line)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(one_line,new cljs.core.Keyword(null,"empty","empty",767870958))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line,r_str_vec], 0));
}
} else {
if(cljs.core.truth_(one_line_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint-list*:",fn_str," one-line did not work!!!"], 0));
} else {
return null;
}
} else {
if(cljs.core.truth_((cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint-list*: fn-style:",fn_style__$5], 0)):null))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(0))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(1))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32282 = roptions;
var G__32283 = one_line_ind;
var G__32284 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32282,G__32283,G__32284) : zprint.zprint.fzprint_STAR_.call(null,G__32282,G__32283,G__32284));
})(),r_str_vec], 0));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"binding","binding",539932593));
if(and__4120__auto__){
var G__32287 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32287) : zprint.zfns.zvector_QMARK_.call(null,G__32287));
} else {
return and__4120__auto__;
}
})())){
var vec__32288 = zprint.zprint.fzprint_hang_unless_fail(loptions,arg_1_indent,(indent__$1 + ind),zprint.zprint.fzprint_binding_vec,(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc)));
var hang_or_flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32288,(0),null);
var binding_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32288,(1),null);
var binding_style_vec__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),binding_style_vec], 0)):binding_style_vec);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32291 = loptions;
var G__32292 = (ind + (1));
var G__32293 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32291,G__32292,G__32293) : zprint.zprint.fzprint_STAR_.call(null,G__32291,G__32292,G__32293));
})(),binding_style_vec__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4(options__$4,(indent__$1 + ind),cljs.core.nthnext((zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc)),(2)),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32294 = loptions;
var G__32295 = (ind + (1));
var G__32296 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32294,G__32295,G__32296) : zprint.zprint.fzprint_STAR_.call(null,G__32294,G__32295,G__32296));
})(),zprint.zprint.fzprint_hang(options__$4,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),arg_1_indent,(indent__$1 + ind),zprint.zprint.fzprint_pairs,cljs.core.count((function (){var G__32297 = cljs.core.identity;
var G__32298 = (zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(0)) : zprint.zfns.znthnext.call(null,zloc,(0)));
return (zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_right.cljs$core$IFn$_invoke$arity$2(G__32297,G__32298) : zprint.zfns.zmap_right.call(null,G__32297,G__32298));
})()),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(0)) : zprint.zfns.znthnext.call(null,zloc,(0)))),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"extend","extend",1836484006))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32299 = loptions;
var G__32300 = (ind + (1));
var G__32301 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32299,G__32300,G__32301) : zprint.zprint.fzprint_STAR_.call(null,G__32299,G__32300,G__32301));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend(options__$4,(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(0)) : zprint.zfns.znthnext.call(null,zloc,(0)))),r_str_vec], 0));
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"fn","fn",-1175266204))) && (cljs.core.not((function (){var G__32307 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32307) : zprint.zfns.zlist_QMARK_.call(null,G__32307));
})())))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2","arg2",1729550917))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186))))){
var second_element = zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(2)))?options__$4:loptions),arg_1_indent,(indent__$1 + ind),(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc)));
var vec__32308 = zprint.zprint.style_lines(loptions,arg_1_indent,second_element);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32308,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32308,(1),null);
var third = (zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zthird.call(null,zloc));
var first_three = (cljs.core.truth_(second_element)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__32311 = loptions;
var G__32312 = (indent__$1 + ind);
var G__32313 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32311,G__32312,G__32313) : zprint.zprint.fzprint_STAR_.call(null,G__32311,G__32312,G__32313));
})(),second_element,(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2","arg2",1729550917));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072));
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
var and__4120__auto__ = (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(third) : zprint.zfns.zvector_QMARK_.call(null,third));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_count,(1));
} else {
return and__4120__auto__;
}
}
}
}
})())?zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(3)))?options__$4:loptions),max_width,(indent__$1 + ind),third):zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(function (){var G__32314 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(3)))?options__$4:loptions);
var G__32315 = (indent__$1 + ind);
var G__32316 = third;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32314,G__32315,G__32316) : zprint.zprint.fzprint_STAR_.call(null,G__32314,G__32315,G__32316));
})()], 0)))], 0)):null);
if(cljs.core.truth_(first_three)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(3))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,first_three,r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,first_three,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_pairs(options__$4,(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(2)) : zprint.zfns.znthnext.call(null,zloc,(2))))], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend(options__$4,(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(2)) : zprint.zfns.znthnext.call(null,zloc,(2))))], 0)):zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)):options__$4),(indent__$1 + ind),(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(2)) : zprint.zfns.znthnext.call(null,zloc,(2))),fn_style__$5)
)),r_str_vec], 0));
}
} else {
return null;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120))) && ((len > (3))))){
var arg_vec_index = (function (){var or__4131__auto__ = (function (){var G__32320 = ((function (len,l_str_len,arg_1_coll_QMARK_,fn_str,fn_style__$1,fn_style__$2,indent__$1,one_line_ok_QMARK_,fn_style__$3,fn_style__$4,fn_style__$5,options__$1,indent_adj,default_indent,arg_1_indent,options__$2,options__$3,_,new_ind,one_line_ind,options__$4,loptions,roptions,l_str_vec,r_str_vec,___$1,one_line,map__32263,map__32263__$1,options,map__32264,map__32264__$1,indent_arg,indent,fn_map,user_fn_map,one_line_QMARK_,fn_style,no_arg1_QMARK_,fn_force_nl){
return (function (p1__32259_SHARP_){
var or__4131__auto__ = (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32259_SHARP_) : zprint.zfns.zvector_QMARK_.call(null,p1__32259_SHARP_));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32259_SHARP_) : zprint.zfns.zlist_QMARK_.call(null,p1__32259_SHARP_)))){
var G__32322 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(p1__32259_SHARP_) : zprint.zfns.zfirst.call(null,p1__32259_SHARP_));
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32322) : zprint.zfns.zvector_QMARK_.call(null,G__32322));
} else {
return null;
}
}
});})(len,l_str_len,arg_1_coll_QMARK_,fn_str,fn_style__$1,fn_style__$2,indent__$1,one_line_ok_QMARK_,fn_style__$3,fn_style__$4,fn_style__$5,options__$1,indent_adj,default_indent,arg_1_indent,options__$2,options__$3,_,new_ind,one_line_ind,options__$4,loptions,roptions,l_str_vec,r_str_vec,___$1,one_line,map__32263,map__32263__$1,options,map__32264,map__32264__$1,indent_arg,indent,fn_map,user_fn_map,one_line_QMARK_,fn_style,no_arg1_QMARK_,fn_force_nl))
;
var G__32321 = zloc;
return (zprint.zfns.zfind.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zfind.cljs$core$IFn$_invoke$arity$2(G__32320,G__32321) : zprint.zfns.zfind.call(null,G__32320,G__32321));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var doc_string_QMARK_ = typeof (function (){var G__32323 = (zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zthird.call(null,zloc));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__32323) : zprint.zfns.zsexpr.call(null,G__32323));
})() === 'string';
var mixin_start = ((doc_string_QMARK_)?(4):(3));
var mixin_length = (arg_vec_index - mixin_start);
var mixins_QMARK_ = (mixin_length > (0));
var doc_string = ((doc_string_QMARK_)?zprint.zprint.fzprint_hang_one(caller,loptions,(indent__$1 + ind),(indent__$1 + ind),(zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zthird.call(null,zloc))):null);
var mixins = ((mixins_QMARK_)?(function (){var mixin_sentinal = zprint.zprint.fzprint_hang_one(caller,loptions,(indent__$1 + ind),(indent__$1 + ind),((doc_string_QMARK_)?(zprint.zfns.zfourth.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfourth.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfourth.call(null,zloc)):(zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zthird.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zthird.call(null,zloc))));
var vec__32324 = zprint.zprint.style_lines(loptions,(indent__$1 + ind),mixin_sentinal);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(1),null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixin_sentinal,zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7(caller,loptions,(max_width + (1)),(((indent__$1 + indent__$1) + ind) - (1)),(function (){var G__32327 = zloc;
var G__32328 = ((doc_string_QMARK_)?(3):(2));
return (zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(G__32327,G__32328) : zprint.zfns.znthnext.call(null,G__32327,G__32328));
})(),fn_style__$5,mixin_length)], 0));
})():null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32329 = loptions;
var G__32330 = (ind + (1));
var G__32331 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32329,G__32330,G__32331) : zprint.zprint.fzprint_STAR_.call(null,G__32329,G__32330,G__32331));
})(),zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(2)))?options__$4:loptions),arg_1_indent,(indent__$1 + ind),(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc))),((((doc_string_QMARK_) && (mixins_QMARK_)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_string,mixins], 0)):((doc_string_QMARK_)?doc_string:((mixins_QMARK_)?mixins:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null)
))),zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$4,fn_style__$5),(indent__$1 + ind),(indent__$1 + ind),(function (){var G__32332 = zloc;
var G__32333 = ((mixins_QMARK_)?(arg_vec_index - (1)):((doc_string_QMARK_)?(2):(1)));
return (zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(G__32332,G__32333) : zprint.zfns.znthnext.call(null,G__32332,G__32333));
})(),fn_style__$5),r_str_vec], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg1","arg1",951899358))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329))))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32334 = loptions;
var G__32335 = (ind + (1));
var G__32336 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32334,G__32335,G__32336) : zprint.zprint.fzprint_STAR_.call(null,G__32334,G__32335,G__32336));
})(),zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(2)))?options__$4:loptions),arg_1_indent,(indent__$1 + ind),(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc))),(((len > (2)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_pairs(options__$4,(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(1)) : zprint.zfns.znthnext.call(null,zloc,(1))))], 0)):zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$4,fn_style__$5),(indent__$1 + ind),(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(1)) : zprint.zfns.znthnext.call(null,zloc,(1))),fn_style__$5)):null),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050))){
if(cljs.core.truth_((function (){var G__32339 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32339) : zprint.zfns.zvector_QMARK_.call(null,G__32339));
})())){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32340 = loptions;
var G__32341 = (ind + (1));
var G__32342 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32340,G__32341,G__32342) : zprint.zprint.fzprint_STAR_.call(null,G__32340,G__32341,G__32342));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(function (){var G__32343 = loptions;
var G__32344 = (ind + (1));
var G__32345 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32343,G__32344,G__32345) : zprint.zprint.fzprint_STAR_.call(null,G__32343,G__32344,G__32345));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend(options__$4,(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(1)) : zprint.zfns.znthnext.call(null,zloc,(1)))),r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32346 = loptions;
var G__32347 = (ind + (1));
var G__32348 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32346,G__32347,G__32348) : zprint.zprint.fzprint_STAR_.call(null,G__32346,G__32347,G__32348));
})(),zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(2)))?options__$4:loptions),arg_1_indent,(indent__$1 + ind),(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend(options__$4,(indent__$1 + ind),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(1)) : zprint.zfns.znthnext.call(null,zloc,(1)))),r_str_vec], 0));

}
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32353 = loptions;
var G__32354 = (l_str_len + ind);
var G__32355 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32353,G__32354,G__32355) : zprint.zprint.fzprint_STAR_.call(null,G__32353,G__32354,G__32355));
})(),(cljs.core.truth_((function (){var and__4120__auto__ = arg_1_indent;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__4120__auto__;
}
})())?zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$4,fn_style__$5),arg_1_indent,((indent__$1 + ind) + indent_adj),(zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.znthnext.cljs$core$IFn$_invoke$arity$2(zloc,(0)) : zprint.zfns.znthnext.call(null,zloc,(0))),fn_style__$5):(function (){var local_indent = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$5,new cljs.core.Keyword(null,"flow","flow",590489032)))?(indent__$1 + ind):((default_indent + ind) + indent_adj));
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(local_indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4(zprint.zprint.noarg1(options__$4,fn_style__$5),local_indent,cljs.core.nthnext((zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc)),(1)),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826))], 0));
})()),r_str_vec], 0));

}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Pretty print and focus style a :list element.
 */
zprint.zprint.fzprint_list = (function zprint$zprint$fzprint_list(options,ind,zloc){
return zprint.zprint.fzprint_list_STAR_(new cljs.core.Keyword(null,"list","list",765357683),"(",")",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Pretty print and focus style a fn element.
 */
zprint.zprint.fzprint_anon_fn = (function zprint$zprint$fzprint_anon_fn(options,ind,zloc){
return zprint.zprint.fzprint_list_STAR_(new cljs.core.Keyword(null,"list","list",765357683),"#(",")",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Return true if there are any collections in the collection.
 */
zprint.zprint.any_zcoll_QMARK_ = (function zprint$zprint$any_zcoll_QMARK_(options,ind,zloc){
var coll_QMARK__seq = (zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zcoll_QMARK_,zloc) : zprint.zfns.zmap.call(null,zprint.zfns.zcoll_QMARK_,zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (coll_QMARK__seq){
return (function (p1__32360_SHARP_,p2__32361_SHARP_){
var or__4131__auto__ = p1__32360_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p2__32361_SHARP_;
}
});})(coll_QMARK__seq))
,null,coll_QMARK__seq);
});
/**
 * Given the output from fzprint-seq, which is a style-vec in
 *   the making without spacing, but with extra [] around the elements,
 *   wrap the elements to the right margin.
 */
zprint.zprint.wrap_zmap = (function zprint$zprint$wrap_zmap(caller,p__32363,ind,coll_print){
var map__32364 = p__32363;
var map__32364__$1 = (((((!((map__32364 == null))))?(((((map__32364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32364):map__32364);
var options = map__32364__$1;
var map__32365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32364__$1,caller);
var map__32365__$1 = (((((!((map__32365 == null))))?(((((map__32365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32365):map__32365);
var wrap_after_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32364__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32364__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32364__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var last_index = (cljs.core.count(coll_print) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt(rightcnt);
var cur_seq = coll_print;
var cur_ind = ind;
var index = (0);
var previous_newline_QMARK_ = false;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cur_seq)){
return out;
} else {
var next_seq = cljs.core.first(cur_seq);
if(cljs.core.truth_(next_seq)){
var multi_QMARK_ = (cljs.core.count(cljs.core.first(cur_seq)) > (1));
var this_seq = cljs.core.first(cur_seq);
var _ = zprint.zprint.log_lines(options,"wrap-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"wrap-zmap: ind:",ind,"this-seq:",this_seq], 0)):null);
var vec__32379 = zprint.zprint.style_lines(options,ind,this_seq);
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32379,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32379,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32379,(2),null);
var last_width = cljs.core.last(lines);
var len = (last_width - ind);
var len__$1 = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = len;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var width__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = (function (){var and__4120__auto__ = (!(newline_QMARK_));
if(and__4120__auto__){
var or__4131__auto__ = (index === (0));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto____$1 = ((multi_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(linecnt,(1)):true);
if(and__4120__auto____$1){
return ((cur_ind + len__$1) <= width__$1);
} else {
return and__4120__auto____$1;
}
}
} else {
return and__4120__auto__;
}
})();
var new_ind = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?(width__$1 + (1)):((((multi_QMARK_) && ((linecnt > (1))) && (cljs.core.not(wrap_after_multi_QMARK_))))?width__$1:((fit_QMARK_)?((cur_ind + len__$1) + (1)):((newline_QMARK_)?ind:((ind + len__$1) + (1))
))));
var G__33310 = cljs.core.next(cur_seq);
var G__33311 = new_ind;
var G__33312 = (index + (1));
var G__33313 = newline_QMARK_;
var G__33314 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,((fit_QMARK_)?(((!((index === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),this_seq], 0)):this_seq):((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((new_ind - (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null):((previous_newline_QMARK_)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),this_seq], 0)):zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),this_seq], 0))))));
cur_seq = G__33310;
cur_ind = G__33311;
index = G__33312;
previous_newline_QMARK_ = G__33313;
out = G__33314;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Remove any [_ _ :newline] from the seq.
 */
zprint.zprint.remove_nl = (function zprint$zprint$remove_nl(coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32388_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__32388_SHARP_),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
}),coll);
});
/**
 * Validate an options map that was returned from some internal configuration
 *   expression or configuration.  Either returns the options map or throws
 *   an error.
 */
zprint.zprint.internal_validate = (function zprint$zprint$internal_validate(options,error_str){
var errors = zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1(options);
var errors__$1 = (cljs.core.truth_(errors)?["Options resulting from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str)," had these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null);
if((!(cljs.core.empty_QMARK_(errors__$1)))){
throw (new Error(errors__$1));
} else {
return options;
}
});
/**
 * Print basic stuff like a vector or a set.  Several options for how to
 *   print them.
 */
zprint.zprint.fzprint_vec_STAR_ = (function zprint$zprint$fzprint_vec_STAR_(caller,l_str,r_str,p__32389,ind,zloc){
var map__32390 = p__32389;
var map__32390__$1 = (((((!((map__32390 == null))))?(((((map__32390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32390):map__32390);
var options = map__32390__$1;
var map__32391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32390__$1,caller);
var map__32391__$1 = (((((!((map__32391 == null))))?(((((map__32391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32391):map__32391);
var wrap_coll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32391__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var wrap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32391__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32391__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var option_fn_first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32391__$1,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32391__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32391__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32391__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32390__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32390__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_((function (){var and__4120__auto__ = binding_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),(1));
} else {
return and__4120__auto__;
}
})())){
return zprint.zprint.fzprint_binding_vec(options,ind,zloc);
} else {
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var new_options = (cljs.core.truth_(option_fn_first)?(function (){var first_sexpr = (function (){var G__32398 = (zprint.zfns.zfirst_no_comment.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst_no_comment.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst_no_comment.call(null,zloc));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__32398) : zprint.zfns.zsexpr.call(null,G__32398));
})();
return zprint.zprint.internal_validate((option_fn_first.cljs$core$IFn$_invoke$arity$2 ? option_fn_first.cljs$core$IFn$_invoke$arity$2(options,first_sexpr) : option_fn_first.call(null,options,first_sexpr)),[":vector :option-fn-first called with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr)].join(''));
})():null);
var map__32396 = zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new_options], 0));
var map__32396__$1 = (((((!((map__32396 == null))))?(((((map__32396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32396):map__32396);
var options__$1 = map__32396__$1;
var map__32397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32396__$1,caller);
var map__32397__$1 = (((((!((map__32397 == null))))?(((((map__32397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32397):map__32397);
var wrap_coll_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32397__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var wrap_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32397__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32397__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var option_fn_first__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32397__$1,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201));
var respect_nl_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32397__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var sort_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32397__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32397__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var respect_nl_QMARK___$2 = (function (){var and__4120__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(sort_QMARK___$1);
} else {
return and__4120__auto__;
}
})();
var new_ind = (cljs.core.count(l_str) + ind);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"new-ind:",new_ind], 0))], 0)):null);
var zloc_seq = (cljs.core.truth_(respect_nl_QMARK___$2)?(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc)));
var zloc_seq__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = sort_QMARK___$1;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK___$1;
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())?zprint.zprint.order_out(caller,options__$1,cljs.core.identity,zloc_seq):zloc_seq);
var coll_print = ((((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) === (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null)], null):zprint.zprint.fzprint_seq(options__$1,new_ind,zloc_seq__$1));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*: coll-print:",coll_print], 0))], 0)):null);
var coll_print__$1 = ((cljs.core.not(zprint.zprint.contains_nil_QMARK_(coll_print)))?coll_print:null);
var one_line = (cljs.core.truth_(coll_print__$1)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),(cljs.core.truth_(respect_nl_QMARK___$2)?coll_print__$1:zprint.zprint.remove_nl(coll_print__$1)))):null);
var ___$2 = zprint.zprint.log_lines(options__$1,"fzprint-vec*:",new_ind,one_line);
var one_line_lines = zprint.zprint.style_lines(options__$1,new_ind,one_line);
if(cljs.core.truth_(one_line_lines)){
if(zprint.zprint.fzfit_one_line(options__$1,one_line_lines)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line,r_str_vec], 0));
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core.not(wrap_coll_QMARK___$1);
if(and__4120__auto__){
return zprint.zprint.any_zcoll_QMARK_(options__$1,new_ind,zloc);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(wrap_QMARK___$1);
}
})())){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(new_ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.remove_nl(coll_print__$1))),r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-vec*: wrap coll-print:",coll_print__$1], 0));
} else {
}

return zprint.zprint.wrap_zmap(caller,options__$1,new_ind,coll_print__$1);
})()
,r_str_vec], 0));
}
}
} else {
return null;
}
}
});
zprint.zprint.fzprint_vec = (function zprint$zprint$fzprint_vec(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"vector","vector",1902966158),"[","]",zprint.zprint.rightmost(options),ind,zloc);
});
zprint.zprint.fzprint_array = (function zprint$zprint$fzprint_array(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"array","array",-2080713842),"[","]",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Pretty print and focus style a :set element.
 */
zprint.zprint.fzprint_set = (function zprint$zprint$fzprint_set(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"set","set",304602554),"#{","}",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Do the same as interpose, but different seps depending on pred?.
 */
zprint.zprint.interpose_either = (function zprint$zprint$interpose_either(sep_true,sep_nil,pred_QMARK_,coll){
var coll__$1 = coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return cljs.core.persistent_BANG_(out);
} else {
var G__33384 = cljs.core.next(coll__$1);
var G__33385 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([out,sep_true,cljs.core.first(coll__$1)], 0)):(((cljs.core.count(out) === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(coll__$1)):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([out,sep_nil,cljs.core.first(coll__$1)], 0))));
var G__33386 = (function (){var G__32407 = cljs.core.first(coll__$1);
return (pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pred_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32407) : pred_QMARK_.call(null,G__32407));
})();
coll__$1 = G__33384;
out = G__33385;
interpose_QMARK_ = G__33386;
continue;
}
break;
}
});
/**
 * Do the same as interpose, but different seps depending on pred-fn
 *   return and nl-separator?.
 */
zprint.zprint.interpose_either_nl_hf = (function zprint$zprint$interpose_either_nl_hf(sep_true,sep_true_nl,sep_nil,sep_nil_nl,p__32408,pred_fn,coll){
var map__32409 = p__32408;
var map__32409__$1 = (((((!((map__32409 == null))))?(((((map__32409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32409):map__32409);
var suboptions = map__32409__$1;
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32409__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var nl_separator_flow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32409__$1,new cljs.core.Keyword(null,"nl-separator-flow?","nl-separator-flow?",495760215));
var coll__$1 = coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
var add_nl_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.persistent_BANG_(out));
} else {
var vec__32414 = cljs.core.first(coll__$1);
var hangflow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32414,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32414,(1),null);
var G__33405 = cljs.core.next(coll__$1);
var G__33406 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([out,(cljs.core.truth_(add_nl_QMARK_)?sep_true_nl:sep_true),style_vec], 0)):(((cljs.core.count(out) === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,style_vec):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([out,(cljs.core.truth_(add_nl_QMARK_)?sep_nil_nl:sep_nil),style_vec], 0))));
var G__33407 = (cljs.core.truth_(pred_fn)?(pred_fn.cljs$core$IFn$_invoke$arity$1 ? pred_fn.cljs$core$IFn$_invoke$arity$1(style_vec) : pred_fn.call(null,style_vec)):null);
var G__33408 = (function (){var and__4120__auto__ = nl_separator_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hangflow,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__4120__auto__;
}
})();
coll__$1 = G__33405;
out = G__33406;
interpose_QMARK_ = G__33407;
add_nl_QMARK_ = G__33408;
continue;
}
break;
}
});
/**
 * Put a single or double line between pairs returned from fzprint-map-two-up.
 *   The first argument is the map resulting from (:map options) or (:pair options)
 *   or whatever.  It should have :nl-separator? and :nl-separator-flow? in it.
 */
zprint.zprint.interpose_nl_hf = (function zprint$zprint$interpose_nl_hf(suboptions,ind,coll){
return zprint.zprint.interpose_either_nl_hf(null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),suboptions,null,coll);
});
zprint.zprint.fzprint_map_STAR_ = (function zprint$zprint$fzprint_map_STAR_(caller,l_str,r_str,p__32418,ind,zloc){
var map__32419 = p__32418;
var map__32419__$1 = (((((!((map__32419 == null))))?(((((map__32419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32419):map__32419);
var options = map__32419__$1;
var map__32420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,caller);
var map__32420__$1 = (((((!((map__32420 == null))))?(((((map__32420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32420):map__32420);
var comma_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword(null,"comma?","comma?",1532168963));
var key_ignore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var force_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var ztype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,new cljs.core.Keyword(null,"ztype","ztype",-562179020));
var map_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32419__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var zloc__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztype,new cljs.core.Keyword(null,"sexpr","sexpr",-783344087));
if(and__4120__auto__){
var or__4131__auto__ = key_ignore;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return key_ignore_silent;
}
} else {
return and__4120__auto__;
}
})())?zprint.zprint.map_ignore(caller,options__$1,zloc):zloc);
var vec__32423 = zprint.zprint.partition_all_2_nc(options__$1,(zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zseqnws.call(null,zloc__$1)));
var no_sort_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32423,(0),null);
var pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32423,(1),null);
var vec__32426 = (cljs.core.truth_((function (){var and__4120__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())?(zprint.zfns.zlift_ns.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlift_ns.cljs$core$IFn$_invoke$arity$1(pair_seq) : zprint.zfns.zlift_ns.call(null,pair_seq)):null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426,(0),null);
var lift_pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426,(1),null);
var l_str__$1 = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join(''):l_str);
var pair_seq__$1 = (function (){var or__4131__auto__ = lift_pair_seq;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pair_seq;
}
})();
var pair_seq__$2 = (cljs.core.truth_(no_sort_QMARK_)?pair_seq__$1:zprint.zprint.order_out(caller,options__$1,cljs.core.first,pair_seq__$1));
var indent = cljs.core.count(l_str__$1);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map(options__$1,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,(indent + ind),zloc__$1,r_str);
if(cljs.core.empty_QMARK_(pair_seq__$2)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-map*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zstring.call(null,zloc__$1)),"ind:",ind,"comma?",comma_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$1)], 0)):null);
var pair_print_one_line = zprint.zprint.fzprint_map_two_up(caller,(cljs.core.truth_(one_line_QMARK_)?options__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true)),(indent + ind),comma_QMARK_,pair_seq__$2);
var pair_print_one_line__$1 = zprint.zprint.remove_hangflow(pair_print_one_line);
var pair_print_one_line__$2 = ((zprint.zprint.fzfit_one_line(options__$1,zprint.zprint.style_lines(options__$1,(indent + ind),pair_print_one_line__$1)))?pair_print_one_line__$1:null);
var one_line = (cljs.core.truth_(pair_print_one_line__$2)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,zprint.zprint.interpose_either(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [", ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),cljs.core.constantly(comma_QMARK_),pair_print_one_line__$2)):null);
var one_line_lines = zprint.zprint.style_lines(options__$1,(indent + ind),one_line);
var one_line__$1 = ((zprint.zprint.fzfit_one_line(options__$1,one_line_lines))?one_line:null);
if(cljs.core.truth_(one_line__$1)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line__$1,r_str_vec], 0));
} else {
if(cljs.core.not(one_line_QMARK_)){
var pair_print = zprint.zprint.fzprint_map_two_up(caller,options__$1,(indent + ind),comma_QMARK_,pair_seq__$2);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.interpose_either_nl_hf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options__$1),((function (pair_print,_,pair_print_one_line,pair_print_one_line__$1,pair_print_one_line__$2,one_line,one_line_lines,one_line__$1,options__$1,zloc__$1,vec__32423,no_sort_QMARK_,pair_seq,vec__32426,ns,lift_pair_seq,l_str__$1,pair_seq__$1,pair_seq__$2,indent,l_str_vec,r_str_vec,map__32419,map__32419__$1,options,map__32420,map__32420__$1,comma_QMARK_,key_ignore,key_ignore_silent,nl_separator_QMARK_,force_nl_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,one_line_QMARK_,ztype,map_depth,in_code_QMARK_){
return (function (p1__32417_SHARP_){
var and__4120__auto__ = comma_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__32417_SHARP_),(2)),new cljs.core.Keyword(null,"comment","comment",532206069))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__32417_SHARP_),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
} else {
return and__4120__auto__;
}
});})(pair_print,_,pair_print_one_line,pair_print_one_line__$1,pair_print_one_line__$2,one_line,one_line_lines,one_line__$1,options__$1,zloc__$1,vec__32423,no_sort_QMARK_,pair_seq,vec__32426,ns,lift_pair_seq,l_str__$1,pair_seq__$1,pair_seq__$2,indent,l_str_vec,r_str_vec,map__32419,map__32419__$1,options,map__32420,map__32420__$1,comma_QMARK_,key_ignore,key_ignore_silent,nl_separator_QMARK_,force_nl_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,one_line_QMARK_,ztype,map_depth,in_code_QMARK_))
,pair_print),r_str_vec], 0));
} else {
return null;
}
}
}
});
/**
 * Format a real map. ONLY WORKES ON STRUCTURES AT PRESENT
 */
zprint.zprint.fzprint_map = (function zprint$zprint$fzprint_map(options,ind,zloc){
var vec__32430 = null;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(0),null);
var lifted_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(1),null);
if(cljs.core.truth_(ns)){
return zprint.zprint.fzprint_map_STAR_(new cljs.core.Keyword(null,"map","map",1371690461),["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''),"}",zprint.zprint.rightmost(options),ind,lifted_map);
} else {
return zprint.zprint.fzprint_map_STAR_(new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost(options),ind,zloc);
}
});
/**
 * Return true if the string starts with #object[
 */
zprint.zprint.object_str_QMARK_ = (function zprint$zprint$object_str_QMARK_(s){
return cljs.core.re_find(/^#object\[/,s);
});
/**
 * Print something that looks like #object[...] in a way
 *   that will acknowledge the structure inside of the [...]
 */
zprint.zprint.fzprint_object = (function zprint$zprint$fzprint_object(var_args){
var G__32437 = arguments.length;
switch (G__32437) {
case 4:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,zloc_value){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,(zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$2(zloc,zloc_value) : zprint.zfns.zobj_to_vec.call(null,zloc,zloc_value)));
});

zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,(zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zobj_to_vec.call(null,zloc)));
});

zprint.zprint.fzprint_object.cljs$lang$maxFixedArity = 4;

/**
 * Find the hash-code identity for an object.
 */
zprint.zprint.hash_identity_str = (function zprint$zprint$hash_identity_str(obj){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(obj));
});
zprint.zprint.fzprint_atom = (function zprint$zprint$fzprint_atom(p__32441,ind,zloc){
var map__32442 = p__32441;
var map__32442__$1 = (((((!((map__32442 == null))))?(((((map__32442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32442):map__32442);
var options = map__32442__$1;
var map__32443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32442__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var map__32443__$1 = (((((!((map__32443 == null))))?(((((map__32443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32443):map__32443);
var object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32443__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__4120__auto__ = object_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__4120__auto__;
}
})())){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)));
} else {
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(indent + ind),zloc,r_str);
var arg_1 = ["Atom@",zprint.zprint.hash_identity_str(zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count(arg_1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-atom: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(options),arg_1_indent,(indent + ind),(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc))),r_str_vec], 0));
}
});
/**
 * Print out a future or a promise or a delay.  These can only be 
 *   sexpressions, since they don't exist in a textual representation 
 *   of code (or data for that matter).  That means that we can use 
 *   regular sexpression operations on zloc.
 */
zprint.zprint.fzprint_future_promise_delay_agent = (function zprint$zprint$fzprint_future_promise_delay_agent(options,ind,zloc){
var zloc_type = (cljs.core.truth_((zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfuture_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"future","future",1877842724):(cljs.core.truth_((zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zpromise_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"promise","promise",1767129287):(cljs.core.truth_((zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zdelay_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"delay","delay",-574225219):(cljs.core.truth_((zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zagent_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"agent","agent",-766455027):(function(){throw (new Error("Not a future, promise, or delay:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))))})()
))));
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(zloc_type) : options.call(null,zloc_type)));
if(cljs.core.truth_(and__4120__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__4120__auto__;
}
})())){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027))) || (cljs.core.realized_QMARK_(zloc)))){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)));
} else {
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options,ind,zloc);
}
} else {
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(indent + ind),zloc,r_str);
var type_str = (function (){var G__32455 = zloc_type;
var G__32455__$1 = (((G__32455 instanceof cljs.core.Keyword))?G__32455.fqn:null);
switch (G__32455__$1) {
case "future":
return "Future@";

break;
case "promise":
return "Promise@";

break;
case "delay":
return "Delay@";

break;
case "agent":
return "Agent@";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32455__$1)].join('')));

}
})();
var arg_1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_str),zprint.zprint.hash_identity_str(zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count(arg_1));
var zloc_realized_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027)))?true:cljs.core.realized_QMARK_(zloc));
var value = ((zloc_realized_QMARK_)?(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)):(function (){var G__32456 = zloc_type;
var G__32456__$1 = (((G__32456 instanceof cljs.core.Keyword))?G__32456.fqn:null);
switch (G__32456__$1) {
case "future":
return "pending";

break;
case "promise":
return "not-delivered";

break;
case "delay":
return "pending";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32456__$1)].join('')));

}
})());
var options__$1 = ((zloc_realized_QMARK_)?options:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-fpda: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options__$1,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(options__$1),arg_1_indent,(indent + ind),value),r_str_vec], 0));
}
});
/**
 * Print a function object, what you get when you put a function in
 *   a collection, for instance.  This doesn't do macros, you will notice.
 *   It also can't be invoked when zloc is a zipper.
 */
zprint.zprint.fzprint_fn_obj = (function zprint$zprint$fzprint_fn_obj(p__32459,ind,zloc){
var map__32460 = p__32459;
var map__32460__$1 = (((((!((map__32460 == null))))?(((((map__32460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32460):map__32460);
var options = map__32460__$1;
var map__32461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32460__$1,new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936));
var map__32461__$1 = (((((!((map__32461 == null))))?(((((map__32461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32461):map__32461);
var object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32461__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__4120__auto__ = object_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__4120__auto__;
}
})())){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options,ind,zloc);
} else {
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5(options,(indent + ind),zloc,r_str,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var arg_1_left = "Fn@";
var arg_1_right = zprint.zprint.hash_identity_str(zloc);
var arg_1_indent = ((((ind + indent) + (1)) + cljs.core.count(arg_1_left)) + cljs.core.count(arg_1_right));
var class_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(zloc)], 0));
var name_js = cljs.core.str.cljs$core$IFn$_invoke$arity$1(zloc.name);
var color = (cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.re_find(/^clojure/,name_js);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find(/^cljs/,name_js);
}
})())?zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"fn","fn",-1175266204)):new cljs.core.Keyword(null,"none","none",1333468478));
var name_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_js,/\$/);
var arg_2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(name_split)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(name_split))].join('');
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-fn-obj: arg-1:",arg_1_left,arg_1_right,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_left,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_right,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-color","string-color",-1853875244),color], 0))),arg_1_indent,(indent + ind),arg_2),r_str_vec], 0));
}
});
zprint.zprint.fzprint_ns = (function zprint$zprint$fzprint_ns(options,ind,zloc){
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(indent + ind),zloc,r_str);
var arg_1 = "Namespace";
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count(arg_1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-atom: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(options),arg_1_indent,(indent + ind),cljs.core.ns_name(zloc)),r_str_vec], 0));
});
zprint.zprint.fzprint_record = (function zprint$zprint$fzprint_record(p__32474,ind,zloc){
var map__32476 = p__32474;
var map__32476__$1 = (((((!((map__32476 == null))))?(((((map__32476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32476):map__32476);
var options = map__32476__$1;
var map__32477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"record","record",-779106859));
var map__32477__$1 = (((((!((map__32477 == null))))?(((((map__32477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32477):map__32477);
var record_type_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660));
var to_string_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886));
if(cljs.core.truth_(to_string_QMARK_)){
var G__32480 = options;
var G__32481 = ind;
var G__32482 = zloc.toString();
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32480,G__32481,G__32482) : zprint.zprint.fzprint_STAR_.call(null,G__32480,G__32481,G__32482));
} else {
if(cljs.core.not(record_type_QMARK_)){
var G__32483 = options;
var G__32484 = ind;
var G__32485 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zloc);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32483,G__32484,G__32485) : zprint.zprint.fzprint_STAR_.call(null,G__32483,G__32484,G__32485));
} else {
var l_str = "#";
var r_str = "";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(indent + ind),zloc,r_str);
var arg_1 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(zloc)], 0));
var arg_1__$1 = (function (){var tokens = clojure.string.split.cljs$core$IFn$_invoke$arity$2(arg_1,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(tokens))),"/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(tokens)], 0)));
})();
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count(arg_1__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-record: arg-1:",arg_1__$1,"zstring zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1__$1,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"record","record",-779106859),options,arg_1_indent,(indent + ind),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zloc)),r_str_vec], 0));
}
}
});
/**
 * Trim the #_ off the front of the uneval, and try to print it.
 */
zprint.zprint.fzprint_uneval = (function zprint$zprint$fzprint_uneval(options,ind,zloc){
var l_str = "#_";
var r_str = "";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(indent + ind),zloc,r_str);
var uloc = (zprint.zfns.zparseuneval.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zparseuneval.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zparseuneval.call(null,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-uneval: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"uloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(uloc) : zprint.zfns.zstring.call(null,uloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32489 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uneval","uneval",1932037707).cljs$core$IFn$_invoke$arity$1(options)));
var G__32490 = (indent + ind);
var G__32491 = uloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32489,G__32490,G__32491) : zprint.zprint.fzprint_STAR_.call(null,G__32489,G__32490,G__32491));
})(),r_str_vec], 0));
});
/**
 * Print the two items in a meta node.  Different because it doesn't print
 *   a single collection, so it doesn't do any indent or rightmost.  It also
 *   uses a different approach to calling fzprint-flow-seq with the
 *   results zmap, so that it prints all of the seq, not just the rightmost.
 */
zprint.zprint.fzprint_meta = (function zprint$zprint$fzprint_meta(options,ind,zloc){
var l_str = "^";
var r_str = "";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-meta: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(cljs.core.count(l_str) + ind),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) - (1)),ind)),(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc))),r_str_vec], 0));
});
/**
 * Print a reader-macro, often a reader-conditional. Adapted for differences
 *   in parsing #?@ between rewrite-clj and rewrite-cljs.  Also adapted for
 *   the rewrite-clj not parsing namespaced maps in the version presently
 *   used.
 */
zprint.zprint.fzprint_reader_macro = (function zprint$zprint$fzprint_reader_macro(options,ind,zloc){
var zstr = (function (){var G__32494 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32494) : zprint.zfns.zstring.call(null,G__32494));
})();
var alt_at_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(zstr),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(1),(2)),"@")));
var reader_cond_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(0),(1)),"?");
var namespaced_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(0),(1)),":");
var at_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__32496 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__32496) : zprint.zfns.ztag.call(null,G__32496));
})(),new cljs.core.Keyword(null,"deref","deref",-145586795))) || (alt_at_QMARK_));
var l_str = ((((reader_cond_QMARK_) && (at_QMARK_)))?"#?@":(cljs.core.truth_((function (){var and__4120__auto__ = reader_cond_QMARK_;
if(and__4120__auto__){
var G__32498 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32498) : zprint.zfns.zcoll_QMARK_.call(null,G__32498));
} else {
return and__4120__auto__;
}
})())?"#?":((reader_cond_QMARK_)?(function(){throw (new Error(["Unknown reader macro: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))),"' zfirst zloc: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32500 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__32500) : zprint.zfns.zstring.call(null,G__32500));
})())].join('')))})():((namespaced_QMARK_)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zstr)].join(''):"#"
))));
var r_str = "";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(indent + ind),zloc,r_str);
var floc = ((((at_QMARK_) && ((!(alt_at_QMARK_)))))?(function (){var G__32501 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(G__32501) : zprint.zfns.zfirst.call(null,G__32501));
})():(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-reader-macro: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"floc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(floc) : zprint.zfns.zstring.call(null,floc)),"l-str:",l_str], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),((reader_cond_QMARK_)?zprint.zprint.fzprint_map_STAR_(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),"(",")",zprint.zprint.rightmost(options),(indent + ind),floc):zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,(indent + ind),(function (){var zloc_seq = (zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc));
if(namespaced_QMARK_){
return cljs.core.next(zloc_seq);
} else {
return zloc_seq;
}
})())),r_str_vec], 0));
});
/**
 * Print the single item after a variety of prefix characters.
 */
zprint.zprint.fzprint_prefix_STAR_ = (function zprint$zprint$fzprint_prefix_STAR_(options,ind,zloc,l_str){
var r_str = "";
var indent = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5(options,(indent + ind),zloc,r_str,new cljs.core.Keyword(null,"right","right",-452581833));
var floc = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-prefix*: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"floc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(floc) : zprint.zfns.zstring.call(null,floc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__32523 = options;
var G__32524 = (indent + ind);
var G__32525 = floc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__32523,G__32524,G__32525) : zprint.zprint.fzprint_STAR_.call(null,G__32523,G__32524,G__32525));
})(),r_str_vec], 0));
});
zprint.zprint.prefix_tags = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Keyword(null,"deref","deref",-145586795),"@",new cljs.core.Keyword(null,"var","var",-769682797),"#'",new cljs.core.Keyword(null,"uneval","uneval",1932037707),"#_"], null);
/**
 * Change options as necessary based on prefix tag.
 */
zprint.zprint.prefix_options = (function zprint$zprint$prefix_options(options,prefix_tag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix_tag,new cljs.core.Keyword(null,"uneval","uneval",1932037707))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uneval","uneval",1932037707).cljs$core$IFn$_invoke$arity$1(options)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix_tag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))){
return cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"paren","paren",-294107600)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return options;

}
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint_STAR_ = (function zprint$zprint$fzprint_STAR_(p__32540,indent,zloc){
var map__32541 = p__32540;
var map__32541__$1 = (((((!((map__32541 == null))))?(((((map__32541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32541):map__32541);
var options = map__32541__$1;
var max_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var shift_seq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"shift-seq","shift-seq",267527195));
var max_hang_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var max_hang_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220));
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var hex_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"hex?","hex?",890937870));
var dbg_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var string_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"string-color","string-color",-1853875244));
var trim_comments_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667));
var max_hang_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var string_str_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352));
var avail = (width - indent);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)));
var options__$2 = (cljs.core.truth_((function (){var or__4131__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return dbg_print_QMARK_;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),"")),(cljs.core.truth_(one_line_QMARK_)?"o":(cljs.core.truth_(in_hang_QMARK_)?"h":"."
))].join('')):options__$1);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"fzprint* **** rightcnt:",rightcnt,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0)):null);
var dbg_data = cljs.core.deref(zprint.zprint.fzprint_dbg);
var dbg_focus_QMARK_ = (function (){var and__4120__auto__ = dbg_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dbg_data,cljs.core.second((zprint.zfns.zfind_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfind_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfind_path.call(null,zloc))));
} else {
return and__4120__auto__;
}
})();
var options__$3 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$2,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"on","on",173873944)):options__$2);
var ___$1 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint dbg-data:",dbg_data], 0)):null);
if(cljs.core.truth_((function (){var and__4120__auto__ = (depth > max_depth);
if(and__4120__auto__){
return (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcoll_QMARK_.call(null,zloc));
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["...",zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["##",zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not(in_code_QMARK_)) && (((((depth - in_hang_QMARK_) > max_hang_span)) || (((cljs.core.not(one_line_QMARK_)) && (((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) > max_hang_count)) && ((depth > max_hang_depth)))))));
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((zprint.zfns.zrecord_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zrecord_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zrecord_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_record(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zlist_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_list(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zvector_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_vec(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zmap_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_map(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zset_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_set(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zanonfn_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zanonfn_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zanonfn_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_anon_fn(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zfn_obj_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfn_obj_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfn_obj_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_fn_obj(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zarray_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zarray_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zarray_QMARK_.call(null,zloc)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"array","array",-2080713842).cljs$core$IFn$_invoke$arity$1(options__$3)))){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options__$3,indent,zloc);
} else {
return zprint.zprint.fzprint_array(options__$3,indent,(zprint.zfns.zexpandarray.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zexpandarray.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zexpandarray.call(null,zloc)));
}
} else {
if(cljs.core.truth_((zprint.zfns.zatom_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zatom_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zatom_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_atom(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zmeta_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zmeta_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zmeta_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_meta(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((function (){var G__32577 = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return (zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1(G__32577) : zprint.zprint.prefix_tags.call(null,G__32577));
})())){
return zprint.zprint.fzprint_prefix_STAR_(zprint.zprint.prefix_options(options__$3,(zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc))),indent,zloc,(function (){var G__32578 = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return (zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1(G__32578) : zprint.zprint.prefix_tags.call(null,G__32578));
})());
} else {
if(cljs.core.truth_((zprint.zfns.zns_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zns_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zns_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_ns(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = (zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zpromise_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfuture_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zdelay_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return (zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zagent_QMARK_.call(null,zloc));
}
}
}
})())){
return zprint.zprint.fzprint_future_promise_delay_agent(options__$3,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zreader_macro_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_macro_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zreader_macro_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_reader_macro(options__$3,indent,zloc);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))) && ((depth > (0))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)], null);
} else {
var zstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc));
var overflow_in_hang_QMARK_ = (function (){var and__4120__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (((cljs.core.count(zstr) + indent) + (function (){var or__4131__auto__ = rightcnt;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()) > width);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc)))){
var zcomment = (((((depth === (0))) && (cljs.core.not(trim_comments_QMARK_))))?zstr:clojure.string.replace(zstr,"\n",""));
var inline_spaces = (cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$3)))?(zprint.zfns.zinlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zinlinecomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zinlinecomment_QMARK_.call(null,zloc)):null);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(and__4120__auto__)){
return overflow_in_hang_QMARK_;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint*: overflow comment ========"], 0));
} else {
}

return null;
} else {
if(cljs.core.truth_(inline_spaces)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405),inline_spaces], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment","comment",532206069)], null)], null);
}
}
} else {
if(cljs.core.truth_((zprint.zfns.zwhitespaceorcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zwhitespaceorcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zwhitespaceorcomment_QMARK_.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null);
} else {
if(cljs.core.truth_(overflow_in_hang_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint*: overflow <<<<<<<<<<"], 0));
} else {
}

return null;
} else {
if(cljs.core.truth_((zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zkeyword_QMARK_.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(typeof (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(string_str_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc))):(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))),(cljs.core.truth_(string_color)?string_color:zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"string","string",-1989541586))),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.showfn_QMARK_(fn_map,(zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.show_user_fn_QMARK_(options__$3,(zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"user-fn","user-fn",223976490)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(typeof (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(hex_QMARK_)?(zprint.zfns.znumstr.cljs$core$IFn$_invoke$arity$3 ? zprint.zfns.znumstr.cljs$core$IFn$_invoke$arity$3(zloc,hex_QMARK_,shift_seq) : zprint.zfns.znumstr.call(null,zloc,hex_QMARK_,shift_seq)):zstr),zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(((zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc)) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"nil","nil",99600501)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$3,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);

}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Take a string and an index, and look for the last space prior to the
 *   index. If we wanted to tie ourselves to 1.8, we could use 
 *   clojure.string/last-index-of, but we don't.  However, we use similar
 *   conventions, i.e., if no space is found, return nil, and if the index
 *   is a space return that value, and accept any from-index, including one
 *   larger than the length of the string.
 */
zprint.zprint.last_space = (function zprint$zprint$last_space(s,from_index){
var from_index__$1 = (function (){var x__4222__auto__ = (cljs.core.count(s) - (1));
var y__4223__auto__ = from_index;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var rev_seq = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2((from_index__$1 + (1)),s));
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (from_index__$1,rev_seq){
return (function (p1__32594_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__32594_SHARP_," ");
});})(from_index__$1,rev_seq))
,rev_seq);
var space_index = (from_index__$1 - cljs.core.count(seq_after_space));
if((space_index < (0))){
return null;
} else {
return space_index;
}
});
/**
 * Take a string and an index, and look for the next space *after* the
 *   index. If no space is found, return nil. Accept any from-index, 
 *   including one larger than the length of the string.
 */
zprint.zprint.next_space = (function zprint$zprint$next_space(s,from_index){
var from_index__$1 = (from_index + (1));
if((from_index__$1 < cljs.core.count(s))){
var seq_after_space = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (from_index__$1){
return (function (p1__32596_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__32596_SHARP_," ");
});})(from_index__$1))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(from_index__$1,cljs.core.seq(s)));
var space_index = (from_index__$1 + cljs.core.count(seq_after_space));
if((space_index >= cljs.core.count(s))){
return null;
} else {
return space_index;
}
} else {
return null;
}
});
/**
 * If this is a comment, and it is too long, word wrap it to the right width.
 *   Note that top level comments may well end with a newline, so remove it
 *   and reapply it at the end if that is the case.
 */
zprint.zprint.wrap_comment = (function zprint$zprint$wrap_comment(width,p__32597,start){
var vec__32598 = p__32597;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32598,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32598,(1),null);
var stype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32598,(2),null);
var element = vec__32598;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stype,new cljs.core.Keyword(null,"comment","comment",532206069))))){
return element;
} else {
var comment_width = (width - start);
var semi_str = cljs.core.re_find(/;*/,s);
var rest_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(semi_str));
var space_str = cljs.core.re_find(/ */,rest_str);
var rest_str__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest_str,cljs.core.count(space_str));
var newline_QMARK_ = cljs.core.re_find(/\n$/,s);
var comment_width__$1 = ((comment_width - cljs.core.count(semi_str)) - cljs.core.count(space_str));
var comment_str = rest_str__$1;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(comment_str)){
if((cljs.core.count(out) === (0))){
if(cljs.core.truth_(newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null)], null);
}
} else {
return cljs.core.persistent_BANG_((cljs.core.truth_(newline_QMARK_)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)):out));
}
} else {
var last_space_index = (((cljs.core.count(comment_str) <= comment_width__$1))?(cljs.core.count(comment_str) - (1)):(((comment_width__$1 <= (0)))?(function (){var or__4131__auto__ = zprint.zprint.next_space(comment_str,(0));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (cljs.core.count(comment_str) - (1));
}
})():(function (){var or__4131__auto__ = zprint.zprint.last_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = zprint.zprint.next_space(comment_str,comment_width__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (cljs.core.count(comment_str) - (1));
}
}
})()));
var next_comment = clojure.string.trimr(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(comment_str,(0),(last_space_index + (1))));
var G__33946 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(comment_str,(last_space_index + (1)));
var G__33947 = (((cljs.core.count(out) === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_comment)].join(''),color,stype], null)):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks(start))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_comment)].join(''),color,new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)], null)));
comment_str = G__33946;
out = G__33947;
continue;
}
break;
}
}
});
/**
 * Takes the start of this vector and the vector itself.
 */
zprint.zprint.loc_vec = (function zprint$zprint$loc_vec(start,p__32603){
var vec__32604 = p__32603;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604,(0),null);
var split = zprint.zprint.split_lf(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(split),(1))){
return (start + cljs.core.count(s));
} else {
return cljs.core.count(cljs.core.last(split));
}
});
/**
 * Take a style-vec and produce a style-loc-vec with the starting column
 *   of each element in the style-vec.
 */
zprint.zprint.style_loc_vec = (function zprint$zprint$style_loc_vec(style_vec){
return cljs.core.butlast(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(zprint.zprint.loc_vec,(0),style_vec));
});
/**
 * Take a transient output vector and a vector and lift any style-vec elements
 *   out of the input vector.
 */
zprint.zprint.lift_vec = (function zprint$zprint$lift_vec(out_vec,element){
if(typeof cljs.core.first(element) === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out_vec,element);
} else {
var element_vec = element;
var out = out_vec;
while(true){
if(cljs.core.not(element_vec)){
return out;
} else {
var G__33961 = cljs.core.next(element_vec);
var G__33962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(element_vec));
element_vec = G__33961;
out = G__33962;
continue;
}
break;
}
}
});
/**
 * Take a style-vec [[s color type] [s color type] [[s color type]
 *   [s color type]] [s color type] ...] and lift out the inner vectors.
 */
zprint.zprint.lift_style_vec = (function zprint$zprint$lift_style_vec(style_vec){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zprint.lift_vec,cljs.core.PersistentVector.EMPTY,style_vec);
});
/**
 * Take the final output style-vec, and wrap any comments which run over
 *   the width. Looking for 
 */
zprint.zprint.fzprint_wrap_comments = (function zprint$zprint$fzprint_wrap_comments(p__32613,style_vec){
var map__32614 = p__32613;
var map__32614__$1 = (((((!((map__32614 == null))))?(((((map__32614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32614):map__32614);
var options = map__32614__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32614__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var start_col = zprint.zprint.style_loc_vec(style_vec);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: style-vec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0))], 0)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: start-col:",start_col], 0)):null);
var wrap_style_vec = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.wrap_comment,width),style_vec,start_col);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: wrap:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0))], 0)):null);
var out_style_vec = zprint.zprint.lift_style_vec(wrap_style_vec);
return out_style_vec;
});
/**
 * Try to bring inline comments back onto the line on which they belong.
 */
zprint.zprint.fzprint_inline_comments = (function zprint$zprint$fzprint_inline_comments(p__32617,style_vec){
var map__32618 = p__32617;
var map__32618__$1 = (((((!((map__32618 == null))))?(((((map__32618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32618):map__32618);
var options = map__32618__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32618__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cvec = style_vec;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cvec)){
return out;
} else {
var vec__32630 = cljs.core.first(cvec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32630,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32630,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32630,(2),null);
var element = vec__32630;
var vec__32633 = cljs.core.second(cvec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(1),null);
var ne = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(2),null);
var nn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(3),null);
var next_element = vec__32633;
var new_element = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"indent","indent",-148200125))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ne,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks(nn),c,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,c,new cljs.core.Keyword(null,"comment","comment",532206069)], null):element
));
var G__33992 = cljs.core.next(cvec);
var G__33993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_element);
cvec = G__33992;
out = G__33993;
continue;
}
break;
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint = (function zprint$zprint$fzprint(options,indent,zloc){
var zloc__$1 = ((cljs.core.not((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4120__auto__;
}
})()))?zloc:zprint.zutil.add_spec_to_docstring(zloc,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options))));
var style_vec = zprint.zprint.fzprint_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(0)], 0)),indent,zloc__$1);
return style_vec;
});
/**
 * Count lines in a string.
 */
zprint.zprint.line_count = (function zprint$zprint$line_count(s){
return (cljs.core.count(cljs.core.re_seq(/\n/,s)) + (1));
});
/**
 * Return a vector the lengths of lines.
 */
zprint.zprint.line_widths = (function zprint$zprint$line_widths(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n/));
});
/**
 * Split a string into lines, and figure the max width.
 */
zprint.zprint.max_width = (function zprint$zprint$max_width(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,zprint.zprint.line_widths(s));
});
/**
 * Takes a string, and expands tabs inside of the string based
 *   on a tab-size argument.
 */
zprint.zprint.expand_tabs = (function zprint$zprint$expand_tabs(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
case 2:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tab_size,s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var char_seq = cljs.core.seq(s);
var cur_len = cljs.core.long$((0));
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(char_seq)){
return cljs.core.persistent_BANG_(out);
} else {
var this_char = cljs.core.first(char_seq);
var tab_expansion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_char,"\t"))?(tab_size - cljs.core.mod(cur_len,tab_size)):null);
var G__34013 = cljs.core.rest(char_seq);
var G__34015 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_char,"\n"))?(0):(cur_len + cljs.core.long$((function (){var or__4131__auto__ = tab_expansion;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})())));
var G__34016 = (cljs.core.truth_(tab_expansion)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(zprint.zprint.conj_it_BANG_,out,cljs.core.seq(zprint.zprint.blanks(tab_expansion))):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,this_char));
char_seq = G__34013;
cur_len = G__34015;
out = G__34016;
continue;
}
break;
}
})());
});

zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1 = (function (s){
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((8),s);
});

zprint.zprint.expand_tabs.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zprint.zprint.r = (function (left,right,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k32645,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__32649 = k32645;
var G__32649__$1 = (((G__32649 instanceof cljs.core.Keyword))?G__32649.fqn:null);
switch (G__32649__$1) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32645,else__4388__auto__);

}
});

zprint.zprint.r.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__32650){
var vec__32651 = p__32650;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32651,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32651,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

zprint.zprint.r.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#zprint.zprint.r{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
});

zprint.zprint.r.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32644){
var self__ = this;
var G__32644__$1 = this;
return (new cljs.core.RecordIter((0),G__32644__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

zprint.zprint.r.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

zprint.zprint.r.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
});

zprint.zprint.r.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

zprint.zprint.r.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__32657 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1384233907 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__32657(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

zprint.zprint.r.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32646,other32647){
var self__ = this;
var this32646__$1 = this;
return (((!((other32647 == null)))) && ((this32646__$1.constructor === other32647.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32646__$1.left,other32647.left)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32646__$1.right,other32647.right)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32646__$1.__extmap,other32647.__extmap)));
});

zprint.zprint.r.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

zprint.zprint.r.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__32644){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__32660 = cljs.core.keyword_identical_QMARK_;
var expr__32661 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__32663 = new cljs.core.Keyword(null,"left","left",-399115937);
var G__32664 = expr__32661;
return (pred__32660.cljs$core$IFn$_invoke$arity$2 ? pred__32660.cljs$core$IFn$_invoke$arity$2(G__32663,G__32664) : pred__32660.call(null,G__32663,G__32664));
})())){
return (new zprint.zprint.r(G__32644,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32666 = new cljs.core.Keyword(null,"right","right",-452581833);
var G__32667 = expr__32661;
return (pred__32660.cljs$core$IFn$_invoke$arity$2 ? pred__32660.cljs$core$IFn$_invoke$arity$2(G__32666,G__32667) : pred__32660.call(null,G__32666,G__32667));
})())){
return (new zprint.zprint.r(self__.left,G__32644,self__.__meta,self__.__extmap,null));
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__32644),null));
}
}
});

zprint.zprint.r.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null))], null),self__.__extmap));
});

zprint.zprint.r.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__32644){
var self__ = this;
var this__4384__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,G__32644,self__.__extmap,self__.__hash));
});

zprint.zprint.r.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

zprint.zprint.r.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

zprint.zprint.r.cljs$lang$type = true;

zprint.zprint.r.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"zprint.zprint/r",null,(1),null));
});

zprint.zprint.r.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"zprint.zprint/r");
});

/**
 * Positional factory function for zprint.zprint/r.
 */
zprint.zprint.__GT_r = (function zprint$zprint$__GT_r(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

/**
 * Factory function for zprint.zprint/r, taking a map of keywords to field values.
 */
zprint.zprint.map__GT_r = (function zprint$zprint$map__GT_r(G__32648){
var extmap__4424__auto__ = (function (){var G__32671 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32648,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833)], 0));
if(cljs.core.record_QMARK_(G__32648)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32671);
} else {
return G__32671;
}
})();
return (new zprint.zprint.r(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__32648),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__32648),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

zprint.zprint.make_record = (function zprint$zprint$make_record(l,r){
return (new r(l,r));
});

//# sourceMappingURL=zprint.zprint.js.map
