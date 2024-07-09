"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[7752],{86453:(t,e,r)=>{r.d(e,{Z:()=>o});var s=r(19350);const o={listFluxNodes(){return(0,s.Z)().get("/daemon/listzelnodes")},fluxnodeCount(){return(0,s.Z)().get("/daemon/getzelnodecount")},blockReward(){return(0,s.Z)().get("/daemon/getblocksubsidy")}}},7752:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});var s=function(){var t=this,e=t._self._c;return e("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"2"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),e("b-col",{staticClass:"my-1"},[e("b-form-group",{staticClass:"mb-0",attrs:{"label-for":"filterInput"}},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Filter")]),e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search",debounce:"1500"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(lastpaid)",fn:function(e){return[t._v(" "+t._s(new Date(1e3*Number(e.item.lastpaid)).toLocaleString("en-GB",t.timeoptions))+" ")]}}])})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)},o=[],a=r(86855),l=r(16521),i=r(26253),n=r(50725),c=r(10962),u=r(46709),d=r(8051),p=r(4060),b=r(22183),f=r(22418),m=r(15193),g=r(66126),h=r(86453);const y=r(97218),x={components:{BCard:a._,BTable:l.h,BRow:i.T,BCol:n.l,BPagination:c.c,BFormGroup:u.x,BFormSelect:d.K,BInputGroup:p.w,BFormInput:b.e,BInputGroupAppend:f.B,BButton:m.T,BOverlay:g.X},data(){return{timeoptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},fluxListLoading:!0,perPage:10,pageOptions:[10,25,50,100,1e3],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"ip",label:"IP Address",sortable:!0},{key:"payment_address",label:"Address",sortable:!0},{key:"location.country",label:"Country",sortable:!0,formatter:this.formatTableEntry},{key:"location.org",label:"Provider",sortable:!0,formatter:this.formatTableEntry},{key:"lastpaid",label:"Last Paid",sortable:!0},{key:"tier",label:"Tier",sortable:!0}],totalRows:1,currentPage:1}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))}},mounted(){this.getFluxList()},methods:{formatTableEntry(t){return t||"Unknown"},async getFluxList(){try{this.fluxListLoading=!0;const[t,e]=await Promise.all([y.get("https://stats.runonflux.io/fluxlocations"),h.Z.listFluxNodes()]),r=t.data.data,s=e.data.data,o=r.reduce(((t,e)=>({...t,[e.ip]:e})),{}),a=s.map((t=>({...t,location:o[t.ip.split(":")[0]]}))).filter((t=>t.ip));this.items=a,this.totalRows=this.items.length,this.currentPage=1,this.fluxListLoading=!1,console.log(this.items)}catch(t){console.log(t)}},onFiltered(t){this.totalRows=t.length,this.currentPage=1}}},k=x;var B=r(1001),P=(0,B.Z)(k,s,o,!1,null,null,null);const v=P.exports}}]);