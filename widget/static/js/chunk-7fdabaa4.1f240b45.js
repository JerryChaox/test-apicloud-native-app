(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fdabaa4"],{"2c92":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isWechat?t._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:t.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("div",{staticClass:"flex-vertical-centering"},[s("p",{staticClass:"textEllipsis"},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?s("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},i=[],n={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{goBack:function(){api.historyBack({frameName:""},function(t,e){t.status||this.$router.go(-1)})},shareSheet:function(){this.$emit("shareSheet")}}},o=n,r=(s("a125"),s("2877")),c=Object(r["a"])(o,a,i,!1,null,"3efa7418",null);e["a"]=c.exports},"6e6d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("top-msg",{attrs:{"header-name":"收货地址"}}),s("div",{staticClass:"con_body"},[s("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.addressList,function(e,a){return s("div",{key:a,staticClass:"address_item",on:{click:function(s){t.recordId&&t.addressSelected(e)}}},[s("div",{staticClass:"address_user flex-row-between size28 color333 bold"},[s("div",{staticClass:"flex-row-center"},[t.radio==a?s("span",{staticClass:"default"},[t._v("默认")]):t._e(),s("span",[t._v("收货人："+t._s(e.address_info.name))])]),s("span",[t._v(t._s(e.address_info.phone))])]),s("div",{staticClass:"address_msg flex-row"},[s("i",{staticClass:"iconfont icon-dingwei"}),s("span",{staticClass:"size24 color666"},[t._v(t._s(e.address_info.area+e.address_info.address))])]),s("div",{staticClass:"item_footer flex-row-between"},[s("van-radio",{staticClass:"size24 color666",attrs:{name:a},on:{click:function(s){return t.setDefault(e.id)}}},[t._v("\n            设为默认\n          ")]),s("div",{staticClass:"item_footer_i flex-row-center"},[s("i",{staticClass:"iconfont icon-bianji",on:{click:function(s){return s.stopPropagation(),t.bianji(e)}}}),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(s){return s.stopPropagation(),t.shanchu(e.id)}}})])],1)])}),0)],1),s("div",{staticClass:"btn_footer"},[s("div",{staticClass:"flex-vertical-centering"},[s("router-link",{staticClass:"out_btn flex-vertical-centering",attrs:{to:"/addAddress"}},[s("div",{staticClass:"flex-row-center"},[s("i",{staticClass:"iconfont icon-jia"}),s("span",{staticClass:"color0F5 size30"},[t._v("添加地址")])])])],1)])],1)},i=[],n=s("2c92"),o={name:"ReceivingAddress",components:{topMsg:n["a"]},data:function(){return{radio:"0",addressList:[],recordId:""}},created:function(){this.thisTitle(),this.getAddressList(),this.$route.query.id&&(this.recordId=this.$route.query.id)},methods:{thisTitle:function(){document.title="收货地址"},getAddressList:function(){var t=this;t.$api.center.getUserAddress().then(function(e){console.log(e),t.addressList=e.data.data,t.addressList.map(function(e,s,a){e.use_default&&(t.radio=s)})})},bianji:function(t){console.log("编辑"),this.$router.push({path:"/addAddress",query:{items:t,type:"bianji"}})},shanchu:function(t){var e=this;e.$dialog({title:"确定要删除该地址？",showCancelButton:!0,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}).then(function(s){e.$api.center.delUserAddress(t).then(function(t){e.getAddressList()})})},addressSelected:function(t){var e=this,s=this;console.log(t);var a={address:t.address_info.address,area:t.address_info.area,name:t.address_info.name,phone:t.address_info.phone};s.$api.recommend.setReocrd(s.recordId,a).then(function(t){console.log(t),e.$router.push({path:"/awardRecord",query:{}})})},setDefault:function(t){var e=this;e.$api.center.setDefault(t).then(function(t){e.getAddressList()})}}},r=o,c=(s("b915"),s("2877")),d=Object(c["a"])(r,a,i,!1,null,"e64cdc58",null);e["default"]=d.exports},a125:function(t,e,s){"use strict";var a=s("cc0b"),i=s.n(a);i.a},adb1:function(t,e,s){},b915:function(t,e,s){"use strict";var a=s("adb1"),i=s.n(a);i.a},cc0b:function(t,e,s){}}]);