goog.provide('app.auth.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__25885_25899 = new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089);
var G__25886_25900 = ((function (G__25885_25899){
return (function (db,_){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
});})(G__25885_25899))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25885_25899,G__25886_25900) : re_frame.core.reg_sub.call(null,G__25885_25899,G__25886_25900));
var G__25891_25901 = new cljs.core.Keyword(null,"active-user-profile","active-user-profile",1098919566);
var G__25892_25902 = ((function (G__25891_25901){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
});})(G__25891_25901))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25891_25901,G__25892_25902) : re_frame.core.reg_sub.call(null,G__25891_25901,G__25892_25902));

//# sourceMappingURL=app.auth.subs.js.map
