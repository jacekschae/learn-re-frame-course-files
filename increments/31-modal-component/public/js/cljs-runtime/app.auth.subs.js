goog.provide('app.auth.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__25918_25928 = new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089);
var G__25919_25929 = ((function (G__25918_25928){
return (function (db,_){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
});})(G__25918_25928))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25918_25928,G__25919_25929) : re_frame.core.reg_sub.call(null,G__25918_25928,G__25919_25929));
var G__25920_25930 = new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313);
var G__25921_25931 = ((function (G__25920_25930){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null));
});})(G__25920_25930))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25920_25930,G__25921_25931) : re_frame.core.reg_sub.call(null,G__25920_25930,G__25921_25931));
var G__25924_25932 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__25925_25933 = ((function (G__25924_25932){
return (function (db,_){
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid], null));
});})(G__25924_25932))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25924_25932,G__25925_25933) : re_frame.core.reg_sub.call(null,G__25924_25932,G__25925_25933));

//# sourceMappingURL=app.auth.subs.js.map
