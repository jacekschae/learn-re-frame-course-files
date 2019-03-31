goog.provide('rewrite_clj.node.quote');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.quote.QuoteNode = (function (tag,prefix,sym,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.sym = sym;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.quote.QuoteNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k29571,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__29585 = k29571;
var G__29585__$1 = (((G__29585 instanceof cljs.core.Keyword))?G__29585.fqn:null);
switch (G__29585__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "sym":
return self__.sym;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29571,else__4388__auto__);

}
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__29586){
var vec__29587 = p__29586;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29587,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29587,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#rewrite-clj.node.quote.QuoteNode{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29570){
var self__ = this;
var G__29570__$1 = this;
return (new cljs.core.RecordIter((0),G__29570__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__29591 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1712251858 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__29591(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29572,other29573){
var self__ = this;
var this29572__$1 = this;
return (((!((other29573 == null)))) && ((this29572__$1.constructor === other29573.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29572__$1.tag,other29573.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29572__$1.prefix,other29573.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29572__$1.sym,other29573.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29572__$1.children,other29573.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29572__$1.__extmap,other29573.__extmap)));
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,cljs.core.first(rewrite_clj.node.protocols.sexprs(self__.children)),null,(1),null)),(2),null));
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count(self__.prefix) + rewrite_clj.node.protocols.sum_lengths(self__.children));
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))].join('');
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_single_sexpr(children_SINGLEQUOTE_);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__29570){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__29599 = cljs.core.keyword_identical_QMARK_;
var expr__29600 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__29602 = new cljs.core.Keyword(null,"tag","tag",-1290361223);
var G__29603 = expr__29600;
return (pred__29599.cljs$core$IFn$_invoke$arity$2 ? pred__29599.cljs$core$IFn$_invoke$arity$2(G__29602,G__29603) : pred__29599.call(null,G__29602,G__29603));
})())){
return (new rewrite_clj.node.quote.QuoteNode(G__29570,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29604 = new cljs.core.Keyword(null,"prefix","prefix",-265908465);
var G__29605 = expr__29600;
return (pred__29599.cljs$core$IFn$_invoke$arity$2 ? pred__29599.cljs$core$IFn$_invoke$arity$2(G__29604,G__29605) : pred__29599.call(null,G__29604,G__29605));
})())){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,G__29570,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29606 = new cljs.core.Keyword(null,"sym","sym",-1444860305);
var G__29607 = expr__29600;
return (pred__29599.cljs$core$IFn$_invoke$arity$2 ? pred__29599.cljs$core$IFn$_invoke$arity$2(G__29606,G__29607) : pred__29599.call(null,G__29606,G__29607));
})())){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,G__29570,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29608 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__29609 = expr__29600;
return (pred__29599.cljs$core$IFn$_invoke$arity$2 ? pred__29599.cljs$core$IFn$_invoke$arity$2(G__29608,G__29609) : pred__29599.call(null,G__29608,G__29609));
})())){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,G__29570,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__29570),null));
}
}
}
}
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__29570){
var self__ = this;
var this__4384__auto____$1 = this;
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,G__29570,self__.__extmap,self__.__hash));
});

rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

rewrite_clj.node.quote.QuoteNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.quote.QuoteNode.cljs$lang$type = true;

rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.quote/QuoteNode",null,(1),null));
});

rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"rewrite-clj.node.quote/QuoteNode");
});

/**
 * Positional factory function for rewrite-clj.node.quote/QuoteNode.
 */
rewrite_clj.node.quote.__GT_QuoteNode = (function rewrite_clj$node$quote$__GT_QuoteNode(tag,prefix,sym,children){
return (new rewrite_clj.node.quote.QuoteNode(tag,prefix,sym,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.quote/QuoteNode, taking a map of keywords to field values.
 */
rewrite_clj.node.quote.map__GT_QuoteNode = (function rewrite_clj$node$quote$map__GT_QuoteNode(G__29575){
var extmap__4424__auto__ = (function (){var G__29612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29575,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__29575)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29612);
} else {
return G__29612;
}
})();
return (new rewrite_clj.node.quote.QuoteNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__29575),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__29575),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__29575),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__29575),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

rewrite_clj.node.quote.__GT_node = (function rewrite_clj$node$quote$__GT_node(t,prefix,sym,children){
rewrite_clj.node.protocols.assert_single_sexpr(children);

return rewrite_clj.node.quote.__GT_QuoteNode(t,prefix,sym,children);
});
/**
 * Create node representing a quoted form.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.quote_node = (function rewrite_clj$node$quote$quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__29635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__29635;
continue;
}
break;
}
});
/**
 * Create node representing a syntax-quoted form.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.syntax_quote_node = (function rewrite_clj$node$quote$syntax_quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__29636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__29636;
continue;
}
break;
}
});
/**
 * Create node representing an unquoted form. (`~...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.unquote_node = (function rewrite_clj$node$quote$unquote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),children);
} else {
var G__29637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__29637;
continue;
}
break;
}
});
/**
 * Create node representing an unquote-spliced form. (`~@...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.unquote_splicing_node = (function rewrite_clj$node$quote$unquote_splicing_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),children);
} else {
var G__29638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__29638;
continue;
}
break;
}
});

//# sourceMappingURL=rewrite_clj.node.quote.js.map
