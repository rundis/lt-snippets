if(!lt.util.load.provided_QMARK_('lt.plugins.snippets.snippet-form')) {
goog.provide('lt.plugins.snippets.snippet_form');
goog.require('cljs.core');
goog.require('lt.plugins.snippets.snip');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.snippets.snip');
goog.require('lt.objs.command');
lt.plugins.snippets.snippet_form.comp_tabstop = (function comp_tabstop(a,b){if(cljs.core.truth_((function (){var and__4872__auto__ = new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(a);if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(b));
} else
{return and__4872__auto__;
}
})()))
{return true;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(a));
} else
{return and__4872__auto__;
}
})()))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
});
lt.plugins.snippets.snippet_form.patterns = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ts-ph-js","ts-ph-js",1695039458),"\\$\\{\\d+\\:__[^\\x0A\\x0D\\u2028\\u2029\\__]*__\\}",new cljs.core.Keyword(null,"ts-ph","ts-ph",1124505464),"\\$\\{\\d+\\:[^\\x0A\\x0D\\u2028\\u2029\\}]*\\}",new cljs.core.Keyword(null,"ts","ts",1013907953),"\\$\\d+",new cljs.core.Keyword(null,"frag","frag",1017055588),"\\$\\{__[^\\x0A\\x0D\\u2028\\u2029\\__]*__\\}",new cljs.core.Keyword(null,"js-code","js-code",3936983907),"__([^\\x0A\\x0D\\u2028\\u2029\\__]*)__",new cljs.core.Keyword(null,"ts-ph-js-group","ts-ph-js-group",2672047700),"\\$\\{\\d+\\:(__[^\\x0A\\x0D\\u2028\\u2029\\__]*__)\\}",new cljs.core.Keyword(null,"ts-ph-group","ts-ph-group",3284927850),"\\$\\{\\d+\\:([^\\x0A\\x0D\\u2028\\u2029\\}]*)\\}"], null);
lt.plugins.snippets.snippet_form.pattern_join = (function pattern_join(ps,j){return clojure.string.join.call(null,j,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__6740_SHARP_){return p1__6740_SHARP_.call(null,lt.plugins.snippets.snippet_form.patterns);
}),ps)));
});
lt.plugins.snippets.snippet_form.get_tabstops = (function get_tabstops(snippet){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (ts){return cljs.core.map_indexed.call(null,(function (idx,tsi){if((idx > 0))
{return cljs.core.assoc.call(null,tsi,new cljs.core.Keyword(null,"mirrored","mirrored",4072699920),true);
} else
{return tsi;
}
}),cljs.core.sort.call(null,cljs.core.comp.call(null,lt.plugins.snippets.snippet_form.comp_tabstop),cljs.core.last.call(null,ts)));
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"num","num",1014013688),cljs.core.map.call(null,(function (p1__6742_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"num","num",1014013688),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),new cljs.core.Keyword(null,"text","text",1017460895)],[cljs.core.re_find.call(null,/\d+/,p1__6742_SHARP_),(function (){var temp__4092__auto__ = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,lt.plugins.snippets.snippet_form.pattern_join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ts-ph-js-group","ts-ph-js-group",2672047700),new cljs.core.Keyword(null,"ts-ph-group","ts-ph-group",3284927850)], null),"|")),p1__6742_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var ph = temp__4092__auto__;var or__4884__auto__ = cljs.core.nth.call(null,ph,1);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.last.call(null,ph);
}
} else
{return null;
}
})(),p1__6742_SHARP_]);
}),cljs.core.filter.call(null,(function (p1__6741_SHARP_){return !(cljs.core._EQ_.call(null,p1__6741_SHARP_,"$0"));
}),cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,lt.plugins.snippets.snippet_form.pattern_join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ts-ph-js","ts-ph-js",1695039458),new cljs.core.Keyword(null,"ts-ph","ts-ph",1124505464),new cljs.core.Keyword(null,"ts","ts",1013907953)], null),"|")),snippet))))));
});
lt.plugins.snippets.snippet_form.tabstops_QMARK_ = (function tabstops_QMARK_(snippet){return cljs.core.empty_QMARK_.call(null,lt.plugins.snippets.snippet_form.get_tabstops.call(null,snippet));
});
lt.plugins.snippets.snippet_form.tokenize = (function tokenize(snippet){return cljs.core.js__GT_clj.call(null,snippet.split(cljs.core.re_pattern.call(null,[cljs.core.str("("),cljs.core.str(lt.plugins.snippets.snippet_form.pattern_join.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ts-ph-js","ts-ph-js",1695039458),new cljs.core.Keyword(null,"ts-ph","ts-ph",1124505464),new cljs.core.Keyword(null,"ts","ts",1013907953),new cljs.core.Keyword(null,"frag","frag",1017055588)], null),"|")),cljs.core.str(")")].join(''))));
});
lt.plugins.snippets.snippet_form.safe_eval = (function safe_eval(frag){try{return window.eval(frag);
}catch (e6744){var e = e6744;return console.error.call(null,[cljs.core.str("Failed to evaluate js: "),cljs.core.str(frag)].join(''));
}});
lt.plugins.snippets.snippet_form.resolve_placeholder = (function resolve_placeholder(ph){var temp__4090__auto__ = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,new cljs.core.Keyword(null,"js-code","js-code",3936983907).cljs$core$IFn$_invoke$arity$1(lt.plugins.snippets.snippet_form.patterns)),ph);if(cljs.core.truth_(temp__4090__auto__))
{var code = temp__4090__auto__;return lt.plugins.snippets.snippet_form.safe_eval.call(null,cljs.core.last.call(null,code));
} else
{return ph;
}
});
lt.plugins.snippets.snippet_form.inline_code_frag_QMARK_ = (function inline_code_frag_QMARK_(frag){return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,new cljs.core.Keyword(null,"frag","frag",1017055588).cljs$core$IFn$_invoke$arity$1(lt.plugins.snippets.snippet_form.patterns)),frag);
});
lt.plugins.snippets.snippet_form.mirrored_transformation_QMARK_ = (function mirrored_transformation_QMARK_(mirror){return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,new cljs.core.Keyword(null,"ts-ph-js","ts-ph-js",1695039458).cljs$core$IFn$_invoke$arity$1(lt.plugins.snippets.snippet_form.patterns)),mirror);
});
lt.plugins.snippets.snippet_form.resolve_mirror = (function resolve_mirror(mirror,v){var temp__4090__auto__ = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,new cljs.core.Keyword(null,"js-code","js-code",3936983907).cljs$core$IFn$_invoke$arity$1(lt.plugins.snippets.snippet_form.patterns)),mirror);if(cljs.core.truth_(temp__4090__auto__))
{var code = temp__4090__auto__;var js_fun = lt.plugins.snippets.snippet_form.safe_eval.call(null,cljs.core.last.call(null,code));if(cljs.core.truth_(js_fun))
{return js_fun.call(null,v);
} else
{return console.error.call(null,[cljs.core.str("Error resolving mirror. Expression does not resolve to a (valid) function: "),cljs.core.str(cljs.core.last.call(null,code))].join(''));
}
} else
{return v;
}
});
lt.plugins.snippets.snippet_form.tabstop_to_input = (function tabstop_to_input(tabstop){var ph = lt.plugins.snippets.snippet_form.resolve_placeholder.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(tabstop));return [cljs.core.str("<span contenteditable='true'"),cljs.core.str(" data-ph='"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(tabstop))?ph:[cljs.core.str("#"),cljs.core.str(new cljs.core.Keyword(null,"num","num",1014013688).cljs$core$IFn$_invoke$arity$1(tabstop))].join(''))),cljs.core.str("'"),cljs.core.str(" data-ts='"),cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'"),cljs.core.str(" class='replace snipvar-"),cljs.core.str(new cljs.core.Keyword(null,"num","num",1014013688).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'>"),cljs.core.str(ph),cljs.core.str("</span>")].join('');
});
lt.plugins.snippets.snippet_form.tabstop_to_mirror = (function tabstop_to_mirror(tabstop){return [cljs.core.str("<span class='replace snipvar-"),cljs.core.str(new cljs.core.Keyword(null,"num","num",1014013688).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'"),cljs.core.str(" data-ts='"),cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'"),cljs.core.str("></span>")].join('');
});
lt.plugins.snippets.snippet_form.replace_tabstops = (function replace_tabstops(snippet){var tokens = cljs.core.vec.call(null,lt.plugins.snippets.snippet_form.tokenize.call(null,snippet));var tabstops = lt.plugins.snippets.snippet_form.get_tabstops.call(null,snippet);while(true){
if(cljs.core.empty_QMARK_.call(null,tabstops))
{return tokens;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var tabstop = cljs.core.first.call(null,tabstops);var idx = cljs.core.clj__GT_js.call(null,tokens).indexOf(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tabstop));{
var G__6777 = cljs.core.assoc.call(null,tokens,idx,(cljs.core.truth_(new cljs.core.Keyword(null,"mirrored","mirrored",4072699920).cljs$core$IFn$_invoke$arity$1(tabstop))?lt.plugins.snippets.snippet_form.tabstop_to_mirror.call(null,tabstop):lt.plugins.snippets.snippet_form.tabstop_to_input.call(null,tabstop)));
var G__6778 = cljs.core.rest.call(null,tabstops);
tokens = G__6777;
tabstops = G__6778;
continue;
}
} else
{return null;
}
}
break;
}
});
lt.plugins.snippets.snippet_form.escapeSnippet = (function escapeSnippet(snippet){var pre = document.createElement("pre");var tn = document.createTextNode(snippet);pre.appendChild(tn);
return pre.innerHTML;
});
lt.plugins.snippets.snippet_form.inline_code_to_span = (function inline_code_to_span(frag){return [cljs.core.str("<div class='replace codeblock' data-ts='"),cljs.core.str(frag),cljs.core.str("'>"),cljs.core.str(lt.plugins.snippets.snippet_form.resolve_placeholder.call(null,frag)),cljs.core.str("</div>")].join('');
});
lt.plugins.snippets.snippet_form.resolve_inline_code = (function resolve_inline_code(tokens){return cljs.core.map.call(null,(function (p1__6745_SHARP_){if(cljs.core.truth_(lt.plugins.snippets.snippet_form.inline_code_frag_QMARK_.call(null,p1__6745_SHARP_)))
{return lt.plugins.snippets.snippet_form.inline_code_to_span.call(null,p1__6745_SHARP_);
} else
{return p1__6745_SHARP_;
}
}),tokens);
});
lt.plugins.snippets.snippet_form.snippet_to_form = (function snippet_to_form(snippet){return clojure.string.join.call(null,lt.plugins.snippets.snippet_form.resolve_inline_code.call(null,lt.plugins.snippets.snippet_form.replace_tabstops.call(null,lt.plugins.snippets.snippet_form.escapeSnippet.call(null,clojure.string.replace.call(null,snippet,"$0","")))));
});
lt.plugins.snippets.snippet_form.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__6748){var vec__6749 = p__6748;var k = cljs.core.nth.call(null,vec__6749,0,null);var v = cljs.core.nth.call(null,vec__6749,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.snippets.snippet_form.snipvar_class = (function snipvar_class(classnames){return cljs.core.re_find.call(null,/snipvar-\d+/,classnames);
});
lt.plugins.snippets.snippet_form.set_mirror_value = (function set_mirror_value(mirr,v){var ts = lt.util.dom.attr.call(null,mirr,"data-ts");if(cljs.core.truth_(lt.plugins.snippets.snippet_form.mirrored_transformation_QMARK_.call(null,ts)))
{return lt.util.dom.html.call(null,mirr,lt.plugins.snippets.snippet_form.resolve_mirror.call(null,ts,v));
} else
{return lt.util.dom.html.call(null,mirr,v);
}
});
lt.plugins.snippets.snippet_form.set_mirrored_values = (function set_mirrored_values(form,el){var c = lt.plugins.snippets.snippet_form.snipvar_class.call(null,el.className);var seq__6754 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,[cljs.core.str("."),cljs.core.str(c),cljs.core.str(":not([contenteditable=true])")].join(''),form));var chunk__6755 = null;var count__6756 = 0;var i__6757 = 0;while(true){
if((i__6757 < count__6756))
{var mirr = cljs.core._nth.call(null,chunk__6755,i__6757);lt.plugins.snippets.snippet_form.set_mirror_value.call(null,mirr,lt.util.dom.html.call(null,el));
{
var G__6779 = seq__6754;
var G__6780 = chunk__6755;
var G__6781 = count__6756;
var G__6782 = (i__6757 + 1);
seq__6754 = G__6779;
chunk__6755 = G__6780;
count__6756 = G__6781;
i__6757 = G__6782;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6754);if(temp__4092__auto__)
{var seq__6754__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6754__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6754__$1);{
var G__6783 = cljs.core.chunk_rest.call(null,seq__6754__$1);
var G__6784 = c__5632__auto__;
var G__6785 = cljs.core.count.call(null,c__5632__auto__);
var G__6786 = 0;
seq__6754 = G__6783;
chunk__6755 = G__6784;
count__6756 = G__6785;
i__6757 = G__6786;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__6754__$1);lt.plugins.snippets.snippet_form.set_mirror_value.call(null,mirr,lt.util.dom.html.call(null,el));
{
var G__6787 = cljs.core.next.call(null,seq__6754__$1);
var G__6788 = null;
var G__6789 = 0;
var G__6790 = 0;
seq__6754 = G__6787;
chunk__6755 = G__6788;
count__6756 = G__6789;
i__6757 = G__6790;
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
lt.plugins.snippets.snippet_form.form_to_snippet = (function form_to_snippet(form,snippet){var temp__4092__auto__ = lt.util.dom.$$.call(null,".replace",form);if(cljs.core.truth_(temp__4092__auto__))
{var inputs = temp__4092__auto__;return lt.plugins.snippets.snippet_form.map_replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (inputs,temp__4092__auto__){
return (function (p1__6758_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[lt.util.dom.attr.call(null,p1__6758_SHARP_,"data-ts")],[lt.util.dom.html.call(null,p1__6758_SHARP_)]);
});})(inputs,temp__4092__auto__))
,inputs)),snippet);
} else
{return null;
}
});
lt.plugins.snippets.snippet_form.form = (function form(this$,info){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__6765_6791 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6281__auto__){
return (function (e){lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907))));
return lt.util.dom.prevent.call(null,e);
});})(e__6281__auto__))
], null)));var chunk__6766_6792 = null;var count__6767_6793 = 0;var i__6768_6794 = 0;while(true){
if((i__6768_6794 < count__6767_6793))
{var vec__6769_6795 = cljs.core._nth.call(null,chunk__6766_6792,i__6768_6794);var ev__6282__auto___6796 = cljs.core.nth.call(null,vec__6769_6795,0,null);var func__6283__auto___6797 = cljs.core.nth.call(null,vec__6769_6795,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6796,func__6283__auto___6797);
{
var G__6798 = seq__6765_6791;
var G__6799 = chunk__6766_6792;
var G__6800 = count__6767_6793;
var G__6801 = (i__6768_6794 + 1);
seq__6765_6791 = G__6798;
chunk__6766_6792 = G__6799;
count__6767_6793 = G__6800;
i__6768_6794 = G__6801;
continue;
}
} else
{var temp__4092__auto___6802 = cljs.core.seq.call(null,seq__6765_6791);if(temp__4092__auto___6802)
{var seq__6765_6803__$1 = temp__4092__auto___6802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6765_6803__$1))
{var c__5632__auto___6804 = cljs.core.chunk_first.call(null,seq__6765_6803__$1);{
var G__6805 = cljs.core.chunk_rest.call(null,seq__6765_6803__$1);
var G__6806 = c__5632__auto___6804;
var G__6807 = cljs.core.count.call(null,c__5632__auto___6804);
var G__6808 = 0;
seq__6765_6791 = G__6805;
chunk__6766_6792 = G__6806;
count__6767_6793 = G__6807;
i__6768_6794 = G__6808;
continue;
}
} else
{var vec__6770_6809 = cljs.core.first.call(null,seq__6765_6803__$1);var ev__6282__auto___6810 = cljs.core.nth.call(null,vec__6770_6809,0,null);var func__6283__auto___6811 = cljs.core.nth.call(null,vec__6770_6809,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6810,func__6283__auto___6811);
{
var G__6812 = cljs.core.next.call(null,seq__6765_6803__$1);
var G__6813 = null;
var G__6814 = 0;
var G__6815 = 0;
seq__6765_6791 = G__6812;
chunk__6766_6792 = G__6813;
count__6767_6793 = G__6814;
i__6768_6794 = G__6815;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});
lt.plugins.snippets.snippet_form.__BEH__remove_snippet_form = (function __BEH__remove_snippet_form(this$){new cljs.core.Keyword(null,"snipmark","snipmark",1527626241).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets.snippet-form","remove-snippet-form","lt.plugins.snippets.snippet-form/remove-snippet-form",2373638837),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.snippet_form.__BEH__remove_snippet_form,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to remove inline snippet form (default on enter and esc or last/no inputs)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425),null], null), null));
lt.plugins.snippets.snippet_form.taborder = (function taborder(el){return clojure.string.replace.call(null,lt.plugins.snippets.snippet_form.snipvar_class.call(null,el.className),"snipvar-","");
});
lt.plugins.snippets.snippet_form.tabstops = (function tabstops(form){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,(function (p1__6771_SHARP_,p2__6772_SHARP_){return cljs.core.compare.call(null,lt.plugins.snippets.snippet_form.taborder.call(null,p1__6771_SHARP_),lt.plugins.snippets.snippet_form.taborder.call(null,p2__6772_SHARP_));
}),cljs.core.seq.call(null,lt.util.dom.$$.call(null,"span[contenteditable=true]"))));
});
lt.plugins.snippets.snippet_form.tabstops_count = (function tabstops_count(form){return cljs.core.count.call(null,lt.plugins.snippets.snippet_form.tabstops.call(null,form));
});
lt.plugins.snippets.snippet_form.tabstop_idx = (function tabstop_idx(form,el){return cljs.core.clj__GT_js.call(null,lt.plugins.snippets.snippet_form.tabstops.call(null,form)).indexOf(el);
});
lt.plugins.snippets.snippet_form.next_tabstop_el = (function next_tabstop_el(form,el){return cljs.core.nth.call(null,lt.plugins.snippets.snippet_form.tabstops.call(null,form),(lt.plugins.snippets.snippet_form.tabstop_idx.call(null,form,el) + 1));
});
lt.plugins.snippets.snippet_form.move_next_tab = (function move_next_tab(form,el){return lt.util.dom.focus.call(null,lt.plugins.snippets.snippet_form.next_tabstop_el.call(null,form,el));
});
lt.plugins.snippets.snippet_form.prev_tabstop_el = (function prev_tabstop_el(form,el){return cljs.core.nth.call(null,lt.plugins.snippets.snippet_form.tabstops.call(null,form),(lt.plugins.snippets.snippet_form.tabstop_idx.call(null,form,el) - 1));
});
lt.plugins.snippets.snippet_form.move_prev_tab = (function move_prev_tab(form,el){return lt.util.dom.focus.call(null,lt.plugins.snippets.snippet_form.prev_tabstop_el.call(null,form,el));
});
lt.plugins.snippets.snippet_form.last_tabstop_QMARK_ = (function last_tabstop_QMARK_(form,el){return cljs.core._EQ_.call(null,lt.plugins.snippets.snippet_form.tabstops_count.call(null,form),(lt.plugins.snippets.snippet_form.tabstop_idx.call(null,form,el) + 1));
});
lt.plugins.snippets.snippet_form.first_tabstop_QMARK_ = (function first_tabstop_QMARK_(form,el){return cljs.core._EQ_.call(null,0,lt.plugins.snippets.snippet_form.tabstop_idx.call(null,form,el));
});
lt.plugins.snippets.snippet_form.first_tabstop = (function first_tabstop(form){return cljs.core.first.call(null,lt.plugins.snippets.snippet_form.tabstops.call(null,form));
});
lt.plugins.snippets.snippet_form.complete_snippet_form = (function complete_snippet_form(this$,ed,form,cb_obj){var snip = lt.plugins.snippets.snippet_form.form_to_snippet.call(null,form,new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var no_indent = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"no-indent","no-indent",4334515626).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
lt.objs.editor.focus.call(null,ed);
return lt.object.raise.call(null,cb_obj,new cljs.core.Keyword(null,"snippet.complete","snippet.complete",2018711132),ed,snip,new cljs.core.Keyword(null,"no-indent","no-indent",4334515626),no_indent);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets.snippet-form","inline-form","lt.plugins.snippets.snippet-form/inline-form",3384681696),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.form","inline.snippet.form",3354835868),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.snippets.snippet_form.form.call(null,this$,info);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(info));var cb_obj = new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659).cljs$core$IFn$_invoke$arity$1(info);lt.util.dom.html.call(null,content,lt.plugins.snippets.snippet_form.snippet_to_form.call(null,snippet));
var seq__6773_6816 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"span[contenteditable=true]",content));var chunk__6774_6817 = null;var count__6775_6818 = 0;var i__6776_6819 = 0;while(true){
if((i__6776_6819 < count__6775_6818))
{var el_6820 = cljs.core._nth.call(null,chunk__6774_6817,i__6776_6819);lt.plugins.snippets.snippet_form.set_mirrored_values.call(null,content,el_6820);
lt.util.dom.on.call(null,el_6820,"focus",((function (seq__6773_6816,chunk__6774_6817,count__6775_6818,i__6776_6819,el_6820,content,line,snippet,cb_obj,ed,temp__4092__auto__){
return (function (ev){var sel = window.getSelection();var r = document.createRange();r.selectNodeContents(el_6820);
sel.removeAllRanges();
return sel.addRange(r);
});})(seq__6773_6816,chunk__6774_6817,count__6775_6818,i__6776_6819,el_6820,content,line,snippet,cb_obj,ed,temp__4092__auto__))
);
{
var G__6821 = seq__6773_6816;
var G__6822 = chunk__6774_6817;
var G__6823 = count__6775_6818;
var G__6824 = (i__6776_6819 + 1);
seq__6773_6816 = G__6821;
chunk__6774_6817 = G__6822;
count__6775_6818 = G__6823;
i__6776_6819 = G__6824;
continue;
}
} else
{var temp__4092__auto___6825__$1 = cljs.core.seq.call(null,seq__6773_6816);if(temp__4092__auto___6825__$1)
{var seq__6773_6826__$1 = temp__4092__auto___6825__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6773_6826__$1))
{var c__5632__auto___6827 = cljs.core.chunk_first.call(null,seq__6773_6826__$1);{
var G__6828 = cljs.core.chunk_rest.call(null,seq__6773_6826__$1);
var G__6829 = c__5632__auto___6827;
var G__6830 = cljs.core.count.call(null,c__5632__auto___6827);
var G__6831 = 0;
seq__6773_6816 = G__6828;
chunk__6774_6817 = G__6829;
count__6775_6818 = G__6830;
i__6776_6819 = G__6831;
continue;
}
} else
{var el_6832 = cljs.core.first.call(null,seq__6773_6826__$1);lt.plugins.snippets.snippet_form.set_mirrored_values.call(null,content,el_6832);
lt.util.dom.on.call(null,el_6832,"focus",((function (seq__6773_6816,chunk__6774_6817,count__6775_6818,i__6776_6819,el_6832,seq__6773_6826__$1,temp__4092__auto___6825__$1,content,line,snippet,cb_obj,ed,temp__4092__auto__){
return (function (ev){var sel = window.getSelection();var r = document.createRange();r.selectNodeContents(el_6832);
sel.removeAllRanges();
return sel.addRange(r);
});})(seq__6773_6816,chunk__6774_6817,count__6775_6818,i__6776_6819,el_6832,seq__6773_6826__$1,temp__4092__auto___6825__$1,content,line,snippet,cb_obj,ed,temp__4092__auto__))
);
{
var G__6833 = cljs.core.next.call(null,seq__6773_6826__$1);
var G__6834 = null;
var G__6835 = 0;
var G__6836 = 0;
seq__6773_6816 = G__6833;
chunk__6774_6817 = G__6834;
count__6775_6818 = G__6835;
i__6776_6819 = G__6836;
continue;
}
}
} else
{}
}
break;
}
lt.util.dom.on.call(null,content,"keyup",((function (content,line,snippet,cb_obj,ed,temp__4092__auto__){
return (function (ev){return lt.plugins.snippets.snippet_form.set_mirrored_values.call(null,content,ev.target);
});})(content,line,snippet,cb_obj,ed,temp__4092__auto__))
);
lt.util.dom.on.call(null,content,"keydown",((function (content,line,snippet,cb_obj,ed,temp__4092__auto__){
return (function (ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
return lt.plugins.snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,cb_obj);
} else
{if((cljs.core._EQ_.call(null,9,kc)) && (cljs.core.not.call(null,ev.shiftKey)))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
if(lt.plugins.snippets.snippet_form.last_tabstop_QMARK_.call(null,content,el))
{return lt.plugins.snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,cb_obj);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.snippets.snippet_form.move_next_tab.call(null,lt.plugins.snippets.snippet_form.form,el);
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core._EQ_.call(null,9,kc);if(and__4872__auto__)
{return ev.shiftKey;
} else
{return and__4872__auto__;
}
})()))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
if(lt.plugins.snippets.snippet_form.first_tabstop_QMARK_.call(null,content,el))
{return lt.plugins.snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,cb_obj);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.snippets.snippet_form.move_prev_tab.call(null,lt.plugins.snippets.snippet_form.form,el);
} else
{return null;
}
}
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
}
}
});})(content,line,snippet,cb_obj,ed,temp__4092__auto__))
);
lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"snipmark","snipmark",1527626241),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),true], null))));
lt.util.dom.focus.call(null,lt.plugins.snippets.snippet_form.first_tabstop.call(null,content));
return content;
} else
{return null;
}
}));
lt.plugins.snippets.snippet_form.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.snippets.snippet-form","inline-form","lt.plugins.snippets.snippet-form/inline-form",3384681696),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.snippets.loader')) {
goog.provide('lt.plugins.snippets.loader');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.keyboard');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.keyboard');
lt.plugins.snippets.loader.__BEH__set_snippet_dir = (function __BEH__set_snippet_dir(this$,snippet_dir){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.snippets.loader","snippet-dir","lt.plugins.snippets.loader/snippet-dir",3747021493),snippet_dir], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets.loader","set-snippet-dir","lt.plugins.snippets.loader/set-snippet-dir",4427956048),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.loader.__BEH__set_snippet_dir,new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Set root directory for snippets",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"snippet-dir"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets.loader","loader","lt.plugins.snippets.loader/loader",695103087),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippets.loader","snippets.loader",1994880381)], null),new cljs.core.Keyword(null,"name","name",1017277949),"loader");
lt.plugins.snippets.loader.loader = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.snippets.loader","loader","lt.plugins.snippets.loader/loader",695103087));
lt.plugins.snippets.loader.get_snippet_dir = (function get_snippet_dir(){var snip_dir = (function (){var or__4884__auto__ = new cljs.core.Keyword("lt.plugins.snippets.loader","snippet-dir","lt.plugins.snippets.loader/snippet-dir",3747021493).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.snippets.loader.loader));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return lt.objs.files.lt_user_dir.call(null,"User/snippets");
}
})();if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,snip_dir)))
{return snip_dir;
} else
{lt.objs.console.log.call(null,[cljs.core.str("Snippet dir does not exists. Creating: "),cljs.core.str(snip_dir)].join(''));
lt.objs.files.mkdir.call(null,snip_dir);
return snip_dir;
}
});
lt.plugins.snippets.loader.load_if_exists = (function load_if_exists(path,file){var fullpath = lt.objs.files.join.call(null,path,file);if(cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,fullpath)))
{return fullpath;
} else
{return clojure.string.replace.call(null,lt.objs.files.bomless_read.call(null,fullpath),/\n$/,"");
}
});
lt.plugins.snippets.loader.resolve_modes = (function resolve_modes(a,b){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"+","+",1013904285),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,(function (){var or__4884__auto__ = new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),clojure.set.union.call(null,new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(b)))),new cljs.core.Keyword(null,"-","-",1013904287),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,(function (){var or__4884__auto__ = new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),clojure.set.union.call(null,new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(b))))], null);
});
lt.plugins.snippets.loader.load_files = (function load_files(path,snipgroup){var gm = new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(snipgroup);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modes","modes",1117974178),gm,new cljs.core.Keyword(null,"helper","helper",4087939872),new cljs.core.Keyword(null,"helper","helper",4087939872).cljs$core$IFn$_invoke$arity$1(snipgroup),new cljs.core.Keyword(null,"snippets","snippets",1527719528),cljs.core.map.call(null,((function (gm){
return (function (item){var temp__4090__auto__ = new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(temp__4090__auto__))
{var sm = temp__4090__auto__;return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.snippets.loader.resolve_modes.call(null,gm,new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item)));
} else
{return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"modes","modes",1117974178),gm);
}
});})(gm))
,cljs.core.map.call(null,((function (gm){
return (function (item){var temp__4090__auto__ = new cljs.core.Keyword(null,"snippet-file","snippet-file",3582346142).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(temp__4090__auto__))
{var file = temp__4090__auto__;return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"snippet","snippet",3247236239),lt.plugins.snippets.loader.load_if_exists.call(null,lt.objs.files.parent.call(null,path),file));
} else
{return item;
}
});})(gm))
,new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snipgroup)))], null);
});
lt.plugins.snippets.loader.maybe_load_helpers = (function maybe_load_helpers(path,snipgroup){if(cljs.core.truth_((function (){var and__4872__auto__ = new cljs.core.Keyword(null,"helper","helper",4087939872).cljs$core$IFn$_invoke$arity$1(snipgroup);if(cljs.core.truth_(and__4872__auto__))
{return window.snip$;
} else
{return and__4872__auto__;
}
})()))
{lt.util.load.js.call(null,lt.objs.files.join.call(null,lt.objs.files.parent.call(null,path),new cljs.core.Keyword(null,"helper","helper",4087939872).cljs$core$IFn$_invoke$arity$1(snipgroup)),new cljs.core.Keyword(null,"sync","sync",1017449997));
} else
{}
return snipgroup;
});
lt.plugins.snippets.loader.load_one = (function load_one(path){try{return lt.plugins.snippets.loader.maybe_load_helpers.call(null,path,lt.plugins.snippets.loader.load_files.call(null,path,cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,path))));
}catch (e6662){var e = e6662;lt.objs.console.log.call(null,[cljs.core.str("Not able to read: "),cljs.core.str(path)].join(''));
return e;
}});
lt.plugins.snippets.loader.load_all = (function load_all(){return cljs.core.map.call(null,lt.plugins.snippets.loader.load_one,lt.objs.files.filter_walk.call(null,(function (path){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn");
}),lt.plugins.snippets.loader.get_snippet_dir.call(null)));
});
lt.plugins.snippets.loader.all = (function all(){return lt.plugins.snippets.loader.load_all.call(null);
});
lt.plugins.snippets.loader.degroup = (function degroup(snippets){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (snip){return new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snip);
}),snippets));
});
lt.plugins.snippets.loader.by_key = (function by_key(key,snippets){return cljs.core.filter.call(null,(function (p1__6663_SHARP_){return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__6663_SHARP_));
}),lt.plugins.snippets.loader.degroup.call(null,snippets));
});
lt.plugins.snippets.loader.satisfies_modes_QMARK_ = (function satisfies_modes_QMARK_(modes,item){if((cljs.core.seq.call(null,clojure.set.intersection.call(null,modes,new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item))))) && (cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,modes,new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item))))))
{return true;
} else
{return false;
}
});
lt.plugins.snippets.loader.by = (function() {
var by = null;
var by__2 = (function (key,snippets){return lt.plugins.snippets.loader.by_key.call(null,key,snippets);
});
var by__3 = (function (key,modes,snippets){return cljs.core.filter.call(null,cljs.core.partial.call(null,lt.plugins.snippets.loader.satisfies_modes_QMARK_,modes),lt.plugins.snippets.loader.by_key.call(null,key,snippets));
});
by = function(key,modes,snippets){
switch(arguments.length){
case 2:
return by__2.call(this,key,modes);
case 3:
return by__3.call(this,key,modes,snippets);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by.cljs$core$IFn$_invoke$arity$2 = by__2;
by.cljs$core$IFn$_invoke$arity$3 = by__3;
return by;
})()
;
lt.plugins.snippets.loader.by_mode = (function by_mode(modes,snippets){return cljs.core.filter.call(null,cljs.core.partial.call(null,lt.plugins.snippets.loader.satisfies_modes_QMARK_,modes),lt.plugins.snippets.loader.degroup.call(null,snippets));
});
lt.plugins.snippets.loader.str_contains = (function str_contains(a,b){return (a.indexOf(b) > -1);
});
lt.plugins.snippets.loader.get_shortcuts = (function get_shortcuts(){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (keygroup){return cljs.core.map.call(null,(function (km){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"shortcut","shortcut",671403960),new cljs.core.Keyword(null,"key","key",1014010321)],[cljs.core.first.call(null,keygroup),cljs.core.first.call(null,km),cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,km))))]);
}),cljs.core.filter.call(null,(function (p1__6664_SHARP_){return lt.plugins.snippets.loader.str_contains.call(null,[cljs.core.str(p1__6664_SHARP_)].join(''),":snippet.by-key");
}),cljs.core.first.call(null,cljs.core.rest.call(null,keygroup))));
}),cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.keyboard.keys))));
});
lt.plugins.snippets.loader.all_keymapped = (function all_keymapped(){var snippets = lt.plugins.snippets.loader.degroup.call(null,lt.plugins.snippets.loader.all.call(null));var shortcuts = lt.plugins.snippets.loader.get_shortcuts.call(null);return cljs.core.map.call(null,((function (snippets,shortcuts){
return (function (snip){return cljs.core.assoc.call(null,snip,new cljs.core.Keyword(null,"shortcut","shortcut",671403960),(function (){var temp__4092__auto__ = cljs.core.some.call(null,((function (snippets,shortcuts){
return (function (p1__6665_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(snip),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__6665_SHARP_)))
{return p1__6665_SHARP_;
} else
{return null;
}
});})(snippets,shortcuts))
,shortcuts);if(cljs.core.truth_(temp__4092__auto__))
{var sc = temp__4092__auto__;return new cljs.core.Keyword(null,"shortcut","shortcut",671403960).cljs$core$IFn$_invoke$arity$1(sc);
} else
{return null;
}
})());
});})(snippets,shortcuts))
,snippets);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.snippets.select-form')) {
goog.provide('lt.plugins.snippets.select_form');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.snippets.select_form.snippet_select_item = (function snippet_select_item(idx,item){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"data-snippet","data-snippet",1331916140),new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item)], null));var seq__6672_6690 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6673_6691 = null;var count__6674_6692 = 0;var i__6675_6693 = 0;while(true){
if((i__6675_6693 < count__6674_6692))
{var vec__6676_6694 = cljs.core._nth.call(null,chunk__6673_6691,i__6675_6693);var ev__6282__auto___6695 = cljs.core.nth.call(null,vec__6676_6694,0,null);var func__6283__auto___6696 = cljs.core.nth.call(null,vec__6676_6694,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6695,func__6283__auto___6696);
{
var G__6697 = seq__6672_6690;
var G__6698 = chunk__6673_6691;
var G__6699 = count__6674_6692;
var G__6700 = (i__6675_6693 + 1);
seq__6672_6690 = G__6697;
chunk__6673_6691 = G__6698;
count__6674_6692 = G__6699;
i__6675_6693 = G__6700;
continue;
}
} else
{var temp__4092__auto___6701 = cljs.core.seq.call(null,seq__6672_6690);if(temp__4092__auto___6701)
{var seq__6672_6702__$1 = temp__4092__auto___6701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6672_6702__$1))
{var c__5632__auto___6703 = cljs.core.chunk_first.call(null,seq__6672_6702__$1);{
var G__6704 = cljs.core.chunk_rest.call(null,seq__6672_6702__$1);
var G__6705 = c__5632__auto___6703;
var G__6706 = cljs.core.count.call(null,c__5632__auto___6703);
var G__6707 = 0;
seq__6672_6690 = G__6704;
chunk__6673_6691 = G__6705;
count__6674_6692 = G__6706;
i__6675_6693 = G__6707;
continue;
}
} else
{var vec__6677_6708 = cljs.core.first.call(null,seq__6672_6702__$1);var ev__6282__auto___6709 = cljs.core.nth.call(null,vec__6677_6708,0,null);var func__6283__auto___6710 = cljs.core.nth.call(null,vec__6677_6708,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6709,func__6283__auto___6710);
{
var G__6711 = cljs.core.next.call(null,seq__6672_6702__$1);
var G__6712 = null;
var G__6713 = 0;
var G__6714 = 0;
seq__6672_6690 = G__6711;
chunk__6673_6691 = G__6712;
count__6674_6692 = G__6713;
i__6675_6693 = G__6714;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});
lt.plugins.snippets.select_form.snippet_select_form = (function snippet_select_form(this$,items){var e__6281__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-select-form","div.snippet-select-form",1444741338),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.snippets.select_form.snippet_select_item,items)], null)], null));var seq__6684_6715 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6685_6716 = null;var count__6686_6717 = 0;var i__6687_6718 = 0;while(true){
if((i__6687_6718 < count__6686_6717))
{var vec__6688_6719 = cljs.core._nth.call(null,chunk__6685_6716,i__6687_6718);var ev__6282__auto___6720 = cljs.core.nth.call(null,vec__6688_6719,0,null);var func__6283__auto___6721 = cljs.core.nth.call(null,vec__6688_6719,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6720,func__6283__auto___6721);
{
var G__6722 = seq__6684_6715;
var G__6723 = chunk__6685_6716;
var G__6724 = count__6686_6717;
var G__6725 = (i__6687_6718 + 1);
seq__6684_6715 = G__6722;
chunk__6685_6716 = G__6723;
count__6686_6717 = G__6724;
i__6687_6718 = G__6725;
continue;
}
} else
{var temp__4092__auto___6726 = cljs.core.seq.call(null,seq__6684_6715);if(temp__4092__auto___6726)
{var seq__6684_6727__$1 = temp__4092__auto___6726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6684_6727__$1))
{var c__5632__auto___6728 = cljs.core.chunk_first.call(null,seq__6684_6727__$1);{
var G__6729 = cljs.core.chunk_rest.call(null,seq__6684_6727__$1);
var G__6730 = c__5632__auto___6728;
var G__6731 = cljs.core.count.call(null,c__5632__auto___6728);
var G__6732 = 0;
seq__6684_6715 = G__6729;
chunk__6685_6716 = G__6730;
count__6686_6717 = G__6731;
i__6687_6718 = G__6732;
continue;
}
} else
{var vec__6689_6733 = cljs.core.first.call(null,seq__6684_6727__$1);var ev__6282__auto___6734 = cljs.core.nth.call(null,vec__6689_6733,0,null);var func__6283__auto___6735 = cljs.core.nth.call(null,vec__6689_6733,1,null);lt.util.dom.on.call(null,e__6281__auto__,ev__6282__auto___6734,func__6283__auto___6735);
{
var G__6736 = cljs.core.next.call(null,seq__6684_6727__$1);
var G__6737 = null;
var G__6738 = 0;
var G__6739 = 0;
seq__6684_6715 = G__6736;
chunk__6685_6716 = G__6737;
count__6686_6717 = G__6738;
i__6687_6718 = G__6739;
continue;
}
}
} else
{}
}
break;
}
return e__6281__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets.select-form","inline-select-form","lt.plugins.snippets.select-form/inline-select-form",543886256),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.select.form","inline.snippet.select.form",2060814274),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.snippets.select_form.snippet_select_form.call(null,this$,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(info));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var cb_obj = new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659).cljs$core$IFn$_invoke$arity$1(info);var remove_form = ((function (content,line,cb_obj,ed,temp__4092__auto__){
return (function (this$__$1){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$__$1)).clear();
lt.object.raise.call(null,this$__$1,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$__$1);
});})(content,line,cb_obj,ed,temp__4092__auto__))
;lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),false], null))));
lt.util.dom.on.call(null,content,"keydown",((function (content,line,cb_obj,remove_form,ed,temp__4092__auto__){
return (function (ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
var snippet = lt.util.dom.attr.call(null,lt.util.dom.$.call(null,"option:checked",el),"data-snippet");remove_form.call(null,this$);
return lt.object.raise.call(null,cb_obj,new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet","snippet",3247236239),snippet], null));
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
remove_form.call(null,this$);
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
});})(content,line,cb_obj,remove_form,ed,temp__4092__auto__))
);
lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"option","option",4298734567),content),0);
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content));
return content;
} else
{return null;
}
}));
lt.plugins.snippets.select_form.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.snippets.select-form","inline-select-form","lt.plugins.snippets.select-form/inline-select-form",543886256),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.snippets')) {
goog.provide('lt.plugins.snippets');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.snippets.snippet_form');
goog.require('lt.plugins.snippets.select_form');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.plugins.auto_complete');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.snippets.loader');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.snippets.select_form');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.snippets.loader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.snippets.snippet_form');
lt.plugins.snippets.str_contains = (function str_contains(a,b){return (a.indexOf(b) > -1);
});
lt.plugins.snippets.find_pos = (function find_pos(ed,from,txt){return cljs.core.first.call(null,cljs.core.map.call(null,(function (p1__6433_SHARP_){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,p1__6433_SHARP_,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__6433_SHARP_).indexOf(txt)),new cljs.core.Keyword(null,"text","text",1017460895));
}),cljs.core.filter.call(null,(function (p1__6432_SHARP_){return lt.plugins.snippets.str_contains.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__6432_SHARP_),txt);
}),cljs.core.map.call(null,(function (p1__6431_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"text","text",1017460895)],[p1__6431_SHARP_,lt.objs.editor.line_handle.call(null,ed,p1__6431_SHARP_).text]);
}),cljs.core.range.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from),(1 + new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed))))))));
});
lt.plugins.snippets.__GT_token = (function __GT_token(ed){return lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
lt.plugins.snippets.clear_token = (function clear_token(ed){var token = lt.plugins.snippets.__GT_token.call(null,ed);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed));return lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null),"");
});
lt.plugins.snippets.snippet_by_token = (function snippet_by_token(ed){return lt.plugins.snippets.loader.by.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.snippets.__GT_token.call(null,ed)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.snippets.loader.all.call(null));
});
lt.plugins.snippets.__BEH__indent_snippet = (function __BEH__indent_snippet(this$,info){var bm = lt.objs.editor.bookmark.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"focuspos","focuspos",1066467822).cljs$core$IFn$_invoke$arity$1(info),null);lt.objs.editor.set_selection.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(info));
lt.objs.editor.indent_selection.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),"smart");
lt.objs.editor.move_cursor.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),lt.util.cljs.js__GT_clj.call(null,bm.find()));
bm.clear();
lt.objs.editor.indent_selection.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),"smart");
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets","indent-snippet","lt.plugins.snippets/indent-snippet",999113742),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.__BEH__indent_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Indent inserted snippet (and move cursor accordingly)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.indent","snippet.indent",658148879),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.snippets.__BEH__complete_snippet = (function() { 
var __BEH__complete_snippet__delegate = function (this$,ed,snippet,p__6434){var map__6436 = p__6434;var map__6436__$1 = ((cljs.core.seq_QMARK_.call(null,map__6436))?cljs.core.apply.call(null,cljs.core.hash_map,map__6436):map__6436);var no_indent = cljs.core.get.call(null,map__6436__$1,new cljs.core.Keyword(null,"no-indent","no-indent",4334515626),false);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"from","from",1017056028),pos], null);var cur = ((function (pos,info,map__6436,map__6436__$1,no_indent){
return (function (e){return lt.objs.editor.__GT_cursor.call(null,e);
});})(pos,info,map__6436,map__6436__$1,no_indent))
;lt.objs.editor.insert_at_cursor.call(null,ed,snippet);
if(!(lt.plugins.snippets.str_contains.call(null,snippet,"$0")))
{if(cljs.core.truth_(no_indent))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"snippet.indent","snippet.indent",658148879),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"to","to",1013907949),cur.call(null,ed),new cljs.core.Keyword(null,"focuspos","focuspos",1066467822),cur.call(null,ed)));
}
} else
{var temp__4092__auto__ = lt.plugins.snippets.find_pos.call(null,ed,pos,"$0");if(cljs.core.truth_(temp__4092__auto__))
{var cursor = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,cursor,cljs.core.update_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core._PLUS_,2),"");
if(cljs.core.not.call(null,no_indent))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"snippet.indent","snippet.indent",658148879),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"to","to",1013907949),cur.call(null,ed),new cljs.core.Keyword(null,"focuspos","focuspos",1066467822),cursor));
} else
{return lt.objs.editor.move_cursor.call(null,ed,cursor);
}
} else
{return null;
}
}
};
var __BEH__complete_snippet = function (this$,ed,snippet,var_args){
var p__6434 = null;if (arguments.length > 3) {
  p__6434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return __BEH__complete_snippet__delegate.call(this,this$,ed,snippet,p__6434);};
__BEH__complete_snippet.cljs$lang$maxFixedArity = 3;
__BEH__complete_snippet.cljs$lang$applyTo = (function (arglist__6454){
var this$ = cljs.core.first(arglist__6454);
arglist__6454 = cljs.core.next(arglist__6454);
var ed = cljs.core.first(arglist__6454);
arglist__6454 = cljs.core.next(arglist__6454);
var snippet = cljs.core.first(arglist__6454);
var p__6434 = cljs.core.rest(arglist__6454);
return __BEH__complete_snippet__delegate(this$,ed,snippet,p__6434);
});
__BEH__complete_snippet.cljs$core$IFn$_invoke$arity$variadic = __BEH__complete_snippet__delegate;
return __BEH__complete_snippet;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets","complete-snippet","lt.plugins.snippets/complete-snippet",2564368351),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.__BEH__complete_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Insert a completed snippet into the given editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.complete","snippet.complete",2018711132),null], null), null));
lt.plugins.snippets.__BEH__initiate_snippet = (function __BEH__initiate_snippet(this$,ed,item){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item);if(lt.plugins.snippets.snippet_form.tabstops_QMARK_.call(null,snippet))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"snippet.complete","snippet.complete",2018711132),ed,snippet);
} else
{return lt.plugins.snippets.snippet_form.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659),this$,new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets","initiate-snippet","lt.plugins.snippets/initiate-snippet",3495172863),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.__BEH__initiate_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Display snippet form if snippet template contains tabstops, otherwise insert directly",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),null], null), null));
lt.plugins.snippets.__BEH__maybe_select_snippet = (function __BEH__maybe_select_snippet(this$,ed,items){if(cljs.core.seq.call(null,items))
{if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,items)))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),ed,cljs.core.first.call(null,items));
} else
{return lt.plugins.snippets.select_form.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659),this$,new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"items","items",1114430258),items], null));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets","maybe-select-snippet","lt.plugins.snippets/maybe-select-snippet",4489030839),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.__BEH__maybe_select_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Prompt for snippet selection if multiple given, otherwise initiate snippet",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.select.maybe","snippet.select.maybe",620955033),null], null), null));
lt.plugins.snippets.__BEH__use_local_hints = (function __BEH__use_local_hints(editor,hints,token){if(cljs.core.not_EQ_.call(null,token,new cljs.core.Keyword("lt.plugins.snippets","token","lt.plugins.snippets/token",4093519631).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.snippets","token","lt.plugins.snippets/token",4093519631),token], null));
lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
return cljs.core.concat.call(null,hints,lt.plugins.snippets.snip_hints.call(null,editor));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets","use-local-hints","lt.plugins.snippets/use-local-hints",4230851014),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.__BEH__use_local_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Enables applicable snippets to be shown in autocomplete",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets","snippets","lt.plugins.snippets/snippets",4496600588),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippets","snippets",1527719528)], null),new cljs.core.Keyword(null,"name","name",1017277949),"snippets");
lt.plugins.snippets.snip = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.snippets","snippets","lt.plugins.snippets/snippets",4496600588));
lt.plugins.snippets.sel_cb = (function sel_cb(ed,fun,c){fun.call(null,"");
return lt.object.raise.call(null,lt.plugins.snippets.snip,new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),ed,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,c),"item"));
});
lt.plugins.snippets.snip_hints = (function snip_hints(ed){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6437_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{"item": p1__6437_SHARP_, "completion": new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__6437_SHARP_), "text": [cljs.core.str(new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__6437_SHARP_)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__6437_SHARP_)),cljs.core.str(" (snip)")].join(''), "select": cljs.core.partial.call(null,lt.plugins.snippets.sel_cb,ed)}], null));
}),lt.plugins.snippets.loader.by_mode.call(null,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.snippets.loader.all.call(null))));
});
lt.plugins.snippets.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.snippets","set-selected","lt.plugins.snippets/set-selected",2831160508),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.snippets.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.snippets.selector = (function selector(opts){var G__6439 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__6439,new cljs.core.Keyword("lt.plugins.snippets","set-selected","lt.plugins.snippets/set-selected",2831160508));
return G__6439;
});
lt.plugins.snippets.add_selector = lt.plugins.snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.snippets.loader.all_keymapped,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__6441_SHARP_,p2__6442_SHARP_,p3__6443_SHARP_,p4__6440_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__6440_SHARP_)),cljs.core.str("</p>"),cljs.core.str("<p class='binding'>"),cljs.core.str([cljs.core.str("<b>Key</b>: "),cljs.core.str(new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p4__6440_SHARP_)),cljs.core.str((function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"shortcut","shortcut",671403960).cljs$core$IFn$_invoke$arity$1(p4__6440_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var km = temp__4092__auto__;return [cljs.core.str(" <b>keymap</b>: "),cljs.core.str(km)].join('');
} else
{return null;
}
})()),cljs.core.str("</p>")].join(''))].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Select snippet",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.object.raise.call(null,lt.plugins.snippets.snip,new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),lt.objs.editor.pool.last_active.call(null),item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by-token","snippet.by-token",3027493414),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Expand by editor token",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = cljs.core.seq.call(null,lt.plugins.snippets.snippet_by_token.call(null,ed));if(temp__4092__auto____$1)
{var items = temp__4092__auto____$1;lt.plugins.snippets.clear_token.call(null,ed);
return lt.object.raise.call(null,lt.plugins.snippets.snip,new cljs.core.Keyword(null,"snippet.select.maybe","snippet.select.maybe",620955033),ed,items);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by-key","snippet.by-key",4761237836),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Invoke snippet by its key (and editor tag)",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,lt.plugins.snippets.snip,new cljs.core.Keyword(null,"snippet.select.maybe","snippet.select.maybe",620955033),ed,lt.plugins.snippets.loader.by.call(null,key,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.snippets.loader.all.call(null)));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=snippets_compiled.js.map