(window.$WP=window.$WP||[]).push({id:"@ta/restaurants.detail-fab",d:["vendor-react-libs","ta-platform","ta-common","@ta/overlays.managers","@ta/public.floating-action-button","@ta/restaurants.tracking","@ta/trips.trip-flow-selector","@ta/restaurants.photo-upload"],e:["./packages/restaurants/detail-fab/DetailFab.jsx"],x:{"./packages/restaurants/detail-fab/DetailFab.jsx":["default"]},m:{"./packages/restaurants/detail-fab/DetailFab.jsx":function(t,e,a){"use strict";a.r(e);var n=a("react"),r=a("@ta/common.api"),i=a("@ta/common.features"),c=a("@ta/common.i18n"),o=a("@ta/common.tracking"),l=a("@ta/failover.readonly"),s=a("@ta/overlays.managers"),u=a("@ta/public.floating-action-button"),d=a("@ta/restaurants.tracking"),m=a("@ta/trips.trip-flow-selector"),k=a("@ta/restaurants.photo-upload");e.default=Object(r.bind)(function(t,e){var a=t.page.detailId,n=a,r=e("/data/1.0/restaurant/".concat(a,"/overview"));return function(){var e=r.get().data;return{warUrl:e&&e.links&&e.links.warUrl||"",detailId:a,isOwner:e&&e.isOwner||!1,trackingContext:n,viewport:t.meta.device.viewportCategory}}})(function t(e){return!Object(i.featureIsEnabled)("restaurant_fab")||e.isOwner||"MOBILE"!==e.viewport?null:n.createElement(l.HideOnReadonly,null,n.createElement(u.FloatingActionButton,{bottom:79,onButtonClick:function t(a,n){!function t(e,a,n){var r;r=a?"openFAB_click":"closeXFAB_click",Object(o.trackClick)(e,{module:"Restaurant_Review",action:r,context:n})}(a,n,e.trackingContext)},onBackgroundClick:function t(a){!function t(e,a){Object(o.trackClick)(e,{module:"Restaurant_Review",action:"closeFAB_click",context:a})}(a,e.trackingContext)}},n.createElement(s.Opener,{name:k.PHOTO_UPLOADER},function(t){return n.createElement(d.RDetailClickTracker,{action:"addPhotoFAB_click"},n.createElement(u.FloatingActionItem,{icon:"camera-fill",title:Object(c.localize)("restaurants_ugc_postPhoto"),onClick:t,pid:40513,requiresLogin:!0}))}),n.createElement(d.RDetailClickTracker,{action:"warFAB_click"},n.createElement(u.FloatingActionItem,{icon:"pencil-paper",title:Object(c.localize)("restaurants_ugc_war_2"),url:e.warUrl})),n.createElement(m.QueriedTripFlowSelector,{object:{locationId:e.detailId,__typename:"LocationInformation"}},function(t){return n.createElement(d.RDetailClickTracker,{action:"addTripFAB_click"},n.createElement(u.FloatingActionItem,{icon:"bookmark",title:Object(c.localize)("restaurants_ugc_saveTrip"),onClick:t,pid:40513,requiresLogin:!0}))})))})}}});
//# sourceMappingURL=restaurants.detail-fab.84f339ec2c.js.map