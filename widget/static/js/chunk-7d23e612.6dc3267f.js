(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d23e612"],{"231a":function(e,t,s){},"2c92":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isWechat?e._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("p",[e._v(e._s(e.headerName))])])])},r=[],a={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0}},data:function(){return{}},computed:{isWechat:function(){return this.$store.state.isWechat}},created:function(){},methods:{}},n=a,o=s("2877"),c=Object(o["a"])(n,i,r,!1,null,"290634ab",null);t["a"]=c.exports},8661:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg5C5C5C minHeight100vh"},[s("top-msg",{attrs:{"header-name":"选择推荐码样式"}}),s("div",{staticClass:"con_body"},[s("div",{staticClass:"con_swiper"},[s("swiper",{ref:"swiperTop",staticClass:"gallery-top",attrs:{options:e.swiperOptionTop}},e._l(e.shareImgList,function(e,t){return s("swiper-slide",{key:e.id,staticClass:"swiperImg",class:"slide-"+t},[s("img",{attrs:{src:e.image_item.url}})])}),1),s("swiper",{ref:"swiperThumbs",staticClass:"gallery-thumbs",attrs:{options:e.swiperOptionThumbs}},e._l(e.shareImgList,function(e,t){return s("swiper-slide",{key:e.id,staticClass:"swiperImg2",class:"slide-"+t},[s("img",{attrs:{src:e.image_item&&e.image_item.url}})])}),1)],1),s("div",{staticClass:"cen btn_footer"},[s("button",{staticClass:"btn btn_next",on:{click:e.gotoShareCode}},[e._v("\n        下一步\n      ")])])])],1)},r=[],a=(s("dfa4"),s("7212")),n=s("2c92"),o={name:"SelectImg",components:{swiper:a["swiper"],swiperSlide:a["swiperSlide"],topMsg:n["a"]},data:function(){return{swiperOptionTop:{spaceBetween:10},swiperOptionThumbs:{spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0},shareImgList:[]}},computed:{userInfo:function(){return this.$store.state.userInfo}},created:function(){this.thisTitle(),this.getShareImgListFun()},mounted:function(){var e=this;this.$nextTick(function(){var t=e.$refs.swiperTop.swiper,s=e.$refs.swiperThumbs.swiper;t.controller.control=s,s.controller.control=t})},methods:{thisTitle:function(){document.title="选择推荐码样式"},gotoShareCode:function(){var e=document.querySelector(".swiperImg.swiper-slide-active img").src;this.$router.push({path:"/shareCode",name:"shareCode",params:{poster:e}})},getShareImgListFun:function(){var e=this;e.$api.recommend.getShareImgList().then(function(t){console.log(t),e.shareImgList=t.data.data}).catch(function(e){console.log(e)})}}},c=o,l=(s("b5f4"),s("2877")),u=Object(l["a"])(c,i,r,!1,null,"2f439076",null);t["default"]=u.exports},b5f4:function(e,t,s){"use strict";var i=s("231a"),r=s.n(i);r.a}}]);