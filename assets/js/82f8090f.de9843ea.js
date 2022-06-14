"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[584],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(6010),i="tabItem_Ymn6";function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),l=a(7294),i=a(6010),r=a(2389),o=a(7392),u=a(7094),d=a(2466),p="tabList__CuJ",s="tabItem_LNqP";function c(e){var t,a,r=e.lazy,c=e.block,m=e.defaultValue,k=e.values,f=e.groupId,v=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),y=w.tabGroupChoices,C=w.setTabGroupChoices,Z=(0,l.useState)(N),O=Z[0],E=Z[1],D=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=y[f];null!=T&&T!==O&&h.some((function(e){return e.value===T}))&&E(T)}var j=function(e){var t=e.currentTarget,a=D.indexOf(t),n=h[a].value;n!==O&&(x(t),E(n),null!=f&&C(f,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=D.indexOf(e.currentTarget)+1;a=null!=(n=D[l])?n:D[0];break;case"ArrowLeft":var i,r=D.indexOf(e.currentTarget)-1;a=null!=(i=D[r])?i:D[D.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return D.push(e)},onKeyDown:_,onFocus:j,onClick:j},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),r?(0,l.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,r.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},7293:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){var t=e.children,a=e.color;return n.createElement("span",{style:{color:a}},t)}},568:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var n=a(3117),l=a(102),i=(a(7294),a(3905)),r=(a(5488),a(5162),a(7293),["components"]),o={title:"\u95a2\u4fc2\u30e2\u30c7\u30eb",sidebar_label:"\u95a2\u4fc2\u30e2\u30c7\u30eb",draft:!1,toc_max_heading_level:5},u=void 0,d={unversionedId:"Database/relational-data-model",id:"Database/relational-data-model",title:"\u95a2\u4fc2\u30e2\u30c7\u30eb",description:"\u95a2\u4fc2\u30e2\u30c7\u30eb\u306e\u8003\u3048\u65b9",source:"@site/docs/02-Database/01-relational-data-model.mdx",sourceDirName:"02-Database",slug:"/Database/relational-data-model",permalink:"/study-docs/docs/Database/relational-data-model",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/02-Database/01-relational-data-model.mdx",tags:[],version:"current",lastUpdatedAt:1653996240,formattedLastUpdatedAt:"2022/5/31",sidebarPosition:1,frontMatter:{title:"\u95a2\u4fc2\u30e2\u30c7\u30eb",sidebar_label:"\u95a2\u4fc2\u30e2\u30c7\u30eb",draft:!1,toc_max_heading_level:5},sidebar:"DatabaseSidebar",previous:{title:"\u30b7\u30b9\u30c6\u30e0\u958b\u767a",permalink:"/study-docs/docs/Database/data-model/system-development"},next:{title:"\u6b63\u898f\u5316",permalink:"/study-docs/docs/Database/normalization"}},p={},s=[{value:"\u95a2\u4fc2\u30e2\u30c7\u30eb\u306e\u8003\u3048\u65b9",id:"\u95a2\u4fc2\u30e2\u30c7\u30eb\u306e\u8003\u3048\u65b9",level:2},{value:"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",id:"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",level:3},{value:"\u95a2\u4fc2\u8868\u306e\u8a73\u7d30",id:"\u95a2\u4fc2\u8868\u306e\u8a73\u7d30",level:3},{value:"\u6f14\u7b97",id:"\u6f14\u7b97",level:3},{value:"\u548c",id:"\u548c",level:4},{value:"\u5dee",id:"\u5dee",level:4},{value:"\u7a4d",id:"\u7a4d",level:4},{value:"\u76f4\u7a4d",id:"\u76f4\u7a4d",level:4},{value:"\u5c04\u5f71",id:"\u5c04\u5f71",level:4},{value:"\u9078\u629e",id:"\u9078\u629e",level:4},{value:"\u5546",id:"\u5546",level:4},{value:"\u7d50\u5408",id:"\u7d50\u5408",level:3},{value:"\u03b8 \u7d50\u5408",id:"\u03b8-\u7d50\u5408",level:4},{value:"\u7b49\u7d50\u5408",id:"\u7b49\u7d50\u5408",level:4},{value:"\u81ea\u7136\u7d50\u5408",id:"\u81ea\u7136\u7d50\u5408",level:4},{value:"\u5916\u90e8\u7d50\u5408",id:"\u5916\u90e8\u7d50\u5408",level:4},{value:"\u5de6\u5916\u90e8\u7d50\u5408",id:"\u5de6\u5916\u90e8\u7d50\u5408",level:5},{value:"\u53f3\u5916\u90e8\u7d50\u5408",id:"\u53f3\u5916\u90e8\u7d50\u5408",level:5},{value:"\u5b8c\u5168\u5916\u90e8\u7d50\u5408",id:"\u5b8c\u5168\u5916\u90e8\u7d50\u5408",level:5}],c={toc:s};function m(e){var t=e.components,o=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u95a2\u4fc2\u30e2\u30c7\u30eb\u306e\u8003\u3048\u65b9"},"\u95a2\u4fc2\u30e2\u30c7\u30eb\u306e\u8003\u3048\u65b9"),(0,i.kt)("p",null,"\u95a2\u4fc2\u30e2\u30c7\u30eb\u306f\u30c7\u30fc\u30bf\u3082\u30c7\u30fc\u30bf\u9593\u306e\u95a2\u9023\u3082\u5168\u3066\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3(\u95a2\u4fc2)\u3068\u30bf\u30d7\u30eb(\u884c\u30fb\u7d44)\u3067\u8868\u73fe\u3059\u308b\u3053\u3068\u304c\u57fa\u672c\u3067\u3042\u308b\u3002"),(0,i.kt)("h3",{id:"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"),(0,i.kt)("p",null,"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u69d8\u3005\u306a\u96c6\u5408\u3092\u8868\u3059",(0,i.kt)("inlineCode",{parentName:"p"},"\u30c9\u30e1\u30a4\u30f3(\u5b9a\u7fa9\u57df)"),"\u3068\u3044\u3046\u6982\u5ff5\u304c\u3042\u308b\u3002"),(0,i.kt)("p",null,"\u4f8b\u3048\u3070\u3001"),(0,i.kt)("p",null,"\u88fd\u54c1 {\u88fd\u54c1 A, \u88fd\u54c1 B}"),(0,i.kt)("p",null,"\u539f\u6599 {\u539f\u6599 a, \u539f\u6599 b}"),(0,i.kt)("p",null,"\u3067\u306f\u3001\u88fd\u54c1 A\u30fb\u88fd\u54c1 B \u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027\u5024"),"\u3068\u547c\u3073\u3001\u3053\u306e\u5c5e\u6027\u5024\u304c\u53d6\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u7bc4\u56f2\u3092\u30c9\u30e1\u30a4\u30f3\u3068\u8a00\u3046\u3002(\u88fd\u54c1 C,\u88fd\u54c1 D \u7b49)"),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e\u88fd\u54c1\u3068\u539f\u6599\u3067\u76f4\u7a4d\u3092\u53d6\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308b\u3002"),(0,i.kt)("p",null,"(\u88fd\u54c1 A, \u539f\u6599 a)"),(0,i.kt)("p",null,"(\u88fd\u54c1 A, \u539f\u6599 b)"),(0,i.kt)("p",null,"(\u88fd\u54c1 B, \u539f\u6599 a)"),(0,i.kt)("p",null,"(\u88fd\u54c1 B, \u539f\u6599 b)"),(0,i.kt)("p",null,"\u3053\u308c\u3089 1 \u3064 1 \u3064\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u30bf\u30d7\u30eb(\u884c, \u7d44)"),"\u3068\u547c\u3073\u3001\u5fc5\u8981\u306a\u30bf\u30d7\u30eb\u3060\u3051\u3092\u53d6\u308a\u51fa\u3057\u305f\u76f4\u7a4d\u306e\u90e8\u5206\u96c6\u5408\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3(\u95a2\u4fc2)"),"\u3068\u547c\u3076\u3002\n\u307e\u305f\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u5f62\u5f0f\u3067\u8868\u3057\u305f\u3082\u306e\u3092\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3(\u95a2\u4fc2\u8868)\u3068\u8a00\u3046\u3053\u3068\u3082\u3042\u308b\u3002"),(0,i.kt)("p",null,"\u5217\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027"),"\u3068\u547c\u3073\u3001\u5c5e\u6027\u306e 1 \u3064 1 \u3064\u306e\u5024\u3092\u5c5e\u6027\u5024\u3068\u3044\u3046\u3002"),(0,i.kt)("p",null,"\u95a2\u4fc2\u8868\u306f\u30bf\u30d7\u30eb\u306e\u96c6\u5408\u3067\u3042\u308a\u3001\u6642\u9593\u3068\u3068\u3082\u306b\u5909\u5316\u3059\u308b\u304c\u3001\u6642\u9593\u306b\u5bfe\u3057\u3066\u4e0d\u5909\u3067\u3042\u308a\u3001\u95a2\u4fc2\u8868\u306e\u67a0\u7d44\u307f\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u305f\u3082\u306e\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u95a2\u4fc2\u30b9\u30ad\u30fc\u30de"),"\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(3177).Z,title:"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3(\u95a2\u4fc2\u8868)",width:"821",height:"410"})),(0,i.kt)("h3",{id:"\u95a2\u4fc2\u8868\u306e\u8a73\u7d30"},"\u95a2\u4fc2\u8868\u306e\u8a73\u7d30"),(0,i.kt)("p",null,"\u95a2\u4fc2\u8868\u306e\u30bf\u30d7\u30eb\u3092\u4e00\u610f\u306b\u8b58\u5225\u3067\u304d\u308b\u3001\u5fc5\u8981\u6700\u5c0f\u9650\u306e\u5c5e\u6027(",(0,i.kt)("inlineCode",{parentName:"p"},"\u6975\u5c0f"),")\u3067\u69cb\u6210\u3055\u308c\u308b\u5c5e\u6027\u540d\u306e\u96c6\u5408\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u5019\u88dc\u30ad\u30fc"),"\u3068\u8a00\u3046\u3002"),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e\u56f3\u3092\u4f8b\u306b\u3059\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u88fd\u54c1\u756a\u53f7"),"\u30fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u88fd\u54c1\u540d"),"\u30fb",(0,i.kt)("inlineCode",{parentName:"p"},"{\u88fd\u54c1\u756a\u53f7\u30fb\u88fd\u54c1\u540d}"),"\u306e\u3069\u308c\u304b\u304c\u5206\u304b\u308c\u3070\u30bf\u30d7\u30eb\u304c\u8b58\u5225\u3067\u304d\u308b\u3002\n\u3057\u304b\u3057\u3001\u6700\u5c0f\u69cb\u6210\u3067\u306a\u3044",(0,i.kt)("inlineCode",{parentName:"p"},"{\u88fd\u54c1\u756a\u53f7\u30fb\u88fd\u54c1\u540d}"),"\u306f\u5019\u88dc\u30ad\u30fc\u3068\u306f\u547c\u3070\u305a\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u88fd\u54c1\u756a\u53f7"),"\u30fb",(0,i.kt)("inlineCode",{parentName:"p"},"\u88fd\u54c1\u540d"),"\u306e 2 \u3064\u3092\u5019\u88dc\u30ad\u30fc\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,"\u69cb\u6210\u3059\u308b\u5c5e\u6027\u306e\u5024\u306b\u7a7a\u5024(NULL)\u3092\u53d6\u3089\u306a\u3044\u5019\u88dc\u30ad\u30fc\u306e\u4e2d\u304b\u3089 1 \u3064\u9078\u629e\u3057\u305f\u30ad\u30fc\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e3b\u30ad\u30fc"),"\u3068\u547c\u3076\u3002\n\u4e3b\u30ad\u30fc\u306b\u306f\u6b21\u306e 2 \u3064\u306e\u5236\u7d04\u3092\u6301\u3064"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u610f\u6027\u5236\u7d04 : \u4e3b\u30ad\u30fc\u304c\u540c\u3058\u5024\u306e\u30bf\u30d7\u30eb\u304c\u5b58\u5728\u3057\u306a\u3044"),(0,i.kt)("li",{parentName:"ul"},"\u975e\u30ca\u30eb\u5236\u7d04 : \u4e3b\u30ad\u30fc\u306b NULL \u3092\u542b\u3080\u30bf\u30d7\u30eb\u304c\u5b58\u5728\u3057\u306a\u3044")),(0,i.kt)("p",null,"\u8907\u6570\u306e\u5c5e\u6027\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u308b\u4e3b\u30ad\u30fc\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u8907\u5408\u30ad\u30fc"),"\u3068\u8a00\u3046\u3002"),(0,i.kt)("p",null,"\u4e3b\u30ad\u30fc\u306f\u95a2\u4fc2\u30b9\u30ad\u30fc\u30de\u3067\u306f\u4e0b\u7dda\u3092\u3064\u3051\u3066\u8868\u73fe\u3059\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(1004).Z,title:"\u4e3b\u30ad\u30fc",width:"511",height:"511"})),(0,i.kt)("p",null,"\u4ed6\u306e\u95a2\u4fc2\u8868\u3092\u53c2\u7167\u3059\u308b\u305f\u3081\u306e\u5c5e\u6027\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u5916\u90e8\u30ad\u30fc"),"\u3068\u547c\u3076\u3002\u5916\u90e8\u30ad\u30fc\u3068\u3057\u3066\u8a2d\u5b9a\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u5236\u7d04\u304c\u8ab2\u3055\u308c\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u95a2\u4fc2\u8868 B \u306e\u5916\u90e8\u30ad\u30fc\u306e\u5c5e\u6027\u5024\u306f\u95a2\u4fc2\u8868 A \u306e\u4e3b\u30ad\u30fc\u306e\u5c5e\u6027\u5024\u3068\u3057\u3066\u5b58\u5728\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044"),(0,i.kt)("li",{parentName:"ul"},"\u95a2\u4fc2\u8868 A \u304b\u3089\u30bf\u30d7\u30eb\u3092\u524a\u9664\u3059\u308b\u5834\u5408\u306f\u3001\u95a2\u4fc2\u8868 B \u3068\u306e\u53c2\u7167\u95a2\u4fc2\u306b\u77db\u76fe\u304c\u751f\u3058\u3066\u306f\u306a\u3089\u306a\u3044")),(0,i.kt)("p",null,"\u3053\u306e\u5236\u7d04\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u53c2\u7167\u5236\u7d04"),"\u3068\u8a00\u3046\u3002"),(0,i.kt)("p",null,"\u5916\u90e8\u30ad\u30fc\u306f\u95a2\u4fc2\u30b9\u30ad\u30fc\u30de\u3067\u306f\u70b9\u7dda\u306e\u4e0b\u7dda\u3092\u3064\u3051\u3066\u8868\u73fe\u3059\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(4809).Z,title:"\u5916\u90e8\u30ad\u30fc",width:"901",height:"531"})),(0,i.kt)("h3",{id:"\u6f14\u7b97"},"\u6f14\u7b97"),(0,i.kt)("p",null,"2 \u3064\u306e\u95a2\u4fc2\u304b\u3089\u65b0\u305f\u306a\u95a2\u4fc2\u3092\u6c42\u3081\u308b\u6f14\u7b97\u306e\u3053\u3068\u3092",(0,i.kt)("inlineCode",{parentName:"p"},"\u95a2\u4fc2\u6f14\u7b97"),"\u3068\u547c\u3076\u3002"),(0,i.kt)("p",null,"\u95a2\u4fc2\u6f14\u7b97\u306f 8 \u7a2e\u985e\u306e\u6f14\u7b97\u304c\u5b58\u5728\u3059\u308b\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u548c : 2 \u3064\u306e\u95a2\u4fc2\u8868\u306e\u3069\u3061\u3089\u304b\u306b\u5b58\u5728\u3059\u308b\u30bf\u30d7\u30eb\u96c6\u5408\u3092\u53d6\u308a\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"\u5dee : 2 \u3064\u306e\u95a2\u4fc2\u8868\u306e\u7247\u65b9\u306e\u307f\u306b\u5b58\u5728\u3059\u308b\u30bf\u30d7\u30eb\u96c6\u5408\u3092\u53d6\u308a\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"\u7a4d : 2 \u3064\u306e\u95a2\u4fc2\u8868\u306e\u4e21\u65b9\u306b\u5b58\u5728\u3059\u308b\u30bf\u30d7\u30eb\u96c6\u5408\u3092\u53d6\u308a\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"\u76f4\u7a4d : 2 \u3064\u306e\u95a2\u4fc2\u8868\u306b\u542b\u307e\u308c\u308b\u30bf\u30d7\u30eb\u306e\u5168\u3066\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u53d6\u308a\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"\u5c04\u5f71 : \u95a2\u4fc2\u8868\u304b\u3089\u6761\u4ef6\u306b\u5408\u3046\u30ab\u30e9\u30e0\u3092\u53d6\u308a\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"\u9078\u629e : \u95a2\u4fc2\u8868\u304b\u3089\u6761\u4ef6\u306b\u5408\u3046\u30bf\u30d7\u30eb\u3092\u53d6\u308a\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"\u7d50\u5408 : 2 \u3064\u306e\u95a2\u4fc2\u8868\u3092\u7d44\u307f\u5408\u308f\u305b\u3066 1 \u3064\u306e\u95a2\u4fc2\u8868\u3092\u4f5c\u6210\u3059\u308b"),(0,i.kt)("li",{parentName:"ol"},"\u5546 : \u95a2\u4fc2\u8868 B \u306e\u30bf\u30d7\u30eb\u3092\u5168\u3066\u3082\u3064\u95a2\u4fc2\u8868 A \u306e\u30bf\u30d7\u30eb\u96c6\u5408\u3092\u53d6\u308a\u51fa\u3057\u3001\u95a2\u4fc2\u8868 B \u306e\u5c5e\u6027\u3092\u53d6\u308a\u9664\u304f")),(0,i.kt)("p",null,"\u7d50\u5408\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u7a2e\u985e\u304c\u3042\u308b\u305f\u3081\u4ee5\u4e0b\u306e\u56f3\u3067\u306f\u53d6\u308a\u4e0a\u3052\u306a\u3044\u3002"),(0,i.kt)("h4",{id:"\u548c"},"\u548c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(2192).Z,title:"\u548c",width:"1061",height:"892"})),(0,i.kt)("h4",{id:"\u5dee"},"\u5dee"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(2395).Z,title:"\u5dee",width:"1061",height:"721"})),(0,i.kt)("h4",{id:"\u7a4d"},"\u7a4d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(4483).Z,title:"\u7a4d",width:"1061",height:"631"})),(0,i.kt)("h4",{id:"\u76f4\u7a4d"},"\u76f4\u7a4d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(7106).Z,title:"\u76f4\u7a4d",width:"811",height:"471"})),(0,i.kt)("h4",{id:"\u5c04\u5f71"},"\u5c04\u5f71"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(4814).Z,title:"\u5c04\u5f71",width:"511",height:"531"})),(0,i.kt)("h4",{id:"\u9078\u629e"},"\u9078\u629e"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(7162).Z,title:"\u9078\u629e",width:"1131",height:"251"})),(0,i.kt)("h4",{id:"\u5546"},"\u5546"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(638).Z,title:"\u5546",width:"1061",height:"511"})),(0,i.kt)("h3",{id:"\u7d50\u5408"},"\u7d50\u5408"),(0,i.kt)("p",null,"\u7d50\u5408\u306b\u306f\u69d8\u3005\u306a\u7a2e\u985e\u304c\u5b58\u5728\u3057\u3001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u03b8 \u7d50\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u7b49\u7d50\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u7136\u7d50\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u5916\u90e8\u7d50\u5408")),(0,i.kt)("p",null,"\u306a\u3069\u304c\u3042\u308b\u3002"),(0,i.kt)("h4",{id:"\u03b8-\u7d50\u5408"},"\u03b8 \u7d50\u5408"),(0,i.kt)("p",null,"\u7d50\u5408\u3059\u308b\u95a2\u4fc2\u8868\u306e\u76f4\u7a4d\u3092\u6c42\u3081\u3001\u305d\u306e\u4e2d\u304b\u3089 2 \u3064\u306e\u5c5e\u6027\u3092\u9078\u629e\u3057",(0,i.kt)("inlineCode",{parentName:"p"},"X \u03b8 Y"),"\u306e\u95a2\u4fc2\u3068\u306a\u308b\u30bf\u30d7\u30eb\u3092\u53d6\u308a\u51fa\u3059\u7d50\u5408\u65b9\u6cd5\u3092\u3044\u3046\u3002\n\u03b8 \u306f\u6bd4\u8f03\u6f14\u7b97\u5b50\u306e\u3053\u3068\u3092\u6307\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"<, >, <=, >=, =, <>"),"\u306a\u3069\u304c\u3042\u308b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(730).Z,title:"\u03b8\u7d50\u5408",width:"917",height:"708"})),(0,i.kt)("h4",{id:"\u7b49\u7d50\u5408"},"\u7b49\u7d50\u5408"),(0,i.kt)("p",null,"\u03b8 \u7d50\u5408\u306e \u03b8 \u3092",(0,i.kt)("inlineCode",{parentName:"p"},"="),"\u3068\u3057\u305f\u6642\u306e\u7d50\u5408\u65b9\u6cd5\u306e\u3053\u3068\u3092\u3044\u3046\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(2743).Z,title:"\u7b49\u7d50\u5408",width:"917",height:"668"})),(0,i.kt)("h4",{id:"\u81ea\u7136\u7d50\u5408"},"\u81ea\u7136\u7d50\u5408"),(0,i.kt)("p",null,"\u7b49\u7d50\u5408\u306e\u91cd\u8907\u3057\u3066\u3044\u308b\u5c5e\u6027\u3092\u53d6\u308a\u9664\u3044\u305f\u7d50\u5408\u65b9\u6cd5\u306e\u3053\u3068\u3092\u3044\u3046\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(4654).Z,title:"\u81ea\u7136\u7d50\u5408",width:"917",height:"851"})),(0,i.kt)("h4",{id:"\u5916\u90e8\u7d50\u5408"},"\u5916\u90e8\u7d50\u5408"),(0,i.kt)("p",null,"\u5916\u90e8\u7d50\u5408\u306b 3 \u7a2e\u985e\u5b58\u5728\u3059\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5de6\u5916\u90e8\u7d50\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u53f3\u5916\u90e8\u7d50\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u5916\u90e8\u7d50\u5408")),(0,i.kt)("h5",{id:"\u5de6\u5916\u90e8\u7d50\u5408"},"\u5de6\u5916\u90e8\u7d50\u5408"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5de6"),"\u5074\u306b\u3042\u308b\u95a2\u4fc2\u8868\u306f\u5168\u3066\u53d6\u308a\u51fa\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u53f3"),"\u5074\u306b\u3042\u308b\u95a2\u4fc2\u8868\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"\u5de6"),"\u5074\u306b\u3042\u308b\u95a2\u4fc2\u8868\u3068\u4e00\u81f4\u3059\u308b\u3082\u306e\u306e\u307f\u53d6\u308a\u51fa\u3059\u3002\u305d\u306e\u969b\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u5de6"),"\u5074\u306b\u306f\u5b58\u5728\u3059\u308b\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"\u53f3"),"\u5074\u306b\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3068\u3057\u3066\u53d6\u308a\u51fa\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(5079).Z,title:"\u5de6\u5916\u90e8\u7d50\u5408",width:"991",height:"516"})),(0,i.kt)("h5",{id:"\u53f3\u5916\u90e8\u7d50\u5408"},"\u53f3\u5916\u90e8\u7d50\u5408"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u53f3"),"\u5074\u306b\u3042\u308b\u95a2\u4fc2\u8868\u306f\u5168\u3066\u53d6\u308a\u51fa\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u5de6"),"\u5074\u306b\u3042\u308b\u95a2\u4fc2\u8868\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"\u53f3"),"\u5074\u306b\u3042\u308b\u95a2\u4fc2\u8868\u3068\u4e00\u81f4\u3059\u308b\u3082\u306e\u306e\u307f\u53d6\u308a\u51fa\u3059\u3002\u305d\u306e\u969b\u306b\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u53f3"),"\u5074\u306b\u306f\u5b58\u5728\u3059\u308b\u304c",(0,i.kt)("inlineCode",{parentName:"p"},"\u5de6"),"\u5074\u306b\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3068\u3057\u3066\u53d6\u308a\u51fa\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(7254).Z,title:"\u53f3\u5916\u90e8\u7d50\u5408",width:"991",height:"516"})),(0,i.kt)("h5",{id:"\u5b8c\u5168\u5916\u90e8\u7d50\u5408"},"\u5b8c\u5168\u5916\u90e8\u7d50\u5408"),(0,i.kt)("p",null,"\u5de6\u5916\u90e8\u7d50\u5408\u3068\u53f3\u5916\u90e8\u7d50\u5408\u3092\u5408\u308f\u305b\u305f\u3082\u306e\u3092\u3044\u3046\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30a4\u30e1\u30fc\u30b8\u56f3",src:a(9178).Z,title:"\u5b8c\u5168\u5916\u90e8\u7d50\u5408",width:"991",height:"551"})))}m.isMDXComponent=!0},3177:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-1.drawio-5e0e4b8db3573633526716ec8c851d8b.svg"},638:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-10.drawio-79f9aa51abf3ad4c8002e34491bbeab5.svg"},730:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-11.drawio-f755cac04e9602fcc978bcd8dd6dba98.svg"},2743:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-12.drawio-f6ed95562afd2d9331469b5b1dd89bc2.svg"},4654:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-13.drawio-c0d4ff7453c7c489d807118d97ab6891.svg"},5079:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-14.drawio-09cceefe9108665b3315cab7af47bf3f.svg"},7254:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-15.drawio-626d26cbb8647ce36953cc5aeb7e1279.svg"},9178:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-16.drawio-50cfc1e6afd171b75ef6c9e213fbcf5e.svg"},1004:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-2.drawio-8694bbefc2131b24ca414b225fb8ded0.svg"},4809:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-3.drawio-92e1443a7b0093d99be24b6a3645960d.svg"},2192:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-4.drawio-1e3d869162c5a6f1f89b5d4e61885ee4.svg"},2395:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-5.drawio-a63a4537ad46a350fdec5acd35677d91.svg"},4483:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-6.drawio-ec458263cb046fac21c4a345e2382fe1.svg"},7106:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-7.drawio-bfb687588d63530b1afc3678b7d6466e.svg"},4814:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-8.drawio-c03a136c162746d726eba8f95d4703bd.svg"},7162:function(e,t,a){t.Z=a.p+"assets/images/relational-data-model-9.drawio-51151b6039536826d71d9b1a00ba3a50.svg"}}]);