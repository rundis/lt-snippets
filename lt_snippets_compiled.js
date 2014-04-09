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
lt.plugins.lt_snippets.get_tabstops = (function get_tabstops(snippet){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__27151_SHARP_){return !(cljs.core._EQ_.call(null,p1__27151_SHARP_,"$0"));
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
var G__27193 = clojure.string.replace.call(null,clojure.string.replace_first.call(null,snippet__$1,tabstop,lt.plugins.lt_snippets.tabstop_to_input.call(null,tabstop)),tabstop,lt.plugins.lt_snippets.tabstop_to_mirror.call(null,tabstop));
var G__27194 = cljs.core.rest.call(null,tabstops__$1);
snippet__$1 = G__27193;
tabstops__$1 = G__27194;
continue;
}
} else
{return null;
}
}
break;
}
});
lt.plugins.lt_snippets.snippet_form = (function snippet_form(this$,info){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__27158_27195 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
})], null)));var chunk__27159_27196 = null;var count__27160_27197 = 0;var i__27161_27198 = 0;while(true){
if((i__27161_27198 < count__27160_27197))
{var vec__27162_27199 = cljs.core._nth.call(null,chunk__27159_27196,i__27161_27198);var ev__8190__auto___27200 = cljs.core.nth.call(null,vec__27162_27199,0,null);var func__8191__auto___27201 = cljs.core.nth.call(null,vec__27162_27199,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___27200,func__8191__auto___27201);
{
var G__27202 = seq__27158_27195;
var G__27203 = chunk__27159_27196;
var G__27204 = count__27160_27197;
var G__27205 = (i__27161_27198 + 1);
seq__27158_27195 = G__27202;
chunk__27159_27196 = G__27203;
count__27160_27197 = G__27204;
i__27161_27198 = G__27205;
continue;
}
} else
{var temp__4092__auto___27206 = cljs.core.seq.call(null,seq__27158_27195);if(temp__4092__auto___27206)
{var seq__27158_27207__$1 = temp__4092__auto___27206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27158_27207__$1))
{var c__7561__auto___27208 = cljs.core.chunk_first.call(null,seq__27158_27207__$1);{
var G__27209 = cljs.core.chunk_rest.call(null,seq__27158_27207__$1);
var G__27210 = c__7561__auto___27208;
var G__27211 = cljs.core.count.call(null,c__7561__auto___27208);
var G__27212 = 0;
seq__27158_27195 = G__27209;
chunk__27159_27196 = G__27210;
count__27160_27197 = G__27211;
i__27161_27198 = G__27212;
continue;
}
} else
{var vec__27163_27213 = cljs.core.first.call(null,seq__27158_27207__$1);var ev__8190__auto___27214 = cljs.core.nth.call(null,vec__27163_27213,0,null);var func__8191__auto___27215 = cljs.core.nth.call(null,vec__27163_27213,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___27214,func__8191__auto___27215);
{
var G__27216 = cljs.core.next.call(null,seq__27158_27207__$1);
var G__27217 = null;
var G__27218 = 0;
var G__27219 = 0;
seq__27158_27195 = G__27216;
chunk__27159_27196 = G__27217;
count__27160_27197 = G__27218;
i__27161_27198 = G__27219;
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
lt.plugins.lt_snippets.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__27166){var vec__27167 = p__27166;var k = cljs.core.nth.call(null,vec__27167,0,null);var v = cljs.core.nth.call(null,vec__27167,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.lt_snippets.set_mirrored_values = (function set_mirrored_values(form,el){var c = el.className;var v = lt.util.dom.html.call(null,el);var seq__27172 = cljs.core.seq.call(null,cljs.core.rest.call(null,lt.util.dom.$$.call(null,[cljs.core.str("span."),cljs.core.str(c)].join(''),form)));var chunk__27173 = null;var count__27174 = 0;var i__27175 = 0;while(true){
if((i__27175 < count__27174))
{var mirr = cljs.core._nth.call(null,chunk__27173,i__27175);lt.util.dom.html.call(null,mirr,v);
{
var G__27220 = seq__27172;
var G__27221 = chunk__27173;
var G__27222 = count__27174;
var G__27223 = (i__27175 + 1);
seq__27172 = G__27220;
chunk__27173 = G__27221;
count__27174 = G__27222;
i__27175 = G__27223;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__27172);if(temp__4092__auto__)
{var seq__27172__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27172__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__27172__$1);{
var G__27224 = cljs.core.chunk_rest.call(null,seq__27172__$1);
var G__27225 = c__7561__auto__;
var G__27226 = cljs.core.count.call(null,c__7561__auto__);
var G__27227 = 0;
seq__27172 = G__27224;
chunk__27173 = G__27225;
count__27174 = G__27226;
i__27175 = G__27227;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__27172__$1);lt.util.dom.html.call(null,mirr,v);
{
var G__27228 = cljs.core.next.call(null,seq__27172__$1);
var G__27229 = null;
var G__27230 = 0;
var G__27231 = 0;
seq__27172 = G__27228;
chunk__27173 = G__27229;
count__27174 = G__27230;
i__27175 = G__27231;
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
{var kv = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__27176_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[clojure.string.replace.call(null,p1__27176_SHARP_.className,/snipvar-/,"$")],[lt.util.dom.html.call(null,p1__27176_SHARP_)]);
}),inputs));var result = lt.plugins.lt_snippets.map_replace.call(null,kv,snippet);lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
lt.objs.editor.focus.call(null,ed);
var pos = lt.objs.editor.__GT_cursor.call(null,ed);lt.objs.editor.insert_at_cursor.call(null,ed,result);
if(cljs.core.truth_(result.contains("$0")))
{} else
{lt.objs.editor.set_selection.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed));
lt.objs.editor.indent_selection.call(null,ed,"smart");
}
return lt.plugins.lt_snippets.find_line_containing.call(null,ed,"$0",(function (line_no){var ch = lt.objs.editor.line.call(null,ed,line_no).indexOf("$0");lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),(2 + ch)], null),"");
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
var seq__27177_27232 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),content));var chunk__27178_27233 = null;var count__27179_27234 = 0;var i__27180_27235 = 0;while(true){
if((i__27180_27235 < count__27179_27234))
{var el_27236 = cljs.core._nth.call(null,chunk__27178_27233,i__27180_27235);lt.util.dom.on.call(null,el_27236,"keyup",((function (seq__27177_27232,chunk__27178_27233,count__27179_27234,i__27180_27235,el_27236){
return (function (ev){return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
});})(seq__27177_27232,chunk__27178_27233,count__27179_27234,i__27180_27235,el_27236))
);
{
var G__27237 = seq__27177_27232;
var G__27238 = chunk__27178_27233;
var G__27239 = count__27179_27234;
var G__27240 = (i__27180_27235 + 1);
seq__27177_27232 = G__27237;
chunk__27178_27233 = G__27238;
count__27179_27234 = G__27239;
i__27180_27235 = G__27240;
continue;
}
} else
{var temp__4092__auto___27241__$1 = cljs.core.seq.call(null,seq__27177_27232);if(temp__4092__auto___27241__$1)
{var seq__27177_27242__$1 = temp__4092__auto___27241__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27177_27242__$1))
{var c__7561__auto___27243 = cljs.core.chunk_first.call(null,seq__27177_27242__$1);{
var G__27244 = cljs.core.chunk_rest.call(null,seq__27177_27242__$1);
var G__27245 = c__7561__auto___27243;
var G__27246 = cljs.core.count.call(null,c__7561__auto___27243);
var G__27247 = 0;
seq__27177_27232 = G__27244;
chunk__27178_27233 = G__27245;
count__27179_27234 = G__27246;
i__27180_27235 = G__27247;
continue;
}
} else
{var el_27248 = cljs.core.first.call(null,seq__27177_27242__$1);lt.util.dom.on.call(null,el_27248,"keyup",((function (seq__27177_27232,chunk__27178_27233,count__27179_27234,i__27180_27235,el_27248,seq__27177_27242__$1,temp__4092__auto___27241__$1){
return (function (ev){return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
});})(seq__27177_27232,chunk__27178_27233,count__27179_27234,i__27180_27235,el_27248,seq__27177_27242__$1,temp__4092__auto___27241__$1))
);
{
var G__27249 = cljs.core.next.call(null,seq__27177_27242__$1);
var G__27250 = null;
var G__27251 = 0;
var G__27252 = 0;
seq__27177_27232 = G__27249;
chunk__27178_27233 = G__27250;
count__27179_27234 = G__27251;
i__27180_27235 = G__27252;
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
lt.plugins.lt_snippets.read_snippets = (function read_snippets(){return cljs.core.partial.call(null,cljs.core.map,(function (p1__27182_SHARP_){return cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,lt.objs.files.join.call(null,lt.plugins.lt_snippets.snippet_dir,p1__27182_SHARP_)));
})).call(null,cljs.core.filter.call(null,(function (p1__27181_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__27181_SHARP_),"edn");
}),lt.objs.files.ls_sync.call(null,lt.plugins.lt_snippets.snippet_dir)));
});
lt.plugins.lt_snippets.degroup_snippets = (function degroup_snippets(snippets){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (snip){return new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snip);
}),snippets));
});
lt.plugins.lt_snippets.snippet_by_key = (function snippet_by_key(key,snippets){return cljs.core.some.call(null,(function (p1__27183_SHARP_){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__27183_SHARP_)))
{return p1__27183_SHARP_;
} else
{return null;
}
}),lt.plugins.lt_snippets.degroup_snippets.call(null,snippets));
});
lt.plugins.lt_snippets.snippet_by = (function() {
var snippet_by = null;
var snippet_by__2 = (function (key,snippets){return lt.plugins.lt_snippets.snippet_by_key.call(null,key,snippets);
});
var snippet_by__3 = (function (key,modes,snippets){return lt.plugins.lt_snippets.snippet_by_key.call(null,key,cljs.core.filter.call(null,(function (p1__27184_SHARP_){return cljs.core.contains_QMARK_.call(null,modes,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(p1__27184_SHARP_)));
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
}),cljs.core.filter.call(null,(function (p1__27185_SHARP_){return [cljs.core.str(p1__27185_SHARP_)].join('').contains(":snippet.by_key");
}),cljs.core.first.call(null,cljs.core.rest.call(null,keygroup))));
}),cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.keyboard.keys))));
});
lt.plugins.lt_snippets.get_snippets = (function get_snippets(){var snippets = lt.plugins.lt_snippets.degroup_snippets.call(null,lt.plugins.lt_snippets.read_snippets.call(null));var shortcuts = lt.plugins.lt_snippets.get_snippet_shortcuts.call(null);return cljs.core.map.call(null,(function (snip){return cljs.core.assoc.call(null,snip,new cljs.core.Keyword(null,"shortcut","shortcut",671403960),(function (){var temp__4092__auto__ = cljs.core.some.call(null,(function (p1__27186_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(snip),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__27186_SHARP_)))
{return p1__27186_SHARP_;
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
lt.plugins.lt_snippets.selector = (function selector(opts){var G__27188 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__27188,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608));
return G__27188;
});
lt.plugins.lt_snippets.add_selector = lt.plugins.lt_snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.lt_snippets.get_snippets,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__27191_SHARP_,p2__27192_SHARP_,p3__27190_SHARP_,p4__27189_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__27189_SHARP_)),cljs.core.str("</p><p class='binding'>"),cljs.core.str([cljs.core.str(p3__27190_SHARP_),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"shortcut","shortcut",671403960).cljs$core$IFn$_invoke$arity$1(p4__27189_SHARP_))].join('')),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.lt_snippets.insert_snippet = (function insert_snippet(item){if(cljs.core.truth_(item))
{var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.empty_QMARK_.call(null,lt.plugins.lt_snippets.get_tabstops.call(null,snippet)))
{lt.objs.editor.insert_at_cursor.call(null,ed,snippet);
return lt.plugins.lt_snippets.find_line_containing.call(null,ed,"$0",(function (line_no){var ch = lt.objs.editor.line.call(null,ed,line_no).indexOf("$0");lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),(2 + ch)], null),"");
lt.objs.editor.set_selection.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed));
lt.objs.editor.indent_selection.call(null,ed,"smart");
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null));
}));
} else
{return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));
}
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Select snippet to invoke",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.lt_snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.plugins.lt_snippets.insert_snippet.call(null,item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_key","snippet.by_key",4762727386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Invoke snippet by its key",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){var ed = lt.objs.editor.pool.last_active.call(null);var snippets = lt.plugins.lt_snippets.read_snippets.call(null);if(cljs.core.truth_(ed))
{return lt.plugins.lt_snippets.insert_snippet.call(null,lt.plugins.lt_snippets.snippet_by.call(null,key,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),snippets));
} else
{return lt.plugins.lt_snippets.insert_snippet.call(null,lt.plugins.lt_snippets.snippet_by.call(null,key,snippets));
}
})], null));
lt.plugins.lt_snippets.__GT_token = (function __GT_token(ed){return lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
lt.plugins.lt_snippets.__GT_clear_token = (function __GT_clear_token(ed){var token = lt.plugins.lt_snippets.__GT_token.call(null,ed);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed));return lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"stop","stop",1017445236).cljs$core$IFn$_invoke$arity$1(token)], null),"");
});
lt.plugins.lt_snippets.snippet_by_token = (function snippet_by_token(ed){return lt.plugins.lt_snippets.snippet_by.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.lt_snippets.__GT_token.call(null,ed)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.lt_snippets.read_snippets.call(null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_token","snippet.by_token",4458950964),new cljs.core.Keyword(null,"desc","desc",1016984067),"Expand snippet by editor token",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.lt_snippets.snippet_by_token.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var item = temp__4092__auto____$1;lt.plugins.lt_snippets.__GT_clear_token.call(null,ed);
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