(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/ethereum-eth.a9709f9a.svg"},23:function(e,t,a){e.exports=a.p+"static/media/contract.7b0b02fe.jpg"},31:function(e,t,a){e.exports=a(49)},44:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},45:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},46:function(e,t,a){e.exports=a.p+"static/media/form.6ab79af9.jpeg"},47:function(e,t,a){e.exports=a.p+"static/media/answer_form.3ad879bc.jpeg"},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(24),n=a.n(l),s=a(11),o=a(6),c=a(8),m=a(2),d=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},u=a(9),v=a(3),p=a.n(v),b=a(19),h=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(u.a)(a,2),n=l[0],s=l[1],o=Object(i.useState)([]),c=Object(u.a)(o,2),m=c[0],d=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(b.throttle)((function(){h(),p()}),30),E=Object(b.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),p()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));h.propTypes={children:p.a.func.isRequired};var f=h,E=a(14),g=a(1),N=a.n(g),O=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,s=e.alt,o=Object(m.a)(e,["className","src","width","height","alt"]),c=Object(i.useState)(!1),d=Object(u.a)(c,2),v=d[0],p=d[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:l,height:n,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,D=function(e){var t=e.className,i=Object(m.a)(e,["className"]),l=N()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(c.b,{to:"/"},r.a.createElement(w,{src:a(22),alt:"Open",width:32,height:32}))))},j=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,c=Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),d=Object(i.useState)(!1),v=Object(u.a)(d,2),p=v[0],b=v[1],h=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",O),document.addEventListener("click",w),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",w),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",b(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),b(!1)},O=function(e){p&&27===e.keyCode&&g()},w=function(e){h.current&&p&&!h.current.contains(e.target)&&e.target!==f.current&&g()},j=N()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},c,{className:j}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N()("site-header-inner",o&&"has-bottom-divider")},r.a.createElement(D,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?g:E},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:h,className:N()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))}),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"})))))))};j.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var y={topOuterDivider:p.a.bool,topDivider:p.a.bool},x=function(e){var t=e.className,a=e.topOuterDivider;e.topDivider,Object(m.a)(e,["className","topOuterDivider","topDivider"]),N()("site-footer center-content-mobile",a&&"has-top-divider",t);return""};x.propTypes=y,x.defaultProps={topOuterDivider:!1,topDivider:!1};var C=x,k=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"site-content"},t),r.a.createElement(C,null))},L=a(5),F={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},B={types:Object(L.a)({},F.types),defaults:Object(L.a)({},F.defaults)},P={types:Object(L.a)({},F.types,{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(L.a)({},F.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},S={types:Object(L.a)({},F.types,{pushLeft:p.a.bool}),defaults:Object(L.a)({},F.defaults,{pushLeft:!1})},H=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=N()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},A=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,c=e.videoTag,d=Object(m.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},b=N()("modal",n&&"is-active",o&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:b,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},o?r.a.createElement("div",{className:"responsive-video"},"iframe"===c?r.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:o})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};A.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var T=a(15);function R(){var e=Object(T.b)("xjvjalbb"),t=Object(u.a)(e,2),a=t[0],i=t[1];if(a.succeeded){function l(){dataLayer.push(arguments)}return window.dataLayer=window.dataLayer||[],l("js",new Date),l("event","conversion",{send_to:"AW-657141662/xOn7CMLVyeUCEJ7frLkC"}),r.a.createElement("p",null,"Thanks for joining!")}return r.a.createElement("form",{onSubmit:i},r.a.createElement("label",{className:"form-label",htmlFor:"email"},"Email Address"),r.a.createElement("input",{className:"form-input wedding-input",id:"email",type:"email",name:"email"}),r.a.createElement(T.a,{prefix:"Email",field:"email",errors:a.errors}),r.a.createElement("label",{className:"form-label",htmlFor:"email"},"Message"),r.a.createElement("textarea",{className:"form-input wedding-input",id:"message",name:"message"}),r.a.createElement(T.a,{prefix:"Message",field:"message",errors:a.errors}),r.a.createElement("br",null),r.a.createElement("button",{className:"button button-primary button-wide-mobile",type:"submit",disabled:a.submitting},"Request a demo"))}var _=Object(L.a)({},B.defaults),q=function(e){var t=e.className,l=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,c=e.hasBgColor,d=e.invertColor,v=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(u.a)(p,2),h=(b[0],b[1],N()("hero section center-content",l&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",d&&"invert-color",t)),f=N()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:h}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:f},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Get married on the Ethereum Blockchain for the life"),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Generate a beautiful printable and scanable contract which it saved on the Blockchain."))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement(w,{className:"has-shadow",src:a(23),alt:"Hero",width:700})),r.a.createElement("br",null),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement(H,null,r.a.createElement(R,null))))))};q.defaultProps=_;var M=q,z=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(m.a)(e,["className","data","children","tag"]),s=N()("section-header",t),o=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};z.defaultProps={children:null,tag:"h2"};var G=z,W=Object(L.a)({},S.defaults),I=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.pushLeft,u=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=N()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),p=N()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),b=N()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(G,{data:{title:"The Wedding 3.0",paragraph:"Request your love from Ethereum network, wait the response and the weeding is saved on the Blockchain if it is positive."},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(44),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Get married to anyone")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(22),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Contract is public and saved on the Ethereum Blockchain")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(45),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Decentralized Wedding"))))))))};I.defaultProps=W;var J=I,K=Object(L.a)({},P.defaults),U=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=N()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),f=N()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=N()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},b,{className:h}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(G,{data:{title:"How to get married ?",paragraph:"Fill 2 simple forms submitted to the Blockchain."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Proposal"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Send the proposal to your love")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(46),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Reply"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Your love reply to your request")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(47),alt:"Features split 02",width:628,height:496}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Contract for all the life"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Generate a beautiful printable and scanable contract which it saved on the Blockchain.")),r.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(23),alt:"Features split 03",width:528,height:396})))))))};U.defaultProps=K;var V=U,Y=Object(L.a)({},S.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=N()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),p=N()("tiles-wrap",c&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(G,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};$.defaultProps=Y;var Q=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,n=Object(m.a)(e,["className","children","labelHidden","id"]),s=N()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},n,{className:s,htmlFor:l}),a)};Q.defaultProps={children:null,labelHidden:!1,id:null};var X=Q,Z=function(e){var t=e.children,a=e.className,i=e.status,l=Object(m.a)(e,["children","className","status"]),n=N()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},l,{className:n}),t)};Z.defaultProps={children:null,status:!1};var ee=Z,te=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,n=e.type,s=e.name,o=e.status,c=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,h=e.rows,f=e.hint,E=Object(m.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),g=N()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=N()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),w="textarea"===n?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(X,{labelHidden:l,id:E.id},i),r.a.createElement("div",{className:g},r.a.createElement(w,Object.assign({},E,{type:"textarea"!==n?n:null,className:O,name:s,disabled:c,value:d,placeholder:b,rows:"textarea"===n?h:null})),a),f&&r.a.createElement(ee,{status:o},f))};te.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ae=te,ie=Object(L.a)({},B.defaults,{split:!1}),re=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=N()("cta-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider",c&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(ae,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};re.defaultProps=ie;var le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{className:"illustration-section-01"}),r.a.createElement(J,null),r.a.createElement(V,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/landingpage",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ne=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),r.a.createElement(c.a,{basename:"/"},r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(d,{exact:!0,path:"/",component:le,layout:k}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);var se=Object(o.a)();n.a.render(r.a.createElement(s.b,{history:se},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.50d41b2b.chunk.js.map