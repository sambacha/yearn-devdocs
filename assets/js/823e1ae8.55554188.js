"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5438],{3905:function(e,t,n){n.d(t,{kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="How to Understand Vault APYs",p={unversionedId:"guides/how-apy-works",id:"guides/how-apy-works",title:"How to Understand Vault APYs",description:"It is a standard on Defi Space to estimate returns through APY and APR, and Yearn also does so. However, different calculations depend on the yVault underlying asset",source:"@site/docs/getting-started/guides/how-apy-works.md",sourceDirName:"guides",slug:"/guides/how-apy-works",permalink:"/getting-started/guides/how-apy-works",draft:!1,tags:[],version:"current",lastUpdatedAt:1654088437,formattedLastUpdatedAt:"6/1/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"How to Understand yveCRV",permalink:"/getting-started/guides/how-to-understand-yveCRV"},next:{title:"Token Addresses",permalink:"/getting-started/products/token-addresses"}},u={},c=[{value:"Non-curve assets",id:"non-curve-assets",level:2},{value:"Curve assets",id:"curve-assets",level:2},{value:"Notes",id:"notes",level:3},{value:"Infographic",id:"infographic",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-understand-vault-apys"},"How to Understand Vault APYs"),(0,o.kt)("p",null,"It is a standard on Defi Space to estimate returns through ",(0,o.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/a/apy.asp"},"APY")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/a/apr.asp"},"APR"),", and Yearn also does so. However, different calculations depend on the yVault underlying asset: one for ",(0,o.kt)("a",{parentName:"p",href:"https://curve.fi/"},"Curve.Finance")," LP Tokens and another for non-curve assets. For a simpler version, check ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/iearn/how-yearn-calculates-estimated-returns-apy-b4fd5b687bf9"},"our APYs medium article")," or the infographic at the end of the page. The following sections will show how each is calculated:"),(0,o.kt)("h2",{id:"non-curve-assets"},"Non-curve assets"),(0,o.kt)("p",null,"The estimated returns are displayed on yearn.finance this way:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/z2zbme8yXIquVgZjFqSFyz5RmRmxBX2-LEjBvCjSSdBeBYUC9HnfWrnJD5KDYjw4O_Do9wc8lVis0z01rG8HD8YLdvuQ3N9Yzy3hFArQ5DV5I76jgrPPCtUdKDF86933YRARcUOfoXOYPStetw",alt:"image"})),(0,o.kt)("p",null,"Where the definition of each one is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Gross APR"),": Vault total APR before deducted fees"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Net APY"),": Vault considered APY. If the network is ETH mainnet, this will show the Monthly APY, as the harvests are not that frequent. On the other hand, if the network is Fantom, then the Weekly API is chosen, as the harvests are more frequent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Weekly APY"),": Calculated considering the yVault price share difference in the last seven days"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Monthly APY"),": Calculated considering the yVault price share difference in the last 30 days"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inception APY"),": Calculated considering the yVault price share difference since inception")),(0,o.kt)("p",null,"The actual code can be found on this repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-exporter/tree/master/yearn/apy"},"https://github.com/yearn/yearn-exporter/tree/master/yearn/apy")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/1ubZF6PCD7BAd7lXM6sGHmTXmgAdzs-IjLkPN-mtsPgpnvXWZS7E4RPznBrmpXIKOaV7JAP_iZlpih0avNvTKYMU9xeuWQ8GLhcj4QmcB00v6wXXveVPHTq_O81TumVXDiykOqcpovW4YZNvEQ",alt:"image"})),(0,o.kt)("p",null,"The file that contains the calculation for the most recent version of the yVaults is this one: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-exporter/blob/master/yearn/apy/v2.py"},"https://github.com/yearn/yearn-exporter/blob/master/yearn/apy/v2.py")),(0,o.kt)("h2",{id:"curve-assets"},"Curve assets"),(0,o.kt)("p",null,"The estimated returns are displayed on yearn.finance this way:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/dvUnhactHIG6KEFHTpw77axZfgEldRjsmYd-qv5sYbx1_wp_A_Pjy_0f-ZzmFa-GxqkLjcjUZqhSfOtmA9ajqbPf_L7urk0SiQmRLXNQSYZ3mHhp_bMZTJKcK0_z9tsRZHsaZ4n_6nbEaISMtA",alt:"image"})),(0,o.kt)("p",null,"Where the definition of each one is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pool APY"),": APY is calculated considering the change in the \u201cvirtual price\u201d of the curve.finance LP token in the last seven days."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bonus Rewards APR"),": Rewards are usually given by the token owner. IE frax curve pools also offer frax as a reward. The APY if the token were sold at the current price."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base CRV APR"),":The APR from the CRV emissions this curve pool gets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Boost"),": Multiplier from staked veCRV, ranging from 1x to 2.5x"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Convex APR"),": APR when the yVault strategy is depositing the curve.finance LP tokens into ",(0,o.kt)("a",{parentName:"li",href:"https://www.convexfinance.com/"},"Convex Finance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Gross APR"),": Vault total APR before deducted fees"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Net APY"),": Vault current APY, after deducting the fees")),(0,o.kt)("p",null,"The actual code can be found on this repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-exporter/tree/master/yearn/apy/curve"},"https://github.com/yearn/yearn-exporter/tree/master/yearn/apy/curve")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/0RcgjElU5oJ1831Ku1yyiwCuSDjjujo3SZjVhVdD8Ve596nB7Hedv9UHUIf_VwkLomCaO0XULTaghTKDLYJ1Uba_kcivY78s2tAA18iwnTi1k__LXqZVOqWKzI2Hj2a5zgte0DaYusDTaNOZ8w",alt:"image"})),(0,o.kt)("p",null,"The file that contains the calculation for the most recent version of the yVaults is this one: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-exporter/blob/master/yearn/apy/curve/simple.py"},"https://github.com/yearn/yearn-exporter/blob/master/yearn/apy/curve/simple.py")),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the active strategy of a yVault uses Convex Finance, and the streaming of the rewards is frozen at Convex, Yearn.finance Net APY will show 0% until the streaming is resumed.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/H4VRhz8.png",alt:"image"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"More details about rewards streaming on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.convexfinance.com/"},"Convex Finance"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When there is a spike of transactions in a pool, the \u201cPool APY\u201d will reflect it for a week, as the fees will be added to the \u201cvirtual price\u201d of this pool, and the calculation takes the last seven days into account.")),(0,o.kt)("h2",{id:"infographic"},"Infographic"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/uT6VW9f.png",alt:"image"})))}d.isMDXComponent=!0}}]);