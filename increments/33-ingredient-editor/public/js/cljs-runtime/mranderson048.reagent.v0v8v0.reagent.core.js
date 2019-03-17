goog.provide('mranderson048.reagent.v0v8v0.reagent.core');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.component');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
goog.require('mranderson048.reagent.v0v8v0.reagent.dom');
mranderson048.reagent.v0v8v0.reagent.core.is_client = mranderson048.reagent.v0v8v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
mranderson048.reagent.v0v8v0.reagent.core.create_element = (function mranderson048$reagent$v0v8v0$reagent$core$create_element(var_args){
var G__20911 = arguments.length;
switch (G__20911) {
case 1:
return mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20936 = arguments.length;
var i__4731__auto___20937 = (0);
while(true){
if((i__4731__auto___20937 < len__4730__auto___20936)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20937]));

var G__20938 = (i__4731__auto___20937 + (1));
i__4731__auto___20937 = G__20938;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});

mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
});

mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
});

mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
});

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq20907){
var G__20908 = cljs.core.first(seq20907);
var seq20907__$1 = cljs.core.next(seq20907);
var G__20909 = cljs.core.first(seq20907__$1);
var seq20907__$2 = cljs.core.next(seq20907__$1);
var G__20910 = cljs.core.first(seq20907__$2);
var seq20907__$3 = cljs.core.next(seq20907__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20908,G__20909,G__20910,seq20907__$3);
});

