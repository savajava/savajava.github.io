(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,b=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ba":function(t,e,n){},"0911":function(t,e,n){},3443:function(t,e,n){},"4a0b":function(t,e,n){"use strict";n("01ba")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),s=Object(i["g"])("i",{class:"bi bi-moon-fill"},null,-1),a=[s],o=Object(i["g"])("i",{class:"bi bi-brightness-high-fill"},null,-1),c=[o],r={class:"body"},l={class:"row"},d={class:"col-12"},u=Object(i["g"])("div",{class:"d-block d-lg-none col-2"},null,-1),b={key:0,class:"col-12 col-md-8 col-xl-4"},g={class:"form-card mb-2 p-4"},h={class:"col-12"},O=Object(i["g"])("div",{class:"d-block d-lg-none col-2"},null,-1),j={key:0,class:"col-12"};function m(t,e,n,s,o,m){var f=this,p=Object(i["r"])("Header"),v=Object(i["r"])("LoadingSpinner"),y=Object(i["r"])("Search"),k=Object(i["r"])("Alert"),D=Object(i["r"])("dividend-output"),x=Object(i["r"])("Footer");return Object(i["m"])(),Object(i["f"])("section",{class:Object(i["k"])([{light:m.isLight},"body"])},[Object(i["i"])(p),Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[m.isLight?(Object(i["m"])(),Object(i["f"])("button",{key:0,onClick:e[0]||(e[0]=function(){return m.toggleDarkMode&&m.toggleDarkMode.apply(m,arguments)}),class:"btn btn-secondary toggle-dark"},a)):(Object(i["m"])(),Object(i["f"])("button",{key:1,onClick:e[1]||(e[1]=function(){return m.toggleDarkMode&&m.toggleDarkMode.apply(m,arguments)}),class:"btn btn-secondary toggle-dark"},c))]})),_:1}),Object(i["g"])("div",r,[Object(i["g"])("div",l,[Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[Object(i["g"])("div",d,[t.$store.getters.isLoading&!t.$store.getters.dataLoaded?(Object(i["m"])(),Object(i["d"])(v,{key:0})):Object(i["e"])("",!0)])]})),_:1}),u,Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[f.checkIsError.error||t.$store.getters.isLoading||t.$store.getters.dataLoaded?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("div",b,[Object(i["g"])("div",g,[Object(i["g"])("div",h,[Object(i["i"])(y,{onSubmitForm:m.loadData},null,8,["onSubmitForm"])])]),Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[t.$store.getters.dataLoaded||t.$store.getters.isLoading||!t.$store.getters.checkIsDev?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["d"])(k,{key:0,onClick:m.loadData},null,8,["onClick"]))]})),_:1}),O]))]})),_:1}),Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[!t.$store.getters.dataLoaded&&f.checkIsError.error||t.$store.getters.dataLoaded&&!t.$store.getters.isLoading&&""!=f.$store.getters.loadData["counter"]?(Object(i["m"])(),Object(i["f"])("div",j,[Object(i["i"])(D,{data:o.FilteredResult,error:f.checkIsError.error},null,8,["data","error"])])):Object(i["e"])("",!0)]})),_:1})])]),Object(i["i"])(x)],2)}var f={class:"pt-4 px-3 px-lg-4"},p=Object(i["g"])("h1",{class:"mb-0 text-center text-lg-start"},[Object(i["g"])("span",null,"SavaJava"),Object(i["g"])("sup",null,"™")],-1),v=Object(i["g"])("p",{class:"text-center text-lg-start"},[Object(i["g"])("em",null,"Global Stocks Financial Data at your fingertips")],-1);function y(t,e){return Object(i["m"])(),Object(i["f"])("header",f,[Object(i["i"])(i["b"],{mode:"out-in",name:"slide-fade",appear:""},{default:Object(i["x"])((function(){return[p]})),_:1}),Object(i["i"])(i["b"],{mode:"out-in",name:"alert",appear:""},{default:Object(i["x"])((function(){return[v]})),_:1})])}var k=n("6b0d"),D=n.n(k);const x={},L=D()(x,[["render",y]]);var I=L,$=function(t){return Object(i["o"])("data-v-3b231ebe"),t=t(),Object(i["n"])(),t},A=$((function(){return Object(i["g"])("div",{class:"px-3 px-lg-4 py-2"},[Object(i["g"])("div",{class:"row"},[Object(i["g"])("div",{class:"col-12 col-lg-6 order-1 order-lg-2"},[Object(i["g"])("div",{class:"text-center d-sm-flex align-items-center justify-content-center justify-content-lg-end"},[Object(i["g"])("p",{class:"d-block my-2 me-2"}),Object(i["g"])("div",{class:"kb-club"},[Object(i["g"])("a",{target:"blank",href:"https://512kb.club"},[Object(i["g"])("span",{class:"kb-club-no-bg"},"512KB Club"),Object(i["g"])("span",{class:"kb-club-bg"},"Blue Team")])])])]),Object(i["g"])("div",{class:"col-12 col-lg-6 text-center text-lg-start order-2 order-lg-1"},[Object(i["g"])("p",{class:"my-2"},"2022 © RUBANERO")])])],-1)})),S=[A];function M(t,e,n,s,a,o){var c=this;return Object(i["m"])(),Object(i["d"])(i["b"],{mode:"out-in",name:"slide-fade",appear:""},{default:Object(i["x"])((function(){return[Object(i["g"])("footer",{class:Object(i["k"])({"dividend-page":c.isMobile&&c.$store.getters.dataLoaded&&"Dividend"===c.$store.getters.loadData["Stock Type"]||!c.isMobile&&c.$store.getters.dataLoaded&&"Dividend"===c.$store.getters.loadData["Stock Type"]||c.isMobile&&c.$store.getters.dataLoaded&&"Non-Dividend"===c.$store.getters.loadData["Stock Type"],"":!c.$store.getters.dataLoaded||!c.isMobile&&c.$store.getters.dataLoaded&&"Non-Dividend"===c.$store.getters.loadData["Stock Type"]})},S,2)]})),_:1})}var w={data:function(){return{isMobile:null}},mounted:function(){window.addEventListener("resize",this.checkIsMobile)},unmounted:function(){window.removeEventListener("resize",this.checkIsMobile)},computed:{dataLoaded:function(){return this.$store.getters.dataLoaded}},methods:{checkIsMobile:function(){console.log(window.innerWidth),window.innerWidth<992?this.isMobile=!0:this.isMobile=!1}}};n("fe24");const E=D()(w,[["render",M],["__scopeId","data-v-3b231ebe"]]);var F=E,P={class:"d-flex align-items-center justify-content-start py-1"},T=Object(i["g"])("p",{class:"arrow mb-0"},[Object(i["g"])("strong",null,"ATTENTION ⚠")],-1),V={class:"message no-select"},C={class:"d-flex align-items-center py-1"},N={class:"mb-0"},q=Object(i["h"])("In case if you don't have API Key, do contact the "),R=Object(i["h"])(" to get your key and start accessing! ");function _(t,e,n,s,a,o){return Object(i["m"])(),Object(i["f"])("div",{class:"alert p-2",onClick:e[1]||(e[1]=function(){return o.openAlert&&o.openAlert.apply(o,arguments)})},[Object(i["g"])("div",P,[Object(i["g"])("p",{class:"arrow no-select mb-0 me-2",style:Object(i["l"])({transform:"rotateZ(".concat(this.alertIsOpen?"0deg":"90deg",")")})}," ▶ ",4),T]),Object(i["y"])(Object(i["g"])("div",V,[Object(i["g"])("div",C,[Object(i["g"])("p",N,[q,Object(i["g"])("a",{onClick:e[0]||(e[0]=Object(i["z"])((function(){return o.navigateUrl&&o.navigateUrl.apply(o,arguments)}),["stop","prevent"]))},"ADMIN"),R])])],512),[[i["v"],!o.alertIsOpen]])])}var K={data:function(){return{URL:"https://www.linkedin.com/in/rajaruban-rajindram/"}},computed:{alertIsOpen:function(){return this.$store.getters.alertIsOpen}},methods:{navigateUrl:function(){window.location.href=this.URL},openAlert:function(){return this.alertIsOpen?this.$store.dispatch("openAlert",!1):this.$store.dispatch("openAlert",!0)}}};const U=D()(K,[["render",_]]);var Y=U,B=function(t){return Object(i["o"])("data-v-2021a028"),t=t(),Object(i["n"])(),t},H={class:"d-inline-block"},Q=Object(i["h"])(" for "),G=Object(i["h"])(" Details "),z=B((function(){return Object(i["g"])("strong",null,"For Developers",-1)})),J=[z],W=B((function(){return Object(i["g"])("strong",null,"Back to Web Search",-1)})),X=[W],Z=B((function(){return Object(i["g"])("option",{selected:"",disabled:"",value:"$"},"Choose Stock Exchange...",-1)})),tt=B((function(){return Object(i["g"])("option",{value:""},"US - NASDAQ [eg: MSFT or AAPL]",-1)})),et=B((function(){return Object(i["g"])("option",{value:".MY"},"Malaysia - KLSE [eg: 4715 or 4162]",-1)})),nt=B((function(){return Object(i["g"])("option",{value:".SG"},"Singapore - SGX [eg: Z74 or D05]",-1)})),it=[Z,tt,et,nt],st=B((function(){return Object(i["g"])("option",{selected:"",disabled:"",value:"$"},"Choose Stock Exchange...",-1)})),at=B((function(){return Object(i["g"])("option",{value:".nasdaqusa"},"US - NASDAQ",-1)})),ot=B((function(){return Object(i["g"])("option",{value:".klsemalaysia"},"Malaysia - KLSE",-1)})),ct=B((function(){return Object(i["g"])("option",{value:".sgxsingapore"},"Singapore - SGX",-1)})),rt=[st,at,ot,ct],lt={class:"input-group"},dt=B((function(){return Object(i["g"])("span",null,[Object(i["g"])("i",{class:"bi bi-search"})],-1)})),ut=[dt],bt=B((function(){return Object(i["g"])("span",null,[Object(i["g"])("i",{class:"bi bi-search"})],-1)})),gt=[bt],ht={key:0,class:"form-validation-alert mb-0 mt-2"},Ot={key:0},jt={key:1},mt={key:2},ft=Object(i["h"])(" and proceed! ");function pt(t,e,n,s,a,o){return Object(i["m"])(),Object(i["f"])(i["a"],null,[Object(i["i"])(i["b"],{mode:"out-in",name:"slide-fade",appear:""},{default:Object(i["x"])((function(){return[Object(i["g"])("h4",H,[Object(i["g"])("span",null,Object(i["s"])(a.showStockName?"Searching ":"Search "),1),Q,Object(i["g"])("span",null,Object(i["s"])(a.showStockName?a.stockInput.toUpperCase()+"'s":"Stock's"),1),G])]})),_:1}),Object(i["g"])("div",null,[Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[o.isDev?(Object(i["m"])(),Object(i["f"])("button",{key:1,class:"btn btn-secondary mb-2 w-100",onClick:e[1]||(e[1]=function(){return o.setIsDevState&&o.setIsDevState.apply(o,arguments)})},X)):(Object(i["m"])(),Object(i["f"])("button",{key:0,class:"btn btn-secondary mb-2 w-100",onClick:e[0]||(e[0]=function(){return o.setIsDevState&&o.setIsDevState.apply(o,arguments)})},J))]})),_:1})]),Object(i["g"])("form",{onSubmit:e[14]||(e[14]=Object(i["z"])((function(){}),["prevent"]))},[Object(i["g"])("div",null,[Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[o.isDev?Object(i["y"])((Object(i["m"])(),Object(i["f"])("select",{key:0,class:"form-control form-select mb-2",required:"","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.selectExchange=t}),onChange:e[3]||(e[3]=function(){return o.formValidity&&o.formValidity.apply(o,arguments)})},it,544)),[[i["t"],a.selectExchange]]):Object(i["y"])((Object(i["m"])(),Object(i["f"])("select",{key:1,class:"form-control form-select mb-2",required:"","onUpdate:modelValue":e[4]||(e[4]=function(t){return a.selectExchange=t}),onChange:e[5]||(e[5]=function(){return o.formValidity&&o.formValidity.apply(o,arguments)})},rt,544)),[[i["t"],a.selectExchange]])]})),_:1}),Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[o.isDev?Object(i["y"])((Object(i["m"])(),Object(i["f"])("input",{key:0,class:"form-control security-key mb-2",placeholder:"Enter API Key here...",type:"text","onUpdate:modelValue":e[6]||(e[6]=function(t){return a.securityKey=t}),onChange:e[7]||(e[7]=function(){return o.formValidity&&o.formValidity.apply(o,arguments)})},null,544)),[[i["u"],a.securityKey,void 0,{trim:!0}]]):Object(i["e"])("",!0)]})),_:1}),Object(i["g"])("div",lt,[Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[o.isDev?Object(i["y"])((Object(i["m"])(),Object(i["f"])("input",{key:0,class:"form-control",placeholder:"Search using stock quotes only...",type:"text","onUpdate:modelValue":e[8]||(e[8]=function(t){return a.stockInput=t}),onChange:e[9]||(e[9]=function(){return o.formValidity&&o.formValidity.apply(o,arguments)})},null,544)),[[i["u"],a.stockInput,void 0,{trim:!0}]]):Object(i["y"])((Object(i["m"])(),Object(i["f"])("input",{key:1,class:"form-control",placeholder:"Search stock name or quote...",type:"text","onUpdate:modelValue":e[10]||(e[10]=function(t){return a.stockInput=t}),onChange:e[11]||(e[11]=function(){return o.formValidity&&o.formValidity.apply(o,arguments)})},null,544)),[[i["u"],a.stockInput,void 0,{trim:!0}]])]})),_:1}),Object(i["i"])(i["b"],{mode:"out-in",name:"pop",appear:""},{default:Object(i["x"])((function(){return[o.isDev?(Object(i["m"])(),Object(i["f"])("button",{key:0,type:"submit",class:"btn btn-secondary",onClick:e[12]||(e[12]=function(){return o.navigateURL&&o.navigateURL.apply(o,arguments)})},ut)):(Object(i["m"])(),Object(i["f"])("button",{key:1,type:"submit",class:"btn btn-secondary",onClick:e[13]||(e[13]=function(){return o.navigateURL&&o.navigateURL.apply(o,arguments)})},gt))]})),_:1})]),Object(i["g"])("div",null,[a.formIsValid?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("p",ht,[this.stockExchangeValidity?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("span",Ot,"Choose Stock Exchange")),this.secKeyValidity?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("span",jt,"Key in your API Key")),this.stockQuoteValidity?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("span",mt,"Key in the Stock Quote")),ft]))])])],32)],64)}n("99af");var vt={data:function(){return{showStockName:!1,stockInput:"",selectExchange:"$",securityKey:"",formIsValid:!0,stockExchangeValidity:!0,secKeyValidity:!0,stockQuoteValidity:!0,URL:"",url1:"https://nasdaq-dividend-search-api.herokuapp.com/dividend",url2:"https://savajava-api.herokuapp.com/search"}},computed:{isDev:function(){return this.$store.getters.checkIsDev}},methods:{formValidity:function(){"$"===this.selectExchange||null===this.selectExchange||void 0===this.selectExchange?this.stockExchangeValidity=!1:this.stockExchangeValidity=!0,""===this.stockInput||null===this.stockInput||void 0===this.stockInput?(this.stockQuoteValidity=!1,this.showStockName=!1):(this.stockQuoteValidity=!0,this.showStockName=!0),""===this.securityKey||null===this.securityKey||void 0===this.securityKey?(this.secKeyValidity=!1,this.$store.dispatch("openAlert",!1)):(this.secKeyValidity=!0,this.$store.dispatch("openAlert",!0)),this.isDev?this.stockExchangeValidity&&this.stockQuoteValidity&&this.secKeyValidity?this.formIsValid=!0:this.formIsValid=!1:(this.secKeyValidity=!0,this.stockExchangeValidity&&this.stockQuoteValidity?this.formIsValid=!0:this.formIsValid=!1)},setIsDevState:function(){this.$store.dispatch("switchSearchMode"),this.formIsValid=!0,this.showStockName=!1,this.stockInput="",this.selectExchange="$",this.securityKey="",this.formValidity()},navigateURL:function(){return this.formValidity(),this.$store.getters.checkIsDev&&this.formIsValid?window.location.href="".concat(this.url1,"/").concat(this.securityKey,"/").concat(this.stockInput+this.selectExchange):!this.$store.getters.checkIsDev&&this.formIsValid?(this.URL="".concat(this.url2,"/").concat(this.stockInput.toLowerCase()+this.selectExchange.toLowerCase()),this.$store.dispatch("loadData",this.URL),this.$emit("submit-form")):void 0}}};n("bd5f");const yt=D()(vt,[["render",pt],["__scopeId","data-v-2021a028"]]);var kt=yt,Dt=(n("ac1f"),n("5319"),n("5b81"),n("b680"),function(t){return Object(i["o"])("data-v-10e7a616"),t=t(),Object(i["n"])(),t}),xt={key:0,class:"row"},Lt={class:"col-12 col-lg-6 col-xl-4"},It={class:"col-12"},$t={class:"d-block d-lg-flex justify-content-center justify-content-lg-start align-items-center mb-4"},At={class:"img-wrapper mb-3 mb-lg-0 mx-lg-0 me-lg-3"},St=["src"],Mt={class:"text-center text-lg-start"},wt={class:"title"},Et={key:0,class:"col-12 col-lg-6 col-xxl-4"},Ft=Dt((function(){return Object(i["g"])("h3",{class:"text-center text-lg-start"},"Dividend Analysis",-1)})),Pt={class:"table table-hover"},Tt={key:0},Vt=Dt((function(){return Object(i["g"])("th",null,"Dividend Paying Frequency",-1)})),Ct={key:1},Nt=Dt((function(){return Object(i["g"])("th",null,"Forward Annual Dividend Yield",-1)})),qt={key:2},Rt=Dt((function(){return Object(i["g"])("th",null,"Forward Average Yield",-1)})),_t=Dt((function(){return Object(i["g"])("th",null,"All-Time Average Yield Based on Current price",-1)})),Kt=Dt((function(){return Object(i["g"])("th",null,"All-Time Average Dividend per Payout",-1)})),Ut=Dt((function(){return Object(i["g"])("th",null,"Total Dividend Payment Count",-1)})),Yt={key:3},Bt=Dt((function(){return Object(i["g"])("th",null,"Last Dividend Paid",-1)})),Ht=Dt((function(){return Object(i["g"])("th",null,"Current Dividend Paying Status",-1)})),Qt={class:"d-flex"},Gt=["src"],zt=Dt((function(){return Object(i["g"])("th",null,"Dividend Default Strike",-1)})),Jt={class:"d-flex"},Wt=["src"],Xt={key:4},Zt=Dt((function(){return Object(i["g"])("th",null,"Debt to Income Ratio",-1)})),te={class:"d-flex"},ee=["src"],ne={key:1},ie={class:"col-12 col-lg-6 col-xxl-4"},se=Dt((function(){return Object(i["g"])("h3",{class:"text-center text-lg-start"},"Fundamentals",-1)})),ae={class:"table table-hover"},oe=Dt((function(){return Object(i["g"])("th",null,"Sector",-1)})),ce=Dt((function(){return Object(i["g"])("th",null,"Current Price",-1)})),re=Dt((function(){return Object(i["g"])("th",null,"Trailing PE",-1)})),le=Dt((function(){return Object(i["g"])("th",null,"Total Cash Balance (mrq)",-1)})),de=Dt((function(){return Object(i["g"])("th",null,"Book Value",-1)})),ue=Dt((function(){return Object(i["g"])("th",null,"Net Income (ttm)",-1)})),be=Dt((function(){return Object(i["g"])("th",null,"Total Debt (mrq)",-1)})),ge={key:0},he=Dt((function(){return Object(i["g"])("th",null,"Debt to Income Ratio",-1)})),Oe={class:"d-flex"},je=["src"],me={key:2,class:"col-12"},fe={class:"remark text-center text-lg-start"},pe={key:3},ve={key:4,class:"col-12 col-lg-6 col-xxl-4"},ye=Dt((function(){return Object(i["g"])("h3",{class:"text-center text-lg-start"},"Dividend History",-1)})),ke={class:"table table-hover table-vertical"},De=Dt((function(){return Object(i["g"])("thead",null,[Object(i["g"])("tr",null,[Object(i["g"])("th",null,"Date Announcement"),Object(i["g"])("th",null,"Dividend Amount")])],-1)})),xe=["id"],Le={key:1,class:"row"},Ie={class:"col-12 col-lg-6 col-xl-4"},$e={class:"col-12"};function Ae(t,e,n,s,a,o){var c=Object(i["r"])("invalid-stocks");return Object(i["m"])(),Object(i["f"])("div",null,[200===this.$store.getters.loadData.Status?(Object(i["m"])(),Object(i["f"])("div",xt,[Object(i["g"])("div",Lt,[Object(i["g"])("button",{class:"w-100 btn btn-secondary back-button mb-5",onClick:e[0]||(e[0]=function(){return o.backToMain&&o.backToMain.apply(o,arguments)})},"Back")]),Object(i["g"])("div",It,[Object(i["g"])("div",$t,[Object(i["g"])("div",At,[Object(i["g"])("img",{class:"logo",src:a.logo,onerror:"javascript:this.src='https://www.freeiconspng.com/uploads/no-image-icon-4.png'"},null,8,St)]),Object(i["g"])("h2",Mt,[Object(i["g"])("span",wt,[Object(i["g"])("strong",null,Object(i["s"])(this.data["Counter"].replaceAll(",","").replaceAll(".","")),1)])])])]),this.dividends?(Object(i["m"])(),Object(i["f"])("div",Et,[Ft,Object(i["g"])("table",Pt,[a.isYearsMissing?(Object(i["m"])(),Object(i["f"])("tr",Tt,[Vt,Object(i["g"])("td",null,Object(i["s"])("inconsistent"===a.frequency?a.frequencyFallback:a.frequency),1)])):Object(i["e"])("",!0),a.isYearsMissing?(Object(i["m"])(),Object(i["f"])("tr",Ct,[Nt,Object(i["g"])("td",null,Object(i["s"])(this.divYield),1)])):Object(i["e"])("",!0),a.isYearsMissing?(Object(i["m"])(),Object(i["f"])("tr",qt,[Rt,Object(i["g"])("td",null,Object(i["s"])(o.setAvgYield(this.data["Dividend Analysis"]["All-Time Average Dividend per Payout"])),1)])):Object(i["e"])("",!0),Object(i["g"])("tr",null,[_t,Object(i["g"])("td",null,Object(i["s"])(this.data["Dividend Analysis"]["All-Time Average Yield Based on Current price"]),1)]),Object(i["g"])("tr",null,[Kt,Object(i["g"])("td",null,Object(i["s"])(this.data["Dividend Analysis"]["All-Time Average Dividend per Payout"]),1)]),Object(i["g"])("tr",null,[Ut,Object(i["g"])("td",null,Object(i["s"])(this.data["Dividend Analysis"]["Total Dividend Payment Count"]),1)]),a.isYearsMissing?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("tr",Yt,[Bt,Object(i["g"])("td",null,Object(i["s"])(this.data["Dividend Analysis"]["Last Dividend Paid since(years)"].toFixed(1))+" years ago",1)])),Object(i["g"])("tr",null,[Ht,Object(i["g"])("td",{class:Object(i["k"])({red:!a.divPayingStatus,green:a.divPayingStatus})},[Object(i["g"])("div",Qt,[Object(i["g"])("img",{class:"star",src:a.divPayingStatusPic},null,8,Gt),Object(i["h"])(" "+Object(i["s"])(a.divPayingStatus?"ACTIVE":"INACTIVE"),1)])],2)]),Object(i["g"])("tr",null,[zt,Object(i["g"])("td",{class:Object(i["k"])({green:0===a.mode,orange:a.mode>0&&a.mode<=2,red:a.mode>=3})},[Object(i["g"])("div",Jt,[isNaN(a.mode)?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("img",{key:0,class:"star",src:a.star},null,8,Wt)),Object(i["h"])(" "+Object(i["s"])(0===a.mode?"CLEAN":"")+" "+Object(i["s"])(1===a.mode?a.mode+" hit":"")+" "+Object(i["s"])(a.mode>=2?a.mode+" hits":"")+" "+Object(i["s"])(isNaN(a.mode)?"N/A":""),1)])],2)]),"N/A"!==a.debt&&"N/A"!==a.income&&"Negative Income"!==a.debtMode?(Object(i["m"])(),Object(i["f"])("tr",Xt,[Zt,Object(i["g"])("td",{class:Object(i["k"])({green:a.debtMode<1,orange:a.debtMode>=1&&a.debtMode<1.5,red:a.debtMode>=1.5})},[Object(i["g"])("div",te,[Object(i["g"])("img",{class:"star",src:t.debtModePic},null,8,ee),Object(i["h"])(" "+Object(i["s"])(o.debtToIncomeRatio(this.debt,this.income))+"x ",1)])],2)])):Object(i["e"])("",!0)])])):Object(i["e"])("",!0),this.dividends?(Object(i["m"])(),Object(i["f"])("hr",ne)):Object(i["e"])("",!0),Object(i["g"])("div",ie,[se,Object(i["g"])("table",ae,[Object(i["g"])("tr",null,[oe,Object(i["g"])("td",null,Object(i["s"])(this.data.Fundamentals.Sector),1)]),Object(i["g"])("tr",null,[ce,Object(i["g"])("td",null,Object(i["s"])(this.data["Last Done Price"]),1)]),Object(i["g"])("tr",null,[re,Object(i["g"])("td",null,Object(i["s"])(this.data.Fundamentals["Trailing PE"]),1)]),Object(i["g"])("tr",null,[le,Object(i["g"])("td",null,Object(i["s"])(this.data.Fundamentals["Total Cash Balance (mrq)"]),1)]),Object(i["g"])("tr",null,[de,Object(i["g"])("td",null,Object(i["s"])(this.data.Fundamentals["Book Value"]),1)]),Object(i["g"])("tr",null,[ue,Object(i["g"])("td",null,Object(i["s"])(this.data.Fundamentals["Net Income (ttm)"]),1)]),Object(i["g"])("tr",null,[be,Object(i["g"])("td",null,Object(i["s"])(this.data.Fundamentals["Total Debt (mrq)"]),1)]),this.dividends||"N/A"===a.debt||"N/A"===a.income||"Negative Income"===a.debtMode?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("tr",ge,[he,Object(i["g"])("td",{class:Object(i["k"])({green:a.debtMode<1,orange:a.debtMode>=1&&a.debtMode<1.5,red:a.debtMode>=1.5})},[Object(i["g"])("div",Oe,[Object(i["g"])("img",{class:"star",src:t.debtModePic},null,8,je),Object(i["h"])(" "+Object(i["s"])(o.debtToIncomeRatio(this.debt,this.income))+"x ",1)])],2)]))])]),this.dividends?Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("div",me,[Object(i["g"])("h4",fe,Object(i["s"])(this.data["Counter"].replaceAll(",","").replaceAll(".",""))+" doesn't pays dividend.",1)])),this.dividends?(Object(i["m"])(),Object(i["f"])("hr",pe)):Object(i["e"])("",!0),this.dividends?(Object(i["m"])(),Object(i["f"])("div",ve,[ye,Object(i["g"])("table",ke,[De,(Object(i["m"])(!0),Object(i["f"])(i["a"],null,Object(i["q"])(this.dividendHistory,(function(t){return Object(i["m"])(),Object(i["f"])("tbody",{key:t.id,id:t.id},[Object(i["g"])("tr",null,[Object(i["g"])("td",null,Object(i["s"])(t["Annoucement Date"]),1),Object(i["g"])("td",null,Object(i["s"])(t["Dividend Amount"]),1)])],8,xe)})),128))])])):Object(i["e"])("",!0)])):(Object(i["m"])(),Object(i["f"])("div",Le,[Object(i["g"])("div",Ie,[Object(i["g"])("button",{class:"w-100 btn btn-secondary back-button mb-5",onClick:e[1]||(e[1]=function(){return o.backToMain&&o.backToMain.apply(o,arguments)})},"Back")]),Object(i["g"])("div",$e,[Object(i["i"])(c,{data:this.data.counter,error:this.error},null,8,["data","error"])])]))])}n("caad"),n("2532"),n("498a");var Se=function(t){return Object(i["o"])("data-v-7165f9d3"),t=t(),Object(i["n"])(),t},Me={key:0,class:"text-center text-lg-start"},we=Object(i["h"])(" Oops, seems like you have entered "),Ee=Se((function(){return Object(i["g"])("span",{class:"remark"},"INVALID",-1)})),Fe=Object(i["h"])(" stock name or stock quote, "),Pe=Se((function(){return Object(i["g"])("br",null,null,-1)})),Te=Object(i["h"])(" There is no record found for "),Ve={class:"output"},Ce=Object(i["h"])("! "),Ne={key:1,class:"text-center text-lg-start"},qe=Se((function(){return Object(i["g"])("h2",{class:"remark"},"404",-1)})),Re=Object(i["h"])("Aww snap, check your connection and try again later! "),_e=[qe,Re],Ke={key:2,class:"text-center text-lg-start"},Ue=Se((function(){return Object(i["g"])("h2",{class:"remark"},"503",-1)})),Ye=Object(i["h"])("Looks like our server needs a nap time, perhaps catch a run and come back later! "),Be=[Ue,Ye];function He(t,e,n,s,a,o){return Object(i["m"])(),Object(i["f"])("div",null,[this.error?this.error&&404===this.$store.getters.isError.status?(Object(i["m"])(),Object(i["f"])("h3",Ne,_e)):this.error&&503===this.$store.getters.isError.status?(Object(i["m"])(),Object(i["f"])("h3",Ke,Be)):Object(i["e"])("",!0):(Object(i["m"])(),Object(i["f"])("h3",Me,[we,Ee,Fe,Pe,Te,Object(i["g"])("span",Ve,Object(i["s"])(this.data),1),Ce]))])}var Qe={props:["data","error"],computed:{checkIsError:function(){return this.$store.getters.isError}}};n("4a0b");const Ge=D()(Qe,[["render",He],["__scopeId","data-v-7165f9d3"]]);var ze=Ge,Je={props:["error"],components:{InvalidStocks:ze},data:function(){return{data:[],logo:"",dividends:!1,isYearsMissing:!1,dividendHistory:[],status:"",divYield:"",totalDiv:"",star:"",mode:"",divPayingStatus:!1,divPayingStatusPic:"",debtPayingStatusPic:"",frequency:"",serverResponse:null,frequencyValues:{Monthly:12,Quarterly:4,"Bi-Annually":2,Annually:1},frequencyFallback:"",debt:"",debtMode:"",income:""}},created:function(){this.getData(),this.setDivYield(),this.isError()},updated:function(){this.isError()},computed:{checkIsError:function(){return this.$store.getters.isError.error}},methods:{isError:function(){this.serverResponse=this.$store.getters.isError},alphaToIntConverter:function(t){var e=parseFloat(t.replace("K","").replace("M","").replace("B","").replace("T",""));return t.includes("K")?1e3*e:t.includes("M")?1e6*e:t.includes("B")?1e9*e:t.includes("T")?1e12*e:"N/A"},debtToIncomeRatio:function(t,e){return this.alphaToIntConverter(e)>0?(this.alphaToIntConverter(t)/this.alphaToIntConverter(e)).toFixed(2):"Negative Income"},getData:function(){if(this.data=this.$store.getters.loadData,this.dividends="Dividend"===this.data["Stock Type"],200===this.data.Status&&"Dividend"===this.data["Stock Type"])return this.logo=this.$store.getters.loadData["Company Logo"],this.dividends="Dividend"===this.data["Stock Type"],this.dividendHistory=this.data["Dividend History"],this.mode=+this.data["Dividend Suspension Count"],this.divPayingStatus=this.data["Dividend Analysis"]["Actively Paying"],this.frequency=this.data["Dividend Frequency"].trim(),this.debt=this.data.Fundamentals["Total Debt (mrq)"],this.income=this.data.Fundamentals["Net Income (ttm)"],this.debtMode=this.debtToIncomeRatio(this.debt,this.income),this.debtMode<1?this.debtModePic="https://img.icons8.com/flat-round/128/star--v1.png":this.debtMode>=1&&this.debtMode<1.5?this.debtModePic="https://img.icons8.com/fluency/96/box-important.png":this.debtModePic="https://img.icons8.com/external-others-iconmarket/128/external-danger-traffic-signs-others-iconmarket-2.png",this.dividends&&(this.isYearsMissing=this.$store.getters.loadData["Dividend Analysis"]["Actively Paying"]),0===this.mode?this.star="https://img.icons8.com/flat-round/128/star--v1.png":this.mode>0&&this.mode<=2?this.star="https://img.icons8.com/fluency/96/box-important.png":this.star="https://img.icons8.com/external-others-iconmarket/128/external-danger-traffic-signs-others-iconmarket-2.png",this.divPayingStatus?this.divPayingStatusPic="https://img.icons8.com/flat-round/128/star--v1.png":this.divPayingStatusPic="https://img.icons8.com/external-others-iconmarket/128/external-danger-traffic-signs-others-iconmarket-2.png";200===this.data.Status&&"Non-Dividend"===this.data["Stock Type"]&&(this.logo=this.$store.getters.loadData["Company Logo"],this.debt=this.data.Fundamentals["Total Debt (mrq)"],this.income=this.data.Fundamentals["Net Income (ttm)"],this.debtMode=this.debtToIncomeRatio(this.debt,this.income),this.debtMode<1?this.debtModePic="https://img.icons8.com/flat-round/128/star--v1.png":this.debtMode>=1&&this.debtMode<1.5?this.debtModePic="https://img.icons8.com/fluency/96/box-important.png":this.debtModePic="https://img.icons8.com/external-others-iconmarket/128/external-danger-traffic-signs-others-iconmarket-2.png"),404===this.data.Status&&(this.status=this.data.status)},setAvgYield:function(t){return"Monthly"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalAvgDiv=12*parseFloat(t)),"Quarterly"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalAvgDiv=4*parseFloat(t)),"Bi-Annually"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalAvgDiv=2*parseFloat(t)),"Annually"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalAvgDiv=1*parseFloat(t)),this.divAvgYield=(this.totalAvgDiv/this.$store.getters.loadData["Last Done Price"]*100).toFixed(2)+"%"},setDivYield:function(){if("Monthly"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalDiv=12*parseFloat(this.$store.getters.loadData["Dividend History"][0]["Dividend Amount"])),"Quarterly"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalDiv=4*parseFloat(this.$store.getters.loadData["Dividend History"][0]["Dividend Amount"])),"Bi-Annually"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalDiv=2*parseFloat(this.$store.getters.loadData["Dividend History"][0]["Dividend Amount"])),"Annually"===this.$store.getters.loadData["Dividend Frequency"]&&(this.totalDiv=1*parseFloat(this.$store.getters.loadData["Dividend History"][0]["Dividend Amount"])),"Inconsistent"===this.$store.getters.loadData["Dividend Frequency"]){var t=(new Date(this.$store.getters.loadData["Dividend History"][0]["Annoucement Date"])-new Date(this.$store.getters.loadData["Dividend History"][1]["Annoucement Date"]))/24192e5,e=function(){if(t)return t>2&&t<6?"Quarterly":2===t?"Bi-Annually":12===t?"Monthly":1===t?"Annually":"Inconsistent"};this.frequencyFallback=e(),this.totalDiv=parseFloat(this.$store.getters.loadData["Dividend History"][0]["Dividend Amount"])*this.frequencyValues[e()]}return this.divYield=(this.totalDiv/this.$store.getters.loadData["Last Done Price"]*100).toFixed(2)+"%"},backToMain:function(){return this.data=[],this.$store.commit("loadData",[]),this.error?(this.$store.dispatch("isError",{error:!1,status:null}),this.$store.dispatch("dataLoaded",!1)):this.$store.dispatch("dataLoaded",!1)}}};n("cff7");const We=D()(Je,[["render",Ae],["__scopeId","data-v-10e7a616"]]);var Xe=We,Ze=function(t){return Object(i["o"])("data-v-728dae14"),t=t(),Object(i["n"])(),t},tn={class:"text-center centered"},en=Ze((function(){return Object(i["g"])("span",{class:"visually-hidden"},"Loading...",-1)})),nn=[en],sn=Ze((function(){return Object(i["g"])("span",{class:"visually-hidden"},"Loading...",-1)})),an=[sn],on=Ze((function(){return Object(i["g"])("span",{class:"visually-hidden"},"Loading...",-1)})),cn=[on];function rn(t,e,n,s,a,o){return Object(i["m"])(),Object(i["f"])("div",tn,[Object(i["g"])("div",{style:{"--j":1},class:Object(i["k"])([{"text-dark":t.$store.getters.checkIsLight,"text-light":!t.$store.getters.checkIsLight},"mx-1 spinner-grow one"]),role:"status"},nn,2),Object(i["g"])("div",{style:{"--j":2},class:Object(i["k"])([{"text-dark":t.$store.getters.checkIsLight,"text-light":!t.$store.getters.checkIsLight},"mx-1 spinner-grow two"]),role:"status"},an,2),Object(i["g"])("div",{style:{"--j":3},class:Object(i["k"])([{"text-dark":t.$store.getters.checkIsLight,"text-light":!t.$store.getters.checkIsLight},"mx-1 spinner-grow three"]),role:"status"},cn,2)])}var ln={computed:{isLight:function(){return this.$store.getters.checkIsLight}}};n("6ce2");const dn=D()(ln,[["render",rn],["__scopeId","data-v-728dae14"]]);var un=dn,bn={name:"SavaJava Global Stocks Dividend Reliability & Analysis Toolkit",components:{Header:I,Footer:F,Alert:Y,Search:kt,DividendOutput:Xe,LoadingSpinner:un},data:function(){return{FilteredResult:[],isError:null}},mounted:function(){this.statusReport()},updated:function(){this.statusReport()},computed:{isLight:function(){return this.$store.getters.checkIsLight},isDev:function(){return this.$store.getters.checkIsDev},getData:function(){return this.$store.getters.loadData},isLoading:function(){return this.$store.getters.isLoading},dataLoaded:function(){return this.$store.getters.dataLoaded},checkIsError:function(){return this.$store.getters.isError}},methods:{statusReport:function(){this.isError=this.$store.getters.isError,console.log(this.checkIsError)},toggleDarkMode:function(){var t=document.querySelector("body");this.$store.dispatch("toggleLightMode"),t.classList.toggle("light")},loadData:function(){return 404==this.$store.getters.loadData.status?this.FilteredResult=this.$store.getters.loadData:"Non-Dividend"===this.$store.getters.loadData[0]["Stock Type"]?this.FilteredResult=this.$store.getters.loadData[0]:"Dividend"===this.$store.getters.loadData["Stock Type"]?this.FilteredResult=this.$store.getters.loadData:void 0}}};n("8969");const gn=D()(bn,[["render",m]]);var hn=gn,On=n("5502"),jn=n("bc3a"),mn=n.n(jn),fn=Object(On["a"])({state:function(){return{isDev:!1,isLight:!1,alertIsOpen:!1,data:[],isLoading:!1,dataLoaded:!1,serverResponse:{error:!1,status:""}}},mutations:{switchSearchMode:function(t){t.isDev=!t.isDev},toggleLightMode:function(t){t.isLight=!t.isLight},openAlert:function(t,e){t.alertIsOpen=e},isLoading:function(t,e){t.isLoading=e},dataLoaded:function(t,e){t.dataLoaded=e},loadData:function(t,e){t.data=e},isError:function(t,e){t.serverResponse=e}},actions:{switchSearchMode:function(t,e){t.commit("switchSearchMode",e)},toggleLightMode:function(t){t.commit("toggleLightMode")},openAlert:function(t,e){t.commit("openAlert",e)},isLoading:function(t,e){t.commit("isLoading",e)},loadData:function(t,e){t.commit("isLoading",!0),t.commit("dataLoaded",!1),mn.a.get(e).then((function(e){t.commit("loadData",e.data),t.commit("isLoading",!1),t.commit("dataLoaded",!0)})).catch((function(e){console.log(e),(e.message.includes(404)||e.message.includes("Network Error"))&&t.commit("isError",{error:!0,status:404}),e.message.includes(503)&&t.commit("isError",{error:!0,status:503}),t.commit("isLoading",!1),t.commit("dataLoaded",!1)}))},dataLoaded:function(t,e){t.commit("dataLoaded",e)},isError:function(t,e){t.commit("isLoading",!0),t.commit("isError",e),t.commit("isLoading",!1)}},getters:{checkIsDev:function(t){return t.isDev},checkIsLight:function(t){return t.isLight},alertIsOpen:function(t){return t.alertIsOpen},loadData:function(t){return t.data},isLoading:function(t){return t.isLoading},dataLoaded:function(t){return t.dataLoaded},isError:function(t){return t.serverResponse}}}),pn=fn,vn=Object(i["c"])(hn);vn.use(pn),vn.mount("#app")},"6ce2":function(t,e,n){"use strict";n("f1b4")},8969:function(t,e,n){"use strict";n("b534")},"8e25":function(t,e,n){},b534:function(t,e,n){},bd5f:function(t,e,n){"use strict";n("3443")},cff7:function(t,e,n){"use strict";n("0911")},f1b4:function(t,e,n){},fe24:function(t,e,n){"use strict";n("8e25")}});
//# sourceMappingURL=app.48a0e018.js.map