(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uploadImage"],{"173d":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=(this._self._c,this.imageList.length),n=t>0?this.imageList.length:null;this.$mp.data=Object.assign({},{$root:{g0:t,g1:n}})},s=[]},"2d6d":function(e,t,n){},"4cb3":function(e,t,n){"use strict";n.r(t);var i=n("173d"),s=n("e5bd");for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("7bf6");var c=n("f0c5"),u=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=u.exports},"7bf6":function(e,t,n){"use strict";var i=n("2d6d"),s=n.n(i);s.a},a700:function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n("2eee")),a=i(n("c973")),c=i(n("3dbc")),u=[["camera"],["album"],["camera","album"]],o=[["compressed"],["original"],["compressed","original"]],r={props:{imageLists:{default:[],type:Array}},data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},mounted:function(){this.imageList=this.imageLists,console.log(this.imageLists)},onUnload:function(){console.log(1111),this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},onBackPress:function(){},methods:{deleteImage:function(e){this.imageList=this.imageList.filter((function(t,n){return e!==n})),this.$emit("choosePic",this.imageList)},sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},sizeTypeChange:function(e){this.sizeTypeIndex=parseInt(e.detail.value)},countChange:function(e){this.countIndex=e.detail.value},chooseImage:function(){var t=(0,a.default)(s.default.mark((function t(){var n,i=this;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(n=t.sent,console.log("是否继续?",n),n){t.next=7;break}return t.abrupt("return");case 7:e.chooseImage({sourceType:u[this.sourceTypeIndex],sizeType:o[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){i.imageList=i.imageList.concat(e.tempFilePaths),i.$emit("choosePic",i.imageList)},fail:function(t){console.log("err: ",t),"-1"===t.errMsg.indexOf("cancel")&&e.getSetting({success:function(t){var n=!1;switch(i.sourceTypeIndex){case 0:n=t.authSetting["scope.camera"];break;case 1:n=t.authSetting["scope.album"];break;case 2:n=t.authSetting["scope.album"]&&t.authSetting["scope.camera"];break;default:break}n||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限",success:function(t){t.confirm&&e.openSetting()}})}})}});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),isFullImg:function(){var t=this;return new Promise((function(n){e.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(e){e.confirm?(t.imageList=[],n(!0)):n(!1)},fail:function(){n(!1)}})}))},previewImage:function(t){var n=t.target.dataset.src;e.previewImage({current:n,urls:this.imageList})},checkPermission:function(t){var n=this;return(0,a.default)(s.default.mark((function i(){var a,o;return s.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=t?t-1:n.sourceTypeIndex,!c.default.isIOS){i.next=7;break}return i.next=4,c.default.requestIOS(u[a][0]);case 4:i.t0=i.sent,i.next=10;break;case 7:return i.next=9,c.default.requestAndroid(0===a?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:i.t0=i.sent;case 10:return o=i.t0,null===o||1===o?o=1:e.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&c.default.gotoAppSetting()}}),i.abrupt("return",o);case 13:case"end":return i.stop()}}),i)})))()}}};t.default=r}).call(this,n("543d")["default"])},e5bd:function(e,t,n){"use strict";n.r(t);var i=n("a700"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uploadImage-create-component',
    {
        'components/uploadImage-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4cb3"))
        })
    },
    [['components/uploadImage-create-component']]
]);
