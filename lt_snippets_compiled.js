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
lt.plugins.lt_snippets.get_tabstops = (function get_tabstops(snippet){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__12121_SHARP_){return !(cljs.core._EQ_.call(null,p1__12121_SHARP_,"$0"));
}),cljs.core.re_seq.call(null,/\$\d+/,snippet)));
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
var G__12160 = clojure.string.replace.call(null,clojure.string.replace_first.call(null,snippet__$1,tabstop,lt.plugins.lt_snippets.tabstop_to_input.call(null,tabstop)),tabstop,lt.plugins.lt_snippets.tabstop_to_mirror.call(null,tabstop));
var G__12161 = cljs.core.rest.call(null,tabstops__$1);
snippet__$1 = G__12160;
tabstops__$1 = G__12161;
continue;
}
} else
{return null;
}
}
break;
}
});
lt.plugins.lt_snippets.snippet_form = (function snippet_form(this$,info){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__12128_12162 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
})], null)));var chunk__12129_12163 = null;var count__12130_12164 = 0;var i__12131_12165 = 0;while(true){
if((i__12131_12165 < count__12130_12164))
{var vec__12132_12166 = cljs.core._nth.call(null,chunk__12129_12163,i__12131_12165);var ev__8190__auto___12167 = cljs.core.nth.call(null,vec__12132_12166,0,null);var func__8191__auto___12168 = cljs.core.nth.call(null,vec__12132_12166,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___12167,func__8191__auto___12168);
{
var G__12169 = seq__12128_12162;
var G__12170 = chunk__12129_12163;
var G__12171 = count__12130_12164;
var G__12172 = (i__12131_12165 + 1);
seq__12128_12162 = G__12169;
chunk__12129_12163 = G__12170;
count__12130_12164 = G__12171;
i__12131_12165 = G__12172;
continue;
}
} else
{var temp__4092__auto___12173 = cljs.core.seq.call(null,seq__12128_12162);if(temp__4092__auto___12173)
{var seq__12128_12174__$1 = temp__4092__auto___12173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12128_12174__$1))
{var c__7561__auto___12175 = cljs.core.chunk_first.call(null,seq__12128_12174__$1);{
var G__12176 = cljs.core.chunk_rest.call(null,seq__12128_12174__$1);
var G__12177 = c__7561__auto___12175;
var G__12178 = cljs.core.count.call(null,c__7561__auto___12175);
var G__12179 = 0;
seq__12128_12162 = G__12176;
chunk__12129_12163 = G__12177;
count__12130_12164 = G__12178;
i__12131_12165 = G__12179;
continue;
}
} else
{var vec__12133_12180 = cljs.core.first.call(null,seq__12128_12174__$1);var ev__8190__auto___12181 = cljs.core.nth.call(null,vec__12133_12180,0,null);var func__8191__auto___12182 = cljs.core.nth.call(null,vec__12133_12180,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___12181,func__8191__auto___12182);
{
var G__12183 = cljs.core.next.call(null,seq__12128_12174__$1);
var G__12184 = null;
var G__12185 = 0;
var G__12186 = 0;
seq__12128_12162 = G__12183;
chunk__12129_12163 = G__12184;
count__12130_12164 = G__12185;
i__12131_12165 = G__12186;
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
lt.plugins.lt_snippets.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__12136){var vec__12137 = p__12136;var k = cljs.core.nth.call(null,vec__12137,0,null);var v = cljs.core.nth.call(null,vec__12137,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.lt_snippets.set_mirrored_values = (function set_mirrored_values(form,el){var c = el.className;var v = lt.util.dom.html.call(null,el);var seq__12142 = cljs.core.seq.call(null,cljs.core.rest.call(null,lt.util.dom.$$.call(null,[cljs.core.str("span."),cljs.core.str(c)].join(''),form)));var chunk__12143 = null;var count__12144 = 0;var i__12145 = 0;while(true){
if((i__12145 < count__12144))
{var mirr = cljs.core._nth.call(null,chunk__12143,i__12145);lt.util.dom.html.call(null,mirr,v);
{
var G__12187 = seq__12142;
var G__12188 = chunk__12143;
var G__12189 = count__12144;
var G__12190 = (i__12145 + 1);
seq__12142 = G__12187;
chunk__12143 = G__12188;
count__12144 = G__12189;
i__12145 = G__12190;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12142);if(temp__4092__auto__)
{var seq__12142__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12142__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__12142__$1);{
var G__12191 = cljs.core.chunk_rest.call(null,seq__12142__$1);
var G__12192 = c__7561__auto__;
var G__12193 = cljs.core.count.call(null,c__7561__auto__);
var G__12194 = 0;
seq__12142 = G__12191;
chunk__12143 = G__12192;
count__12144 = G__12193;
i__12145 = G__12194;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__12142__$1);lt.util.dom.html.call(null,mirr,v);
{
var G__12195 = cljs.core.next.call(null,seq__12142__$1);
var G__12196 = null;
var G__12197 = 0;
var G__12198 = 0;
seq__12142 = G__12195;
chunk__12143 = G__12196;
count__12144 = G__12197;
i__12145 = G__12198;
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
lt.plugins.lt_snippets.complete_snippet = (function complete_snippet(this$,ed,form){var inputs = lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),form);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(inputs))
{var kv = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__12146_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[clojure.string.replace.call(null,p1__12146_SHARP_.className,/snipvar-/,"$")],[lt.util.dom.html.call(null,p1__12146_SHARP_)]);
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
var seq__12147_12199 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),content));var chunk__12148_12200 = null;var count__12149_12201 = 0;var i__12150_12202 = 0;while(true){
if((i__12150_12202 < count__12149_12201))
{var el_12203 = cljs.core._nth.call(null,chunk__12148_12200,i__12150_12202);lt.util.dom.on.call(null,el_12203,"keyup",((function (seq__12147_12199,chunk__12148_12200,count__12149_12201,i__12150_12202,el_12203){
return (function (ev){return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
});})(seq__12147_12199,chunk__12148_12200,count__12149_12201,i__12150_12202,el_12203))
);
{
var G__12204 = seq__12147_12199;
var G__12205 = chunk__12148_12200;
var G__12206 = count__12149_12201;
var G__12207 = (i__12150_12202 + 1);
seq__12147_12199 = G__12204;
chunk__12148_12200 = G__12205;
count__12149_12201 = G__12206;
i__12150_12202 = G__12207;
continue;
}
} else
{var temp__4092__auto___12208__$1 = cljs.core.seq.call(null,seq__12147_12199);if(temp__4092__auto___12208__$1)
{var seq__12147_12209__$1 = temp__4092__auto___12208__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12147_12209__$1))
{var c__7561__auto___12210 = cljs.core.chunk_first.call(null,seq__12147_12209__$1);{
var G__12211 = cljs.core.chunk_rest.call(null,seq__12147_12209__$1);
var G__12212 = c__7561__auto___12210;
var G__12213 = cljs.core.count.call(null,c__7561__auto___12210);
var G__12214 = 0;
seq__12147_12199 = G__12211;
chunk__12148_12200 = G__12212;
count__12149_12201 = G__12213;
i__12150_12202 = G__12214;
continue;
}
} else
{var el_12215 = cljs.core.first.call(null,seq__12147_12209__$1);lt.util.dom.on.call(null,el_12215,"keyup",((function (seq__12147_12199,chunk__12148_12200,count__12149_12201,i__12150_12202,el_12215,seq__12147_12209__$1,temp__4092__auto___12208__$1){
return (function (ev){return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
});})(seq__12147_12199,chunk__12148_12200,count__12149_12201,i__12150_12202,el_12215,seq__12147_12209__$1,temp__4092__auto___12208__$1))
);
{
var G__12216 = cljs.core.next.call(null,seq__12147_12209__$1);
var G__12217 = null;
var G__12218 = 0;
var G__12219 = 0;
seq__12147_12199 = G__12216;
chunk__12148_12200 = G__12217;
count__12149_12201 = G__12218;
i__12150_12202 = G__12219;
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
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),content));
return content;
} else
{return null;
}
}));
lt.plugins.lt_snippets.snippet_dir = lt.objs.files.lt_user_dir.call(null,"snippets");
lt.plugins.lt_snippets.read_snippets = (function read_snippets(){return cljs.core.partial.call(null,cljs.core.mapcat,cljs.core.identity).call(null,cljs.core.partial.call(null,cljs.core.map,(function (p1__12152_SHARP_){return cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,lt.objs.files.join.call(null,lt.plugins.lt_snippets.snippet_dir,p1__12152_SHARP_)));
})).call(null,cljs.core.filter.call(null,(function (p1__12151_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__12151_SHARP_),"edn");
}),lt.objs.files.ls_sync.call(null,lt.plugins.lt_snippets.snippet_dir))));
});
lt.plugins.lt_snippets.snippet_by_key = (function snippet_by_key(key){return cljs.core.some.call(null,(function (p1__12153_SHARP_){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__12153_SHARP_)))
{return p1__12153_SHARP_;
} else
{return null;
}
}),lt.plugins.lt_snippets.read_snippets.call(null));
});
lt.plugins.lt_snippets.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.lt_snippets.selector = (function selector(opts){var G__12155 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__12155,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608));
return G__12155;
});
lt.plugins.lt_snippets.add_selector = lt.plugins.lt_snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.lt_snippets.read_snippets,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__12158_SHARP_,p2__12159_SHARP_,p3__12156_SHARP_,p4__12157_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__12156_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__12157_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.lt_snippets.insert_snippet = (function insert_snippet(item){var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.empty_QMARK_.call(null,lt.plugins.lt_snippets.get_tabstops.call(null,snippet)))
{lt.objs.editor.insert_at_cursor.call(null,ed,snippet);
return lt.plugins.lt_snippets.find_line_containing.call(null,ed,"$0",(function (line_no){var ch = lt.objs.editor.line.call(null,ed,line_no).indexOf("$0");lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),(2 + ch)], null),"");
lt.objs.editor.set_selection.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed));
lt.objs.editor.indent_selection.call(null,ed,"smart");
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null));
}));
} else
{return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Select snippet to invoke",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.lt_snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.plugins.lt_snippets.insert_snippet.call(null,item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_key","snippet.by_key",4762727386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Invoke snippet by its key",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){return lt.plugins.lt_snippets.insert_snippet.call(null,lt.plugins.lt_snippets.snippet_by_key.call(null,key));
})], null));
}

//# sourceMappingURL=lt_snippets_compiled.js.map