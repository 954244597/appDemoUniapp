(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common-list"],{"14b5":function(t,i,e){"use strict";e.r(i);var n=e("733c"),o=e.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(l);i["default"]=o.a},4057:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},o=[]},"57e4":function(t,i,e){"use strict";e.r(i);var n=e("4057"),o=e("14b5");for(var l in o)["default"].indexOf(l)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(l);var a=e("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);i["default"]=s.exports},"733c":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:{item:Object,index:Number,isdetial:{default:!1,type:Boolean}},methods:{openSpacel:function(){console.log("个人空间")},follow:function(){console.log("关注"),this.$emit("follow",this.index)},openDetial:function(i){this.isdetial||(t.navigateTo({url:"../../pages/detial/detial?detial="+JSON.stringify(i)}),console.log("打开详情页"))},doCommon:function(){this.isdetial?this.$emit("doCommon"):t.navigateTo({url:"../../pages/detial/detial?detial="+JSON.stringify(this.item)})},doShare:function(){this.isdetial?this.$emit("doShare"):t.navigateTo({url:"../../pages/detial/detial?detial="+JSON.stringify(this.item)})},doSopport:function(t){this.$emit("doSopport",t,this.index),console.log("点赞")}}};i.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common-list-create-component',
    {
        'components/common-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("57e4"))
        })
    },
    [['components/common-list-create-component']]
]);
