goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36818 = arguments.length;
switch (G__36818) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36819 = (function (f,blockable,meta36820){
this.f = f;
this.blockable = blockable;
this.meta36820 = meta36820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36821,meta36820__$1){
var self__ = this;
var _36821__$1 = this;
return (new cljs.core.async.t_cljs$core$async36819(self__.f,self__.blockable,meta36820__$1));
});

cljs.core.async.t_cljs$core$async36819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36821){
var self__ = this;
var _36821__$1 = this;
return self__.meta36820;
});

cljs.core.async.t_cljs$core$async36819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36820","meta36820",1238579617,null)], null);
});

cljs.core.async.t_cljs$core$async36819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36819";

cljs.core.async.t_cljs$core$async36819.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async36819");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36819.
 */
cljs.core.async.__GT_t_cljs$core$async36819 = (function cljs$core$async$__GT_t_cljs$core$async36819(f__$1,blockable__$1,meta36820){
return (new cljs.core.async.t_cljs$core$async36819(f__$1,blockable__$1,meta36820));
});

}

return (new cljs.core.async.t_cljs$core$async36819(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36824 = arguments.length;
switch (G__36824) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36826 = arguments.length;
switch (G__36826) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36828 = arguments.length;
switch (G__36828) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38260 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38260) : fn1.call(null,val_38260));
} else {
cljs.core.async.impl.dispatch.run(((function (val_38260,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38260) : fn1.call(null,val_38260));
});})(val_38260,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36830 = arguments.length;
switch (G__36830) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___38270 = n;
var x_38271 = (0);
while(true){
if((x_38271 < n__4607__auto___38270)){
(a[x_38271] = (0));

var G__38272 = (x_38271 + (1));
x_38271 = G__38272;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__38273 = (i + (1));
i = G__38273;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36831 = (function (flag,meta36832){
this.flag = flag;
this.meta36832 = meta36832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36833,meta36832__$1){
var self__ = this;
var _36833__$1 = this;
return (new cljs.core.async.t_cljs$core$async36831(self__.flag,meta36832__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36833){
var self__ = this;
var _36833__$1 = this;
return self__.meta36832;
});})(flag))
;

cljs.core.async.t_cljs$core$async36831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36831.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36832","meta36832",-2062604523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36831";

cljs.core.async.t_cljs$core$async36831.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async36831");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36831.
 */
cljs.core.async.__GT_t_cljs$core$async36831 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36831(flag__$1,meta36832){
return (new cljs.core.async.t_cljs$core$async36831(flag__$1,meta36832));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36831(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36834 = (function (flag,cb,meta36835){
this.flag = flag;
this.cb = cb;
this.meta36835 = meta36835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36836,meta36835__$1){
var self__ = this;
var _36836__$1 = this;
return (new cljs.core.async.t_cljs$core$async36834(self__.flag,self__.cb,meta36835__$1));
});

cljs.core.async.t_cljs$core$async36834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36836){
var self__ = this;
var _36836__$1 = this;
return self__.meta36835;
});

cljs.core.async.t_cljs$core$async36834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async36834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36835","meta36835",-872103096,null)], null);
});

cljs.core.async.t_cljs$core$async36834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36834";

cljs.core.async.t_cljs$core$async36834.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async36834");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36834.
 */
cljs.core.async.__GT_t_cljs$core$async36834 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36834(flag__$1,cb__$1,meta36835){
return (new cljs.core.async.t_cljs$core$async36834(flag__$1,cb__$1,meta36835));
});

}

