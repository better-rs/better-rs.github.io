"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},l="\u6d41\u7a0b\u63a7\u5236",a={unversionedId:"guide/tips/code-snippet/logic",id:"guide/tips/code-snippet/logic",title:"\u6d41\u7a0b\u63a7\u5236",description:"- \u5e38\u7528\u4ee3\u7801\u7247\u6bb5",source:"@site/docs/01-guide/02-tips/03-code-snippet/02-logic.mdx",sourceDirName:"01-guide/02-tips/03-code-snippet",slug:"/guide/tips/code-snippet/logic",permalink:"/docs/guide/tips/code-snippet/logic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-guide/02-tips/03-code-snippet/02-logic.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Code Snippet",permalink:"/docs/guide/tips/code-snippet/intro"},next:{title:"\u274c Error \u5927\u5168",permalink:"/docs/guide/tips/error-log"}},p={},c=[{value:"\u5b57\u7b26\u4e32\u64cd\u4f5c:",id:"\u5b57\u7b26\u4e32\u64cd\u4f5c",level:2},{value:"\u6570\u7ec4\u64cd\u4f5c:",id:"\u6570\u7ec4\u64cd\u4f5c",level:2},{value:"for \u8fed\u4ee3:",id:"for-\u8fed\u4ee3",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6d41\u7a0b\u63a7\u5236"},"\u6d41\u7a0b\u63a7\u5236"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e38\u7528\u4ee3\u7801\u7247\u6bb5"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u8bed\u8a00\u4f7f\u7528\u8005, \u9891\u7e41\u5207\u6362\u8bed\u8a00, \u4f1a\u5bfc\u81f4\u4e00\u4e9b\u57fa\u7840\u7528\u6cd5\u6df7\u6dc6.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," \u5e38\u89c1:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u5b9a\u4e49, for \u8fed\u4ee3\u7b49, \u4e0d\u540c\u8bed\u8a00, \u90fd\u4f1a\u6709\u7ec6\u5fae\u5dee\u5f02."),(0,o.kt)("li",{parentName:"ul"},"\u7ecf\u5e38\u5199, \u81ea\u7136\u4e0d\u4f1a\u5fd8. \u8fc7\u4e00\u6bb5\u65f6\u95f4\u4e0d\u5199, \u53ef\u80fd\u5c31\u6df7\u6dc6\u4e86."),(0,o.kt)("li",{parentName:"ul"},"so, \u8fd9\u4e9b\u4ee3\u7801\u6bb5, \u53ea\u662f\u8f85\u52a9\u63d0\u793a.")),(0,o.kt)("h2",{id:"\u5b57\u7b26\u4e32\u64cd\u4f5c"},"\u5b57\u7b26\u4e32\u64cd\u4f5c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"\u6570\u7ec4\u64cd\u4f5c"},"\u6570\u7ec4\u64cd\u4f5c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")),(0,o.kt)("h2",{id:"for-\u8fed\u4ee3"},"for \u8fed\u4ee3:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TODO")))}s.isMDXComponent=!0}}]);