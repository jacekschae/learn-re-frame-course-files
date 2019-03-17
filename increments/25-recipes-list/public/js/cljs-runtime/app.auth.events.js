goog.provide('app.auth.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.reader');
app.auth.events.cheffy_user_key = "cheffy-user";
app.auth.events.set_user_ls_BANG_ = (function app$auth$events$set_user_ls_BANG_(p__25844){
var map__25845 = p__25844;
var map__25845__$1 = (((((!((map__25845 == null))))?(((((map__25845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25845):map__25845);
var auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25845__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
if(cljs.core.truth_(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(auth))){
return localStorage.setItem(app.auth.events.cheffy_user_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth));
} else {
return null;
}
});
app.auth.events.remove_user_ls_BANG_ = (function app$auth$events$remove_user_ls_BANG_(){
return localStorage.removeItem(app.auth.events.cheffy_user_key);
});
app.auth.events.set_user_interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(app.auth.events.set_user_ls_BANG_) : re_frame.core.after.call(null,app.auth.events.set_user_ls_BANG_))], null);
app.auth.events.remove_user_interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(app.auth.events.remove_user_ls_BANG_) : re_frame.core.after.call(null,app.auth.events.remove_user_ls_BANG_))], null);
var G__25853_25919 = new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699);
var G__25854_25920 = ((function (G__25853_25919){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(app.auth.events.cheffy_user_key)));
});})(G__25853_25919))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__25853_25919,G__25854_25920) : re_frame.core.reg_cofx.call(null,G__25853_25919,G__25854_25920));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),app.auth.events.set_user_interceptors,(function (p__25861,p__25862){
var map__25863 = p__25861;
var map__25863__$1 = (((((!((map__25863 == null))))?(((((map__25863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25863):map__25863);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25863__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25864 = p__25862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25864,(0),null);
var map__25867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25864,(1),null);
var map__25867__$1 = (((((!((map__25867 == null))))?(((((map__25867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25867):map__25867);
var first_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25867__$1,new cljs.core.Keyword(null,"first-name","first-name",-1559982131));
var last_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25867__$1,new cljs.core.Keyword(null,"last-name","last-name",-1695738974));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25867__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25867__$1,new cljs.core.Keyword(null,"password","password",417022471));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),email),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),email], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),email,new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),first_name,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),last_name,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"img","img",1442687358),"img/avatar.jpg"], null),new cljs.core.Keyword(null,"saved","saved",288760660),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"saved","saved",288760660)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/saved"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log-in","log-in",526627385),app.auth.events.set_user_interceptors,(function (p__25885,p__25886){
var map__25887 = p__25885;
var map__25887__$1 = (((((!((map__25887 == null))))?(((((map__25887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25887):map__25887);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25887__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25888 = p__25886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25888,(0),null);
var map__25891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25888,(1),null);
var map__25891__$1 = (((((!((map__25891 == null))))?(((((map__25891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25891):map__25891);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,new cljs.core.Keyword(null,"password","password",417022471));
var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),email], null));
var correct_password_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"password","password",417022471)], null)),password);
if(cljs.core.not(user)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"email","email",1415816706)], null),"User not found")], null);
} else {
if((!(correct_password_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"email","email",1415816706)], null),"Wrong password")], null);
} else {
if(correct_password_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),email),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"email","email",1415816706)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"saved","saved",288760660)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/saved"], null)], null);
} else {
return null;
}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log-out","log-out",-2094664701),app.auth.events.remove_user_interceptors,(function (p__25901,_){
var map__25902 = p__25901;
var map__25902__$1 = (((((!((map__25902 == null))))?(((((map__25902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25902):map__25902);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25902__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/recipes"], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-profile","update-profile",1458083625),(function (db,p__25908){
var vec__25909 = p__25908;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909,(0),null);
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25909,(1),null);
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"profile","profile",-545963874)], null),cljs.core.merge,cljs.core.select_keys(profile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),new cljs.core.Keyword(null,"last-name","last-name",-1695738974)], null)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"delete-account","delete-account",725157341),app.auth.events.remove_user_interceptors,(function (p__25912,_){
var map__25913 = p__25912;
var map__25913__$1 = (((((!((map__25913 == null))))?(((((map__25913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25913):map__25913);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),cljs.core.dissoc,uid),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/recipes"], null)], null);
}));

//# sourceMappingURL=app.auth.events.js.map