mranderson048.reagent.v0v8v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
mranderson048.reagent.v0v8v0.reagent.core.as_element = (function mranderson048$reagent$v0v8v0$reagent$core$as_element(form){
return mranderson048.reagent.v0v8v0.reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
mranderson048.reagent.v0v8v0.reagent.core.adapt_react_class = (function mranderson048$reagent$v0v8v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
mranderson048.reagent.v0v8v0.reagent.core.reactify_component = (function mranderson048$reagent$v0v8v0$reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v8v0.reagent.core.render = (function mranderson048$reagent$v0v8v0$reagent$core$render(var_args){
var G__20913 = arguments.length;
switch (G__20913) {
case 2:
return mranderson048.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
});

mranderson048.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,callback);
});

mranderson048.reagent.v0v8v0.reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
mranderson048.reagent.v0v8v0.reagent.core.unmount_component_at_node = (function mranderson048$reagent$v0v8v0$reagent$core$unmount_component_at_node(container){
return mranderson048.reagent.v0v8v0.reagent.dom.unmount_component_at_node(container);
});
mranderson048.reagent.v0v8v0.reagent.core.as_component = mranderson048.reagent.v0v8v0.reagent.core.as_element;
mranderson048.reagent.v0v8v0.reagent.core.render_component = mranderson048.reagent.v0v8v0.reagent.core.render;
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
mranderson048.reagent.v0v8v0.reagent.core.force_update_all = (function mranderson048$reagent$v0v8v0$reagent$core$force_update_all(){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

mranderson048.reagent.v0v8v0.reagent.dom.force_update_all();

return mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render();
});
goog.exportSymbol('mranderson048.reagent.v0v8v0.reagent.core.force_update_all', mranderson048.reagent.v0v8v0.reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
mranderson048.reagent.v0v8v0.reagent.core.create_class = (function mranderson048$reagent$v0v8v0$reagent$core$create_class(spec){
return mranderson048.reagent.v0v8v0.reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
mranderson048.reagent.v0v8v0.reagent.core.current_component = (function mranderson048$reagent$v0v8v0$reagent$core$current_component(){
return mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
mranderson048.reagent.v0v8v0.reagent.core.state_atom = (function mranderson048$reagent$v0v8v0$reagent$core$state_atom(this$){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a mranderson048.reagent.v0v8v0.reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
mranderson048.reagent.v0v8v0.reagent.core.state = (function mranderson048$reagent$v0v8v0$reagent$core$state(this$){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a mranderson048.reagent.v0v8v0.reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
mranderson048.reagent.v0v8v0.reagent.core.replace_state = (function mranderson048$reagent$v0v8v0$reagent$core$replace_state(this$,new_state){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a mranderson048.reagent.v0v8v0.reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
mranderson048.reagent.v0v8v0.reagent.core.set_state = (function mranderson048$reagent$v0v8v0$reagent$core$set_state(this$,new_state){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a mranderson048.reagent.v0v8v0.reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.reagent.v0v8v0.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
mranderson048.reagent.v0v8v0.reagent.core.force_update = (function mranderson048$reagent$v0v8v0$reagent$core$force_update(var_args){
var G__20915 = arguments.length;
switch (G__20915) {
case 1:
return mranderson048.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return mranderson048.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
});

mranderson048.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

mranderson048.reagent.v0v8v0.reagent.impl.util.force_update(this$,deep);

return mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render();
});

mranderson048.reagent.v0v8v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
mranderson048.reagent.v0v8v0.reagent.core.props = (function mranderson048$reagent$v0v8v0$reagent$core$props(this$){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a mranderson048.reagent.v0v8v0.reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
mranderson048.reagent.v0v8v0.reagent.core.children = (function mranderson048$reagent$v0v8v0$reagent$core$children(this$){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a mranderson048.reagent.v0v8v0.reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
mranderson048.reagent.v0v8v0.reagent.core.argv = (function mranderson048$reagent$v0v8v0$reagent$core$argv(this$){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a mranderson048.reagent.v0v8v0.reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.component.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v8v0.reagent.core.dom_node = (function mranderson048$reagent$v0v8v0$reagent$core$dom_node(this$){
return mranderson048.reagent.v0v8v0.reagent.dom.dom_node(this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
mranderson048.reagent.v0v8v0.reagent.core.merge_props = (function mranderson048$reagent$v0v8v0$reagent$core$merge_props(defaults,props){
return mranderson048.reagent.v0v8v0.reagent.impl.util.merge_props(defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
mranderson048.reagent.v0v8v0.reagent.core.flush = (function mranderson048$reagent$v0v8v0$reagent$core$flush(){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
mranderson048.reagent.v0v8v0.reagent.core.atom = (function mranderson048$reagent$v0v8v0$reagent$core$atom(var_args){
var G__20919 = arguments.length;
switch (G__20919) {
case 1:
return mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___20950 = arguments.length;
var i__4731__auto___20951 = (0);
while(true){
if((i__4731__auto___20951 < len__4730__auto___20950)){
args_arr__4751__auto__.push((arguments[i__4731__auto___20951]));

var G__20952 = (i__4731__auto___20951 + (1));
i__4731__auto___20951 = G__20952;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});

mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(mranderson048.reagent.v0v8v0.reagent.ratom.atom,x,rest);
});

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$lang$applyTo = (function (seq20917){
var G__20918 = cljs.core.first(seq20917);
var seq20917__$1 = cljs.core.next(seq20917);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20918,seq20917__$1);
});

mranderson048.reagent.v0v8v0.reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
mranderson048.reagent.v0v8v0.reagent.core.track = (function mranderson048$reagent$v0v8v0$reagent$core$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20956 = arguments.length;
var i__4731__auto___20957 = (0);
while(true){
if((i__4731__auto___20957 < len__4730__auto___20956)){
args__4736__auto__.push((arguments[i__4731__auto___20957]));

var G__20958 = (i__4731__auto___20957 + (1));
i__4731__auto___20957 = G__20958;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.make_track(f,args);
});

mranderson048.reagent.v0v8v0.reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.core.track.cljs$lang$applyTo = (function (seq20920){
var G__20921 = cljs.core.first(seq20920);
var seq20920__$1 = cljs.core.next(seq20920);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20921,seq20920__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
mranderson048.reagent.v0v8v0.reagent.core.track_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$core$track_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20959 = arguments.length;
var i__4731__auto___20960 = (0);
while(true){
if((i__4731__auto___20960 < len__4730__auto___20959)){
args__4736__auto__.push((arguments[i__4731__auto___20960]));

var G__20961 = (i__4731__auto___20960 + (1));
i__4731__auto___20960 = G__20961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.make_track_BANG_(f,args);
});

mranderson048.reagent.v0v8v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq20922){
var G__20923 = cljs.core.first(seq20922);
var seq20922__$1 = cljs.core.next(seq20922);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20923,seq20922__$1);
});

/**
 * Stop the result of track! from updating.
 */
mranderson048.reagent.v0v8v0.reagent.core.dispose_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$core$dispose_BANG_(x){
return mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
mranderson048.reagent.v0v8v0.reagent.core.wrap = (function mranderson048$reagent$v0v8v0$reagent$core$wrap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20962 = arguments.length;
var i__4731__auto___20963 = (0);
while(true){
if((i__4731__auto___20963 < len__4730__auto___20962)){
args__4736__auto__.push((arguments[i__4731__auto___20963]));

var G__20964 = (i__4731__auto___20963 + (1));
i__4731__auto___20963 = G__20964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0))].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.make_wrapper(value,reset_fn,args);
});

mranderson048.reagent.v0v8v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq20924){
var G__20925 = cljs.core.first(seq20924);
var seq20924__$1 = cljs.core.next(seq20924);
var G__20926 = cljs.core.first(seq20924__$1);
var seq20924__$2 = cljs.core.next(seq20924__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20925,G__20926,seq20924__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
mranderson048.reagent.v0v8v0.reagent.core.cursor = (function mranderson048$reagent$v0v8v0$reagent$core$cursor(src,path){
return mranderson048.reagent.v0v8v0.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
mranderson048.reagent.v0v8v0.reagent.core.rswap_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$core$rswap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20967 = arguments.length;
var i__4731__auto___20968 = (0);
while(true){
if((i__4731__auto___20968 < len__4730__auto___20967)){
args__4736__auto__.push((arguments[i__4731__auto___20968]));

var G__20969 = (i__4731__auto___20968 + (1));
i__4731__auto___20968 = G__20969;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4131__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__20927_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__20927_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5459__auto__ = (function (){var G__20932 = a.rswapfs;
if((G__20932 == null)){
return null;
} else {
return G__20932.shift();
}
})();
if((temp__5459__auto__ == null)){
return s;
} else {
var sf = temp__5459__auto__;
var G__20970 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__20970;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

mranderson048.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq20928){
var G__20929 = cljs.core.first(seq20928);
var seq20928__$1 = cljs.core.next(seq20928);
var G__20930 = cljs.core.first(seq20928__$1);
var seq20928__$2 = cljs.core.next(seq20928__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20929,G__20930,seq20928__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
mranderson048.reagent.v0v8v0.reagent.core.next_tick = (function mranderson048$reagent$v0v8v0$reagent$core$next_tick(f){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
mranderson048.reagent.v0v8v0.reagent.core.after_render = (function mranderson048$reagent$v0v8v0$reagent$core$after_render(f){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
mranderson048.reagent.v0v8v0.reagent.core.partial = (function mranderson048$reagent$v0v8v0$reagent$core$partial(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20972 = arguments.length;
var i__4731__auto___20973 = (0);
while(true){
if((i__4731__auto___20973 < len__4730__auto___20972)){
args__4736__auto__.push((arguments[i__4731__auto___20973]));

var G__20975 = (i__4731__auto___20973 + (1));
i__4731__auto___20973 = G__20975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return mranderson048.reagent.v0v8v0.reagent.impl.util.make_partial_fn(f,args);
});

mranderson048.reagent.v0v8v0.reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.core.partial.cljs$lang$applyTo = (function (seq20933){
var G__20934 = cljs.core.first(seq20933);
var seq20933__$1 = cljs.core.next(seq20933);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20934,seq20933__$1);
});

mranderson048.reagent.v0v8v0.reagent.core.component_path = (function mranderson048$reagent$v0v8v0$reagent$core$component_path(c){
return mranderson048.reagent.v0v8v0.reagent.impl.component.component_path(c);
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.core.js.map
