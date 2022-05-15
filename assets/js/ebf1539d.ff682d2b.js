"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[126],{3905:function(d,l,I){I.d(l,{Zo:function(){return n},kt:function(){return W}});var b=I(7294);function Z(d,l,I){return l in d?Object.defineProperty(d,l,{value:I,enumerable:!0,configurable:!0,writable:!0}):d[l]=I,d}function m(d,l){var I=Object.keys(d);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(d);l&&(b=b.filter((function(l){return Object.getOwnPropertyDescriptor(d,l).enumerable}))),I.push.apply(I,b)}return I}function i(d){for(var l=1;l<arguments.length;l++){var I=null!=arguments[l]?arguments[l]:{};l%2?m(Object(I),!0).forEach((function(l){Z(d,l,I[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(I)):m(Object(I)).forEach((function(l){Object.defineProperty(d,l,Object.getOwnPropertyDescriptor(I,l))}))}return d}function a(d,l){if(null==d)return{};var I,b,Z=function(d,l){if(null==d)return{};var I,b,Z={},m=Object.keys(d);for(b=0;b<m.length;b++)I=m[b],l.indexOf(I)>=0||(Z[I]=d[I]);return Z}(d,l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(d);for(b=0;b<m.length;b++)I=m[b],l.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(d,I)&&(Z[I]=d[I])}return Z}var c=b.createContext({}),t=function(d){var l=b.useContext(c),I=l;return d&&(I="function"==typeof d?d(l):i(i({},l),d)),I},n=function(d){var l=t(d.components);return b.createElement(c.Provider,{value:l},d.children)},G={inlineCode:"code",wrapper:function(d){var l=d.children;return b.createElement(b.Fragment,{},l)}},e=b.forwardRef((function(d,l){var I=d.components,Z=d.mdxType,m=d.originalType,c=d.parentName,n=a(d,["components","mdxType","originalType","parentName"]),e=t(I),W=Z,p=e["".concat(c,".").concat(W)]||e[W]||G[W]||m;return I?b.createElement(p,i(i({ref:l},n),{},{components:I})):b.createElement(p,i({ref:l},n))}));function W(d,l){var I=arguments,Z=l&&l.mdxType;if("string"==typeof d||Z){var m=I.length,i=new Array(m);i[0]=e;var a={};for(var c in l)hasOwnProperty.call(l,c)&&(a[c]=l[c]);a.originalType=d,a.mdxType="string"==typeof d?d:Z,i[1]=a;for(var t=2;t<m;t++)i[t]=I[t];return b.createElement.apply(null,i)}return b.createElement.apply(null,I)}e.displayName="MDXCreateElement"},2360:function(d,l,I){I.d(l,{Z:function(){return i}});var b=I(7294),Z=I(6010),m="tabItem_OmH5";function i(d){var l=d.children,I=d.hidden,i=d.className;return b.createElement("div",{role:"tabpanel",className:(0,Z.Z)(m,i),hidden:I},l)}},9877:function(d,l,I){I.d(l,{Z:function(){return W}});var b=I(7462),Z=I(7294),m=I(2389),i=I(7392),a=I(7094),c=I(2466),t=I(6010),n="tabList_uSqn",G="tabItem_LplD";function e(d){var l,I,m,e=d.lazy,W=d.block,p=d.defaultValue,s=d.values,u=d.groupId,o=d.className,y=Z.Children.map(d.children,(function(d){if((0,Z.isValidElement)(d)&&void 0!==d.props.value)return d;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof d.type?d.type:d.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=s?s:y.map((function(d){var l=d.props;return{value:l.value,label:l.label,attributes:l.attributes}})),g=(0,i.l)(N,(function(d,l){return d.value===l.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(d){return d.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(l=null!=p?p:null==(I=y.find((function(d){return d.props.default})))?void 0:I.props.value)?l:null==(m=y[0])?void 0:m.props.value;if(null!==h&&!N.some((function(d){return d.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(d){return d.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,a.U)(),H=j.tabGroupChoices,v=j.setTabGroupChoices,x=(0,Z.useState)(h),Y=x[0],R=x[1],r=[],M=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var D=H[u];null!=D&&D!==Y&&N.some((function(d){return d.value===D}))&&R(D)}var T=function(d){var l=d.currentTarget,I=r.indexOf(l),b=N[I].value;b!==Y&&(M(l),R(b),null!=u&&v(u,b))},O=function(d){var l,I=null;switch(d.key){case"ArrowRight":var b=r.indexOf(d.currentTarget)+1;I=r[b]||r[0];break;case"ArrowLeft":var Z=r.indexOf(d.currentTarget)-1;I=r[Z]||r[r.length-1]}null==(l=I)||l.focus()};return Z.createElement("div",{className:(0,t.Z)("tabs-container",n)},Z.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":W},o)},N.map((function(d){var l=d.value,I=d.label,m=d.attributes;return Z.createElement("li",(0,b.Z)({role:"tab",tabIndex:Y===l?0:-1,"aria-selected":Y===l,key:l,ref:function(d){return r.push(d)},onKeyDown:O,onFocus:T,onClick:T},m,{className:(0,t.Z)("tabs__item",G,null==m?void 0:m.className,{"tabs__item--active":Y===l})}),null!=I?I:l)}))),e?(0,Z.cloneElement)(y.filter((function(d){return d.props.value===Y}))[0],{className:"margin-top--md"}):Z.createElement("div",{className:"margin-top--md"},y.map((function(d,l){return(0,Z.cloneElement)(d,{key:l,hidden:d.props.value!==Y})}))))}function W(d){var l=(0,m.Z)();return Z.createElement(e,(0,b.Z)({key:String(l)},d))}},810:function(d,l,I){I.r(l),I.d(l,{assets:function(){return e},contentTitle:function(){return n},default:function(){return s},frontMatter:function(){return t},metadata:function(){return G},toc:function(){return W}});var b=I(7462),Z=I(3366),m=(I(7294),I(3905)),i=I(9877),a=I(2360),c=["components"],t={title:"\u30b9\u30bf\u30c3\u30af",sidebar_label:"\u30b9\u30bf\u30c3\u30af"},n=void 0,G={unversionedId:"Data-structure/stack",id:"Data-structure/stack",title:"\u30b9\u30bf\u30c3\u30af",description:"\u30b9\u30bf\u30c3\u30af\u3068\u306f",source:"@site/docs/01-Data-structure/01-stack.mdx",sourceDirName:"01-Data-structure",slug:"/Data-structure/stack",permalink:"/study-docs/docs/Data-structure/stack",draft:!1,editUrl:"https://koseki2580.github.io/study-docs/docs/01-Data-structure/01-stack.mdx",tags:[],version:"current",lastUpdatedAt:1652615405,formattedLastUpdatedAt:"2022/5/15",sidebarPosition:1,frontMatter:{title:"\u30b9\u30bf\u30c3\u30af",sidebar_label:"\u30b9\u30bf\u30c3\u30af"},sidebar:"Data-structureSidebar",previous:{title:"\u30ad\u30e5\u30fc",permalink:"/study-docs/docs/Data-structure/queue"},next:{title:"\u30b0\u30e9\u30d5",permalink:"/study-docs/docs/Data-structure/graph"}},e={},W=[{value:"\u30b9\u30bf\u30c3\u30af\u3068\u306f",id:"\u30b9\u30bf\u30c3\u30af\u3068\u306f",level:2},{value:"Pop",id:"pop",level:3},{value:"Push",id:"push",level:3}],p={toc:W};function s(d){var l=d.components,t=(0,Z.Z)(d,c);return(0,m.kt)("wrapper",(0,b.Z)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"\u30b9\u30bf\u30c3\u30af\u3068\u306f"},"\u30b9\u30bf\u30c3\u30af\u3068\u306f"),(0,m.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u5f8c\u5165\u308c\u5148\u51fa\u3057(LIFO : Last In First Out)\u306e\u30ea\u30b9\u30c8\u69cb\u9020\u3092\u6301\u3064\u30c7\u30fc\u30bf\u69cb\u9020\u3092",(0,m.kt)("inlineCode",{parentName:"p"},"\u30b9\u30bf\u30c3\u30af(stack)"),"\u3068\u3044\u3046\u3002"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:I(2740).Z,title:"\u30b9\u30bf\u30c3\u30af",width:"451",height:"132"})),(0,m.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u8a00\u8a9e\u3067\u6a19\u6e96\u3067\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u305d\u308c\u4f7f\u7528\u3059\u308b\u306e\u304c\u4e00\u756a\u9ad8\u901f\u306b\u52d5\u4f5c\u3059\u308b\u305f\u3081\u3001\u6a19\u6e96\u3067\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,m.kt)(i.Z,{groupId:"code",mdxType:"Tabs"},(0,m.kt)(a.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python",metastring:'title:"stack.py"','title:"stack.py"':!0},"# Python\u306e\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\nfrom collections import deque \n\n# \u521d\u671f\u5316\nbox = deque()\n\n# push \u8981\u7d20\u3092\u4e00\u756a\u5f8c\u308d\u306b\u8ffd\u52a0\u3059\u308b\nbox.append(1)\nbox.append(2)\nbox.append(3)\nprint(box) # deque([1, 2, 3])\nbox.append(4)\nprint(box) # deque([1, 2, 3, 4])\n\n# pop \u4e00\u756a\u5f8c\u308d\uff08\u65b0\u3057\u3044\uff09\u8981\u7d20\u3092\u53d6\u308a\u51fa\u3057\nprint(box.pop()) # 4\nprint(box.pop()) # 3\nprint(box) # deque([1, 2])\n"))),(0,m.kt)(a.Z,{value:"C++",label:"C++",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title:"stack.cpp"','title:"stack.cpp"':!0},"int main() {\n    // \u521d\u671f\u5316\n    stack<int> s;\n    // push\u3000\u8981\u7d20\u3092\u5f8c\u308d\u306b\u8ffd\u52a0\n    s.push(1);\n    s.push(2);\n    s.push(3);\n    // \u4e00\u756a\u5f8c\u308d\u306e\u8981\u7d20\u3092\u78ba\u8a8d\n    cout << s.top() << endl; // 3  s:[1,2,3]\n    s.push(4);\n    cout << s.top() << endl; // 4  s:[1,2,3,4]\n\n    // pop \u4e00\u756a\u5f8c\u308d\uff08\u4e00\u756a\u65b0\u3057\u3044\uff09\u8981\u7d20\u3092\u53d6\u308a\u9664\u304f\n    s.pop();\n    s.pop();\n    cout << s.top() << endl; // 2  s:[1,2]\n    return 0;\n}\n"))),(0,m.kt)(a.Z,{value:"C#",label:"C#",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title:"stack.cs"','title:"stack.cs"':!0},"# Python\u306e\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\nfrom collections import deque \n\n# \u521d\u671f\u5316\nbox = deque()\n\n# push \u8981\u7d20\u3092\u4e00\u756a\u5f8c\u308d\u306b\u8ffd\u52a0\u3059\u308b\nbox.append(1)\nbox.append(2)\nbox.append(3)\nprint(box) # deque([1, 2, 3])\nbox.append(4)\nprint(box) # deque([1, 2, 3, 4])\n\n# pop \u4e00\u756a\u5f8c\u308d\uff08\u65b0\u3057\u3044\uff09\u8981\u7d20\u3092\u53d6\u308a\u51fa\u3057\nprint(box.pop()) # 4\nprint(box.pop()) # 3\nprint(box) # deque([1, 2])\n")))),(0,m.kt)("h3",{id:"pop"},"Pop"),(0,m.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u5f8c\u308d\u304b\u3089\u53d6\u308a\u51fa\u3059\u51e6\u7406\u3002\u8a00\u8a9e\u306b\u3088\u308a\u3001\u540d\u79f0\u304c\u7570\u306a\u308b\u304c\u30b9\u30bf\u30c3\u30af\u306e\u30c7\u30fc\u30bf\u69cb\u9020\u3067\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3059\u51e6\u7406\u3092",(0,m.kt)("inlineCode",{parentName:"p"},"Pop"),"\u3068\u3044\u3046\u3002"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:I(947).Z,title:"\u30dd\u30c3\u30d7",width:"536",height:"132"})),(0,m.kt)("h3",{id:"push"},"Push"),(0,m.kt)("p",null,"\u30c7\u30fc\u30bf\u3092\u5f8c\u308d\u306b\u5165\u308c\u308b\u51e6\u7406\u3002\u8a00\u8a9e\u306b\u3088\u308a\u3001\u540d\u79f0\u304c\u7570\u306a\u308b\u304c\u30b9\u30bf\u30c3\u30af\u306e\u30c7\u30fc\u30bf\u69cb\u9020\u3067\u30c7\u30fc\u30bf\u3092\u5165\u308c\u308b\u51e6\u7406\u3092",(0,m.kt)("inlineCode",{parentName:"p"},"Push"),"\u3068\u3044\u3046\u3002"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:I(4895).Z,title:"\u30d7\u30c3\u30b7\u30e5",width:"491",height:"132"})))}s.isMDXComponent=!0},2740:function(d,l){l.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0NTFweCIgaGVpZ2h0PSIxMzJweCIgdmlld0JveD0iLTAuNSAtMC41IDQ1MSAxMzIiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDtkNzgzNTQwMy1jMzkyLTQ3OTEtYWEyMC05ZTU0ODZmZGUzNzUmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0wNS0xMFQxMTozMDoyNi45NjNaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDExXzZfMCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ29kZS8xLjU4LjAgQ2hyb21lLzg5LjAuNDM4OS4xMjggRWxlY3Ryb24vMTIuMC4xMyBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7MUZoVHVaOGtoLWxsNEE0NzNZOE8mcXVvdDsgdmVyc2lvbj0mcXVvdDsxMi4yLjQmcXVvdDsgcGFnZXM9JnF1b3Q7MSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtMdktaQUlEV0hlZ01mMVk1V0RoNCZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDs3WmxOazVzZ0dNYy9qZGNkRkZGejNLVGI3YVV6bmNtaFo2cEVtYUpra0x6MTB4Y3J4QmZpSnB0eGhtMW1UNUUvOEFpLy95TWk4ZUNxUEw0S3ZDMis4NHd3THdEWjBZTmZ2Q0R3QVlMcXAxRk9yWUpDTGVTQ1pycFJKNnpwSDJKNmFuVkhNMUlQR2tyT21hVGJvWmp5cWlLcEhHaFlDSDRZTnR0d05yenJGdWZFRXRZcFpyYjZrMmF5YU5Va2lEdjlHNkY1WWU3c1I0dTJwc1Ntc1o1SlhlQ01IM29TZlBIZ1NuQXUyNnZ5dUNLc2dXZTR0UDIrVHRTZUJ5WklKVy9xb01Idk1kdnB5WVY2WlBKa3BpdjRyc3BJMHdONGNIa29xQ1RyTFU2YjJvTXlXR21GTEprcStlclNIb0VlMUo0SVNZNDlTWS9vbGZDU1NIRlNUVXh0b3VubzlBaWdMaDg2MkFpMVV0SGpiSnBoYlc5K2p0d1JVQmNhd2dTUTBBS0NuQU1KSUhJSEJGbEFmUGRBRmc0ekpQcUFqd3dNSFdaSWJBRUpuQU1KZ2NNTVNTd2cwRDBRNURCREZqZXNJV29lY2pqcldncittNnc0NDBJcEZhOVV5K1dHTWphU01LTjVwWXFwb2tPVXZteW9VUFc2ZnRZVkpjMnk1allYTVErTm1PWDFGVCtOV0FPYmRRaHMxc0VNckUyTU41L0doMkVkaElGTDFyN0YybjdRSDRmMXdtbGUzN0pUZlJqV0VEbk42MXMyd1EvRE9nUk84OXJlWDBjUHpEcHltdGYyVHRWQ1RhcnN1VGtpNkJCT1V2Y0N1SW9oQW1DRVh1a2JIQ1hnVFdZa0c1d3gyTVQ2KzdJTFBJd21DTU9TN29mYnFrdVE5QjErY0twR2N2MWIyNFNvK1U2a1JQZnFueVNNQXFHcC9hVUpKTEhJaWJRQy9mUHNQTzNiYkxUMzE1ODJqbXlNNXJKeEhHaEdHKzJ2QXN2R3VzRGI1bkxEeUZIN3VleFptekpjMXpRZHVxdnF6YWtjQW0xWkh5SDY0Q21KTDdpY3BDUk5MK1hGcndTRjZIL3dIMFVqLzhIQ3JMUHZ6WUFJWGcwMVh3NUErMnZsTXdmdXpBSEx1UGp1SExEU3lRNDFZdzdZWDFIdlc4Nm5GdTNwWmY2ald6bmJXL25xZStGdUcxV3grNXVpYmQ3OTJRTmYvZ0k9Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxyZWN0IHg9IjAiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjQ8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjU1IiB5PSI1MSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OS41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij41PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIxMTAiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNC41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4xPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIxNjUiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4OS41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij40PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIyMjAiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0NC41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4yPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIyNzUiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5OS41LDU5LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4zPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSI3LjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjciIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDdweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjE8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjYyLjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4LjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjciIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDdweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjI8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjExNy41IiB5PSIyMSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzMuNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MzwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMTcyLjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4OC41LDI0LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij40PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIyMjcuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQzLjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjciIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDdweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjU8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjI4Mi41IiB5PSIyMSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTguNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHBhdGggZD0iTSAwIDUxIEwgMzc1IDUxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNzM1MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMCA4MSBMIDM3NSA4MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzczNTAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDM4MC41IDM1LjUgTCAzODAuNSAyNS41IEwgNDE1Ljg5IDI1LjUgTCA0MTUuODkgMCBMIDQ0OS41IDMwLjUgTCA0MTUuODkgNjEgTCA0MTUuODkgMzUuNSBaIiBmaWxsPSIjZjhjZWNjIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gNDQ5LjUgOTUuNSBMIDQ0OS41IDEwNS41IEwgNDE0LjExIDEwNS41IEwgNDE0LjExIDEzMSBMIDM4MC41IDEwMC41IEwgNDE0LjExIDcwIEwgNDE0LjExIDk1LjUgWiIgZmlsbD0iI2Y4Y2VjYyIgc3Ryb2tlPSIjYjg1NDUwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDAgNTEgTCAwIDgxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNzM1MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjwvZz48L3N2Zz4="},947:function(d,l){l.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MzZweCIgaGVpZ2h0PSIxMzJweCIgdmlld0JveD0iLTAuNSAtMC41IDUzNiAxMzIiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthYTgxYmVkYy1lMjE3LTRjZTEtYmQ4Yi02YTY1NzE2MmUyODUmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0wNS0xMFQxMTozMzo0OS43NjVaJnF1b3Q7IGFnZW50PSZxdW90O01vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDExXzZfMCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ29kZS8xLjU4LjAgQ2hyb21lLzg5LjAuNDM4OS4xMjggRWxlY3Ryb24vMTIuMC4xMyBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7WkxsT2ZuWXBJc1AzWkhoOUozcTImcXVvdDsgdmVyc2lvbj0mcXVvdDsxMi4yLjQmcXVvdDsgcGFnZXM9JnF1b3Q7MSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtMdktaQUlEV0hlZ01mMVk1V0RoNCZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDs3Wm5MY3RzZ0ZJYWZSdHNNQXFITE1uYlNkTk9aem5qUk5aV3d4QlFKRDhLeDNhY3Zxc0M2WU1lT1IxT2xucXdzZnVBQTN6a0NqdXloWmJsL2tXUlRmQk1aNVI0RTJkNURUeDZFUHNCSS96VEtvVlZ3WUlSY3NzdzA2b1FWKzAxdFQ2TnVXVWJyUVVNbEJGZHNNeFJUVVZVMFZRT05TQ2wydzJacndZZWpia2hPSFdHVkV1NnFQMWltaWxhTllkVHBYeW5MQ3p1eUh5WnRUVWxzWTdPU3VpQ1oyUFVrOU95aHBSUkN0VS9sZmtsNUE4OXlhZnQ5T1ZON25KaWtsYnFtQXpJOVhnbmZtc1VGWm1icVlKY3J4YmJLYU5NRGVHaXhLNWlpcXcxSm05cWRkckRXQ2xWeVhmTDFvenNET3dTVml1NTdrcG5SQ3hVbFZmS2dtOWphMk5BeDRRR1JLZTg2MkJpM1V0SGpiSnNSNDk3OGFMa2pvQjhNaEROQW9BTUV6dzRFSWp3ZkVPUUE4ZWNIa3N3WUljRUhmR1ZRTUdPRVlBY0luQjFJQUdhTWtOQUJnbVlIRW9aRElIN3lENEZFVit3aGVoMXF1T3BhU2ZHTExnVVhVaXVWcUhUTHhacHhQcElJWjNtbGk2bW1RN1crYUtnd2ZWdy9tb3FTWlZrenpFbk1RMGRNY254RkQ2TzNFYmlzQStDeWhsT3dqcTk0RysrR05RemduS3lUSzE3MCsyR2R6Qm5YMXU2YngrN2RzRVo0enJnTzNLekF2UVRmRGVzQXpCclg3djNhUVUycjdMRkpXenVFWjZsN0VDMGpoQUVZb2RmNm1vUXhlSk1aelFaNXIwdXNmMWM0d2NOcWtuS2kyT3Z3cUQ4RnlZendYVEE5azh2NW56VlJpNjFNcWVuVnoyNUhoakErY3l1MmhoU1JPVldPb2I4K095NzdPamU2V2NHbkcwZHVES2R5NDlqUWhHNTBjeG5IalhWQk5zM2ptdE85OGVlaTU5cVVrN3BtNmRDN3V0NStLY0tnTFp2UFdqNTRpS01UWG81VG1xYW40dUpuakFQOFAvZ2ZqeklPQ0JLN3o3NDNBa0owMGRTRU1lQ21iNTh4Y0dNTU9JNkxibzRCSjV4Y1V4UEdnSnV4dm04N1A3ZHBuOS9tUDdvckp6dVZMNTRMTjd0UkY3dFA1MjN6N2c4STlQd0gmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHJlY3QgeD0iMCIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuNSw1OS41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NDwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iNTUiIHk9IjUxIiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjU8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjExMCIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM0LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjE8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjE2NSIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjQ8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjIyMCIgeT0iNTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQ0LjUsNTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjI8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjQ4MCIgeT0iMTEiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTA0LjUsMTkuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjM8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjcuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iNjIuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzguNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+MjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHJlY3QgeD0iMTE3LjUiIHk9IjIxIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMy41LDI0LjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjEyIj48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4zPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjwvZz48cmVjdCB4PSIxNzIuNSIgeT0iMjEiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg4LjUsMjQuNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjciIGhlaWdodD0iMTIiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDdweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPjQ8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxyZWN0IHg9IjIyNy41IiB5PSIyMSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDMuNSwyNC41KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iNyIgaGVpZ2h0PSIxMiI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+NTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L2c+PHBhdGggZD0iTSAwIDUxIEwgMzc1IDUxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNzM1MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMCA4MSBMIDM3NSA4MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzczNTAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDM4MC41IDM1LjUgTCAzODAuNSAyNS41IEwgNDE1Ljg5IDI1LjUgTCA0MTUuODkgMCBMIDQ0OS41IDMwLjUgTCA0MTUuODkgNjEgTCA0MTUuODkgMzUuNSBaIiBmaWxsPSIjZjhjZWNjIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gNDQ5LjUgOTUuNSBMIDQ0OS41IDEwNS41IEwgNDE0LjExIDEwNS41IEwgNDE0LjExIDEzMSBMIDM4MC41IDEwMC41IEwgNDE0LjExIDcwIEwgNDE0LjExIDk1LjUgWiIgZmlsbD0iI2Y4Y2VjYyIgc3Ryb2tlPSIjYjg1NDUwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDAgNTEgTCAwIDgxIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNzM1MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjwvZz48L3N2Zz4="},4895:function(d,l,I){l.Z=I.p+"assets/images/stack-3.drawio-6fb5e43d6256f4011f857b8d44d47219.svg"}}]);