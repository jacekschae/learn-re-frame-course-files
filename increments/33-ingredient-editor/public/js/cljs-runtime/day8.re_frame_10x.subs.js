goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__22995_23686 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__22996_23687 = ((function (G__22995_23686){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__22995_23686))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__22995_23686,G__22996_23687) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__22995_23686,G__22996_23687));
var G__22998_23688 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__22999_23689 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23000_23690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23001_23691 = ((function (G__22998_23688,G__22999_23689,G__23000_23690){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__22998_23688,G__22999_23689,G__23000_23690))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__22998_23688,G__22999_23689,G__23000_23690,G__23001_23691) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__22998_23688,G__22999_23689,G__23000_23690,G__23001_23691));
var G__23003_23693 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__23004_23694 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23005_23695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__23006_23696 = ((function (G__23003_23693,G__23004_23694,G__23005_23695){
return (function (panel_width_PERCENT_,p__23009){
var vec__23010 = p__23009;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23010,(1),null);
return (((function (){var G__23013 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23013);
})() * n) / 100.0);
});})(G__23003_23693,G__23004_23694,G__23005_23695))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23003_23693,G__23004_23694,G__23005_23695,G__23006_23696) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23003_23693,G__23004_23694,G__23005_23695,G__23006_23696));
var G__23015_23704 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23016_23705 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23017_23707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23018_23708 = ((function (G__23015_23704,G__23016_23705,G__23017_23707){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23015_23704,G__23016_23705,G__23017_23707))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23015_23704,G__23016_23705,G__23017_23707,G__23018_23708) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23015_23704,G__23016_23705,G__23017_23707,G__23018_23708));
var G__23021_23713 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23022_23714 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23023_23715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23024_23716 = ((function (G__23021_23713,G__23022_23714,G__23023_23715){
return (function (width,p__23025){
var vec__23026 = p__23025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,(1),null);
return ((function (){var G__23029 = (width / n);
return Math.ceil(G__23029);
})() * n);
});})(G__23021_23713,G__23022_23714,G__23023_23715))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23021_23713,G__23022_23714,G__23023_23715,G__23024_23716) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23021_23713,G__23022_23714,G__23023_23715,G__23024_23716));
var G__23034_23719 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23035_23720 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23036_23721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23037_23722 = ((function (G__23034_23719,G__23035_23720,G__23036_23721){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23034_23719,G__23035_23720,G__23036_23721))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23034_23719,G__23035_23720,G__23036_23721,G__23037_23722) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23034_23719,G__23035_23720,G__23036_23721,G__23037_23722));
var G__23038_23723 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23039_23724 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23040_23725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23041_23726 = ((function (G__23038_23723,G__23039_23724,G__23040_23725){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23038_23723,G__23039_23724,G__23040_23725))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23038_23723,G__23039_23724,G__23040_23725,G__23041_23726) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23038_23723,G__23039_23724,G__23040_23725,G__23041_23726));
var G__23043_23745 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23044_23746 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23045_23747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23046_23748 = ((function (G__23043_23745,G__23044_23746,G__23045_23747){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23043_23745,G__23044_23746,G__23045_23747))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23043_23745,G__23044_23746,G__23045_23747,G__23046_23748) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23043_23745,G__23044_23746,G__23045_23747,G__23046_23748));
var G__23047_23750 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23048_23751 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23049_23752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23050_23753 = ((function (G__23047_23750,G__23048_23751,G__23049_23752){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23047_23750,G__23048_23751,G__23049_23752))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23047_23750,G__23048_23751,G__23049_23752,G__23050_23753) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23047_23750,G__23048_23751,G__23049_23752,G__23050_23753));
var G__23055_23754 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23056_23755 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23057_23756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23058_23757 = ((function (G__23055_23754,G__23056_23755,G__23057_23756){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23055_23754,G__23056_23755,G__23057_23756))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23055_23754,G__23056_23755,G__23057_23756,G__23058_23757) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23055_23754,G__23056_23755,G__23057_23756,G__23058_23757));
var G__23062_23758 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23063_23759 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23064_23760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23065_23761 = ((function (G__23062_23758,G__23063_23759,G__23064_23760){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23062_23758,G__23063_23759,G__23064_23760))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23062_23758,G__23063_23759,G__23064_23760,G__23065_23761) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23062_23758,G__23063_23759,G__23064_23760,G__23065_23761));
var G__23068_23766 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23069_23767 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23070_23768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23071_23769 = ((function (G__23068_23766,G__23069_23767,G__23070_23768){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23068_23766,G__23069_23767,G__23070_23768))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23068_23766,G__23069_23767,G__23070_23768,G__23071_23769) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23068_23766,G__23069_23767,G__23070_23768,G__23071_23769));
var G__23072_23770 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23073_23771 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23074_23772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23075_23773 = ((function (G__23072_23770,G__23073_23771,G__23074_23772){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23072_23770,G__23073_23771,G__23074_23772))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23072_23770,G__23073_23771,G__23074_23772,G__23075_23773) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23072_23770,G__23073_23771,G__23074_23772,G__23075_23773));
var G__23076_23774 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23077_23775 = ((function (G__23076_23774){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23076_23774))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23076_23774,G__23077_23775) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23076_23774,G__23077_23775));
var G__23078_23776 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23079_23777 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23080_23778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23081_23779 = ((function (G__23078_23776,G__23079_23777,G__23080_23778){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23078_23776,G__23079_23777,G__23080_23778))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23078_23776,G__23079_23777,G__23080_23778,G__23081_23779) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23078_23776,G__23079_23777,G__23080_23778,G__23081_23779));
var G__23083_23781 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23084_23782 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23085_23783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23086_23784 = ((function (G__23083_23781,G__23084_23782,G__23085_23783){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23083_23781,G__23084_23782,G__23085_23783))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23083_23781,G__23084_23782,G__23085_23783,G__23086_23784) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23083_23781,G__23084_23782,G__23085_23783,G__23086_23784));
var G__23088_23788 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23089_23789 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23090_23790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23091_23791 = ((function (G__23088_23788,G__23089_23789,G__23090_23790){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23088_23788,G__23089_23789,G__23090_23790){
return (function (p1__23087_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23087_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23087_SHARP_));
});})(G__23088_23788,G__23089_23789,G__23090_23790))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23088_23788,G__23089_23789,G__23090_23790))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23088_23788,G__23089_23789,G__23090_23790,G__23091_23791) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23088_23788,G__23089_23789,G__23090_23790,G__23091_23791));
var G__23093_23794 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23094_23795 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23095_23796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23096_23797 = ((function (G__23093_23794,G__23094_23795,G__23095_23796){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23093_23794,G__23094_23795,G__23095_23796))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23093_23794,G__23094_23795,G__23095_23796,G__23096_23797) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23093_23794,G__23094_23795,G__23095_23796,G__23096_23797));
var G__23101_23798 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23102_23799 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23103_23800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23104_23801 = ((function (G__23101_23798,G__23102_23799,G__23103_23800){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23101_23798,G__23102_23799,G__23103_23800))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23101_23798,G__23102_23799,G__23103_23800,G__23104_23801) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23101_23798,G__23102_23799,G__23103_23800,G__23104_23801));
var G__23105_23802 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23106_23803 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23107_23804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23108_23805 = ((function (G__23105_23802,G__23106_23803,G__23107_23804){
return (function (expansions,p__23109){
var vec__23110 = p__23109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23105_23802,G__23106_23803,G__23107_23804))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23105_23802,G__23106_23803,G__23107_23804,G__23108_23805) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23105_23802,G__23106_23803,G__23107_23804,G__23108_23805));
var G__23113_23812 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23114_23813 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23115_23814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23116_23815 = ((function (G__23113_23812,G__23114_23813,G__23115_23814){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23113_23812,G__23114_23813,G__23115_23814))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23113_23812,G__23114_23813,G__23115_23814,G__23116_23815) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23113_23812,G__23114_23813,G__23115_23814,G__23116_23815));
var G__23117_23844 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23118_23845 = ((function (G__23117_23844){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23117_23844))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23117_23844,G__23118_23845) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23117_23844,G__23118_23845));
var G__23120_23847 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23121_23848 = ((function (G__23120_23847){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23120_23847))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23120_23847,G__23121_23848) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23120_23847,G__23121_23848));
var G__23122_23851 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23123_23852 = ((function (G__23122_23851){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23122_23851))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23122_23851,G__23123_23852) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23122_23851,G__23123_23852));
var G__23126_23859 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23127_23860 = ((function (G__23126_23859){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23126_23859))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23126_23859,G__23127_23860) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23126_23859,G__23127_23860));
var G__23129_23861 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23130_23862 = ((function (G__23129_23861){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23129_23861))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23129_23861,G__23130_23862) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23129_23861,G__23130_23862));
var G__23131_23863 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23132_23864 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23133_23865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23134_23866 = ((function (G__23131_23863,G__23132_23864,G__23133_23865){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23131_23863,G__23132_23864,G__23133_23865))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23131_23863,G__23132_23864,G__23133_23865,G__23134_23866) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23131_23863,G__23132_23864,G__23133_23865,G__23134_23866));
var G__23135_23867 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23136_23868 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23137_23869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23138_23870 = ((function (G__23135_23867,G__23136_23868,G__23137_23869){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23135_23867,G__23136_23868,G__23137_23869))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23135_23867,G__23136_23868,G__23137_23869,G__23138_23870) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23135_23867,G__23136_23868,G__23137_23869,G__23138_23870));
var G__23139_23871 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23140_23872 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23141_23873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23142_23874 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23143_23875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23144_23876 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23145_23877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23146_23878 = ((function (G__23139_23871,G__23140_23872,G__23141_23873,G__23142_23874,G__23143_23875,G__23144_23876,G__23145_23877){
return (function (p__23147,_){
var vec__23149 = p__23147;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23149,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23149,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23149,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23139_23871,G__23140_23872,G__23141_23873,G__23142_23874,G__23143_23875,G__23144_23876,G__23145_23877))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23139_23871,G__23140_23872,G__23141_23873,G__23142_23874,G__23143_23875,G__23144_23876,G__23145_23877,G__23146_23878) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23139_23871,G__23140_23872,G__23141_23873,G__23142_23874,G__23143_23875,G__23144_23876,G__23145_23877,G__23146_23878));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__23154,_){
var vec__23155 = p__23154;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23155,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23155,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23155,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__23155,traces,filtered_views))
),traces);
});
var G__23159_23879 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23160_23880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23161_23881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23162_23882 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23163_23883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23164_23884 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23159_23879,G__23160_23880,G__23161_23881,G__23162_23882,G__23163_23883,G__23164_23884) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23159_23879,G__23160_23880,G__23161_23881,G__23162_23882,G__23163_23883,G__23164_23884));
var G__23165_23885 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23166_23886 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23167_23887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23168_23888 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23169_23889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23170_23890 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23165_23885,G__23166_23886,G__23167_23887,G__23168_23888,G__23169_23889,G__23170_23890) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23165_23885,G__23166_23886,G__23167_23887,G__23168_23888,G__23169_23889,G__23170_23890));
var G__23171_23891 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23172_23892 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23173_23893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23174_23894 = ((function (G__23171_23891,G__23172_23892,G__23173_23893){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23171_23891,G__23172_23892,G__23173_23893))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23171_23891,G__23172_23892,G__23173_23893,G__23174_23894) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23171_23891,G__23172_23892,G__23173_23893,G__23174_23894));
var G__23175_23895 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23176_23896 = ((function (G__23175_23895){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23175_23895))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23175_23895,G__23176_23896) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23175_23895,G__23176_23896));
var G__23177_23897 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23178_23898 = ((function (G__23177_23897){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23177_23897))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23177_23897,G__23178_23898) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23177_23897,G__23178_23898));
var G__23179_23899 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23180_23900 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23181_23901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23182_23902 = ((function (G__23179_23899,G__23180_23900,G__23181_23901){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23179_23899,G__23180_23900,G__23181_23901))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23179_23899,G__23180_23900,G__23181_23901,G__23182_23902) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23179_23899,G__23180_23900,G__23181_23901,G__23182_23902));
var G__23183_23903 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23184_23904 = ((function (G__23183_23903){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23183_23903))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23183_23903,G__23184_23904) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23183_23903,G__23184_23904));
var G__23185_23905 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23186_23906 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23187_23907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23188_23908 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23189_23909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23190_23910 = ((function (G__23185_23905,G__23186_23906,G__23187_23907,G__23188_23908,G__23189_23909){
return (function (p__23191,_){
var vec__23192 = p__23191;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23192,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23192,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23185_23905,G__23186_23906,G__23187_23907,G__23188_23908,G__23189_23909))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23185_23905,G__23186_23906,G__23187_23907,G__23188_23908,G__23189_23909,G__23190_23910) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23185_23905,G__23186_23906,G__23187_23907,G__23188_23908,G__23189_23909,G__23190_23910));
var G__23197_23912 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23198_23913 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23199_23914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23200_23915 = ((function (G__23197_23912,G__23198_23913,G__23199_23914){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23197_23912,G__23198_23913,G__23199_23914))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23197_23912,G__23198_23913,G__23199_23914,G__23200_23915) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23197_23912,G__23198_23913,G__23199_23914,G__23200_23915));
var G__23201_23917 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23203_23918 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23204_23919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23205_23920 = ((function (G__23201_23917,G__23203_23918,G__23204_23919){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__23201_23917,G__23203_23918,G__23204_23919))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23201_23917,G__23203_23918,G__23204_23919,G__23205_23920) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23201_23917,G__23203_23918,G__23204_23919,G__23205_23920));
var G__23212_23921 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23213_23922 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23214_23923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23215_23924 = ((function (G__23212_23921,G__23213_23922,G__23214_23923){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23212_23921,G__23213_23922,G__23214_23923))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23212_23921,G__23213_23922,G__23214_23923,G__23215_23924) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23212_23921,G__23213_23922,G__23214_23923,G__23215_23924));
var G__23216_23925 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23217_23926 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23218_23927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23219_23928 = ((function (G__23216_23925,G__23217_23926,G__23218_23927){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23216_23925,G__23217_23926,G__23218_23927))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23216_23925,G__23217_23926,G__23218_23927,G__23219_23928) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23216_23925,G__23217_23926,G__23218_23927,G__23219_23928));
var G__23223_23929 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23224_23930 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23225_23931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23226_23932 = ((function (G__23223_23929,G__23224_23930,G__23225_23931){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23223_23929,G__23224_23930,G__23225_23931))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23223_23929,G__23224_23930,G__23225_23931,G__23226_23932) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23223_23929,G__23224_23930,G__23225_23931,G__23226_23932));
var G__23227_23933 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23228_23934 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23229_23935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23230_23936 = ((function (G__23227_23933,G__23228_23934,G__23229_23935){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__23227_23933,G__23228_23934,G__23229_23935))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23227_23933,G__23228_23934,G__23229_23935,G__23230_23936) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23227_23933,G__23228_23934,G__23229_23935,G__23230_23936));
var G__23234_23937 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23235_23938 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23236_23939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23237_23940 = ((function (G__23234_23937,G__23235_23938,G__23236_23939){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23234_23937,G__23235_23938,G__23236_23939))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23234_23937,G__23235_23938,G__23236_23939,G__23237_23940) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23234_23937,G__23235_23938,G__23236_23939,G__23237_23940));
var G__23238_23941 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23239_23942 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23240_23943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23241_23944 = ((function (G__23238_23941,G__23239_23942,G__23240_23943){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23238_23941,G__23239_23942,G__23240_23943))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23238_23941,G__23239_23942,G__23240_23943,G__23241_23944) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23238_23941,G__23239_23942,G__23240_23943,G__23241_23944));
var G__23245_23945 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23246_23946 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23247_23947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23248_23948 = ((function (G__23245_23945,G__23246_23946,G__23247_23947){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23245_23945,G__23246_23946,G__23247_23947))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23245_23945,G__23246_23946,G__23247_23947,G__23248_23948) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23245_23945,G__23246_23946,G__23247_23947,G__23248_23948));
var G__23254_23949 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23255_23950 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23256_23951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23257_23952 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23258_23953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23259_23954 = ((function (G__23254_23949,G__23255_23950,G__23256_23951,G__23257_23952,G__23258_23953){
return (function (p__23263){
var vec__23264 = p__23263;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23264,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23264,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23254_23949,G__23255_23950,G__23256_23951,G__23257_23952,G__23258_23953))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23254_23949,G__23255_23950,G__23256_23951,G__23257_23952,G__23258_23953,G__23259_23954) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23254_23949,G__23255_23950,G__23256_23951,G__23257_23952,G__23258_23953,G__23259_23954));
var G__23270_23955 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23271_23956 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23272_23957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23273_23958 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23274_23959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23275_23960 = ((function (G__23270_23955,G__23271_23956,G__23272_23957,G__23273_23958,G__23274_23959){
return (function (p__23276){
var vec__23277 = p__23276;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23277,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23277,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__23270_23955,G__23271_23956,G__23272_23957,G__23273_23958,G__23274_23959))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23270_23955,G__23271_23956,G__23272_23957,G__23273_23958,G__23274_23959,G__23275_23960) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23270_23955,G__23271_23956,G__23272_23957,G__23273_23958,G__23274_23959,G__23275_23960));
var G__23283_23962 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23284_23963 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23285_23964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23286_23965 = ((function (G__23283_23962,G__23284_23963,G__23285_23964){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23283_23962,G__23284_23963,G__23285_23964))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23283_23962,G__23284_23963,G__23285_23964,G__23286_23965) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23283_23962,G__23284_23963,G__23285_23964,G__23286_23965));
var G__23291_23966 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23292_23967 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23293_23968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23294_23969 = ((function (G__23291_23966,G__23292_23967,G__23293_23968){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23291_23966,G__23292_23967,G__23293_23968){
return (function (p1__23290_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__23290_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__23290_SHARP_)));
});})(G__23291_23966,G__23292_23967,G__23293_23968))
,traces);
});})(G__23291_23966,G__23292_23967,G__23293_23968))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23291_23966,G__23292_23967,G__23293_23968,G__23294_23969) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23291_23966,G__23292_23967,G__23293_23968,G__23294_23969));
var G__23301_23970 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23302_23971 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23303_23972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23304_23973 = ((function (G__23301_23970,G__23302_23971,G__23303_23972){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23301_23970,G__23302_23971,G__23303_23972))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23301_23970,G__23302_23971,G__23303_23972,G__23304_23973) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23301_23970,G__23302_23971,G__23303_23972,G__23304_23973));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__23311 = arguments.length;
switch (G__23311) {
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
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq23307){
var G__23308 = cljs.core.first(seq23307);
var seq23307__$1 = cljs.core.next(seq23307);
var G__23309 = cljs.core.first(seq23307__$1);
var seq23307__$2 = cljs.core.next(seq23307__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23308,G__23309,seq23307__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__23322_23978 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23323_23979 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23324_23980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23325_23981 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23326_23982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23327_23983 = ((function (G__23322_23978,G__23323_23979,G__23324_23980,G__23325_23981,G__23326_23982){
return (function (p__23328,p__23329){
var vec__23330 = p__23328;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23330,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23330,(1),null);
var vec__23333 = p__23329;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__23337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23337,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23337,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__23322_23978,G__23323_23979,G__23324_23980,G__23325_23981,G__23326_23982))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23322_23978,G__23323_23979,G__23324_23980,G__23325_23981,G__23326_23982,G__23327_23983) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23322_23978,G__23323_23979,G__23324_23980,G__23325_23981,G__23326_23982,G__23327_23983));
var G__23344_23984 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23345_23985 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23346_23986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23347_23987 = ((function (G__23344_23984,G__23345_23985,G__23346_23986){
return (function (match){
var map__23348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__23348__$1 = (((((!((map__23348 == null))))?(((((map__23348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23348):map__23348);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__23344_23984,G__23345_23985,G__23346_23986))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23344_23984,G__23345_23985,G__23346_23986,G__23347_23987) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23344_23984,G__23345_23985,G__23346_23986,G__23347_23987));
var G__23352_23988 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__23353_23989 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23354_23990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23355_23991 = ((function (G__23352_23988,G__23353_23989,G__23354_23990){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__23352_23988,G__23353_23989,G__23354_23990))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23352_23988,G__23353_23989,G__23354_23990,G__23355_23991) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23352_23988,G__23353_23989,G__23354_23990,G__23355_23991));
var G__23367_23992 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__23370_23993 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23371_23994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23372_23995 = ((function (G__23367_23992,G__23370_23993,G__23371_23994){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__23367_23992,G__23370_23993,G__23371_23994))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23367_23992,G__23370_23993,G__23371_23994,G__23372_23995) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23367_23992,G__23370_23993,G__23371_23994,G__23372_23995));
var G__23377_23996 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__23378_23997 = ((function (G__23377_23996){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23377_23996))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23377_23996,G__23378_23997) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23377_23996,G__23378_23997));
var G__23379_23998 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23380_23999 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23381_24000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23382_24001 = ((function (G__23379_23998,G__23380_23999,G__23381_24000){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__23379_23998,G__23380_23999,G__23381_24000))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23379_23998,G__23380_23999,G__23381_24000,G__23382_24001) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23379_23998,G__23380_23999,G__23381_24000,G__23382_24001));
var G__23383_24002 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23384_24003 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23385_24004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23386_24005 = ((function (G__23383_24002,G__23384_24003,G__23385_24004){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23383_24002,G__23384_24003,G__23385_24004))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23383_24002,G__23384_24003,G__23385_24004,G__23386_24005) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23383_24002,G__23384_24003,G__23385_24004,G__23386_24005));
var G__23388_24006 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23389_24007 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23390_24008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23391_24009 = ((function (G__23388_24006,G__23389_24007,G__23390_24008){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23388_24006,G__23389_24007,G__23390_24008))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23388_24006,G__23389_24007,G__23390_24008,G__23391_24009) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23388_24006,G__23389_24007,G__23390_24008,G__23391_24009));
var G__23392_24010 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23393_24011 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23394_24012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23395_24013 = ((function (G__23392_24010,G__23393_24011,G__23394_24012){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23392_24010,G__23393_24011,G__23394_24012))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23392_24010,G__23393_24011,G__23394_24012,G__23395_24013) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23392_24010,G__23393_24011,G__23394_24012,G__23395_24013));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23396_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__23396_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23437){
return cljs.core.coll_QMARK_(G__23437);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23454){
return cljs.core.map_QMARK_(G__23454);
}),(function (G__23454){
return cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23454){
return cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23454){
return cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23454){
return cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23454){
return cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23454){
return cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23454){
return ((cljs.core.map_QMARK_(G__23454)) && (cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23454,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23498){
return cljs.core.coll_QMARK_(G__23498);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__23500 = sub_type;
var G__23500__$1 = (((G__23500 instanceof cljs.core.Keyword))?G__23500.fqn:null);
switch (G__23500__$1) {
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
var G__23502 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__23502__$1 = (((G__23502 instanceof cljs.core.Keyword))?G__23502.fqn:null);
switch (G__23502__$1) {
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
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__23503,p__23504){
var vec__23505 = p__23503;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(1),null);
var vec__23508 = p__23504;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__23505,sub_info,sub_state,vec__23508,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__23505,sub_info,sub_state,vec__23508,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__23505,sub_info,sub_state,vec__23508,subscription){
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
});})(remove_fn,vec__23505,sub_info,sub_state,vec__23508,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__23513_24019 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__23514_24020 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23515_24021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23516_24022 = ((function (G__23513_24019,G__23514_24020,G__23515_24021){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23513_24019,G__23514_24020,G__23515_24021))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23513_24019,G__23514_24020,G__23515_24021,G__23516_24022) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23513_24019,G__23514_24020,G__23515_24021,G__23516_24022));
var G__23520_24023 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__23521_24024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23522_24025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23523_24026 = ((function (G__23520_24023,G__23521_24024,G__23522_24025){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23520_24023,G__23521_24024,G__23522_24025))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23520_24023,G__23521_24024,G__23522_24025,G__23523_24026) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23520_24023,G__23521_24024,G__23522_24025,G__23523_24026));
var G__23524_24027 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__23525_24028 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23526_24029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23527_24030 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23528_24031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__23529_24032 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23524_24027,G__23525_24028,G__23526_24029,G__23527_24030,G__23528_24031,G__23529_24032) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23524_24027,G__23525_24028,G__23526_24029,G__23527_24030,G__23528_24031,G__23529_24032));
var G__23530_24033 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__23531_24034 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23532_24035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23533_24036 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23534_24037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__23535_24038 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23530_24033,G__23531_24034,G__23532_24035,G__23533_24036,G__23534_24037,G__23535_24038) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23530_24033,G__23531_24034,G__23532_24035,G__23533_24036,G__23534_24037,G__23535_24038));
var G__23536_24039 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__23537_24040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23538_24041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23539_24042 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23540_24043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__23541_24044 = ((function (G__23536_24039,G__23537_24040,G__23538_24041,G__23539_24042,G__23540_24043){
return (function (p__23542){
var vec__23543 = p__23542;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23543,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23543,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__23536_24039,G__23537_24040,G__23538_24041,G__23539_24042,G__23540_24043))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23536_24039,G__23537_24040,G__23538_24041,G__23539_24042,G__23540_24043,G__23541_24044) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23536_24039,G__23537_24040,G__23538_24041,G__23539_24042,G__23540_24043,G__23541_24044));
var G__23546_24045 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__23547_24046 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23548_24047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__23549_24048 = ((function (G__23546_24045,G__23547_24046,G__23548_24047){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__23546_24045,G__23547_24046,G__23548_24047))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23546_24045,G__23547_24046,G__23548_24047,G__23549_24048) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23546_24045,G__23547_24046,G__23548_24047,G__23549_24048));
var G__23550_24049 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__23551_24050 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23552_24051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23553_24052 = ((function (G__23550_24049,G__23551_24050,G__23552_24051){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__23550_24049,G__23551_24050,G__23552_24051))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23550_24049,G__23551_24050,G__23552_24051,G__23553_24052) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23550_24049,G__23551_24050,G__23552_24051,G__23553_24052));
var G__23554_24053 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__23555_24054 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23556_24055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23557_24056 = ((function (G__23554_24053,G__23555_24054,G__23556_24055){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__23554_24053,G__23555_24054,G__23556_24055))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23554_24053,G__23555_24054,G__23556_24055,G__23557_24056) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23554_24053,G__23555_24054,G__23556_24055,G__23557_24056));
var G__23558_24057 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__23559_24058 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23560_24059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23561_24060 = ((function (G__23558_24057,G__23559_24058,G__23560_24059){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__23558_24057,G__23559_24058,G__23560_24059))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23558_24057,G__23559_24058,G__23560_24059,G__23561_24060) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23558_24057,G__23559_24058,G__23560_24059,G__23561_24060));
var G__23562_24061 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__23563_24062 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23564_24063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23565_24064 = ((function (G__23562_24061,G__23563_24062,G__23564_24063){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__23562_24061,G__23563_24062,G__23564_24063))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23562_24061,G__23563_24062,G__23564_24063,G__23565_24064) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23562_24061,G__23563_24062,G__23564_24063,G__23565_24064));
var G__23566_24065 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__23567_24066 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23568_24067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23569_24068 = ((function (G__23566_24065,G__23567_24066,G__23568_24067){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__23566_24065,G__23567_24066,G__23568_24067))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23566_24065,G__23567_24066,G__23568_24067,G__23569_24068) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23566_24065,G__23567_24066,G__23568_24067,G__23569_24068));
var G__23574_24069 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__23575_24070 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23576_24071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23577_24072 = ((function (G__23574_24069,G__23575_24070,G__23576_24071){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__23574_24069,G__23575_24070,G__23576_24071))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23574_24069,G__23575_24070,G__23576_24071,G__23577_24072) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23574_24069,G__23575_24070,G__23576_24071,G__23577_24072));
var G__23578_24073 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__23579_24074 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23580_24075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23581_24076 = ((function (G__23578_24073,G__23579_24074,G__23580_24075){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__23578_24073,G__23579_24074,G__23580_24075))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23578_24073,G__23579_24074,G__23580_24075,G__23581_24076) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23578_24073,G__23579_24074,G__23580_24075,G__23581_24076));
var G__23582_24077 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__23583_24078 = ((function (G__23582_24077){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23582_24077))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23582_24077,G__23583_24078) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23582_24077,G__23583_24078));
var G__23584_24079 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__23585_24080 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23586_24081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23587_24082 = ((function (G__23584_24079,G__23585_24080,G__23586_24081){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__23584_24079,G__23585_24080,G__23586_24081){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__23584_24079,G__23585_24080,G__23586_24081){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__23584_24079,G__23585_24080,G__23586_24081))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__23584_24079,G__23585_24080,G__23586_24081))
,traces);
});})(G__23584_24079,G__23585_24080,G__23586_24081))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23584_24079,G__23585_24080,G__23586_24081,G__23587_24082) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23584_24079,G__23585_24080,G__23586_24081,G__23587_24082));
var G__23588_24083 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__23589_24084 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23590_24085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__23591_24086 = ((function (G__23588_24083,G__23589_24084,G__23590_24085){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__23588_24083,G__23589_24084,G__23590_24085))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23588_24083,G__23589_24084,G__23590_24085,G__23591_24086) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23588_24083,G__23589_24084,G__23590_24085,G__23591_24086));
var G__23592_24087 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__23593_24088 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23594_24089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__23595_24090 = ((function (G__23592_24087,G__23593_24088,G__23594_24089){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__23592_24087,G__23593_24088,G__23594_24089))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23592_24087,G__23593_24088,G__23594_24089,G__23595_24090) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23592_24087,G__23593_24088,G__23594_24089,G__23595_24090));
var G__23596_24091 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__23597_24092 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23598_24093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23599_24094 = ((function (G__23596_24091,G__23597_24092,G__23598_24093){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23596_24091,G__23597_24092,G__23598_24093))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23596_24091,G__23597_24092,G__23598_24093,G__23599_24094) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23596_24091,G__23597_24092,G__23598_24093,G__23599_24094));
var G__23600_24095 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__23601_24096 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23602_24097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23603_24098 = ((function (G__23600_24095,G__23601_24096,G__23602_24097){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23600_24095,G__23601_24096,G__23602_24097))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23600_24095,G__23601_24096,G__23602_24097,G__23603_24098) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23600_24095,G__23601_24096,G__23602_24097,G__23603_24098));
var G__23604_24099 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__23605_24100 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23606_24101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23607_24102 = ((function (G__23604_24099,G__23605_24100,G__23606_24101){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23604_24099,G__23605_24100,G__23606_24101))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23604_24099,G__23605_24100,G__23606_24101,G__23607_24102) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23604_24099,G__23605_24100,G__23606_24101,G__23607_24102));
var G__23608_24103 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__23609_24104 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23610_24105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23611_24106 = ((function (G__23608_24103,G__23609_24104,G__23610_24105){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23608_24103,G__23609_24104,G__23610_24105))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23608_24103,G__23609_24104,G__23610_24105,G__23611_24106) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23608_24103,G__23609_24104,G__23610_24105,G__23611_24106));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__23637_24107 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__23638_24108 = ((function (G__23637_24107){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__23637_24107))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23637_24107,G__23638_24108) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23637_24107,G__23638_24108));
var G__23639_24109 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__23640_24110 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23641_24111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__23642_24112 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23643_24113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__23644_24114 = ((function (G__23639_24109,G__23640_24110,G__23641_24111,G__23642_24112,G__23643_24113){
return (function (p__23645,_){
var vec__23646 = p__23645;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23646,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23646,(1),null);
var G__23649 = (window_width / char_width);
return Math.ceil(G__23649);
});})(G__23639_24109,G__23640_24110,G__23641_24111,G__23642_24112,G__23643_24113))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23639_24109,G__23640_24110,G__23641_24111,G__23642_24112,G__23643_24113,G__23644_24114) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23639_24109,G__23640_24110,G__23641_24111,G__23642_24112,G__23643_24113,G__23644_24114));
var G__23676_24115 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__23677_24116 = ((function (G__23676_24115){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23676_24115))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23676_24115,G__23677_24116) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23676_24115,G__23677_24116));
var G__23679_24117 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__23680_24118 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23681_24119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__23682_24120 = ((function (G__23679_24117,G__23680_24118,G__23681_24119){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__23679_24117,G__23680_24118,G__23681_24119))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23679_24117,G__23680_24118,G__23681_24119,G__23682_24120) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23679_24117,G__23680_24118,G__23681_24119,G__23682_24120));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
