"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3175],{73175:function(l,e,n){n.r(e),n.d(e,{default:function(){return w}});var t=n(26042),o=n(85893),i=n(31996),s=n(67294),a=n(52077),r=n(90387),c=n(41664),d=n.n(c),u=n(72510),h=n(11355),v=n(51961),m=n(32713),f=n(65710),x=n(43751),g=n(41984),p=n(3677),y=n(74007),b=n(75654),j=[{id:"facebook",host:"facebook.com"},{id:"twitter",host:"twitter.com"},{id:"linkedin",host:"linkedin.com"},{id:"youtube",host:"youtube.com"},{id:"pinterest",host:"pinterest.com"},{id:"instagram",host:"instagram.com"},{id:"tiktok",host:"tiktok.com"},{id:"thumbtack",host:"thumbtack.com"},{id:"homeadvisor",host:"homeadvisor.com"},{id:"angi",host:"angi.com"},{id:"behance",host:"behance.net"},{id:"dribbble",host:"dribbble.com"}];function w(l){var e,n,c,w,N,k,C,A,F,S,_,Z,K,R,T,P=l.website,E=(0,i.ac)("(max-width: 1023px)"),Q=(0,i.ac)("(max-width: 767px)"),W=(0,s.useState)(!1),L=W[0],B=W[1],z=(0,s.useState)("#FFFFFF"),M=z[0],V=z[1],D=(0,s.useState)("#000000"),O=D[0],H=D[1],q=(0,s.useState)(null),I=q[0],Y=q[1],$=(0,s.useState)(!1),G=$[0],J=$[1],U=(0,s.useState)({combine:!1}),X=U[0],ll=U[1],el=(0,r.useRouter)(),nl=(0,s.useRef)(null),tl=null==P||null===(e=P.pages)||void 0===e?void 0:e.find((function(l){return!l.slug&&l.default})),ol=null==P?void 0:P.header,il=null===(c=null===(n=P.pages)||void 0===n?void 0:n.filter((function(l){return(!0===l.showOnHeader||void 0===l.showOnHeader)&&null!==l.slug})))||void 0===c?void 0:c.map((function(l){var e={href:"/".concat(l.slug||""),name:l.label,current:el.asPath==="/".concat(l.slug||"")||el.asPath.includes("/".concat(l.slug,"/")),type:l.type,forceRender:l.forceRender};return"parent"===e.type&&(e.nests=P.pages.filter((function(e){return e.Parent===l._id})).map((function(e){return{href:"/".concat(l.slug,"/").concat(e.slug||""),name:e.label,current:el.asPath==="/".concat(l.slug,"/").concat(e.slug||""),forceRender:e.forceRender}})),0===e.nests.length)?null:e})).filter((function(l){return null!==l&&"nested"!==l.type})),sl=(null==X?void 0:X.combine)&&(!(null==ol?void 0:ol.sticky)||!G),al=function(){return(0,o.jsx)("div",{className:(0,i.AK)("hidden lg:flex items-center flex-shrink-0"),children:(0,o.jsx)(a.Z,{className:"xl !text-2xl !py-1.5",button:null==ol?void 0:ol.button,block:ol,website:P})})},rl=function(l,e){return(0,o.jsx)("ul",{className:(0,i.AK)("lg:flex items-center gap-x-4 gap-y-2 flex-wrap","full-center"!==l?"justify-end":"",!e&&"hidden"),children:Array.isArray(P.social)&&P.social.map((function(l,e){var n=j.find((function(e){return e.id===l.type})),t=l.link;return"custom"!==l.type&&(t=(t=l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,"").replace(/https?:/g,"").replace(/^\/\/?/g,"")).replace(null==n?void 0:n.host,""),t="https://".concat(null==n?void 0:n.host,"/").concat(t)),(0,o.jsx)("li",{children:(0,o.jsx)(d(),{href:t,children:(0,o.jsx)("a",{target:"_blank",children:(0,o.jsx)(b.Q,{icon:l,color:sl?X.textColor:O,settings:P.socialSettings})})})},"social-icon-header-".concat(e))}))})},cl=function(l){var e,n,s,a;return(null==ol?void 0:ol.showLogo)&&"branding"===(null==ol?void 0:ol.source)&&(null==P?void 0:P.logo)?(0,o.jsx)(d(),{href:"/",children:(0,o.jsxs)("a",{className:"max-w-full overflow-hidden grid",target:(null==tl?void 0:tl.forceRender)?"_parent":"_self",children:[(0,i.QW)(null==P?void 0:P.logo)&&(0,o.jsx)("img",{className:"hidden lg:block transition-all object-contain",src:(0,i.QW)(null==P?void 0:P.logo),alt:null==ol?void 0:ol.siteName,style:{height:((null==ol||null===(e=ol.logoDesktop)||void 0===e?void 0:e.height)||80)+"px"}}),(0,i.QW)(null==P?void 0:P.logo)&&(0,o.jsx)("img",{className:"lg:hidden transition-all object-contain",src:(0,i.QW)(null==P?void 0:P.logo),alt:null==ol?void 0:ol.siteName,style:{height:((null==ol||null===(n=ol.logoMobile)||void 0===n?void 0:n.height)||40)+"px"}})]})}):(null==ol?void 0:ol.showLogo)&&"upload"===(null==ol?void 0:ol.source)&&(null==ol?void 0:ol.customLogo)?(0,o.jsx)(d(),{href:"/",children:(0,o.jsxs)("a",{className:"max-w-full overflow-hidden grid",target:(null==tl?void 0:tl.forceRender)?"_parent":"_self",children:[(0,i.QW)(null==ol?void 0:ol.customLogo)&&(0,o.jsx)("img",{className:"hidden lg:block transition-all object-contain",src:(0,i.QW)(null==ol?void 0:ol.customLogo),alt:null==ol?void 0:ol.siteName,style:{height:((null==ol||null===(s=ol.logoDesktop)||void 0===s?void 0:s.height)||80)+"px"}}),(0,i.QW)(null==ol?void 0:ol.customLogo)&&(0,o.jsx)("img",{className:"lg:hidden transition-all object-contain",src:(0,i.QW)(null==ol?void 0:ol.customLogo),alt:null==ol?void 0:ol.siteName,style:{height:((null==ol||null===(a=ol.logoMobile)||void 0===a?void 0:a.height)||40)+"px"}})]})}):(0,o.jsx)(d(),{href:"/",children:(0,o.jsx)("a",{className:"max-w-full overflow-hidden grid",target:(null==tl?void 0:tl.forceRender)?"_parent":"_self",children:(0,o.jsx)("h1",{className:"heading-small lg:heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis",style:(0,t.Z)({color:sl&&!l?X.textColor:O},(0,i.j2)(P)),children:null==ol?void 0:ol.siteName})})})},dl=function(l){var e;if(0===(null==il?void 0:il.length))return(0,o.jsx)(o.Fragment,{});var n=(0,i.h)(M,-10);return n!==O&&n!==M||(n=(0,i.h)(M,10)),(0,o.jsx)("ul",{className:(0,i.AK)(!(null==ol||null===(e=ol.menu)||void 0===e?void 0:e.collapse)&&"lg:flex","hidden items-center flex-wrap gap-x-6","left"===l&&"justify-end","full-center"===l&&"justify-center"),style:{color:sl?X.textColor:O},children:null==il?void 0:il.map((function(l){var e;return(0,o.jsx)("li",{className:"border-b-2",style:{borderColor:l.current?"".concat(sl?X.textColor:O):"transparent"},children:"parent"===l.type?(0,o.jsx)(y.Z,{buttonClassName:"inline-flex items-center gap-2 py-1.5",itemsContainerClass:"!pl-6 !pr-12 w-max max-w-120 !max-h-[80vh] no-scrollbar",button:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"body-normal whitespace-nowrap",children:l.name}),(0,o.jsx)(m.Z,{className:"w-4 h-4"})]}),itemsContainerStyle:{backgroundColor:n,color:sl?X.textColor:O},children:null===(e=l.nests)||void 0===e?void 0:e.map((function(l){return(0,o.jsx)(u.v.Item,{children:(0,o.jsx)(d(),{className:"block py-2 body-normal border-b-2",href:l.href,legacyBehavior:!1,target:l.forceRender?"_parent":"_self",style:{borderColor:l.current?"".concat(sl?X.textColor:O):"transparent"},children:l.name})},"page-link-".concat(l.href))}))}):(0,o.jsx)(d(),{className:"block py-1.5 body-normal whitespace-nowrap",legacyBehavior:!1,href:l.href,target:l.forceRender?"_parent":"_self",children:l.name})},"header-page-link-".concat(l.href))}))})},ul=function(){var l;return 0===(null==il?void 0:il.length)?(0,o.jsx)(o.Fragment,{}):(null==ol||null===(l=ol.menu)||void 0===l?void 0:l.collapse)?(0,o.jsxs)("button",{className:(0,i.AK)("hidden lg:inline-flex items-center justify-center p-2 rounded-md font-light gap-2 ",L?"pointer-events-none":"hover:opacity-80"),style:{color:sl?X.textColor:O},onClick:function(){return B(!0)},children:["Menu ",(0,o.jsx)(f.Z,{className:"block h-5 w-5","aria-hidden":"true"})]}):null},hl=function(l){var e,n,t={none:{top:"pt-0",bottom:"pb-0"},small:{top:"pt-4",bottom:"pb-4"},medium:{top:"pt-6",bottom:"pb-6"},large:{top:"pt-8",bottom:"pb-8"}},o=(null===(e=t[null==l?void 0:l.top])||void 0===e?void 0:e.top)||t.medium.top,i=(null===(n=t[null==l?void 0:l.bottom])||void 0===n?void 0:n.bottom)||t.medium.bottom;return"".concat(o," ").concat(i)},vl=function(){J(window.scrollY>0)},ml=function(l){var e=document.querySelector("[data-combine-with-header]");if(e){var n=null==e?void 0:e.getAttribute("data-combine-with-header");ll((function(t){return l<10&&(null==e?void 0:e.getAttribute("data-text-color"))!==t.textColor&&setTimeout((function(){ml(l+1)}),100*l),{combine:!0===n||"true"===n,textColor:null==e?void 0:e.getAttribute("data-text-color")}}))}else ll((function(n){return l<10&&(null==e?void 0:e.getAttribute("data-text-color"))!==n.textColor&&setTimeout((function(){ml(l+1)}),100*l),{combine:!1,textColor:null}}))};return(0,s.useEffect)((function(){if(ol){var l,e,n;if(ol.layers)if("custom"===ol.layers.palette){var t;V((null===(t=ol.layers.overlay)||void 0===t?void 0:t.color1)||"#FFFFFF")}else{var o,s,a=(null==P||null===(o=P.colorPalette)||void 0===o?void 0:o.Palette)||(null==P?void 0:P.colorPalette);V((0,i.ow)(a,null===(s=ol.layers)||void 0===s?void 0:s.palette,"color"))}else V(ol.background||"#FFFFFF");null!==ol.siteName&&void 0!==ol.siteName||(ol.siteName=null==P||null===(n=P.Business)||void 0===n?void 0:n.name),ol.style||(ol.style="left"),(null===(l=ol.logoDesktop)||void 0===l?void 0:l.height)||(ol.logoDesktop={height:80}),(null===(e=ol.logoMobile)||void 0===e?void 0:e.height)||(ol.logoMobile={height:40}),ol.sticky&&(null==nl?void 0:nl.current)&&(document.documentElement.style.scrollPaddingTop=nl.current.clientHeight+"px")}}),[ol]),(0,s.useEffect)((function(){ml(0)}),[el.asPath]),(0,s.useEffect)((function(){M&&H((0,i.$O)(M))}),[M]),(0,s.useEffect)((function(){B(!1),Y(null)}),[el.asPath,E]),(0,s.useEffect)((function(){return window.addEventListener("scroll",vl),function(){window.removeEventListener("scroll",vl)}}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("header",{id:"website-header",ref:nl,className:(0,i.AK)("!z-[2000]",(null==ol?void 0:ol.sticky)?"sticky top-0 transition-colors":"",(null==ol?void 0:ol.sticky)&&!X.combine||(null==ol?void 0:ol.sticky)&&G?"shadow":""),style:{backgroundColor:sl?"transparent":M,color:sl?X.textColor:O},children:(0,o.jsx)("div",{className:(0,i.AK)("grid items-center lg:gap-6 xl:gap-10 mx-auto",hl(null==ol?void 0:ol.spacing),(null==ol?void 0:ol.fullWidth)?"px-6 lg:px-12":"container"),style:(T=null==ol?void 0:ol.style,"center"===T?{gridTemplateColumns:"1fr auto 1fr"}:"full-center"===T?(null==il?void 0:il.length)>6?{gridTemplateColumns:"1fr 4fr 1fr"}:{gridTemplateColumns:"1fr auto 1fr"}:{gridTemplateColumns:"auto auto auto"}),children:"center"===(null==ol?void 0:ol.style)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"lg:w-auto whitespace-nowrap",children:[dl(null==ol?void 0:ol.style),ul()]}),(0,o.jsx)("div",{className:"flex justify-center truncate",children:cl()}),(0,o.jsxs)("div",{className:"flex justify-end",children:[(0,o.jsxs)("div",{className:"hidden lg:flex item-center gap-10",children:[(null==ol?void 0:ol.showSocial)&&rl(null==ol?void 0:ol.style),(null==ol?void 0:ol.button)&&al()]}),(0,o.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null==ol?void 0:ol.button)||(null==il?void 0:il.length)>0||(null==ol?void 0:ol.showSocial)&&Array.isArray(null==P?void 0:P.social)&&(null==P||null===(w=P.social)||void 0===w?void 0:w.length)>1)&&(0,o.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:sl?X.textColor:O},onClick:function(){return B(!0)},children:(0,o.jsx)(f.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null==ol?void 0:ol.button)&&0===(null==il?void 0:il.length)&&(null==ol?void 0:ol.showSocial)&&Array.isArray(null==P?void 0:P.social)&&1===(null==P||null===(N=P.social)||void 0===N?void 0:N.length)&&rl(null==ol?void 0:ol.style,!0)]})]})]}):"full-center"===(null==ol?void 0:ol.style)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"lg:w-auto whitespace-nowrap",children:(null==ol?void 0:ol.showSocial)&&rl(null==ol?void 0:ol.style)}),(0,o.jsxs)("div",{className:"flex-1 flex flex-col items-center gap-4 whitespace-nowrap",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 w-full truncate",children:[cl(),ul()]}),dl(null==ol?void 0:ol.style)]}),(0,o.jsxs)("div",{className:"flex justify-end whitespace-nowrap",children:[(null==ol?void 0:ol.button)&&al(),(0,o.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null==ol?void 0:ol.button)||(null==il?void 0:il.length)>0||(null==ol?void 0:ol.showSocial)&&Array.isArray(null==P?void 0:P.social)&&(null==P||null===(k=P.social)||void 0===k?void 0:k.length)>1)&&(0,o.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:sl?X.textColor:O},onClick:function(){return B(!0)},children:(0,o.jsx)(f.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null==ol?void 0:ol.button)&&0===(null==il?void 0:il.length)&&(null==ol?void 0:ol.showSocial)&&Array.isArray(null==P?void 0:P.social)&&1===(null==P||null===(C=P.social)||void 0===C?void 0:C.length)&&rl(null==ol?void 0:ol.style,!0)]})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"col-span-2 lg:col-span-1 truncate",children:cl()}),(0,o.jsxs)("div",{className:"hidden lg:flex item-center justify-end gap-10 lg:col-span-2",children:[ul(),dl(null==ol?void 0:ol.style),(null==ol?void 0:ol.showSocial)&&rl(null==ol?void 0:ol.style),(null==ol?void 0:ol.button)&&al()]}),(0,o.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null==ol?void 0:ol.button)||(null==il?void 0:il.length)>0||(null==ol?void 0:ol.showSocial)&&Array.isArray(null==P?void 0:P.social)&&(null==P||null===(A=P.social)||void 0===A?void 0:A.length)>1)&&(0,o.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:sl?X.textColor:O},onClick:function(){return B(!0)},children:(0,o.jsx)(f.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null==ol?void 0:ol.button)&&0===(null==il?void 0:il.length)&&(null==ol?void 0:ol.showSocial)&&Array.isArray(null==P?void 0:P.social)&&1===(null==P||null===(F=P.social)||void 0===F?void 0:F.length)&&rl(null==ol?void 0:ol.style,!0)]})]})})}),(0,o.jsx)(h.u,{show:!!L,as:"div",children:(0,o.jsxs)(v.V,{onClose:function(){return B(!1)},className:"relative z-[30000] h-full",children:[(0,o.jsx)(h.u.Child,{as:s.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)(v.V.Overlay,{className:"fixed inset-0 bg-black bg-opacity-5 transition-opacity"})}),(0,o.jsx)(h.u.Child,{as:s.Fragment,enter:"transform transition transition-all ease-in-out duration-350",enterFrom:(null==ol||null===(S=ol.menu)||void 0===S?void 0:S.collapse)&&!E?"left"!==(null==ol?void 0:ol.style)?"-translate-x-full":"translate-x-full":"translate-x-0 opacity-0",enterTo:"translate-x-0 opacity-100",leave:"transform transition transition-all ease-in-out duration-350",leaveFrom:"translate-x-0 opacity-100",leaveTo:(null==ol||null===(_=ol.menu)||void 0===_?void 0:_.collapse)&&!E?"left"!==(null==ol?void 0:ol.style)?"-translate-x-full":"translate-x-full":"translate-x-0 opacity-0",children:(0,o.jsx)(v.V.Panel,{className:(0,i.AK)("fixed flex flex-col shadow-lg",(null==ol||null===(Z=ol.menu)||void 0===Z?void 0:Z.collapse)&&!E?"left"!==(null==ol?void 0:ol.style)?"top-0 left-0 bottom-0 w-80":"top-0 bottom-0 right-0 w-80":(null==ol?void 0:ol.button)&&0===(null==il?void 0:il.length)&&!(null==ol?void 0:ol.showSocial)||0===(null==il?void 0:il.length)&&(null==ol?void 0:ol.showSocial)&&Array.isArray(null==P?void 0:P.social)&&(null==P?void 0:P.social.length)>1||!(null==ol?void 0:ol.button)&&!ol.showSocial&&1===il.length||1===(null==il?void 0:il.length)&&((null==ol?void 0:ol.button)||ol.showSocial)?"top-0 left-0 right-0":"inset-0 h-full"),style:{backgroundColor:M,color:O},children:(0,o.jsxs)("div",{className:(0,i.AK)("flex-1 flex flex-col h-full mx-auto pb-6",(null==ol?void 0:ol.fullWidth)?"w-full px-6":"container"),children:[(0,o.jsxs)("div",{className:(0,i.AK)("items-center",hl(null==ol?void 0:ol.spacing),"left"!==(null==ol?void 0:ol.style)?"grid":"flex justify-between"),style:"left"!==(null==ol?void 0:ol.style)?{gridTemplateColumns:"1fr auto 1fr"}:{},children:[("center"===(null==ol?void 0:ol.style)||"full-center"===(null==ol?void 0:ol.style))&&(0,o.jsx)("div",{}),(0,o.jsx)("div",{className:"lg:invisible",children:cl(!0)}),(0,o.jsx)("div",{className:"ml-auto",children:(0,o.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md outline-none",style:{color:O},onClick:function(){return B(!1)},children:(0,o.jsx)(x.Z,{className:"block h-5 w-5","aria-hidden":"true"})})})]}),(null==il?void 0:il.length)>0&&(0,o.jsxs)("div",{className:"flex-1 py-6 overflow-auto",children:[(0,o.jsx)(h.u,{as:"div",show:!I,enter:"transition-opacity",enterFrom:"opacity-0",enterTo:"opacity-100",children:(0,o.jsx)("ul",{className:(0,i.AK)("flex flex-col gap-3 w-full","justify-center lg:justify-start",!E||"center"!==(null==ol?void 0:ol.style)&&"full-center"!==(null==ol?void 0:ol.style)?"":"text-center"),style:(0,t.Z)({color:O},(0,i.SV)(P)),children:1===il.length&&"parent"===il[0].type?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{className:"text-xl lg:!text-sm font-medium py-2",style:{borderColor:il[0].current?"".concat(O):"transparent"},children:(0,o.jsx)("span",{className:"block w-full",children:il[0].name})},"page-link-".concat(il[0].href)),null===(K=il[0].nests)||void 0===K?void 0:K.map((function(l){return(0,o.jsx)("li",{className:(0,i.AK)("body-large py-2",l.current?"font-semibold":"font-light"),children:(0,o.jsx)(d(),{className:"block w-full",href:l.href,legacyBehavior:!1,target:l.forceRender?"_parent":"_self",children:l.name})},"page-link-".concat(l.href))}))]}):(0,o.jsx)(o.Fragment,{children:null==il?void 0:il.map((function(l){return(0,o.jsx)("li",{className:(0,i.AK)("body-large lg:!text-body py-2",l.current?"font-semibold":""),children:"parent"===l.type&&l.nests.length>0?(0,o.jsxs)("button",{className:"inline-flex items-center gap-2",onClick:function(){return Y(l.nests)},children:[(0,o.jsx)("span",{children:l.name}),(0,o.jsx)(g.Z,{className:"w-4 h-4","aria-hidden":"true"})]}):(0,o.jsx)(d(),{className:"block w-full",href:l.href,legacyBehavior:!1,target:l.forceRender?"_parent":"_self",children:l.name})},"page-link-".concat(l.href))}))})})}),(0,o.jsx)(h.u,{as:"div",show:!!I,enter:"transition-opacity",enterFrom:"opacity-0",enterTo:"opacity-100",children:(0,o.jsx)("ul",{className:(0,i.AK)("flex flex-col gap-3 w-full","justify-center lg:justify-start",!E||"center"!==(null==ol?void 0:ol.style)&&"full-center"!==(null==ol?void 0:ol.style)?"":"text-center"),style:(0,t.Z)({color:O},(0,i.SV)(P)),children:(0,o.jsxs)(o.Fragment,{children:[I&&(0,o.jsx)("li",{className:"pb-6",children:(0,o.jsxs)("button",{className:"inline-flex items-center gap-2 body-large lg:!text-body",onClick:function(){return Y(null)},children:[(0,o.jsx)(p.Z,{className:"w-4 h-4","aria-hidden":"true"}),(0,o.jsx)("span",{children:"Back"})]})}),null==I?void 0:I.map((function(l){return(0,o.jsx)("li",{className:(0,i.AK)("body-large lg:!text-body py-2",l.current?"font-semibold":""),children:(0,o.jsx)(d(),{className:"block w-full",href:l.href,legacyBehavior:!1,target:l.forceRender?"_parent":"_self",children:l.name})},"page-link-".concat(l.href))}))]})})})]}),(0,o.jsxs)("div",{className:(0,i.AK)("flex flex-col max-w-[100vw] lg:hidden","center"===(null==ol?void 0:ol.style)||"full-center"===(null==ol?void 0:ol.style)?"items-center":"",(null==il?void 0:il.length)>0?"":"h-full justify-center"),children:[(null==ol?void 0:ol.showSocial)&&(null===(R=P.social)||void 0===R?void 0:R.length)>0&&(0,o.jsx)("ul",{className:"flex items-center gap-x-4 gap-y-2 flex-wrap py-6",children:Array.isArray(P.social)&&P.social.map((function(l,e){var n=j.find((function(e){return e.id===l.type})),t=l.link;return"custom"!==l.type&&(t=(t=l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,"").replace(/https?:/g,"").replace(/^\/\/?/g,"")).replace(null==n?void 0:n.host,""),t="https://".concat(null==n?void 0:n.host,"/").concat(t)),(0,o.jsx)("li",{children:(0,o.jsx)(d(),{href:t,children:(0,o.jsx)("a",{target:"_blank",children:(0,o.jsx)(b.Q,{icon:l,color:sl&&!Q?X.textColor:O,settings:P.socialSettings})})})},"social-icon-header-".concat(e))}))}),(null==ol?void 0:ol.button)&&(0,o.jsx)("div",{className:"py-6",children:(0,o.jsx)(a.Z,{className:"xl !font-normal !py-1.5",button:ol.button,block:ol,website:P})})]})]})})})]})})]})}}}]);