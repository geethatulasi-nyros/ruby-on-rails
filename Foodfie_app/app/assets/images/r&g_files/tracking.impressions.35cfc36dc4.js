(window.$WP=window.$WP||[]).push({id:"@ta/tracking.impressions",d:["vendor-react-libs","vendor-apollo-libs","ta-platform"],e:["./packages/tracking/impressions/impressions.jsx"],x:{"./packages/tracking/impressions/impressions.jsx":["FeedImpressionLogger"]},m:{"./packages/tracking/impressions/impressions.jsx":function(e,i,n){"use strict";n.r(i);var a=n("react"),d=n("react-apollo"),t=n("@ta/common.logging"),l=n.n(t),r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"FeedImpressionMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"puid"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locationId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"owner"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"placement"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PlacementEnumInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"allowedTypes"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"FeedSectionItemTypeInput"}}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sectionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"trackFeedImpression"},name:{kind:"Name",value:"setSocialFeedPosition"},arguments:[{kind:"Argument",name:{kind:"Name",value:"feedId"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"puid"},value:{kind:"Variable",name:{kind:"Name",value:"puid"}}},{kind:"ObjectField",name:{kind:"Name",value:"context"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"location"},value:{kind:"Variable",name:{kind:"Name",value:"locationId"}}},{kind:"ObjectField",name:{kind:"Name",value:"owner"},value:{kind:"Variable",name:{kind:"Name",value:"owner"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"placement"},value:{kind:"Variable",name:{kind:"Name",value:"placement"}}},{kind:"ObjectField",name:{kind:"Name",value:"allowedTypes"},value:{kind:"Variable",name:{kind:"Name",value:"allowedTypes"}}}]}},{kind:"Argument",name:{kind:"Name",value:"sectionId"},value:{kind:"Variable",name:{kind:"Name",value:"sectionId"}}}],directives:[]}]}}],loc:{start:0,end:425}};r.loc.source={body:"6c61bc2508a1"};var m=r,o=function e(i){var n=i.children;return a.createElement(d.Mutation,{mutation:m,ignoreResults:!0},function(e){return n(function(i){return e({fetchPolicy:"no-cache",variables:i}).catch(function(e){var n=Object.entries(i).map(function(e){return"(".concat(e[0],":").concat(JSON.stringify(e[1]),")")}).join(", ");l.a.error("Error occurred while tracking feed impressions with variables ".concat(n),e)})})})};n.d(i,"FeedImpressionLogger",function(){return o})}}});
//# sourceMappingURL=tracking.impressions.35cfc36dc4.js.map