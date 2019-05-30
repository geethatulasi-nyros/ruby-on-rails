(window.$WP=window.$WP||[]).push({id:"@ta/trips.tracking",d:["@ta/trips.trip-types","@ta/trips.trip-util","vendor-babel","vendor-react-libs","ta-platform","@ta/tracking.interactions","vendor-apollo-libs"],e:["./packages/trips/tracking/index.jsx"],x:{"./packages/trips/tracking/index.jsx":["TripInteraction","getInteractionsContext","getTripsHomeImpression","getTripsDetailImpression","getTripsImpression"]},m:{"./packages/trips/tracking/index.jsx":function(e,t,i){"use strict";i.r(t),i("@ta/trips.trip-types");var r=i("@ta/trips.trip-util"),o={alltrips:"ALL",publictrips:"PUBLIC",privatetrips:"PRIVATE"},n=function e(t,i){return{tripsHome:{hasTrips:t&&t.length>0,filter:o[i]||"ALL"}}},a=function e(t){var i;i=t.owner&&t.owner.isMe?"OWNER":Object(r.isTripUser)(t)?"COLLABORATOR":"VIEWER";var o=t.status||void 0;return{tripsDetail:{tripId:t.id,status:o,relation:i,collaborative:!!t.collaborators&&t.collaborators.length>0}}},s=function e(t){var i=t.element,r=t.trip,o=t.trips,n=t.item,a=o?!!(o.length>0):void 0,s=r&&void 0!==a?function e(t,i){return i?t?t&&t.owner&&!t.owner.isMe?"COLLABORATOR":t&&t.collaborators&&t.collaborators.length>0?"COLLABORATED":"EXISTING":"NEW":"FIRST"}(r,a):void 0;return{trips:{element:i,tripId:r&&r.id,tripType:s,hasTrips:a,dated:r&&!!r.date&&(!!r.date.to||!!r.date.from||!!r.date.duration),isSaved:n&&n.saved}}},c=i("@babel/runtime/helpers/esm/defineProperty"),l=i.n(c),p=i("@babel/runtime/helpers/esm/objectSpread"),u=i.n(p),d=i("react"),m=i("@ta/common.tracking"),f=i("@ta/tracking.interactions"),v=i("@ta/common.routing"),g=i("react-apollo"),k={Home:"HomeFeed",Profile:"ProfileFeed",Attractions:"AttractionList",Attraction_Review:"AttractionDetail",Attraction_Products:"AttractionList",AttractionProductDetail:"AttractionProductDetail",Hotels:"HotelList",SmartDeals:"HotelList",HotelHighlight:"HotelList",HotelsList:"HotelList",HotelsNear:"HotelList",Vacation_Packages:"HotelList",Hotel_Review:"HotelDetail",Restaurants:"RestaurantList",Restaurant_Review:"RestaurantDetail",ShowUserReviews:"ShowUserReview",Recent:"Recent",Forums:"Forums",ShowTopic:"Forums",ShowForum:"Forums",Trips:"Trips",Map:"Map",LastMinute:"HotelList",LocalMaps:"Map",LocalMapsRedesign:"Map",VacationRentalReview:"VacationRentalDetail"},C=function e(t){return t&&k[t]?k[t].toUpperCase():void 0},R=function e(t){return t&&(C(t)||C(t.replace(/^Mobile/,"")))},w=function e(t){var i=t.children,r=t.source,o=t.pageAsContext,n=t.saveObject,a=t.trackingContext;return d.createElement(v.RouteConsumer,null,function(e){var t=e.route;return d.createElement(m.TrackingImpressionContext,null,function(e){var s=e.impressionId||"",c=a||o&&t&&t.page||void 0,p={detailId:n?"".concat(n.id):void 0,saveType:n?n.type:void 0};return d.createElement(g.Mutation,{mutation:f.LogInteractionV4,ignoreResults:!0},function(e){return i(function(t){var i={elementClick:t.elementClick&&u()({puid:s},p,{context:c},t.elementClick),filterClick:t.filterClick&&u()({puid:s},t.filterClick),modalSuccess:t.modalSuccess&&u()({puid:s},p,{context:c},t.modalSuccess),overflowClick:t.overflowClick&&u()({puid:s},t.overflowClick),overflowSuccess:t.overflowSuccess&&u()({puid:s},t.overflowSuccess),linkReferenceClick:t.linkReferenceClick&&u()({puid:s},t.linkReferenceClick)},o=l()({},r,function n(e){var t=e;return["elementClick","modalSuccess"].forEach(function(e){t[e]&&t[e].context&&(t[e].context=R(t[e].context)||null),t[e]&&t[e].saveType&&(t[e].saveType=t[e].saveType.toUpperCase())}),["elementClick","filterClick","modalSuccess","overflowClick","overflowSuccess"].forEach(function(e){t[e]&&t[e].element&&(t[e].element=t[e].element.toUpperCase())}),["modalSuccess"].forEach(function(e){t[e]&&t[e].fields&&(t[e].fields=t[e].fields.map(function(e){return e.toUpperCase()}))}),t}(i));e({variables:{interaction:o}})},s)})})})};w.defaultProps={pageAsContext:!1,saveObject:void 0,trackingContext:void 0};var L=w;i.d(t,"getTripsHomeImpression",function(){return n}),i.d(t,"getTripsDetailImpression",function(){return a}),i.d(t,"getTripsImpression",function(){return s}),i.d(t,"TripInteraction",function(){return L}),i.d(t,"getInteractionsContext",function(){return R})}}});
//# sourceMappingURL=trips.tracking.ad9829c37f.js.map