(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-714f41b9"],{"0f17":function(t,e,a){"use strict";a("b1dc")},"4da6":function(t,e,a){"use strict";a("db46")},b1dc:function(t,e,a){},b28f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"detail"}},[a("header",[a("back-button")],1),a("div",{staticClass:"info"},[a("div",{staticClass:"top"},[a("div",{staticClass:"teacher-img"},[a("img",{attrs:{src:t.teacher.avatar,alt:""}})]),a("div",{staticClass:"teacher-module"},[a("h3",[t._v(t._s(t.teacher.real_name)+"老师")]),a("p",{staticClass:"text-overflow-ell"},[t._v(" "+t._s(t.teacher.introduction)+" ")])]),a("div",{staticClass:"add-focus",class:1==t.focusState?"yesStyle":"noStyle",on:{click:t.clickFocus}},[t._m(0),a("span",{staticClass:"focus-title"},[t._v(t._s(1==t.focusState?"已关注":"关注"))])])]),a("div",{staticClass:"tag"},t._l(t.teacher.teacherTag,(function(e,s){return a("span",{key:s,staticClass:"tag-item"},[t._v(" "+t._s(e)+" ")])})),0)]),a("div",{staticClass:"main"},[a("van-tabs",{attrs:{sticky:"",animated:"",swipeable:"","title-inactive-color":"silver","title-active-color":"black"},on:{click:t.tab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"老师信息"}},[a("div",{staticClass:"teacher-detail"},[a("ul",t._l(t.teacherDetail,(function(e,s){return a("li",{key:s},[a("span",[t._v(t._s(e.title))]),a("span",[t._v(t._s(e.info))])])})),0)])]),a("van-tab",{attrs:{title:"学员评价"}},t._l(t.say,(function(e,s){return a("div",{key:s,staticClass:"say border-fine"},[a("div",{staticClass:"say-img"},[a("img",{attrs:{src:e.sayImg,alt:""}})]),a("div",{staticClass:"say-info"},[a("h3",[t._v(t._s(e.sayName))]),a("p",t._l(e.sayNum,(function(t,e){return a("van-icon",{key:e,attrs:{color:"#FED201",name:"star"}})})),1),a("p",t._l(e.sayTag,(function(e,s){return a("span",{key:s,staticClass:"say-tag"},[t._v(t._s(e))])})),0),a("p",[t._v(t._s(e.sayAlt))]),a("p",[t._v(t._s(e.sayTime))])])])})),0),a("van-tab",{attrs:{title:"主讲课程"}},t._l(t.lesson,(function(e,s){return a("div",{key:s,staticClass:"lesson border-fine",on:{click:function(a){return t.getLessonDetail(e.id)}}},[a("div",{staticClass:"lesson-img"},[a("img",{attrs:{src:e.cover_img,alt:""}})]),a("div",{staticClass:"lesson-info"},[a("h2",[t._v(t._s(e.title))]),a("p",[t._v("讲师："+t._s(t.teacher.real_name))]),a("p",[a("span",{staticClass:"price",style:e.total_periods>1?"color:green":"color:red"},[t._v(t._s(e.total_periods>1?"免费":"￥"+e.id))]),a("span",{staticClass:"num"},[a("van-icon",{attrs:{name:"shopping-cart-o"}}),t._v(" "+t._s(e.brows_num)+" ")],1)])])])})),0)],1)],1),a("footer",[a("div",{class:1==t.signState?"yesStyle":"noStyle"},[a("van-button",{staticClass:"focus-icon",attrs:{size:"large"},on:{click:t.toSign}},[t._v(" "+t._s(1==t.signState?"取消约课":"立即约课")+" ")])],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"focus-icon"},[a("img",{attrs:{src:"/icon/focus.png",alt:""}})])}],n=(a("4160"),a("159b"),a("5530")),c=a("d399"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"back"}},[a("button",{on:{click:function(e){return t.$router.back()}}},[a("van-icon",{attrs:{name:"arrow-left",size:"0.4rem"}})],1)])},r=[],l={name:"",data:function(){return{}},components:{},props:[],computed:{},created:function(){},methods:{}},u=l,f=(a("4da6"),a("2877")),d=Object(f["a"])(u,o,r,!1,null,"f6786aa6",null),v=d.exports,h=a("2f62"),m=a("7b12"),y={name:"",data:function(){return{teacher:{},active:null,teacherDetail:[{title:"毕业学院",info:"北京大学"},{title:"综合评价",info:"北京大学"},{title:"授课范围",info:"考研英语、雅思、托福、四六级"},{title:"擅长科目",info:"英语"},{title:"授课价格",info:"5学习币"},{title:"自我介绍",info:"偶像"},{title:"擅长题目",info:"教程作者：白套白（软件基础营33期学院）作者的分离会计分录看到过建瓯盘发动机盖攻击力卡第三方件拉的屎咖啡机阿拉丁可使肌肤蓝卡队数据分离卡戴珊交付了卡戴珊收款单方面修理厂是OKR金德生科技围殴烦恼违法违纪佛龛时代峻峰奥术大师大S的文档安慰法抗衰老的减肥克里斯多夫鸡儿"}],say:[{sayImg:"./img/小新.jpg",sayName:"辅助",sayNum:5,sayTag:["创造力丰富","为人和善","讲课方式新颖"],sayAlt:"很棒的课程",sayTime:"2020-10-10 18:00"},{sayImg:"./img/小新.jpg",sayName:"辅助",sayNum:5,sayTag:["创造力丰富","为人和善","讲课方式新颖"],sayAlt:"很棒的课程",sayTime:"2020-10-10 18:00"},{sayImg:"./img/小新.jpg",sayName:"辅助",sayNum:5,sayTag:["创造力丰富","为人和善","讲课方式新颖"],sayAlt:"很棒的课程",sayTime:"2020-10-10 18:00"}],lesson:[],focusState:null,yesStyle:"yesStyle",noStyle:"noStyle",signState:!1}},components:{BackButton:v},props:[],computed:{},created:function(){},mounted:function(){var t=this;this.active=0,Object(m["k"])(this.$route.query.id).then((function(e){console.log(e),t.isFocus(e.flag),t.teacher=e.teacher,t.teacher.teacherTag=["创造力丰富","为人和善","讲课方式新颖","创造力丰富","讲课方式新颖"]}))},methods:Object(n["a"])(Object(n["a"])({},Object(h["b"])(["changeFocus"])),{},{isFocus:function(t){this.focusState=1!==t},clickFocus:function(){var t=this;localStorage.getItem("token")?(Object(m["q"])(this.$route.query.id).then((function(e){t.isFocus(e)})),this.focusState?Object(c["a"])({message:"关注成功",icon:"like",duration:600}):Object(c["a"])({message:"取消关注",icon:"like-o",duration:600})):(this.$router.push("/login"),Object(c["a"])({message:"还未登录",icon:"fail",duration:600}))},tab:function(t){this.active=t},getLessonDetail:function(t){console.log(t),this.$router.push({path:"/free",query:{id:t}})},toSign:function(){this.signState=!this.signState}}),watch:{active:function(t){var e=this;if(0===t)Object(m["l"])(this.$route.query.id).then((function(t){}));else if(1===t){var a={limit:"",page:"",id:this.$route.query.id};Object(m["j"])(a).then((function(t){}))}else if(2===t){var s={limit:"",page:"",id:this.$route.query.id};Object(m["g"])(s).then((function(t){t.forEach((function(t,a,s){t.teachers_list[0].id==e.$route.query.id&&e.lesson.push(t)}));parseInt(Math.random());if(0===e.lesson.length)for(var a=0;a<=2;a++){var s=parseInt(Math.random()*t.length);e.lesson.push(t[s])}}))}}}},g=y,p=(a("0f17"),Object(f["a"])(g,s,i,!1,null,"ca5ed440",null));e["default"]=p.exports},db46:function(t,e,a){}}]);
//# sourceMappingURL=chunk-714f41b9.ce3e3675.js.map