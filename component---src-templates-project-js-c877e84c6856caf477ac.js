"use strict";(self.webpackChunkadrianbparra_website=self.webpackChunkadrianbparra_website||[]).push([[769],{6594:function(e,t,r){var n=r(4942),a=r(885),c=r(5987),o=r(5900),i=r.n(o),l=r(7294),s=r(1118),u=r(9541),f=r(5893),p=["as","bsPrefix","variant","size","active","className"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=l.forwardRef((function(e,t){var r=e.as,n=e.bsPrefix,o=e.variant,l=e.size,m=e.active,d=e.className,v=(0,c.Z)(e,p),O=(0,u.vE)(n,"btn"),y=(0,s.FT)(b({tagName:r},v)),j=(0,a.Z)(y,2),h=j[0],g=j[1].tagName;return(0,f.jsx)(g,b(b(b({},h),v),{},{ref:t,className:i()(d,O,m&&"active",o&&"".concat(O,"-").concat(o),l&&"".concat(O,"-").concat(l),v.href&&v.disabled&&"disabled")}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=d},9626:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(4942),a=r(5987),c=r(5900),o=r.n(c),i=r(7294),l=(r(2473),r(5210)),s=r(3893),u=r(9541),f=r(885),p=r(5655),m=r(3904),b=r(9148),d=r(5893),v=["bsPrefix","active","disabled","eventKey","className","variant","action","as"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,c=e.disabled,i=e.eventKey,l=e.className,s=e.variant,O=e.action,j=e.as,h=(0,a.Z)(e,v);r=(0,u.vE)(r,"list-group-item");var g=(0,m.v)(y({key:(0,b.h)(i,h.href),active:n},h)),E=(0,f.Z)(g,2),P=E[0],Z=E[1],w=(0,p.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();P.onClick(e)}));c&&void 0===h.tabIndex&&(h.tabIndex=-1,h["aria-disabled"]=!0);var N=j||(O?h.href?"a":"button":"div");return(0,d.jsx)(N,y(y(y({ref:t},h),P),{},{onClick:w,className:o()(l,r,Z.isActive&&"active",c&&"disabled",s&&"".concat(r,"-").concat(s),O&&"".concat(r,"-action"))}))}));j.displayName="ListGroupItem";var h=j,g=["className","bsPrefix","variant","horizontal","numbered","as"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=i.forwardRef((function(e,t){var r,n=(0,l.Ch)(e,{activeKey:"onSelect"}),c=n.className,i=n.bsPrefix,f=n.variant,p=n.horizontal,m=n.numbered,b=n.as,v=void 0===b?"div":b,O=(0,a.Z)(n,g),y=(0,u.vE)(i,"list-group");return p&&(r=!0===p?"horizontal":"horizontal-".concat(p)),(0,d.jsx)(s.Z,P(P({ref:t},O),{},{as:v,className:o()(c,y,f&&"".concat(y,"-").concat(f),r&&"".concat(y,"-").concat(r),m&&"".concat(y,"-numbered"))}))}));Z.displayName="ListGroup";var w=Object.assign(Z,{Item:h})},5068:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(7294),a=r(1289),c=r(6162),o=r(3639),i=r(6594),l=r(9626),s=r(7408),u=r(994),f=function(e){var t=e.project,r=t.title,a=t.subtitle,f=t.description,p=t.url,m=t.technologies,b=t.documentation,d=t.image_desktop.childImageSharp.fluid,v=t.image_mobile.childImageSharp.fluid;return n.createElement(o.Z,{fluid:!0,className:"project"},n.createElement(o.Z,{fluid:!0,className:"header"},n.createElement("h1",null,r),n.createElement("h3",null,a)),n.createElement(u.Z,null,n.createElement(s.Z,{md:3},p?n.createElement(i.Z,{href:p,target:"_blank",rel:"noopener noreferrer"},"View Website"):"",n.createElement(o.Z,{fluid:"true"},n.createElement("h4",{className:"tech-title"},"Technologies"),n.createElement(l.Z,null,m.map((function(e){return n.createElement(l.Z.Item,{key:e},e)}))))),n.createElement(s.Z,{md:9},n.createElement(o.Z,null,n.createElement("p",null,f)),n.createElement(o.Z,null,n.createElement(u.Z,null,n.createElement(s.Z,{lg:8},n.createElement(c.Z,{fluid:d,alt:r+" desktop"})),n.createElement(s.Z,{lg:4},n.createElement(c.Z,{fluid:v,alt:r+" mobile"}))))),n.createElement(s.Z,{md:{span:9,offset:3},className:"project-documentation"},b.map((function(e,t){var r=e.element,a=e.text;return"h2"===r?n.createElement("h2",{key:t},a):"p"===r?n.createElement("p",{key:t},a):void 0})))))},p=r(262),m=function(e){var t=e.data.projectsJson,r=t.title;return n.createElement(a.Z,null,n.createElement(p.Z,{title:"Portfolio "+r}),n.createElement(f,{project:t}))}},2473:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-templates-project-js-c877e84c6856caf477ac.js.map