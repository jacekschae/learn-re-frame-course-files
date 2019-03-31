goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__22991_23691 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__22992_23692 = ((function (G__22991_23691){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__22991_23691))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__22991_23691,G__22992_23692) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__22991_23691,G__22992_23692));
var G__23001_23697 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__23002_23698 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23003_23699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23004_23700 = ((function (G__23001_23697,G__23002_23698,G__23003_23699){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__23001_23697,G__23002_23698,G__23003_23699))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23001_23697,G__23002_23698,G__23003_23699,G__23004_23700) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23001_23697,G__23002_23698,G__23003_23699,G__23004_23700));
var G__23005_23705 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__23006_23706 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23007_23707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__23008_23708 = ((function (G__23005_23705,G__23006_23706,G__23007_23707){
return (function (panel_width_PERCENT_,p__23013){
var vec__23014 = p__23013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23014,(1),null);
return (((function (){var G__23017 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23017);
})() * n) / 100.0);
});})(G__23005_23705,G__23006_23706,G__23007_23707))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23005_23705,G__23006_23706,G__23007_23707,G__23008_23708) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23005_23705,G__23006_23706,G__23007_23707,G__23008_23708));
var G__23020_23715 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23021_23716 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23022_23717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23023_23718 = ((function (G__23020_23715,G__23021_23716,G__23022_23717){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23020_23715,G__23021_23716,G__23022_23717))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23020_23715,G__23021_23716,G__23022_23717,G__23023_23718) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23020_23715,G__23021_23716,G__23022_23717,G__23023_23718));
var G__23024_23722 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23025_23723 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23026_23724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23027_23725 = ((function (G__23024_23722,G__23025_23723,G__23026_23724){
return (function (width,p__23029){
var vec__23034 = p__23029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,(1),null);
return ((function (){var G__23038 = (width / n);
return Math.ceil(G__23038);
})() * n);
});})(G__23024_23722,G__23025_23723,G__23026_23724))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23024_23722,G__23025_23723,G__23026_23724,G__23027_23725) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23024_23722,G__23025_23723,G__23026_23724,G__23027_23725));
var G__23040_23734 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23041_23735 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23042_23736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23043_23737 = ((function (G__23040_23734,G__23041_23735,G__23042_23736){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23040_23734,G__23041_23735,G__23042_23736))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23040_23734,G__23041_23735,G__23042_23736,G__23043_23737) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23040_23734,G__23041_23735,G__23042_23736,G__23043_23737));
var G__23048_23742 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23049_23743 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23050_23744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23051_23745 = ((function (G__23048_23742,G__23049_23743,G__23050_23744){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23048_23742,G__23049_23743,G__23050_23744))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23048_23742,G__23049_23743,G__23050_23744,G__23051_23745) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23048_23742,G__23049_23743,G__23050_23744,G__23051_23745));
var G__23052_23746 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23053_23747 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23054_23748 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23055_23749 = ((function (G__23052_23746,G__23053_23747,G__23054_23748){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23052_23746,G__23053_23747,G__23054_23748))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23052_23746,G__23053_23747,G__23054_23748,G__23055_23749) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23052_23746,G__23053_23747,G__23054_23748,G__23055_23749));
var G__23056_23753 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23057_23754 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23058_23755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23059_23756 = ((function (G__23056_23753,G__23057_23754,G__23058_23755){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23056_23753,G__23057_23754,G__23058_23755))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23056_23753,G__23057_23754,G__23058_23755,G__23059_23756) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23056_23753,G__23057_23754,G__23058_23755,G__23059_23756));
var G__23060_23757 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23061_23758 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23062_23759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23063_23760 = ((function (G__23060_23757,G__23061_23758,G__23062_23759){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23060_23757,G__23061_23758,G__23062_23759))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23060_23757,G__23061_23758,G__23062_23759,G__23063_23760) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23060_23757,G__23061_23758,G__23062_23759,G__23063_23760));
var G__23064_23763 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23065_23764 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23066_23765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23067_23766 = ((function (G__23064_23763,G__23065_23764,G__23066_23765){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23064_23763,G__23065_23764,G__23066_23765))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23064_23763,G__23065_23764,G__23066_23765,G__23067_23766) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23064_23763,G__23065_23764,G__23066_23765,G__23067_23766));
var G__23069_23774 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23070_23775 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23071_23776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23072_23777 = ((function (G__23069_23774,G__23070_23775,G__23071_23776){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23069_23774,G__23070_23775,G__23071_23776))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23069_23774,G__23070_23775,G__23071_23776,G__23072_23777) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23069_23774,G__23070_23775,G__23071_23776,G__23072_23777));
var G__23073_23788 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23074_23789 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23075_23790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23076_23791 = ((function (G__23073_23788,G__23074_23789,G__23075_23790){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23073_23788,G__23074_23789,G__23075_23790))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23073_23788,G__23074_23789,G__23075_23790,G__23076_23791) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23073_23788,G__23074_23789,G__23075_23790,G__23076_23791));
var G__23077_23798 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23078_23799 = ((function (G__23077_23798){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23077_23798))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23077_23798,G__23078_23799) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23077_23798,G__23078_23799));
var G__23081_23801 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23082_23802 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23083_23803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23084_23804 = ((function (G__23081_23801,G__23082_23802,G__23083_23803){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23081_23801,G__23082_23802,G__23083_23803))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23081_23801,G__23082_23802,G__23083_23803,G__23084_23804) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23081_23801,G__23082_23802,G__23083_23803,G__23084_23804));
var G__23086_23805 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23087_23806 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23088_23807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23089_23808 = ((function (G__23086_23805,G__23087_23806,G__23088_23807){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23086_23805,G__23087_23806,G__23088_23807))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23086_23805,G__23087_23806,G__23088_23807,G__23089_23808) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23086_23805,G__23087_23806,G__23088_23807,G__23089_23808));
var G__23091_23814 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23092_23815 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23093_23816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23094_23817 = ((function (G__23091_23814,G__23092_23815,G__23093_23816){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23091_23814,G__23092_23815,G__23093_23816){
return (function (p1__23090_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23090_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23090_SHARP_));
});})(G__23091_23814,G__23092_23815,G__23093_23816))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23091_23814,G__23092_23815,G__23093_23816))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23091_23814,G__23092_23815,G__23093_23816,G__23094_23817) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23091_23814,G__23092_23815,G__23093_23816,G__23094_23817));
var G__23097_23823 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23098_23824 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23099_23825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23100_23826 = ((function (G__23097_23823,G__23098_23824,G__23099_23825){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23097_23823,G__23098_23824,G__23099_23825))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23097_23823,G__23098_23824,G__23099_23825,G__23100_23826) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23097_23823,G__23098_23824,G__23099_23825,G__23100_23826));
var G__23101_23835 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23102_23836 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23103_23837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23104_23838 = ((function (G__23101_23835,G__23102_23836,G__23103_23837){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23101_23835,G__23102_23836,G__23103_23837))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23101_23835,G__23102_23836,G__23103_23837,G__23104_23838) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23101_23835,G__23102_23836,G__23103_23837,G__23104_23838));
var G__23105_23840 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23106_23841 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23107_23842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23108_23843 = ((function (G__23105_23840,G__23106_23841,G__23107_23842){
return (function (expansions,p__23109){
var vec__23110 = p__23109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23105_23840,G__23106_23841,G__23107_23842))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23105_23840,G__23106_23841,G__23107_23842,G__23108_23843) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23105_23840,G__23106_23841,G__23107_23842,G__23108_23843));
var G__23113_23844 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23114_23845 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23115_23846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23116_23847 = ((function (G__23113_23844,G__23114_23845,G__23115_23846){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23113_23844,G__23114_23845,G__23115_23846))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23113_23844,G__23114_23845,G__23115_23846,G__23116_23847) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23113_23844,G__23114_23845,G__23115_23846,G__23116_23847));
var G__23117_23848 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23118_23849 = ((function (G__23117_23848){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23117_23848))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23117_23848,G__23118_23849) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23117_23848,G__23118_23849));
var G__23119_23850 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__23120_23851 = ((function (G__23119_23850){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23119_23850))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23119_23850,G__23120_23851) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23119_23850,G__23120_23851));
var G__23121_23852 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__23122_23853 = ((function (G__23121_23852){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__23121_23852))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23121_23852,G__23122_23853) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23121_23852,G__23122_23853));
var G__23123_23854 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__23124_23855 = ((function (G__23123_23854){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__23123_23854))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23123_23854,G__23124_23855) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23123_23854,G__23124_23855));
var G__23125_23856 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__23126_23857 = ((function (G__23125_23856){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__23125_23856))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23125_23856,G__23126_23857) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23125_23856,G__23126_23857));
var G__23128_23858 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__23129_23859 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23130_23860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__23131_23861 = ((function (G__23128_23858,G__23129_23859,G__23130_23860){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__23128_23858,G__23129_23859,G__23130_23860))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23128_23858,G__23129_23859,G__23130_23860,G__23131_23861) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23128_23858,G__23129_23859,G__23130_23860,G__23131_23861));
var G__23134_23862 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__23135_23863 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23136_23864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23137_23865 = ((function (G__23134_23862,G__23135_23863,G__23136_23864){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__23134_23862,G__23135_23863,G__23136_23864))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23134_23862,G__23135_23863,G__23136_23864,G__23137_23865) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23134_23862,G__23135_23863,G__23136_23864,G__23137_23865));
var G__23139_23866 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__23140_23867 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23141_23868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23142_23869 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23143_23870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__23144_23871 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23145_23872 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__23146_23873 = ((function (G__23139_23866,G__23140_23867,G__23141_23868,G__23142_23869,G__23143_23870,G__23144_23871,G__23145_23872){
return (function (p__23147,_){
var vec__23148 = p__23147;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__23139_23866,G__23140_23867,G__23141_23868,G__23142_23869,G__23143_23870,G__23144_23871,G__23145_23872))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__23139_23866,G__23140_23867,G__23141_23868,G__23142_23869,G__23143_23870,G__23144_23871,G__23145_23872,G__23146_23873) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23139_23866,G__23140_23867,G__23141_23868,G__23142_23869,G__23143_23870,G__23144_23871,G__23145_23872,G__23146_23873));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__23151,_){
var vec__23152 = p__23151;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__23152,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__23152,traces,filtered_views))
),traces);
});
var G__23158_23874 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__23159_23875 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23160_23876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23161_23877 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23162_23878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23163_23879 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23158_23874,G__23159_23875,G__23160_23876,G__23161_23877,G__23162_23878,G__23163_23879) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23158_23874,G__23159_23875,G__23160_23876,G__23161_23877,G__23162_23878,G__23163_23879));
var G__23164_23880 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__23165_23881 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23166_23882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__23167_23883 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23168_23884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__23169_23885 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23164_23880,G__23165_23881,G__23166_23882,G__23167_23883,G__23168_23884,G__23169_23885) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23164_23880,G__23165_23881,G__23166_23882,G__23167_23883,G__23168_23884,G__23169_23885));
var G__23173_23886 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__23174_23887 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23175_23888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__23176_23889 = ((function (G__23173_23886,G__23174_23887,G__23175_23888){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__23173_23886,G__23174_23887,G__23175_23888))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23173_23886,G__23174_23887,G__23175_23888,G__23176_23889) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23173_23886,G__23174_23887,G__23175_23888,G__23176_23889));
var G__23177_23890 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__23178_23891 = ((function (G__23177_23890){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__23177_23890))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23177_23890,G__23178_23891) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23177_23890,G__23178_23891));
var G__23186_23892 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__23187_23893 = ((function (G__23186_23892){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23186_23892))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23186_23892,G__23187_23893) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23186_23892,G__23187_23893));
var G__23189_23894 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__23190_23895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23191_23896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__23192_23897 = ((function (G__23189_23894,G__23190_23895,G__23191_23896){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__23189_23894,G__23190_23895,G__23191_23896))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23189_23894,G__23190_23895,G__23191_23896,G__23192_23897) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23189_23894,G__23190_23895,G__23191_23896,G__23192_23897));
var G__23193_23898 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__23194_23899 = ((function (G__23193_23898){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23193_23898))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23193_23898,G__23194_23899) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23193_23898,G__23194_23899));
var G__23198_23900 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__23199_23901 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23200_23902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23201_23903 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23202_23904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23203_23905 = ((function (G__23198_23900,G__23199_23901,G__23200_23902,G__23201_23903,G__23202_23904){
return (function (p__23204,_){
var vec__23205 = p__23204;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__23198_23900,G__23199_23901,G__23200_23902,G__23201_23903,G__23202_23904))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23198_23900,G__23199_23901,G__23200_23902,G__23201_23903,G__23202_23904,G__23203_23905) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23198_23900,G__23199_23901,G__23200_23902,G__23201_23903,G__23202_23904,G__23203_23905));
var G__23211_23906 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__23212_23907 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23213_23908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23214_23909 = ((function (G__23211_23906,G__23212_23907,G__23213_23908){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23211_23906,G__23212_23907,G__23213_23908))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23211_23906,G__23212_23907,G__23213_23908,G__23214_23909) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23211_23906,G__23212_23907,G__23213_23908,G__23214_23909));
var G__23218_23910 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__23219_23911 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23220_23912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23221_23913 = ((function (G__23218_23910,G__23219_23911,G__23220_23912){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__23218_23910,G__23219_23911,G__23220_23912))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23218_23910,G__23219_23911,G__23220_23912,G__23221_23913) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23218_23910,G__23219_23911,G__23220_23912,G__23221_23913));
var G__23226_23914 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__23227_23915 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23228_23916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23229_23917 = ((function (G__23226_23914,G__23227_23915,G__23228_23916){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__23226_23914,G__23227_23915,G__23228_23916))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23226_23914,G__23227_23915,G__23228_23916,G__23229_23917) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23226_23914,G__23227_23915,G__23228_23916,G__23229_23917));
var G__23233_23919 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__23234_23920 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23235_23921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23236_23922 = ((function (G__23233_23919,G__23234_23920,G__23235_23921){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__23233_23919,G__23234_23920,G__23235_23921))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23233_23919,G__23234_23920,G__23235_23921,G__23236_23922) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23233_23919,G__23234_23920,G__23235_23921,G__23236_23922));
var G__23237_23924 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__23238_23925 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23239_23926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23240_23927 = ((function (G__23237_23924,G__23238_23925,G__23239_23926){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23237_23924,G__23238_23925,G__23239_23926))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23237_23924,G__23238_23925,G__23239_23926,G__23240_23927) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23237_23924,G__23238_23925,G__23239_23926,G__23240_23927));
var G__23244_23928 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__23245_23929 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23246_23930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23247_23931 = ((function (G__23244_23928,G__23245_23929,G__23246_23930){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__23244_23928,G__23245_23929,G__23246_23930))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23244_23928,G__23245_23929,G__23246_23930,G__23247_23931) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23244_23928,G__23245_23929,G__23246_23930,G__23247_23931));
var G__23249_23933 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__23250_23934 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23251_23935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23252_23936 = ((function (G__23249_23933,G__23250_23934,G__23251_23935){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23249_23933,G__23250_23934,G__23251_23935))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23249_23933,G__23250_23934,G__23251_23935,G__23252_23936) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23249_23933,G__23250_23934,G__23251_23935,G__23252_23936));
var G__23256_23937 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__23257_23938 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23258_23939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23259_23940 = ((function (G__23256_23937,G__23257_23938,G__23258_23939){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__23256_23937,G__23257_23938,G__23258_23939))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23256_23937,G__23257_23938,G__23258_23939,G__23259_23940) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23256_23937,G__23257_23938,G__23258_23939,G__23259_23940));
var G__23265_23941 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__23266_23942 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23267_23943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__23268_23944 = ((function (G__23265_23941,G__23266_23942,G__23267_23943){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__23265_23941,G__23266_23942,G__23267_23943))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23265_23941,G__23266_23942,G__23267_23943,G__23268_23944) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23265_23941,G__23266_23942,G__23267_23943,G__23268_23944));
var G__23269_23945 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__23270_23946 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23271_23947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23272_23948 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23273_23949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23274_23950 = ((function (G__23269_23945,G__23270_23946,G__23271_23947,G__23272_23948,G__23273_23949){
return (function (p__23279){
var vec__23280 = p__23279;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23280,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__23269_23945,G__23270_23946,G__23271_23947,G__23272_23948,G__23273_23949))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23269_23945,G__23270_23946,G__23271_23947,G__23272_23948,G__23273_23949,G__23274_23950) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23269_23945,G__23270_23946,G__23271_23947,G__23272_23948,G__23273_23949,G__23274_23950));
var G__23288_23951 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__23289_23952 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23290_23953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__23291_23954 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23292_23955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__23293_23956 = ((function (G__23288_23951,G__23289_23952,G__23290_23953,G__23291_23954,G__23292_23955){
return (function (p__23294){
var vec__23295 = p__23294;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__23288_23951,G__23289_23952,G__23290_23953,G__23291_23954,G__23292_23955))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23288_23951,G__23289_23952,G__23290_23953,G__23291_23954,G__23292_23955,G__23293_23956) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23288_23951,G__23289_23952,G__23290_23953,G__23291_23954,G__23292_23955,G__23293_23956));
var G__23301_23957 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__23302_23958 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23303_23959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23304_23960 = ((function (G__23301_23957,G__23302_23958,G__23303_23959){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__23301_23957,G__23302_23958,G__23303_23959))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23301_23957,G__23302_23958,G__23303_23959,G__23304_23960) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23301_23957,G__23302_23958,G__23303_23959,G__23304_23960));
var G__23309_23962 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__23310_23963 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23311_23964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23312_23965 = ((function (G__23309_23962,G__23310_23963,G__23311_23964){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__23309_23962,G__23310_23963,G__23311_23964){
return (function (p1__23306_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__23306_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__23306_SHARP_)));
});})(G__23309_23962,G__23310_23963,G__23311_23964))
,traces);
});})(G__23309_23962,G__23310_23963,G__23311_23964))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23309_23962,G__23310_23963,G__23311_23964,G__23312_23965) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23309_23962,G__23310_23963,G__23311_23964,G__23312_23965));
var G__23314_23966 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__23315_23967 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23316_23968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23317_23969 = ((function (G__23314_23966,G__23315_23967,G__23316_23968){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__23314_23966,G__23315_23967,G__23316_23968))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23314_23966,G__23315_23967,G__23316_23968,G__23317_23969) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23314_23966,G__23315_23967,G__23316_23968,G__23317_23969));
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

