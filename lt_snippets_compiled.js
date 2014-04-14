if(!lt.util.load.provided_QMARK_('lt.plugins.lt-snippets.snippets')) {
goog.provide('lt.plugins.lt_snippets.snippets');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.lt_snippets.snippets.snippet_dir = lt.objs.files.lt_user_dir.call(null,"snippets");
lt.plugins.lt_snippets.snippets.load_if_exists = (function load_if_exists(path,file){var fullpath = lt.objs.files.join.call(null,path,file);if(cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,fullpath)))
{return fullpath;
} else
{return lt.objs.files.bomless_read.call(null,fullpath);
}
});
lt.plugins.lt_snippets.snippets.load_files = (function load_files(path,snipgroup){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(snipgroup),new cljs.core.Keyword(null,"snippets","snippets",1527719528),cljs.core.map.call(null,(function (item){var temp__4090__auto__ = new cljs.core.Keyword(null,"snippet-file","snippet-file",3582346142).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(temp__4090__auto__))
{var file = temp__4090__auto__;return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"snippet","snippet",3247236239),lt.plugins.lt_snippets.snippets.load_if_exists.call(null,path,file));
} else
{return item;
}
}),new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snipgroup))], null);
});
lt.plugins.lt_snippets.snippets.load_one = (function load_one(path){return cljs.core.partial.call(null,lt.plugins.lt_snippets.snippets.load_files,lt.objs.files.parent.call(null,path)).call(null,cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,path)));
});
lt.plugins.lt_snippets.snippets.load_all = (function load_all(){return cljs.core.partial.call(null,cljs.core.map,lt.plugins.lt_snippets.snippets.load_one).call(null,lt.objs.files.filter_walk.call(null,(function (path){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn");
}),lt.plugins.lt_snippets.snippets.snippet_dir));
});
lt.plugins.lt_snippets.snippets.all = (function all(){return lt.plugins.lt_snippets.snippets.load_all.call(null);
});
lt.plugins.lt_snippets.snippets.degroup = (function degroup(snippets){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (snip){return new cljs.core.Keyword(null,"snippets","snippets",1527719528).cljs$core$IFn$_invoke$arity$1(snip);
}),snippets));
});
lt.plugins.lt_snippets.snippets.by_key = (function by_key(key,snippets){return cljs.core.filter.call(null,(function (p1__8559_SHARP_){return cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__8559_SHARP_));
}),lt.plugins.lt_snippets.snippets.degroup.call(null,snippets));
});
lt.plugins.lt_snippets.snippets.by = (function() {
var by = null;
var by__2 = (function (key,snippets){return lt.plugins.lt_snippets.snippets.by_key.call(null,key,snippets);
});
var by__3 = (function (key,modes,snippets){return lt.plugins.lt_snippets.snippets.by_key.call(null,key,cljs.core.filter.call(null,(function (p1__8560_SHARP_){return cljs.core.contains_QMARK_.call(null,modes,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(p1__8560_SHARP_)));
}),snippets));
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
lt.plugins.lt_snippets.snippets.get_shortcuts = (function get_shortcuts(){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.map.call(null,(function (keygroup){return cljs.core.map.call(null,(function (km){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"shortcut","shortcut",671403960),new cljs.core.Keyword(null,"key","key",1014010321)],[cljs.core.first.call(null,keygroup),cljs.core.first.call(null,km),cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,km))))]);
}),cljs.core.filter.call(null,(function (p1__8561_SHARP_){return [cljs.core.str(p1__8561_SHARP_)].join('').contains(":snippet.by_key");
}),cljs.core.first.call(null,cljs.core.rest.call(null,keygroup))));
}),cljs.core.seq.call(null,cljs.core.deref.call(null,lt.objs.keyboard.keys))));
});
lt.plugins.lt_snippets.snippets.all_keymapped = (function all_keymapped(){var snippets = lt.plugins.lt_snippets.snippets.degroup.call(null,lt.plugins.lt_snippets.snippets.all.call(null));var shortcuts = lt.plugins.lt_snippets.snippets.get_shortcuts.call(null);return cljs.core.map.call(null,(function (snip){return cljs.core.assoc.call(null,snip,new cljs.core.Keyword(null,"shortcut","shortcut",671403960),(function (){var temp__4092__auto__ = cljs.core.some.call(null,(function (p1__8562_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(snip),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__8562_SHARP_)))
{return p1__8562_SHARP_;
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
lt.plugins.lt_snippets.snippets.get_tabstops = (function get_tabstops(snippet){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__8563_SHARP_){return !(cljs.core._EQ_.call(null,p1__8563_SHARP_,"$0"));
}),cljs.core.re_seq.call(null,/\$\d+/,snippet)));
});
lt.plugins.lt_snippets.snippets.tabstops_QMARK_ = (function tabstops_QMARK_(snippet){return cljs.core.empty_QMARK_.call(null,lt.plugins.lt_snippets.snippets.get_tabstops.call(null,snippet));
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
lt.plugins.lt_snippets.select_form.snippet_select_item = (function snippet_select_item(idx,item){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"data-snippet","data-snippet",1331916140),new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item)], null));var seq__8417_8445 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8418_8446 = null;var count__8419_8447 = 0;var i__8420_8448 = 0;while(true){
if((i__8420_8448 < count__8419_8447))
{var vec__8421_8449 = cljs.core._nth.call(null,chunk__8418_8446,i__8420_8448);var ev__8190__auto___8450 = cljs.core.nth.call(null,vec__8421_8449,0,null);var func__8191__auto___8451 = cljs.core.nth.call(null,vec__8421_8449,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8450,func__8191__auto___8451);
{
var G__8452 = seq__8417_8445;
var G__8453 = chunk__8418_8446;
var G__8454 = count__8419_8447;
var G__8455 = (i__8420_8448 + 1);
seq__8417_8445 = G__8452;
chunk__8418_8446 = G__8453;
count__8419_8447 = G__8454;
i__8420_8448 = G__8455;
continue;
}
} else
{var temp__4092__auto___8456 = cljs.core.seq.call(null,seq__8417_8445);if(temp__4092__auto___8456)
{var seq__8417_8457__$1 = temp__4092__auto___8456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8417_8457__$1))
{var c__7561__auto___8458 = cljs.core.chunk_first.call(null,seq__8417_8457__$1);{
var G__8459 = cljs.core.chunk_rest.call(null,seq__8417_8457__$1);
var G__8460 = c__7561__auto___8458;
var G__8461 = cljs.core.count.call(null,c__7561__auto___8458);
var G__8462 = 0;
seq__8417_8445 = G__8459;
chunk__8418_8446 = G__8460;
count__8419_8447 = G__8461;
i__8420_8448 = G__8462;
continue;
}
} else
{var vec__8422_8463 = cljs.core.first.call(null,seq__8417_8457__$1);var ev__8190__auto___8464 = cljs.core.nth.call(null,vec__8422_8463,0,null);var func__8191__auto___8465 = cljs.core.nth.call(null,vec__8422_8463,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8464,func__8191__auto___8465);
{
var G__8466 = cljs.core.next.call(null,seq__8417_8457__$1);
var G__8467 = null;
var G__8468 = 0;
var G__8469 = 0;
seq__8417_8445 = G__8466;
chunk__8418_8446 = G__8467;
count__8419_8447 = G__8468;
i__8420_8448 = G__8469;
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
lt.plugins.lt_snippets.select_form.snippet_select_form = (function snippet_select_form(this$,items){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-select-form","div.snippet-select-form",1444741338),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.lt_snippets.select_form.snippet_select_item,items)], null)], null));var seq__8429_8470 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8430_8471 = null;var count__8431_8472 = 0;var i__8432_8473 = 0;while(true){
if((i__8432_8473 < count__8431_8472))
{var vec__8433_8474 = cljs.core._nth.call(null,chunk__8430_8471,i__8432_8473);var ev__8190__auto___8475 = cljs.core.nth.call(null,vec__8433_8474,0,null);var func__8191__auto___8476 = cljs.core.nth.call(null,vec__8433_8474,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8475,func__8191__auto___8476);
{
var G__8477 = seq__8429_8470;
var G__8478 = chunk__8430_8471;
var G__8479 = count__8431_8472;
var G__8480 = (i__8432_8473 + 1);
seq__8429_8470 = G__8477;
chunk__8430_8471 = G__8478;
count__8431_8472 = G__8479;
i__8432_8473 = G__8480;
continue;
}
} else
{var temp__4092__auto___8481 = cljs.core.seq.call(null,seq__8429_8470);if(temp__4092__auto___8481)
{var seq__8429_8482__$1 = temp__4092__auto___8481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8429_8482__$1))
{var c__7561__auto___8483 = cljs.core.chunk_first.call(null,seq__8429_8482__$1);{
var G__8484 = cljs.core.chunk_rest.call(null,seq__8429_8482__$1);
var G__8485 = c__7561__auto___8483;
var G__8486 = cljs.core.count.call(null,c__7561__auto___8483);
var G__8487 = 0;
seq__8429_8470 = G__8484;
chunk__8430_8471 = G__8485;
count__8431_8472 = G__8486;
i__8432_8473 = G__8487;
continue;
}
} else
{var vec__8434_8488 = cljs.core.first.call(null,seq__8429_8482__$1);var ev__8190__auto___8489 = cljs.core.nth.call(null,vec__8434_8488,0,null);var func__8191__auto___8490 = cljs.core.nth.call(null,vec__8434_8488,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8489,func__8191__auto___8490);
{
var G__8491 = cljs.core.next.call(null,seq__8429_8482__$1);
var G__8492 = null;
var G__8493 = 0;
var G__8494 = 0;
seq__8429_8470 = G__8491;
chunk__8430_8471 = G__8492;
count__8431_8472 = G__8493;
i__8432_8473 = G__8494;
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
{var ed = temp__4092__auto__;var content = lt.plugins.lt_snippets.select_form.snippet_select_form.call(null,this$,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(info));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var callback = new cljs.core.Keyword(null,"callback","callback",841683895).cljs$core$IFn$_invoke$arity$1(info);var remove_form = ((function (content,line,callback){
return (function (this$__$1){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$__$1)).clear();
lt.object.raise.call(null,this$__$1,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$__$1);
});})(content,line,callback))
;lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),false], null))));
lt.util.dom.on.call(null,content,"keydown",(function (ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
var snippet = lt.util.dom.attr.call(null,lt.util.dom.$.call(null,"option:checked",el),"data-snippet");remove_form.call(null,this$);
return callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snippet","snippet",3247236239),snippet], null));
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
lt.plugins.lt_snippets.snippet_form.tabstop_to_input = (function tabstop_to_input(tabstop){return [cljs.core.str("<span contenteditable='true' data-ph='"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","#")),cljs.core.str("' class='snipvar-"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","")),cljs.core.str("'></span>")].join('');
});
lt.plugins.lt_snippets.snippet_form.tabstop_to_mirror = (function tabstop_to_mirror(tabstop){return [cljs.core.str("<span class='snipvar-"),cljs.core.str(clojure.string.replace.call(null,tabstop,"$","")),cljs.core.str("'"),cljs.core.str("></span>")].join('');
});
lt.plugins.lt_snippets.snippet_form.snippet_to_form = (function snippet_to_form(snippet,tabstops){var snippet__$1 = clojure.string.replace.call(null,snippet,"$0","");var tabstops__$1 = tabstops;while(true){
if(cljs.core.empty_QMARK_.call(null,tabstops__$1))
{return snippet__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var tabstop = cljs.core.first.call(null,tabstops__$1);{
var G__8520 = clojure.string.replace.call(null,clojure.string.replace_first.call(null,snippet__$1,tabstop,lt.plugins.lt_snippets.snippet_form.tabstop_to_input.call(null,tabstop)),tabstop,lt.plugins.lt_snippets.snippet_form.tabstop_to_mirror.call(null,tabstop));
var G__8521 = cljs.core.rest.call(null,tabstops__$1);
snippet__$1 = G__8520;
tabstops__$1 = G__8521;
continue;
}
} else
{return null;
}
}
break;
}
});
lt.plugins.lt_snippets.snippet_form.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__8497){var vec__8498 = p__8497;var k = cljs.core.nth.call(null,vec__8498,0,null);var v = cljs.core.nth.call(null,vec__8498,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.lt_snippets.snippet_form.set_mirrored_values = (function set_mirrored_values(form,el){var c = el.className;var v = lt.util.dom.html.call(null,el);var seq__8503 = cljs.core.seq.call(null,cljs.core.rest.call(null,lt.util.dom.$$.call(null,[cljs.core.str("span."),cljs.core.str(c)].join(''),form)));var chunk__8504 = null;var count__8505 = 0;var i__8506 = 0;while(true){
if((i__8506 < count__8505))
{var mirr = cljs.core._nth.call(null,chunk__8504,i__8506);lt.util.dom.html.call(null,mirr,v);
{
var G__8522 = seq__8503;
var G__8523 = chunk__8504;
var G__8524 = count__8505;
var G__8525 = (i__8506 + 1);
seq__8503 = G__8522;
chunk__8504 = G__8523;
count__8505 = G__8524;
i__8506 = G__8525;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8503);if(temp__4092__auto__)
{var seq__8503__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8503__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8503__$1);{
var G__8526 = cljs.core.chunk_rest.call(null,seq__8503__$1);
var G__8527 = c__7561__auto__;
var G__8528 = cljs.core.count.call(null,c__7561__auto__);
var G__8529 = 0;
seq__8503 = G__8526;
chunk__8504 = G__8527;
count__8505 = G__8528;
i__8506 = G__8529;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__8503__$1);lt.util.dom.html.call(null,mirr,v);
{
var G__8530 = cljs.core.next.call(null,seq__8503__$1);
var G__8531 = null;
var G__8532 = 0;
var G__8533 = 0;
seq__8503 = G__8530;
chunk__8504 = G__8531;
count__8505 = G__8532;
i__8506 = G__8533;
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
lt.plugins.lt_snippets.snippet_form.form_to_snippet = (function form_to_snippet(form,snippet){var temp__4092__auto__ = lt.util.dom.$$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),form);if(cljs.core.truth_(temp__4092__auto__))
{var inputs = temp__4092__auto__;return lt.plugins.lt_snippets.snippet_form.map_replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__8507_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[clojure.string.replace.call(null,p1__8507_SHARP_.className,/snipvar-/,"$")],[lt.util.dom.html.call(null,p1__8507_SHARP_)]);
}),inputs)),snippet);
} else
{return null;
}
});
lt.plugins.lt_snippets.snippet_form.form = (function form(this$,info){var e__8189__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__8514_8534 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"span","span",1017440956),lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907))));
return lt.util.dom.prevent.call(null,e);
})], null)));var chunk__8515_8535 = null;var count__8516_8536 = 0;var i__8517_8537 = 0;while(true){
if((i__8517_8537 < count__8516_8536))
{var vec__8518_8538 = cljs.core._nth.call(null,chunk__8515_8535,i__8517_8537);var ev__8190__auto___8539 = cljs.core.nth.call(null,vec__8518_8538,0,null);var func__8191__auto___8540 = cljs.core.nth.call(null,vec__8518_8538,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8539,func__8191__auto___8540);
{
var G__8541 = seq__8514_8534;
var G__8542 = chunk__8515_8535;
var G__8543 = count__8516_8536;
var G__8544 = (i__8517_8537 + 1);
seq__8514_8534 = G__8541;
chunk__8515_8535 = G__8542;
count__8516_8536 = G__8543;
i__8517_8537 = G__8544;
continue;
}
} else
{var temp__4092__auto___8545 = cljs.core.seq.call(null,seq__8514_8534);if(temp__4092__auto___8545)
{var seq__8514_8546__$1 = temp__4092__auto___8545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8514_8546__$1))
{var c__7561__auto___8547 = cljs.core.chunk_first.call(null,seq__8514_8546__$1);{
var G__8548 = cljs.core.chunk_rest.call(null,seq__8514_8546__$1);
var G__8549 = c__7561__auto___8547;
var G__8550 = cljs.core.count.call(null,c__7561__auto___8547);
var G__8551 = 0;
seq__8514_8534 = G__8548;
chunk__8515_8535 = G__8549;
count__8516_8536 = G__8550;
i__8517_8537 = G__8551;
continue;
}
} else
{var vec__8519_8552 = cljs.core.first.call(null,seq__8514_8546__$1);var ev__8190__auto___8553 = cljs.core.nth.call(null,vec__8519_8552,0,null);var func__8191__auto___8554 = cljs.core.nth.call(null,vec__8519_8552,1,null);lt.util.dom.on.call(null,e__8189__auto__,ev__8190__auto___8553,func__8191__auto___8554);
{
var G__8555 = cljs.core.next.call(null,seq__8514_8546__$1);
var G__8556 = null;
var G__8557 = 0;
var G__8558 = 0;
seq__8514_8534 = G__8555;
chunk__8515_8535 = G__8556;
count__8516_8536 = G__8557;
i__8517_8537 = G__8558;
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
lt.plugins.lt_snippets.snippet_form.__BEH__remove_snippet_form = (function __BEH__remove_snippet_form(this$){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets.snippet-form","remove-snippet-form","lt.plugins.lt-snippets.snippet-form/remove-snippet-form",1435732480),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.snippet_form.__BEH__remove_snippet_form,new cljs.core.Keyword(null,"desc","desc",1016984067),"Behavior to remove inline snippet form (default on enter and esc or last/no inputs)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425),null], null), null));
lt.plugins.lt_snippets.snippet_form.last_tabstop_QMARK_ = (function last_tabstop_QMARK_(form,el){return cljs.core._EQ_.call(null,el.className,cljs.core.last.call(null,lt.util.dom.$$.call(null,"span[contenteditable=true]",form)).className);
});
lt.plugins.lt_snippets.snippet_form.complete_snippet_form = (function complete_snippet_form(this$,ed,form,callback){var snip = lt.plugins.lt_snippets.snippet_form.form_to_snippet.call(null,form,new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
lt.objs.editor.focus.call(null,ed);
return callback.call(null,ed,snip);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets.snippet-form","inline-form","lt.plugins.lt-snippets.snippet-form/inline-form",2446346597),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.form","inline.snippet.form",3354835868),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.lt_snippets.snippet_form.form.call(null,this$,info);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(info));var callback = new cljs.core.Keyword(null,"callback","callback",841683895).cljs$core$IFn$_invoke$arity$1(info);lt.util.dom.html.call(null,content,lt.plugins.lt_snippets.snippet_form.snippet_to_form.call(null,snippet,lt.plugins.lt_snippets.snippets.get_tabstops.call(null,snippet)));
lt.util.dom.on.call(null,content,"keyup",(function (ev){return lt.plugins.lt_snippets.snippet_form.set_mirrored_values.call(null,content,ev.target);
}));
lt.util.dom.on.call(null,content,"keydown",(function (ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
return lt.plugins.lt_snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,callback);
} else
{if(cljs.core._EQ_.call(null,9,kc))
{if(lt.plugins.lt_snippets.snippet_form.last_tabstop_QMARK_.call(null,content,el))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
return lt.plugins.lt_snippets.snippet_form.complete_snippet_form.call(null,this$,ed,content,callback);
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-snippets","lt-snippets",3973666061)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-snippets","show-snippet-hints","lt.plugins.lt-snippets/show-snippet-hints",2213282386)], null),new cljs.core.Keyword(null,"name","name",1017277949),"lt-snippets");
lt.plugins.lt_snippets.lt_snippets = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","lt-snippets","lt.plugins.lt-snippets/lt-snippets",792304611));
lt.plugins.lt_snippets.find_pos = (function find_pos(ed,from,txt){return cljs.core.first.call(null,cljs.core.map.call(null,(function (p1__8305_SHARP_){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,p1__8305_SHARP_,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__8305_SHARP_).indexOf(txt)),new cljs.core.Keyword(null,"text","text",1017460895));
}),cljs.core.filter.call(null,(function (p1__8304_SHARP_){return new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(p1__8304_SHARP_).contains(txt);
}),cljs.core.map.call(null,(function (p1__8303_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"text","text",1017460895)],[p1__8303_SHARP_,lt.objs.editor.line_handle.call(null,ed,p1__8303_SHARP_).text]);
}),cljs.core.range.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from),(1 + new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed))))))));
});
lt.plugins.lt_snippets.indent_and_move = (function indent_and_move(ed,from,to,focus){lt.objs.editor.set_selection.call(null,ed,from,to);
lt.objs.editor.indent_selection.call(null,ed,"smart");
lt.objs.editor.move_cursor.call(null,ed,focus);
lt.objs.editor.indent_selection.call(null,ed,"smart");
return lt.objs.editor.focus.call(null,ed);
});
lt.plugins.lt_snippets.complete_snippet = (function complete_snippet(ed,snippet){var pos = lt.objs.editor.__GT_cursor.call(null,ed);lt.objs.editor.insert_at_cursor.call(null,ed,snippet);
if(cljs.core.not.call(null,snippet.contains("$0")))
{return lt.plugins.lt_snippets.indent_and_move.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed),lt.objs.editor.__GT_cursor.call(null,ed));
} else
{var temp__4092__auto__ = lt.plugins.lt_snippets.find_pos.call(null,ed,pos,"$0");if(cljs.core.truth_(temp__4092__auto__))
{var cursor = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,cursor,cljs.core.update_in.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core._PLUS_,2),"");
return lt.plugins.lt_snippets.indent_and_move.call(null,ed,pos,lt.objs.editor.__GT_cursor.call(null,ed),cursor);
} else
{return null;
}
}
});
lt.plugins.lt_snippets.insert_snippet = (function insert_snippet(item){if(cljs.core.truth_(item))
{var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var snippet = new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(item);if(lt.plugins.lt_snippets.snippets.tabstops_QMARK_.call(null,snippet))
{return lt.plugins.lt_snippets.complete_snippet.call(null,ed,snippet);
} else
{return lt.plugins.lt_snippets.snippet_form.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"callback","callback",841683895),lt.plugins.lt_snippets.complete_snippet,new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));
}
} else
{return null;
}
});
lt.plugins.lt_snippets.__GT_token = (function __GT_token(ed){return lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
lt.plugins.lt_snippets.clear_token = (function clear_token(ed){var token = lt.plugins.lt_snippets.__GT_token.call(null,ed);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed));return lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"stop","stop",1017445236).cljs$core$IFn$_invoke$arity$1(token)], null),"");
});
lt.plugins.lt_snippets.snippet_by_token = (function snippet_by_token(ed){return lt.plugins.lt_snippets.snippets.by.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.lt_snippets.__GT_token.call(null,ed)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.lt_snippets.snippets.all.call(null));
});
lt.plugins.lt_snippets.maybe_select_snippet = (function maybe_select_snippet(ed,items){if(cljs.core.seq.call(null,items))
{if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,items)))
{return lt.plugins.lt_snippets.insert_snippet.call(null,cljs.core.first.call(null,items));
} else
{return lt.plugins.lt_snippets.select_form.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"callback","callback",841683895),lt.plugins.lt_snippets.insert_snippet,new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"items","items",1114430258),items], null));
}
} else
{return null;
}
});
lt.plugins.lt_snippets.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.lt_snippets.selector = (function selector(opts){var G__8307 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8307,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608));
return G__8307;
});
lt.plugins.lt_snippets.add_selector = lt.plugins.lt_snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.lt_snippets.snippets.all_keymapped,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8310_SHARP_,p2__8311_SHARP_,p3__8309_SHARP_,p4__8308_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__8308_SHARP_)),cljs.core.str("</p>"),cljs.core.str("<p class='binding'>"),cljs.core.str([cljs.core.str("Key: "),cljs.core.str(p3__8309_SHARP_),cljs.core.str((function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"shortcut","shortcut",671403960).cljs$core$IFn$_invoke$arity$1(p4__8308_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var km = temp__4092__auto__;return [cljs.core.str(" keymap: "),cljs.core.str(km)].join('');
} else
{return null;
}
})()),cljs.core.str("</p>")].join(''))].join('');
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Select snippet",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.lt_snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.plugins.lt_snippets.insert_snippet.call(null,item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_token","snippet.by_token",4458950964),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Expand by editor token",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = cljs.core.seq.call(null,lt.plugins.lt_snippets.snippet_by_token.call(null,ed));if(temp__4092__auto____$1)
{var items = temp__4092__auto____$1;lt.plugins.lt_snippets.clear_token.call(null,ed);
return lt.plugins.lt_snippets.maybe_select_snippet.call(null,ed,items);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_key","snippet.by_key",4762727386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Snippets: Invoke snippet by its key (and editor tag)",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.lt_snippets.maybe_select_snippet.call(null,ed,lt.plugins.lt_snippets.snippets.by.call(null,key,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),lt.plugins.lt_snippets.snippets.all.call(null)));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=lt_snippets_compiled.js.map