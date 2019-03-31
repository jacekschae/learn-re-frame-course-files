goog.provide('mranderson048.reagent.v0v8v0.reagent.impl.component');
goog.require('cljs.core');
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
mranderson048.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map = (function mranderson048$reagent$v0v8v0$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__20772 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__20773 = (i + (1));
m = G__20772;
i = G__20773;
continue;
} else {
return m;
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.extract_props = (function mranderson048$reagent$v0v8v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.extract_children = (function mranderson048$reagent$v0v8v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv = (function mranderson048$reagent$v0v8v0$reagent$impl$component$props_argv(c,p){
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,mranderson048.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__5459__auto__;
return a;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_argv = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_argv(c){
return mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,(c["props"]));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_props = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__5459__auto__;
return mranderson048.reagent.v0v8v0.reagent.impl.component.extract_props(v);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_children = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__20433 = (p["children"]);
return module$node_modules$react$index.Children.toArray(G__20433);
})());
} else {
var v = temp__5459__auto__;
return mranderson048.reagent.v0v8v0.reagent.impl.component.extract_children(v);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__20459 = c;
var G__20459__$1 = (((G__20459 == null))?null:G__20459.prototype);
if((G__20459__$1 == null)){
return null;
} else {
return (G__20459__$1["reagentRender"]);
}
})() == null)))));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__20466 = c;
var G__20466__$1 = (((G__20466 == null))?null:G__20466.prototype);
if((G__20466__$1 == null)){
return null;
} else {
return (G__20466__$1["render"]);
}
})() == null)))));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$component$reagent_component_QMARK_(c){
return (!(((c["reagentRender"]) == null)));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.cached_react_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.cache_react_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.state_atom = (function mranderson048$reagent$v0v8v0$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if((!((sa == null)))){
return sa;
} else {
return (this$["cljsState"] = mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.component !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.component.as_element !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.impl.component.as_element = null;
}
mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_render = (function mranderson048$reagent$v0v8v0$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = mranderson048.reagent.v0v8v0.reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__20508 = n;
switch (G__20508) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.call(null,res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__20790__delegate = function (args){
var G__20542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__20542) : mranderson048.reagent.v0v8v0.reagent.impl.component.as_element.call(null,G__20542));
};
var G__20790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20792__i = 0, G__20792__a = new Array(arguments.length -  0);
while (G__20792__i < G__20792__a.length) {G__20792__a[G__20792__i] = arguments[G__20792__i + 0]; ++G__20792__i;}
  args = new cljs.core.IndexedSeq(G__20792__a,0,null);
} 
return G__20790__delegate.call(this,args);};
G__20790.cljs$lang$maxFixedArity = 0;
G__20790.cljs$lang$applyTo = (function (arglist__20793){
var args = cljs.core.seq(arglist__20793);
return G__20790__delegate(args);
});
G__20790.cljs$core$IFn$_invoke$arity$variadic = G__20790__delegate;
return G__20790;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__20794 = c;
c = G__20794;
continue;
} else {
return res;

}
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.do_render = (function mranderson048$reagent$v0v8v0$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR__orig_val__20567 = mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__20568 = c;
mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__20568;

try{var ok = [false];
try{var res = mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_render(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).error(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1((mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.call(null)))].join(''));
} else {
}
}
}
}finally {mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__20567;
}});
mranderson048.reagent.v0v8v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
mranderson048.reagent.v0v8v0.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function mranderson048$reagent$v0v8v0$reagent$impl$component$render(){
var c = this;
if(mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_non_reactive_STAR_){
return mranderson048.reagent.v0v8v0.reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
mranderson048.reagent.v0v8v0.reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return mranderson048.reagent.v0v8v0.reagent.ratom.run_in_reaction(((function (rat,c){
return (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.component.do_render(c);
});})(rat,c))
,c,"cljsRatom",mranderson048.reagent.v0v8v0.reagent.impl.batching.queue_render,mranderson048.reagent.v0v8v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
mranderson048.reagent.v0v8v0.reagent.impl.component.custom_wrapper = (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper(key,f){
var G__20616 = key;
var G__20616__$1 = (((G__20616 instanceof cljs.core.Keyword))?G__20616.fqn:null);
switch (G__20616__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(mranderson048.reagent.v0v8v0.reagent.impl.component.state_atom(c),f.call(c,c));
});
;})(G__20616,G__20616__$1))

