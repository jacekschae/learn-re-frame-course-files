goog.provide('app.nav.views.nav');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.nav.views.authenticated');
goog.require('app.nav.views.public$');
app.nav.views.nav.nav = (function app$nav$views$nav$nav(){
var logged_in_QMARK_ = cljs.core.deref((function (){var G__26046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26046) : re_frame.core.subscribe.call(null,G__26046));
})());
if(cljs.core.truth_(logged_in_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.authenticated.authenticated], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.public$.public$], null);
}
});

//# sourceMappingURL=app.nav.views.nav.js.map
