(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96322516"],{"2a1b":function(e,t,s){},"2c92":function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isWechat?e._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:e.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("p",[e._v(e._s(e.headerName))]),e.shareShow?s("span",{staticClass:"shareSheet",on:{click:e.shareSheet}},[e._v("分享")]):e._e()])])},a=[],n={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(e,t){e.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},i=n,l=(s("4373"),s("2877")),c=Object(l["a"])(i,o,a,!1,null,"208c730d",null);t["a"]=c.exports},4373:function(e,t,s){"use strict";var o=s("e4d1"),a=s.n(o);a.a},5367:function(e,t,s){"use strict";var o=s("2a1b"),a=s.n(o);a.a},e179:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bgfff minHeight100vh"},[s("top-msg",{attrs:{"header-name":"找回密码"}}),s("div",{staticClass:"con_body"},[s("div",{staticClass:"form_cells form_cells_login overflowHidden"},[s("div",{staticClass:"form_cell"},[e._m(0),s("div",{staticClass:"form_cellBd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],staticClass:"form_input",attrs:{type:"number",placeholder:"输入您绑定的手机号码",maxlength:"11"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value)}}})])]),s("div",{staticClass:"form_cell"},[e._m(1),s("div",{staticClass:"form_cellBd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"form_input",attrs:{type:"number",placeholder:"输入验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),s("div",{staticClass:"form_cellFt"},[e.isGetCode?s("button",{staticClass:"btn_stay"},[e._v("\n            "+e._s(e.num)+"s后重发\n          ")]):s("button",{staticClass:"btn_getCode",on:{click:e.getCodeFun}},[e._v("\n            获取验证码\n          ")])])]),s("div",{staticClass:"form_cell"},[e._m(2),s("div",{staticClass:"form_cellBd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form_input",attrs:{type:"password",placeholder:"设置新的密码（6~12个数字或字母）"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),s("div",{staticClass:"form_cell"},[e._m(3),s("div",{staticClass:"form_cellBd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.repassword,expression:"repassword"}],staticClass:"form_input",attrs:{type:"password",placeholder:"再次输入您的密码"},domProps:{value:e.repassword},on:{input:function(t){t.target.composing||(e.repassword=t.target.value)}}})])])]),s("div",{staticClass:"btn_warp"},[s("button",{staticClass:"btn btn_submit",on:{click:e.submitReset}},[e._v("\n        提交\n      ")])]),1==e.bg?s("div",{staticClass:"bg"}):e._e(),1==e.Popover?s("div",{staticClass:"flex-column-center",attrs:{id:"Popover"}},[s("i",{class:["iconfont",1==e.judge?"icon-gou maincolor":"icon-guanbi color999"]}),s("span",[e._v(e._s(1==e.judge?"密码重置成功":"密码重置失败"))]),s("div",{staticClass:"btn btn_submit pbtn",on:{click:function(t){1==e.judge?e.successgo():e.popoverhide()}}},[e._v("\n        "+e._s(1==e.judge?"去登陆":"返回")+"\n      ")])]):e._e()])],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form_cellHd flex flex_align"},[s("span",[e._v("手机号码")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form_cellHd flex flex_align"},[s("span",[e._v("验证码")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form_cellHd flex flex_align"},[s("span",[e._v("新密码")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form_cellHd flex flex_align"},[s("span",[e._v("确认密码")])])}],n=s("2c92"),i={name:"ForgetPassword",components:{topMsg:n["a"]},data:function(){return{tel:"",code:"",codeToken:"",isGetCode:!1,num:60,timer:"",password:"",repassword:"",bg:0,Popover:0,judge:1}},created:function(){},methods:{thisTitle:function(){document.title="找回密码"},getCodeFun:function(){var e=this,t=function(t){return e.$dialog({title:t,showCancelButton:!1,confirmButtonText:"确定",cancelButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};if(e.tel)if(e.$util.isPhone(e.tel)){e.isGetCode||(e.isGetCode=!0,e.timer=setInterval(function(){0!==e.num?e.num--:(e.isGetCode=!1,e.num=60,clearInterval(e.timer))},1e3));var s={phone:e.tel};e.$api.login.getCode(s).then(function(t){console.log(t),e.codeToken=t.data.data.token}).catch(function(t){console.log(t),e.isGetCode=!1,e.num=60,clearInterval(e.timer)})}else t("请输入正确的手机号码");else t("请输入您的手机号码")},submitReset:function(){var e=this,t=function(t){return e.$dialog({title:t,showCancelButton:!1,confirmButtonText:"确定",cancelButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};if(e.tel)if(e.$util.isPhone(e.tel))if(e.code)if(e.password&&e.repassword)if(e.password!==e.repassword)t("两次输入的密码不一致，请重新输入");else{var s={code_input:e.code,code_token:e.codeToken,password:e.password,phone:e.tel};e.$api.login.retrievePassword(s).then(function(){e.judge=1,e.popovershow()}).catch(function(){e.judge=0,e.popovershow()})}else t("请输入您的新密码");else t("请输入收到的验证码");else t("请输入正确的手机号码");else t("请输入您的手机号码")},popovershow:function(){this.bg=1,this.Popover=1},popoverhide:function(){this.bg=0,this.Popover=0},successgo:function(){this.$router.push("/login")}}},l=i,c=(s("5367"),s("2877")),r=Object(c["a"])(l,o,a,!1,null,"1c741725",null);t["default"]=r.exports},e4d1:function(e,t,s){}}]);