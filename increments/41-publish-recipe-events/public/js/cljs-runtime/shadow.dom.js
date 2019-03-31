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
return cljs.core.cons((coll[idx]),(function (){var G__38394 = coll;
var G__38395 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38394,G__38395) : shadow.dom.lazy_native_coll_seq.call(null,G__38394,G__38395));
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
var G__38425 = arguments.length;
switch (G__38425) {
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
var G__38429 = arguments.length;
switch (G__38429) {
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
var G__38436 = arguments.length;
switch (G__38436) {
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
var G__38449 = arguments.length;
switch (G__38449) {
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
var G__38453 = document;
var G__38454 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38453,G__38454);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__38456 = shadow.dom.dom_node(parent);
var G__38457 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38456,G__38457);
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
var G__38467 = shadow.dom.dom_node(el);
var G__38468 = cls;
return goog.dom.classlist.toggle(G__38467,G__38468);
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
}catch (e38470){if((e38470 instanceof Object)){
var e = e38470;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38470;

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
var handler_39264__$1 = ((function (seq__38478,chunk__38479,count__38480,i__38481,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38478,chunk__38479,count__38480,i__38481,el))
;
var G__38497_39265 = el;
var G__38498_39266 = cljs.core.name(ev);
var G__38499_39267 = handler_39264__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38497_39265,G__38498_39266,G__38499_39267) : shadow.dom.dom_listen.call(null,G__38497_39265,G__38498_39266,G__38499_39267));


var G__39268 = seq__38478;
var G__39269 = chunk__38479;
var G__39270 = count__38480;
var G__39271 = (i__38481 + (1));
seq__38478 = G__39268;
chunk__38479 = G__39269;
count__38480 = G__39270;
i__38481 = G__39271;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38478);
if(temp__5457__auto__){
var seq__38478__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38478__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38478__$1);
var G__39274 = cljs.core.chunk_rest(seq__38478__$1);
var G__39275 = c__4550__auto__;
var G__39276 = cljs.core.count(c__4550__auto__);
var G__39277 = (0);
seq__38478 = G__39274;
chunk__38479 = G__39275;
count__38480 = G__39276;
i__38481 = G__39277;
continue;
} else {
var el = cljs.core.first(seq__38478__$1);
var handler_39279__$1 = ((function (seq__38478,chunk__38479,count__38480,i__38481,el,seq__38478__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38478,chunk__38479,count__38480,i__38481,el,seq__38478__$1,temp__5457__auto__))
;
var G__38502_39281 = el;
var G__38503_39282 = cljs.core.name(ev);
var G__38504_39283 = handler_39279__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38502_39281,G__38503_39282,G__38504_39283) : shadow.dom.dom_listen.call(null,G__38502_39281,G__38503_39282,G__38504_39283));


var G__39285 = cljs.core.next(seq__38478__$1);
var G__39286 = null;
var G__39287 = (0);
var G__39288 = (0);
seq__38478 = G__39285;
chunk__38479 = G__39286;
count__38480 = G__39287;
i__38481 = G__39288;
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
var G__38507 = arguments.length;
switch (G__38507) {
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
var G__38518 = shadow.dom.dom_node(el);
var G__38519 = cljs.core.name(ev);
var G__38520 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__38518,G__38519,G__38520) : shadow.dom.dom_listen_remove.call(null,G__38518,G__38519,G__38520));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38522 = cljs.core.seq(events);
var chunk__38523 = null;
var count__38524 = (0);
var i__38525 = (0);
while(true){
if((i__38525 < count__38524)){
var vec__38534 = chunk__38523.cljs$core$IIndexed$_nth$arity$2(null,i__38525);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38534,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39303 = seq__38522;
var G__39304 = chunk__38523;
var G__39305 = count__38524;
var G__39306 = (i__38525 + (1));
seq__38522 = G__39303;
chunk__38523 = G__39304;
count__38524 = G__39305;
i__38525 = G__39306;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38522);
if(temp__5457__auto__){
var seq__38522__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38522__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38522__$1);
var G__39310 = cljs.core.chunk_rest(seq__38522__$1);
var G__39311 = c__4550__auto__;
var G__39312 = cljs.core.count(c__4550__auto__);
var G__39313 = (0);
seq__38522 = G__39310;
chunk__38523 = G__39311;
count__38524 = G__39312;
i__38525 = G__39313;
continue;
} else {
var vec__38542 = cljs.core.first(seq__38522__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38542,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39316 = cljs.core.next(seq__38522__$1);
var G__39317 = null;
var G__39318 = (0);
var G__39319 = (0);
seq__38522 = G__39316;
chunk__38523 = G__39317;
count__38524 = G__39318;
i__38525 = G__39319;
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
var vec__38564 = chunk__38546.cljs$core$IIndexed$_nth$arity$2(null,i__38548);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38564,(1),null);
var G__38567_39326 = dom;
var G__38568_39328 = cljs.core.name(k);
var G__38569_39329 = (((v == null))?"":v);
goog.style.setStyle(G__38567_39326,G__38568_39328,G__38569_39329);


var G__39330 = seq__38545;
var G__39331 = chunk__38546;
var G__39332 = count__38547;
var G__39333 = (i__38548 + (1));
seq__38545 = G__39330;
chunk__38546 = G__39331;
count__38547 = G__39332;
i__38548 = G__39333;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38545);
if(temp__5457__auto__){
var seq__38545__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38545__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38545__$1);
var G__39335 = cljs.core.chunk_rest(seq__38545__$1);
var G__39336 = c__4550__auto__;
var G__39337 = cljs.core.count(c__4550__auto__);
var G__39338 = (0);
seq__38545 = G__39335;
chunk__38546 = G__39336;
count__38547 = G__39337;
i__38548 = G__39338;
continue;
} else {
var vec__38571 = cljs.core.first(seq__38545__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(1),null);
var G__38574_39340 = dom;
var G__38575_39341 = cljs.core.name(k);
var G__38576_39342 = (((v == null))?"":v);
goog.style.setStyle(G__38574_39340,G__38575_39341,G__38576_39342);


var G__39343 = cljs.core.next(seq__38545__$1);
var G__39344 = null;
var G__39345 = (0);
var G__39346 = (0);
seq__38545 = G__39343;
chunk__38546 = G__39344;
count__38547 = G__39345;
i__38548 = G__39346;
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
var G__38581_39347 = key;
var G__38581_39348__$1 = (((G__38581_39347 instanceof cljs.core.Keyword))?G__38581_39347.fqn:null);
switch (G__38581_39348__$1) {
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
var ks_39354 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_39354,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_39354,"aria-");
}
})())){
el.setAttribute(ks_39354,value);
} else {
(el[ks_39354] = value);
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
var G__38593 = shadow.dom.dom_node(el);
var G__38594 = cls;
return goog.dom.classlist.contains(G__38593,G__38594);
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38610){
var vec__38612 = p__38610;
var seq__38613 = cljs.core.seq(vec__38612);
var first__38614 = cljs.core.first(seq__38613);
var seq__38613__$1 = cljs.core.next(seq__38613);
var nn = first__38614;
var first__38614__$1 = cljs.core.first(seq__38613__$1);
var seq__38613__$2 = cljs.core.next(seq__38613__$1);
var np = first__38614__$1;
var nc = seq__38613__$2;
var node = vec__38612;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38616 = nn;
var G__38617 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38616,G__38617) : create_fn.call(null,G__38616,G__38617));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38619 = nn;
var G__38620 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38619,G__38620) : create_fn.call(null,G__38619,G__38620));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38623 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38623,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38623,(1),null);
var seq__38626_39389 = cljs.core.seq(node_children);
var chunk__38627_39390 = null;
var count__38628_39391 = (0);
var i__38629_39392 = (0);
while(true){
if((i__38629_39392 < count__38628_39391)){
var child_struct_39393 = chunk__38627_39390.cljs$core$IIndexed$_nth$arity$2(null,i__38629_39392);
var children_39394 = shadow.dom.dom_node(child_struct_39393);
if(cljs.core.seq_QMARK_(children_39394)){
var seq__38656_39396 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39394));
var chunk__38658_39397 = null;
var count__38659_39398 = (0);
var i__38660_39399 = (0);
while(true){
if((i__38660_39399 < count__38659_39398)){
var child_39404 = chunk__38658_39397.cljs$core$IIndexed$_nth$arity$2(null,i__38660_39399);
if(cljs.core.truth_(child_39404)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39404);


var G__39406 = seq__38656_39396;
var G__39407 = chunk__38658_39397;
var G__39408 = count__38659_39398;
var G__39409 = (i__38660_39399 + (1));
seq__38656_39396 = G__39406;
chunk__38658_39397 = G__39407;
count__38659_39398 = G__39408;
i__38660_39399 = G__39409;
continue;
} else {
var G__39410 = seq__38656_39396;
var G__39411 = chunk__38658_39397;
var G__39412 = count__38659_39398;
var G__39413 = (i__38660_39399 + (1));
seq__38656_39396 = G__39410;
chunk__38658_39397 = G__39411;
count__38659_39398 = G__39412;
i__38660_39399 = G__39413;
continue;
}
} else {
var temp__5457__auto___39414 = cljs.core.seq(seq__38656_39396);
if(temp__5457__auto___39414){
var seq__38656_39415__$1 = temp__5457__auto___39414;
if(cljs.core.chunked_seq_QMARK_(seq__38656_39415__$1)){
var c__4550__auto___39416 = cljs.core.chunk_first(seq__38656_39415__$1);
var G__39419 = cljs.core.chunk_rest(seq__38656_39415__$1);
var G__39420 = c__4550__auto___39416;
var G__39421 = cljs.core.count(c__4550__auto___39416);
var G__39422 = (0);
seq__38656_39396 = G__39419;
chunk__38658_39397 = G__39420;
count__38659_39398 = G__39421;
i__38660_39399 = G__39422;
continue;
} else {
var child_39424 = cljs.core.first(seq__38656_39415__$1);
if(cljs.core.truth_(child_39424)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39424);


var G__39427 = cljs.core.next(seq__38656_39415__$1);
var G__39428 = null;
var G__39429 = (0);
var G__39430 = (0);
seq__38656_39396 = G__39427;
chunk__38658_39397 = G__39428;
count__38659_39398 = G__39429;
i__38660_39399 = G__39430;
continue;
} else {
var G__39432 = cljs.core.next(seq__38656_39415__$1);
var G__39433 = null;
var G__39434 = (0);
var G__39435 = (0);
seq__38656_39396 = G__39432;
chunk__38658_39397 = G__39433;
count__38659_39398 = G__39434;
i__38660_39399 = G__39435;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39394);
}


var G__39440 = seq__38626_39389;
var G__39441 = chunk__38627_39390;
var G__39442 = count__38628_39391;
var G__39443 = (i__38629_39392 + (1));
seq__38626_39389 = G__39440;
chunk__38627_39390 = G__39441;
count__38628_39391 = G__39442;
i__38629_39392 = G__39443;
continue;
} else {
var temp__5457__auto___39446 = cljs.core.seq(seq__38626_39389);
if(temp__5457__auto___39446){
var seq__38626_39447__$1 = temp__5457__auto___39446;
if(cljs.core.chunked_seq_QMARK_(seq__38626_39447__$1)){
var c__4550__auto___39448 = cljs.core.chunk_first(seq__38626_39447__$1);
var G__39449 = cljs.core.chunk_rest(seq__38626_39447__$1);
var G__39450 = c__4550__auto___39448;
var G__39451 = cljs.core.count(c__4550__auto___39448);
var G__39452 = (0);
seq__38626_39389 = G__39449;
chunk__38627_39390 = G__39450;
count__38628_39391 = G__39451;
i__38629_39392 = G__39452;
continue;
} else {
var child_struct_39453 = cljs.core.first(seq__38626_39447__$1);
var children_39454 = shadow.dom.dom_node(child_struct_39453);
if(cljs.core.seq_QMARK_(children_39454)){
var seq__38670_39459 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39454));
var chunk__38672_39460 = null;
var count__38673_39461 = (0);
var i__38674_39462 = (0);
while(true){
if((i__38674_39462 < count__38673_39461)){
var child_39464 = chunk__38672_39460.cljs$core$IIndexed$_nth$arity$2(null,i__38674_39462);
if(cljs.core.truth_(child_39464)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39464);


var G__39466 = seq__38670_39459;
var G__39467 = chunk__38672_39460;
var G__39468 = count__38673_39461;
var G__39469 = (i__38674_39462 + (1));
seq__38670_39459 = G__39466;
chunk__38672_39460 = G__39467;
count__38673_39461 = G__39468;
i__38674_39462 = G__39469;
continue;
} else {
var G__39470 = seq__38670_39459;
var G__39471 = chunk__38672_39460;
var G__39472 = count__38673_39461;
var G__39473 = (i__38674_39462 + (1));
seq__38670_39459 = G__39470;
chunk__38672_39460 = G__39471;
count__38673_39461 = G__39472;
i__38674_39462 = G__39473;
continue;
}
} else {
var temp__5457__auto___39474__$1 = cljs.core.seq(seq__38670_39459);
if(temp__5457__auto___39474__$1){
var seq__38670_39475__$1 = temp__5457__auto___39474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38670_39475__$1)){
var c__4550__auto___39476 = cljs.core.chunk_first(seq__38670_39475__$1);
var G__39477 = cljs.core.chunk_rest(seq__38670_39475__$1);
var G__39478 = c__4550__auto___39476;
var G__39479 = cljs.core.count(c__4550__auto___39476);
var G__39480 = (0);
seq__38670_39459 = G__39477;
chunk__38672_39460 = G__39478;
count__38673_39461 = G__39479;
i__38674_39462 = G__39480;
continue;
} else {
var child_39481 = cljs.core.first(seq__38670_39475__$1);
if(cljs.core.truth_(child_39481)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39481);


var G__39483 = cljs.core.next(seq__38670_39475__$1);
var G__39484 = null;
var G__39485 = (0);
var G__39486 = (0);
seq__38670_39459 = G__39483;
chunk__38672_39460 = G__39484;
count__38673_39461 = G__39485;
i__38674_39462 = G__39486;
continue;
} else {
var G__39488 = cljs.core.next(seq__38670_39475__$1);
var G__39489 = null;
var G__39490 = (0);
var G__39491 = (0);
seq__38670_39459 = G__39488;
chunk__38672_39460 = G__39489;
count__38673_39461 = G__39490;
i__38674_39462 = G__39491;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39454);
}


var G__39493 = cljs.core.next(seq__38626_39447__$1);
var G__39494 = null;
var G__39495 = (0);
var G__39496 = (0);
seq__38626_39389 = G__39493;
chunk__38627_39390 = G__39494;
count__38628_39391 = G__39495;
i__38629_39392 = G__39496;
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
var G__38696 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__38696);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38706 = cljs.core.seq(node);
var chunk__38707 = null;
var count__38708 = (0);
var i__38709 = (0);
while(true){
if((i__38709 < count__38708)){
var n = chunk__38707.cljs$core$IIndexed$_nth$arity$2(null,i__38709);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39510 = seq__38706;
var G__39511 = chunk__38707;
var G__39512 = count__38708;
var G__39513 = (i__38709 + (1));
seq__38706 = G__39510;
chunk__38707 = G__39511;
count__38708 = G__39512;
i__38709 = G__39513;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38706);
if(temp__5457__auto__){
var seq__38706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38706__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38706__$1);
var G__39514 = cljs.core.chunk_rest(seq__38706__$1);
var G__39515 = c__4550__auto__;
var G__39516 = cljs.core.count(c__4550__auto__);
var G__39517 = (0);
seq__38706 = G__39514;
chunk__38707 = G__39515;
count__38708 = G__39516;
i__38709 = G__39517;
continue;
} else {
var n = cljs.core.first(seq__38706__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39518 = cljs.core.next(seq__38706__$1);
var G__39519 = null;
var G__39520 = (0);
var G__39521 = (0);
seq__38706 = G__39518;
chunk__38707 = G__39519;
count__38708 = G__39520;
i__38709 = G__39521;
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
var G__38714 = shadow.dom.dom_node(new$);
var G__38715 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__38714,G__38715);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38718 = arguments.length;
switch (G__38718) {
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
var G__38720 = arguments.length;
switch (G__38720) {
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
var G__38725 = arguments.length;
switch (G__38725) {
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
var len__4730__auto___39532 = arguments.length;
var i__4731__auto___39533 = (0);
while(true){
if((i__4731__auto___39533 < len__4730__auto___39532)){
args__4736__auto__.push((arguments[i__4731__auto___39533]));

var G__39534 = (i__4731__auto___39533 + (1));
i__4731__auto___39533 = G__39534;
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
var seq__38745_39535 = cljs.core.seq(nodes);
var chunk__38746_39536 = null;
var count__38747_39537 = (0);
var i__38748_39538 = (0);
while(true){
if((i__38748_39538 < count__38747_39537)){
var node_39539 = chunk__38746_39536.cljs$core$IIndexed$_nth$arity$2(null,i__38748_39538);
fragment.appendChild(shadow.dom._to_dom(node_39539));


var G__39540 = seq__38745_39535;
var G__39541 = chunk__38746_39536;
var G__39542 = count__38747_39537;
var G__39543 = (i__38748_39538 + (1));
seq__38745_39535 = G__39540;
chunk__38746_39536 = G__39541;
count__38747_39537 = G__39542;
i__38748_39538 = G__39543;
continue;
} else {
var temp__5457__auto___39547 = cljs.core.seq(seq__38745_39535);
if(temp__5457__auto___39547){
var seq__38745_39550__$1 = temp__5457__auto___39547;
if(cljs.core.chunked_seq_QMARK_(seq__38745_39550__$1)){
var c__4550__auto___39551 = cljs.core.chunk_first(seq__38745_39550__$1);
var G__39554 = cljs.core.chunk_rest(seq__38745_39550__$1);
var G__39555 = c__4550__auto___39551;
var G__39556 = cljs.core.count(c__4550__auto___39551);
var G__39557 = (0);
seq__38745_39535 = G__39554;
chunk__38746_39536 = G__39555;
count__38747_39537 = G__39556;
i__38748_39538 = G__39557;
continue;
} else {
var node_39561 = cljs.core.first(seq__38745_39550__$1);
fragment.appendChild(shadow.dom._to_dom(node_39561));


var G__39562 = cljs.core.next(seq__38745_39550__$1);
var G__39563 = null;
var G__39564 = (0);
var G__39565 = (0);
seq__38745_39535 = G__39562;
chunk__38746_39536 = G__39563;
count__38747_39537 = G__39564;
i__38748_39538 = G__39565;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq38744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38744));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38749_39566 = cljs.core.seq(scripts);
var chunk__38750_39567 = null;
var count__38751_39568 = (0);
var i__38752_39569 = (0);
while(true){
if((i__38752_39569 < count__38751_39568)){
var vec__38768_39570 = chunk__38750_39567.cljs$core$IIndexed$_nth$arity$2(null,i__38752_39569);
var script_tag_39571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38768_39570,(0),null);
var script_body_39572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38768_39570,(1),null);
eval(script_body_39572);


var G__39573 = seq__38749_39566;
var G__39574 = chunk__38750_39567;
var G__39575 = count__38751_39568;
var G__39576 = (i__38752_39569 + (1));
seq__38749_39566 = G__39573;
chunk__38750_39567 = G__39574;
count__38751_39568 = G__39575;
i__38752_39569 = G__39576;
continue;
} else {
var temp__5457__auto___39577 = cljs.core.seq(seq__38749_39566);
if(temp__5457__auto___39577){
var seq__38749_39578__$1 = temp__5457__auto___39577;
if(cljs.core.chunked_seq_QMARK_(seq__38749_39578__$1)){
var c__4550__auto___39579 = cljs.core.chunk_first(seq__38749_39578__$1);
var G__39580 = cljs.core.chunk_rest(seq__38749_39578__$1);
var G__39581 = c__4550__auto___39579;
var G__39582 = cljs.core.count(c__4550__auto___39579);
var G__39583 = (0);
seq__38749_39566 = G__39580;
chunk__38750_39567 = G__39581;
count__38751_39568 = G__39582;
i__38752_39569 = G__39583;
continue;
} else {
var vec__38778_39584 = cljs.core.first(seq__38749_39578__$1);
var script_tag_39585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38778_39584,(0),null);
var script_body_39586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38778_39584,(1),null);
eval(script_body_39586);


var G__39587 = cljs.core.next(seq__38749_39578__$1);
var G__39588 = null;
var G__39589 = (0);
var G__39590 = (0);
seq__38749_39566 = G__39587;
chunk__38750_39567 = G__39588;
count__38751_39568 = G__39589;
i__38752_39569 = G__39590;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__38786){
var vec__38787 = p__38786;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38787,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38787,(1),null);
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
var G__38801 = shadow.dom.dom_node(el);
var G__38802 = cls;
return goog.dom.getAncestorByClass(G__38801,G__38802);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38804 = arguments.length;
switch (G__38804) {
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
var G__38807 = shadow.dom.dom_node(el);
var G__38808 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__38807,G__38808);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__38810 = shadow.dom.dom_node(el);
var G__38811 = cljs.core.name(tag);
var G__38812 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__38810,G__38811,G__38812);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__38815 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__38815);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__38816 = shadow.dom.dom_node(dom);
var G__38817 = value;
return goog.dom.forms.setValue(G__38816,G__38817);
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
var seq__38828 = cljs.core.seq(style_keys);
var chunk__38829 = null;
var count__38830 = (0);
var i__38831 = (0);
while(true){
if((i__38831 < count__38830)){
var it = chunk__38829.cljs$core$IIndexed$_nth$arity$2(null,i__38831);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39600 = seq__38828;
var G__39601 = chunk__38829;
var G__39602 = count__38830;
var G__39603 = (i__38831 + (1));
seq__38828 = G__39600;
chunk__38829 = G__39601;
count__38830 = G__39602;
i__38831 = G__39603;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38828);
if(temp__5457__auto__){
var seq__38828__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38828__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38828__$1);
var G__39607 = cljs.core.chunk_rest(seq__38828__$1);
var G__39608 = c__4550__auto__;
var G__39609 = cljs.core.count(c__4550__auto__);
var G__39610 = (0);
seq__38828 = G__39607;
chunk__38829 = G__39608;
count__38830 = G__39609;
i__38831 = G__39610;
continue;
} else {
var it = cljs.core.first(seq__38828__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39611 = cljs.core.next(seq__38828__$1);
var G__39612 = null;
var G__39613 = (0);
var G__39614 = (0);
seq__38828 = G__39611;
chunk__38829 = G__39612;
count__38830 = G__39613;
i__38831 = G__39614;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k38845,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__38859 = k38845;
var G__38859__$1 = (((G__38859 instanceof cljs.core.Keyword))?G__38859.fqn:null);
switch (G__38859__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38845,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__38867){
var vec__38868 = p__38867;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38844){
var self__ = this;
var G__38844__$1 = this;
return (new cljs.core.RecordIter((0),G__38844__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__38882 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38882(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38846,other38847){
var self__ = this;
var this38846__$1 = this;
return (((!((other38847 == null)))) && ((this38846__$1.constructor === other38847.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38846__$1.x,other38847.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38846__$1.y,other38847.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38846__$1.__extmap,other38847.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__38844){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38884 = cljs.core.keyword_identical_QMARK_;
var expr__38885 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38887 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__38888 = expr__38885;
return (pred__38884.cljs$core$IFn$_invoke$arity$2 ? pred__38884.cljs$core$IFn$_invoke$arity$2(G__38887,G__38888) : pred__38884.call(null,G__38887,G__38888));
})())){
return (new shadow.dom.Coordinate(G__38844,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38889 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__38890 = expr__38885;
return (pred__38884.cljs$core$IFn$_invoke$arity$2 ? pred__38884.cljs$core$IFn$_invoke$arity$2(G__38889,G__38890) : pred__38884.call(null,G__38889,G__38890));
})())){
return (new shadow.dom.Coordinate(self__.x,G__38844,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__38844),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__38844){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38844,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38850){
var extmap__4424__auto__ = (function (){var G__38897 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38850,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38850)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38897);
} else {
return G__38897;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38850),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38850),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__38903 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__38903);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__38905 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__38905);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__38906 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__38906);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k38908,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__38912 = k38908;
var G__38912__$1 = (((G__38912 instanceof cljs.core.Keyword))?G__38912.fqn:null);
switch (G__38912__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38908,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__38915){
var vec__38918 = p__38915;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38918,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38918,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38907){
var self__ = this;
var G__38907__$1 = this;
return (new cljs.core.RecordIter((0),G__38907__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__38944 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38944(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38909,other38910){
var self__ = this;
var this38909__$1 = this;
return (((!((other38910 == null)))) && ((this38909__$1.constructor === other38910.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38909__$1.w,other38910.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38909__$1.h,other38910.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38909__$1.__extmap,other38910.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__38907){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38950 = cljs.core.keyword_identical_QMARK_;
var expr__38951 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38953 = new cljs.core.Keyword(null,"w","w",354169001);
var G__38954 = expr__38951;
return (pred__38950.cljs$core$IFn$_invoke$arity$2 ? pred__38950.cljs$core$IFn$_invoke$arity$2(G__38953,G__38954) : pred__38950.call(null,G__38953,G__38954));
})())){
return (new shadow.dom.Size(G__38907,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38955 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__38956 = expr__38951;
return (pred__38950.cljs$core$IFn$_invoke$arity$2 ? pred__38950.cljs$core$IFn$_invoke$arity$2(G__38955,G__38956) : pred__38950.call(null,G__38955,G__38956));
})())){
return (new shadow.dom.Size(self__.w,G__38907,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__38907),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__38907){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38907,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38911){
var extmap__4424__auto__ = (function (){var G__38974 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38911,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38974);
} else {
return G__38974;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38911),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38911),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__38976 = shadow.dom.dom_node(el);
return goog.style.getSize(G__38976);
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
var G__39676 = (i + (1));
var G__39677 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39676;
ret = G__39677;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38996){
var vec__39000 = p__38996;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39000,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39004 = arguments.length;
switch (G__39004) {
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
var G__39022_39684 = new_node;
var G__39023_39685 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__39022_39684,G__39023_39685);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__39025_39687 = new_node;
var G__39026_39688 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__39025_39687,G__39026_39688);

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
var G__39693 = ps;
var G__39694 = (i + (1));
el__$1 = G__39693;
i = G__39694;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__39037 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__39037);
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
var G__39045 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__39045);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__39047 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__39047);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39050 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39050,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39050,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39050,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39055_39695 = cljs.core.seq(props);
var chunk__39056_39696 = null;
var count__39057_39697 = (0);
var i__39058_39698 = (0);
while(true){
if((i__39058_39698 < count__39057_39697)){
var vec__39069_39699 = chunk__39056_39696.cljs$core$IIndexed$_nth$arity$2(null,i__39058_39698);
var k_39700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39069_39699,(0),null);
var v_39701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39069_39699,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_39700);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39700),v_39701);


var G__39703 = seq__39055_39695;
var G__39704 = chunk__39056_39696;
var G__39705 = count__39057_39697;
var G__39706 = (i__39058_39698 + (1));
seq__39055_39695 = G__39703;
chunk__39056_39696 = G__39704;
count__39057_39697 = G__39705;
i__39058_39698 = G__39706;
continue;
} else {
var temp__5457__auto___39707 = cljs.core.seq(seq__39055_39695);
if(temp__5457__auto___39707){
var seq__39055_39708__$1 = temp__5457__auto___39707;
if(cljs.core.chunked_seq_QMARK_(seq__39055_39708__$1)){
var c__4550__auto___39709 = cljs.core.chunk_first(seq__39055_39708__$1);
var G__39710 = cljs.core.chunk_rest(seq__39055_39708__$1);
var G__39711 = c__4550__auto___39709;
var G__39713 = cljs.core.count(c__4550__auto___39709);
var G__39714 = (0);
seq__39055_39695 = G__39710;
chunk__39056_39696 = G__39711;
count__39057_39697 = G__39713;
i__39058_39698 = G__39714;
continue;
} else {
var vec__39082_39717 = cljs.core.first(seq__39055_39708__$1);
var k_39718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39082_39717,(0),null);
var v_39719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39082_39717,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_39718);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39718),v_39719);


var G__39723 = cljs.core.next(seq__39055_39708__$1);
var G__39724 = null;
var G__39725 = (0);
var G__39726 = (0);
seq__39055_39695 = G__39723;
chunk__39056_39696 = G__39724;
count__39057_39697 = G__39725;
i__39058_39698 = G__39726;
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
var vec__39090 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39090,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39090,(1),null);
var seq__39093_39732 = cljs.core.seq(node_children);
var chunk__39095_39733 = null;
var count__39096_39734 = (0);
var i__39097_39735 = (0);
while(true){
if((i__39097_39735 < count__39096_39734)){
var child_struct_39738 = chunk__39095_39733.cljs$core$IIndexed$_nth$arity$2(null,i__39097_39735);
if((!((child_struct_39738 == null)))){
if(typeof child_struct_39738 === 'string'){
var text_39739 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39739),child_struct_39738].join(''));
} else {
var children_39740 = shadow.dom.svg_node(child_struct_39738);
if(cljs.core.seq_QMARK_(children_39740)){
var seq__39139_39741 = cljs.core.seq(children_39740);
var chunk__39141_39742 = null;
var count__39142_39743 = (0);
var i__39143_39744 = (0);
while(true){
if((i__39143_39744 < count__39142_39743)){
var child_39745 = chunk__39141_39742.cljs$core$IIndexed$_nth$arity$2(null,i__39143_39744);
if(cljs.core.truth_(child_39745)){
node.appendChild(child_39745);


var G__39746 = seq__39139_39741;
var G__39747 = chunk__39141_39742;
var G__39748 = count__39142_39743;
var G__39749 = (i__39143_39744 + (1));
seq__39139_39741 = G__39746;
chunk__39141_39742 = G__39747;
count__39142_39743 = G__39748;
i__39143_39744 = G__39749;
continue;
} else {
var G__39750 = seq__39139_39741;
var G__39751 = chunk__39141_39742;
var G__39752 = count__39142_39743;
var G__39753 = (i__39143_39744 + (1));
seq__39139_39741 = G__39750;
chunk__39141_39742 = G__39751;
count__39142_39743 = G__39752;
i__39143_39744 = G__39753;
continue;
}
} else {
var temp__5457__auto___39754 = cljs.core.seq(seq__39139_39741);
if(temp__5457__auto___39754){
var seq__39139_39758__$1 = temp__5457__auto___39754;
if(cljs.core.chunked_seq_QMARK_(seq__39139_39758__$1)){
var c__4550__auto___39759 = cljs.core.chunk_first(seq__39139_39758__$1);
var G__39760 = cljs.core.chunk_rest(seq__39139_39758__$1);
var G__39761 = c__4550__auto___39759;
var G__39762 = cljs.core.count(c__4550__auto___39759);
var G__39763 = (0);
seq__39139_39741 = G__39760;
chunk__39141_39742 = G__39761;
count__39142_39743 = G__39762;
i__39143_39744 = G__39763;
continue;
} else {
var child_39764 = cljs.core.first(seq__39139_39758__$1);
if(cljs.core.truth_(child_39764)){
node.appendChild(child_39764);


var G__39765 = cljs.core.next(seq__39139_39758__$1);
var G__39766 = null;
var G__39767 = (0);
var G__39768 = (0);
seq__39139_39741 = G__39765;
chunk__39141_39742 = G__39766;
count__39142_39743 = G__39767;
i__39143_39744 = G__39768;
continue;
} else {
var G__39769 = cljs.core.next(seq__39139_39758__$1);
var G__39770 = null;
var G__39771 = (0);
var G__39772 = (0);
seq__39139_39741 = G__39769;
chunk__39141_39742 = G__39770;
count__39142_39743 = G__39771;
i__39143_39744 = G__39772;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39740);
}
}


var G__39776 = seq__39093_39732;
var G__39777 = chunk__39095_39733;
var G__39778 = count__39096_39734;
var G__39779 = (i__39097_39735 + (1));
seq__39093_39732 = G__39776;
chunk__39095_39733 = G__39777;
count__39096_39734 = G__39778;
i__39097_39735 = G__39779;
continue;
} else {
var G__39780 = seq__39093_39732;
var G__39781 = chunk__39095_39733;
var G__39782 = count__39096_39734;
var G__39783 = (i__39097_39735 + (1));
seq__39093_39732 = G__39780;
chunk__39095_39733 = G__39781;
count__39096_39734 = G__39782;
i__39097_39735 = G__39783;
continue;
}
} else {
var temp__5457__auto___39787 = cljs.core.seq(seq__39093_39732);
if(temp__5457__auto___39787){
var seq__39093_39788__$1 = temp__5457__auto___39787;
if(cljs.core.chunked_seq_QMARK_(seq__39093_39788__$1)){
var c__4550__auto___39789 = cljs.core.chunk_first(seq__39093_39788__$1);
var G__39790 = cljs.core.chunk_rest(seq__39093_39788__$1);
var G__39791 = c__4550__auto___39789;
var G__39792 = cljs.core.count(c__4550__auto___39789);
var G__39793 = (0);
seq__39093_39732 = G__39790;
chunk__39095_39733 = G__39791;
count__39096_39734 = G__39792;
i__39097_39735 = G__39793;
continue;
} else {
var child_struct_39795 = cljs.core.first(seq__39093_39788__$1);
if((!((child_struct_39795 == null)))){
if(typeof child_struct_39795 === 'string'){
var text_39796 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39796),child_struct_39795].join(''));
} else {
var children_39797 = shadow.dom.svg_node(child_struct_39795);
if(cljs.core.seq_QMARK_(children_39797)){
var seq__39153_39798 = cljs.core.seq(children_39797);
var chunk__39155_39799 = null;
var count__39156_39800 = (0);
var i__39157_39801 = (0);
while(true){
if((i__39157_39801 < count__39156_39800)){
var child_39802 = chunk__39155_39799.cljs$core$IIndexed$_nth$arity$2(null,i__39157_39801);
if(cljs.core.truth_(child_39802)){
node.appendChild(child_39802);


var G__39803 = seq__39153_39798;
var G__39804 = chunk__39155_39799;
var G__39805 = count__39156_39800;
var G__39806 = (i__39157_39801 + (1));
seq__39153_39798 = G__39803;
chunk__39155_39799 = G__39804;
count__39156_39800 = G__39805;
i__39157_39801 = G__39806;
continue;
} else {
var G__39808 = seq__39153_39798;
var G__39809 = chunk__39155_39799;
var G__39810 = count__39156_39800;
var G__39811 = (i__39157_39801 + (1));
seq__39153_39798 = G__39808;
chunk__39155_39799 = G__39809;
count__39156_39800 = G__39810;
i__39157_39801 = G__39811;
continue;
}
} else {
var temp__5457__auto___39812__$1 = cljs.core.seq(seq__39153_39798);
if(temp__5457__auto___39812__$1){
var seq__39153_39813__$1 = temp__5457__auto___39812__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39153_39813__$1)){
var c__4550__auto___39814 = cljs.core.chunk_first(seq__39153_39813__$1);
var G__39815 = cljs.core.chunk_rest(seq__39153_39813__$1);
var G__39816 = c__4550__auto___39814;
var G__39817 = cljs.core.count(c__4550__auto___39814);
var G__39818 = (0);
seq__39153_39798 = G__39815;
chunk__39155_39799 = G__39816;
count__39156_39800 = G__39817;
i__39157_39801 = G__39818;
continue;
} else {
var child_39819 = cljs.core.first(seq__39153_39813__$1);
if(cljs.core.truth_(child_39819)){
node.appendChild(child_39819);


var G__39820 = cljs.core.next(seq__39153_39813__$1);
var G__39821 = null;
var G__39822 = (0);
var G__39823 = (0);
seq__39153_39798 = G__39820;
chunk__39155_39799 = G__39821;
count__39156_39800 = G__39822;
i__39157_39801 = G__39823;
continue;
} else {
var G__39824 = cljs.core.next(seq__39153_39813__$1);
var G__39825 = null;
var G__39826 = (0);
var G__39827 = (0);
seq__39153_39798 = G__39824;
chunk__39155_39799 = G__39825;
count__39156_39800 = G__39826;
i__39157_39801 = G__39827;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39797);
}
}


var G__39828 = cljs.core.next(seq__39093_39788__$1);
var G__39829 = null;
var G__39830 = (0);
var G__39831 = (0);
seq__39093_39732 = G__39828;
chunk__39095_39733 = G__39829;
count__39096_39734 = G__39830;
i__39097_39735 = G__39831;
continue;
} else {
var G__39832 = cljs.core.next(seq__39093_39788__$1);
var G__39833 = null;
var G__39834 = (0);
var G__39835 = (0);
seq__39093_39732 = G__39832;
chunk__39095_39733 = G__39833;
count__39096_39734 = G__39834;
i__39097_39735 = G__39835;
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

var G__39161_39838 = shadow.dom._to_svg;
var G__39162_39839 = "string";
var G__39163_39840 = ((function (G__39161_39838,G__39162_39839){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__39161_39838,G__39162_39839))
;
goog.object.set(G__39161_39838,G__39162_39839,G__39163_39840);

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

var G__39168_39842 = shadow.dom._to_svg;
var G__39169_39843 = "null";
var G__39170_39844 = ((function (G__39168_39842,G__39169_39843){
return (function (_){
return null;
});})(G__39168_39842,G__39169_39843))
;
goog.object.set(G__39168_39842,G__39169_39843,G__39170_39844);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39845 = arguments.length;
var i__4731__auto___39846 = (0);
while(true){
if((i__4731__auto___39846 < len__4730__auto___39845)){
args__4736__auto__.push((arguments[i__4731__auto___39846]));

var G__39849 = (i__4731__auto___39846 + (1));
i__4731__auto___39846 = G__39849;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq39171){
var G__39172 = cljs.core.first(seq39171);
var seq39171__$1 = cljs.core.next(seq39171);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39172,seq39171__$1);
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
var G__39183 = arguments.length;
switch (G__39183) {
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
var G__39193_39852 = shadow.dom.dom_node(el);
var G__39194_39853 = cljs.core.name(event);
var G__39195_39854 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39193_39852,G__39194_39853,G__39195_39854) : shadow.dom.dom_listen.call(null,G__39193_39852,G__39194_39853,G__39195_39854));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__36758__auto___39858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39858,buf,chan,event_fn){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39858,buf,chan,event_fn){
return (function (state_39202){
var state_val_39203 = (state_39202[(1)]);
if((state_val_39203 === (1))){
var state_39202__$1 = state_39202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39202__$1,(2),once_or_cleanup);
} else {
if((state_val_39203 === (2))){
var inst_39199 = (state_39202[(2)]);
var inst_39200 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39202__$1 = (function (){var statearr_39205 = state_39202;
(statearr_39205[(7)] = inst_39199);

return statearr_39205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39202__$1,inst_39200);
} else {
return null;
}
}
});})(c__36758__auto___39858,buf,chan,event_fn))
;
return ((function (switch__36657__auto__,c__36758__auto___39858,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__36658__auto__ = null;
var shadow$dom$state_machine__36658__auto____0 = (function (){
var statearr_39206 = [null,null,null,null,null,null,null,null];
(statearr_39206[(0)] = shadow$dom$state_machine__36658__auto__);

(statearr_39206[(1)] = (1));

return statearr_39206;
});
var shadow$dom$state_machine__36658__auto____1 = (function (state_39202){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_39202);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e39207){if((e39207 instanceof Object)){
var ex__36661__auto__ = e39207;
var statearr_39209_39866 = state_39202;
(statearr_39209_39866[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39869 = state_39202;
state_39202 = G__39869;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
shadow$dom$state_machine__36658__auto__ = function(state_39202){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36658__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36658__auto____1.call(this,state_39202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36658__auto____0;
shadow$dom$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36658__auto____1;
return shadow$dom$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39858,buf,chan,event_fn))
})();
var state__36760__auto__ = (function (){var statearr_39211 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_39211[(6)] = c__36758__auto___39858);

return statearr_39211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39858,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
