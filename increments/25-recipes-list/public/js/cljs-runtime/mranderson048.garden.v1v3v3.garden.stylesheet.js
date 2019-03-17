goog.provide('mranderson048.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('mranderson048.garden.v1v3v3.garden.util');
goog.require('mranderson048.garden.v1v3v3.garden.color');
goog.require('mranderson048.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26497 = arguments.length;
var i__4731__auto___26498 = (0);
while(true){
if((i__4731__auto___26498 < len__4730__auto___26497)){
args__4736__auto__.push((arguments[i__4731__auto___26498]));

var G__26499 = (i__4731__auto___26498 + (1));
i__4731__auto___26498 = G__26499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__26501__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__26501 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__26502__i = 0, G__26502__a = new Array(arguments.length -  0);
while (G__26502__i < G__26502__a.length) {G__26502__a[G__26502__i] = arguments[G__26502__i + 0]; ++G__26502__i;}
  children = new cljs.core.IndexedSeq(G__26502__a,0,null);
} 
return G__26501__delegate.call(this,children);};
G__26501.cljs$lang$maxFixedArity = 0;
G__26501.cljs$lang$applyTo = (function (arglist__26503){
var children = cljs.core.seq(arglist__26503);
return G__26501__delegate(children);
});
G__26501.cljs$core$IFn$_invoke$arity$variadic = G__26501__delegate;
return G__26501;
})()
;
}
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq26468){
var G__26469 = cljs.core.first(seq26468);
var seq26468__$1 = cljs.core.next(seq26468);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26469,seq26468__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.cssfn = (function mranderson048$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__26504__delegate = function (args){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__26504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26505__i = 0, G__26505__a = new Array(arguments.length -  0);
while (G__26505__i < G__26505__a.length) {G__26505__a[G__26505__i] = arguments[G__26505__i + 0]; ++G__26505__i;}
  args = new cljs.core.IndexedSeq(G__26505__a,0,null);
} 
return G__26504__delegate.call(this,args);};
G__26504.cljs$lang$maxFixedArity = 0;
G__26504.cljs$lang$applyTo = (function (arglist__26506){
var args = cljs.core.seq(arglist__26506);
return G__26504__delegate(args);
});
G__26504.cljs$core$IFn$_invoke$arity$variadic = G__26504__delegate;
return G__26504;
})()
;
});
mranderson048.garden.v1v3v3.garden.stylesheet.at_rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26507 = arguments.length;
var i__4731__auto___26508 = (0);
while(true){
if((i__4731__auto___26508 < len__4730__auto___26507)){
args__4736__auto__.push((arguments[i__4731__auto___26508]));

var G__26509 = (i__4731__auto___26508 + (1));
i__4731__auto___26508 = G__26509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq26481){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26481));
});

/**
 * Create a CSS @import rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__26485 = arguments.length;
switch (G__26485) {
case 1:
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___26511 = arguments.length;
var i__4731__auto___26512 = (0);
while(true){
if((i__4731__auto___26512 < len__4730__auto___26511)){
args_arr__4751__auto__.push((arguments[i__4731__auto___26512]));

var G__26513 = (i__4731__auto___26512 + (1));
i__4731__auto___26512 = G__26513;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq26483){
var G__26484 = cljs.core.first(seq26483);
var seq26483__$1 = cljs.core.next(seq26483);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26484,seq26483__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26516 = arguments.length;
var i__4731__auto___26517 = (0);
while(true){
if((i__4731__auto___26517 < len__4730__auto___26516)){
args__4736__auto__.push((arguments[i__4731__auto___26517]));

var G__26518 = (i__4731__auto___26517 + (1));
i__4731__auto___26517 = G__26518;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq26487){
var G__26488 = cljs.core.first(seq26487);
var seq26487__$1 = cljs.core.next(seq26487);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26488,seq26487__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26520 = arguments.length;
var i__4731__auto___26522 = (0);
while(true){
if((i__4731__auto___26522 < len__4730__auto___26520)){
args__4736__auto__.push((arguments[i__4731__auto___26522]));

var G__26523 = (i__4731__auto___26522 + (1));
i__4731__auto___26522 = G__26523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq26491){
var G__26492 = cljs.core.first(seq26491);
var seq26491__$1 = cljs.core.next(seq26491);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26492,seq26491__$1);
});

/**
 * Create a color from RGB values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rgb = (function mranderson048$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.hsl = (function mranderson048$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=mranderson048.garden.v1v3v3.garden.stylesheet.js.map
