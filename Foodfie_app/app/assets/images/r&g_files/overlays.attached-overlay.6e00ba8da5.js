(window.$WP=window.$WP||[]).push({id:"@ta/overlays.attached-overlay",d:["vendor-babel","vendor-react-libs","@ta/events.window-resize","@ta/overlays.pieces"],e:["./packages/overlays/attached-overlay/AttachedOverlay.jsx"],x:{"./packages/overlays/attached-overlay/AttachedOverlay.jsx":["WindowPadding","getPosition","getPositionForProps","default"]},m:{"./packages/overlays/attached-overlay/AttachedOverlay.jsx":function(t,e,o){"use strict";o.r(e),o.d(e,"WindowPadding",function(){return x}),o.d(e,"getPosition",function(){return O}),o.d(e,"getPositionForProps",function(){return E}),o.d(e,"default",function(){return C});var i=o("@babel/runtime/helpers/esm/classCallCheck"),n=o.n(i),r=o("@babel/runtime/helpers/esm/possibleConstructorReturn"),a=o.n(r),s=o("@babel/runtime/helpers/esm/getPrototypeOf"),l=o.n(s),d=o("@babel/runtime/helpers/esm/createClass"),p=o.n(d),c=o("@babel/runtime/helpers/esm/inherits"),u=o.n(c),h=o("@babel/runtime/helpers/esm/assertThisInitialized"),f=o.n(h),g=o("@babel/runtime/helpers/esm/defineProperty"),m=o.n(g),v=o("react"),b=o("@ta/events.window-resize"),y=o.n(b),w=o("@ta/overlays.pieces"),x=20,P=function t(e,o,i,n){var r=document&&(n?document.documentElement:document.body)||{},a=r.clientHeight,s=void 0===a?0:a,l=r.clientWidth,d=void 0===l?0:l,p=window,c=p.innerHeight,u=void 0===c?0:c,h=p.innerWidth,f=void 0===h?0:h;return"right"!==e||"right"!==o&&"left"!==o?"bottom"!==e||"top"!==o&&"bottom"!==o?i:n?Math.max(s,u)-i:s-i:n?Math.min(f,d)-i:d-i},O=function t(e,o,i,n,r){var a=e.getBoundingClientRect(),s=window||{},l=s.pageXOffset,d=void 0===l?0:l,p=s.pageYOffset,c=void 0===p?0:p,u={top:a.top+(n?0:c),left:a.left+(n?0:d),right:a.right+(n?0:d),bottom:a.bottom+(n?0:c)},h=m()({position:n?"fixed":"absolute"},i,"".concat(P(i,o,u[o],n),"px"));return r&&"windowX"===r?(h.left="".concat(x,"px"),h.right="".concat(x,"px")):r?h[r]="".concat(P(r,r,u[r],n),"px"):"top"===o||"bottom"===o?(h.left="".concat(u.left+a.width/2,"px"),h.transform="translate(-50%)"):(h.top="".concat(u.top+a.height/2,"px"),h.transform="translate(0,-50%)"),h},E=function t(e){return"above"===e.position?O(e.target,"top","bottom",e.fixed,e.alignEdge):"leftOf"===e.position?O(e.target,"left","right",e.fixed,e.alignEdge):"rightOf"===e.position?O(e.target,"right","left",e.fixed,e.alignEdge):O(e.target,"bottom","top",e.fixed,e.alignEdge)},k=[{property:"left",timing:250},{property:"top",timing:250}],C=function(t){function e(t){var o;return n()(this,e),o=a()(this,l()(e).call(this,t)),m()(f()(f()(o)),"setPosition",function(){o.setState({position:E(o.props)})}),o.state={position:E(t)},o}return u()(e,t),p()(e,null,[{key:"getDerivedStateFromProps",value:function t(e){return e.position?{position:E(e)}:null}}]),p()(e,[{key:"render",value:function t(){return this.state&&null!==this.state.position?v.createElement(w.Overlay,{position:this.state.position,transitionProperties:this.props.animated?k:[],overlayType:this.props.overlayType},this.props.children,v.createElement(y.a,{callback:this.setPosition,throttle:100})):null}}]),e}(v.Component);m()(C,"defaultProps",{alignEdge:void 0,fixed:!1,animated:!1,overlayType:"modal"})}}});
//# sourceMappingURL=overlays.attached-overlay.6e00ba8da5.js.map