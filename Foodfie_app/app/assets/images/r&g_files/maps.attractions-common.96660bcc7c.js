(window.$WP=window.$WP||[]).push({id:"@ta/maps.attractions-common",d:["ta-platform","ta-common","vendor-react-libs"],e:["./packages/maps/attractions-common/attractions-common.jsx"],x:{"./packages/maps/attractions-common/attractions-common.jsx":["AttractionCta","AttractionSubtitle"]},m:{"./packages/maps/attractions-common/attractions-common.jsx":function(t,e,n){"use strict";n.r(e);var o=n("@ta/common.tracking"),a=n("@ta/common.routing"),c=n("@ta/styleguide.button"),r=n.n(c),i=n("@ta/common.i18n"),s=n("react"),m=function t(e){return e.experiencesCtaEncodedLink&&e.experiencesCtaStartingCost&&e.experiencesCtaNumOffers?s.createElement(o.ClickTracker,{module:"attraction_card",action:"products_CTA_click",context:"Attractions_Map",value:e.locationId},s.createElement(a.ObfuscatedLink,{encodedUrl:e.experiencesCtaEncodedLink,target:"_blank"},s.createElement(r.a,{type:"secondary",size:"small"},Object(i.localize)("exp_see_n_experiences_from_cost_cap",{0:e.experiencesCtaNumOffers,1:e.experiencesCtaStartingCost})))):null};m.defaultProps={experiencesCtaEncodedLink:void 0,experiencesCtaNumOffers:0,experiencesCtaStartingCost:void 0};var l=m,u=function t(e){return e.openHours||e.openNow?s.createElement("div",null,e.openNow?s.createElement("span",{className:"maps-attractions-common-AttractionSubtitle__clockIcon--1z45g"},e.openNow):null,e.openHours?s.createElement("span",{className:"maps-attractions-common-AttractionSubtitle__clockTime--1rMSr"},e.openHours):null):null},p=function t(e){return s.createElement(s.Fragment,null,s.createElement("div",{className:"maps-attractions-common-AttractionSubtitle__categories--362Pd"},e.category),s.createElement(u,e))};p.defaultProps={category:null,openHours:void 0,openNow:void 0},u.defaultProps={category:null,openHours:void 0,openNow:void 0};var d=p;n.d(e,"AttractionCta",function(){return l}),n.d(e,"AttractionSubtitle",function(){return d})}}});
//# sourceMappingURL=maps.attractions-common.96660bcc7c.js.map