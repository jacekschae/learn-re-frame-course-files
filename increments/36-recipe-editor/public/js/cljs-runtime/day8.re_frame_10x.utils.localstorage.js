goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33748 = arguments.length;
switch (G__33748) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33764 = cljs.core.seq(Object.keys(localStorage));
var chunk__33765 = null;
var count__33766 = (0);
var i__33767 = (0);
while(true){
if((i__33767 < count__33766)){
var k = chunk__33765.cljs$core$IIndexed$_nth$arity$2(null,i__33767);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33795 = seq__33764;
var G__33796 = chunk__33765;
var G__33797 = count__33766;
var G__33798 = (i__33767 + (1));
seq__33764 = G__33795;
chunk__33765 = G__33796;
count__33766 = G__33797;
i__33767 = G__33798;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33764);
if(temp__5457__auto__){
var seq__33764__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33764__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33764__$1);
var G__33801 = cljs.core.chunk_rest(seq__33764__$1);
var G__33802 = c__4550__auto__;
var G__33803 = cljs.core.count(c__4550__auto__);
var G__33804 = (0);
seq__33764 = G__33801;
chunk__33765 = G__33802;
count__33766 = G__33803;
i__33767 = G__33804;
continue;
} else {
var k = cljs.core.first(seq__33764__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33808 = cljs.core.next(seq__33764__$1);
var G__33809 = null;
var G__33810 = (0);
var G__33811 = (0);
seq__33764 = G__33808;
chunk__33765 = G__33809;
count__33766 = G__33810;
i__33767 = G__33811;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
