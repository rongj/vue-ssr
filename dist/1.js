webpackJsonp([1],{121:function(t,e,i){"use strict";function s(t){i(125)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(123),r=i(127),a=i(46),c=s,l=a(n.a,r.a,!1,c,null,null);e.default=l.exports},123:function(t,e,i){"use strict";e.a={asyncData:function(t){var e=t.store;t.route;return e.dispatch("fetchList",{subjectId:"51460441",pageSize:40})},computed:{dataList:function(){return this.$store.state.list}}}},125:function(t,e,i){var s=i(126);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(120)("c6f7b5a2",s,!0,{})},126:function(t,e,i){e=t.exports=i(119)(!1),e.push([t.i,".news-list{padding:0 .28rem}.news-list li{font-size:.28rem;line-height:.4rem;margin:.2rem 0}",""])},127:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phone-wrap"},[i("ul",{staticClass:"news-list"},t._l(t.dataList,function(e,s){return i("li",[i("router-link",{attrs:{to:"/detail/"+e.articletp+"/"+e.articleid}},[t._v(t._s(e.title))])],1)}))])},n=[],r={render:s,staticRenderFns:n};e.a=r}});