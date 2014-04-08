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
lt.plugins.lt_snippets.snippet_to_form = (function snippet_to_form(snippet){var vars = cljs.core.re_seq.call(null,/\$\d+/,snippet);var res = clojure.string.replace.call(null,snippet,/\$0/,"");return clojure.string.replace.call(null,res,/\$1/,[cljs.core.str("<input type='text' class='snipvar-"),cljs.core.str("1"),cljs.core.str("'"),cljs.core.str("/>")].join(''));
});
lt.plugins.lt_snippets.text_width = (function text_width(text){var el = cljs.core.first.call(null,lt.util.dom.make.call(null,[cljs.core.str("<span style='position:absolute;visibility:hidden'>"),cljs.core.str(text),cljs.core.str("</span>")].join('')));lt.util.dom.append.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907)),el);
var width = lt.util.dom.width.call(null,el);lt.util.dom.remove.call(null,el);
return (width + 5);
});
lt.plugins.lt_snippets.snippet_form = (function snippet_form(this$,info){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.snippet-form","div.snippet-form",3309679907),"Snippet content"], null));var seq__24416_24444 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
})], null)));var chunk__24417_24445 = null;var count__24418_24446 = 0;var i__24419_24447 = 0;while(true){
if((i__24419_24447 < count__24418_24446))
{var vec__24420_24448 = cljs.core._nth.call(null,chunk__24417_24445,i__24419_24447);var ev__8184__auto___24449 = cljs.core.nth.call(null,vec__24420_24448,0,null);var func__8185__auto___24450 = cljs.core.nth.call(null,vec__24420_24448,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___24449,func__8185__auto___24450);
{
var G__24451 = seq__24416_24444;
var G__24452 = chunk__24417_24445;
var G__24453 = count__24418_24446;
var G__24454 = (i__24419_24447 + 1);
seq__24416_24444 = G__24451;
chunk__24417_24445 = G__24452;
count__24418_24446 = G__24453;
i__24419_24447 = G__24454;
continue;
}
} else
{var temp__4092__auto___24455 = cljs.core.seq.call(null,seq__24416_24444);if(temp__4092__auto___24455)
{var seq__24416_24456__$1 = temp__4092__auto___24455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24416_24456__$1))
{var c__13943__auto___24457 = cljs.core.chunk_first.call(null,seq__24416_24456__$1);{
var G__24458 = cljs.core.chunk_rest.call(null,seq__24416_24456__$1);
var G__24459 = c__13943__auto___24457;
var G__24460 = cljs.core.count.call(null,c__13943__auto___24457);
var G__24461 = 0;
seq__24416_24444 = G__24458;
chunk__24417_24445 = G__24459;
count__24418_24446 = G__24460;
i__24419_24447 = G__24461;
continue;
}
} else
{var vec__24421_24462 = cljs.core.first.call(null,seq__24416_24456__$1);var ev__8184__auto___24463 = cljs.core.nth.call(null,vec__24421_24462,0,null);var func__8185__auto___24464 = cljs.core.nth.call(null,vec__24421_24462,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___24463,func__8185__auto___24464);
{
var G__24465 = cljs.core.next.call(null,seq__24416_24456__$1);
var G__24466 = null;
var G__24467 = 0;
var G__24468 = 0;
seq__24416_24444 = G__24465;
chunk__24417_24445 = G__24466;
count__24418_24446 = G__24467;
i__24419_24447 = G__24468;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.lt_snippets.__BEH__remove_snippet_form = (function __BEH__remove_snippet_form(this$){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
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
lt.plugins.lt_snippets.map_replace = (function map_replace(m,text){return cljs.core.reduce.call(null,(function (acc,p__24424){var vec__24425 = p__24424;var k = cljs.core.nth.call(null,vec__24425,0,null);var v = cljs.core.nth.call(null,vec__24425,1,null);return clojure.string.replace.call(null,acc,[cljs.core.str(k)].join(''),[cljs.core.str(v)].join(''));
}),text,m);
});
lt.plugins.lt_snippets.map_replace.call(null,new cljs.core.PersistentArrayMap(null, 2, ["$1","dill","$2","dall"], null),"My stupid string with $1 and $2");
lt.plugins.lt_snippets.resize_form_input = (function resize_form_input(el){var v = el.value;return el.style.width = lt.plugins.lt_snippets.text_width.call(null,v);
});
lt.plugins.lt_snippets.set_mirrored_values = (function set_mirrored_values(form,el){var c = el.className;var v = el.value;var seq__24430 = cljs.core.seq.call(null,cljs.core.rest.call(null,lt.util.dom.$$.call(null,[cljs.core.str("input."),cljs.core.str(c)].join(''),form)));var chunk__24431 = null;var count__24432 = 0;var i__24433 = 0;while(true){
if((i__24433 < count__24432))
{var mirr = cljs.core._nth.call(null,chunk__24431,i__24433);mirr.value = v;
lt.plugins.lt_snippets.resize_form_input.call(null,mirr);
{
var G__24469 = seq__24430;
var G__24470 = chunk__24431;
var G__24471 = count__24432;
var G__24472 = (i__24433 + 1);
seq__24430 = G__24469;
chunk__24431 = G__24470;
count__24432 = G__24471;
i__24433 = G__24472;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24430);if(temp__4092__auto__)
{var seq__24430__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24430__$1))
{var c__13943__auto__ = cljs.core.chunk_first.call(null,seq__24430__$1);{
var G__24473 = cljs.core.chunk_rest.call(null,seq__24430__$1);
var G__24474 = c__13943__auto__;
var G__24475 = cljs.core.count.call(null,c__13943__auto__);
var G__24476 = 0;
seq__24430 = G__24473;
chunk__24431 = G__24474;
count__24432 = G__24475;
i__24433 = G__24476;
continue;
}
} else
{var mirr = cljs.core.first.call(null,seq__24430__$1);mirr.value = v;
lt.plugins.lt_snippets.resize_form_input.call(null,mirr);
{
var G__24477 = cljs.core.next.call(null,seq__24430__$1);
var G__24478 = null;
var G__24479 = 0;
var G__24480 = 0;
seq__24430 = G__24477;
chunk__24431 = G__24478;
count__24432 = G__24479;
i__24433 = G__24480;
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
{var kv = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__24434_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[clojure.string.replace.call(null,p1__24434_SHARP_.className,/snipvar-/,"$")],[p1__24434_SHARP_.value]);
}),inputs));var result = lt.plugins.lt_snippets.map_replace.call(null,kv,snippet);lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"remove.snippet.form","remove.snippet.form",2193857425));
lt.objs.editor.focus.call(null,ed);
lt.objs.editor.insert_at_cursor.call(null,ed,result);
return lt.plugins.lt_snippets.find_line_containing.call(null,ed,"$0",(function (line_no){var ch = lt.objs.editor.line.call(null,ed,line_no).indexOf("$0");lt.objs.editor.replace.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),(2 + ch)], null),"");
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line_no,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null));
}));
} else
{return null;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.snippet.form","inline.snippet.form",3354835868),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.lt_snippets.snippet_form.call(null,this$,info);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));lt.util.dom.html.call(null,content,lt.plugins.lt_snippets.snippet_to_form.call(null,new cljs.core.Keyword(null,"snippet","snippet",3247236239).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(info))));
lt.util.dom.on.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),content),"keyup",(function (ev){lt.plugins.lt_snippets.resize_form_input.call(null,ev.target);
return lt.plugins.lt_snippets.set_mirrored_values.call(null,content,ev.target);
}));
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
lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),true], null))));
return content;
} else
{return null;
}
}));
lt.plugins.lt_snippets.snippet_dir = lt.objs.files.lt_user_dir.call(null,"snippets");
lt.plugins.lt_snippets.read_snippets = (function read_snippets(){return cljs.core.partial.call(null,cljs.core.mapcat,cljs.core.identity).call(null,cljs.core.partial.call(null,cljs.core.map,(function (p1__24436_SHARP_){return cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,lt.objs.files.join.call(null,lt.plugins.lt_snippets.snippet_dir,p1__24436_SHARP_)));
})).call(null,cljs.core.filter.call(null,(function (p1__24435_SHARP_){return cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,p1__24435_SHARP_),"edn");
}),lt.objs.files.ls_sync.call(null,lt.plugins.lt_snippets.snippet_dir))));
});
lt.plugins.lt_snippets.snippet_by_key = (function snippet_by_key(key){return cljs.core.some.call(null,(function (p1__24437_SHARP_){if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__24437_SHARP_)))
{return p1__24437_SHARP_;
} else
{return null;
}
}),lt.plugins.lt_snippets.read_snippets.call(null));
});
lt.plugins.lt_snippets.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_snippets.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.lt_snippets.selector = (function selector(opts){var G__24439 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__24439,new cljs.core.Keyword("lt.plugins.lt-snippets","set-selected","lt.plugins.lt-snippets/set-selected",2891183608));
return G__24439;
});
lt.plugins.lt_snippets.add_selector = lt.plugins.lt_snippets.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.lt_snippets.read_snippets,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__24442_SHARP_,p2__24443_SHARP_,p3__24440_SHARP_,p4__24441_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__24440_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p4__24441_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.lt_snippets.insert_snippet = (function insert_snippet(item){var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var form_ui = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-snippets","inline-form","lt.plugins.lt-snippets/inline-form",1285454342),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));return lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.select","snippet.select",936366687),new cljs.core.Keyword(null,"desc","desc",1016984067),"Select snippet to invoke",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.lt_snippets.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.plugins.lt_snippets.insert_snippet.call(null,item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"snippet.by_key","snippet.by_key",4762727386),new cljs.core.Keyword(null,"desc","desc",1016984067),"Invoke snippet by its key",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (key){return lt.plugins.lt_snippets.insert_snippet.call(null,lt.plugins.lt_snippets.snippet_by_key.call(null,key));
})], null));
}

//# sourceMappingURL=lt_snippets_compiled.js.map