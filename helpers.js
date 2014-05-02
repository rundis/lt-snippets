console.log("Loading helpers.js");

window.snip$ = (function() {

  var path = require("path");

  function currEd() { return lt.objs.editor.pool.last_active.call(null); }

  function currPath() { return lt.objs.tabs.__GT_path(currEd()); }

  function hasSelection() { return lt.objs.editor.selection_QMARK_.call(null, currEd()); }

  function selection () { return lt.objs.editor.selection(currEd()); }

  function cutSelection() { lt.objs.editor.cut(currEd()); }

  function wrapSelection() {
    if(hasSelection()) {
      var text = selection();
      cutSelection();
      return text;
    }
  };


  return {
    currPath: currPath,
    path: path,
    wrapSelection: wrapSelection

  }

})();
