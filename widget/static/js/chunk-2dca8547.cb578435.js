(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dca8547"],{"20fe":function(t,e,s){"use strict";s.r(e);var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-msg",{attrs:{"header-name":"账单"}}),n("div",{staticClass:"con_body"},[n("van-tabs",{attrs:{"title-active-color":"#0086F2"},on:{click:t.toggleNav},model:{value:t.currentNav,callback:function(e){t.currentNav=e},expression:"currentNav"}},[n("div",{staticClass:"con_bills"},[n("div",{staticClass:"bills_head flex_sb"},[n("div",{staticClass:"flex1"},[n("div",{staticClass:"box"},[n("span",{staticClass:"size26 bills_select",on:{click:t.openMonthPicker}},[t._v(t._s(t.monthSelect?t.monthSelect:"全部"))]),n("i",{staticClass:"iconfont icon-shouqi"})])]),n("div",{staticClass:"flex1"},[n("div",{staticClass:"box"},[n("span",{staticClass:"size26 bills_select",on:{click:function(e){t.statusPicker=!0,t.closeTouch()}}},[t._v(t._s(t.statusSelect?t.statusSelect:t.stateType))]),n("i",{staticClass:"iconfont icon-shouqi"})])]),n("div",{staticClass:"amount_all textalign_right"},[4===t.currentNav?n("p",{staticClass:"size26 color999"},[t._v("\n              获得：\n              "),n("span",{staticClass:"colorED0"},[t._v(t._s(t.sumGainPointsAmount)+" ")]),t._v("\n              消费：\n              "),n("span",{staticClass:"colorED0"},[t._v(t._s(Math.abs(t.sumConsumeProfitsAmount)))])]):n("p",{staticClass:"size26 color999"},[t._v("\n              总计：\n              "),n("span",{staticClass:"colorED0"},[t._v("¥"+t._s(t._f("parseAmount")(t.sumTotalAmount)))])])])])]),n("van-tab",{attrs:{title:"收款"}},[n("div",{staticClass:"bills_items"},[[n("van-list",{attrs:{finished:t.orderFinished,error:t.orderError,"finished-text":"已加载完毕","error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.orderError=e},load:t.getOrderListFun},model:{value:t.orderLoading,callback:function(e){t.orderLoading=e},expression:"orderLoading"}},[t.haveContent?[n("van-collapse",{attrs:{accordion:""},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.orderList,function(e,s){return n("van-collapse-item",{key:e.id,staticClass:"mgb20",attrs:{name:s+1}},[n("div",{staticClass:"bills_item flex_sb bgfff",attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"w100 flex-column"},[n("p",{class:["size26","tradeState","UNSETTLED"==e.trade_state?"weijiesuan":"yijiesuan"]},[t._v("\n                          "+t._s(t._f("tradeState")(e.trade_state))+"\n                        ")]),n("div",{staticClass:"w100 flex-row-between item_top"},[n("p",{staticClass:"size26 color333"},[t._v("\n                            订单编号："+t._s(e.trade_no)+"\n                          ")]),n("p",{staticClass:"size28 colorED0 bold"},[t._v("\n                            ¥ "+t._s(t._f("parseAmount")(e.total_amount))+"\n                          ")])]),n("div",{staticClass:"w100 flex-row-between"},[n("p",{staticClass:"size26 lineheight60"},[t._v("\n                            时间："+t._s(t._f("timeToFormatDate")(e.gmt_create))+"\n                          ")]),n("p",{staticClass:"size26 color999"},[t._v("\n                            "+t._s("总手续费：¥")+t._s(t._f("parseAmount")(e.total_amount-e.actual_amount))+"\n                          ")])]),n("div",{staticClass:"w100 flex-row-between"},[n("p",{staticClass:"size26"},[t._v("\n                            通道: "+t._s(e.channel_name)+"\n                          ")]),n("p",{staticClass:"size24 color999 flex-row-center",on:{click:function(s){return t.getOrderDetailFun(e.trade_no)}}},[n("span",[t._v("详情")]),t.activeNames===s+1?n("i",{staticClass:"iconfont icon-zhankai xiala"}):n("i",{staticClass:"iconfont icon-shouqi xiala"})])])])]),t.orderDetail?[n("div",{},[n("div",{staticClass:"detail_msg detail_moreMsg flex"},[n("p",[t._v("\n                            收款金额：\n                            "),n("span",[t._v("¥"+t._s(t._f("parseAmount")(t.orderDetail.payment_amount)))])]),n("p",[t._v("\n                            费率：\n                            "),n("span",[t._v(t._s((100*t.orderDetail.rate).toFixed(2))+"%")])]),n("p",[t._v("\n                            结算费：\n                            "),n("span",[t._v("¥"+t._s(t._f("parseAmount")(t.orderDetail.fee))+"/笔")])])]),n("div",{staticClass:"detail_msg detail_moreMsg flex"},[n("p",[t._v("\n                            结算金额：\n                            "),n("span",[t._v("¥"+t._s(t._f("parseAmount")(t.orderDetail.actual_amount)))])]),n("p",[t._v("\n                            手续费：\n                            "),n("span",[t._v("¥"+t._s(t._f("parseAmount")(t.orderDetail.payment_amount-t.orderDetail.actual_amount-t.orderDetail.fee)))])])]),t.orderDetail?n("div",{staticClass:"detail_msg flex"},[n("p",[t._v("付款贷记卡："+t._s(t.orderDetail.deposit.credit_card.bank_name)+" **** **** **** "+t._s(t.orderDetail.deposit.credit_card.card_no.substr(t.orderDetail.deposit.credit_card.card_no.length-4)))])]):t._e(),t.orderDetail?n("div",{staticClass:"detail_msg flex"},[n("p",[t._v("结算借记卡："+t._s(t.orderDetail.payback[0].debit_card.bank_name)+" **** **** **** "+t._s(t.orderDetail.payback[0].debit_card.card_no.substr(t.orderDetail.payback[0].debit_card.card_no.length-4)))])]):t._e()])]:[n("van-loading",{staticClass:"list_loading"})]],2)}),1)]:[n("div",{staticClass:"unContent"},[n("div",{staticClass:"unContent_img"},[n("img",{attrs:{src:s("f0b7")}})]),n("div",[n("span",[t._v("没有相关记录")])])])]],2)]],2)]),n("van-tab",{attrs:{title:"分润"}},[n("div",{staticClass:"bills_items"},[[n("van-list",{attrs:{finished:t.profitsFinished,error:t.profitsError,"finished-text":"已加载完毕","error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.profitsError=e},load:t.getProfitsListFun},model:{value:t.profitsLoading,callback:function(e){t.profitsLoading=e},expression:"profitsLoading"}},[t.haveContent?t._l(t.profitsList,function(e){return n("div",{key:e.payment_profits.id,staticClass:"bills_item flex_sb bgfff mgb20"},[n("div",{staticClass:"w100 flex-column"},[n("div",{staticClass:"w100 flex-row-between item_top"},[n("div",{staticClass:"flex-row-center"},[n("div",{class:e.is_direct?"icon_zhitui":"icon_jiantui"},[t._v("\n                          "+t._s(e.is_direct?"直推":"间推")+"\n                        ")]),n("p",{staticClass:"size26 color333"},[t._v("\n                          订单编号："+t._s(e.payment_profits.trade_no)+"\n                        ")])]),n("p",{staticClass:"size28 colorED0 bold"},[t._v("\n                        ¥ "+t._s(t._f("parseAmount")(e.payment_profits.profits_amount+(e.remission_profits?e.remission_profits.profits_amount:0)))+"\n                      ")])]),n("div",{staticClass:"w100 flex-row-between color666"},[n("p",{staticClass:"size26 lineheight60"},[t._v("\n                        时间："+t._s(t._f("timeToFormatDate")(e.payment_profits.gmt_create))+"\n                      ")]),n("p",{staticClass:"size26"},[t._v("\n                        ¥ "+t._s(t._f("parseAmount")(e.payment_profits.profits_amount))+" + "+t._s(t._f("parseAmount")(e.remission_profits?e.remission_profits.profits_amount:0))+"\n                      ")])]),n("div",{staticClass:"w100 flex-row-between color666"},[n("p",{staticClass:"size26"},[t._v("\n                        用户："+t._s(e.payment_profits.source.user_id_card_name+" "+e.payment_profits.source.username)+"\n                      ")]),n("p",{staticClass:"size26"},[t._v("\n                        交易额：¥ "+t._s(t._f("parseAmount")(e.payment_profits.payment_amount))+"\n                      ")])])])])}):[n("div",{staticClass:"unContent"},[n("div",{staticClass:"unContent_img"},[n("img",{attrs:{src:s("f0b7")}})]),n("div",[n("span",[t._v("没有相关记录")])])])]],2)]],2)]),n("van-tab",{attrs:{title:"提现"}},[n("div",{staticClass:"bills_items"},[[n("van-list",{attrs:{finished:t.withdrawFinished,error:t.withdrawError,"finished-text":"已加载完毕","error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.withdrawError=e},load:t.getWithdrawListFun},model:{value:t.withdrawLoading,callback:function(e){t.withdrawLoading=e},expression:"withdrawLoading"}},[t.haveContent?[t._l(t.withdrawList,function(e){return n("div",{key:e.id,staticClass:"bills_item flex_sb bgfff mgb20"},[n("div",{staticClass:"w100 flex-vertical-centering"},[n("div",{staticClass:"w100 flex-row-between item_top"},[n("div",{staticClass:"flex-row-center"},[n("i",{staticClass:"iconfont icon-dingdan"}),n("p",{staticClass:"size26 color333"},[t._v("\n                          订单号："+t._s(e.remission_no)+"\n                        ")])]),n("p",{class:["size26",t.state[e.state]]},[t._v("\n                        "+t._s("PENDING"==e.state?"提现中":"FAIL"==e.state?"提现失败":"提现成功")+"\n                      ")])]),n("div",{staticClass:"w100 flex-row-between mt20"},[n("p",{staticClass:"size28 color666"},[t._v("\n                        时间："+t._s(t._f("timeToFormatDate")(e.gmt_create))+"\n                      ")]),n("p",{staticClass:"size28 colorED0 bold"},[t._v("\n                        ¥ "+t._s(t._f("parseAmount")(e.actual_amount))+"\n                      ")])]),"FAIL"==e.state?n("div",{staticClass:"w100 flex-row-center TXfail"},[t._v("\n                      失败原因：账户异常\n                    ")]):t._e()])])}),n("div")]:[n("div",{staticClass:"unContent"},[n("div",{staticClass:"unContent_img"},[n("img",{attrs:{src:s("f0b7")}})]),n("div",[n("span",[t._v("没有相关记录")])])])]],2)]],2)]),n("van-tab",{attrs:{title:"奖金"}},[n("div",{staticClass:"bills_items"},[n("van-list",{attrs:{finished:t.bonusFinished,error:t.bonusError,"finished-text":"已加载完毕","error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.bonusError=e},load:t.getBonusListFun},model:{value:t.bonusLoading,callback:function(e){t.bonusLoading=e},expression:"bonusLoading"}},[t.haveContent?t._l(t.bonusList,function(e){return n("div",{key:e.id,staticClass:"bonus_item flex_sb bgfff mgb20"},[n("div",{staticClass:"w100 flex-column"},[n("div",{staticClass:"flex-row-center item_top"},[n("i",{staticClass:"iconfont icon-time"}),n("p",{staticClass:"size26 color333 bold"},[t._v("\n                      "+t._s(t._f("timeToFormatDate")(e.gmt_create))+"\n                    ")])]),n("div",{staticClass:"w100 flex-row-between"},[n("div",{staticClass:"color666"},["POINTS"==e.type?n("p",{staticClass:"size28 lineheight70"},[t._v("\n                        "+t._s(e.source_payload+" 积分兑换")+"\n                      ")]):t._e(),"REGISTER"==e.type?n("p",{staticClass:"size28 lineheight70"},[t._v("\n                        "+t._s(e.source.username+" 注册")+"\n                      ")]):"AUTHENTICATION"==e.type?n("p",{staticClass:"size28 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 实名认证")+"\n                      ")]):"FIRST_TRADE_SUCCESS"==e.type?n("p",{staticClass:"size28 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 首次支付")+"\n                      ")]):"MANAGER"==e.type?n("p",{staticClass:"size28 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 管理奖")+"\n                      ")]):t._e()]),n("div",{staticClass:"flex_column flex_sb textalign_right"},[n("p",{staticClass:"size28 colorED0 bold"},[t._v("\n                        ¥ "+t._s(t._f("parseAmount")(e.bonus_amount))+"\n                      ")])])])])])}):[n("div",{staticClass:"unContent"},[n("div",{staticClass:"unContent_img"},[n("img",{attrs:{src:s("f0b7")}})]),n("div",[n("span",[t._v("没有相关记录")])])])]],2)],1)]),n("van-tab",{attrs:{title:"积分"}},[n("div",{staticClass:"bills_items"},[n("van-list",{attrs:{finished:t.pointsFinished,error:t.pointsError,"finished-text":"已加载完毕","error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.pointsError=e},load:t.getPointsListFun},model:{value:t.pointsLoading,callback:function(e){t.pointsLoading=e},expression:"pointsLoading"}},[t.haveContent?t._l(t.pointsList,function(e){return n("div",{key:e.id,staticClass:"bonus_item flex_sb bgfff mgb20"},[n("div",{staticClass:"w100 flex-column"},[n("div",{staticClass:"flex-row-center item_top"},[n("i",{staticClass:"iconfont icon-time"}),n("p",{staticClass:"size26 color333 bold"},[t._v("\n                      "+t._s(t._f("timeToFormatDate")(e.gmt_create))+"\n                    ")])]),n("div",{staticClass:"w100 flex-row-between"},[n("div",{staticClass:"color666"},["REGISTER"==e.type?n("p",{staticClass:"size26 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 注册")+"\n                      ")]):"AUTHENTICATION"==e.type?n("p",{staticClass:"size26 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 实名认证")+"\n                      ")]):"FIRST_TRADE_SUCCESS"==e.type?n("p",{staticClass:"size26 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 首次支付")+"\n                      ")]):"FEE"==e.type?n("p",{staticClass:"size26 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 手续费积分奖励")+"\n                      ")]):"TRADE_SUCCESS_DEDUCT"==e.type?n("p",{staticClass:"size26 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 消费抵扣手续费")+"\n                      ")]):"UPGRADE_CONSUME"==e.type?n("p",{staticClass:"size26 lineheight60"},[t._v("\n                        "+t._s(e.destination.user_id_card_name+" "+e.destination.username)+"\n                      ")]):"MANUAL_AWARD"==e.type?n("p",{staticClass:"size26 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 手动奖励积分")+"\n                      ")]):"MANUAL_CONSUME"==e.type?n("p",{staticClass:"size26 lineheight70"},[t._v("\n                        "+t._s(e.source.user_id_card_name+" "+e.source.username+" 手动扣除积分")+"\n                      ")]):t._e()]),n("div",{staticClass:"flex_column flex_sb textalign_right"},[n("p",{staticClass:"size28 colorED0 bold"},[t._v("\n                        "+t._s(e.points_amount)+"\n                      ")])])]),"UPGRADE_CONSUME"==e.type?n("div",{staticClass:"size26 mb15"},[t._v("\n                    使用"+t._s(Math.abs(e.points_amount))+"积分升级"+t._s(e.source.user_id_card_name+" "+e.source.username)+"为"+t._s(e.source.rank_name)+"会员\n                  ")]):t._e()])])}):[n("div",{staticClass:"unContent"},[n("div",{staticClass:"unContent_img"},[n("img",{attrs:{src:s("f0b7")}})]),n("div",[n("span",[t._v("没有相关记录")])])])]],2)],1)])],1)],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.monthPicker,callback:function(e){t.monthPicker=e},expression:"monthPicker"}},[n("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"cancel-button-text":"当月全部"},on:{confirm:t.closeMonthPicker,cancel:t.wholeMonth},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.statusPicker,callback:function(e){t.statusPicker=e},expression:"statusPicker"}},[n("van-picker",{attrs:{columns:t.statusColumns,"show-toolbar":""},on:{confirm:t.closeStatusPicker,cancel:function(e){t.statusPicker=!1,t.openTouch()}},model:{value:t.statusSelect,callback:function(e){t.statusSelect=e},expression:"statusSelect"}})],1)],1)},i=[],r=(s("c5f6"),s("bd86")),o=(s("5f5f"),s("f253")),c=(s("d1cf"),s("ee83")),u=(s("68ef"),s("bff0"),s("c31d")),l=s("a142"),h=s("8624"),d=s("7744"),f=s("dfaf"),p=s("f331"),m=Object(l["h"])("collapse-item"),_=m[0],g=m[1],v=["title","icon","right-icon"],C=_({mixins:[p["a"]],props:Object(u["a"])({},f["a"],{name:[String,Number],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{items:function(){return this.parent.items},index:function(){return this.items.indexOf(this)},currentName:function(){return Object(l["c"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent.value;return this.parent.accordion?e===this.currentName:e.some(function(e){return e===t.currentName})}},created:function(){this.findParent("van-collapse"),this.items.push(this),this.show=this.expanded,this.inited=this.expanded},destroyed:function(){this.items.splice(this.index,1)},watch:{expanded:function(t,e){var s=this;null!==e&&(t&&(this.show=!0,this.inited=!0),Object(h["a"])(function(){var e=s.$refs,n=e.content,a=e.wrapper;if(n&&a){var i=n.clientHeight;if(i){var r=i+"px";a.style.height=t?0:r,Object(h["a"])(function(){a.style.height=t?r:0})}else s.onTransitionEnd()}}))}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,e=t.accordion&&this.currentName===t.value?"":this.currentName,s=!this.expanded;this.parent["switch"](e,s)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height=null:this.show=!1}},render:function(t){var e=this,s=v.reduce(function(t,s){return e.slots(s)&&(t[s]=function(){return e.slots(s)}),t},{});this.slots("value")&&(s["default"]=function(){return e.slots("value")});var n=t(d["a"],{class:g("title",{disabled:this.disabled,expanded:this.expanded}),on:{click:this.onClick},scopedSlots:s,props:Object(u["a"])({},this.$props)}),a=this.inited&&t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:g("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:g("content")},[this.slots()])]);return t("div",{class:[g(),{"van-hairline--top":this.index}]},[n,a])}}),b=(s("7f7f"),Object(l["h"])("collapse")),M=b[0],w=b[1],D=M({props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},data:function(){return{items:[]}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter(function(e){return e!==t})),this.$emit("change",t),this.$emit("input",t)}},render:function(t){return t("div",{class:[w(),{"van-hairline--top-bottom":this.border}]},[this.slots()])}}),y=s("c466"),E=s("3213"),S=(s("69fa"),s("8d8c"),s("f0a2"),s("5b4d"),s("2c92")),z={name:"Bill",components:(n={},Object(r["a"])(n,D.name,D),Object(r["a"])(n,C.name,C),Object(r["a"])(n,c["a"].name,c["a"]),Object(r["a"])(n,o["a"].name,o["a"]),Object(r["a"])(n,"topMsg",S["a"]),n),filters:{timeToFormatDate:y["b"],parseAmount:E["a"],tradeState:function(t){return{UNPAID:"未支付",UNSETTLED:"待结算",SETTLED:"已结算",FAILED_PAY:"支付失败",FAILED_SETTLE:"结算失败",PROCESSING:"处理中"}[t]}},data:function(){return{navList:["订单","分润","提现"],currentNav:this.$util.getQueryVariable("current")?this.$util.getQueryVariable("current"):0,activeNames:"",monthSelect:"",monthPicker:!1,currentDate:null,postCurrentDate:null,minDate:new Date(2019,0,1),statusSelect:"",statusPicker:!1,currentStatus:"",statusColumns:[],isOnMonth:!1,profitsList:[],profitsLoading:!1,profitsFinished:!1,profitsError:!1,profitsPage:0,withdrawList:[],withdrawLoading:!1,withdrawFinished:!1,withdrawError:!1,withdrawPage:0,orderList:[],orderLoading:!1,orderFinished:!1,orderError:!1,orderPage:0,bonusList:[],bonusLoading:!1,bonusFinished:!1,bonusError:!1,bonusPage:0,pointsList:[],pointsLoading:!1,pointsFinished:!1,pointsError:!1,pointsPage:0,haveContent:!1,isLoading:"",orderDetail:"",sumTotalAmount:0,sumGainPointsAmount:0,sumConsumeProfitsAmount:0,state:{REMITTED:"color999",FAIL:"fail",PENDING:"success"}}},computed:{stateType:function(){return 0===this.currentNav||2===this.currentNav?"状态":"类型"}},created:function(){if(this.$route.query.type&&(this.currentStatus=this.$route.query.type),this.$route.query.time){this.currentDate=new Date(this.$route.query.time);var t=this.$route.query.time,e=new Date(t).getFullYear(),s=new Date(t).getMonth()+1;s=String(s).length<2?"0"+s:s,this.monthSelect=e+"年"+s+"月"}this.currentNav=Number(this.currentNav),this.thisTitle(),this.statusColumnsList()},destroyed:function(){},methods:{thisTitle:function(){document.title="账单"},gotoFrontView:function(){this.$router.go(-1)},wholeMonth:function(){var t=this.currentDate,e=new Date(t).getFullYear(),s=new Date(t).getMonth()+1;s=String(s).length<2?"0"+s:s,this.monthSelect=e+"年"+s+"月",this.monthPicker=!1,this.openTouch(),this.currentDate=new Date(e,s-1),this.postCurrentDate=this.currentDate,this.isOnMonth=!0,this.fetchData(this.currentNav)},openMonthPicker:function(){this.postCurrentDate||(this.currentDate=new Date),this.monthPicker=!0,this.closeTouch()},closeMonthPicker:function(t){var e=new Date(t).getFullYear(),s=new Date(t).getMonth()+1,n=new Date(t).getDate();s=String(s).length<2?"0"+s:s,this.monthSelect=e+"年"+s+"月"+n+"日",this.monthPicker=!1,this.openTouch(),this.currentDate=new Date(e,s-1,n),this.postCurrentDate=this.currentDate,this.isOnMonth=!1,this.fetchData(this.currentNav)},fetchData:function(t){switch(t){case 0:return this.orderList=[],this.orderLoading=!0,this.orderFinished=!1,this.orderError=!1,this.orderPage=0,this.getOrderListFun();case 1:return this.profitsList=[],this.profitsLoading=!0,this.profitsFinished=!1,this.profitsError=!1,this.profitsPage=0,this.getProfitsListFun();case 2:return this.withdrawList=[],this.withdrawLoading=!0,this.withdrawFinished=!1,this.withdrawError=!1,this.withdrawPage=0,this.getWithdrawListFun();case 3:return this.bonusList=[],this.bonusLoading=!0,this.bonusFinished=!1,this.bonusError=!1,this.bonusPage=0,this.getBonusListFun();case 4:return this.pointsList=[],this.pointsLoading=!0,this.pointsFinished=!1,this.pointsError=!1,this.pointsPage=0,this.getPointsListFun()}},closeStatusPicker:function(t){console.log(t),this.statusPicker=!1,this.openTouch(),this.statusSelect=t,this.statusChange(t)},statusChange:function(t){switch(t){case"未支付":this.currentStatus="UNPAID";break;case"未结算":this.currentStatus="UNSETTLED";break;case"已结算":this.currentStatus="SETTLED";break;case"收款":this.currentStatus="FINANCIAL_LEVERAGE_GROUP";break;case"代还":this.currentStatus="FINANCIAL_REPAYMENT_GROUP";break;case"已申请":this.currentStatus="PENDING";break;case"处理中":this.currentStatus="PROCESSING";break;case"失败":this.currentStatus="FAIL";break;case"已到账":this.currentStatus="REMITTED";break;case"注册补贴":this.currentStatus=["REGISTER","AUTHENTICATION","FIRST_TRADE_SUCCESS"];break;case"实名认证补贴":this.currentStatus=["REGISTER","AUTHENTICATION","FIRST_TRADE_SUCCESS"];break;case"首次交易成功补贴":this.currentStatus=["REGISTER","AUTHENTICATION","FIRST_TRADE_SUCCESS"];break;case"积分抵扣":this.currentStatus="POINTS";break;case"管理奖":this.currentStatus="MANAGER";break;case"注册":this.currentStatus="REGISTER";break;case"实名认证":this.currentStatus="AUTHENTICATION";break;case"首次交易成功":this.currentStatus="FIRST_TRADE_SUCCESS";break;case"升级消耗":this.currentStatus="UPGRADE_CONSUME";break;case"交易成功积分抵扣":this.currentStatus="TRADE_SUCCESS_DEDUCT";break;case"手续费转化":this.currentStatus="FEE";break;case"手动奖励":this.currentStatus="MANUAL_AWARD";break;case"手动扣除":this.currentStatus="MANUAL_CONSUME";break}this.fetchData(this.currentNav)},statusColumnsList:function(){switch(this.currentNav){case 0:this.statusColumns=["未支付","未结算","已结算"];break;case 1:this.statusColumns=["收款","代还"];break;case 2:this.statusColumns=["已申请","处理中","已到账","失败"];break;case 3:this.statusColumns=["注册补贴","实名认证补贴","首次交易成功补贴","积分抵扣","管理奖"];break;case 4:this.statusColumns=["注册","实名认证","首次交易成功","升级消耗","交易成功积分抵扣","手续费转化","手动奖励","手动扣除"];break}},getProfitsListFun:function(){var t=this;return t.$api.center.getProfitsList({page:t.profitsPage,size:10,searchDate:this.postCurrentDate&&Object(y["a"])(this.postCurrentDate,"yyyy-MM-dd"),type:this.currentStatus,isOnMonth:this.isOnMonth}).then(function(e){t.sumTotalAmount=e.data.data.aggregation.sumProfitsAmount,e.data.data.has_content?(t.profitsList=t.profitsList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.profitsPage++,t.profitsLoading=!1):(t.profitsLoading=!1,t.profitsFinished=!0)):(t.haveContent=!1,t.profitsLoading=!1,t.profitsFinished=!0)}).catch(function(){t.profitsLoading=!1,t.profitsError=!0})},getWithdrawListFun:function(){var t=this;return t.$api.center.getWithdrawList({page:t.withdrawPage,size:10,searchDate:this.postCurrentDate&&Object(y["a"])(this.postCurrentDate,"yyyy-MM-dd"),tradeState:this.currentStatus,isOnMonth:this.isOnMonth}).then(function(e){t.sumTotalAmount=e.data.data.aggregation.sumActualAmount,e.data.data.has_content?(t.withdrawList=t.withdrawList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.withdrawPage++,t.withdrawLoading=!1):(t.withdrawLoading=!1,t.withdrawFinished=!0)):(t.haveContent=!1,t.withdrawLoading=!1,t.withdrawFinished=!0)}).catch(function(e){console.log(e),t.withdrawLoading=!1,t.withdrawError=!0})},getOrderListFun:function(){var t=this;return t.$api.center.getTradeList({page:t.orderPage,size:10,searchDate:this.postCurrentDate&&Object(y["a"])(this.postCurrentDate,"yyyy-MM-dd"),tradeState:this.currentStatus,isOnMonth:this.isOnMonth}).then(function(e){t.sumTotalAmount=e.data.data.aggregation.sumTotalAmount,e.data.data.has_content?(t.orderList=t.orderList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.orderPage++,t.orderLoading=!1):(t.orderLoading=!1,t.orderFinished=!0)):(t.haveContent=!1,t.orderLoading=!1,t.orderFinished=!0)}).catch(function(e){console.log(e),t.orderLoading=!1,t.orderError=!0})},getOrderDetailFun:function(t){var e=this;e.$api.center.getOrderDetail(t).then(function(t){e.orderDetail=t.data.data}).catch(function(t){console.log(t)})},toggleNav:function(){this.monthSelect="",this.currentDate=null,this.postCurrentDate=null,this.statusSelect="",this.currentStatus="",this.statusColumnsList(),this.fetchData(this.currentNav)},getBonusListFun:function(){var t=this;return t.$api.center.getBonusList({page:t.bonusPage,size:10,searchDate:this.postCurrentDate&&Object(y["a"])(this.postCurrentDate,"yyyy-MM-dd"),type:this.currentStatus,isOnMonth:this.isOnMonth}).then(function(e){t.sumTotalAmount=e.data.data.aggregation.sumBonusAmount,e.data.data.has_content?(t.bonusList=t.bonusList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.bonusPage++,t.bonusLoading=!1):(t.bonusLoading=!1,t.bonusFinished=!0)):(t.haveContent=!1,t.bonusLoading=!1,t.bonusFinished=!0)})},getPointsListFun:function(){var t=this;return t.$api.center.getPointsList({page:t.pointsPage,size:10,searchDate:this.postCurrentDate&&Object(y["a"])(this.postCurrentDate,"yyyy-MM-dd"),type:this.currentStatus,isOnMonth:this.isOnMonth}).then(function(e){t.sumGainPointsAmount=e.data.data.aggregation.sumGainPointsAmount,t.sumConsumeProfitsAmount=e.data.data.aggregation.sumConsumeProfitsAmount,e.data.data.has_content?(t.pointsList=t.pointsList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.pointsPage++,t.pointsLoading=!1):(t.pointsLoading=!1,t.pointsFinished=!0)):(t.haveContent=!1,t.pointsLoading=!1,t.pointsFinished=!0)})},closeTouch:function(){document.getElementsByTagName("body")[0].addEventListener("touchmove",this.handler,{passive:!1}),console.log("closeTouch haved happened.")},openTouch:function(){document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.handler,{passive:!1}),console.log("openTouch haved happened.")}}},A=z,L=(s("c97e"),s("c71c"),s("2877")),x=Object(L["a"])(A,a,i,!1,null,"441b308e",null);e["default"]=x.exports},"29a4":function(t,e,s){},"2c92":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isWechat?t._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:t.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("p",[t._v(t._s(t.headerName))]),t.shareShow?s("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},a=[],i={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(t,e){t.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},r=i,o=(s("4373"),s("2877")),c=Object(o["a"])(r,n,a,!1,null,"208c730d",null);e["a"]=c.exports},"367c":function(t,e,s){},"3c42":function(t,e,s){},4373:function(t,e,s){"use strict";var n=s("e4d1"),a=s.n(n);a.a},"69fa":function(t,e,s){s("a29f")},"8d8c":function(t,e,s){s("a29f"),s("29a4")},aa77:function(t,e,s){var n=s("5ca1"),a=s("be13"),i=s("79e5"),r=s("fdef"),o="["+r+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),h=function(t,e,s){var a={},o=i(function(){return!!r[t]()||c[t]()!=c}),u=a[t]=o?e(d):r[t];s&&(a[s]=u),n(n.P+n.F*o,"String",a)},d=h.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=h},bff0:function(t,e,s){},c466:function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a}),s.d(e,"c",function(){return i}),s.d(e,"d",function(){return r});s("3b2b"),s("a481");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss",s={"M+":t.getMonth()+1,"d+":t.getDate(),"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),s)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?s[n]:("00"+s[n]).substr((""+s[n]).length)));return e}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";return n(new Date(t),e)}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return n(new Date(t),e)}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm:ss";return n(new Date(t),e)}},c5f6:function(t,e,s){"use strict";var n=s("7726"),a=s("69a8"),i=s("2d95"),r=s("5dbc"),o=s("6a99"),c=s("79e5"),u=s("9093").f,l=s("11e9").f,h=s("86cc").f,d=s("aa77").trim,f="Number",p=n[f],m=p,_=p.prototype,g=i(s("2aeb")(_))==f,v="trim"in String.prototype,C=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():d(e,3);var s,n,a,i=e.charCodeAt(0);if(43===i||45===i){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var r,c=e.slice(2),u=0,l=c.length;u<l;u++)if(r=c.charCodeAt(u),r<48||r>a)return NaN;return parseInt(c,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof p&&(g?c(function(){_.valueOf.call(s)}):i(s)!=f)?r(new m(C(e)),s,p):C(e)};for(var b,M=s("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;M.length>w;w++)a(m,b=M[w])&&!a(p,b)&&h(p,b,l(m,b));p.prototype=_,_.constructor=p,s("2aba")(n,f,p)}},c71c:function(t,e,s){"use strict";var n=s("367c"),a=s.n(n);a.a},c97e:function(t,e,s){"use strict";var n=s("3c42"),a=s.n(n);a.a},d1cf:function(t,e,s){"use strict";s("68ef"),s("a526")},e4d1:function(t,e,s){},ee83:function(t,e,s){"use strict";var n=s("c31d"),a=s("a142"),i=s("f253"),r=s("1b10");function o(t){return"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t.getTime())}function c(t){return("00"+t).slice(-2)}function u(t,e){var s=-1,n=Array(t);while(++s<t)n[s]=e(s);return n}function l(t){if(t){while(isNaN(parseInt(t,10)))t=t.slice(1);return parseInt(t,10)}}function h(t,e){return 32-new Date(t,e-1,32).getDate()}var d=Object(a["h"])("datetime-picker"),f=d[0],p=d[1],m=(new Date).getFullYear();e["a"]=f({props:Object(n["a"])({},r["a"],{value:null,minHour:Number,minMinute:Number,type:{type:String,default:"datetime"},showToolbar:{type:Boolean,default:!0},format:{type:String,default:"YYYY.MM.DD HH时 mm分"},formatter:{type:Function,default:function(t,e){return e}},minDate:{type:Date,default:function(){return new Date(m-10,0,1)},validator:o},maxDate:{type:Date,default:function(){return new Date(m+10,11,31)},validator:o},maxHour:{type:Number,default:23},maxMinute:{type:Number,default:59}}),data:function(){return{innerValue:this.correctValue(this.value)}},watch:{value:function(t){t=this.correctValue(t);var e="time"===this.type?t===this.innerValue:t.valueOf()===this.innerValue.valueOf();e||(this.innerValue=t,"time"===this.type&&this.updateColumnValue(t))},innerValue:function(t){this.$emit("input",t)},columns:function(){this.updateColumnValue(this.innerValue)}},computed:{ranges:function(){if("time"===this.type)return[{type:"hour",range:[this.minHour,this.maxHour]},{type:"minute",range:[this.minMinute,this.maxMinute]}];var t=this.getBoundary("max",this.innerValue),e=t.maxYear,s=t.maxDate,n=t.maxMonth,a=t.maxHour,i=t.maxMinute,r=this.getBoundary("min",this.innerValue),o=r.minYear,c=r.minDate,u=r.minMonth,l=r.minHour,h=r.minMinute,d=[{type:"year",range:[o,e]},{type:"month",range:[u,n]},{type:"day",range:[c,s]},{type:"hour",range:[l,a]},{type:"minute",range:[h,i]}];return"date"===this.type&&d.splice(3,2),"year-month"===this.type&&d.splice(2,3),d},columns:function(){var t=this,e=this.ranges.map(function(e){var s=e.type,n=e.range,a=u(n[1]-n[0]+1,function(e){var a=n[0]+e;return a=a<10?"0"+a:""+a,t.formatter(s,a)});return{values:a}});return e}},mounted:function(){this.updateColumnValue(this.innerValue)},methods:{correctValue:function(t){var e="time"!==this.type;if(e&&!o(t))t=this.minDate;else if(!t){var s=this.minHour;t=(s>10?s:"0"+s)+":00"}if(!e){var n=t.split(":"),i=n[0],r=n[1];return i=c(Object(a["g"])(i,this.minHour,this.maxHour)),r=c(Object(a["g"])(r,this.minMinute,this.maxMinute)),i+":"+r}return t=Math.max(t,this.minDate.getTime()),t=Math.min(t,this.maxDate.getTime()),new Date(t)},getBoundary:function(t,e){var s,n=this[t+"Date"],a=n.getFullYear(),i=1,r=1,o=0,c=0;return"max"===t&&(i=12,r=h(e.getFullYear(),e.getMonth()+1),o=23,c=59),e.getFullYear()===a&&(i=n.getMonth()+1,e.getMonth()+1===i&&(r=n.getDate(),e.getDate()===r&&(o=n.getHours(),e.getHours()===o&&(c=n.getMinutes())))),s={},s[t+"Year"]=a,s[t+"Month"]=i,s[t+"Date"]=r,s[t+"Hour"]=o,s[t+"Minute"]=c,s},onConfirm:function(){this.$emit("confirm",this.innerValue)},onChange:function(t){var e,s=this;if("time"===this.type){var n=t.getIndexes();e=n[0]+this.minHour+":"+(n[1]+this.minMinute)}else{var a=t.getValues(),i=l(a[0]),r=l(a[1]),o=h(i,r),c=l(a[2]);"year-month"===this.type&&(c=1),c=c>o?o:c;var u=0,d=0;"datetime"===this.type&&(u=l(a[3]),d=l(a[4])),e=new Date(i,r-1,c,u,d)}this.innerValue=this.correctValue(e),this.$nextTick(function(){s.$nextTick(function(){s.$emit("change",t)})})},updateColumnValue:function(t){var e=this,s=[],n=this.formatter;if("time"===this.type){var a=t.split(":");s=[n("hour",a[0]),n("minute",a[1])]}else s=[n("year",""+t.getFullYear()),n("month",c(t.getMonth()+1)),n("day",c(t.getDate()))],"datetime"===this.type&&s.push(n("hour",c(t.getHours())),n("minute",c(t.getMinutes()))),"year-month"===this.type&&(s=s.slice(0,2));this.$nextTick(function(){e.$refs.picker.setValues(s)})}},render:function(t){var e=this,s={};return Object.keys(r["a"]).forEach(function(t){s[t]=e[t]}),t(i["a"],{class:p(),ref:"picker",attrs:{columns:this.columns},on:{change:this.onChange,confirm:this.onConfirm,cancel:function(){e.$emit("cancel")}},props:Object(n["a"])({},s)})}})},f0a2:function(t,e,s){s("a29f"),s("911e")},f0b7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABcCAMAAACSh4HAAAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMAVWbwzIha+wz2Fmm8uKsSsq5iCMJ15jEpHvjsy5JuaEzfn0LPpIBMC3spAAACYUlEQVRo3rzQOw7CMBBF0SESxIF8SOKKJkrl/e+QgmIkXmQ39j1LOPYv3M8+1XbegxXsMTURd8vrUiOb5cXUyGhZzz410j8t55WaOSxnTA64lunYVRT9ujh9s4pu6acrTw/BKgqDXxemZ6tq9mtkWq+pab0uT7PXh0wD1zLNXOs0da3TzLVOU9c6zV13Mk1c6zRwDUzLNTAt18y0XlPTeg1N6zU0rdfQtFv9mph2j8vrqdW0Xk9X06s149fLxfTDRINrYLp0vQDTl9cbMe3XGzSt19S0XkPTeg1N6zU1rdfQtF4z0y58/JqYdm+/Rqb1GprWa58evu3Ya2+CMBiG4UcQS1WkE8tB0DFP7///h/vQ6sIGhS4cYsL1ueROmtI36bKNkBGMIimWbfhrr/dWT7C9PfzuIciCA4MzWRCIycKH+cRaiEE2ChgsyQKzC8cw+CIL3C7MfDTyGVlwn2HhGV1IuaJRScrFMwp+hVcw8kk5odGpZVO0jV0YN7Usj9AgytWKG/oNP0g5t/3FXs/hjOkP1qi1zklJu4ZZtzACUgLz7bFF17DbMVyS6Xx5pF17D+PwKhu6W/QfThhpwRoVWUDaMR0gDElPrgzxEj5cepLoIWwcP/y+yCIA2eLO/wwvo89/hP2CKvKcVWeXj3Yrq7AWFmRQhBgqDF9QI+FjkLAmj1SLn4FBw0i3VEOkGDCsXQNGFSxIgGHDWiYPnDR+kBkwQliL0tKR0inTCEAfYXtzuIUzVXgzh1FvDs/h9w2fFiO5/IRHNnn4SJNwEdMkYuxoEjsknCbAEyARMaNxxSLBN+2j/Rbxc+RoAAAAAElFTkSuQmCC"},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);