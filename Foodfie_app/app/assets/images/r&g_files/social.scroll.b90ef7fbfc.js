(window.$WP=window.$WP||[]).push({id:"@ta/social.scroll",d:["vendor-babel","vendor-react-libs","react-transition-group","@ta/overlays.shift","ta-platform","ta-common"],e:["./packages/social/scroll/scroll.jsx"],x:{"./packages/social/scroll/scroll.jsx":["Scrollable","ScrollAffordance"]},m:{"./packages/social/scroll/scroll.jsx":function(e,t,r){"use strict";r.r(t);var o=r("@babel/runtime/helpers/esm/objectSpread"),n=r.n(o),i=r("@babel/runtime/helpers/esm/objectWithoutProperties"),l=r.n(i),c=r("@babel/runtime/helpers/esm/toConsumableArray"),a=r.n(c),s=r("@babel/runtime/helpers/esm/classCallCheck"),f=r.n(s),p=r("@babel/runtime/helpers/esm/createClass"),u=r.n(p),d=r("@babel/runtime/helpers/esm/possibleConstructorReturn"),h=r.n(d),m=r("@babel/runtime/helpers/esm/getPrototypeOf"),v=r.n(m),b=r("@babel/runtime/helpers/esm/inherits"),g=r.n(b),y=r("@babel/runtime/helpers/esm/assertThisInitialized"),S=r.n(y),C=r("@babel/runtime/helpers/esm/defineProperty"),_=r.n(C),E=r("react"),k=r("react-redux"),A=r("@babel/runtime/helpers/esm/typeof"),x=r.n(A),R=function e(t){return"object"===x()(t)?t:{left:t,right:t,top:t,bottom:t}},w={top:0,left:0},T=function e(t,r){var o=t.top,n=t.left,i=(r%180+180)%180*Math.PI/180;return{u:{top:n*Math.sin(i)+o*Math.cos(i),left:n*Math.cos(i)-o*Math.sin(i)},v:{top:n*Math.sin(-i)+o*Math.cos(-i),left:n*Math.cos(-i)-o*Math.sin(-i)}}},N=function e(t,r){var o=t.top;return t.left*r.top-o*r.left},D=function e(t,r){var o=r.u,n=r.v;return N(o,t)*N(o,n)>=0&&N(n,t)*N(n,o)>=0},P=function(e){function t(){var e,r;f()(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=h()(this,(e=v()(t)).call.apply(e,[this].concat(i))),_()(S()(S()(r)),"state",{lastScrolled:[],container:null,child:{}}),_()(S()(S()(r)),"setChild",function(e){var t=S()(S()(r)).childRefs;return t[e]=E.createRef(),t[e]}),_()(S()(S()(r)),"scroll",function(e){var t=r.props.isRtl,o=r.containerRef.current,i=e.behavior,c=void 0===i?"auto":i,s=e.snapToEdge,f=R(void 0===s?0:s);if(o){var p=o.clientWidth,u=o.clientHeight,d=o.scrollTop,h=o.scrollLeft,m=o.scrollHeight,v=o.scrollWidth,b=function e(r,o){var n=r.offsetTop,i=r.offsetLeft,l=o.top;return{dx:i-(o.left+h+(t?p-v:0)),dy:n-(l+d)}},g=function e(t,r,o){var n=o.top,i=o.left,l=o.right,c=o.bottom,a=t,s=r;return t>0&&p+h+t+l>v&&(a=t+l),r>0&&u+d+r+c>m&&(s=r+c),t<0&&h+t-i<0&&(a=t-i),r<0&&d+r-n<0&&(s=r-n),{dx:a,dy:s}};if("scrollBy"===e.type){var y=e.left,S=e.top,C=a()(Object.entries(r.childRefs)).map(function(e){return{key:e[0],current:e[1].current}}).filter(function(e){return e.current}).map(function e(t){var r=t.key,o=t.current,n=o.scrollTop,i=o.scrollLeft,l=n-S,c=i-y;return{key:r,out:l<=0||c<=0||l>=u||c>=p}}).filter(function(e){return e.out}).map(function(e){return e.key});o.scrollBy({top:S,left:y,behavior:c}),r.setState({lastScrolled:C})}else if("scrollToChild"===e.type){var _=e.key,E=r.childRefs[_].current;if(E){var k=b(E,e.focus),A=g(k.dx,k.dy,f),x=A.dx,w=A.dy;o.scrollBy({top:w,left:x,behavior:c}),r.setState({lastScrolled:[_]})}}else if("scrollToNearestChild"===e.type){var N=e.direction,P=e.scalarProjection,j=void 0!==P&&P,O=e.focus,W=e.scope,M=void 0===W?90:W,B=e.minDistance,H=void 0===B?0:B,I=null;N&&(I=T(N,M));var L=a()(Object.entries(r.childRefs)).map(function(e){return{key:e[0],current:e[1].current}}).filter(function(e){return e.current}).filter(function e(t){var r=t.current;if(!I)return!0;var o=b(r,O),n=o.dx,i=o.dy;return D({top:i,left:n},I)}).map(function e(t){var r=t.current,o=l()(t,["current"]),i=b(r,O),c=i.dx,a=i.dy,s=c*c+a*a,f=1/0;return N&&(f=N.top*a+N.left*c),n()({distance:s,product:f,dx:c,dy:a},o)}).filter(function(e){return e.distance>H*H}).sort(function e(t,r){var o=t.distance-r.distance;return 0!==o?o:t.product-r.product});if(L[0]){var Q=L[0],J=Q.dx,z=Q.dy,U=Q.key,V=Q.product;if(j){if(N){var X=N.top,F=N.left,Z=V/(X*X+F*F),$=g(Z*F,Z*X,f),G=$.dx,K=$.dy;o.scrollBy({top:K,left:G,behavior:c})}}else{var q=g(J,z,f),Y=q.dx,ee=q.dy;o.scrollBy({top:ee,left:Y,behavior:c})}r.setState({lastScrolled:[U]})}}}}),_()(S()(S()(r)),"wasScrolled",function(e){return r.state.lastScrolled.includes("".concat(e))}),_()(S()(S()(r)),"containerRef",E.createRef()),_()(S()(S()(r)),"childRefs",{}),r}return g()(t,e),u()(t,[{key:"componentDidMount",value:function e(){var t=this.containerRef.current,r=Object.entries(this.childRefs).map(function(e){return{key:e[0],current:e[1].current}}).filter(function(e){return e.current}).reduce(function(e,t){return Object.assign(e,_()({},t.key,t.current)),e},{});t?this.setState({container:t,child:r}):this.setState({child:r})}},{key:"render",value:function e(){return(0,this.props.children)({scroll:this.scroll,setContainer:this.containerRef,container:this.state.container,setChild:this.setChild,child:this.state.child,wasScrolled:this.wasScrolled})}}]),t}(E.Component),j=Object(k.connect)(function(e){return{isRtl:e.i18n.isRtl}})(P),O=r("@babel/runtime/helpers/esm/extends"),W=r.n(O),M=r("react-transition-group"),B=r("@ta/overlays.shift"),H=r.n(B),I=r("@ta/common.classnames"),L=r.n(I),Q=r("@ta/styleguide.icon"),J=Object(k.connect)(function(e){return{isRtl:e.i18n.isRtl}})(function e(t){var r=t.direction,o=t.onClick,n=t.isRtl,i="single-chevron-right";return"top"===r&&(i="single-chevron-up"),!n&&"left"===r||n&&"right"===r?i="single-chevron-left":(!n&&"right"===r||n&&"left"===r)&&(i="single-chevron-right"),"bottom"===r&&(i="single-chevron-down"),E.createElement("div",{className:"social-scroll-ScrollArrow__container--1iZzF",onClick:o},E.createElement(Q.Icon,{name:i,className:"social-scroll-ScrollArrow__arrow--Olh02"}))}),z=function(e){function t(){var e,r;f()(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=h()(this,(e=v()(t)).call.apply(e,[this].concat(i))),_()(S()(S()(r)),"getDirections",function(){var e=r.props,o=e.top,i=e.left,l=e.right,c=e.bottom,a=e.container,s=e.threshold,f=R(s),p=f.left,u=f.right,d=f.top,h=f.bottom,m=n()({},t.initialState);if(a){var v=a.clientWidth,b=a.clientHeight,g=a.scrollLeft,y=a.scrollTop,S=a.scrollWidth,C=a.scrollHeight;return g>p&&i&&(m.left=!0),y>d&&o&&(m.top=!0),v+g+u<S&&l&&(m.right=!0),b+y+h<C&&c&&(m.bottom=!0),m}return m}),_()(S()(S()(r)),"didChange",function(e){var t=e.top,o=e.left,n=e.right,i=e.bottom,l=r.directions,c=l.top,a=l.left,s=l.right,f=l.bottom;return c!==t||a!==o||s!==n||f!==i}),_()(S()(S()(r)),"checkArrows",function(){var e=r.getDirections();r.didChange(e)&&(r.directions=e,r.props.onDirectionChange(r.directions))}),_()(S()(S()(r)),"handleOnScroll",function(e){r.checkArrows(),r.props.onScroll&&r.props.onScroll(e)}),_()(S()(S()(r)),"directions",n()({},t.initialState)),r}return g()(t,e),u()(t,[{key:"componentDidUpdate",value:function e(t){var r=this,o=t.container,n=t.isActive;if(!this.props.isActive||this.props.container&&(this.props.container.clientWidth||this.props.container.clientHeight)){var i=this.getDirections();(o!==this.props.container||this.props.isActive&&!n||this.didChange(i))&&(this.directions=i,this.props.onDirectionChange(this.directions))}else var l=setInterval(function(){r.props.isActive||clearInterval(l),r.props.container&&r.props.container.clientWidth&&r.props.container.clientHeight&&(clearInterval(l),r.directions=r.getDirections(),r.props.onDirectionChange(r.directions))},100)}},{key:"render",value:function e(){var t=this.props,r=t.forwardedRef,o=t.children,i=t.onClick,l=t.className,c=t.style;return E.createElement("div",{ref:r,onScroll:this.handleOnScroll,onClick:i,className:l,style:n()({},c,{position:"relative !important"})},o)}}]),t}(E.Component);_()(z,"defaultProps",{left:!0,bottom:!0,right:!0,top:!0}),_()(z,"initialState",{top:!1,left:!1,right:!1,bottom:!1});var U=E.forwardRef(function(e,t){return E.createElement(z,W()({},e,{forwardedRef:t}))}),V=function e(t,r,o){return{direction:{top:t,left:r},focus:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{top:0,left:0},scalarProjection:!0,behavior:"smooth",minDistance:o,snapToEdge:arguments.length>4?arguments[4]:void 0,type:"scrollToNearestChild"}},X=function(e){function t(){var e,r;f()(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return r=h()(this,(e=v()(t)).call.apply(e,[this].concat(n))),_()(S()(S()(r)),"state",{top:!1,right:!1,left:!1,bottom:!1}),_()(S()(S()(r)),"onDirectionChange",function(e){r.setState(e)}),r}return g()(t,e),u()(t,[{key:"render",value:function e(){var t=this,r=this.props,o=r.children,i=r.minDistance,c=r.snapToEdge,a=r.focus,s=r.shift,f=r.isRtl,p=r.viewportCategory,u=r.viewportCategories,d=r.isActive,h=l()(r,["children","minDistance","snapToEdge","focus","shift","isRtl","viewportCategory","viewportCategories","isActive"]),m=this.props,v=m.top,b=m.left,g=m.right,y=m.bottom,S=function e(t){var r=R(t),o=r.top,i=r.left,l=r.bottom,c=r.right;return{top:null==o?w:n()({},w,o),left:null==i?w:n()({},w,i),right:null==c?w:n()({},w,c),bottom:null==l?w:n()({},w,l)}}(s||0),C=S.top,k=S.left,A=S.right,x=S.bottom;return E.createElement(j,null,function(e){var r=e.scroll,n=e.setContainer,l=e.setChild,s=e.container,m=t.state,S=m.top,R=m.left,w=m.right,T=m.bottom,N=[];if(s&&u&&u.includes(p)){var D={appear:"social-scroll-ScrollAffordance__appear--1PzSD",appearActive:"social-scroll-ScrollAffordance__appear_active--2ZuiU",enter:"social-scroll-ScrollAffordance__enter--2xaEQ",enterActive:"social-scroll-ScrollAffordance__enter_active--1_f77",exit:"social-scroll-ScrollAffordance__exit--1XWUW",exitActive:"social-scroll-ScrollAffordance__exit_active--2NueE"};if(R&&b){var P,j=function e(){r(V(0,-1,i,a,c))},O=L()("social-scroll-ScrollAffordance__position_absolute--3JmaP",(P={},_()(P,"social-scroll-ScrollAffordance__left--2sQRX",!f),_()(P,"social-scroll-ScrollAffordance__right--VuoQ5",f),P));"boolean"==typeof t.props.left?N.push(E.createElement(M.CSSTransition,{key:"left",timeout:300,classNames:D},E.createElement("div",{className:O},E.createElement(H.a,{x:-12+k.left,y:k.top},E.createElement(J,{direction:"left",onClick:j}))))):N.push(E.createElement("div",{className:O,key:"left"},E.createElement(H.a,{x:k.left,y:k.top},E.createElement("div",{onClick:j},R))))}if(w&&g){var B,I=function e(){r(V(0,1,i,a,c))},Q=L()("social-scroll-ScrollAffordance__position_absolute--3JmaP",(B={},_()(B,"social-scroll-ScrollAffordance__right--VuoQ5",!f),_()(B,"social-scroll-ScrollAffordance__left--2sQRX",f),B));"boolean"==typeof t.props.right?N.push(E.createElement(M.CSSTransition,{key:"right",timeout:300,classNames:D},E.createElement("div",{className:Q},E.createElement(H.a,{x:12+A.left,y:A.top},E.createElement(J,{direction:"right",onClick:I}))))):N.push(E.createElement("div",{className:"".concat("social-scroll-ScrollAffordance__position_absolute--3JmaP"," ").concat("social-scroll-ScrollAffordance__right--VuoQ5"),key:"right"},E.createElement(H.a,{x:A.left,y:A.top},E.createElement("div",{onClick:I},w))))}if(S&&v){var z=function e(){r(V(-1,0,i,a,c))},X=L()("social-scroll-ScrollAffordance__position_absolute--3JmaP","social-scroll-ScrollAffordance__top--2TL1c");"boolean"==typeof t.props.top?N.push(E.createElement(M.CSSTransition,{key:"top",timeout:300,classNames:D},E.createElement("div",{className:X,key:"top"},E.createElement(H.a,{x:C.left,y:-16+C.top},E.createElement(J,{direction:"top",onClick:z}))))):N.push(E.createElement("div",{className:X,key:"top"},E.createElement(H.a,{x:C.left,y:C.top},E.createElement("div",{onClick:z},S))))}if(T&&y){var F=function e(){r(V(1,0,i,a,c))},Z=L()("social-scroll-ScrollAffordance__position_absolute--3JmaP","social-scroll-ScrollAffordance__bottom--2p9R-");"boolean"==typeof t.props.bottom?N.push(E.createElement(M.CSSTransition,{key:"bottom",timeout:300,classNames:D},E.createElement("div",{className:Z},E.createElement(H.a,{x:x.left,y:16+x.top},E.createElement(J,{direction:"bottom",onClick:F}))))):N.push(E.createElement("div",{className:Z,key:"bottom"},E.createElement(H.a,{x:x.left,y:x.top},E.createElement("div",{onClick:F},T))))}}return E.createElement(E.Fragment,null,E.createElement(M.TransitionGroup,{component:null},N),E.createElement(U,W()({},h,{ref:n,container:s,onDirectionChange:t.onDirectionChange,isActive:d}),o(l)))})}}]),t}(E.Component);_()(X,"defaultProps",{left:!0,bottom:!0,right:!0,top:!0,threshold:0,snapToEdge:0,shift:void 0,focus:{top:0,left:0},className:void 0,onClick:void 0,onScroll:void 0,style:void 0,isActive:!0,viewportCategories:["TABLET","DESKTOP"]});var F=Object(k.connect)(function(e){return{viewportCategory:e.meta.device.viewportCategory,isRtl:e.i18n.isRtl}})(X);r.d(t,"Scrollable",function(){return j}),r.d(t,"ScrollAffordance",function(){return F})}}});
//# sourceMappingURL=social.scroll.b90ef7fbfc.js.map