"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},l="\u2757\ufe0f \u9690\u5f0f\u7ea6\u5b9a",o={unversionedId:"guide/tips/rule",id:"guide/tips/rule",title:"\u2757\ufe0f \u9690\u5f0f\u7ea6\u5b9a",description:"- Rust \u662f\u5f3a\u89c4\u8303\u8bed\u8a00, \u6709\u4e9b\u89c4\u8303\u662f\u9690\u5f0f\u7684, \u6709\u4e9b\u89c4\u8303\u662f\u663e\u5f0f\u7684.",source:"@site/docs/01-guide/02-tips/00-rule.mdx",sourceDirName:"01-guide/02-tips",slug:"/guide/tips/rule",permalink:"/en/docs/guide/tips/rule",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-guide/02-tips/00-rule.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"\ud83d\udc8e Rust \u5fc5\u77e5\u5fc5\u4f1a",permalink:"/en/docs/category/-rust-\u5fc5\u77e5\u5fc5\u4f1a-1"},next:{title:"\u2705 \u8bed\u6cd5\u76ee\u5f55",permalink:"/en/docs/guide/tips/intro"}},p={},u=[{value:"Rust \u9690\u5f0f\u7ea6\u5b9a",id:"rust-\u9690\u5f0f\u7ea6\u5b9a",level:2},{value:"cargo.toml \u9690\u542b\u7684\u7ea6\u5b9a:",id:"cargotoml-\u9690\u542b\u7684\u7ea6\u5b9a",level:3},{value:"mod.rs \u9690\u542b\u7684\u7ea6\u5b9a:",id:"modrs-\u9690\u542b\u7684\u7ea6\u5b9a",level:3},{value:"build.rs \u9690\u542b\u7684\u7ea6\u5b9a:",id:"buildrs-\u9690\u542b\u7684\u7ea6\u5b9a",level:3},{value:"\u5176\u4ed6\u9690\u542b\u7684\u7ea6\u5b9a:",id:"\u5176\u4ed6\u9690\u542b\u7684\u7ea6\u5b9a",level:3},{value:"test \u9690\u542b\u7684\u7ea6\u5b9a:",id:"test-\u9690\u542b\u7684\u7ea6\u5b9a",level:3},{value:"crate \u9690\u542b\u7684\u7ea6\u5b9a:",id:"crate-\u9690\u542b\u7684\u7ea6\u5b9a",level:3},{value:"cargo workspace \u9690\u542b\u7684\u7ea6\u5b9a:",id:"cargo-workspace-\u9690\u542b\u7684\u7ea6\u5b9a",level:3}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-\u9690\u5f0f\u7ea6\u5b9a"},"\u2757\ufe0f \u9690\u5f0f\u7ea6\u5b9a"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Rust \u662f",(0,a.kt)("inlineCode",{parentName:"li"},"\u5f3a\u89c4\u8303"),"\u8bed\u8a00, \u6709\u4e9b\u89c4\u8303\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"\u9690\u5f0f"),"\u7684, \u6709\u4e9b\u89c4\u8303\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"\u663e\u5f0f"),"\u7684."),(0,a.kt)("li",{parentName:"ul"},"\u5f88\u591a\u8bed\u8a00\u90fd\u5b58\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"\u9690\u5f0f"),"\u7ea6\u5b9a, \u62ff python \u4e3e\u4f8b:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"python \u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u7f29\u8fdb"),"(4\u4e2a\u7a7a\u683c)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__init__")," \u65b9\u6cd5: \u7c7b\u521d\u59cb\u5316"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py")," \u6587\u4ef6: \u5e38\u6a21\u5757\u6279\u91cf\u5bfc\u51fa, \u7528\u4e8e\u533a\u5206\u4e00\u4e2a\u666e\u901a\u76ee\u5f55 vs python module, \u4e14\u5fc5\u987b\u5b58\u5728"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"self")," \u53c2\u6570: \u7c7b\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570"))),(0,a.kt)("li",{parentName:"ul"},"Rust \u4e2d, \u6709",(0,a.kt)("inlineCode",{parentName:"li"},"\u5927\u91cf\u9690\u5f0f"),"\u7ea6\u5b9a, \u4ece\u7f16\u8bd1\u5de5\u5177\u94fe, cargo \u5de5\u5177, \u8bed\u8a00\u8bed\u6cd5\u8bbe\u8ba1, \u90fd\u6709\u5927\u91cf\u9690\u5f0f\u7ea6\u5b9a.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/"),": \u9879\u76ee\u6e90\u7801\u76ee\u5f55",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/main.rs"),": \u7528\u4e8e\u5b58\u653e\u4e3b\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/lib.rs"),": \u7528\u4e8e\u5b58\u653e\u5e93\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/bin/"),": \u7528\u4e8e\u5b58\u653e\u591a\u4e2a\u4e3b\u7a0b\u5e8f(\u975e\u5e38\u9690\u5f0f, \u867d\u7136\u662f\u5b98\u65b9\u89c4\u8303, \u4f46\u4e2a\u4eba\u4e0d\u5efa\u8bae\u4f7f\u7528, \u66f4\u5efa\u8bae\u91c7\u7528 substrate \u7684\u505a\u6cd5)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo.toml"),": \u9879\u76ee\u914d\u7f6e\u6587\u4ef6, \u5305\u542b\u975e\u5e38\u7075\u6d3b+\u5f3a\u5927+\u590d\u6742\u7684\u914d\u7f6e\u89c4\u5219(\u540a\u6253\u5176\u4ed6\u8bed\u8a00)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mod.rs"),": \u7528\u4e8e\u5b58\u653e\u6a21\u5757\u6587\u4ef6, \u5e38\u7528\u4e8e\u6279\u91cf\u5bfc\u51fa rust modules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"build.rs"),": \u7528\u4e8e\u5b58\u653e\u6784\u5efa\u811a\u672c"))),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b",(0,a.kt)("inlineCode",{parentName:"li"},"\u9690\u5f0f"),"\u7ea6\u5b9a, \u4f1a\u7ed9",(0,a.kt)("inlineCode",{parentName:"li"},"\u521d\u5b66\u8005"),"\u5e26\u6765\u5927\u91cf\u56f0\u6270.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ecf\u5e38\u56e0\u4e3a\u4e0d\u4e86\u89e3\u9690\u542b\u89c4\u5219, \u5bfc\u81f4\u65e0\u6cd5\u7406\u89e3+\u7f16\u8bd1 rust \u9879\u76ee."),(0,a.kt)("li",{parentName:"ul"},"\u867d\u7136",(0,a.kt)("inlineCode",{parentName:"li"},"\u5b98\u65b9\u6587\u6863"),"\u90fd\u4f1a\u63d0\u53ca, \u4f46",(0,a.kt)("inlineCode",{parentName:"li"},"\u8fc7\u4e8e\u5206\u6563"),"(\u521d\u5b66\u8005\u8981\u82b1\u5f88\u4e45\u624d\u89e6\u78b0\u5230, \u4f46\u5176\u5b9e\u5165\u95e8\u5c31\u5e94\u8be5\u77e5\u9053)."),(0,a.kt)("li",{parentName:"ul"},"\u6b64\u5904, \u4f1a\u5c06\u6240\u6709\u9690\u5f0f\u7ea6\u5b9a, \u4e00\u4e00\u5217\u4e3e+\u8bf4\u660e, \u4ee5\u4fbf\u521d\u5b66\u8005\u5feb\u901f\u77e5\u6653, \u4e0d\u81f3\u4e8e\u88ab\u8fd9\u4e9b\u7eca\u5012."))))),(0,a.kt)("h2",{id:"rust-\u9690\u5f0f\u7ea6\u5b9a"},"Rust \u9690\u5f0f\u7ea6\u5b9a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u533a\u5206 lib \u548c bin."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"lib: \u662f\u5305/\u5e93. \u901a\u5e38\u662f\u4e0d\u542b\u6709 main \u51fd\u6570\u7684."),(0,a.kt)("li",{parentName:"ul"},"bin: \u662f\u53ef\u6267\u884c\u6587\u4ef6. \u901a\u5e38\u662f\u542b\u6709 main \u51fd\u6570\u7684."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"src/main.rs \u662f bin \u7684\u5165\u53e3\u6587\u4ef6.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"src/lib.rs \u662f lib \u7684\u5165\u53e3\u6587\u4ef6."))),(0,a.kt)("h3",{id:"cargotoml-\u9690\u542b\u7684\u7ea6\u5b9a"},"cargo.toml \u9690\u542b\u7684\u7ea6\u5b9a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"- [package] \u4e0b\u7684 name \u5b57\u6bb5, \u662f lib \u7684\u540d\u5b57.\n- [lib] \u4e0b\u7684 name \u5b57\u6bb5, \u662f lib \u7684\u540d\u5b57.\n- [lib] \u4e0b\u7684 path \u5b57\u6bb5, \u662f lib \u7684\u5165\u53e3\u6587\u4ef6.\n- [bin] \u4e0b\u7684 name \u5b57\u6bb5, \u662f bin \u7684\u540d\u5b57.\n- [bin] \u4e0b\u7684 path \u5b57\u6bb5, \u662f bin \u7684\u5165\u53e3\u6587\u4ef6.\n\n\n")),(0,a.kt)("h3",{id:"modrs-\u9690\u542b\u7684\u7ea6\u5b9a"},"mod.rs \u9690\u542b\u7684\u7ea6\u5b9a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mod.rs")," \u7c7b\u4f3c python \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py")," \u6587\u4ef6, \u7528\u4e8e\u6279\u91cf\u5bfc\u51fa\u6a21\u5757."),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6cd5\u57fa\u672c\u548c python ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py")," \u4e00\u81f4, \u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f, ",(0,a.kt)("inlineCode",{parentName:"li"},"mod.rs")," \u6587\u4ef6\u4e2d\u7684\u6a21\u5757, \u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"main.rs")," \u4e2d\u5bfc\u51fa, \u624d\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"main.rs")," \u4e2d\u4f7f\u7528.")),(0,a.kt)("h3",{id:"buildrs-\u9690\u542b\u7684\u7ea6\u5b9a"},"build.rs \u9690\u542b\u7684\u7ea6\u5b9a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TODO")),(0,a.kt)("h3",{id:"\u5176\u4ed6\u9690\u542b\u7684\u7ea6\u5b9a"},"\u5176\u4ed6\u9690\u542b\u7684\u7ea6\u5b9a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"main.rs \u4e2d, \u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"use crate::")," \u5bfc\u5165\u6a21\u5757."),(0,a.kt)("li",{parentName:"ul"},"lib.rs \u4e2d, \u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"use super::")," \u5bfc\u5165\u6a21\u5757."),(0,a.kt)("li",{parentName:"ul"},"lib.rs \u4e2d, \u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"use crate::")," \u5bfc\u5165\u6a21\u5757.")),(0,a.kt)("h3",{id:"test-\u9690\u542b\u7684\u7ea6\u5b9a"},"test \u9690\u542b\u7684\u7ea6\u5b9a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mod tests: \u7528\u4e8e\u5b58\u653e\u6d4b\u8bd5\u4ee3\u7801."),(0,a.kt)("li",{parentName:"ul"},"run test: ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo test")),(0,a.kt)("li",{parentName:"ul"},"run test: ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo test -- --nocapture"))),(0,a.kt)("h3",{id:"crate-\u9690\u542b\u7684\u7ea6\u5b9a"},"crate \u9690\u542b\u7684\u7ea6\u5b9a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TODO")),(0,a.kt)("h3",{id:"cargo-workspace-\u9690\u542b\u7684\u7ea6\u5b9a"},"cargo workspace \u9690\u542b\u7684\u7ea6\u5b9a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"workspace: \u7528\u4e8e\u7ba1\u7406\u591a\u4e2a crate."),(0,a.kt)("li",{parentName:"ul"},"cargo.toml: \u7528\u4e8e\u7ba1\u7406 workspace.")))}s.isMDXComponent=!0}}]);