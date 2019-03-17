goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__23000_23670 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__23001_23671 = ((function (G__23000_23670){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__23000_23670))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23000_23670,G__23001_23671) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23000_23670,G__23001_23671));
var G__23002_23673 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__23003_23674 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23004_23675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23005_23676 = ((function (G__23002_23673,G__23003_23674,G__23004_23675){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__23002_23673,G__23003_23674,G__23004_23675))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23002_23673,G__23003_23674,G__23004_23675,G__23005_23676) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23002_23673,G__23003_23674,G__23004_23675,G__23005_23676));
var G__23008_23677 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__23009_23678 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23010_23679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__23011_23680 = ((function (G__23008_23677,G__23009_23678,G__23010_23679){
return (function (panel_width_PERCENT_,p__23013){
var vec__23014 = p__23013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(1),null);
return (((function (){var G__23017 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23017);
})() * n) / 100.0);
});})(G__23008_23677,G__23009_23678,G__23010_23679))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23008_23677,G__23009_23678,G__23010_23679,G__23011_23680) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23008_23677,G__23009_23678,G__23010_23679,G__23011_23680));
var G__23020_23681 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23021_23682 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23022_23683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23023_23684 = ((function (G__23020_23681,G__23021_23682,G__23022_23683){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23020_23681,G__23021_23682,G__23022_23683))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23020_23681,G__23021_23682,G__23022_23683,G__23023_23684) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23020_23681,G__23021_23682,G__23022_23683,G__23023_23684));
var G__23024_23685 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23025_23686 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23026_23687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23027_23688 = ((function (G__23024_23685,G__23025_23686,G__23026_23687){
return (function (width,p__23028){
var vec__23029 = p__23028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,(1),null);
return ((function (){var G__23032 = (width / n);
return Math.ceil(G__23032);
})() * n);
});})(G__23024_23685,G__23025_23686,G__23026_23687))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23024_23685,G__23025_23686,G__23026_23687,G__23027_23688) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23024_23685,G__23025_23686,G__23026_23687,G__23027_23688));
var G__23033_23691 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23034_23692 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23035_23693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23036_23694 = ((function (G__23033_23691,G__23034_23692,G__23035_23693){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23033_23691,G__23034_23692,G__23035_23693))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23033_23691,G__23034_23692,G__23035_23693,G__23036_23694) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23033_23691,G__23034_23692,G__23035_23693,G__23036_23694));
var G__23037_23704 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23038_23705 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23039_23706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23040_23707 = ((function (G__23037_23704,G__23038_23705,G__23039_23706){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23037_23704,G__23038_23705,G__23039_23706))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23037_23704,G__23038_23705,G__23039_23706,G__23040_23707) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23037_23704,G__23038_23705,G__23039_23706,G__23040_23707));
var G__23041_23715 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23042_23716 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23043_23717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23044_23718 = ((function (G__23041_23715,G__23042_23716,G__23043_23717){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23041_23715,G__23042_23716,G__23043_23717))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23041_23715,G__23042_23716,G__23043_23717,G__23044_23718) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23041_23715,G__23042_23716,G__23043_23717,G__23044_23718));
var G__23045_23724 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23046_23725 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23047_23726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23048_23727 = ((function (G__23045_23724,G__23046_23725,G__23047_23726){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23045_23724,G__23046_23725,G__23047_23726))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23045_23724,G__23046_23725,G__23047_23726,G__23048_23727) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23045_23724,G__23046_23725,G__23047_23726,G__23048_23727));
var G__23049_23728 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23050_23729 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23051_23730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23052_23731 = ((function (G__23049_23728,G__23050_23729,G__23051_23730){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23049_23728,G__23050_23729,G__23051_23730))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23049_23728,G__23050_23729,G__23051_23730,G__23052_23731) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23049_23728,G__23050_23729,G__23051_23730,G__23052_23731));
var G__23053_23733 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23054_23734 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23055_23735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23056_23736 = ((function (G__23053_23733,G__23054_23734,G__23055_23735){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23053_23733,G__23054_23734,G__23055_23735))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23053_23733,G__23054_23734,G__23055_23735,G__23056_23736) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23053_23733,G__23054_23734,G__23055_23735,G__23056_23736));
var G__23057_23737 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23058_23738 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23059_23739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23060_23740 = ((function (G__23057_23737,G__23058_23738,G__23059_23739){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23057_23737,G__23058_23738,G__23059_23739))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23057_23737,G__23058_23738,G__23059_23739,G__23060_23740) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23057_23737,G__23058_23738,G__23059_23739,G__23060_23740));
var G__23062_23743 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23063_23744 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23064_23745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23065_23746 = ((function (G__23062_23743,G__23063_23744,G__23064_23745){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23062_23743,G__23063_23744,G__23064_23745))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23062_23743,G__23063_23744,G__23064_23745,G__23065_23746) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23062_23743,G__23063_23744,G__23064_23745,G__23065_23746));
var G__23068_23752 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23069_23753 = ((function (G__23068_23752){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23068_23752))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23068_23752,G__23069_23753) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23068_23752,G__23069_23753));
var G__23070_23754 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23071_23755 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23072_23756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23073_23757 = ((function (G__23070_23754,G__23071_23755,G__23072_23756){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23070_23754,G__23071_23755,G__23072_23756))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23070_23754,G__23071_23755,G__23072_23756,G__23073_23757) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23070_23754,G__23071_23755,G__23072_23756,G__23073_23757));
var G__23075_23761 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23076_23762 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23077_23763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23078_23764 = ((function (G__23075_23761,G__23076_23762,G__23077_23763){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23075_23761,G__23076_23762,G__23077_23763))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23075_23761,G__23076_23762,G__23077_23763,G__23078_23764) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23075_23761,G__23076_23762,G__23077_23763,G__23078_23764));
var G__23080_23769 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23081_23770 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23082_23771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23083_23772 = ((function (G__23080_23769,G__23081_23770,G__23082_23771){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23080_23769,G__23081_23770,G__23082_23771){
return (function (p1__23079_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23079_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23079_SHARP_));
});})(G__23080_23769,G__23081_23770,G__23082_23771))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23080_23769,G__23081_23770,G__23082_23771))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23080_23769,G__23081_23770,G__23082_23771,G__23083_23772) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23080_23769,G__23081_23770,G__23082_23771,G__23083_23772));
var G__23084_23775 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23085_23776 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23086_23777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23087_23778 = ((function (G__23084_23775,G__23085_23776,G__23086_23777){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23084_23775,G__23085_23776,G__23086_23777))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23084_23775,G__23085_23776,G__23086_23777,G__23087_23778) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23084_23775,G__23085_23776,G__23086_23777,G__23087_23778));
var G__23088_23779 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23089_23780 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23090_23781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23091_23782 = ((function (G__23088_23779,G__23089_23780,G__23090_23781){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23088_23779,G__23089_23780,G__23090_23781))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23088_23779,G__23089_23780,G__23090_23781,G__23091_23782) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23088_23779,G__23089_23780,G__23090_23781,G__23091_23782));
var G__23093_23783 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23094_23784 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23095_23785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23096_23786 = ((function (G__23093_23783,G__23094_23784,G__23095_23785){
return (function (expansions,p__23097){
var vec__23098 = p__23097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23098,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23098,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23093_23783,G__23094_23784,G__23095_23785))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23093_23783,G__23094_23784,G__23095_23785,G__23096_23786) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23093_23783,G__23094_23784,G__23095_23785,G__23096_23786));
var G__23103_23787 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23104_23788 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23105_23789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23106_23790 = ((function (G__23103_23787,G__23104_23788,G__23105_23789){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23103_23787,G__23104_23788,G__23105_23789))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23103_23787,G__23104_23788,G__23105_23789,G__23106_23790) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23103_23787,G__23104_23788,G__23105_23789,G__23106_23790));
var G__23107_23791 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23108_23792 = ((function (G__23107_23791){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23107_23791))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23107_23791,G__23108_23792) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23107_23791,G__23108_23792));
var G__23111_23793 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23112_23794 = ((function (G__23111_23793){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23111_23793))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23111_23793,G__23112_23794) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23111_23793,G__23112_23794));
var G__23113_23795 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23114_23796 = ((function (G__23113_23795){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23113_23795))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23113_23795,G__23114_23796) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23113_23795,G__23114_23796));
var G__23117_23799 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23118_23800 = ((function (G__23117_23799){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23117_23799))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23117_23799,G__23118_23800) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23117_23799,G__23118_23800));
var G__23119_23802 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23120_23803 = ((function (G__23119_23802){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23119_23802))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23119_23802,G__23120_23803) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23119_23802,G__23120_23803));
var G__23121_23805 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23122_23806 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23123_23807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23124_23808 = ((function (G__23121_23805,G__23122_23806,G__23123_23807){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23121_23805,G__23122_23806,G__23123_23807))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23121_23805,G__23122_23806,G__23123_23807,G__23124_23808) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23121_23805,G__23122_23806,G__23123_23807,G__23124_23808));
var G__23129_23810 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23130_23811 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23131_23812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23132_23813 = ((function (G__23129_23810,G__23130_23811,G__23131_23812){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23129_23810,G__23130_23811,G__23131_23812))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23129_23810,G__23130_23811,G__23131_23812,G__23132_23813) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23129_23810,G__23130_23811,G__23131_23812,G__23132_23813));
var G__23133_23815 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23134_23816 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23135_23817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23136_23818 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23137_23819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23138_23820 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23139_23821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23140_23822 = ((function (G__23133_23815,G__23134_23816,G__23135_23817,G__23136_23818,G__23137_23819,G__23138_23820,G__23139_23821){
return (function (p__23141,_){
var vec__23142 = p__23141;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23142,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23142,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23142,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23133_23815,G__23134_23816,G__23135_23817,G__23136_23818,G__23137_23819,G__23138_23820,G__23139_23821))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23133_23815,G__23134_23816,G__23135_23817,G__23136_23818,G__23137_23819,G__23138_23820,G__23139_23821,G__23140_23822) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23133_23815,G__23134_23816,G__23135_23817,G__23136_23818,G__23137_23819,G__23138_23820,G__23139_23821,G__23140_23822));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__23145,_){
var vec__23146 = p__23145;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23146,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23146,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23146,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__23146,traces,filtered_views))
),traces);
});
var G__23156_23851 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23157_23852 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23158_23853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23159_23854 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23160_23855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23161_23856 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23156_23851,G__23157_23852,G__23158_23853,G__23159_23854,G__23160_23855,G__23161_23856) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23156_23851,G__23157_23852,G__23158_23853,G__23159_23854,G__23160_23855,G__23161_23856));
var G__23162_23857 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23163_23858 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23164_23859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23165_23860 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23166_23861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23167_23862 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23162_23857,G__23163_23858,G__23164_23859,G__23165_23860,G__23166_23861,G__23167_23862) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23162_23857,G__23163_23858,G__23164_23859,G__23165_23860,G__23166_23861,G__23167_23862));
var G__23168_23863 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23169_23864 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23170_23865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23171_23866 = ((function (G__23168_23863,G__23169_23864,G__23170_23865){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23168_23863,G__23169_23864,G__23170_23865))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23168_23863,G__23169_23864,G__23170_23865,G__23171_23866) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23168_23863,G__23169_23864,G__23170_23865,G__23171_23866));
var G__23172_23867 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23173_23868 = ((function (G__23172_23867){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23172_23867))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23172_23867,G__23173_23868) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23172_23867,G__23173_23868));
var G__23174_23869 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23175_23870 = ((function (G__23174_23869){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23174_23869))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23174_23869,G__23175_23870) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23174_23869,G__23175_23870));
var G__23176_23873 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23177_23874 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23178_23875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23179_23876 = ((function (G__23176_23873,G__23177_23874,G__23178_23875){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23176_23873,G__23177_23874,G__23178_23875))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23176_23873,G__23177_23874,G__23178_23875,G__23179_23876) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23176_23873,G__23177_23874,G__23178_23875,G__23179_23876));
var G__23182_23877 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23183_23878 = ((function (G__23182_23877){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23182_23877))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23182_23877,G__23183_23878) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23182_23877,G__23183_23878));
var G__23184_23881 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23185_23882 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23186_23883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23187_23884 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23188_23885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23189_23886 = ((function (G__23184_23881,G__23185_23882,G__23186_23883,G__23187_23884,G__23188_23885){
return (function (p__23191,_){
var vec__23193 = p__23191;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23184_23881,G__23185_23882,G__23186_23883,G__23187_23884,G__23188_23885))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23184_23881,G__23185_23882,G__23186_23883,G__23187_23884,G__23188_23885,G__23189_23886) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23184_23881,G__23185_23882,G__23186_23883,G__23187_23884,G__23188_23885,G__23189_23886));
var G__23196_23897 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23197_23898 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23198_23899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23199_23900 = ((function (G__23196_23897,G__23197_23898,G__23198_23899){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23196_23897,G__23197_23898,G__23198_23899))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23196_23897,G__23197_23898,G__23198_23899,G__23199_23900) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23196_23897,G__23197_23898,G__23198_23899,G__23199_23900));
var G__23202_23906 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23203_23907 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23204_23908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23205_23909 = ((function (G__23202_23906,G__23203_23907,G__23204_23908){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__23202_23906,G__23203_23907,G__23204_23908))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23202_23906,G__23203_23907,G__23204_23908,G__23205_23909) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23202_23906,G__23203_23907,G__23204_23908,G__23205_23909));
var G__23206_23913 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23207_23914 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23208_23915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23209_23916 = ((function (G__23206_23913,G__23207_23914,G__23208_23915){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23206_23913,G__23207_23914,G__23208_23915))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23206_23913,G__23207_23914,G__23208_23915,G__23209_23916) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23206_23913,G__23207_23914,G__23208_23915,G__23209_23916));
var G__23211_23918 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23212_23919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23213_23920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23214_23921 = ((function (G__23211_23918,G__23212_23919,G__23213_23920){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23211_23918,G__23212_23919,G__23213_23920))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23211_23918,G__23212_23919,G__23213_23920,G__23214_23921) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23211_23918,G__23212_23919,G__23213_23920,G__23214_23921));
var G__23215_23922 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23216_23923 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23217_23924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23218_23925 = ((function (G__23215_23922,G__23216_23923,G__23217_23924){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23215_23922,G__23216_23923,G__23217_23924))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23215_23922,G__23216_23923,G__23217_23924,G__23218_23925) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23215_23922,G__23216_23923,G__23217_23924,G__23218_23925));
var G__23222_23926 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23223_23927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23224_23928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23225_23929 = ((function (G__23222_23926,G__23223_23927,G__23224_23928){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__23222_23926,G__23223_23927,G__23224_23928))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23222_23926,G__23223_23927,G__23224_23928,G__23225_23929) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23222_23926,G__23223_23927,G__23224_23928,G__23225_23929));
var G__23232_23930 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23233_23931 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23234_23932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23235_23933 = ((function (G__23232_23930,G__23233_23931,G__23234_23932){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23232_23930,G__23233_23931,G__23234_23932))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23232_23930,G__23233_23931,G__23234_23932,G__23235_23933) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23232_23930,G__23233_23931,G__23234_23932,G__23235_23933));
var G__23236_23934 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23237_23935 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23238_23936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23239_23937 = ((function (G__23236_23934,G__23237_23935,G__23238_23936){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23236_23934,G__23237_23935,G__23238_23936))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23236_23934,G__23237_23935,G__23238_23936,G__23239_23937) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23236_23934,G__23237_23935,G__23238_23936,G__23239_23937));
var G__23240_23938 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23241_23939 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23242_23940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23243_23941 = ((function (G__23240_23938,G__23241_23939,G__23242_23940){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23240_23938,G__23241_23939,G__23242_23940))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23240_23938,G__23241_23939,G__23242_23940,G__23243_23941) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23240_23938,G__23241_23939,G__23242_23940,G__23243_23941));
var G__23244_23942 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23245_23943 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23246_23944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23247_23945 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23248_23946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23249_23947 = ((function (G__23244_23942,G__23245_23943,G__23246_23944,G__23247_23945,G__23248_23946){
return (function (p__23250){
var vec__23251 = p__23250;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23251,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23251,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23244_23942,G__23245_23943,G__23246_23944,G__23247_23945,G__23248_23946))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23244_23942,G__23245_23943,G__23246_23944,G__23247_23945,G__23248_23946,G__23249_23947) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23244_23942,G__23245_23943,G__23246_23944,G__23247_23945,G__23248_23946,G__23249_23947));
var G__23256_23948 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23257_23949 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23258_23950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23259_23951 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23260_23952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23261_23953 = ((function (G__23256_23948,G__23257_23949,G__23258_23950,G__23259_23951,G__23260_23952){
return (function (p__23262){
var vec__23263 = p__23262;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23263,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23263,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__23256_23948,G__23257_23949,G__23258_23950,G__23259_23951,G__23260_23952))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23256_23948,G__23257_23949,G__23258_23950,G__23259_23951,G__23260_23952,G__23261_23953) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23256_23948,G__23257_23949,G__23258_23950,G__23259_23951,G__23260_23952,G__23261_23953));
var G__23267_23954 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23268_23955 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23269_23956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23270_23957 = ((function (G__23267_23954,G__23268_23955,G__23269_23956){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23267_23954,G__23268_23955,G__23269_23956))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23267_23954,G__23268_23955,G__23269_23956,G__23270_23957) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23267_23954,G__23268_23955,G__23269_23956,G__23270_23957));
var G__23272_23959 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23273_23960 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23274_23961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23275_23962 = ((function (G__23272_23959,G__23273_23960,G__23274_23961){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23272_23959,G__23273_23960,G__23274_23961){
return (function (p1__23271_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__23271_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__23271_SHARP_)));
});})(G__23272_23959,G__23273_23960,G__23274_23961))
,traces);
});})(G__23272_23959,G__23273_23960,G__23274_23961))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23272_23959,G__23273_23960,G__23274_23961,G__23275_23962) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23272_23959,G__23273_23960,G__23274_23961,G__23275_23962));
var G__23276_23964 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23277_23965 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23278_23966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23279_23967 = ((function (G__23276_23964,G__23277_23965,G__23278_23966){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23276_23964,G__23277_23965,G__23278_23966))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23276_23964,G__23277_23965,G__23278_23966,G__23279_23967) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23276_23964,G__23277_23965,G__23278_23966,G__23279_23967));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__23284 = arguments.length;
switch (G__23284) {
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
var len__4730__auto___23970 = arguments.length;
var i__4731__auto___23971 = (0);
while(true){
if((i__4731__auto___23971 < len__4730__auto___23970)){
args_arr__4751__auto__.push((arguments[i__4731__auto___23971]));

var G__23972 = (i__4731__auto___23971 + (1));
i__4731__auto___23971 = G__23972;
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
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq23281){
var G__23282 = cljs.core.first(seq23281);
var seq23281__$1 = cljs.core.next(seq23281);
var G__23283 = cljs.core.first(seq23281__$1);
var seq23281__$2 = cljs.core.next(seq23281__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23282,G__23283,seq23281__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__23290_23973 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23291_23974 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23292_23975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23293_23976 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23294_23977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23295_23978 = ((function (G__23290_23973,G__23291_23974,G__23292_23975,G__23293_23976,G__23294_23977){
return (function (p__23296,p__23297){
var vec__23298 = p__23296;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23298,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23298,(1),null);
var vec__23301 = p__23297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23301,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__23304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__23290_23973,G__23291_23974,G__23292_23975,G__23293_23976,G__23294_23977))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23290_23973,G__23291_23974,G__23292_23975,G__23293_23976,G__23294_23977,G__23295_23978) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23290_23973,G__23291_23974,G__23292_23975,G__23293_23976,G__23294_23977,G__23295_23978));
var G__23307_23980 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23308_23981 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23309_23982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23310_23983 = ((function (G__23307_23980,G__23308_23981,G__23309_23982){
return (function (match){
var map__23313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__23313__$1 = (((((!((map__23313 == null))))?(((((map__23313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23313):map__23313);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23313__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__23307_23980,G__23308_23981,G__23309_23982))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23307_23980,G__23308_23981,G__23309_23982,G__23310_23983) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23307_23980,G__23308_23981,G__23309_23982,G__23310_23983));
var G__23322_23985 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__23323_23986 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23324_23987 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23325_23988 = ((function (G__23322_23985,G__23323_23986,G__23324_23987){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__23322_23985,G__23323_23986,G__23324_23987))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23322_23985,G__23323_23986,G__23324_23987,G__23325_23988) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23322_23985,G__23323_23986,G__23324_23987,G__23325_23988));
var G__23330_23989 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__23331_23990 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23332_23991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23333_23992 = ((function (G__23330_23989,G__23331_23990,G__23332_23991){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__23330_23989,G__23331_23990,G__23332_23991))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23330_23989,G__23331_23990,G__23332_23991,G__23333_23992) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23330_23989,G__23331_23990,G__23332_23991,G__23333_23992));
var G__23337_23993 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__23338_23994 = ((function (G__23337_23993){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23337_23993))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23337_23993,G__23338_23994) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23337_23993,G__23338_23994));
var G__23342_23995 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23343_23996 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23344_23997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23345_23998 = ((function (G__23342_23995,G__23343_23996,G__23344_23997){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__23342_23995,G__23343_23996,G__23344_23997))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23342_23995,G__23343_23996,G__23344_23997,G__23345_23998) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23342_23995,G__23343_23996,G__23344_23997,G__23345_23998));
var G__23346_23999 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23347_24000 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23348_24001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23349_24002 = ((function (G__23346_23999,G__23347_24000,G__23348_24001){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23346_23999,G__23347_24000,G__23348_24001))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23346_23999,G__23347_24000,G__23348_24001,G__23349_24002) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23346_23999,G__23347_24000,G__23348_24001,G__23349_24002));
var G__23350_24003 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23351_24004 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23352_24005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23353_24006 = ((function (G__23350_24003,G__23351_24004,G__23352_24005){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23350_24003,G__23351_24004,G__23352_24005))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23350_24003,G__23351_24004,G__23352_24005,G__23353_24006) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23350_24003,G__23351_24004,G__23352_24005,G__23353_24006));
var G__23357_24007 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23358_24008 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23359_24009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23360_24010 = ((function (G__23357_24007,G__23358_24008,G__23359_24009){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23357_24007,G__23358_24008,G__23359_24009))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23357_24007,G__23358_24008,G__23359_24009,G__23360_24010) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23357_24007,G__23358_24008,G__23359_24009,G__23360_24010));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23361_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__23361_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23382){
return cljs.core.coll_QMARK_(G__23382);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23394){
return cljs.core.map_QMARK_(G__23394);
}),(function (G__23394){
return cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23394){
return cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23394){
return cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23394){
return cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23394){
return cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23394){
return cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23394){
return ((cljs.core.map_QMARK_(G__23394)) && (cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23394,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23412){
return cljs.core.coll_QMARK_(G__23412);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__23413 = sub_type;
var G__23413__$1 = (((G__23413 instanceof cljs.core.Keyword))?G__23413.fqn:null);
switch (G__23413__$1) {
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
var G__23422 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__23422__$1 = (((G__23422 instanceof cljs.core.Keyword))?G__23422.fqn:null);
switch (G__23422__$1) {
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
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__23427,p__23428){
var vec__23429 = p__23427;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23429,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23429,(1),null);
var vec__23432 = p__23428;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23432,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__23429,sub_info,sub_state,vec__23432,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__23429,sub_info,sub_state,vec__23432,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__23429,sub_info,sub_state,vec__23432,subscription){
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
});})(remove_fn,vec__23429,sub_info,sub_state,vec__23432,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__23449_24016 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__23450_24017 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23451_24018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23452_24019 = ((function (G__23449_24016,G__23450_24017,G__23451_24018){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23449_24016,G__23450_24017,G__23451_24018))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23449_24016,G__23450_24017,G__23451_24018,G__23452_24019) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23449_24016,G__23450_24017,G__23451_24018,G__23452_24019));
var G__23458_24020 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__23459_24021 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23460_24022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23461_24023 = ((function (G__23458_24020,G__23459_24021,G__23460_24022){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23458_24020,G__23459_24021,G__23460_24022))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23458_24020,G__23459_24021,G__23460_24022,G__23461_24023) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23458_24020,G__23459_24021,G__23460_24022,G__23461_24023));
var G__23467_24024 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__23468_24025 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23469_24026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23470_24027 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23471_24028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__23472_24029 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23467_24024,G__23468_24025,G__23469_24026,G__23470_24027,G__23471_24028,G__23472_24029) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23467_24024,G__23468_24025,G__23469_24026,G__23470_24027,G__23471_24028,G__23472_24029));
var G__23475_24030 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__23476_24031 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23477_24032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23478_24033 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23479_24034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__23480_24035 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23475_24030,G__23476_24031,G__23477_24032,G__23478_24033,G__23479_24034,G__23480_24035) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23475_24030,G__23476_24031,G__23477_24032,G__23478_24033,G__23479_24034,G__23480_24035));
var G__23481_24036 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__23482_24037 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23483_24038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23484_24039 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23485_24040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__23486_24041 = ((function (G__23481_24036,G__23482_24037,G__23483_24038,G__23484_24039,G__23485_24040){
return (function (p__23493){
var vec__23494 = p__23493;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23494,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23494,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__23481_24036,G__23482_24037,G__23483_24038,G__23484_24039,G__23485_24040))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23481_24036,G__23482_24037,G__23483_24038,G__23484_24039,G__23485_24040,G__23486_24041) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23481_24036,G__23482_24037,G__23483_24038,G__23484_24039,G__23485_24040,G__23486_24041));
var G__23501_24042 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__23502_24043 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23503_24044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__23504_24045 = ((function (G__23501_24042,G__23502_24043,G__23503_24044){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__23501_24042,G__23502_24043,G__23503_24044))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23501_24042,G__23502_24043,G__23503_24044,G__23504_24045) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23501_24042,G__23502_24043,G__23503_24044,G__23504_24045));
var G__23511_24046 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__23512_24047 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23513_24048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23514_24049 = ((function (G__23511_24046,G__23512_24047,G__23513_24048){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__23511_24046,G__23512_24047,G__23513_24048))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23511_24046,G__23512_24047,G__23513_24048,G__23514_24049) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23511_24046,G__23512_24047,G__23513_24048,G__23514_24049));
var G__23515_24050 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__23516_24051 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23517_24052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23518_24053 = ((function (G__23515_24050,G__23516_24051,G__23517_24052){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__23515_24050,G__23516_24051,G__23517_24052))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23515_24050,G__23516_24051,G__23517_24052,G__23518_24053) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23515_24050,G__23516_24051,G__23517_24052,G__23518_24053));
var G__23519_24054 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__23520_24055 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23521_24056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23522_24057 = ((function (G__23519_24054,G__23520_24055,G__23521_24056){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__23519_24054,G__23520_24055,G__23521_24056))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23519_24054,G__23520_24055,G__23521_24056,G__23522_24057) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23519_24054,G__23520_24055,G__23521_24056,G__23522_24057));
var G__23527_24058 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__23528_24059 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23529_24060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23530_24061 = ((function (G__23527_24058,G__23528_24059,G__23529_24060){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__23527_24058,G__23528_24059,G__23529_24060))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23527_24058,G__23528_24059,G__23529_24060,G__23530_24061) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23527_24058,G__23528_24059,G__23529_24060,G__23530_24061));
var G__23535_24062 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__23536_24063 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23537_24064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23538_24065 = ((function (G__23535_24062,G__23536_24063,G__23537_24064){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__23535_24062,G__23536_24063,G__23537_24064))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23535_24062,G__23536_24063,G__23537_24064,G__23538_24065) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23535_24062,G__23536_24063,G__23537_24064,G__23538_24065));
var G__23539_24066 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__23540_24067 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23541_24068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23542_24069 = ((function (G__23539_24066,G__23540_24067,G__23541_24068){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__23539_24066,G__23540_24067,G__23541_24068))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23539_24066,G__23540_24067,G__23541_24068,G__23542_24069) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23539_24066,G__23540_24067,G__23541_24068,G__23542_24069));
var G__23547_24070 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__23548_24071 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23549_24072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23550_24073 = ((function (G__23547_24070,G__23548_24071,G__23549_24072){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__23547_24070,G__23548_24071,G__23549_24072))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23547_24070,G__23548_24071,G__23549_24072,G__23550_24073) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23547_24070,G__23548_24071,G__23549_24072,G__23550_24073));
var G__23551_24074 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__23552_24075 = ((function (G__23551_24074){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23551_24074))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23551_24074,G__23552_24075) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23551_24074,G__23552_24075));
var G__23559_24076 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__23560_24077 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23561_24078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23562_24079 = ((function (G__23559_24076,G__23560_24077,G__23561_24078){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__23559_24076,G__23560_24077,G__23561_24078){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__23559_24076,G__23560_24077,G__23561_24078){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__23559_24076,G__23560_24077,G__23561_24078))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__23559_24076,G__23560_24077,G__23561_24078))
,traces);
});})(G__23559_24076,G__23560_24077,G__23561_24078))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23559_24076,G__23560_24077,G__23561_24078,G__23562_24079) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23559_24076,G__23560_24077,G__23561_24078,G__23562_24079));
var G__23580_24080 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__23581_24081 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23582_24082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__23583_24083 = ((function (G__23580_24080,G__23581_24081,G__23582_24082){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__23580_24080,G__23581_24081,G__23582_24082))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23580_24080,G__23581_24081,G__23582_24082,G__23583_24083) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23580_24080,G__23581_24081,G__23582_24082,G__23583_24083));
var G__23595_24084 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__23596_24085 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23597_24086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__23598_24087 = ((function (G__23595_24084,G__23596_24085,G__23597_24086){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__23595_24084,G__23596_24085,G__23597_24086))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23595_24084,G__23596_24085,G__23597_24086,G__23598_24087) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23595_24084,G__23596_24085,G__23597_24086,G__23598_24087));
var G__23603_24088 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__23604_24089 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23605_24090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23606_24091 = ((function (G__23603_24088,G__23604_24089,G__23605_24090){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23603_24088,G__23604_24089,G__23605_24090))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23603_24088,G__23604_24089,G__23605_24090,G__23606_24091) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23603_24088,G__23604_24089,G__23605_24090,G__23606_24091));
var G__23612_24092 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__23613_24093 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23614_24094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23615_24095 = ((function (G__23612_24092,G__23613_24093,G__23614_24094){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23612_24092,G__23613_24093,G__23614_24094))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23612_24092,G__23613_24093,G__23614_24094,G__23615_24095) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23612_24092,G__23613_24093,G__23614_24094,G__23615_24095));
var G__23620_24096 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__23621_24097 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23622_24098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23623_24099 = ((function (G__23620_24096,G__23621_24097,G__23622_24098){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23620_24096,G__23621_24097,G__23622_24098))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23620_24096,G__23621_24097,G__23622_24098,G__23623_24099) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23620_24096,G__23621_24097,G__23622_24098,G__23623_24099));
var G__23627_24100 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__23628_24101 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23629_24102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23630_24103 = ((function (G__23627_24100,G__23628_24101,G__23629_24102){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23627_24100,G__23628_24101,G__23629_24102))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23627_24100,G__23628_24101,G__23629_24102,G__23630_24103) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23627_24100,G__23628_24101,G__23629_24102,G__23630_24103));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__23631_24104 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__23632_24105 = ((function (G__23631_24104){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__23631_24104))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23631_24104,G__23632_24105) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23631_24104,G__23632_24105));
var G__23642_24106 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__23643_24107 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23644_24108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__23645_24109 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23646_24110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__23647_24111 = ((function (G__23642_24106,G__23643_24107,G__23644_24108,G__23645_24109,G__23646_24110){
return (function (p__23657,_){
var vec__23658 = p__23657;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23658,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23658,(1),null);
var G__23661 = (window_width / char_width);
return Math.ceil(G__23661);
});})(G__23642_24106,G__23643_24107,G__23644_24108,G__23645_24109,G__23646_24110))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23642_24106,G__23643_24107,G__23644_24108,G__23645_24109,G__23646_24110,G__23647_24111) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23642_24106,G__23643_24107,G__23644_24108,G__23645_24109,G__23646_24110,G__23647_24111));
var G__23662_24112 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__23663_24113 = ((function (G__23662_24112){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23662_24112))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23662_24112,G__23663_24113) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23662_24112,G__23663_24113));
var G__23665_24114 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__23666_24115 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23667_24116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__23668_24117 = ((function (G__23665_24114,G__23666_24115,G__23667_24116){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__23665_24114,G__23666_24115,G__23667_24116))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23665_24114,G__23666_24115,G__23667_24116,G__23668_24117) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23665_24114,G__23666_24115,G__23667_24116,G__23668_24117));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
