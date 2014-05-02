if(!lt.util.load.provided_QMARK_('lt.plugins.lt-snippets.snippets')) {
goog.provide('lt.plugins.lt_snippets.snippets');
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
lt.plugins.lt_snippets.snippets.snippet_dir = lt.objs.files.lt_user_dir.call(null,"snippets");
lt.plugins.lt_snippets.snippets.get_snippet_dir = (function get_snippet_dir(){var default$ = lt.objs.files.lt_user_dir.call(null,"settings/snippets");if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,default$)))
{return default$;
} else
{return lt.objs.files.lt_user_dir.call(null,"snippets");
}
});
lt.plugins.lt_snippets.snippets.load_if_exists = (function load_if_exists(path,file){var fullpath = lt.objs.files.join.call(null,path,file);if(cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,fullpath)))
{return fullpath;
} else
{return lt.objs.files.bomless_read.call(null,fullpath);
}
});
lt.plugins.lt_snippets.snippets.resolve_modes = (function resolve_modes(a,b){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"+","+",1013904285),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,(function (){var or__6813__auto__ = new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),clojure.set.union.call(null,new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(b)))),new cljs.core.Keyword(null,"-","-",1013904287),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,(function (){var or__6813__auto__ = new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),clojure.set.union.call(null,new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(b))))], null);
});
lt.plugins.lt_snippets.snippets.load_files = (function load_files(path,snipgroup){var gm = new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(snipgroup);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modes","modes",1117974178),gm,new cljs.core.Keyword(null,"helper","helper",4087939872),new cljs.core.Keyword(null,"helper","helper",4087939872).cljs$core$IFn$_invoke$arity$1(snipgroup),new cljs.core.Keyword(null,"snippets","snippets",1527719528),cljs.core.map.call(null,(function (item){var temp__4090__auto__ = new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(temp__4090__auto__))
{var sm = temp__4090__auto__;return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_snippets.snippets.resolve_modes.call(null,gm,new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item)));
} else
{return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"modes","modes",1117974178),gm);
}
}),cljs.core.map.call(null,(function (item){var temp__4090__auto__ = new cljs.core.Keyword(null,"snippet-file","snippet-file",3582346142).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(temp__4090__auto__))
{var file = temp__4090__auto__;return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"snippet","snippet",3247236239),lt.plugins.lt_snippets.snippets.load_if_exists.call(null,lt.objs.files.parent.call(null,path),file));
} else
{return item;
}
}),new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snipgroup)))], null);
});
lt.plugins.lt_snippets.snippets.maybe_load_helpers = (function maybe_load_helpers(path,snipgroup){if(cljs.core.truth_((function (){var and__6801__auto__ = new cljs.core.Keyword(null,"helper","helper",4087939872).cljs$core$IFn$_invoke$arity$1(snipgroup);if(cljs.core.truth_(and__6801__auto__))
{return window.snip$;
} else
{return and__6801__auto__;
}
})()))
{lt.util.load.js.call(null,lt.objs.files.join.call(null,lt.objs.files.parent.call(null,path),new cljs.core.Keyword(null,"helper","helper",4087939872).cljs$core$IFn$_invoke$arity$1(snipgroup)),new cljs.core.Keyword(null,"sync","sync",1017449997));
} else
{}
return snipgroup;
});
lt.plugins.lt_snippets.snippets.load_one = (function load_one(path){return lt.plugins.lt_snippets.snippets.maybe_load_helpers.call(null,path,lt.plugins.lt_snippets.snippets.load_files.call(null,path,cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,path))));
});
lt.plugins.lt_snippets.snippets.load_all = (function load_all(){return cljs.core.map.call(null,lt.plugins.lt_snippets.snippets.load_one,lt.objs.files.filter_walk.call(null,(function (path){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn");
}),lt.plugins.lt_snippets.snippets.get_snippet_dir.call(null)));
});
lt.plugins.lt_snippets.snippets.all = (function all(){return lt.plugins.lt_snippets.snippets.load_all.call(null);
});
lt.plugins.lt_snippets.snippets.degroup = (function degroup(snippets){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (snip){return new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snip);
}),snippets));
});
lt.plugins.lt_snippets.snippets.by_key = (function by_key(key,snippets){return cljs.core.filter.call(null,(function (p1__8720_SHARP_){return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__8720_SHARP_));
}),lt.plugins.lt_snippets.snippets.degroup.call(null,snippets));
});
lt.plugins.lt_snippets.snippets.satisfies_modes_QMARK_ = (function satisfies_modes_QMARK_(modes,item){if((cljs.core.seq.call(null,clojure.set.intersection.call(null,modes,new cljs.core.Keyword(null,"+","+",1013904285).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item))))) && (cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,modes,new cljs.core.Keyword(null,"-","-",1013904287).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(item))))))
{return true;
} else
{return false;
}
});
lt.plugins.lt_snippets.snippets.by = (function() {
var by = null;
var by__2 = (function (key,snippets){return lt.plugins.lt_snippets.snippets.by_key.call(null,key,snippets);
});
var by__3 = (function (key,modes,snippets){return cljs.core.filter.call(null,cljs.core.partial.call(null,lt.plugins.lt_snippets.snippets.satisfies_modes_QMARK_,modes),lt.plugins.lt_snippets.snippets.by_key.call(null,key,snippets));
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
lt.plugins.lt_snippets.snippets.by.call(null,"tc",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.groovy","editor.groovy",3727177505),null], null), null),lt.plugins.lt_snippets.snippets.all.call(null));
lt.plugins.lt_snippets.snippets.get_shortcuts = (function get_shortcuts(){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (keygroup){return cljs.core.map.call(null,(function (km){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"shortcut","shortcut",671403960),new cljs.core.Keyword(null,"key","key",1014010321)],[cljs.core.first.call(null,keygroup),cljs.core.first.call(null,km),cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,km))))]);
}),cljs.core.filter.call(null,(function (p1__8721_SHARP_){return [cljs.core.str(p1__8721_SHARP_)].join('').contains(":snippet.by_key");
}),cljs.core.first.call(null,cljs.core.rest.call(null,keygroup))));
}),cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.keyboard.keys))));
});
lt.plugins.lt_snippets.snippets.all_keymapped = (function all_keymapped(){var snippets = lt.plugins.lt_snippets.snippets.degroup.call(null,lt.plugins.lt_snippets.snippets.all.call(null));var shortcuts = lt.plugins.lt_snippets.snippets.get_shortcuts.call(null);return cljs.core.map.call(null,(function (snip){return cljs.core.assoc.call(null,snip,new cljs.core.Keyword(null,"shortcut","shortcut",671403960),(function (){var temp__4092__auto__ = cljs.core.some.call(null,(function (p1__8722_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(snip),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__8722_SHARP_)))
{return p1__8722_SHARP_;
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
lt.plugins.lt_snippets.snippets.comp_tabstop = (function comp_tabstop(a,b){if(cljs.core.truth_((function (){var and__6801__auto__ = new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(a);if(cljs.core.truth_(and__6801__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(b));
} else
{return and__6801__auto__;
}
})()))
{return true;
} else
{if(cljs.core.truth_((function (){var and__6801__auto__ = new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(and__6801__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(a));
} else
{return and__6801__auto__;
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
lt.plugins.lt_snippets.snippets.get_tabstops = (function get_tabstops(snippet){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (ts){return cljs.core.map_indexed.call(null,(function (idx,tsi){if((idx > 0))
{return cljs.core.assoc.call(null,tsi,new cljs.core.Keyword(null,"mirrored","mirrored",4072699920),true);
} else
{return tsi;
}
}),cljs.core.sort.call(null,cljs.core.comp.call(null,lt.plugins.lt_snippets.snippets.comp_tabstop),cljs.core.last.call(null,ts)));
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"num","num",1014013688),cljs.core.map.call(null,(function (p1__8724_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"num","num",1014013688),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),new cljs.core.Keyword(null,"text","text",1017460895)],[cljs.core.re_find.call(null,/\d+/,p1__8724_SHARP_),(function (){var temp__4092__auto__ = cljs.core.re_find.call(null,/\$\{\d+\:([^\x0A\x0D\u2028\u2029\}]*)\}/,p1__8724_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var ph = temp__4092__auto__;return cljs.core.last.call(null,ph);
} else
{return null;
}
})(),p1__8724_SHARP_]);
}),cljs.core.filter.call(null,(function (p1__8723_SHARP_){return !(cljs.core._EQ_.call(null,p1__8723_SHARP_,"$0"));
}),cljs.core.re_seq.call(null,/\$\{\d+\:[^\x0A\x0D\u2028\u2029\}]*\}|\$\d+/,snippet))))));
});
lt.plugins.lt_snippets.snippets.tabstops_QMARK_ = (function tabstops_QMARK_(snippet){return cljs.core.empty_QMARK_.call(null,lt.plugins.lt_snippets.snippets.get_tabstops.call(null,snippet));
});
lt.plugins.lt_snippets.snippets.tokenize = (function tokenize(snippet){return cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.js__GT_clj.call(null,snippet.split(/(\$\{\d+\:[^\x0A\x0D\u2028\u2029\}]*\}|\$\d+|\$\{__[^\x0A\x0D\u2028\u2029\}]*__\})/)));
});
lt.plugins.lt_snippets.snippets.resolve_placeholder = (function resolve_placeholder(ph){var temp__4090__auto__ = cljs.core.re_find.call(null,/__([^\x0A\x0D\u2028\u2029\}]*)__/,ph);if(cljs.core.truth_(temp__4090__auto__))
{var code = temp__4090__auto__;return window.eval(cljs.core.last.call(null,code));
} else
{return ph;
}
});
lt.plugins.lt_snippets.snippets.inline_code_frag_QMARK_ = (function inline_code_frag_QMARK_(frag){return cljs.core.re_seq.call(null,/\$\{__[^\x0A\x0D\u2028\u2029\}]*__\}/,frag);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-snippets.select-form')) {
goog.provide('lt.plugins.lt_snippets.select_form');
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
lt.plugins.lt_snippets.select_form.snippet_select_item = (function snippet_select_item(idx,item){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"data-snippet","data-snippet",1331916140),new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item)], null));var seq__8560_8578 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8561_8579 = null;var count__8562_8580 = 0;var i__8563_8581 = 0;while(true){
if((i__8563_8581 < count__8562_8580))
{var vec__8564_8582 = cljs.core._nth.call(null,chunk__8561_8579,i__8563_8581);var ev__8190__auto___8583 = cljs.core.nth.call(null,vec__8564_8582,0,null);var func__8191__auto___8584 = cljs.core.nth.call(null,vec__8564_8582,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8583,func__8191__auto___8584);
{
var G__8585 = seq__8560_8578;
var G__8586 = chunk__8561_8579;
var G__8587 = count__8562_8580;
var G__8588 = (i__8563_8581 + 1);
seq__8560_8578 = G__8585;
chunk__8561_8579 = G__8586;
count__8562_8580 = G__8587;
i__8563_8581 = G__8588;
continue;
}
} else
{var temp__4092__auto___8589 = cljs.core.seq.call(null,seq__8560_8578);if(temp__4092__auto___8589)
{var seq__8560_8590__$1 = temp__4092__auto___8589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8560_8590__$1))
{var c__7561__auto___8591 = cljs.core.chunk_first.call(null,seq__8560_8590__$1);{
var G__8592 = cljs.core.chunk_rest.call(null,seq__8560_8590__$1);
var G__8593 = c__7561__auto___8591;
var G__8594 = cljs.core.count.call(null,c__7561__auto___8591);
var G__8595 = 0;
seq__8560_8578 = G__8592;
chunk__8561_8579 = G__8593;
count__8562_8580 = G__8594;
i__8563_8581 = G__8595;
continue;
}
} else
{var vec__8565_8596 = cljs.core.first.call(null,seq__8560_8590__$1);var ev__8190__auto___8597 = cljs.core.nth.call(null,vec__8565_8596,0,null);var func__8191__auto___8598 = cljs.core.nth.call(null,vec__8565_8596,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8597,func__8191__auto___8598);
{
var G__8599 = cljs.core.next.call(null,seq__8560_8590__$1);
var G__8600 = null;
var G__8601 = 0;
var G__8602 = 0;
seq__8560_8578 = G__8599;
chunk__8561_8579 = G__8600;
count__8562_8580 = G__8601;
i__8563_8581 = G__8602;
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
lt.plugins.lt_snippets.select_form.snippet_select_form = (function snippet_select_form(this$,items){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-select-form","div.snippet-select-form",1444741338),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.lt_snippets.select_form.snippet_select_item,items)], null)], null));var seq__8572_8603 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8573_8604 = null;var count__8574_8605 = 0;var i__8575_8606 = 0;while(true){
if((i__8575_8606 < count__8574_8605))
{var vec__8576_8607 = cljs.core._nth.call(null,chunk__8573_8604,i__8575_8606);var ev__8190__auto___8608 = cljs.core.nth.call(null,vec__8576_8607,0,null);var func__8191__auto___8609 = cljs.core.nth.call(null,vec__8576_8607,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8608,func__8191__auto___8609);
{
var G__8610 = seq__8572_8603;
var G__8611 = chunk__8573_8604;
var G__8612 = count__8574_8605;
var G__8613 = (i__8575_8606 + 1);
seq__8572_8603 = G__8610;
chunk__8573_8604 = G__8611;
count__8574_8605 = G__8612;
i__8575_8606 = G__8613;
continue;
}
} else
{var temp__4092__auto___8614 = cljs.core.seq.call(null,seq__8572_8603);if(temp__4092__auto___8614)
{var seq__8572_8615__$1 = temp__4092__auto___8614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8572_8615__$1))
{var c__7561__auto___8616 = cljs.core.chunk_first.call(null,seq__8572_8615__$1);{
var G__8617 = cljs.core.chunk_rest.call(null,seq__8572_8615__$1);
var G__8618 = c__7561__auto___8616;
var G__8619 = cljs.core.count.call(null,c__7561__auto___8616);
var G__8620 = 0;
seq__8572_8603 = G__8617;
chunk__8573_8604 = G__8618;
count__8574_8605 = G__8619;
i__8575_8606 = G__8620;
continue;
}
} else
{var vec__8577_8621 = cljs.core.first.call(null,seq__8572_8615__$1);var ev__8190__auto___8622 = cljs.core.nth.call(null,vec__8577_8621,0,null);var func__8191__auto___8623 = cljs.core.nth.call(null,vec__8577_8621,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8622,func__8191__auto___8623);
{
var G__8624 = cljs.core.next.call(null,seq__8572_8615__$1);
var G__8625 = null;
var G__8626 = 0;
var G__8627 = 0;
seq__8572_8603 = G__8624;
chunk__8573_8604 = G__8625;
count__8574_8605 = G__8626;
i__8575_8606 = G__8627;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets.select-form","inline-select-form","lt.plugins.lt-snippets.select-form/inline-select-form",1739878836),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.select.form","inline.snippet.select.form",2060814274),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.lt_snippets.select_form.snippet_select_form.call(null,this$,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(info));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var cb_obj = new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659).cljs$core$IFn$_invoke$arity$1(info);var remove_form = ((function (content,line,cb_obj){
return (function (this$__$1){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$__$1)).clear();
lt.object.raise.call(null,this$__$1,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$__$1);
});})(content,line,cb_obj))
;lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),false], null))));
lt.util.dom.on.call(null,content,"keydown",(function (ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
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
}));
lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"option","option",4298734567),content),0);
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content));
return content;
} else
{return null;
}
}));
lt.plugins.lt_snippets.select_form.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets.select-form","inline-select-form","lt.plugins.lt-snippets.select-form/inline-select-form",1739878836),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-snippets.snippet-form')) {
goog.provide('lt.plugins.lt_snippets.snippet_form');
goog.require('cljs.core');
goog.require('lt.plugins.lt_snippets.snippets');
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
goog.require('lt.plugins.lt_snippets.snippets');
goog.require('lt.objs.command');
lt.plugins.lt_snippets.snippet_form.tabstop_to_input = (function tabstop_to_input(tabstop){var ph = lt.plugins.lt_snippets.snippets.resolve_placeholder.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(tabstop));return [cljs.core.str("<span contenteditable='true'"),cljs.core.str(" data-ph='"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(tabstop))?ph:[cljs.core.str("#"),cljs.core.str(new cljs.core.Keyword(null,"num","num",1014013688).cljs$core$IFn$_invoke$arity$1(tabstop))].join(''))),cljs.core.str("'"),cljs.core.str(" data-ts='"),cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'"),cljs.core.str(" class='replace snipvar-"),cljs.core.str(new cljs.core.Keyword(null,"num","num",1014013688).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'>"),cljs.core.str(ph),cljs.core.str("</span>")].join('');
});
lt.plugins.lt_snippets.snippet_form.tabstop_to_mirror = (function tabstop_to_mirror(tabstop){return [cljs.core.str("<span class='replace snipvar-"),cljs.core.str(new cljs.core.Keyword(null,"num","num",1014013688).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'"),cljs.core.str(" data-ts='"),cljs.core.str(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tabstop)),cljs.core.str("'"),cljs.core.str("></span>")].join('');
});
lt.plugins.lt_snippets.snippet_form.replace_tabstops = (function replace_tabstops(snippet){var tokens = cljs.core.vec.call(null,lt.plugins.lt_snippets.snippets.tokenize.call(null,snippet));var tabstops = lt.plugins.lt_snippets.snippets.get_tabstops.call(null,snippet);while(true){
if(cljs.core.empty_QMARK_.call(null,tabstops))
{return tokens;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var tabstop = cljs.core.first.call(null,tabstops);var idx = cljs.core.clj__GT_js.call(null,tokens).indexOf(new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tabstop));{
var G__10062 = cljs.core.assoc.call(null,tokens,idx,(cljs.core.truth_(new cljs.core.Keyword(null,"mirrored","mirrored",4072699920).cljs$core$IFn$_invoke$arity$1(tabstop))?lt.plugins.lt_snippets.snippet_form.tabstop_to_mirror.call(null,tabstop):lt.plugins.lt_snippets.snippet_form.tabstop_to_input.call(null,tabstop)));
var G__10063 = cljs.core.rest.call(null,tabstops);
tokens = G__10062;
tabstops = G__10063;
continue;
}
} else
{return null;
}
}
break;
}
});
lt.plugins.lt_snippets.snippet_form.escapeSnippet = (function escapeSnippet(snippet){var pre = document.createElement("pre");var tn = document.createTextNode(snippet);pre.appendChild(tn);
return pre.innerHTML;
});
lt.plugins.lt_snippets.snippet_form.inline_code_to_span = (function inline_code_to_span(frag){return [cljs.core.str("<div class='replace codeblock' data-ts='"),cljs.core.str(frag),cljs.core.str("'>"),cljs.core.str(lt.plugins.lt_snippets.snippets.resolve_placeholder.call(null,frag)),cljs.core.str("</div>")].join('');
});
lt.plugins.lt_snippets.snippet_form.resolve_inline_code = (function resolve_inline_code(tokens){return cljs.core.map.call(null,(function (p1__10030_SHARP_){if(cljs.core.truth_(lt.plugins.lt_snippets.snippets.inline_code_frag_QMARK_.call(null,p1__10030_SHARP_)))
{return lt.plugins.lt_snippets.snippet_form.inline_code_to_span.call(null,p1__10030_SHARP_);
} else
{return p1__10030_SHARP_;
}
}),tokens);
});
lt.plugins.lt_snippets.snippet_form.snippet_to_form = (function snippet_to_form(snippet){return clojure.string.join.call(null,lt.plugins.lt_snippets.snippet_form.resolve_inline_code.call(null,lt.plugins.lt_snippets.snippet_form.replace_tabstops.call(null,lt.plugins.lt_snippets.snippet_form.escapeSnippet.call(null,clojure.string.replace.call(null,snippet,"$0","")))));
});
lt.plugins.lt_snippets.snippet_form.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__10033){var vec__10034 = p__10033;var k = cljs.core.nth.call(null,vec__10034,0,null);var v = cljs.core.nth.call(null,vec__10034,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.lt_snippets.snippet_form.snipvar_class = (function snipvar_class(classnames){return cljs.core.re_find.call(null,/snipvar-\d+/,classnames);
});
lt.plugins.lt_snippets.snippet_form.set_mirrored_values = (function set_mirrored_values(form,el){var c = lt.plugins.lt_snippets.snippet_form.snipvar_class.call(null,el.className);var v = lt.util.dom.html.call(null,el);var seq__10039 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,[cljs.core.str("."),cljs.core.str(c),cljs.core.str(":not([contenteditable=true])")].join(''),form));var chunk__10040 = null;var count__10041 = 0;var i__10042 = 0;while(true){
if((i__10042 < count__10041))
{var mirr = cljs.core._nth.call(null,chunk__10040,i__10042);lt.util.dom.html.call(null,mirr,v);
{
var G__10064 = seq__10039;
var G__10065 = chunk__10040;
var G__10066 = count__10041;
var G__10067 = (i__10042 + 1);
seq__10039 = G__10064;
chunk__10040 = G__10065;
count__10041 = G__10066;
i__10042 = G__10067;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10039);if(temp__4092__auto__)
{var seq__10039__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10039__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__10039__$1);{
var G__10068 = cljs.core.chunk_rest.call(null,seq__10039__$1);
var G__10069 = c__7561__auto__;
var G__10070 = cljs.core.count.call(null,c__7561__auto__);
var G__10071 = 0;
seq__10039 = G__10068;
chunk__10040 = G__10069;
count__10041 = G__10070;
i__10042 = G__10071;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__10039__$1);lt.util.dom.html.call(null,mirr,v);
{
var G__10072 = cljs.core.next.call(null,seq__10039__$1);
var G__10073 = null;
var G__10074 = 0;
var G__10075 = 0;
seq__10039 = G__10072;
chunk__10040 = G__10073;
count__10041 = G__10074;
i__10042 = G__10075;
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
lt.plugins.lt_snippets.snippet_form.form_to_snippet = (function form_to_snippet(form,snippet){var temp__4092__auto__ = lt.util.dom.$$.call(null,".replace",form);if(cljs.core.truth_(temp__4092__auto__))
{var inputs = temp__4092__auto__;return lt.plugins.lt_snippets.snippet_form.map_replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__10043_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[lt.util.dom.attr.call(null,p1__10043_SHARP_,"data-ts")],[lt.util.dom.html.call(null,p1__10043_SHARP_)]);
}),inputs)),snippet);
} else
{return null;
}
});
lt.plugins.lt_snippets.snippet_form.form = (function form(this$,info){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__10050_10076 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907))));
return lt.util.dom.prevent.call(null,e);
})], null)));var chunk__10051_10077 = null;var count__10052_10078 = 0;var i__10053_10079 = 0;while(true){
if((i__10053_10079 < count__10052_10078))
{var vec__10054_10080 = cljs.core._nth.call(null,chunk__10051_10077,i__10053_10079);var ev__8190__auto___10081 = cljs.core.nth.call(null,vec__10054_10080,0,null);var func__8191__auto___10082 = cljs.core.nth.call(null,vec__10054_10080,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___10081,func__8191__auto___10082);
{
var G__10083 = seq__10050_10076;
var G__10084 = chunk__10051_10077;
var G__10085 = count__10052_10078;
var G__10086 = (i__10053_10079 + 1);
seq__10050_10076 = G__10083;
chunk__10051_10077 = G__10084;
count__10052_10078 = G__10085;
i__10053_10079 = G__10086;
continue;
}
} else
{var temp__4092__auto___10087 = cljs.core.seq.call(null,seq__10050_10076);if(temp__4092__auto___10087)
{var seq__10050_10088__$1 = temp__4092__auto___10087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10050_10088__$1))
{var c__7561__auto___10089 = cljs.core.chunk_first.call(null,seq__10050_10088__$1);{
var G__10090 = cljs.core.chunk_rest.call(null,seq__10050_10088__$1);
var G__10091 = c__7561__auto___10089;
var G__10092 = cljs.core.count.call(null,c__7561__auto___10089);
var G__10093 = 0;
seq__10050_10076 = G__10090;
chunk__10051_10077 = G__10091;
count__10052_10078 = G__10092;
i__10053_10079 = G__10093;
continue;
}
} else
{var vec__10055_10094 = cljs.core.first.call(null,seq__10050_10088__$1);var ev__8190__auto___10095 = cljs.core.nth.call(null,vec__10055_10094,0,null);var func__8191__auto___10096 = cljs.core.nth.call(null,vec__10055_10094,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___10095,func__8191__auto___10096);
{
var G__10097 = cljs.core.next.call(null,seq__10050_10088__$1);
var G__10098 = null;
var G__10099 = 0;
var G__10100 = 0;
seq__10050_10076 = G__10097;
chunk__10051_10077 = G__10098;
count__10052_10078 = G__10099;
i__10053_10079 = G__10100;
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
lt.plugins.lt_snippets.snippet_form.__BEH__remove_snippet_form = (function __BEH__remove_snippet_form(this$){new cljs.core.Keyword(null,"snipmark","snipmark",1527626241).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets.snippet-form","remove-snippet-form","lt.plugins.lt-snippets.snippet-form/remove-snippet-form",1435732480),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.snippet_form.__BEH__remove_snippet_form,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to remove inline snippet form (default on enter and esc or last/no inputs)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425),null], null), null));
lt.plugins.lt_snippets.snippet_form.taborder = (function taborder(el){return clojure.string.replace.call(null,lt.plugins.lt_snippets.snippet_form.snipvar_class.call(null,el.className),"snipvar-","");
});
lt.plugins.lt_snippets.snippet_form.tabstops = (function tabstops(form){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,(function (p1__10056_SHARP_,p2__10057_SHARP_){return cljs.core.compare.call(null,lt.plugins.lt_snippets.snippet_form.taborder.call(null,p1__10056_SHARP_),lt.plugins.lt_snippets.snippet_form.taborder.call(null,p2__10057_SHARP_));
}),cljs.core.seq.call(null,lt.util.dom.$$.call(null,"span[contenteditable=true]"))));
});
lt.plugins.lt_snippets.snippet_form.tabstops_count = (function tabstops_count(form){return cljs.core.count.call(null,lt.plugins.lt_snippets.snippet_form.tabstops.call(null,form));
});
lt.plugins.lt_snippets.snippet_form.tabstop_idx = (function tabstop_idx(form,el){return cljs.core.clj__GT_js.call(null,lt.plugins.lt_snippets.snippet_form.tabstops.call(null,form)).indexOf(el);
});
lt.plugins.lt_snippets.snippet_form.next_tabstop_el = (function next_tabstop_el(form,el){return cljs.core.nth.call(null,lt.plugins.lt_snippets.snippet_form.tabstops.call(null,form),(lt.plugins.lt_snippets.snippet_form.tabstop_idx.call(null,form,el) + 1));
});
lt.plugins.lt_snippets.snippet_form.move_next_tab = (function move_next_tab(form,el){return lt.util.dom.focus.call(null,lt.plugins.lt_snippets.snippet_form.next_tabstop_el.call(null,form,el));
});
lt.plugins.lt_snippets.snippet_form.prev_tabstop_el = (function prev_tabstop_el(form,el){return cljs.core.nth.call(null,lt.plugins.lt_snippets.snippet_form.tabstops.call(null,form),(lt.plugins.lt_snippets.snippet_form.tabstop_idx.call(null,form,el) - 1));
});
lt.plugins.lt_snippets.snippet_form.move_prev_tab = (function move_prev_tab(form,el){return lt.util.dom.focus.call(null,lt.plugins.lt_snippets.snippet_form.prev_tabstop_el.call(null,form,el));
});
lt.plugins.lt_snippets.snippet_form.last_tabstop_QMARK_ = (function last_tabstop_QMARK_(form,el){return cljs.core._EQ_.call(null,lt.plugins.lt_snippets.snippet_form.tabstops_count.call(null,form),(lt.plugins.lt_snippets.snippet_form.tabstop_idx.call(null,form,el) + 1));
});
lt.plugins.lt_snippets.snippet_form.first_tabstop_QMARK_ = (function first_tabstop_QMARK_(form,el){return cljs.core._EQ_.call(null,0,lt.plugins.lt_snippets.snippet_form.tabstop_idx.call(null,form,el));
});
lt.plugins.lt_snippets.snippet_form.complete_snippet_form = (function complete_snippet_form(this$,ed,form,cb_obj){var snip = lt.plugins.lt_snippets.snippet_form.form_to_snippet.call(null,form,new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var no_indent = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"no-indent","no-indent",4334515626).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
lt.objs.editor.focus.call(null,ed);
return lt.object.raise.call(null,cb_obj,new cljs.core.Keyword(null,"snippet.complete","snippet.complete",2018711132),ed,snip,new cljs.core.Keyword(null,"no-indent","no-indent",4334515626),no_indent);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets.snippet-form","inline-form","lt.plugins.lt-snippets.snippet-form/inline-form",2446346597),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.form","inline.snippet.form",3354835868),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.lt_snippets.snippet_form.form.call(null,this$,info);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(info));var cb_obj = new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659).cljs$core$IFn$_invoke$arity$1(info);lt.util.dom.html.call(null,content,lt.plugins.lt_snippets.snippet_form.snippet_to_form.call(null,snippet));
var seq__10058_10101 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"span[contenteditable=true]",content));var chunk__10059_10102 = null;var count__10060_10103 = 0;var i__10061_10104 = 0;while(true){
if((i__10061_10104 < count__10060_10103))
{var el_10105 = cljs.core._nth.call(null,chunk__10059_10102,i__10061_10104);lt.plugins.lt_snippets.snippet_form.set_mirrored_values.call(null,content,el_10105);
lt.util.dom.on.call(null,el_10105,"focus",((function (seq__10058_10101,chunk__10059_10102,count__10060_10103,i__10061_10104,el_10105){
return (function (ev){var sel = window.getSelection();var r = document.createRange();r.selectNodeContents(el_10105);
sel.removeAllRanges();
return sel.addRange(r);
});})(seq__10058_10101,chunk__10059_10102,count__10060_10103,i__10061_10104,el_10105))
);
{
var G__10106 = seq__10058_10101;
var G__10107 = chunk__10059_10102;
var G__10108 = count__10060_10103;
var G__10109 = (i__10061_10104 + 1);
seq__10058_10101 = G__10106;
chunk__10059_10102 = G__10107;
count__10060_10103 = G__10108;
i__10061_10104 = G__10109;
continue;
}
} else
{var temp__4092__auto___10110__$1 = cljs.core.seq.call(null,seq__10058_10101);if(temp__4092__auto___10110__$1)
{var seq__10058_10111__$1 = temp__4092__auto___10110__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10058_10111__$1))
{var c__7561__auto___10112 = cljs.core.chunk_first.call(null,seq__10058_10111__$1);{
var G__10113 = cljs.core.chunk_rest.call(null,seq__10058_10111__$1);
var G__10114 = c__7561__auto___10112;
var G__10115 = cljs.core.count.call(null,c__7561__auto___10112);
var G__10116 = 0;
seq__10058_10101 = G__10113;
chunk__10059_10102 = G__10114;
count__10060_10103 = G__10115;
i__10061_10104 = G__10116;
continue;
}
} else
{var el_10117 = cljs.core.first.call(null,seq__10058_10111__$1);lt.plugins.lt_snippets.snippet_form.set_mirrored_values.call(null,content,el_10117);
lt.util.dom.on.call(null,el_10117,"focus",((function (seq__10058_10101,chunk__10059_10102,count__10060_10103,i__10061_10104,el_10117,seq__10058_10111__$1,temp__4092__auto___10110__$1){
return (function (ev){var sel = window.getSelection();var r = document.createRange();r.selectNodeContents(el_10117);
sel.removeAllRanges();
return sel.addRange(r);
});})(seq__10058_10101,chunk__10059_10102,count__10060_10103,i__10061_10104,el_10117,seq__10058_10111__$1,temp__4092__auto___10110__$1))
);
{
var G__10118 = cljs.core.next.call(null,seq__10058_10111__$1);
var G__10119 = null;
var G__10120 = 0;
var G__10121 = 0;
seq__10058_10101 = G__10118;
chunk__10059_10102 = G__10119;
count__10060_10103 = G__10120;
i__10061_10104 = G__10121;
continue;
}
}
} else
{}
}
break;
}
lt.util.dom.on.call(null,content,"keyup",(function (ev){return lt.plugins.lt_snippets.snippet_form.set_mirrored_values.call(null,content,ev.target);
}));
lt.util.dom.on.call(null,content,"keydown",(function (ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
return lt.plugins.lt_snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,cb_obj);
} else
{if((cljs.core._EQ_.call(null,9,kc)) && (cljs.core.not.call(null,ev.shiftKey)))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
if(lt.plugins.lt_snippets.snippet_form.last_tabstop_QMARK_.call(null,content,el))
{return lt.plugins.lt_snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,cb_obj);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.lt_snippets.snippet_form.move_next_tab.call(null,lt.plugins.lt_snippets.snippet_form.form,el);
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var and__6801__auto__ = cljs.core._EQ_.call(null,9,kc);if(and__6801__auto__)
{return ev.shiftKey;
} else
{return and__6801__auto__;
}
})()))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
if(lt.plugins.lt_snippets.snippet_form.first_tabstop_QMARK_.call(null,content,el))
{return lt.plugins.lt_snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,cb_obj);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.lt_snippets.snippet_form.move_prev_tab.call(null,lt.plugins.lt_snippets.snippet_form.form,el);
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
}));
lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"snipmark","snipmark",1527626241),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),true], null))));
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,"span[contenteditable=true]",content));
return content;
} else
{return null;
}
}));
lt.plugins.lt_snippets.snippet_form.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets.snippet-form","inline-form","lt.plugins.lt-snippets.snippet-form/inline-form",2446346597),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-snippets')) {
goog.provide('lt.plugins.lt_snippets');
goog.require('cljs.core');
goog.require('lt.plugins.lt_snippets.snippets');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.lt_snippets.snippet_form');
goog.require('lt.plugins.lt_snippets.select_form');
goog.require('lt.util.dom');
goog.require('lt.plugins.lt_snippets.snippet_form');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.lt_snippets.select_form');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.lt_snippets.snippets');
goog.require('lt.objs.command');
lt.plugins.lt_snippets.find_pos = (function find_pos(ed,from,txt){return cljs.core.first.call(null,cljs.core.map.call(null,(function (p1__10144_SHARP_){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,p1__10144_SHARP_,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__10144_SHARP_).indexOf(txt)),new cljs.core.Keyword(null,"text","text",1017460895));
}),cljs.core.filter.call(null,(function (p1__10143_SHARP_){return new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__10143_SHARP_).contains(txt);
}),cljs.core.map.call(null,(function (p1__10142_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"text","text",1017460895)],[p1__10142_SHARP_,lt.objs.editor.line_handle.call(null,ed,p1__10142_SHARP_).text]);
}),cljs.core.range.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from),(1 + new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed))))))));
});
lt.plugins.lt_snippets.__GT_token = (function __GT_token(ed){return lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
lt.plugins.lt_snippets.clear_token = (function clear_token(ed){var token = lt.plugins.lt_snippets.__GT_token.call(null,ed);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed));return lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"stop","stop",1017445236).cljs$core$IFn$_invoke$arity$1(token)], null),"");
});
lt.plugins.lt_snippets.snippet_by_token = (function snippet_by_token(ed){return lt.plugins.lt_snippets.snippets.by.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.lt_snippets.__GT_token.call(null,ed)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.lt_snippets.snippets.all.call(null));
});
lt.plugins.lt_snippets.__BEH__indent_snippet = (function __BEH__indent_snippet(this$,info){lt.objs.editor.set_selection.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(info));
lt.objs.editor.indent_selection.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),"smart");
lt.objs.editor.move_cursor.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"focuspos","focuspos",1066467822).cljs$core$IFn$_invoke$arity$1(info));
lt.objs.editor.indent_selection.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info),"smart");
return lt.objs.editor.focus.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","indent-snippet","lt.plugins.lt-snippets/indent-snippet",2449384578),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__indent_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Indent inserted snippet (and move cursor accordingly)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.indent","snippet.indent",658148879),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.lt_snippets.__BEH__complete_snippet = (function() { 
var __BEH__complete_snippet__delegate = function (this$,ed,snippet,p__10145){var map__10147 = p__10145;var map__10147__$1 = ((cljs.core.seq_QMARK_.call(null,map__10147))?cljs.core.apply.call(null,cljs.core.hash_map,map__10147):map__10147);var no_indent = cljs.core.get.call(null,map__10147__$1,new cljs.core.Keyword(null,"no-indent","no-indent",4334515626),false);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"from","from",1017056028),pos], null);var cur = ((function (pos,info){
return (function (e){return lt.objs.editor.__GT_cursor.call(null,e);
});})(pos,info))
;lt.objs.editor.insert_at_cursor.call(null,ed,snippet);
if(cljs.core.not.call(null,snippet.contains("$0")))
{if(cljs.core.truth_(no_indent))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"snippet.indent","snippet.indent",658148879),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"to","to",1013907949),cur.call(null,ed),new cljs.core.Keyword(null,"focuspos","focuspos",1066467822),cur.call(null,ed)));
}
} else
{var temp__4092__auto__ = lt.plugins.lt_snippets.find_pos.call(null,ed,pos,"$0");if(cljs.core.truth_(temp__4092__auto__))
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
var p__10145 = null;if (arguments.length > 3) {
  p__10145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return __BEH__complete_snippet__delegate.call(this,this$,ed,snippet,p__10145);};
__BEH__complete_snippet.cljs$lang$maxFixedArity = 3;
__BEH__complete_snippet.cljs$lang$applyTo = (function (arglist__10154){
var this$ = cljs.core.first(arglist__10154);
arglist__10154 = cljs.core.next(arglist__10154);
var ed = cljs.core.first(arglist__10154);
arglist__10154 = cljs.core.next(arglist__10154);
var snippet = cljs.core.first(arglist__10154);
var p__10145 = cljs.core.rest(arglist__10154);
return __BEH__complete_snippet__delegate(this$,ed,snippet,p__10145);
});
__BEH__complete_snippet.cljs$core$IFn$_invoke$arity$variadic = __BEH__complete_snippet__delegate;
return __BEH__complete_snippet;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","complete-snippet","lt.plugins.lt-snippets/complete-snippet",1017905941),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__complete_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Insert a completed snippet into the given editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.complete","snippet.complete",2018711132),null], null), null));
lt.plugins.lt_snippets.__BEH__initiate_snippet = (function __BEH__initiate_snippet(this$,ed,item){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item);if(lt.plugins.lt_snippets.snippets.tabstops_QMARK_.call(null,snippet))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"snippet.complete","snippet.complete",2018711132),ed,snippet);
} else
{return lt.plugins.lt_snippets.snippet_form.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659),this$,new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","initiate-snippet","lt.plugins.lt-snippets/initiate-snippet",4374725045),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__initiate_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Display snippet form if snippet template contains tabstops, otherwise insert directly",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),null], null), null));
lt.plugins.lt_snippets.__BEH__maybe_select_snippet = (function __BEH__maybe_select_snippet(this$,ed,items){if(cljs.core.seq.call(null,items))
{if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,items)))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),ed,cljs.core.first.call(null,items));
} else
{return lt.plugins.lt_snippets.select_form.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cb-obj","cb-obj",3940145659),this$,new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"items","items",1114430258),items], null));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","maybe-select-snippet","lt.plugins.lt-snippets/maybe-select-snippet",3255045149),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__maybe_select_snippet,new cljs.core.Keyword(null,"desc","desc",1016984067),"Prompt for snippet selection if multiple given, otherwise initiate snippet",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet.select.maybe","snippet.select.maybe",620955033),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-snippets","lt-snippets",3973666061)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-snippets");
lt.plugins.lt_snippets.lt_snippets = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611));
lt.plugins.lt_snippets.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.lt_snippets.selector = (function selector(opts){var G__10149 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__10149,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608));
return G__10149;
});
lt.plugins.lt_snippets.add_selector = lt.plugins.lt_snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.lt_snippets.snippets.all_keymapped,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__10151_SHARP_,p2__10152_SHARP_,p3__10153_SHARP_,p4__10150_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__10150_SHARP_)),cljs.core.str("</p>"),cljs.core.str("<p class='binding'>"),cljs.core.str([cljs.core.str("<b>Key</b>: "),cljs.core.str(new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p4__10150_SHARP_)),cljs.core.str((function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"shortcut","shortcut",671403960).cljs$core$IFn$_invoke$arity$1(p4__10150_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var km = temp__4092__auto__;return [cljs.core.str(" <b>keymap</b>: "),cljs.core.str(km)].join('');
} else
{return null;
}
})()),cljs.core.str("</p>")].join(''))].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Select snippet",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.lt_snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.object.raise.call(null,lt.plugins.lt_snippets.lt_snippets,new cljs.core.Keyword(null,"snippet.initiate","snippet.initiate",2887219132),lt.objs.editor.pool.last_active.call(null),item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_token","snippet.by_token",4458950964),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Expand by editor token",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = cljs.core.seq.call(null,lt.plugins.lt_snippets.snippet_by_token.call(null,ed));if(temp__4092__auto____$1)
{var items = temp__4092__auto____$1;lt.plugins.lt_snippets.clear_token.call(null,ed);
return lt.object.raise.call(null,lt.plugins.lt_snippets.lt_snippets,new cljs.core.Keyword(null,"snippet.select.maybe","snippet.select.maybe",620955033),ed,items);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_key","snippet.by_key",4762727386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Invoke snippet by its key (and editor tag)",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,lt.plugins.lt_snippets.lt_snippets,new cljs.core.Keyword(null,"snippet.select.maybe","snippet.select.maybe",620955033),ed,lt.plugins.lt_snippets.snippets.by.call(null,key,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.lt_snippets.snippets.all.call(null)));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=lt_snippets_compiled.js.map