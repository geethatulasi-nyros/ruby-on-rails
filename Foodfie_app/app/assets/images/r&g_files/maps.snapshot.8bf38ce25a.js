(window.$WP=window.$WP||[]).push({id:"@ta/maps.snapshot",d:["vendor-babel","vendor-react-libs","ta-platform","@ta/maps.provider-names"],e:["./packages/maps/snapshot/snapshot.jsx"],x:{"./packages/maps/snapshot/MapSnapshot.jsx":["a"],"./packages/maps/snapshot/assetCatalogue.jsx":["a"]},m:{"./packages/maps/snapshot/MapSnapshot.jsx":function(n,e,t){"use strict";var a=t("@babel/runtime/helpers/esm/classCallCheck"),s=t.n(a),o=t("@babel/runtime/helpers/esm/createClass"),i=t.n(o),r=t("@babel/runtime/helpers/esm/possibleConstructorReturn"),p=t.n(r),c=t("@babel/runtime/helpers/esm/getPrototypeOf"),m=t.n(c),l=t("@babel/runtime/helpers/esm/inherits"),u=t.n(l),h=t("@babel/runtime/helpers/esm/assertThisInitialized"),g=t.n(h),d=t("@babel/runtime/helpers/esm/defineProperty"),v=t.n(d),_=t("react"),f=t("react-redux"),b=t("@ta/common.logging"),P=t.n(b),k=t("@ta/common.tracking"),S=t.n(k),j=function(n){function e(){var n,t;s()(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=p()(this,(n=m()(e)).call.apply(n,[this].concat(o))),v()(g()(g()(t)),"state",{snapshotUrl:null}),v()(g()(g()(t)),"urlRequest",void 0),v()(g()(g()(t)),"requestUrl",void 0),v()(g()(g()(t)),"requestTimeout",void 0),v()(g()(g()(t)),"mounted",void 0),t}return u()(e,n),i()(e,[{key:"componentDidMount",value:function n(){this.mounted=!0,this.loadSnapshot()}},{key:"componentDidUpdate",value:function n(){this.loadSnapshot()}},{key:"componentWillUnmount",value:function n(){this.urlRequest=null,this.mounted=!1,clearTimeout(this.requestTimeout)}},{key:"loadSnapshot",value:function n(){var e=this;if(this.mounted){var t=this.buildUrl();t&&this.requestUrl!==t&&(this.requestUrl=t,clearTimeout(this.requestTimeout),this.requestTimeout=setTimeout(function(){if(e.mounted){var n=fetch(t,{credentials:"same-origin"});e.urlRequest=n,e.urlRequest.then(function(n){return n.json()}).then(function(t){n===e.urlRequest&&(e.setState({snapshotUrl:t.url}),S()({module:"staticmap",action:"load",context:t.mapProvider}))}).catch(function(n){e.setState({snapshotUrl:null}),S()({module:"staticmap",action:"failed",context:t}),P.a.error("Error loading snapshot",n)})}},100))}}},{key:"buildUrl",value:function n(){var e=this.props;if((e.width||0)<1||(e.height||0)<1)return P.a.error("StaticMapSnapshot - Width (".concat(e.width,") and height (").concat(e.height,") params must be positive values")),null;if(e.zoom<1||e.zoom>19)return P.a.error("StaticMapSnapshot - Zoom (".concat(e.width,") must be between 1 and 19.")),null;var t=function n(e){var t=[];return Object.keys(e).forEach(function(n){var a=e[n];if(null!=a){var s=a.toString();t.push([encodeURIComponent(n),encodeURIComponent(s)].join("="))}}),t.join("&")}({center:[e.center.lat,e.center.lng].join(","),width:e.width,height:e.height,zoom:e.zoom,geoId:e.geoId,servletName:e.servletName,scale:e.scale,forceMapProvider:e.forceMapProvider});return this.props.markers.length&&(t+="&".concat(function n(e){var t={};return e&&e.length?(e.forEach(function(n){var e=n.iconUrl,a=[n.position.lat,n.position.lng];t[e]?t[e].push(a):t[e]=[a]}),Object.keys(t).map(function(n){return"markers=".concat(n,"|").concat(t[n].join("|"))}).join("&")):""}(this.props.markers))),"/data/1.0/maps/staticmap?".concat(t)}},{key:"render",value:function n(){var e=this.props;return _.createElement("span",{className:["staticMapSnapshot",e.className].join(" ")},this.state.snapshotUrl&&_.createElement("img",{className:e.imgClassName,src:this.state.snapshotUrl}))}}]),e}(_.Component);v()(j,"defaultProps",{alt:"",className:"",imgClassName:"",scale:1,forceMapProvider:null,markers:[]}),e.a=Object(f.connect)(function(n){return{geoId:n.page.geoId,servletName:n.meta.initialServletName}})(j)},"./packages/maps/snapshot/assetCatalogue.jsx":function(n,e,t){"use strict";e.a={attractionPin:"img2/maps/icons/component_map_pins_v1/A_Pin_Small.png",miniAttractionPin:"img2/maps/icons/component_map_pins_v1/A_Pin_xs.png",anchorAttractionPin:"img2/maps/icons/responsive_map_pins_v2/AR_Anchor_pin.png",hotelPin:"img2/maps/icons/component_map_pins_v1/H_Pin_Small.png",miniHotelPin:"img2/maps/icons/component_map_pins_v1/H_Pin_xs.png",anchorHotelPin:"img2/maps/icons/responsive_map_pins_v2/H_Anchor_pin.png",restaurantPin:"img2/maps/icons/component_map_pins_v1/R_Pin_Small.png",miniRestaurantPin:"img2/maps/icons/component_map_pins_v1/R_Pin_xs.png",anchorRestaurantPin:"img2/maps/icons/responsive_map_pins_v2/R_Anchor_pin.png",rentalPin:"img2/maps/icons/responsive_map_pins_v1/VR_green_pin.png",anchorRentalPin:"img2/maps/icons/responsive_map_pins_v2/VR_Anchor_pin.png"}},"./packages/maps/snapshot/snapshot.jsx":function(n,e,t){"use strict";t.r(e);var a=t("./packages/maps/snapshot/MapSnapshot.jsx"),s=t("@ta/maps.provider-names");for(var o in s)["SnapshotAssetCatalogue","default"].indexOf(o)<0&&function(n){t.d(e,n,function(){return s[n]})}(o);var i=t("./packages/maps/snapshot/assetCatalogue.jsx");t.d(e,"SnapshotAssetCatalogue",function(){return i.a}),e.default=a.a}}});
//# sourceMappingURL=maps.snapshot.8bf38ce25a.js.map