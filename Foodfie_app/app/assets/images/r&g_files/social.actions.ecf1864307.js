(window.$WP=window.$WP||[]).push({id:"@ta/social.actions",d:["vendor-babel","vendor-react-libs","ta-platform","@ta/social.common-popover","@ta/tracking.interactions","vendor-apollo-libs","@ta/overlays.popover","ta-common","@ta/overlays.toast","@ta/social.feed","@ta/social.login-gate","@ta/social.blocks","@ta/common.webview","@ta/social.onboarding-state","@ta/trips.trip-flow-selector","@ta/trips.bookmark-icon"],e:["./packages/social/actions/index.jsx"],x:{"./packages/social/actions/index.jsx":["DeleteConfirmation","UntagConfirmation","UntagAction","DisplayUntagIcon","DisabledSocialAction","LikeAction","NestedSocialAction","BoostAction","SaveAction","classes","SocialAction","SocialActionBar","SocialActionStyles"]},m:{"./packages/social/actions/index.jsx":function(e,i,n){"use strict";n.r(i);var t=n("@babel/runtime/helpers/esm/extends"),a=n.n(t),o=n("@babel/runtime/helpers/esm/objectWithoutProperties"),c=n.n(o),d=n("react"),r=n("@ta/common.i18n"),l=n("@ta/social.common-popover"),s={Review:function e(){return Object(r.localize)("delete_confirmation_description_review_0")},Photo:function e(){return Object(r.localize)("delete_confirmation_description_photo_0")},Video:function e(){return Object(r.localize)("delete_confirmation_description_video_0")},ForumPost:function e(){return Object(r.localize)("delete_confirmation_description_forum_post_0")},LinkPost:function e(){return Object(r.localize)("delete_confirmation_description_link_post_0")},Trip:function e(){return Object(r.localize)("trips_delete_trip_confirmation_text_v2")},Repost:function e(){return Object(r.localize)("delete_confirmation_description_repost_0")},ApiLocationTopic:function e(){return Object(r.localize)("aao_delete_question_msg_fffff375")},ApiTopicPosting:function e(){return Object(r.localize)("aao_delete_answer_msg_fffff375")},MediaBatch:function e(){return Object(r.localize)("delete_confirmation_description_post_0")}},m={Review:function e(){return Object(r.localize)("delete_confirmation_header_review_0")},Photo:function e(){return Object(r.localize)("delete_confirmation_header_photo_0")},Video:function e(){return Object(r.localize)("delete_confirmation_header_video_0")},ForumPost:function e(){return Object(r.localize)("delete_confirmation_header_forum_post_0")},LinkPost:function e(){return Object(r.localize)("delete_confirmation_header_link_post_0")},Repost:function e(){return Object(r.localize)("delete_confirmation_header_repost_1")},Trip:function e(){return Object(r.localize)("trips_delete_trip_confirmation_header")},MediaBatch:function e(){return Object(r.localize)("delete_confirmation_header_post_0")}},u=function e(){return Object(r.localize)("aao_delete_cancel_btn_fffff375")},p=function e(){return Object(r.localize)("inbox_swipe_delete")},k=function e(i){var n=i.objectType,t=i.deleteObject,o=c()(i,["objectType","deleteObject"]);return d.createElement(l.ConfirmationPopover,a()({},o,{header:m[n],description:s[n],cancel:u,confirm:p,onConfirm:t,onCancel:null}))};k.defaultProps={above:void 0,below:void 0,rightOf:void 0,leftOf:void 0,alignEdge:void 0,shiftX:0,shiftY:0,shiftArrow:0,fixed:!1,deleteObject:null};var v=k,f=n("@ta/tracking.interactions"),b=function e(i){var n=i.untagObject,t=c()(i,["untagObject"]),o=Object(r.localize)("social_untag_confirmation_message"),s=Object(r.localize)("social_untag_yourself"),m=function e(){return Object(r.localize)("aao_delete_cancel_btn_fffff375")},u=function e(){return Object(r.localize)("social_remove_tag")};return d.createElement(f.InteractionLogger,null,function(e){return d.createElement(l.ConfirmationPopover,a()({},t,{header:s,description:o,cancel:m,confirm:u,onConfirm:function i(t){e(t,"untagConfirm"),n&&n()},onCancel:function i(n){e(n,"untagCancel")}}))})};b.defaultProps={above:void 0,below:void 0,rightOf:void 0,leftOf:void 0,alignEdge:void 0,shiftX:0,shiftY:0,shiftArrow:0,fixed:!1,untagObject:null};var N=b,g=n("@babel/runtime/helpers/esm/objectSpread"),_=n.n(g),y=n("@babel/runtime/helpers/esm/classCallCheck"),S=n.n(y),j=n("@babel/runtime/helpers/esm/createClass"),h=n.n(j),F=n("@babel/runtime/helpers/esm/possibleConstructorReturn"),O=n.n(F),T=n("@babel/runtime/helpers/esm/getPrototypeOf"),I=n.n(T),A=n("@babel/runtime/helpers/esm/inherits"),V=n.n(A),C=n("@babel/runtime/helpers/esm/assertThisInitialized"),R=n.n(C),D=n("@babel/runtime/helpers/esm/defineProperty"),L=n.n(D),P=n("react-apollo"),w=n("@ta/common.logging"),U=n.n(w),E={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UntagUserReference"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"untagCurrentUserReference"},arguments:[{kind:"Argument",name:{kind:"Name",value:"objectId"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"objectType"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}],directives:[]}]}}],loc:{start:0,end:124}};E.loc.source={body:"7a2d11450ede"};var z=E,B={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UpdateSocialReferences"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"idInt"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"idLong"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Long"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"updatePhoto"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"updateVideo"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"updateRepost"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"updateLinkPost"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"updateTrip"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"updateTripComment"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GetUpdatedReferencesPhoto"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"updatePhoto"}}}]}]},{kind:"FragmentSpread",name:{kind:"Name",value:"GetUpdatedReferencesVideo"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"updateVideo"}}}]}]},{kind:"FragmentSpread",name:{kind:"Name",value:"GetUpdatedReferencesRepost"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"updateRepost"}}}]}]},{kind:"FragmentSpread",name:{kind:"Name",value:"GetUpdatedReferencesLinkPost"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"updateLinkPost"}}}]}]},{kind:"FragmentSpread",name:{kind:"Name",value:"GetUpdatedReferencesTrip"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"updateTrip"}}}]}]},{kind:"FragmentSpread",name:{kind:"Name",value:"GetUpdatedReferencesTripComment"},directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"updateTripComment"}}}]}]}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"socialReferences"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SocialReferences"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userReferences"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"offset"},arguments:[],directives:[]}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"GetUpdatedReferencesPhoto"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"photos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"photoIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"idInt"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialReferences"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"socialReferences"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"GetUpdatedReferencesVideo"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"videos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"videoIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"idInt"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialReferences"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"socialReferences"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"GetUpdatedReferencesRepost"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"reposts"},arguments:[{kind:"Argument",name:{kind:"Name",value:"repostIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"idLong"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"repostId"},name:{kind:"Name",value:"id"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"static"},arguments:[]}]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialReferences"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"socialReferences"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"GetUpdatedReferencesLinkPost"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"linkPosts"},arguments:[{kind:"Argument",name:{kind:"Name",value:"linkPostIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"idLong"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"postId"},name:{kind:"Name",value:"id"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"static"},arguments:[]}]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialReferences"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"socialReferences"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"GetUpdatedReferencesTrip"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trip"},arguments:[{kind:"Argument",name:{kind:"Name",value:"tripId"},value:{kind:"Variable",name:{kind:"Name",value:"idInt"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialReferences"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"socialReferences"},directives:[]}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"GetUpdatedReferencesTripComment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tripItem"},arguments:[{kind:"Argument",name:{kind:"Name",value:"itemId"},value:{kind:"Variable",name:{kind:"Name",value:"idLong"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialReferences"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"socialReferences"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1761}};B.loc.source={body:"43fa07df4d1a"};var x=B,G={Repost:"repostId",LinkPost:"postId"},Q=function e(i,n){return i&&n&&i.socialReferences&&i.socialReferences.userReferences&&i.socialReferences.userReferences.find(function(e){return e.userId===n})},q=function(e){function i(){var e,n;S()(this,i);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=O()(this,(e=I()(i)).call.apply(e,[this].concat(a))),L()(R()(R()(n)),"getId",function(e){return G[e.__typename]?e[G[e.__typename]]:e.id}),L()(R()(R()(n)),"getType",function(e){return"TripComment"===e.__typename?"COMMENT":e.__typename.toUpperCase()}),n}return V()(i,e),h()(i,[{key:"render",value:function e(){var i=this;return d.createElement(P.ApolloConsumer,null,function(e){return i.props.children(function(n){var t={updatePhoto:"Photo"===n.__typename,updateVideo:"Video"===n.__typename,updateRepost:"Repost"===n.__typename,updateLinkPost:"LinkPost"===n.__typename,updateTrip:"Trip"===n.__typename,updateTripComment:"TripComment"===n.__typename};t&&e.mutate({mutation:z,variables:{id:i.getId(n),type:i.getType(n)}}).then(function(){return e.query({query:x,variables:_()({idInt:i.getId(n),idLong:i.getId(n)},t)})}).then(function(){i.forceUpdate()}).catch(function(e){return U.a.error("Untag User Reference failed. Reason: ".concat(e))})})})}}]),i}(d.Component),M=n("react-redux"),W=n("@ta/overlays.popover"),K=n.n(W),Y=n("@ta/styleguide.icon"),X=n("@ta/common.tracking"),H={social_action:"social-actions-SocialAction__social_action--1RrZ-",icon:"social-actions-SocialAction__icon--2WCF0",text:"social-actions-SocialAction__text--1yJuk",active:"social-actions-SocialAction__active--2o63F"},Z=function(e){function i(e){var n;return S()(this,i),n=O()(this,I()(i).call(this,e)),L()(R()(R()(n)),"setTracking",function(e,i){n.state.tracked||(Object(X.trackClick)(e,{module:"".concat(i,"Action_Disabled"),action:"CLICK"}),n.setState({tracked:!0}))}),n.state={tracked:!1},n}return V()(i,e),h()(i,[{key:"render",value:function e(){var i,n,t,a=this;switch(this.props.actionType){case"Save":i="bookmark-fill",n=Object(r.localize)("social_Save"),t="save";break;case"Share":i="repost-fill",n=Object(r.localize)("link_share_share"),t="share"}var o="MOBILE"===this.props.viewportCategory,c=o?"right":"left",l=o?12:-28,s=o?8:12;return d.createElement(K.a,{above:!0,alignEdge:c,shiftX:l,shiftY:-8,shiftArrow:s,arrowType:"small",contents:function e(){return d.createElement("span",{className:"social-actions-DisabledSocialAction__body_text--3ZAdS"},Object(r.localize)("social_Coming_soon"))},local:!0},function(e,o){return d.createElement(f.InteractionLogger,null,function(c){return d.createElement("span",{className:H.social_action,ref:e,onClick:function e(i){c(i,t),o(),a.setTracking(i,n)}},d.createElement(Y.Icon,{name:i,className:H.icon}),d.createElement("span",{className:"ui_link ".concat(H.text," socialCTA")},n))})})}}]),i}(d.Component),$=Object(M.connect)(function(e){return{viewportCategory:e.meta.device.viewportCategory}})(Z),J=n("@ta/common.features"),ee=n("@ta/overlays.toast"),ie=n("@ta/social.feed"),ne=n("@ta/social.login-gate"),te=n("@ta/social.blocks"),ae=n("@ta/common.webview"),oe=n("@ta/social.onboarding-state"),ce=n("@ta/common.global"),de={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddLike"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectType"}},type:{kind:"NamedType",name:{kind:"Name",value:"SocialObjectTypeInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"addLike"},name:{kind:"Name",value:"addLikeV2"},arguments:[{kind:"Argument",name:{kind:"Name",value:"socialObject"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"objectType"},value:{kind:"Variable",name:{kind:"Name",value:"objectType"}}},{kind:"ObjectField",name:{kind:"Name",value:"objectId"},value:{kind:"Variable",name:{kind:"Name",value:"objectId"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"statusType"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:182}};de.loc.source={body:"3a19c224fff8"};var re=de,le={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteLike"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectType"}},type:{kind:"NamedType",name:{kind:"Name",value:"SocialObjectTypeInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"deleteLike"},name:{kind:"Name",value:"deleteLikeV2"},arguments:[{kind:"Argument",name:{kind:"Name",value:"socialObject"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"objectType"},value:{kind:"Variable",name:{kind:"Name",value:"objectType"}}},{kind:"ObjectField",name:{kind:"Name",value:"objectId"},value:{kind:"Variable",name:{kind:"Name",value:"objectId"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"statusType"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:191}};le.loc.source={body:"fd777476a1ee"};var se=le,me=new Set(["Review","Photo","Video"]),ue=function(e){function i(){var e,n;S()(this,i);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=O()(this,(e=I()(i)).call.apply(e,[this].concat(a))),L()(R()(R()(n)),"addLike",function(e){var i=n.props.item;return me.has(i.__typename)&&n.legacyVote(),n.props.addLike(_()({},e,{__typename:i.__typename,socialStatistics:i.socialStatistics,updateFragment:n.props.updateFragment,updateFragmentName:n.props.updateFragmentName}))}),L()(R()(R()(n)),"legacyVote",function(){var e,i,t=n.props.item;"Review"===t.__typename?e="/RateUserReview?src=".concat(encodeURIComponent(t.id),"&geo=").concat(encodeURIComponent(t.location.parent.parentGeoId),"&uid=").concat(encodeURIComponent(t.userId),"&rateValue=1&token=").concat(encodeURIComponent(n.props.csrfToken)):(i="Video"===t.__typename?t.orderedLocations.length>0&&t.orderedLocations[0]?t.orderedLocations[0].locationId:"":t.location.locationId,e="/VideoController?a=vt&ff=".concat(encodeURIComponent(t.id),"&vote=5&detail=").concat(encodeURIComponent(i),"&token=").concat(encodeURIComponent(n.props.csrfToken))),fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin"})}),L()(R()(R()(n)),"isActive",function(){return n.props.item&&n.props.item.socialStatistics&&n.props.item.socialStatistics.isLiked}),L()(R()(R()(n)),"memberGeneratedAction",function(){var e=n.props.socialObject?n.props.socialObject:{objectType:n.props.item.__typename.toUpperCase(),objectId:n.props.item.id};return n.isActive()?n.props.deleteLike(_()({},e,{__typename:n.props.item.__typename,socialStatistics:n.props.item.socialStatistics,updateFragment:n.props.updateFragment,updateFragmentName:n.props.updateFragmentName})).then(function(e){return e.data.deleteLike}):n.addLike(e).then(function(e){return e.data.addLike})}),L()(R()(R()(n)),"afterActionComplete",function(e){var i=e.statusType;"NO_PERMISSION"===i?n.props.launchToast({node:d.createElement(te.NoPermissionToast,null)}):"OK"===i&&n.props.setFireOnboarding(!1,"LIKE_ACTION")}),n}return V()(i,e),h()(i,[{key:"render",value:function e(){var i=this,n=this.props.item.__typename,t=this.props.item.id,a="Review"===n?Object(r.localize)("social_Helpful"):Object(r.localize)("social_Like"),o=d.createElement(ne.SocialLoginGate,{pid:40469},function(e){var o=i.isActive()?"unhelpful":"helpful";return d.createElement(f.InteractionLogger,null,function(c){return d.createElement("span",{className:"".concat(H.social_action," ").concat(i.isActive()?H.active:""),onClick:function a(d){i.props.onClick&&i.props.onClick(),c(d,o),ae.NativeBridge.isNativeWebview()&&ae.NativeBridge.isActionSupported("like",1)?t&&n&&ae.NativeBridge.postToBridge("like",1,{objectId:t,type:n,undo:i.isActive()}):e().then(i.memberGeneratedAction).then(i.afterActionComplete)}},d.createElement(Y.Icon,{name:"thumbs-up-fill",className:H.icon}),d.createElement("span",{className:"ui_link ".concat(H.text)},a))})});return d.createElement(d.Fragment,null,Object(J.featureIsEnabled)("social_likes_enabled")?o:null)}}]),i}(d.Component);L()(ue,"defaultProps",{updateFragment:ie.FeedObjectStatisticFieldsFragment,updateFragmentName:"FeedObjectStatisticFields",onClick:void 0,attemptOnboarding:!0});var pe=Object(P.compose)(Object(M.connect)(function(e,i){return _()({loggedInUserId:e.auth.loggedInUserId,csrfToken:e.auth.csrfToken},i)},{setFireOnboarding:oe.ACTIONS.setShouldFire}),Object(P.graphql)(re,{props:function e(i){var n=i.mutate;return{addLike:function e(i){var t=i.objectType,a=i.objectId,o=i.__typename,c=i.socialStatistics,d=i.updateFragment,r=i.updateFragmentName,l=Object(ce.getObjectIdField)(o);return n({variables:{objectType:t,objectId:a},refetchQueries:[{query:ie.LikersFeedQuery,variables:{objectType:t,objectId:a,limit:20}}],update:function e(i,n){var t,s,m=n.data;if("OK"===(null==m?void 0:null===(t=m.addLike)||void 0===t?void 0:t.statusType)){var u=(c||{}).likeCount,p=void 0===u?0:u;i.writeFragment({id:"".concat(o,":").concat(a),fragment:d,fragmentName:r,data:(s={__typename:o},L()(s,l,a),L()(s,"socialStatistics",_()({},c,{isLiked:!0,likeCount:p+1,__typename:"SocialStatistics"})),s)})}}})}}}}),Object(P.graphql)(se,{props:function e(i){var n=i.mutate;return{deleteLike:function e(i){var t=i.objectType,a=i.objectId,o=i.__typename,c=i.socialStatistics,d=i.updateFragment,r=i.updateFragmentName,l=Object(ce.getObjectIdField)(o);return n({variables:{objectType:t,objectId:a},refetchQueries:[{query:ie.LikersFeedQuery,variables:{objectType:t,objectId:a,limit:20}}],update:function e(i,n){var t,s,m=n.data;if("OK"===(null==m?void 0:null===(t=m.deleteLike)||void 0===t?void 0:t.statusType)){var u=(c||{}).likeCount,p=void 0===u?1:u;i.writeFragment({id:"".concat(o,":").concat(a),fragment:d,fragmentName:r,data:(s={},L()(s,l,a),L()(s,"__typename",o),L()(s,"socialStatistics",_()({},c,{isLiked:!1,likeCount:p-1,__typename:"SocialStatistics"})),s)})}}})}}}}))(function e(i){return d.createElement(ee.Toaster,null,function(e){return d.createElement(ue,a()({},i,{launchToast:e}))})}),ke=n("@ta/common.classnames"),ve=n.n(ke),fe=function e(i){var n=i.children,t=i.padRight;return d.createElement("span",{className:ve()("social-actions-NestedSocialAction__nested_social_action--2mhpU",L()({},"social-actions-NestedSocialAction__pad_right--3zjLW",t))},n)};fe.defaultProps={padRight:!1};var be=fe,Ne={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddBoost"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectType"}},type:{kind:"NamedType",name:{kind:"Name",value:"SocialObjectTypeInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addBoost"},arguments:[{kind:"Argument",name:{kind:"Name",value:"socialObject"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"objectType"},value:{kind:"Variable",name:{kind:"Name",value:"objectType"}}},{kind:"ObjectField",name:{kind:"Name",value:"objectId"},value:{kind:"Variable",name:{kind:"Name",value:"objectId"}}}]}}],directives:[]}]}}],loc:{start:0,end:152}};Ne.loc.source={body:"768041708b2e"};var ge=Ne,_e={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteBoost"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"objectType"}},type:{kind:"NamedType",name:{kind:"Name",value:"SocialObjectTypeInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteBoost"},arguments:[{kind:"Argument",name:{kind:"Name",value:"socialObject"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"objectType"},value:{kind:"Variable",name:{kind:"Name",value:"objectType"}}},{kind:"ObjectField",name:{kind:"Name",value:"objectId"},value:{kind:"Variable",name:{kind:"Name",value:"objectId"}}}]}}],directives:[]}]}}],loc:{start:0,end:158}};_e.loc.source={body:"74f8ce5e608d"};var ye=_e,Se=function(e){function i(){var e,n;S()(this,i);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=O()(this,(e=I()(i)).call.apply(e,[this].concat(a))),L()(R()(R()(n)),"memberGeneratedAction",function(){return n.isActive()?n.props.unboost({socialObjectRef:n.props.socialObjectRef,__typename:n.props.typename,socialStatistics:n.props.socialStatistics}):n.props.boost({socialObjectRef:n.props.socialObjectRef,__typename:n.props.typename,socialStatistics:n.props.socialStatistics})}),L()(R()(R()(n)),"isActive",function(){return n.props.socialStatistics&&n.props.socialStatistics.isBoosted}),n}return V()(i,e),h()(i,[{key:"render",value:function e(){return d.createElement("span",{className:ve()(H.social_action,L()({},H.active,this.isActive())),onClick:this.memberGeneratedAction},d.createElement(Y.Icon,{name:"instant",className:H.icon}),d.createElement("span",{className:"ui_link ".concat(H.text," socialCTA")},this.isActive()?Object(r.localize)("boosted_social"):Object(r.localize)("boost_social")))}}]),i}(d.Component),je=Object(P.compose)(Object(M.connect)(function(e){return{loggedInUserId:e.auth.loggedInUserId}}),Object(P.graphql)(ge,{props:function e(i){var n=i.mutate;return{boost:function e(i){var t=i.socialObjectRef,a=i.socialStatistics,o=i.__typename;return n({variables:{objectType:t.type,objectId:t.id},update:function e(i){var n,c=(a||{}).boostCount,d=void 0===c?0:c,r="LinkPost"===t.type?"postId":"Repost"===t.type?"repostId":"id";i.writeFragment({id:"".concat(o,":").concat(t.id),fragment:ie.FeedObjectStatisticFieldsFragment,fragmentName:"FeedObjectStatisticFields",data:(n={__typename:o},L()(n,r,t.id),L()(n,"socialStatistics",_()({},a,{isBoosted:!0,boostCount:d+1,__typename:"SocialStatistics"})),n)})}})}}}}),Object(P.graphql)(ye,{props:function e(i){var n=i.mutate;return{unboost:function e(i){var t=i.socialObjectRef,a=i.socialStatistics,o=i.__typename;return n({variables:{objectType:t.type,objectId:t.id},update:function e(i){var n,c=(a||{}).boostCount,d=void 0===c?1:c,r="LinkPost"===t.type?"postId":"Repost"===t.type?"repostId":"id";i.writeFragment({id:"".concat(o,":").concat(t.id),fragment:ie.FeedObjectStatisticFieldsFragment,fragmentName:"FeedObjectStatisticFields",data:(n={__typename:o},L()(n,r,t.id),L()(n,"socialStatistics",_()({},a,{isBoosted:!1,boostCount:d-1,__typename:"SocialStatistics"})),n)})}})}}}}))(Se),he=n("@ta/trips.trip-flow-selector"),Fe=n("@ta/trips.bookmark-icon"),Oe=function e(i){var n=i.object,t=i.displayStyle,a=i.onClick,o=i.preventInteractionPropagation;return d.createElement("div",{className:H.social_action},d.createElement(he.QueriedTripFlowSelector,{object:n,preventInteractionPropagation:o},function(e,i){return d.createElement(Fe.BookmarkIcon,{active:i,bookmarkStyle:"flat",bookmarkSize:"18",lineHeight:20,onClick:function i(){a&&a(),e()}},function(e){return t.includes("text")?e:""})}))};Oe.defaultProps={onClick:void 0,preventInteractionPropagation:!1};var Te=Oe,Ie=function(e){function i(e){var n;return S()(this,i),n=O()(this,I()(i).call(this,e)),L()(R()(R()(n)),"memberGeneratedAction",function(){n.state.isActive?null!=n.state.count&&n.state.count>0&&n.setState({count:n.state.count-1,isActive:!1}):n.setState({count:n.state.count+1,isActive:!0})}),n.state={count:n.props.count,isActive:n.props.isActive},n}return V()(i,e),h()(i,[{key:"render",value:function e(){return d.createElement("span",{className:"".concat(H.social_action," ").concat(this.state.isActive?H.active:""),onClick:this.memberGeneratedAction},d.createElement(Y.Icon,{name:this.props.icon,className:H.icon}),d.createElement("span",{className:H.text},this.state.count))}}]),i}(d.Component),Ae=function e(i){var n=i.className,t=i.children;return d.createElement("div",{className:ve()("social-actions-SocialActionBar__social_action_bar--2_j8Y",n)},t)};Ae.defaultProps={className:""};var Ve=Ae;n.d(i,"DeleteConfirmation",function(){return v}),n.d(i,"UntagConfirmation",function(){return N}),n.d(i,"UntagAction",function(){return q}),n.d(i,"DisplayUntagIcon",function(){return Q}),n.d(i,"DisabledSocialAction",function(){return $}),n.d(i,"LikeAction",function(){return pe}),n.d(i,"NestedSocialAction",function(){return be}),n.d(i,"BoostAction",function(){return je}),n.d(i,"SaveAction",function(){return Te}),n.d(i,"classes",function(){return H}),n.d(i,"SocialAction",function(){return Ie}),n.d(i,"SocialActionBar",function(){return Ve}),n.d(i,"SocialActionStyles",function(){return H})}}});
//# sourceMappingURL=social.actions.ecf1864307.js.map