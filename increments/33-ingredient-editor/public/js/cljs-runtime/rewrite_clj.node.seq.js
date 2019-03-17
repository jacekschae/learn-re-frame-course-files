goog.provide('rewrite_clj.node.seq');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.node.seq.wrap_vec = (function rewrite_clj$node$seq$wrap_vec(s){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"]"].join('');
});
rewrite_clj.node.seq.wrap_list = (function rewrite_clj$node$seq$wrap_list(s){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join('');
});
rewrite_clj.node.seq.wrap_set = (function rewrite_clj$node$seq$wrap_set(s){
return ["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});
rewrite_clj.node.seq.wrap_map = (function rewrite_clj$node$seq$wrap_map(s){
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});

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
rewrite_clj.node.seq.SeqNode = (function (tag,wrap_fn,wrap_length,seq_fn,children,__meta,__extmap,__hash){
this.tag = tag;
this.wrap_fn = wrap_fn;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.seq.SeqNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30166,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30177 = k30166;
var G__30177__$1 = (((G__30177 instanceof cljs.core.Keyword))?G__30177.fqn:null);
switch (G__30177__$1) {
case "tag":
return self__.tag;

break;
case "wrap-fn":
return self__.wrap_fn;

break;
case "wrap-length":
return self__.wrap_length;

break;
case "seq-fn":
return self__.seq_fn;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30166,else__4388__auto__);

}
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30185){
var vec__30186 = p__30185;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30186,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30186,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#rewrite-clj.node.seq.SeqNode{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),self__.wrap_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30165){
var self__ = this;
var G__30165__$1 = this;
return (new cljs.core.RecordIter((0),G__30165__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__30195 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (580297420 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__30195(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30167,other30168){
var self__ = this;
var this30167__$1 = this;
return (((!((other30168 == null)))) && ((this30167__$1.constructor === other30168.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30167__$1.tag,other30168.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30167__$1.wrap_fn,other30168.wrap_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30167__$1.wrap_length,other30168.wrap_length)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30167__$1.seq_fn,other30168.seq_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30167__$1.children,other30168.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30167__$1.__extmap,other30168.__extmap)));
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tag;
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__30205 = rewrite_clj.node.protocols.sexprs(self__.children);
return (self__.seq_fn.cljs$core$IFn$_invoke$arity$1 ? self__.seq_fn.cljs$core$IFn$_invoke$arity$1(G__30205) : self__.seq_fn.call(null,G__30205));
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.wrap_length + rewrite_clj.node.protocols.sum_lengths(self__.children));
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__30207 = rewrite_clj.node.protocols.concat_strings(self__.children);
return (self__.wrap_fn.cljs$core$IFn$_invoke$arity$1 ? self__.wrap_fn.cljs$core$IFn$_invoke$arity$1(G__30207) : self__.wrap_fn.call(null,G__30207));
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),null,new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30165){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30217 = cljs.core.keyword_identical_QMARK_;
var expr__30218 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__30220 = new cljs.core.Keyword(null,"tag","tag",-1290361223);
var G__30240 = expr__30218;
return (pred__30217.cljs$core$IFn$_invoke$arity$2 ? pred__30217.cljs$core$IFn$_invoke$arity$2(G__30220,G__30240) : pred__30217.call(null,G__30220,G__30240));
})())){
return (new rewrite_clj.node.seq.SeqNode(G__30165,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30243 = new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130);
var G__30244 = expr__30218;
return (pred__30217.cljs$core$IFn$_invoke$arity$2 ? pred__30217.cljs$core$IFn$_invoke$arity$2(G__30243,G__30244) : pred__30217.call(null,G__30243,G__30244));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,G__30165,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30248 = new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519);
var G__30249 = expr__30218;
return (pred__30217.cljs$core$IFn$_invoke$arity$2 ? pred__30217.cljs$core$IFn$_invoke$arity$2(G__30248,G__30249) : pred__30217.call(null,G__30248,G__30249));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,G__30165,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30250 = new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231);
var G__30251 = expr__30218;
return (pred__30217.cljs$core$IFn$_invoke$arity$2 ? pred__30217.cljs$core$IFn$_invoke$arity$2(G__30250,G__30251) : pred__30217.call(null,G__30250,G__30251));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,G__30165,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30252 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__30253 = expr__30218;
return (pred__30217.cljs$core$IFn$_invoke$arity$2 ? pred__30217.cljs$core$IFn$_invoke$arity$2(G__30252,G__30253) : pred__30217.call(null,G__30252,G__30253));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,G__30165,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__30165),null));
}
}
}
}
}
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),self__.wrap_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30165){
var self__ = this;
var this__4384__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,G__30165,self__.__extmap,self__.__hash));
});

rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

rewrite_clj.node.seq.SeqNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"wrap-fn","wrap-fn",1370298397,null),new cljs.core.Symbol(null,"wrap-length","wrap-length",1372423008,null),new cljs.core.Symbol(null,"seq-fn","seq-fn",649518296,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.seq.SeqNode.cljs$lang$type = true;

rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.seq/SeqNode",null,(1),null));
});

rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"rewrite-clj.node.seq/SeqNode");
});

/**
 * Positional factory function for rewrite-clj.node.seq/SeqNode.
 */
rewrite_clj.node.seq.__GT_SeqNode = (function rewrite_clj$node$seq$__GT_SeqNode(tag,wrap_fn,wrap_length,seq_fn,children){
return (new rewrite_clj.node.seq.SeqNode(tag,wrap_fn,wrap_length,seq_fn,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.seq/SeqNode, taking a map of keywords to field values.
 */
rewrite_clj.node.seq.map__GT_SeqNode = (function rewrite_clj$node$seq$map__GT_SeqNode(G__30169){
var extmap__4424__auto__ = (function (){var G__30264 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30169,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__30169)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30264);
} else {
return G__30264;
}
})();
return (new rewrite_clj.node.seq.SeqNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__30169),new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130).cljs$core$IFn$_invoke$arity$1(G__30169),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519).cljs$core$IFn$_invoke$arity$1(G__30169),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231).cljs$core$IFn$_invoke$arity$1(G__30169),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__30169),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Create a node representing an EDN list.
 */
rewrite_clj.node.seq.list_node = (function rewrite_clj$node$seq$list_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"list","list",765357683),rewrite_clj.node.seq.wrap_list,(2),(function (p1__30265_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__30265_SHARP_);
}),children);
});
/**
 * Create a node representing an EDN vector.
 */
rewrite_clj.node.seq.vector_node = (function rewrite_clj$node$seq$vector_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"vector","vector",1902966158),rewrite_clj.node.seq.wrap_vec,(2),cljs.core.vec,children);
});
/**
 * Create a node representing an EDN set.
 */
rewrite_clj.node.seq.set_node = (function rewrite_clj$node$seq$set_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"set","set",304602554),rewrite_clj.node.seq.wrap_set,(3),cljs.core.set,children);
});
/**
 * Create a node representing an EDN map.
 */
rewrite_clj.node.seq.map_node = (function rewrite_clj$node$seq$map_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_clj.node.seq.wrap_map,(2),(function (p1__30270_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__30270_SHARP_);
}),children);
});

//# sourceMappingURL=rewrite_clj.node.seq.js.map
