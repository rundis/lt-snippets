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
goog.require('lt.objs.keyboard');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-snippets","lt-snippets",3973666061)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-snippets","show-snippet-hints","lt.plugins.lt-snippets/show-snippet-hints",2213282386)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-snippets");
lt.plugins.lt_snippets.snippets = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611));
lt.plugins.lt_snippets.get_tabstops = (function get_tabstops(snippet){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__37760_SHARP_){return !(cljs.core._EQ_.call(null,p1__37760_SHARP_,"$0"));
}),cljs.core.re_seq.call(null,/\$\d+/,snippet)));
});
lt.plugins.lt_snippets.tabstops_QMARK_ = (function tabstops_QMARK_(snippet){return cljs.core.empty_QMARK_.call(null,lt.plugins.lt_snippets.get_tabstops.call(null,snippet));
});
lt.plugins.lt_snippets.tabstop_to_input = (function tabstop_to_input(tabstop){return [cljs.core.str("<span contenteditable='true' data-ph='"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","#")),cljs.core.str("' class='snipvar-"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","")),cljs.core.str("'></span>")].join('');
});
lt.plugins.lt_snippets.tabstop_to_mirror = (function tabstop_to_mirror(tabstop){return [cljs.core.str("<span class='snipvar-"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","")),cljs.core.str("'"),cljs.core.str("></span>")].join('');
});
lt.plugins.lt_snippets.snippet_to_form = (function snippet_to_form(snippet,tabstops){var snippet__$1 = clojure.string.replace.call(null,snippet,"$0","");var tabstops__$1 = tabstops;while(true){
if(cljs.core.empty_QMARK_.call(null,tabstops__$1))
{return snippet__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var tabstop = cljs.core.first.call(null,tabstops__$1);{
var G__37796 = clojure.string.replace.call(null,clojure.string.replace_first.call(null,snippet__$1,tabstop,lt.plugins.lt_snippets.tabstop_to_input.call(null,tabstop)),tabstop,lt.plugins.lt_snippets.tabstop_to_mirror.call(null,tabstop));
var G__37797 = cljs.core.rest.call(null,tabstops__$1);
snippet__$1 = G__37796;
tabstops__$1 = G__37797;
continue;
}
} else
{return null;
}
}
break;
}
});
lt.plugins.lt_snippets.snippet_form = (function snippet_form(this$,info){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__37767_37798 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907))));
return lt.util.dom.prevent.call(null,e);
})], null)));var chunk__37768_37799 = null;var count__37769_37800 = 0;var i__37770_37801 = 0;while(true){
if((i__37770_37801 < count__37769_37800))
{var vec__37771_37802 = cljs.core._nth.call(null,chunk__37768_37799,i__37770_37801);var ev__8190__auto___37803 = cljs.core.nth.call(null,vec__37771_37802,0,null);var func__8191__auto___37804 = cljs.core.nth.call(null,vec__37771_37802,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___37803,func__8191__auto___37804);
{
var G__37805 = seq__37767_37798;
var G__37806 = chunk__37768_37799;
var G__37807 = count__37769_37800;
var G__37808 = (i__37770_37801 + 1);
seq__37767_37798 = G__37805;
chunk__37768_37799 = G__37806;
count__37769_37800 = G__37807;
i__37770_37801 = G__37808;
continue;
}
} else
{var temp__4092__auto___37809 = cljs.core.seq.call(null,seq__37767_37798);if(temp__4092__auto___37809)
{var seq__37767_37810__$1 = temp__4092__auto___37809;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37767_37810__$1))
{var c__7561__auto___37811 = cljs.core.chunk_first.call(null,seq__37767_37810__$1);{
var G__37812 = cljs.core.chunk_rest.call(null,seq__37767_37810__$1);
var G__37813 = c__7561__auto___37811;
var G__37814 = cljs.core.count.call(null,c__7561__auto___37811);
var G__37815 = 0;
seq__37767_37798 = G__37812;
chunk__37768_37799 = G__37813;
count__37769_37800 = G__37814;
i__37770_37801 = G__37815;
continue;
}
} else
{var vec__37772_37816 = cljs.core.first.call(null,seq__37767_37810__$1);var ev__8190__auto___37817 = cljs.core.nth.call(null,vec__37772_37816,0,null);var func__8191__auto___37818 = cljs.core.nth.call(null,vec__37772_37816,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___37817,func__8191__auto___37818);
{
var G__37819 = cljs.core.next.call(null,seq__37767_37810__$1);
var G__37820 = null;
var G__37821 = 0;
var G__37822 = 0;
seq__37767_37798 = G__37819;
chunk__37768_37799 = G__37820;
count__37769_37800 = G__37821;
i__37770_37801 = G__37822;
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
lt.plugins.lt_snippets.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__37775){var vec__37776 = p__37775;var k = cljs.core.nth.call(null,vec__37776,0,null);var v = cljs.core.nth.call(null,vec__37776,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.lt_snippets.set_mirrored_values = (function set_mirrored_values(form,el){var c = el.className;var v = lt.util.dom.html.call(null,el);var seq__37781 = cljs.core.seq.call(null,cljs.core.rest.call(null,lt.util.dom.$$.call(null,[cljs.core.str("span."),cljs.core.str(c)].join(''),form)));var chunk__37782 = null;var count__37783 = 0;var i__37784 = 0;while(true){
if((i__37784 < count__37783))
{var mirr = cljs.core._nth.call(null,chunk__37782,i__37784);lt.util.dom.html.call(null,mirr,v);
{
var G__37823 = seq__37781;
var G__37824 = chunk__37782;
var G__37825 = count__37783;
var G__37826 = (i__37784 + 1);
seq__37781 = G__37823;
chunk__37782 = G__37824;
count__37783 = G__37825;
i__37784 = G__37826;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37781);if(temp__4092__auto__)
{var seq__37781__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37781__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__37781__$1);{
var G__37827 = cljs.core.chunk_rest.call(null,seq__37781__$1);
var G__37828 = c__7561__auto__;
var G__37829 = cljs.core.count.call(null,c__7561__auto__);
var G__37830 = 0;
seq__37781 = G__37827;
chunk__37782 = G__37828;
count__37783 = G__37829;
i__37784 = G__37830;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__37781__$1);lt.util.dom.html.call(null,mirr,v);
{
var G__37831 = cljs.core.next.call(null,seq__37781__$1);
var G__37832 = null;
var G__37833 = 0;
var G__37834 = 0;
seq__37781 = G__37831;
chunk__37782 = G__37832;
count__37783 = G__37833;
i__37784 = G__37834;
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
lt.plugins.lt_snippets.form_to_snippet = (function form_to_snippet(form,snippet){var temp__4092__auto__ = lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),form);if(cljs.core.truth_(temp__4092__auto__))
{var inputs = temp__4092__auto__;return lt.plugins.lt_snippets.map_replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__37785_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[clojure.string.replace.call(null,p1__37785_SHARP_.className,/snipvar-/,"$")],[lt.util.dom.html.call(null,p1__37785_SHARP_)]);
}),inputs)),snippet);
} else
{return null;
}
});
lt.plugins.lt_snippets.indent_and_move = (function indent_and_move(ed,from,to,focus){lt.objs.editor.set_selection.call(null,ed,from,to);
lt.objs.editor.indent_selection.call(null,ed,"smart");
return lt.objs.editor.move_cursor.call(null,ed,focus);
});
lt.plugins.lt_snippets.complete_snippet = (function complete_snippet(ed,snippet){var pos = lt.objs.editor.__GT_cursor.call(null,ed);lt.objs.editor.insert_at_cursor.call(null,ed,snippet);
if(cljs.core.not.call(null,snippet.contains("$0")))
{return lt.plugins.lt_snippets.indent_and_move.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed),lt.objs.editor.__GT_cursor.call(null,ed));
} else
{return lt.plugins.lt_snippets.find_line_containing.call(null,ed,"$0",(function (line_no){var ch = lt.objs.editor.line.call(null,ed,line_no).indexOf("$0");lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),(2 + ch)], null),"");
return lt.plugins.lt_snippets.indent_and_move.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null));
}));
}
});
lt.plugins.lt_snippets.complete_snippet_form = (function complete_snippet_form(this$,ed,form){var snip = lt.plugins.lt_snippets.form_to_snippet.call(null,form,new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
lt.objs.editor.focus.call(null,ed);
return lt.plugins.lt_snippets.complete_snippet.call(null,ed,snip);
});
lt.plugins.lt_snippets.insert_snippet = (function insert_snippet(item){if(cljs.core.truth_(item))
{var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item);if(lt.plugins.lt_snippets.tabstops_QMARK_.call(null,snippet))
{return lt.plugins.lt_snippets.complete_snippet.call(null,ed,snippet);
} else
{return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));
}
} else
{return null;
}
});
lt.plugins.lt_snippets.last_tabstop_QMARK_ = (function last_tabstop_QMARK_(form,el){return cljs.core._EQ_.call(null,el.className,cljs.core.last.call(null,lt.util.dom.$$.call(null,"span[contenteditable=true]",form)).className);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.form","inline.snippet.form",3354835868),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.lt_snippets.snippet_form.call(null,this$,info);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(info));lt.util.dom.html.call(null,content,lt.plugins.lt_snippets.snippet_to_form.call(null,snippet,lt.plugins.lt_snippets.get_tabstops.call(null,snippet)));
lt.util.dom.on.call(null,content,"keyup",(function (ev){return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
}));
lt.util.dom.on.call(null,content,"keydown",(function (ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
return lt.plugins.lt_snippets.complete_snippet_form.call(null,this$,ed,content);
} else
{if(cljs.core._EQ_.call(null,9,kc))
{if(lt.plugins.lt_snippets.last_tabstop_QMARK_.call(null,content,el))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
return lt.plugins.lt_snippets.complete_snippet_form.call(null,this$,ed,content);
} else
{return null;
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
}));
lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),true], null))));
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),content));
return content;
} else
{return null;
}
}));
lt.plugins.lt_snippets.snippet_dir = lt.objs.files.lt_user_dir.call(null,"snippets");
lt.plugins.lt_snippets.load_snippets = (function load_snippets(path,snipgroup){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(snipgroup),new cljs.core.Keyword(null,"snippets","snippets",1527719528),cljs.core.map.call(null,(function (item){var temp__4090__auto__ = new cljs.core.Keyword(null,"snippet-file","snippet-file",3582346142).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(temp__4090__auto__))
{var file = temp__4090__auto__;return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"snippet","snippet",3247236239),lt.objs.files.bomless_read.call(null,lt.objs.files.join.call(null,path,file)));
} else
{return item;
}
}),new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snipgroup))], null);
});
lt.plugins.lt_snippets.load_snippet_definition = (function load_snippet_definition(path){return cljs.core.partial.call(null,lt.plugins.lt_snippets.load_snippets,lt.objs.files.parent.call(null,path)).call(null,cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,path)));
});
lt.plugins.lt_snippets.load_snippet_definitions = (function load_snippet_definitions(){return cljs.core.partial.call(null,cljs.core.map,lt.plugins.lt_snippets.load_snippet_definition).call(null,lt.objs.files.filter_walk.call(null,(function (path){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn");
}),lt.plugins.lt_snippets.snippet_dir));
});
lt.plugins.lt_snippets.degroup_snippets = (function degroup_snippets(snippets){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (snip){return new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snip);
}),snippets));
});
lt.plugins.lt_snippets.snippet_by_key = (function snippet_by_key(key,snippets){return cljs.core.some.call(null,(function (p1__37786_SHARP_){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__37786_SHARP_)))
{return p1__37786_SHARP_;
} else
{return null;
}
}),lt.plugins.lt_snippets.degroup_snippets.call(null,snippets));
});
lt.plugins.lt_snippets.snippet_by = (function() {
var snippet_by = null;
var snippet_by__2 = (function (key,snippets){return lt.plugins.lt_snippets.snippet_by_key.call(null,key,snippets);
});
var snippet_by__3 = (function (key,modes,snippets){return lt.plugins.lt_snippets.snippet_by_key.call(null,key,cljs.core.filter.call(null,(function (p1__37787_SHARP_){return cljs.core.contains_QMARK_.call(null,modes,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(p1__37787_SHARP_)));
}),snippets));
});
snippet_by = function(key,modes,snippets){
switch(arguments.length){
case 2:
return snippet_by__2.call(this,key,modes);
case 3:
return snippet_by__3.call(this,key,modes,snippets);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snippet_by.cljs$core$IFn$_invoke$arity$2 = snippet_by__2;
snippet_by.cljs$core$IFn$_invoke$arity$3 = snippet_by__3;
return snippet_by;
})()
;
lt.plugins.lt_snippets.get_snippet_shortcuts = (function get_snippet_shortcuts(){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (keygroup){return cljs.core.map.call(null,(function (km){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"shortcut","shortcut",671403960),new cljs.core.Keyword(null,"key","key",1014010321)],[cljs.core.first.call(null,keygroup),cljs.core.first.call(null,km),cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,km))))]);
}),cljs.core.filter.call(null,(function (p1__37788_SHARP_){return [cljs.core.str(p1__37788_SHARP_)].join('').contains(":snippet.by_key");
}),cljs.core.first.call(null,cljs.core.rest.call(null,keygroup))));
}),cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.keyboard.keys))));
});
lt.plugins.lt_snippets.get_snippets = (function get_snippets(){var snippets = lt.plugins.lt_snippets.degroup_snippets.call(null,lt.plugins.lt_snippets.load_snippet_definitions.call(null));var shortcuts = lt.plugins.lt_snippets.get_snippet_shortcuts.call(null);return cljs.core.map.call(null,(function (snip){return cljs.core.assoc.call(null,snip,new cljs.core.Keyword(null,"shortcut","shortcut",671403960),(function (){var temp__4092__auto__ = cljs.core.some.call(null,(function (p1__37789_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(snip),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__37789_SHARP_)))
{return p1__37789_SHARP_;
} else
{return null;
}
}),shortcuts);if(cljs.core.truth_(temp__4092__auto__))
{var sc = temp__4092__auto__;return new cljs.core.Keyword(null,"shortcut","shortcut",671403960).cljs$core$IFn$_invoke$arity$1(sc);
} else
{return null;
}
})());
}),snippets);
});
lt.plugins.lt_snippets.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.lt_snippets.selector = (function selector(opts){var G__37791 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__37791,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608));
return G__37791;
});
lt.plugins.lt_snippets.add_selector = lt.plugins.lt_snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.lt_snippets.get_snippets,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__37794_SHARP_,p2__37795_SHARP_,p3__37793_SHARP_,p4__37792_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__37792_SHARP_)),cljs.core.str("</p>"),cljs.core.str("<p class='binding'>"),cljs.core.str([cljs.core.str("Key: "),cljs.core.str(p3__37793_SHARP_),cljs.core.str((function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"shortcut","shortcut",671403960).cljs$core$IFn$_invoke$arity$1(p4__37792_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var km = temp__4092__auto__;return [cljs.core.str(" keymap: "),cljs.core.str(km)].join('');
} else
{return null;
}
})()),cljs.core.str("</p>")].join(''))].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Select snippet",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.lt_snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.plugins.lt_snippets.insert_snippet.call(null,item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_key","snippet.by_key",4762727386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Invoke snippet by its key (and editor tag)",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){var ed = lt.objs.editor.pool.last_active.call(null);var snippets = lt.plugins.lt_snippets.load_snippet_definitions.call(null);if(cljs.core.truth_(ed))
{return lt.plugins.lt_snippets.insert_snippet.call(null,lt.plugins.lt_snippets.snippet_by.call(null,key,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),snippets));
} else
{return lt.plugins.lt_snippets.insert_snippet.call(null,lt.plugins.lt_snippets.snippet_by.call(null,key,snippets));
}
})], null));
lt.plugins.lt_snippets.__GT_token = (function __GT_token(ed){return lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
lt.plugins.lt_snippets.clear_token = (function clear_token(ed){var token = lt.plugins.lt_snippets.__GT_token.call(null,ed);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed));return lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"stop","stop",1017445236).cljs$core$IFn$_invoke$arity$1(token)], null),"");
});
lt.plugins.lt_snippets.snippet_by_token = (function snippet_by_token(ed){return lt.plugins.lt_snippets.snippet_by.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.lt_snippets.__GT_token.call(null,ed)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.lt_snippets.load_snippet_definitions.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_token","snippet.by_token",4458950964),new cljs.core.Keyword(null,"desc","desc",1016984067),"Expand snippet by editor token",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.lt_snippets.snippet_by_token.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var item = temp__4092__auto____$1;lt.plugins.lt_snippets.clear_token.call(null,ed);
return lt.plugins.lt_snippets.insert_snippet.call(null,item);
} else
{return null;
}
} else
{return null;
}
})], null));
}

//# sourceMappingURL=lt_snippets_compiled.js.map