break;
case "componentWillReceiveProps":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
});
;})(G__20616,G__20616__$1))

break;
case "shouldComponentUpdate":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4131__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
return ((noargv) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv)));
} else {
if(noargv){
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.get_argv(c),mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__20616,G__20616__$1))

break;
case "componentWillUpdate":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,nextprops));
});
;})(G__20616,G__20616__$1))

break;
case "componentDidUpdate":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,mranderson048.reagent.v0v8v0.reagent.impl.component.props_argv(c,oldprops));
});
;})(G__20616,G__20616__$1))

break;
case "componentWillMount":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = mranderson048.reagent.v0v8v0.reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__20616,G__20616__$1))

break;
case "componentDidMount":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__20616,G__20616__$1))

break;
case "componentWillUnmount":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__20645_20801 = (c["cljsRatom"]);
if((G__20645_20801 == null)){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_(G__20645_20801);
}

mranderson048.reagent.v0v8v0.reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__20616,G__20616__$1))

break;
case "componentDidCatch":
return ((function (G__20616,G__20616__$1){
return (function mranderson048$reagent$v0v8v0$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
;})(G__20616,G__20616__$1))

break;
default:
return null;

}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.get_wrapper = (function mranderson048$reagent$v0v8v0$reagent$impl$component$get_wrapper(key,f,name){
var wrap = mranderson048.reagent.v0v8v0.reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4120__auto__ = wrap;
if(cljs.core.truth_(and__4120__auto__)){
return f;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4131__auto__ = wrap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return f;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel = mranderson048.reagent.v0v8v0.reagent.impl.util.memoize_1(mranderson048.reagent.v0v8v0.reagent.impl.util.dash_to_camel);
mranderson048.reagent.v0v8v0.reagent.impl.component.camelify_map_keys = (function mranderson048$reagent$v0v8v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : mranderson048.reagent.v0v8v0.reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.add_obligatory = (function mranderson048$reagent$v0v8v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mranderson048.reagent.v0v8v0.reagent.impl.component.obligatory,fun_map], 0));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_funs = (function mranderson048$reagent$v0v8v0$reagent$impl$component$wrap_funs(fmap){
var renders_20803 = cljs.core.select_keys(fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_20804 = cljs.core.first(cljs.core.vals(renders_20803));
if((cljs.core.count(renders_20803) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count(renders_20803))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_(render_fun_20804)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([render_fun_20804], 0))].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__4131__auto__ = render_fun;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name(render_fun__$1);
}
})());
var name__$1 = (function (){var G__20693 = name;
switch (G__20693) {
case "":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"));

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv(((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,mranderson048.reagent.v0v8v0.reagent.impl.component.get_wrapper(k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v8v0.reagent.impl.component.static_fns)], 0));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.map_to_js = (function mranderson048$reagent$v0v8v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__20702 = o;
(G__20702[cljs.core.name(k)] = v);

return G__20702;
}),({}),m);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.cljsify = (function mranderson048$reagent$v0v8v0$reagent$impl$component$cljsify(body){
return mranderson048.reagent.v0v8v0.reagent.impl.component.map_to_js(mranderson048.reagent.v0v8v0.reagent.impl.component.wrap_funs(mranderson048.reagent.v0v8v0.reagent.impl.component.add_obligatory(mranderson048.reagent.v0v8v0.reagent.impl.component.camelify_map_keys(body))));
});
mranderson048.reagent.v0v8v0.reagent.impl.component.create_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var G__20719 = mranderson048.reagent.v0v8v0.reagent.impl.component.cljsify(body);
return module$node_modules$create_react_class$index(G__20719);
});
mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path = (function mranderson048$reagent$v0v8v0$reagent$impl$component$fiber_component_path(fiber){
var name = (function (){var G__20725 = fiber;
var G__20725__$1 = (((G__20725 == null))?null:(G__20725["type"]));
if((G__20725__$1 == null)){
return null;
} else {
return (G__20725__$1["displayName"]);
}
})();
var parent = (function (){var G__20729 = fiber;
if((G__20729 == null)){
return null;
} else {
return (G__20729["return"]);
}
})();
var path = (function (){var G__20731 = parent;
var G__20731__$1 = (((G__20731 == null))?null:(mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path.cljs$core$IFn$_invoke$arity$1(G__20731) : mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path.call(null,G__20731)));
if((G__20731__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20731__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.component_path = (function mranderson048$reagent$v0v8v0$reagent$impl$component$component_path(c){
var temp__5455__auto__ = (function (){var or__4131__auto__ = (function (){var G__20742 = c;
if((G__20742 == null)){
return null;
} else {
return (G__20742["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__20744 = c;
if((G__20744 == null)){
return null;
} else {
return G__20744._reactInternalFiber;
}
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var fiber = temp__5455__auto__;
return mranderson048.reagent.v0v8v0.reagent.impl.component.fiber_component_path(fiber);
} else {
var instance = (function (){var or__4131__auto__ = (function (){var G__20750 = c;
if((G__20750 == null)){
return null;
} else {
return (G__20750["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var G__20754 = c;
if((G__20754 == null)){
return null;
} else {
return G__20754._reactInternalInstance;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return c;
}
}
})();
var elem = (function (){var or__4131__auto__ = (function (){var G__20759 = instance;
if((G__20759 == null)){
return null;
} else {
return (G__20759["_currentElement"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__20760 = instance;
if((G__20760 == null)){
return null;
} else {
return G__20760._currentElement;
}
}
})();
var name = (function (){var G__20764 = elem;
var G__20764__$1 = (((G__20764 == null))?null:(G__20764["type"]));
if((G__20764__$1 == null)){
return null;
} else {
return (G__20764__$1["displayName"]);
}
})();
var owner = (function (){var or__4131__auto__ = (function (){var G__20768 = elem;
if((G__20768 == null)){
return null;
} else {
return (G__20768["_owner"]);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__20769 = elem;
if((G__20769 == null)){
return null;
} else {
return G__20769._owner;
}
}
})();
var path = (function (){var G__20770 = owner;
var G__20770__$1 = (((G__20770 == null))?null:(mranderson048.reagent.v0v8v0.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? mranderson048.reagent.v0v8v0.reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__20770) : mranderson048.reagent.v0v8v0.reagent.impl.component.component_path.call(null,G__20770)));
if((G__20770__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20770__$1)," > "].join('');
}
})();
var res = [path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name = (function mranderson048$reagent$v0v8v0$reagent$impl$component$comp_name(){
var c = mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4131__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__20771 = c;
var G__20771__$1 = (((G__20771 == null))?null:G__20771.constructor);
if((G__20771__$1 == null)){
return null;
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name(G__20771__$1);
}
}
})();
if((!(cljs.core.empty_QMARK_(n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
mranderson048.reagent.v0v8v0.reagent.impl.component.fn_to_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((mranderson048.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_(f)) && ((!(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(f)))))))))){
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name(f);
if(cljs.core.empty_QMARK_(n)){
return f;
} else {
return n;
}
})()),mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name()].join(''));
} else {
}
} else {
}

if(mranderson048.reagent.v0v8v0.reagent.impl.component.reagent_class_QMARK_(f)){
return mranderson048.reagent.v0v8v0.reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = mranderson048.reagent.v0v8v0.reagent.impl.component.create_class(withrender);
return mranderson048.reagent.v0v8v0.reagent.impl.component.cache_react_class(f,res);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.as_class = (function mranderson048$reagent$v0v8v0$reagent$impl$component$as_class(tag){
var temp__5459__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.component.cached_react_class(tag);
if((temp__5459__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__5459__auto__;
return cached_class;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.reactify_component = (function mranderson048$reagent$v0v8v0$reagent$impl$component$reactify_component(comp){
if(mranderson048.reagent.v0v8v0.reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.component.as_class(comp);
}
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.impl.component.js.map
