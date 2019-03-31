goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__40213 = h;
G__40213.setUseFragment(false);

G__40213.setPathPrefix("");

G__40213.setEnabled(true);

return G__40213;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__40216 = arguments.length;
switch (G__40216) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1(pushy.core.set_create_url_BANG_(pushy.core.set_retrieve_token_BANG_((new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_((new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__40223 = arguments.length;
switch (G__40223) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4434__auto__.call(null,this$,token));
} else {
var m__4431__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4431__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4434__auto__.call(null,this$,token,title));
} else {
var m__4431__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4431__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__40270 = arguments.length;
switch (G__40270) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4434__auto__.call(null,this$,token));
} else {
var m__4431__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4431__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4434__auto__.call(null,this$,token,title));
} else {
var m__4431__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4431__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.get_token[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (pushy.core.get_token["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (pushy.core.start_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (pushy.core.stop_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40674 = arguments.length;
var i__4731__auto___40675 = (0);
while(true){
if((i__4731__auto___40675 < len__4730__auto___40674)){
args__4736__auto__.push((arguments[i__4731__auto___40675]));

var G__40677 = (i__4731__auto___40675 + (1));
i__4731__auto___40675 = G__40677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__40324){
var map__40325 = p__40324;
var map__40325__$1 = (((((!((map__40325 == null))))?(((((map__40325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40325):map__40325);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40325__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40325__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40325__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly(false));
var history = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core40327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core40327 = (function (dispatch_fn,match_fn,p__40324,map__40325,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,meta40328){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__40324 = p__40324;
this.map__40325 = map__40325;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.history = history;
this.event_keys = event_keys;
this.meta40328 = meta40328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core40327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_40329,meta40328__$1){
var self__ = this;
var _40329__$1 = this;
return (new pushy.core.t_pushy$core40327(self__.dispatch_fn,self__.match_fn,self__.p__40324,self__.map__40325,self__.processable_url_QMARK_,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.history,self__.event_keys,meta40328__$1));
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_40329){
var self__ = this;
var _40329__$1 = this;
return self__.meta40328;
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,(function (){var G__40333 = self__.history;
var G__40334 = goog.history.EventType.NAVIGATE;
var G__40335 = ((function (G__40333,G__40334,this$__$1,history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5457__auto__ = (function (){var G__40336 = (function (){var G__40337 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__40337) : self__.match_fn.call(null,G__40337));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__40336) : self__.identity_fn.call(null,G__40336));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
});})(G__40333,G__40334,this$__$1,history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;
return goog.events.listen(G__40333,G__40334,G__40335);
})());

var temp__5457__auto___40734 = (function (){var G__40341 = (function (){var G__40342 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__40342) : self__.match_fn.call(null,G__40342));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__40341) : self__.identity_fn.call(null,G__40341));
})();
if(cljs.core.truth_(temp__5457__auto___40734)){
var match_40735 = temp__5457__auto___40734;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_40735) : self__.dispatch_fn.call(null,match_40735));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click(((function (this$__$1,history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5457__auto__ = (function (){var G__40346 = e;
var G__40346__$1 = (((G__40346 == null))?null:G__40346.target);
if((G__40346__$1 == null)){
return null;
} else {
return G__40346__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4120__auto__ = (self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1(uri) : self__.processable_url_QMARK_.call(null,uri));
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not(e.altKey)) && (cljs.core.not(e.ctrlKey)) && (cljs.core.not(e.metaKey)) && (cljs.core.not(e.shiftKey)) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (((cljs.core.not(el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.getAttribute("data-pushy-ignore"),"false")))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)));
} else {
return and__4120__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri(uri);
if(cljs.core.truth_((function (){var G__40416 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__40416) : self__.identity_fn.call(null,G__40416));
})())){
var temp__5455__auto___40736 = el.title;
if(cljs.core.truth_(temp__5455__auto___40736)){
var title_40737 = temp__5455__auto___40736;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_40737);
} else {
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$2(null,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_((self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1(next_token) : self__.prevent_default_when_no_match_QMARK_.call(null,next_token)))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

return null;
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__40425_40739 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__40426_40740 = null;
var count__40427_40741 = (0);
var i__40428_40742 = (0);
while(true){
if((i__40428_40742 < count__40427_40741)){
var key_40748 = chunk__40426_40740.cljs$core$IIndexed$_nth$arity$2(null,i__40428_40742);
goog.events.unlistenByKey(key_40748);


var G__40749 = seq__40425_40739;
var G__40750 = chunk__40426_40740;
var G__40751 = count__40427_40741;
var G__40752 = (i__40428_40742 + (1));
seq__40425_40739 = G__40749;
chunk__40426_40740 = G__40750;
count__40427_40741 = G__40751;
i__40428_40742 = G__40752;
continue;
} else {
var temp__5457__auto___40753 = cljs.core.seq(seq__40425_40739);
if(temp__5457__auto___40753){
var seq__40425_40754__$1 = temp__5457__auto___40753;
if(cljs.core.chunked_seq_QMARK_(seq__40425_40754__$1)){
var c__4550__auto___40755 = cljs.core.chunk_first(seq__40425_40754__$1);
var G__40756 = cljs.core.chunk_rest(seq__40425_40754__$1);
var G__40757 = c__4550__auto___40755;
var G__40758 = cljs.core.count(c__4550__auto___40755);
var G__40759 = (0);
seq__40425_40739 = G__40756;
chunk__40426_40740 = G__40757;
count__40427_40741 = G__40758;
i__40428_40742 = G__40759;
continue;
} else {
var key_40760 = cljs.core.first(seq__40425_40754__$1);
goog.events.unlistenByKey(key_40760);


var G__40761 = cljs.core.next(seq__40425_40754__$1);
var G__40762 = null;
var G__40763 = (0);
var G__40764 = (0);
seq__40425_40739 = G__40761;
chunk__40426_40740 = G__40762;
count__40427_40741 = G__40763;
i__40428_40742 = G__40764;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.getBasis = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__40324","p__40324",-567467317,null),new cljs.core.Symbol(null,"map__40325","map__40325",-836796616,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta40328","meta40328",1452322844,null)], null);
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core40327.cljs$lang$type = true;

pushy.core.t_pushy$core40327.cljs$lang$ctorStr = "pushy.core/t_pushy$core40327";

pushy.core.t_pushy$core40327.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"pushy.core/t_pushy$core40327");
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

/**
 * Positional factory function for pushy.core/t_pushy$core40327.
 */
pushy.core.__GT_t_pushy$core40327 = ((function (history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function pushy$core$__GT_t_pushy$core40327(dispatch_fn__$1,match_fn__$1,p__40324__$1,map__40325__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta40328){
return (new pushy.core.t_pushy$core40327(dispatch_fn__$1,match_fn__$1,p__40324__$1,map__40325__$2,processable_url_QMARK___$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,history__$1,event_keys__$1,meta40328));
});})(history,event_keys,map__40325,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

}

return (new pushy.core.t_pushy$core40327(dispatch_fn,match_fn,p__40324,map__40325__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
pushy.core.pushy.cljs$lang$applyTo = (function (seq40316){
var G__40317 = cljs.core.first(seq40316);
var seq40316__$1 = cljs.core.next(seq40316);
var G__40318 = cljs.core.first(seq40316__$1);
var seq40316__$2 = cljs.core.next(seq40316__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40317,G__40318,seq40316__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__40477 = arguments.length;
switch (G__40477) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1(window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__40499 = arguments.length;
switch (G__40499) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3(dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(dispatch_fn,match_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn], 0));
h.pushy$core$IHistory$start_BANG_$arity$1(null);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=pushy.core.js.map
