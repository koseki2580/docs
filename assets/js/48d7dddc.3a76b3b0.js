"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[8346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),c=n(7094),u=n(2466);const s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:b,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,c.U)(),[T,w]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&f.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==T&&(x(t),w(a),null!=b&&N(b,String(a)))},F=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:F,onClick:C},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7936:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t,color:n}=e;return a.createElement("span",{style:{color:n}},t)}},1488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162),o=n(7936);const c={title:"\u518d\u5e30\u51e6\u7406",sidebar_label:"\u518d\u5e30\u51e6\u7406",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},u=void 0,s={unversionedId:"Algorithm/recursive",id:"Algorithm/recursive",title:"\u518d\u5e30\u51e6\u7406",description:"\u518d\u5e30\u51e6\u7406\u3068\u306f",source:"@site/docs/00-Algorithm/03-recursive.mdx",sourceDirName:"00-Algorithm",slug:"/Algorithm/recursive",permalink:"/study-docs/docs/Algorithm/recursive",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/00-Algorithm/03-recursive.mdx",tags:[{label:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",permalink:"/study-docs/docs/tags/\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1660994589,formattedLastUpdatedAt:"2022\u5e748\u670820\u65e5",sidebarPosition:3,frontMatter:{title:"\u518d\u5e30\u51e6\u7406",sidebar_label:"\u518d\u5e30\u51e6\u7406",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},sidebar:"AlgorithmSidebar",previous:{title:"\u6df1\u3055\u512a\u5148\u63a2\u7d22",permalink:"/study-docs/docs/Algorithm/depth-first-search"}},p={},d=[{value:"\u518d\u5e30\u51e6\u7406\u3068\u306f",id:"\u518d\u5e30\u51e6\u7406\u3068\u306f",level:2},{value:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:3},{value:"\u6d41\u308c",id:"\u6d41\u308c",level:4},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0",level:3},{value:"\u30e1\u30e2\u5316\u518d\u5e30\u3068\u306f",id:"\u30e1\u30e2\u5316\u518d\u5e30\u3068\u306f",level:2},{value:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0-1",level:3},{value:"\u6d41\u308c",id:"\u6d41\u308c-1",level:4},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0-1",level:3}],m={toc:d};function b(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u518d\u5e30\u51e6\u7406\u3068\u306f"},"\u518d\u5e30\u51e6\u7406\u3068\u306f"),(0,r.kt)("p",null,"\u95a2\u6570\u30fb\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u81ea\u5206\u81ea\u8eab\u3092\u547c\u3073\u51fa\u3057\u3001\u51e6\u7406\u3092\u884c\u3063\u3066\u3044\u304f\u3082\u306e\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"\u518d\u5e30\u51e6\u7406"),"\u3068\u3044\u3046\u3002(\u4ee5\u964d\u3067\u306f\u95a2\u6570\u3068\u3057\u304b\u8a18\u8f09\u3057\u306a\u3044\u304c\u30e1\u30bd\u30c3\u30c9\u3068\u8aad\u307f\u66ff\u3048\u3066\u3082\u554f\u984c\u306a\u3044)"),(0,r.kt)("h3",{id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,r.kt)("h4",{id:"\u6d41\u308c"},"\u6d41\u308c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u95a2\u6570\u5185\u90e8\u3067\u81ea\u8eab\u3092\u547c\u3073\u51fa\u3059\u95a2\u6570\u3092\u4f5c\u6210(\u7279\u5b9a\u306e\u6761\u4ef6\u3067",(0,r.kt)(o.Z,{color:"red",mdxType:"FontColor"},"\u5fc5\u305a"),"\u623b\u308a\u5024 or \u81ea\u8eab\u306e\u547c\u3073\u51fa\u3057\u3092\u3057\u306a\u3044 \u51e6\u7406\u3092\u5165\u308c\u308b)"),(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u7fa9\u3057\u305f\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059")),(0,r.kt)("p",null,"\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u306b\u306a\u3063\u3066\u3044\u308b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u95a2\u6570\u3092\u5b9a\u7fa9\u3059\u308b")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(5971).Z,title:"\u95a2\u6570\u5b9a\u7fa9",width:"701",height:"281"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059")),(0,r.kt)("p",null,"\u518d\u5e30\u51e6\u7406\u3092\u7528\u3044\u308b\u3068\u30b3\u30fc\u30c9\u3092\u30b7\u30f3\u30d7\u30eb\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u304c\u3001\u7279\u5b9a\u306e\u6761\u4ef6\u3067\u81ea\u8eab\u3092\u547c\u3073\u51fa\u3055\u306a\u3044\u3068\u3044\u3046\u51e6\u7406\u3092\u8a18\u8ff0\u3057\u306a\u3044\u3068\u7121\u9650\u30eb\u30fc\u30d7\u306b\u5165\u308a\u3001\u30b9\u30bf\u30c3\u30af\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30fc\u304c\u8d77\u304d\u308b\u3002\n(\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u5165\u308c\u3066\u3044\u3066\u3082\u30b9\u30bf\u30c3\u30af\u304c\u7a4d\u307f\u91cd\u306a\u308b\u3068\u30b9\u30bf\u30c3\u30af\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30fc\u3092\u8d77\u3053\u3059)"),(0,r.kt)("h3",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u30d5\u30a3\u30dc\u30ca\u30c3\u30c1\u6570\u5217\u3092\u6c42\u3081\u308b\u30b3\u30fc\u30c9\u3092\u66f8\u304f"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def Fibonacci(n):\n    if n <= 1:\n        return 1\n    return Fibonacci(n - 1) + Fibonacci(n - 2)\n"))),(0,r.kt)(i.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int Fibonacci(int n)\n{\n    if (n <= 1) return 1;\n    return Fibonacci(n - 1) + Fibonacci(n - 2);\n}\n"))),(0,r.kt)(i.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public int Fibonacci(int n)\n{\n    if (n <= 1) return 1;\n    return Fibonacci(n - 1) +Fibonacci(n - 2);\n}\n")))),(0,r.kt)("h2",{id:"\u30e1\u30e2\u5316\u518d\u5e30\u3068\u306f"},"\u30e1\u30e2\u5316\u518d\u5e30\u3068\u306f"),(0,r.kt)("p",null,"\u518d\u5e30\u51e6\u7406\u3067\u306f\u4e00\u5ea6\u6c42\u3081\u305f\u3053\u3068\u304c\u3042\u308b\u5024\u3067\u3082\u518d\u5ea6\u8a08\u7b97\u3092\u884c\u3063\u3066\u3044\u308b\u3002\n\u540c\u3058\u5024\u3092\u4f55\u5ea6\u3082\u8a08\u7b97\u3059\u308b\u306e\u306f\u7121\u99c4\u3068\u8a00\u3048\u308b\u305f\u3081\u3001\u4e00\u5ea6\u8a08\u7b97\u3057\u305f\u3082\u306e\u5225\u306e\u914d\u5217\u306a\u3069\u306b\u4fdd\u5b58\u3057\u3066\u8a08\u7b97\u91cf\u3092\u524a\u6e1b\u3059\u308b\u65b9\u6cd5\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"\u30e1\u30e2\u5316\u518d\u5e30"),"\u3068\u547c\u3076\u3002"),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u30d5\u30a3\u30dc\u30ca\u30c3\u30c1\u6570\u5217\u3092\u4f8b\u306b\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Fibonacci (5)"),"\u3092\u6c42\u3081\u308b\u3068"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(8322).Z,title:"\u30d5\u30a3\u30dc\u30ca\u30c3\u30c1",width:"1051",height:"331"})),(0,r.kt)("p",null,"\u3068\u306a\u308a\u3001\u305d\u308c\u305e\u308c\u306e\u767b\u5834\u56de\u6570\u306f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fibonacci (5)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fibonacci (4)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fibonacci (3)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fibonacci (2)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fibonacci (1)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fibonacci (0)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u56de\u6570"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3")))),(0,r.kt)("p",null,"\u3067\u3042\u308b\u3002\u6570\u304c\u5927\u304d\u304f\u306a\u308b\u3068\u540c\u3058\u3082\u306e\u304c\u4f55\u5ea6\u3082\u767b\u5834\u3057\u3001\u3055\u3089\u306b\u7121\u99c4\u306a\u51e6\u7406\u304c\u5897\u3048\u3066\u3044\u304f\u3002"),(0,r.kt)("h3",{id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0-1"},"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,r.kt)("h4",{id:"\u6d41\u308c-1"},"\u6d41\u308c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u518d\u5e30\u51e6\u7406\u3068\u57fa\u672c\u7684\u306b\u306f\u540c\u3058\u3067\u3042\u308a\u3001\u30e1\u30e2\u3057\u305f\u914d\u5217\u306b\u5024\u304c\u5165\u3063\u3066\u3044\u308c\u3070\u305d\u306e\u5024\u3092\u8fd4\u3059\u51e6\u7406\u3068\u30e1\u30e2\u3059\u308b\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u305f\u95a2\u6570\u3092\u8a18\u8ff0"),(0,r.kt)("li",{parentName:"ol"},"\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059")),(0,r.kt)("p",null,"\u307b\u3068\u3093\u3069\u518d\u5e30\u51e6\u7406\u3068\u5909\u308f\u3089\u306a\u3044"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u518d\u5e30\u51e6\u7406\u306b\u30e1\u30e2\u3059\u308b\u51e6\u7406\u3068\u30e1\u30e2\u3057\u3066\u3044\u308b\u5024\u304b\u78ba\u8a8d\u3059\u308b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(6604).Z,title:"\u30e1\u30e2\u5316",width:"701",height:"402"})),(0,r.kt)("h3",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0-1"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"memo"),"\u914d\u5217\u306f\u5168\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"\u3067\u521d\u671f\u5316\u3092\u884c\u3063\u3066\u3044\u308b\u3002\n\u914d\u5217\u306e\u4e2d\u8eab\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"\u4ee5\u5916\u306a\u3089\u305d\u306e\u5024\u306f\u8a08\u7b97\u6e08\u307f\u3092\u8868\u3059\u3002"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def Fibonacci(n):\n    if n <= 1:\n        return 1\n    if memo[n] != -1:\n        return memo[n]\n    memo[n] = Fibonacci(n - 1) + Fibonacci(n - 2)\n    return memo[n]\nmemo = [-1] * 30\n"))),(0,r.kt)(i.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> memo(30, -1);\nint Fibonacci(int n)\n{\n    if (n <= 1) return 1;\n    if (memo[n] != -1) return memo[n];\n    return memo[n] = Fibonacci(n - 1) + Fibonacci(n - 2);\n}\n"))),(0,r.kt)(i.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"int[] memo = new int[30];\npublic int Fibonacci(int n)\n{\n    if (n <= 1) return 1;\n    if (memo[n] != -1) return memo[n];\n    return memo[n] = Fibonacci(n - 1) +Fibonacci(n - 2);\n}\n")))))}b.isMDXComponent=!0},5971:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/recursive-1.drawio-c5cff66f9666a590b11e77cf25cd22b0.svg"},8322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/recursive-2.drawio-a33c01f7d1c77655d89acd29af82dc9d.svg"},6604:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/recursive-3.drawio-ba88098b33abcd01162ef1ccda77ed60.svg"}}]);