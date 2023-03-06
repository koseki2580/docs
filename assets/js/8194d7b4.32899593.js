"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[7776],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>o});var l=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,l,a=function(n,e){if(null==n)return{};var t,l,a={},i=Object.keys(n);for(l=0;l<i.length;l++)t=i[l],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(l=0;l<i.length;l++)t=i[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=l.createContext({}),u=function(n){var e=l.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},s=function(n){var e=u(n.components);return l.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,c=n.parentName,s=d(n,["components","mdxType","originalType","parentName"]),m=u(t),o=a,b=m["".concat(c,".").concat(o)]||m[o]||p[o]||i;return t?l.createElement(b,r(r({ref:e},s),{},{components:t})):l.createElement(b,r({ref:e},s))}));function o(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=m;var d={};for(var c in e)hasOwnProperty.call(e,c)&&(d[c]=e[c]);d.originalType=n,d.mdxType="string"==typeof n?n:a,r[1]=d;for(var u=2;u<i;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(n,e,t)=>{t.d(e,{Z:()=>r});var l=t(7294),a=t(6010);const i="tabItem_Ymn6";function r(n){let{children:e,hidden:t,className:r}=n;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:t},e)}},4866:(n,e,t)=>{t.d(e,{Z:()=>f});var l=t(7462),a=t(7294),i=t(6010),r=t(2466),d=t(6550),c=t(1980),u=t(7392),s=t(12);function p(n){return function(n){return a.Children.map(n,(n=>{if((0,a.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(n).map((n=>{let{props:{value:e,label:t,attributes:l,default:a}}=n;return{value:e,label:t,attributes:l,default:a}}))}function m(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??p(t);return function(n){const e=(0,u.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function o(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function b(n){let{queryString:e=!1,groupId:t}=n;const l=(0,d.k6)(),i=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(l.location.search);e.set(i,n),l.replace({...l.location,search:e.toString()})}),[i,l])]}function I(n){const{defaultValue:e,queryString:t=!1,groupId:l}=n,i=m(n),[r,d]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!o({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=t.find((n=>n.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:i}))),[c,u]=b({queryString:t,groupId:l}),[p,I]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[l,i]=(0,s.Nk)(t);return[l,(0,a.useCallback)((n=>{t&&i.set(n)}),[t,i])]}({groupId:l}),y=(()=>{const n=c??p;return o({value:n,tabValues:i})?n:null})();(0,a.useLayoutEffect)((()=>{y&&d(y)}),[y]);return{selectedValue:r,selectValue:(0,a.useCallback)((n=>{if(!o({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);d(n),u(n),I(n)}),[u,I,i]),tabValues:i}}var y=t(2389);const Z="tabList__CuJ",g="tabItem_LNqP";function x(n){let{className:e,block:t,selectedValue:d,selectValue:c,tabValues:u}=n;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),m=n=>{const e=n.currentTarget,t=s.indexOf(e),l=u[t].value;l!==d&&(p(e),c(l))},o=n=>{var e;let t=null;switch(n.key){case"Enter":m(n);break;case"ArrowRight":{const e=s.indexOf(n.currentTarget)+1;t=s[e]??s[0];break}case"ArrowLeft":{const e=s.indexOf(n.currentTarget)-1;t=s[e]??s[s.length-1];break}}null==(e=t)||e.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e)},u.map((n=>{let{value:e,label:t,attributes:r}=n;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:d===e?0:-1,"aria-selected":d===e,key:e,ref:n=>s.push(n),onKeyDown:o,onClick:m},r,{className:(0,i.Z)("tabs__item",g,null==r?void 0:r.className,{"tabs__item--active":d===e})}),t??e)})))}function N(n){let{lazy:e,children:t,selectedValue:l}=n;if(t=Array.isArray(t)?t:[t],e){const n=t.find((n=>n.props.value===l));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==l}))))}function h(n){const e=I(n);return a.createElement("div",{className:(0,i.Z)("tabs-container",Z)},a.createElement(x,(0,l.Z)({},n,e)),a.createElement(N,(0,l.Z)({},n,e)))}function f(n){const e=(0,y.Z)();return a.createElement(h,(0,l.Z)({key:String(e)},n))}},6252:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var l=t(7462),a=(t(7294),t(3905)),i=t(4866),r=t(5162);const d={title:"Union-Find\u6728",sidebarlabel:"Union-Find\u6728",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},c=void 0,u={unversionedId:"Data-Structure/unionfind",id:"Data-Structure/unionfind",title:"Union-Find\u6728",description:"UnionFind \u6728\u3068\u306f",source:"@site/docs/01-Data-Structure/05-unionfind.md",sourceDirName:"01-Data-Structure",slug:"/Data-Structure/unionfind",permalink:"/study-docs/docs/Data-Structure/unionfind",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/01-Data-Structure/05-unionfind.md",tags:[{label:"\u30c7\u30fc\u30bf\u69cb\u9020",permalink:"/study-docs/docs/tags/\u30c7\u30fc\u30bf\u69cb\u9020"}],version:"current",sidebarPosition:5,frontMatter:{title:"Union-Find\u6728",sidebarlabel:"Union-Find\u6728",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},sidebar:"Data-StructureSidebar",previous:{title:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",permalink:"/study-docs/docs/Data-Structure/priority-queue"}},s={},p=[{value:"UnionFind \u6728\u3068\u306f",id:"unionfind-\u6728\u3068\u306f",level:2},{value:"UnionFind \u6728\u306e\u30af\u30e9\u30b9",id:"unionfind-\u6728\u306e\u30af\u30e9\u30b9",level:3},{value:"\u521d\u671f\u5316",id:"\u521d\u671f\u5316",level:3},{value:"find",id:"find",level:3},{value:"same",id:"same",level:3},{value:"union",id:"union",level:3},{value:"size",id:"size",level:3}],m={toc:p};function o(n){let{components:e,...d}=n;return(0,a.kt)("wrapper",(0,l.Z)({},m,d,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"unionfind-\u6728\u3068\u306f"},"UnionFind \u6728\u3068\u306f"),(0,a.kt)("p",null,"UnionFind \u6728\u306f\u30b0\u30eb\u30fc\u30d7\u5206\u3051\u3092\u6728\u69cb\u9020\u3067\u7ba1\u7406\u3059\u308b\u30c7\u30fc\u30bf\u69cb\u9020\u306e\u3053\u3068\u3092\u8a00\u3046\u3002\nUnionFind \u6728\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u6b21\u306e 2 \u70b9\u3092\u9ad8\u901f\u3067\u6c42\u3081\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8981\u7d20 a \u306e\u5024\u306e\u8981\u7d20\u3092\u53d6\u5f97\u3059\u308b(Find)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2 \u3064\u306e\u8981\u7d20\u304c\u540c\u3058\u30b0\u30eb\u30fc\u30d7\uff08\u6839\uff09\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d"))),(0,a.kt)("li",{parentName:"ul"},"\u8981\u7d20 a \u3068\u8981\u7d20 b \u306b\u5c5e\u3057\u3066\u3044\u308b\u8981\u7d20\u3092\u7d50\u5408(Union)")),(0,a.kt)("h3",{id:"unionfind-\u6728\u306e\u30af\u30e9\u30b9"},"UnionFind \u6728\u306e\u30af\u30e9\u30b9"),(0,a.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="union-find.py"',title:'"union-find.py"'},"class UnionFind:\n    def __init__(self,n):\n        self.n = n\n        self.par = [-1] * n\n\n    def find(self, x):\n        if self.par[x] < 0:\n            return x\n        # \u5ea7\u6a19\u5727\u7e2e\n        self.par[x] = self.find(self.par[x])\n        return self.par[x]\n\n    # \u540c\u3058\u30b0\u30eb\u30fc\u30d7\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\n    def same(self, x, y):\n        return self.find(x) == self.find(y)\n\n    # 2\u3064\u306e\u8981\u7d20\u304c\u5c5e\u3059\u308b\u30b0\u30eb\u30fc\u30d7\u3092\u7d50\u5408\n    def union(self,x,y):\n        x = self.find(x)\n        y = self.find(y)\n        # \u540c\u3058\u30b0\u30eb\u30fc\u30d7\u304b\n        if x == y:\n            return\n        # \u7d50\u5408\u3059\u308b\u969b\u306f\u8981\u7d20\u304c\u5c11\u306a\u3044\u3082\u306e\u3092\u591a\u3044\u3082\u306e\u306b\u5c5e\u3059\u308b\u3088\u3046\u306b\u3055\u305b\u308b\n        if self.par[x] > self.par[y]:\n            x,y = y,x\n        self.par[x] += self.par[y]\n        self.par[y] = x\n\n    # \u5c5e\u3057\u3066\u3044\u308b\u30b0\u30eb\u30fc\u30d7\u306e\u6570\n    def size(self, x):\n        return -self.par[self.find(x)]\n"))),(0,a.kt)(r.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="union-find.cpp"',title:'"union-find.cpp"'},"struct UnionFind{\n  vector<int> par;\n  UnionFind(int N) : par(N,-1){}\n  int find(int x){\n    if (par[x] < 0) return x;\n    return par[x] = find(par[x]);\n  }\n\n  bool same(int x, int y) {\n    return find(x) == find(y);\n  }\n\n  void unite(int x, int y){\n    x = find(x);\n    y = find(y);\n    if (x == y) return;\n    if (par[x] > par[y]) swap(x, y);\n    par[x] += par[y];\n    par[y] = x;\n  }\n\n  int size(int x) {\n    return -par[find(x)];\n  }\n};\n"))),(0,a.kt)(r.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="union-find.cs"',title:'"union-find.cs"'},"class UnionFind\n{\n    public List<int> par;\n    public UnionFind(int N)\n    {\n        par = new List<int>();\n        for (int i = 0; i < N; ++i) par.Add(-1);\n    }\n\n    public int Find(int x)\n    {\n        if (par[x] < 0) return x;\n        return par[x] = Find(par[x]);\n    }\n\n    public bool Same(int x, int y)\n    {\n        return Find(x) == Find(y);\n    }\n\n    public void Union(int x, int y)\n    {\n        x = Find(x);\n        y = Find(y);\n        if (x == y) return;\n        if (par[x] > par[y]) (x, y) = (y, x);\n        par[x] += par[y];\n        par[y] = x;\n    }\n\n    public int Size(int x)\n    {\n        return -par[Find(x)];\n    }\n}\n\n")))),(0,a.kt)("h3",{id:"\u521d\u671f\u5316"},"\u521d\u671f\u5316"),(0,a.kt)("p",null,"\u8981\u7d20 x \u304c\u5c5e\u3057\u3066\u308b\u6728\u69cb\u9020\u3092\u914d\u5217\u3067\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u30b0\u30eb\u30fc\u30d7\u3092\u914d\u5217\u3067\u7ba1\u7406\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u8981\u7d20\u6570(\u9802\u70b9\u6570)\u306e\u914d\u5217\u3092\u4f5c\u6210\u3057\u3001\u521d\u671f\u5024\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3068\u3057\u3001union \u3064\u307e\u308a\u7d50\u5408\u304c\u884c\u308f\u308c\u305f\u969b\u306b\u3001\u7d50\u5408\u5148\u306e\u8981\u7d20\u756a\u53f7\u3092\u8981\u7d20\u306b\u3082\u3064\u3053\u3068\u3067\u8981\u7d20 x \u306e\u6839\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"par[x] = 2"),"\u3060\u3068\u3059\u308b\u3068\u8981\u7d20 x \u306f\u8981\u7d20\u756a\u53f7 2 \u306e\u30b0\u30eb\u30fc\u30d7\u306b\u5c5e\u3057\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u3067\u521d\u671f\u5316\u3059\u308b\u306e\u306f\u6b21\u306e\u3088\u3046\u306a\u7406\u7531\u304c\u3042\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ca0\u306e\u6570\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u6839\u306e\u8981\u7d20\u304b\u3069\u3046\u304b\u3092",(0,a.kt)("inlineCode",{parentName:"li"},"< 0"),"\u3067\u5224\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u306e\u8981\u7d20\u306b\u30b0\u30eb\u30fc\u30d7\u306e\u500b\u6570\u3092\u7ba1\u7406\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\uff08\u30e9\u30f3\u30af\u306e\u8003\u3048\u65b9\u304c\u3067\u304d\u308b\uff09")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:t(4254).Z,title:"\u914d\u5217\u3068\u6728\u69cb\u9020\u306e\u95a2\u4fc2",width:"461",height:"221"})),(0,a.kt)("p",null,"\u56f3\u306e\u3088\u3046\u306a\u6728\u69cb\u9020\u3067 3 \u3064\u306e\u30b0\u30eb\u30fc\u30d7\u304c\u5b58\u5728\u3059\u308b\u3068\u304d\u3001\u914d\u5217\u304c\u56f3\u306e\u3088\u3046\u306b\u306a\u308b\u3002"),(0,a.kt)("h3",{id:"find"},"find"),(0,a.kt)("p",null,"find \u95a2\u6570\u3067\u306f\u5f15\u6570\u306b\u3068\u308b\u5024\u304c\u5c5e\u3057\u3066\u3044\u308b\u6839\u306e\u8981\u7d20\u756a\u53f7\u3092\u8fd4\u5374\u3059\u308b\u3002\n\u4e0a\u306e\u56f3\u3092\u4f8b\u306b\u3042\u3052\u308b\u3068\n",(0,a.kt)("inlineCode",{parentName:"p"},"find(1)"),"\u3067\u306f\u623b\u308a\u5024\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"find(4)"),"\u3067\u306f\u623b\u308a\u5024\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"4"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"find(5)"),"\u3067\u306f\u623b\u308a\u5024\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("p",null,"union(\u7d50\u5408)\u3059\u308b\u969b\u306b\u6b21\u306e\u56f3\u306e\u3088\u3046\u306b\u7d50\u5408\u3057\u3066\u3057\u307e\u3046\u3068\u9ad8\u901f\u3067\u5c5e\u3057\u3066\u3044\u308b\u30b0\u30eb\u30fc\u30d7\u306e\u6839\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u9ad8\u901f\u3067\u884c\u3048\u306a\u304f\u306a\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:t(8188).Z,title:"\u9ad8\u901f\u3067find\u3067\u304d\u306a\u3044\u4f8b",width:"271",height:"531"})),(0,a.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u7d50\u5408\u3057\u3066\u3057\u307e\u3046\u3068\u8981\u7d20 n \u306e\u6839\u306e\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f O(n)\u306e\u8a08\u7b97\u91cf\u304c\u639b\u304b\u3063\u3066\u3057\u307e\u3046\u3002\u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u51e6\u7406\u3068\u3057\u3066",(0,a.kt)("strong",{parentName:"p"},"\u7d4c\u8def\u5727\u7e2e"),"\u3068\u547c\u3070\u308c\u308b\u51e6\u7406\u304c\u3042\u308b\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u51e6\u7406\u306f\u3001\u6839\u3092\u63a2\u7d22\u3057\u305f\u969b\u306b\u7d4c\u8def\u3092\u6839\u306b\u63a5\u7d9a\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u7d4c\u8def\u3092\u5727\u7e2e\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u56f3\u306e \u2463 \u3067\u8981\u7d20\u756a\u53f7\u3092 4 \u306e\u6839\u3092\u691c\u7d22\u3059\u308b\u969b\u306b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"4 \u2192 3 \u2192 2 \u2192 1"),"\u3068\u9806\u306b\u8fbf\u3063\u3066\u6839\u306e\u8981\u7d20\u756a\u53f7\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308b\u3002\n\u3053\u306e\u8fbf\u308b\u51e6\u7406\u306e\u969b\u306b\u76f4\u63a5\u6839\u306e\u65b9\u3078\u7d4c\u8def\u3092\u63a5\u7d9a\u3059\u308b\u3002\u518d\u8d77\u7684\u306a\u51e6\u7406\u306b\u3059\u308b\u3053\u3068\u3067\u7c21\u5358\u306b\u5b9f\u88c5\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:t(3029).Z,title:"\u7d4c\u8def\u5727\u7e2e",width:"449",height:"1161"})),(0,a.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def find(self, x):\n    if self.par[x] < 0:\n        return x\n     # \u5ea7\u6a19\u5727\u7e2e\n    self.par[x] = self.find(self.par[x])\n    return self.par[x]\n"))),(0,a.kt)(r.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int find(int x){\n    if (par[x] < 0) return x;\n    return par[x] = find(par[x]);\n}\n"))),(0,a.kt)(r.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public int Find(int x)\n{\n    if (par[x] < 0) return x;\n    return par[x] = Find(par[x]);\n}\n")))),(0,a.kt)("h3",{id:"same"},"same"),(0,a.kt)("p",null,"same \u95a2\u6570\u306f 2 \u3064\u306e\u8981\u7d20\u304c\u540c\u3058\u30b0\u30eb\u30fc\u30d7\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u3092\u5224\u5b9a\u3059\u308b\u95a2\u6570\u3067\u3042\u308b\u3002\n\u3053\u308c\u306f find \u95a2\u6570\u3092\u7528\u3044\u308b\u3053\u3068\u3067\u7c21\u5358\u306b\u6c42\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u540c\u3058\u30b0\u30eb\u30fc\u30d7\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\ndef same(self, x, y):\n    return self.find(x) == self.find(y)\n"))),(0,a.kt)(r.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool same(int x, int y) {\n    return find(x) == find(y);\n}\n"))),(0,a.kt)(r.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public bool Same(int x, int y)\n{\n    return Find(x) == Find(y);\n}\n")))),(0,a.kt)("h3",{id:"union"},"union"),(0,a.kt)("p",null,"union \u95a2\u6570\u306f\u5f15\u6570\u306b\u3068\u308b 2 \u3064\u306e\u8981\u7d20\u304c\u305d\u308c\u305e\u308c\u5c5e\u3057\u3066\u3044\u308b\u30b0\u30eb\u30fc\u30d7\u3092\u7d50\u5408\u3059\u308b\u51e6\u7406\u3067\u3042\u308b\u3002\n\u7d50\u5408\u3059\u308b\u969b\u306f\u30b0\u30eb\u30fc\u30d7\u306e\u6570\u304c\u5c11\u306a\u3044\u65b9\u3092\u591a\u3044\u65b9\u306b\u7d50\u5408\u3059\u308b\u3053\u3068\u3067\u51e6\u7406\u91cf\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002"),(0,a.kt)("p",null,"\u30a4\u30e1\u30fc\u30b8\u56f3\u306f\u4ee5\u4e0b\u3067\u3042\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:t(1693).Z,title:"\u30e6\u30cb\u30aa\u30f3",width:"434",height:"366"})),(0,a.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# 2\u3064\u306e\u8981\u7d20\u304c\u5c5e\u3059\u308b\u30b0\u30eb\u30fc\u30d7\u3092\u7d50\u5408\ndef union(self,x,y):\n    x = self.find(x)\n    y = self.find(y)\n    # \u540c\u3058\u30b0\u30eb\u30fc\u30d7\u304b\n    if x == y:\n        return\n    # \u7d50\u5408\u3059\u308b\u969b\u306f\u8981\u7d20\u304c\u5c11\u306a\u3044\u3082\u306e\u3092\u591a\u3044\u3082\u306e\u306b\u5c5e\u3059\u308b\u3088\u3046\u306b\u3055\u305b\u308b\n    if self.par[x] > self.par[y]:\n        x,y = y,x\n    self.par[x] += self.par[y]\n    self.par[y] = x\n"))),(0,a.kt)(r.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void unite(int x, int y){\n    x = find(x);\n    y = find(y);\n    if (x == y) return;\n    if (par[x] > par[y]) swap(x, y);\n    par[x] += par[y];\n    par[y] = x;\n}\n"))),(0,a.kt)(r.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public void Union(int x, int y)\n{\n    x = Find(x);\n    y = Find(y);\n    if (x == y) return;\n    if (par[x] > par[y]) (x, y) = (y, x);\n    par[x] += par[y];\n    par[y] = x;\n}\n")))),(0,a.kt)("h3",{id:"size"},"size"),(0,a.kt)("p",null,"size \u95a2\u6570\u306f\u5f15\u6570\u306b\u3068\u308b\u756a\u53f7\u304c\u6240\u5c5e\u3059\u308b\u30b0\u30eb\u30fc\u30d7\u306e\u500b\u6570\u3092\u51fa\u529b\u3059\u308b\u95a2\u6570\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u540c\u3058\u30b0\u30eb\u30fc\u30d7\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\ndef same(self, x, y):\n    return self.find(x) == self.find(y)\n"))),(0,a.kt)(r.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool same(int x, int y) {\n    return find(x) == find(y);\n}\n"))),(0,a.kt)(r.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public bool Same(int x, int y)\n{\n    return Find(x) == Find(y);\n}\n")))))}o.isMDXComponent=!0},4254:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/union-1.drawio-c09da70af9c6d64bd657abbf317cadf0.svg"},8188:(n,e,t)=>{t.d(e,{Z:()=>l});const l="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNzFweCIgaGVpZ2h0PSI1MzFweCIgdmlld0JveD0iLTAuNSAtMC41IDI3MSA1MzEiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthNWMwZmNmNy1mNmMwLTRlN2EtOTgxNy1jMDM5NDNhZTYzNDkmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0wNS0xMFQxMTowNTo1Ni4yNDBaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDExXzZfMCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ29kZS8xLjU4LjAgQ2hyb21lLzg5LjAuNDM4OS4xMjggRWxlY3Ryb24vMTIuMC4xMyBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7UV9EZ3pqRExHY2I0Tm9MZ3ZYbGkmcXVvdDsgdmVyc2lvbj0mcXVvdDsxMi4yLjQmcXVvdDsgcGFnZXM9JnF1b3Q7MSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtvWjU0WTRyR29iVXYwYTRUcWMtTyZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDszWmpManBzd0ZJYWZobVVqOEkydzdHU20wMDJsU2xtMHM3VEFFeXdCam93VFNKKytKdGdCNDBSSzJqU2lzNHJQc1k4dm4zOGZPd1J3VmJhdmttN3pieUpqUlFEQ3JBM2djd0JBRkdLb2Z6clBvZmRnWkJ3YnlUUFRhSENzK1M5bUk0MTN4ek5XT3cyVkVJWGlXOWVaaXFwaXFYSjhWRXJSdU0zZVJlR091cVViNWpuV0tTMTg3dytlcWJ6M0xrRTgrTDh5dnNudHlCRkorcHFTMnNabUpYVk9NOUdNWFBBbGdDc3BoT3BMWmJ0aVJRZlBjdW5qdmx5b1BVMU1za3BkRTRENmdEMHRkdTdhYW5Xd3E5VVJHcXcybnBxY0s3YmUwclNyYWZUZWFsK3V5a0pia1M3U2V0dlRmdWN0MHdNOCtiTXh2ZStaVkt3ZHVjenNYcGtvbVpJSDNjVFdMZzBwSXhXQWpkME00SzBySHpHM1BtcTJlblBxZWFDaEN3YkllVGpFZ3dQbUJlY2tJd01Ib3NmQmlTS1BEcHdaSGVMU1FRZzlqZzd3NktCNTBZR2hTd2ZEQjlMeDA0NFBwOG8rZDZsYVc1V29Pa2dacmZOdTlVY2tJem9YWWJETVNlTStpaXVYS2xsQkZkKzdDZkxjK3MwSTN3WFhNeGxJeDJDQkhkYkVzcmFkMUdJblUyYml4dWw2MmhXS0oxM2g1YVFyUmVXR0thK3I0NWFjbG43ZEx2bjVyL28wcytzQlRzNDRlV1FHakgwKzg2S0RKbWM4aGcra3M3enBqS2NGcld1ZXVreFl5OVhQVWZsdFZIN3UxaGhhNDJDTlNrK3pDd24xT1RIbTI3aHVDRHRhTnU0aTdQNWtPaG04UDJIT0UyRW1tU2FLSnplZWZYZmVtbWVtRHdzVVRUcTZZNVpKUHB4T2lLK1RhRjVYRW9CZ1FlS1lrQVNEaEJCOVF6bmJEY05KOVIrcUNMdDNGWnptbGZ1cHlPcjFBNm5JU3NhUkVaaVhqT0t6T3JIYm5keEhSWW1ySW9ULzJZc0grUDlwL25zVm5VdEc4YXhVaEhDNGlDNnFpRVRrWE8ydEtrTCtJNXhBNi9sckpXbHorR2JUTngrK2ZNR1gzdz09Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxlbGxpcHNlIGN4PSIyNSIgY3k9IjI1IiByeD0iMjUiIHJ5PSIyNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyRXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS41LDE4LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjE8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxlbGxpcHNlIGN4PSI2NSIgY3k9IjExNSIgcng9IjI1IiByeT0iMjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjEuNSwxMDguNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlckV2ZW50cz0iYWxsIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PGVsbGlwc2UgY3g9IjEwNSIgY3k9IjIxOSIgcng9IjI1IiByeT0iMjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxLjUsMjEyLjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjM8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxlbGxpcHNlIGN4PSIxNDUiIGN5PSIzMDkiIHJ4PSIyNSIgcnk9IjI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MS41LDMwMi41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij40PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cGF0aCBkPSJNIDE5Mi41IDM4NCBMIDE2Ny41IDMzNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgc3Ryb2tlRGFzaGFycmF5PSIzIDMiIHBvaW50ZXJFdmVudHM9InN0cm9rZSIvPjxlbGxpcHNlIGN4PSIyMDUiIGN5PSI0MTUiIHJ4PSIyNSIgcnk9IjI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5NS41LDQwOC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyRXZlbnRzPSJhbGwiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMThweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPm4tMTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PGVsbGlwc2UgY3g9IjI0NSIgY3k9IjUwNSIgcng9IjI1IiByeT0iMjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQxLjUsNDk4LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXJFdmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPm48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxwYXRoIGQ9Ik0gNDIuNjggNDIuNjggTCA2Mi4yOCA4NC4yNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSA2NC41MiA4OC45OSBMIDU4LjM3IDg0LjE1IEwgNjIuMjggODQuMjQgTCA2NC43IDgxLjE2IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlTWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXJFdmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gODIuNjggMTMyLjY4IEwgMTAyLjgyIDE4OC4wMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxMDQuNjIgMTkyLjk1IEwgOTguOTMgMTg3LjU3IEwgMTAyLjgyIDE4OC4wMiBMIDEwNS41MSAxODUuMTcgWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxMjIuNjggMjM2LjY4IEwgMTQyLjI4IDI3OC4yNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxNDQuNTIgMjgyLjk5IEwgMTM4LjM3IDI3OC4xNSBMIDE0Mi4yOCAyNzguMjQgTCAxNDQuNyAyNzUuMTYgWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAyMjIuNjggNDMyLjY4IEwgMjQyLjI4IDQ3NC4yNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAyNDQuNTIgNDc4Ljk5IEwgMjM4LjM3IDQ3NC4xNSBMIDI0Mi4yOCA0NzQuMjQgTCAyNDQuNyA0NzEuMTYgWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2VNaXRlcmxpbWl0PSIxMCIgcG9pbnRlckV2ZW50cz0iYWxsIi8+PC9nPjwvc3ZnPg=="},3029:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/union-3.drawio-7099cd4a4d5baa0d3f818dcb179ffd39.svg"},1693:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/union-4.drawio-1ca6fe792480d4aa7adbc650ebf01052.svg"}}]);