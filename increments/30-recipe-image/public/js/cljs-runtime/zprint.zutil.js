goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__30946 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30946,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30946,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Turn an uneval zloc with #_ starting it into a zipper.
 */
zprint.zutil.zparseuneval = (function zprint$zutil$zparseuneval(zloc){
var G__30952 = rewrite_clj.parser.parse_string(clojure.string.triml(clojure.string.replace_first((zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc)),/#_/,"")));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__30952) : zprint.zutil.edn_STAR_.call(null,G__30952));
});
/**
 * Turn a zloc into an #_ uneval zipper.
 */
zprint.zutil.zcreateuneval = (function zprint$zutil$zcreateuneval(zloc){
var G__30955 = rewrite_clj.parser.parse_string(clojure.string.triml(["#_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc)))].join('')));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__30955) : zprint.zutil.edn_STAR_.call(null,G__30955));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5455__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5455__auto__)){
var first_loc = temp__5455__auto__;
var temp__5455__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5455__auto____$1)){
var nloc = temp__5455__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__30965 = zprint.zutil.zfirst(zloc);
var G__30965__$1 = (((G__30965 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__30965) : zprint.zutil.right_STAR_.call(null,G__30965)));
var G__30965__$2 = (((G__30965__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30965__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30965__$1)));
var G__30965__$3 = (((G__30965__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__30965__$2) : zprint.zutil.right_STAR_.call(null,G__30965__$2)));
if((G__30965__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30965__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30965__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__30968 = zprint.zutil.zfirst(zloc);
var G__30968__$1 = (((G__30968 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__30968) : zprint.zutil.right_STAR_.call(null,G__30968)));
var G__30968__$2 = (((G__30968__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30968__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30968__$1)));
var G__30968__$3 = (((G__30968__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__30968__$2) : zprint.zutil.right_STAR_.call(null,G__30968__$2)));
var G__30968__$4 = (((G__30968__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30968__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30968__$3)));
var G__30968__$5 = (((G__30968__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__30968__$4) : zprint.zutil.right_STAR_.call(null,G__30968__$4)));
if((G__30968__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30968__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__30968__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5455__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__31393 = zprint.zutil.zrightnws(nloc);
var G__31394 = nloc;
nloc = G__31393;
ploc = G__31394;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5455__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__31399 = zprint.zutil.zleftnws(nloc);
var G__31400 = nloc;
nloc = G__31399;
ploc = G__31400;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_((rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.end_QMARK_.call(null,zloc)))){
return zloc;
} else {
var temp__5455__auto__ = (zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.next_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5455__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var ploc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = (function (){var G__30976 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__30976) : zprint.zutil.skip_whitespace.call(null,G__30976));
})();
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__31403 = zprint.zutil.zrightnws(nloc);
var G__31404 = (i - (1));
nloc = G__31403;
i = G__31404;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = (function (){var G__30990 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__30990) : zprint.zutil.skip_whitespace.call(null,G__30990));
})();
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__31407 = zprint.zutil.zrightnws(nloc);
var G__31408 = (i + (1));
nloc = G__31407;
i = G__31408;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__31413 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__31414 = (function (){var temp__5455__auto__ = ((cljs.core.not((function (){var and__4120__auto__ = (zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc));
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4120__auto__;
}
})()))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5455__auto__)){
var result = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__31413;
out = G__31414;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__31417 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__31418 = (function (){var temp__5455__auto__ = ((cljs.core.not((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5455__auto__)){
var result = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__31417;
out = G__31418;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__31420 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__31421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__31420;
out = G__31421;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__31422 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__31423 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))));
nloc = G__31422;
out = G__31423;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count(zprint.zutil.zseqnws(zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__31426 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__31427 = (0);
var G__31428 = cljs.core.cons(left,out);
nloc = G__31426;
left = G__31427;
out = G__31428;
continue;
}
} else {
var G__31429 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__31430 = (left + (1));
var G__31431 = out;
nloc = G__31429;
left = G__31430;
out = G__31431;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__31440 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__31441 = (0);
var G__31442 = cljs.core.cons(left,out);
nloc = G__31440;
left = G__31441;
out = G__31442;
continue;
}
} else {
var G__31444 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__31445 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?left:(left + (1)));
var G__31446 = out;
nloc = G__31444;
left = G__31445;
out = G__31446;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__31451 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__31451;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__31452 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__31453 = (remaining_right - (1));
nloc = G__31452;
remaining_right = G__31453;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__31111 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__31111) : rewrite_clj.node.printable_only_QMARK_.call(null,G__31111));
})())));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__31129 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__31129) : rewrite_clj.zip.down.call(null,G__31129));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__31135 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__31135) : rewrite_clj.zip.down.call(null,G__31135));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__31139 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31139) : zprint.zutil.edn_STAR_.call(null,G__31139));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
var G__31141 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__31141) : zprint.zutil.zconstant_QMARK_.call(null,G__31141));
} else {
var and__4120__auto__ = cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (typeof sexpr === 'number'));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
var spaces = (0);
while(true){
var tnloc = (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.tag.call(null,nloc));
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__31489 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__31490 = ((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) + spaces);
nloc = G__31489;
spaces = G__31490;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof (function (){var G__31148 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__31148) : zprint.zutil.sexpr.call(null,G__31148));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__31492 = (function (){var G__31149 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__31149) : rewrite_clj.zip.right.call(null,G__31149));
})();
nloc = G__31492;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__31153 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__31153) : rewrite_clj.zip.string.call(null,G__31153));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__31160 = (function (){var G__31161 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__31161) : rewrite_clj.zip.right.call(null,G__31161));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__31160) : rewrite_clj.zip.right.call(null,G__31160));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__31162 = (function (){var G__31163 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__31163) : rewrite_clj.zip.right.call(null,G__31163));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__31162) : rewrite_clj.zip.down.call(null,G__31162));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5455__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5455__auto__)){
var doc_zloc = temp__5455__auto__;
var new_doc_zloc = (function (){var G__31170 = doc_zloc;
var G__31171 = (function (){var G__31172 = (function (){var G__31173 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31173) : zprint.zutil.edn_STAR_.call(null,G__31173));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__31172) : rewrite_clj.zip.node.call(null,G__31172));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__31170,G__31171) : zprint.zutil.replace_STAR_.call(null,G__31170,G__31171));
})();
var G__31174 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31174) : zprint.zutil.edn_STAR_.call(null,G__31174));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__31212 = cljs.core.first(pair_seq__$1);
var seq__31213 = cljs.core.seq(vec__31212);
var first__31214 = cljs.core.first(seq__31213);
var seq__31213__$1 = cljs.core.next(seq__31213);
var k = first__31214;
var rest_of_pair = seq__31213__$1;
var pair = vec__31212;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),(0),(2)),"::");
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,current_ns)){
var G__31499 = ns;
var G__31500 = cljs.core.next(pair_seq__$1);
var G__31501 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__31228 = (function (){var G__31229 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__31229) : rewrite_clj.node.token_node.call(null,G__31229));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31228) : zprint.zutil.edn_STAR_.call(null,G__31228));
})(),rest_of_pair));
ns = G__31499;
pair_seq__$1 = G__31500;
out = G__31501;
continue;
} else {
return null;
}
} else {
var G__31503 = current_ns;
var G__31504 = cljs.core.next(pair_seq__$1);
var G__31505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__31230 = (function (){var G__31232 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__31232) : rewrite_clj.node.token_node.call(null,G__31232));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31230) : zprint.zutil.edn_STAR_.call(null,G__31230));
})(),rest_of_pair));
ns = G__31503;
pair_seq__$1 = G__31504;
out = G__31505;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__31506 = ns;
var G__31507 = cljs.core.next(pair_seq__$1);
var G__31508 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__31506;
pair_seq__$1 = G__31507;
out = G__31508;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__31234 = zprint.zfns.zstring;
var znumstr_orig_val__31235 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__31236 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__31237 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__31238 = zprint.zfns.zsexpr;
var zseqnws_orig_val__31239 = zprint.zfns.zseqnws;
var zmap_right_orig_val__31240 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__31241 = zprint.zfns.zfocus_style;
var zfirst_orig_val__31242 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__31243 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__31244 = zprint.zfns.zsecond;
var zthird_orig_val__31245 = zprint.zfns.zthird;
var zfourth_orig_val__31246 = zprint.zfns.zfourth;
var znthnext_orig_val__31247 = zprint.zfns.znthnext;
var zcount_orig_val__31248 = zprint.zfns.zcount;
var zmap_orig_val__31249 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__31250 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__31251 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__31252 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__31253 = zprint.zfns.zfocus;
var zfind_path_orig_val__31254 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__31255 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__31256 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__31257 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__31258 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__31259 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__31260 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__31261 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__31262 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__31263 = zprint.zfns.ztag;
var zparseuneval_orig_val__31264 = zprint.zfns.zparseuneval;
var zlast_orig_val__31265 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__31266 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__31267 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__31268 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__31269 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__31270 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__31271 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__31273 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__31274 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__31275 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__31276 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__31277 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__31278 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__31279 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__31280 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__31281 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__31282 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__31284 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__31285 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__31286 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__31287 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__31288 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__31289 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__31290 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__31291 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__31292 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__31293 = zprint.zfns.zfind;
var zstring_temp_val__31294 = rewrite_clj.zip.string;
var znumstr_temp_val__31295 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__31296 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__31297 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__31298 = zprint.zutil.sexpr;
var zseqnws_temp_val__31299 = zprint.zutil.zseqnws;
var zmap_right_temp_val__31300 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__31301 = zprint.zutil.zfocus_style;
var zfirst_temp_val__31302 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__31303 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__31304 = zprint.zutil.zsecond;
var zthird_temp_val__31305 = zprint.zutil.zthird;
var zfourth_temp_val__31306 = zprint.zutil.zfourth;
var znthnext_temp_val__31307 = zprint.zutil.znthnext;
var zcount_temp_val__31308 = zprint.zutil.zcount;
var zmap_temp_val__31309 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__31310 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__31311 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__31312 = cljs.core.constantly(false);
var zfocus_temp_val__31313 = zprint.zutil.zfocus;
var zfind_path_temp_val__31314 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__31315 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__31316 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__31317 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__31318 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__31319 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__31320 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__31321 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__31322 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__31323 = zprint.zutil.ztag;
var zparseuneval_temp_val__31324 = zprint.zutil.zparseuneval;
var zlast_temp_val__31325 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__31326 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__31327 = cljs.core.constantly(false);
var zderef_temp_val__31328 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__31329 = cljs.core.constantly(false);
var zns_QMARK__temp_val__31330 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__31331 = cljs.core.constantly(null);
var zexpandarray_temp_val__31332 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__31333 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__31334 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__31335 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__31336 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__31337 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__31338 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__31339 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__31340 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__31341 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__31342 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__31343 = cljs.core.constantly(null);
var zdotdotdot_temp_val__31344 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__31345 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__31346 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__31347 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__31348 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__31349 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__31350 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__31351 = zprint.zutil.zfind;
zprint.zfns.zstring = zstring_temp_val__31294;

