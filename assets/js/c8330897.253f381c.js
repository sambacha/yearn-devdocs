"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[8374],{3905:(e,t,r)=>{r.d(t,{kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),v=a,y=u["".concat(s,".").concat(v)]||u[v]||c[v]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},i="FAQ",l={unversionedId:"products/ycrv/faq",id:"products/ycrv/faq",title:"FAQ",description:"Launch and Migration",source:"@site/docs/getting-started/products/ycrv/faq.md",sourceDirName:"products/ycrv",slug:"/products/ycrv/faq",permalink:"/getting-started/products/ycrv/faq",draft:!1,tags:[],version:"current",lastUpdatedAt:1664825078,formattedLastUpdatedAt:"10/3/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Interface Guide",permalink:"/getting-started/products/ycrv/guide"},next:{title:"Overview",permalink:"/getting-started/products/yeth/overview"}},s={},d=[{value:"Launch and Migration",id:"launch-and-migration",level:2},{value:"When will yCRV launch?",id:"when-will-ycrv-launch",level:3},{value:"Should I migrate now from yveCRV and yvBOOST?",id:"should-i-migrate-now-from-yvecrv-and-yvboost",level:3},{value:"What happens to yveCRV and yvBOOST?",id:"what-happens-to-yvecrv-and-yvboost",level:3},{value:"Will I get rewards if I don&#39;t migrate?",id:"will-i-get-rewards-if-i-dont-migrate",level:3},{value:"Is there a deadline for migration?",id:"is-there-a-deadline-for-migration",level:3},{value:"How are Curve DAO governance votes handled in this system?",id:"how-are-curve-dao-governance-votes-handled-in-this-system",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"launch-and-migration"},"Launch and Migration"),(0,a.kt)("h3",{id:"when-will-ycrv-launch"},"When will yCRV launch?"),(0,a.kt)("p",null,"Contracts are live, you can find relevant addresses ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/getting-started/products/ycrv/overview#addresses"},"here"),"."),(0,a.kt)("h3",{id:"should-i-migrate-now-from-yvecrv-and-yvboost"},"Should I migrate now from yveCRV and yvBOOST?"),(0,a.kt)("p",null,"Yes! Incentives have moved to the new system. yveCRV and yvBOOST will no longer receive yield."),(0,a.kt)("h3",{id:"what-happens-to-yvecrv-and-yvboost"},"What happens to yveCRV and yvBOOST?"),(0,a.kt)("p",null,"yveCRV and yvBOOST are being deprecated, and there is a migration path available to users. yCRV can be minted 1:1 from yveCRV. yCRV can be minted ",(0,a.kt)("inlineCode",{parentName:"p"},"1 * pricePerShare")," of yvBOOST at the time of migration. There will be a migration zap available to all users to make this easy."),(0,a.kt)("h3",{id:"will-i-get-rewards-if-i-dont-migrate"},"Will I get rewards if I don't migrate?"),(0,a.kt)("p",null,"No. After the cut-over date, all incentives will move to the new yCRV system."),(0,a.kt)("h3",{id:"is-there-a-deadline-for-migration"},"Is there a deadline for migration?"),(0,a.kt)("p",null,"Nope! You can migrate anytime in the future. Contracts are trustless and migrations cannot be stopped."),(0,a.kt)("h3",{id:"how-are-curve-dao-governance-votes-handled-in-this-system"},"How are Curve DAO governance votes handled in this system?"),(0,a.kt)("p",null,"The Yearn ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xfeb4acf3df3cdea7399794d0869ef76a6efaff52"},"governance multisig")," will retain the sole ability to cast votes in the Curve DAO. They will do so with close consultation with the ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/cryptorisksteam"},"Crypto Risk Team")," and other Curve DAO stakeholders to ensure risk is properly assessed and all votes promote the long-term interests of the Curve DAO. While it is possible that the yCRV system can be upgraded to someday grant these voting rights to yCRV token holders (only if enforcing a sufficiently long lock time), there is no current plan to do so."))}p.isMDXComponent=!0}}]);