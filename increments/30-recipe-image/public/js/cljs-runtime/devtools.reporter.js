goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
goog.require('devtools.context');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23764 = arguments.length;
var i__4731__auto___23765 = (0);
while(true){
if((i__4731__auto___23765 < len__4730__auto___23764)){
args__4736__auto__.push((arguments[i__4731__auto___23765]));

var G__23766 = (i__4731__auto___23765 + (1));
i__4731__auto___23765 = G__23766;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__23741){
var vec__23742 = p__23741;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23742,(0),null);
var footer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23742,(1),null);
var console = (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null));
try{var message = (((e instanceof Error))?(function (){var or__4131__auto__ = e.message;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info(),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console["groupCollapsed"]);
var log = (console["log"]);
var group_end = (console["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console,header);

log.apply(console,details);

return group_end.call(console);
}catch (e23746){var e__$1 = e23746;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq23733){
var G__23734 = cljs.core.first(seq23733);
var seq23733__$1 = cljs.core.next(seq23733);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23734,seq23733__$1);
});


//# sourceMappingURL=devtools.reporter.js.map
