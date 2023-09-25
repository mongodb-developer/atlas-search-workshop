"use strict";(self.webpackChunkatlas_search_workshop=self.webpackChunkatlas_search_workshop||[]).push([[467],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(4137)),i=a(9524);const o={},s="\ud83d\uddc2\ufe0f Create Search Index",c={unversionedId:"end-to-end-lab/create-search-index",id:"end-to-end-lab/create-search-index",title:"\ud83d\uddc2\ufe0f Create Search Index",description:"MongoDB's Atlas Search is a full-text search solution built on top of Apache Lucene.",source:"@site/docs/end-to-end-lab/1-create-search-index.mdx",sourceDirName:"end-to-end-lab",slug:"/end-to-end-lab/create-search-index",permalink:"/atlas-search-workshop/docs/end-to-end-lab/create-search-index",draft:!1,editUrl:"https://github.com/mongodb-developer/atlas-search-workshop/blob/main/docs/end-to-end-lab/1-create-search-index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"End to End Lab Overview",permalink:"/atlas-search-workshop/docs/end-to-end-lab/overview"},next:{title:"2. $search",permalink:"/atlas-search-workshop/docs/end-to-end-lab/search"}},l={},d=[{value:"Step-by-step guide to creating your first Atlas Search index",id:"step-by-step-guide-to-creating-your-first-atlas-search-index",level:2}],p={toc:d},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-create-search-index"},"\ud83d\uddc2\ufe0f Create Search Index"),(0,r.kt)("h1",{id:"create-an-atlas-search-index"},"Create an Atlas Search index"),(0,r.kt)("p",null,"MongoDB's Atlas Search is a full-text search solution built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://lucene.apache.org/"},"Apache Lucene"),".\nAtlas Search allows fine-grained text indexing and querying of data persisted in your Atlas database."),(0,r.kt)("p",null,"To start using Atlas Search, you must configure a search index on your database.\nAtlas Search indexes categorize data in an easily searchable format and enable\nfaster document retrieval using certain identifiers. You can create a search index right from the Atlas UI."),(0,r.kt)("h2",{id:"step-by-step-guide-to-creating-your-first-atlas-search-index"},"Step-by-step guide to creating your first Atlas Search index"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("strong",{parentName:"p"},"Database Deployments")," page in MongoDB Atlas and select ",(0,r.kt)("strong",{parentName:"p"},"Create Index")," in the lower right corner."),(0,r.kt)("img",{alt:"The 'Database Deployments' page with the 'Create Index' link highlighted",src:(0,i.Z)("/img/end-to-end-lab/create-search-index-0.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Create Search Index")," button."),(0,r.kt)("img",{alt:"The 'Search' section of the cluster details page with the 'Create Search Index' button highlighted",src:(0,i.Z)("/img/end-to-end-lab/create-search-index-1.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first step of building the search index is selecting the configuration method. You can choose from two options \u2014 using the ",(0,r.kt)("strong",{parentName:"p"},"Visual Editor")," or writing the configuration yourself with the ",(0,r.kt)("strong",{parentName:"p"},"JSON Editor"),". Let's stick to the default ",(0,r.kt)("strong",{parentName:"p"},"Visual Editor"),". To proceed, click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("img",{alt:"The 'Configuration Method' step of creating a new search index",src:(0,i.Z)("/img/end-to-end-lab/create-search-index-2.png")}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, you need to select a name and data source for your index. Leave the name as ",(0,r.kt)("strong",{parentName:"p"},"default")," and select the database ",(0,r.kt)("strong",{parentName:"p"},"library")," and the collection ",(0,r.kt)("strong",{parentName:"p"},"books"),"."),(0,r.kt)("img",{alt:"The 'Name & Data Source' step of creating a new search index",src:(0,i.Z)("/img/end-to-end-lab/create-search-index-3.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The final step allows you to review the index configuration and refine it if needed. You may also see the JSON that was generated from your configuration by clicking ",(0,r.kt)("strong",{parentName:"p"},"View JSON"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "mappings": {\n        "dynamic": true\n    }\n}\n')),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The index is using dynamic field mappings. We didn't configure any explicit (static) mappings between the fields in the documents and the search index. That's why Atlas created dynamic mappings that match the data in the documents to some common field types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),".\nDynamic mappings are useful when you're just getting started with Atlas Search or if your schema changes regularly. However, they take up more space compared to static mappings."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You don't need to refine this index. Go ahead and click ",(0,r.kt)("strong",{parentName:"p"},"Create Search Index"),"."),(0,r.kt)("img",{alt:"The 'Review & Refine' step of creating a new search index",src:(0,i.Z)("/img/end-to-end-lab/create-search-index-4.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You'll be redirected to a page showing all of the search indexes used in your Atlas project. Creating the index should take up to a minute."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When your search index reaches status ",(0,r.kt)("strong",{parentName:"p"},"Active"),", you'll be able to see more information about the index. For example, the number of indexed documents, the field mappings and the index size. Notice also that you're using 1 out of the 3 free search indexes that come with your free M0 database.")))),(0,r.kt)("img",{alt:"List with search indexes",src:(0,i.Z)("/img/end-to-end-lab/create-search-index-5.png")}),(0,r.kt)("img",{alt:"TBD",src:(0,i.Z)("/img/end-to-end-lab/create-search-index-6.png")}))}u.isMDXComponent=!0}}]);