zprint.zfns.znumstr = znumstr_temp_val__31295;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__31296;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__31297;

zprint.zfns.zsexpr = zsexpr_temp_val__31298;

zprint.zfns.zseqnws = zseqnws_temp_val__31299;

zprint.zfns.zmap_right = zmap_right_temp_val__31300;

zprint.zfns.zfocus_style = zfocus_style_temp_val__31301;

zprint.zfns.zfirst = zfirst_temp_val__31302;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__31303;

zprint.zfns.zsecond = zsecond_temp_val__31304;

zprint.zfns.zthird = zthird_temp_val__31305;

zprint.zfns.zfourth = zfourth_temp_val__31306;

zprint.zfns.znthnext = znthnext_temp_val__31307;

zprint.zfns.zcount = zcount_temp_val__31308;

zprint.zfns.zmap = zmap_temp_val__31309;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__31310;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__31311;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__31312;

zprint.zfns.zfocus = zfocus_temp_val__31313;

zprint.zfns.zfind_path = zfind_path_temp_val__31314;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__31315;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__31316;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__31317;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__31318;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__31319;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__31320;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__31321;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__31322;

zprint.zfns.ztag = ztag_temp_val__31323;

zprint.zfns.zparseuneval = zparseuneval_temp_val__31324;

zprint.zfns.zlast = zlast_temp_val__31325;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__31326;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__31327;

