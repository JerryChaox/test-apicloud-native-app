(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9339d6a6"],{2464:function(t,e,a){"use strict";var n=a("78d1"),i=a.n(n);i.a},"2c3a":function(t,e,a){},"2c92":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isWechat?t._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_body"},[a("span",{staticClass:"goBack",on:{click:t.goBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("p",[t._v(t._s(t.headerName))]),t.shareShow?a("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},i=[],s={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(t,e){t.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},c=s,o=(a("4373"),a("2877")),l=Object(o["a"])(c,n,i,!1,null,"208c730d",null);e["a"]=l.exports},4373:function(t,e,a){"use strict";var n=a("e4d1"),i=a.n(n);i.a},"78d1":function(t,e,a){},"79ca":function(t,e,a){"use strict";var n=a("2c3a"),i=a.n(n);i.a},a7ef:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAd0lEQVQoU63SwQ2AIAwF0DKj7gAc2IE1qvvoKJ0BD9RwgAgRaKJc/yP5lCpERCJy3vsLBkchIgPAAQCr1pp6NsOUEzMvxpjzDT9hykOM0Vlr9xa3MOdb27sH04Wq9whWvWew9P4NlpF9fsx0PKKBi75QtBSiNbsBGcJ+ZZfWTqAAAAAASUVORK5CYII="},bbd6:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAcUlEQVQoU6WSwQ2AMAwD7RlhDQYC9oFRmAE+RhEt0Iq2kejXV8m5hJJGAAPJA5VHSQKwAOhJbiU2gpYb1JFcv+A3aPkeasw5nIMxn/LeJdA+JL1rYNK7BT69g56awmvABngr+z1MU49LuGuFrqNwndkJALNc1ca0ImwAAAAASUVORK5CYII="},cc66:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mgb100"},[n("top-msg",{attrs:{"header-name":"收款通道"}}),n("div",{staticClass:"con_body"},[n("div",{staticClass:"form_cells bgfff"},[n("div",{staticClass:"form_cell"},[t._m(0),n("div",{staticClass:"form_cellBd textalign_right"},[n("span",{staticClass:"size48 colorf00"},[t._v("¥"+t._s(t.proceedsAmount))])])])]),n("div",{staticClass:"channel_warp"},[t._m(1),n("div",{staticClass:"channel_body"},[n("van-list",{attrs:{finished:t.channelFinished,error:t.channelError,"finished-text":"已加载完毕","error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.channelError=e},load:t.getChannelFun},model:{value:t.channelLoading,callback:function(e){t.channelLoading=e},expression:"channelLoading"}},[t.haveContent?t._l(t.channelList,function(e,i){return n("div",{key:e.channel_no,class:t.currentSelect===i?"card_item card_item-on":"card_item",on:{click:function(e){return t.toggle(i)}}},[n("div",{staticClass:"flex flex_alCen"},[n("div",{staticClass:"item_left w20"},[n("div",{staticClass:"item_logo"},[e.logo_image?n("img",{attrs:{src:e.logo_image.url}}):t._e()])]),n("div",{staticClass:"item_right w80"},[n("div",{staticClass:"item_link flex-row-center flex_end"},[n("span",{class:t.currentSelect===i?"":"color999",on:{click:function(e){return e.stopPropagation(),t.gotoChannelDetail(i)}}},[t._v("通道详情")]),t.currentSelect===i?n("img",{staticClass:"icon_you",attrs:{src:a("bbd6")}}):n("img",{staticClass:"icon_you",attrs:{src:a("a7ef")}})]),n("div",{staticClass:"item_title"},[n("h5",{staticClass:"size34 bold"},[t._v("\n                      "+t._s(e.name)+"\n                    ")])]),n("div",{staticClass:"item_msg"},[n("div",{staticClass:"flex_sb size24"},[n("p",[t._v("费率："+t._s(t.computeRate(e))+"% 结算："+t._s(t.computeFee(e))+"元/笔")]),n("p",[t._v("时间："+t._s(e.channel_config.trade_config_data.start_time)+"-"+t._s(e.channel_config.trade_config_data.end_time))])]),n("div",{staticClass:"flex_sb size24 mt5"},[n("p",[t._v("单笔："+t._s(e.channel_config.trade_config_data.min_amount_per_trade)+"-"+t._s(e.channel_config.trade_config_data.max_amount_per_trade)+"元/卡")]),n("p",[t._v("当天："+t._s(e.channel_config.trade_config_data.daily_max_amount_per_card)+"万元/人")])])]),n("div",{staticClass:"item_tip"},[n("p",{class:["size20","textEllipsis",t.currentSelect===i?"colorF8":"color999"]},[t._v("\n                      "+t._s(e.intro)+"\n                    ")])])])])])}):t._e(),t.haveContent?t._e():n("div",{staticClass:"unContent"},[n("div",{staticClass:"unContent_img"},[n("img",{attrs:{src:a("f0b7")}})]),n("div",[n("span",[t._v("没有相关记录")])])])],2)],1)]),n("div",{staticClass:"btn_warp"},[n("button",{staticClass:"btn btn_pay",on:{click:t.confirmNext}},[t._v("\n        确认支付\n      ")])])]),t.showDialog?n("channelDetail",{attrs:{"card-detail-msg":t.cardDetailMsg},on:{valueClose:t.valueClose}}):t._e(),n("van-dialog",{attrs:{"show-confirm-button":t.showFalse,"close-on-click-overlay":""},model:{value:t.confirmPopover,callback:function(e){t.confirmPopover=e},expression:"confirmPopover"}},[n("div",{staticClass:"flex-column-center"},[n("i",{staticClass:"iconfont icon-gou maincolor gouImg"}),n("span",{staticClass:"size34 color000 mt20"},[t._v("订单已提交")]),n("span",{staticClass:"size48 colorED0 mt20"},[t._v(t._s(t.proceedsAmount)+" 元")]),n("span",{staticClass:"size26 color888 mt20"},[t._v("当前会员等级：黄金会员")]),n("div",{staticClass:"btn btn_submit mt30"},[t._v("\n        确定\n      ")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("span",{staticClass:"size28 color333"},[t._v("交易金额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"channel_title"},[a("span",{staticClass:"color999 size28"},[t._v("请选择通道")])])}],s=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-dialog",{attrs:{"show-confirm-button":t.showFalse,"before-close":t.beforeClose,"close-on-click-overlay":""},model:{value:t.channelDetail,callback:function(e){t.channelDetail=e},expression:"channelDetail"}},[a("div",{staticClass:"dialog_channel"},[a("div",{staticClass:"textalign_right"},[a("i",{staticClass:"icon_close",on:{click:t.closeDialog}})]),a("div",{staticClass:"dialog_content"},[a("div",{staticClass:"dialog_title cen"},[t.cardDetailMsg.logo_image?a("img",{attrs:{src:t.cardDetailMsg.logo_image.url}}):t._e(),a("p",{staticClass:"size36 color000"},[t._v("\n            "+t._s(t.cardDetailMsg.name)+"\n          ")])]),a("div",{staticClass:"dialog_msg size26 color000"},[a("div",[t._v("费率："+t._s(t.computeRate(t.cardDetailMsg))+"%")]),a("div",[t._v("结算："+t._s(t.computeFee(t.cardDetailMsg))+"元/笔")]),a("div",[t._v("单笔："+t._s(t.cardDetailMsg.channel_config.trade_config_data.min_amount_per_trade)+"-"+t._s(t.cardDetailMsg.channel_config.trade_config_data.max_amount_per_trade)+"元/卡")]),a("div",[t._v("时间："+t._s(t.cardDetailMsg.channel_config.trade_config_data.start_time)+"-"+t._s(t.cardDetailMsg.channel_config.trade_config_data.end_time))]),a("div",[t._v("当天："+t._s(t.cardDetailMsg.channel_config.trade_config_data.daily_max_amount_per_card)+"万元/卡")])]),a("div",{staticClass:"dialog_tip flex-row"},[a("span",[t._v("提示：")]),a("p",{staticClass:"size22 color666",domProps:{innerHTML:t._s(t.cardDetailMsg.description)}})]),a("div",{staticClass:"flex-vertical-centering mt30"},[a("button",{staticClass:"btn btn_submit",on:{click:t.closeDialog}},[t._v("\n            确定\n          ")])])])])])],1)}),c=[],o={name:"ChannelDetail",props:{cardDetailMsg:{type:Object,default:function(){}},required:{type:Boolean,default:!0}},data:function(){return{channelDetail:!0,showFalse:!1}},computed:{rankOrder:function(){return this.$store.state.userInfo.rank_order},computeRate:function(){return function(t){return(100*t.financial_rule.rate).toFixed(2)}},computeFee:function(){return function(t){return(t.financial_rule.fee/100).toFixed(2)}}},created:function(){console.log(this.cardDetailMsg)},methods:{thisTitle:function(){document.title=this.STATIC_INFO.appName},beforeClose:function(t,e){e(),this.$emit("valueClose",!1)},closeDialog:function(){console.log("11111111111111"),this.$emit("valueClose",!1)}}},l=o,r=(a("79ca"),a("2877")),d=Object(r["a"])(l,s,c,!1,null,"f9a95ab6",null),u=d.exports,_=a("2c92"),h={name:"CreditChannel",components:{channelDetail:u,topMsg:_["a"]},data:function(){return{currentSelect:0,showDialog:!1,page:0,channelList:[],channelLoading:!1,channelFinished:!1,channelError:!1,haveContent:!1,isLoading:"",cardDetailMsg:"",showFalse:!1,confirmPopover:!1}},computed:{proceedsAmount:function(){return this.$route.query.proceedsAmount},rankOrder:function(){return this.$store.state.userInfo.rank_order},computeRate:function(){return function(t){return(100*t.financial_rule.rate).toFixed(2)}},computeFee:function(){return function(t){return(t.financial_rule.fee/100).toFixed(2)}}},created:function(){this.thisTitle()},destroyed:function(){},methods:{thisTitle:function(){document.title="收款通道"},toggle:function(t){this.currentSelect=t},gotoChannelDetail:function(t){this.cardDetailMsg=this.channelList[t],this.showDialog=!0},valueClose:function(t){this.showDialog=t},getChannelFun:function(){var t=this;t.$api.proceeds.getChannel({page:this.page,pay_provider_code:"newCode",size:"10"}).then(function(e){var a=e.data.data.total_pages;t.page<a?0===e.data.data.content.length?(t.haveContent=!1,t.channelLoading=!1,t.channelFinished=!0):(t.channelList=t.channelList.concat(e.data.data.content),t.page++,t.haveContent=!0,t.channelLoading=!1):t.page===a?(t.channelLoading=!1,t.channelFinished=!0,t.channelList=t.channelList.concat(e.data.data.content),t.page++):(t.channelLoading=!1,t.channelFinished=!0)}).catch(function(){t.channelLoading=!1,t.channelError=!0,t.haveContent=!0})},confirmNext:function(){var t=this,e=t.channelList[t.currentSelect].code,a=t.channelList[t.currentSelect].name,n=t.channelList[t.currentSelect].channel_config.trade_config_data.support_choose_city;this.$store.commit("SET_CHOOSE_CITY",n);var i=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."});t.$api.proceeds.getSettle({channel_code:e,total_amount:100*t.proceedsAmount}).then(function(n){i.clear(),t.$store.commit("SET_SETTLE_MSG",n.data.data),t.$router.push({path:"/selectCard",query:{code:e,amount:t.proceedsAmount,channelName:a}})})}}},g=h,f=(a("2464"),Object(r["a"])(g,n,i,!1,null,"cb079800",null));e["default"]=f.exports},e4d1:function(t,e,a){},f0b7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABcCAMAAACSh4HAAAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMAVWbwzIha+wz2Fmm8uKsSsq5iCMJ15jEpHvjsy5JuaEzfn0LPpIBMC3spAAACYUlEQVRo3rzQOw7CMBBF0SESxIF8SOKKJkrl/e+QgmIkXmQ39j1LOPYv3M8+1XbegxXsMTURd8vrUiOb5cXUyGhZzz410j8t55WaOSxnTA64lunYVRT9ujh9s4pu6acrTw/BKgqDXxemZ6tq9mtkWq+pab0uT7PXh0wD1zLNXOs0da3TzLVOU9c6zV13Mk1c6zRwDUzLNTAt18y0XlPTeg1N6zU0rdfQtFv9mph2j8vrqdW0Xk9X06s149fLxfTDRINrYLp0vQDTl9cbMe3XGzSt19S0XkPTeg1N6zU1rdfQtF4z0y58/JqYdm+/Rqb1GprWa58evu3Ya2+CMBiG4UcQS1WkE8tB0DFP7///h/vQ6sIGhS4cYsL1ueROmtI36bKNkBGMIimWbfhrr/dWT7C9PfzuIciCA4MzWRCIycKH+cRaiEE2ChgsyQKzC8cw+CIL3C7MfDTyGVlwn2HhGV1IuaJRScrFMwp+hVcw8kk5odGpZVO0jV0YN7Usj9AgytWKG/oNP0g5t/3FXs/hjOkP1qi1zklJu4ZZtzACUgLz7bFF17DbMVyS6Xx5pF17D+PwKhu6W/QfThhpwRoVWUDaMR0gDElPrgzxEj5cepLoIWwcP/y+yCIA2eLO/wwvo89/hP2CKvKcVWeXj3Yrq7AWFmRQhBgqDF9QI+FjkLAmj1SLn4FBw0i3VEOkGDCsXQNGFSxIgGHDWiYPnDR+kBkwQliL0tKR0inTCEAfYXtzuIUzVXgzh1FvDs/h9w2fFiO5/IRHNnn4SJNwEdMkYuxoEjsknCbAEyARMaNxxSLBN+2j/Rbxc+RoAAAAAElFTkSuQmCC"}}]);