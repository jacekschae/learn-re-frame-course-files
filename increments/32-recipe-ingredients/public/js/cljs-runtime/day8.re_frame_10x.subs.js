goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__23030_23776 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__23031_23777 = ((function (G__23030_23776){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__23030_23776))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23030_23776,G__23031_23777) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23030_23776,G__23031_23777));
var G__23032_23778 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__23033_23779 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23034_23780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23035_23781 = ((function (G__23032_23778,G__23033_23779,G__23034_23780){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__23032_23778,G__23033_23779,G__23034_23780))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23032_23778,G__23033_23779,G__23034_23780,G__23035_23781) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23032_23778,G__23033_23779,G__23034_23780,G__23035_23781));
var G__23036_23782 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__23037_23783 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23038_23784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__23039_23785 = ((function (G__23036_23782,G__23037_23783,G__23038_23784){
return (function (panel_width_PERCENT_,p__23040){
var vec__23041 = p__23040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23041,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23041,(1),null);
return (((function (){var G__23044 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23044);
})() * n) / 100.0);
});})(G__23036_23782,G__23037_23783,G__23038_23784))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23036_23782,G__23037_23783,G__23038_23784,G__23039_23785) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23036_23782,G__23037_23783,G__23038_23784,G__23039_23785));
var G__23045_23786 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23046_23787 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23047_23788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23048_23789 = ((function (G__23045_23786,G__23046_23787,G__23047_23788){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23045_23786,G__23046_23787,G__23047_23788))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23045_23786,G__23046_23787,G__23047_23788,G__23048_23789) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23045_23786,G__23046_23787,G__23047_23788,G__23048_23789));
var G__23049_23790 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23050_23791 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23051_23792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23052_23793 = ((function (G__23049_23790,G__23050_23791,G__23051_23792){
return (function (width,p__23053){
var vec__23054 = p__23053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23054,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23054,(1),null);
return ((function (){var G__23057 = (width / n);
return Math.ceil(G__23057);
})() * n);
});})(G__23049_23790,G__23050_23791,G__23051_23792))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23049_23790,G__23050_23791,G__23051_23792,G__23052_23793) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23049_23790,G__23050_23791,G__23051_23792,G__23052_23793));
var G__23058_23794 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23059_23795 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23060_23796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23061_23797 = ((function (G__23058_23794,G__23059_23795,G__23060_23796){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23058_23794,G__23059_23795,G__23060_23796))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23058_23794,G__23059_23795,G__23060_23796,G__23061_23797) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23058_23794,G__23059_23795,G__23060_23796,G__23061_23797));
var G__23065_23798 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23066_23799 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23067_23800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23068_23801 = ((function (G__23065_23798,G__23066_23799,G__23067_23800){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23065_23798,G__23066_23799,G__23067_23800))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23065_23798,G__23066_23799,G__23067_23800,G__23068_23801) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23065_23798,G__23066_23799,G__23067_23800,G__23068_23801));
var G__23069_23802 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23070_23803 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23071_23804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23072_23805 = ((function (G__23069_23802,G__23070_23803,G__23071_23804){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23069_23802,G__23070_23803,G__23071_23804))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23069_23802,G__23070_23803,G__23071_23804,G__23072_23805) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23069_23802,G__23070_23803,G__23071_23804,G__23072_23805));
var G__23073_23806 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23074_23807 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23075_23808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23076_23809 = ((function (G__23073_23806,G__23074_23807,G__23075_23808){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23073_23806,G__23074_23807,G__23075_23808))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23073_23806,G__23074_23807,G__23075_23808,G__23076_23809) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23073_23806,G__23074_23807,G__23075_23808,G__23076_23809));
var G__23077_23810 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23078_23811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23079_23812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23080_23813 = ((function (G__23077_23810,G__23078_23811,G__23079_23812){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23077_23810,G__23078_23811,G__23079_23812))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23077_23810,G__23078_23811,G__23079_23812,G__23080_23813) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23077_23810,G__23078_23811,G__23079_23812,G__23080_23813));
var G__23081_23814 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23082_23815 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23083_23816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23084_23817 = ((function (G__23081_23814,G__23082_23815,G__23083_23816){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23081_23814,G__23082_23815,G__23083_23816))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23081_23814,G__23082_23815,G__23083_23816,G__23084_23817) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23081_23814,G__23082_23815,G__23083_23816,G__23084_23817));
var G__23087_23818 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23088_23819 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23089_23820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23090_23821 = ((function (G__23087_23818,G__23088_23819,G__23089_23820){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23087_23818,G__23088_23819,G__23089_23820))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23087_23818,G__23088_23819,G__23089_23820,G__23090_23821) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23087_23818,G__23088_23819,G__23089_23820,G__23090_23821));
var G__23091_23822 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23092_23823 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23093_23824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23094_23825 = ((function (G__23091_23822,G__23092_23823,G__23093_23824){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23091_23822,G__23092_23823,G__23093_23824))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23091_23822,G__23092_23823,G__23093_23824,G__23094_23825) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23091_23822,G__23092_23823,G__23093_23824,G__23094_23825));
var G__23097_23826 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23098_23827 = ((function (G__23097_23826){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23097_23826))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23097_23826,G__23098_23827) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23097_23826,G__23098_23827));
var G__23100_23828 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23101_23829 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23102_23830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23103_23831 = ((function (G__23100_23828,G__23101_23829,G__23102_23830){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23100_23828,G__23101_23829,G__23102_23830))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23100_23828,G__23101_23829,G__23102_23830,G__23103_23831) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23100_23828,G__23101_23829,G__23102_23830,G__23103_23831));
var G__23105_23832 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23106_23833 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23107_23834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23108_23835 = ((function (G__23105_23832,G__23106_23833,G__23107_23834){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23105_23832,G__23106_23833,G__23107_23834))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23105_23832,G__23106_23833,G__23107_23834,G__23108_23835) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23105_23832,G__23106_23833,G__23107_23834,G__23108_23835));
var G__23110_23836 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23111_23837 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23112_23838 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23113_23839 = ((function (G__23110_23836,G__23111_23837,G__23112_23838){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23110_23836,G__23111_23837,G__23112_23838){
return (function (p1__23109_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23109_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23109_SHARP_));
});})(G__23110_23836,G__23111_23837,G__23112_23838))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23110_23836,G__23111_23837,G__23112_23838))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23110_23836,G__23111_23837,G__23112_23838,G__23113_23839) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23110_23836,G__23111_23837,G__23112_23838,G__23113_23839));
var G__23114_23840 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23115_23841 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23116_23842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23117_23843 = ((function (G__23114_23840,G__23115_23841,G__23116_23842){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23114_23840,G__23115_23841,G__23116_23842))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23114_23840,G__23115_23841,G__23116_23842,G__23117_23843) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23114_23840,G__23115_23841,G__23116_23842,G__23117_23843));
var G__23120_23844 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23121_23845 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23122_23846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23123_23847 = ((function (G__23120_23844,G__23121_23845,G__23122_23846){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23120_23844,G__23121_23845,G__23122_23846))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23120_23844,G__23121_23845,G__23122_23846,G__23123_23847) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23120_23844,G__23121_23845,G__23122_23846,G__23123_23847));
var G__23128_23848 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23129_23849 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23130_23850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23131_23851 = ((function (G__23128_23848,G__23129_23849,G__23130_23850){
return (function (expansions,p__23132){
var vec__23137 = p__23132;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23128_23848,G__23129_23849,G__23130_23850))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23128_23848,G__23129_23849,G__23130_23850,G__23131_23851) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23128_23848,G__23129_23849,G__23130_23850,G__23131_23851));
var G__23143_23852 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23144_23853 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23145_23854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23146_23855 = ((function (G__23143_23852,G__23144_23853,G__23145_23854){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23143_23852,G__23144_23853,G__23145_23854))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23143_23852,G__23144_23853,G__23145_23854,G__23146_23855) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23143_23852,G__23144_23853,G__23145_23854,G__23146_23855));
var G__23147_23856 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23148_23857 = ((function (G__23147_23856){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23147_23856))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23147_23856,G__23148_23857) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23147_23856,G__23148_23857));
var G__23154_23858 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23155_23859 = ((function (G__23154_23858){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23154_23858))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23154_23858,G__23155_23859) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23154_23858,G__23155_23859));
var G__23159_23860 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23160_23861 = ((function (G__23159_23860){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23159_23860))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23159_23860,G__23160_23861) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23159_23860,G__23160_23861));
var G__23164_23862 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23165_23863 = ((function (G__23164_23862){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23164_23862))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23164_23862,G__23165_23863) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23164_23862,G__23165_23863));
var G__23171_23864 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23172_23865 = ((function (G__23171_23864){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23171_23864))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23171_23864,G__23172_23865) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23171_23864,G__23172_23865));
var G__23179_23866 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23180_23867 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23181_23868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23182_23869 = ((function (G__23179_23866,G__23180_23867,G__23181_23868){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23179_23866,G__23180_23867,G__23181_23868))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23179_23866,G__23180_23867,G__23181_23868,G__23182_23869) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23179_23866,G__23180_23867,G__23181_23868,G__23182_23869));
var G__23184_23870 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23185_23871 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23186_23872 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23187_23873 = ((function (G__23184_23870,G__23185_23871,G__23186_23872){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23184_23870,G__23185_23871,G__23186_23872))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23184_23870,G__23185_23871,G__23186_23872,G__23187_23873) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23184_23870,G__23185_23871,G__23186_23872,G__23187_23873));
var G__23191_23874 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23192_23875 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23193_23876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23194_23877 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23195_23878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23196_23879 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23197_23880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23198_23881 = ((function (G__23191_23874,G__23192_23875,G__23193_23876,G__23194_23877,G__23195_23878,G__23196_23879,G__23197_23880){
return (function (p__23202,_){
var vec__23203 = p__23202;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23191_23874,G__23192_23875,G__23193_23876,G__23194_23877,G__23195_23878,G__23196_23879,G__23197_23880))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23191_23874,G__23192_23875,G__23193_23876,G__23194_23877,G__23195_23878,G__23196_23879,G__23197_23880,G__23198_23881) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23191_23874,G__23192_23875,G__23193_23876,G__23194_23877,G__23195_23878,G__23196_23879,G__23197_23880,G__23198_23881));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__23218,_){
var vec__23220 = p__23218;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23220,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__23220,traces,filtered_views))
),traces);
});
var G__23223_23882 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23224_23883 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23225_23884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23226_23885 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23227_23886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23228_23887 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23223_23882,G__23224_23883,G__23225_23884,G__23226_23885,G__23227_23886,G__23228_23887) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23223_23882,G__23224_23883,G__23225_23884,G__23226_23885,G__23227_23886,G__23228_23887));
var G__23231_23888 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23232_23889 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23233_23890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23234_23891 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23235_23892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23236_23893 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23231_23888,G__23232_23889,G__23233_23890,G__23234_23891,G__23235_23892,G__23236_23893) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23231_23888,G__23232_23889,G__23233_23890,G__23234_23891,G__23235_23892,G__23236_23893));
var G__23237_23894 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23238_23895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23239_23896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23240_23897 = ((function (G__23237_23894,G__23238_23895,G__23239_23896){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23237_23894,G__23238_23895,G__23239_23896))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23237_23894,G__23238_23895,G__23239_23896,G__23240_23897) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23237_23894,G__23238_23895,G__23239_23896,G__23240_23897));
var G__23241_23898 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23242_23899 = ((function (G__23241_23898){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23241_23898))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23241_23898,G__23242_23899) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23241_23898,G__23242_23899));
var G__23243_23900 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23244_23901 = ((function (G__23243_23900){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23243_23900))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23243_23900,G__23244_23901) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23243_23900,G__23244_23901));
var G__23247_23902 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23248_23903 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23249_23904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23250_23905 = ((function (G__23247_23902,G__23248_23903,G__23249_23904){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23247_23902,G__23248_23903,G__23249_23904))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23247_23902,G__23248_23903,G__23249_23904,G__23250_23905) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23247_23902,G__23248_23903,G__23249_23904,G__23250_23905));
var G__23251_23906 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23252_23907 = ((function (G__23251_23906){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23251_23906))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23251_23906,G__23252_23907) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23251_23906,G__23252_23907));
var G__23253_23908 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23254_23909 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23255_23910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23256_23911 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23257_23912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23258_23913 = ((function (G__23253_23908,G__23254_23909,G__23255_23910,G__23256_23911,G__23257_23912){
return (function (p__23264,_){
var vec__23265 = p__23264;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23265,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23265,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23253_23908,G__23254_23909,G__23255_23910,G__23256_23911,G__23257_23912))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23253_23908,G__23254_23909,G__23255_23910,G__23256_23911,G__23257_23912,G__23258_23913) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23253_23908,G__23254_23909,G__23255_23910,G__23256_23911,G__23257_23912,G__23258_23913));
var G__23274_23914 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23275_23915 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23276_23916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23277_23917 = ((function (G__23274_23914,G__23275_23915,G__23276_23916){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23274_23914,G__23275_23915,G__23276_23916))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23274_23914,G__23275_23915,G__23276_23916,G__23277_23917) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23274_23914,G__23275_23915,G__23276_23916,G__23277_23917));
var G__23283_23918 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23284_23919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23285_23920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23286_23921 = ((function (G__23283_23918,G__23284_23919,G__23285_23920){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__23283_23918,G__23284_23919,G__23285_23920))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23283_23918,G__23284_23919,G__23285_23920,G__23286_23921) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23283_23918,G__23284_23919,G__23285_23920,G__23286_23921));
var G__23301_23922 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23302_23923 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23303_23924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23304_23925 = ((function (G__23301_23922,G__23302_23923,G__23303_23924){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23301_23922,G__23302_23923,G__23303_23924))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23301_23922,G__23302_23923,G__23303_23924,G__23304_23925) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23301_23922,G__23302_23923,G__23303_23924,G__23304_23925));
var G__23312_23926 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23313_23927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23314_23928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23315_23929 = ((function (G__23312_23926,G__23313_23927,G__23314_23928){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23312_23926,G__23313_23927,G__23314_23928))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23312_23926,G__23313_23927,G__23314_23928,G__23315_23929) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23312_23926,G__23313_23927,G__23314_23928,G__23315_23929));
var G__23332_23930 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23333_23931 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23334_23932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23335_23933 = ((function (G__23332_23930,G__23333_23931,G__23334_23932){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23332_23930,G__23333_23931,G__23334_23932))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23332_23930,G__23333_23931,G__23334_23932,G__23335_23933) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23332_23930,G__23333_23931,G__23334_23932,G__23335_23933));
var G__23336_23934 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23337_23935 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23338_23936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23339_23937 = ((function (G__23336_23934,G__23337_23935,G__23338_23936){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__23336_23934,G__23337_23935,G__23338_23936))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23336_23934,G__23337_23935,G__23338_23936,G__23339_23937) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23336_23934,G__23337_23935,G__23338_23936,G__23339_23937));
var G__23344_23938 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23345_23939 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23346_23940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23347_23941 = ((function (G__23344_23938,G__23345_23939,G__23346_23940){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23344_23938,G__23345_23939,G__23346_23940))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23344_23938,G__23345_23939,G__23346_23940,G__23347_23941) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23344_23938,G__23345_23939,G__23346_23940,G__23347_23941));
var G__23352_23942 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23353_23943 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23354_23944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23355_23945 = ((function (G__23352_23942,G__23353_23943,G__23354_23944){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23352_23942,G__23353_23943,G__23354_23944))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23352_23942,G__23353_23943,G__23354_23944,G__23355_23945) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23352_23942,G__23353_23943,G__23354_23944,G__23355_23945));
var G__23356_23946 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23357_23947 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23358_23948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23359_23949 = ((function (G__23356_23946,G__23357_23947,G__23358_23948){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23356_23946,G__23357_23947,G__23358_23948))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23356_23946,G__23357_23947,G__23358_23948,G__23359_23949) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23356_23946,G__23357_23947,G__23358_23948,G__23359_23949));
var G__23372_23950 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23373_23951 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23374_23952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23375_23953 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23376_23954 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23377_23955 = ((function (G__23372_23950,G__23373_23951,G__23374_23952,G__23375_23953,G__23376_23954){
return (function (p__23382){
var vec__23383 = p__23382;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23383,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23383,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23372_23950,G__23373_23951,G__23374_23952,G__23375_23953,G__23376_23954))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23372_23950,G__23373_23951,G__23374_23952,G__23375_23953,G__23376_23954,G__23377_23955) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23372_23950,G__23373_23951,G__23374_23952,G__23375_23953,G__23376_23954,G__23377_23955));
var G__23420_23956 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23421_23957 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23422_23958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23423_23959 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23424_23960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23425_23961 = ((function (G__23420_23956,G__23421_23957,G__23422_23958,G__23423_23959,G__23424_23960){
return (function (p__23434){
var vec__23435 = p__23434;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23435,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23435,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__23420_23956,G__23421_23957,G__23422_23958,G__23423_23959,G__23424_23960))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23420_23956,G__23421_23957,G__23422_23958,G__23423_23959,G__23424_23960,G__23425_23961) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23420_23956,G__23421_23957,G__23422_23958,G__23423_23959,G__23424_23960,G__23425_23961));
var G__23446_23962 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23447_23963 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23448_23964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23449_23965 = ((function (G__23446_23962,G__23447_23963,G__23448_23964){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23446_23962,G__23447_23963,G__23448_23964))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23446_23962,G__23447_23963,G__23448_23964,G__23449_23965) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23446_23962,G__23447_23963,G__23448_23964,G__23449_23965));
var G__23458_23966 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23459_23967 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23460_23968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23461_23969 = ((function (G__23458_23966,G__23459_23967,G__23460_23968){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23458_23966,G__23459_23967,G__23460_23968){
return (function (p1__23457_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__23457_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__23457_SHARP_)));
});})(G__23458_23966,G__23459_23967,G__23460_23968))
,traces);
});})(G__23458_23966,G__23459_23967,G__23460_23968))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23458_23966,G__23459_23967,G__23460_23968,G__23461_23969) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23458_23966,G__23459_23967,G__23460_23968,G__23461_23969));
var G__23463_23970 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23464_23971 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23465_23972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23466_23973 = ((function (G__23463_23970,G__23464_23971,G__23465_23972){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23463_23970,G__23464_23971,G__23465_23972))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23463_23970,G__23464_23971,G__23465_23972,G__23466_23973) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23463_23970,G__23464_23971,G__23465_23972,G__23466_23973));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__23471 = arguments.length;
switch (G__23471) {
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
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq23468){
var G__23469 = cljs.core.first(seq23468);
var seq23468__$1 = cljs.core.next(seq23468);
var G__23470 = cljs.core.first(seq23468__$1);
var seq23468__$2 = cljs.core.next(seq23468__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23469,G__23470,seq23468__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__23479_23978 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23480_23979 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23481_23980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23482_23981 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23483_23982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23484_23983 = ((function (G__23479_23978,G__23480_23979,G__23481_23980,G__23482_23981,G__23483_23982){
return (function (p__23485,p__23486){
var vec__23487 = p__23485;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23487,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23487,(1),null);
var vec__23490 = p__23486;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__23493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23493,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23493,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__23479_23978,G__23480_23979,G__23481_23980,G__23482_23981,G__23483_23982))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23479_23978,G__23480_23979,G__23481_23980,G__23482_23981,G__23483_23982,G__23484_23983) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23479_23978,G__23480_23979,G__23481_23980,G__23482_23981,G__23483_23982,G__23484_23983));
var G__23499_23984 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23500_23985 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23501_23986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23502_23987 = ((function (G__23499_23984,G__23500_23985,G__23501_23986){
return (function (match){
var map__23503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__23503__$1 = (((((!((map__23503 == null))))?(((((map__23503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23503):map__23503);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23503__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23503__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23503__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23503__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__23499_23984,G__23500_23985,G__23501_23986))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23499_23984,G__23500_23985,G__23501_23986,G__23502_23987) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23499_23984,G__23500_23985,G__23501_23986,G__23502_23987));
var G__23505_23988 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__23506_23989 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23507_23990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23508_23991 = ((function (G__23505_23988,G__23506_23989,G__23507_23990){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__23505_23988,G__23506_23989,G__23507_23990))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23505_23988,G__23506_23989,G__23507_23990,G__23508_23991) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23505_23988,G__23506_23989,G__23507_23990,G__23508_23991));
var G__23509_23992 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__23510_23993 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23511_23994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23512_23995 = ((function (G__23509_23992,G__23510_23993,G__23511_23994){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__23509_23992,G__23510_23993,G__23511_23994))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23509_23992,G__23510_23993,G__23511_23994,G__23512_23995) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23509_23992,G__23510_23993,G__23511_23994,G__23512_23995));
var G__23515_23996 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__23516_23997 = ((function (G__23515_23996){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23515_23996))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23515_23996,G__23516_23997) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23515_23996,G__23516_23997));
var G__23517_23998 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23518_23999 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23519_24000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23520_24001 = ((function (G__23517_23998,G__23518_23999,G__23519_24000){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__23517_23998,G__23518_23999,G__23519_24000))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23517_23998,G__23518_23999,G__23519_24000,G__23520_24001) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23517_23998,G__23518_23999,G__23519_24000,G__23520_24001));
var G__23522_24002 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23523_24003 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23524_24004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23525_24005 = ((function (G__23522_24002,G__23523_24003,G__23524_24004){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23522_24002,G__23523_24003,G__23524_24004))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23522_24002,G__23523_24003,G__23524_24004,G__23525_24005) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23522_24002,G__23523_24003,G__23524_24004,G__23525_24005));
var G__23530_24006 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23531_24007 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23532_24008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23533_24009 = ((function (G__23530_24006,G__23531_24007,G__23532_24008){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23530_24006,G__23531_24007,G__23532_24008))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23530_24006,G__23531_24007,G__23532_24008,G__23533_24009) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23530_24006,G__23531_24007,G__23532_24008,G__23533_24009));
var G__23535_24010 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23536_24011 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23537_24012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23538_24013 = ((function (G__23535_24010,G__23536_24011,G__23537_24012){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23535_24010,G__23536_24011,G__23537_24012))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23535_24010,G__23536_24011,G__23537_24012,G__23538_24013) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23535_24010,G__23536_24011,G__23537_24012,G__23538_24013));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23543_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__23543_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23549){
return cljs.core.coll_QMARK_(G__23549);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23554){
return cljs.core.map_QMARK_(G__23554);
}),(function (G__23554){
return cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23554){
return cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23554){
return cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23554){
return cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23554){
return cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23554){
return cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23554){
return ((cljs.core.map_QMARK_(G__23554)) && (cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23554,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23626){
return cljs.core.coll_QMARK_(G__23626);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__23628 = sub_type;
var G__23628__$1 = (((G__23628 instanceof cljs.core.Keyword))?G__23628.fqn:null);
switch (G__23628__$1) {
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
var G__23641 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__23641__$1 = (((G__23641 instanceof cljs.core.Keyword))?G__23641.fqn:null);
switch (G__23641__$1) {
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
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__23646,p__23647){
var vec__23649 = p__23646;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23649,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23649,(1),null);
var vec__23652 = p__23647;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23652,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__23649,sub_info,sub_state,vec__23652,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__23649,sub_info,sub_state,vec__23652,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__23649,sub_info,sub_state,vec__23652,subscription){
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
});})(remove_fn,vec__23649,sub_info,sub_state,vec__23652,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__23657_24019 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__23658_24020 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23659_24021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23660_24022 = ((function (G__23657_24019,G__23658_24020,G__23659_24021){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23657_24019,G__23658_24020,G__23659_24021))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23657_24019,G__23658_24020,G__23659_24021,G__23660_24022) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23657_24019,G__23658_24020,G__23659_24021,G__23660_24022));
var G__23661_24023 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__23662_24024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23663_24025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23664_24026 = ((function (G__23661_24023,G__23662_24024,G__23663_24025){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23661_24023,G__23662_24024,G__23663_24025))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23661_24023,G__23662_24024,G__23663_24025,G__23664_24026) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23661_24023,G__23662_24024,G__23663_24025,G__23664_24026));
var G__23665_24027 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__23666_24028 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23667_24029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23668_24030 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23669_24031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__23670_24032 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23665_24027,G__23666_24028,G__23667_24029,G__23668_24030,G__23669_24031,G__23670_24032) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23665_24027,G__23666_24028,G__23667_24029,G__23668_24030,G__23669_24031,G__23670_24032));
var G__23671_24033 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__23672_24034 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23673_24035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23674_24036 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23675_24037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__23676_24038 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23671_24033,G__23672_24034,G__23673_24035,G__23674_24036,G__23675_24037,G__23676_24038) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23671_24033,G__23672_24034,G__23673_24035,G__23674_24036,G__23675_24037,G__23676_24038));
var G__23677_24039 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__23678_24040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23679_24041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23680_24042 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23681_24043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__23682_24044 = ((function (G__23677_24039,G__23678_24040,G__23679_24041,G__23680_24042,G__23681_24043){
return (function (p__23683){
var vec__23684 = p__23683;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23684,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23684,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__23677_24039,G__23678_24040,G__23679_24041,G__23680_24042,G__23681_24043))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23677_24039,G__23678_24040,G__23679_24041,G__23680_24042,G__23681_24043,G__23682_24044) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23677_24039,G__23678_24040,G__23679_24041,G__23680_24042,G__23681_24043,G__23682_24044));
var G__23687_24045 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__23688_24046 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23689_24047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__23690_24048 = ((function (G__23687_24045,G__23688_24046,G__23689_24047){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__23687_24045,G__23688_24046,G__23689_24047))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23687_24045,G__23688_24046,G__23689_24047,G__23690_24048) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23687_24045,G__23688_24046,G__23689_24047,G__23690_24048));
var G__23696_24049 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__23697_24050 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23698_24051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23699_24052 = ((function (G__23696_24049,G__23697_24050,G__23698_24051){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__23696_24049,G__23697_24050,G__23698_24051))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23696_24049,G__23697_24050,G__23698_24051,G__23699_24052) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23696_24049,G__23697_24050,G__23698_24051,G__23699_24052));
var G__23700_24053 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__23701_24054 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23702_24055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23703_24056 = ((function (G__23700_24053,G__23701_24054,G__23702_24055){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__23700_24053,G__23701_24054,G__23702_24055))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23700_24053,G__23701_24054,G__23702_24055,G__23703_24056) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23700_24053,G__23701_24054,G__23702_24055,G__23703_24056));
var G__23704_24057 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__23705_24058 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23706_24059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23707_24060 = ((function (G__23704_24057,G__23705_24058,G__23706_24059){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__23704_24057,G__23705_24058,G__23706_24059))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23704_24057,G__23705_24058,G__23706_24059,G__23707_24060) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23704_24057,G__23705_24058,G__23706_24059,G__23707_24060));
var G__23708_24061 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__23709_24062 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23710_24063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23711_24064 = ((function (G__23708_24061,G__23709_24062,G__23710_24063){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__23708_24061,G__23709_24062,G__23710_24063))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23708_24061,G__23709_24062,G__23710_24063,G__23711_24064) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23708_24061,G__23709_24062,G__23710_24063,G__23711_24064));
var G__23712_24065 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__23713_24066 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23714_24067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23715_24068 = ((function (G__23712_24065,G__23713_24066,G__23714_24067){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__23712_24065,G__23713_24066,G__23714_24067))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23712_24065,G__23713_24066,G__23714_24067,G__23715_24068) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23712_24065,G__23713_24066,G__23714_24067,G__23715_24068));
var G__23718_24069 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__23719_24070 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23720_24071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23721_24072 = ((function (G__23718_24069,G__23719_24070,G__23720_24071){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__23718_24069,G__23719_24070,G__23720_24071))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23718_24069,G__23719_24070,G__23720_24071,G__23721_24072) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23718_24069,G__23719_24070,G__23720_24071,G__23721_24072));
var G__23722_24073 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__23723_24074 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23724_24075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23725_24076 = ((function (G__23722_24073,G__23723_24074,G__23724_24075){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__23722_24073,G__23723_24074,G__23724_24075))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23722_24073,G__23723_24074,G__23724_24075,G__23725_24076) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23722_24073,G__23723_24074,G__23724_24075,G__23725_24076));
var G__23726_24077 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__23727_24078 = ((function (G__23726_24077){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23726_24077))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23726_24077,G__23727_24078) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23726_24077,G__23727_24078));
var G__23728_24079 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__23729_24080 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23730_24081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23731_24082 = ((function (G__23728_24079,G__23729_24080,G__23730_24081){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__23728_24079,G__23729_24080,G__23730_24081){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__23728_24079,G__23729_24080,G__23730_24081){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__23728_24079,G__23729_24080,G__23730_24081))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__23728_24079,G__23729_24080,G__23730_24081))
,traces);
});})(G__23728_24079,G__23729_24080,G__23730_24081))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23728_24079,G__23729_24080,G__23730_24081,G__23731_24082) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23728_24079,G__23729_24080,G__23730_24081,G__23731_24082));
var G__23732_24083 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__23733_24084 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23734_24085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__23735_24086 = ((function (G__23732_24083,G__23733_24084,G__23734_24085){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__23732_24083,G__23733_24084,G__23734_24085))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23732_24083,G__23733_24084,G__23734_24085,G__23735_24086) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23732_24083,G__23733_24084,G__23734_24085,G__23735_24086));
var G__23736_24087 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__23737_24088 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23738_24089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__23739_24090 = ((function (G__23736_24087,G__23737_24088,G__23738_24089){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__23736_24087,G__23737_24088,G__23738_24089))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23736_24087,G__23737_24088,G__23738_24089,G__23739_24090) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23736_24087,G__23737_24088,G__23738_24089,G__23739_24090));
var G__23740_24091 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__23741_24092 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23742_24093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23743_24094 = ((function (G__23740_24091,G__23741_24092,G__23742_24093){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23740_24091,G__23741_24092,G__23742_24093))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23740_24091,G__23741_24092,G__23742_24093,G__23743_24094) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23740_24091,G__23741_24092,G__23742_24093,G__23743_24094));
var G__23745_24095 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__23746_24096 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23747_24097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23748_24098 = ((function (G__23745_24095,G__23746_24096,G__23747_24097){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23745_24095,G__23746_24096,G__23747_24097))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23745_24095,G__23746_24096,G__23747_24097,G__23748_24098) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23745_24095,G__23746_24096,G__23747_24097,G__23748_24098));
var G__23749_24099 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__23750_24100 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23751_24101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23752_24102 = ((function (G__23749_24099,G__23750_24100,G__23751_24101){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23749_24099,G__23750_24100,G__23751_24101))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23749_24099,G__23750_24100,G__23751_24101,G__23752_24102) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23749_24099,G__23750_24100,G__23751_24101,G__23752_24102));
var G__23753_24103 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__23754_24104 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23755_24105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23756_24106 = ((function (G__23753_24103,G__23754_24104,G__23755_24105){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23753_24103,G__23754_24104,G__23755_24105))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23753_24103,G__23754_24104,G__23755_24105,G__23756_24106) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23753_24103,G__23754_24104,G__23755_24105,G__23756_24106));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__23757_24107 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__23758_24108 = ((function (G__23757_24107){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__23757_24107))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23757_24107,G__23758_24108) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23757_24107,G__23758_24108));
var G__23759_24109 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__23760_24110 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23761_24111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__23762_24112 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23763_24113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__23764_24114 = ((function (G__23759_24109,G__23760_24110,G__23761_24111,G__23762_24112,G__23763_24113){
return (function (p__23765,_){
var vec__23766 = p__23765;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23766,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23766,(1),null);
var G__23769 = (window_width / char_width);
return Math.ceil(G__23769);
});})(G__23759_24109,G__23760_24110,G__23761_24111,G__23762_24112,G__23763_24113))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23759_24109,G__23760_24110,G__23761_24111,G__23762_24112,G__23763_24113,G__23764_24114) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23759_24109,G__23760_24110,G__23761_24111,G__23762_24112,G__23763_24113,G__23764_24114));
var G__23770_24115 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__23771_24116 = ((function (G__23770_24115){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23770_24115))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23770_24115,G__23771_24116) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23770_24115,G__23771_24116));
var G__23772_24117 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__23773_24118 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23774_24119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__23775_24120 = ((function (G__23772_24117,G__23773_24118,G__23774_24119){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__23772_24117,G__23773_24118,G__23774_24119))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23772_24117,G__23773_24118,G__23774_24119,G__23775_24120) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23772_24117,G__23773_24118,G__23774_24119,G__23775_24120));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
