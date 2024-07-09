"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[2311],{20946:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(19350);const r={help(){return(0,a.Z)().get("/daemon/help")},helpSpecific(t){return(0,a.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,a.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,a.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,a.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,a.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,a.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,a.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,a.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,a.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,a.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,a.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,a.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,a.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,a.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockCount(){return(0,a.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,a.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,a.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,a.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,a.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,a.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,a.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,a.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,a.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,a.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,a.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,a.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,a.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,a.Z)()},cancelToken(){return a.S}}},21210:(t,e,n)=>{n.d(e,{Z:()=>u});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],o=n(47389);const i={components:{BAvatar:o.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=i;var l=n(1001),c=(0,l.Z)(s,a,r,!1,null,"22d964ca",null);const u=c.exports},17389:(t,e,n)=>{n.d(e,{Z:()=>v});var a=function(){var t=this,e=t._self._c;return e("b-input-group",[e("b-input-group-prepend",[e("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value-1)}}},[e("b-icon",{attrs:{icon:"dash","font-scale":"1.6"}})],1)],1),e("b-form-input",{staticClass:"border-secondary text-center",attrs:{id:t.id,size:t.size,value:t.value,type:"number",min:"0",number:""},on:{update:t.valueChange}}),e("b-input-group-append",[e("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.valueChange(t.value+1)}}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.6"}})],1)],1)],1)},r=[],o=n(43022),i=n(15193),s=n(22183),l=n(72466),c=n(4060),u=n(27754),d=n(22418);const p={name:"InputSpinButton",components:{BIcon:o.H,BButton:i.T,BFormInput:s.e,BIconDash:l.Loc,BIconPlus:l.s3j,BInputGroup:c.w,BInputGroupPrepend:u.P,BInputGroupAppend:d.B},props:{id:{type:String,required:!0},size:{type:String,required:!1,default:"md",validator(t){return["sm","md","lg"].includes(t)}},value:{type:Number,required:!0}},methods:{valueChange(t){t<=0?this.$emit("input",0):this.$emit("input",t)}}},m=p;var g=n(1001),h=(0,g.Z)(m,a,r,!1,null,"2f5aba03",null);const v=h.exports},2311:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var a=function(){var t=this,e=t._self._c;return e("b-card",[e("div",[e("label",{staticClass:"mr-1",attrs:{for:"sb-inline"}},[t._v("Block Height")]),e("input-spin-button",{attrs:{id:"sb-inline","repeat-step-multiplier":"100",inline:""},model:{value:t.rescanDaemonHeight,callback:function(e){t.rescanDaemonHeight=e},expression:"rescanDaemonHeight"}}),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1 mt-1",attrs:{id:"rescan-daemon",disabled:0===t.blockHeight,variant:"outline-primary",size:"md"}},[t._v(" Rescan Daemon ")]),e("b-popover",{ref:"popover",attrs:{target:"rescan-daemon",triggers:"click",show:t.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(e){t.popoverShow=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("span",[t._v("Are You Sure?")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:t.onClose}},[e("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[e("div",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:t.onClose}},[t._v(" Cancel ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:t.onOk}},[t._v(" Rescan Blockchain ")])],1)]),e("b-modal",{attrs:{id:"modal-center",centered:"",title:"Blockchain Rescanning","ok-only":"","ok-title":"OK"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[e("b-card-text",[t._v(" The daemon will now start rescanning the blockchain. This will take up to an hour. ")])],1)],1)])},r=[],o=n(86855),i=n(15193),s=n(53862),l=n(31220),c=n(64206),u=n(21210),d=n(20266),p=n(20946),m=n(17389);const g={components:{BCard:o._,BButton:i.T,BPopover:s.x,BModal:l.N,BCardText:c.j,InputSpinButton:m.Z,ToastificationContent:u.Z},directives:{Ripple:d.Z},data(){return{blockHeight:0,rescanDaemonHeight:0,popoverShow:!1,modalShow:!1}},mounted(){this.daemonGetInfo()},methods:{async daemonGetInfo(){const t=await p.Z.getInfo();"error"===t.data.status?this.$toast({component:u.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):this.blockHeight=t.data.data.blocks},onClose(){this.popoverShow=!1},onOk(){this.popoverShow=!1,this.modalShow=!0;const t=localStorage.getItem("zelidauth"),e=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;p.Z.rescanDaemon(t,e).then((t=>{this.$toast({component:u.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"success"}})})).catch((()=>{this.$toast({component:u.Z,props:{title:"Error while trying to rescan Daemon",icon:"InfoIcon",variant:"danger"}})}))}}},h=g;var v=n(1001),b=(0,v.Z)(h,a,r,!1,null,null,null);const f=b.exports}}]);