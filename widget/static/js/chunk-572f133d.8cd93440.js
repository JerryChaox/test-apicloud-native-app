(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-572f133d"],{"589d":function(e,t,s){},"5e76":function(e,t,s){},9415:function(e,t,s){},"9b0f":function(e,t,s){s("a29f"),s("f251"),s("589d"),s("9415"),s("5e76")},bb2f:function(e,t,s){},c754:function(e,t,s){"use strict";var i=s("bb2f"),a=s.n(i);a.a},cf28:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("top-msg",{attrs:{"header-name":"推荐码","share-show":"true"},on:{shareSheet:function(t){return e.shareSheet()}}}),s("div",{staticClass:"con_body"},[s("div",{staticClass:"share_codeImg",on:{click:e.closeToast}},[s("img",{ref:"qrcodePoster",staticStyle:{display:"none"},attrs:{src:e.shareURL,alt:"分享图"}})]),s("div",{ref:"shareBox",staticClass:"share_codeImg"},[s("qrcode",{class:e.isWechat?"share_code":"share_code share_code2",attrs:{id:"qrcodeImg",value:e.codeValue,src:e.codeValue,options:{width:144},tag:"img"}}),s("img",{ref:"posterImg",attrs:{id:"backgroundImg",src:e.posterURL,crossOrigin:"anonymous"}})],1)]),s("van-actionsheet",{attrs:{actions:e.shareActions},on:{select:e.onShareSelect},model:{value:e.isShareSheet,callback:function(t){e.isShareSheet=t},expression:"isShareSheet"}})],1)},a=[],n=(s("4662"),s("28a2")),o=s("b2e5"),r=s.n(o),c=s("2c92"),h=s("c0e9"),d=s.n(h),u=(s("9b0f"),{name:"ShareCode",components:{topMsg:c["a"],Qrcode:r.a},data:function(){return{loading:!0,codeValue:"",shareURL:"",posterURL:"",isLoading:"",isTime:"",imgPreview:"",imgName:"",isShareSheet:!1,shareActions:[{key:"session",name:"朋友"},{key:"timeline",name:"朋友圈"}]}},computed:{userInfo:function(){return this.$store.state.userInfo},canvasRenderWidth:function(){return this.canvasWidth*this.rate},canvasRenderHeight:function(){return this.canvasHeight*this.rate},isWechat:function(){return this.$store.state.isWechat}},watch:{shareURL:function(e,t){this.$refs.shareBox.style.display="none",this.$refs.qrcodePoster.style.display="block"}},created:function(){this.thisTitle(),this.codeValue=this.STATIC_INFO.baseAddress+"/#/register?referrer="+this.userInfo.username,this.posterURL=this.$route.params.poster+"?random="+Math.round(new Date/1e3),this.isLoading=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"图片正在生成中,请稍等..."})},mounted:function(){this.printQrcodePoster()},destroyed:function(){clearTimeout(this.isTime),this.$toast.clear()},methods:{shareSheet:function(){this.isShareSheet=!0},onShareSelect:function(e){var t=this,s=api.require("wx");s.shareImage({apiKey:"wxd1b60b77a17440c7",scene:e.key,contentUrl:"fs://img/bidefu/"+t.imgName},function(e,s){e.status?t.$toast({message:"分享成功",position:"middle",duration:2e3}):t.$toast({message:s.code,position:"middle",duration:2e3})}),this.isShareSheet=!1},thisTitle:function(){document.title="推荐码"},printQrcodePoster:function(){var e=this;setTimeout(function(){d()(e.$refs.shareBox,{scale:2,useCORS:!0}).then(function(t){var s=t.toDataURL("image/png");e.shareURL=s,e.imgName="shareCode_".concat((new Date).getTime(),".png");var i=api.require("trans");i.saveImage({base64Str:s.replace("data:image/png;base64,",""),album:!0,imgPath:"fs://img/bidefu",imgName:e.imgName},function(t,s){e.isLoading.clear(),t.status?e.$toast({message:"图片已保存, 分享给你的好友吧",position:"middle",duration:2e3}):e.$toast({message:"图片保存失败：".concat(s.msg),position:"middle",duration:2e3})})})},1e3)},closeToast:function(){var e=this;this.isLoading.clear(),this.$toast.clear(),e.imgPreview=Object(n["a"])({images:[this.shareURL],onClose:function(){e.$router.go(-1)},asyncClose:!0})}},beforeRouteLeave:function(e,t,s){this.imgPreview&&this.imgPreview.close(),clearTimeout(this.isTime),s()}}),m=u,l=(s("c754"),s("2877")),f=Object(l["a"])(m,i,a,!1,null,"32000781",null);t["default"]=f.exports}}]);