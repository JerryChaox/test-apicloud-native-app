(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-877160b0"],{"2c92":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isWechat?t._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_body"},[a("span",{staticClass:"goBack",on:{click:t.goBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"flex-vertical-centering"},[a("p",{staticClass:"textEllipsis"},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?a("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},s=[],n={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(t,e){t.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},r=n,c=(a("a125"),a("2877")),l=Object(c["a"])(r,i,s,!1,null,"3efa7418",null);e["a"]=l.exports},"5d93":function(t,e,a){"use strict";var i=a("d435"),s=a.n(i);s.a},a125:function(t,e,a){"use strict";var i=a("cc0b"),s=a.n(i);s.a},cc0b:function(t,e,a){},d435:function(t,e,a){},f933:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-msg",{attrs:{"header-name":"获取验证码"}}),a("div",{staticClass:"con_body"},[a("div",{staticClass:"form_cells form_cells_form bgfff"},[a("div",{staticClass:"form_cell"},[t._m(0),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.creditCardId))])])]),a("div",{staticClass:"form_cell"},[t._m(1),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.bankSelect.name))])])]),a("div",{staticClass:"form_cell"},[t._m(2),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.CVN2))])])]),a("div",{staticClass:"form_cell"},[t._m(3),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30 inline_block w30"},[t._v(t._s(t.validityMonthSelect?t.validityMonthSelect:""))]),a("span",[t._v("月")]),a("span",{staticClass:"w10 inline_block cen",staticStyle:{color:"#BEBEBE"}},[t._v(" / ")]),a("span",{staticClass:" size30 inline_block w30"},[t._v(t._s(t.validityYearSelect?t.validityYearSelect:""))]),a("span",[t._v("年")])])]),a("div",{staticClass:"form_cell"},[t._m(4),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.tel))])])]),a("div",{staticClass:"form_cell"},[t._m(5),a("div",{staticClass:"form_cellBd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form_input",attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),a("div",{staticClass:"form_cellFt"},[t.isGetCode?a("button",{staticClass:"btn_stay"},[t._v("\n            "+t._s(t.num)+"s后重发\n          ")]):a("button",{staticClass:"btn_getCode",on:{click:t.getCodeFun}},[t._v("\n            获取验证码\n          ")])])])]),a("div",{staticClass:"form_tip flex_sb"},[a("p",{staticClass:"size26 color999"},[t._v("\n        验证码将发到预留手机号中\n      ")]),a("router-link",{staticClass:"size26 color2e5",attrs:{to:{path:"/addCreditCard",query:{status:"edit",cardId:t.cardId}}}},[t._v("\n        去编辑\n      ")])],1),a("div",{staticClass:"btn_warp"},[a("button",{staticClass:"btn btn_add",on:{click:t.confirmBindCard}},[t._v("\n        保  存\n      ")])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("银行卡号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("所属银行")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("CVN2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("有效期")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("预留手机号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("验证码")])])}],n=a("a34a"),r=a.n(n),c=(a("5f5f"),a("f253")),l=a("2c92");a("5b4d");function o(t,e,a,i,s,n,r){try{var c=t[n](r),l=c.value}catch(o){return void a(o)}c.done?e(l):Promise.resolve(l).then(i,s)}function d(t){return function(){var e=this,a=arguments;return new Promise(function(i,s){var n=t.apply(e,a);function r(t){o(n,i,s,r,c,"next",t)}function c(t){o(n,i,s,r,c,"throw",t)}r(void 0)})}}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h={name:"BindCard",components:u({topMsg:l["a"]},c["a"].name,c["a"]),props:["fromIntelligencePage","hideBindCard","cId","cCode"],data:function(){return{cardId:this.$util.getQueryVariable("cardId"),channelCode:this.$util.getQueryVariable("channelCode"),creditCardId:"",cardName:"",CVN2:"",validity:"",tel:"",code:"",isGetCode:!1,num:60,timer:"",bankSelect:{},bankListArr:[],validityMonthList:[],validityMonthSelect:"",validityYearList:[],validityYearSelect:""}},computed:{currentCreditCard:function(){return this.$store.state.currentCreditCard},settleMsg:function(){return this.$store.state.settleMsg},orderData:function(){return this.$store.state.orderData},bankList:function(){return this.$store.state.bankList}},created:function(){this.fromIntelligencePage&&(this.cardId=this.cId,this.channelCode=this.cCode);for(var t=1;t<13;t++)t<10?this.validityMonthList.push("0"+t):this.validityMonthList.push(t);for(var e=18;e<100;e++)this.validityYearList.push("20"+e);this.thisTitle(),this.getBankListFun(),this.getCreditCardMsg()},methods:{thisTitle:function(){document.title="获取验证码"},getCodeFun:function(){var t=this;t.isGetCode||(t.isGetCode=!0,t.timer=setInterval(function(){0!==t.num?t.num--:(t.isGetCode=!1,t.num=60,clearInterval(t.timer))},1e3)),t.$api.card.bindChannelCard("CREDIT",t.cardId,t.channelCode).then(function(e){t.codeToken=e.data.token}).catch(function(){t.isGetCode=!1,t.num=60,clearInterval(t.timer)})},getCreditCardMsg:function(){if(console.log(this.currentCreditCard),this.creditCardId=this.currentCreditCard.card_info.card_no.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 "),this.$set(this.bankSelect,"name",this.currentCreditCard.bank_info.name),this.$set(this.bankSelect,"bank_no",this.currentCreditCard.bank_info.bank_no),this.CVN2=this.currentCreditCard.card_info.lass_three_cvn2,this.validity=this.currentCreditCard.card_info.valid_date,-1!==this.currentCreditCard.card_info.valid_date.indexOf("/")){var t=this.currentCreditCard.card_info.valid_date.split("/");this.validityMonthSelect=t[0],this.validityYearSelect="20"+t[1]}else this.validityMonthSelect=this.currentCreditCard.card_info.valid_date.substr(0,2),this.validityYearSelect="20"+this.currentCreditCard.card_info.valid_date.substr(2);this.tel=this.currentCreditCard.card_info.card_phone_number},confirmBindCard:function(){var t=d(r.a.mark(function t(){var e,a;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,e.code){t.next=5;break}e.$dialog({title:"请输入收到的验证码",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}),t.next=17;break;case 5:return a={captcha_code:e.code},e.isLoading=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),t.next=9,e.$api.card.bindChannelCardConfirm("CREDIT",e.cardId,e.channelCode,a);case 9:if(!e.fromIntelligencePage){t.next=15;break}e.hideBindCard(),e.$emit("toSuccess"),e.isLoading.clear(),t.next=17;break;case 15:return t.next=17,e.payFun();case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),payFun:function(){var t=this;return t.$api.proceeds.tradePay(t.orderData).then(function(e){t.isLoading.clear(),e=e.data,"200000"===e.code&&("INTERNAL_PAGE"===t.settleMsg.pay_provider_config.param_type?t.$dialog({title:"交易完成",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}):"EXTERNAL_URL"===t.settleMsg.pay_provider_config.param_type&&(window.location.href=e.data.url))}).finally(function(){t.isLoading.clear(),t.$router.push("/proceeds")})},closeStatusPicker:function(t){this.bankSelect=t,this.bankPicker=!1,this.openTouch()},closeValidityMonth:function(t){this.validityMonthSelect=t,this.validityMonthPicker=!1,this.openTouch()},closeValidityYear:function(t){this.validityYearSelect=t,this.validityYearPicker=!1,this.openTouch()},getBankListFun:function(){var t=this;t.$store.dispatch("GetBankList").then(function(){for(var e in t.bankList)t.bankListArr.push({bankNo:e,text:t.bankList[e]})})},selectCard:function(t){this.bankSelect=t,this.bankPicker=!1}}},f=h,_=(a("5d93"),a("2877")),v=Object(_["a"])(f,i,s,!1,null,"f66d5b8c",null);e["default"]=v.exports}}]);