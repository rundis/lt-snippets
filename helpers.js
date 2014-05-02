window.snip$ = (function() {

  var path = require("path");

  function currEd() { return lt.objs.editor.pool.last_active.call(null); }

  function currPath() { return lt.objs.tabs.__GT_path(currEd()); }

  function currFileName() {
    var p = currPath();
    return p ?  path.basename(p) : null;
  }

  function currFileNameSansExt() {
    var f = currFileName();
    return f ? f.replace(path.extname(f), "") : null;
  }

  function hasSelection() { return lt.objs.editor.selection_QMARK_.call(null, currEd()); }

  function selection() { return lt.objs.editor.selection(currEd()); }

  function selectLine() {
    var ed = currEd();
    var cmEd = lt.objs.editor.__GT_cm_ed.call(null, ed);

    var lineNo = cmEd.getCursor().line;
    var line = cmEd.getLine(lineNo);
    var length = line.length;

    cmEd.setSelection({line: lineNo, ch: 0}, {line: lineNo, ch: length});
    cmEd.setExtending(false);
  }

  function cutSelection() { lt.objs.editor.cut(currEd()); }

  function wrapSelection() {
    if(hasSelection()) {
      var text = selection();
      cutSelection();
      return text;
    }
  }

  function wrapSelectionEager() {
    if(!hasSelection()) {
      selectLine();
    }
    return wrapSelection();
  }


  return {
    currPath: currPath,
    currFileName: currFileName,
    currFileNameSansExt: currFileNameSansExt,
    path: path,
    wrapSelection: wrapSelection,
    wrapSelectionEager: wrapSelectionEager

  }

})();
