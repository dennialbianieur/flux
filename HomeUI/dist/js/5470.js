"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[5470],{20946:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(19350);const n={help(){return(0,r.Z)().get("/daemon/help")},helpSpecific(t){return(0,r.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,r.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,r.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,r.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,r.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,r.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,r.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,r.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,r.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,r.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,r.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,r.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,r.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,r.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockCount(){return(0,r.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,r.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,r.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,r.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,r.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,r.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,r.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,r.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,r.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,r.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,r.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,r.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,r.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}},39308:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(19350);const n={softUpdateFlux(t){return(0,r.Z)().get("/flux/softupdateflux",{headers:{zelidauth:t}})},softUpdateInstallFlux(t){return(0,r.Z)().get("/flux/softupdatefluxinstall",{headers:{zelidauth:t}})},updateFlux(t){return(0,r.Z)().get("/flux/updateflux",{headers:{zelidauth:t}})},hardUpdateFlux(t){return(0,r.Z)().get("/flux/hardupdateflux",{headers:{zelidauth:t}})},rebuildHome(t){return(0,r.Z)().get("/flux/rebuildhome",{headers:{zelidauth:t}})},updateDaemon(t){return(0,r.Z)().get("/flux/updatedaemon",{headers:{zelidauth:t}})},reindexDaemon(t){return(0,r.Z)().get("/flux/reindexdaemon",{headers:{zelidauth:t}})},updateBenchmark(t){return(0,r.Z)().get("/flux/updatebenchmark",{headers:{zelidauth:t}})},getFluxVersion(){return(0,r.Z)().get("/flux/version")},broadcastMessage(t,e){const a=e,n={headers:{zelidauth:t}};return(0,r.Z)().post("/flux/broadcastmessage",JSON.stringify(a),n)},connectedPeers(){return(0,r.Z)().get(`/flux/connectedpeers?timestamp=${Date.now()}`)},connectedPeersInfo(){return(0,r.Z)().get(`/flux/connectedpeersinfo?timestamp=${Date.now()}`)},incomingConnections(){return(0,r.Z)().get(`/flux/incomingconnections?timestamp=${Date.now()}`)},incomingConnectionsInfo(){return(0,r.Z)().get(`/flux/incomingconnectionsinfo?timestamp=${Date.now()}`)},addPeer(t,e){return(0,r.Z)().get(`/flux/addpeer/${e}`,{headers:{zelidauth:t}})},removePeer(t,e){return(0,r.Z)().get(`/flux/removepeer/${e}`,{headers:{zelidauth:t}})},removeIncomingPeer(t,e){return(0,r.Z)().get(`/flux/removeincomingpeer/${e}`,{headers:{zelidauth:t}})},adjustCruxID(t,e){return(0,r.Z)().get(`/flux/adjustcruxid/${e}`,{headers:{zelidauth:t}})},adjustKadena(t,e,a){return(0,r.Z)().get(`/flux/adjustkadena/${e}/${a}`,{headers:{zelidauth:t}})},adjustRouterIP(t,e){return(0,r.Z)().get(`/flux/adjustrouterip/${e}`,{headers:{zelidauth:t}})},adjustBlockedPorts(t,e){const a={blockedPorts:e},n={headers:{zelidauth:t}};return(0,r.Z)().post("/flux/adjustblockedports",a,n)},adjustAPIPort(t,e){return(0,r.Z)().get(`/flux/adjustapiport/${e}`,{headers:{zelidauth:t}})},adjustBlockedRepositories(t,e){const a={blockedRepositories:e},n={headers:{zelidauth:t}};return(0,r.Z)().post("/flux/adjustblockedrepositories",a,n)},getCruxID(){const t={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/cruxid",t)},getKadenaAccount(){const t={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/kadena",t)},getRouterIP(){const t={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/routerip",t)},getBlockedPorts(){const t={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/blockedports",t)},getAPIPort(){const t={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/apiport",t)},getBlockedRepositories(){const t={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/blockedrepositories",t)},getMarketPlaceURL(){return(0,r.Z)().get("/flux/marketplaceurl")},getZelid(){const t={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/zelid",t)},getStaticIpInfo(){return(0,r.Z)().get("/flux/staticip")},restartFluxOS(t){const e={headers:{zelidauth:t,"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/restart",e)},tailFluxLog(t,e){return(0,r.Z)().get(`/flux/tail${t}log`,{headers:{zelidauth:e}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}},21210:(t,e,a)=>{a.d(e,{Z:()=>c});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},n=[],s=a(47389);const o={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=o;var l=a(1001),d=(0,l.Z)(i,r,n,!1,null,"22d964ca",null);const c=d.exports},54746:(t,e,a)=>{a.d(e,{Z:()=>m});var r=function(){var t=this,e=t._self._c;return e("b-popover",{ref:"popover",attrs:{target:`${t.target}`,triggers:"click blur",show:t.show,placement:"auto",container:"my-container","custom-class":`confirm-dialog-${t.width}`},on:{"update:show":function(e){t.show=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("span",[t._v(t._s(t.title))]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(e){t.show=!1}}},[e("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[e("div",{staticClass:"text-center"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.show=!1}}},[t._v(" "+t._s(t.cancelButton)+" ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.confirm()}}},[t._v(" "+t._s(t.confirmButton)+" ")])],1)])},n=[],s=a(15193),o=a(53862),i=a(20266);const l={components:{BButton:s.T,BPopover:o.x},directives:{Ripple:i.Z},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data(){return{show:!1}},methods:{confirm(){this.show=!1,this.$emit("confirm")}}},d=l;var c=a(1001),u=(0,c.Z)(d,r,n,!1,null,null,null);const m=u.exports},17389:(t,e,a)=>{a.d(e,{Z:()=>f});var r=function(){var t=this,e=t._self._c;return e("b-input-group",[e("b-input-group-prepend",[e("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value-1)}}},[e("b-icon",{attrs:{icon:"dash","font-scale":"1.6"}})],1)],1),e("b-form-input",{staticClass:"border-secondary text-center",attrs:{id:t.id,size:t.size,value:t.value,type:"number",min:"0",number:""},on:{update:t.valueChange}}),e("b-input-group-append",[e("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value+1)}}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.6"}})],1)],1)],1)},n=[],s=a(43022),o=a(15193),i=a(22183),l=a(72466),d=a(4060),c=a(27754),u=a(22418);const m={name:"InputSpinButton",components:{BIcon:s.H,BButton:o.T,BFormInput:i.e,BIconDash:l.Loc,BIconPlus:l.s3j,BInputGroup:d.w,BInputGroupPrepend:c.P,BInputGroupAppend:u.B},props:{id:{type:String,required:!0},size:{type:String,required:!1,default:"md",validator(t){return["sm","md","lg"].includes(t)}},value:{type:Number,required:!0}},methods:{valueChange(t){t<=0?this.$emit("input",0):this.$emit("input",t)}}},g=m;var h=a(1001),p=(0,h.Z)(g,r,n,!1,null,"2f5aba03",null);const f=p.exports},75470:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var r=function(){var t=this,e=t._self._c;return e("div",[e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{sm:"12",lg:"6"}},[e("b-card",{attrs:{title:"Daemon"}},[e("b-card-text",{staticClass:"mb-3"},[t._v(" An easy way to update your Flux daemon to the latest version. Flux will be automatically started once update is done. ")]),e("div",{staticClass:"text-center"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"update-daemon",variant:"success","aria-label":"Update Daemon"}},[t._v(" Update Daemon ")]),e("confirm-dialog",{attrs:{target:"update-daemon","confirm-button":"Update Daemon"},on:{confirm:function(e){return t.updateDaemon()}}})],1)],1)],1),e("b-col",{attrs:{sm:"12",lg:"6"}},[e("b-card",{attrs:{title:"Manage Process"}},[e("b-card-text",{staticClass:"mb-3"},[t._v(" Here you can manage your Flux daemon process. ")]),e("div",{staticClass:"text-center"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"start-daemon",variant:"success","aria-label":"Start Daemon"}},[t._v(" Start Daemon ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"stop-daemon",variant:"success","aria-label":"Stop Daemon"}},[t._v(" Stop Daemon ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"restart-daemon",variant:"success","aria-label":"Restart Daemon"}},[t._v(" Restart Daemon ")]),e("confirm-dialog",{attrs:{target:"start-daemon","confirm-button":"Start Daemon"},on:{confirm:function(e){return t.startDaemon()}}}),e("confirm-dialog",{attrs:{target:"stop-daemon","confirm-button":"Stop Daemon"},on:{confirm:function(e){return t.stopDaemon()}}}),e("confirm-dialog",{attrs:{target:"restart-daemon","confirm-button":"Restart Daemon"},on:{confirm:function(e){return t.restartDaemon()}}})],1)],1)],1)],1),e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{sm:"12",lg:"8"}},[e("b-card",{attrs:{title:"Rescan"}},[e("b-card-text",{staticClass:"mb-2"},[t._v(" Choose a blockheight to rescan Daemon from and click on Rescan Daemon to begin rescanning. ")]),e("div",{staticClass:"mb-1",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e("b-card-text",{staticClass:"mr-1 mb-0"},[t._v(" Block Height ")]),e("input-spin-button",{staticStyle:{width:"250px"},attrs:{id:"sb-vertical"},model:{value:t.rescanDaemonHeight,callback:function(e){t.rescanDaemonHeight=e},expression:"rescanDaemonHeight"}}),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1",staticStyle:{width:"250px"},attrs:{id:"rescan-daemon",variant:"success","aria-label":"Rescan Daemon"}},[t._v(" Rescan Daemon ")]),e("confirm-dialog",{attrs:{target:"rescan-daemon","confirm-button":"Rescan Daemon"},on:{confirm:function(e){return t.rescanDaemon()}}})],1)],1)],1),e("b-col",{attrs:{sm:"12",lg:"4"}},[e("b-card",{attrs:{title:"Reindex"}},[e("b-card-text",{staticClass:"mb-2"},[t._v(" This option reindexes Flux blockchain data. It will take several hours to finish the operation. ")]),e("div",{staticClass:"text-center"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"reindex-daemon",variant:"success","aria-label":"Reindex Daemon"}},[t._v(" Reindex Daemon ")]),e("confirm-dialog",{attrs:{target:"reindex-daemon","confirm-button":"Reindex Daemon"},on:{confirm:function(e){return t.reindexDaemon()}}})],1)],1)],1)],1)],1)},n=[],s=a(86855),o=a(26253),i=a(50725),l=a(64206),d=a(15193),c=a(21210),u=a(20266),m=a(87066),g=a(54746),h=a(17389),p=a(20946),f=a(39308);const b=a(80129),x={components:{BCard:s._,BRow:o.T,BCol:i.l,BCardText:l.j,BButton:d.T,InputSpinButton:h.Z,ConfirmDialog:g.Z,ToastificationContent:c.Z},directives:{Ripple:u.Z},data(){return{rescanDaemonHeight:0}},mounted(){this.checkDaemonVersion()},methods:{checkDaemonVersion(){p.Z.getInfo().then((t=>{console.log(t);const e=t.data.data.version;m["default"].get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((t=>{console.log(t),t.data.version!==e?this.showToast("warning","Daemon requires an update!"):this.showToast("success","Daemon is up to date.")})).catch((t=>{console.log(t),this.showToast("danger","Error verifying recent version")}))})).catch((t=>{console.log(t),this.showToast("danger","Error connecting to Daemon")}))},updateDaemon(){p.Z.getInfo().then((t=>{console.log(t);const e=t.data.data.version;m["default"].get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((t=>{if(console.log(t),t.data.version!==e){const t=localStorage.getItem("zelidauth"),e=b.parse(t);console.log(e),this.showToast("warning","Daemon is now updating in the background"),f.Z.updateDaemon(t).then((t=>{console.log(t),"error"===t.data.status&&this.showToast("danger",t.data.data.message||t.data.data)})).catch((t=>{console.log(t),console.log(t.code),this.showToast("danger",t.toString())}))}else this.showToast("success","Daemon is already up to date")})).catch((t=>{console.log(t),this.showToast("danger","Error verifying recent version")}))})).catch((t=>{console.log(t),this.showToast("danger","Error connecting to Daemon")}))},startDaemon(){this.showToast("warning","Daemon will start");const t=localStorage.getItem("zelidauth");p.Z.start(t).then((t=>{"error"===t.data.status?this.showToast("danger",t.data.data.message||t.data.data):this.showToast("success",t.data.data.message||t.data.data)})).catch((t=>{console.log(t),this.showToast("danger","Error while trying to start Daemon")}))},stopDaemon(){this.showToast("warning","Daemon will be stopped");const t=localStorage.getItem("zelidauth");p.Z.stopDaemon(t).then((t=>{"error"===t.data.status?this.showToast("danger",t.data.data.message||t.data.data):this.showToast("success",t.data.data.message||t.data.data)})).catch((t=>{console.log(t),this.showToast("danger","Error while trying to stop Daemon")}))},restartDaemon(){this.showToast("warning","Daemon will now restart");const t=localStorage.getItem("zelidauth");p.Z.restart(t).then((t=>{"error"===t.data.status?this.showToast("danger",t.data.data.message||t.data.data):this.showToast("success",t.data.data.message||t.data.data)})).catch((t=>{console.log(t),this.showToast("danger","Error while trying to restart Daemon")}))},rescanDaemon(){this.showToast("warning","Daemon will now rescan. This will take up to an hour.");const t=localStorage.getItem("zelidauth"),e=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;p.Z.rescanDaemon(t,e).then((t=>{"error"===t.data.status?this.showToast("danger",t.data.data.message||t.data.data):this.showToast("success",t.data.data.message||t.data.data)})).catch((t=>{console.log(t),this.showToast("danger","Error while trying to rescan Daemon")}))},reindexDaemon(){this.showToast("warning","Daemon will now reindex. This will take several hours.");const t=localStorage.getItem("zelidauth");f.Z.reindexDaemon(t).then((t=>{"error"===t.data.status?this.showToast("danger",t.data.data.message||t.data.data):this.showToast("success",t.data.data.message||t.data.data)})).catch((t=>{console.log(t),this.showToast("danger","Error while trying to reindex Daemon")}))},showToast(t,e,a="InfoIcon"){this.$toast({component:c.Z,props:{title:e,icon:a,variant:t}})}}},v=x;var w=a(1001),Z=(0,w.Z)(v,r,n,!1,null,null,null);const D=Z.exports}}]);