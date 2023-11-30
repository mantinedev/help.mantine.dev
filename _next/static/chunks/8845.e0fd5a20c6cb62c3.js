"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8845,1858,6089],{1858:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var s=n(123);let a=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/atom/language-less/blob/master/grammars/less.cson","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/atom/language-less/commit/87d4d59e8de6796b506b81a16e1dc1fafc99d30f",name:"less",scopeName:"source.css.less",patterns:[{include:"#strings"},{captures:{1:{name:"entity.other.attribute-name.class.mixin.css"}},match:"(\\.[_a-zA-Z][a-zA-Z0-9_-]*(?=\\())"},{captures:{1:{name:"entity.other.attribute-name.class.css"},2:{name:"punctuation.definition.entity.css"},4:{name:"variable.other.interpolation.less"}},match:"((\\.)([_a-zA-Z]|(@{[a-zA-Z0-9_-]+}))[a-zA-Z0-9_-]*)"},{captures:{0:{name:"entity.other.attribute-name.parent-selector.css"},1:{name:"punctuation.definition.entity.css"}},match:"(&)[a-zA-Z0-9_-]*"},{begin:"(format|local|url|attr|counter|counters)\\s*(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.css"}},patterns:[{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.single.css",patterns:[{match:"\\\\.",name:"constant.character.escape.css"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{match:"\\\\(\\d{1,6}|.)",name:"constant.character.escape.css"}]},{match:"[^'\") \\t]+",name:"variable.parameter.misc.css"}]},{match:"(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b(?!.*?(?<!@){)",name:"constant.other.rgb-value.css"},{captures:{1:{name:"entity.other.attribute-name.id"},2:{name:"punctuation.definition.entity.css"},4:{name:"variable.other.interpolation.less"}},match:"((#)([_a-zA-Z]|(@{[a-zA-Z0-9_-]+}))[a-zA-Z0-9_-]*)",name:"meta.selector.css"},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.css"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.css"}},name:"comment.block.css"},{include:"source.css#numeric-values"},{captures:{1:{name:"punctuation.definition.begin.entity.css"},2:{name:"entity.other.attribute-name.attribute.css"},3:{name:"punctuation.separator.operator.css"},4:{name:"string.unquoted.attribute-value.css"},5:{name:"string.quoted.double.attribute-value.css"},6:{name:"punctuation.definition.string.begin.css"},7:{name:"punctuation.definition.string.end.css"},8:{name:"punctuation.definition.end.entity.css"}},match:"(?i)(\\[)\\s*(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)(?:\\s*([~|^$*]?=)\\s*(?:(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)|((?>(['\"])(?:[^\\\\]|\\\\.)*?(\\6)))))?\\s*(\\])",name:"meta.attribute-selector.css"},{begin:"((@)import\\b)",beginCaptures:{1:{name:"keyword.control.at-rule.import.less"},2:{name:"punctuation.definition.keyword.less"}},end:";",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.import.css",patterns:[{match:"(?<=\\(|,|\\s)\\b(reference|optional|once|multiple|less|inline)\\b(?=\\)|,)",name:"keyword.control.import.option.less"},{include:"#brace_round"},{include:"source.css#commas"},{include:"#strings"}]},{captures:{1:{name:"keyword.control.at-rule.fontface.css"},2:{name:"punctuation.definition.keyword.css"}},match:"^\\s*((@)font-face\\b)",name:"meta.at-rule.fontface.css"},{captures:{1:{name:"keyword.control.at-rule.media.css"},2:{name:"punctuation.definition.keyword.css"}},match:"^\\s*((@)media\\b)",name:"meta.at-rule.media.css"},{include:"source.css#media-features"},{match:"\\b(tv|tty|screen|projection|print|handheld|embossed|braille|aural|all)\\b",name:"support.constant.media-type.media.css"},{match:"\\b(portrait|landscape)\\b",name:"support.constant.property-value.media-property.media.css"},{captures:{1:{name:"support.function.less"}},match:"(\\.[a-zA-Z0-9_-]+)\\s*(;|\\()"},{begin:"(^[ \\t]+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.less"}},end:"(?!\\G)",patterns:[{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.less"}},end:"\\n",name:"comment.line.double-slash.less"}]},{match:"(@|\\-\\-)[\\w-]+(?=\\s*)",name:"variable.other.less",captures:{1:{name:"punctuation.definition.variable.less"}}},{include:"#variable_interpolation"},{begin:"{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.property-list.end.bracket.curly.css"}},name:"meta.property-list.css",patterns:[{include:"source.css#pseudo-elements"},{include:"source.css#pseudo-classes"},{include:"source.css#tag-names"},{include:"source.css#commas"},{include:"#variable_interpolation"},{include:"source.css#property-names"},{include:"#property_values"},{include:"$self"}]},{match:"\\!\\s*important",name:"keyword.other.important.css"},{match:"\\*|\\/|\\-|\\+|~|=|<=|>=|<|>",name:"keyword.operator.less"},{match:"\\b(not|and|when)\\b",name:"keyword.control.logical.operator.less"},{include:"source.css#tag-names"},{match:"(?<![\\w-])[a-z][\\w&&[^A-Z]]*+-[\\w-&&[^A-Z]]+",name:"entity.name.tag.custom.css"},{include:"source.css#pseudo-elements"},{include:"source.css#pseudo-classes"},{captures:{1:{name:"punctuation.section.property-list.begin.css"},2:{name:"punctuation.section.property-list.end.css"}},match:"(\\{)(\\})",name:"meta.brace.curly.css"},{match:"\\{|\\}",name:"meta.brace.curly.css"},{include:"#brace_round"},{match:"\\[|\\]",name:"meta.brace.square.less"},{match:";",name:"punctuation.terminator.rule.css"},{match:":",name:"punctuation.separator.key-value.css"},{match:"\\btrue\\b",name:"constant.language.boolean.less"},{match:"\\bdefault\\b",name:"support.function.default.less"},{match:"\\b(isurl|isstring|isnumber|iskeyword|iscolor)\\b",name:"support.function.type-checking.less"},{match:"\\b(isunit|ispixel|ispercentage|isem)\\b",name:"support.function.unit-checking.less"},{include:"source.css#property-keywords"},{include:"source.css#color-keywords"},{include:"source.css#commas"},{include:"#less_builtin_functions"},{include:"source.css#functions"}],repository:{variable_interpolation:{match:"@{[a-zA-Z0-9_-]+}",name:"variable.other.interpolation.less"},strings:{patterns:[{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{match:"\\\\([0-9A-Fa-f]{1,6}|.)",name:"constant.character.escape.css"},{include:"#variable_interpolation"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.single.css",patterns:[{match:"\\\\([0-9A-Fa-f]{1,6}|.)",name:"constant.character.escape.css"},{include:"#variable_interpolation"}]}]},brace_round:{match:"\\(|\\)",name:"meta.brace.round.css"},property_values:{begin:"(?<!&)(:)\\s*(?!(\\s*{))(?!.*(?<!@){)",beginCaptures:{1:{name:"punctuation.separator.key-value.css"}},end:"\\s*(;)|\\s*(?=})",endCaptures:{1:{name:"punctuation.terminator.rule.css"}},contentName:"meta.property-value.css",patterns:[{begin:"url(\\()",beginCaptures:{1:{name:"meta.brace.round.css"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.css"}},name:"support.function.any-method.builtin.url.css",patterns:[{include:"#strings"},{match:"(\\b|\\.{0,2}/)[^)]*\\b",name:"string.url.css"}]},{include:"source.css#property-keywords"},{include:"source.css#color-keywords"},{include:"source.css#commas"},{include:"#less_builtin_functions"},{include:"source.css#functions"},{include:"$self"}]},less_builtin_functions:{match:"\\b(abs|acos|alpha|argb|asin|atan|average|blue|calc|ceil|color|contrast|convert|convert|cos|darken|data-uri|desaturate|difference|e|escape|exclusion|extract|fade|fadein|fadeout|floor|format|green|greyscale|hardlight|hsl|hsla|hsv|hsva|hsvhue|hsvsaturation|hsvvalue|hue|length|lighten|lightness|luma|max|min|mix|mod|multiply|negation|overlay|percentage|pi|pow|red|replace|round|saturate|saturation|screen|sin|softlight|spin|sqrt|tan|unit)\\b",name:"support.function.any-method.builtin.less"}},displayName:"Less",embeddedLangs:["css"]});var i=[...s.default,a]},6089:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});let s=Object.freeze({patterns:[{patterns:[{include:"#comment-tag"}],begin:"/\\*",name:"comment.block.postcss",end:"\\*/"},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#placeholder-selector"},{include:"#variable"},{include:"#variable-root-css"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#dotdotdot"},{captures:{0:{name:"keyword.control.at-rule.css.postcss"}},begin:"@include",name:"support.function.name.postcss.library",end:"(?=\\n|\\(|{|;)"},{captures:{0:{name:"keyword.control.at-rule.css.postcss"}},patterns:[{name:"entity.name.function",match:"[\\w-]+"}],begin:"@mixin|@function",name:"support.function.name.postcss.no-completions",end:"$\\n?|(?=\\(|{)"},{name:"string.quoted.double.css.postcss",match:"(?<=@import)\\s[\\w/.*-]+"},{begin:"@",name:"keyword.control.at-rule.css.postcss",end:"$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))|(?=;)"},{patterns:[{include:"#interpolation"},{include:"#pseudo-class"}],begin:"#",name:"entity.other.attribute-name.id.css.postcss",end:"$\\n?|(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>)"},{patterns:[{include:"#interpolation"},{include:"#pseudo-class"}],begin:"\\.|(?<=&)(-|_)",name:"entity.other.attribute-name.class.css.postcss",end:"$\\n?|(?=\\s|,|;|\\(|\\)|\\[|{|>)"},{patterns:[{include:"#double-quoted"},{include:"#single-quoted"},{name:"keyword.other.regex.postcss",match:"\\^|\\$|\\*|~"}],begin:"\\[",name:"entity.other.attribute-selector.postcss",end:"\\]"},{name:"entity.other.attribute-name.pseudo-class.css.postcss",match:"(?<=\\]|\\)|not\\(|\\*|>|>\\s):[a-z:-]+|(::|:-)[a-z:-]+"},{patterns:[{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#function"},{include:"#function-content"},{include:"#function-content-var"},{include:"#operator"},{include:"#parent-selector"},{include:"#property-value"}],begin:":",name:"meta.property-list.css.postcss",end:"$\\n?|(?=;|\\s\\(|and\\(|{|}|\\),)"},{include:"#rgb-value"},{include:"#function"},{include:"#function-content"},{patterns:[{include:"#interpolation"},{include:"#pseudo-class"}],begin:"(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|x)\\b(?!-|\\)|:\\s)|&",name:"entity.name.tag.css.postcss.symbol",end:"(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>|-|_)"},{include:"#operator"},{name:"support.type.property-name.css.postcss",match:"[a-z-]+((?=:|#{))"},{include:"#reserved-words"},{include:"#property-value"}],name:"postcss",repository:{"reserved-words":{name:"support.type.property-name.css.postcss",match:"\\b(false|from|in|not|null|through|to|true)\\b"},"double-quoted":{patterns:[{include:"#quoted-interpolation"}],begin:'"',name:"string.quoted.double.css.postcss",end:'"'},operator:{name:"keyword.operator.postcss",match:"\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~"},"function-content":{name:"string.quoted.double.css.postcss",match:"(?<=url\\(|format\\(|attr\\().+?(?=\\))"},"double-slash":{patterns:[{include:"#comment-tag"}],begin:"//",name:"comment.line.postcss",end:"$"},numeric:{name:"constant.numeric.css.postcss",match:"(-|\\.)?[0-9]+(\\.[0-9]+)?"},"variable-root-css":{name:"variable.parameter.postcss",match:"(?<!&)--[\\w-]+"},function:{name:"support.function.name.postcss",match:"(?<=[\\s|\\(|,|:])(?!url|format|attr)[\\w-][\\w-]*(?=\\()"},"rgb-value":{name:"constant.other.color.rgb-value.css.postcss",match:"(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b"},"comment-tag":{patterns:[{name:"comment.tag.postcss",match:"[\\w-]+"}],begin:"{{",name:"comment.tags.postcss",end:"}}"},interpolation:{patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#double-quoted"},{include:"#single-quoted"}],begin:"#{",name:"support.function.interpolation.postcss",end:"}"},unit:{name:"keyword.other.unit.css.postcss",match:"(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|%)"},"function-content-var":{name:"variable.parameter.postcss",match:"(?<=var\\()[\\w-]+(?=\\))"},dotdotdot:{name:"variable.other",match:"\\.{3}"},variable:{name:"variable.parameter.postcss",match:"\\$[\\w-]+"},"single-quoted":{patterns:[{include:"#quoted-interpolation"}],begin:"'",name:"string.quoted.single.css.postcss",end:"'"},"quoted-interpolation":{patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"}],begin:"#{",name:"support.function.interpolation.postcss",end:"}"},"pseudo-class":{name:"entity.other.attribute-name.pseudo-class.css.postcss",match:":[a-z:-]+"},"property-value":{name:"meta.property-value.css.postcss, support.constant.property-value.css.postcss",match:"[\\w-]+"},"placeholder-selector":{begin:"(?<!\\d)%(?!\\d)",name:"entity.other.attribute-name.placeholder-selector.postcss",end:"$\\n?|\\s|(?=;|{)"},flag:{name:"keyword.other.important.css.postcss",match:"!(important|default|optional|global)"},"parent-selector":{name:"entity.name.tag.css.postcss",match:"&"}},foldingStartMarker:"/\\*|^#|^\\*|^\\b|^\\.",foldingStopMarker:"\\*/|^\\s*$",fileTypes:["pcss","postcss"],uuid:"90DAEA60-88AA-11E2-9E96-0800200C9A66",scopeName:"source.css.postcss",displayName:"PostCSS"});var a=[s]},8845:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(8182),a=n(7397),i=n(6479),c=n(4831),r=n(1544),o=n(123),u=n(2681),l=n(1858),m=n(6089),d=n(5823),p=n(2198);let b=Object.freeze({name:"svelte",scopeName:"source.svelte",fileTypes:["svelte"],uuid:"7582b62f-51d9-4a84-8c8d-fc189530faf6",injections:{"L:(meta.script.svelte | meta.style.svelte) (meta.lang.js | meta.lang.javascript) - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.js",patterns:[{include:"source.js"}]}]},"L:(meta.script.svelte | meta.style.svelte) (meta.lang.ts | meta.lang.typescript) - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.ts",patterns:[{include:"source.ts"}]}]},"L:(meta.script.svelte | meta.style.svelte) meta.lang.coffee - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.coffee",patterns:[{include:"source.coffee"}]}]},"L:meta.script.svelte - meta.lang - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.js",patterns:[{include:"source.js"}]}]},"L:meta.style.svelte meta.lang.stylus - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.stylus",patterns:[{include:"source.stylus"}]}]},"L:meta.style.svelte meta.lang.sass - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.sass",patterns:[{include:"source.sass"}]}]},"L:meta.style.svelte meta.lang.css - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.css",patterns:[{include:"source.css"}]}]},"L:meta.style.svelte meta.lang.scss - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.css.scss",patterns:[{include:"source.css.scss"}]}]},"L:meta.style.svelte meta.lang.less - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.css.less",patterns:[{include:"source.css.less"}]}]},"L:meta.style.svelte meta.lang.postcss - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.css.postcss",patterns:[{include:"source.css.postcss"}]}]},"L:meta.style.svelte - meta.lang - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"source.css",patterns:[{include:"source.css"}]}]},"L:meta.template.svelte meta.lang.pug - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",end:"(?=</)",name:"meta.embedded.block.svelte",contentName:"text.pug",patterns:[{include:"text.pug"}]}]},"L:meta.template.svelte - meta.lang - (meta source)":{patterns:[{begin:"(?<=>)\\s",end:"(?=</template)",patterns:[{include:"#scope"}]}]},"L:(source.ts, source.js, source.coffee)":{patterns:[{match:"(?<![_$./'\"[:alnum:]])\\$(?=[_[:alpha:]][_$[:alnum:]]*)",name:"punctuation.definition.variable.svelte"},{match:"(?<![_$./'\"[:alnum:]])(\\$\\$)(?=props|restProps|slots)",name:"punctuation.definition.variable.svelte"}]}},patterns:[{include:"#scope"}],repository:{scope:{patterns:[{include:"#comments"},{include:"#special-tags"},{include:"#tags"},{include:"#interpolation"},{begin:"(?<=>|})",end:"(?=<|{)",name:"text.svelte"}]},comments:{begin:"<!--",end:"-->",captures:{0:{name:"punctuation.definition.comment.svelte"}},name:"comment.block.svelte",patterns:[{begin:"(@)(component)",beginCaptures:{1:{name:"punctuation.definition.keyword.svelte"},2:{name:"storage.type.class.component.svelte keyword.declaration.class.component.svelte"}},end:"(?=-->)",contentName:"comment.block.documentation.svelte",patterns:[{match:".*?(?=-->)",captures:{0:{patterns:[{include:"text.html.markdown"}]}}},{include:"text.html.markdown"}]},{match:"\\G-?>|<!--(?!>)|<!-(?=-->)|--!>",name:"invalid.illegal.characters-not-allowed-here.svelte"}]},destructuring:{patterns:[{begin:"(?={)",end:"(?<=})",name:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts#object-binding-pattern"}]},{begin:"(?=\\[)",end:"(?<=\\])",name:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts#array-binding-pattern"}]}]},"destructuring-const":{patterns:[{begin:"(?={)",end:"(?<=})",name:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts#object-binding-pattern-const"}]},{begin:"(?=\\[)",end:"(?<=\\])",name:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts#array-binding-pattern-const"}]}]},interpolation:{patterns:[{begin:"\\{",end:"\\}",beginCaptures:{0:{name:"punctuation.section.embedded.begin.svelte"}},endCaptures:{0:{name:"punctuation.section.embedded.end.svelte"}},contentName:"meta.embedded.expression.svelte source.ts",patterns:[{begin:"\\G\\s*(?={)",end:"(?<=})",patterns:[{include:"source.ts#object-literal"}]},{include:"source.ts"}]}]},"special-tags":{patterns:[{include:"#special-tags-void"},{include:"#special-tags-block-begin"},{include:"#special-tags-block-end"}]},"special-tags-keywords":{match:"([#@/:])(else\\s+if|[a-z]*)",captures:{1:{name:"punctuation.definition.keyword.svelte"},2:{patterns:[{match:"if|else\\s+if|else",name:"keyword.control.conditional.svelte"},{match:"each|key",name:"keyword.control.svelte"},{match:"await|then|catch",name:"keyword.control.flow.svelte"},{match:"html",name:"keyword.other.svelte"},{match:"debug",name:"keyword.other.debugger.svelte"},{match:"const",name:"storage.type.svelte"}]}}},"special-tags-modes":{patterns:[{begin:"(?<=(if|key|then|catch|html).*?)\\G",end:"(?=})",name:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]},{begin:"(?<=const.*?)\\G",end:"(?=})",patterns:[{include:"#destructuring-const"},{begin:"\\G\\s*([_$[:alpha:]][_$[:alnum:]]+)\\s*",end:"(?=\\=)",beginCaptures:{1:{name:"variable.other.constant.svelte"}}},{begin:"(?=\\=)",name:"meta.embedded.expression.svelte source.ts",end:"(?=})",patterns:[{include:"source.ts"}]}]},{begin:"(?<=each.*?)\\G",end:"(?=})",patterns:[{begin:"\\G\\s*?(?=\\S)",end:"(?=(?:^\\s*|\\s+)(as))",contentName:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]},{begin:"(as)",beginCaptures:{1:{name:"keyword.control.as.svelte"}},end:"(?=})",patterns:[{include:"#destructuring"},{begin:"\\(",end:"\\)|(?=})",captures:{0:{name:"meta.brace.round.svelte"}},contentName:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]},{match:"(\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*)",captures:{1:{name:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]}}},{match:",",name:"punctuation.separator.svelte"}]}]},{begin:"(?<=await.*?)\\G",end:"(?=})",patterns:[{begin:"\\G\\s*?(?=\\S)",end:"\\s+(then)|(?=})",endCaptures:{1:{name:"keyword.control.flow.svelte"}},contentName:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]},{begin:"(?<=then\\b)",end:"(?=})",contentName:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]}]},{begin:"(?<=debug.*?)\\G",end:"(?=})",patterns:[{match:"[_$[:alpha:]][_$[:alnum:]]*",captures:{0:{name:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]}}},{match:",",name:"punctuation.separator.svelte"}]}]},"special-tags-void":{begin:"({)\\s*((?:[@:])(else\\s+if|[a-z]*))",beginCaptures:{1:{name:"punctuation.definition.block.begin.svelte"},2:{patterns:[{include:"#special-tags-keywords"}]}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.block.end.svelte"}},name:"meta.special.$3.svelte",patterns:[{include:"#special-tags-modes"}]},"special-tags-block-begin":{begin:"({)\\s*(#([a-z]*))",end:"(})",name:"meta.special.$3.svelte meta.special.start.svelte",beginCaptures:{1:{name:"punctuation.definition.block.begin.svelte"},2:{patterns:[{include:"#special-tags-keywords"}]}},endCaptures:{0:{name:"punctuation.definition.block.end.svelte"}},patterns:[{include:"#special-tags-modes"}]},"special-tags-block-end":{begin:"({)\\s*(/([a-z]*))",end:"(})",name:"meta.special.$3.svelte meta.special.end.svelte",beginCaptures:{1:{name:"punctuation.definition.block.begin.svelte"},2:{patterns:[{include:"#special-tags-keywords"}]}},endCaptures:{1:{name:"punctuation.definition.block.end.svelte"}}},attributes:{patterns:[{include:"#attributes-directives"},{include:"#attributes-keyvalue"},{include:"#attributes-interpolated"}]},"attributes-interpolated":{begin:"(?<!:|=)\\s*({)",end:"(\\})",captures:{1:{name:"entity.other.attribute-name.svelte"}},contentName:"meta.embedded.expression.svelte source.ts",patterns:[{include:"source.ts"}]},"attributes-keyvalue":{begin:"((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*)",beginCaptures:{0:{patterns:[{match:"--.*",name:"support.type.property-name.svelte"},{match:".*",name:"entity.other.attribute-name.svelte"}]}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.$1.svelte",patterns:[{begin:"=",beginCaptures:{0:{name:"punctuation.separator.key-value.svelte"}},end:"(?<=[^\\s=])(?!\\s*=)|(?=/?>)",patterns:[{include:"#attributes-value"}]}]},"attributes-value":{patterns:[{include:"#interpolation"},{match:"(?:(['\"])([0-9._]+[\\w%]{,4})(\\1))|(?:([0-9._]+[\\w%]{,4})(?=\\s|/?>))",captures:{1:{name:"punctuation.definition.string.begin.svelte"},2:{name:"constant.numeric.decimal.svelte"},3:{name:"punctuation.definition.string.end.svelte"},4:{name:"constant.numeric.decimal.svelte"}}},{match:"([^\\s\"'=<>`/]|/(?!>))+",name:"string.unquoted.svelte",patterns:[{include:"#interpolation"}]},{begin:"(['\"])",end:"\\1",beginCaptures:{0:{name:"punctuation.definition.string.begin.svelte"}},endCaptures:{0:{name:"punctuation.definition.string.end.svelte"}},name:"string.quoted.svelte",patterns:[{include:"#interpolation"}]}]},"attributes-directives-keywords":{patterns:[{match:"on|use|bind",name:"keyword.control.svelte"},{match:"transition|in|out|animate",name:"keyword.other.animation.svelte"},{match:"let",name:"storage.type.svelte"},{match:"class|style",name:"entity.other.attribute-name.svelte"}]},"attributes-directives-types":{patterns:[{match:"(?<=(on):).*$",name:"entity.name.type.svelte"},{match:"(?<=(bind):).*$",name:"variable.parameter.svelte"},{match:"(?<=(use|transition|in|out|animate):).*$",name:"variable.function.svelte"},{match:"(?<=(let|class|style):).*$",name:"variable.parameter.svelte"}]},"attributes-directives-types-assigned":{patterns:[{match:"(?<=(bind):)this$",name:"variable.language.svelte"},{match:"(?<=(bind):).*$",name:"entity.name.type.svelte"},{match:"(?<=(class):).*$",name:"entity.other.attribute-name.class.svelte"},{match:"(?<=(style):).*$",name:"support.type.property-name.svelte"},{include:"#attributes-directives-types"}]},"attributes-directives":{begin:"(?<!<)(on|use|bind|transition|in|out|animate|let|class|style)(:)(?:((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*(?=\\s*=))|((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*))((\\|\\w+)*)",beginCaptures:{1:{patterns:[{include:"#attributes-directives-keywords"}]},2:{name:"punctuation.definition.keyword.svelte"},3:{patterns:[{include:"#attributes-directives-types-assigned"}]},4:{patterns:[{include:"#attributes-directives-types"}]},5:{patterns:[{match:"\\w+",name:"support.function.svelte"},{match:"\\|",name:"punctuation.separator.svelte"}]}},end:"(?=\\s*+[^=\\s])",name:"meta.directive.$1.svelte",patterns:[{begin:"=",beginCaptures:{0:{name:"punctuation.separator.key-value.svelte"}},end:"(?<=[^\\s=])(?!\\s*=)|(?=/?>)",patterns:[{include:"#attributes-value"}]}]},"attributes-generics":{begin:"(generics)(=)([\"'])",beginCaptures:{1:{name:"entity.other.attribute-name.svelte"},2:{name:"punctuation.separator.key-value.svelte"},3:{name:"punctuation.definition.string.begin.svelte"}},end:"(\\3)",endCaptures:{1:{name:"punctuation.definition.string.end.svelte"}},contentName:"meta.embedded.expression.svelte source.ts",patterns:[{include:"#type-parameters"}]},"type-parameters":{name:"meta.type.parameters.ts",patterns:[{include:"source.ts#comment"},{name:"storage.modifier.ts",match:"(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"},{include:"source.ts#type"},{include:"source.ts#punctuation-comma"},{name:"keyword.operator.assignment.ts",match:"(=)(?!>)"}]},tags:{patterns:[{include:"#tags-lang"},{include:"#tags-void"},{include:"#tags-general-end"},{include:"#tags-general-start"}]},"tags-name":{patterns:[{match:"(svelte)(:)([a-z][\\w0-9:-]*)",captures:{1:{name:"keyword.control.svelte"},2:{name:"punctuation.definition.keyword.svelte"},3:{name:"entity.name.tag.svelte"}}},{match:"slot",name:"keyword.control.svelte"},{match:"[A-Z][a-zA-Z0-9_]*",name:"support.class.component.svelte"},{match:"[a-z][\\w0-9:]*-[\\w0-9:-]*",name:"meta.tag.custom.svelte entity.name.tag.svelte"},{match:"[a-z][\\w0-9:-]*",name:"entity.name.tag.svelte"}]},"tags-start-attributes":{begin:"\\G",end:"(?=/?>)",name:"meta.tag.start.svelte",patterns:[{include:"#attributes"}]},"tags-lang-start-attributes":{begin:"\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.svelte"}},name:"meta.tag.start.svelte",patterns:[{include:"#attributes-generics"},{include:"#attributes"}]},"tags-start-node":{match:"(<)([^/\\s>/]*)",captures:{1:{name:"punctuation.definition.tag.begin.svelte"},2:{patterns:[{include:"#tags-name"}]}},name:"meta.tag.start.svelte"},"tags-end-node":{match:"(</)(.*?)\\s*(>)|(/>)",captures:{1:{name:"meta.tag.end.svelte punctuation.definition.tag.begin.svelte"},2:{name:"meta.tag.end.svelte",patterns:[{include:"#tags-name"}]},3:{name:"meta.tag.end.svelte punctuation.definition.tag.end.svelte"},4:{name:"meta.tag.start.svelte punctuation.definition.tag.end.svelte"}}},"tags-lang":{begin:"<(script|style|template)",end:"</\\1\\s*>|/>",beginCaptures:{0:{patterns:[{include:"#tags-start-node"}]}},endCaptures:{0:{patterns:[{include:"#tags-end-node"}]}},name:"meta.$1.svelte",patterns:[{begin:"\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*(['\"]|)(?:text/)?(\\w+)\\2)",end:"(?=</|/>)",name:"meta.lang.$3.svelte",patterns:[{include:"#tags-lang-start-attributes"}]},{include:"#tags-lang-start-attributes"}]},"tags-void":{begin:"(<)(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.svelte"},2:{name:"entity.name.tag.svelte"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.begin.svelte"}},name:"meta.tag.void.svelte",patterns:[{include:"#attributes"}]},"tags-general-start":{begin:"(<)([^/\\s>/]*)",end:"(/?>)",beginCaptures:{0:{patterns:[{include:"#tags-start-node"}]}},endCaptures:{1:{name:"meta.tag.start.svelte punctuation.definition.tag.end.svelte"}},name:"meta.scope.tag.$2.svelte",patterns:[{include:"#tags-start-attributes"}]},"tags-general-end":{begin:"(</)([^/\\s>]*)",end:"(>)",beginCaptures:{1:{name:"meta.tag.end.svelte punctuation.definition.tag.begin.svelte"},2:{name:"meta.tag.end.svelte",patterns:[{include:"#tags-name"}]}},endCaptures:{1:{name:"meta.tag.end.svelte punctuation.definition.tag.end.svelte"}},name:"meta.scope.tag.$2.svelte"}},displayName:"Svelte",embeddedLangs:["javascript","typescript","coffee","stylus","sass","css","scss","less","postcss","pug","markdown"]});var g=[...s.default,...a.default,...i.default,...c.default,...r.default,...o.default,...u.default,...l.default,...m.default,...d.default,...p.default,b]}}]);