(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34405cfc"],{"1bf5":function(t,n,e){"use strict";var i=e("d106"),s=e.n(i);s.a},"26fc":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tabBar"},[e("ul",{staticClass:"list"},[e("li",{staticClass:"item",on:{click:function(n){return t.gotoAddress({path:"/home"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.homePage?"#icon-homes":"#icon-home"}})]),e("div",{class:["text",t.homePage?"on":""]},[t._v("\n        首页\n      ")])]),e("li",{staticClass:"item",on:{click:function(n){return t.gotoAddress({path:"/weike"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.homeIndex?"#icon-weikes":"#icon-weike"}})]),e("div",{class:["text",t.homeIndex?"on":""]},[t._v("\n        微课\n      ")])]),e("li",{staticClass:"item",on:{click:function(n){return t.gotoAddress({path:"/share"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.recommendIndex?"#icon-fenxiangs":"#icon-fenxiang"}})]),e("div",{class:["text",t.recommendIndex?"on":""]},[t._v("\n        分享\n      ")])]),e("li",{staticClass:"item",on:{click:function(n){return t.gotoAddress({path:"/consult"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.shoppingMall?"#icon-zixuns":"#icon-zixun"}})]),e("div",{class:["text",t.shoppingMall?"on":""]},[t._v("\n        咨讯\n      ")])]),e("li",{staticClass:"item",on:{click:function(n){return t.gotoAddress({path:"/center"})}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.centerIndex?"#icon-wodes":"#icon-wode"}})]),e("div",{class:["text",t.centerIndex?"on":""]},[t._v("\n        我的\n      ")])])])])},s=[],a={name:"TabBar",props:{homeIndex:{type:Boolean,default:!0},recommendIndex:{type:Boolean,default:!1},centerIndex:{type:Boolean,default:!1},homePage:{type:Boolean,default:!1},shoppingMall:{type:Boolean,default:!1}},data:function(){return{}},watch:{},created:function(){},methods:{gotoAddress:function(t){this.$router.push(t)},toMall:function(){this.$dialog({title:"提示",message:"此功能待开放",confirmButtonText:"确定"})}}},o=a,c=(e("1bf5"),e("2877")),r=Object(c["a"])(o,i,s,!1,null,"6d0ff998",null);n["a"]=r.exports},"61f8":function(t,n,e){t.exports=e.p+"static/img/home-bg-up.da0354cd.png"},7266:function(t,n,e){},"7abe":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home-page"},[e("top-msg",{attrs:{"header-name":"首页"}}),e("div",{staticClass:"top"},[t._m(0),e("ul",{staticClass:"type"},[e("li",{staticClass:"item",on:{click:function(n){return t.$router.push("/proceeds")}}},[e("i",{staticClass:"iconfont icon-zaixianshoukuan img"}),e("div",{staticClass:"text"},[t._v("\n          在线收款\n        ")])]),e("li",{staticClass:"item",on:{click:function(n){return t.goto("/planList")}}},[e("i",{staticClass:"iconfont icon-xinyongkaguanjia img"}),e("div",{staticClass:"text"},[t._v("\n          信用卡管家\n        ")])])])]),e("div",{staticClass:"advertise ",on:{click:function(n){return t.$router.push("/noticeList")}}},[e("svg",{staticClass:"icon img",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-gonggao"}})]),e("span",{staticClass:"red text"},[t._v("公告：")]),e("span",{staticClass:"text dec"},[t._v(t._s(t.notice.title))]),e("van-icon",{staticClass:"grey icon",attrs:{name:"arrow"}})],1),e("div",{staticClass:"rec-box"},[e("recommend")],1),e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.banner,function(n,i){return e("swiper-slide",{key:i},[e("img",{attrs:{src:n.image_item&&n.image_item.url},on:{click:function(e){return t.$go(n.url)}}})])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),e("tabbar",{attrs:{"home-page":!0}})],1)},s=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"box"},[i("img",{attrs:{src:e("61f8")}})])}],a=(e("dfa4"),e("7212")),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"recommend-page"},[t._m(0),e("ul",{staticClass:"list"},t._l(t.recommendList,function(n,i){return e("li",{key:i,staticClass:"item flex-column-center",on:{click:function(e){return t.$go(n.url)}}},[e("img",{attrs:{src:n.image_item&&n.image_item.url}}),e("div",{staticClass:"msg"},[e("div",{staticClass:"subtitle"},[t._v("\n          "+t._s(n.name)+"\n        ")]),e("div",{staticClass:"text"},[t._v("\n          "+t._s(n.sub_name)+"\n        ")])])])}),0)])},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("i",{staticClass:"iconfont icon-fuwutuijian"}),t._v("\n    服务推荐\n  ")])}],r={name:"Recommend",data:function(){return{recommendList:[]}},created:function(){this.getThirdPartyContentFun()},methods:{getThirdPartyContentFun:function(){var t=this,n=this;n.$api.recommend.getThirdPartyContent().then(function(n){t.recommendList=n.data.data})}}},l=r,u=(e("af21"),e("2877")),d=Object(u["a"])(l,o,c,!1,null,"b2673454",null),m=d.exports,f=e("26fc"),h=e("2c92"),p={name:"Home",components:{swiper:a["swiper"],swiperSlide:a["swiperSlide"],recommend:m,tabbar:f["a"],topMsg:h["a"]},data:function(){return{swiperOption:{loop:!0,speed:800,autoplay:{delay:1500,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}},banner:[],userInfo:{},notice:{}}},created:function(){document.title="首页",this.userInfo=this.$store.getters.userInfo,this.announcementNewestFun(),this.getBanner()},methods:{getBanner:function(){var t=this;this.$api.home.firstPageCarousel().then(function(n){t.banner=n.data.data})},announcementNewestFun:function(){var t=this;this.$api.home.announcementNewest().then(function(n){t.notice=n.data.data})},paymentCode:function(){this.$dialog({title:"提示",message:"此功能待开放",confirmButtonText:"确定"})},goto:function(t){this.judgeUserAuth()&&this.$router.push(t)}}},g=p,v=(e("b140"),Object(u["a"])(g,i,s,!1,null,"c66c13d6",null));n["default"]=v.exports},af21:function(t,n,e){"use strict";var i=e("7266"),s=e.n(i);s.a},b13e:function(t,n,e){},b140:function(t,n,e){"use strict";var i=e("b13e"),s=e.n(i);s.a},d106:function(t,n,e){}}]);