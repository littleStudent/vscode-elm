### 0.14.1 - 21.06.2017
* Added the ability to include function/type/type alias comments in intellisense (by @andrewsdev)
* Fixed bugs in parsing elm-oracle hover results and bugs in userProject hover results (by @andrewsdev)

### 0.14.0 - 15.06.2017
* Fix defaultModel snippet, Add Html.program snippet (by @iocube)
* Bugfix: Error with one-line suggested annotation (by @hakonrossebo)
* Handle block comments (by @hakonrossebo)
* Improvements/bug fixes for user project intellisense (by @andrewsdev):
  - Bug fix: writing type signature before writing the function definition behavior
  - Bug fix: `/as/` regex for the list of imports behavior
  - Bug fix: name of a user's type or type alias were not included in intellisense results
  - Feature: Primitive types are now included in autocomplete when writing a function definition
  - Feature: limit on user intellisense 'comment' size now better indicates it has hit a settings limit
  - Feature: Can now set `elm.userProjectMaxCommentSize` to 0 to bypass the limit on user intellisense 'comment' size
  - Feature: Working Intellisense (hover and autocomplete) for user modules with a '.'. Custom configuration to control this feature.

### 0.13.0 - 08.06.2017
* Workspace symbols implementation (by @hakonrossebo)
* Elm-reactor subdir traversal (by @hakonrossebo)
* Command to stop Elm REPL (by @hakonrossebo)
* Elm-make uses path correctly. Also introduce special file config (by @hakonrossebo)

### 0.12.0 - 03.06.2017
* add auto-closing quotes to config (by @kojuro-kun)
* Changes snippets to 4 space indentation (by @hakonrossebo)
* Fixes double module name in autocomplete (by @hakonrossebo)
* Autocomplete handles aliased module names (by @hakonrossebo)
* Elm-format error as StatusBar instead of ErrorMessage (by @hakonrossebo)
* Initial implementation of CodeActions (function type annotations, misspelled variable names, types and patterns) (by @hakonrossebo)
* Implements go to definition for document (by @hakonrossebo)

### 0.11.2 - 10.05.2017
* Improved Linter so that issues are associated with the correct files (by @danheuck )
* Fix for elm-oracle being fed entire elm file (by @dannyob)

### 0.11.1 - 10.05.2017
* Fix keyboard shortcuts

### 0.11.0 - 08.05.2017
* Add `Elm: Browse package` command
* Fix paths concatenation issue for non-Windows machines

### 0.10.0 - 05.05.2017

* Initial changelog entry, so all working features are listed:

* Syntax highlighting
* Autocomplete (for external packages and experimentally for local projects)
* Error highlighting
* Code formatting
* Hover info (for external packages and experimentally for local projects)
* Document Symbol provider
* Integration with Elm Reactor
* Integration with Elm Make
* Integration with Elm Package
* REPL support
* Custom Elm Snippets

