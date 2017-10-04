"use strict";
module.exports =
{
	"env"   : { "es6" : true },
	// Use this comment to disable a rule in a file:	/* eslint-disable <rule> */
	// Use this comment to disable a rule on a line:	// eslint-disable-line <rule>
	"rules" :
	{
		// Possible Errors
		"for-direction"               : 2,
		"getter-return"               : 0,
		"no-await-in-loop"            : 2,
		"no-compare-neg-zero"         : 2,
		"no-cond-assign"              : [2, "always"],
		"no-console"                  : 0,
		"no-constant-condition"       : [2, {"checkLoops" : false}],
		"no-control-regex"            : 2,
		"no-debugger"                 : 2,
		"no-dupe-args"                : 2,
		"no-dupe-keys"                : 2,
		"no-duplicate-case"           : 2,
		"no-empty"                    : [2, {"allowEmptyCatch" : true}],
		"no-empty-character-class"    : 2,
		"no-ex-assign"                : 2,
		"no-extra-boolean-cast"       : 2,
		"no-extra-parens"             : 0,
		"no-extra-semi"               : 2,
		"no-func-assign"              : 2,
		"no-inner-declarations"       : [2, "functions"],
		"no-invalid-regexp"           : 2,
		"no-irregular-whitespace"     : [2, {"skipStrings" : true, "skipTemplates" : true}],
		"no-obj-calls"                : 2,
		"no-prototype-builtins"       : 0,
		"no-regex-spaces"             : 2,
		"no-sparse-arrays"            : 2,
		"no-template-curly-in-string" : 2,
		"no-unexpected-multiline"     : 2,
		"no-unreachable"              : 2,
		"no-unsafe-finally"           : 2,
		"no-unsafe-negation"          : 2,
		"use-isnan"                   : 2,
		"valid-jsdoc"                 : 0,
		"valid-typeof"                : 2,

		// Best Practices
		"accessor-pairs"               : 0,
		"array-callback-return"        : 2,
		"block-scoped-var"             : 2,
		"class-methods-use-this"       : 0,
		"complexity"                   : 0,
		"consistent-return"            : 0,
		"curly"                        : [2, "multi-or-nest", "consistent"],
		"default-case"                 : 0,
		"dot-location"                 : [2, "object"],
		"dot-notation"                 : [2, {"allowKeywords" : false}],
		"eqeqeq"                       : [2, "always"],
		"guard-for-in"                 : 2,
		"no-alert"                     : 2,
		"no-caller"                    : 2,
		"no-case-declarations"         : 2,
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
		// "no-implicit-globals" : Handled in parents "node", "browser", "both"
		"no-implied-eval"              : 2,
		"no-invalid-this"              : 0,
		"no-iterator"                  : 2,
		"no-labels"                    : 2,
		"no-lone-blocks"               : 2,
		"no-loop-func"                 : 2,
		"no-magic-numbers"             : 0,
		"no-multi-spaces"              : 2,
		"no-multi-str"                 : 2,
		"no-new"                       : 2,
		"no-new-func"                  : 2,
		"no-new-wrappers"              : 2,
		"no-octal"                     : 2,
		"no-octal-escape"              : 2,
		"no-param-reassign"            : 2,
		"no-proto"                     : 2,
		"no-redeclare"                 : 2,
		"no-restricted-properties"     : 0,
		"no-return-assign"             : 2,
		"no-return-await"              : 2,
		"no-script-url"                : 2,
		"no-self-assign"               : 2,
		"no-self-compare"              : 2,
		"no-sequences"                 : 0,
		"no-throw-literal"             : 2,
		"no-unmodified-loop-condition" : 2,
		"no-unused-expressions"        : 2,
		"no-unused-labels"             : 2,
		"no-useless-call"              : 2,
		"no-useless-concat"            : 2,
		"no-useless-escape"            : 2,
		"no-useless-return"            : 2,
		"no-void"                      : 2,
		"no-warning-comments"          : 2,
		"no-with"                      : 2,
		"prefer-promise-reject-errors" : 0,
		"radix"                        : 2,
		"require-await"                : 2,
		"vars-on-top"                  : 2,
		"wrap-iife"                    : [2, "inside"],
		"yoda"                         : 2,

		// Strict Mode
		"strict" : [2, "global"],

		// Variables
		"init-declarations"          : [2, "always"],
		"no-catch-shadow"            : 0,
		"no-delete-var"              : 2,
		"no-label-var"               : 2,
		"no-restricted-globals"      : 0,
		"no-shadow"                  : 2,
		"no-shadow-restricted-names" : 2,
		"no-undef"                   : 2,
		"no-undef-init"              : 2,
		"no-undefined"               : 0,
		"no-unused-vars"             : [2, {"argsIgnorePattern" : "^[iI]gnored$|^e$|^err$", "varsIgnorePattern" : "^base$" }],
		"no-use-before-define"       : [2, {"functions" : false}],

		// Node.js and CommonJS : Handled in parents "node", "browser", "both"

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
		"function-paren-newline"           : [2, "consistent"],
		"id-blacklist"                     : 0,
		"id-length"                        : 0,
		"id-match"                         : 0,
		"indent"                           : [2, "tab"],
		"jsx-quotes"                       : 0,
		"key-spacing"                      : [2, {"beforeColon" : true, "afterColon" : true, "mode" : "minimum"}],
		"keyword-spacing"                  : 0,
		"line-comment-position"            : 0,
		"linebreak-style"                  : [2, "unix"],
		"lines-around-comment"             : 0,
		"max-depth"                        : [2, 4],
		"max-len"                          : [2, 271],
		"max-lines"                        : 0,
		"max-nested-callbacks"             : [2, 5],
		"max-params"                       : [2, 6],
		"max-statements"                   : 0,
		"max-statements-per-line"          : 0,
		"multiline-ternary"                : [2, "never"],
		"new-cap"                          : 2,
		"new-parens"                       : 2,
		"newline-per-chained-call"         : 0,
		"no-array-constructor"             : 2,
		"no-bitwise"                       : 2,
		"no-continue"                      : 0,
		"no-inline-comments"               : 0,
		"no-lonely-if"                     : 2,
		"no-mixed-operators"               : 2,
		"no-mixed-spaces-and-tabs"         : [2, "smart-tabs"],
		"no-multi-assign"                  : 0,
		"no-multiple-empty-lines"          : 2,
		"no-negated-condition"             : 0,
		"no-nested-ternary"                : 0,
		"no-new-object"                    : 2,
		"no-plusplus"                      : 0,
		"no-restricted-syntax"             : 0,
		"no-tabs"                          : 0,
		"no-ternary"                       : 0,
		"no-trailing-spaces"               : [2, {"skipBlankLines" : true}],
		"no-underscore-dangle"             : [2, { "allow" : ["_gsTransform"]}],
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
		"quote-props"                      : 0,
		"quotes"                           : [2, "double", {"avoidEscape" : true}],
		"require-jsdoc"                    : 0,
		"semi"                             : [2, "always"],
		"semi-spacing"                     : 0,
		"semi-style"                       : [2, "last"],
		"sort-keys"                        : 0,
		"sort-vars"                        : 0,
		"space-before-blocks"              : [2, "always"],
		"space-before-function-paren"      : [2, "never"],
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
		"no-const-assign"         : 2,
		"no-dupe-class-members"   : 2,
		"no-duplicate-imports"    : 2,
		"no-new-symbol"           : 2,
		"no-restricted-imports"   : 0,
		"no-this-before-super"    : 2,
		"no-useless-computed-key" : 2,
		"no-useless-constructor"  : 2,
		"no-useless-rename"       : 0,
		"no-var"                  : 2,
		"object-shorthand"        : [2, "always"],
		"prefer-arrow-callback"   : [2, {"allowNamedFunctions" : true}],
		"prefer-const"            : 2,
		"prefer-destructuring"    : 0,
		"prefer-numeric-literals" : 2,
		"prefer-rest-params"      : 2,
		"prefer-spread"           : 2,
		"prefer-template"         : 0,
		"require-yield"           : 2,
		"rest-spread-spacing"     : [2, "never"],
		"sort-imports"            : 0,
		"symbol-description"      : 0,
		"template-curly-spacing"  : [2, "never"],
		"yield-star-spacing"      : 0
	}
};
