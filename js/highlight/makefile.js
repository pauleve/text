(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[100],{382:function(e,n){e.exports=function(e){var n={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},i={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},a={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[n]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*[:+?]?=",illegal:"\\n",returnBegin:!0,contains:[{begin:"^"+e.UNDERSCORE_IDENT_RE,end:"[:+?]?=",excludeEnd:!0}]},r={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]};return{aliases:["mk","mak"],keywords:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",lexemes:/[\w-]+/,contains:[e.HASH_COMMENT_MODE,n,i,a,s,{className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{"meta-keyword":".PHONY"},lexemes:/[\.\w]+/},r]}}}}]);
//# sourceMappingURL=makefile.js.map?v=b285166526329e8bbf84