var G__23349_23975 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__23350_23976 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23351_23977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__23352_23978 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23353_23979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23354_23980 = ((function (G__23349_23975,G__23350_23976,G__23351_23977,G__23352_23978,G__23353_23979){
return (function (p__23359,p__23360){
var vec__23361 = p__23359;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(1),null);
var vec__23364 = p__23360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23364,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23364,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__23367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23367,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23367,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__23349_23975,G__23350_23976,G__23351_23977,G__23352_23978,G__23353_23979))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23349_23975,G__23350_23976,G__23351_23977,G__23352_23978,G__23353_23979,G__23354_23980) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23349_23975,G__23350_23976,G__23351_23977,G__23352_23978,G__23353_23979,G__23354_23980));
var G__23372_23981 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__23373_23982 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23374_23983 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23375_23984 = ((function (G__23372_23981,G__23373_23982,G__23374_23983){
return (function (match){
var map__23376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__23376__$1 = (((((!((map__23376 == null))))?(((((map__23376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23376):map__23376);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23376__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
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
var G__23395_23995 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__23396_23996 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23397_23997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23398_23998 = ((function (G__23395_23995,G__23396_23996,G__23397_23997){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__23395_23995,G__23396_23996,G__23397_23997))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23395_23995,G__23396_23996,G__23397_23997,G__23398_23998) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23395_23995,G__23396_23996,G__23397_23997,G__23398_23998));
var G__23403_23999 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__23404_24000 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23405_24001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23406_24002 = ((function (G__23403_23999,G__23404_24000,G__23405_24001){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__23403_23999,G__23404_24000,G__23405_24001))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23403_23999,G__23404_24000,G__23405_24001,G__23406_24002) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23403_23999,G__23404_24000,G__23405_24001,G__23406_24002));
var G__23408_24003 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__23409_24004 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23410_24005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__23411_24006 = ((function (G__23408_24003,G__23409_24004,G__23410_24005){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__23408_24003,G__23409_24004,G__23410_24005))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23408_24003,G__23409_24004,G__23410_24005,G__23411_24006) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23408_24003,G__23409_24004,G__23410_24005,G__23411_24006));
var G__23417_24007 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__23418_24008 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23419_24009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__23420_24010 = ((function (G__23417_24007,G__23418_24008,G__23419_24009){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__23417_24007,G__23418_24008,G__23419_24009))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23417_24007,G__23418_24008,G__23419_24009,G__23420_24010) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23417_24007,G__23418_24008,G__23419_24009,G__23420_24010));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__23423_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__23423_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23453){
return cljs.core.coll_QMARK_(G__23453);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23470){
return cljs.core.map_QMARK_(G__23470);
}),(function (G__23470){
return cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__23470){
return cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__23470){
return cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__23470){
return cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__23470){
return cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__23470){
return cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__23470){
return ((cljs.core.map_QMARK_(G__23470)) && (cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__23470,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__23510){
return cljs.core.coll_QMARK_(G__23510);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__23511 = sub_type;
var G__23511__$1 = (((G__23511 instanceof cljs.core.Keyword))?G__23511.fqn:null);
switch (G__23511__$1) {
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
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__23524,p__23525){
var vec__23526 = p__23524;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23526,(1),null);
var vec__23529 = p__23525;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23529,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__23526,sub_info,sub_state,vec__23529,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__23526,sub_info,sub_state,vec__23529,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__23526,sub_info,sub_state,vec__23529,subscription){
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
});})(remove_fn,vec__23526,sub_info,sub_state,vec__23529,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__23536_24016 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__23537_24017 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23538_24018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23539_24019 = ((function (G__23536_24016,G__23537_24017,G__23538_24018){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23536_24016,G__23537_24017,G__23538_24018))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23536_24016,G__23537_24017,G__23538_24018,G__23539_24019) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23536_24016,G__23537_24017,G__23538_24018,G__23539_24019));
var G__23541_24020 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__23542_24021 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23543_24022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__23544_24023 = ((function (G__23541_24020,G__23542_24021,G__23543_24022){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__23541_24020,G__23542_24021,G__23543_24022))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23541_24020,G__23542_24021,G__23543_24022,G__23544_24023) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23541_24020,G__23542_24021,G__23543_24022,G__23544_24023));
var G__23546_24024 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__23547_24025 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23548_24026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23549_24027 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23550_24028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__23551_24029 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23546_24024,G__23547_24025,G__23548_24026,G__23549_24027,G__23550_24028,G__23551_24029) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23546_24024,G__23547_24025,G__23548_24026,G__23549_24027,G__23550_24028,G__23551_24029));
var G__23552_24030 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__23553_24031 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23554_24032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__23555_24033 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23556_24034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__23557_24035 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23552_24030,G__23553_24031,G__23554_24032,G__23555_24033,G__23556_24034,G__23557_24035) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23552_24030,G__23553_24031,G__23554_24032,G__23555_24033,G__23556_24034,G__23557_24035));
var G__23558_24036 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__23559_24037 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23560_24038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23561_24039 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23562_24040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__23563_24041 = ((function (G__23558_24036,G__23559_24037,G__23560_24038,G__23561_24039,G__23562_24040){
return (function (p__23564){
var vec__23565 = p__23564;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23565,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23565,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__23558_24036,G__23559_24037,G__23560_24038,G__23561_24039,G__23562_24040))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23558_24036,G__23559_24037,G__23560_24038,G__23561_24039,G__23562_24040,G__23563_24041) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23558_24036,G__23559_24037,G__23560_24038,G__23561_24039,G__23562_24040,G__23563_24041));
var G__23568_24042 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__23569_24043 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23570_24044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__23571_24045 = ((function (G__23568_24042,G__23569_24043,G__23570_24044){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__23568_24042,G__23569_24043,G__23570_24044))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23568_24042,G__23569_24043,G__23570_24044,G__23571_24045) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23568_24042,G__23569_24043,G__23570_24044,G__23571_24045));
var G__23575_24046 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__23576_24047 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23577_24048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23578_24049 = ((function (G__23575_24046,G__23576_24047,G__23577_24048){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__23575_24046,G__23576_24047,G__23577_24048))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23575_24046,G__23576_24047,G__23577_24048,G__23578_24049) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23575_24046,G__23576_24047,G__23577_24048,G__23578_24049));
var G__23579_24050 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__23580_24051 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23581_24052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23582_24053 = ((function (G__23579_24050,G__23580_24051,G__23581_24052){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__23579_24050,G__23580_24051,G__23581_24052))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23579_24050,G__23580_24051,G__23581_24052,G__23582_24053) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23579_24050,G__23580_24051,G__23581_24052,G__23582_24053));
var G__23583_24054 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__23584_24055 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23585_24056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23586_24057 = ((function (G__23583_24054,G__23584_24055,G__23585_24056){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__23583_24054,G__23584_24055,G__23585_24056))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23583_24054,G__23584_24055,G__23585_24056,G__23586_24057) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23583_24054,G__23584_24055,G__23585_24056,G__23586_24057));
var G__23591_24058 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__23592_24059 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23593_24060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__23594_24061 = ((function (G__23591_24058,G__23592_24059,G__23593_24060){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__23591_24058,G__23592_24059,G__23593_24060))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23591_24058,G__23592_24059,G__23593_24060,G__23594_24061) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23591_24058,G__23592_24059,G__23593_24060,G__23594_24061));
var G__23595_24062 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__23596_24063 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23597_24064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__23598_24065 = ((function (G__23595_24062,G__23596_24063,G__23597_24064){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__23595_24062,G__23596_24063,G__23597_24064))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23595_24062,G__23596_24063,G__23597_24064,G__23598_24065) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23595_24062,G__23596_24063,G__23597_24064,G__23598_24065));
var G__23599_24066 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__23600_24067 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23601_24068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23602_24069 = ((function (G__23599_24066,G__23600_24067,G__23601_24068){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__23599_24066,G__23600_24067,G__23601_24068))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23599_24066,G__23600_24067,G__23601_24068,G__23602_24069) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23599_24066,G__23600_24067,G__23601_24068,G__23602_24069));
var G__23603_24070 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__23604_24071 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23605_24072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__23606_24073 = ((function (G__23603_24070,G__23604_24071,G__23605_24072){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__23603_24070,G__23604_24071,G__23605_24072))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23603_24070,G__23604_24071,G__23605_24072,G__23606_24073) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23603_24070,G__23604_24071,G__23605_24072,G__23606_24073));
var G__23607_24074 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__23608_24075 = ((function (G__23607_24074){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23607_24074))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23607_24074,G__23608_24075) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23607_24074,G__23608_24075));
var G__23609_24076 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__23610_24077 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23611_24078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__23612_24079 = ((function (G__23609_24076,G__23610_24077,G__23611_24078){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__23609_24076,G__23610_24077,G__23611_24078){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__23609_24076,G__23610_24077,G__23611_24078){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__23609_24076,G__23610_24077,G__23611_24078))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__23609_24076,G__23610_24077,G__23611_24078))
,traces);
});})(G__23609_24076,G__23610_24077,G__23611_24078))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23609_24076,G__23610_24077,G__23611_24078,G__23612_24079) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23609_24076,G__23610_24077,G__23611_24078,G__23612_24079));
var G__23618_24080 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__23619_24081 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23620_24082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__23621_24083 = ((function (G__23618_24080,G__23619_24081,G__23620_24082){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__23618_24080,G__23619_24081,G__23620_24082))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23618_24080,G__23619_24081,G__23620_24082,G__23621_24083) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23618_24080,G__23619_24081,G__23620_24082,G__23621_24083));
var G__23623_24084 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__23624_24085 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23625_24086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__23626_24087 = ((function (G__23623_24084,G__23624_24085,G__23625_24086){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__23623_24084,G__23624_24085,G__23625_24086))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23623_24084,G__23624_24085,G__23625_24086,G__23626_24087) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23623_24084,G__23624_24085,G__23625_24086,G__23626_24087));
var G__23628_24088 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__23629_24089 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23630_24090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23631_24091 = ((function (G__23628_24088,G__23629_24089,G__23630_24090){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23628_24088,G__23629_24089,G__23630_24090))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23628_24088,G__23629_24089,G__23630_24090,G__23631_24091) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23628_24088,G__23629_24089,G__23630_24090,G__23631_24091));
var G__23633_24092 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__23634_24093 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23635_24094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23636_24095 = ((function (G__23633_24092,G__23634_24093,G__23635_24094){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23633_24092,G__23634_24093,G__23635_24094))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23633_24092,G__23634_24093,G__23635_24094,G__23636_24095) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23633_24092,G__23634_24093,G__23635_24094,G__23636_24095));
var G__23644_24096 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__23645_24097 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23646_24098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23647_24099 = ((function (G__23644_24096,G__23645_24097,G__23646_24098){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23644_24096,G__23645_24097,G__23646_24098))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23644_24096,G__23645_24097,G__23646_24098,G__23647_24099) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23644_24096,G__23645_24097,G__23646_24098,G__23647_24099));
var G__23651_24100 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__23652_24101 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23653_24102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__23654_24103 = ((function (G__23651_24100,G__23652_24101,G__23653_24102){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__23651_24100,G__23652_24101,G__23653_24102))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23651_24100,G__23652_24101,G__23653_24102,G__23654_24103) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23651_24100,G__23652_24101,G__23653_24102,G__23654_24103));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__23664_24104 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__23665_24105 = ((function (G__23664_24104){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__23664_24104))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23664_24104,G__23665_24105) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23664_24104,G__23665_24105));
var G__23670_24106 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__23671_24107 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23672_24108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__23673_24109 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23674_24110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__23675_24111 = ((function (G__23670_24106,G__23671_24107,G__23672_24108,G__23673_24109,G__23674_24110){
return (function (p__23676,_){
var vec__23677 = p__23676;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23677,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23677,(1),null);
var G__23680 = (window_width / char_width);
return Math.ceil(G__23680);
});})(G__23670_24106,G__23671_24107,G__23672_24108,G__23673_24109,G__23674_24110))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__23670_24106,G__23671_24107,G__23672_24108,G__23673_24109,G__23674_24110,G__23675_24111) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23670_24106,G__23671_24107,G__23672_24108,G__23673_24109,G__23674_24110,G__23675_24111));
var G__23681_24112 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__23682_24113 = ((function (G__23681_24112){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23681_24112))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23681_24112,G__23682_24113) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23681_24112,G__23682_24113));
var G__23683_24114 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__23684_24115 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23685_24116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__23686_24117 = ((function (G__23683_24114,G__23684_24115,G__23685_24116){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__23683_24114,G__23684_24115,G__23685_24116))
;
(mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23683_24114,G__23684_24115,G__23685_24116,G__23686_24117) : mranderson048.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23683_24114,G__23684_24115,G__23685_24116,G__23686_24117));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
