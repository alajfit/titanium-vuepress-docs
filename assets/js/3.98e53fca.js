(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{118:function(t,a,n){},119:function(t,a,n){"use strict";var r=n(118);n.n(r).a},120:function(t,a,n){"use strict";n.r(a);var r={props:{platforms:Array},methods:{imageForPlatform:function(t){switch(t){case"android":return"/android-logo.png";case"iphone":case"ipad":return"/apple-logo.png";case"windowsphone":return"/windows-logo.png"}}}},e=(n(119),n(6)),i=Object(e.a)(r,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"proxy-meta availability"},[n("div",{staticClass:"proxy-meta-name"},[t._v("Availability")]),t._v(" "),n("ul",t._l(t.platforms,function(a){return n("li",[n("img",{staticClass:"platform-logo",attrs:{src:t.$withBase(t.imageForPlatform(a.name))}}),t._v(" "),n("span",[t._v(t._s(a.since))])])}))])},[],!1,null,null,null);i.options.__file="AvailabilityInfo.vue";a.default=i.exports},122:function(t,a,n){"use strict";var r=n(12),e=n(15),i=n(9),s=n(22),o=n(1);t.exports=function(t,a,n){var l=o(t),u=n(s,l,""[t]),c=u[0],p=u[1];i(function(){var a={};return a[l]=function(){return 7},7!=""[t](a)})&&(e(String.prototype,t,c),r(RegExp.prototype,l,2==a?function(t,a){return p.call(t,this,a)}:function(t){return p.call(t,this)}))}},123:function(t,a,n){n(122)("replace",2,function(t,a,n){return[function(r,e){"use strict";var i=t(this),s=void 0==r?void 0:r[a];return void 0!==s?s.call(r,i,e):n.call(String(i),r,e)},n]})},144:function(t,a,n){},181:function(t,a,n){"use strict";var r=n(144);n.n(r).a},183:function(t,a,n){"use strict";n.r(a);var r=n(120);n(79),n(123),n(73),n(46);var e={components:{AvailabilityInfo:r.default},computed:{extendsFromType:function(){return{name:this.$page.metadata.extends,url:function(t){return"/api/".concat(t.toLowerCase().replace(/\./g,"/"),".html")}(this.$page.metadata.extends)}},summary:function(){return this.$page.metadata.summary},platforms:function(){return this.$page.metadata.platforms}}},i=(n(181),n(6)),s=Object(i.a)(e,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"proxy-summary"},[n("div",{staticClass:"summary"},[n("p",{domProps:{innerHTML:t._s(t.summary)}})]),t._v(" "),n("div",[n("AvailabilityInfo",{attrs:{platforms:t.platforms}}),t._v(" "),n("div",{staticClass:"proxy-meta"},[n("div",{staticClass:"proxy-meta-name"},[t._v("\n        Extends\n      ")]),t._v(" "),n("div",{staticClass:"proxy-meta-value"},[n("router-link",{attrs:{to:t.extendsFromType.url}},[t._v(t._s(t.extendsFromType.name))])],1)])],1)])},[],!1,null,null,null);s.options.__file="ProxySummary.vue";a.default=s.exports}}]);