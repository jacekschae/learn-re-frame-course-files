goog.provide('app.auth.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__25894_25906 = new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089);
var G__25895_25907 = ((function (G__25894_25906){
return (function (db,_){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
});})(G__25894_25906))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25894_25906,G__25895_25907) : re_frame.core.reg_sub.call(null,G__25894_25906,G__25895_25907));
var G__25896_25910 = new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313);
var G__25897_25911 = ((function (G__25896_25910){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
});})(G__25896_25910))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25896_25910,G__25897_25911) : re_frame.core.reg_sub.call(null,G__25896_25910,G__25897_25911));
var G__25902_25914 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__25903_25915 = ((function (G__25902_25914){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid], null));
});})(G__25902_25914))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25902_25914,G__25903_25915) : re_frame.core.reg_sub.call(null,G__25902_25914,G__25903_25915));

//# sourceMappingURL=app.auth.subs.js.map
