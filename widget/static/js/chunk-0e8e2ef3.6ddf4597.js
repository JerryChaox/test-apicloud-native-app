(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e8e2ef3"],{"1b39":function(t,e,i){"use strict";var a=i("9dde"),s=i.n(a);s.a},"24d1":function(t,e,i){"use strict";var a=i("7af0"),s=i.n(a);s.a},"2d4f":function(t,e,i){"use strict";var a=i("62d1"),s=i.n(a);s.a},"61f8":function(t,e,i){t.exports=i.p+"static/img/home-bg-up.da0354cd.png"},"62d1":function(t,e,i){},"672b":function(t,e,i){"use strict";i.r(e);var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mgb100"},[i("top-msg",{attrs:{"header-name":"选择银行卡"}}),i("div",{staticClass:"con_body"},[i("div",{staticClass:"bg"},[t._m(0),i("div",{staticClass:"bgMsg"},[i("div",{staticClass:"flex-row-between colorfff size24"},[i("div",{staticClass:"bold"},[i("div",[t._v("当前通道：")]),i("div",{staticClass:"mt5"},[t._v("\n              "+t._s(t.channelName)+"\n            ")])]),i("div",[i("div",[t._v("手续费："+t._s((t.wrapTotalAmount-t.wrapPaybackAmount-t.computeFee).toFixed(2))+"元")]),i("div",{staticClass:"mt5"},[t._v("\n              结算费："+t._s(t.computeFee)+"元/笔\n            ")])])])])]),i("div",{staticClass:"tongdaobg"},[i("div",{staticClass:"flex-vertical-centering tongdao"},[i("span",[t._v("付款金额 (元)")]),i("p",{staticClass:"colorfff"},[t._v("\n          "+t._s(t.wrapTotalAmount)+"\n        ")]),i("i",{staticClass:"iconfont icon-xia xia colorcd"}),i("span",[t._v("实际到账金额 (元)")]),i("p",{staticClass:"colorfff"},[t._v("\n          "+t._s(t.wrapPaybackAmount)+"\n        ")])])]),i("div",{staticClass:"select_content"},[i("div",{staticClass:"select_make"},[t.chooseCity?i("div",{staticClass:"form_cellBd clear",on:{click:function(e){t.areaPicker=!0}}},[i("span",{staticClass:"size30 color999"},[t._v("选择交易城市")]),i("span",{staticClass:"color999 rt size30"},[t._v("\n            "+t._s(t.cityVal.name)+"\n            "),i("van-icon",{staticClass:"size24",attrs:{name:"arrow"}})],1)]):t._e(),t.industryList&&""!=t.industryList?i("div",{staticClass:"form_cellBd clear",on:{click:function(e){t.industryPicker=!0}}},[i("span",{staticClass:"size30 color999"},[t._v("选择行业")]),i("span",{staticClass:"color999 rt size30"},[t._v("\n            "+t._s(t.industryName)+"\n            "),i("van-icon",{attrs:{name:"arrow"}})],1)]):t._e()]),i("div",{staticClass:"select_warp"},[i("div",{staticClass:"select_title flex_sb"},[i("div",{staticClass:"w100 flex-row-between"},[i("span",{staticClass:"size28 color999"},[t._v("请选择贷记卡")]),i("span",{staticClass:"size28 maincolor",on:{click:function(e){return t.gotoChangeCard("creditCard",t.creditCardMsg.id)}}},[t._v("更换")])])]),t.creditCardMsgAdd?i("div",{staticClass:"card_add"},[i("router-link",{staticClass:"btn2 flex-vertical-centering",attrs:{to:{path:"/addCreditCard",query:{status:"add"}}}},[i("div",{staticClass:"flex-row-center"},[i("svg",{staticClass:"icon add_img",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-tianjiajihua"}})]),i("span",[t._v("添加贷记卡")])])])],1):t._e(),i("div",{staticClass:"card_warp"},[t.creditCardMsgAdd?t._e():i("div",{staticClass:"select_card flex flex_alCen"},[i("div",{staticClass:"card_logo w25"},[t.creditCardMsg.bank_info.bank_logo_image?i("img",{attrs:{src:t.creditCardMsg.bank_info.bank_logo_image.url}}):t._e()]),t.creditCardMsg?i("div",{staticClass:"w75 lineheight70"},[i("h5",{staticClass:"colorfff size30"},[t._v("\n                "+t._s(t.creditCardMsg.bank_info.name)+"\n              ")]),i("p",{staticClass:"colorfff size36"},[t._v("\n                "+t._s("**** **** *** "+t.creditCardMsg.card_info.card_no.substr(t.creditCardMsg.card_info.card_no.length-4))+"\n              ")])]):t._e()])])]),i("div",{staticClass:"select_warp"},[i("div",{staticClass:"select_title flex_sb"},[i("div",{staticClass:"w100 flex-row-between"},[i("span",{staticClass:"size28 color999"},[t._v("请选择借记卡")]),i("span",{staticClass:"size28 maincolor",on:{click:function(e){return t.gotoChangeCard("cashCard",t.debitCardMsg.id)}}},[t._v("更换")])])]),t.debitCardMsgAdd?i("div",{staticClass:"card_add"},[i("router-link",{staticClass:"btn2 flex-vertical-centering",attrs:{to:{path:"/addCard",query:{status:"add"}}}},[i("div",{staticClass:"flex-row-center"},[i("svg",{staticClass:"icon add_img",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-tianjiajihua"}})]),i("span",[t._v("添加借记卡")])])])],1):t._e(),i("div",{staticClass:"card_warp"},[t.debitCardMsgAdd?t._e():i("div",{staticClass:"select_card2 flex flex_alCen"},[i("div",{staticClass:"card_logo w25"},[t.debitCardMsg.bank_info.bank_logo_image?i("img",{attrs:{src:t.debitCardMsg.bank_info.bank_logo_image.url}}):t._e()]),t.debitCardMsg?i("div",{staticClass:"w75 lineheight70"},[i("h5",{staticClass:"colorfff size30"},[t._v("\n                "+t._s(t.debitCardMsg.bank_info.name)+"\n              ")]),i("p",{staticClass:"colorfff size36"},[t._v("\n                "+t._s("**** **** *** "+t.debitCardMsg.card_info.card_no.substr(t.debitCardMsg.card_info.card_no.length-4))+"\n              ")])]):t._e()])])])])]),i("div",{staticClass:"btn_warp"},[t.isSubmit?t._e():i("button",{staticClass:"btn btn_pay",on:{click:t.payFun}},[t._v("\n      确认\n    ")]),t.isSubmit?i("button",{staticClass:"btn btn_pay btn-unClick"},[t._v("\n      已提交\n    ")]):t._e()]),i("van-popup",{attrs:{position:"bottom"},model:{value:t.areaPicker,callback:function(e){t.areaPicker=e},expression:"areaPicker"}},[i("area-search-picker",{staticClass:"select_city",on:{selectArea:t.selectArea}})],1),i("van-popup",{attrs:{position:"bottom"},model:{value:t.industryPicker,callback:function(e){t.industryPicker=e},expression:"industryPicker"}},[i("van-picker",{attrs:{"show-toolbar":"",columns:t.industryList},on:{cancel:t.channelCodeCancel,confirm:t.channelCodeConfirm}})],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("img",{attrs:{src:i("61f8")}})])}],r=(i("ac6a"),i("7f7f"),i("2c92")),c=i("494e"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bgfff"},[i("div",[t._m(0),i("div",{staticClass:"search_warp"},[i("i",{staticClass:"icon_search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search_input",attrs:{type:"text",placeholder:"请输入城市名称关键词"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})])]),i("div",{staticClass:"search_content selectcity"},[i("mt-index-list",{attrs:{height:456}},t._l(t.bankListArr,function(e,a){return i("mt-index-section",{key:a,attrs:{index:a}},t._l(e,function(e,a){return i("li",{key:a,staticClass:"search_item",on:{click:function(i){return t.clickCard(e)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)}),1)],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search_title"},[i("h5",{staticClass:"size36 color333"},[t._v("\n        选择城市\n      ")])])}],l=(i("456d"),i("55dd"),i("bd86")),u=i("76a0"),C=(i("8635"),i("f1a6"),{name:"AreaSearchPicker",components:(a={},Object(l["a"])(a,u["IndexList"].name,u["IndexList"]),Object(l["a"])(a,u["IndexSection"].name,u["IndexSection"]),a),data:function(){return{bankListArr:{},searchValue:"",resultsList:""}},computed:{bankList:function(){return this.$store.state.bankList}},watch:{searchValue:function(t,e){var i=String(t).toUpperCase(),a=[];this.resultsList.forEach(function(t){-1===String(t.name).indexOf(i)&&-1===String(t.first_pinyin_letter).indexOf(i)||a.push(t)}),this.bankListArr=a.reduce(function(t,e){return t[e.first_pinyin_letter[0]]||(t[e.first_pinyin_letter[0]]=[]),t[e.first_pinyin_letter[0]].push(e),t},{}),this.bankListArr=this.objKeySort(this.bankListArr)}},created:function(){this.getCityListFun()},methods:{thisTitle:function(){document.title="选择银行卡"},getCityListFun:function(){var t=this;t.$api.proceeds.getCityList().then(function(e){console.log(e),t.resultsList=e.data.data,t.bankListArr=t.resultsList.reduce(function(t,e){return console.log(t),t[e.first_pinyin_letter[0]]||(t[e.first_pinyin_letter[0]]=[]),t[e.first_pinyin_letter[0]].push(e),t},{}),t.bankListArr=t.objKeySort(t.bankListArr)})},objKeySort:function(t){for(var e=Object.keys(t).sort(),i={},a=0;a<e.length;a++)i[e[a]]=t[e[a]];return i},clickCard:function(t){this.$emit("selectArea",t)}}}),f=C,h=(i("24d1"),i("2d4f"),i("2877")),_=Object(h["a"])(f,d,o,!1,null,"0bcbd21e",null),g=_.exports,p={name:"SelectCard",components:{topMsg:r["a"],AreaSearchPicker:g},data:function(){return{channelCode:this.$util.getQueryVariable("code"),totalAmount:100*this.$util.getQueryVariable("amount"),channelName:decodeURIComponent(this.$util.getQueryVariable("channelName")),debitCardMsg:"",debitCardMsgList:"",debitCardMsgAdd:!0,creditCardMsg:"",creditCardMsgList:"",creditCardMsgAdd:!0,isLoading:"",isSubmit:!1,areaList:"",cityVal:"",areaPicker:!1,industryList:[{text:"杭州",texts:"杭州"},{texts:"杭州",text:"宁波"},{texts:"杭州",text:"温州"}],industryPicker:!1,industryVal:"",industryName:"",chooseCity:!0}},computed:{currentDebitCard:function(){return this.$store.state.currentDebitCard},currentCreditCard:function(){return this.$store.state.currentCreditCard},computeRate:function(){return(100*this.settleMsg.rate).toFixed(2)},computeFee:function(){return(this.settleMsg.fee/100).toFixed(2)},settleMsg:function(){return this.$store.state.settleMsg},wrapTotalAmount:function(){return(this.settleMsg.total_amount/100).toFixed(2)},wrapPaybackAmount:function(){return(this.settleMsg.payback_amount/100).toFixed(2)},cityRecord:{get:function(){return JSON.parse(localStorage.getItem("selectCardArea"))},set:function(t){localStorage.setItem("selectCardArea",JSON.stringify(t))}}},watch:{creditCardMsg:{handler:function(t,e){},deep:!0}},created:function(){this.init(),this.thisTitle(),this.getIndustryListFun(),this.settleMsg||(this.isLoading=this.$toast("请重新下单"),this.$router.push("/proceeds")),this.currentDebitCard?(this.debitCardMsg=this.currentDebitCard,this.debitCardMsgAdd=!1):this.getCardListFun(),this.currentCreditCard?(this.creditCardMsg=this.currentCreditCard,this.creditCardMsgAdd=!1):this.getCreditCardListFun(),this.cityRecord&&(this.cityVal=this.cityRecord),this.chooseCity=this.$store.state.chooseCity},methods:{selectArea:function(t){this.cityVal=t,this.cityRecord=t,this.areaPicker=!1},channelCodeConfirm:function(t,e){var i=this;i.industryVal=i.industryList[e].channel_industry_id,i.industryName=t.name,this.industryPicker=!1},channelCodeCancel:function(){this.industryPicker=!1},channelCodeChange:function(t,e,i){var a=this;a.industryVal=a.industryList[i].channel_industry_id,a.industryName=e.name},onAddrConfirm:function(t){console.log(t),this.areaPicker=!1,this.cityVal=t[0].name+" "+t[1].name,console.log(this.cityVal)},onAddrCancel:function(){this.areaPicker=!1},init:function(){this.areaList=c["a"]},thisTitle:function(){document.title="选择银行卡"},gotoChangeCard:function(t,e){this.$router.push({path:"/changeCard",query:{type:t,id:e}})},getIndustryListFun:function(){var t=this;t.$api.proceeds.getIndustryList({channelCode:t.channelCode}).then(function(e){e.data.data.forEach(function(t,e){t.text=t.name}),t.industryList=e.data.data}).catch(function(t){console.log(t)})},getCardListFun:function(){var t=this;t.$api.card.getCardList("DEBIT").then(function(e){console.log(e),t.debitCardMsgList=e.data.data,0!==t.debitCardMsgList.length?(t.debitCardMsgAdd=!1,t.debitCardMsg=t.debitCardMsgList[0],t.$store.commit("SET_CURRENT_DEBIT_CARD",t.debitCardMsg)):t.debitCardMsgAdd=!0})},getCreditCardListFun:function(){var t=this;t.$api.card.getCardList("CREDIT").then(function(e){t.creditCardMsgList=e.data.data,0!==t.creditCardMsgList.length?(t.creditCardMsgAdd=!1,t.creditCardMsg=t.creditCardMsgList[0],t.$store.commit("SET_CURRENT_CREDIT_CARD",t.creditCardMsg)):t.creditCardMsgAdd=!0}).catch(function(t){console.log(t)})},payFun:function(){var t=this,e=this,i=function(t){return e.$dialog({title:t,showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};if(e.creditCardMsg.id)if(e.debitCardMsg.id)if(e.chooseCity&&!e.cityVal.code)i("请先选择交易城市！");else{var a={channel_code:e.channelCode,deposit_bank_id:e.creditCardMsg.id,payback_bank_id:e.debitCardMsg.id,total_amount:e.totalAmount,industry_id:e.industryVal,settlement_id:e.settleMsg.settlement_id};e.chooseCity&&(a.city_code=e.cityVal.code),e.$store.commit("SET_ORDER_DATA",a),e.$dialog({title:"确认即发起交易",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",className:"dialog",closeOnClickOverlay:!0}).then(function(){e.isLoading=t.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),e.$api.proceeds.tradePay(a).then(function(t){e.isLoading.clear(),t=t.data,"200000"===t.code&&(e.isSubmit=!0,e.$dialog({title:"请留意信用卡扣款是否成功及储蓄卡是否到账",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}).then(function(){e.$router.push("/proceeds")}))}).catch(function(t){e.isLoading.clear();var i=t.data;if("921006"!==i.code&&"921010"!==i.code){if("921008"!==i.code)return"921009"===i.code?(e.$toast({message:i.msg+"...请重新编辑",duration:2500,forbidClick:!0}),void e.$router.push({path:"/bindCard",query:{cardId:a.deposit_bank_id,channelCode:a.channel_code}})):void e.$toast({message:i.msg,duration:3e3,forbidClick:!0});e.$toast({message:i.msg,duration:2500,forbidClick:!0})}else e.$router.push({path:"/bindCard",query:{cardId:a.deposit_bank_id,channelCode:a.channel_code}})})}).catch(function(){console.log("cancel")})}else i("请先添加借记卡！");else i("请先添加贷记卡！")},judgeBindCard:function(){var t=this;if("NONE"===t.settleMsg.pay_provider_config.card_binding_type)return!1;if("INTERNAL_PAGE"===t.settleMsg.pay_provider_config.card_binding_type){if(t.demandChannelCardFun())return!1;t.$router.push({path:"/bindCard",query:{cardId:t.creditCardMsg.id,channelCode:t.channelCode}})}else if("EXTERNAL_URL"===t.settleMsg.pay_provider_config.card_binding_type)return!0},demandChannelCardFun:function(){var t=this;t.$api.card.demandChannelCard("CREDIT",t.creditCardMsg.id,t.channelCode).then(function(t){return!!t.data.data.has_succeeded}).catch(function(t){console.log(t)})}}},m=p,b=(i("9cf5"),i("1b39"),Object(h["a"])(m,s,n,!1,null,"d5f74b74",null));e["default"]=b.exports},"7af0":function(t,e,i){},"9cf5":function(t,e,i){"use strict";var a=i("b3c2"),s=i.n(a);s.a},"9dde":function(t,e,i){},b3c2:function(t,e,i){}}]);