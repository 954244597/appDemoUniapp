(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/topicList"],{"3d1b":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},o=[]},"5d71":function(t,n,e){"use strict";e.r(n);var i=e("3d1b"),o=e("ae42");for(var u in o)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(u);var a=e("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=c.exports},ae42:function(t,n,e){"use strict";e.r(n);var i=e("dd71"),o=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},dd71:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"topicList",props:{topicList:{default:[],type:Array}},data:function(){return{}},mounted:function(){this.topicLists=this.topicList},methods:{toDetail:function(n){console.log(n),t.navigateTo({url:"../../pages/topicDetial/topicDetial?detialSource="+JSON.stringify(n)})}}};n.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/topicList-create-component',
    {
        'components/topicList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5d71"))
        })
    },
    [['components/topicList-create-component']]
]);
