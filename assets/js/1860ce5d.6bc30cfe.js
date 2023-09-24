"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[3303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var g=n(72389);const h="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",k,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},37389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={title:"\u6728\u69cb\u9020",sidebar_label:"\u6728\u69cb\u9020",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},u=void 0,s={unversionedId:"Data-Structure/tree",id:"Data-Structure/tree",title:"\u6728\u69cb\u9020",description:"\u6728\u69cb\u9020\u3068\u306f",source:"@site/docs/10-Data-Structure/03-tree.md",sourceDirName:"10-Data-Structure",slug:"/Data-Structure/tree",permalink:"/study-docs/docs/Data-Structure/tree",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/10-Data-Structure/03-tree.md",tags:[{label:"\u30c7\u30fc\u30bf\u69cb\u9020",permalink:"/study-docs/docs/tags/\u30c7\u30fc\u30bf\u69cb\u9020"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1695463669,formattedLastUpdatedAt:"2023\u5e749\u670823\u65e5",sidebarPosition:3,frontMatter:{title:"\u6728\u69cb\u9020",sidebar_label:"\u6728\u69cb\u9020",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},sidebar:"Data-StructureSidebar",previous:{title:"\u30b0\u30e9\u30d5",permalink:"/study-docs/docs/Data-Structure/graph"},next:{title:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",permalink:"/study-docs/docs/Data-Structure/priority-queue"}},c={},p=[{value:"\u6728\u69cb\u9020\u3068\u306f",id:"\u6728\u69cb\u9020\u3068\u306f",level:2},{value:"\u7528\u8a9e",id:"\u7528\u8a9e",level:3},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0",level:3}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6728\u69cb\u9020\u3068\u306f"},"\u6728\u69cb\u9020\u3068\u306f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/Data-structure/graph"},"\u30b0\u30e9\u30d5\u69cb\u9020"),"\u306e\u4e2d\u3067\u3082\u7279\u306b",(0,a.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u9023\u7d50\u306a\u30b0\u30e9\u30d5"),"\u3092\u6728\u69cb\u9020\u3068\u547c\u3076\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044"),"\u3068\u306f\u3001\u3069\u3046\u3044\u3046\u3053\u3068\u3092\u6307\u3057\u3066\u3044\u308b\u304b\u3068\u3044\u3046\u3068"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u540c\u3058\u9802\u70b9\u3092\u901a\u3089\u305a\u306b\u59cb\u70b9\u3068\u7d42\u70b9\u304c\u540c\u3058\u306b\u306a\u308b\u3053\u3068\u306f\u306a\u3044")),(0,a.kt)("p",null,"\u3068\u3044\u3046\u3053\u3068\u3067\u3042\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(65311).Z,title:"\u9589\u8def",width:"686",height:"303"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u9023\u7d50\u3067\u3042\u308b"),"\u3068\u306f\u5168\u3066\u306e\u9802\u70b9\u304c\u7e4b\u304c\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u3044\u3046\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(8822).Z,title:"\u9023\u7d50",width:"686",height:"303"})),(0,a.kt)("p",null,"\u3064\u307e\u308a\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u9023\u7d50\u306a\u30b0\u30e9\u30d5"),"\u3068\u306f\u6b21\u306e\u3088\u3046\u306a\u72b6\u614b\u3067\u3042\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(4506).Z,title:"\u6728\u69cb\u9020",width:"241",height:"301"})),(0,a.kt)("p",null,"\u6728\u69cb\u9020\u306b\u306f\u5e73\u8861 2 \u5206\u63a2\u7d22\u6728\u30fbAVL \u6728\u30fb\u30c8\u30e9\u30a4\u6728\u30fb3 \u6587\u63a2\u7d22\u6728\u30fb\u8d64\u9ed2\u6728\u30fb\u30b9\u30ad\u30e5\u30fc\u6728\u30fb\u30b9\u30d7\u30ec\u30fc\u6728\u30fbB \uff0b\u6728\u30fb\u30d1\u30c8\u30ea\u30b7\u30a2\u6728\u306a\u3069\u304c\u5b58\u5728\u3059\u308b\u3002"),(0,a.kt)("h3",{id:"\u7528\u8a9e"},"\u7528\u8a9e"),(0,a.kt)("p",null,"\u958b\u59cb\u3068\u306a\u308b\u9802\u70b9(\u30ce\u30fc\u30c9)\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u6839"),"\u3068\u547c\u3073\u3001\u6839\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u8fba\u306e\u3053\u3068\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u679d"),"\u3068\u8a00\u3044\u3001\u6839\u3068\u679d\u3067\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u5b50\u30ce\u30fc\u30c9"),"\u3068\u547c\u3076\u3002\u307e\u305f\u3001\u6839\u304c\u5b58\u5728\u3059\u308b\u6728\u306e\u3053\u3068\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u6839\u4ed8\u304d\u6728"),"\u3068\u547c\u3076\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(26579).Z,title:"\u6839\u3068\u679d\u3068\u5b50",width:"306",height:"301"})),(0,a.kt)("p",null,"\u6839\u304b\u3089\u679d\u3092\u901a\u3063\u305f\u500b\u6570\u3092\u305d\u306e\u9802\u70b9\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"\u6df1\u3055"),"\u3068\u547c\u3073\u3001\u540c\u3058\u6839\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u3064\u540c\u3058\u6df1\u3055\u306e\u9802\u70b9\u540c\u58eb\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u5144\u5f1f\u30ce\u30fc\u30c9"),"\u3068\u547c\u3076\u3002\u679d\u3067\u63a5\u7d9a\u3057\u3066\u3044\u308b\u304b\u3064\u6df1\u3055\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3067\u3042\u308b\u9802\u70b9\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u89aa\u30ce\u30fc\u30c9"),"\u3068\u547c\u3076\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(71409).Z,title:"\u5144\u5f1f\u3068\u89aa\u3068\u6df1\u3055",width:"471",height:"302"})),(0,a.kt)("p",null,"\u6839\u4ed8\u304d\u6728\u306b\u304a\u3044\u3066\u6700\u5927\u306e\u6df1\u3055\u306b\u3042\u308b\u9802\u70b9\u306e\u3053\u3068\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u8449(\u30ea\u30fc\u30d5)"),"\u3068\u547c\u3073\u3001\u5b50\u30ce\u30fc\u30c9\u304c\u5b58\u5728\u3059\u308b\u30ce\u30fc\u30c9\u3092\u6839\u3068\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u3053\u306e\u898b\u65b9\u3092\u3057\u305f\u6839\u4ed8\u304d\u6728\u306e\u3053\u3068\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u90e8\u5206\u6728"),"\u3068\u547c\u3076\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(87470).Z,title:"\u30ea\u30fc\u30d5",width:"451",height:"316"})),(0,a.kt)("p",null,"\u6728\u69cb\u9020\u306e\u6761\u4ef6\u3067\u3042\u308b",(0,a.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u9023\u7d50\u306a\u30b0\u30e9\u30d5"),"\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"\u9023\u7d50\u306a"),"\u3092\u53d6\u308a\u9664\u3044\u305f",(0,a.kt)("inlineCode",{parentName:"p"},"\u9589\u8def\u3092\u6301\u305f\u306a\u3044\u30b0\u30e9\u30d5"),"\u306e\u3053\u3068\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u68ee"),"\u3068\u547c\u3076\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(92163).Z,title:"\u68ee",width:"633",height:"302"})),(0,a.kt)("h3",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,a.kt)("p",null,"\u30b0\u30e9\u30d5\u69cb\u9020\u306e\u7279\u5225\u306a\u6761\u4ef6\u304c\u6728\u69cb\u9020\u3068\u306a\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001\u30b0\u30e9\u30d5\u69cb\u9020\u3068\u5168\u304f\u4f5c\u6210\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u540c\u3058\u306b\u306a\u308b\u3002"),(0,a.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"box = [[1,5],[1,3],[1,4],[4,6],[6,2]]\ngraph = [[] for _ in range(6)]\nfor i in range(len(box)):\n    graph[box[i][0]-1].append(box[i][1]-1)\n    graph[box[i][1]-1].append(box[i][0]-1)\n"))),(0,a.kt)(i.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    vector<pair<int,int>> box = {{1,5},{1,3},{1,4},{4,6},{6,2}};\n    vector<vector<int>> graph(6);\n    for(int i = 0; i < box.size();++i){\n        graph[box[i].first-1].push_back(box[i].second-1);\n        graph[box[i].second-1].push_back(box[i].first-1);\n    }\n    return 0;\n}\n"))),(0,a.kt)(i.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static void Main(string[] args)\n{\n    int[,] box = new int[,] { { 1, 5 }, { 1, 3 }, { 1, 4 }, { 4, 6 }, { 6, 2 } };\n    List<List<int>> graph = new List<List<int>>();\n    for (int i = 0;i < 6; ++i)\n    {\n        graph.Add(new List<int>());\n    }\n    for (int i = 0; i < box.Length/2; ++i)\n    {\n        graph[box[i, 0] - 1].Add(box[i, 1] - 1);\n        graph[box[i, 1] - 1].Add(box[i, 0] - 1);\n    }\n}\n")))))}m.isMDXComponent=!0},65311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree-1.drawio-9a83ae9bcb593b4eb3fd83491aab0806.svg"},8822:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree-2.drawio-8f1ce997e9fb36818a179c59950023c5.svg"},4506:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree-3.drawio-e8603e3f932fc944c9dd0517ecd8d1f8.svg"},26579:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree-4.drawio-0b3118aa70aa9cc915491384dfec8302.svg"},71409:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree-5.drawio-1e56c41c11681474afe73d827a399f7d.svg"},87470:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree-6.drawio-215c1581b0d809970e58832dd7e35794.svg"},92163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree-7.drawio-523304d087d4527fc11cf39f7b01b8e6.svg"}}]);