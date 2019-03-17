goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38393 = coll;
var G__38394 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38393,G__38394) : shadow.dom.lazy_native_coll_seq.call(null,G__38393,G__38394));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__38422 = arguments.length;
switch (G__38422) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__38426 = arguments.length;
switch (G__38426) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__38430 = arguments.length;
switch (G__38430) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__38438 = arguments.length;
switch (G__38438) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__38447 = arguments.length;
switch (G__38447) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__38451 = document;
var G__38452 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38451,G__38452);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__38455 = shadow.dom.dom_node(parent);
var G__38456 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38455,G__38456);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__38458 = shadow.dom.dom_node(el);
var G__38459 = cls;
return goog.dom.classlist.add(G__38458,G__38459);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__38462 = shadow.dom.dom_node(el);
var G__38463 = cls;
return goog.dom.classlist.remove(G__38462,G__38463);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__38466 = arguments.length;
switch (G__38466) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__38468 = shadow.dom.dom_node(el);
var G__38469 = cls;
return goog.dom.classlist.toggle(G__38468,G__38469);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e38471){if((e38471 instanceof Object)){
var e = e38471;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38471;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__38478 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38479 = null;
var count__38480 = (0);
var i__38481 = (0);
while(true){
if((i__38481 < count__38480)){
var el = chunk__38479.cljs$core$IIndexed$_nth$arity$2(null,i__38481);
var handler_39258__$1 = ((function (seq__38478,chunk__38479,count__38480,i__38481,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38478,chunk__38479,count__38480,i__38481,el))
;
var G__38493_39259 = el;
var G__38494_39260 = cljs.core.name(ev);
var G__38495_39261 = handler_39258__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38493_39259,G__38494_39260,G__38495_39261) : shadow.dom.dom_listen.call(null,G__38493_39259,G__38494_39260,G__38495_39261));


var G__39264 = seq__38478;
var G__39265 = chunk__38479;
var G__39266 = count__38480;
var G__39267 = (i__38481 + (1));
seq__38478 = G__39264;
chunk__38479 = G__39265;
count__38480 = G__39266;
i__38481 = G__39267;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38478);
if(temp__5457__auto__){
var seq__38478__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38478__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38478__$1);
var G__39269 = cljs.core.chunk_rest(seq__38478__$1);
var G__39270 = c__4550__auto__;
var G__39271 = cljs.core.count(c__4550__auto__);
var G__39272 = (0);
seq__38478 = G__39269;
chunk__38479 = G__39270;
count__38480 = G__39271;
i__38481 = G__39272;
continue;
} else {
var el = cljs.core.first(seq__38478__$1);
var handler_39273__$1 = ((function (seq__38478,chunk__38479,count__38480,i__38481,el,seq__38478__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38478,chunk__38479,count__38480,i__38481,el,seq__38478__$1,temp__5457__auto__))
;
var G__38500_39275 = el;
var G__38501_39276 = cljs.core.name(ev);
var G__38502_39277 = handler_39273__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38500_39275,G__38501_39276,G__38502_39277) : shadow.dom.dom_listen.call(null,G__38500_39275,G__38501_39276,G__38502_39277));


var G__39281 = cljs.core.next(seq__38478__$1);
var G__39282 = null;
var G__39283 = (0);
var G__39284 = (0);
seq__38478 = G__39281;
chunk__38479 = G__39282;
count__38480 = G__39283;
i__38481 = G__39284;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__38506 = arguments.length;
switch (G__38506) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__38513 = shadow.dom.dom_node(el);
var G__38514 = cljs.core.name(ev);
var G__38515 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38513,G__38514,G__38515) : shadow.dom.dom_listen.call(null,G__38513,G__38514,G__38515));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__38520 = shadow.dom.dom_node(el);
var G__38521 = cljs.core.name(ev);
var G__38522 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__38520,G__38521,G__38522) : shadow.dom.dom_listen_remove.call(null,G__38520,G__38521,G__38522));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38524 = cljs.core.seq(events);
var chunk__38525 = null;
var count__38526 = (0);
var i__38527 = (0);
while(true){
if((i__38527 < count__38526)){
var vec__38537 = chunk__38525.cljs$core$IIndexed$_nth$arity$2(null,i__38527);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38537,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39299 = seq__38524;
var G__39300 = chunk__38525;
var G__39301 = count__38526;
var G__39302 = (i__38527 + (1));
seq__38524 = G__39299;
chunk__38525 = G__39300;
count__38526 = G__39301;
i__38527 = G__39302;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38524);
if(temp__5457__auto__){
var seq__38524__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38524__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38524__$1);
var G__39304 = cljs.core.chunk_rest(seq__38524__$1);
var G__39305 = c__4550__auto__;
var G__39306 = cljs.core.count(c__4550__auto__);
var G__39307 = (0);
seq__38524 = G__39304;
chunk__38525 = G__39305;
count__38526 = G__39306;
i__38527 = G__39307;
continue;
} else {
var vec__38541 = cljs.core.first(seq__38524__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39309 = cljs.core.next(seq__38524__$1);
var G__39310 = null;
var G__39311 = (0);
var G__39312 = (0);
seq__38524 = G__39309;
chunk__38525 = G__39310;
count__38526 = G__39311;
i__38527 = G__39312;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__38545 = cljs.core.seq(styles);
var chunk__38546 = null;
var count__38547 = (0);
var i__38548 = (0);
while(true){
if((i__38548 < count__38547)){
var vec__38561 = chunk__38546.cljs$core$IIndexed$_nth$arity$2(null,i__38548);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561,(1),null);
var G__38565_39317 = dom;
var G__38566_39318 = cljs.core.name(k);
var G__38567_39319 = (((v == null))?"":v);
goog.style.setStyle(G__38565_39317,G__38566_39318,G__38567_39319);


var G__39322 = seq__38545;
var G__39323 = chunk__38546;
var G__39324 = count__38547;
var G__39325 = (i__38548 + (1));
seq__38545 = G__39322;
chunk__38546 = G__39323;
count__38547 = G__39324;
i__38548 = G__39325;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38545);
if(temp__5457__auto__){
var seq__38545__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38545__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38545__$1);
var G__39326 = cljs.core.chunk_rest(seq__38545__$1);
var G__39327 = c__4550__auto__;
var G__39328 = cljs.core.count(c__4550__auto__);
var G__39329 = (0);
seq__38545 = G__39326;
chunk__38546 = G__39327;
count__38547 = G__39328;
i__38548 = G__39329;
continue;
} else {
var vec__38570 = cljs.core.first(seq__38545__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(1),null);
var G__38573_39331 = dom;
var G__38574_39332 = cljs.core.name(k);
var G__38575_39333 = (((v == null))?"":v);
goog.style.setStyle(G__38573_39331,G__38574_39332,G__38575_39333);


var G__39335 = cljs.core.next(seq__38545__$1);
var G__39336 = null;
var G__39337 = (0);
var G__39338 = (0);
seq__38545 = G__39335;
chunk__38546 = G__39336;
count__38547 = G__39337;
i__38548 = G__39338;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__38578_39340 = key;
var G__38578_39341__$1 = (((G__38578_39340 instanceof cljs.core.Keyword))?G__38578_39340.fqn:null);
switch (G__38578_39341__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_39348 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_39348,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_39348,"aria-");
}
})())){
el.setAttribute(ks_39348,value);
} else {
(el[ks_39348] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__38591 = shadow.dom.dom_node(el);
var G__38592 = cls;
return goog.dom.classlist.contains(G__38591,G__38592);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38595){
var map__38596 = p__38595;
var map__38596__$1 = (((((!((map__38596 == null))))?(((((map__38596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38596):map__38596);
var props = map__38596__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38596__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38598 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38598,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38598,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38598,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38601 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38601,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38601;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38603 = arguments.length;
switch (G__38603) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38607){
var vec__38609 = p__38607;
var seq__38610 = cljs.core.seq(vec__38609);
var first__38611 = cljs.core.first(seq__38610);
var seq__38610__$1 = cljs.core.next(seq__38610);
var nn = first__38611;
var first__38611__$1 = cljs.core.first(seq__38610__$1);
var seq__38610__$2 = cljs.core.next(seq__38610__$1);
var np = first__38611__$1;
var nc = seq__38610__$2;
var node = vec__38609;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38612 = nn;
var G__38613 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38612,G__38613) : create_fn.call(null,G__38612,G__38613));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38615 = nn;
var G__38616 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38615,G__38616) : create_fn.call(null,G__38615,G__38616));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38619 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38619,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38619,(1),null);
var seq__38623_39390 = cljs.core.seq(node_children);
var chunk__38624_39391 = null;
var count__38625_39392 = (0);
var i__38626_39393 = (0);
while(true){
if((i__38626_39393 < count__38625_39392)){
var child_struct_39394 = chunk__38624_39391.cljs$core$IIndexed$_nth$arity$2(null,i__38626_39393);
var children_39395 = shadow.dom.dom_node(child_struct_39394);
if(cljs.core.seq_QMARK_(children_39395)){
var seq__38651_39397 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39395));
var chunk__38653_39398 = null;
var count__38654_39399 = (0);
var i__38655_39400 = (0);
while(true){
if((i__38655_39400 < count__38654_39399)){
var child_39402 = chunk__38653_39398.cljs$core$IIndexed$_nth$arity$2(null,i__38655_39400);
if(cljs.core.truth_(child_39402)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39402);


var G__39403 = seq__38651_39397;
var G__39404 = chunk__38653_39398;
var G__39405 = count__38654_39399;
var G__39406 = (i__38655_39400 + (1));
seq__38651_39397 = G__39403;
chunk__38653_39398 = G__39404;
count__38654_39399 = G__39405;
i__38655_39400 = G__39406;
continue;
} else {
var G__39408 = seq__38651_39397;
var G__39409 = chunk__38653_39398;
var G__39410 = count__38654_39399;
var G__39411 = (i__38655_39400 + (1));
seq__38651_39397 = G__39408;
chunk__38653_39398 = G__39409;
count__38654_39399 = G__39410;
i__38655_39400 = G__39411;
continue;
}
} else {
var temp__5457__auto___39413 = cljs.core.seq(seq__38651_39397);
if(temp__5457__auto___39413){
var seq__38651_39414__$1 = temp__5457__auto___39413;
if(cljs.core.chunked_seq_QMARK_(seq__38651_39414__$1)){
var c__4550__auto___39415 = cljs.core.chunk_first(seq__38651_39414__$1);
var G__39416 = cljs.core.chunk_rest(seq__38651_39414__$1);
var G__39417 = c__4550__auto___39415;
var G__39418 = cljs.core.count(c__4550__auto___39415);
var G__39419 = (0);
seq__38651_39397 = G__39416;
chunk__38653_39398 = G__39417;
count__38654_39399 = G__39418;
i__38655_39400 = G__39419;
continue;
} else {
var child_39420 = cljs.core.first(seq__38651_39414__$1);
if(cljs.core.truth_(child_39420)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39420);


var G__39425 = cljs.core.next(seq__38651_39414__$1);
var G__39426 = null;
var G__39427 = (0);
var G__39428 = (0);
seq__38651_39397 = G__39425;
chunk__38653_39398 = G__39426;
count__38654_39399 = G__39427;
i__38655_39400 = G__39428;
continue;
} else {
var G__39432 = cljs.core.next(seq__38651_39414__$1);
var G__39433 = null;
var G__39434 = (0);
var G__39435 = (0);
seq__38651_39397 = G__39432;
chunk__38653_39398 = G__39433;
count__38654_39399 = G__39434;
i__38655_39400 = G__39435;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39395);
}


var G__39437 = seq__38623_39390;
var G__39438 = chunk__38624_39391;
var G__39439 = count__38625_39392;
var G__39440 = (i__38626_39393 + (1));
seq__38623_39390 = G__39437;
chunk__38624_39391 = G__39438;
count__38625_39392 = G__39439;
i__38626_39393 = G__39440;
continue;
} else {
var temp__5457__auto___39442 = cljs.core.seq(seq__38623_39390);
if(temp__5457__auto___39442){
var seq__38623_39443__$1 = temp__5457__auto___39442;
if(cljs.core.chunked_seq_QMARK_(seq__38623_39443__$1)){
var c__4550__auto___39444 = cljs.core.chunk_first(seq__38623_39443__$1);
var G__39445 = cljs.core.chunk_rest(seq__38623_39443__$1);
var G__39446 = c__4550__auto___39444;
var G__39447 = cljs.core.count(c__4550__auto___39444);
var G__39448 = (0);
seq__38623_39390 = G__39445;
chunk__38624_39391 = G__39446;
count__38625_39392 = G__39447;
i__38626_39393 = G__39448;
continue;
} else {
var child_struct_39449 = cljs.core.first(seq__38623_39443__$1);
var children_39450 = shadow.dom.dom_node(child_struct_39449);
if(cljs.core.seq_QMARK_(children_39450)){
var seq__38663_39452 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39450));
var chunk__38665_39453 = null;
var count__38666_39454 = (0);
var i__38667_39455 = (0);
while(true){
if((i__38667_39455 < count__38666_39454)){
var child_39456 = chunk__38665_39453.cljs$core$IIndexed$_nth$arity$2(null,i__38667_39455);
if(cljs.core.truth_(child_39456)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39456);


var G__39461 = seq__38663_39452;
var G__39462 = chunk__38665_39453;
var G__39463 = count__38666_39454;
var G__39464 = (i__38667_39455 + (1));
seq__38663_39452 = G__39461;
chunk__38665_39453 = G__39462;
count__38666_39454 = G__39463;
i__38667_39455 = G__39464;
continue;
} else {
var G__39465 = seq__38663_39452;
var G__39466 = chunk__38665_39453;
var G__39467 = count__38666_39454;
var G__39468 = (i__38667_39455 + (1));
seq__38663_39452 = G__39465;
chunk__38665_39453 = G__39466;
count__38666_39454 = G__39467;
i__38667_39455 = G__39468;
continue;
}
} else {
var temp__5457__auto___39470__$1 = cljs.core.seq(seq__38663_39452);
if(temp__5457__auto___39470__$1){
var seq__38663_39471__$1 = temp__5457__auto___39470__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38663_39471__$1)){
var c__4550__auto___39472 = cljs.core.chunk_first(seq__38663_39471__$1);
var G__39473 = cljs.core.chunk_rest(seq__38663_39471__$1);
var G__39474 = c__4550__auto___39472;
var G__39475 = cljs.core.count(c__4550__auto___39472);
var G__39476 = (0);
seq__38663_39452 = G__39473;
chunk__38665_39453 = G__39474;
count__38666_39454 = G__39475;
i__38667_39455 = G__39476;
continue;
} else {
var child_39478 = cljs.core.first(seq__38663_39471__$1);
if(cljs.core.truth_(child_39478)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39478);


var G__39480 = cljs.core.next(seq__38663_39471__$1);
var G__39481 = null;
var G__39482 = (0);
var G__39483 = (0);
seq__38663_39452 = G__39480;
chunk__38665_39453 = G__39481;
count__38666_39454 = G__39482;
i__38667_39455 = G__39483;
continue;
} else {
var G__39485 = cljs.core.next(seq__38663_39471__$1);
var G__39486 = null;
var G__39487 = (0);
var G__39488 = (0);
seq__38663_39452 = G__39485;
chunk__38665_39453 = G__39486;
count__38666_39454 = G__39487;
i__38667_39455 = G__39488;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39450);
}


var G__39490 = cljs.core.next(seq__38623_39443__$1);
var G__39491 = null;
var G__39492 = (0);
var G__39493 = (0);
seq__38623_39390 = G__39490;
chunk__38624_39391 = G__39491;
count__38625_39392 = G__39492;
i__38626_39393 = G__39493;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__38693 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__38693);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38697 = cljs.core.seq(node);
var chunk__38698 = null;
var count__38699 = (0);
var i__38700 = (0);
while(true){
if((i__38700 < count__38699)){
var n = chunk__38698.cljs$core$IIndexed$_nth$arity$2(null,i__38700);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39504 = seq__38697;
var G__39505 = chunk__38698;
var G__39506 = count__38699;
var G__39507 = (i__38700 + (1));
seq__38697 = G__39504;
chunk__38698 = G__39505;
count__38699 = G__39506;
i__38700 = G__39507;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38697);
if(temp__5457__auto__){
var seq__38697__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38697__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38697__$1);
var G__39508 = cljs.core.chunk_rest(seq__38697__$1);
var G__39509 = c__4550__auto__;
var G__39510 = cljs.core.count(c__4550__auto__);
var G__39511 = (0);
seq__38697 = G__39508;
chunk__38698 = G__39509;
count__38699 = G__39510;
i__38700 = G__39511;
continue;
} else {
var n = cljs.core.first(seq__38697__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39515 = cljs.core.next(seq__38697__$1);
var G__39516 = null;
var G__39517 = (0);
var G__39518 = (0);
seq__38697 = G__39515;
chunk__38698 = G__39516;
count__38699 = G__39517;
i__38700 = G__39518;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__38708 = shadow.dom.dom_node(new$);
var G__38709 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__38708,G__38709);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38713 = arguments.length;
switch (G__38713) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38718 = arguments.length;
switch (G__38718) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38724 = arguments.length;
switch (G__38724) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39540 = arguments.length;
var i__4731__auto___39541 = (0);
while(true){
if((i__4731__auto___39541 < len__4730__auto___39540)){
args__4736__auto__.push((arguments[i__4731__auto___39541]));

var G__39542 = (i__4731__auto___39541 + (1));
i__4731__auto___39541 = G__39542;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38745_39543 = cljs.core.seq(nodes);
var chunk__38746_39544 = null;
var count__38747_39545 = (0);
var i__38748_39546 = (0);
while(true){
if((i__38748_39546 < count__38747_39545)){
var node_39547 = chunk__38746_39544.cljs$core$IIndexed$_nth$arity$2(null,i__38748_39546);
fragment.appendChild(shadow.dom._to_dom(node_39547));


var G__39548 = seq__38745_39543;
var G__39549 = chunk__38746_39544;
var G__39550 = count__38747_39545;
var G__39551 = (i__38748_39546 + (1));
seq__38745_39543 = G__39548;
chunk__38746_39544 = G__39549;
count__38747_39545 = G__39550;
i__38748_39546 = G__39551;
continue;
} else {
var temp__5457__auto___39552 = cljs.core.seq(seq__38745_39543);
if(temp__5457__auto___39552){
var seq__38745_39553__$1 = temp__5457__auto___39552;
if(cljs.core.chunked_seq_QMARK_(seq__38745_39553__$1)){
var c__4550__auto___39554 = cljs.core.chunk_first(seq__38745_39553__$1);
var G__39555 = cljs.core.chunk_rest(seq__38745_39553__$1);
var G__39556 = c__4550__auto___39554;
var G__39557 = cljs.core.count(c__4550__auto___39554);
var G__39558 = (0);
seq__38745_39543 = G__39555;
chunk__38746_39544 = G__39556;
count__38747_39545 = G__39557;
i__38748_39546 = G__39558;
continue;
} else {
var node_39559 = cljs.core.first(seq__38745_39553__$1);
fragment.appendChild(shadow.dom._to_dom(node_39559));


var G__39560 = cljs.core.next(seq__38745_39553__$1);
var G__39561 = null;
var G__39562 = (0);
var G__39563 = (0);
seq__38745_39543 = G__39560;
chunk__38746_39544 = G__39561;
count__38747_39545 = G__39562;
i__38748_39546 = G__39563;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq38741){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38741));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38749_39564 = cljs.core.seq(scripts);
var chunk__38750_39565 = null;
var count__38751_39566 = (0);
var i__38752_39567 = (0);
while(true){
if((i__38752_39567 < count__38751_39566)){
var vec__38767_39568 = chunk__38750_39565.cljs$core$IIndexed$_nth$arity$2(null,i__38752_39567);
var script_tag_39569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38767_39568,(0),null);
var script_body_39570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38767_39568,(1),null);
eval(script_body_39570);


var G__39574 = seq__38749_39564;
var G__39575 = chunk__38750_39565;
var G__39576 = count__38751_39566;
var G__39577 = (i__38752_39567 + (1));
seq__38749_39564 = G__39574;
chunk__38750_39565 = G__39575;
count__38751_39566 = G__39576;
i__38752_39567 = G__39577;
continue;
} else {
var temp__5457__auto___39581 = cljs.core.seq(seq__38749_39564);
if(temp__5457__auto___39581){
var seq__38749_39582__$1 = temp__5457__auto___39581;
if(cljs.core.chunked_seq_QMARK_(seq__38749_39582__$1)){
var c__4550__auto___39583 = cljs.core.chunk_first(seq__38749_39582__$1);
var G__39587 = cljs.core.chunk_rest(seq__38749_39582__$1);
var G__39588 = c__4550__auto___39583;
var G__39589 = cljs.core.count(c__4550__auto___39583);
var G__39590 = (0);
seq__38749_39564 = G__39587;
chunk__38750_39565 = G__39588;
count__38751_39566 = G__39589;
i__38752_39567 = G__39590;
continue;
} else {
var vec__38779_39591 = cljs.core.first(seq__38749_39582__$1);
var script_tag_39592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38779_39591,(0),null);
var script_body_39593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38779_39591,(1),null);
eval(script_body_39593);


var G__39594 = cljs.core.next(seq__38749_39582__$1);
var G__39595 = null;
var G__39596 = (0);
var G__39597 = (0);
seq__38749_39564 = G__39594;
chunk__38750_39565 = G__39595;
count__38751_39566 = G__39596;
i__38752_39567 = G__39597;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__38785){
var vec__38786 = p__38785;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38786,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38786,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__38789 = shadow.dom.dom_node(el);
var G__38790 = cls;
return goog.dom.getAncestorByClass(G__38789,G__38790);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38792 = arguments.length;
switch (G__38792) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__38793 = shadow.dom.dom_node(el);
var G__38794 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__38793,G__38794);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__38795 = shadow.dom.dom_node(el);
var G__38796 = cljs.core.name(tag);
var G__38797 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__38795,G__38796,G__38797);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__38799 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__38799);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__38800 = shadow.dom.dom_node(dom);
var G__38801 = value;
return goog.dom.forms.setValue(G__38800,G__38801);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38810 = cljs.core.seq(style_keys);
var chunk__38811 = null;
var count__38812 = (0);
var i__38813 = (0);
while(true){
if((i__38813 < count__38812)){
var it = chunk__38811.cljs$core$IIndexed$_nth$arity$2(null,i__38813);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39599 = seq__38810;
var G__39600 = chunk__38811;
var G__39601 = count__38812;
var G__39602 = (i__38813 + (1));
seq__38810 = G__39599;
chunk__38811 = G__39600;
count__38812 = G__39601;
i__38813 = G__39602;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38810);
if(temp__5457__auto__){
var seq__38810__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38810__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38810__$1);
var G__39605 = cljs.core.chunk_rest(seq__38810__$1);
var G__39606 = c__4550__auto__;
var G__39607 = cljs.core.count(c__4550__auto__);
var G__39608 = (0);
seq__38810 = G__39605;
chunk__38811 = G__39606;
count__38812 = G__39607;
i__38813 = G__39608;
continue;
} else {
var it = cljs.core.first(seq__38810__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39609 = cljs.core.next(seq__38810__$1);
var G__39610 = null;
var G__39611 = (0);
var G__39612 = (0);
seq__38810 = G__39609;
chunk__38811 = G__39610;
count__38812 = G__39611;
i__38813 = G__39612;
continue;
}
} else {
return null;
}
}
break;
}
});

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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k38825,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__38834 = k38825;
var G__38834__$1 = (((G__38834 instanceof cljs.core.Keyword))?G__38834.fqn:null);
switch (G__38834__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38825,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__38847){
var vec__38848 = p__38847;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38848,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38848,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38824){
var self__ = this;
var G__38824__$1 = this;
return (new cljs.core.RecordIter((0),G__38824__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__38869 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38869(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38826,other38827){
var self__ = this;
var this38826__$1 = this;
return (((!((other38827 == null)))) && ((this38826__$1.constructor === other38827.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38826__$1.x,other38827.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38826__$1.y,other38827.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38826__$1.__extmap,other38827.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__38824){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38882 = cljs.core.keyword_identical_QMARK_;
var expr__38883 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38885 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__38886 = expr__38883;
return (pred__38882.cljs$core$IFn$_invoke$arity$2 ? pred__38882.cljs$core$IFn$_invoke$arity$2(G__38885,G__38886) : pred__38882.call(null,G__38885,G__38886));
})())){
return (new shadow.dom.Coordinate(G__38824,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38888 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__38889 = expr__38883;
return (pred__38882.cljs$core$IFn$_invoke$arity$2 ? pred__38882.cljs$core$IFn$_invoke$arity$2(G__38888,G__38889) : pred__38882.call(null,G__38888,G__38889));
})())){
return (new shadow.dom.Coordinate(self__.x,G__38824,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__38824),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__38824){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38824,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38829){
var extmap__4424__auto__ = (function (){var G__38901 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38829,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38829)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38901);
} else {
return G__38901;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38829),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38829),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__38902 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__38902);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__38903 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__38903);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__38904 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__38904);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k38911,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__38928 = k38911;
var G__38928__$1 = (((G__38928 instanceof cljs.core.Keyword))?G__38928.fqn:null);
switch (G__38928__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38911,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__38929){
var vec__38930 = p__38929;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38930,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38930,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38910){
var self__ = this;
var G__38910__$1 = this;
return (new cljs.core.RecordIter((0),G__38910__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__38937 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38937(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38912,other38913){
var self__ = this;
var this38912__$1 = this;
return (((!((other38913 == null)))) && ((this38912__$1.constructor === other38913.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38912__$1.w,other38913.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38912__$1.h,other38913.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38912__$1.__extmap,other38913.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__38910){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38954 = cljs.core.keyword_identical_QMARK_;
var expr__38955 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38958 = new cljs.core.Keyword(null,"w","w",354169001);
var G__38959 = expr__38955;
return (pred__38954.cljs$core$IFn$_invoke$arity$2 ? pred__38954.cljs$core$IFn$_invoke$arity$2(G__38958,G__38959) : pred__38954.call(null,G__38958,G__38959));
})())){
return (new shadow.dom.Size(G__38910,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38961 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__38962 = expr__38955;
return (pred__38954.cljs$core$IFn$_invoke$arity$2 ? pred__38954.cljs$core$IFn$_invoke$arity$2(G__38961,G__38962) : pred__38954.call(null,G__38961,G__38962));
})())){
return (new shadow.dom.Size(self__.w,G__38910,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__38910),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__38910){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38910,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38920){
var extmap__4424__auto__ = (function (){var G__38974 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38920,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38920)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38974);
} else {
return G__38974;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38920),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38920),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__38981 = shadow.dom.dom_node(el);
return goog.style.getSize(G__38981);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__39673 = (i + (1));
var G__39674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39673;
ret = G__39674;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39000){
var vec__39001 = p__39000;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39001,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39009 = arguments.length;
switch (G__39009) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__39017_39678 = new_node;
var G__39018_39679 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__39017_39678,G__39018_39679);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__39022_39681 = new_node;
var G__39023_39682 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__39022_39681,G__39023_39682);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__39689 = ps;
var G__39690 = (i + (1));
el__$1 = G__39689;
i = G__39690;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__39036 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__39036);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__39040 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__39040);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__39042 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__39042);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39051 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39057_39697 = cljs.core.seq(props);
var chunk__39058_39698 = null;
var count__39059_39699 = (0);
var i__39060_39700 = (0);
while(true){
if((i__39060_39700 < count__39059_39699)){
var vec__39070_39701 = chunk__39058_39698.cljs$core$IIndexed$_nth$arity$2(null,i__39060_39700);
var k_39702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39070_39701,(0),null);
var v_39703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39070_39701,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_39702);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39702),v_39703);


