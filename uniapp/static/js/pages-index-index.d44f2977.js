(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1385:function(t,e,i){var a=i("6f00");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("73c9a7ec",a,!0,{sourceMap:!1,shadowMode:!1})},"4dd9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"早游戏",student:{age:18},skill:["js","html","css","vue"],url:"../hello/hello",isShow:!1,family:["dad","mom","sister","daugther","son"],familyCategory:[{category:"dad",skill:["js","html","css","vue"]},{category:"mom",skill:["js","html","css","vue"]},{category:"sister",skill:["js","html","css","vue"]},{category:"daugther",skill:["js","html","css","vue"]},{category:"son",skill:["js","html","css","vue"]}]}},onLoad:function(){},methods:{inputChange:function(t){var e=t.detail.value;this.student.age=e}}};e.default=a},"529d":function(t,e,i){"use strict";i.r(e);var a=i("95f0"),n=i("b50e");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("d933");var o,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"3e276c40",null,!1,a["a"],o);e["default"]=l.exports},"6f00":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content[data-v-3e276c40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo[data-v-3e276c40]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-3e276c40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-3e276c40]{font-size:%?36?%;color:#8f8f94}.backRed[data-v-3e276c40]{background-color:red;width:50%;height:%?100?%}.backYellow[data-v-3e276c40]{background-color:#f0ad4e;width:50%;height:%?100?%}.backGreen[data-v-3e276c40]{background-color:#4cd964;width:50%;height:%?100?%}.containerRow[data-v-3e276c40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.containerColum[data-v-3e276c40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}",""]),t.exports=e},"95f0":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-navigator",{attrs:{url:t.url}},[i("v-uni-image",{staticClass:"logo",attrs:{src:"/static/Icon-60@2x.png"}})],1),i("v-uni-view",{staticClass:"text-area"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])],1),i("v-uni-view",[t.isShow?i("v-uni-input",{attrs:{type:"text",value:t.title},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}}}):t._e()],1),t._l(t.family,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-view",[t._v("家人:"+t._s(e))])],1)})),t._l(t.familyCategory,(function(e,a){return i("v-uni-view",[i("v-uni-view",[t._v(t._s(e.category))]),i("v-uni-view",[t._l(e.skill,(function(e,i){return[t._v(t._s(e)+",")]}))],2)],1)})),i("v-uni-view",{staticClass:"containerRow"},[i("v-uni-view",{staticClass:"backGreen"},[t._v("Row")]),i("v-uni-view",{staticClass:"backYellow"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Row")])],1),i("v-uni-view",{staticClass:"containerColum"},[i("v-uni-view",{staticClass:"backGreen"},[t._v("Colum")]),i("v-uni-view",{staticClass:"backYellow"},[t._v("Colum")]),i("v-uni-view",{staticClass:"backRed"},[t._v("Colum")])],1)],2)},s=[]},b50e:function(t,e,i){"use strict";i.r(e);var a=i("4dd9"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},d933:function(t,e,i){"use strict";var a=i("1385"),n=i.n(a);n.a}}]);