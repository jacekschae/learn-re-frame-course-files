goog.provide('app.recipes.views.recipe_info');
goog.require('cljs.core');
goog.require('re_frame.core');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
var module$node_modules$styled_icons$fa_solid$Heart=shadow.js.require("module$node_modules$styled_icons$fa_solid$Heart", {});
var module$node_modules$styled_icons$fa_regular$Clock=shadow.js.require("module$node_modules$styled_icons$fa_regular$Clock", {});
var module$node_modules$styled_icons$fa_regular$Heart=shadow.js.require("module$node_modules$styled_icons$fa_regular$Heart", {});
app.recipes.views.recipe_info.recipe_info = (function app$recipes$views$recipe_info$recipe_info(){
var map__26052 = cljs.core.deref((function (){var G__26054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipe","recipe",-17826617)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26054) : re_frame.core.subscribe.call(null,G__26054));
})());
var map__26052__$1 = (((((!((map__26052 == null))))?(((((map__26052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26052):map__26052);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var cook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"cook","cook",1825923808));
var saved_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"saved-count","saved-count",1526301101));
var prep_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26052__$1,new cljs.core.Keyword(null,"prep-time","prep-time",-2097570172));
var map__26053 = cljs.core.deref((function (){var G__26056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26056) : re_frame.core.subscribe.call(null,G__26056));
})());
var map__26053__$1 = (((((!((map__26053 == null))))?(((((map__26053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26053):map__26053);
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26053__$1,new cljs.core.Keyword(null,"saved","saved",288760660));
var logged_in_QMARK_ = cljs.core.deref((function (){var G__26058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26058) : re_frame.core.subscribe.call(null,G__26058));
})());
var saved_QMARK_ = cljs.core.contains_QMARK_(saved,id);
var author_QMARK_ = (function (){var G__26059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author?","author?",-1083349935)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26059) : re_frame.core.subscribe.call(null,G__26059));
})();
var can_save_QMARK_ = (function (){var and__4120__auto__ = logged_in_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not(author_QMARK_)) && ((!(saved_QMARK_))));
} else {
return and__4120__auto__;
}
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h5"], null),cook], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),((saved_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_solid$Heart.Heart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),"#D64545"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),(cljs.core.truth_(can_save_QMARK_)?"a":"span"),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(can_save_QMARK_)?((function (map__26052,map__26052__$1,id,cook,saved_count,prep_time,map__26053,map__26053__$1,saved,logged_in_QMARK_,saved_QMARK_,author_QMARK_,can_save_QMARK_){
return (function (){
var G__26060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-recipe","save-recipe",1451304654),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26060) : re_frame.core.dispatch.call(null,G__26060));
});})(map__26052,map__26052__$1,id,cook,saved_count,prep_time,map__26053,map__26053__$1,saved,logged_in_QMARK_,saved_QMARK_,author_QMARK_,can_save_QMARK_))
:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_regular$Heart.Heart,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pl","pl",-1690940563),(10)], null),saved_count], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"pl","pl",-1690940563),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$styled_icons$fa_regular$Clock.Clock,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pl","pl",-1690940563),(10)], null),prep_time," min"], null)], null)], null)], null);
});

//# sourceMappingURL=app.recipes.views.recipe_info.js.map
