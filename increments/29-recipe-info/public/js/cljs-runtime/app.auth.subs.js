goog.provide('app.auth.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__27565_27569 = new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089);
var G__27566_27570 = ((function (G__27565_27569){
return (function (db,_){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
});})(G__27565_27569))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27565_27569,G__27566_27570) : re_frame.core.reg_sub.call(null,G__27565_27569,G__27566_27570));
var G__27567_27573 = new cljs.core.Keyword(null,"active-user-profile","active-user-profile",1098919566);
var G__27568_27574 = ((function (G__27567_27573){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
});})(G__27567_27573))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27567_27573,G__27568_27574) : re_frame.core.reg_sub.call(null,G__27567_27573,G__27568_27574));

//# sourceMappingURL=app.auth.subs.js.map
