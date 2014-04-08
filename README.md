#LightTable Snippets


##Snippets support for Light Table
This plugin is loosely inspired by the template support in [TextMate](http://macromates.com/) and [YASnippet](https://github.com/capitaomorte/yasnippet). It is not intended to be a straight port and will utilize the power of clojurescript when more advanced features are added. For simple yasnippets it might be possible to write a simple conversion util without to much hassle.


##Installing
The plugin can (soon!) be installed using the LightTable plugin manager (or clone this repo to your plugins folder, make sure you call the folder lt-snippets!).
You probably will need to reload behaviors for the plugin to work.


##Features

###Snippet templates location
Currently reads any .edn file residing in `$lthome/snippets`
There is no limits to how many files you can have. You can put all snippets in one file, or split them into several.


###Snippet format
__NOTE: Subject to change__


```clojure
[
 {:name "Buster TestCase"
  :key "buster_testcase"
  :snippet
"(function () {
  buster.testCase(\"$1\", {
    /* $1 */
    $0
  });
}());"
  }
 {:name "Buster Test"
  :key "buster_test"
  :snippet
"\"$1\": function() {
  $0
},"
  }

 ]
```

Currently it is just a vector of maps with the following properties:
* name - Descriptive name used in menus/tooltips etc
* key  - Identifier for the snippet (currently if to snippet share the same key, the behavior if which is selected is not determenistic)
* snippet - The actual snippet template.
  * Use __$1__, __$2__ etc for defining tabstops for your template
  * Repeated use of __$1__, __$2__ etc will mirror the values for the first instance
  * __$0__ has a special meaning, and is not a tabstop, but rather where you wish to focus the cursor once the template variables have been completed


###View available shortcuts (and select if you wish)
You just open the command pane (ctrl-space) and select the __Select snippet to invoke__ command. A list of defined snippets will be presented.


###Creating shortcuts
Its really easy setting up shortcuts, just edit your user.keymap file.
```clojure
:editor.javascript { "ctrl-t ctrl-c" [(:snippet.by_key "buster_testcase")]
                     "ctrl-t ctrl-t" [(:snippet.by_key "buster_test")]}
```


##Roadmap
* Much more flexible grouping
* Configurable locations for snippet files
* Scoping using tags (:editor.javascript, :editor or other tags)
* pre/post code snippets ?
* Variables with select values
* Read snippet property from a separate file (easier formatting)


##Version
No release as of yet

##License
GPLv3 license, same as [Light Table](https://github.com/LightTable/LightTable). See LICENSE.md for the full text.