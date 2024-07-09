"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6327],{20946:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(19350);const o={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(e){return(0,n.Z)().get(`/daemon/help/${e}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(e,t){return(0,n.Z)().get(`/daemon/getrawtransaction/${e}/${t}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(e){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark(e){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockCount(){return(0,n.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(e,t){return(0,n.Z)().get(`/daemon/validateaddress/${t}`,{headers:{zelidauth:e}})},getWalletInfo(e){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listFluxNodeConf(e){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start(e){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:e}})},restart(e){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon(e){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon(e,t){return(0,n.Z)().get(`/daemon/rescanblockchain/${t}`,{headers:{zelidauth:e}})},getBlock(e,t){return(0,n.Z)().get(`/daemon/getblock/${e}/${t}`)},tailDaemonDebug(e){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}},21210:(e,t,a)=>{a.d(t,{Z:()=>c});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"toastification"},[t("div",{staticClass:"d-flex align-items-start"},[t("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[t("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),t("div",{staticClass:"d-flex flex-grow-1"},[t("div",[e.title?t("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${e.variant}`,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?t("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),t("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():t("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},o=[],r=a(47389);const i={components:{BAvatar:r.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=i;var l=a(1001),d=(0,l.Z)(s,n,o,!1,null,"22d964ca",null);const c=d.exports},36327:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=function(){var e=this,t=e._self._c;return t("div",[t("b-card",[t("h6",{staticClass:"mb-1"},[e._v(" Click the 'Download Debug File' button to download the log. This may take a few minutes depending on file size. ")]),t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-download",variant:"outline-primary",size:"md"}},[e._v(" Download Debug File ")]),e.total&&e.downloaded?t("div",{staticClass:"d-flex",staticStyle:{width:"300px"}},[t("b-card-text",{staticClass:"mt-1 mb-0 mr-auto"},[e._v(" "+e._s(`${(e.downloaded/1e6).toFixed(2)} / ${(e.total/1e6).toFixed(2)}`)+" MB - "+e._s(`${(e.downloaded/e.total*100).toFixed(2)}%`)+" ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon cancel-button",attrs:{variant:"danger",size:"sm"},on:{click:e.cancelDownload}},[e._v(" x ")])],1):e._e(),t("b-popover",{ref:"popover",attrs:{target:"start-download",triggers:"click",show:e.downloadPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.downloadPopoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v("Are You Sure?")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onDownloadClose}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onDownloadClose}},[e._v(" Cancel ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onDownloadOk}},[e._v(" Download Debug ")])],1)])],1)]),t("b-card",[t("h6",{staticClass:"mb-1"},[e._v(" Click the 'Show Debug File' button to view the last 100 lines of the Daemon debug file. ")]),t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-tail",variant:"outline-primary",size:"md"}},[e._v(" Show Debug File ")]),e.callResponse.data.message?t("b-form-textarea",{staticClass:"mt-1",attrs:{plaintext:"","no-resize":"",rows:"30",value:e.callResponse.data.message}}):e._e(),t("b-popover",{ref:"popover",attrs:{target:"start-tail",triggers:"click",show:e.tailPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.tailPopoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v("Are You Sure?")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onTailClose}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onTailClose}},[e._v(" Cancel ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onTailOk}},[e._v(" Show Debug ")])],1)])],1)])],1)},o=[],r=(a(98858),a(61318),a(33228),a(86855)),i=a(15193),s=a(53862),l=a(333),d=a(64206),c=a(21210),u=a(20266),g=a(20946);const p={components:{BCard:r._,BButton:i.T,BPopover:s.x,BFormTextarea:l.y,BCardText:d.j,ToastificationContent:c.Z},directives:{Ripple:u.Z},data(){return{downloadPopoverShow:!1,tailPopoverShow:!1,abortToken:{},downloaded:0,total:0,callResponse:{status:"",data:{}}}},methods:{cancelDownload(){this.abortToken.cancel("User download cancelled"),this.downloaded="",this.total=""},onDownloadClose(){this.downloadPopoverShow=!1},async onDownloadOk(){const e=this;this.downloadPopoverShow=!1,this.abortToken=g.Z.cancelToken();const t=localStorage.getItem("zelidauth"),a={headers:{zelidauth:t},responseType:"blob",onDownloadProgress(t){e.downloaded=t.loaded,e.total=t.total},cancelToken:e.abortToken.token},n=await g.Z.justAPI().get("/flux/daemondebug",a),o=window.URL.createObjectURL(new Blob([n.data])),r=document.createElement("a");r.href=o,r.setAttribute("download","debug.log"),document.body.appendChild(r),r.click()},onTailClose(){this.tailPopoverShow=!1},async onTailOk(){this.tailPopoverShow=!1;const e=localStorage.getItem("zelidauth");g.Z.tailDaemonDebug(e).then((e=>{"error"===e.data.status?this.$toast({component:c.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=e.data.status,this.callResponse.data=e.data.data)})).catch((e=>{this.$toast({component:c.Z,props:{title:"Error while trying to get latest debug of Daemon",icon:"InfoIcon",variant:"danger"}}),console.log(e)}))}}},m=p;var h=a(1001),v=(0,h.Z)(m,n,o,!1,null,null,null);const b=v.exports},50926:(e,t,a)=>{var n=a(23043),o=a(69985),r=a(6648),i=a(44201),s=i("toStringTag"),l=Object,d="Arguments"===r(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(a){}};e.exports=n?r:function(e){var t,a,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=c(t=l(e),s))?a:d?r(t):"Object"===(n=r(t))&&o(t.callee)?"Arguments":n}},62148:(e,t,a)=>{var n=a(98702),o=a(72560);e.exports=function(e,t,a){return a.get&&n(a.get,t,{getter:!0}),a.set&&n(a.set,t,{setter:!0}),o.f(e,t,a)}},23043:(e,t,a)=>{var n=a(44201),o=n("toStringTag"),r={};r[o]="z",e.exports="[object z]"===String(r)},34327:(e,t,a)=>{var n=a(50926),o=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},21500:e=>{var t=TypeError;e.exports=function(e,a){if(e<a)throw new t("Not enough arguments");return e}},98858:(e,t,a)=>{var n=a(11880),o=a(68844),r=a(34327),i=a(21500),s=URLSearchParams,l=s.prototype,d=o(l.append),c=o(l["delete"]),u=o(l.forEach),g=o([].push),p=new s("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&n(l,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var n=[];u(this,(function(e,t){g(n,{key:t,value:e})})),i(t,1);var o,s=r(e),l=r(a),p=0,m=0,h=!1,v=n.length;while(p<v)o=n[p++],h||o.key===s?(h=!0,c(this,o.key)):m++;while(m<v)o=n[m++],o.key===s&&o.value===l||d(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},61318:(e,t,a)=>{var n=a(11880),o=a(68844),r=a(34327),i=a(21500),s=URLSearchParams,l=s.prototype,d=o(l.getAll),c=o(l.has),u=new s("a=1");!u.has("a",2)&&u.has("a",void 0)||n(l,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var n=d(this,e);i(t,1);var o=r(a),s=0;while(s<n.length)if(n[s++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},33228:(e,t,a)=>{var n=a(67697),o=a(68844),r=a(62148),i=URLSearchParams.prototype,s=o(i.forEach);n&&!("size"in i)&&r(i,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);