(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e728a634"],{2605:function(t,e,a){"use strict";var s=a("5a04"),n=a.n(s);n.a},"2c92":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isWechat?t._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_body"},[a("span",{staticClass:"goBack",on:{click:t.goBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"flex-vertical-centering"},[a("p",{staticClass:"textEllipsis"},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?a("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},n=[],i={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(t,e){t.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},l=i,c=(a("a125"),a("2877")),r=Object(c["a"])(l,s,n,!1,null,"3efa7418",null);e["a"]=r.exports},"52c8":function(t,e,a){"use strict";var s=a("ac23"),n=a.n(s);n.a},5741:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan-list-page"},[a("top-msg",{attrs:{"header-name":"计划列表"}}),a("van-tabs",{attrs:{"swipe-threshold":5},on:{click:t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabList,function(t,e){return a("van-tab",{key:e,attrs:{title:t.text}})}),1),a("van-list",{attrs:{finished:t.finished,"finished-text":"已加载完毕"},on:{load:t.userRepayPlanListFun},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("ul",{staticClass:"list"},t._l(t.checkPlanList,function(e,s){return a("li",{key:s,staticClass:"item clear",on:{click:function(a){return t.$router.push("/planDetails?id="+e.json_trade_no)}}},[a("div",{staticClass:"clear title"},[a("i",{staticClass:"iconfont icon-dingdan maincolor lt"}),a("span",{staticClass:"lt text"},[t._v("订单号："+t._s(e.json_trade_no))]),a("span",{class:{"rt status":!0,status1:"EXECUTING"===e.repay_plan_info.execute_state,status2:"SUCCESS"===e.repay_plan_info.execute_state,status3:"FAILED"===e.repay_plan_info.execute_state}},[t._v("\n            "+t._s("WAITING"===e.repay_plan_info.execute_state?"等待执行":"EXECUTING"===e.repay_plan_info.execute_state?"执行中":"SUCCESS"===e.repay_plan_info.execute_state?"执行成功":"失败")+"\n          ")])]),a("ul",{staticClass:"item-list"},[a("li",{staticClass:"list-item clear"},[a("img",{staticClass:"lt",attrs:{src:e.bank.bank_logo_image&&e.bank.bank_logo_image.url}}),a("span",{staticClass:"lt text"},[t._v(t._s(e.bank.name)+"（尾号"+t._s(e.repay_plan_info.bank_card_no.substr(-4,4))+"）")]),a("span",{staticClass:"rt text"},[t._v(t._s(t._f("timeToFormatDate")(e.create_time)))])]),a("li",{staticClass:"list-item dec clear"},[a("span",{staticClass:"lt dec-text"},[t._v("消费金额：¥"+t._s((parseFloat(e.repay_plan_info.repay_sum_amount)+parseFloat(e.repay_plan_info.consume_service_fee)+parseFloat(e.repay_plan_info.repay_service_fee)).toFixed(2)))]),a("span",{staticClass:"rt dec-text"},[t._v("还款金额：¥"+t._s(e.repay_plan_info.repay_sum_amount))])]),a("li",{staticClass:"list-item dec clear"},[a("span",{staticClass:"lt dec-text"},[t._v("消费手续费：¥"+t._s(e.repay_plan_info.consume_service_fee))]),a("span",{staticClass:"rt dec-text"},[t._v("还款手续费：¥"+t._s(e.repay_plan_info.repay_service_fee))])]),"FAILED"===e.repay_plan_info.execute_state&&e.repay_plan_info.fail_info?a("li",{staticClass:"reason"},[t._v("\n            "+t._s(e.repay_plan_info.fail_info)+"\n          ")]):t._e()])])}),0)]),a("div",{staticClass:"add-btn"},[a("span",{staticClass:"btn",on:{click:function(e){t.showSelectChannel=!0}}},[t._v("添加还款计划")])]),a("van-popup",{staticClass:"select-channel",model:{value:t.showSelectChannel,callback:function(e){t.showSelectChannel=e},expression:"showSelectChannel"}},[a("select-channel")],1)],1)},n=[],i=a("c466"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select-channel-page"},[a("div",{staticClass:"title-text"},[t._v("\n    请选择通道\n  ")]),a("ul",{staticClass:"list"},t._l(t.list,function(e,s){return a("li",{key:s,class:{item:!0,on:t.activeId===s},on:{click:function(a){return t.selectedChannel(e,s)}}},[a("img",{attrs:{src:e.logo_image&&e.logo_image.url}}),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v("\n          "+t._s(e.name)+"\n        ")]),a("div",{staticClass:"clear"},[a("span",{staticClass:"lt dec-text"},[t._v("费率："+t._s((100*e.rate).toFixed(2))+"%")]),a("span",{staticClass:"rt dec-text"},[t._v("交易时间："+t._s(e.start_time)+"-"+t._s(e.end_time))])]),a("div",{staticClass:"tip textEllipsis"},[t._v("\n          提示："+t._s(e.intro)+"\n        ")])]),a("span",{staticClass:"detail-btn",on:{click:function(a){return t.showDetailFun(e)}}},[t._v("\n        通道详情\n        "),a("i",{staticClass:"iconfont icon-gengduo"})])])}),0),a("div",{staticClass:"add-btn"},[a("span",{staticClass:"btn",on:{click:function(e){return t.$router.push("/addPlan?code="+t.selectedChannelItem.code)}}},[t._v("确定")])]),a("van-popup",{staticClass:"detail",model:{value:t.showDetail,callback:function(e){t.showDetail=e},expression:"showDetail"}},[a("img",{staticClass:"img",attrs:{src:t.showDetailItem.logo_image&&t.showDetailItem.logo_image.url}}),a("div",{staticClass:"name"},[t._v("\n      "+t._s(t.showDetailItem.name)+"\n    ")]),a("div",{staticClass:"dec-text"},[t._v("\n      费率："+t._s((100*t.showDetailItem.rate).toFixed(2))+"%\n    ")]),a("div",{staticClass:"dec-text"},[t._v("\n      交易时间："+t._s(t.showDetailItem.start_time)+" - "+t._s(t.showDetailItem.end_time)+"\n    ")]),a("div",{staticClass:"tip"},[a("span",{domProps:{innerHTML:t._s(t.showDetailItem.description)}})]),a("div",{staticClass:"add-btn"},[a("span",{staticClass:"btn",on:{click:function(e){t.showDetail=!1}}},[t._v("确定")])])])],1)},c=[],r={name:"SelectChannel",data:function(){return{showDetail:!1,list:[],selectedChannelItem:{},showDetailItem:{},activeId:0}},created:function(){this.repayChannelListFun()},methods:{repayChannelListFun:function(){var t=this;this.$api.plan.repayChannelList().then(function(e){console.log(e),t.list=e.data.data,t.list.length>0&&(t.selectedChannelItem=t.list[0])})},selectedChannel:function(t,e){this.selectedChannelItem=t,this.activeId=e},showDetailFun:function(t){event.preventDefault()||event.stopPropagation(),this.showDetailItem=t,this.showDetail=!0}}},o=r,u=(a("52c8"),a("2877")),h=Object(u["a"])(o,l,c,!1,null,"444cf264",null),p=h.exports,_=a("2c92"),d={name:"PlanList",filters:{timeToFormatDate:i["b"]},components:{selectChannel:p,topMsg:_["a"]},data:function(){return{showSelectChannel:!1,active:-1,tabList:[{id:0,text:"全部"},{id:1,text:"等待执行"},{id:2,text:"执行中"},{id:3,text:"执行成功"},{id:4,text:"失败"}],planList:[],loading:!1,finished:!1,currPage:0}},computed:{checkPlanList:function(){var t=this.planList,e=[],a=!0,s=!1,n=void 0;try{for(var i,l=t[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var c=i.value;0===this.active?e.push(c):1===this.active&&"WAITING"===c.repay_plan_info.execute_state?e.push(c):2===this.active&&"EXECUTING"===c.repay_plan_info.execute_state?e.push(c):3===this.active&&"SUCCESS"===c.repay_plan_info.execute_state?e.push(c):4===this.active&&"FAILED"===c.repay_plan_info.execute_state&&e.push(c)}}catch(r){s=!0,n=r}finally{try{a||null==l.return||l.return()}finally{if(s)throw n}}return e}},created:function(){document.title="计划列表"},methods:{changeTab:function(t,e,a){this.active=t,this.reflesh(),this.userRepayPlanListFun()},reflesh:function(){this.planList=[],this.currPage=0,this.finished=!1},userRepayPlanListFun:function(){var t=this;this.loading=!0;var e={};0===this.active?e={page:this.currPage,size:7}:1===this.active?e={page:this.currPage,size:10,state:"WAITING"}:2===this.active?e={page:this.currPage,size:10,state:"EXECUTING"}:3===this.active?e={page:this.currPage,size:10,state:"SUCCESS"}:4===this.active&&(e={page:this.currPage,size:10,state:"FAILED"}),this.$api.plan.userRepayPlanList(e).then(function(e){t.loading=!1,console.log(e.data.data);var a=e.data.data.repay_plans,s=!0,n=!1,i=void 0;try{for(var l,c=a[Symbol.iterator]();!(s=(l=c.next()).done);s=!0){var r=l.value;t.planList.push(r)}}catch(o){n=!0,i=o}finally{try{s||null==c.return||c.return()}finally{if(n)throw i}}0===a.length?t.finished=!0:(t.finished=!1,t.currPage++)})}}},f=d,v=(a("2605"),Object(u["a"])(f,s,n,!1,null,"3345ab92",null));e["default"]=v.exports},"5a04":function(t,e,a){},a125:function(t,e,a){"use strict";var s=a("cc0b"),n=a.n(s);n.a},ac23:function(t,e,a){},c466:function(t,e,a){"use strict";function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss",a={"M+":t.getMonth()+1,"d+":t.getDate(),"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return e}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";return s(new Date(t),e)}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return s(new Date(t),e)}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm:ss";return s(new Date(t),e)}a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n}),a.d(e,"c",function(){return i}),a.d(e,"d",function(){return l})},cc0b:function(t,e,a){}}]);