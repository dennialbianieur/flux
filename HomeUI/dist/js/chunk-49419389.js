(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49419389"],{"03da":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[r("b-card",[r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[r("b-form-group",{staticClass:"mb-0"},[r("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),r("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),r("b-col",{staticClass:"my-1",attrs:{md:"8"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),r("b-input-group-append",[r("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),r("b-col",{attrs:{cols:"12"}},[r("b-table",{attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(lastpaid)",fn:function(e){return[t._v(" "+t._s(new Date(1e3*Number(e.item.lastpaid)).toLocaleString("en-GB",t.timeoptions))+" ")]}}])})],1),r("b-col",{attrs:{cols:"12"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)},a=[],o=r("1da1"),s=(r("96cf"),r("d81d"),r("4de4"),r("d3b7"),r("159b"),r("7db0"),r("205f")),i=r("29a1"),l=r("a15b"),c=r("b28b"),u=r("26d2"),d=r("8226"),f=r("8361"),p=r("5e12"),b=r("4797"),m=r("ccc0"),g=r("1947"),y=r("9b03"),h=r("1d17"),v=r("bc3a"),w={components:{BCard:s["a"],BTable:i["a"],BRow:l["a"],BCol:c["a"],BPagination:u["a"],BFormGroup:d["a"],BFormSelect:f["a"],BInputGroup:p["a"],BFormInput:b["a"],BInputGroupAppend:m["a"],BButton:g["a"],BOverlay:y["a"]},data:function(){return{timeoptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},fluxListLoading:!0,perPage:10,pageOptions:[10,25,50,100,1e3],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"ip",label:"IP Address",sortable:!0},{key:"payment_address",label:"Address",sortable:!0},{key:"location.country",label:"Country",sortable:!0,formatter:this.formatTableEntry},{key:"location.org",label:"Provider",sortable:!0,formatter:this.formatTableEntry},{key:"lastpaid",label:"Last Paid",sortable:!0},{key:"tier",label:"Tier",sortable:!0}],totalRows:1,currentPage:1}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.getFluxList()},methods:{formatTableEntry:function(t){return t||"Unknown"},getFluxList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.fluxListLoading=!0,e.next=4,v.get("https://stats.runonflux.io/fluxlocations");case 4:return r=e.sent,n=r.data.data,e.next=8,h["a"].listZelNodes();case 8:a=e.sent,o=a.data.data,s=[],o.forEach((function(t){var e=t;e.location=n.find((function(t){return t.ip===e.ip})),s.push(e)})),t.items=s.filter((function(t){return t.ip})),t.totalRows=t.items.length,t.currentPage=1,t.fluxListLoading=!1,console.log(t.items),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},k=w,x=r("2877"),B=Object(x["a"])(k,n,a,!1,null,null,null);e["default"]=B.exports},"1d17":function(t,e,r){"use strict";var n=r("b4c0");e["a"]={listZelNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},zelnodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")}}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,o=r("44d2"),s="find",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),s=o("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},f07e:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){}}}]);