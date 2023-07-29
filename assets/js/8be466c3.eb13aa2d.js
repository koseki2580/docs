"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[4662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),s=r(16550),i=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=i??d;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var v=r(72389);const k="tabList__CuJ",h="tabItem_LNqP";function I(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(d(t),i(n))},f=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":s===t})}),r??t)})))}function P(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(I,(0,n.Z)({},e,t)),a.createElement(P,(0,n.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},97936:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{children:t,color:r}=e;return n.createElement("span",{style:{color:r}},t)}},97643:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);const a="text_ward_j2fN";function o(e){let{children:t}=e;return n.createElement("div",{className:`${a}`},t)}},79014:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294);const a="split_BsMO",o="border_none_AQxW";function l(e){let{children:t,border:r}=e;return n.createElement("span",{className:`${a} ${"false"===r?o:""}`},t)}},17365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162),r(97936),r(79014),r(97643);const o={title:"VoIP",sidebar_label:"VoIP",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},l=void 0,s={unversionedId:"Network/voip-network",id:"Network/voip-network",title:"VoIP",description:"VoIP \u3068\u306f",source:"@site/docs/03-Network/01-voip-network.md",sourceDirName:"03-Network",slug:"/Network/voip-network",permalink:"/study-docs/docs/Network/voip-network",draft:!1,editUrl:"https://github.com/koseki2580/study-docs/edit/main/docs/03-Network/01-voip-network.md",tags:[{label:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",permalink:"/study-docs/docs/tags/\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}],version:"current",lastUpdatedBy:"koseki2580",lastUpdatedAt:1677912846,formattedLastUpdatedAt:"2023\u5e743\u67084\u65e5",sidebarPosition:1,frontMatter:{title:"VoIP",sidebar_label:"VoIP",draft:!1,toc_max_heading_level:5,tags:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"]},sidebar:"NetworkSidebar",previous:{title:"SIP",permalink:"/study-docs/docs/Network/sip"},next:{title:"SDP",permalink:"/study-docs/docs/Network/sdp"}},i={},u=[{value:"VoIP \u3068\u306f",id:"voip-\u3068\u306f",level:2},{value:"VoIP GW",id:"voip-gw",level:3},{value:"NAT \u306b\u8d77\u56e0\u3059\u308b\u554f\u984c",id:"nat-\u306b\u8d77\u56e0\u3059\u308b\u554f\u984c",level:3}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"voip-\u3068\u306f"},"VoIP \u3068\u306f"),(0,a.kt)("p",null,"VoIP(Voice over Internet Protocol) \u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u3067\u97f3\u58f0\u30c7\u30fc\u30bf\u306e\u3084\u308a\u3068\u308a\u3092\u884c\u3046\u6280\u8853\u306e\u7dcf\u79f0\u306e\u3053\u3068\u3092\u8a00\u3046\u3002"),(0,a.kt)("p",null,"VoIP \u306f 2 \u6bb5\u968e\u306b\u5206\u304b\u308c\u3066\u304a\u308a\u3001"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/Network/sip"},"SIP")," \u3092\u7528\u3044\u3066\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u751f\u6210"),(0,a.kt)("li",{parentName:"ol"},"RTP \u306b\u3088\u308b\u97f3\u58f0\u901a\u4fe1")),(0,a.kt)("p",null,"\u306e\u624b\u9806\u3067\u3084\u308a\u53d6\u308a\u304c\u884c\u308f\u308c\u308b\u3002"),(0,a.kt)("h3",{id:"voip-gw"},"VoIP GW"),(0,a.kt)("p",null,"VoIP GW(VoIP GateWay)\u306f\u516c\u8846 IP \u96fb\u8a71\u7db2\u3068\u81ea\u793e\u306e\u5185\u7dda IP \u96fb\u8a71\u7db2\u306e 2 \u3064\u306e SIP \u30b5\u30fc\u30d0\u3092\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3068\u306a\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001VoIP GW \u306f\u516c\u8846 IP \u96fb\u8a71\u7db2\u3068\u81ea\u793e\u306e\u5185\u7dda IP \u96fb\u8a71\u7db2\u3068\u306e\u5883\u754c\u306b\u5b58\u5728\u3057\u3001\u305d\u308c\u305e\u308c\u306e SIP \u30b5\u30fc\u30d0\u3068\u3084\u308a\u3068\u308a\u3092\u884c\u3046\u3002"),(0,a.kt)("p",null,"\u7740\u547c\u5074\u306e SIP \u304b\u3089 VoIP GW \u3092\u898b\u308b\u3068\u767a\u547c\u5074\u3068\u3057\u3066\u632f\u308b\u821e\u3044\u3001\u767a\u547c\u5074\u306e SIP \u304b\u3089\u307f\u308b\u3068 VoIP GW \u306f\u7740\u547c\u5074\u3068\u3057\u3066\u632f\u308b\u821e\u3046\u3002\n\u305d\u306e\u305f\u3081\u3001VoIP GW \u306f\u4e21\u65b9\u306e SIP \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u5bfe\u3057\u3066 UA \u3068\u3057\u3066\u632f\u308b\u821e\u3046\u7279\u6b8a\u306a UA \u3068\u306a\u308b\u3002\u3053\u308c\u3092 ",(0,a.kt)("inlineCode",{parentName:"p"},"B2BUA(Back-to-Back User Agent)"),"\u3068\u547c\u3076\u3002"),(0,a.kt)("p",null,"B2BUA \u306b\u3064\u3044\u3066\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3261#section-6"},"RFC3261, Section 6")," \u3067\u5b9a\u7fa9\u3055\u308c\u3066\u304a\u308a\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u304b\u308c\u3066\u3044\u308b"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Back-to-Back User Agent"),"A back-to-back user agent (B2BUA) is a logical entity that receives a request and processes it as a user agent server (UAS). In order to determine how the request should be answered, it acts as a user agent client (UAC) and generates requests. Unlike a proxy server, it maintains dialog state and must participate in all requests sent on the dialogs it has established. Since it is a concatenation of a UAC and UAS, no explicit definitions are needed for its behavior."),(0,a.kt)("p",null,"\u3055\u3089\u306b\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u751f\u6210\u3092\u4ef2\u4ecb\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001RTP \u30d1\u30b1\u30c3\u30c8\u306e\u4e2d\u7d99\u3082\u884c\u3046 SBC(Session Border Controller)\u3068\u547c\u3070\u308c\u308b\u6a5f\u80fd\u3082\u6301\u3064\u3002"),(0,a.kt)("p",null,"VoIP GW \u306f\u516c\u8846 IP \u96fb\u8a71\u7db2\u3068\u81ea\u793e\u306e\u5185\u7dda IP \u96fb\u8a71\u7db2\u306e\u305d\u308c\u305e\u308c\u306e SIP \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u5bfe\u3057\u3066\u3001SIP URI \u3068 IP \u30a2\u30c9\u30ec\u30b9\u306e\u5bfe\u5fdc\u4ed8\u3051\u3092\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\n\u305d\u306e\u305f\u3081\u3001\u305d\u308c\u305e\u308c\u306e SIP \u30b5\u30fc\u30d0\u306b\u5bfe\u3057\u3066",(0,a.kt)("inlineCode",{parentName:"p"},"REGISTER"),"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,a.kt)("p",null,"\u901a\u4fe1\u306e\u6d41\u308c\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VoIP GW\u306e\u901a\u4fe1\u6d41\u308c",src:r(69257).Z,title:"VoIP GW\u306e\u901a\u4fe1\u6d41\u308c",width:"779",height:"629"})),(0,a.kt)("h3",{id:"nat-\u306b\u8d77\u56e0\u3059\u308b\u554f\u984c"},"NAT \u306b\u8d77\u56e0\u3059\u308b\u554f\u984c"),(0,a.kt)("p",null,"\u81ea\u793e\u96fb\u8a71\u6a5f\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u306e\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 IP \u30a2\u30c9\u30ec\u30b9\u3067\u3042\u308a\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u7db2\u3092\u7d4c\u7531\u3057\u3001\nSIP \u3092\u4f7f\u3063\u305f\u901a\u8a71\u3092\u884c\u3046\u5834\u5408\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 IP \u30a2\u30c9\u30ec\u30b9\u304b\u3089\u30b0\u30ed\u30fc\u30d0\u30eb IP \u30a2\u30c9\u30ec\u30b9\u306b\u5909\u63db\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,a.kt)("p",null,"NAT \u3092\u4f7f\u7528\u3057\u3066\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 IP \u30a2\u30c9\u30ec\u30b9\u3092\u30b0\u30ed\u30fc\u30d0\u30eb IP \u30a2\u30c9\u30ec\u30b9\u306b\u5909\u63db\u3057\u305f\u5834\u5408\u306b\u3001\u901a\u8a71\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u751f\u6210\u3067\u304d\u306a\u3044\u554f\u984c\u304c\u767a\u751f\u3059\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5e73\u621026\u5e74 \u5348\u5f8c2 \u56f33",src:r(23755).Z,title:"\u5e73\u621026\u5e74 \u5348\u5f8c2 \u56f33",width:"1110",height:"786"})),(0,a.kt)("p",null,"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30b9\u30da\u30b7\u30e3\u30ea\u30b9\u30c8\u306e\u5e73\u6210 26 \u5e74\u5348\u5f8c 2 \u554f 2 \u306b\u304a\u3044\u3066\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u751f\u6210\u958b\u59cb\u6642\u306e INVITE \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u4f8b\u304c\u767b\u5834\u3057\u3066\u3044\u308b\u3002\n",(0,a.kt)("a",{parentName:"p",href:"/docs/Network/sip"},"SIP"),"\u3067\u3082\u8aac\u660e\u3057\u3066\u3044\u308b\u901a\u308a\u767a\u4fe1\u5143\u30fb\u5148\u306e IP \u30a2\u30c9\u30ec\u30b9\u306e\u3084\u308a\u3068\u308a\u306f SIP \u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u901a\u3057\u3066\u884c\u306a\u3063\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u4e0a\u8a18\u306e\u56f3\u306e\u767a\u4fe1\u5143\u306e IP \u30a2\u30c9\u30ec\u30b9\u306b\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 IP \u30a2\u30c9\u30ec\u30b9\u304c\u683c\u7d0d\u3055\u308c\u3001\u901a\u8a71\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SIP NAT\u304c\u3042\u308b\u5834\u5408\u306eIP\u9077\u79fb",src:r(57033).Z,title:"SIP NAT\u304c\u3042\u308b\u5834\u5408\u306eIP\u9077\u79fb",width:"593",height:"534"})),(0,a.kt)("p",null,"SIP \u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 IP \u30a2\u30c9\u30ec\u30b9\u3068\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u7740\u547c\u5074 UA \u304b\u3089\u306e RTP \u30d1\u30b1\u30c3\u30c8\u304c\u767a\u547c\u5074\u306b\u5c4a\u304b\u306a\u3044\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u554f\u984c\u306f VoIP GW \u306e NAT \u30c8\u30e9\u30d0\u30fc\u30b5\u30eb\u6a5f\u80fd\u3092\u4f7f\u3046\u3053\u3068\u3067\u89e3\u6c7a\u3059\u308b\u3002\n\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001VoIP GW \u306f\u5185\u7dda IP \u96fb\u8a71\u7db2\u5074\u304b\u3089\u53d7\u3051\u53d6\u3063\u305f SIP \u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767a\u4fe1\u5143 IP \u30a2\u30c9\u30ec\u30b9\u3092 VoIP GW \u81ea\u8eab\u306e\u30b0\u30ed\u30fc\u30d0\u30eb IP \u30a2\u30c9\u30ec\u30b9\u306b\u5909\u63db\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u516c\u8846 IP \u96fb\u8a71\u7db2\u5074(\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074)\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 IP \u3068\u30b0\u30ed\u30fc\u30d0\u30eb IP \u306e\u5909\u63db\u306e\u904e\u7a0b\u306f\u7701\u7565\u3059\u308b\u3002\u9053\u4e2d\u306b NAT \u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u3067\u3082 STUN \u30b5\u30fc\u30d0\u7b49\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u30b0\u30ed\u30fc\u30d0\u30eb IP \u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VoIP GW\u306eNAT\u30c8\u30e9\u30d0\u30fc\u30b5\u30eb",src:r(66047).Z,title:"VoIP GW\u306eNAT\u30c8\u30e9\u30d0\u30fc\u30b5\u30eb",width:"831",height:"701"})))}d.isMDXComponent=!0},23755:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/H26-2-2-figure-3-8c5c2803bc6dcd64c87678e036e46fe0.png"},69257:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/voip-network-1.drawio-bf375519cca372bec31499b4d733b550.svg"},57033:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/voip-network-2.drawio-f0819070a65fd1863e8ef3fb195896c9.svg"},66047:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/voip-network-3.drawio-55d9b42f8de2af7c37d24aacc25a5bfd.svg"}}]);