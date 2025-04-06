"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[61076],{488792:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(573706);let o=()=>(0,i.v)().logContextEvent},206708:(e,t,a)=>{a.d(t,{Rq:()=>s,Vf:()=>n,jd:()=>r,oy:()=>l,yR:()=>p});var i=a(191855),o=a(914896);let s=e=>"ios"===e&&(window.devicePixelRatio||1)*window.screen.height==2436,n=28,r=e=>window.innerHeight>=748&&s(e),l=()=>"undefined"!=typeof window&&!!window.navigator&&(/iPad/.test(navigator.platform)||"MacIntel"===navigator.platform&&"ontouchend"in document&&Math.min(window.screen.width,window.screen.height)>=700),d=()=>{o.t8(i.oj,String(!0),(0,o.kZ)(i.oj))},h=()=>!!o.U2(i.oj),p=()=>{let e=l();e!==h()&&(e?d():o.zN(i.oj.name),"undefined"!=typeof window&&window.location.reload())}},333733:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(667294),o=a(883119),s=a(876594),n=a(793874),r=a(635284),l=a(556712),d=a(785893);function h({children:e,footerConfig:t,headerConfig:a,height:h,hideOnScroll:p,hideOnScrollState:{isHidden:c,updateHiddenState:u},noPadding:m,paddingY:g=l.og,type:b,zIndex:f}){let _,v;let{headerLimitedOverflow:w,ignoreObstructions:x,zIndexForGestaltBug:y}=a||{},{appUpsellFooterConfig:L,footerInLego:S,navFooterConfig:P}=t||{},X=!!L,C="header"===b?"top":"bottom",k=(0,n.vs)(),W=(0,i.useRef)(null),z=(0,i.useRef)(null);(0,i.useEffect)(()=>{try{if(!x){let e=W.current;z.current=w&&e&&Array.isArray(e.children)?e.children[0]:e,z.current instanceof HTMLElement&&r.Z.addObstruction(C,z.current)}}catch(e){window.console.error(e),window.console.error('Can only register impression obstructions for type "HTMLElement"')}return()=>{!x&&z.current instanceof HTMLElement&&r.Z.removeObstruction(C,z.current)}},[x,w,C,k]);let F="top"===C?"relative":"fixed",I=(h??l.R$)+(a?.overrideTop||0),j=p||P?{transition:S?"transform 300ms ease-in-out, opacity 300ms ease-in-out":"transform 200ms linear",...c?{transform:`translateY(${"top"===C?-I:I}px)`,opacity:S?0:1}:Object.freeze({})}:{},A="relative"!==F||a?.noGutter?0:2,O=A?-A:0;k&&("header"===b?_=-1:v=-1);let H=a?.isTransparentBackground&&s.o7L||a?.isTranslucent&&(k?"rgba(0,0,0,.95)":"rgba(255,255,255,.95)")||s.k95;return(0,d.jsx)(o.xu,{ref:W,bottom:"footer"===b,dangerouslySetInlineStyle:{__style:{top:_,bottomStyle:v,...!f||y?{zIndex:y||1}:Object.freeze({}),...w?{background:"transparent",overflow:"hidden",paddingBottom:l.UB,marginBottom:-l.UB,pointerEvents:"none"}:Object.freeze({}),...a?.hasBorder?{borderBottom:l.dS}:Object.freeze({}),...t?.hasTopShadow?{boxShadow:"0 -2px 4px 1px rgba(0, 0, 0, 0.08)"}:Object.freeze({}),...j}},"data-test-id":b,display:X?"flex":void 0,height:h&&!S?h:void 0,left:!0,marginEnd:S?"auto":O,marginStart:S?"auto":O,onTransitionEnd:()=>{(p||P)&&z.current&&(c?r.Z.removeObstruction(C,z.current):r.Z.addObstruction(C,z.current))},position:F,right:!0,top:"header"===b,width:S||"fixed"!==F?void 0:"100%",zIndex:y?void 0:f,children:(0,d.jsx)(o.xu,{alignItems:t?.alignCenter?"center":void 0,dangerouslySetInlineStyle:{__style:{backgroundColor:H,height:S?X?void 0:h??l.R$:"100%",boxShadow:S?l.KJ:void 0,marginBottom:S&&!P?.docked?16:void 0,...w?{pointerEvents:"auto"}:Object.freeze({}),...a?.useRoundedCorners?{zIndex:5,borderTopRightRadius:17,borderTopLeftRadius:17,borderBottomRightRadius:0,borderBottomLeftRadius:0}:Object.freeze({})}},display:S||t?.alignCenter?"flex":void 0,marginEnd:S?"auto":void 0,marginStart:S?"auto":void 0,paddingX:("footer"!==b||m?0:4)+A,paddingY:m?0:g,position:"relative",rounding:S&&!P?.docked?"pill":void 0,width:P?P.footerWidth:X?void 0:"100%",children:"function"==typeof e?e({updateHiddenState:u}):e})})}},94757:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a(883119),o=a(556712),s=a(333733),n=a(727976),r=a(785893);function l({hasBorder:e,headerLimitedOverflow:t,ignoreObstructions:a,isTranslucent:l,isTransparentBackground:d,noGutter:h,overrideTop:p,useRoundedCorners:c,zIndexForGestaltBug:u,...m}){let{noPadding:g,paddingY:b=o.og,zIndex:f}=m;return(0,r.jsx)(i.Le,{height:t?o.LV+8*(g?0:b):void 0,top:p||0,zIndex:f||void 0,children:(0,r.jsx)(n.Z,{hideOnScroll:m.hideOnScroll,children:i=>(0,r.jsx)(s.Z,{...m,headerConfig:{isTranslucent:l,isTransparentBackground:d,headerLimitedOverflow:t,hasBorder:e,ignoreObstructions:a,noGutter:h,overrideTop:p,zIndexForGestaltBug:u,useRoundedCorners:c},hideOnScrollState:i,type:"header"})})})}},727976:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(667294),o=a(235838);function s(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class n extends i.Component{constructor(...e){super(...e),s(this,"state",{isHidden:!!this.props.appUpsellFooterConfig||!!this.props.navFooterConfig?.isDockedNavOnPlp}),s(this,"lastScrollPos",0),s(this,"updateHiddenState",e=>{this.reqAnimationId=window.requestAnimationFrame(()=>{this.setState({isHidden:e})})}),s(this,"handleScroll",(0,o.Z)(()=>{let{appUpsellFooterConfig:e,navFooterConfig:t}=this.props,{isHidden:a}=this.state,i=window.scrollY,o=i-this.lastScrollPos,s="none",{scrollHeight:n,clientHeight:r}=document.documentElement||{};Number.isNaN(n)||Number.isNaN(r)||(s=o<0?i<=Math.abs((window.scrollMinY||0)+Math.max(o,20))?"start":"none":i>=(window.scrollMaxY||n-r)-Math.max(o,20)?"end":"none");let l=t?.isModal?0:55;e?o>20&&a&&i>=500?e.shouldShowAfterScroll()&&(this.updateHiddenState(!1),t?.onScroll(!1)):(o<-20&&!a||i<=l)&&(this.updateHiddenState(!0),t?.onScroll(!0)):this.props.navFooterConfig?.isDockedNavOnPlp?"start"===s&&!a||i<=l?(this.updateHiddenState(!0),t?.onScroll(!0)):(i>l||"end"===s)&&a&&(this.updateHiddenState(!1),t?.onScroll(!1)):(o<-20||"start"===s)&&a||i<=l?(this.updateHiddenState(!1),t?.onScroll(!1)):(o>20||"end"===s)&&!a&&(this.updateHiddenState(!0),t?.onScroll(!0)),this.lastScrollPos=i},30))}componentDidMount(){try{(this.props.hideOnScroll||this.props.navFooterConfig?.isDockedNavOnPlp)&&window.addEventListener("scroll",this.handleScroll)}catch(e){window.console.error(e),window.console.error('Can only register impression obstructions for type "HTMLElement"')}}componentWillUnmount(){(this.props.hideOnScroll||this.props.navFooterConfig?.isDockedNavOnPlp)&&window.removeEventListener("scroll",this.handleScroll),this.reqAnimationId&&(window.cancelAnimationFrame(this.reqAnimationId),this.reqAnimationId=null)}componentDidUpdate(e){!e.hideOnScroll&&this.props.hideOnScroll||!e.navFooterConfig?.isDockedNavOnPlp&&this.props.navFooterConfig?.isDockedNavOnPlp?(this.updateHiddenState(!0),window.addEventListener("scroll",this.handleScroll)):(e.hideOnScroll&&!this.props.hideOnScroll||e.navFooterConfig?.isDockedNavOnPlp&&!this.props.navFooterConfig?.isDockedNavOnPlp)&&(this.updateHiddenState(!1),window.removeEventListener("scroll",this.handleScroll))}render(){let{children:e,navFooterConfig:t}=this.props,{isHidden:a}=this.state;return e({isHidden:!t?.forceShow&&a,updateHiddenState:this.updateHiddenState})}}},775383:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(883119),o=a(679482),s=a(206708),n=a(675625),r=a(730212),l=a(785893);let d=({children:e,dataLayoutShiftBoundaryId:t,hasFixedHeader:a=!1,hasGutter:d=!0,height:h,showKeychainError:p=!1,useViewport:c=!1})=>{let u=(0,r.B)(),m=(0,s.jd)(u.userAgent.platform)?s.Vf:0;return(0,l.jsx)(i.xu,{"data-layout-shift-boundary-id":t||"PageContainer",height:c?`calc(100vh - ${m}px)`:h,paddingX:d?o.D6:void 0,paddingY:a||p?void 0:3,children:(0,l.jsx)(n.C,{value:!!d,children:e})})}},556712:(e,t,a)=>{a.d(t,{KJ:()=>r,LV:()=>n,R$:()=>i,UB:()=>s,dS:()=>l,og:()=>o});let i=64,o=3,s=100,n=44,r="0px 0px 8px rgba(0, 0, 0, 0.1)",l="1px solid #efefef"},675625:(e,t,a)=>{a.d(t,{C:()=>s,V:()=>n});var i=a(667294);let o=(0,i.createContext)(!1),s=o.Provider,n=()=>(0,i.useContext)(o)},282999:(e,t,a)=>{a.d(t,{ll:()=>eT,ey:()=>ef,uj:()=>eZ,m8:()=>eD,jG:()=>eE,dt:()=>v,z_:()=>ea,R$:()=>er,bo:()=>ep,oF:()=>eL,bW:()=>f,Lj:()=>j,AX:()=>c,Fy:()=>p,XE:()=>h,am:()=>n,pD:()=>u,OJ:()=>l,LO:()=>eF,Gl:()=>eS,Y8:()=>S,Y_:()=>k,lY:()=>x,N6:()=>W,Ur:()=>L,dK:()=>y,h3:()=>eA,PY:()=>H,QD:()=>I,or:()=>O,z6:()=>F,dm:()=>z,Ni:()=>w,H_:()=>A,Q8:()=>C,Bg:()=>X,mW:()=>P,pV:()=>Q,L6:()=>G,Ig:()=>eM,bb:()=>ej,b0:()=>b,jC:()=>eu,O7:()=>eP,LM:()=>ec,q_:()=>q,OK:()=>U,Ep:()=>V,Mc:()=>eB,mP:()=>E,hd:()=>D,HV:()=>B,C$:()=>Z,dr:()=>et,mk:()=>eC,gT:()=>ee,Fr:()=>eb,XQ:()=>T,Xn:()=>M,e:()=>eH,l4:()=>K,b_:()=>ey,J:()=>r,dZ:()=>d,FO:()=>N,re:()=>R,RU:()=>eX,Ui:()=>m,KY:()=>g,fY:()=>e_,uM:()=>eg,x7:()=>ev,rk:()=>eI,XU:()=>ew,wg:()=>_,En:()=>J,ej:()=>ez,OX:()=>en,f1:()=>es,E0:()=>eh,gf:()=>Y,nU:()=>eO,mY:()=>ek,cY:()=>ex,$Y:()=>ed,Zz:()=>$,$V:()=>el,j8:()=>em,Q0:()=>ei,tZ:()=>eo,YW:()=>eW});var i=a(616550),o=a(881746);let s=new RegExp(/^\/(?!(?:pin|categories|report|search|password|terms|discover|help|email|topics|explore|pw|login|signup|about|business|source|ideas|today|tv|shopping|videos|age-apeal|oauth)\/)[\w\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+\/(?!(?:following|followers|_tools|_created|_saved|tried))[\w\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+(?=\/|$)/),n=e=>s.test(e.pathname),r=(e,t)=>{let{pathname:a}=e;return n(e)&&a.match(t||"?")},l=e=>{let{pathname:t}=e;return!!(0,i.LX)(t,{path:"/:username/:boardId/:boardSectionId",exact:!0})&&!t.match(/^\/.+\/.+\/(_tools)/i)},d=(e,t)=>{let{pathname:a}=e;return l(e)&&a.match(t||"?")},h=e=>!!(0,i.LX)(e.pathname,{path:"/board/:id/edit",exact:!0}),p=e=>!!(0,i.LX)(e.pathname,{path:"/board/:id/edit/collaborators",exact:!0}),c=e=>!!(0,i.LX)(e.pathname,{path:"/board/:id/edit/add_collaborators",exact:!0}),u=e=>!!(0,i.LX)(e.pathname,{path:"/boardsection/:id/edit",exact:!0}),m=e=>!!(0,i.LX)(e.pathname,{path:"/pin/:id/comments",exact:!0}),g=e=>!!(0,i.LX)(e.pathname,{path:"/pin/:id/edit",exact:!0}),b=e=>!!(0,i.LX)(e.pathname,{path:"/conversation/:id",exact:!0}),f=e=>!!(0,i.LX)(e.pathname,{path:"/appealed-pin/",exact:!0}),_=e=>!!(0,i.LX)(e.pathname,{path:"/reports-and-violations/",exact:!0}),v=e=>e.pathname.startsWith("/age-appeal"),w=e=>e.pathname.startsWith("/business/"),x=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-access/:userBizId/dashboard",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:userBizId/dashboard",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/dashboard",exact:!0}),y=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/hierarchy",exact:!0}),L=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/dashboard",exact:!0}),S=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-access/:userBizId/asset-groups",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:userBizId/asset-groups",exact:!0}),P=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:userBizId/catalogs",exact:!0}),X=e=>!!(0,i.LX)(e.pathname,{path:"/business/catalogs/:userBizId/",exact:!1}),C=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-access/:userBizId/shared-tags",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:userBizId/shared-tags",exact:!0}),k=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-access/:userBizId/brand-safety",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:userBizId/brand-safety",exact:!0}),W=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/business_security",exact:!0}),z=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/managers",exact:!0}),F=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/"})||!!(0,i.LX)(e.pathname,{path:"/business/business-access/:businessId/"})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:businessId/"})||!!(0,i.LX)(e.pathname,"/business/business-manager"),I=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-access/:businessId/invoice-management",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:businessId/invoice-management",exact:!0}),j=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-access/:businessId/audiences",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:businessId/audiences",exact:!0}),A=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-access/:businessId/security",exact:!0})||!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:businessId/security",exact:!0}),O=e=>!!(0,i.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/cee-migration",exact:!0}),H=e=>e.pathname.startsWith("/business/invite/"),E=e=>!!(0,i.LX)(e.pathname,{path:"/pin/:id/visual-search/",exact:!0}),D=e=>!!(0,i.LX)(e.pathname,{path:"/pin/:id/visual-search/products/",exact:!0}),Z=e=>"/"===e.pathname,B=e=>"/"===e.pathname||"/homefeed/"===e.pathname,M=e=>e.pathname.startsWith("/login"),T=e=>e.pathname.startsWith("/invited"),$=e=>!!(0,i.LX)(e.pathname,{path:"/today",exact:!0}),R=e=>e.pathname.startsWith("/password/reset")||!!(0,i.LX)(e.pathname,{path:"/pw/:username",exact:!0}),N=e=>e.pathname.startsWith("/secure/panic"),Y=e=>e.pathname.startsWith("/signup"),U=e=>e.pathname.startsWith("/email/subscription"),q=e=>e.pathname.startsWith("/email/user_survey"),V=e=>e.pathname.startsWith("/email_verification_error"),K=e=>e.pathname.startsWith("/notifications/"),G=e=>!!(0,i.LX)(e.pathname,{path:"/pin/:id",exact:!0}),Q=e=>e.pathname.startsWith("/pin_redirect"),J=e=>e.pathname.startsWith("/search"),ee=e=>!!(0,i.LX)(e.pathname,{path:"/ideas",exact:!0}),et=e=>!!(0,i.LX)(e.pathname,{path:"/ideas/:interest/:id",exact:!0}),ea=e=>ee(e)||et(e),ei=e=>!!(0,i.LX)(e.pathname,{path:"/videos/:category/:id",exact:!0}),eo=e=>!!(0,i.LX)(e.pathname,{path:"/videos/",exact:!0}),es=e=>!!(0,i.LX)(e.pathname,{path:"/shopping/",exact:!0}),en=e=>!!(0,i.LX)(e.pathname,{path:"/shopping/:category/:id",exact:!0}),er=e=>es(e)||en(e),el=e=>e.pathname.startsWith("/topics"),ed=e=>e.pathname.startsWith("/today/article/")||e.pathname.startsWith("/today/best/")||e.pathname.startsWith("/today/trending/"),eh=e=>e.pathname.startsWith("/today/shop/"),ep=e=>$(e)||ed(e)||e.pathname.startsWith("/today/popular/"),ec=e=>/^\/discover\/article\/\S+\/?/i.test(e.pathname),eu=e=>e.pathname.startsWith("/pin/create/"),em=e=>e.pathname.startsWith("/unauth-profile"),eg=e=>e.pathname.startsWith("/pin/"),eb=e=>"#imgViewer"===e.hash,ef=e=>/invite_code/.test(e.search),e_=e=>!!(0,i.LX)(e.pathname,{path:"/pin/:id",exact:!1})&&(e.pathname.includes("/sent/")||e.pathname.includes("/feedback/")),ev=e=>e.pathname.includes("/repin/x"),ew=e=>!!(0,i.LX)(e.pathname,{path:"/pin/:id/repin"})&&!ev(e),ex=e=>e.pathname.startsWith("/_/storyboard"),ey=e=>e.pathname.startsWith("/oauth"),eL=e=>e.pathname.startsWith("/app-factory-oauth"),eS=e=>e.pathname.startsWith("/business/convert"),eP=e=>e.pathname.startsWith("/pin-editor"),eX=e=>e.pathname.startsWith("/pin-builder"),eC=e=>e.pathname.startsWith("/idea-ads-tool"),ek=e=>e.pathname.startsWith("/story-pin-builder")||e.pathname.startsWith("/idea-pin-builder")||e.pathname.startsWith("/pin-creation-tool")||eC(e),eW=e=>e.pathname.startsWith("/advertiser/quick-promote"),ez=e=>e.pathname.startsWith("/settings"),eF=e=>void 0!==e.pathname&&(e.pathname.startsWith("/business/business-access/")||e.pathname.startsWith("/business/business-manager/"))&&e.pathname.includes("/dashboard/"),eI=e=>void 0!==e.pathname&&e.pathname.startsWith("/tv/studio"),ej=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/commerce-integrations/"),eA=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/hub"),eO=e=>void 0!==e.pathname&&e.pathname.startsWith("/signup/sso-business-account/"),eH=(e,t)=>o.Wr(t,"2025-02-08","mweb_notif_settings_redesign")?e.pathname.startsWith("/settings"):e.pathname.startsWith("/settings")&&!e.pathname.startsWith("/settings/notifications"),eE=e=>void 0!==e.pathname&&!!(0,i.LX)(e.pathname,{path:"/advertiser/:id/ads/edit/",exact:!0}),eD=e=>void 0!==e.pathname&&!!(0,i.LX)(e.pathname,{path:"/advertiser/:id/ads/edit_draft/",exact:!0}),eZ=e=>void 0!==e.pathname&&!!(0,i.LX)(e.pathname,{path:"/advertiser/:id/ads/duplicate/",exact:!0}),eB=e=>void 0!==e.pathname&&!!(0,i.LX)(e.pathname,{path:"/advertiser/:id/ads/bulk_edit/",exact:!0}),eM=e=>!!(0,i.LX)(e.pathname,{path:"/collage-creation-tool/",exact:!0}),eT=({pathname:e="",state:t=null}={})=>({pathname:e,search:"",hash:"",state:t})},812477:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(616550);let o=["/BingSiteAuth.xml","/about","/add-account","/ads","/ads.txt","/age_verification","/all","/app-ads.txt","/apple-app-site-association","/apple-app-site-association.p7m","/attribution_source","/bot.html","/branded-pins","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-personal","/creation-inspiration","/creator-onboarding-landing","/collage-creation-tool","/csrf_error","/ct.html","/deactivate-account","/deed6a3ef3a44d41bb3ae2bad137db84.txt","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/following","/for-you","/getWebPushKey","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-ads-tool","/idea-pin-builder","/ideas","/inbox","/install-shuffles","/invited","/jobs","/lens-search","/login","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/app-factory-oauth","/appealed-pin","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/parental-passcode","/pin-builder","/pin-creation-tool","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/public-beta","/quick-instant-loading-indicator-app-shell.html","/recently-viewed","/refresh_stored_accounts","/refresh_token","/report","/reports-and-violations","/request-data","/robots.txt","/safe-redirect","/search","/settings","/shopping","/signup","/socialmanager","/story-pin-builder","/story_feed","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/unauth-profile","/unlink","/upload-image","/upload-image-lens-history","/upload-lens-image","/upload-profile-image","/upload-shuffle-draft","/verified","/verify","/videos","/web-custom-svg","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"];function s(e){return!!(0,i.LX)(e.pathname,{path:"/:username/",exact:!0})&&!o.includes(e.pathname.replace(/\/$/,""))}},881746:(e,t,a)=>{a.d(t,{AL:()=>o,Wr:()=>n});var i=a(415787);let o=e=>{let{group:t}=e.checkExperiment("news_hub_holdout_2024");return"holdout_control"===t},s=(e,t)=>{switch(t){case 2025:return e.checkExperiment("notifications_holdout_2025").group;case 2026:return e.checkExperiment("notifications_holdout_2026").group;case 2027:return e.checkExperiment("notifications_holdout_2027").group;case 2028:return e.checkExperiment("notifications_holdout_2028").group;default:return""}},n=(e,t,a)=>{let o=new Date(Date.parse(t)),n=o.getFullYear(),r=o.getMonth()+1,l=r<7?"h1":"h2",d=new Date(Date.now()),h=d.getMonth()+1,p=d.getFullYear(),c=p-1,u=`notifications_holdout_${c}`,m=`notifications_holdout_${p}`;if(n<c||n===c&&h>=2||n===c&&r<=6)return(0,i.nP)("in_notifications_older_holdout_group",{sampleRate:1,tags:{source:a}}),!1;let g=s(e,p)||"",b=s(e,c)||"";if(""!==g&&(0,i.nP)("in_notifications_holdout_group.info",{sampleRate:1,tags:{exp_name:m,exp_group:g,source:a}}),""!==b&&(0,i.nP)("in_notifications_holdout_group.info",{sampleRate:1,tags:{exp_name:u,exp_group:b,source:a}}),1===h||7===h){if(1===h){if(n===c&&"h2"===l)return`holdout_${l}`===b;if(n===p&&1===r&&["holdout_h2","production_h2"].includes(b))return!0}if(7===h){if(n===p&&"h1"===l)return`holdout_${l}`===g;if(n===p&&7===r&&["holdout_h1","production_h1"].includes(g))return!0}}return!!(h>=1&&h<=6&&g.includes("h1")||h>=7&&h<=12&&g.includes("h2"))&&`holdout_${l}`===g}},728593:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(830997),o=a(873095);let s=()=>{let e=(0,i.g)(),t=(0,o.l)();return a=>{let{mobileOptions:i,desktopOptions:o,reason:s,attributionLabel:n,pinId:r}=a;e?e.showDesktopSignupModal({signupFlow:o?.modalType==="login"?{type:"login"}:{type:"signup"},reason:s,attributionLabel:n,...o?.modalOptions}):t&&t.showMobileSignupModal({reason:s,attributionLabel:n,headingType:i?.headingType??"none",pinId:r})}}},154785:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(667294),o=a(616550),s=a(282999),n=a(812477),r=a(1006);let l=e=>(0,s.L6)(e)?"pin":(0,s.am)(e)?"board":(0,s.Xn)(e)?"login":(0,s.C$)(e)?"home":(0,n.Z)(e)?"profile":(0,s.dr)(e)?"ideas":(0,s.gT)(e)?"ideas-root":(0,s.tZ)(e)?"videos":(0,s.Q0)(e)?"videos-category":(0,s.$Y)(e)?"article":(0,s.E0)(e)?"shopping-spotlight":(0,s.Zz)(e)?"today":(0,s.j8)(e)?"unauth-profile":(0,s.f1)(e)?"shopping-root":(0,s.OX)(e)?"shopping-category":"other";function d(){let e=(0,o.TH)();return(0,i.useCallback)(({action:t,item:a,within:i})=>{let o=l(e);(0,r.My)(`logged_out_product.interaction.${o}.${t}`,{item:a||"none",within:i||"none"})},[e])}},343931:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(883119),o=a(144326),s=a(785893);let n=({isInModal:e})=>{let t=(0,o.ZP)();return(0,s.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new i.Ry(1),children:(0,s.jsx)(i.xH,{accessibilityLabel:t._('Loading', 'Full page loading state', 'Full page loading state'),show:!0})})}},55463:(e,t,a)=>{a.d(t,{f:()=>r,w:()=>l});var i=a(667294),o=a(498490),s=a(785893);let{Provider:n,useHook:r}=(0,o.Z)("Session");function l({children:e}){let[t,a]=(0,i.useState)(void 0),o=(0,i.useCallback)(()=>a(void 0),[]),r=(0,i.useMemo)(()=>({unauthFollowUserId:t,setUnauthFollowUserId:a,removeUnauthFollowUserId:o}),[t,o]);return(0,s.jsx)(n,{value:r,children:e})}},578406:(e,t,a)=>{a.d(t,{N4:()=>s,Wh:()=>i,hr:()=>o});let i=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),o=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),s=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')},96549:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(883119),o=a(144326),s=a(590338),n=a(240760),r=a(730212),l=a(785893);function d({followerCount:e=0,followingCount:t=0,inline:a=!1,isOwnProfile:d,textSize:h="300",textWeight:p="bold",type:c}){let u=(0,o.ZP)(),{locale:m}=(0,r.B)(),g=(0,s.Z)(),b=g(m,e,{shortform:!0,shortform_maximum_fraction_digits:1}),f=g(m,t,{shortform:!0,shortform_maximum_fraction_digits:1}),_=d?(0,n.nk)(u.ngettext('{{ followerCountFormatted }} follower', '{{ followerCountFormatted }} followers', e, 'ProfilePage.followerCount.ownProfile', 'followerCountFormatted: number of followers you have'),{followerCountFormatted:b}):(0,n.nk)(u.ngettext('{{ followerCountFormatted }} follower', '{{ followerCountFormatted }} followers', e, 'ProfilePage.followerCount.othersProfile', 'followerCountFormatted: number of followers another profile has'),{followerCountFormatted:b}),v=d?(0,n.nk)(u.ngettext('{{ followingCountFormatted }} following', '{{ followingCountFormatted }} following', t, 'ProfilePage.followingCount.ownProfile', 'followingCountFormatted: number of profiles you are following'),{followingCountFormatted:f}):(0,n.nk)(u.ngettext('{{ followingCountFormatted }} following', '{{ followingCountFormatted }} following', t, 'ProfilePage.followingCount.othersProfile', 'followingCountFormatted: number of other profiles another user is following'),{followingCountFormatted:f});return(0,l.jsx)(i.xv,{color:"default",inline:a,size:h,weight:p,children:"followers"===c?_:v})}},533746:(e,t,a)=>{a.d(t,{Z:()=>i});function i(e){return e.length>0?e.replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/$/,""):""}},919122:(e,t,a)=>{a.d(t,{Z:()=>f});var i=a(545007),o=a(616550),s=a(883119),n=a(609326),r=a(488792),l=a(477058),d=a(793874),h=a(144326),p=a(282999),c=a(864723),u=a(1006),m=a(154785),g=a(410150),b=a(785893);function f({alignIconLeft:e,bgColor:t,color:a,disableRedirect:f=!1,fallbackUrl:_,icon:v="arrow-back",onTouch:w,padding:x,placement:y,shouldUseFallbackUrl:L,size:S="lg",viewParameter:P,viewType:X,isVisualSearch:C}){let k=(0,h.ZP)(),W=(0,o.k6)(),z=(0,o.TH)(),F=(0,g.HG)(),I=(0,i.v9)(e=>e.session.isAuthenticated),j=(0,r.Z)(),A=(0,m.Z)(),O=(0,d.vs)(),{viewType:H,viewParameter:E}=(0,l.SU)(),[D,Z]=X?[X,P]:[H,E],B=()=>z.search&&z.search.includes("?nativeShouldDismiss=true"),M=()=>{let e=c.ZP.getItem(n.pm);z.key||"/ideas"!==_?(0,u.My)(`pinner_conversion.back_button.${String(e?.[0].pageType)}`):(0,u.My)("pinner_conversion.back_button.no_history"),(0,u.My)(`web_back_button_click.${String(y)}.is_auth_${String(I)}`),A({action:"click",item:"back-button"}),D&&j({view_type:D,view_parameter:Z,element:34,event_type:102}),w&&w(),f||((!z.key||z.state&&"redirect"===z.state.referrer||L)&&_?W.push(_):z.pathname.includes("/password/reset/")&&B()?W.push("/login/?dismissWebview=true"):W.goBack())},T=O?d.t4:"white",$=(0,p.am)(z)||C||"white"===a;return(0,b.jsx)(s.xu,{"data-test-id":"back-button",children:e?(0,b.jsx)(s.xu,{alignItems:"center",display:"flex",height:48,marginStart:"cancel"===v?-1:-2,width:48,children:(0,b.jsx)(s.hU,{accessibilityLabel:k._('Back', 'navigation button', 'navigation button'),bgColor:t,icon:v,iconColor:!a&&(!t||["white","lightGray","transparent"].includes(t))?"gray":a,onClick:M,padding:"auto"!==x?x:2,size:S})}):(0,b.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:F||$||t?"":T,width:O&&!$?"fit-content":""}},rounding:"circle",children:(0,b.jsx)(s.hU,{accessibilityLabel:k._('Back', 'navigation button', 'navigation button'),bgColor:t||F?t:"transparent",icon:v,iconColor:!a&&(!t||["white","lightGray","transparent"].includes(t))?"gray":a,onClick:M,padding:"auto"!==x?x:2,size:S})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/61076-0766e4d056261392.mjs.map