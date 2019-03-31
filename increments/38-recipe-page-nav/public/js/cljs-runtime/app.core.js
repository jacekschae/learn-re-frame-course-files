goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('app.db');
goog.require('app.router');
goog.require('app.auth.views.profile');
goog.require('app.auth.views.sign_up');
goog.require('app.auth.views.log_in');
goog.require('app.auth.events');
goog.require('app.auth.subs');
goog.require('app.become_a_chef.views.become_a_chef');
goog.require('app.inbox.views.inboxes');
goog.require('app.nav.views.nav');
goog.require('app.nav.events');
goog.require('app.nav.subs');
goog.require('app.recipes.views.recipes_page');
goog.require('app.recipes.views.recipe_page');
goog.require('app.recipes.subs');
goog.require('app.recipes.events');
goog.require('app.theme');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.core.pages = (function app$core$pages(page_name){
var G__26386 = page_name;
var G__26386__$1 = (((G__26386 instanceof cljs.core.Keyword))?G__26386.fqn:null);
switch (G__26386__$1) {
case "profile":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.views.profile.profile], null);

break;
case "sign-up":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.views.sign_up.sign_up], null);

break;
case "log-in":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.auth.views.log_in.log_in], null);

break;
case "become-a-chef":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.become_a_chef.views.become_a_chef.become_a_chef], null);

break;
case "inboxes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.inbox.views.inboxes.inboxes], null);

break;
case "recipes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.recipes.views.recipes_page.recipes_page], null);

break;
case "recipe":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.recipes.views.recipe_page.recipe_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.recipes.views.recipes_page.recipes_page], null);

}
});
app.core.app = (function app$core$app(){
var active_page = cljs.core.deref((function (){var G__26387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26387) : re_frame.core.subscribe.call(null,G__26387));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Normalize], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),app.theme.cheffy_theme], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fluid","fluid",-1823657759),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Col,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav.nav], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.pages,active_page], null)], null)], null)], null)], null)], null);
});
app.core.start = (function app$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app], null),document.getElementById("app"));
});
app.core.init = (function app$core$init(){
app.router.start_BANG_();

var G__26388_26390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26388_26390) : re_frame.core.dispatch_sync.call(null,G__26388_26390));

return app.core.start();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
