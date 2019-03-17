goog.provide('app.auth.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__25918_25924 = new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089);
var G__25919_25925 = ((function (G__25918_25924){
return (function (db,_){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
});})(G__25918_25924))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25918_25924,G__25919_25925) : re_frame.core.reg_sub.call(null,G__25918_25924,G__25919_25925));
var G__25920_25927 = new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313);
var G__25921_25928 = ((function (G__25920_25927){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
});})(G__25920_25927))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25920_25927,G__25921_25928) : re_frame.core.reg_sub.call(null,G__25920_25927,G__25921_25928));
var G__25922_25929 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__25923_25930 = ((function (G__25922_25929){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid], null));
});})(G__25922_25929))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25922_25929,G__25923_25930) : re_frame.core.reg_sub.call(null,G__25922_25929,G__25923_25930));

//# sourceMappingURL=app.auth.subs.js.map
