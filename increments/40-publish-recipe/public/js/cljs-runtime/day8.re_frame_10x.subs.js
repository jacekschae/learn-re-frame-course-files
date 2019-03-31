goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__23009_23762 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__23010_23763 = ((function (G__23009_23762){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__23009_23762))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23009_23762,G__23010_23763) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23009_23762,G__23010_23763));
var G__23017_23767 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__23018_23768 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23019_23769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23020_23770 = ((function (G__23017_23767,G__23018_23768,G__23019_23769){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__23017_23767,G__23018_23768,G__23019_23769))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23017_23767,G__23018_23768,G__23019_23769,G__23020_23770) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23017_23767,G__23018_23768,G__23019_23769,G__23020_23770));
var G__23022_23771 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__23023_23772 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23024_23773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__23025_23774 = ((function (G__23022_23771,G__23023_23772,G__23024_23773){
return (function (panel_width_PERCENT_,p__23026){
var vec__23027 = p__23026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23027,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23027,(1),null);
return (((function (){var G__23030 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23030);
})() * n) / 100.0);
});})(G__23022_23771,G__23023_23772,G__23024_23773))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23022_23771,G__23023_23772,G__23024_23773,G__23025_23774) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23022_23771,G__23023_23772,G__23024_23773,G__23025_23774));
var G__23035_23775 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23036_23776 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23037_23777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23038_23778 = ((function (G__23035_23775,G__23036_23776,G__23037_23777){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23035_23775,G__23036_23776,G__23037_23777))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23035_23775,G__23036_23776,G__23037_23777,G__23038_23778) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23035_23775,G__23036_23776,G__23037_23777,G__23038_23778));
var G__23040_23779 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23041_23780 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23042_23781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23043_23782 = ((function (G__23040_23779,G__23041_23780,G__23042_23781){
return (function (width,p__23046){
var vec__23047 = p__23046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23047,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23047,(1),null);
return ((function (){var G__23050 = (width / n);
return Math.ceil(G__23050);
})() * n);
});})(G__23040_23779,G__23041_23780,G__23042_23781))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23040_23779,G__23041_23780,G__23042_23781,G__23043_23782) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23040_23779,G__23041_23780,G__23042_23781,G__23043_23782));
var G__23051_23783 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23052_23784 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23053_23785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23054_23786 = ((function (G__23051_23783,G__23052_23784,G__23053_23785){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23051_23783,G__23052_23784,G__23053_23785))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23051_23783,G__23052_23784,G__23053_23785,G__23054_23786) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23051_23783,G__23052_23784,G__23053_23785,G__23054_23786));
var G__23055_23787 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23056_23788 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23057_23789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23058_23790 = ((function (G__23055_23787,G__23056_23788,G__23057_23789){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23055_23787,G__23056_23788,G__23057_23789))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23055_23787,G__23056_23788,G__23057_23789,G__23058_23790) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23055_23787,G__23056_23788,G__23057_23789,G__23058_23790));
var G__23060_23791 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23061_23792 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23062_23793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23063_23794 = ((function (G__23060_23791,G__23061_23792,G__23062_23793){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23060_23791,G__23061_23792,G__23062_23793))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23060_23791,G__23061_23792,G__23062_23793,G__23063_23794) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23060_23791,G__23061_23792,G__23062_23793,G__23063_23794));
var G__23065_23795 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23066_23796 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23067_23797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23068_23798 = ((function (G__23065_23795,G__23066_23796,G__23067_23797){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23065_23795,G__23066_23796,G__23067_23797))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23065_23795,G__23066_23796,G__23067_23797,G__23068_23798) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23065_23795,G__23066_23796,G__23067_23797,G__23068_23798));
var G__23069_23801 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23070_23802 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23071_23803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23072_23804 = ((function (G__23069_23801,G__23070_23802,G__23071_23803){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23069_23801,G__23070_23802,G__23071_23803))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23069_23801,G__23070_23802,G__23071_23803,G__23072_23804) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23069_23801,G__23070_23802,G__23071_23803,G__23072_23804));
var G__23078_23806 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23079_23807 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23080_23808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23081_23809 = ((function (G__23078_23806,G__23079_23807,G__23080_23808){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23078_23806,G__23079_23807,G__23080_23808))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23078_23806,G__23079_23807,G__23080_23808,G__23081_23809) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23078_23806,G__23079_23807,G__23080_23808,G__23081_23809));
var G__23082_23810 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23083_23811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23084_23812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23085_23813 = ((function (G__23082_23810,G__23083_23811,G__23084_23812){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23082_23810,G__23083_23811,G__23084_23812))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23082_23810,G__23083_23811,G__23084_23812,G__23085_23813) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23082_23810,G__23083_23811,G__23084_23812,G__23085_23813));
var G__23086_23814 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23087_23815 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23088_23816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23089_23817 = ((function (G__23086_23814,G__23087_23815,G__23088_23816){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23086_23814,G__23087_23815,G__23088_23816))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23086_23814,G__23087_23815,G__23088_23816,G__23089_23817) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23086_23814,G__23087_23815,G__23088_23816,G__23089_23817));
var G__23090_23818 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23091_23819 = ((function (G__23090_23818){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23090_23818))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23090_23818,G__23091_23819) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23090_23818,G__23091_23819));
var G__23092_23820 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23093_23821 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23094_23822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23095_23823 = ((function (G__23092_23820,G__23093_23821,G__23094_23822){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23092_23820,G__23093_23821,G__23094_23822))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23092_23820,G__23093_23821,G__23094_23822,G__23095_23823) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23092_23820,G__23093_23821,G__23094_23822,G__23095_23823));
var G__23096_23824 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23097_23825 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23098_23826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23099_23827 = ((function (G__23096_23824,G__23097_23825,G__23098_23826){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23096_23824,G__23097_23825,G__23098_23826))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23096_23824,G__23097_23825,G__23098_23826,G__23099_23827) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23096_23824,G__23097_23825,G__23098_23826,G__23099_23827));
var G__23101_23828 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23102_23829 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23103_23830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23104_23831 = ((function (G__23101_23828,G__23102_23829,G__23103_23830){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23101_23828,G__23102_23829,G__23103_23830){
return (function (p1__23100_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23100_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23100_SHARP_));
});})(G__23101_23828,G__23102_23829,G__23103_23830))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23101_23828,G__23102_23829,G__23103_23830))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23101_23828,G__23102_23829,G__23103_23830,G__23104_23831) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23101_23828,G__23102_23829,G__23103_23830,G__23104_23831));
var G__23105_23833 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23106_23834 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23107_23835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23108_23836 = ((function (G__23105_23833,G__23106_23834,G__23107_23835){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23105_23833,G__23106_23834,G__23107_23835))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23105_23833,G__23106_23834,G__23107_23835,G__23108_23836) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23105_23833,G__23106_23834,G__23107_23835,G__23108_23836));
var G__23109_23838 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23110_23839 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23111_23840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23112_23841 = ((function (G__23109_23838,G__23110_23839,G__23111_23840){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23109_23838,G__23110_23839,G__23111_23840))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23109_23838,G__23110_23839,G__23111_23840,G__23112_23841) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23109_23838,G__23110_23839,G__23111_23840,G__23112_23841));
var G__23113_23843 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23114_23844 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23115_23845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23116_23846 = ((function (G__23113_23843,G__23114_23844,G__23115_23845){
return (function (expansions,p__23117){
var vec__23118 = p__23117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23118,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23118,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23113_23843,G__23114_23844,G__23115_23845))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23113_23843,G__23114_23844,G__23115_23845,G__23116_23846) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23113_23843,G__23114_23844,G__23115_23845,G__23116_23846));
var G__23121_23847 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23122_23848 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23123_23849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23124_23850 = ((function (G__23121_23847,G__23122_23848,G__23123_23849){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23121_23847,G__23122_23848,G__23123_23849))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23121_23847,G__23122_23848,G__23123_23849,G__23124_23850) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23121_23847,G__23122_23848,G__23123_23849,G__23124_23850));
var G__23125_23851 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23126_23852 = ((function (G__23125_23851){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23125_23851))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23125_23851,G__23126_23852) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23125_23851,G__23126_23852));
var G__23127_23853 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23128_23854 = ((function (G__23127_23853){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23127_23853))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23127_23853,G__23128_23854) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23127_23853,G__23128_23854));
var G__23129_23855 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23130_23856 = ((function (G__23129_23855){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23129_23855))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23129_23855,G__23130_23856) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23129_23855,G__23130_23856));
var G__23131_23857 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23132_23858 = ((function (G__23131_23857){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23131_23857))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23131_23857,G__23132_23858) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23131_23857,G__23132_23858));
var G__23133_23859 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23134_23860 = ((function (G__23133_23859){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23133_23859))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23133_23859,G__23134_23860) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23133_23859,G__23134_23860));
var G__23135_23861 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23136_23862 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23137_23863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23138_23864 = ((function (G__23135_23861,G__23136_23862,G__23137_23863){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23135_23861,G__23136_23862,G__23137_23863))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23135_23861,G__23136_23862,G__23137_23863,G__23138_23864) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23135_23861,G__23136_23862,G__23137_23863,G__23138_23864));
var G__23139_23865 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23140_23866 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23141_23867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23142_23868 = ((function (G__23139_23865,G__23140_23866,G__23141_23867){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23139_23865,G__23140_23866,G__23141_23867))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23139_23865,G__23140_23866,G__23141_23867,G__23142_23868) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23139_23865,G__23140_23866,G__23141_23867,G__23142_23868));
var G__23143_23869 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23144_23870 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23145_23871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23146_23872 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23147_23873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23148_23874 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23149_23875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23150_23876 = ((function (G__23143_23869,G__23144_23870,G__23145_23871,G__23146_23872,G__23147_23873,G__23148_23874,G__23149_23875){
return (function (p__23151,_){
var vec__23152 = p__23151;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23143_23869,G__23144_23870,G__23145_23871,G__23146_23872,G__23147_23873,G__23148_23874,G__23149_23875))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23143_23869,G__23144_23870,G__23145_23871,G__23146_23872,G__23147_23873,G__23148_23874,G__23149_23875,G__23150_23876) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23143_23869,G__23144_23870,G__23145_23871,G__23146_23872,G__23147_23873,G__23148_23874,G__23149_23875,G__23150_23876));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__23155,_){
var vec__23156 = p__23155;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23156,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23156,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23156,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__23156,traces,filtered_views))
),traces);
});
var G__23159_23879 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23160_23880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23161_23881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23162_23882 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23163_23883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23164_23884 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23159_23879,G__23160_23880,G__23161_23881,G__23162_23882,G__23163_23883,G__23164_23884) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23159_23879,G__23160_23880,G__23161_23881,G__23162_23882,G__23163_23883,G__23164_23884));
var G__23167_23885 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23168_23886 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23169_23887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23170_23888 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23171_23889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23172_23890 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23167_23885,G__23168_23886,G__23169_23887,G__23170_23888,G__23171_23889,G__23172_23890) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23167_23885,G__23168_23886,G__23169_23887,G__23170_23888,G__23171_23889,G__23172_23890));
var G__23173_23891 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23174_23892 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23175_23893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23176_23894 = ((function (G__23173_23891,G__23174_23892,G__23175_23893){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23173_23891,G__23174_23892,G__23175_23893))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23173_23891,G__23174_23892,G__23175_23893,G__23176_23894) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23173_23891,G__23174_23892,G__23175_23893,G__23176_23894));
var G__23181_23895 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23182_23896 = ((function (G__23181_23895){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23181_23895))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23181_23895,G__23182_23896) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23181_23895,G__23182_23896));
var G__23186_23897 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23187_23898 = ((function (G__23186_23897){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23186_23897))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23186_23897,G__23187_23898) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23186_23897,G__23187_23898));
var G__23188_23899 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23189_23900 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23190_23901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23191_23902 = ((function (G__23188_23899,G__23189_23900,G__23190_23901){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23188_23899,G__23189_23900,G__23190_23901))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23188_23899,G__23189_23900,G__23190_23901,G__23191_23902) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23188_23899,G__23189_23900,G__23190_23901,G__23191_23902));
var G__23192_23903 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23193_23904 = ((function (G__23192_23903){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23192_23903))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23192_23903,G__23193_23904) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23192_23903,G__23193_23904));
var G__23197_23905 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23198_23906 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23199_23907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23200_23908 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23201_23909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23202_23910 = ((function (G__23197_23905,G__23198_23906,G__23199_23907,G__23200_23908,G__23201_23909){
return (function (p__23204,_){
var vec__23208 = p__23204;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23208,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23208,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23197_23905,G__23198_23906,G__23199_23907,G__23200_23908,G__23201_23909))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23197_23905,G__23198_23906,G__23199_23907,G__23200_23908,G__23201_23909,G__23202_23910) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23197_23905,G__23198_23906,G__23199_23907,G__23200_23908,G__23201_23909,G__23202_23910));
var G__23211_23911 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23212_23912 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23213_23913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23214_23914 = ((function (G__23211_23911,G__23212_23912,G__23213_23913){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23211_23911,G__23212_23912,G__23213_23913))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23211_23911,G__23212_23912,G__23213_23913,G__23214_23914) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23211_23911,G__23212_23912,G__23213_23913,G__23214_23914));
var G__23218_23915 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23219_23916 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23220_23917 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23221_23918 = ((function (G__23218_23915,G__23219_23916,G__23220_23917){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__23218_23915,G__23219_23916,G__23220_23917))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23218_23915,G__23219_23916,G__23220_23917,G__23221_23918) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23218_23915,G__23219_23916,G__23220_23917,G__23221_23918));
var G__23229_23919 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23230_23920 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23231_23921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23232_23922 = ((function (G__23229_23919,G__23230_23920,G__23231_23921){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23229_23919,G__23230_23920,G__23231_23921))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23229_23919,G__23230_23920,G__23231_23921,G__23232_23922) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23229_23919,G__23230_23920,G__23231_23921,G__23232_23922));
var G__23233_23923 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23234_23924 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23235_23925 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23236_23926 = ((function (G__23233_23923,G__23234_23924,G__23235_23925){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23233_23923,G__23234_23924,G__23235_23925))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23233_23923,G__23234_23924,G__23235_23925,G__23236_23926) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23233_23923,G__23234_23924,G__23235_23925,G__23236_23926));
var G__23240_23927 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23241_23928 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23242_23929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23243_23930 = ((function (G__23240_23927,G__23241_23928,G__23242_23929){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23240_23927,G__23241_23928,G__23242_23929))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23240_23927,G__23241_23928,G__23242_23929,G__23243_23930) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23240_23927,G__23241_23928,G__23242_23929,G__23243_23930));
var G__23244_23931 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23245_23932 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23246_23933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23247_23934 = ((function (G__23244_23931,G__23245_23932,G__23246_23933){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__23244_23931,G__23245_23932,G__23246_23933))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23244_23931,G__23245_23932,G__23246_23933,G__23247_23934) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23244_23931,G__23245_23932,G__23246_23933,G__23247_23934));
var G__23251_23935 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23252_23936 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23253_23937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23254_23938 = ((function (G__23251_23935,G__23252_23936,G__23253_23937){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23251_23935,G__23252_23936,G__23253_23937))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23251_23935,G__23252_23936,G__23253_23937,G__23254_23938) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23251_23935,G__23252_23936,G__23253_23937,G__23254_23938));
var G__23255_23939 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23256_23940 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23257_23941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23258_23942 = ((function (G__23255_23939,G__23256_23940,G__23257_23941){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23255_23939,G__23256_23940,G__23257_23941))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23255_23939,G__23256_23940,G__23257_23941,G__23258_23942) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23255_23939,G__23256_23940,G__23257_23941,G__23258_23942));
var G__23262_23943 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23263_23944 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23264_23945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23265_23946 = ((function (G__23262_23943,G__23263_23944,G__23264_23945){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23262_23943,G__23263_23944,G__23264_23945))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23262_23943,G__23263_23944,G__23264_23945,G__23265_23946) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23262_23943,G__23263_23944,G__23264_23945,G__23265_23946));
var G__23270_23947 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23271_23948 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23272_23949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23273_23950 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23274_23951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23275_23952 = ((function (G__23270_23947,G__23271_23948,G__23272_23949,G__23273_23950,G__23274_23951){
return (function (p__23280){
var vec__23281 = p__23280;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23281,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23281,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23270_23947,G__23271_23948,G__23272_23949,G__23273_23950,G__23274_23951))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23270_23947,G__23271_23948,G__23272_23949,G__23273_23950,G__23274_23951,G__23275_23952) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23270_23947,G__23271_23948,G__23272_23949,G__23273_23950,G__23274_23951,G__23275_23952));
var G__23288_23953 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23289_23954 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23290_23955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23291_23956 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23292_23957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23293_23958 = ((function (G__23288_23953,G__23289_23954,G__23290_23955,G__23291_23956,G__23292_23957){
return (function (p__23294){
var vec__23295 = p__23294;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__23288_23953,G__23289_23954,G__23290_23955,G__23291_23956,G__23292_23957))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23288_23953,G__23289_23954,G__23290_23955,G__23291_23956,G__23292_23957,G__23293_23958) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23288_23953,G__23289_23954,G__23290_23955,G__23291_23956,G__23292_23957,G__23293_23958));
var G__23302_23959 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23303_23960 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23304_23961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23305_23962 = ((function (G__23302_23959,G__23303_23960,G__23304_23961){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23302_23959,G__23303_23960,G__23304_23961))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23302_23959,G__23303_23960,G__23304_23961,G__23305_23962) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23302_23959,G__23303_23960,G__23304_23961,G__23305_23962));
var G__23308_23963 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23309_23964 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23310_23965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23311_23966 = ((function (G__23308_23963,G__23309_23964,G__23310_23965){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23308_23963,G__23309_23964,G__23310_23965){
return (function (p1__23306_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__23306_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__23306_SHARP_)));
});})(G__23308_23963,G__23309_23964,G__23310_23965))
,traces);
});})(G__23308_23963,G__23309_23964,G__23310_23965))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23308_23963,G__23309_23964,G__23310_23965,G__23311_23966) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23308_23963,G__23309_23964,G__23310_23965,G__23311_23966));
var G__23316_23967 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23317_23968 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23318_23969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23319_23970 = ((function (G__23316_23967,G__23317_23968,G__23318_23969){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23316_23967,G__23317_23968,G__23318_23969))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23316_23967,G__23317_23968,G__23318_23969,G__23319_23970) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23316_23967,G__23317_23968,G__23318_23969,G__23319_23970));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__23328 = arguments.length;
switch (G__23328) {
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
var len__4730__auto___23972 = arguments.length;
var i__4731__auto___23973 = (0);
while(true){
if((i__4731__auto___23973 < len__4730__auto___23972)){
args_arr__4751__auto__.push((arguments[i__4731__auto___23973]));

var G__23974 = (i__4731__auto___23973 + (1));
i__4731__auto___23973 = G__23974;
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
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq23325){
var G__23326 = cljs.core.first(seq23325);
var seq23325__$1 = cljs.core.next(seq23325);
var G__23327 = cljs.core.first(seq23325__$1);
var seq23325__$2 = cljs.core.next(seq23325__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23326,G__23327,seq23325__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__23341_23975 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23342_23976 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23343_23977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23344_23978 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23345_23979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23346_23980 = ((function (G__23341_23975,G__23342_23976,G__23343_23977,G__23344_23978,G__23345_23979){
return (function (p__23351,p__23352){
var vec__23357 = p__23351;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23357,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23357,(1),null);
var vec__23360 = p__23352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23360,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23360,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__23365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23365,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23365,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__23341_23975,G__23342_23976,G__23343_23977,G__23344_23978,G__23345_23979))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23341_23975,G__23342_23976,G__23343_23977,G__23344_23978,G__23345_23979,G__23346_23980) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23341_23975,G__23342_23976,G__23343_23977,G__23344_23978,G__23345_23979,G__23346_23980));
var G__23372_23981 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23373_23982 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23374_23983 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23375_23984 = ((function (G__23372_23981,G__23373_23982,G__23374_23983){
return (function (match){
var map__23377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__23377__$1 = (((((!((map__23377 == null))))?(((((map__23377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23377):map__23377);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23377__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23377__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23377__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23377__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__23372_23981,G__23373_23982,G__23374_23983))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23372_23981,G__23373_23982,G__23374_23983,G__23375_23984) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23372_23981,G__23373_23982,G__23374_23983,G__23375_23984));
var G__23379_23985 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__23380_23986 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23381_23987 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23382_23988 = ((function (G__23379_23985,G__23380_23986,G__23381_23987){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__23379_23985,G__23380_23986,G__23381_23987))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23379_23985,G__23380_23986,G__23381_23987,G__23382_23988) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23379_23985,G__23380_23986,G__23381_23987,G__23382_23988));
var G__23383_23989 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__23384_23990 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23385_23991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23386_23992 = ((function (G__23383_23989,G__23384_23990,G__23385_23991){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__23383_23989,G__23384_23990,G__23385_23991))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23383_23989,G__23384_23990,G__23385_23991,G__23386_23992) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23383_23989,G__23384_23990,G__23385_23991,G__23386_23992));
var G__23387_23993 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__23388_23994 = ((function (G__23387_23993){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23387_23993))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23387_23993,G__23388_23994) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23387_23993,G__23388_23994));
var G__23389_23995 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23390_23996 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23391_23997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23392_23998 = ((function (G__23389_23995,G__23390_23996,G__23391_23997){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__23389_23995,G__23390_23996,G__23391_23997))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23389_23995,G__23390_23996,G__23391_23997,G__23392_23998) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23389_23995,G__23390_23996,G__23391_23997,G__23392_23998));
var G__23393_23999 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23394_24000 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23395_24001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23396_24002 = ((function (G__23393_23999,G__23394_24000,G__23395_24001){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23393_23999,G__23394_24000,G__23395_24001))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23393_23999,G__23394_24000,G__23395_24001,G__23396_24002) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23393_23999,G__23394_24000,G__23395_24001,G__23396_24002));
var G__23399_24003 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23400_24004 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23401_24005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23402_24006 = ((function (G__23399_24003,G__23400_24004,G__23401_24005){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23399_24003,G__23400_24004,G__23401_24005))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23399_24003,G__23400_24004,G__23401_24005,G__23402_24006) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23399_24003,G__23400_24004,G__23401_24005,G__23402_24006));
var G__23411_24007 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23412_24008 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23413_24009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23414_24010 = ((function (G__23411_24007,G__23412_24008,G__23413_24009){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23411_24007,G__23412_24008,G__23413_24009))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23411_24007,G__23412_24008,G__23413_24009,G__23414_24010) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23411_24007,G__23412_24008,G__23413_24009,G__23414_24010));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23416_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__23416_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23445){
return cljs.core.coll_QMARK_(G__23445);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23462){
return cljs.core.map_QMARK_(G__23462);
}),(function (G__23462){
return cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23462){
return cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23462){
return cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23462){
return cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23462){
return cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23462){
return cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23462){
return ((cljs.core.map_QMARK_(G__23462)) && (cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23462,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23511){
return cljs.core.coll_QMARK_(G__23511);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__23512 = sub_type;
var G__23512__$1 = (((G__23512 instanceof cljs.core.Keyword))?G__23512.fqn:null);
switch (G__23512__$1) {
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
var G__24012 = (exp - (1));
var G__24013 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__24014 = cljs.core.rest(order__$1);
exp = G__24012;
total = G__24013;
order__$1 = G__24014;
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
var G__23520 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__23520__$1 = (((G__23520 instanceof cljs.core.Keyword))?G__23520.fqn:null);
switch (G__23520__$1) {
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
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__23521,p__23522){
var vec__23523 = p__23521;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23523,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23523,(1),null);
var vec__23526 = p__23522;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__23523,sub_info,sub_state,vec__23526,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__23523,sub_info,sub_state,vec__23526,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__23523,sub_info,sub_state,vec__23526,subscription){
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
});})(remove_fn,vec__23523,sub_info,sub_state,vec__23526,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__23533_24016 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__23534_24017 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23535_24018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23536_24019 = ((function (G__23533_24016,G__23534_24017,G__23535_24018){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23533_24016,G__23534_24017,G__23535_24018))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23533_24016,G__23534_24017,G__23535_24018,G__23536_24019) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23533_24016,G__23534_24017,G__23535_24018,G__23536_24019));
var G__23537_24020 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__23538_24021 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23539_24022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23540_24023 = ((function (G__23537_24020,G__23538_24021,G__23539_24022){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23537_24020,G__23538_24021,G__23539_24022))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23537_24020,G__23538_24021,G__23539_24022,G__23540_24023) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23537_24020,G__23538_24021,G__23539_24022,G__23540_24023));
var G__23541_24024 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__23542_24025 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23543_24026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23544_24027 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23545_24028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__23546_24029 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23541_24024,G__23542_24025,G__23543_24026,G__23544_24027,G__23545_24028,G__23546_24029) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23541_24024,G__23542_24025,G__23543_24026,G__23544_24027,G__23545_24028,G__23546_24029));
var G__23549_24030 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__23550_24031 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23551_24032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23552_24033 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23553_24034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__23554_24035 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23549_24030,G__23550_24031,G__23551_24032,G__23552_24033,G__23553_24034,G__23554_24035) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23549_24030,G__23550_24031,G__23551_24032,G__23552_24033,G__23553_24034,G__23554_24035));
var G__23555_24036 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__23556_24037 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23557_24038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23558_24039 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23559_24040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__23560_24041 = ((function (G__23555_24036,G__23556_24037,G__23557_24038,G__23558_24039,G__23559_24040){
return (function (p__23563){
var vec__23568 = p__23563;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23568,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23568,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__23555_24036,G__23556_24037,G__23557_24038,G__23558_24039,G__23559_24040))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23555_24036,G__23556_24037,G__23557_24038,G__23558_24039,G__23559_24040,G__23560_24041) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23555_24036,G__23556_24037,G__23557_24038,G__23558_24039,G__23559_24040,G__23560_24041));
var G__23574_24042 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__23575_24043 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23576_24044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__23577_24045 = ((function (G__23574_24042,G__23575_24043,G__23576_24044){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__23574_24042,G__23575_24043,G__23576_24044))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23574_24042,G__23575_24043,G__23576_24044,G__23577_24045) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23574_24042,G__23575_24043,G__23576_24044,G__23577_24045));
var G__23583_24046 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__23584_24047 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23585_24048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23586_24049 = ((function (G__23583_24046,G__23584_24047,G__23585_24048){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__23583_24046,G__23584_24047,G__23585_24048))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23583_24046,G__23584_24047,G__23585_24048,G__23586_24049) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23583_24046,G__23584_24047,G__23585_24048,G__23586_24049));
var G__23594_24050 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__23595_24051 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23596_24052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23597_24053 = ((function (G__23594_24050,G__23595_24051,G__23596_24052){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__23594_24050,G__23595_24051,G__23596_24052))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23594_24050,G__23595_24051,G__23596_24052,G__23597_24053) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23594_24050,G__23595_24051,G__23596_24052,G__23597_24053));
var G__23602_24054 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__23603_24055 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23604_24056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23605_24057 = ((function (G__23602_24054,G__23603_24055,G__23604_24056){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__23602_24054,G__23603_24055,G__23604_24056))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23602_24054,G__23603_24055,G__23604_24056,G__23605_24057) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23602_24054,G__23603_24055,G__23604_24056,G__23605_24057));
var G__23613_24058 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__23614_24059 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23615_24060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23616_24061 = ((function (G__23613_24058,G__23614_24059,G__23615_24060){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__23613_24058,G__23614_24059,G__23615_24060))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23613_24058,G__23614_24059,G__23615_24060,G__23616_24061) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23613_24058,G__23614_24059,G__23615_24060,G__23616_24061));
var G__23617_24062 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__23618_24063 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23619_24064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23620_24065 = ((function (G__23617_24062,G__23618_24063,G__23619_24064){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__23617_24062,G__23618_24063,G__23619_24064))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23617_24062,G__23618_24063,G__23619_24064,G__23620_24065) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23617_24062,G__23618_24063,G__23619_24064,G__23620_24065));
var G__23624_24066 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__23625_24067 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23626_24068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23627_24069 = ((function (G__23624_24066,G__23625_24067,G__23626_24068){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__23624_24066,G__23625_24067,G__23626_24068))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23624_24066,G__23625_24067,G__23626_24068,G__23627_24069) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23624_24066,G__23625_24067,G__23626_24068,G__23627_24069));
var G__23631_24070 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__23632_24071 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23633_24072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23634_24073 = ((function (G__23631_24070,G__23632_24071,G__23633_24072){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__23631_24070,G__23632_24071,G__23633_24072))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23631_24070,G__23632_24071,G__23633_24072,G__23634_24073) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23631_24070,G__23632_24071,G__23633_24072,G__23634_24073));
var G__23638_24074 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__23639_24075 = ((function (G__23638_24074){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23638_24074))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23638_24074,G__23639_24075) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23638_24074,G__23639_24075));
var G__23653_24076 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__23654_24077 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23655_24078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23656_24079 = ((function (G__23653_24076,G__23654_24077,G__23655_24078){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__23653_24076,G__23654_24077,G__23655_24078){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__23653_24076,G__23654_24077,G__23655_24078){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__23653_24076,G__23654_24077,G__23655_24078))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__23653_24076,G__23654_24077,G__23655_24078))
,traces);
});})(G__23653_24076,G__23654_24077,G__23655_24078))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23653_24076,G__23654_24077,G__23655_24078,G__23656_24079) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23653_24076,G__23654_24077,G__23655_24078,G__23656_24079));
var G__23682_24080 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__23683_24081 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23684_24082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__23685_24083 = ((function (G__23682_24080,G__23683_24081,G__23684_24082){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__23682_24080,G__23683_24081,G__23684_24082))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23682_24080,G__23683_24081,G__23684_24082,G__23685_24083) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23682_24080,G__23683_24081,G__23684_24082,G__23685_24083));
var G__23689_24084 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__23690_24085 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23691_24086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__23692_24087 = ((function (G__23689_24084,G__23690_24085,G__23691_24086){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__23689_24084,G__23690_24085,G__23691_24086))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23689_24084,G__23690_24085,G__23691_24086,G__23692_24087) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23689_24084,G__23690_24085,G__23691_24086,G__23692_24087));
var G__23694_24088 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__23705_24089 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23706_24090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23707_24091 = ((function (G__23694_24088,G__23705_24089,G__23706_24090){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23694_24088,G__23705_24089,G__23706_24090))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23694_24088,G__23705_24089,G__23706_24090,G__23707_24091) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23694_24088,G__23705_24089,G__23706_24090,G__23707_24091));
var G__23720_24092 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__23721_24093 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23722_24094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23723_24095 = ((function (G__23720_24092,G__23721_24093,G__23722_24094){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23720_24092,G__23721_24093,G__23722_24094))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23720_24092,G__23721_24093,G__23722_24094,G__23723_24095) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23720_24092,G__23721_24093,G__23722_24094,G__23723_24095));
var G__23727_24096 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__23728_24097 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23729_24098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23730_24099 = ((function (G__23727_24096,G__23728_24097,G__23729_24098){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23727_24096,G__23728_24097,G__23729_24098))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23727_24096,G__23728_24097,G__23729_24098,G__23730_24099) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23727_24096,G__23728_24097,G__23729_24098,G__23730_24099));
var G__23731_24100 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__23732_24101 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23733_24102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23734_24103 = ((function (G__23731_24100,G__23732_24101,G__23733_24102){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23731_24100,G__23732_24101,G__23733_24102))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23731_24100,G__23732_24101,G__23733_24102,G__23734_24103) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23731_24100,G__23732_24101,G__23733_24102,G__23734_24103));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__23735_24104 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__23736_24105 = ((function (G__23735_24104){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__23735_24104))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23735_24104,G__23736_24105) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23735_24104,G__23736_24105));
var G__23741_24106 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__23742_24107 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23743_24108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__23744_24109 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23745_24110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__23746_24111 = ((function (G__23741_24106,G__23742_24107,G__23743_24108,G__23744_24109,G__23745_24110){
return (function (p__23748,_){
var vec__23749 = p__23748;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23749,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23749,(1),null);
var G__23752 = (window_width / char_width);
return Math.ceil(G__23752);
});})(G__23741_24106,G__23742_24107,G__23743_24108,G__23744_24109,G__23745_24110))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23741_24106,G__23742_24107,G__23743_24108,G__23744_24109,G__23745_24110,G__23746_24111) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23741_24106,G__23742_24107,G__23743_24108,G__23744_24109,G__23745_24110,G__23746_24111));
var G__23755_24112 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__23756_24113 = ((function (G__23755_24112){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23755_24112))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23755_24112,G__23756_24113) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23755_24112,G__23756_24113));
var G__23757_24114 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__23758_24115 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23759_24116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__23760_24117 = ((function (G__23757_24114,G__23758_24115,G__23759_24116){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__23757_24114,G__23758_24115,G__23759_24116))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23757_24114,G__23758_24115,G__23759_24116,G__23760_24117) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23757_24114,G__23758_24115,G__23759_24116,G__23760_24117));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
