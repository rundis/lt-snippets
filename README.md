#LightTable Snippets


##Snippets support for Light Table
This plugin is loosely inspired by the template support in [TextMate](http://macromates.com/) and [YASnippet](https://github.com/capitaomorte/yasnippet). It is not intended to be a straight port and will utilize the power of clojurescript when more advanced features are added. For simple yasnippets it might be possible to write a simple conversion util without to much hassle.


##Installing
The plugin can be installed using the LightTable plugin manager (or clone this repo to your plugins folder, make sure you call the folder lt-snippets!).
You probably will need to reload behaviors for the plugin to work.


##Getting started
* A few snippets for inspiration/trial: [My LightTable Settings](https://github.com/rundis/LightTable-settings). My settings/snippets directory uses submodules to pull in a couple of snippet collections
    * [lt-buster-snippets](https://github.com/rundis/lt-buster-snippets) - Snippets for buster tests handy when using the [InstaBuster](https://github.com/busterjs/lt-instabuster) plugin
    * [lt-plugin-snippets](https://github.com/rundis/lt-plugin-snippets) - Handy snippets when doing Light Table plugin development

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
Currently reads any .edn file residing in `$lthome/settings/snippets`. It will also walk any subdirectories.
There is no limits to how many files you can have. You can put all snippets in one file, or split them into several.


###Snippet definition files
__NOTE: Will most likely change a bit in upcoming versions__


```clojure
{
  :modes {:+ #{:editor.javascript}}
  :snippets [
    {:name "Buster TestCase"
    :key "tc"
    :snippet-file "testcase.snip"
    :modes {:+ #{:editor.typescript}} ; optional (probably rarely used)

    {:name "Buster Assert Equals"
    :key "ae"
    :snippet "assert.equals($1, $2);$0"}]}
```

####Data format description
* modes - What kind of editor will you be using the snippet in. Can be specified at snippet level as well (see below for detailed description)
* name - Descriptive name used in menus/tooltips etc
* key  - Identifier for the snippet. If more than one snippet matches you will be prompted to select one from a list of matching snippets
* snippet - The actual snippet template. Mostly useful for one-liners
* snippet-file - Filename of your snippet template.
  * If specified, overrides whatever specified in :snippet
  * if file ```($path of edn file$/$snippet.file$)``` isn't found the snippet will just return the path.
  * You should probably use this property for anything more than one-liners to keep the formatting sane

####More on snippet modes
Snippet modes uses a syntax similar to Light Table behaviors. The modes specified will be matched against the defined tags for the editor in which you are about to expand a snippet.

```clojure
{ :modes {:+ #{:editor.foo} :- #{:editor.bar}} }
;; Means the snippet will resolve if:
;; * the editor has a tag :editor.foo
;; * but not if the editor also has a tag :editor.bar
```

Modes can be specified at "group" level, meaning the __:modes__ property in the top level map of your snippet definition file. This will the apply to all snippets in the definition file, unless you specify __:modes__ at the snippet level.


```clojure
{:+ #{:editor.foo :editor.bar}
 :- #{:editor.transient :editor.plugin }} ;; modes at "group" level

{:+ #{:editor.baz :editor.transient}
 :- #{:editor.foo :editor.foobar}} ;; modes at "snippet" level

;; will resolve to the following modes for the snippet:
{:+ #{:editor.bar :editor.baz :editor.transient}
 :- #{:editor.plugin :editor.foo : editor.foobar}}
```

###Snippet format
* Use __$1__, __$2__ etc for defining tabstops for your template
* Repeated use of __$1__, __$2__ etc will mirror the values for the first instance
* __$0__ has a special meaning, and is not a tabstop, but rather where you wish to focus the cursor once the template variables have been completed

Linebreaks/indentations is currently important in your snippet templates for nice display in snippet completion mode. Another reason to have templates beyond one liners in a separate file.

####Placeholders
You can have placeholder values for your tabstops. The syntax is ```${1:placeholder}```
When prompted to complete a snippet the placeholder value will be highlighted (if you wish to keep it just tab to next tabstop).
* A tabstop with a placeholder value takes precedence over a tabstop with the same number as one without, resulting in the latter becoming a mirrored value.
* If two tabstops with the same tabstop number has placeholders, the first becomes a tabstop, the other becomes a mirror


####Snippet navigation
* Use tab to move between tabstops
* When you tab out of last tabstop or you press enter, the snippet will be completed with whatever you may have filled in of template variables.
* Esc will close snippet completion and restore editor to prior state



##Roadmap
* More keyboard friendly key conflict resolution
* Feature to use common key prefix to allow easy setup of all snippet shortcuts ?
* Configurable locations for snippet files
* pre/post code snippets ?
* Variables with select values


##Version
* 0.0.2 Support placeholders, escape html, prefer $lthome/settings/snippets to $lthome/snippets and a few other minor fixes. Some breaking changes. Pls see [Release notes](https://github.com/rundis/lt-snippets/releases/tag/0.0.2)
* 0.0.1 Initial release with fairly usable features

##License
GPLv3 license, same as [Light Table](https://github.com/LightTable/LightTable). See LICENSE.md for the full text.
