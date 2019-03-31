goog.provide('app.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
goog.require('re_frame.core');
app.router.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 8, ["",new cljs.core.Keyword(null,"recipes","recipes",-325236209),"become-a-chef",new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810),"saved/",new cljs.core.Keyword(null,"saved","saved",288760660),"recipes/",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe-id","recipe-id",-512262603)], null),new cljs.core.Keyword(null,"recipe","recipe",-17826617)]),"inbox/",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"inboxes","inboxes",-619615989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inbox-id","inbox-id",-859711618)], null),new cljs.core.Keyword(null,"inbox","inbox",1888669443)]),"profile",new cljs.core.Keyword(null,"profile","profile",-545963874),"sign-up",new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),"log-in",new cljs.core.Keyword(null,"log-in","log-in",526627385)], null)], null);
app.router.history = (function (){var dispatch = (function (p1__25818_SHARP_){
var G__25821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-changed","route-changed",455870141),p1__25818_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25821) : re_frame.core.dispatch.call(null,G__25821));
});
var match = ((function (dispatch){
return (function (p1__25819_SHARP_){
return bidi.bidi.match_route(app.router.routes,p1__25819_SHARP_);
});})(dispatch))
;
return pushy.core.pushy(dispatch,match);
})();
app.router.start_BANG_ = (function app$router$start_BANG_(){
return app.router.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
app.router.path_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,app.router.routes);
app.router.set_token_BANG_ = (function app$router$set_token_BANG_(token){
return app.router.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,token);
});

//# sourceMappingURL=app.router.js.map
