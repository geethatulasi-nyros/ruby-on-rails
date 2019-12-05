(window.$WP=window.$WP||[]).push({id:"@ta/trips.trip-util",d:["vendor-babel","ta-platform","@ta/trips.trip-types","@ta/social.feed","@ta/trips.graphql"],e:["./packages/trips/trip-util/trip-util.jsx"],x:{"./packages/trips/trip-util/trip-util.jsx":["getTripCoverPhoto","getTripUsers","isTripUser","getTripPermissions","getCollabPermissions","getItemPermissions","getCommentPermissions","getTripUsersForDisplay","getCommentsForDisplay","isOwner","getItemByReference","getItemIdByReference","saveObjectExistsInTrip","itemExistsInTrip","updateSocialStatisticsOnSave","updateSocialStatisticsOnUnsave","getReferenceTypeFromObjectType","toSavesObject","toReference","buildPublicTripShareUrl","objectStatisticQuery","isRepostSaveable"]},m:{"./packages/trips/trip-util/trip-util.jsx":function(t,e,i){"use strict";i.r(e),i.d(e,"getTripCoverPhoto",function(){return p}),i.d(e,"getTripUsers",function(){return f}),i.d(e,"isTripUser",function(){return l}),i.d(e,"getTripPermissions",function(){return m}),i.d(e,"getCollabPermissions",function(){return b}),i.d(e,"getItemPermissions",function(){return g}),i.d(e,"getCommentPermissions",function(){return v}),i.d(e,"getTripUsersForDisplay",function(){return y}),i.d(e,"getCommentsForDisplay",function(){return S}),i.d(e,"isOwner",function(){return j}),i.d(e,"getItemByReference",function(){return O}),i.d(e,"getItemIdByReference",function(){return P}),i.d(e,"saveObjectExistsInTrip",function(){return F}),i.d(e,"itemExistsInTrip",function(){return T}),i.d(e,"updateSocialStatisticsOnSave",function(){return w}),i.d(e,"updateSocialStatisticsOnUnsave",function(){return R}),i.d(e,"getReferenceTypeFromObjectType",function(){return k}),i.d(e,"toSavesObject",function(){return N}),i.d(e,"toReference",function(){return x}),i.d(e,"buildPublicTripShareUrl",function(){return z}),i.d(e,"objectStatisticQuery",function(){return A}),i.d(e,"isRepostSaveable",function(){return D});var r=i("@babel/runtime/helpers/esm/defineProperty"),n=i.n(r),o=i("@babel/runtime/helpers/esm/objectSpread"),a=i.n(o),c=i("@ta/common.global"),s=i("@ta/common.features"),u=(i("@ta/trips.trip-types"),i("@ta/social.feed")),d=i("@ta/trips.graphql"),p=function t(e){return e.photo&&e.photo.photoSizes[e.photo.photoSizes.length-1]?e.photo.photoSizes[e.photo.photoSizes.length-1]:null},f=function t(e){var i=e.owner,r=i?[i]:[];if(Object(s.featureIsEnabled)("trips_2018_collab")){var n=(e.collaborators||[]).map(function(t){return t.user}).filter(function(t){return t});r=r.concat(n)}return r},l=function t(e){return f(e).some(function(t){return t.isMe})},m=function t(e,i){return Object(s.featureIsEnabled)("trips_2018_collab")?e.actionPermissions||{}:{canAddCollaborators:i,canAddItem:i,canChangePrivacy:i,canDelete:i,canEdit:i,canUploadCoverPhoto:e.actionPermissions&&e.actionPermissions.canUploadCoverPhoto&&i}},b=function t(e,i){return Object(s.featureIsEnabled)("trips_2018_collab")?e.actionPermissions||{}:{canRemove:i}},g=function t(e,i){return Object(s.featureIsEnabled)("trips_2018_collab")?e.actionPermissions||{}:{canAddComment:i,canEdit:i,canRemove:i}},v=function t(e,i){return Object(s.featureIsEnabled)("trips_2018_collab")?e.actionPermissions||{}:{canEdit:i,canRemove:i}},y=function t(e,i,r,n){var o=f(e);if(o=o.slice(0,i),r>0){var a=0;o=o.filter(function(t){return(a=t.displayName.length+a)<r})}return n&&(o=o.reverse()),o},S=function t(e,i,r){var n=r&&r.id,o=Object(s.featureIsEnabled)("trips_2018_collab")?function(){return!0}:function(t){return t.author.id===n||"ITEM"===t.targetType&&t.targetId!==e.id};return(i||[]).filter(o).sort(function t(e,i){return e.created>i.created?1:-1})},j=function t(e){var i;return null==e?void 0:null===(i=e.owner)||void 0===i?void 0:i.isMe},O=function t(e,i){return(e.items||[]).find(function(t){var e,r=t.reference&&t.reference.type&&t.reference.type.toLowerCase(),n=null===(e=t.reference)||void 0===e?void 0:e.id,o=i.type.toLowerCase(),a=i.id.toString(),c=i.originalObject&&i.originalObject.type&&i.originalObject.type.toLowerCase(),s=i.originalObject&&i.originalObject.id.toString();return r===o&&n===a||r===c&&n===s})},P=function t(e,i){var r=O(e,i);return r?r.id:null},I=function t(e,i){return"savesItem"===i.type?e.id===i.id:"location"===i.type?!!e.object&&e.object.locationId&&e.object.locationId.toString()===i.id.toString():"attractionProduct"===i.type?!!e.object&&e.object.attractionProductId&&e.object.attractionProductId.toString()===i.id.toString():!!e.reference&&e.reference.type===i.type&&e.reference.id===i.id.toString()},F=function t(e,i){return!!(e.items||[]).find(function(t){return I(t,i)||!!i.originalObject&&I(t,i.originalObject)})},T=function t(e,i){return!!(e.items||[]).find(function(t){return!(!t.reference||!i.reference)&&t.reference.id===i.reference.id&&t.reference.type===i.reference.type})},h={savesItem:{fragment:d.TripItemStatisticFields,fragmentName:"TripItemStatisticFields",dataTypename:"TripItem"},link:{fragment:u.FeedObjectStatisticFieldsFragment,fragmentName:"FeedObjectStatisticFields",dataTypename:"LinkPost"},photo:{fragment:u.FeedObjectStatisticFieldsFragment,fragmentName:"FeedObjectStatisticFields",dataTypename:"Photo"},video:{fragment:u.FeedObjectStatisticFieldsFragment,fragmentName:"FeedObjectStatisticFields",dataTypename:"Video"},review:{fragment:u.FeedObjectStatisticFieldsFragment,fragmentName:"FeedObjectStatisticFields",dataTypename:"Review"},repost:{fragment:u.FeedObjectStatisticFieldsFragment,fragmentName:"FeedObjectStatisticFields",dataTypename:"Repost"}},_=function t(e,i,r,o){var s=h[i.type];if(s){var u,d=s.fragment,p=s.fragmentName,f=s.dataTypename,l="".concat(f,":").concat(i.id),m=e.readFragment({id:l,fragment:d,fragmentName:p}),b=Object(c.getObjectIdField)(f),g=((null==m?void 0:m.socialStatistics)||{}).tripCount,v=o(void 0===g?r:g);e.writeFragment({id:l,fragment:d,fragmentName:p,data:(u={__typename:f},n()(u,b,i.id),n()(u,"socialStatistics",a()({},m.socialStatistics,{isSaved:v>0,tripCount:v,__typename:"SocialStatistics"})),u)})}},w=function t(e,i){return _(e,i,0,function(t){return t+1})},R=function t(e,i){return _(e,i,1,function(t){return t-1})},C={locationinformation:"location",attractionproductinformation:"attractionProduct",forumpost:"post",tripitem:"savesItem",linkpost:"link",photo:"photo",video:"video",review:"review",repost:"repost"},E=function t(e){return{statQuery:e}},U=Object.freeze({location:E(d.LocationStatistics),attractionProduct:E(d.AttractionStatistics),post:E(d.ForumStatistics),savesItem:E(d.TripItemStatistics),link:E(d.LinkPostStatistics),review:E(d.ReviewStatistics),photo:E(d.PhotoStatistics),video:E(d.VideoStatistics),repost:E(d.RepostStatistics)}),k=function t(e){return C[e.toLowerCase()]},L=["LocationInformation","AttractionProductInformation","ForumPost","LinkPost","Review","Photo","Video","Repost"],N=function t(e){if(!e)return null;var i=Object(c.getObjectId)(e),r=k(e.__typename);if(i&&r){if(L.includes(e.__typename))return{type:r,id:i};if("TripItem"===e.__typename&&e.reference&&e.reference.id&&e.reference.type)return{type:r,id:i,originalObject:{id:e.reference.id,type:"attractionproduct"===e.reference.type?"attractionProduct":e.reference.type}}}return null},x=function t(e){return{id:"".concat(e.id),type:e.type}},z=function t(e,i){var r=i?"?itemId=".concat(i):"";return"/Trips/".concat(e).concat(r)},A=function t(e){var i=U[e.type];return i?e&&{query:i.statQuery,variables:{ids:[e.id]}}:null},D=function t(e){var i,r;return["LinkPost","Photo","Review","Video"].includes(null==e?void 0:null===(i=e.object)||void 0===i?void 0:null===(r=i.repostedObject)||void 0===r?void 0:r.__typename)}}}});
//# sourceMappingURL=trips.trip-util.f79e6389c6.js.map