var G__39711 = seq__39057_39697;
var G__39712 = chunk__39058_39698;
var G__39713 = count__39059_39699;
var G__39714 = (i__39060_39700 + (1));
seq__39057_39697 = G__39711;
chunk__39058_39698 = G__39712;
count__39059_39699 = G__39713;
i__39060_39700 = G__39714;
continue;
} else {
var temp__5457__auto___39715 = cljs.core.seq(seq__39057_39697);
if(temp__5457__auto___39715){
var seq__39057_39716__$1 = temp__5457__auto___39715;
if(cljs.core.chunked_seq_QMARK_(seq__39057_39716__$1)){
var c__4550__auto___39720 = cljs.core.chunk_first(seq__39057_39716__$1);
var G__39721 = cljs.core.chunk_rest(seq__39057_39716__$1);
var G__39722 = c__4550__auto___39720;
var G__39723 = cljs.core.count(c__4550__auto___39720);
var G__39724 = (0);
seq__39057_39697 = G__39721;
chunk__39058_39698 = G__39722;
count__39059_39699 = G__39723;
i__39060_39700 = G__39724;
continue;
} else {
var vec__39076_39725 = cljs.core.first(seq__39057_39716__$1);
var k_39726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39076_39725,(0),null);
var v_39727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39076_39725,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_39726);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39726),v_39727);


