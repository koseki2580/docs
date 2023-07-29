"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[7638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||u;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,i=new Array(u);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<u;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const u="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),u=n(86010),i=n(12466),o=n(16550),l=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),u=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(r.location.search);t.set(u,e),r.replace({...r.location,search:t.toString()})}),[u,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,u=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:u}))),[l,s]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,u]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&u.set(e)}),[n,u])]}({groupId:r}),h=(()=>{const e=l??p;return m({value:e,tabValues:u})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,u]),tabValues:u}}var h=n(72389);const y="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),l(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,u.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=f(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",y)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},33311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),u=n(74866),i=n(85162);const o={title:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",sidebar_label:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},l=void 0,s={unversionedId:"Data-Structure/priority-queue",id:"Data-Structure/priority-queue",title:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",description:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\u3068\u306f",source:"@site/docs/01-Data-Structure/04-priority-queue.md",sourceDirName:"01-Data-Structure",slug:"/Data-Structure/priority-queue",permalink:"/study-docs/docs/Data-Structure/priority-queue",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/01-Data-Structure/04-priority-queue.md",tags:[{label:"\u30c7\u30fc\u30bf\u69cb\u9020",permalink:"/study-docs/docs/tags/\u30c7\u30fc\u30bf\u69cb\u9020"}],version:"current",sidebarPosition:4,frontMatter:{title:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",sidebar_label:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",draft:!1,toc_max_heading_level:4,tags:["\u30c7\u30fc\u30bf\u69cb\u9020"]},sidebar:"Data-StructureSidebar",previous:{title:"\u6728\u69cb\u9020",permalink:"/study-docs/docs/Data-Structure/tree"},next:{title:"Union-Find\u6728",permalink:"/study-docs/docs/Data-Structure/unionfind"}},c={},p=[{value:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\u3068\u306f",id:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\u3068\u306f",level:2},{value:"\u30d2\u30fc\u30d7",id:"\u30d2\u30fc\u30d7",level:3},{value:"\u30b3\u30fc\u30c9",id:"\u30b3\u30fc\u30c9",level:4}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\u3068\u306f"},"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\u3068\u306f"),(0,a.kt)("p",null,"\u8981\u7d20\u3092\u53d6\u308a\u51fa\u3059\u969b\u306b\u5165\u308c\u305f\u9806\u3067\u306f\u306a\u304f\u3001\u4f55\u3089\u304b\u306e\u53d6\u308a\u51fa\u3057\u9806(\u512a\u5148\u5ea6)\u3092\u5b9a\u3081\u3066\u53d6\u308a\u51fa\u3057\u3066\u3044\u304f\u30c7\u30fc\u30bf\u69cb\u9020\u306e\u3053\u3068\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc"),"\u3068\u3044\u3046\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(15762).Z,title:"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc",width:"711",height:"351"})),(0,a.kt)("p",null,"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\u306f\u69d8\u3005\u306a\u30c7\u30fc\u30bf\u69cb\u9020(\u6728\u69cb\u9020\u30fb\u914d\u5217)\u3092\u7528\u3044\u3066\u5b9f\u88c5\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3042\u308b\u3002"),(0,a.kt)("h3",{id:"\u30d2\u30fc\u30d7"},"\u30d2\u30fc\u30d7"),(0,a.kt)("p",null,"\u512a\u5148\u5ea6\u4ed8\u304d\u30ad\u30e5\u30fc\u306e\u5b9f\u88c5\u306e 1 \u3064\u3067\u5b50\u8981\u7d20\u306f\u89aa\u8981\u7d20\u3088\u308a\u5e38\u306b\u5927\u304d\u3044(\u5c0f\u3055\u3044)\u304b\u7b49\u3057\u3044\u3068\u3044\u3046\u5236\u7d04\u3092\u6301\u3064 2 \u5206\u6728\u69cb\u9020\u306e\u4e8b\u3092",(0,a.kt)("inlineCode",{parentName:"p"},"\u30d2\u30fc\u30d7"),"\u3068\u3044\u3046\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:n(54475).Z,title:"\u30d2\u30fc\u30d7",width:"711",height:"251"})),(0,a.kt)("p",null,"\u56f3\u306e\u3088\u3046\u306b\u5b50\u306f\u5fc5\u305a\u81ea\u5206\u3088\u308a\u5927\u304d\u3044\u304b\u5c0f\u3055\u304f\u306a\u3063\u3066\u3044\u308b\u3002"),(0,a.kt)("h4",{id:"\u30b3\u30fc\u30c9"},"\u30b3\u30fc\u30c9"),(0,a.kt)(u.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="heap.py"',title:'"heap.py"'},"import heapq\n\nbox = [3, 19, 7, 16, 18, 2, 11, 4, 5]\n\n# \u30d2\u30fc\u30d7\u306e\u4e26\u3073\u306b\u5909\u63db \u2192 2 4 3 5 18 7 11 16 19\nheapq.heapify(box)\n\n# \u8981\u7d20\u306e\u53d6\u308a\u51fa\u3057 \u2192 2\nb = heapq.heappop(box)\n\n# \u8981\u7d20\u3092\u8ffd\u52a0 \u2192\u30003 4 7 5 18 19 11 16 10\nheapq.heappush(box, 10)\n\n# \u8981\u7d20\u3092\u8ffd\u52a0 \u2192 1 3 7 5 4 19 11 16 10 18\nheapq.heappush(box, 1)\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Python \u3060\u3068\u5c0f\u3055\u3044\u9806\u306b\u4e26\u3073\u3001\u5927\u304d\u3044\u9806\u306b\u4e26\u3079\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u3002\u305d\u306e\u305f\u3081\u3001\u5168\u3066\u306e\u5024\u306b-1 \u3092\u639b\u3051\u308b\u3053\u3068\u3001\u3064\u307e\u308a\u5927\u5c0f\u3092\u53cd\u8ee2\u3055\u305b\u308b\u3053\u3068\u3067\u5927\u304d\u3044\u9806\u304b\u3089\u5024\u3092\u53d6\u308a\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"))),(0,a.kt)(i.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="heap.cpp"',title:'"heap.cpp"'},"int main()\n{\n    vector<int> temp = {3, 19, 7, 16, 18, 2, 11, 4, 5};\n    priority_queue<int> box;\n\n    // \u8981\u7d20\u3092\u633f\u5165 \u2192 19 18 16 11 7 5 4 3 2\n    for(auto x: temp) box.push(x);\n\n    // \u8981\u7d20\u306e\u53d6\u308a\u51fa\u3057 \u2192 19\n    int b = box.top();box.pop();\n\n    // \u8981\u7d20\u3092\u633f\u5165 \u2192 18 16 11 10 7 5 4 3 2\n    box.push(10);\n\n    // \u8981\u7d20\u3092\u633f\u5165 \u2192 18 16 11 10 7 5 4 3 2 1\n    box.push(1);\n    return 0;\n}\n\n"))),(0,a.kt)(i.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="heap.cs"',title:'"heap.cs"'},"class MainClass\n{\n  public static void Main(string[] args)\n  {\n      Heap box = new Heap(50);\n      List<int> temp = new List<int>() { 3, 19, 7, 16, 18, 2, 11, 4, 5 };\n\n      // \u8981\u7d20\u3092\u633f\u5165 \u2192 2 4 3 5 18 7 11 19 16\n      for (int i = 0; i < temp.Count; ++i)\n      {\n          box.push(temp[i]);\n      }\n\n      // \u8981\u7d20\u306e\u53d6\u308a\u51fa\u3057 \u2192 2\n      int b = box.pop();\n\n      // \u8981\u7d20\u3092\u633f\u5165 \u2192 3 4 7 5 18 16 11 19 10\n      box.push(10);\n\n\n      // \u8981\u7d20\u3092\u633f\u5165 \u2192 1 3 7 5 4 16 11 19 10 18\n      box.push(1);\n  }\n}\nclass Heap\n{\n  private int[] heap;\n  public int size { get; private set; }\n  public int this[int index]\n  {\n      private set {  }\n      get { return this.heap[index]; }\n  }\n  public Heap(int n)\n  {\n      size = 0;\n      heap = new int[n];\n  }\n\n  public void push(int x)\n  {\n      int num = size++;\n      while (num > 0)\n      {\n          int p = (num - 1) / 2;\n          if (heap[p] <= x) break;\n          heap[num] = heap[p];\n          num = p;\n      }\n      heap[num] = x;\n  }\n  public int pop()\n  {\n      int ret = heap[0];\n      int x = heap[--size];\n      int num = 0;\n      while (num * 2 + 1 < size)\n      {\n          int a = num * 2 + 1;\n          int b = num * 2 + 2;\n          if (b < size && heap[b] < heap[a]) a = b;\n          if (heap[a] >= x) break;\n          heap[num] = heap[a];\n          num = a;\n      }\n      heap[num] = x;\n      return ret;\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},".NET 6 \u304b\u3089",(0,a.kt)("inlineCode",{parentName:"p"},"PriorityQueue"),"\u30af\u30e9\u30b9\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002")))))}m.isMDXComponent=!0},15762:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/priority-queue-1.drawio-08e2061b087da525362ddd334ace7722.svg"},54475:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/priority-queue-2.drawio-7ab0daeee4ac86eb7841499f440d5463.svg"}}]);