goog.provide('app.become_a_chef.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"agree-to-cook","agree-to-cook",188697388),(function (p__25971,_){
var map__25972 = p__25971;
var map__25972__$1 = (((((!((map__25972 == null))))?(((((map__25972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25972):map__25972);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25972__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uid = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),uid,new cljs.core.Keyword(null,"role","role",-736691072)], null),new cljs.core.Keyword(null,"chef","chef",-1931823886)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null)], null),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"/recipes"], null)], null);
}));

//# sourceMappingURL=app.become_a_chef.events.js.map