var G__39731 = cljs.core.next(seq__39057_39716__$1);
var G__39732 = null;
var G__39733 = (0);
var G__39734 = (0);
seq__39057_39697 = G__39731;
chunk__39058_39698 = G__39732;
count__39059_39699 = G__39733;
i__39060_39700 = G__39734;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__39085 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39085,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39085,(1),null);
var seq__39089_39735 = cljs.core.seq(node_children);
var chunk__39091_39736 = null;
var count__39092_39737 = (0);
var i__39093_39738 = (0);
while(true){
if((i__39093_39738 < count__39092_39737)){
var child_struct_39739 = chunk__39091_39736.cljs$core$IIndexed$_nth$arity$2(null,i__39093_39738);
if((!((child_struct_39739 == null)))){
if(typeof child_struct_39739 === 'string'){
var text_39740 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39740),child_struct_39739].join(''));
} else {
var children_39741 = shadow.dom.svg_node(child_struct_39739);
if(cljs.core.seq_QMARK_(children_39741)){
var seq__39140_39742 = cljs.core.seq(children_39741);
var chunk__39142_39743 = null;
var count__39143_39744 = (0);
var i__39144_39745 = (0);
while(true){
if((i__39144_39745 < count__39143_39744)){
var child_39746 = chunk__39142_39743.cljs$core$IIndexed$_nth$arity$2(null,i__39144_39745);
if(cljs.core.truth_(child_39746)){
node.appendChild(child_39746);


var G__39748 = seq__39140_39742;
var G__39749 = chunk__39142_39743;
var G__39750 = count__39143_39744;
var G__39751 = (i__39144_39745 + (1));
seq__39140_39742 = G__39748;
chunk__39142_39743 = G__39749;
count__39143_39744 = G__39750;
i__39144_39745 = G__39751;
continue;
} else {
var G__39752 = seq__39140_39742;
var G__39753 = chunk__39142_39743;
var G__39754 = count__39143_39744;
var G__39755 = (i__39144_39745 + (1));
seq__39140_39742 = G__39752;
chunk__39142_39743 = G__39753;
count__39143_39744 = G__39754;
i__39144_39745 = G__39755;
continue;
}
} else {
var temp__5457__auto___39756 = cljs.core.seq(seq__39140_39742);
if(temp__5457__auto___39756){
var seq__39140_39759__$1 = temp__5457__auto___39756;
if(cljs.core.chunked_seq_QMARK_(seq__39140_39759__$1)){
var c__4550__auto___39760 = cljs.core.chunk_first(seq__39140_39759__$1);
var G__39762 = cljs.core.chunk_rest(seq__39140_39759__$1);
var G__39763 = c__4550__auto___39760;
var G__39764 = cljs.core.count(c__4550__auto___39760);
var G__39765 = (0);
seq__39140_39742 = G__39762;
chunk__39142_39743 = G__39763;
count__39143_39744 = G__39764;
i__39144_39745 = G__39765;
continue;
} else {
var child_39766 = cljs.core.first(seq__39140_39759__$1);
if(cljs.core.truth_(child_39766)){
node.appendChild(child_39766);


var G__39767 = cljs.core.next(seq__39140_39759__$1);
var G__39768 = null;
var G__39769 = (0);
var G__39770 = (0);
seq__39140_39742 = G__39767;
chunk__39142_39743 = G__39768;
count__39143_39744 = G__39769;
i__39144_39745 = G__39770;
continue;
} else {
var G__39771 = cljs.core.next(seq__39140_39759__$1);
var G__39772 = null;
var G__39773 = (0);
var G__39774 = (0);
seq__39140_39742 = G__39771;
chunk__39142_39743 = G__39772;
count__39143_39744 = G__39773;
i__39144_39745 = G__39774;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39741);
}
}


var G__39775 = seq__39089_39735;
var G__39776 = chunk__39091_39736;
var G__39777 = count__39092_39737;
var G__39778 = (i__39093_39738 + (1));
seq__39089_39735 = G__39775;
chunk__39091_39736 = G__39776;
count__39092_39737 = G__39777;
i__39093_39738 = G__39778;
continue;
} else {
var G__39779 = seq__39089_39735;
var G__39780 = chunk__39091_39736;
var G__39781 = count__39092_39737;
var G__39782 = (i__39093_39738 + (1));
seq__39089_39735 = G__39779;
chunk__39091_39736 = G__39780;
count__39092_39737 = G__39781;
i__39093_39738 = G__39782;
continue;
}
} else {
var temp__5457__auto___39783 = cljs.core.seq(seq__39089_39735);
if(temp__5457__auto___39783){
var seq__39089_39784__$1 = temp__5457__auto___39783;
if(cljs.core.chunked_seq_QMARK_(seq__39089_39784__$1)){
var c__4550__auto___39785 = cljs.core.chunk_first(seq__39089_39784__$1);
var G__39786 = cljs.core.chunk_rest(seq__39089_39784__$1);
var G__39787 = c__4550__auto___39785;
var G__39788 = cljs.core.count(c__4550__auto___39785);
var G__39789 = (0);
seq__39089_39735 = G__39786;
chunk__39091_39736 = G__39787;
count__39092_39737 = G__39788;
i__39093_39738 = G__39789;
continue;
} else {
var child_struct_39791 = cljs.core.first(seq__39089_39784__$1);
if((!((child_struct_39791 == null)))){
if(typeof child_struct_39791 === 'string'){
var text_39797 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39797),child_struct_39791].join(''));
} else {
var children_39800 = shadow.dom.svg_node(child_struct_39791);
if(cljs.core.seq_QMARK_(children_39800)){
var seq__39155_39803 = cljs.core.seq(children_39800);
var chunk__39157_39804 = null;
var count__39158_39805 = (0);
var i__39159_39806 = (0);
while(true){
if((i__39159_39806 < count__39158_39805)){
var child_39807 = chunk__39157_39804.cljs$core$IIndexed$_nth$arity$2(null,i__39159_39806);
if(cljs.core.truth_(child_39807)){
node.appendChild(child_39807);


var G__39808 = seq__39155_39803;
var G__39809 = chunk__39157_39804;
var G__39810 = count__39158_39805;
var G__39811 = (i__39159_39806 + (1));
seq__39155_39803 = G__39808;
chunk__39157_39804 = G__39809;
count__39158_39805 = G__39810;
i__39159_39806 = G__39811;
continue;
} else {
var G__39812 = seq__39155_39803;
var G__39813 = chunk__39157_39804;
var G__39814 = count__39158_39805;
var G__39815 = (i__39159_39806 + (1));
seq__39155_39803 = G__39812;
chunk__39157_39804 = G__39813;
count__39158_39805 = G__39814;
i__39159_39806 = G__39815;
continue;
}
} else {
var temp__5457__auto___39816__$1 = cljs.core.seq(seq__39155_39803);
if(temp__5457__auto___39816__$1){
var seq__39155_39817__$1 = temp__5457__auto___39816__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39155_39817__$1)){
var c__4550__auto___39818 = cljs.core.chunk_first(seq__39155_39817__$1);
var G__39819 = cljs.core.chunk_rest(seq__39155_39817__$1);
var G__39820 = c__4550__auto___39818;
var G__39821 = cljs.core.count(c__4550__auto___39818);
var G__39822 = (0);
seq__39155_39803 = G__39819;
chunk__39157_39804 = G__39820;
count__39158_39805 = G__39821;
i__39159_39806 = G__39822;
continue;
} else {
var child_39823 = cljs.core.first(seq__39155_39817__$1);
if(cljs.core.truth_(child_39823)){
node.appendChild(child_39823);


var G__39824 = cljs.core.next(seq__39155_39817__$1);
var G__39825 = null;
var G__39826 = (0);
var G__39827 = (0);
seq__39155_39803 = G__39824;
chunk__39157_39804 = G__39825;
count__39158_39805 = G__39826;
i__39159_39806 = G__39827;
continue;
} else {
var G__39828 = cljs.core.next(seq__39155_39817__$1);
var G__39829 = null;
var G__39830 = (0);
var G__39831 = (0);
seq__39155_39803 = G__39828;
chunk__39157_39804 = G__39829;
count__39158_39805 = G__39830;
i__39159_39806 = G__39831;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39800);
}
}


var G__39832 = cljs.core.next(seq__39089_39784__$1);
var G__39833 = null;
var G__39834 = (0);
var G__39835 = (0);
seq__39089_39735 = G__39832;
chunk__39091_39736 = G__39833;
count__39092_39737 = G__39834;
i__39093_39738 = G__39835;
continue;
} else {
var G__39836 = cljs.core.next(seq__39089_39784__$1);
var G__39837 = null;
var G__39838 = (0);
var G__39839 = (0);
seq__39089_39735 = G__39836;
chunk__39091_39736 = G__39837;
count__39092_39737 = G__39838;
i__39093_39738 = G__39839;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__39165_39840 = shadow.dom._to_svg;
var G__39166_39841 = "string";
var G__39167_39842 = ((function (G__39165_39840,G__39166_39841){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__39165_39840,G__39166_39841))
;
goog.object.set(G__39165_39840,G__39166_39841,G__39167_39842);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__39169_39843 = shadow.dom._to_svg;
var G__39170_39844 = "null";
var G__39171_39845 = ((function (G__39169_39843,G__39170_39844){
return (function (_){
return null;
});})(G__39169_39843,G__39170_39844))
;
goog.object.set(G__39169_39843,G__39170_39844,G__39171_39845);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39846 = arguments.length;
var i__4731__auto___39850 = (0);
while(true){
if((i__4731__auto___39850 < len__4730__auto___39846)){
args__4736__auto__.push((arguments[i__4731__auto___39850]));

var G__39851 = (i__4731__auto___39850 + (1));
i__4731__auto___39850 = G__39851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq39172){
var G__39173 = cljs.core.first(seq39172);
var seq39172__$1 = cljs.core.next(seq39172);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39173,seq39172__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__39180 = arguments.length;
switch (G__39180) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__39181_39856 = shadow.dom.dom_node(el);
var G__39182_39857 = cljs.core.name(event);
var G__39183_39858 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39181_39856,G__39182_39857,G__39183_39858) : shadow.dom.dom_listen.call(null,G__39181_39856,G__39182_39857,G__39183_39858));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__36758__auto___39859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39859,buf,chan,event_fn){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39859,buf,chan,event_fn){
return (function (state_39189){
var state_val_39190 = (state_39189[(1)]);
if((state_val_39190 === (1))){
var state_39189__$1 = state_39189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39189__$1,(2),once_or_cleanup);
} else {
if((state_val_39190 === (2))){
var inst_39186 = (state_39189[(2)]);
var inst_39187 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39189__$1 = (function (){var statearr_39195 = state_39189;
(statearr_39195[(7)] = inst_39186);

return statearr_39195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39189__$1,inst_39187);
} else {
return null;
}
}
});})(c__36758__auto___39859,buf,chan,event_fn))
;
return ((function (switch__36657__auto__,c__36758__auto___39859,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__36658__auto__ = null;
var shadow$dom$state_machine__36658__auto____0 = (function (){
var statearr_39199 = [null,null,null,null,null,null,null,null];
(statearr_39199[(0)] = shadow$dom$state_machine__36658__auto__);

(statearr_39199[(1)] = (1));

return statearr_39199;
});
var shadow$dom$state_machine__36658__auto____1 = (function (state_39189){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_39189);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e39202){if((e39202 instanceof Object)){
var ex__36661__auto__ = e39202;
var statearr_39203_39860 = state_39189;
(statearr_39203_39860[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39861 = state_39189;
state_39189 = G__39861;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
shadow$dom$state_machine__36658__auto__ = function(state_39189){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36658__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36658__auto____1.call(this,state_39189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36658__auto____0;
shadow$dom$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36658__auto____1;
return shadow$dom$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39859,buf,chan,event_fn))
})();
var state__36760__auto__ = (function (){var statearr_39210 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_39210[(6)] = c__36758__auto___39859);

return statearr_39210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39859,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
