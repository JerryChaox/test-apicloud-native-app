(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cbd3729"],{"260d":function(t,e,a){},"2c92":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isWechat?t._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_body"},[a("span",{staticClass:"goBack",on:{click:t.goBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"flex-vertical-centering"},[a("p",{staticClass:"textEllipsis"},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?a("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},s=[],i={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(t,e){t.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},c=i,o=(a("a125"),a("2877")),r=Object(o["a"])(c,n,s,!1,null,"3efa7418",null);e["a"]=r.exports},8621:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-msg",{attrs:{"header-name":"设置"}}),a("div",{staticClass:"con_body"},[a("router-link",{staticClass:"line flex-row-between",attrs:{to:"/editPassword"}},[a("span",[t._v("修改密码")]),a("i",{staticClass:"iconfont icon-Path"})]),a("router-link",{staticClass:"line flex-row-between",attrs:{to:"/receivingAddress"}},[a("span",[t._v("收货地址")]),a("i",{staticClass:"iconfont icon-Path"})])],1),a("div",{staticClass:"btn_footer"},[a("div",{staticClass:"flex-vertical-centering"},[a("div",{staticClass:"out_btn color0F5 size30",on:{click:t.outLogin}},[t._v("\n        退出登录\n      ")])])])],1)},s=[],i=a("2c92"),c={name:"Set",components:{topMsg:i["a"]},data:function(){return{}},created:function(){this.thisTitle()},methods:{thisTitle:function(){document.title="设置"},outLogin:function(){var t=this;t.$dialog({title:"是否退出系统",message:"退出系统后需重新登录",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"再想想",className:"dialog",closeOnClickOverlay:!0}).then(function(e){"confirm"===e&&t.$store.dispatch("LogOut").then(function(){t.$router.replace("/login")})})}}},o=c,r=(a("a9ac"),a("2877")),l=Object(r["a"])(o,n,s,!1,null,"3b5c5f3c",null);e["default"]=l.exports},a125:function(t,e,a){"use strict";var n=a("cc0b"),s=a.n(n);s.a},a9ac:function(t,e,a){"use strict";var n=a("260d"),s=a.n(n);s.a},cc0b:function(t,e,a){}}]);