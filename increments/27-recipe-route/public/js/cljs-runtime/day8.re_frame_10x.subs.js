goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__22981_23723 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__22982_23724 = ((function (G__22981_23723){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__22981_23723))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__22981_23723,G__22982_23724) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__22981_23723,G__22982_23724));
var G__22983_23729 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__22984_23730 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__22985_23731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__22986_23732 = ((function (G__22983_23729,G__22984_23730,G__22985_23731){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__22983_23729,G__22984_23730,G__22985_23731))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__22983_23729,G__22984_23730,G__22985_23731,G__22986_23732) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__22983_23729,G__22984_23730,G__22985_23731,G__22986_23732));
var G__22988_23733 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__22989_23734 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__22990_23735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__22991_23736 = ((function (G__22988_23733,G__22989_23734,G__22990_23735){
return (function (panel_width_PERCENT_,p__22995){
var vec__22998 = p__22995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998,(1),null);
return (((function (){var G__23001 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23001);
})() * n) / 100.0);
});})(G__22988_23733,G__22989_23734,G__22990_23735))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__22988_23733,G__22989_23734,G__22990_23735,G__22991_23736) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__22988_23733,G__22989_23734,G__22990_23735,G__22991_23736));
var G__23002_23738 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23003_23739 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23004_23740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23005_23741 = ((function (G__23002_23738,G__23003_23739,G__23004_23740){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23002_23738,G__23003_23739,G__23004_23740))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23002_23738,G__23003_23739,G__23004_23740,G__23005_23741) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23002_23738,G__23003_23739,G__23004_23740,G__23005_23741));
var G__23011_23744 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23012_23745 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23013_23746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23014_23747 = ((function (G__23011_23744,G__23012_23745,G__23013_23746){
return (function (width,p__23015){
var vec__23016 = p__23015;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23016,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23016,(1),null);
return ((function (){var G__23023 = (width / n);
return Math.ceil(G__23023);
})() * n);
});})(G__23011_23744,G__23012_23745,G__23013_23746))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23011_23744,G__23012_23745,G__23013_23746,G__23014_23747) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23011_23744,G__23012_23745,G__23013_23746,G__23014_23747));
var G__23024_23749 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23025_23750 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23026_23751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23027_23752 = ((function (G__23024_23749,G__23025_23750,G__23026_23751){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23024_23749,G__23025_23750,G__23026_23751))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23024_23749,G__23025_23750,G__23026_23751,G__23027_23752) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23024_23749,G__23025_23750,G__23026_23751,G__23027_23752));
var G__23029_23754 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23030_23755 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23031_23756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23032_23757 = ((function (G__23029_23754,G__23030_23755,G__23031_23756){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23029_23754,G__23030_23755,G__23031_23756))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23029_23754,G__23030_23755,G__23031_23756,G__23032_23757) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23029_23754,G__23030_23755,G__23031_23756,G__23032_23757));
var G__23034_23758 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23035_23759 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23036_23760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23037_23761 = ((function (G__23034_23758,G__23035_23759,G__23036_23760){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23034_23758,G__23035_23759,G__23036_23760))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23034_23758,G__23035_23759,G__23036_23760,G__23037_23761) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23034_23758,G__23035_23759,G__23036_23760,G__23037_23761));
var G__23038_23762 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23039_23763 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23040_23764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23041_23765 = ((function (G__23038_23762,G__23039_23763,G__23040_23764){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23038_23762,G__23039_23763,G__23040_23764))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23038_23762,G__23039_23763,G__23040_23764,G__23041_23765) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23038_23762,G__23039_23763,G__23040_23764,G__23041_23765));
var G__23043_23767 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23044_23768 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23045_23769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23046_23770 = ((function (G__23043_23767,G__23044_23768,G__23045_23769){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23043_23767,G__23044_23768,G__23045_23769))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23043_23767,G__23044_23768,G__23045_23769,G__23046_23770) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23043_23767,G__23044_23768,G__23045_23769,G__23046_23770));
var G__23048_23772 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23049_23773 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23050_23774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23051_23775 = ((function (G__23048_23772,G__23049_23773,G__23050_23774){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23048_23772,G__23049_23773,G__23050_23774))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23048_23772,G__23049_23773,G__23050_23774,G__23051_23775) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23048_23772,G__23049_23773,G__23050_23774,G__23051_23775));
var G__23054_23782 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23055_23783 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23056_23784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23057_23785 = ((function (G__23054_23782,G__23055_23783,G__23056_23784){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23054_23782,G__23055_23783,G__23056_23784))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23054_23782,G__23055_23783,G__23056_23784,G__23057_23785) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23054_23782,G__23055_23783,G__23056_23784,G__23057_23785));
var G__23063_23791 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23064_23792 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23065_23793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23066_23794 = ((function (G__23063_23791,G__23064_23792,G__23065_23793){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23063_23791,G__23064_23792,G__23065_23793))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23063_23791,G__23064_23792,G__23065_23793,G__23066_23794) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23063_23791,G__23064_23792,G__23065_23793,G__23066_23794));
var G__23069_23803 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23070_23804 = ((function (G__23069_23803){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23069_23803))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23069_23803,G__23070_23804) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23069_23803,G__23070_23804));
var G__23071_23810 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23072_23811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23073_23812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23074_23813 = ((function (G__23071_23810,G__23072_23811,G__23073_23812){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23071_23810,G__23072_23811,G__23073_23812))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23071_23810,G__23072_23811,G__23073_23812,G__23074_23813) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23071_23810,G__23072_23811,G__23073_23812,G__23074_23813));
var G__23078_23814 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23079_23815 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23080_23816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23081_23817 = ((function (G__23078_23814,G__23079_23815,G__23080_23816){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23078_23814,G__23079_23815,G__23080_23816))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23078_23814,G__23079_23815,G__23080_23816,G__23081_23817) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23078_23814,G__23079_23815,G__23080_23816,G__23081_23817));
var G__23083_23818 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23084_23819 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23085_23820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23086_23821 = ((function (G__23083_23818,G__23084_23819,G__23085_23820){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23083_23818,G__23084_23819,G__23085_23820){
return (function (p1__23082_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23082_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23082_SHARP_));
});})(G__23083_23818,G__23084_23819,G__23085_23820))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23083_23818,G__23084_23819,G__23085_23820))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23083_23818,G__23084_23819,G__23085_23820,G__23086_23821) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23083_23818,G__23084_23819,G__23085_23820,G__23086_23821));
var G__23087_23822 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23088_23823 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23089_23824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23090_23825 = ((function (G__23087_23822,G__23088_23823,G__23089_23824){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23087_23822,G__23088_23823,G__23089_23824))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23087_23822,G__23088_23823,G__23089_23824,G__23090_23825) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23087_23822,G__23088_23823,G__23089_23824,G__23090_23825));
var G__23092_23826 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23093_23827 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23094_23828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23095_23829 = ((function (G__23092_23826,G__23093_23827,G__23094_23828){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23092_23826,G__23093_23827,G__23094_23828))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23092_23826,G__23093_23827,G__23094_23828,G__23095_23829) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23092_23826,G__23093_23827,G__23094_23828,G__23095_23829));
var G__23097_23831 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23098_23832 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23099_23833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23100_23834 = ((function (G__23097_23831,G__23098_23832,G__23099_23833){
return (function (expansions,p__23101){
var vec__23102 = p__23101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23097_23831,G__23098_23832,G__23099_23833))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23097_23831,G__23098_23832,G__23099_23833,G__23100_23834) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23097_23831,G__23098_23832,G__23099_23833,G__23100_23834));
var G__23106_23851 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23107_23852 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23108_23853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23109_23854 = ((function (G__23106_23851,G__23107_23852,G__23108_23853){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23106_23851,G__23107_23852,G__23108_23853))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23106_23851,G__23107_23852,G__23108_23853,G__23109_23854) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23106_23851,G__23107_23852,G__23108_23853,G__23109_23854));
var G__23111_23855 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23112_23856 = ((function (G__23111_23855){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23111_23855))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23111_23855,G__23112_23856) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23111_23855,G__23112_23856));
var G__23113_23857 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23114_23858 = ((function (G__23113_23857){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23113_23857))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23113_23857,G__23114_23858) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23113_23857,G__23114_23858));
var G__23115_23859 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23116_23860 = ((function (G__23115_23859){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23115_23859))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23115_23859,G__23116_23860) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23115_23859,G__23116_23860));
var G__23117_23861 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23118_23862 = ((function (G__23117_23861){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23117_23861))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23117_23861,G__23118_23862) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23117_23861,G__23118_23862));
var G__23119_23863 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23120_23864 = ((function (G__23119_23863){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23119_23863))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23119_23863,G__23120_23864) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23119_23863,G__23120_23864));
var G__23123_23865 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23124_23866 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23125_23867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23126_23868 = ((function (G__23123_23865,G__23124_23866,G__23125_23867){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23123_23865,G__23124_23866,G__23125_23867))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23123_23865,G__23124_23866,G__23125_23867,G__23126_23868) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23123_23865,G__23124_23866,G__23125_23867,G__23126_23868));
var G__23127_23869 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23128_23870 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23129_23871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23130_23872 = ((function (G__23127_23869,G__23128_23870,G__23129_23871){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23127_23869,G__23128_23870,G__23129_23871))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23127_23869,G__23128_23870,G__23129_23871,G__23130_23872) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23127_23869,G__23128_23870,G__23129_23871,G__23130_23872));
var G__23138_23874 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23139_23875 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23140_23876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23141_23877 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23142_23878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23143_23879 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23144_23880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23145_23881 = ((function (G__23138_23874,G__23139_23875,G__23140_23876,G__23141_23877,G__23142_23878,G__23143_23879,G__23144_23880){
return (function (p__23146,_){
var vec__23148 = p__23146;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23138_23874,G__23139_23875,G__23140_23876,G__23141_23877,G__23142_23878,G__23143_23879,G__23144_23880))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23138_23874,G__23139_23875,G__23140_23876,G__23141_23877,G__23142_23878,G__23143_23879,G__23144_23880,G__23145_23881) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23138_23874,G__23139_23875,G__23140_23876,G__23141_23877,G__23142_23878,G__23143_23879,G__23144_23880,G__23145_23881));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__23158,_){
var vec__23161 = p__23158;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23161,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23161,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__23161,traces,filtered_views))
),traces);
});
var G__23169_23882 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23170_23883 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23171_23884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23172_23885 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23173_23886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23174_23887 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23169_23882,G__23170_23883,G__23171_23884,G__23172_23885,G__23173_23886,G__23174_23887) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23169_23882,G__23170_23883,G__23171_23884,G__23172_23885,G__23173_23886,G__23174_23887));
var G__23179_23888 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23180_23889 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23181_23890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23182_23891 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23183_23892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23184_23893 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23179_23888,G__23180_23889,G__23181_23890,G__23182_23891,G__23183_23892,G__23184_23893) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23179_23888,G__23180_23889,G__23181_23890,G__23182_23891,G__23183_23892,G__23184_23893));
var G__23188_23894 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23189_23895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23190_23896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23191_23897 = ((function (G__23188_23894,G__23189_23895,G__23190_23896){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23188_23894,G__23189_23895,G__23190_23896))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23188_23894,G__23189_23895,G__23190_23896,G__23191_23897) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23188_23894,G__23189_23895,G__23190_23896,G__23191_23897));
var G__23192_23898 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23193_23899 = ((function (G__23192_23898){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23192_23898))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23192_23898,G__23193_23899) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23192_23898,G__23193_23899));
var G__23194_23900 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23195_23901 = ((function (G__23194_23900){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23194_23900))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23194_23900,G__23195_23901) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23194_23900,G__23195_23901));
var G__23199_23902 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23200_23903 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23201_23904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23202_23905 = ((function (G__23199_23902,G__23200_23903,G__23201_23904){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23199_23902,G__23200_23903,G__23201_23904))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23199_23902,G__23200_23903,G__23201_23904,G__23202_23905) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23199_23902,G__23200_23903,G__23201_23904,G__23202_23905));
var G__23203_23906 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23204_23907 = ((function (G__23203_23906){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23203_23906))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23203_23906,G__23204_23907) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23203_23906,G__23204_23907));
var G__23208_23908 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23209_23909 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23210_23910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23211_23911 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23212_23912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23213_23913 = ((function (G__23208_23908,G__23209_23909,G__23210_23910,G__23211_23911,G__23212_23912){
return (function (p__23215,_){
var vec__23216 = p__23215;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23216,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23208_23908,G__23209_23909,G__23210_23910,G__23211_23911,G__23212_23912))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23208_23908,G__23209_23909,G__23210_23910,G__23211_23911,G__23212_23912,G__23213_23913) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23208_23908,G__23209_23909,G__23210_23910,G__23211_23911,G__23212_23912,G__23213_23913));
var G__23222_23914 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23223_23915 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23224_23916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23225_23917 = ((function (G__23222_23914,G__23223_23915,G__23224_23916){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23222_23914,G__23223_23915,G__23224_23916))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23222_23914,G__23223_23915,G__23224_23916,G__23225_23917) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23222_23914,G__23223_23915,G__23224_23916,G__23225_23917));
var G__23231_23918 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23232_23919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23233_23920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23234_23921 = ((function (G__23231_23918,G__23232_23919,G__23233_23920){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__23231_23918,G__23232_23919,G__23233_23920))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23231_23918,G__23232_23919,G__23233_23920,G__23234_23921) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23231_23918,G__23232_23919,G__23233_23920,G__23234_23921));
var G__23237_23922 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23238_23923 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23239_23924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23240_23925 = ((function (G__23237_23922,G__23238_23923,G__23239_23924){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23237_23922,G__23238_23923,G__23239_23924))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23237_23922,G__23238_23923,G__23239_23924,G__23240_23925) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23237_23922,G__23238_23923,G__23239_23924,G__23240_23925));
var G__23243_23926 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23244_23927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23245_23928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23246_23929 = ((function (G__23243_23926,G__23244_23927,G__23245_23928){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23243_23926,G__23244_23927,G__23245_23928))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23243_23926,G__23244_23927,G__23245_23928,G__23246_23929) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23243_23926,G__23244_23927,G__23245_23928,G__23246_23929));
var G__23247_23930 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23248_23931 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23249_23932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23250_23933 = ((function (G__23247_23930,G__23248_23931,G__23249_23932){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23247_23930,G__23248_23931,G__23249_23932))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23247_23930,G__23248_23931,G__23249_23932,G__23250_23933) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23247_23930,G__23248_23931,G__23249_23932,G__23250_23933));
var G__23254_23934 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23255_23935 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23256_23936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23257_23937 = ((function (G__23254_23934,G__23255_23935,G__23256_23936){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__23254_23934,G__23255_23935,G__23256_23936))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23254_23934,G__23255_23935,G__23256_23936,G__23257_23937) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23254_23934,G__23255_23935,G__23256_23936,G__23257_23937));
var G__23258_23938 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23259_23939 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23260_23940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23261_23941 = ((function (G__23258_23938,G__23259_23939,G__23260_23940){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23258_23938,G__23259_23939,G__23260_23940))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23258_23938,G__23259_23939,G__23260_23940,G__23261_23941) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23258_23938,G__23259_23939,G__23260_23940,G__23261_23941));
var G__23262_23942 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23263_23943 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23264_23944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23265_23945 = ((function (G__23262_23942,G__23263_23943,G__23264_23944){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23262_23942,G__23263_23943,G__23264_23944))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23262_23942,G__23263_23943,G__23264_23944,G__23265_23945) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23262_23942,G__23263_23943,G__23264_23944,G__23265_23945));
var G__23268_23946 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23269_23947 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23270_23948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23271_23949 = ((function (G__23268_23946,G__23269_23947,G__23270_23948){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23268_23946,G__23269_23947,G__23270_23948))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23268_23946,G__23269_23947,G__23270_23948,G__23271_23949) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23268_23946,G__23269_23947,G__23270_23948,G__23271_23949));
var G__23273_23950 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23274_23951 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23275_23952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23276_23953 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23277_23954 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23278_23955 = ((function (G__23273_23950,G__23274_23951,G__23275_23952,G__23276_23953,G__23277_23954){
return (function (p__23279){
var vec__23280 = p__23279;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23273_23950,G__23274_23951,G__23275_23952,G__23276_23953,G__23277_23954))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23273_23950,G__23274_23951,G__23275_23952,G__23276_23953,G__23277_23954,G__23278_23955) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23273_23950,G__23274_23951,G__23275_23952,G__23276_23953,G__23277_23954,G__23278_23955));
var G__23288_23956 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23289_23957 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23290_23958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23291_23959 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23292_23960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23293_23961 = ((function (G__23288_23956,G__23289_23957,G__23290_23958,G__23291_23959,G__23292_23960){
return (function (p__23295){
var vec__23296 = p__23295;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__23288_23956,G__23289_23957,G__23290_23958,G__23291_23959,G__23292_23960))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23288_23956,G__23289_23957,G__23290_23958,G__23291_23959,G__23292_23960,G__23293_23961) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23288_23956,G__23289_23957,G__23290_23958,G__23291_23959,G__23292_23960,G__23293_23961));
var G__23299_23962 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23300_23963 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23301_23964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23302_23965 = ((function (G__23299_23962,G__23300_23963,G__23301_23964){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23299_23962,G__23300_23963,G__23301_23964))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23299_23962,G__23300_23963,G__23301_23964,G__23302_23965) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23299_23962,G__23300_23963,G__23301_23964,G__23302_23965));
var G__23306_23966 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23307_23967 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23308_23968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23309_23969 = ((function (G__23306_23966,G__23307_23967,G__23308_23968){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23306_23966,G__23307_23967,G__23308_23968){
return (function (p1__23305_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__23305_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__23305_SHARP_)));
});})(G__23306_23966,G__23307_23967,G__23308_23968))
,traces);
});})(G__23306_23966,G__23307_23967,G__23308_23968))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23306_23966,G__23307_23967,G__23308_23968,G__23309_23969) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23306_23966,G__23307_23967,G__23308_23968,G__23309_23969));
var G__23314_23970 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23315_23971 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23316_23972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23317_23973 = ((function (G__23314_23970,G__23315_23971,G__23316_23972){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23314_23970,G__23315_23971,G__23316_23972))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23314_23970,G__23315_23971,G__23316_23972,G__23317_23973) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23314_23970,G__23315_23971,G__23316_23972,G__23317_23973));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__23322 = arguments.length;
switch (G__23322) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___23975 = arguments.length;
var i__4731__auto___23976 = (0);
while(true){
if((i__4731__auto___23976 < len__4730__auto___23975)){
args_arr__4751__auto__.push((arguments[i__4731__auto___23976]));

var G__23977 = (i__4731__auto___23976 + (1));
i__4731__auto___23976 = G__23977;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq23319){
var G__23320 = cljs.core.first(seq23319);
var seq23319__$1 = cljs.core.next(seq23319);
var G__23321 = cljs.core.first(seq23319__$1);
var seq23319__$2 = cljs.core.next(seq23319__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23320,G__23321,seq23319__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__23328_23978 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23329_23979 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23330_23980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23331_23981 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23332_23982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23333_23983 = ((function (G__23328_23978,G__23329_23979,G__23330_23980,G__23331_23981,G__23332_23982){
return (function (p__23334,p__23335){
var vec__23336 = p__23334;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23336,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23336,(1),null);
var vec__23339 = p__23335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23339,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__23345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23345,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23345,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__23328_23978,G__23329_23979,G__23330_23980,G__23331_23981,G__23332_23982))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23328_23978,G__23329_23979,G__23330_23980,G__23331_23981,G__23332_23982,G__23333_23983) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23328_23978,G__23329_23979,G__23330_23980,G__23331_23981,G__23332_23982,G__23333_23983));
var G__23348_23984 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23349_23985 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23350_23986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23351_23987 = ((function (G__23348_23984,G__23349_23985,G__23350_23986){
return (function (match){
var map__23360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__23360__$1 = (((((!((map__23360 == null))))?(((((map__23360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23360):map__23360);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__23348_23984,G__23349_23985,G__23350_23986))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23348_23984,G__23349_23985,G__23350_23986,G__23351_23987) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23348_23984,G__23349_23985,G__23350_23986,G__23351_23987));
var G__23376_23988 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__23377_23989 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23378_23990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23379_23991 = ((function (G__23376_23988,G__23377_23989,G__23378_23990){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__23376_23988,G__23377_23989,G__23378_23990))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23376_23988,G__23377_23989,G__23378_23990,G__23379_23991) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23376_23988,G__23377_23989,G__23378_23990,G__23379_23991));
var G__23388_23992 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__23389_23993 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23390_23994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23391_23995 = ((function (G__23388_23992,G__23389_23993,G__23390_23994){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__23388_23992,G__23389_23993,G__23390_23994))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23388_23992,G__23389_23993,G__23390_23994,G__23391_23995) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23388_23992,G__23389_23993,G__23390_23994,G__23391_23995));
var G__23394_23996 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__23395_23997 = ((function (G__23394_23996){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23394_23996))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23394_23996,G__23395_23997) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23394_23996,G__23395_23997));
var G__23396_23998 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23397_23999 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23398_24000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23399_24001 = ((function (G__23396_23998,G__23397_23999,G__23398_24000){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__23396_23998,G__23397_23999,G__23398_24000))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23396_23998,G__23397_23999,G__23398_24000,G__23399_24001) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23396_23998,G__23397_23999,G__23398_24000,G__23399_24001));
var G__23408_24002 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23409_24003 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23410_24004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23411_24005 = ((function (G__23408_24002,G__23409_24003,G__23410_24004){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23408_24002,G__23409_24003,G__23410_24004))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23408_24002,G__23409_24003,G__23410_24004,G__23411_24005) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23408_24002,G__23409_24003,G__23410_24004,G__23411_24005));
var G__23418_24006 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23419_24007 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23420_24008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23421_24009 = ((function (G__23418_24006,G__23419_24007,G__23420_24008){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23418_24006,G__23419_24007,G__23420_24008))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23418_24006,G__23419_24007,G__23420_24008,G__23421_24009) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23418_24006,G__23419_24007,G__23420_24008,G__23421_24009));
var G__23454_24010 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23455_24011 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23456_24012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23457_24013 = ((function (G__23454_24010,G__23455_24011,G__23456_24012){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23454_24010,G__23455_24011,G__23456_24012))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23454_24010,G__23455_24011,G__23456_24012,G__23457_24013) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23454_24010,G__23455_24011,G__23456_24012,G__23457_24013));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23458_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__23458_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23492){
return cljs.core.coll_QMARK_(G__23492);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23501){
return cljs.core.map_QMARK_(G__23501);
}),(function (G__23501){
return cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23501){
return cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23501){
return cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23501){
return cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23501){
return cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23501){
return cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23501){
return ((cljs.core.map_QMARK_(G__23501)) && (cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23501,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23505){
return cljs.core.coll_QMARK_(G__23505);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__23506 = sub_type;
var G__23506__$1 = (((G__23506 instanceof cljs.core.Keyword))?G__23506.fqn:null);
switch (G__23506__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5455__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var sub_type = temp__5455__auto__;
var G__24015 = (exp - (1));
var G__24016 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__24017 = cljs.core.rest(order__$1);
exp = G__24015;
total = G__24016;
order__$1 = G__24017;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__23511 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__23511__$1 = (((G__23511 instanceof cljs.core.Keyword))?G__23511.fqn:null);
switch (G__23511__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__23512,p__23513){
var vec__23514 = p__23512;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23514,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23514,(1),null);
var vec__23517 = p__23513;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23517,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__23514,sub_info,sub_state,vec__23517,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__23514,sub_info,sub_state,vec__23517,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__23514,sub_info,sub_state,vec__23517,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__23514,sub_info,sub_state,vec__23517,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__23520_24019 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__23521_24020 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23522_24021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23523_24022 = ((function (G__23520_24019,G__23521_24020,G__23522_24021){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23520_24019,G__23521_24020,G__23522_24021))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23520_24019,G__23521_24020,G__23522_24021,G__23523_24022) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23520_24019,G__23521_24020,G__23522_24021,G__23523_24022));
var G__23525_24023 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__23526_24024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23527_24025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23528_24026 = ((function (G__23525_24023,G__23526_24024,G__23527_24025){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23525_24023,G__23526_24024,G__23527_24025))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23525_24023,G__23526_24024,G__23527_24025,G__23528_24026) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23525_24023,G__23526_24024,G__23527_24025,G__23528_24026));
var G__23530_24027 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__23531_24028 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23532_24029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23533_24030 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23534_24031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__23535_24032 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23530_24027,G__23531_24028,G__23532_24029,G__23533_24030,G__23534_24031,G__23535_24032) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23530_24027,G__23531_24028,G__23532_24029,G__23533_24030,G__23534_24031,G__23535_24032));
var G__23536_24033 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__23537_24034 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23538_24035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23539_24036 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23540_24037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__23541_24038 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23536_24033,G__23537_24034,G__23538_24035,G__23539_24036,G__23540_24037,G__23541_24038) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23536_24033,G__23537_24034,G__23538_24035,G__23539_24036,G__23540_24037,G__23541_24038));
var G__23542_24039 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__23543_24040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23544_24041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23545_24042 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23546_24043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__23547_24044 = ((function (G__23542_24039,G__23543_24040,G__23544_24041,G__23545_24042,G__23546_24043){
return (function (p__23548){
var vec__23549 = p__23548;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23549,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23549,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__23542_24039,G__23543_24040,G__23544_24041,G__23545_24042,G__23546_24043))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23542_24039,G__23543_24040,G__23544_24041,G__23545_24042,G__23546_24043,G__23547_24044) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23542_24039,G__23543_24040,G__23544_24041,G__23545_24042,G__23546_24043,G__23547_24044));
var G__23552_24045 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__23553_24046 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23554_24047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__23555_24048 = ((function (G__23552_24045,G__23553_24046,G__23554_24047){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__23552_24045,G__23553_24046,G__23554_24047))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23552_24045,G__23553_24046,G__23554_24047,G__23555_24048) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23552_24045,G__23553_24046,G__23554_24047,G__23555_24048));
var G__23556_24049 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__23557_24050 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23558_24051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23559_24052 = ((function (G__23556_24049,G__23557_24050,G__23558_24051){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__23556_24049,G__23557_24050,G__23558_24051))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23556_24049,G__23557_24050,G__23558_24051,G__23559_24052) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23556_24049,G__23557_24050,G__23558_24051,G__23559_24052));
var G__23563_24053 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__23564_24054 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23565_24055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23566_24056 = ((function (G__23563_24053,G__23564_24054,G__23565_24055){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__23563_24053,G__23564_24054,G__23565_24055))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23563_24053,G__23564_24054,G__23565_24055,G__23566_24056) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23563_24053,G__23564_24054,G__23565_24055,G__23566_24056));
var G__23568_24057 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__23569_24058 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23570_24059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23571_24060 = ((function (G__23568_24057,G__23569_24058,G__23570_24059){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__23568_24057,G__23569_24058,G__23570_24059))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23568_24057,G__23569_24058,G__23570_24059,G__23571_24060) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23568_24057,G__23569_24058,G__23570_24059,G__23571_24060));
var G__23575_24061 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__23576_24062 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23577_24063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23578_24064 = ((function (G__23575_24061,G__23576_24062,G__23577_24063){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__23575_24061,G__23576_24062,G__23577_24063))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23575_24061,G__23576_24062,G__23577_24063,G__23578_24064) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23575_24061,G__23576_24062,G__23577_24063,G__23578_24064));
var G__23581_24065 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__23582_24066 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23583_24067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23584_24068 = ((function (G__23581_24065,G__23582_24066,G__23583_24067){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__23581_24065,G__23582_24066,G__23583_24067))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23581_24065,G__23582_24066,G__23583_24067,G__23584_24068) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23581_24065,G__23582_24066,G__23583_24067,G__23584_24068));
var G__23585_24069 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__23586_24070 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23587_24071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23588_24072 = ((function (G__23585_24069,G__23586_24070,G__23587_24071){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__23585_24069,G__23586_24070,G__23587_24071))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23585_24069,G__23586_24070,G__23587_24071,G__23588_24072) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23585_24069,G__23586_24070,G__23587_24071,G__23588_24072));
var G__23590_24073 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__23591_24074 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23592_24075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23593_24076 = ((function (G__23590_24073,G__23591_24074,G__23592_24075){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__23590_24073,G__23591_24074,G__23592_24075))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23590_24073,G__23591_24074,G__23592_24075,G__23593_24076) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23590_24073,G__23591_24074,G__23592_24075,G__23593_24076));
var G__23596_24077 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__23597_24078 = ((function (G__23596_24077){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23596_24077))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23596_24077,G__23597_24078) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23596_24077,G__23597_24078));
var G__23601_24079 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__23603_24080 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23604_24081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23605_24082 = ((function (G__23601_24079,G__23603_24080,G__23604_24081){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__23601_24079,G__23603_24080,G__23604_24081){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__23601_24079,G__23603_24080,G__23604_24081){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__23601_24079,G__23603_24080,G__23604_24081))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__23601_24079,G__23603_24080,G__23604_24081))
,traces);
});})(G__23601_24079,G__23603_24080,G__23604_24081))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23601_24079,G__23603_24080,G__23604_24081,G__23605_24082) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23601_24079,G__23603_24080,G__23604_24081,G__23605_24082));
var G__23625_24083 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__23626_24084 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23627_24085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__23628_24086 = ((function (G__23625_24083,G__23626_24084,G__23627_24085){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__23625_24083,G__23626_24084,G__23627_24085))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23625_24083,G__23626_24084,G__23627_24085,G__23628_24086) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23625_24083,G__23626_24084,G__23627_24085,G__23628_24086));
var G__23633_24087 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__23634_24088 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23635_24089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__23636_24090 = ((function (G__23633_24087,G__23634_24088,G__23635_24089){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__23633_24087,G__23634_24088,G__23635_24089))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23633_24087,G__23634_24088,G__23635_24089,G__23636_24090) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23633_24087,G__23634_24088,G__23635_24089,G__23636_24090));
var G__23646_24091 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__23647_24092 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23648_24093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23649_24094 = ((function (G__23646_24091,G__23647_24092,G__23648_24093){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23646_24091,G__23647_24092,G__23648_24093))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23646_24091,G__23647_24092,G__23648_24093,G__23649_24094) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23646_24091,G__23647_24092,G__23648_24093,G__23649_24094));
var G__23656_24095 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__23657_24096 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23658_24097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23659_24098 = ((function (G__23656_24095,G__23657_24096,G__23658_24097){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23656_24095,G__23657_24096,G__23658_24097))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23656_24095,G__23657_24096,G__23658_24097,G__23659_24098) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23656_24095,G__23657_24096,G__23658_24097,G__23659_24098));
var G__23660_24099 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__23661_24100 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23662_24101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23663_24102 = ((function (G__23660_24099,G__23661_24100,G__23662_24101){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23660_24099,G__23661_24100,G__23662_24101))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23660_24099,G__23661_24100,G__23662_24101,G__23663_24102) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23660_24099,G__23661_24100,G__23662_24101,G__23663_24102));
var G__23670_24103 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__23671_24104 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23672_24105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23673_24106 = ((function (G__23670_24103,G__23671_24104,G__23672_24105){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23670_24103,G__23671_24104,G__23672_24105))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23670_24103,G__23671_24104,G__23672_24105,G__23673_24106) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23670_24103,G__23671_24104,G__23672_24105,G__23673_24106));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__23675_24107 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__23676_24108 = ((function (G__23675_24107){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__23675_24107))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23675_24107,G__23676_24108) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23675_24107,G__23676_24108));
var G__23680_24109 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__23681_24110 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23682_24111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__23683_24112 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23684_24113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__23685_24114 = ((function (G__23680_24109,G__23681_24110,G__23682_24111,G__23683_24112,G__23684_24113){
return (function (p__23687,_){
var vec__23707 = p__23687;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23707,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23707,(1),null);
var G__23710 = (window_width / char_width);
return Math.ceil(G__23710);
});})(G__23680_24109,G__23681_24110,G__23682_24111,G__23683_24112,G__23684_24113))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23680_24109,G__23681_24110,G__23682_24111,G__23683_24112,G__23684_24113,G__23685_24114) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23680_24109,G__23681_24110,G__23682_24111,G__23683_24112,G__23684_24113,G__23685_24114));
var G__23712_24115 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__23713_24116 = ((function (G__23712_24115){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23712_24115))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23712_24115,G__23713_24116) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23712_24115,G__23713_24116));
var G__23714_24117 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__23715_24118 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23716_24119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__23717_24120 = ((function (G__23714_24117,G__23715_24118,G__23716_24119){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__23714_24117,G__23715_24118,G__23716_24119))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23714_24117,G__23715_24118,G__23716_24119,G__23717_24120) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23714_24117,G__23715_24118,G__23716_24119,G__23717_24120));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
