(window.$WP=window.$WP||[]).push({id:"@ta/common.timer",d:["vendor-babel","vendor-react-libs"],e:["./packages/common/timer/Timer.jsx"],x:{"./packages/common/timer/Timer.jsx":["default","Interval"]},m:{"./packages/common/timer/Timer.jsx":function(e,n,t){"use strict";t.r(n);var r=t("@babel/runtime/helpers/esm/classCallCheck"),i=t.n(r),a=t("@babel/runtime/helpers/esm/createClass"),o=t.n(a),l=t("@babel/runtime/helpers/esm/possibleConstructorReturn"),s=t.n(l),u=t("@babel/runtime/helpers/esm/getPrototypeOf"),c=t.n(u),m=t("@babel/runtime/helpers/esm/inherits"),p=t.n(m),h=t("@babel/runtime/helpers/esm/assertThisInitialized"),v=t.n(h),d=t("@babel/runtime/helpers/esm/defineProperty"),f=t.n(d),b=t("react"),y=function(e){function n(){var e,t;i()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=s()(this,(e=c()(n)).call.apply(e,[this].concat(a))),f()(v()(v()(t)),"handle",void 0),t}return p()(n,e),o()(n,[{key:"componentDidMount",value:function e(){var n=this;this.handle=setInterval(function(){return n.props.callback()},this.props.interval)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.handle)}},{key:"render",value:function e(){return null}}]),n}(b.Component);t.d(n,"default",function(){return k}),t.d(n,"Interval",function(){return y});var k=function(e){function n(){var e,t;i()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=s()(this,(e=c()(n)).call.apply(e,[this].concat(a))),f()(v()(v()(t)),"timeStart",void 0),t}return p()(n,e),o()(n,[{key:"componentDidMount",value:function e(){var n=this;this.timeStart=setTimeout(function(){return n.props.trigger()},this.props.interval)}},{key:"componentWillUnmount",value:function e(){clearTimeout(this.timeStart)}},{key:"render",value:function e(){return null}}]),n}(b.Component)}}});
//# sourceMappingURL=common.timer.f636f0155c.js.map