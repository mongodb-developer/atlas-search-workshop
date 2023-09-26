"use strict";(self.webpackChunkatlas_search_workshop=self.webpackChunkatlas_search_workshop||[]).push([[681],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(4137)),o=r(9524);const i={sidebar_position:0},c="Query Analytics Overview",s={unversionedId:"query-analytics/overview",id:"query-analytics/overview",title:"Query Analytics Overview",description:"Lab Goals:",source:"@site/docs/query-analytics/overview.mdx",sourceDirName:"query-analytics",slug:"/query-analytics/overview",permalink:"/atlas-search-workshop/docs/query-analytics/overview",draft:!1,editUrl:"https://github.com/mongodb-developer/atlas-search-workshop/blob/main/docs/query-analytics/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc8 Query Analytics",permalink:"/atlas-search-workshop/docs/category/-query-analytics"},next:{title:"\ud83d\udcd0Vector Search",permalink:"/atlas-search-workshop/docs/category/vector-search"}},l={},p=[],u={toc:p},y="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-analytics-overview"},"Query Analytics Overview"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Lab Goals:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Understand importance of query analytics"),(0,a.kt)("li",{parentName:"ul"},"Add tracking to our ",(0,a.kt)("inlineCode",{parentName:"li"},"$search")," queries"),(0,a.kt)("li",{parentName:"ul"},"Add and effectively use syonyms"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your application, like this library search interface does, performs searches for practically every keystroke, you\nmay want to only add ",(0,a.kt)("inlineCode",{parentName:"p"},"tracking")," on fully formed search requests. Tracking partial queries may or may not be useful or\nclutter the insights of Query Analytics.")),(0,a.kt)("img",{alt:"TBD",src:(0,o.Z)("/img/query-analytics/dashboard.png")}),(0,a.kt)("img",{alt:"TBD",src:(0,o.Z)("/img/query-analytics/top-search-terms.png")}),(0,a.kt)("img",{alt:"TBD",src:(0,o.Z)("/img/query-analytics/no-results.png")}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add tracking to your queries:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"tracking": {\n  "searchTerms": "<query>"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-search/tracking/"},"Tracking Search Terms documentation")))}m.isMDXComponent=!0}}]);