zprint.zfns.zderef = zderef_temp_val__31328;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__31329;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__31330;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__31331;

zprint.zfns.zexpandarray = zexpandarray_temp_val__31332;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__31333;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__31334;

zprint.zfns.zmap_all = zmap_all_temp_val__31335;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__31336;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__31337;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__31338;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__31339;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__31340;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__31341;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__31342;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__31343;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__31344;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__31345;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__31346;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__31347;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__31348;

zprint.zfns.zlift_ns = zlift_ns_temp_val__31349;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__31350;

zprint.zfns.zfind = zfind_temp_val__31351;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {zprint.zfns.zfind = zfind_orig_val__31293;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__31292;

zprint.zfns.zlift_ns = zlift_ns_orig_val__31291;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__31290;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__31289;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__31288;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__31287;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__31286;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__31285;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__31284;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__31282;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__31281;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__31280;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__31279;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__31278;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__31277;

zprint.zfns.zmap_all = zmap_all_orig_val__31276;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__31275;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__31274;

zprint.zfns.zexpandarray = zexpandarray_orig_val__31273;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__31271;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__31270;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__31269;

zprint.zfns.zderef = zderef_orig_val__31268;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__31267;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__31266;

zprint.zfns.zlast = zlast_orig_val__31265;

zprint.zfns.zparseuneval = zparseuneval_orig_val__31264;

zprint.zfns.ztag = ztag_orig_val__31263;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__31262;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__31261;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__31260;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__31259;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__31258;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__31257;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__31256;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__31255;

zprint.zfns.zfind_path = zfind_path_orig_val__31254;

zprint.zfns.zfocus = zfocus_orig_val__31253;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__31252;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__31251;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__31250;

zprint.zfns.zmap = zmap_orig_val__31249;

zprint.zfns.zcount = zcount_orig_val__31248;

zprint.zfns.znthnext = znthnext_orig_val__31247;

zprint.zfns.zfourth = zfourth_orig_val__31246;

zprint.zfns.zthird = zthird_orig_val__31245;

zprint.zfns.zsecond = zsecond_orig_val__31244;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__31243;

zprint.zfns.zfirst = zfirst_orig_val__31242;

zprint.zfns.zfocus_style = zfocus_style_orig_val__31241;

zprint.zfns.zmap_right = zmap_right_orig_val__31240;

zprint.zfns.zseqnws = zseqnws_orig_val__31239;

zprint.zfns.zsexpr = zsexpr_orig_val__31238;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__31237;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__31236;

zprint.zfns.znumstr = znumstr_orig_val__31235;

zprint.zfns.zstring = zstring_orig_val__31234;
}});

//# sourceMappingURL=zprint.zutil.js.map
