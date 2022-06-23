"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3473],{3905:function(t,e,r){r.d(e,{kt:function(){return c}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),u=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=u(r),m=n,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return r?a.createElement(g,l(l({ref:e},d),{},{components:r})):a.createElement(g,l({ref:e},d))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6176:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],s={},o="Vault Risks",u={unversionedId:"risks/vault-risks",id:"risks/vault-risks",title:"Vault Risks",description:"Yearn\u2019s vaults can be exposed to multiple strategies. Each additional strategy increases diversification but also increases the probability that a strategy could lead to capital losses.",source:"@site/docs/resources/risks/vault-risks.md",sourceDirName:"risks",slug:"/risks/vault-risks",permalink:"/resources/risks/vault-risks",draft:!1,tags:[],version:"current",lastUpdatedAt:1626620985,formattedLastUpdatedAt:"7/18/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"Strategy Risks",permalink:"/resources/risks/strategy-risks"},next:{title:"Delegated Funding DAO Vaults",permalink:"/resources/r-and-d/delegated-funding-dao-vaults"}},p={},d=[],c={toc:d};function m(t){var e=t.components,r=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vault-risks"},"Vault Risks"),(0,i.kt)("p",null,"Yearn\u2019s vaults can be exposed to multiple strategies. Each additional strategy increases diversification but also increases the probability that a strategy could lead to capital losses."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Risk"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"Multi-sig approves a strategy that leads to losses")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Technological"),(0,i.kt)("td",{parentName:"tr",align:null},"Smart contract risks increase with the number of strategies and protocols")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Market"),(0,i.kt)("td",{parentName:"tr",align:null},"Liquidation of leveraged strategies due to sudden price falls")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Lower token prices lead to lower yields in naked liquidity mining strategies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"High gas fees to deposit or withdraw adversely impact yield")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"High gas fees cause yield on strategies to be less than expected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Deposits too low to benefit from multiple strategies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operational"),(0,i.kt)("td",{parentName:"tr",align:null},"Optimal mix of strategies not maintained")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Liquidations because debt positions were managed incorrectly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Safe Farming Committee interprets code incorrectly in new yield farm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Yearn website suffers outage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,i.kt)("td",{parentName:"tr",align:null},"Incorrect price feed leads to liquidation in leveraged strategy")))))}m.isMDXComponent=!0}}]);