(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e5346a2"],{"0234":function(t,a,e){"use strict";var s=e("6f7d"),n=e.n(s);n.a},"05ad":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("top-msg",{attrs:{"header-name":"个人实名认证"}}),e("div",{staticClass:"con_body"},[e("div",{staticClass:"form_cells form_cells_form bgfff mgb20"},[e("div",{staticClass:"form_cell"},[t._m(0),e("div",{staticClass:"form_cellBd"},[e("span",{staticClass:"form_input"},[t._v(t._s(t.name))])])]),e("div",{staticClass:"form_cell"},[t._m(1),e("div",{staticClass:"form_cellBd"},[e("span",{staticClass:"form_input"},[t._v(t._s(t.identify.substr(0,12)+"****"+t.identify.substr(16)))])])])]),e("div",{staticClass:"form_cells form_cells_form bgfff"},[e("div",{staticClass:"form_cell"},[t._m(2),e("div",{staticClass:"form_cellBd"},[e("span",{staticClass:"form_input"},[t._v(t._s(t.cardId))])])]),e("div",{staticClass:"form_cell"},[t._m(3),e("div",{staticClass:"form_cellBd"},[e("span",{staticClass:"form_input"},[t._v(t._s(t.bankSelect.bankNo))])])]),e("div",{staticClass:"form_cell"},[t._m(4),e("div",{staticClass:"form_cellBd"},[e("span",{staticClass:"form_input"},[t._v(t._s(t.cardTel))])])])]),"AUTHORIZING"==t.authStatus?e("div",{staticClass:"btn_warp"},[e("button",{staticClass:"btn btn_check"},[t._v("\n        认证审核中\n      ")])]):t._e(),"DENIED"==t.authStatus?e("div",{staticClass:"btn_warp"},[e("button",{staticClass:"btn btn_warn",on:{click:t.gotoAuthentication}},[t._v("\n        认证失败，请重新认证\n      ")])]):t._e()])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form_cellHd"},[e("label",{staticClass:"form_label"},[t._v("姓名")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form_cellHd"},[e("label",{staticClass:"form_label"},[t._v("身份证")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form_cellHd"},[e("label",{staticClass:"form_label"},[t._v("借记卡号")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form_cellHd"},[e("label",{staticClass:"form_label"},[t._v("所属银行")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form_cellHd"},[e("label",{staticClass:"form_label"},[t._v("预留手机号")])])}],i=e("2c92"),c={name:"AuthenticationStatus",components:{topMsg:i["a"]},data:function(){return{tel:"13323332333",name:"",identify:"",identifyBefore:"",identifyAfter:"",identifyHandle:"",cardId:"",cardTel:"",cardImgFront:"",cardImgAfter:"",authStatus:"",bankSelect:{},bankListArr:[]}},computed:{bankList:function(){return this.$store.state.bankList}},created:function(){this.thisTitle(),this.getAuthenticationFun()},destroyed:function(){this.$notify.clear()},methods:{thisTitle:function(){document.title="个人实名认证"},gotoAuthentication:function(){var t={name:this.name,identify:this.identify,cardId:this.cardId.replace(/\s/g,""),bankSelect:this.bankSelect,cardTel:this.cardTel};this.$router.push({path:"/authentication",query:{items:t}})},getAuthenticationFun:function(){var t=this,a=this;a.$api.center.getAuthentication().then(function(e){"200000"===e.data.code&&(console.log(e.data.data),a.authStatus=e.data.data.auth_state,t.authMsg=e.data.data.auth_msg,a.name=e.data.data.id_card_name,a.identify=e.data.data.id_card_no,a.cardId=e.data.data.bank_card_no.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 "),a.cardTel=e.data.data.bank_card_phone_num,a.$set(a.bankSelect,"bankNo",e.data.data.bank_name),a.$set(a.bankSelect,"text",a.bankList[a.bankSelect.bankNo]),console.log(a.bankList),"DENIED"===t.authStatus&&t.$notify({message:t.authMsg,duration:0,background:"#ff0000"}))}).catch(function(t){console.log(t)})}}},l=c,r=(e("0234"),e("2877")),o=Object(r["a"])(l,s,n,!1,null,"31f217ba",null);a["default"]=o.exports},"2c92":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isWechat?t._e():e("div",{staticClass:"header"},[e("div",{staticClass:"header_body"},[e("span",{staticClass:"goBack",on:{click:t.goBack}},[e("van-icon",{attrs:{name:"arrow-left"}})],1),e("div",{staticClass:"flex-vertical-centering"},[e("p",{staticClass:"textEllipsis"},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?e("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},n=[],i={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(t,a){t.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},c=i,l=(e("a125"),e("2877")),r=Object(l["a"])(c,s,n,!1,null,"3efa7418",null);a["a"]=r.exports},"6f7d":function(t,a,e){},a125:function(t,a,e){"use strict";var s=e("cc0b"),n=e.n(s);n.a},cc0b:function(t,a,e){}}]);