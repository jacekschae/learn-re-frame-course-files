goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__22999_23809 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__23000_23810 = ((function (G__22999_23809){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__22999_23809))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__22999_23809,G__23000_23810) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__22999_23809,G__23000_23810));
var G__23003_23812 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__23004_23813 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23005_23814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23006_23815 = ((function (G__23003_23812,G__23004_23813,G__23005_23814){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__23003_23812,G__23004_23813,G__23005_23814))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23003_23812,G__23004_23813,G__23005_23814,G__23006_23815) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23003_23812,G__23004_23813,G__23005_23814,G__23006_23815));
var G__23007_23843 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__23008_23844 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23009_23845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__23010_23846 = ((function (G__23007_23843,G__23008_23844,G__23009_23845){
return (function (panel_width_PERCENT_,p__23011){
var vec__23012 = p__23011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012,(1),null);
return (((function (){var G__23015 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23015);
})() * n) / 100.0);
});})(G__23007_23843,G__23008_23844,G__23009_23845))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23007_23843,G__23008_23844,G__23009_23845,G__23010_23846) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23007_23843,G__23008_23844,G__23009_23845,G__23010_23846));
var G__23016_23851 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23017_23852 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23018_23853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23019_23854 = ((function (G__23016_23851,G__23017_23852,G__23018_23853){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23016_23851,G__23017_23852,G__23018_23853))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23016_23851,G__23017_23852,G__23018_23853,G__23019_23854) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23016_23851,G__23017_23852,G__23018_23853,G__23019_23854));
var G__23021_23859 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23022_23860 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23023_23861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23024_23862 = ((function (G__23021_23859,G__23022_23860,G__23023_23861){
return (function (width,p__23025){
var vec__23026 = p__23025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,(1),null);
return ((function (){var G__23029 = (width / n);
return Math.ceil(G__23029);
})() * n);
});})(G__23021_23859,G__23022_23860,G__23023_23861))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23021_23859,G__23022_23860,G__23023_23861,G__23024_23862) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23021_23859,G__23022_23860,G__23023_23861,G__23024_23862));
var G__23034_23864 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23035_23865 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23036_23866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23037_23867 = ((function (G__23034_23864,G__23035_23865,G__23036_23866){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23034_23864,G__23035_23865,G__23036_23866))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23034_23864,G__23035_23865,G__23036_23866,G__23037_23867) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23034_23864,G__23035_23865,G__23036_23866,G__23037_23867));
var G__23039_23871 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23040_23872 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23041_23873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23042_23874 = ((function (G__23039_23871,G__23040_23872,G__23041_23873){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23039_23871,G__23040_23872,G__23041_23873))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23039_23871,G__23040_23872,G__23041_23873,G__23042_23874) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23039_23871,G__23040_23872,G__23041_23873,G__23042_23874));
var G__23043_23877 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23044_23878 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23045_23879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23046_23880 = ((function (G__23043_23877,G__23044_23878,G__23045_23879){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23043_23877,G__23044_23878,G__23045_23879))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23043_23877,G__23044_23878,G__23045_23879,G__23046_23880) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23043_23877,G__23044_23878,G__23045_23879,G__23046_23880));
var G__23051_23885 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23052_23886 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23053_23887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23054_23888 = ((function (G__23051_23885,G__23052_23886,G__23053_23887){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23051_23885,G__23052_23886,G__23053_23887))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23051_23885,G__23052_23886,G__23053_23887,G__23054_23888) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23051_23885,G__23052_23886,G__23053_23887,G__23054_23888));
var G__23060_23889 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23061_23890 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23062_23891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23063_23892 = ((function (G__23060_23889,G__23061_23890,G__23062_23891){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23060_23889,G__23061_23890,G__23062_23891))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23060_23889,G__23061_23890,G__23062_23891,G__23063_23892) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23060_23889,G__23061_23890,G__23062_23891,G__23063_23892));
var G__23070_23893 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23071_23894 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23072_23895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23073_23896 = ((function (G__23070_23893,G__23071_23894,G__23072_23895){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23070_23893,G__23071_23894,G__23072_23895))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23070_23893,G__23071_23894,G__23072_23895,G__23073_23896) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23070_23893,G__23071_23894,G__23072_23895,G__23073_23896));
var G__23074_23898 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23075_23899 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23076_23900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23077_23901 = ((function (G__23074_23898,G__23075_23899,G__23076_23900){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23074_23898,G__23075_23899,G__23076_23900))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23074_23898,G__23075_23899,G__23076_23900,G__23077_23901) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23074_23898,G__23075_23899,G__23076_23900,G__23077_23901));
var G__23086_23903 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23087_23904 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23088_23905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23089_23906 = ((function (G__23086_23903,G__23087_23904,G__23088_23905){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23086_23903,G__23087_23904,G__23088_23905))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23086_23903,G__23087_23904,G__23088_23905,G__23089_23906) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23086_23903,G__23087_23904,G__23088_23905,G__23089_23906));
var G__23093_23908 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23094_23909 = ((function (G__23093_23908){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23093_23908))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23093_23908,G__23094_23909) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23093_23908,G__23094_23909));
var G__23095_23928 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23097_23929 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23100_23930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23101_23931 = ((function (G__23095_23928,G__23097_23929,G__23100_23930){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23095_23928,G__23097_23929,G__23100_23930))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23095_23928,G__23097_23929,G__23100_23930,G__23101_23931) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23095_23928,G__23097_23929,G__23100_23930,G__23101_23931));
var G__23109_23937 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23110_23938 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23111_23939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23112_23940 = ((function (G__23109_23937,G__23110_23938,G__23111_23939){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23109_23937,G__23110_23938,G__23111_23939))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23109_23937,G__23110_23938,G__23111_23939,G__23112_23940) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23109_23937,G__23110_23938,G__23111_23939,G__23112_23940));
var G__23118_23943 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23119_23944 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23120_23945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23121_23946 = ((function (G__23118_23943,G__23119_23944,G__23120_23945){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23118_23943,G__23119_23944,G__23120_23945){
return (function (p1__23117_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23117_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23117_SHARP_));
});})(G__23118_23943,G__23119_23944,G__23120_23945))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23118_23943,G__23119_23944,G__23120_23945))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23118_23943,G__23119_23944,G__23120_23945,G__23121_23946) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23118_23943,G__23119_23944,G__23120_23945,G__23121_23946));
var G__23125_23952 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23126_23953 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23127_23954 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23128_23955 = ((function (G__23125_23952,G__23126_23953,G__23127_23954){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23125_23952,G__23126_23953,G__23127_23954))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23125_23952,G__23126_23953,G__23127_23954,G__23128_23955) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23125_23952,G__23126_23953,G__23127_23954,G__23128_23955));
var G__23136_23959 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23137_23960 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23138_23961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23139_23962 = ((function (G__23136_23959,G__23137_23960,G__23138_23961){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23136_23959,G__23137_23960,G__23138_23961))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23136_23959,G__23137_23960,G__23138_23961,G__23139_23962) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23136_23959,G__23137_23960,G__23138_23961,G__23139_23962));
var G__23147_23969 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23148_23970 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23149_23971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23150_23972 = ((function (G__23147_23969,G__23148_23970,G__23149_23971){
return (function (expansions,p__23151){
var vec__23156 = p__23151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23156,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23156,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23147_23969,G__23148_23970,G__23149_23971))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23147_23969,G__23148_23970,G__23149_23971,G__23150_23972) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23147_23969,G__23148_23970,G__23149_23971,G__23150_23972));
var G__23160_23978 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23161_23979 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23162_23980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23163_23981 = ((function (G__23160_23978,G__23161_23979,G__23162_23980){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23160_23978,G__23161_23979,G__23162_23980))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23160_23978,G__23161_23979,G__23162_23980,G__23163_23981) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23160_23978,G__23161_23979,G__23162_23980,G__23163_23981));
var G__23165_23986 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23166_23987 = ((function (G__23165_23986){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23165_23986))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23165_23986,G__23166_23987) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23165_23986,G__23166_23987));
var G__23167_23992 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23168_23993 = ((function (G__23167_23992){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23167_23992))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23167_23992,G__23168_23993) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23167_23992,G__23168_23993));
var G__23171_23998 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23172_23999 = ((function (G__23171_23998){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23171_23998))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23171_23998,G__23172_23999) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23171_23998,G__23172_23999));
var G__23176_24000 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23177_24001 = ((function (G__23176_24000){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23176_24000))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23176_24000,G__23177_24001) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23176_24000,G__23177_24001));
var G__23179_24004 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23180_24005 = ((function (G__23179_24004){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23179_24004))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23179_24004,G__23180_24005) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23179_24004,G__23180_24005));
var G__23186_24010 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23187_24011 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23188_24012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23189_24013 = ((function (G__23186_24010,G__23187_24011,G__23188_24012){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23186_24010,G__23187_24011,G__23188_24012))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23186_24010,G__23187_24011,G__23188_24012,G__23189_24013) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23186_24010,G__23187_24011,G__23188_24012,G__23189_24013));
var G__23190_24017 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23191_24018 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23192_24019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23193_24020 = ((function (G__23190_24017,G__23191_24018,G__23192_24019){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23190_24017,G__23191_24018,G__23192_24019))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23190_24017,G__23191_24018,G__23192_24019,G__23193_24020) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23190_24017,G__23191_24018,G__23192_24019,G__23193_24020));
var G__23196_24025 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23197_24026 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23198_24027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23199_24028 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23200_24029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23201_24030 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23202_24031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23203_24032 = ((function (G__23196_24025,G__23197_24026,G__23198_24027,G__23199_24028,G__23200_24029,G__23201_24030,G__23202_24031){
return (function (p__23204,_){
var vec__23205 = p__23204;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23196_24025,G__23197_24026,G__23198_24027,G__23199_24028,G__23200_24029,G__23201_24030,G__23202_24031))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23196_24025,G__23197_24026,G__23198_24027,G__23199_24028,G__23200_24029,G__23201_24030,G__23202_24031,G__23203_24032) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23196_24025,G__23197_24026,G__23198_24027,G__23199_24028,G__23200_24029,G__23201_24030,G__23202_24031,G__23203_24032));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__23227,_){
var vec__23232 = p__23227;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23232,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23232,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23232,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__23232,traces,filtered_views))
),traces);
});
var G__23261_24039 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23262_24040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23263_24041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23264_24042 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23265_24043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23266_24044 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23261_24039,G__23262_24040,G__23263_24041,G__23264_24042,G__23265_24043,G__23266_24044) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23261_24039,G__23262_24040,G__23263_24041,G__23264_24042,G__23265_24043,G__23266_24044));
var G__23267_24050 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23268_24051 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23269_24052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23270_24053 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23271_24054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23272_24055 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23267_24050,G__23268_24051,G__23269_24052,G__23270_24053,G__23271_24054,G__23272_24055) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23267_24050,G__23268_24051,G__23269_24052,G__23270_24053,G__23271_24054,G__23272_24055));
var G__23277_24057 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23278_24058 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23279_24059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23280_24060 = ((function (G__23277_24057,G__23278_24058,G__23279_24059){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23277_24057,G__23278_24058,G__23279_24059))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23277_24057,G__23278_24058,G__23279_24059,G__23280_24060) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23277_24057,G__23278_24058,G__23279_24059,G__23280_24060));
var G__23287_24065 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23288_24066 = ((function (G__23287_24065){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23287_24065))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23287_24065,G__23288_24066) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23287_24065,G__23288_24066));
var G__23293_24069 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23294_24070 = ((function (G__23293_24069){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23293_24069))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23293_24069,G__23294_24070) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23293_24069,G__23294_24070));
var G__23301_24071 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23302_24072 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23303_24073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23304_24074 = ((function (G__23301_24071,G__23302_24072,G__23303_24073){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23301_24071,G__23302_24072,G__23303_24073))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23301_24071,G__23302_24072,G__23303_24073,G__23304_24074) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23301_24071,G__23302_24072,G__23303_24073,G__23304_24074));
var G__23309_24075 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23310_24076 = ((function (G__23309_24075){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23309_24075))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23309_24075,G__23310_24076) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23309_24075,G__23310_24076));
var G__23314_24081 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23315_24082 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23316_24083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23317_24084 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23318_24085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23319_24086 = ((function (G__23314_24081,G__23315_24082,G__23316_24083,G__23317_24084,G__23318_24085){
return (function (p__23323,_){
var vec__23324 = p__23323;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23314_24081,G__23315_24082,G__23316_24083,G__23317_24084,G__23318_24085))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23314_24081,G__23315_24082,G__23316_24083,G__23317_24084,G__23318_24085,G__23319_24086) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23314_24081,G__23315_24082,G__23316_24083,G__23317_24084,G__23318_24085,G__23319_24086));
var G__23379_24092 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23380_24093 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23381_24094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23382_24095 = ((function (G__23379_24092,G__23380_24093,G__23381_24094){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23379_24092,G__23380_24093,G__23381_24094))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23379_24092,G__23380_24093,G__23381_24094,G__23382_24095) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23379_24092,G__23380_24093,G__23381_24094,G__23382_24095));
var G__23383_24097 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23384_24098 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23385_24099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23386_24100 = ((function (G__23383_24097,G__23384_24098,G__23385_24099){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__23383_24097,G__23384_24098,G__23385_24099))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23383_24097,G__23384_24098,G__23385_24099,G__23386_24100) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23383_24097,G__23384_24098,G__23385_24099,G__23386_24100));
var G__23387_24101 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23388_24102 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23389_24103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23390_24104 = ((function (G__23387_24101,G__23388_24102,G__23389_24103){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23387_24101,G__23388_24102,G__23389_24103))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23387_24101,G__23388_24102,G__23389_24103,G__23390_24104) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23387_24101,G__23388_24102,G__23389_24103,G__23390_24104));
var G__23391_24109 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23392_24110 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23393_24111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23394_24112 = ((function (G__23391_24109,G__23392_24110,G__23393_24111){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23391_24109,G__23392_24110,G__23393_24111))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23391_24109,G__23392_24110,G__23393_24111,G__23394_24112) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23391_24109,G__23392_24110,G__23393_24111,G__23394_24112));
var G__23395_24113 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23396_24114 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23397_24115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23398_24116 = ((function (G__23395_24113,G__23396_24114,G__23397_24115){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23395_24113,G__23396_24114,G__23397_24115))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23395_24113,G__23396_24114,G__23397_24115,G__23398_24116) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23395_24113,G__23396_24114,G__23397_24115,G__23398_24116));
var G__23399_24121 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23400_24122 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23401_24123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23402_24124 = ((function (G__23399_24121,G__23400_24122,G__23401_24123){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__23399_24121,G__23400_24122,G__23401_24123))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23399_24121,G__23400_24122,G__23401_24123,G__23402_24124) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23399_24121,G__23400_24122,G__23401_24123,G__23402_24124));
var G__23403_24125 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23404_24126 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23405_24127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23406_24128 = ((function (G__23403_24125,G__23404_24126,G__23405_24127){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23403_24125,G__23404_24126,G__23405_24127))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23403_24125,G__23404_24126,G__23405_24127,G__23406_24128) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23403_24125,G__23404_24126,G__23405_24127,G__23406_24128));
var G__23407_24133 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23408_24134 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23409_24135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23410_24136 = ((function (G__23407_24133,G__23408_24134,G__23409_24135){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23407_24133,G__23408_24134,G__23409_24135))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23407_24133,G__23408_24134,G__23409_24135,G__23410_24136) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23407_24133,G__23408_24134,G__23409_24135,G__23410_24136));
var G__23411_24138 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23412_24139 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23413_24140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23414_24141 = ((function (G__23411_24138,G__23412_24139,G__23413_24140){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23411_24138,G__23412_24139,G__23413_24140))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23411_24138,G__23412_24139,G__23413_24140,G__23414_24141) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23411_24138,G__23412_24139,G__23413_24140,G__23414_24141));
var G__23415_24146 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23416_24147 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23417_24148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23418_24149 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23419_24150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23420_24151 = ((function (G__23415_24146,G__23416_24147,G__23417_24148,G__23418_24149,G__23419_24150){
return (function (p__23421){
var vec__23422 = p__23421;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23415_24146,G__23416_24147,G__23417_24148,G__23418_24149,G__23419_24150))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23415_24146,G__23416_24147,G__23417_24148,G__23418_24149,G__23419_24150,G__23420_24151) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23415_24146,G__23416_24147,G__23417_24148,G__23418_24149,G__23419_24150,G__23420_24151));
var G__23429_24162 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23430_24163 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23431_24164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23432_24165 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23433_24166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23434_24167 = ((function (G__23429_24162,G__23430_24163,G__23431_24164,G__23432_24165,G__23433_24166){
return (function (p__23435){
var vec__23438 = p__23435;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__23429_24162,G__23430_24163,G__23431_24164,G__23432_24165,G__23433_24166))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23429_24162,G__23430_24163,G__23431_24164,G__23432_24165,G__23433_24166,G__23434_24167) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23429_24162,G__23430_24163,G__23431_24164,G__23432_24165,G__23433_24166,G__23434_24167));
var G__23441_24173 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23442_24174 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23443_24175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23444_24176 = ((function (G__23441_24173,G__23442_24174,G__23443_24175){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23441_24173,G__23442_24174,G__23443_24175))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23441_24173,G__23442_24174,G__23443_24175,G__23444_24176) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23441_24173,G__23442_24174,G__23443_24175,G__23444_24176));
var G__23448_24178 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23450_24179 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23451_24180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23452_24181 = ((function (G__23448_24178,G__23450_24179,G__23451_24180){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23448_24178,G__23450_24179,G__23451_24180){
return (function (p1__23446_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__23446_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__23446_SHARP_)));
});})(G__23448_24178,G__23450_24179,G__23451_24180))
,traces);
});})(G__23448_24178,G__23450_24179,G__23451_24180))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23448_24178,G__23450_24179,G__23451_24180,G__23452_24181) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23448_24178,G__23450_24179,G__23451_24180,G__23452_24181));
var G__23453_24183 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23454_24184 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23455_24185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23456_24186 = ((function (G__23453_24183,G__23454_24184,G__23455_24185){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23453_24183,G__23454_24184,G__23455_24185))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23453_24183,G__23454_24184,G__23455_24185,G__23456_24186) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23453_24183,G__23454_24184,G__23455_24185,G__23456_24186));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__23463 = arguments.length;
switch (G__23463) {
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
var len__4730__auto___24191 = arguments.length;
var i__4731__auto___24192 = (0);
while(true){
if((i__4731__auto___24192 < len__4730__auto___24191)){
args_arr__4751__auto__.push((arguments[i__4731__auto___24192]));

var G__24193 = (i__4731__auto___24192 + (1));
i__4731__auto___24192 = G__24193;
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
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq23459){
var G__23460 = cljs.core.first(seq23459);
var seq23459__$1 = cljs.core.next(seq23459);
var G__23461 = cljs.core.first(seq23459__$1);
var seq23459__$2 = cljs.core.next(seq23459__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23460,G__23461,seq23459__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__23476_24194 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23477_24195 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23478_24196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23479_24197 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23480_24198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23481_24199 = ((function (G__23476_24194,G__23477_24195,G__23478_24196,G__23479_24197,G__23480_24198){
return (function (p__23488,p__23489){
var vec__23490 = p__23488;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23490,(1),null);
var vec__23493 = p__23489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23493,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23493,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__23499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__23476_24194,G__23477_24195,G__23478_24196,G__23479_24197,G__23480_24198))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23476_24194,G__23477_24195,G__23478_24196,G__23479_24197,G__23480_24198,G__23481_24199) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23476_24194,G__23477_24195,G__23478_24196,G__23479_24197,G__23480_24198,G__23481_24199));
var G__23505_24209 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23506_24210 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23507_24211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23508_24212 = ((function (G__23505_24209,G__23506_24210,G__23507_24211){
return (function (match){
var map__23509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__23509__$1 = (((((!((map__23509 == null))))?(((((map__23509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23509):map__23509);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__23505_24209,G__23506_24210,G__23507_24211))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23505_24209,G__23506_24210,G__23507_24211,G__23508_24212) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23505_24209,G__23506_24210,G__23507_24211,G__23508_24212));
var G__23517_24214 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__23518_24215 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23519_24216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23520_24217 = ((function (G__23517_24214,G__23518_24215,G__23519_24216){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__23517_24214,G__23518_24215,G__23519_24216))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23517_24214,G__23518_24215,G__23519_24216,G__23520_24217) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23517_24214,G__23518_24215,G__23519_24216,G__23520_24217));
var G__23524_24218 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__23526_24219 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23527_24220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23528_24221 = ((function (G__23524_24218,G__23526_24219,G__23527_24220){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__23524_24218,G__23526_24219,G__23527_24220))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23524_24218,G__23526_24219,G__23527_24220,G__23528_24221) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23524_24218,G__23526_24219,G__23527_24220,G__23528_24221));
var G__23544_24222 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__23545_24223 = ((function (G__23544_24222){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23544_24222))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23544_24222,G__23545_24223) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23544_24222,G__23545_24223));
var G__23546_24224 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23547_24225 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23548_24226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23549_24227 = ((function (G__23546_24224,G__23547_24225,G__23548_24226){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__23546_24224,G__23547_24225,G__23548_24226))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23546_24224,G__23547_24225,G__23548_24226,G__23549_24227) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23546_24224,G__23547_24225,G__23548_24226,G__23549_24227));
var G__23550_24228 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23551_24229 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23552_24230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23553_24231 = ((function (G__23550_24228,G__23551_24229,G__23552_24230){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23550_24228,G__23551_24229,G__23552_24230))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23550_24228,G__23551_24229,G__23552_24230,G__23553_24231) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23550_24228,G__23551_24229,G__23552_24230,G__23553_24231));
var G__23555_24232 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23556_24233 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23557_24234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23558_24235 = ((function (G__23555_24232,G__23556_24233,G__23557_24234){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23555_24232,G__23556_24233,G__23557_24234))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23555_24232,G__23556_24233,G__23557_24234,G__23558_24235) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23555_24232,G__23556_24233,G__23557_24234,G__23558_24235));
var G__23559_24236 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23560_24237 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23561_24238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23562_24239 = ((function (G__23559_24236,G__23560_24237,G__23561_24238){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23559_24236,G__23560_24237,G__23561_24238))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23559_24236,G__23560_24237,G__23561_24238,G__23562_24239) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23559_24236,G__23560_24237,G__23561_24238,G__23562_24239));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23564_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__23564_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23617){
return cljs.core.coll_QMARK_(G__23617);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23648){
return cljs.core.map_QMARK_(G__23648);
}),(function (G__23648){
return cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23648){
return cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23648){
return cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23648){
return cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23648){
return cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23648){
return cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23648){
return ((cljs.core.map_QMARK_(G__23648)) && (cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23648,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23654){
return cljs.core.coll_QMARK_(G__23654);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__23655 = sub_type;
var G__23655__$1 = (((G__23655 instanceof cljs.core.Keyword))?G__23655.fqn:null);
switch (G__23655__$1) {
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
var G__24253 = (exp - (1));
var G__24254 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__24255 = cljs.core.rest(order__$1);
exp = G__24253;
total = G__24254;
order__$1 = G__24255;
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
var G__23656 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__23656__$1 = (((G__23656 instanceof cljs.core.Keyword))?G__23656.fqn:null);
switch (G__23656__$1) {
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
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__23657,p__23658){
var vec__23659 = p__23657;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23659,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23659,(1),null);
var vec__23662 = p__23658;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23662,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__23659,sub_info,sub_state,vec__23662,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__23659,sub_info,sub_state,vec__23662,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__23659,sub_info,sub_state,vec__23662,subscription){
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
});})(remove_fn,vec__23659,sub_info,sub_state,vec__23662,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__23665_24275 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__23666_24276 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23667_24277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23668_24278 = ((function (G__23665_24275,G__23666_24276,G__23667_24277){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23665_24275,G__23666_24276,G__23667_24277))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23665_24275,G__23666_24276,G__23667_24277,G__23668_24278) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23665_24275,G__23666_24276,G__23667_24277,G__23668_24278));
var G__23669_24279 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__23670_24280 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23671_24281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23672_24282 = ((function (G__23669_24279,G__23670_24280,G__23671_24281){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23669_24279,G__23670_24280,G__23671_24281))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23669_24279,G__23670_24280,G__23671_24281,G__23672_24282) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23669_24279,G__23670_24280,G__23671_24281,G__23672_24282));
var G__23673_24287 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__23674_24288 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23675_24289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23676_24290 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23677_24291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__23678_24292 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23673_24287,G__23674_24288,G__23675_24289,G__23676_24290,G__23677_24291,G__23678_24292) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23673_24287,G__23674_24288,G__23675_24289,G__23676_24290,G__23677_24291,G__23678_24292));
var G__23679_24293 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__23680_24294 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23681_24295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23682_24296 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23683_24297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__23684_24298 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23679_24293,G__23680_24294,G__23681_24295,G__23682_24296,G__23683_24297,G__23684_24298) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23679_24293,G__23680_24294,G__23681_24295,G__23682_24296,G__23683_24297,G__23684_24298));
var G__23685_24299 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__23686_24300 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23687_24301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23688_24302 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23689_24303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__23690_24304 = ((function (G__23685_24299,G__23686_24300,G__23687_24301,G__23688_24302,G__23689_24303){
return (function (p__23691){
var vec__23692 = p__23691;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23692,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23692,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__23685_24299,G__23686_24300,G__23687_24301,G__23688_24302,G__23689_24303))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23685_24299,G__23686_24300,G__23687_24301,G__23688_24302,G__23689_24303,G__23690_24304) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23685_24299,G__23686_24300,G__23687_24301,G__23688_24302,G__23689_24303,G__23690_24304));
var G__23695_24330 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__23696_24331 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23697_24332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__23698_24333 = ((function (G__23695_24330,G__23696_24331,G__23697_24332){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__23695_24330,G__23696_24331,G__23697_24332))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23695_24330,G__23696_24331,G__23697_24332,G__23698_24333) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23695_24330,G__23696_24331,G__23697_24332,G__23698_24333));
var G__23699_24334 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__23700_24335 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23701_24336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23702_24337 = ((function (G__23699_24334,G__23700_24335,G__23701_24336){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__23699_24334,G__23700_24335,G__23701_24336))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23699_24334,G__23700_24335,G__23701_24336,G__23702_24337) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23699_24334,G__23700_24335,G__23701_24336,G__23702_24337));
var G__23703_24338 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__23704_24339 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23705_24340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23706_24341 = ((function (G__23703_24338,G__23704_24339,G__23705_24340){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__23703_24338,G__23704_24339,G__23705_24340))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23703_24338,G__23704_24339,G__23705_24340,G__23706_24341) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23703_24338,G__23704_24339,G__23705_24340,G__23706_24341));
var G__23711_24342 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__23712_24343 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23713_24344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23714_24345 = ((function (G__23711_24342,G__23712_24343,G__23713_24344){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__23711_24342,G__23712_24343,G__23713_24344))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23711_24342,G__23712_24343,G__23713_24344,G__23714_24345) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23711_24342,G__23712_24343,G__23713_24344,G__23714_24345));
var G__23715_24346 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__23716_24347 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23717_24348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23718_24349 = ((function (G__23715_24346,G__23716_24347,G__23717_24348){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__23715_24346,G__23716_24347,G__23717_24348))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23715_24346,G__23716_24347,G__23717_24348,G__23718_24349) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23715_24346,G__23716_24347,G__23717_24348,G__23718_24349));
var G__23719_24350 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__23720_24351 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23721_24352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23722_24353 = ((function (G__23719_24350,G__23720_24351,G__23721_24352){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__23719_24350,G__23720_24351,G__23721_24352))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23719_24350,G__23720_24351,G__23721_24352,G__23722_24353) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23719_24350,G__23720_24351,G__23721_24352,G__23722_24353));
var G__23723_24354 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__23724_24355 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23725_24356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23726_24357 = ((function (G__23723_24354,G__23724_24355,G__23725_24356){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__23723_24354,G__23724_24355,G__23725_24356))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23723_24354,G__23724_24355,G__23725_24356,G__23726_24357) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23723_24354,G__23724_24355,G__23725_24356,G__23726_24357));
var G__23728_24358 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__23729_24359 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23730_24360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23731_24361 = ((function (G__23728_24358,G__23729_24359,G__23730_24360){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__23728_24358,G__23729_24359,G__23730_24360))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23728_24358,G__23729_24359,G__23730_24360,G__23731_24361) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23728_24358,G__23729_24359,G__23730_24360,G__23731_24361));
var G__23733_24362 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__23734_24363 = ((function (G__23733_24362){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23733_24362))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23733_24362,G__23734_24363) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23733_24362,G__23734_24363));
var G__23736_24364 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__23737_24365 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23738_24366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23739_24367 = ((function (G__23736_24364,G__23737_24365,G__23738_24366){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__23736_24364,G__23737_24365,G__23738_24366){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__23736_24364,G__23737_24365,G__23738_24366){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__23736_24364,G__23737_24365,G__23738_24366))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__23736_24364,G__23737_24365,G__23738_24366))
,traces);
});})(G__23736_24364,G__23737_24365,G__23738_24366))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23736_24364,G__23737_24365,G__23738_24366,G__23739_24367) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23736_24364,G__23737_24365,G__23738_24366,G__23739_24367));
var G__23744_24368 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__23745_24369 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23746_24370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__23747_24371 = ((function (G__23744_24368,G__23745_24369,G__23746_24370){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__23744_24368,G__23745_24369,G__23746_24370))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23744_24368,G__23745_24369,G__23746_24370,G__23747_24371) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23744_24368,G__23745_24369,G__23746_24370,G__23747_24371));
var G__23752_24372 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__23753_24373 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23754_24374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__23755_24375 = ((function (G__23752_24372,G__23753_24373,G__23754_24374){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__23752_24372,G__23753_24373,G__23754_24374))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23752_24372,G__23753_24373,G__23754_24374,G__23755_24375) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23752_24372,G__23753_24373,G__23754_24374,G__23755_24375));
var G__23760_24376 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__23761_24377 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23762_24378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23763_24379 = ((function (G__23760_24376,G__23761_24377,G__23762_24378){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23760_24376,G__23761_24377,G__23762_24378))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23760_24376,G__23761_24377,G__23762_24378,G__23763_24379) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23760_24376,G__23761_24377,G__23762_24378,G__23763_24379));
var G__23768_24380 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__23769_24381 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23770_24382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23771_24383 = ((function (G__23768_24380,G__23769_24381,G__23770_24382){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23768_24380,G__23769_24381,G__23770_24382))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23768_24380,G__23769_24381,G__23770_24382,G__23771_24383) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23768_24380,G__23769_24381,G__23770_24382,G__23771_24383));
var G__23772_24384 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__23773_24385 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23774_24386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23775_24387 = ((function (G__23772_24384,G__23773_24385,G__23774_24386){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23772_24384,G__23773_24385,G__23774_24386))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23772_24384,G__23773_24385,G__23774_24386,G__23775_24387) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23772_24384,G__23773_24385,G__23774_24386,G__23775_24387));
var G__23780_24388 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__23781_24389 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23782_24390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23783_24391 = ((function (G__23780_24388,G__23781_24389,G__23782_24390){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23780_24388,G__23781_24389,G__23782_24390))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23780_24388,G__23781_24389,G__23782_24390,G__23783_24391) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23780_24388,G__23781_24389,G__23782_24390,G__23783_24391));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__23784_24392 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__23785_24393 = ((function (G__23784_24392){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__23784_24392))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23784_24392,G__23785_24393) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23784_24392,G__23785_24393));
var G__23786_24394 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__23787_24395 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23788_24396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__23789_24397 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23790_24398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__23791_24399 = ((function (G__23786_24394,G__23787_24395,G__23788_24396,G__23789_24397,G__23790_24398){
return (function (p__23793,_){
var vec__23797 = p__23793;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23797,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23797,(1),null);
var G__23800 = (window_width / char_width);
return Math.ceil(G__23800);
});})(G__23786_24394,G__23787_24395,G__23788_24396,G__23789_24397,G__23790_24398))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23786_24394,G__23787_24395,G__23788_24396,G__23789_24397,G__23790_24398,G__23791_24399) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23786_24394,G__23787_24395,G__23788_24396,G__23789_24397,G__23790_24398,G__23791_24399));
var G__23801_24400 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__23802_24401 = ((function (G__23801_24400){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23801_24400))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23801_24400,G__23802_24401) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23801_24400,G__23802_24401));
var G__23805_24402 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__23806_24403 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23807_24404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__23808_24405 = ((function (G__23805_24402,G__23806_24403,G__23807_24404){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__23805_24402,G__23806_24403,G__23807_24404))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23805_24402,G__23806_24403,G__23807_24404,G__23808_24405) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23805_24402,G__23806_24403,G__23807_24404,G__23808_24405));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
