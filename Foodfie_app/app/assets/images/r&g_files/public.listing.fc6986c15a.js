(window.$WP=window.$WP||[]).push({id:"@ta/public.listing",d:["vendor-react-libs","ta-common","ta-platform"],e:["./packages/public/listing/listing.jsx"],x:{"./packages/public/listing/listing.jsx":["POIFeature","SavingsCallout","Title","LabeledIconAction"]},m:{"./packages/public/listing/listing.jsx":function(e,n,i){"use strict";i.r(n);var l=i("react"),t=function e(n){var i=n.icon,t=n.label;return l.createElement("div",{className:"public-listing-POIFeature__container--1twuY"},l.createElement("span",{className:"ui_icon ".concat(i," ").concat("public-listing-POIFeature__icon--3iKrg")}),l.createElement("span",{className:"public-listing-POIFeature__label--2gmA0"},t))},a=i("@ta/styleguide.icon"),c=i("@ta/common.i18n"),o=function e(n){var i=n.price,t=n.savings;return l.createElement("div",{className:"ui_level is-mobile ".concat("public-listing-SavingsCallout__container--1CO_v")},l.createElement("div",{className:"level-left ".concat("public-listing-SavingsCallout__save--2PChk")},l.createElement(a.Icon,{name:"star",className:"public-listing-SavingsCallout__icon--1Pe-W"}),Object(c.localize)("hotels_save_money",{0:c.globalize.formatCurrencyInteger(t)})),l.createElement("div",{className:"level-right ".concat("public-listing-SavingsCallout__off--3HLi4")},c.globalize.formatCurrencyInteger(i)))},s=function e(n){var i=n.content;return l.createElement("p",{className:"public-listing-Title__title--1pjpH"},i)},r=function e(n){return n.url?l.createElement("a",{href:n.url,className:"public-listing-LabeledIconAction__item--1iFiW",onClick:n.onClick},n.children):l.createElement("span",{className:"public-listing-LabeledIconAction__item--1iFiW",onClick:n.onClick},n.children)},u=function e(n){return l.createElement(r,n,"string"==typeof n.icon?l.createElement(a.Icon,{className:"public-listing-LabeledIconAction__itemIcon--2W25O",name:n.icon}):n.icon,"string"==typeof n.label?l.createElement("span",{className:"public-listing-LabeledIconAction__itemLabel--nM7ao"},n.label):n.label)};u.defaultProps={onClick:null,url:null,isGlobalNavLabeledIcon:!1,isHambugerMenuLabeledIcon:!1};var m=u;i.d(n,"POIFeature",function(){return t}),i.d(n,"SavingsCallout",function(){return o}),i.d(n,"Title",function(){return s}),i.d(n,"LabeledIconAction",function(){return m})}}});
//# sourceMappingURL=public.listing.fc6986c15a.js.map