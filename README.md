#LightTable Snippets


##Snippets support for Light Table
This plugin is loosely inspired by the template support in [TextMate](http://macromates.com/) and [YASnippet](https://github.com/capitaomorte/yasnippet). It is not intended to be a straight port and will utilize the power of clojurescript when more advanced features are added. For simple yasnippets it might be possible to write a simple conversion util without to much hassle.


##Installing
The plugin can be installed using the LightTable plugin manager (or clone this repo to your plugins folder, make sure you call the folder lt-snippets!).
You probably will need to reload behaviors for the plugin to work.


##Getting started
* A few snippets for inspiration/trial: [Rundis Light Table Snippets](https://github.com/rundis/my-lt-snippets)

##Features

###View available shortcuts (and select if you wish)
You just open the command pane (ctrl-space) and select the __Snippets: Select snippet__ command. A list of defined snippets will be presented. Each item presented with name, key and keyboard shortcut (if defined, see below).

###Creating shortcuts
Its quite easy setting up shortcuts, just edit your user.keymap file.
```clojure
:editor.javascript { "ctrl-t ctrl-c" [(:snippet.by_key "tc")]
                     "ctrl-a ctrl-e" [(:snippet.by_key "ae")]}
```

###Invoke snippet by expanding key
Type the key in your editor and then select the command __Snippets: Expand by editor token__.


###Key conflicts
When more than one snippet matches a given key (for a given editor type), a select list will popup inline prompting you to select one of the alternatives.


###Snippet templates location
Currently reads any .edn file residing in `$lthome/snippets`. It will also walk any subdirectories.
There is no limits to how many files you can have. You can put all snippets in one file, or split them into several.


###Snippet definition files
__NOTE: Will most likely change a bit in upcoming versions__


```clojure
{
  :mode "editor.javascript"
  :snippets [
    {:name "Buster TestCase"
    :key "tc"
    :snippet-file "testcase.snip"}

    {:name "Buster Assert Equals"
    :key "ae"
    :snippet "assert.equals($1, $2);$0"}]}
```

####Data format description
* mode - What kind of editor will you be using the shortcut in. Maps to tag used when defining keyboard shortcuts. (__NOTE__ the absence of : in the mode name). Mode reduce the chances of key conflicts
* name - Descriptive name used in menus/tooltips etc
* key  - Identifier for the snippet (currently if two snippets share the same key, the behavior of which is selected is not determenistic. Planning to introduce a selection dialog in these cases)
* snippet - The actual snippet template. Mostly useful for one-liners
* snippet-file - Filename of your snippet template.
  * If specified, overrides whatever specified in :snippet
  * if file ```($path of edn file$/$snippet.file$)``` isn't found the snippet will just return the path.
  * You should probably use this property for anything more than one-liners to keep the formatting sane


###Snippet format
* Use __$1__, __$2__ etc for defining tabstops for your template
* Repeated use of __$1__, __$2__ etc will mirror the values for the first instance
* __$0__ has a special meaning, and is not a tabstop, but rather where you wish to focus the cursor once the template variables have been completed

Linebreaks/indentations is currently important in your snippet templates for nice display in snippet completion mode.

####Snippet navigation
* Use tab to move between tabstops
* When you tab out of last tabstop or you press enter, the snippet will be completed with whatever you may have filled in of template variables.
* Esc will close snippet completion and restore editor to prior state



##Roadmap
* Name placeholders(tabstops)
* More keyboard friendly key conflict resolution
* Feature to use common key prefix to allow easy setup of all snippet shortcuts ?
* Configurable locations for snippet files
* More flexible scoping with tags
* pre/post code snippets ?
* Variables with select values


##Version
0.0.1 Initial release with fairly usable features

##License
GPLv3 license, same as [Light Table](https://github.com/LightTable/LightTable). See LICENSE.md for the full text.
