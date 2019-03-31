goog.provide('app.auth.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__26352_26361 = new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089);
var G__26353_26362 = ((function (G__26352_26361){
return (function (db,_){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
});})(G__26352_26361))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26352_26361,G__26353_26362) : re_frame.core.reg_sub.call(null,G__26352_26361,G__26353_26362));
var G__26357_26363 = new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313);
var G__26358_26364 = ((function (G__26357_26363){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
});})(G__26357_26363))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26357_26363,G__26358_26364) : re_frame.core.reg_sub.call(null,G__26357_26363,G__26358_26364));
var G__26359_26365 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__26360_26366 = ((function (G__26359_26365){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid], null));
});})(G__26359_26365))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26359_26365,G__26360_26366) : re_frame.core.reg_sub.call(null,G__26359_26365,G__26360_26366));

//# sourceMappingURL=app.auth.subs.js.map
