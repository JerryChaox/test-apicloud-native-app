(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a3c069a"],{"26fc":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tabBar"},[e("ul",{staticClass:"list"},[e("li",{staticClass:"item",on:{click:function(s){return t.gotoAddress({path:"/home"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.homePage?"#icon-homes":"#icon-home"}})]),e("div",{class:["text",t.homePage?"on":""]},[t._v("\n        首页\n      ")])]),e("li",{staticClass:"item",on:{click:function(s){return t.gotoAddress({path:"/weike"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.homeIndex?"#icon-weikes":"#icon-weike"}})]),e("div",{class:["text",t.homeIndex?"on":""]},[t._v("\n        微课\n      ")])]),e("li",{staticClass:"item",on:{click:function(s){return t.gotoAddress({path:"/share"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.recommendIndex?"#icon-fenxiangs":"#icon-fenxiang"}})]),e("div",{class:["text",t.recommendIndex?"on":""]},[t._v("\n        分享\n      ")])]),e("li",{staticClass:"item",on:{click:function(s){return t.gotoAddress({path:"/consult"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.shoppingMall?"#icon-zixuns":"#icon-zixun"}})]),e("div",{class:["text",t.shoppingMall?"on":""]},[t._v("\n        资讯\n      ")])]),e("li",{staticClass:"item",on:{click:function(s){return t.gotoAddress({path:"/center"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.centerIndex?"#icon-wodes":"#icon-wode"}})]),e("div",{class:["text",t.centerIndex?"on":""]},[t._v("\n        我的\n      ")])])])])},a=[],n={name:"TabBar",props:{homeIndex:{type:Boolean,default:!1},recommendIndex:{type:Boolean,default:!1},centerIndex:{type:Boolean,default:!1},homePage:{type:Boolean,default:!1},shoppingMall:{type:Boolean,default:!1}},data:function(){return{}},watch:{},created:function(){},methods:{gotoAddress:function(t){this.$router.push(t)},toMall:function(){this.$dialog({title:"提示",message:"此功能待开放",confirmButtonText:"确定"})}}},o=n,c=(e("769b"),e("2877")),l=Object(c["a"])(o,i,a,!1,null,"1e54740f",null);s["a"]=l.exports},"35f1":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mgb110 center-page"},[e("div",{staticClass:"con_body"},[e("div",{staticClass:"userInfo_container position_re bgfff"},[e("div",{staticClass:"userInfo_warp"},[t.userInfo?e("div",[t.userInfo.id_card_name?e("h5",{staticClass:"colorfff size48 textEllipsis w85"},[t._v("\n            "+t._s(t.userInfo.id_card_name)+"\n          ")]):e("h5",{staticClass:"colorfff size48 textEllipsis w85"},[t._v("\n            "+t._s(t.userInfo.username)+"\n          ")]),e("div",{staticClass:"flex-row-center"},[e("span",{staticClass:"colorfffO8 size24"},[t._v(t._s(t.userInfo?t.userInfo.rank_name:""))]),e("router-link",{staticClass:"btn_member",attrs:{to:"/team"}},[t._v("\n              团队\n            ")])],1)]):t._e(),t.userInfo?e("div",{staticClass:"flex_sb mt20"},["AUTHORIZED"==t.userInfo.auth_state?[t._m(0)]:"UNAUTHORIZED"==t.userInfo.auth_state?[e("div",{staticClass:"userInfo_status flex-row-center mb22"},[e("i",{staticClass:"iconfont icon-weirenzheng icon_authentication colorcd"}),e("span",{staticClass:"colorf56 size24",on:{click:function(s){return t.gotoAuthentication("add")}}},[t._v("未认证")])])]:"AUTHORIZING"==t.userInfo.auth_state?[e("div",{staticClass:"userInfo_status flex-row-center mb22"},[e("i",{staticClass:"iconfont icon-weirenzheng icon_authentication colorcd"}),e("span",{staticClass:"colorf56 size24",on:{click:function(s){return t.gotoAuthentication("edit")}}},[t._v("认证中")])])]:"DENIED"==t.userInfo.auth_state?[e("div",{staticClass:"userInfo_status flex-row-center mb22"},[e("i",{staticClass:"iconfont icon-weirenzheng icon_authentication colorcd"}),e("span",{staticClass:"colorf56 size24",on:{click:function(s){return t.gotoAuthentication("edit")}}},[t._v("认证失败")])])]:t._e(),e("div",{staticClass:"flex_column textalign_right w65"},[e("span",{staticClass:"size24 colorf56O8 mr20"},[t._v("积分余额")]),e("p",{staticClass:"size72 colorfff textEllipsis"},[t._v("\n              "+t._s(t.userInfo?t.userInfo.points_balance:"0.00")+"\n            ")])])],2):t._e()])]),e("div",{staticClass:"w100 user_nav flex-row-between"},[e("router-link",{staticClass:"w30 flex_column flex_alCen flex_sb bgfff user_nav_item",attrs:{to:"/myWallet"}},[e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zhangdan1"}})])]),e("div",{staticClass:"function_title"},[e("span",{staticClass:"color333 size24"},[t._v("我的钱包")])])]),e("router-link",{staticClass:"w30 flex_column flex_alCen flex_sb bgfff user_nav_item",attrs:{to:"/team"}},[e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-tuandui"}})])]),e("div",{staticClass:"function_title"},[e("span",{staticClass:"color333 size24"},[t._v("我的团队")])])]),e("router-link",{staticClass:"w30 flex_column flex_alCen flex_sb bgfff user_nav_item",attrs:{to:"/member"}},[e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-huiyuan1"}})])]),e("div",{staticClass:"function_title"},[e("span",{staticClass:"color333 size24"},[t._v("会员中心")])])])],1),e("div",{staticClass:"w100 user_nav flex-row-between"},[e("router-link",{staticClass:"w30 flex_column flex_alCen flex_sb bgfff user_nav_item",attrs:{to:"/myCard"}},[e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-yinhangka1"}})])]),e("div",{staticClass:"function_title"},[e("span",{staticClass:"color333 size24"},[t._v("银行卡管理")])])]),e("router-link",{staticClass:"w30 flex_column flex_alCen flex_sb bgfff user_nav_item",attrs:{to:"/repayment"}},[e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-huankuanjin1"}})])]),e("div",{staticClass:"function_title"},[e("span",{staticClass:"color333 size24"},[t._v("还款金")])])]),e("div",{staticClass:"w30 flex_column flex_alCen flex_sb bgfff user_nav_item"},[e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-lisnxikefu"}})])]),t._m(1)])],1),e("div",{staticClass:"form_cells form_cells_form bgfff"},[e("router-link",{staticClass:"list_line flex-row-between",attrs:{to:"/faq"}},[e("div",{staticClass:"flex-row-center"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-changjianwenti"}})]),e("span",{staticClass:"size28 color333"},[t._v("常见问题")])]),e("i",{staticClass:"iconfont icon-Path"})]),e("router-link",{staticClass:"list_line flex-row-between",attrs:{to:"/agreement"}},[e("div",{staticClass:"flex-row-center"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-yonghuxieyi"}})]),e("span",{staticClass:"size28 color333"},[t._v("用户协议及服务条款")])]),e("i",{staticClass:"iconfont icon-Path"})]),e("router-link",{staticClass:"list_line flex-row-between",attrs:{to:"/set"}},[e("div",{staticClass:"flex-row-center"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-shezhi"}})]),e("span",{staticClass:"size28 color333"},[t._v("设置")])]),e("i",{staticClass:"iconfont icon-Path"})])],1)]),e("van-dialog",{attrs:{"show-confirm-button":t.showFalse,"before-close":t.beforeCodeDialog,"close-on-click-overlay":""},model:{value:t.codeDialog,callback:function(s){t.codeDialog=s},expression:"codeDialog"}},[e("div",{staticClass:"dialog_channel"},[e("div",{staticClass:"textalign_right"},[e("i",{staticClass:"icon_close",on:{click:t.closeDialog}})]),e("div",{staticClass:"dialog_content"},[e("div",{staticClass:"dialog_title cen"},[e("h3",{staticClass:"size48 color2e5"},[t._v("\n            "+t._s(t.STATIC_INFO.appName)+"\n          ")]),e("p",{staticClass:"size24 color666"},[t._v("\n            "+t._s(t.STATIC_INFO.appName)+" 无需用卡\n          ")])]),e("div",{},[e("div",{staticClass:"dialog_code"},[e("qrcode",{attrs:{value:t.codeValue,src:t.codeValue,options:{width:144},tag:"img"}})],1),e("p",{staticClass:"size24 color999 cen"},[t._v("\n            扫二维码注册"+t._s(t.STATIC_INFO.appName)+"\n          ")])])])])]),e("van-dialog",{attrs:{"show-confirm-button":t.showFalse,"class-name":"server_warp","close-on-click-overlay":""},model:{value:t.serverDialog,callback:function(s){t.serverDialog=s},expression:"serverDialog"}},[e("div",{staticClass:"server_channel"},[e("div",{staticClass:"server_content"},[e("div",{staticClass:"server_title cen"},[e("h3",{staticClass:"size36 color000 bold"},[t._v("\n            "+t._s(t.STATIC_INFO.appName)+"，为您服务\n          ")])]),e("div",[e("div",{staticClass:"cen server_item size26"},[e("p",[t._v("客服热线："+t._s(t.STATIC_INFO.servicePhoneNumber))]),e("button",{staticClass:"btn2 server_btn",attrs:{type:"button"},on:{click:t.showServerTel}},[t._v("\n              去拨打\n            ")])]),e("div",{staticClass:"cen server_item"},[e("p",[t._v("客服微信："+t._s(t.STATIC_INFO.serviceWechatNo))]),e("button",{staticClass:"btn2 server_btn",attrs:{type:"button"},on:{click:t.gotoAddServer}},[t._v("\n              去添加\n            ")])])])])])]),e("van-dialog",{attrs:{"show-confirm-button":t.showFalse,"class-name":"server_warp","close-on-click-overlay":""},model:{value:t.serverWeChatDialog,callback:function(s){t.serverWeChatDialog=s},expression:"serverWeChatDialog"}},[e("div",{staticClass:"server_channel"},[e("div",{staticClass:"server_content"},[e("div",{staticClass:"server_title cen"},[e("h3",{staticClass:"size36 color333"},[t._v("\n            "+t._s(t.STATIC_INFO.appName)+"，很高兴为您服务\n          ")])]),e("div",[e("div",{staticClass:"server_codeImg"},[e("img",{attrs:{src:t.STATIC_INFO.serviceQrCodePath}})])])])])]),e("van-dialog",{attrs:{"show-confirm-button":t.showFalse,"before-close":t.beforePublicDialog,"close-on-click-overlay":""},model:{value:t.PublicDialog,callback:function(s){t.PublicDialog=s},expression:"PublicDialog"}},[e("div",{staticClass:"paddingtb40 flex-vertical-centering"},[e("div",{staticClass:"color000 size36 bold mt40"},[t._v("\n        关注公众号\n      ")]),e("div",{staticClass:"color666 size26 mt10"},[t._v("\n        长按二维码关注公众号\n      ")]),e("img",{staticClass:"gzhewm",attrs:{src:t.Qrcode}}),e("div",{staticClass:"btn_warp mb40"},[e("button",{staticClass:"btn btn_submit",attrs:{type:"button"},on:{click:t.closePublicDialog}},[t._v("\n          知道了\n        ")])])])]),e("tabbar",{attrs:{"center-index":t.msg}})],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"userInfo_status flex-row-center mb22"},[e("i",{staticClass:"iconfont icon-renzheng icon_authentication colorfff"}),e("span",{staticClass:"colorf56 size24"},[t._v("已认证")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"function_title"},[e("span",{staticClass:"color333 size24"},[t._v("联系客服")])])}],n=e("3213"),o=e("26fc"),c=e("b2e5"),l=e.n(c),r={name:"Center",components:{Qrcode:l.a,tabbar:o["a"]},filters:{parseAmount:n["a"]},data:function(){return{msg:!0,codeDialog:!1,showFalse:!1,serverDialog:!1,serverWeChatDialog:!1,codeValue:"",PublicDialog:!1,Qrcode:""}},computed:{userInfo:function(){return this.$store.state.userInfo}},created:function(){this.$store.dispatch("GetUserInfo"),this.getqrcode(),this.Qrcode=this.STATIC_INFO.officialQrCodePath},methods:{thisTitle:function(){document.title="我的"},getqrcode:function(){var t=this;this.$api.center.getqrcode().then(function(s){console.log(s),s.data.data.agent_qr_code_image&&(t.Qrcode=s.data.data.agent_qr_code_image.url)})},showPublicAddress:function(){this.$dialog({title:"提示",message:"此功能待开放",confirmButtonText:"确定"})},showMyCode:function(){var t=this;this.codeValue=Object({NODE_ENV:"production",VUE_APP_BASE_ADDRESS:"http://bidefu.tatakeji.cn",VUE_APP_BASE_API:"http://bidefu.tatakeji.cn/api",VUE_APP_COLOR_THEME:"black",VUE_APP_DOWNLOAD_URL:"http://downloadpkg.apicloud.com/app/download?path=http://A6015953323754.qiniucdn.apicloud-system.com/0228603681592a240106784c8a934a58_d",VUE_APP_NAME:"必得富",VUE_APP_OFFCIAL_QR_CODE_PATH:"/static/img/sj_code.png",VUE_APP_SERVICE_PHONE_NUMBER:"4000550575",VUE_APP_SERVICE_QR_CODE_PATH:"/static/img/ic_serverCode.png",VUE_APP_SERVICE_WECHAT_NO:"shanjieshenghuo02",BASE_URL:""}).BASE_ADDRESS+"/#/register?referrer="+t.userInfo.username,this.codeDialog=!0},beforeCodeDialog:function(t,s){s()},beforePublicDialog:function(t,s){s()},closeDialog:function(){this.codeDialog=!1},closePublicDialog:function(){this.PublicDialog=!1},gotoWithdraw:function(){this.$router.push("/withdraw")},gotoAuthentication:function(t){this.auth()},showServerTel:function(){window.location.href="tel://"+this.STATIC_INFO.servicePhoneNumber},gotoAddServer:function(){var t=this;this.serverWeChatDialog=!0,setTimeout(function(){t.serverDialog=!1},100)}}},u=r,d=(e("40de"),e("2877")),f=Object(d["a"])(u,i,a,!1,null,"352e435f",null);s["default"]=f.exports},"40de":function(t,s,e){"use strict";var i=e("5169"),a=e.n(i);a.a},5169:function(t,s,e){},"769b":function(t,s,e){"use strict";var i=e("9681"),a=e.n(i);a.a},9681:function(t,s,e){}}]);