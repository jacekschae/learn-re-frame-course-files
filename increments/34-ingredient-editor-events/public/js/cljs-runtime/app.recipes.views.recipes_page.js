goog.provide('app.recipes.views.recipes_page');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.components.page_nav');
goog.require('app.recipes.views.recipe_list');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.recipes.views.recipes_page.recipes_page = (function app$recipes$views$recipes_page$recipes_page(){
var public$ = cljs.core.deref((function (){var G__26081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"public","public",1566243851)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26081) : re_frame.core.subscribe.call(null,G__26081));
})());
var drafts = cljs.core.deref((function (){var G__26082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26082) : re_frame.core.subscribe.call(null,G__26082));
})());
var logged_in_QMARK_ = cljs.core.deref((function (){var G__26083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26083) : re_frame.core.subscribe.call(null,G__26083));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.page_nav.page_nav,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center","center",-748944368),"Recipes"], null)], null),((cljs.core.seq(drafts))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4",new cljs.core.Keyword(null,"py","py",1397985916),(20),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700)], null),"Drafts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.recipes.views.recipe_list.recipe_list,drafts], null)], null):null),(cljs.core.truth_(logged_in_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4",new cljs.core.Keyword(null,"py","py",1397985916),(20),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700)], null),"Public"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.recipes.views.recipe_list.recipe_list,public$], null)], null);
});

//# sourceMappingURL=app.recipes.views.recipes_page.js.map
