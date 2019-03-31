goog.provide('mranderson048.reagent.v0v8v0.reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.imported !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.imported = null;
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.roots !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
mranderson048.reagent.v0v8v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__20837 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20838 = true;
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20838;

try{var G__20839 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__20840 = container;
var G__20841 = ((function (G__20839,G__20840,_STAR_always_update_STAR__orig_val__20837,_STAR_always_update_STAR__temp_val__20838){
return (function (){
var _STAR_always_update_STAR__orig_val__20842 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20843 = false;
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20843;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20842;
}});})(G__20839,G__20840,_STAR_always_update_STAR__orig_val__20837,_STAR_always_update_STAR__temp_val__20838))
;
return module$node_modules$react_dom$index.render(G__20839,G__20840,G__20841);
}finally {mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20837;
}});
mranderson048.reagent.v0v8v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v8v0.reagent.dom.render = (function mranderson048$reagent$v0v8v0$reagent$dom$render(var_args){
var G__20845 = arguments.length;
switch (G__20845) {
case 2:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var f = (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp(f,container,callback);
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson048.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v8v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v8v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v8v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson048.reagent.v0v8v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v8v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

var seq__20851_20861 = cljs.core.seq(cljs.core.vals(cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.dom.roots)));
var chunk__20852_20862 = null;
var count__20853_20863 = (0);
var i__20854_20864 = (0);
while(true){
if((i__20854_20864 < count__20853_20863)){
var v_20866 = chunk__20852_20862.cljs$core$IIndexed$_nth$arity$2(null,i__20854_20864);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_20866);


var G__20867 = seq__20851_20861;
var G__20868 = chunk__20852_20862;
var G__20869 = count__20853_20863;
var G__20870 = (i__20854_20864 + (1));
seq__20851_20861 = G__20867;
chunk__20852_20862 = G__20868;
count__20853_20863 = G__20869;
i__20854_20864 = G__20870;
continue;
} else {
var temp__5457__auto___20871 = cljs.core.seq(seq__20851_20861);
if(temp__5457__auto___20871){
var seq__20851_20872__$1 = temp__5457__auto___20871;
if(cljs.core.chunked_seq_QMARK_(seq__20851_20872__$1)){
var c__4550__auto___20873 = cljs.core.chunk_first(seq__20851_20872__$1);
var G__20874 = cljs.core.chunk_rest(seq__20851_20872__$1);
var G__20875 = c__4550__auto___20873;
var G__20876 = cljs.core.count(c__4550__auto___20873);
var G__20877 = (0);
seq__20851_20861 = G__20874;
chunk__20852_20862 = G__20875;
count__20853_20863 = G__20876;
i__20854_20864 = G__20877;
continue;
} else {
var v_20878 = cljs.core.first(seq__20851_20872__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_20878);


var G__20879 = cljs.core.next(seq__20851_20872__$1);
var G__20880 = null;
var G__20881 = (0);
var G__20882 = (0);
seq__20851_20861 = G__20879;
chunk__20852_20862 = G__20880;
count__20853_20863 = G__20881;
i__20854_20864 = G__20882;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.dom.js.map
