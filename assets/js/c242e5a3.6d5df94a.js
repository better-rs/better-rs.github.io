"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||u;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var u=r.length,a=new Array(u);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<u;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const u={sidebar_position:1},a="\ud83d\udc96 Rust \u8bed\u6cd5\u901f\u6210(CheatSheet)",i={unversionedId:"guide/core/cheatsheet",id:"guide/core/cheatsheet",title:"\ud83d\udc96 Rust \u8bed\u6cd5\u901f\u6210(CheatSheet)",description:"- rust \u6700\u5c0f\u8bed\u6cd5\u5b50\u96c6. (70%\u6700\u6838\u5fc3/\u4f7f\u7528\u6700\u9ad8\u9891\u90e8\u5206)",source:"@site/docs/01-guide/03-core/02-cheatsheet.mdx",sourceDirName:"01-guide/03-core",slug:"/guide/core/cheatsheet",permalink:"/docs/guide/core/cheatsheet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-guide/03-core/02-cheatsheet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Rust \u57fa\u7840\u8bed\u6cd5",permalink:"/docs/guide/core/intro"},next:{title:"\ud83d\udc8e Rust \u8fdb\u9636\u8bed\u6cd5",permalink:"/docs/category/-rust-\u8fdb\u9636\u8bed\u6cd5-1"}},o={},s=[{value:"Rust \u65b0\u589e\u6982\u5ff5:",id:"rust-\u65b0\u589e\u6982\u5ff5",level:2},{value:"Rust \u6570\u636e\u7c7b\u578b:",id:"rust-\u6570\u636e\u7c7b\u578b",level:2},{value:"Rust \u8bed\u53e5: for, while, if/else:",id:"rust-\u8bed\u53e5-for-while-ifelse",level:2},{value:"Rust \u6a21\u5f0f\u5339\u914d: match",id:"rust-\u6a21\u5f0f\u5339\u914d-match",level:2},{value:"Rust \u8fd4\u56de\u503c Result + Option",id:"rust-\u8fd4\u56de\u503c-result--option",level:2},{value:"Rust error \u5904\u7406:",id:"rust-error-\u5904\u7406",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-rust-\u8bed\u6cd5\u901f\u6210cheatsheet"},"\ud83d\udc96 Rust \u8bed\u6cd5\u901f\u6210(CheatSheet)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"rust \u6700\u5c0f\u8bed\u6cd5\u5b50\u96c6. (70%\u6700\u6838\u5fc3/\u4f7f\u7528\u6700\u9ad8\u9891\u90e8\u5206)"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e: \u975e rust \u5f00\u53d1\u8005, \u4ec5\u5c1d\u8bd5\u5feb\u901f\u4e86\u89e3 rust, \u4fee\u6539\u4e00\u4e9b rust \u6a21\u5757."),(0,l.kt)("li",{parentName:"ul"},"rust \u8bed\u6cd5\u6bd4\u8f83\u590d\u6742, \u5b8c\u5168\u638c\u63e1, \u8017\u65f6 1\u6708+.")),(0,l.kt)("h2",{id:"rust-\u65b0\u589e\u6982\u5ff5"},"Rust \u65b0\u589e\u6982\u5ff5:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b8f:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"println!() \u5b8f, \u4e0d\u662f\u51fd\u6570."),(0,l.kt)("li",{parentName:"ul"},"C \u5b8f = \u5b57\u7b26\u4e32 \u63d2\u5165+\u66ff\u6362."),(0,l.kt)("li",{parentName:"ul"},"Rust \u5b8f = AST(\u62bd\u8c61\u8bed\u6cd5\u6811) \u63d2\u5165+\u66ff\u6362, \u53ef\u4ee5\u8ba4\u4e3a\u662f C \u5b8f\u7684\u8fdb\u9636\u7248, \u652f\u6301\u53c2\u6570\u68c0\u67e5\u7b49."),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u573a\u666f:"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u751f\u6210\u5668, \u7c7b\u4f3c go generate \u5de5\u5177, \u7528\u4e8e\u751f\u6210\u901a\u7528\u6a21\u677f\u4ee3\u7801."),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u88c5\u9970\u5668\u6548\u679c, \u7c7b\u4f3c python decorator \u6548\u679c.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"mut:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rust \u53d8\u91cf, \u533a\u5206 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u53ea\u8bfb")," \u6a21\u5f0f vs ",(0,l.kt)("inlineCode",{parentName:"li"},"\u53ef\u5199")," \u6a21\u5f0f."),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u52a0 mut \u88c5\u9970\u7684\u53d8\u91cf\u5b9a\u4e49, \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"\u53ea\u8bfb")," \u6a21\u5f0f. \u8fd9\u4e2a\u7279\u6027\u975e\u5e38\u68d2!")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u751f\u547d\u5468\u671f\u6807\u8bb0: 'a, 'static \u7b49")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u53e5\u8bdd\u6982\u62ec: rust \u7684\u7f16\u8bd1\u5668\u63a8\u5bfc, \u4e0d\u662f\u4e07\u80fd\u7684."),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u6807\u8bb0\u7b26, \u7528\u9014: \u4eba\u5de5\u6807\u6ce8, \u8f85\u52a9\u7f16\u8bd1\u5668\u63a8\u5bfc+\u7f16\u8bd1\u68c0\u67e5."),(0,l.kt)("li",{parentName:"ul"},"\u968f\u7740 rust \u7f16\u8bd1\u5668\u4e0d\u65ad\u8fed\u4ee3, \u9700\u8981\u624b\u52a8\u6807\u6ce8\u7684\u573a\u666f, \u8d8a\u6765\u8d8a\u5c11.")),(0,l.kt)("h2",{id:"rust-\u6570\u636e\u7c7b\u578b"},"Rust \u6570\u636e\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32(\u8bfb\u5199)"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u8bfb\u5199")),(0,l.kt)("h2",{id:"rust-\u8bed\u53e5-for-while-ifelse"},"Rust \u8bed\u53e5: for, while, if/else:"),(0,l.kt)("h2",{id:"rust-\u6a21\u5f0f\u5339\u914d-match"},"Rust \u6a21\u5f0f\u5339\u914d: match"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6740\u624b\u7ea7\u7279\u6027. \u975e\u5e38\u597d\u7528")),(0,l.kt)("h2",{id:"rust-\u8fd4\u56de\u503c-result--option"},"Rust \u8fd4\u56de\u503c Result + Option"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6740\u624b\u7ea7\u7279\u6027. \u975e\u5e38\u8d5e")),(0,l.kt)("h2",{id:"rust-error-\u5904\u7406"},"Rust error \u5904\u7406:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"panic!")))}p.isMDXComponent=!0}}]);