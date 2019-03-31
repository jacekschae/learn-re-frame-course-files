goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__36758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto__,req){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto__,req){
return (function (state_40407){
var state_val_40408 = (state_40407[(1)]);
if((state_val_40408 === (7))){
var state_40407__$1 = state_40407;
var statearr_40409_40665 = state_40407__$1;
(statearr_40409_40665[(2)] = false);

(statearr_40409_40665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (1))){
var state_40407__$1 = state_40407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40407__$1,(2),req);
} else {
if((state_val_40408 === (4))){
var inst_40371 = (state_40407[(7)]);
var inst_40377 = (inst_40371 == null);
var inst_40378 = cljs.core.not(inst_40377);
var state_40407__$1 = state_40407;
if(inst_40378){
var statearr_40410_40666 = state_40407__$1;
(statearr_40410_40666[(1)] = (6));

} else {
var statearr_40411_40667 = state_40407__$1;
(statearr_40411_40667[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (15))){
var state_40407__$1 = state_40407;
var statearr_40412_40668 = state_40407__$1;
(statearr_40412_40668[(2)] = null);

(statearr_40412_40668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (13))){
var inst_40371 = (state_40407[(7)]);
var state_40407__$1 = state_40407;
var statearr_40413_40669 = state_40407__$1;
(statearr_40413_40669[(2)] = inst_40371);

(statearr_40413_40669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (6))){
var inst_40371 = (state_40407[(7)]);
var inst_40380 = inst_40371.cljs$lang$protocol_mask$partition0$;
var inst_40381 = (inst_40380 & (64));
var inst_40382 = inst_40371.cljs$core$ISeq$;
var inst_40383 = (cljs.core.PROTOCOL_SENTINEL === inst_40382);
var inst_40384 = ((inst_40381) || (inst_40383));
var state_40407__$1 = state_40407;
if(cljs.core.truth_(inst_40384)){
var statearr_40414_40670 = state_40407__$1;
(statearr_40414_40670[(1)] = (9));

} else {
var statearr_40415_40671 = state_40407__$1;
(statearr_40415_40671[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (17))){
var inst_40403 = (state_40407[(2)]);
var state_40407__$1 = state_40407;
var statearr_40417_40672 = state_40407__$1;
(statearr_40417_40672[(2)] = inst_40403);

(statearr_40417_40672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (3))){
var state_40407__$1 = state_40407;
var statearr_40422_40673 = state_40407__$1;
(statearr_40422_40673[(2)] = null);

(statearr_40422_40673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (12))){
var inst_40371 = (state_40407[(7)]);
var inst_40393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40371);
var state_40407__$1 = state_40407;
var statearr_40424_40676 = state_40407__$1;
(statearr_40424_40676[(2)] = inst_40393);

(statearr_40424_40676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (2))){
var inst_40371 = (state_40407[(7)]);
var inst_40371__$1 = (state_40407[(2)]);
var inst_40372 = (inst_40371__$1 == null);
var state_40407__$1 = (function (){var statearr_40436 = state_40407;
(statearr_40436[(7)] = inst_40371__$1);

return statearr_40436;
})();
if(cljs.core.truth_(inst_40372)){
var statearr_40438_40678 = state_40407__$1;
(statearr_40438_40678[(1)] = (3));

} else {
var statearr_40439_40679 = state_40407__$1;
(statearr_40439_40679[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (11))){
var inst_40388 = (state_40407[(2)]);
var state_40407__$1 = state_40407;
var statearr_40440_40680 = state_40407__$1;
(statearr_40440_40680[(2)] = inst_40388);

(statearr_40440_40680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (9))){
var state_40407__$1 = state_40407;
var statearr_40446_40681 = state_40407__$1;
(statearr_40446_40681[(2)] = true);

(statearr_40446_40681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (5))){
var inst_40405 = (state_40407[(2)]);
var state_40407__$1 = state_40407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40407__$1,inst_40405);
} else {
if((state_val_40408 === (14))){
var inst_40396 = (state_40407[(8)]);
var inst_40396__$1 = (state_40407[(2)]);
var inst_40397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40396__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_40398 = (inst_40397 === (0));
var state_40407__$1 = (function (){var statearr_40453 = state_40407;
(statearr_40453[(8)] = inst_40396__$1);

return statearr_40453;
})();
if(cljs.core.truth_(inst_40398)){
var statearr_40454_40682 = state_40407__$1;
(statearr_40454_40682[(1)] = (15));

} else {
var statearr_40456_40683 = state_40407__$1;
(statearr_40456_40683[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (16))){
var inst_40396 = (state_40407[(8)]);
var inst_40401 = console.warn("file open failed",inst_40396);
var state_40407__$1 = state_40407;
var statearr_40460_40688 = state_40407__$1;
(statearr_40460_40688[(2)] = inst_40401);

(statearr_40460_40688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (10))){
var state_40407__$1 = state_40407;
var statearr_40461_40690 = state_40407__$1;
(statearr_40461_40690[(2)] = false);

(statearr_40461_40690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40408 === (8))){
var inst_40391 = (state_40407[(2)]);
var state_40407__$1 = state_40407;
if(cljs.core.truth_(inst_40391)){
var statearr_40462_40691 = state_40407__$1;
(statearr_40462_40691[(1)] = (12));

} else {
var statearr_40464_40692 = state_40407__$1;
(statearr_40464_40692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36758__auto__,req))
;
return ((function (switch__36657__auto__,c__36758__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto____0 = (function (){
var statearr_40466 = [null,null,null,null,null,null,null,null,null];
(statearr_40466[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto__);

(statearr_40466[(1)] = (1));

return statearr_40466;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto____1 = (function (state_40407){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_40407);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e40467){if((e40467 instanceof Object)){
var ex__36661__auto__ = e40467;
var statearr_40468_40693 = state_40407;
(statearr_40468_40693[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40694 = state_40407;
state_40407 = G__40694;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto__ = function(state_40407){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto____1.call(this,state_40407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto__,req))
})();
var state__36760__auto__ = (function (){var statearr_40469 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_40469[(6)] = c__36758__auto__);

return statearr_40469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto__,req))
);

return c__36758__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__40471 = arguments.length;
switch (G__40471) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___40696 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___40696 == null)){
} else {
var x_40697 = temp__5461__auto___40696;
shadow.dom.remove(x_40697);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__36758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__36758__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__36759__auto__ = (function (){var switch__36657__auto__ = ((function (c__36758__auto__,el,container_el,temp__5461__auto__){
return (function (state_40516){
var state_val_40517 = (state_40516[(1)]);
if((state_val_40517 === (1))){
var inst_40504 = cljs.core.async.timeout((250));
var state_40516__$1 = state_40516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40516__$1,(2),inst_40504);
} else {
if((state_val_40517 === (2))){
var inst_40506 = (state_40516[(2)]);
var inst_40507 = [el];
var inst_40508 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_40509 = [inst_40508];
var inst_40510 = cljs.core.PersistentHashMap.fromArrays(inst_40507,inst_40509);
var inst_40511 = shadow.animate.start((250),inst_40510);
var state_40516__$1 = (function (){var statearr_40520 = state_40516;
(statearr_40520[(7)] = inst_40506);

return statearr_40520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40516__$1,(3),inst_40511);
} else {
if((state_val_40517 === (3))){
var inst_40513 = (state_40516[(2)]);
var inst_40514 = shadow.dom.remove(container_el);
var state_40516__$1 = (function (){var statearr_40524 = state_40516;
(statearr_40524[(8)] = inst_40513);

return statearr_40524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40516__$1,inst_40514);
} else {
return null;
}
}
}
});})(c__36758__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__36657__auto__,c__36758__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto____0 = (function (){
var statearr_40525 = [null,null,null,null,null,null,null,null,null];
(statearr_40525[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto__);

(statearr_40525[(1)] = (1));

return statearr_40525;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto____1 = (function (state_40516){
while(true){
var ret_value__36659__auto__ = (function (){try{while(true){
var result__36660__auto__ = switch__36657__auto__(state_40516);
if(cljs.core.keyword_identical_QMARK_(result__36660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36660__auto__;
}
break;
}
}catch (e40526){if((e40526 instanceof Object)){
var ex__36661__auto__ = e40526;
var statearr_40527_40714 = state_40516;
(statearr_40527_40714[(5)] = ex__36661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40715 = state_40516;
state_40516 = G__40715;
continue;
} else {
return ret_value__36659__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto__ = function(state_40516){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto____1.call(this,state_40516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__36658__auto__;
})()
;})(switch__36657__auto__,c__36758__auto__,el,container_el,temp__5461__auto__))
})();
var state__36760__auto__ = (function (){var statearr_40535 = (f__36759__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36759__auto__.cljs$core$IFn$_invoke$arity$0() : f__36759__auto__.call(null));
(statearr_40535[(6)] = c__36758__auto__);

return statearr_40535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36760__auto__);
});})(c__36758__auto__,el,container_el,temp__5461__auto__))
);

return c__36758__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4523__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__40556(s__40557){
return (new cljs.core.LazySeq(null,(function (){
var s__40557__$1 = s__40557;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__40557__$1);
if(temp__5457__auto__){
var s__40557__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40557__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40557__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40559 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40558 = (0);
while(true){
if((i__40558 < size__4522__auto__)){
var vec__40560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40558);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40560,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40560,(1),null);
cljs.core.chunk_append(b__40559,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__40564 = "%4d | %s";
var G__40565 = (((1) + idx) + start_idx);
var G__40566 = text;
return goog.string.format(G__40564,G__40565,G__40566);
})()], null));

var G__40728 = (i__40558 + (1));
i__40558 = G__40728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40559),shadow$cljs$devtools$client$hud$source_line_html_$_iter__40556(cljs.core.chunk_rest(s__40557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40559),null);
}
} else {
var vec__40572 = cljs.core.first(s__40557__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40572,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40572,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__40576 = "%4d | %s";
var G__40577 = (((1) + idx) + start_idx);
var G__40578 = text;
return goog.string.format(G__40576,G__40577,G__40578);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__40556(cljs.core.rest(s__40557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__40597 = arguments.length;
switch (G__40597) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__40605){
var map__40606 = p__40605;
var map__40606__$1 = (((((!((map__40606 == null))))?(((((map__40606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40606):map__40606);
var warning = map__40606__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40606__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__40606,map__40606__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__40606,map__40606__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__40623){
var map__40624 = p__40623;
var map__40624__$1 = (((((!((map__40624 == null))))?(((((map__40624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40624):map__40624);
var warning = map__40624__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__40626 = source_excerpt;
var map__40626__$1 = (((((!((map__40626 == null))))?(((((map__40626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40626):map__40626);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40626__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40626__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40626__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40626__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4131__auto__ = column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__40629){
var map__40630 = p__40629;
var map__40630__$1 = (((((!((map__40630 == null))))?(((((map__40630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40630):map__40630);
var msg = map__40630__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__40634 = info;
var map__40634__$1 = (((((!((map__40634 == null))))?(((((map__40634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40634):map__40634);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40634__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__40634,map__40634__$1,sources,map__40630,map__40630__$1,msg,type,info){
return (function (p1__40628_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__40628_SHARP_));
});})(map__40634,map__40634__$1,sources,map__40630,map__40630__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4523__auto__ = ((function (map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__40636(s__40637){
return (new cljs.core.LazySeq(null,((function (map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info){
return (function (){
var s__40637__$1 = s__40637;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__40637__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__40643 = cljs.core.first(xs__6012__auto__);
var map__40643__$1 = (((((!((map__40643 == null))))?(((((map__40643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40643):map__40643);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40643__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4519__auto__ = ((function (s__40637__$1,map__40643,map__40643__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__40636_$_iter__40639(s__40640){
return (new cljs.core.LazySeq(null,((function (s__40637__$1,map__40643,map__40643__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info){
return (function (){
var s__40640__$1 = s__40640;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__40640__$1);
if(temp__5457__auto____$1){
var s__40640__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40640__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40640__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40642 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40641 = (0);
while(true){
if((i__40641 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40641);
cljs.core.chunk_append(b__40642,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__40792 = (i__40641 + (1));
i__40641 = G__40792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40642),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__40636_$_iter__40639(cljs.core.chunk_rest(s__40640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40642),null);
}
} else {
var warning = cljs.core.first(s__40640__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__40636_$_iter__40639(cljs.core.rest(s__40640__$2)));
}
} else {
return null;
}
break;
}
});})(s__40637__$1,map__40643,map__40643__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info))
,null,null));
});})(s__40637__$1,map__40643,map__40643__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__40636(cljs.core.rest(s__40637__$1)));
} else {
var G__40795 = cljs.core.rest(s__40637__$1);
s__40637__$1 = G__40795;
continue;
}
} else {
return null;
}
break;
}
});})(map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info))
,null,null));
});})(map__40634,map__40634__$1,sources,sources_with_warnings,map__40630,map__40630__$1,msg,type,info))
;
return iter__4523__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__40655){
var map__40656 = p__40655;
var map__40656__$1 = (((((!((map__40656 == null))))?(((((map__40656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40656):map__40656);
var msg = map__40656__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40656__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
