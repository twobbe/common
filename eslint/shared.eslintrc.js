"use strict";
module.exports =
{
	"env" :
	{
		"es2021" : true
	},
	"parser"        : "@typescript-eslint/parser",
	"parserOptions" :
	{
		"ecmaVersion" : "latest"
	},
	// Use this comment to disable a rule in a file:	/* eslint-disable <rule> */
	// Use this comment to disable a rule for a block:	/* eslint-disable <rule> */   <YOUR BLOCK HERE, MULTIPLE LINES FINE>    /* eslint-enable <rule> */
	// Use this comment to disable a rule on a line:	// eslint-disable-line <rule>

	// 0 == off
	// 1 == warn
	// 2 == error

	"plugins" : ["sembiance", "array-func", "unicorn", "@typescript-eslint", "eslint-comments", "no-constructor-bind", "eslint-plugin-sonarjs", "no-floating-promise"],

	"rules" :
	{
		// Plugins
		"sembiance/disfavor-array-concat"             : 2,
		"sembiance/no-useless-variables"              : 2,
		"sembiance/prefer-array-force"                : 2,
		"sembiance/prefer-char-at"                    : 2,
		"sembiance/prefer-object-destructuring"       : 2,
		"sembiance/prefer-parameter-context-matching" : 0,
		"sembiance/shorter-arrow-funs"                : 2,
		"sembiance/this-in-tiptoe-in-class"           : 2,
		"sembiance/tiptoe-shorter-finish-wrap"        : 2,
		"sembiance/tiptoe-suffix-code"                : 2,
		"sembiance/class-property-semicolon"          : 2,
		"sembiance/await-in-async"                    : 2,

		// typescript-eslint : https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
		// NOTE: Due to the rules being coded in typescript, they are not included in the checkESLint app
		"@typescript-eslint/prefer-optional-chain" : 2,

		// array-func : https://github.com/freaktechnik/eslint-plugin-array-func
		"array-func/from-map"                : 2,
		"array-func/no-unnecessary-this-arg" : 2,
		"array-func/prefer-array-from"       : 2,
		"array-func/avoid-reverse"           : 2,
		"array-func/prefer-flat-map"         : 0,	// It doesn't understand that flatMap only works if .flat() has no argument https://github.com/freaktechnik/eslint-plugin-array-func/issues/61  So I use unicorn/prefer-flat-map instead
		"array-func/prefer-flat"             : 2,

		// eslint-comments : https://github.com/mysticatea/eslint-plugin-eslint-comments/tree/master/docs/rules
		"eslint-comments/disable-enable-pair"   : 0,
		"eslint-comments/no-aggregating-enable" : 2,
		"eslint-comments/no-duplicate-disable"  : 2,
		"eslint-comments/no-unlimited-disable"  : 2,
		"eslint-comments/no-unused-disable"     : 2,
		"eslint-comments/no-unused-enable"      : 2,
		"eslint-comments/no-restricted-disable" : 0,
		"eslint-comments/no-use"                : 0,
		"eslint-comments/require-description"   : 0,

		// no-constructor-bind : https://github.com/markalfred/eslint-plugin-no-constructor-bind
		"no-constructor-bind/no-constructor-bind"  : 2,
		"no-constructor-bind/no-constructor-state" : 2,

		// no-floating-promise : https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise
		"no-floating-promise/no-floating-promise" : 2,

		// unicorn : https://github.com/sindresorhus/eslint-plugin-unicorn
		"unicorn/better-regex"                            : [2, {sortCharacterClasses : false}],
		"unicorn/catch-error-name"                        : [2, {name : "err"}],
		"unicorn/consistent-destructuring"                : 2,
		"unicorn/consistent-function-scoping"             : 0,
		"unicorn/custom-error-definition"                 : 2,
		"unicorn/empty-brace-spaces"                      : 2,
		"unicorn/error-message"                           : 2,
		"unicorn/escape-case"                             : 2,
		"unicorn/expiring-todo-comments"                  : 0,
		"unicorn/explicit-length-check"                   : 0,
		"unicorn/filename-case"                           : 0,
		"unicorn/import-style"                            : 0,
		"unicorn/new-for-builtins"                        : 0,
		"unicorn/no-abusive-eslint-disable"               : 0,
		"unicorn/no-array-callback-reference"             : 0,
		"unicorn/no-array-for-each"                       : 0,
		"unicorn/no-array-method-this-argument"           : 0,
		"unicorn/no-array-push-push"                      : 0,
		"unicorn/no-array-reduce"                         : 0,
		"unicorn/no-await-expression-member"			  : 0,
		"unicorn/no-console-spaces"                       : 0,
		"unicorn/no-document-cookie"                      : 2,
		"unicorn/no-empty-file"							  : 2,
		"unicorn/no-for-loop"                             : 0,
		"unicorn/no-hex-escape"                           : 2,
		"unicorn/no-instanceof-array"                     : 2,
		"unicorn/no-invalid-remove-event-listener"        : 2,
		"unicorn/no-keyword-prefix"                       : 0,
		"unicorn/no-lonely-if"                            : 2, // Better than the eslint base rule
		"unicorn/no-negated-condition"                    : 0,
		"unicorn/no-nested-ternary"                       : 0,
		"unicorn/no-new-array"                            : 2,
		"unicorn/no-new-buffer"                           : 0,
		"unicorn/no-null"                                 : 0,
		"unicorn/no-object-as-default-parameter"          : 0,
		"unicorn/no-process-exit"                         : 0,
		"unicorn/no-static-only-class"                    : 2,
		"unicorn/no-thenable"                             : 2,
		"unicorn/no-this-assignment"                      : 0,
		"unicorn/no-typeof-undefined"                     : 2,
		"unicorn/no-unnecessary-await"                    : 2,
		"unicorn/no-unreadable-array-destructuring"       : 0,
		"unicorn/no-unreadable-iife"                      : 2,
		"unicorn/no-unsafe-regex"                         : 0,
		"unicorn/no-unused-properties"                    : 2,
		"unicorn/no-useless-fallback-in-spread"           : 2,
		"unicorn/no-useless-length-check"                 : 2,
		"unicorn/no-useless-promise-resolve-reject"       : 2,
		"unicorn/no-useless-spread"                       : 2,
		"unicorn/no-useless-switch-case"                  : 2,
		"unicorn/no-useless-undefined"                    : 0,
		"unicorn/no-zero-fractions"                       : 0,
		"unicorn/number-literal-case"                     : 2,
		"unicorn/numeric-separators-style"                : [2, {hexadecimal : {minimumDigits : 5, groupLength : 2}, number : {minimumDigits : 6, groupLength : 3}}],
		"unicorn/prefer-add-event-listener"               : 2,
		"unicorn/prefer-array-find"                       : 2,
		"unicorn/prefer-array-flat"                       : 2,
		"unicorn/prefer-array-flat-map"                   : 2,
		"unicorn/prefer-array-index-of"                   : 2,
		"unicorn/prefer-array-some"                       : 2,
		"unicorn/prefer-at"                               : 2,
		"unicorn/prefer-blob-reading-methods"             : 2,
		"unicorn/prefer-code-point"                       : 0,
		"unicorn/prefer-date-now"                         : 2,
		"unicorn/prefer-default-parameters"               : 2,
		"unicorn/prefer-dom-node-append"                  : 2,
		"unicorn/prefer-dom-node-dataset"                 : 0, // Only handles setAttribute. My version sembiance/prefer-dataset handles both get and set and remove
		"unicorn/prefer-dom-node-remove"                  : 2,
		"unicorn/prefer-dom-node-text-content"            : 2,
		"unicorn/prefer-event-target"                     : 2,
		"unicorn/prefer-export-from"                      : 2,
		"unicorn/prefer-includes"                         : 2,
		"unicorn/prefer-json-parse-buffer"                : 2,
		"unicorn/prefer-keyboard-event-key"               : 2,
		"unicorn/prefer-logical-operator-over-ternary"    : 2,
		"unicorn/prefer-math-trunc"                       : 2,
		"unicorn/prefer-modern-dom-apis"                  : 2,
		"unicorn/prefer-modern-math-apis"                 : 2,
		"unicorn/prefer-module"                           : 0,
		"unicorn/prefer-native-coercion-functions"        : 2,
		"unicorn/prefer-negative-index"                   : 2,
		"unicorn/prefer-node-protocol"                    : 0,
		"unicorn/prefer-number-properties"                : 0,
		"unicorn/prefer-object-from-entries"              : 2,
		"unicorn/prefer-optional-catch-binding"           : 0,
		"unicorn/prefer-prototype-methods"                : 2,
		"unicorn/prefer-query-selector"                   : 2,
		"unicorn/prefer-reflect-apply"                    : 2,
		"unicorn/prefer-regexp-test"                      : 2,
		"unicorn/prefer-set-has"                          : 0,
		"unicorn/prefer-spread"                           : 0, // Array.from() is better as it has a mapFn built in and is covered by array-func/prefer-array-from
		"unicorn/prefer-set-size"                         : 2,
		"unicorn/prefer-string-replace-all"               : 0,
		"unicorn/prefer-string-slice"                     : 0,
		"unicorn/prefer-string-starts-ends-with"          : 2,
		"unicorn/prefer-string-trim-start-end"            : 2,
		"unicorn/prefer-switch"                           : [2, {minimumCases : 4, emptyDefaultCase : "no-default-case"}],
		"unicorn/prefer-ternary"                          : 2,
		"unicorn/prefer-top-level-await"                  : 2, // No idea if I really want this set or not, since I don't use await yet and not sure how it functions
		"unicorn/prefer-type-error"                       : 2,
		"unicorn/prevent-abbreviations"                   : 0,
		"unicorn/relative-url-style"                      : 2,
		"unicorn/require-array-join-separator"            : 2,
		"unicorn/require-number-to-fixed-digits-argument" : 2,
		"unicorn/require-post-message-target-origin"      : 0,
		"unicorn/string-content"                          : 0,
		"unicorn/switch-case-braces"                      : 0,
		"unicorn/template-indent"                         : 0,
		"unicorn/text-encoding-identifier-case"           : 0,
		"unicorn/throw-new-error"                         : 2,

		// eslint-plugin-sonarjs : https://github.com/SonarSource/eslint-plugin-sonarjs
		// Bug Detection
		"sonarjs/no-all-duplicated-branches"   : 2,
		"sonarjs/no-element-overwrite"         : 2,
		"sonarjs/no-empty-collection"          : 2,
		"sonarjs/no-extra-arguments"           : 2,
		"sonarjs/no-identical-conditions"      : 2,
		"sonarjs/no-identical-expressions"     : 2,
		"sonarjs/no-ignored-return"            : 0,
		"sonarjs/no-one-iteration-loop"        : 2,
		"sonarjs/no-use-of-empty-return-value" : 2,
		"sonarjs/non-existent-operator"        : 2,

		// Code Smell Detection
		"sonarjs/cognitive-complexity"         : 0,
		"sonarjs/elseif-without-else"          : 0,
		"sonarjs/max-switch-cases"             : [2, 20],
		"sonarjs/no-collapsible-if"            : 2,
		"sonarjs/no-collection-size-mischeck"  : 0,
		"sonarjs/no-duplicate-string"          : 0,
		"sonarjs/no-duplicated-branches"       : 2,
		"sonarjs/no-gratuitous-expressions"    : 2,
		"sonarjs/no-identical-functions"       : 0,
		"sonarjs/no-inverted-boolean-check"    : 2,
		"sonarjs/no-nested-switch"             : 2,
		"sonarjs/no-nested-template-literals"  : 0,
		"sonarjs/no-redundant-boolean"         : 2,
		"sonarjs/no-redundant-jump"            : 2,
		"sonarjs/no-same-line-conditional"     : 2,
		"sonarjs/no-small-switch"              : 2,
		"sonarjs/no-unused-collection"         : 2,
		"sonarjs/no-useless-catch"             : 2,
		"sonarjs/prefer-immediate-return"      : 2,
		"sonarjs/prefer-object-literal"        : 0,
		"sonarjs/prefer-single-boolean-return" : 0,
		"sonarjs/prefer-while"                 : 2,

		// New
		"multiline-comment-style"     : 0,
		"implicit-arrow-linebreak"    : 0,

		// Possible Errors
		"for-direction"                 : 2,
		"getter-return"                 : 0,
		"no-async-promise-executor"     : 2,
		"no-await-in-loop"              : 0,
		"no-compare-neg-zero"           : 2,
		"no-cond-assign"                : [2, "always"],
		"no-const-assign"               : 2,
		"no-constant-binary-expression" : 2,
		"no-console"                    : 0,
		"no-constant-condition"         : [2, {"checkLoops" : false}],
		"no-control-regex"              : 2,
		"no-debugger"                   : 2,
		"no-dupe-args"                  : 2,
		"no-dupe-else-if"               : 2,
		"no-dupe-keys"                  : 2,
		"no-duplicate-case"             : 2,
		"no-empty"                      : [2, {"allowEmptyCatch" : true}],
		"no-empty-character-class"      : 2,
		"no-ex-assign"                  : 2,
		"no-extra-boolean-cast"         : 2,
		"no-extra-parens"               : 0,
		"no-extra-semi"                 : 2,
		"no-func-assign"                : 2,
		"no-import-assign"              : 2,
		"no-inner-declarations"         : [2, "functions"],
		"no-invalid-regexp"             : 2,
		"no-irregular-whitespace"       : [2, {"skipStrings" : true, "skipTemplates" : true}],
		"no-loss-of-precision"          : 2,
		"no-misleading-character-class" : 2,
		"no-obj-calls"                  : 2,
		"no-promise-executor-return"    : 2,
		"no-prototype-builtins"         : 0,
		"no-regex-spaces"               : 2,
		"no-setter-return"              : 2,
		"no-sparse-arrays"              : 2,
		"no-template-curly-in-string"   : 2,
		"no-unexpected-multiline"       : 2,
		"no-unreachable"                : 2,
		"no-unreachable-loop"           : 2,
		"no-unsafe-finally"             : 2,
		"no-unsafe-negation"            : 2,
		"no-unsafe-optional-chaining"   : 2,
		"no-useless-backreference"      : 2,
		"require-atomic-updates"        : 0,	// Lots of false positives
		"use-isnan"                     : 2,
		"valid-typeof"                  : 2,

		// Best Practices
		"accessor-pairs"               : 0,
		"array-callback-return"        : 2,
		"block-scoped-var"             : 2,
		"class-methods-use-this"       : 0,
		"complexity"                   : 0,
		"consistent-return"            : 0,
		"curly"                        : [2, "multi-or-nest", "consistent"],
		"default-case"                 : 0,
		"default-case-last"            : 2,
		"default-param-last"           : 0,
		"dot-location"                 : [2, "object"],
		"dot-notation"                 : [2, {"allowKeywords" : true}],
		"eqeqeq"                       : [2, "always"],
		"grouped-accessor-pairs"       : 2,
		"guard-for-in"                 : 2,
		"logical-assignment-operators" : [2, "always", {"enforceForIfStatements" : true}],
		"max-classes-per-file"         : 0,
		"no-alert"                     : 2,
		"no-caller"                    : 2,
		"no-case-declarations"         : 2,
		"no-constructor-return"        : 2,
		"no-div-regex"                 : 2,
		"no-else-return"               : 2,
		"no-empty-function"            : 0,
		"no-empty-pattern"             : 2,
		"no-eq-null"                   : 2,
		"no-eval"                      : 2,
		"no-extend-native"             : 0,
		"no-extra-bind"                : 2,
		"no-extra-label"               : 2,
		"no-fallthrough"               : 2,
		"no-floating-decimal"          : 2,
		"no-global-assign"             : 2,
		"no-implicit-coercion"         : 0,
		// "no-implicit-globals" : // Handled in parents "node", "browser"
		"no-implied-eval"              : 2,
		"no-invalid-this"              : 0,
		"no-iterator"                  : 2,
		"no-labels"                    : 2,
		"no-lone-blocks"               : 2,
		"no-loop-func"                 : 2,
		"no-magic-numbers"             : 0,
		"no-multi-spaces"              : [2, { exceptions : { VariableDeclarator : true, AssignmentExpression : true } }],
		"no-multi-str"                 : 2,
		"no-new"                       : 2,
		"no-new-func"                  : 2,
		"no-new-wrappers"              : 2,
		"no-nonoctal-decimal-escape"   : 2,
		"no-octal"                     : 2,
		"no-octal-escape"              : 2,
		"no-param-reassign"            : 0,
		"no-proto"                     : 2,
		"no-redeclare"                 : 2,
		"no-restricted-properties"     : 0,
		"no-return-assign"             : 2,
		"no-return-await"              : 0,
		"no-script-url"                : 2,
		"no-self-assign"               : 2,
		"no-self-compare"              : 2,
		"no-sequences"                 : 0,
		"no-throw-literal"             : 2,
		"no-unmodified-loop-condition" : 2,
		"no-unused-expressions"        : [2, {allowTaggedTemplates : true, allowTernary : true}],
		"no-unused-labels"             : 2,
		"no-useless-call"              : 2,
		"no-useless-catch"             : 2,
		"no-useless-concat"            : 2,
		"no-useless-escape"            : 2,
		"no-useless-return"            : 2,
		"no-void"                      : 2,
		"no-warning-comments"          : 2,
		"no-with"                      : 2,
		"prefer-named-capture-group"   : 2,
		"prefer-promise-reject-errors" : 0,
		"prefer-regex-literals"        : 0,
		"radix"                        : 2,
		"require-await"                : 2,
		"require-unicode-regexp"       : 0,
		"vars-on-top"                  : 2,
		"wrap-iife"                    : [2, "inside"],
		"yoda"                         : 2,

		// Strict Mode
		// "strict" : // Handled in parents "node", "browser"

		// Variables
		"init-declarations"               : [2, "always"],
		"no-delete-var"                   : 2,
		"no-label-var"                    : 2,
		"no-restricted-globals"           : 0,
		"no-shadow"                       : 2,
		"no-shadow-restricted-names"      : 2,
		"no-undef"                        : [2, {"typeof" : true}],
		"no-undef-init"                   : 0,
		"no-undefined"                    : 0,
		"no-unused-private-class-members" : 2,
		"no-unused-vars"                  : [2, {"caughtErrors" : "all", "argsIgnorePattern" : "^[iI]gnored$|^e$", "varsIgnorePattern" : "^XU|xu$" }],
		"no-use-before-define"            : [2, {"functions" : false}],

		// Node.js and CommonJS : Handled in parents "node", "browser"

		// Stylistic Issues
		"array-bracket-newline"            : 0,
		"array-bracket-spacing"            : [2, "never"],
		"array-element-newline"            : 0,
		"block-spacing"                    : 2,
		"brace-style"                      : [2, "allman", {"allowSingleLine" : true}],
		"camelcase"                        : [2, {properties : "always"}],
		"capitalized-comments"             : 0,
		"comma-dangle"                     : [2, "never"],
		"comma-spacing"                    : [2, { "before" : false, "after" : true }],
		"comma-style"                      : [2, "last"],
		"computed-property-spacing"        : [2, "never"],
		"consistent-this"                  : [2, "self"],
		"eol-last"                         : [2, "always"],
		"func-call-spacing"                : [2, "never"],
		"func-name-matching"               : 0,
		"func-names"                       : [2, "as-needed"],
		"func-style"                       : 0,
		"function-call-argument-newline"   : 0,		// In Theory I like [2, "never"] here, but due to how I call tiptoe() with newlines, I have to disable this rule
		"function-paren-newline"           : [2, "consistent"],
		"id-denylist"                      : 0,
		"id-length"                        : 0,
		"id-match"                         : 0,
		"indent"                           : [2, "tab", {"SwitchCase" : 1}],
		"jsx-quotes"                       : 0,
		"key-spacing"                      : [2, {"beforeColon" : true, "afterColon" : true, "mode" : "minimum"}],
		"keyword-spacing"                  : 0,
		"line-comment-position"            : 0,
		"linebreak-style"                  : [2, "unix"],
		"lines-around-comment"             : 0,
		"lines-between-class-members"      : [0],
		"max-depth"                        : [2, 7],
		"max-len"                          : 0,
		"max-lines"                        : 0,
		"max-lines-per-function"           : 0,
		"max-nested-callbacks"             : [2, 5],
		"max-params"                       : [2, 7],
		"max-statements"                   : 0,
		"max-statements-per-line"          : 0,
		"multiline-ternary"                : [2, "never"],
		"new-cap"                          : 2,
		"new-parens"                       : 2,
		"newline-per-chained-call"         : 0,
		"no-array-constructor"             : 2,
		"no-bitwise"                       : 2,
		"no-continue"                      : 0,
		"no-empty-static-block"            : 2,
		"no-inline-comments"               : 0,
		"no-lonely-if"                     : 0,	// Handled better by unicorn/no-lonely-if
		"no-mixed-operators"               : 2,
		"no-mixed-spaces-and-tabs"         : [2, "smart-tabs"],
		"no-multi-assign"                  : 0,
		"no-multiple-empty-lines"          : 2,
		"no-negated-condition"             : 0,
		"no-nested-ternary"                : 0,
		"no-new-native-nonconstructor"     : 2,
		"no-new-object"                    : 2,
		"no-plusplus"                      : 0,
		//"no-restricted-syntax"             : Handled in parents "node", "browser"
		"no-tabs"                          : 0,
		"no-ternary"                       : 0,
		"no-trailing-spaces"               : [2, {"skipBlankLines" : true}],
		"no-underscore-dangle"             : [0],
		"no-unneeded-ternary"              : 2,
		"no-whitespace-before-property"    : 2,
		"nonblock-statement-body-position" : [2, "below"],
		"object-curly-newline"             : 0,
		"object-curly-spacing"             : 0,
		"object-property-newline"          : 0,
		"one-var"                          : 0,
		"one-var-declaration-per-line"     : 0,
		"operator-assignment"              : 0,
		"operator-linebreak"               : 0,
		"padded-blocks"                    : [2, "never"],
		"padding-line-between-statements"  : 0,
		"prefer-exponentiation-operator"   : 2,
		"prefer-object-spread"             : 0,
		"quote-props"                      : 0,
		"quotes"                           : [2, "double", {"avoidEscape" : true, "allowTemplateLiterals" : true}],
		"semi"                             : [2, "always"],
		"semi-spacing"                     : 0,
		"semi-style"                       : [2, "last"],
		"sort-keys"                        : 0,
		"sort-vars"                        : 0,
		"space-before-blocks"              : [2, "always"],
		"space-before-function-paren"      : [2, { "anonymous" : "never", "named" : "never", "asyncArrow" : "always" }],
		"space-in-parens"                  : 0,
		"space-infix-ops"                  : 0,
		"space-unary-ops"                  : 2,
		"spaced-comment"                   : 0,
		"switch-colon-spacing"             : [2, {"after" : true, "before" : false}],
		"template-tag-spacing"             : 2,
		"unicode-bom"                      : 0,
		"wrap-regex"                       : 2,

		// ECMAScript 6
		"arrow-body-style"        : [2, "as-needed"],
		"arrow-parens"            : [2, "as-needed"],
		"arrow-spacing"           : [2, {"before" : true, "after" : true}],
		"constructor-super"       : 2,
		"generator-star-spacing"  : 0,
		"no-class-assign"         : 2,
		"no-confusing-arrow"      : [2, {"allowParens" : true}],
		"no-dupe-class-members"   : 2,
		"no-duplicate-imports"    : 2,
		"no-new-symbol"           : 2,
		"no-restricted-exports"   : 0,
		"no-restricted-imports"   : 0,
		"no-this-before-super"    : 2,
		"no-useless-computed-key" : 2,
		"no-useless-constructor"  : 2,
		"no-useless-rename"       : 0,
		"no-var"                  : 2,
		"object-shorthand"        : [2, "always"],
		"prefer-arrow-callback"   : [2, {"allowNamedFunctions" : true}],
		"prefer-const"            : 2,
		"prefer-destructuring"    : 0,	// We have our own prefer-object-destructuring which behaves more how I want it to
		"prefer-numeric-literals" : 2,
		"prefer-object-has-own"   : 2,
		"prefer-rest-params"      : 2,
		"prefer-spread"           : 2,
		"prefer-template"         : 2,
		"require-yield"           : 2,
		"rest-spread-spacing"     : [2, "never"],
		"sort-imports"            : 0,
		"symbol-description"      : 0,
		"template-curly-spacing"  : [2, "never"],
		"yield-star-spacing"      : 0
	}
};
