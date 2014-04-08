if(!lt.util.load.provided_QMARK_('lt.plugins.lt-snippets')) {
goog.provide('lt.plugins.lt_snippets');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-snippets","lt-snippets",3973666061)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-snippets","show-snippet-hints","lt.plugins.lt-snippets/show-snippet-hints",2213282386)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-snippets");
lt.plugins.lt_snippets.snippets = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611));
lt.plugins.lt_snippets.get_tabstops = (function get_tabstops(snippet){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__9522_SHARP_){return !(cljs.core._EQ_.call(null,p1__9522_SHARP_,"$0"));
}),cljs.core.re_seq.call(null,/\$\d+/,snippet)));
});
lt.plugins.lt_snippets.tabstop_to_input = (function tabstop_to_input(tabstop){return [cljs.core.str("<input type='text' class='snipvar-"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","")),cljs.core.str("'"),cljs.core.str("/>")].join('');
});
lt.plugins.lt_snippets.tabstop_to_mirror = (function tabstop_to_mirror(tabstop){return [cljs.core.str("<input type='text' disabled='disabled' class='snipvar-"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","")),cljs.core.str("'"),cljs.core.str("/>")].join('');
});
lt.plugins.lt_snippets.snippet_to_form = (function snippet_to_form(snippet,tabstops){var snippet__$1 = clojure.string.replace.call(null,snippet,"$0","");var tabstops__$1 = tabstops;while(true){
if(cljs.core.empty_QMARK_.call(null,tabstops__$1))
{return snippet__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var tabstop = cljs.core.first.call(null,tabstops__$1);{
var G__9565 = clojure.string.replace.call(null,clojure.string.replace_first.call(null,snippet__$1,tabstop,lt.plugins.lt_snippets.tabstop_to_input.call(null,tabstop)),tabstop,lt.plugins.lt_snippets.tabstop_to_mirror.call(null,tabstop));
var G__9566 = cljs.core.rest.call(null,tabstops__$1);
snippet__$1 = G__9565;
tabstops__$1 = G__9566;
continue;
}
} else
{return null;
}
}
break;
}
});
lt.plugins.lt_snippets.text_width = (function text_width(text){var el = cljs.core.first.call(null,lt.util.dom.make.call(null,[cljs.core.str("<span style='position:absolute;visibility:hidden'>"),cljs.core.str(text),cljs.core.str("</span>")].join('')));lt.util.dom.append.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907)),el);
var width = lt.util.dom.width.call(null,el);lt.util.dom.remove.call(null,el);
return (width + 5);
});
lt.plugins.lt_snippets.snippet_form = (function snippet_form(this$,info){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__9529_9567 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
})], null)));var chunk__9530_9568 = null;var count__9531_9569 = 0;var i__9532_9570 = 0;while(true){
if((i__9532_9570 < count__9531_9569))
{var vec__9533_9571 = cljs.core._nth.call(null,chunk__9530_9568,i__9532_9570);var ev__8190__auto___9572 = cljs.core.nth.call(null,vec__9533_9571,0,null);var func__8191__auto___9573 = cljs.core.nth.call(null,vec__9533_9571,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___9572,func__8191__auto___9573);
{
var G__9574 = seq__9529_9567;
var G__9575 = chunk__9530_9568;
var G__9576 = count__9531_9569;
var G__9577 = (i__9532_9570 + 1);
seq__9529_9567 = G__9574;
chunk__9530_9568 = G__9575;
count__9531_9569 = G__9576;
i__9532_9570 = G__9577;
continue;
}
} else
{var temp__4092__auto___9578 = cljs.core.seq.call(null,seq__9529_9567);if(temp__4092__auto___9578)
{var seq__9529_9579__$1 = temp__4092__auto___9578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9529_9579__$1))
{var c__7561__auto___9580 = cljs.core.chunk_first.call(null,seq__9529_9579__$1);{
var G__9581 = cljs.core.chunk_rest.call(null,seq__9529_9579__$1);
var G__9582 = c__7561__auto___9580;
var G__9583 = cljs.core.count.call(null,c__7561__auto___9580);
var G__9584 = 0;
seq__9529_9567 = G__9581;
chunk__9530_9568 = G__9582;
count__9531_9569 = G__9583;
i__9532_9570 = G__9584;
continue;
}
} else
{var vec__9534_9585 = cljs.core.first.call(null,seq__9529_9579__$1);var ev__8190__auto___9586 = cljs.core.nth.call(null,vec__9534_9585,0,null);var func__8191__auto___9587 = cljs.core.nth.call(null,vec__9534_9585,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___9586,func__8191__auto___9587);
{
var G__9588 = cljs.core.next.call(null,seq__9529_9579__$1);
var G__9589 = null;
var G__9590 = 0;
var G__9591 = 0;
seq__9529_9567 = G__9588;
chunk__9530_9568 = G__9589;
count__9531_9569 = G__9590;
i__9532_9570 = G__9591;
continue;
}
}
} else
{}
}
break;
}
return e__8189__auto__;
});
lt.plugins.lt_snippets.__BEH__remove_snippet_form = (function __BEH__remove_snippet_form(this$){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","remove-snippet-form","lt.plugins.lt-snippets/remove-snippet-form",4428330337),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__remove_snippet_form,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to remove inline snippet for (default on enter and esc or last/no inputs)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425),null], null), null));
lt.plugins.lt_snippets.find_line_containing = (function find_line_containing(ed,txt,callback){return lt.objs.editor.__GT_cm_ed.call(null,ed).getDoc().eachLine((function (line_handle){if(cljs.core.truth_(line_handle.text.contains(txt)))
{return callback.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed).lineInfo(line_handle).line);
} else
{return null;
}
}));
});
lt.plugins.lt_snippets.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__9537){var vec__9538 = p__9537;var k = cljs.core.nth.call(null,vec__9538,0,null);var v = cljs.core.nth.call(null,vec__9538,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.lt_snippets.resize_form_input = (function resize_form_input(el){var v = el.value;return el.style.width = lt.plugins.lt_snippets.text_width.call(null,v);
});
lt.plugins.lt_snippets.set_mirrored_values = (function set_mirrored_values(form,el){var c = el.className;var v = el.value;var seq__9543 = cljs.core.seq.call(null,cljs.core.rest.call(null,lt.util.dom.$$.call(null,[cljs.core.str("input."),cljs.core.str(c)].join(''),form)));var chunk__9544 = null;var count__9545 = 0;var i__9546 = 0;while(true){
if((i__9546 < count__9545))
{var mirr = cljs.core._nth.call(null,chunk__9544,i__9546);mirr.value = v;
lt.plugins.lt_snippets.resize_form_input.call(null,mirr);
{
var G__9592 = seq__9543;
var G__9593 = chunk__9544;
var G__9594 = count__9545;
var G__9595 = (i__9546 + 1);
seq__9543 = G__9592;
chunk__9544 = G__9593;
count__9545 = G__9594;
i__9546 = G__9595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9543);if(temp__4092__auto__)
{var seq__9543__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9543__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__9543__$1);{
var G__9596 = cljs.core.chunk_rest.call(null,seq__9543__$1);
var G__9597 = c__7561__auto__;
var G__9598 = cljs.core.count.call(null,c__7561__auto__);
var G__9599 = 0;
seq__9543 = G__9596;
chunk__9544 = G__9597;
count__9545 = G__9598;
i__9546 = G__9599;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__9543__$1);mirr.value = v;
lt.plugins.lt_snippets.resize_form_input.call(null,mirr);
{
var G__9600 = cljs.core.next.call(null,seq__9543__$1);
var G__9601 = null;
var G__9602 = 0;
var G__9603 = 0;
seq__9543 = G__9600;
chunk__9544 = G__9601;
count__9545 = G__9602;
i__9546 = G__9603;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.lt_snippets.complete_snippet = (function complete_snippet(this$,ed,form){var inputs = lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),form);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(inputs))
{var kv = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__9547_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[clojure.string.replace.call(null,p1__9547_SHARP_.className,/snipvar-/,"$")],[p1__9547_SHARP_.value]);
}),inputs));var result = lt.plugins.lt_snippets.map_replace.call(null,kv,snippet);lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
lt.objs.editor.focus.call(null,ed);
var pos = lt.objs.editor.__GT_cursor.call(null,ed);lt.objs.editor.insert_at_cursor.call(null,ed,result);
if(cljs.core.truth_(result.contains("$0")))
{} else
{lt.objs.editor.set_selection.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed));
lt.objs.editor.indent_selection.call(null,ed,"smart");
}
return lt.plugins.lt_snippets.find_line_containing.call(null,ed,"$0",(function (line_no){var ch = lt.objs.editor.line.call(null,ed,line_no).indexOf("$0");lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),(2 + ch)], null),"var hello = 0;");
lt.objs.editor.set_selection.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed));
lt.objs.editor.indent_selection.call(null,ed,"smart");
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null));
}));
} else
{return null;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.form","inline.snippet.form",3354835868),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.lt_snippets.snippet_form.call(null,this$,info);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(info));lt.util.dom.html.call(null,content,lt.plugins.lt_snippets.snippet_to_form.call(null,snippet,lt.plugins.lt_snippets.get_tabstops.call(null,snippet)));
var seq__9548_9604 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),content));var chunk__9549_9605 = null;var count__9550_9606 = 0;var i__9551_9607 = 0;while(true){
if((i__9551_9607 < count__9550_9606))
{var el_9608 = cljs.core._nth.call(null,chunk__9549_9605,i__9551_9607);lt.util.dom.on.call(null,el_9608,"keyup",((function (seq__9548_9604,chunk__9549_9605,count__9550_9606,i__9551_9607,el_9608){
return (function (ev){lt.plugins.lt_snippets.resize_form_input.call(null,ev.target);
return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
});})(seq__9548_9604,chunk__9549_9605,count__9550_9606,i__9551_9607,el_9608))
);
{
var G__9609 = seq__9548_9604;
var G__9610 = chunk__9549_9605;
var G__9611 = count__9550_9606;
var G__9612 = (i__9551_9607 + 1);
seq__9548_9604 = G__9609;
chunk__9549_9605 = G__9610;
count__9550_9606 = G__9611;
i__9551_9607 = G__9612;
continue;
}
} else
{var temp__4092__auto___9613__$1 = cljs.core.seq.call(null,seq__9548_9604);if(temp__4092__auto___9613__$1)
{var seq__9548_9614__$1 = temp__4092__auto___9613__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9548_9614__$1))
{var c__7561__auto___9615 = cljs.core.chunk_first.call(null,seq__9548_9614__$1);{
var G__9616 = cljs.core.chunk_rest.call(null,seq__9548_9614__$1);
var G__9617 = c__7561__auto___9615;
var G__9618 = cljs.core.count.call(null,c__7561__auto___9615);
var G__9619 = 0;
seq__9548_9604 = G__9616;
chunk__9549_9605 = G__9617;
count__9550_9606 = G__9618;
i__9551_9607 = G__9619;
continue;
}
} else
{var el_9620 = cljs.core.first.call(null,seq__9548_9614__$1);lt.util.dom.on.call(null,el_9620,"keyup",((function (seq__9548_9604,chunk__9549_9605,count__9550_9606,i__9551_9607,el_9620,seq__9548_9614__$1,temp__4092__auto___9613__$1){
return (function (ev){lt.plugins.lt_snippets.resize_form_input.call(null,ev.target);
return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
});})(seq__9548_9604,chunk__9549_9605,count__9550_9606,i__9551_9607,el_9620,seq__9548_9614__$1,temp__4092__auto___9613__$1))
);
{
var G__9621 = cljs.core.next.call(null,seq__9548_9614__$1);
var G__9622 = null;
var G__9623 = 0;
var G__9624 = 0;
seq__9548_9604 = G__9621;
chunk__9549_9605 = G__9622;
count__9550_9606 = G__9623;
i__9551_9607 = G__9624;
continue;
}
}
} else
{}
}
break;
}
lt.util.dom.on.call(null,content,"keydown",(function (ev){var kc = ev.keyCode;if(cljs.core._EQ_.call(null,13,kc))
{return lt.plugins.lt_snippets.complete_snippet.call(null,this$,ed,content);
} else
{if(cljs.core._EQ_.call(null,9,kc))
{return cljs.core.println.call(null,"Tab");
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
}
}));
lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),true], null))));
var seq__9552_9625 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),content));var chunk__9553_9626 = null;var count__9554_9627 = 0;var i__9555_9628 = 0;while(true){
if((i__9555_9628 < count__9554_9627))
{var el_9629 = cljs.core._nth.call(null,chunk__9553_9626,i__9555_9628);lt.plugins.lt_snippets.resize_form_input.call(null,el_9629);
{
var G__9630 = seq__9552_9625;
var G__9631 = chunk__9553_9626;
var G__9632 = count__9554_9627;
var G__9633 = (i__9555_9628 + 1);
seq__9552_9625 = G__9630;
chunk__9553_9626 = G__9631;
count__9554_9627 = G__9632;
i__9555_9628 = G__9633;
continue;
}
} else
{var temp__4092__auto___9634__$1 = cljs.core.seq.call(null,seq__9552_9625);if(temp__4092__auto___9634__$1)
{var seq__9552_9635__$1 = temp__4092__auto___9634__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9552_9635__$1))
{var c__7561__auto___9636 = cljs.core.chunk_first.call(null,seq__9552_9635__$1);{
var G__9637 = cljs.core.chunk_rest.call(null,seq__9552_9635__$1);
var G__9638 = c__7561__auto___9636;
var G__9639 = cljs.core.count.call(null,c__7561__auto___9636);
var G__9640 = 0;
seq__9552_9625 = G__9637;
chunk__9553_9626 = G__9638;
count__9554_9627 = G__9639;
i__9555_9628 = G__9640;
continue;
}
} else
{var el_9641 = cljs.core.first.call(null,seq__9552_9635__$1);lt.plugins.lt_snippets.resize_form_input.call(null,el_9641);
{
var G__9642 = cljs.core.next.call(null,seq__9552_9635__$1);
var G__9643 = null;
var G__9644 = 0;
var G__9645 = 0;
seq__9552_9625 = G__9642;
chunk__9553_9626 = G__9643;
count__9554_9627 = G__9644;
i__9555_9628 = G__9645;
continue;
}
}
} else
{}
}
break;
}
return content;
} else
{return null;
}
}));
lt.plugins.lt_snippets.snippet_dir = lt.objs.files.lt_user_dir.call(null,"snippets");
lt.plugins.lt_snippets.read_snippets = (function read_snippets(){return cljs.core.partial.call(null,cljs.core.mapcat,cljs.core.identity).call(null,cljs.core.partial.call(null,cljs.core.map,(function (p1__9557_SHARP_){return cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,lt.objs.files.join.call(null,lt.plugins.lt_snippets.snippet_dir,p1__9557_SHARP_)));
})).call(null,cljs.core.filter.call(null,(function (p1__9556_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__9556_SHARP_),"edn");
}),lt.objs.files.ls_sync.call(null,lt.plugins.lt_snippets.snippet_dir))));
});
lt.plugins.lt_snippets.snippet_by_key = (function snippet_by_key(key){return cljs.core.some.call(null,(function (p1__9558_SHARP_){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__9558_SHARP_)))
{return p1__9558_SHARP_;
} else
{return null;
}
}),lt.plugins.lt_snippets.read_snippets.call(null));
});
lt.plugins.lt_snippets.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.lt_snippets.selector = (function selector(opts){var G__9560 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__9560,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608));
return G__9560;
});
lt.plugins.lt_snippets.add_selector = lt.plugins.lt_snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.lt_snippets.read_snippets,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__9563_SHARP_,p2__9564_SHARP_,p3__9561_SHARP_,p4__9562_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__9561_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__9562_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.lt_snippets.insert_snippet = (function insert_snippet(item){var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form_ui = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));return lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Select snippet to invoke",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.lt_snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.plugins.lt_snippets.insert_snippet.call(null,item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_key","snippet.by_key",4762727386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Invoke snippet by its key",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){return lt.plugins.lt_snippets.insert_snippet.call(null,lt.plugins.lt_snippets.snippet_by_key.call(null,key));
})], null));
}

//# sourceMappingURL=lt_snippets_compiled.js.map