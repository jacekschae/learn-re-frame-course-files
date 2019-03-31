goog.provide('app.auth.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__26426_26432 = new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089);
var G__26427_26433 = ((function (G__26426_26432){
return (function (db,_){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
});})(G__26426_26432))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26426_26432,G__26427_26433) : re_frame.core.reg_sub.call(null,G__26426_26432,G__26427_26433));
var G__26428_26434 = new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313);
var G__26429_26435 = ((function (G__26428_26434){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
});})(G__26428_26434))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26428_26434,G__26429_26435) : re_frame.core.reg_sub.call(null,G__26428_26434,G__26429_26435));
var G__26430_26436 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__26431_26437 = ((function (G__26430_26436){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid], null));
});})(G__26430_26436))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26430_26436,G__26431_26437) : re_frame.core.reg_sub.call(null,G__26430_26436,G__26431_26437));

//# sourceMappingURL=app.auth.subs.js.map
