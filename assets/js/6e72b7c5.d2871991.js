"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[6874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:m,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,r.useState)(v),q=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const Z=e=>{const t=e.currentTarget,n=q.indexOf(t),a=g[n].value;a!==w&&(x(t),C(a),null!=h&&N(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=q.indexOf(e.currentTarget)+1;n=q[t]??q[0];break}case"ArrowLeft":{const t=q.indexOf(e.currentTarget)-1;n=q[t]??q[q.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>q.push(e),onKeyDown:O,onClick:Z},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={title:"\u5e45\u512a\u5148\u63a2\u7d22",sidebar_label:"\u5e45\u512a\u5148\u63a2\u7d22",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},s=void 0,p={unversionedId:"Algorithm/breadth-first-search",id:"Algorithm/breadth-first-search",title:"\u5e45\u512a\u5148\u63a2\u7d22",description:"\u5e45\u512a\u5148\u63a2\u7d22\u3068\u306f",source:"@site/docs/00-Algorithm/01-breadth-first-search.mdx",sourceDirName:"00-Algorithm",slug:"/Algorithm/breadth-first-search",permalink:"/study-docs/docs/Algorithm/breadth-first-search",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/00-Algorithm/01-breadth-first-search.mdx",tags:[{label:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",permalink:"/study-docs/docs/tags/\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1659353735,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:1,frontMatter:{title:"\u5e45\u512a\u5148\u63a2\u7d22",sidebar_label:"\u5e45\u512a\u5148\u63a2\u7d22",draft:!1,toc_max_heading_level:4,tags:["\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"]},sidebar:"AlgorithmSidebar",previous:{title:"2\u5206\u63a2\u7d22",permalink:"/study-docs/docs/Algorithm/binary-search"},next:{title:"\u6df1\u3055\u512a\u5148\u63a2\u7d22",permalink:"/study-docs/docs/Algorithm/depth-first-search"}},d={},u=[{value:"\u5e45\u512a\u5148\u63a2\u7d22\u3068\u306f",id:"\u5e45\u512a\u5148\u63a2\u7d22\u3068\u306f",level:2},{value:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0",level:2},{value:"\u6d41\u308c",id:"\u6d41\u308c",level:3},{value:"\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u69cb\u9020",id:"\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u69cb\u9020",level:3},{value:"\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u30d7\u30ed\u30b0\u30e9\u30e0",level:3}],c={toc:u};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5e45\u512a\u5148\u63a2\u7d22\u3068\u306f"},"\u5e45\u512a\u5148\u63a2\u7d22\u3068\u306f"),(0,r.kt)("p",null,"\u5e45\u512a\u5148\u63a2\u7d22(BFS : Breadth First Search)\u3068\u306f",(0,r.kt)("a",{parentName:"p",href:"/docs/Data-structure/graph"},"\u30b0\u30e9\u30d5"),"\u3084",(0,r.kt)("a",{parentName:"p",href:"/docs/Data-structure/tree"},"\u6728\u69cb\u9020"),"\u3092\u63a2\u7d22\u3059\u308b\u305f\u3081\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u3042\u308a\u3001\u63a2\u7d22\u3092\u958b\u59cb\u3059\u308b\u4f4d\u7f6e\u304b\u3089\u8fd1\u3044\u3082\u306e\u304b\u3089\u63a2\u7d22\u3057\u3066\u3044\u304f\u63a2\u7d22\u624b\u6cd5\u3002"),(0,r.kt)("h2",{id:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"},"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0"),(0,r.kt)("h3",{id:"\u6d41\u308c"},"\u6d41\u308c"),(0,r.kt)("p",null,"\u6b21\u306e\u56f3\u306e\u3088\u3046\u306a\u6728\u69cb\u9020\u304c\u3042\u3063\u305f\u3068\u3059\u308b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(3237).Z,title:"\u6700\u521d\u306e\u6728\u69cb\u9020",width:"555",height:"201"})),(0,r.kt)("p",null,"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u3092\u59cb\u70b9\u3068\u3057\u3066\u3001\u5e45\u512a\u5148\u63a2\u7d22\u3092\u884c\u3046\u3068\u6b21\u306e\u3088\u3046\u306a\u6d41\u308c\u306b\u306a\u308b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u59cb\u70b9\u306f\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(1350).Z,title:"\u624b\u98061\u5f8c\u306e\u6728\u69cb\u9020",width:"555",height:"201"})),(0,r.kt)("p",null,"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"2,4"),"\u3092\u6b21\u306e\u63a2\u7d22\u70b9\u306b\u8ffd\u52a0\u3059\u308b\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(2030).Z,title:"\u624b\u98062\u5f8c\u306e\u6728\u69cb\u9020",width:"555",height:"201"}),"\n\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"\u3092\u6b21\u306e\u63a2\u7d22\u70b9\u306b\u8ffd\u52a0\u3059\u308b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"4"),"\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(6547).Z,title:"\u624b\u98063\u5f8c\u306e\u6728\u69cb\u9020",width:"555",height:"201"}),"\n\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"4"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"7,6"),"\u3092\u6b21\u306e\u63a2\u7d22\u70b9\u306b\u8ffd\u52a0\u3059\u308b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(4678).Z,title:"\u624b\u98064\u5f8c\u306e\u6728\u69cb\u9020",width:"555",height:"201"}),"\n\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\u3092\u6b21\u306e\u63a2\u7d22\u70b9\u306b\u8ffd\u52a0\u3059\u308b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"7"),"\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(8736).Z,title:"\u624b\u98065\u5f8c\u306e\u6728\u69cb\u9020",width:"555",height:"201"}),"\n\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"7"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9\u306f\u5b58\u5728\u3057\u306a\u3044\u306e\u3067\u4f55\u3082\u8ffd\u52a0\u3057\u306a\u3044")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"6"),"\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(7890).Z,title:"\u624b\u98066\u5f8c\u306e\u6728\u69cb\u9020",width:"555",height:"201"}),"\n\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"6"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"8"),"\u3092\u6b21\u306e\u63a2\u7d22\u70b9\u306b\u8ffd\u52a0\u3059\u308b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(5902).Z,title:"\u624b\u98067\u5f8c\u306e\u6728\u69cb\u9020",width:"555",height:"201"}),"\n\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9\u306f\u5b58\u5728\u3057\u306a\u3044\u306e\u3067\u4f55\u3082\u8ffd\u52a0\u3057\u306a\u3044")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"8"),"\u63a2\u7d22\u6e08\u307f\u3068\u3057\u3066\u8a18\u9332\u3059\u308b\u3002\n",(0,r.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(517).Z,title:"\u624b\u98068\u5f8c\u306e\u6728\u69cb\u9020",width:"671",height:"201"}),"\n\u9802\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"8"),"\u3068\u7e4b\u304c\u3063\u3066\u3044\u308b\u9802\u70b9\u306f\u5b58\u5728\u3057\u306a\u3044\u306e\u3067\u4f55\u3082\u8ffd\u52a0\u3057\u306a\u3044"))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u69cb\u9020"},"\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf\u69cb\u9020"),(0,r.kt)("p",null,"\u6d41\u308c\u306e\u6b21\u306e\u63a2\u7d22\u70b9\u306e\u914d\u5217\u306e\u9806\u756a\u3092\u898b\u308b\u3068\u914d\u5217\u306e\u4e00\u756a\u5de6\u7aef\u3001\u8981\u7d20\u756a\u53f7",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u306e\u8981\u7d20\u304c\u9806\u306b\u53d6\u308a\u51fa\u3055\u308c\u3001\u65b0\u305f\u306b\u8981\u7d20\u3092\u8ffd\u52a0\u3059\u308b\u969b\u306b\u306f\u4e00\u756a\u53f3\u5074\u3001\u8981\u7d20\u756a\u53f7\u306e\u4e00\u756a\u5f8c\u308d\u306b\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u3002"),(0,r.kt)("p",null,"\u3064\u307e\u308a\u3001FIFO \u306e\u52d5\u4f5c\u304c\u884c\u308f\u308c\u3066\u3044\u308b\u3002\u3053\u306e FIFO \u3092\u8868\u3059\u306e\u306b\u9069\u3057\u305f\u30c7\u30fc\u30bf\u69cb\u9020\u304c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/Data-structure/queue"},"Queue")),"\u3067\u3042\u308b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b21\u306e\u63a2\u7d22\u70b9\u306e\u914d\u5217\u304b\u3089\u4e00\u756a\u524d\u306e\u8981\u7d20\u3092\u53d6\u308a\u51fa\u3057\u3001\u63a2\u7d22\u3092\u884c\u3046"),(0,r.kt)("li",{parentName:"ul"},"\u63a2\u7d22\u3057\u305f\u969b\u306b\u65b0\u305f\u306a\u672a\u63a2\u7d22\u8981\u7d20\u304c\u898b\u3064\u304b\u3063\u305f\u3089\u3001\u6b21\u306e\u63a2\u7d22\u70b9\u306e\u914d\u5217\u306e\u5f8c\u308d\u306b\u8981\u7d20\u306e\u8ffd\u52a0\u3059\u308b")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u306e 2 \u3064\u306e\u51e6\u7406\u3092\u884c\u3048\u308c\u3070\u5e45\u512a\u5148\u63a2\u7d22\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001\u305d\u308c\u305e\u308c Queue \u3092\u7528\u3044\u308b\u3068"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b21\u306e\u63a2\u7d22\u70b9\u306e\u914d\u5217\u304b\u3089\u4e00\u756a\u524d\u306e\u8981\u7d20\u3092",(0,r.kt)("inlineCode",{parentName:"li"},"dequeue"),"\u3057\uff08\u53d6\u308a\u51fa\u3057\uff09\u3001\u63a2\u7d22\u3092\u884c\u3046"),(0,r.kt)("li",{parentName:"ul"},"\u63a2\u7d22\u3057\u305f\u969b\u306b\u65b0\u305f\u306a\u672a\u63a2\u7d22\u8981\u7d20\u304c\u898b\u3064\u304b\u3063\u305f\u3089\u3001\u6b21\u306e\u63a2\u7d22\u70b9\u306e\u914d\u5217\u306e\u5f8c\u308d\u306b",(0,r.kt)("inlineCode",{parentName:"li"},"enqueue"),"\uff08\u8981\u7d20\u306e\u8ffd\u52a0\uff09\u3059\u308b")),(0,r.kt)("p",null,"\u3068\u8a00\u3048\u308b\u306e\u3067 Queue \u3092\u7528\u3044\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3002"),(0,r.kt)("h3",{id:"\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,r.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="breadth-first-search.py"',title:'"breadth-first-search.py"'},"from collections import deque\nbox = [[1,2],[1,4],[2,3],[3,5],[4,7],[4,6],[6,8]]\ngraph = [[] for _ in range(8)]\n\n# \u6709\u5411\u30b0\u30e9\u30d5\u3092\u4f5c\u6210\nfor i in range(len(box)):\n    graph[box[i][0]-1].append(box[i][1]-1)\n\n# queue\u3092\u4f5c\u6210\nq = deque()\n\n# \u9802\u70b91\u756a\u3092\u8ffd\u52a0\nq.append(0)\n\n# \u9802\u70b91\u304b\u3089\u306e\u8ddd\u96e2\u3092\u8a18\u9332\u3059\u308b\u914d\u5217\ndist = [-1] * 8\ndist[0] = 0\nwhile (len(q) > 0):\n\n    # dequeue\n    pos = q.popleft()\n    for to in graph[pos]:\n\n        # \u672a\u63a2\u7d22\u30c1\u30a7\u30c3\u30af\n        if dist[to] == -1:\n            dist[to] = dist[pos] + 1\n\n            # enqueue\n            q.append(to)\n\n\n"))),(0,r.kt)(l.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="breadth-first-search.cpp"',title:'"breadth-first-search.cpp"'},"int main() {\n    vector<pair<int,int>> box = {{1,2},{1,4},{2,3},{3,5},{4,7},{4,6},{6,8}};\n    vector<vector<int>> graph(8);\n    // \u6709\u5411\u30b0\u30e9\u30d5\u3092\u4f5c\u6210\n    for(int i = 0; i < box.size();++i){\n        graph[box[i].first-1].push_back(box[i].second-1);\n    }\n\n    // queue\u3092\u4f5c\u6210\n    queue<int> q;\n\n    // \u9802\u70b91\u756a\u3092\u8ffd\u52a0\n    q.push(0);\n\n    // \u9802\u70b91\u304b\u3089\u306e\u8ddd\u96e2\u3092\u8a18\u9332\u3059\u308b\u914d\u5217\n    vector<int> dist(8,-1);\n    dist[0] = 0;\n\n    while (!q.empty())\n    {\n        // dequeue\n        int pos = q.front();q.pop();\n        for (auto to: graph[pos]){\n            if (dist[to] == -1){\n                dist[to] = dist[pos] + 1;\n\n                // enqueue\n                q.push(to);\n            }\n        }\n    }\n\n    return 0;\n}\n"))),(0,r.kt)(l.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="breadth-first-search.cs"',title:'"breadth-first-search.cs"'},"public static void Main(string[] args)\n{\n    int[,] box = new int[,] { { 1, 2 }, { 1, 4 }, { 2, 3 }, { 3, 5 }, { 4, 7 }, { 4, 6 }, { 6, 8 } };\n    List<List<int>> graph = new List<List<int>>();\n    for (int i = 0;i < 8; ++i)\n    {\n        graph.Add(new List<int>());\n    }\n\n    for (int i = 0; i < box.Length/2; ++i)\n    {\n        graph[box[i, 0] - 1].Add(box[i, 1] - 1);\n    }\n\n    // queue\u3092\u4f5c\u6210\n    Queue<int> q = new Queue<int>();\n\n    // \u9802\u70b91\u756a\u3092\u8ffd\u52a0\n    q.Enqueue(0);\n\n    // \u9802\u70b91\u304b\u3089\u306e\u8ddd\u96e2\u3092\u8a18\u9332\u3059\u308b\u914d\u5217\n    int[] dist = new int[8];\n    for (int i = 0; i < dist.Length; ++i) dist[i] = -1;\n    dist[0] = 0;\n\n    while (q.Count > 0)\n    {\n        // dequeue\n        int pos = q.Dequeue();\n        foreach (int to in graph[pos])\n        {\n            if (dist[to] == -1)\n            {\n                dist[to] = dist[pos] + 1;\n\n                // enqueue\n                q.Enqueue(to);\n            }\n        }\n    }\n}\n")))))}m.isMDXComponent=!0},3237:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-1.drawio-b98610c77089e13e8e3cc9f5ab730cd8.svg"},1350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-2.drawio-a8bb31661d160a954827406036688756.svg"},2030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-3.drawio-afc7d4f7dadc16944e6e8b29f8956df7.svg"},6547:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-4.drawio-439c5ffdfa59c3233415efd5b54df821.svg"},4678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-5.drawio-298bfe229e283cfdc0f0c19f31d007ea.svg"},8736:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-6.drawio-a989c47f4b482952481667ff4fc05ec3.svg"},7890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-7.drawio-8c4f8bfecfd58c5a17cbd8ed50356557.svg"},5902:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-8.drawio-9711b6226212a170255ea5665a80dd5a.svg"},517:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/breadth-9.drawio-8cb385ba12a6f383fee67177188c7d27.svg"}}]);