return (new cljs.core.async.t_cljs$core$async36834(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36837_SHARP_){
var G__36839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36837_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36839) : fret.call(null,G__36839));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36838_SHARP_){
var G__36840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36838_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36840) : fret.call(null,G__36840));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38297 = (i + (1));
i = G__38297;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38302 = arguments.length;
var i__4731__auto___38304 = (0);
while(true){
if((i__4731__auto___38304 < len__4730__auto___38302)){
args__4736__auto__.push((arguments[i__4731__auto___38304]));

var G__38305 = (i__4731__auto___38304 + (1));
i__4731__auto___38304 = G__38305;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36843){
var map__36844 = p__36843;
var map__36844__$1 = (((((!((map__36844 == null))))?(((((map__36844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36844):map__36844);
var opts = map__36844__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36841){
var G__36842 = cljs.core.first(seq36841);
var seq36841__$1 = cljs.core.next(seq36841);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36842,seq36841__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36847 = arguments.length;
switch (G__36847) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36758__auto___38314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___38314){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___38314){
return (function (state_36871){
var state_val_36872 = (state_36871[(1)]);
if((state_val_36872 === (7))){
var inst_36867 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
var statearr_36873_38320 = state_36871__$1;
(statearr_36873_38320[(2)] = inst_36867);

(statearr_36873_38320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (1))){
var state_36871__$1 = state_36871;
var statearr_36874_38321 = state_36871__$1;
(statearr_36874_38321[(2)] = null);

(statearr_36874_38321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (4))){
var inst_36850 = (state_36871[(7)]);
var inst_36850__$1 = (state_36871[(2)]);
var inst_36851 = (inst_36850__$1 == null);
var state_36871__$1 = (function (){var statearr_36875 = state_36871;
(statearr_36875[(7)] = inst_36850__$1);

return statearr_36875;
})();
if(cljs.core.truth_(inst_36851)){
var statearr_36876_38322 = state_36871__$1;
(statearr_36876_38322[(1)] = (5));

} else {
var statearr_36877_38324 = state_36871__$1;
(statearr_36877_38324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (13))){
var state_36871__$1 = state_36871;
var statearr_36878_38325 = state_36871__$1;
(statearr_36878_38325[(2)] = null);

(statearr_36878_38325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (6))){
var inst_36850 = (state_36871[(7)]);
var state_36871__$1 = state_36871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36871__$1,(11),to,inst_36850);
} else {
if((state_val_36872 === (3))){
var inst_36869 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36871__$1,inst_36869);
} else {
if((state_val_36872 === (12))){
var state_36871__$1 = state_36871;
var statearr_36879_38326 = state_36871__$1;
(statearr_36879_38326[(2)] = null);

(statearr_36879_38326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (2))){
var state_36871__$1 = state_36871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36871__$1,(4),from);
} else {
if((state_val_36872 === (11))){
var inst_36860 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
if(cljs.core.truth_(inst_36860)){
var statearr_36880_38329 = state_36871__$1;
(statearr_36880_38329[(1)] = (12));

} else {
var statearr_36881_38332 = state_36871__$1;
(statearr_36881_38332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (9))){
var state_36871__$1 = state_36871;
var statearr_36882_38333 = state_36871__$1;
(statearr_36882_38333[(2)] = null);

(statearr_36882_38333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (5))){
var state_36871__$1 = state_36871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36883_38334 = state_36871__$1;
(statearr_36883_38334[(1)] = (8));

} else {
var statearr_36884_38335 = state_36871__$1;
(statearr_36884_38335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (14))){
var inst_36865 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
var statearr_36885_38336 = state_36871__$1;
(statearr_36885_38336[(2)] = inst_36865);

(statearr_36885_38336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (10))){
var inst_36857 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
var statearr_36886_38337 = state_36871__$1;
(statearr_36886_38337[(2)] = inst_36857);

(statearr_36886_38337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (8))){
var inst_36854 = cljs.core.async.close_BANG_(to);
var state_36871__$1 = state_36871;
var statearr_36887_38338 = state_36871__$1;
(statearr_36887_38338[(2)] = inst_36854);

(statearr_36887_38338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___38314))
;
return ((function (switch__36657__auto__,c__36758__auto___38314){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_36888 = [null,null,null,null,null,null,null,null];
(statearr_36888[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_36888[(1)] = (1));

return statearr_36888;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_36871){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_36871);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e36889){if((e36889 instanceof Object)){
var ex__36661__auto__ = e36889;
var statearr_36890_38342 = state_36871;
(statearr_36890_38342[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38345 = state_36871;
state_36871 = G__38345;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_36871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_36871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___38314))
})();
var state__36760__auto__ = (function (){var statearr_36891 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_36891[(6)] = c__36758__auto___38314);

return statearr_36891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___38314))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__36892){
var vec__36893 = p__36892;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(1),null);
var job = vec__36893;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36758__auto___38350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___38350,res,vec__36893,v,p,job,jobs,results){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___38350,res,vec__36893,v,p,job,jobs,results){
return (function (state_36900){
var state_val_36901 = (state_36900[(1)]);
if((state_val_36901 === (1))){
var state_36900__$1 = state_36900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36900__$1,(2),res,v);
} else {
if((state_val_36901 === (2))){
var inst_36897 = (state_36900[(2)]);
var inst_36898 = cljs.core.async.close_BANG_(res);
var state_36900__$1 = (function (){var statearr_36902 = state_36900;
(statearr_36902[(7)] = inst_36897);

return statearr_36902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36900__$1,inst_36898);
} else {
return null;
}
}
});})(c__36758__auto___38350,res,vec__36893,v,p,job,jobs,results))
;
return ((function (switch__36657__auto__,c__36758__auto___38350,res,vec__36893,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0 = (function (){
var statearr_36903 = [null,null,null,null,null,null,null,null];
(statearr_36903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__);

(statearr_36903[(1)] = (1));

return statearr_36903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1 = (function (state_36900){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_36900);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e36904){if((e36904 instanceof Object)){
var ex__36661__auto__ = e36904;
var statearr_36905_38363 = state_36900;
(statearr_36905_38363[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38366 = state_36900;
state_36900 = G__38366;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = function(state_36900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1.call(this,state_36900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___38350,res,vec__36893,v,p,job,jobs,results))
})();
var state__36760__auto__ = (function (){var statearr_36906 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_36906[(6)] = c__36758__auto___38350);

return statearr_36906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___38350,res,vec__36893,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36907){
var vec__36908 = p__36907;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36908,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36908,(1),null);
var job = vec__36908;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___38370 = n;
var __38372 = (0);
while(true){
if((__38372 < n__4607__auto___38370)){
var G__36911_38374 = type;
var G__36911_38375__$1 = (((G__36911_38374 instanceof cljs.core.Keyword))?G__36911_38374.fqn:null);
switch (G__36911_38375__$1) {
case "compute":
var c__36758__auto___38377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38372,c__36758__auto___38377,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (__38372,c__36758__auto___38377,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async){
return (function (state_36924){
var state_val_36925 = (state_36924[(1)]);
if((state_val_36925 === (1))){
var state_36924__$1 = state_36924;
var statearr_36926_38380 = state_36924__$1;
(statearr_36926_38380[(2)] = null);

(statearr_36926_38380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (2))){
var state_36924__$1 = state_36924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36924__$1,(4),jobs);
} else {
if((state_val_36925 === (3))){
var inst_36922 = (state_36924[(2)]);
var state_36924__$1 = state_36924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36924__$1,inst_36922);
} else {
if((state_val_36925 === (4))){
var inst_36914 = (state_36924[(2)]);
var inst_36915 = process(inst_36914);
var state_36924__$1 = state_36924;
if(cljs.core.truth_(inst_36915)){
var statearr_36927_38381 = state_36924__$1;
(statearr_36927_38381[(1)] = (5));

} else {
var statearr_36928_38382 = state_36924__$1;
(statearr_36928_38382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (5))){
var state_36924__$1 = state_36924;
var statearr_36929_38383 = state_36924__$1;
(statearr_36929_38383[(2)] = null);

(statearr_36929_38383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (6))){
var state_36924__$1 = state_36924;
var statearr_36930_38384 = state_36924__$1;
(statearr_36930_38384[(2)] = null);

(statearr_36930_38384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36925 === (7))){
var inst_36920 = (state_36924[(2)]);
var state_36924__$1 = state_36924;
var statearr_36931_38385 = state_36924__$1;
(statearr_36931_38385[(2)] = inst_36920);

(statearr_36931_38385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38372,c__36758__auto___38377,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async))
;
return ((function (__38372,switch__36657__auto__,c__36758__auto___38377,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0 = (function (){
var statearr_36932 = [null,null,null,null,null,null,null];
(statearr_36932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__);

(statearr_36932[(1)] = (1));

return statearr_36932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1 = (function (state_36924){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_36924);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e36933){if((e36933 instanceof Object)){
var ex__36661__auto__ = e36933;
var statearr_36934_38386 = state_36924;
(statearr_36934_38386[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38391 = state_36924;
state_36924 = G__38391;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = function(state_36924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1.call(this,state_36924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__;
})()
;})(__38372,switch__36657__auto__,c__36758__auto___38377,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async))
})();
var state__36760__auto__ = (function (){var statearr_36935 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_36935[(6)] = c__36758__auto___38377);

return statearr_36935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(__38372,c__36758__auto___38377,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async))
);


break;
case "async":
var c__36758__auto___38392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38372,c__36758__auto___38392,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (__38372,c__36758__auto___38392,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async){
return (function (state_36948){
var state_val_36949 = (state_36948[(1)]);
if((state_val_36949 === (1))){
var state_36948__$1 = state_36948;
var statearr_36950_38397 = state_36948__$1;
(statearr_36950_38397[(2)] = null);

(statearr_36950_38397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (2))){
var state_36948__$1 = state_36948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36948__$1,(4),jobs);
} else {
if((state_val_36949 === (3))){
var inst_36946 = (state_36948[(2)]);
var state_36948__$1 = state_36948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36948__$1,inst_36946);
} else {
if((state_val_36949 === (4))){
var inst_36938 = (state_36948[(2)]);
var inst_36939 = async(inst_36938);
var state_36948__$1 = state_36948;
if(cljs.core.truth_(inst_36939)){
var statearr_36951_38399 = state_36948__$1;
(statearr_36951_38399[(1)] = (5));

} else {
var statearr_36952_38400 = state_36948__$1;
(statearr_36952_38400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (5))){
var state_36948__$1 = state_36948;
var statearr_36953_38401 = state_36948__$1;
(statearr_36953_38401[(2)] = null);

(statearr_36953_38401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (6))){
var state_36948__$1 = state_36948;
var statearr_36954_38402 = state_36948__$1;
(statearr_36954_38402[(2)] = null);

(statearr_36954_38402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (7))){
var inst_36944 = (state_36948[(2)]);
var state_36948__$1 = state_36948;
var statearr_36955_38403 = state_36948__$1;
(statearr_36955_38403[(2)] = inst_36944);

(statearr_36955_38403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38372,c__36758__auto___38392,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async))
;
return ((function (__38372,switch__36657__auto__,c__36758__auto___38392,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0 = (function (){
var statearr_36956 = [null,null,null,null,null,null,null];
(statearr_36956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__);

(statearr_36956[(1)] = (1));

return statearr_36956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1 = (function (state_36948){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_36948);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e36957){if((e36957 instanceof Object)){
var ex__36661__auto__ = e36957;
var statearr_36958_38407 = state_36948;
(statearr_36958_38407[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38408 = state_36948;
state_36948 = G__38408;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = function(state_36948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1.call(this,state_36948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__;
})()
;})(__38372,switch__36657__auto__,c__36758__auto___38392,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async))
})();
var state__36760__auto__ = (function (){var statearr_36959 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_36959[(6)] = c__36758__auto___38392);

return statearr_36959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(__38372,c__36758__auto___38392,G__36911_38374,G__36911_38375__$1,n__4607__auto___38370,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36911_38375__$1)].join('')));

}

var G__38410 = (__38372 + (1));
__38372 = G__38410;
continue;
} else {
}
break;
}

var c__36758__auto___38411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___38411,jobs,results,process,async){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___38411,jobs,results,process,async){
return (function (state_36981){
var state_val_36982 = (state_36981[(1)]);
if((state_val_36982 === (1))){
var state_36981__$1 = state_36981;
var statearr_36983_38414 = state_36981__$1;
(statearr_36983_38414[(2)] = null);

(statearr_36983_38414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (2))){
var state_36981__$1 = state_36981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36981__$1,(4),from);
} else {
if((state_val_36982 === (3))){
var inst_36979 = (state_36981[(2)]);
var state_36981__$1 = state_36981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36981__$1,inst_36979);
} else {
if((state_val_36982 === (4))){
var inst_36962 = (state_36981[(7)]);
var inst_36962__$1 = (state_36981[(2)]);
var inst_36963 = (inst_36962__$1 == null);
var state_36981__$1 = (function (){var statearr_36984 = state_36981;
(statearr_36984[(7)] = inst_36962__$1);

return statearr_36984;
})();
if(cljs.core.truth_(inst_36963)){
var statearr_36985_38416 = state_36981__$1;
(statearr_36985_38416[(1)] = (5));

} else {
var statearr_36986_38417 = state_36981__$1;
(statearr_36986_38417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (5))){
var inst_36965 = cljs.core.async.close_BANG_(jobs);
var state_36981__$1 = state_36981;
var statearr_36987_38419 = state_36981__$1;
(statearr_36987_38419[(2)] = inst_36965);

(statearr_36987_38419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (6))){
var inst_36962 = (state_36981[(7)]);
var inst_36967 = (state_36981[(8)]);
var inst_36967__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36969 = [inst_36962,inst_36967__$1];
var inst_36970 = (new cljs.core.PersistentVector(null,2,(5),inst_36968,inst_36969,null));
var state_36981__$1 = (function (){var statearr_36988 = state_36981;
(statearr_36988[(8)] = inst_36967__$1);

return statearr_36988;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36981__$1,(8),jobs,inst_36970);
} else {
if((state_val_36982 === (7))){
var inst_36977 = (state_36981[(2)]);
var state_36981__$1 = state_36981;
var statearr_36989_38421 = state_36981__$1;
(statearr_36989_38421[(2)] = inst_36977);

(statearr_36989_38421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (8))){
var inst_36967 = (state_36981[(8)]);
var inst_36972 = (state_36981[(2)]);
var state_36981__$1 = (function (){var statearr_36990 = state_36981;
(statearr_36990[(9)] = inst_36972);

return statearr_36990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36981__$1,(9),results,inst_36967);
} else {
if((state_val_36982 === (9))){
var inst_36974 = (state_36981[(2)]);
var state_36981__$1 = (function (){var statearr_36991 = state_36981;
(statearr_36991[(10)] = inst_36974);

return statearr_36991;
})();
var statearr_36992_38423 = state_36981__$1;
(statearr_36992_38423[(2)] = null);

(statearr_36992_38423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__36758__auto___38411,jobs,results,process,async))
;
return ((function (switch__36657__auto__,c__36758__auto___38411,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0 = (function (){
var statearr_36993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__);

(statearr_36993[(1)] = (1));

return statearr_36993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1 = (function (state_36981){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_36981);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e36994){if((e36994 instanceof Object)){
var ex__36661__auto__ = e36994;
var statearr_36995_38426 = state_36981;
(statearr_36995_38426[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38427 = state_36981;
state_36981 = G__38427;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = function(state_36981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1.call(this,state_36981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___38411,jobs,results,process,async))
})();
var state__36760__auto__ = (function (){var statearr_36996 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_36996[(6)] = c__36758__auto___38411);

return statearr_36996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___38411,jobs,results,process,async))
);


var c__36758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto__,jobs,results,process,async){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto__,jobs,results,process,async){
return (function (state_37034){
var state_val_37035 = (state_37034[(1)]);
if((state_val_37035 === (7))){
var inst_37030 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37036_38430 = state_37034__$1;
(statearr_37036_38430[(2)] = inst_37030);

(statearr_37036_38430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (20))){
var state_37034__$1 = state_37034;
var statearr_37037_38431 = state_37034__$1;
(statearr_37037_38431[(2)] = null);

(statearr_37037_38431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (1))){
var state_37034__$1 = state_37034;
var statearr_37038_38432 = state_37034__$1;
(statearr_37038_38432[(2)] = null);

(statearr_37038_38432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (4))){
var inst_36999 = (state_37034[(7)]);
var inst_36999__$1 = (state_37034[(2)]);
var inst_37000 = (inst_36999__$1 == null);
var state_37034__$1 = (function (){var statearr_37039 = state_37034;
(statearr_37039[(7)] = inst_36999__$1);

return statearr_37039;
})();
if(cljs.core.truth_(inst_37000)){
var statearr_37040_38433 = state_37034__$1;
(statearr_37040_38433[(1)] = (5));

} else {
var statearr_37041_38434 = state_37034__$1;
(statearr_37041_38434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (15))){
var inst_37012 = (state_37034[(8)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37034__$1,(18),to,inst_37012);
} else {
if((state_val_37035 === (21))){
var inst_37025 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37042_38437 = state_37034__$1;
(statearr_37042_38437[(2)] = inst_37025);

(statearr_37042_38437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (13))){
var inst_37027 = (state_37034[(2)]);
var state_37034__$1 = (function (){var statearr_37043 = state_37034;
(statearr_37043[(9)] = inst_37027);

return statearr_37043;
})();
var statearr_37044_38438 = state_37034__$1;
(statearr_37044_38438[(2)] = null);

(statearr_37044_38438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (6))){
var inst_36999 = (state_37034[(7)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37034__$1,(11),inst_36999);
} else {
if((state_val_37035 === (17))){
var inst_37020 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_37020)){
var statearr_37045_38439 = state_37034__$1;
(statearr_37045_38439[(1)] = (19));

} else {
var statearr_37046_38440 = state_37034__$1;
(statearr_37046_38440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (3))){
var inst_37032 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37034__$1,inst_37032);
} else {
if((state_val_37035 === (12))){
var inst_37009 = (state_37034[(10)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37034__$1,(14),inst_37009);
} else {
if((state_val_37035 === (2))){
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37034__$1,(4),results);
} else {
if((state_val_37035 === (19))){
var state_37034__$1 = state_37034;
var statearr_37047_38441 = state_37034__$1;
(statearr_37047_38441[(2)] = null);

(statearr_37047_38441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (11))){
var inst_37009 = (state_37034[(2)]);
var state_37034__$1 = (function (){var statearr_37048 = state_37034;
(statearr_37048[(10)] = inst_37009);

return statearr_37048;
})();
var statearr_37049_38442 = state_37034__$1;
(statearr_37049_38442[(2)] = null);

(statearr_37049_38442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (9))){
var state_37034__$1 = state_37034;
var statearr_37050_38443 = state_37034__$1;
(statearr_37050_38443[(2)] = null);

(statearr_37050_38443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (5))){
var state_37034__$1 = state_37034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37051_38444 = state_37034__$1;
(statearr_37051_38444[(1)] = (8));

} else {
var statearr_37052_38445 = state_37034__$1;
(statearr_37052_38445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (14))){
var inst_37014 = (state_37034[(11)]);
var inst_37012 = (state_37034[(8)]);
var inst_37012__$1 = (state_37034[(2)]);
var inst_37013 = (inst_37012__$1 == null);
var inst_37014__$1 = cljs.core.not(inst_37013);
var state_37034__$1 = (function (){var statearr_37053 = state_37034;
(statearr_37053[(11)] = inst_37014__$1);

(statearr_37053[(8)] = inst_37012__$1);

return statearr_37053;
})();
if(inst_37014__$1){
var statearr_37054_38447 = state_37034__$1;
(statearr_37054_38447[(1)] = (15));

} else {
var statearr_37055_38448 = state_37034__$1;
(statearr_37055_38448[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (16))){
var inst_37014 = (state_37034[(11)]);
var state_37034__$1 = state_37034;
var statearr_37056_38450 = state_37034__$1;
(statearr_37056_38450[(2)] = inst_37014);

(statearr_37056_38450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (10))){
var inst_37006 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37057_38451 = state_37034__$1;
(statearr_37057_38451[(2)] = inst_37006);

(statearr_37057_38451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (18))){
var inst_37017 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37058_38452 = state_37034__$1;
(statearr_37058_38452[(2)] = inst_37017);

(statearr_37058_38452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (8))){
var inst_37003 = cljs.core.async.close_BANG_(to);
var state_37034__$1 = state_37034;
var statearr_37059_38455 = state_37034__$1;
(statearr_37059_38455[(2)] = inst_37003);

(statearr_37059_38455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto__,jobs,results,process,async))
;
return ((function (switch__36657__auto__,c__36758__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0 = (function (){
var statearr_37060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__);

(statearr_37060[(1)] = (1));

return statearr_37060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1 = (function (state_37034){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37034);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37061){if((e37061 instanceof Object)){
var ex__36661__auto__ = e37061;
var statearr_37062_38460 = state_37034;
(statearr_37062_38460[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38461 = state_37034;
state_37034 = G__38461;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__ = function(state_37034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1.call(this,state_37034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto__,jobs,results,process,async))
})();
var state__36760__auto__ = (function (){var statearr_37063 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37063[(6)] = c__36758__auto__);

return statearr_37063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto__,jobs,results,process,async))
);

return c__36758__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37065 = arguments.length;
switch (G__37065) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37067 = arguments.length;
switch (G__37067) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37069 = arguments.length;
switch (G__37069) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36758__auto___38472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___38472,tc,fc){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___38472,tc,fc){
return (function (state_37095){
var state_val_37096 = (state_37095[(1)]);
if((state_val_37096 === (7))){
var inst_37091 = (state_37095[(2)]);
var state_37095__$1 = state_37095;
var statearr_37097_38473 = state_37095__$1;
(statearr_37097_38473[(2)] = inst_37091);

(statearr_37097_38473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (1))){
var state_37095__$1 = state_37095;
var statearr_37098_38474 = state_37095__$1;
(statearr_37098_38474[(2)] = null);

(statearr_37098_38474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (4))){
var inst_37072 = (state_37095[(7)]);
var inst_37072__$1 = (state_37095[(2)]);
var inst_37073 = (inst_37072__$1 == null);
var state_37095__$1 = (function (){var statearr_37099 = state_37095;
(statearr_37099[(7)] = inst_37072__$1);

return statearr_37099;
})();
if(cljs.core.truth_(inst_37073)){
var statearr_37100_38475 = state_37095__$1;
(statearr_37100_38475[(1)] = (5));

} else {
var statearr_37101_38476 = state_37095__$1;
(statearr_37101_38476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (13))){
var state_37095__$1 = state_37095;
var statearr_37102_38477 = state_37095__$1;
(statearr_37102_38477[(2)] = null);

(statearr_37102_38477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (6))){
var inst_37072 = (state_37095[(7)]);
var inst_37078 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37072) : p.call(null,inst_37072));
var state_37095__$1 = state_37095;
if(cljs.core.truth_(inst_37078)){
var statearr_37103_38482 = state_37095__$1;
(statearr_37103_38482[(1)] = (9));

} else {
var statearr_37104_38483 = state_37095__$1;
(statearr_37104_38483[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (3))){
var inst_37093 = (state_37095[(2)]);
var state_37095__$1 = state_37095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37095__$1,inst_37093);
} else {
if((state_val_37096 === (12))){
var state_37095__$1 = state_37095;
var statearr_37105_38484 = state_37095__$1;
(statearr_37105_38484[(2)] = null);

(statearr_37105_38484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (2))){
var state_37095__$1 = state_37095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37095__$1,(4),ch);
} else {
if((state_val_37096 === (11))){
var inst_37072 = (state_37095[(7)]);
var inst_37082 = (state_37095[(2)]);
var state_37095__$1 = state_37095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37095__$1,(8),inst_37082,inst_37072);
} else {
if((state_val_37096 === (9))){
var state_37095__$1 = state_37095;
var statearr_37106_38488 = state_37095__$1;
(statearr_37106_38488[(2)] = tc);

(statearr_37106_38488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (5))){
var inst_37075 = cljs.core.async.close_BANG_(tc);
var inst_37076 = cljs.core.async.close_BANG_(fc);
var state_37095__$1 = (function (){var statearr_37107 = state_37095;
(statearr_37107[(8)] = inst_37075);

return statearr_37107;
})();
var statearr_37108_38489 = state_37095__$1;
(statearr_37108_38489[(2)] = inst_37076);

(statearr_37108_38489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (14))){
var inst_37089 = (state_37095[(2)]);
var state_37095__$1 = state_37095;
var statearr_37109_38493 = state_37095__$1;
(statearr_37109_38493[(2)] = inst_37089);

(statearr_37109_38493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (10))){
var state_37095__$1 = state_37095;
var statearr_37110_38494 = state_37095__$1;
(statearr_37110_38494[(2)] = fc);

(statearr_37110_38494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37096 === (8))){
var inst_37084 = (state_37095[(2)]);
var state_37095__$1 = state_37095;
if(cljs.core.truth_(inst_37084)){
var statearr_37111_38495 = state_37095__$1;
(statearr_37111_38495[(1)] = (12));

} else {
var statearr_37112_38496 = state_37095__$1;
(statearr_37112_38496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___38472,tc,fc))
;
return ((function (switch__36657__auto__,c__36758__auto___38472,tc,fc){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_37113 = [null,null,null,null,null,null,null,null,null];
(statearr_37113[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_37113[(1)] = (1));

return statearr_37113;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_37095){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37095);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37114){if((e37114 instanceof Object)){
var ex__36661__auto__ = e37114;
var statearr_37115_38500 = state_37095;
(statearr_37115_38500[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38501 = state_37095;
state_37095 = G__38501;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_37095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_37095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___38472,tc,fc))
})();
var state__36760__auto__ = (function (){var statearr_37116 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37116[(6)] = c__36758__auto___38472);

return statearr_37116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___38472,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto__){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto__){
return (function (state_37137){
var state_val_37138 = (state_37137[(1)]);
if((state_val_37138 === (7))){
var inst_37133 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
var statearr_37139_38506 = state_37137__$1;
(statearr_37139_38506[(2)] = inst_37133);

(statearr_37139_38506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (1))){
var inst_37117 = init;
var state_37137__$1 = (function (){var statearr_37140 = state_37137;
(statearr_37140[(7)] = inst_37117);

return statearr_37140;
})();
var statearr_37141_38508 = state_37137__$1;
(statearr_37141_38508[(2)] = null);

(statearr_37141_38508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (4))){
var inst_37120 = (state_37137[(8)]);
var inst_37120__$1 = (state_37137[(2)]);
var inst_37121 = (inst_37120__$1 == null);
var state_37137__$1 = (function (){var statearr_37142 = state_37137;
(statearr_37142[(8)] = inst_37120__$1);

return statearr_37142;
})();
if(cljs.core.truth_(inst_37121)){
var statearr_37143_38509 = state_37137__$1;
(statearr_37143_38509[(1)] = (5));

} else {
var statearr_37144_38510 = state_37137__$1;
(statearr_37144_38510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (6))){
var inst_37120 = (state_37137[(8)]);
var inst_37124 = (state_37137[(9)]);
var inst_37117 = (state_37137[(7)]);
var inst_37124__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37117,inst_37120) : f.call(null,inst_37117,inst_37120));
var inst_37125 = cljs.core.reduced_QMARK_(inst_37124__$1);
var state_37137__$1 = (function (){var statearr_37145 = state_37137;
(statearr_37145[(9)] = inst_37124__$1);

return statearr_37145;
})();
if(inst_37125){
var statearr_37146_38511 = state_37137__$1;
(statearr_37146_38511[(1)] = (8));

} else {
var statearr_37147_38512 = state_37137__$1;
(statearr_37147_38512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (3))){
var inst_37135 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37137__$1,inst_37135);
} else {
if((state_val_37138 === (2))){
var state_37137__$1 = state_37137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37137__$1,(4),ch);
} else {
if((state_val_37138 === (9))){
var inst_37124 = (state_37137[(9)]);
var inst_37117 = inst_37124;
var state_37137__$1 = (function (){var statearr_37148 = state_37137;
(statearr_37148[(7)] = inst_37117);

return statearr_37148;
})();
var statearr_37149_38516 = state_37137__$1;
(statearr_37149_38516[(2)] = null);

(statearr_37149_38516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (5))){
var inst_37117 = (state_37137[(7)]);
var state_37137__$1 = state_37137;
var statearr_37150_38517 = state_37137__$1;
(statearr_37150_38517[(2)] = inst_37117);

(statearr_37150_38517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (10))){
var inst_37131 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
var statearr_37151_38521 = state_37137__$1;
(statearr_37151_38521[(2)] = inst_37131);

(statearr_37151_38521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (8))){
var inst_37124 = (state_37137[(9)]);
var inst_37127 = cljs.core.deref(inst_37124);
var state_37137__$1 = state_37137;
var statearr_37152_38526 = state_37137__$1;
(statearr_37152_38526[(2)] = inst_37127);

(statearr_37152_38526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto__))
;
return ((function (switch__36657__auto__,c__36758__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36658__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36658__auto____0 = (function (){
var statearr_37153 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37153[(0)] = cljs$core$async$reduce_$_state_machine__36658__auto__);

(statearr_37153[(1)] = (1));

return statearr_37153;
});
var cljs$core$async$reduce_$_state_machine__36658__auto____1 = (function (state_37137){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37137);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37154){if((e37154 instanceof Object)){
var ex__36661__auto__ = e37154;
var statearr_37155_38533 = state_37137;
(statearr_37155_38533[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38537 = state_37137;
state_37137 = G__38537;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36658__auto__ = function(state_37137){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36658__auto____1.call(this,state_37137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36658__auto____0;
cljs$core$async$reduce_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36658__auto____1;
return cljs$core$async$reduce_$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto__))
})();
var state__36760__auto__ = (function (){var statearr_37156 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37156[(6)] = c__36758__auto__);

return statearr_37156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto__))
);

return c__36758__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto__,f__$1){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto__,f__$1){
return (function (state_37162){
var state_val_37163 = (state_37162[(1)]);
if((state_val_37163 === (1))){
var inst_37157 = cljs.core.async.reduce(f__$1,init,ch);
var state_37162__$1 = state_37162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37162__$1,(2),inst_37157);
} else {
if((state_val_37163 === (2))){
var inst_37159 = (state_37162[(2)]);
var inst_37160 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37159) : f__$1.call(null,inst_37159));
var state_37162__$1 = state_37162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37162__$1,inst_37160);
} else {
return null;
}
}
});})(c__36758__auto__,f__$1))
;
return ((function (switch__36657__auto__,c__36758__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__36658__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36658__auto____0 = (function (){
var statearr_37164 = [null,null,null,null,null,null,null];
(statearr_37164[(0)] = cljs$core$async$transduce_$_state_machine__36658__auto__);

(statearr_37164[(1)] = (1));

return statearr_37164;
});
var cljs$core$async$transduce_$_state_machine__36658__auto____1 = (function (state_37162){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37162);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37165){if((e37165 instanceof Object)){
var ex__36661__auto__ = e37165;
var statearr_37166_38555 = state_37162;
(statearr_37166_38555[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38556 = state_37162;
state_37162 = G__38556;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36658__auto__ = function(state_37162){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36658__auto____1.call(this,state_37162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36658__auto____0;
cljs$core$async$transduce_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36658__auto____1;
return cljs$core$async$transduce_$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto__,f__$1))
})();
var state__36760__auto__ = (function (){var statearr_37167 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37167[(6)] = c__36758__auto__);

return statearr_37167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto__,f__$1))
);

return c__36758__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37169 = arguments.length;
switch (G__37169) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto__){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto__){
return (function (state_37194){
var state_val_37195 = (state_37194[(1)]);
if((state_val_37195 === (7))){
var inst_37176 = (state_37194[(2)]);
var state_37194__$1 = state_37194;
var statearr_37196_38570 = state_37194__$1;
(statearr_37196_38570[(2)] = inst_37176);

(statearr_37196_38570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (1))){
var inst_37170 = cljs.core.seq(coll);
var inst_37171 = inst_37170;
var state_37194__$1 = (function (){var statearr_37197 = state_37194;
(statearr_37197[(7)] = inst_37171);

return statearr_37197;
})();
var statearr_37198_38577 = state_37194__$1;
(statearr_37198_38577[(2)] = null);

(statearr_37198_38577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (4))){
var inst_37171 = (state_37194[(7)]);
var inst_37174 = cljs.core.first(inst_37171);
var state_37194__$1 = state_37194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37194__$1,(7),ch,inst_37174);
} else {
if((state_val_37195 === (13))){
var inst_37188 = (state_37194[(2)]);
var state_37194__$1 = state_37194;
var statearr_37199_38578 = state_37194__$1;
(statearr_37199_38578[(2)] = inst_37188);

(statearr_37199_38578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (6))){
var inst_37179 = (state_37194[(2)]);
var state_37194__$1 = state_37194;
if(cljs.core.truth_(inst_37179)){
var statearr_37200_38579 = state_37194__$1;
(statearr_37200_38579[(1)] = (8));

} else {
var statearr_37201_38580 = state_37194__$1;
(statearr_37201_38580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (3))){
var inst_37192 = (state_37194[(2)]);
var state_37194__$1 = state_37194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37194__$1,inst_37192);
} else {
if((state_val_37195 === (12))){
var state_37194__$1 = state_37194;
var statearr_37202_38582 = state_37194__$1;
(statearr_37202_38582[(2)] = null);

(statearr_37202_38582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (2))){
var inst_37171 = (state_37194[(7)]);
var state_37194__$1 = state_37194;
if(cljs.core.truth_(inst_37171)){
var statearr_37203_38583 = state_37194__$1;
(statearr_37203_38583[(1)] = (4));

} else {
var statearr_37204_38584 = state_37194__$1;
(statearr_37204_38584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (11))){
var inst_37185 = cljs.core.async.close_BANG_(ch);
var state_37194__$1 = state_37194;
var statearr_37205_38585 = state_37194__$1;
(statearr_37205_38585[(2)] = inst_37185);

(statearr_37205_38585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (9))){
var state_37194__$1 = state_37194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37206_38586 = state_37194__$1;
(statearr_37206_38586[(1)] = (11));

} else {
var statearr_37207_38587 = state_37194__$1;
(statearr_37207_38587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (5))){
var inst_37171 = (state_37194[(7)]);
var state_37194__$1 = state_37194;
var statearr_37208_38588 = state_37194__$1;
(statearr_37208_38588[(2)] = inst_37171);

(statearr_37208_38588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (10))){
var inst_37190 = (state_37194[(2)]);
var state_37194__$1 = state_37194;
var statearr_37209_38589 = state_37194__$1;
(statearr_37209_38589[(2)] = inst_37190);

(statearr_37209_38589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37195 === (8))){
var inst_37171 = (state_37194[(7)]);
var inst_37181 = cljs.core.next(inst_37171);
var inst_37171__$1 = inst_37181;
var state_37194__$1 = (function (){var statearr_37210 = state_37194;
(statearr_37210[(7)] = inst_37171__$1);

return statearr_37210;
})();
var statearr_37211_38590 = state_37194__$1;
(statearr_37211_38590[(2)] = null);

(statearr_37211_38590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto__))
;
return ((function (switch__36657__auto__,c__36758__auto__){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_37212 = [null,null,null,null,null,null,null,null];
(statearr_37212[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_37212[(1)] = (1));

return statearr_37212;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_37194){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37194);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37213){if((e37213 instanceof Object)){
var ex__36661__auto__ = e37213;
var statearr_37214_38591 = state_37194;
(statearr_37214_38591[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38592 = state_37194;
state_37194 = G__38592;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_37194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_37194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto__))
})();
var state__36760__auto__ = (function (){var statearr_37215 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37215[(6)] = c__36758__auto__);

return statearr_37215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto__))
);

return c__36758__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37216 = (function (ch,cs,meta37217){
this.ch = ch;
this.cs = cs;
this.meta37217 = meta37217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37218,meta37217__$1){
var self__ = this;
var _37218__$1 = this;
return (new cljs.core.async.t_cljs$core$async37216(self__.ch,self__.cs,meta37217__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37218){
var self__ = this;
var _37218__$1 = this;
return self__.meta37217;
});})(cs))
;

cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37216.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37216.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37217","meta37217",542346648,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37216";

cljs.core.async.t_cljs$core$async37216.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37216");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37216.
 */
cljs.core.async.__GT_t_cljs$core$async37216 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37216(ch__$1,cs__$1,meta37217){
return (new cljs.core.async.t_cljs$core$async37216(ch__$1,cs__$1,meta37217));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37216(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__36758__auto___38604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___38604,cs,m,dchan,dctr,done){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___38604,cs,m,dchan,dctr,done){
return (function (state_37353){
var state_val_37354 = (state_37353[(1)]);
if((state_val_37354 === (7))){
var inst_37349 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37355_38605 = state_37353__$1;
(statearr_37355_38605[(2)] = inst_37349);

(statearr_37355_38605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (20))){
var inst_37252 = (state_37353[(7)]);
var inst_37264 = cljs.core.first(inst_37252);
var inst_37265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37264,(0),null);
var inst_37266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37264,(1),null);
var state_37353__$1 = (function (){var statearr_37356 = state_37353;
(statearr_37356[(8)] = inst_37265);

return statearr_37356;
})();
if(cljs.core.truth_(inst_37266)){
var statearr_37357_38606 = state_37353__$1;
(statearr_37357_38606[(1)] = (22));

} else {
var statearr_37358_38607 = state_37353__$1;
(statearr_37358_38607[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (27))){
var inst_37296 = (state_37353[(9)]);
var inst_37294 = (state_37353[(10)]);
var inst_37221 = (state_37353[(11)]);
var inst_37301 = (state_37353[(12)]);
var inst_37301__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37294,inst_37296);
var inst_37302 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37301__$1,inst_37221,done);
var state_37353__$1 = (function (){var statearr_37359 = state_37353;
(statearr_37359[(12)] = inst_37301__$1);

return statearr_37359;
})();
if(cljs.core.truth_(inst_37302)){
var statearr_37360_38608 = state_37353__$1;
(statearr_37360_38608[(1)] = (30));

} else {
var statearr_37361_38609 = state_37353__$1;
(statearr_37361_38609[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (1))){
var state_37353__$1 = state_37353;
var statearr_37362_38611 = state_37353__$1;
(statearr_37362_38611[(2)] = null);

(statearr_37362_38611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (24))){
var inst_37252 = (state_37353[(7)]);
var inst_37271 = (state_37353[(2)]);
var inst_37272 = cljs.core.next(inst_37252);
var inst_37230 = inst_37272;
var inst_37231 = null;
var inst_37232 = (0);
var inst_37233 = (0);
var state_37353__$1 = (function (){var statearr_37363 = state_37353;
(statearr_37363[(13)] = inst_37271);

(statearr_37363[(14)] = inst_37232);

(statearr_37363[(15)] = inst_37230);

(statearr_37363[(16)] = inst_37231);

(statearr_37363[(17)] = inst_37233);

return statearr_37363;
})();
var statearr_37364_38615 = state_37353__$1;
(statearr_37364_38615[(2)] = null);

(statearr_37364_38615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (39))){
var state_37353__$1 = state_37353;
var statearr_37368_38618 = state_37353__$1;
(statearr_37368_38618[(2)] = null);

(statearr_37368_38618[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (4))){
var inst_37221 = (state_37353[(11)]);
var inst_37221__$1 = (state_37353[(2)]);
var inst_37222 = (inst_37221__$1 == null);
var state_37353__$1 = (function (){var statearr_37369 = state_37353;
(statearr_37369[(11)] = inst_37221__$1);

return statearr_37369;
})();
if(cljs.core.truth_(inst_37222)){
var statearr_37370_38621 = state_37353__$1;
(statearr_37370_38621[(1)] = (5));

} else {
var statearr_37371_38622 = state_37353__$1;
(statearr_37371_38622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (15))){
var inst_37232 = (state_37353[(14)]);
var inst_37230 = (state_37353[(15)]);
var inst_37231 = (state_37353[(16)]);
var inst_37233 = (state_37353[(17)]);
var inst_37248 = (state_37353[(2)]);
var inst_37249 = (inst_37233 + (1));
var tmp37365 = inst_37232;
var tmp37366 = inst_37230;
var tmp37367 = inst_37231;
var inst_37230__$1 = tmp37366;
var inst_37231__$1 = tmp37367;
var inst_37232__$1 = tmp37365;
var inst_37233__$1 = inst_37249;
var state_37353__$1 = (function (){var statearr_37372 = state_37353;
(statearr_37372[(14)] = inst_37232__$1);

(statearr_37372[(15)] = inst_37230__$1);

(statearr_37372[(16)] = inst_37231__$1);

(statearr_37372[(18)] = inst_37248);

(statearr_37372[(17)] = inst_37233__$1);

return statearr_37372;
})();
var statearr_37373_38636 = state_37353__$1;
(statearr_37373_38636[(2)] = null);

(statearr_37373_38636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (21))){
var inst_37275 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37377_38637 = state_37353__$1;
(statearr_37377_38637[(2)] = inst_37275);

(statearr_37377_38637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (31))){
var inst_37301 = (state_37353[(12)]);
var inst_37305 = done(null);
var inst_37306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37301);
var state_37353__$1 = (function (){var statearr_37378 = state_37353;
(statearr_37378[(19)] = inst_37305);

return statearr_37378;
})();
var statearr_37379_38638 = state_37353__$1;
(statearr_37379_38638[(2)] = inst_37306);

(statearr_37379_38638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (32))){
var inst_37296 = (state_37353[(9)]);
var inst_37294 = (state_37353[(10)]);
var inst_37293 = (state_37353[(20)]);
var inst_37295 = (state_37353[(21)]);
var inst_37308 = (state_37353[(2)]);
var inst_37309 = (inst_37296 + (1));
var tmp37374 = inst_37294;
var tmp37375 = inst_37293;
var tmp37376 = inst_37295;
var inst_37293__$1 = tmp37375;
var inst_37294__$1 = tmp37374;
var inst_37295__$1 = tmp37376;
var inst_37296__$1 = inst_37309;
var state_37353__$1 = (function (){var statearr_37380 = state_37353;
(statearr_37380[(9)] = inst_37296__$1);

(statearr_37380[(10)] = inst_37294__$1);

(statearr_37380[(20)] = inst_37293__$1);

(statearr_37380[(21)] = inst_37295__$1);

(statearr_37380[(22)] = inst_37308);

return statearr_37380;
})();
var statearr_37381_38639 = state_37353__$1;
(statearr_37381_38639[(2)] = null);

(statearr_37381_38639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (40))){
var inst_37321 = (state_37353[(23)]);
var inst_37325 = done(null);
var inst_37326 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37321);
var state_37353__$1 = (function (){var statearr_37382 = state_37353;
(statearr_37382[(24)] = inst_37325);

return statearr_37382;
})();
var statearr_37383_38640 = state_37353__$1;
(statearr_37383_38640[(2)] = inst_37326);

(statearr_37383_38640[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (33))){
var inst_37312 = (state_37353[(25)]);
var inst_37314 = cljs.core.chunked_seq_QMARK_(inst_37312);
var state_37353__$1 = state_37353;
if(inst_37314){
var statearr_37384_38641 = state_37353__$1;
(statearr_37384_38641[(1)] = (36));

} else {
var statearr_37385_38642 = state_37353__$1;
(statearr_37385_38642[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (13))){
var inst_37242 = (state_37353[(26)]);
var inst_37245 = cljs.core.async.close_BANG_(inst_37242);
var state_37353__$1 = state_37353;
var statearr_37386_38649 = state_37353__$1;
(statearr_37386_38649[(2)] = inst_37245);

(statearr_37386_38649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (22))){
var inst_37265 = (state_37353[(8)]);
var inst_37268 = cljs.core.async.close_BANG_(inst_37265);
var state_37353__$1 = state_37353;
var statearr_37387_38650 = state_37353__$1;
(statearr_37387_38650[(2)] = inst_37268);

(statearr_37387_38650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (36))){
var inst_37312 = (state_37353[(25)]);
var inst_37316 = cljs.core.chunk_first(inst_37312);
var inst_37317 = cljs.core.chunk_rest(inst_37312);
var inst_37318 = cljs.core.count(inst_37316);
var inst_37293 = inst_37317;
var inst_37294 = inst_37316;
var inst_37295 = inst_37318;
var inst_37296 = (0);
var state_37353__$1 = (function (){var statearr_37388 = state_37353;
(statearr_37388[(9)] = inst_37296);

(statearr_37388[(10)] = inst_37294);

(statearr_37388[(20)] = inst_37293);

(statearr_37388[(21)] = inst_37295);

return statearr_37388;
})();
var statearr_37389_38651 = state_37353__$1;
(statearr_37389_38651[(2)] = null);

(statearr_37389_38651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (41))){
var inst_37312 = (state_37353[(25)]);
var inst_37328 = (state_37353[(2)]);
var inst_37329 = cljs.core.next(inst_37312);
var inst_37293 = inst_37329;
var inst_37294 = null;
var inst_37295 = (0);
var inst_37296 = (0);
var state_37353__$1 = (function (){var statearr_37390 = state_37353;
(statearr_37390[(9)] = inst_37296);

(statearr_37390[(10)] = inst_37294);

(statearr_37390[(20)] = inst_37293);

(statearr_37390[(27)] = inst_37328);

(statearr_37390[(21)] = inst_37295);

return statearr_37390;
})();
var statearr_37391_38652 = state_37353__$1;
(statearr_37391_38652[(2)] = null);

(statearr_37391_38652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (43))){
var state_37353__$1 = state_37353;
var statearr_37392_38653 = state_37353__$1;
(statearr_37392_38653[(2)] = null);

(statearr_37392_38653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (29))){
var inst_37337 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37393_38654 = state_37353__$1;
(statearr_37393_38654[(2)] = inst_37337);

(statearr_37393_38654[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (44))){
var inst_37346 = (state_37353[(2)]);
var state_37353__$1 = (function (){var statearr_37394 = state_37353;
(statearr_37394[(28)] = inst_37346);

return statearr_37394;
})();
var statearr_37395_38655 = state_37353__$1;
(statearr_37395_38655[(2)] = null);

(statearr_37395_38655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (6))){
var inst_37285 = (state_37353[(29)]);
var inst_37284 = cljs.core.deref(cs);
var inst_37285__$1 = cljs.core.keys(inst_37284);
var inst_37286 = cljs.core.count(inst_37285__$1);
var inst_37287 = cljs.core.reset_BANG_(dctr,inst_37286);
var inst_37292 = cljs.core.seq(inst_37285__$1);
var inst_37293 = inst_37292;
var inst_37294 = null;
var inst_37295 = (0);
var inst_37296 = (0);
var state_37353__$1 = (function (){var statearr_37396 = state_37353;
(statearr_37396[(9)] = inst_37296);

(statearr_37396[(10)] = inst_37294);

(statearr_37396[(30)] = inst_37287);

(statearr_37396[(20)] = inst_37293);

(statearr_37396[(29)] = inst_37285__$1);

(statearr_37396[(21)] = inst_37295);

return statearr_37396;
})();
var statearr_37397_38662 = state_37353__$1;
(statearr_37397_38662[(2)] = null);

(statearr_37397_38662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (28))){
var inst_37293 = (state_37353[(20)]);
var inst_37312 = (state_37353[(25)]);
var inst_37312__$1 = cljs.core.seq(inst_37293);
var state_37353__$1 = (function (){var statearr_37398 = state_37353;
(statearr_37398[(25)] = inst_37312__$1);

return statearr_37398;
})();
if(inst_37312__$1){
var statearr_37399_38663 = state_37353__$1;
(statearr_37399_38663[(1)] = (33));

} else {
var statearr_37400_38664 = state_37353__$1;
(statearr_37400_38664[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (25))){
var inst_37296 = (state_37353[(9)]);
var inst_37295 = (state_37353[(21)]);
var inst_37298 = (inst_37296 < inst_37295);
var inst_37299 = inst_37298;
var state_37353__$1 = state_37353;
if(cljs.core.truth_(inst_37299)){
var statearr_37401_38665 = state_37353__$1;
(statearr_37401_38665[(1)] = (27));

} else {
var statearr_37402_38666 = state_37353__$1;
(statearr_37402_38666[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (34))){
var state_37353__$1 = state_37353;
var statearr_37403_38667 = state_37353__$1;
(statearr_37403_38667[(2)] = null);

(statearr_37403_38667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (17))){
var state_37353__$1 = state_37353;
var statearr_37404_38668 = state_37353__$1;
(statearr_37404_38668[(2)] = null);

(statearr_37404_38668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (3))){
var inst_37351 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37353__$1,inst_37351);
} else {
if((state_val_37354 === (12))){
var inst_37280 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37405_38669 = state_37353__$1;
(statearr_37405_38669[(2)] = inst_37280);

(statearr_37405_38669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (2))){
var state_37353__$1 = state_37353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37353__$1,(4),ch);
} else {
if((state_val_37354 === (23))){
var state_37353__$1 = state_37353;
var statearr_37406_38676 = state_37353__$1;
(statearr_37406_38676[(2)] = null);

(statearr_37406_38676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (35))){
var inst_37335 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37407_38677 = state_37353__$1;
(statearr_37407_38677[(2)] = inst_37335);

(statearr_37407_38677[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (19))){
var inst_37252 = (state_37353[(7)]);
var inst_37256 = cljs.core.chunk_first(inst_37252);
var inst_37257 = cljs.core.chunk_rest(inst_37252);
var inst_37258 = cljs.core.count(inst_37256);
var inst_37230 = inst_37257;
var inst_37231 = inst_37256;
var inst_37232 = inst_37258;
var inst_37233 = (0);
var state_37353__$1 = (function (){var statearr_37408 = state_37353;
(statearr_37408[(14)] = inst_37232);

(statearr_37408[(15)] = inst_37230);

(statearr_37408[(16)] = inst_37231);

(statearr_37408[(17)] = inst_37233);

return statearr_37408;
})();
var statearr_37409_38678 = state_37353__$1;
(statearr_37409_38678[(2)] = null);

(statearr_37409_38678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (11))){
var inst_37252 = (state_37353[(7)]);
var inst_37230 = (state_37353[(15)]);
var inst_37252__$1 = cljs.core.seq(inst_37230);
var state_37353__$1 = (function (){var statearr_37410 = state_37353;
(statearr_37410[(7)] = inst_37252__$1);

return statearr_37410;
})();
if(inst_37252__$1){
var statearr_37411_38679 = state_37353__$1;
(statearr_37411_38679[(1)] = (16));

} else {
var statearr_37412_38680 = state_37353__$1;
(statearr_37412_38680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (9))){
var inst_37282 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37413_38681 = state_37353__$1;
(statearr_37413_38681[(2)] = inst_37282);

(statearr_37413_38681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (5))){
var inst_37228 = cljs.core.deref(cs);
var inst_37229 = cljs.core.seq(inst_37228);
var inst_37230 = inst_37229;
var inst_37231 = null;
var inst_37232 = (0);
var inst_37233 = (0);
var state_37353__$1 = (function (){var statearr_37414 = state_37353;
(statearr_37414[(14)] = inst_37232);

(statearr_37414[(15)] = inst_37230);

(statearr_37414[(16)] = inst_37231);

(statearr_37414[(17)] = inst_37233);

return statearr_37414;
})();
var statearr_37415_38683 = state_37353__$1;
(statearr_37415_38683[(2)] = null);

(statearr_37415_38683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (14))){
var state_37353__$1 = state_37353;
var statearr_37416_38684 = state_37353__$1;
(statearr_37416_38684[(2)] = null);

(statearr_37416_38684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (45))){
var inst_37343 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37417_38685 = state_37353__$1;
(statearr_37417_38685[(2)] = inst_37343);

(statearr_37417_38685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (26))){
var inst_37285 = (state_37353[(29)]);
var inst_37339 = (state_37353[(2)]);
var inst_37340 = cljs.core.seq(inst_37285);
var state_37353__$1 = (function (){var statearr_37418 = state_37353;
(statearr_37418[(31)] = inst_37339);

return statearr_37418;
})();
if(inst_37340){
var statearr_37419_38687 = state_37353__$1;
(statearr_37419_38687[(1)] = (42));

} else {
var statearr_37420_38688 = state_37353__$1;
(statearr_37420_38688[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (16))){
var inst_37252 = (state_37353[(7)]);
var inst_37254 = cljs.core.chunked_seq_QMARK_(inst_37252);
var state_37353__$1 = state_37353;
if(inst_37254){
var statearr_37421_38689 = state_37353__$1;
(statearr_37421_38689[(1)] = (19));

} else {
var statearr_37422_38690 = state_37353__$1;
(statearr_37422_38690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (38))){
var inst_37332 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37423_38691 = state_37353__$1;
(statearr_37423_38691[(2)] = inst_37332);

(statearr_37423_38691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (30))){
var state_37353__$1 = state_37353;
var statearr_37424_38692 = state_37353__$1;
(statearr_37424_38692[(2)] = null);

(statearr_37424_38692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (10))){
var inst_37231 = (state_37353[(16)]);
var inst_37233 = (state_37353[(17)]);
var inst_37241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37231,inst_37233);
var inst_37242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37241,(0),null);
var inst_37243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37241,(1),null);
var state_37353__$1 = (function (){var statearr_37425 = state_37353;
(statearr_37425[(26)] = inst_37242);

return statearr_37425;
})();
if(cljs.core.truth_(inst_37243)){
var statearr_37426_38693 = state_37353__$1;
(statearr_37426_38693[(1)] = (13));

} else {
var statearr_37427_38694 = state_37353__$1;
(statearr_37427_38694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (18))){
var inst_37278 = (state_37353[(2)]);
var state_37353__$1 = state_37353;
var statearr_37428_38695 = state_37353__$1;
(statearr_37428_38695[(2)] = inst_37278);

(statearr_37428_38695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (42))){
var state_37353__$1 = state_37353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37353__$1,(45),dchan);
} else {
if((state_val_37354 === (37))){
var inst_37321 = (state_37353[(23)]);
var inst_37221 = (state_37353[(11)]);
var inst_37312 = (state_37353[(25)]);
var inst_37321__$1 = cljs.core.first(inst_37312);
var inst_37322 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37321__$1,inst_37221,done);
var state_37353__$1 = (function (){var statearr_37429 = state_37353;
(statearr_37429[(23)] = inst_37321__$1);

return statearr_37429;
})();
if(cljs.core.truth_(inst_37322)){
var statearr_37430_38701 = state_37353__$1;
(statearr_37430_38701[(1)] = (39));

} else {
var statearr_37431_38702 = state_37353__$1;
(statearr_37431_38702[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37354 === (8))){
var inst_37232 = (state_37353[(14)]);
var inst_37233 = (state_37353[(17)]);
var inst_37235 = (inst_37233 < inst_37232);
var inst_37236 = inst_37235;
var state_37353__$1 = state_37353;
if(cljs.core.truth_(inst_37236)){
var statearr_37432_38710 = state_37353__$1;
(statearr_37432_38710[(1)] = (10));

} else {
var statearr_37433_38711 = state_37353__$1;
(statearr_37433_38711[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___38604,cs,m,dchan,dctr,done))
;
return ((function (switch__36657__auto__,c__36758__auto___38604,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36658__auto__ = null;
var cljs$core$async$mult_$_state_machine__36658__auto____0 = (function (){
var statearr_37434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37434[(0)] = cljs$core$async$mult_$_state_machine__36658__auto__);

(statearr_37434[(1)] = (1));

return statearr_37434;
});
var cljs$core$async$mult_$_state_machine__36658__auto____1 = (function (state_37353){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37353);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37435){if((e37435 instanceof Object)){
var ex__36661__auto__ = e37435;
var statearr_37436_38712 = state_37353;
(statearr_37436_38712[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38713 = state_37353;
state_37353 = G__38713;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36658__auto__ = function(state_37353){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36658__auto____1.call(this,state_37353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36658__auto____0;
cljs$core$async$mult_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36658__auto____1;
return cljs$core$async$mult_$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___38604,cs,m,dchan,dctr,done))
})();
var state__36760__auto__ = (function (){var statearr_37437 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37437[(6)] = c__36758__auto___38604);

return statearr_37437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___38604,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37439 = arguments.length;
switch (G__37439) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38721 = arguments.length;
var i__4731__auto___38722 = (0);
while(true){
if((i__4731__auto___38722 < len__4730__auto___38721)){
args__4736__auto__.push((arguments[i__4731__auto___38722]));

var G__38724 = (i__4731__auto___38722 + (1));
i__4731__auto___38722 = G__38724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37444){
var map__37445 = p__37444;
var map__37445__$1 = (((((!((map__37445 == null))))?(((((map__37445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37445):map__37445);
var opts = map__37445__$1;
var statearr_37447_38726 = state;
(statearr_37447_38726[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__37445,map__37445__$1,opts){
return (function (val){
var statearr_37448_38727 = state;
(statearr_37448_38727[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__37445,map__37445__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_37449_38730 = state;
(statearr_37449_38730[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37440){
var G__37441 = cljs.core.first(seq37440);
var seq37440__$1 = cljs.core.next(seq37440);
var G__37442 = cljs.core.first(seq37440__$1);
var seq37440__$2 = cljs.core.next(seq37440__$1);
var G__37443 = cljs.core.first(seq37440__$2);
var seq37440__$3 = cljs.core.next(seq37440__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37441,G__37442,G__37443,seq37440__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37450 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta37451){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta37451 = meta37451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37452,meta37451__$1){
var self__ = this;
var _37452__$1 = this;
return (new cljs.core.async.t_cljs$core$async37450(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta37451__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37452){
var self__ = this;
var _37452__$1 = this;
return self__.meta37451;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta37451","meta37451",642540,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37450";

cljs.core.async.t_cljs$core$async37450.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37450");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37450.
 */
cljs.core.async.__GT_t_cljs$core$async37450 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37450(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37451){
return (new cljs.core.async.t_cljs$core$async37450(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37451));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37450(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36758__auto___38765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___38765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___38765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37554){
var state_val_37555 = (state_37554[(1)]);
if((state_val_37555 === (7))){
var inst_37469 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
var statearr_37556_38774 = state_37554__$1;
(statearr_37556_38774[(2)] = inst_37469);

(statearr_37556_38774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (20))){
var inst_37481 = (state_37554[(7)]);
var state_37554__$1 = state_37554;
var statearr_37557_38781 = state_37554__$1;
(statearr_37557_38781[(2)] = inst_37481);

(statearr_37557_38781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (27))){
var state_37554__$1 = state_37554;
var statearr_37558_38782 = state_37554__$1;
(statearr_37558_38782[(2)] = null);

(statearr_37558_38782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (1))){
var inst_37456 = (state_37554[(8)]);
var inst_37456__$1 = calc_state();
var inst_37458 = (inst_37456__$1 == null);
var inst_37459 = cljs.core.not(inst_37458);
var state_37554__$1 = (function (){var statearr_37559 = state_37554;
(statearr_37559[(8)] = inst_37456__$1);

return statearr_37559;
})();
if(inst_37459){
var statearr_37560_38793 = state_37554__$1;
(statearr_37560_38793[(1)] = (2));

} else {
var statearr_37561_38794 = state_37554__$1;
(statearr_37561_38794[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (24))){
var inst_37505 = (state_37554[(9)]);
var inst_37514 = (state_37554[(10)]);
var inst_37528 = (state_37554[(11)]);
var inst_37528__$1 = (inst_37505.cljs$core$IFn$_invoke$arity$1 ? inst_37505.cljs$core$IFn$_invoke$arity$1(inst_37514) : inst_37505.call(null,inst_37514));
var state_37554__$1 = (function (){var statearr_37562 = state_37554;
(statearr_37562[(11)] = inst_37528__$1);

return statearr_37562;
})();
if(cljs.core.truth_(inst_37528__$1)){
var statearr_37563_38795 = state_37554__$1;
(statearr_37563_38795[(1)] = (29));

} else {
var statearr_37564_38796 = state_37554__$1;
(statearr_37564_38796[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (4))){
var inst_37472 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
if(cljs.core.truth_(inst_37472)){
var statearr_37565_38797 = state_37554__$1;
(statearr_37565_38797[(1)] = (8));

} else {
var statearr_37566_38798 = state_37554__$1;
(statearr_37566_38798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (15))){
var inst_37499 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
if(cljs.core.truth_(inst_37499)){
var statearr_37567_38799 = state_37554__$1;
(statearr_37567_38799[(1)] = (19));

} else {
var statearr_37568_38800 = state_37554__$1;
(statearr_37568_38800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (21))){
var inst_37504 = (state_37554[(12)]);
var inst_37504__$1 = (state_37554[(2)]);
var inst_37505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37504__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37504__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37504__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37554__$1 = (function (){var statearr_37569 = state_37554;
(statearr_37569[(9)] = inst_37505);

(statearr_37569[(13)] = inst_37506);

(statearr_37569[(12)] = inst_37504__$1);

return statearr_37569;
})();
return cljs.core.async.ioc_alts_BANG_(state_37554__$1,(22),inst_37507);
} else {
if((state_val_37555 === (31))){
var inst_37536 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
if(cljs.core.truth_(inst_37536)){
var statearr_37570_38805 = state_37554__$1;
(statearr_37570_38805[(1)] = (32));

} else {
var statearr_37571_38806 = state_37554__$1;
(statearr_37571_38806[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (32))){
var inst_37513 = (state_37554[(14)]);
var state_37554__$1 = state_37554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37554__$1,(35),out,inst_37513);
} else {
if((state_val_37555 === (33))){
var inst_37504 = (state_37554[(12)]);
var inst_37481 = inst_37504;
var state_37554__$1 = (function (){var statearr_37572 = state_37554;
(statearr_37572[(7)] = inst_37481);

return statearr_37572;
})();
var statearr_37573_38809 = state_37554__$1;
(statearr_37573_38809[(2)] = null);

(statearr_37573_38809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (13))){
var inst_37481 = (state_37554[(7)]);
var inst_37488 = inst_37481.cljs$lang$protocol_mask$partition0$;
var inst_37489 = (inst_37488 & (64));
var inst_37490 = inst_37481.cljs$core$ISeq$;
var inst_37491 = (cljs.core.PROTOCOL_SENTINEL === inst_37490);
var inst_37492 = ((inst_37489) || (inst_37491));
var state_37554__$1 = state_37554;
if(cljs.core.truth_(inst_37492)){
var statearr_37574_38813 = state_37554__$1;
(statearr_37574_38813[(1)] = (16));

} else {
var statearr_37575_38814 = state_37554__$1;
(statearr_37575_38814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (22))){
var inst_37513 = (state_37554[(14)]);
var inst_37514 = (state_37554[(10)]);
var inst_37512 = (state_37554[(2)]);
var inst_37513__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37512,(0),null);
var inst_37514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37512,(1),null);
var inst_37515 = (inst_37513__$1 == null);
var inst_37516 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37514__$1,change);
var inst_37517 = ((inst_37515) || (inst_37516));
var state_37554__$1 = (function (){var statearr_37576 = state_37554;
(statearr_37576[(14)] = inst_37513__$1);

(statearr_37576[(10)] = inst_37514__$1);

return statearr_37576;
})();
if(cljs.core.truth_(inst_37517)){
var statearr_37577_38818 = state_37554__$1;
(statearr_37577_38818[(1)] = (23));

} else {
var statearr_37578_38819 = state_37554__$1;
(statearr_37578_38819[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (36))){
var inst_37504 = (state_37554[(12)]);
var inst_37481 = inst_37504;
var state_37554__$1 = (function (){var statearr_37579 = state_37554;
(statearr_37579[(7)] = inst_37481);

return statearr_37579;
})();
var statearr_37580_38820 = state_37554__$1;
(statearr_37580_38820[(2)] = null);

(statearr_37580_38820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (29))){
var inst_37528 = (state_37554[(11)]);
var state_37554__$1 = state_37554;
var statearr_37581_38821 = state_37554__$1;
(statearr_37581_38821[(2)] = inst_37528);

(statearr_37581_38821[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (6))){
var state_37554__$1 = state_37554;
var statearr_37582_38822 = state_37554__$1;
(statearr_37582_38822[(2)] = false);

(statearr_37582_38822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (28))){
var inst_37524 = (state_37554[(2)]);
var inst_37525 = calc_state();
var inst_37481 = inst_37525;
var state_37554__$1 = (function (){var statearr_37583 = state_37554;
(statearr_37583[(15)] = inst_37524);

(statearr_37583[(7)] = inst_37481);

return statearr_37583;
})();
var statearr_37584_38823 = state_37554__$1;
(statearr_37584_38823[(2)] = null);

(statearr_37584_38823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (25))){
var inst_37550 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
var statearr_37585_38824 = state_37554__$1;
(statearr_37585_38824[(2)] = inst_37550);

(statearr_37585_38824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (34))){
var inst_37548 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
var statearr_37586_38825 = state_37554__$1;
(statearr_37586_38825[(2)] = inst_37548);

(statearr_37586_38825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (17))){
var state_37554__$1 = state_37554;
var statearr_37587_38826 = state_37554__$1;
(statearr_37587_38826[(2)] = false);

(statearr_37587_38826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (3))){
var state_37554__$1 = state_37554;
var statearr_37588_38827 = state_37554__$1;
(statearr_37588_38827[(2)] = false);

(statearr_37588_38827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (12))){
var inst_37552 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37554__$1,inst_37552);
} else {
if((state_val_37555 === (2))){
var inst_37456 = (state_37554[(8)]);
var inst_37461 = inst_37456.cljs$lang$protocol_mask$partition0$;
var inst_37462 = (inst_37461 & (64));
var inst_37463 = inst_37456.cljs$core$ISeq$;
var inst_37464 = (cljs.core.PROTOCOL_SENTINEL === inst_37463);
var inst_37465 = ((inst_37462) || (inst_37464));
var state_37554__$1 = state_37554;
if(cljs.core.truth_(inst_37465)){
var statearr_37589_38836 = state_37554__$1;
(statearr_37589_38836[(1)] = (5));

} else {
var statearr_37590_38837 = state_37554__$1;
(statearr_37590_38837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (23))){
var inst_37513 = (state_37554[(14)]);
var inst_37519 = (inst_37513 == null);
var state_37554__$1 = state_37554;
if(cljs.core.truth_(inst_37519)){
var statearr_37591_38838 = state_37554__$1;
(statearr_37591_38838[(1)] = (26));

} else {
var statearr_37592_38839 = state_37554__$1;
(statearr_37592_38839[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (35))){
var inst_37539 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
if(cljs.core.truth_(inst_37539)){
var statearr_37593_38840 = state_37554__$1;
(statearr_37593_38840[(1)] = (36));

} else {
var statearr_37594_38841 = state_37554__$1;
(statearr_37594_38841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (19))){
var inst_37481 = (state_37554[(7)]);
var inst_37501 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37481);
var state_37554__$1 = state_37554;
var statearr_37595_38842 = state_37554__$1;
(statearr_37595_38842[(2)] = inst_37501);

(statearr_37595_38842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (11))){
var inst_37481 = (state_37554[(7)]);
var inst_37485 = (inst_37481 == null);
var inst_37486 = cljs.core.not(inst_37485);
var state_37554__$1 = state_37554;
if(inst_37486){
var statearr_37596_38843 = state_37554__$1;
(statearr_37596_38843[(1)] = (13));

} else {
var statearr_37597_38848 = state_37554__$1;
(statearr_37597_38848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (9))){
var inst_37456 = (state_37554[(8)]);
var state_37554__$1 = state_37554;
var statearr_37598_38849 = state_37554__$1;
(statearr_37598_38849[(2)] = inst_37456);

(statearr_37598_38849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (5))){
var state_37554__$1 = state_37554;
var statearr_37599_38851 = state_37554__$1;
(statearr_37599_38851[(2)] = true);

(statearr_37599_38851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (14))){
var state_37554__$1 = state_37554;
var statearr_37600_38852 = state_37554__$1;
(statearr_37600_38852[(2)] = false);

(statearr_37600_38852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (26))){
var inst_37514 = (state_37554[(10)]);
var inst_37521 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37514);
var state_37554__$1 = state_37554;
var statearr_37601_38853 = state_37554__$1;
(statearr_37601_38853[(2)] = inst_37521);

(statearr_37601_38853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (16))){
var state_37554__$1 = state_37554;
var statearr_37602_38855 = state_37554__$1;
(statearr_37602_38855[(2)] = true);

(statearr_37602_38855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (38))){
var inst_37544 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
var statearr_37603_38858 = state_37554__$1;
(statearr_37603_38858[(2)] = inst_37544);

(statearr_37603_38858[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (30))){
var inst_37505 = (state_37554[(9)]);
var inst_37506 = (state_37554[(13)]);
var inst_37514 = (state_37554[(10)]);
var inst_37531 = cljs.core.empty_QMARK_(inst_37505);
var inst_37532 = (inst_37506.cljs$core$IFn$_invoke$arity$1 ? inst_37506.cljs$core$IFn$_invoke$arity$1(inst_37514) : inst_37506.call(null,inst_37514));
var inst_37533 = cljs.core.not(inst_37532);
var inst_37534 = ((inst_37531) && (inst_37533));
var state_37554__$1 = state_37554;
var statearr_37604_38863 = state_37554__$1;
(statearr_37604_38863[(2)] = inst_37534);

(statearr_37604_38863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (10))){
var inst_37456 = (state_37554[(8)]);
var inst_37477 = (state_37554[(2)]);
var inst_37478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37477,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37477,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37477,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37481 = inst_37456;
var state_37554__$1 = (function (){var statearr_37605 = state_37554;
(statearr_37605[(16)] = inst_37479);

(statearr_37605[(17)] = inst_37478);

(statearr_37605[(7)] = inst_37481);

(statearr_37605[(18)] = inst_37480);

return statearr_37605;
})();
var statearr_37606_38871 = state_37554__$1;
(statearr_37606_38871[(2)] = null);

(statearr_37606_38871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (18))){
var inst_37496 = (state_37554[(2)]);
var state_37554__$1 = state_37554;
var statearr_37607_38872 = state_37554__$1;
(statearr_37607_38872[(2)] = inst_37496);

(statearr_37607_38872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (37))){
var state_37554__$1 = state_37554;
var statearr_37608_38873 = state_37554__$1;
(statearr_37608_38873[(2)] = null);

(statearr_37608_38873[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37555 === (8))){
var inst_37456 = (state_37554[(8)]);
var inst_37474 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37456);
var state_37554__$1 = state_37554;
var statearr_37609_38877 = state_37554__$1;
(statearr_37609_38877[(2)] = inst_37474);

(statearr_37609_38877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___38765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36657__auto__,c__36758__auto___38765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36658__auto__ = null;
var cljs$core$async$mix_$_state_machine__36658__auto____0 = (function (){
var statearr_37610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37610[(0)] = cljs$core$async$mix_$_state_machine__36658__auto__);

(statearr_37610[(1)] = (1));

return statearr_37610;
});
var cljs$core$async$mix_$_state_machine__36658__auto____1 = (function (state_37554){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37554);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37611){if((e37611 instanceof Object)){
var ex__36661__auto__ = e37611;
var statearr_37612_38881 = state_37554;
(statearr_37612_38881[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38883 = state_37554;
state_37554 = G__38883;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36658__auto__ = function(state_37554){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36658__auto____1.call(this,state_37554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36658__auto____0;
cljs$core$async$mix_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36658__auto____1;
return cljs$core$async$mix_$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___38765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36760__auto__ = (function (){var statearr_37613 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37613[(6)] = c__36758__auto___38765);

return statearr_37613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___38765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37615 = arguments.length;
switch (G__37615) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37618 = arguments.length;
switch (G__37618) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__37616_SHARP_){
if(cljs.core.truth_((p1__37616_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37616_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37616_SHARP_.call(null,topic)))){
return p1__37616_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37616_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37619 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37620){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37620 = meta37620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37621,meta37620__$1){
var self__ = this;
var _37621__$1 = this;
return (new cljs.core.async.t_cljs$core$async37619(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37620__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37621){
var self__ = this;
var _37621__$1 = this;
return self__.meta37620;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37620","meta37620",-236906232,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37619";

cljs.core.async.t_cljs$core$async37619.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37619");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37619.
 */
cljs.core.async.__GT_t_cljs$core$async37619 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37619(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37620){
return (new cljs.core.async.t_cljs$core$async37619(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37620));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37619(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36758__auto___38927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___38927,mults,ensure_mult,p){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___38927,mults,ensure_mult,p){
return (function (state_37693){
var state_val_37694 = (state_37693[(1)]);
if((state_val_37694 === (7))){
var inst_37689 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37695_38931 = state_37693__$1;
(statearr_37695_38931[(2)] = inst_37689);

(statearr_37695_38931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (20))){
var state_37693__$1 = state_37693;
var statearr_37696_38935 = state_37693__$1;
(statearr_37696_38935[(2)] = null);

(statearr_37696_38935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (1))){
var state_37693__$1 = state_37693;
var statearr_37697_38936 = state_37693__$1;
(statearr_37697_38936[(2)] = null);

(statearr_37697_38936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (24))){
var inst_37672 = (state_37693[(7)]);
var inst_37681 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37672);
var state_37693__$1 = state_37693;
var statearr_37698_38937 = state_37693__$1;
(statearr_37698_38937[(2)] = inst_37681);

(statearr_37698_38937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (4))){
var inst_37624 = (state_37693[(8)]);
var inst_37624__$1 = (state_37693[(2)]);
var inst_37625 = (inst_37624__$1 == null);
var state_37693__$1 = (function (){var statearr_37699 = state_37693;
(statearr_37699[(8)] = inst_37624__$1);

return statearr_37699;
})();
if(cljs.core.truth_(inst_37625)){
var statearr_37700_38938 = state_37693__$1;
(statearr_37700_38938[(1)] = (5));

} else {
var statearr_37701_38939 = state_37693__$1;
(statearr_37701_38939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (15))){
var inst_37666 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37702_38940 = state_37693__$1;
(statearr_37702_38940[(2)] = inst_37666);

(statearr_37702_38940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (21))){
var inst_37686 = (state_37693[(2)]);
var state_37693__$1 = (function (){var statearr_37703 = state_37693;
(statearr_37703[(9)] = inst_37686);

return statearr_37703;
})();
var statearr_37704_38941 = state_37693__$1;
(statearr_37704_38941[(2)] = null);

(statearr_37704_38941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (13))){
var inst_37648 = (state_37693[(10)]);
var inst_37650 = cljs.core.chunked_seq_QMARK_(inst_37648);
var state_37693__$1 = state_37693;
if(inst_37650){
var statearr_37705_38942 = state_37693__$1;
(statearr_37705_38942[(1)] = (16));

} else {
var statearr_37706_38943 = state_37693__$1;
(statearr_37706_38943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (22))){
var inst_37678 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37678)){
var statearr_37707_38945 = state_37693__$1;
(statearr_37707_38945[(1)] = (23));

} else {
var statearr_37708_38946 = state_37693__$1;
(statearr_37708_38946[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (6))){
var inst_37672 = (state_37693[(7)]);
var inst_37674 = (state_37693[(11)]);
var inst_37624 = (state_37693[(8)]);
var inst_37672__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37624) : topic_fn.call(null,inst_37624));
var inst_37673 = cljs.core.deref(mults);
var inst_37674__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37673,inst_37672__$1);
var state_37693__$1 = (function (){var statearr_37709 = state_37693;
(statearr_37709[(7)] = inst_37672__$1);

(statearr_37709[(11)] = inst_37674__$1);

return statearr_37709;
})();
if(cljs.core.truth_(inst_37674__$1)){
var statearr_37710_38947 = state_37693__$1;
(statearr_37710_38947[(1)] = (19));

} else {
var statearr_37711_38948 = state_37693__$1;
(statearr_37711_38948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (25))){
var inst_37683 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37712_38949 = state_37693__$1;
(statearr_37712_38949[(2)] = inst_37683);

(statearr_37712_38949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (17))){
var inst_37648 = (state_37693[(10)]);
var inst_37657 = cljs.core.first(inst_37648);
var inst_37658 = cljs.core.async.muxch_STAR_(inst_37657);
var inst_37659 = cljs.core.async.close_BANG_(inst_37658);
var inst_37660 = cljs.core.next(inst_37648);
var inst_37634 = inst_37660;
var inst_37635 = null;
var inst_37636 = (0);
var inst_37637 = (0);
var state_37693__$1 = (function (){var statearr_37713 = state_37693;
(statearr_37713[(12)] = inst_37659);

(statearr_37713[(13)] = inst_37634);

(statearr_37713[(14)] = inst_37635);

(statearr_37713[(15)] = inst_37637);

(statearr_37713[(16)] = inst_37636);

return statearr_37713;
})();
var statearr_37714_38960 = state_37693__$1;
(statearr_37714_38960[(2)] = null);

(statearr_37714_38960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (3))){
var inst_37691 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37693__$1,inst_37691);
} else {
if((state_val_37694 === (12))){
var inst_37668 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37715_38961 = state_37693__$1;
(statearr_37715_38961[(2)] = inst_37668);

(statearr_37715_38961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (2))){
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37693__$1,(4),ch);
} else {
if((state_val_37694 === (23))){
var state_37693__$1 = state_37693;
var statearr_37716_38962 = state_37693__$1;
(statearr_37716_38962[(2)] = null);

(statearr_37716_38962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (19))){
var inst_37674 = (state_37693[(11)]);
var inst_37624 = (state_37693[(8)]);
var inst_37676 = cljs.core.async.muxch_STAR_(inst_37674);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37693__$1,(22),inst_37676,inst_37624);
} else {
if((state_val_37694 === (11))){
var inst_37648 = (state_37693[(10)]);
var inst_37634 = (state_37693[(13)]);
var inst_37648__$1 = cljs.core.seq(inst_37634);
var state_37693__$1 = (function (){var statearr_37717 = state_37693;
(statearr_37717[(10)] = inst_37648__$1);

return statearr_37717;
})();
if(inst_37648__$1){
var statearr_37718_38969 = state_37693__$1;
(statearr_37718_38969[(1)] = (13));

} else {
var statearr_37719_38970 = state_37693__$1;
(statearr_37719_38970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (9))){
var inst_37670 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37720_38971 = state_37693__$1;
(statearr_37720_38971[(2)] = inst_37670);

(statearr_37720_38971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (5))){
var inst_37631 = cljs.core.deref(mults);
var inst_37632 = cljs.core.vals(inst_37631);
var inst_37633 = cljs.core.seq(inst_37632);
var inst_37634 = inst_37633;
var inst_37635 = null;
var inst_37636 = (0);
var inst_37637 = (0);
var state_37693__$1 = (function (){var statearr_37721 = state_37693;
(statearr_37721[(13)] = inst_37634);

(statearr_37721[(14)] = inst_37635);

(statearr_37721[(15)] = inst_37637);

(statearr_37721[(16)] = inst_37636);

return statearr_37721;
})();
var statearr_37722_38972 = state_37693__$1;
(statearr_37722_38972[(2)] = null);

(statearr_37722_38972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (14))){
var state_37693__$1 = state_37693;
var statearr_37726_38973 = state_37693__$1;
(statearr_37726_38973[(2)] = null);

(statearr_37726_38973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (16))){
var inst_37648 = (state_37693[(10)]);
var inst_37652 = cljs.core.chunk_first(inst_37648);
var inst_37653 = cljs.core.chunk_rest(inst_37648);
var inst_37654 = cljs.core.count(inst_37652);
var inst_37634 = inst_37653;
var inst_37635 = inst_37652;
var inst_37636 = inst_37654;
var inst_37637 = (0);
var state_37693__$1 = (function (){var statearr_37727 = state_37693;
(statearr_37727[(13)] = inst_37634);

(statearr_37727[(14)] = inst_37635);

(statearr_37727[(15)] = inst_37637);

(statearr_37727[(16)] = inst_37636);

return statearr_37727;
})();
var statearr_37728_38975 = state_37693__$1;
(statearr_37728_38975[(2)] = null);

(statearr_37728_38975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (10))){
var inst_37634 = (state_37693[(13)]);
var inst_37635 = (state_37693[(14)]);
var inst_37637 = (state_37693[(15)]);
var inst_37636 = (state_37693[(16)]);
var inst_37642 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37635,inst_37637);
var inst_37643 = cljs.core.async.muxch_STAR_(inst_37642);
var inst_37644 = cljs.core.async.close_BANG_(inst_37643);
var inst_37645 = (inst_37637 + (1));
var tmp37723 = inst_37634;
var tmp37724 = inst_37635;
var tmp37725 = inst_37636;
var inst_37634__$1 = tmp37723;
var inst_37635__$1 = tmp37724;
var inst_37636__$1 = tmp37725;
var inst_37637__$1 = inst_37645;
var state_37693__$1 = (function (){var statearr_37729 = state_37693;
(statearr_37729[(13)] = inst_37634__$1);

(statearr_37729[(14)] = inst_37635__$1);

(statearr_37729[(15)] = inst_37637__$1);

(statearr_37729[(16)] = inst_37636__$1);

(statearr_37729[(17)] = inst_37644);

return statearr_37729;
})();
var statearr_37730_38977 = state_37693__$1;
(statearr_37730_38977[(2)] = null);

(statearr_37730_38977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (18))){
var inst_37663 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37731_38978 = state_37693__$1;
(statearr_37731_38978[(2)] = inst_37663);

(statearr_37731_38978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (8))){
var inst_37637 = (state_37693[(15)]);
var inst_37636 = (state_37693[(16)]);
var inst_37639 = (inst_37637 < inst_37636);
var inst_37640 = inst_37639;
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37640)){
var statearr_37732_38979 = state_37693__$1;
(statearr_37732_38979[(1)] = (10));

} else {
var statearr_37733_38980 = state_37693__$1;
(statearr_37733_38980[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___38927,mults,ensure_mult,p))
;
return ((function (switch__36657__auto__,c__36758__auto___38927,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_37734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37734[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_37734[(1)] = (1));

return statearr_37734;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_37693){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37693);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37735){if((e37735 instanceof Object)){
var ex__36661__auto__ = e37735;
var statearr_37736_38984 = state_37693;
(statearr_37736_38984[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38985 = state_37693;
state_37693 = G__38985;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_37693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_37693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___38927,mults,ensure_mult,p))
})();
var state__36760__auto__ = (function (){var statearr_37737 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37737[(6)] = c__36758__auto___38927);

return statearr_37737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___38927,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37739 = arguments.length;
switch (G__37739) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37741 = arguments.length;
switch (G__37741) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37743 = arguments.length;
switch (G__37743) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__36758__auto___39005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37782){
var state_val_37783 = (state_37782[(1)]);
if((state_val_37783 === (7))){
var state_37782__$1 = state_37782;
var statearr_37784_39009 = state_37782__$1;
(statearr_37784_39009[(2)] = null);

(statearr_37784_39009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (1))){
var state_37782__$1 = state_37782;
var statearr_37785_39010 = state_37782__$1;
(statearr_37785_39010[(2)] = null);

(statearr_37785_39010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (4))){
var inst_37746 = (state_37782[(7)]);
var inst_37748 = (inst_37746 < cnt);
var state_37782__$1 = state_37782;
if(cljs.core.truth_(inst_37748)){
var statearr_37786_39011 = state_37782__$1;
(statearr_37786_39011[(1)] = (6));

} else {
var statearr_37787_39012 = state_37782__$1;
(statearr_37787_39012[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (15))){
var inst_37778 = (state_37782[(2)]);
var state_37782__$1 = state_37782;
var statearr_37788_39013 = state_37782__$1;
(statearr_37788_39013[(2)] = inst_37778);

(statearr_37788_39013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (13))){
var inst_37771 = cljs.core.async.close_BANG_(out);
var state_37782__$1 = state_37782;
var statearr_37789_39014 = state_37782__$1;
(statearr_37789_39014[(2)] = inst_37771);

(statearr_37789_39014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (6))){
var state_37782__$1 = state_37782;
var statearr_37790_39015 = state_37782__$1;
(statearr_37790_39015[(2)] = null);

(statearr_37790_39015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (3))){
var inst_37780 = (state_37782[(2)]);
var state_37782__$1 = state_37782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37782__$1,inst_37780);
} else {
if((state_val_37783 === (12))){
var inst_37768 = (state_37782[(8)]);
var inst_37768__$1 = (state_37782[(2)]);
var inst_37769 = cljs.core.some(cljs.core.nil_QMARK_,inst_37768__$1);
var state_37782__$1 = (function (){var statearr_37791 = state_37782;
(statearr_37791[(8)] = inst_37768__$1);

return statearr_37791;
})();
if(cljs.core.truth_(inst_37769)){
var statearr_37792_39016 = state_37782__$1;
(statearr_37792_39016[(1)] = (13));

} else {
var statearr_37793_39017 = state_37782__$1;
(statearr_37793_39017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (2))){
var inst_37745 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37746 = (0);
var state_37782__$1 = (function (){var statearr_37794 = state_37782;
(statearr_37794[(7)] = inst_37746);

(statearr_37794[(9)] = inst_37745);

return statearr_37794;
})();
var statearr_37795_39018 = state_37782__$1;
(statearr_37795_39018[(2)] = null);

(statearr_37795_39018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (11))){
var inst_37746 = (state_37782[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37782,(10),Object,null,(9));
var inst_37755 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37746) : chs__$1.call(null,inst_37746));
var inst_37756 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37746) : done.call(null,inst_37746));
var inst_37757 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37755,inst_37756);
var state_37782__$1 = state_37782;
var statearr_37796_39024 = state_37782__$1;
(statearr_37796_39024[(2)] = inst_37757);


cljs.core.async.impl.ioc_helpers.process_exception(state_37782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (9))){
var inst_37746 = (state_37782[(7)]);
var inst_37759 = (state_37782[(2)]);
var inst_37760 = (inst_37746 + (1));
var inst_37746__$1 = inst_37760;
var state_37782__$1 = (function (){var statearr_37797 = state_37782;
(statearr_37797[(7)] = inst_37746__$1);

(statearr_37797[(10)] = inst_37759);

return statearr_37797;
})();
var statearr_37798_39027 = state_37782__$1;
(statearr_37798_39027[(2)] = null);

(statearr_37798_39027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (5))){
var inst_37766 = (state_37782[(2)]);
var state_37782__$1 = (function (){var statearr_37799 = state_37782;
(statearr_37799[(11)] = inst_37766);

return statearr_37799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37782__$1,(12),dchan);
} else {
if((state_val_37783 === (14))){
var inst_37768 = (state_37782[(8)]);
var inst_37773 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37768);
var state_37782__$1 = state_37782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37782__$1,(16),out,inst_37773);
} else {
if((state_val_37783 === (16))){
var inst_37775 = (state_37782[(2)]);
var state_37782__$1 = (function (){var statearr_37800 = state_37782;
(statearr_37800[(12)] = inst_37775);

return statearr_37800;
})();
var statearr_37801_39033 = state_37782__$1;
(statearr_37801_39033[(2)] = null);

(statearr_37801_39033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (10))){
var inst_37750 = (state_37782[(2)]);
var inst_37751 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37782__$1 = (function (){var statearr_37802 = state_37782;
(statearr_37802[(13)] = inst_37750);

return statearr_37802;
})();
var statearr_37803_39034 = state_37782__$1;
(statearr_37803_39034[(2)] = inst_37751);


cljs.core.async.impl.ioc_helpers.process_exception(state_37782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (8))){
var inst_37764 = (state_37782[(2)]);
var state_37782__$1 = state_37782;
var statearr_37804_39035 = state_37782__$1;
(statearr_37804_39035[(2)] = inst_37764);

(statearr_37804_39035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36657__auto__,c__36758__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_37805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37805[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_37805[(1)] = (1));

return statearr_37805;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_37782){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37782);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37806){if((e37806 instanceof Object)){
var ex__36661__auto__ = e37806;
var statearr_37807_39042 = state_37782;
(statearr_37807_39042[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39043 = state_37782;
state_37782 = G__39043;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_37782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_37782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36760__auto__ = (function (){var statearr_37808 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37808[(6)] = c__36758__auto___39005);

return statearr_37808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37811 = arguments.length;
switch (G__37811) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36758__auto___39046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39046,out){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39046,out){
return (function (state_37843){
var state_val_37844 = (state_37843[(1)]);
if((state_val_37844 === (7))){
var inst_37823 = (state_37843[(7)]);
var inst_37822 = (state_37843[(8)]);
var inst_37822__$1 = (state_37843[(2)]);
var inst_37823__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37822__$1,(0),null);
var inst_37824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37822__$1,(1),null);
var inst_37825 = (inst_37823__$1 == null);
var state_37843__$1 = (function (){var statearr_37845 = state_37843;
(statearr_37845[(9)] = inst_37824);

(statearr_37845[(7)] = inst_37823__$1);

(statearr_37845[(8)] = inst_37822__$1);

return statearr_37845;
})();
if(cljs.core.truth_(inst_37825)){
var statearr_37846_39048 = state_37843__$1;
(statearr_37846_39048[(1)] = (8));

} else {
var statearr_37847_39049 = state_37843__$1;
(statearr_37847_39049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37844 === (1))){
var inst_37812 = cljs.core.vec(chs);
var inst_37813 = inst_37812;
var state_37843__$1 = (function (){var statearr_37848 = state_37843;
(statearr_37848[(10)] = inst_37813);

return statearr_37848;
})();
var statearr_37849_39053 = state_37843__$1;
(statearr_37849_39053[(2)] = null);

(statearr_37849_39053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37844 === (4))){
var inst_37813 = (state_37843[(10)]);
var state_37843__$1 = state_37843;
return cljs.core.async.ioc_alts_BANG_(state_37843__$1,(7),inst_37813);
} else {
if((state_val_37844 === (6))){
var inst_37839 = (state_37843[(2)]);
var state_37843__$1 = state_37843;
var statearr_37850_39059 = state_37843__$1;
(statearr_37850_39059[(2)] = inst_37839);

(statearr_37850_39059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37844 === (3))){
var inst_37841 = (state_37843[(2)]);
var state_37843__$1 = state_37843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37843__$1,inst_37841);
} else {
if((state_val_37844 === (2))){
var inst_37813 = (state_37843[(10)]);
var inst_37815 = cljs.core.count(inst_37813);
var inst_37816 = (inst_37815 > (0));
var state_37843__$1 = state_37843;
if(cljs.core.truth_(inst_37816)){
var statearr_37852_39063 = state_37843__$1;
(statearr_37852_39063[(1)] = (4));

} else {
var statearr_37853_39064 = state_37843__$1;
(statearr_37853_39064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37844 === (11))){
var inst_37813 = (state_37843[(10)]);
var inst_37832 = (state_37843[(2)]);
var tmp37851 = inst_37813;
var inst_37813__$1 = tmp37851;
var state_37843__$1 = (function (){var statearr_37854 = state_37843;
(statearr_37854[(10)] = inst_37813__$1);

(statearr_37854[(11)] = inst_37832);

return statearr_37854;
})();
var statearr_37855_39068 = state_37843__$1;
(statearr_37855_39068[(2)] = null);

(statearr_37855_39068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37844 === (9))){
var inst_37823 = (state_37843[(7)]);
var state_37843__$1 = state_37843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37843__$1,(11),out,inst_37823);
} else {
if((state_val_37844 === (5))){
var inst_37837 = cljs.core.async.close_BANG_(out);
var state_37843__$1 = state_37843;
var statearr_37856_39075 = state_37843__$1;
(statearr_37856_39075[(2)] = inst_37837);

(statearr_37856_39075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37844 === (10))){
var inst_37835 = (state_37843[(2)]);
var state_37843__$1 = state_37843;
var statearr_37857_39078 = state_37843__$1;
(statearr_37857_39078[(2)] = inst_37835);

(statearr_37857_39078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37844 === (8))){
var inst_37824 = (state_37843[(9)]);
var inst_37813 = (state_37843[(10)]);
var inst_37823 = (state_37843[(7)]);
var inst_37822 = (state_37843[(8)]);
var inst_37827 = (function (){var cs = inst_37813;
var vec__37818 = inst_37822;
var v = inst_37823;
var c = inst_37824;
return ((function (cs,vec__37818,v,c,inst_37824,inst_37813,inst_37823,inst_37822,state_val_37844,c__36758__auto___39046,out){
return (function (p1__37809_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37809_SHARP_);
});
;})(cs,vec__37818,v,c,inst_37824,inst_37813,inst_37823,inst_37822,state_val_37844,c__36758__auto___39046,out))
})();
var inst_37828 = cljs.core.filterv(inst_37827,inst_37813);
var inst_37813__$1 = inst_37828;
var state_37843__$1 = (function (){var statearr_37858 = state_37843;
(statearr_37858[(10)] = inst_37813__$1);

return statearr_37858;
})();
var statearr_37859_39081 = state_37843__$1;
(statearr_37859_39081[(2)] = null);

(statearr_37859_39081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___39046,out))
;
return ((function (switch__36657__auto__,c__36758__auto___39046,out){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_37860 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37860[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_37860[(1)] = (1));

return statearr_37860;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_37843){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37843);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37861){if((e37861 instanceof Object)){
var ex__36661__auto__ = e37861;
var statearr_37862_39085 = state_37843;
(statearr_37862_39085[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39086 = state_37843;
state_37843 = G__39086;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_37843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_37843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39046,out))
})();
var state__36760__auto__ = (function (){var statearr_37863 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37863[(6)] = c__36758__auto___39046);

return statearr_37863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39046,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37865 = arguments.length;
switch (G__37865) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36758__auto___39099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39099,out){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39099,out){
return (function (state_37889){
var state_val_37890 = (state_37889[(1)]);
if((state_val_37890 === (7))){
var inst_37871 = (state_37889[(7)]);
var inst_37871__$1 = (state_37889[(2)]);
var inst_37872 = (inst_37871__$1 == null);
var inst_37873 = cljs.core.not(inst_37872);
var state_37889__$1 = (function (){var statearr_37891 = state_37889;
(statearr_37891[(7)] = inst_37871__$1);

return statearr_37891;
})();
if(inst_37873){
var statearr_37892_39106 = state_37889__$1;
(statearr_37892_39106[(1)] = (8));

} else {
var statearr_37893_39107 = state_37889__$1;
(statearr_37893_39107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (1))){
var inst_37866 = (0);
var state_37889__$1 = (function (){var statearr_37894 = state_37889;
(statearr_37894[(8)] = inst_37866);

return statearr_37894;
})();
var statearr_37895_39108 = state_37889__$1;
(statearr_37895_39108[(2)] = null);

(statearr_37895_39108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (4))){
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37889__$1,(7),ch);
} else {
if((state_val_37890 === (6))){
var inst_37884 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37896_39110 = state_37889__$1;
(statearr_37896_39110[(2)] = inst_37884);

(statearr_37896_39110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (3))){
var inst_37886 = (state_37889[(2)]);
var inst_37887 = cljs.core.async.close_BANG_(out);
var state_37889__$1 = (function (){var statearr_37897 = state_37889;
(statearr_37897[(9)] = inst_37886);

return statearr_37897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37889__$1,inst_37887);
} else {
if((state_val_37890 === (2))){
var inst_37866 = (state_37889[(8)]);
var inst_37868 = (inst_37866 < n);
var state_37889__$1 = state_37889;
if(cljs.core.truth_(inst_37868)){
var statearr_37898_39112 = state_37889__$1;
(statearr_37898_39112[(1)] = (4));

} else {
var statearr_37899_39114 = state_37889__$1;
(statearr_37899_39114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (11))){
var inst_37866 = (state_37889[(8)]);
var inst_37876 = (state_37889[(2)]);
var inst_37877 = (inst_37866 + (1));
var inst_37866__$1 = inst_37877;
var state_37889__$1 = (function (){var statearr_37900 = state_37889;
(statearr_37900[(8)] = inst_37866__$1);

(statearr_37900[(10)] = inst_37876);

return statearr_37900;
})();
var statearr_37901_39122 = state_37889__$1;
(statearr_37901_39122[(2)] = null);

(statearr_37901_39122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (9))){
var state_37889__$1 = state_37889;
var statearr_37902_39123 = state_37889__$1;
(statearr_37902_39123[(2)] = null);

(statearr_37902_39123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (5))){
var state_37889__$1 = state_37889;
var statearr_37903_39124 = state_37889__$1;
(statearr_37903_39124[(2)] = null);

(statearr_37903_39124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (10))){
var inst_37881 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37904_39131 = state_37889__$1;
(statearr_37904_39131[(2)] = inst_37881);

(statearr_37904_39131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (8))){
var inst_37871 = (state_37889[(7)]);
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37889__$1,(11),out,inst_37871);
} else {
return null;
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
});})(c__36758__auto___39099,out))
;
return ((function (switch__36657__auto__,c__36758__auto___39099,out){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_37905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37905[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_37905[(1)] = (1));

return statearr_37905;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_37889){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37889);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37906){if((e37906 instanceof Object)){
var ex__36661__auto__ = e37906;
var statearr_37907_39137 = state_37889;
(statearr_37907_39137[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39138 = state_37889;
state_37889 = G__39138;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_37889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_37889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39099,out))
})();
var state__36760__auto__ = (function (){var statearr_37908 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37908[(6)] = c__36758__auto___39099);

return statearr_37908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39099,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37910 = (function (f,ch,meta37911){
this.f = f;
this.ch = ch;
this.meta37911 = meta37911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37912,meta37911__$1){
var self__ = this;
var _37912__$1 = this;
return (new cljs.core.async.t_cljs$core$async37910(self__.f,self__.ch,meta37911__$1));
});

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37912){
var self__ = this;
var _37912__$1 = this;
return self__.meta37911;
});

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37913 = (function (f,ch,meta37911,_,fn1,meta37914){
this.f = f;
this.ch = ch;
this.meta37911 = meta37911;
this._ = _;
this.fn1 = fn1;
this.meta37914 = meta37914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37915,meta37914__$1){
var self__ = this;
var _37915__$1 = this;
return (new cljs.core.async.t_cljs$core$async37913(self__.f,self__.ch,self__.meta37911,self__._,self__.fn1,meta37914__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37915){
var self__ = this;
var _37915__$1 = this;
return self__.meta37914;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37909_SHARP_){
var G__37916 = (((p1__37909_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37909_SHARP_) : self__.f.call(null,p1__37909_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37916) : f1.call(null,G__37916));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37913.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37911","meta37911",-952169484,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37910","cljs.core.async/t_cljs$core$async37910",2090855315,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37914","meta37914",-31529069,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37913";

cljs.core.async.t_cljs$core$async37913.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37913");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37913.
 */
cljs.core.async.__GT_t_cljs$core$async37913 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37913(f__$1,ch__$1,meta37911__$1,___$2,fn1__$1,meta37914){
return (new cljs.core.async.t_cljs$core$async37913(f__$1,ch__$1,meta37911__$1,___$2,fn1__$1,meta37914));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37913(self__.f,self__.ch,self__.meta37911,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37917 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37917) : self__.f.call(null,G__37917));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37911","meta37911",-952169484,null)], null);
});

cljs.core.async.t_cljs$core$async37910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37910";

cljs.core.async.t_cljs$core$async37910.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37910");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37910.
 */
cljs.core.async.__GT_t_cljs$core$async37910 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37910(f__$1,ch__$1,meta37911){
return (new cljs.core.async.t_cljs$core$async37910(f__$1,ch__$1,meta37911));
});

}

return (new cljs.core.async.t_cljs$core$async37910(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37918 = (function (f,ch,meta37919){
this.f = f;
this.ch = ch;
this.meta37919 = meta37919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37920,meta37919__$1){
var self__ = this;
var _37920__$1 = this;
return (new cljs.core.async.t_cljs$core$async37918(self__.f,self__.ch,meta37919__$1));
});

cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37920){
var self__ = this;
var _37920__$1 = this;
return self__.meta37919;
});

cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async37918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37919","meta37919",1932509024,null)], null);
});

cljs.core.async.t_cljs$core$async37918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37918";

cljs.core.async.t_cljs$core$async37918.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37918");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37918.
 */
cljs.core.async.__GT_t_cljs$core$async37918 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37918(f__$1,ch__$1,meta37919){
return (new cljs.core.async.t_cljs$core$async37918(f__$1,ch__$1,meta37919));
});

}

return (new cljs.core.async.t_cljs$core$async37918(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37921 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37921 = (function (p,ch,meta37922){
this.p = p;
this.ch = ch;
this.meta37922 = meta37922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37923,meta37922__$1){
var self__ = this;
var _37923__$1 = this;
return (new cljs.core.async.t_cljs$core$async37921(self__.p,self__.ch,meta37922__$1));
});

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37923){
var self__ = this;
var _37923__$1 = this;
return self__.meta37922;
});

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37921.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37922","meta37922",1861672300,null)], null);
});

cljs.core.async.t_cljs$core$async37921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37921";

cljs.core.async.t_cljs$core$async37921.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async37921");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37921.
 */
cljs.core.async.__GT_t_cljs$core$async37921 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37921(p__$1,ch__$1,meta37922){
return (new cljs.core.async.t_cljs$core$async37921(p__$1,ch__$1,meta37922));
});

}

return (new cljs.core.async.t_cljs$core$async37921(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37925 = arguments.length;
switch (G__37925) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36758__auto___39174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39174,out){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39174,out){
return (function (state_37946){
var state_val_37947 = (state_37946[(1)]);
if((state_val_37947 === (7))){
var inst_37942 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37948_39176 = state_37946__$1;
(statearr_37948_39176[(2)] = inst_37942);

(statearr_37948_39176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (1))){
var state_37946__$1 = state_37946;
var statearr_37949_39177 = state_37946__$1;
(statearr_37949_39177[(2)] = null);

(statearr_37949_39177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (4))){
var inst_37928 = (state_37946[(7)]);
var inst_37928__$1 = (state_37946[(2)]);
var inst_37929 = (inst_37928__$1 == null);
var state_37946__$1 = (function (){var statearr_37950 = state_37946;
(statearr_37950[(7)] = inst_37928__$1);

return statearr_37950;
})();
if(cljs.core.truth_(inst_37929)){
var statearr_37951_39178 = state_37946__$1;
(statearr_37951_39178[(1)] = (5));

} else {
var statearr_37952_39179 = state_37946__$1;
(statearr_37952_39179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (6))){
var inst_37928 = (state_37946[(7)]);
var inst_37933 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37928) : p.call(null,inst_37928));
var state_37946__$1 = state_37946;
if(cljs.core.truth_(inst_37933)){
var statearr_37953_39180 = state_37946__$1;
(statearr_37953_39180[(1)] = (8));

} else {
var statearr_37954_39181 = state_37946__$1;
(statearr_37954_39181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (3))){
var inst_37944 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37946__$1,inst_37944);
} else {
if((state_val_37947 === (2))){
var state_37946__$1 = state_37946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37946__$1,(4),ch);
} else {
if((state_val_37947 === (11))){
var inst_37936 = (state_37946[(2)]);
var state_37946__$1 = state_37946;
var statearr_37955_39187 = state_37946__$1;
(statearr_37955_39187[(2)] = inst_37936);

(statearr_37955_39187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (9))){
var state_37946__$1 = state_37946;
var statearr_37956_39190 = state_37946__$1;
(statearr_37956_39190[(2)] = null);

(statearr_37956_39190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (5))){
var inst_37931 = cljs.core.async.close_BANG_(out);
var state_37946__$1 = state_37946;
var statearr_37957_39191 = state_37946__$1;
(statearr_37957_39191[(2)] = inst_37931);

(statearr_37957_39191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (10))){
var inst_37939 = (state_37946[(2)]);
var state_37946__$1 = (function (){var statearr_37958 = state_37946;
(statearr_37958[(8)] = inst_37939);

return statearr_37958;
})();
var statearr_37959_39192 = state_37946__$1;
(statearr_37959_39192[(2)] = null);

(statearr_37959_39192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37947 === (8))){
var inst_37928 = (state_37946[(7)]);
var state_37946__$1 = state_37946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37946__$1,(11),out,inst_37928);
} else {
return null;
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
});})(c__36758__auto___39174,out))
;
return ((function (switch__36657__auto__,c__36758__auto___39174,out){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_37960 = [null,null,null,null,null,null,null,null,null];
(statearr_37960[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_37960[(1)] = (1));

return statearr_37960;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_37946){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_37946);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e37961){if((e37961 instanceof Object)){
var ex__36661__auto__ = e37961;
var statearr_37962_39196 = state_37946;
(statearr_37962_39196[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39197 = state_37946;
state_37946 = G__39197;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_37946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_37946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39174,out))
})();
var state__36760__auto__ = (function (){var statearr_37963 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_37963[(6)] = c__36758__auto___39174);

return statearr_37963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39174,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37965 = arguments.length;
switch (G__37965) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto__){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto__){
return (function (state_38027){
var state_val_38028 = (state_38027[(1)]);
if((state_val_38028 === (7))){
var inst_38023 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38029_39210 = state_38027__$1;
(statearr_38029_39210[(2)] = inst_38023);

(statearr_38029_39210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (20))){
var inst_37993 = (state_38027[(7)]);
var inst_38004 = (state_38027[(2)]);
var inst_38005 = cljs.core.next(inst_37993);
var inst_37979 = inst_38005;
var inst_37980 = null;
var inst_37981 = (0);
var inst_37982 = (0);
var state_38027__$1 = (function (){var statearr_38030 = state_38027;
(statearr_38030[(8)] = inst_37980);

(statearr_38030[(9)] = inst_37979);

(statearr_38030[(10)] = inst_37981);

(statearr_38030[(11)] = inst_37982);

(statearr_38030[(12)] = inst_38004);

return statearr_38030;
})();
var statearr_38031_39213 = state_38027__$1;
(statearr_38031_39213[(2)] = null);

(statearr_38031_39213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (1))){
var state_38027__$1 = state_38027;
var statearr_38032_39214 = state_38027__$1;
(statearr_38032_39214[(2)] = null);

(statearr_38032_39214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (4))){
var inst_37968 = (state_38027[(13)]);
var inst_37968__$1 = (state_38027[(2)]);
var inst_37969 = (inst_37968__$1 == null);
var state_38027__$1 = (function (){var statearr_38033 = state_38027;
(statearr_38033[(13)] = inst_37968__$1);

return statearr_38033;
})();
if(cljs.core.truth_(inst_37969)){
var statearr_38034_39215 = state_38027__$1;
(statearr_38034_39215[(1)] = (5));

} else {
var statearr_38035_39216 = state_38027__$1;
(statearr_38035_39216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (15))){
var state_38027__$1 = state_38027;
var statearr_38039_39217 = state_38027__$1;
(statearr_38039_39217[(2)] = null);

(statearr_38039_39217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (21))){
var state_38027__$1 = state_38027;
var statearr_38040_39222 = state_38027__$1;
(statearr_38040_39222[(2)] = null);

(statearr_38040_39222[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (13))){
var inst_37980 = (state_38027[(8)]);
var inst_37979 = (state_38027[(9)]);
var inst_37981 = (state_38027[(10)]);
var inst_37982 = (state_38027[(11)]);
var inst_37989 = (state_38027[(2)]);
var inst_37990 = (inst_37982 + (1));
var tmp38036 = inst_37980;
var tmp38037 = inst_37979;
var tmp38038 = inst_37981;
var inst_37979__$1 = tmp38037;
var inst_37980__$1 = tmp38036;
var inst_37981__$1 = tmp38038;
var inst_37982__$1 = inst_37990;
var state_38027__$1 = (function (){var statearr_38041 = state_38027;
(statearr_38041[(8)] = inst_37980__$1);

(statearr_38041[(9)] = inst_37979__$1);

(statearr_38041[(10)] = inst_37981__$1);

(statearr_38041[(14)] = inst_37989);

(statearr_38041[(11)] = inst_37982__$1);

return statearr_38041;
})();
var statearr_38042_39224 = state_38027__$1;
(statearr_38042_39224[(2)] = null);

(statearr_38042_39224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (22))){
var state_38027__$1 = state_38027;
var statearr_38043_39225 = state_38027__$1;
(statearr_38043_39225[(2)] = null);

(statearr_38043_39225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (6))){
var inst_37968 = (state_38027[(13)]);
var inst_37977 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37968) : f.call(null,inst_37968));
var inst_37978 = cljs.core.seq(inst_37977);
var inst_37979 = inst_37978;
var inst_37980 = null;
var inst_37981 = (0);
var inst_37982 = (0);
var state_38027__$1 = (function (){var statearr_38044 = state_38027;
(statearr_38044[(8)] = inst_37980);

(statearr_38044[(9)] = inst_37979);

(statearr_38044[(10)] = inst_37981);

(statearr_38044[(11)] = inst_37982);

return statearr_38044;
})();
var statearr_38045_39227 = state_38027__$1;
(statearr_38045_39227[(2)] = null);

(statearr_38045_39227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (17))){
var inst_37993 = (state_38027[(7)]);
var inst_37997 = cljs.core.chunk_first(inst_37993);
var inst_37998 = cljs.core.chunk_rest(inst_37993);
var inst_37999 = cljs.core.count(inst_37997);
var inst_37979 = inst_37998;
var inst_37980 = inst_37997;
var inst_37981 = inst_37999;
var inst_37982 = (0);
var state_38027__$1 = (function (){var statearr_38046 = state_38027;
(statearr_38046[(8)] = inst_37980);

(statearr_38046[(9)] = inst_37979);

(statearr_38046[(10)] = inst_37981);

(statearr_38046[(11)] = inst_37982);

return statearr_38046;
})();
var statearr_38047_39232 = state_38027__$1;
(statearr_38047_39232[(2)] = null);

(statearr_38047_39232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (3))){
var inst_38025 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38027__$1,inst_38025);
} else {
if((state_val_38028 === (12))){
var inst_38013 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38048_39234 = state_38027__$1;
(statearr_38048_39234[(2)] = inst_38013);

(statearr_38048_39234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (2))){
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38027__$1,(4),in$);
} else {
if((state_val_38028 === (23))){
var inst_38021 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38049_39235 = state_38027__$1;
(statearr_38049_39235[(2)] = inst_38021);

(statearr_38049_39235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (19))){
var inst_38008 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38050_39237 = state_38027__$1;
(statearr_38050_39237[(2)] = inst_38008);

(statearr_38050_39237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (11))){
var inst_37979 = (state_38027[(9)]);
var inst_37993 = (state_38027[(7)]);
var inst_37993__$1 = cljs.core.seq(inst_37979);
var state_38027__$1 = (function (){var statearr_38051 = state_38027;
(statearr_38051[(7)] = inst_37993__$1);

return statearr_38051;
})();
if(inst_37993__$1){
var statearr_38052_39238 = state_38027__$1;
(statearr_38052_39238[(1)] = (14));

} else {
var statearr_38053_39239 = state_38027__$1;
(statearr_38053_39239[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (9))){
var inst_38015 = (state_38027[(2)]);
var inst_38016 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38027__$1 = (function (){var statearr_38054 = state_38027;
(statearr_38054[(15)] = inst_38015);

return statearr_38054;
})();
if(cljs.core.truth_(inst_38016)){
var statearr_38055_39241 = state_38027__$1;
(statearr_38055_39241[(1)] = (21));

} else {
var statearr_38056_39242 = state_38027__$1;
(statearr_38056_39242[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (5))){
var inst_37971 = cljs.core.async.close_BANG_(out);
var state_38027__$1 = state_38027;
var statearr_38057_39244 = state_38027__$1;
(statearr_38057_39244[(2)] = inst_37971);

(statearr_38057_39244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (14))){
var inst_37993 = (state_38027[(7)]);
var inst_37995 = cljs.core.chunked_seq_QMARK_(inst_37993);
var state_38027__$1 = state_38027;
if(inst_37995){
var statearr_38058_39245 = state_38027__$1;
(statearr_38058_39245[(1)] = (17));

} else {
var statearr_38059_39246 = state_38027__$1;
(statearr_38059_39246[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (16))){
var inst_38011 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38060_39247 = state_38027__$1;
(statearr_38060_39247[(2)] = inst_38011);

(statearr_38060_39247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (10))){
var inst_37980 = (state_38027[(8)]);
var inst_37982 = (state_38027[(11)]);
var inst_37987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37980,inst_37982);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38027__$1,(13),out,inst_37987);
} else {
if((state_val_38028 === (18))){
var inst_37993 = (state_38027[(7)]);
var inst_38002 = cljs.core.first(inst_37993);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38027__$1,(20),out,inst_38002);
} else {
if((state_val_38028 === (8))){
var inst_37981 = (state_38027[(10)]);
var inst_37982 = (state_38027[(11)]);
var inst_37984 = (inst_37982 < inst_37981);
var inst_37985 = inst_37984;
var state_38027__$1 = state_38027;
if(cljs.core.truth_(inst_37985)){
var statearr_38061_39249 = state_38027__$1;
(statearr_38061_39249[(1)] = (10));

} else {
var statearr_38062_39251 = state_38027__$1;
(statearr_38062_39251[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto__))
;
return ((function (switch__36657__auto__,c__36758__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36658__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36658__auto____0 = (function (){
var statearr_38063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38063[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36658__auto__);

(statearr_38063[(1)] = (1));

return statearr_38063;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36658__auto____1 = (function (state_38027){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_38027);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e38064){if((e38064 instanceof Object)){
var ex__36661__auto__ = e38064;
var statearr_38065_39253 = state_38027;
(statearr_38065_39253[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39254 = state_38027;
state_38027 = G__39254;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36658__auto__ = function(state_38027){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36658__auto____1.call(this,state_38027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36658__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36658__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto__))
})();
var state__36760__auto__ = (function (){var statearr_38066 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_38066[(6)] = c__36758__auto__);

return statearr_38066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto__))
);

return c__36758__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38068 = arguments.length;
switch (G__38068) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38070 = arguments.length;
switch (G__38070) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38072 = arguments.length;
switch (G__38072) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36758__auto___39280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39280,out){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39280,out){
return (function (state_38096){
var state_val_38097 = (state_38096[(1)]);
if((state_val_38097 === (7))){
var inst_38091 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
var statearr_38098_39284 = state_38096__$1;
(statearr_38098_39284[(2)] = inst_38091);

(statearr_38098_39284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (1))){
var inst_38073 = null;
var state_38096__$1 = (function (){var statearr_38099 = state_38096;
(statearr_38099[(7)] = inst_38073);

return statearr_38099;
})();
var statearr_38100_39289 = state_38096__$1;
(statearr_38100_39289[(2)] = null);

(statearr_38100_39289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (4))){
var inst_38076 = (state_38096[(8)]);
var inst_38076__$1 = (state_38096[(2)]);
var inst_38077 = (inst_38076__$1 == null);
var inst_38078 = cljs.core.not(inst_38077);
var state_38096__$1 = (function (){var statearr_38101 = state_38096;
(statearr_38101[(8)] = inst_38076__$1);

return statearr_38101;
})();
if(inst_38078){
var statearr_38102_39292 = state_38096__$1;
(statearr_38102_39292[(1)] = (5));

} else {
var statearr_38103_39293 = state_38096__$1;
(statearr_38103_39293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (6))){
var state_38096__$1 = state_38096;
var statearr_38104_39294 = state_38096__$1;
(statearr_38104_39294[(2)] = null);

(statearr_38104_39294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (3))){
var inst_38093 = (state_38096[(2)]);
var inst_38094 = cljs.core.async.close_BANG_(out);
var state_38096__$1 = (function (){var statearr_38105 = state_38096;
(statearr_38105[(9)] = inst_38093);

return statearr_38105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38096__$1,inst_38094);
} else {
if((state_val_38097 === (2))){
var state_38096__$1 = state_38096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38096__$1,(4),ch);
} else {
if((state_val_38097 === (11))){
var inst_38076 = (state_38096[(8)]);
var inst_38085 = (state_38096[(2)]);
var inst_38073 = inst_38076;
var state_38096__$1 = (function (){var statearr_38106 = state_38096;
(statearr_38106[(7)] = inst_38073);

(statearr_38106[(10)] = inst_38085);

return statearr_38106;
})();
var statearr_38107_39300 = state_38096__$1;
(statearr_38107_39300[(2)] = null);

(statearr_38107_39300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (9))){
var inst_38076 = (state_38096[(8)]);
var state_38096__$1 = state_38096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38096__$1,(11),out,inst_38076);
} else {
if((state_val_38097 === (5))){
var inst_38073 = (state_38096[(7)]);
var inst_38076 = (state_38096[(8)]);
var inst_38080 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38076,inst_38073);
var state_38096__$1 = state_38096;
if(inst_38080){
var statearr_38109_39302 = state_38096__$1;
(statearr_38109_39302[(1)] = (8));

} else {
var statearr_38110_39307 = state_38096__$1;
(statearr_38110_39307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (10))){
var inst_38088 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
var statearr_38111_39309 = state_38096__$1;
(statearr_38111_39309[(2)] = inst_38088);

(statearr_38111_39309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (8))){
var inst_38073 = (state_38096[(7)]);
var tmp38108 = inst_38073;
var inst_38073__$1 = tmp38108;
var state_38096__$1 = (function (){var statearr_38112 = state_38096;
(statearr_38112[(7)] = inst_38073__$1);

return statearr_38112;
})();
var statearr_38113_39315 = state_38096__$1;
(statearr_38113_39315[(2)] = null);

(statearr_38113_39315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___39280,out))
;
return ((function (switch__36657__auto__,c__36758__auto___39280,out){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_38114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38114[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_38114[(1)] = (1));

return statearr_38114;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_38096){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_38096);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e38115){if((e38115 instanceof Object)){
var ex__36661__auto__ = e38115;
var statearr_38116_39325 = state_38096;
(statearr_38116_39325[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39334 = state_38096;
state_38096 = G__39334;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_38096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_38096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39280,out))
})();
var state__36760__auto__ = (function (){var statearr_38117 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_38117[(6)] = c__36758__auto___39280);

return statearr_38117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39280,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38119 = arguments.length;
switch (G__38119) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36758__auto___39349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39349,out){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39349,out){
return (function (state_38157){
var state_val_38158 = (state_38157[(1)]);
if((state_val_38158 === (7))){
var inst_38153 = (state_38157[(2)]);
var state_38157__$1 = state_38157;
var statearr_38159_39351 = state_38157__$1;
(statearr_38159_39351[(2)] = inst_38153);

(statearr_38159_39351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (1))){
var inst_38120 = (new Array(n));
var inst_38121 = inst_38120;
var inst_38122 = (0);
var state_38157__$1 = (function (){var statearr_38160 = state_38157;
(statearr_38160[(7)] = inst_38122);

(statearr_38160[(8)] = inst_38121);

return statearr_38160;
})();
var statearr_38161_39353 = state_38157__$1;
(statearr_38161_39353[(2)] = null);

(statearr_38161_39353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (4))){
var inst_38125 = (state_38157[(9)]);
var inst_38125__$1 = (state_38157[(2)]);
var inst_38126 = (inst_38125__$1 == null);
var inst_38127 = cljs.core.not(inst_38126);
var state_38157__$1 = (function (){var statearr_38162 = state_38157;
(statearr_38162[(9)] = inst_38125__$1);

return statearr_38162;
})();
if(inst_38127){
var statearr_38163_39355 = state_38157__$1;
(statearr_38163_39355[(1)] = (5));

} else {
var statearr_38164_39356 = state_38157__$1;
(statearr_38164_39356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (15))){
var inst_38147 = (state_38157[(2)]);
var state_38157__$1 = state_38157;
var statearr_38165_39358 = state_38157__$1;
(statearr_38165_39358[(2)] = inst_38147);

(statearr_38165_39358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (13))){
var state_38157__$1 = state_38157;
var statearr_38166_39360 = state_38157__$1;
(statearr_38166_39360[(2)] = null);

(statearr_38166_39360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (6))){
var inst_38122 = (state_38157[(7)]);
var inst_38143 = (inst_38122 > (0));
var state_38157__$1 = state_38157;
if(cljs.core.truth_(inst_38143)){
var statearr_38167_39361 = state_38157__$1;
(statearr_38167_39361[(1)] = (12));

} else {
var statearr_38168_39362 = state_38157__$1;
(statearr_38168_39362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (3))){
var inst_38155 = (state_38157[(2)]);
var state_38157__$1 = state_38157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38157__$1,inst_38155);
} else {
if((state_val_38158 === (12))){
var inst_38121 = (state_38157[(8)]);
var inst_38145 = cljs.core.vec(inst_38121);
var state_38157__$1 = state_38157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38157__$1,(15),out,inst_38145);
} else {
if((state_val_38158 === (2))){
var state_38157__$1 = state_38157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38157__$1,(4),ch);
} else {
if((state_val_38158 === (11))){
var inst_38137 = (state_38157[(2)]);
var inst_38138 = (new Array(n));
var inst_38121 = inst_38138;
var inst_38122 = (0);
var state_38157__$1 = (function (){var statearr_38169 = state_38157;
(statearr_38169[(7)] = inst_38122);

(statearr_38169[(10)] = inst_38137);

(statearr_38169[(8)] = inst_38121);

return statearr_38169;
})();
var statearr_38170_39365 = state_38157__$1;
(statearr_38170_39365[(2)] = null);

(statearr_38170_39365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (9))){
var inst_38121 = (state_38157[(8)]);
var inst_38135 = cljs.core.vec(inst_38121);
var state_38157__$1 = state_38157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38157__$1,(11),out,inst_38135);
} else {
if((state_val_38158 === (5))){
var inst_38130 = (state_38157[(11)]);
var inst_38122 = (state_38157[(7)]);
var inst_38125 = (state_38157[(9)]);
var inst_38121 = (state_38157[(8)]);
var inst_38129 = (inst_38121[inst_38122] = inst_38125);
var inst_38130__$1 = (inst_38122 + (1));
var inst_38131 = (inst_38130__$1 < n);
var state_38157__$1 = (function (){var statearr_38171 = state_38157;
(statearr_38171[(11)] = inst_38130__$1);

(statearr_38171[(12)] = inst_38129);

return statearr_38171;
})();
if(cljs.core.truth_(inst_38131)){
var statearr_38172_39367 = state_38157__$1;
(statearr_38172_39367[(1)] = (8));

} else {
var statearr_38173_39369 = state_38157__$1;
(statearr_38173_39369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (14))){
var inst_38150 = (state_38157[(2)]);
var inst_38151 = cljs.core.async.close_BANG_(out);
var state_38157__$1 = (function (){var statearr_38175 = state_38157;
(statearr_38175[(13)] = inst_38150);

return statearr_38175;
})();
var statearr_38176_39371 = state_38157__$1;
(statearr_38176_39371[(2)] = inst_38151);

(statearr_38176_39371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (10))){
var inst_38141 = (state_38157[(2)]);
var state_38157__$1 = state_38157;
var statearr_38177_39372 = state_38157__$1;
(statearr_38177_39372[(2)] = inst_38141);

(statearr_38177_39372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38158 === (8))){
var inst_38130 = (state_38157[(11)]);
var inst_38121 = (state_38157[(8)]);
var tmp38174 = inst_38121;
var inst_38121__$1 = tmp38174;
var inst_38122 = inst_38130;
var state_38157__$1 = (function (){var statearr_38178 = state_38157;
(statearr_38178[(7)] = inst_38122);

(statearr_38178[(8)] = inst_38121__$1);

return statearr_38178;
})();
var statearr_38179_39381 = state_38157__$1;
(statearr_38179_39381[(2)] = null);

(statearr_38179_39381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___39349,out))
;
return ((function (switch__36657__auto__,c__36758__auto___39349,out){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_38180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38180[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_38180[(1)] = (1));

return statearr_38180;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_38157){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_38157);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e38181){if((e38181 instanceof Object)){
var ex__36661__auto__ = e38181;
var statearr_38182_39385 = state_38157;
(statearr_38182_39385[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39386 = state_38157;
state_38157 = G__39386;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_38157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_38157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39349,out))
})();
var state__36760__auto__ = (function (){var statearr_38183 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_38183[(6)] = c__36758__auto___39349);

return statearr_38183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39349,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38185 = arguments.length;
switch (G__38185) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36758__auto___39388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto___39388,out){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto___39388,out){
return (function (state_38227){
var state_val_38228 = (state_38227[(1)]);
if((state_val_38228 === (7))){
var inst_38223 = (state_38227[(2)]);
var state_38227__$1 = state_38227;
var statearr_38229_39395 = state_38227__$1;
(statearr_38229_39395[(2)] = inst_38223);

(statearr_38229_39395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (1))){
var inst_38186 = [];
var inst_38187 = inst_38186;
var inst_38188 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38227__$1 = (function (){var statearr_38230 = state_38227;
(statearr_38230[(7)] = inst_38188);

(statearr_38230[(8)] = inst_38187);

return statearr_38230;
})();
var statearr_38231_39405 = state_38227__$1;
(statearr_38231_39405[(2)] = null);

(statearr_38231_39405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (4))){
var inst_38191 = (state_38227[(9)]);
var inst_38191__$1 = (state_38227[(2)]);
var inst_38192 = (inst_38191__$1 == null);
var inst_38193 = cljs.core.not(inst_38192);
var state_38227__$1 = (function (){var statearr_38232 = state_38227;
(statearr_38232[(9)] = inst_38191__$1);

return statearr_38232;
})();
if(inst_38193){
var statearr_38233_39418 = state_38227__$1;
(statearr_38233_39418[(1)] = (5));

} else {
var statearr_38234_39423 = state_38227__$1;
(statearr_38234_39423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (15))){
var inst_38217 = (state_38227[(2)]);
var state_38227__$1 = state_38227;
var statearr_38235_39425 = state_38227__$1;
(statearr_38235_39425[(2)] = inst_38217);

(statearr_38235_39425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (13))){
var state_38227__$1 = state_38227;
var statearr_38236_39431 = state_38227__$1;
(statearr_38236_39431[(2)] = null);

(statearr_38236_39431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (6))){
var inst_38187 = (state_38227[(8)]);
var inst_38212 = inst_38187.length;
var inst_38213 = (inst_38212 > (0));
var state_38227__$1 = state_38227;
if(cljs.core.truth_(inst_38213)){
var statearr_38237_39444 = state_38227__$1;
(statearr_38237_39444[(1)] = (12));

} else {
var statearr_38238_39445 = state_38227__$1;
(statearr_38238_39445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (3))){
var inst_38225 = (state_38227[(2)]);
var state_38227__$1 = state_38227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38227__$1,inst_38225);
} else {
if((state_val_38228 === (12))){
var inst_38187 = (state_38227[(8)]);
var inst_38215 = cljs.core.vec(inst_38187);
var state_38227__$1 = state_38227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38227__$1,(15),out,inst_38215);
} else {
if((state_val_38228 === (2))){
var state_38227__$1 = state_38227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38227__$1,(4),ch);
} else {
if((state_val_38228 === (11))){
var inst_38191 = (state_38227[(9)]);
var inst_38195 = (state_38227[(10)]);
var inst_38205 = (state_38227[(2)]);
var inst_38206 = [];
var inst_38207 = inst_38206.push(inst_38191);
var inst_38187 = inst_38206;
var inst_38188 = inst_38195;
var state_38227__$1 = (function (){var statearr_38239 = state_38227;
(statearr_38239[(7)] = inst_38188);

(statearr_38239[(8)] = inst_38187);

(statearr_38239[(11)] = inst_38205);

(statearr_38239[(12)] = inst_38207);

return statearr_38239;
})();
var statearr_38240_39463 = state_38227__$1;
(statearr_38240_39463[(2)] = null);

(statearr_38240_39463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (9))){
var inst_38187 = (state_38227[(8)]);
var inst_38203 = cljs.core.vec(inst_38187);
var state_38227__$1 = state_38227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38227__$1,(11),out,inst_38203);
} else {
if((state_val_38228 === (5))){
var inst_38188 = (state_38227[(7)]);
var inst_38191 = (state_38227[(9)]);
var inst_38195 = (state_38227[(10)]);
var inst_38195__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38191) : f.call(null,inst_38191));
var inst_38196 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38195__$1,inst_38188);
var inst_38197 = cljs.core.keyword_identical_QMARK_(inst_38188,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38198 = ((inst_38196) || (inst_38197));
var state_38227__$1 = (function (){var statearr_38241 = state_38227;
(statearr_38241[(10)] = inst_38195__$1);

return statearr_38241;
})();
if(cljs.core.truth_(inst_38198)){
var statearr_38242_39482 = state_38227__$1;
(statearr_38242_39482[(1)] = (8));

} else {
var statearr_38243_39487 = state_38227__$1;
(statearr_38243_39487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (14))){
var inst_38220 = (state_38227[(2)]);
var inst_38221 = cljs.core.async.close_BANG_(out);
var state_38227__$1 = (function (){var statearr_38245 = state_38227;
(statearr_38245[(13)] = inst_38220);

return statearr_38245;
})();
var statearr_38246_39492 = state_38227__$1;
(statearr_38246_39492[(2)] = inst_38221);

(statearr_38246_39492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (10))){
var inst_38210 = (state_38227[(2)]);
var state_38227__$1 = state_38227;
var statearr_38247_39497 = state_38227__$1;
(statearr_38247_39497[(2)] = inst_38210);

(statearr_38247_39497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (8))){
var inst_38187 = (state_38227[(8)]);
var inst_38191 = (state_38227[(9)]);
var inst_38195 = (state_38227[(10)]);
var inst_38200 = inst_38187.push(inst_38191);
var tmp38244 = inst_38187;
var inst_38187__$1 = tmp38244;
var inst_38188 = inst_38195;
var state_38227__$1 = (function (){var statearr_38248 = state_38227;
(statearr_38248[(7)] = inst_38188);

(statearr_38248[(8)] = inst_38187__$1);

(statearr_38248[(14)] = inst_38200);

return statearr_38248;
})();
var statearr_38249_39499 = state_38227__$1;
(statearr_38249_39499[(2)] = null);

(statearr_38249_39499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__36758__auto___39388,out))
;
return ((function (switch__36657__auto__,c__36758__auto___39388,out){
return (function() {
var cljs$core$async$state_machine__36658__auto__ = null;
var cljs$core$async$state_machine__36658__auto____0 = (function (){
var statearr_38250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38250[(0)] = cljs$core$async$state_machine__36658__auto__);

(statearr_38250[(1)] = (1));

return statearr_38250;
});
var cljs$core$async$state_machine__36658__auto____1 = (function (state_38227){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_38227);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e38251){if((e38251 instanceof Object)){
var ex__36661__auto__ = e38251;
var statearr_38252_39504 = state_38227;
(statearr_38252_39504[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39509 = state_38227;
state_38227 = G__39509;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
cljs$core$async$state_machine__36658__auto__ = function(state_38227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36658__auto____1.call(this,state_38227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36658__auto____0;
cljs$core$async$state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36658__auto____1;
return cljs$core$async$state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto___39388,out))
})();
var state__36760__auto__ = (function (){var statearr_38253 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_38253[(6)] = c__36758__auto___39388);

return statearr_38253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto___39388,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
