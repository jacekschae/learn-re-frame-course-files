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
var G__33758 = arguments.length;
switch (G__33758) {
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
var seq__33760 = cljs.core.seq(Object.keys(localStorage));
var chunk__33761 = null;
var count__33762 = (0);
var i__33763 = (0);
while(true){
if((i__33763 < count__33762)){
var k = chunk__33761.cljs$core$IIndexed$_nth$arity$2(null,i__33763);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33803 = seq__33760;
var G__33804 = chunk__33761;
var G__33805 = count__33762;
var G__33806 = (i__33763 + (1));
seq__33760 = G__33803;
chunk__33761 = G__33804;
count__33762 = G__33805;
i__33763 = G__33806;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33760);
if(temp__5457__auto__){
var seq__33760__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33760__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33760__$1);
var G__33811 = cljs.core.chunk_rest(seq__33760__$1);
var G__33812 = c__4550__auto__;
var G__33813 = cljs.core.count(c__4550__auto__);
var G__33814 = (0);
seq__33760 = G__33811;
chunk__33761 = G__33812;
count__33762 = G__33813;
i__33763 = G__33814;
continue;
} else {
var k = cljs.core.first(seq__33760__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33821 = cljs.core.next(seq__33760__$1);
var G__33822 = null;
var G__33823 = (0);
var G__33824 = (0);
seq__33760 = G__33821;
chunk__33761 = G__33822;
count__33762 = G__33823;
i__33763 = G__33824;
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
