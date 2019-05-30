(window.$WP=window.$WP||[]).push({id:"@ta/social.poi",d:["vendor-babel","vendor-react-libs","ta-platform","ta-common","@ta/tracking.interactions","@ta/trips.trip-flow-selector","@ta/trips.bookmark-icon","@ta/social.place-type"],e:["./packages/social/poi/poi.jsx"],x:{"./packages/social/poi/poi.jsx":["POIObject","POIObjectList"]},m:{"./packages/social/poi/poi.jsx":function(e,t,o){"use strict";o.r(t);var a=o("@babel/runtime/helpers/esm/defineProperty"),i=o.n(a),c=o("react"),n=o("@ta/common.classnames"),l=o.n(n),r=o("@ta/common.logging"),s=o.n(r),m=o("@ta/media.image"),u=o("@ta/common.routing"),p=o("@ta/styleguide.bubble-rating"),b=o("@ta/tracking.interactions"),d=o("@ta/trips.trip-flow-selector"),_=o("@ta/trips.bookmark-icon"),h=o("@ta/social.place-type"),v=function e(t){var o;return t&&t.url&&s.a.warn("POIObject using location.url instead of location.route.url!"),(null==t?void 0:null===(o=t.route)||void 0===o?void 0:o.url)||(null==t?void 0:t.url)},O=function e(t){var o=t.poi,a=t.notLazy,n=t.showSavesIcon,r=t.size,s=t.borderRadius,v="small"===r?"60px":"66px",O=o.url&&o.url.length>1,I=o.reviewCount>0&&o.rating>0,j=c.createElement("div",{className:"".concat("social-poi-POIObject__poi_block--3cCN4"," ").concat("social-poi-POIObject__relative_container--3Oeii")},c.createElement("div",{className:"social-poi-POIObject__poi_thumbnail--1PKH3"},o.photo?c.createElement(m.ResponsiveImage,{sources:o.photo.photoSizes,width:v,height:v,notLazy:a,borderRadius:s}):c.createElement("div",{style:{width:v,height:v}},c.createElement(h.NoPhotoAvailableByPlaceType,{location:o.object}))),c.createElement("div",{className:"social-poi-POIObject__poi_info_vertical_center--2KNVB"},c.createElement("div",{className:"social-poi-POIObject__poi_info--H2HPV"},c.createElement("div",{className:"".concat("social-poi-POIObject__poi_name--1QohT"," ").concat(O?"ui_link":""),title:o.name},o.name),I&&c.createElement(p.BubbleRatingWithReviewCount,{numReviews:o.reviewCount,rating:o.rating}),c.createElement("div",{className:l()("social-poi-POIObject__poi_location--3hevu",i()({},"social-poi-POIObject__with_bubble--bbi8o",I))},o.object.placeType&&"CITY"!==o.object.placeType&&c.createElement(h.PlaceTypeIcon,{placeType:o.object.placeType,className:"social-poi-POIObject__meta_icon--23X1b"}),o.secondaryText))),n&&c.createElement("div",{className:"social-poi-POIObject__save_to_trip_wrapper--2h-Z_"},c.createElement(d.QueriedTripFlowSelector,{object:o.object},function(e,t){return c.createElement(b.InteractionLogger,null,function(a){return c.createElement(_.BookmarkIcon,{bookmarkStyle:"flat",bookmarkSize:"20",active:t,onClick:function t(i){e(),a(i,"save",{locationId:o.object.locationId})}})})})));return O?c.createElement(b.InteractionLogger,null,function(e){return o.obfuscatedUrl?c.createElement(u.ObfuscatedLink,{encodedUrl:o.url,onClick:function t(a){return e(a,"linkedPoiClick",{locationId:o.object.locationId})}},j):c.createElement(u.Link,{href:o.url,onClick:function t(a){return e(a,"linkedPoiClick",{locationId:o.object.locationId})}},j)}):j};O.viewModelForObject=function(e){var t,o,a;t="CITY"===e.placeType?e.additionalNames.longOnlyParent:null===(o=e.parent)||void 0===o?void 0:o.additionalNames.long;var i=!1;switch(e.__typename){case"AttractionProductInformation":a=e.attractionProductId,i=!0;break;default:a=e.locationId}return{objectId:a,object:e,name:e.name,secondaryText:t,photo:e.thumbnail,reviewCount:e.reviewSummary?e.reviewSummary.count:0,rating:e.reviewSummary?e.reviewSummary.rating:0,url:v(e),obfuscatedUrl:i}},O.defaultProps={notLazy:!1,showSavesIcon:!1,size:"small",borderRadius:"2px"};var I=O,j=o("@babel/runtime/helpers/esm/classCallCheck"),w=o.n(j),P=o("@babel/runtime/helpers/esm/createClass"),g=o.n(P),f=o("@babel/runtime/helpers/esm/possibleConstructorReturn"),k=o.n(f),y=o("@babel/runtime/helpers/esm/getPrototypeOf"),E=o.n(y),L=o("@babel/runtime/helpers/esm/inherits"),N=o.n(L),C=o("@babel/runtime/helpers/esm/assertThisInitialized"),S=o.n(C),T=o("@ta/common.i18n"),z=o("@ta/styleguide.icon"),A=function e(t){var o=t.poi,a=t.showSavesIcon;return c.createElement("div",{className:"".concat("social-poi-POIObjectList__section--k5Tqu"," ").concat("social-poi-POIObjectList__poi--27llF")},c.createElement("div",{className:"social-poi-POIObjectList__header--1ktvA"},Object(T.localize)("about_this_place")),c.createElement(I,{poi:I.viewModelForObject(o),showSavesIcon:a}))},x=function(e){function t(e){var o;return w()(this,t),o=k()(this,E()(t).call(this,e)),i()(S()(S()(o)),"showAllPOI",function(){o.setState({showAll:!0})}),o.state={showAll:!1},o}return N()(t,e),g()(t,[{key:"render",value:function e(){var t=this,o=this.props,a=o.pois,i=o.limit,n=o.showSavesIcon;if(0===a.length)return null;if(1===a.length)return c.createElement(A,{poi:a[0],showSavesIcon:n});var l=this.state.showAll?a.length-1:i-1,r=(this.state.showAll?a:a.slice(0,i)).map(function(e,o){var r={};return o===l&&(t.state.showAll||a.length<=i)&&(r={border:"none"}),c.createElement("div",{className:"social-poi-POIObjectList__multi_pois--3ZOvF",key:e.name},c.createElement("div",{className:"social-poi-POIObjectList__poi_padding--2q2uR",style:r},c.createElement(I,{poi:I.viewModelForObject(e),notLazy:!0,showSavesIcon:n})))});return c.createElement("div",{className:"".concat("social-poi-POIObjectList__section--k5Tqu"," ").concat("social-poi-POIObjectList__poi--27llF")},c.createElement("div",{className:"".concat("social-poi-POIObjectList__header--1ktvA"," ").concat("social-poi-POIObjectList__multi--1xT69")},Object(T.localize)("social_About_this_place_plural",{0:a.length})),r,a.length>i&&!this.state.showAll&&c.createElement("div",{className:"social-poi-POIObjectList__show_more--mILzn"},c.createElement("span",{className:"ui_link",onClick:this.showAllPOI},Object(T.localize)("airm_mobile_show_more"),c.createElement(z.Icon,{name:"caret-down"}))))}}]),t}(c.Component);i()(x,"defaultProps",{limit:3,showSavesIcon:!1});var R=x;o.d(t,"POIObject",function(){return I}),o.d(t,"POIObjectList",function(){return R})}}});
//# sourceMappingURL=social.poi.b62b08596d.js.map