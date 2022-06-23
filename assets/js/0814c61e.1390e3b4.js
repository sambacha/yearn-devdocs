"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[6007],{3905:function(t,e,n){n.d(e,{kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2214:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},d="Strategy Risks",s={unversionedId:"risks/strategy-risks",id:"risks/strategy-risks",title:"Strategy Risks",description:"Yearn earns income from lending, liquidity mining and trading fees. This income is often increased using leverage.",source:"@site/docs/resources/risks/strategy-risks.md",sourceDirName:"risks",slug:"/risks/strategy-risks",permalink:"/resources/risks/strategy-risks",draft:!1,tags:[],version:"current",lastUpdatedAt:1650096661,formattedLastUpdatedAt:"4/16/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Risk Scores",permalink:"/resources/risks/risk-score"},next:{title:"Vault Risks",permalink:"/resources/risks/vault-risks"}},p={},c=[{value:"Lending",id:"lending",level:2},{value:"Liquidity Mining",id:"liquidity-mining",level:2},{value:"Trading Fees",id:"trading-fees",level:2},{value:"Leverage",id:"leverage",level:2}],m={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"strategy-risks"},"Strategy Risks"),(0,i.kt)("p",null,"Yearn earns income from lending, liquidity mining and trading fees. This income is often increased using leverage."),(0,i.kt)("h2",{id:"lending"},"Lending"),(0,i.kt)("p",null,"Collateralized lending is when an asset is lent in return for a yield paid by the borrower. The borrower has to lock up a greater amount of collateral than the value of the loan to incentivize the repayment of the loan."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Risk"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"Admin key holders change lending protocol adversely, e.g. change the interest rate model in such a way that discourages borrowing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Technological"),(0,i.kt)("td",{parentName:"tr",align:null},"Smart contract risk of interacting with lending protocols")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Market"),(0,i.kt)("td",{parentName:"tr",align:null},"Low demand for borrowing the asset causes low lending yields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Collateral price falls causing the lending protocol to become undercollateralized")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Lent assets become unavailable to withdraw because the utilization ratio becomes too high")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operational"),(0,i.kt)("td",{parentName:"tr",align:null},"Delays or inability to withdraw assets from the lending protocol in an emergency")))),(0,i.kt)("h2",{id:"liquidity-mining"},"Liquidity Mining"),(0,i.kt)("p",null,"Liquidity mining involves interacting with a protocol to earn the protocol\u2019s native tokens. The interaction can be as simple as staking an asset in a protocol\u2019s staking contract, or more complicated such as staking SNX to mint sUSD in Synthetix to earn SNX rewards."),(0,i.kt)("p",null,"In most cases the liquidity mined token is exchanged for the Want token on an AMM."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Risk"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"Admin key holders change protocol adversely, e.g. introduce penalties for withdrawals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Technological"),(0,i.kt)("td",{parentName:"tr",align:null},"Smart contract risk of rewards contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Smart contract risk of AMM used to exchange the liquidity mined token for the Want token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Market"),(0,i.kt)("td",{parentName:"tr",align:null},"Fall in price of token being farmed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Liquidity of liquidity mined token on AMM is reduced or removed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operational Risk"),(0,i.kt)("td",{parentName:"tr",align:null},"Delays or inability to withdraw liquidity in an emergency")))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533"},"Safe Farming Committee")," decides which protocols are secure."),(0,i.kt)("h2",{id:"trading-fees"},"Trading Fees"),(0,i.kt)("p",null,"Trading fees are earned in Automated Market Makers (AMMs) by providing liquidity."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Risk"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"Admin key holders change protocol adversely, e.g. reduce rewards paid to liquidity providers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Technological"),(0,i.kt)("td",{parentName:"tr",align:null},"Smart contract risk of AMM (e.g. Curve Finance, Sushiswap or Uniswap)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Market"),(0,i.kt)("td",{parentName:"tr",align:null},"Trading volumes reduce leading to lower fees")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Impermanent loss"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://academy.binance.com/en/articles/impermanent-loss-explained"},"Impermanent loss")," due to the pool\u2019s token prices changing relative to each other")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operational Risk"),(0,i.kt)("td",{parentName:"tr",align:null},"Delays or inability to withdraw liquidity from the AMM in an emergency")))),(0,i.kt)("h2",{id:"leverage"},"Leverage"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Risk"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"Admin key holders change the lending protocol adversely")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Technological"),(0,i.kt)("td",{parentName:"tr",align:null},"Smart contract risk of lending protocol (Aave, Compound Finance, Maker, Unit protocol)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Market"),(0,i.kt)("td",{parentName:"tr",align:null},"Risk that the debt is liquidated due to a price fall")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Risk that income is lower than the cost of the flash loan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,i.kt)("td",{parentName:"tr",align:null},"Incorrect price feed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"liquidation penalties")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operational Risk"),(0,i.kt)("td",{parentName:"tr",align:null},"Operational risk of managing debt positions")))))}u.isMDXComponent=!0}}]);