(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[35],{259:function(e,t,i){"use strict";var n=i(514),a=i(574),c=(i(1),i(6));t.a=function(){return Object(c.jsxs)(n.a,{sx:{display:"flex",border:"1px solid rgba(0, 0, 0, 0.11)",padding:"16px",borderRadius:1},children:[Object(c.jsx)(a.a,{variant:"circular",width:40,height:40}),Object(c.jsxs)(n.a,{style:{marginLeft:16},children:[Object(c.jsx)(a.a,{variant:"text",width:180,height:40}),Object(c.jsx)(a.a,{variant:"text",width:140,height:25})]})]})}},314:function(e,t,i){"use strict";var n=i(222);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(223)),c=i(6),r=(0,a.default)((0,c.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.default=r},346:function(e,t,i){"use strict";i.r(t);var n=i(49),a=i(1),c=i(584),r=i(212),o=i(582),s=i(213),l=i(8),d=i(39),u=i(50),x=i(84),b=i(220),j=i(226),p=i(259),h=i(511),f=i(209),m=i(314),v=i.n(m),O=i(210),g=i(541),y=i(587),w=i(6);t.default=function(e){var t,i,f,m=e.t,F=e.main,S=e.setVerificationPush,C=e.mode,k=E(),N=Object(u.b)(),_=Object(l.useParams)().servicesId,L=Object(a.useState)(""),P=Object(n.a)(L,2),z=P[0],M=P[1],R=Object(a.useState)(!1),W=Object(n.a)(R,2),D=W[0],H=W[1],I=Object(a.useState)([]),J=Object(n.a)(I,2),B=J[0],A=J[1],G=function(){H(!1)};Object(a.useEffect)((function(){N(Object(x.b)(_)),N(Object(x.h)(!0))}),[]);var T=Object(u.c)((function(e){return e.Pay24Reducer})),V=T.Services,q=T.isLoadingServices,K=Object(u.c)((function(e){return e.MyProfileReducer})).profileData,Q=null===K||void 0===K||null===(t=K.data)||void 0===t||null===(i=t.profile)||void 0===i||null===(f=i.verification)||void 0===f?void 0:f.value,U=Object(a.useState)(""),X=Object(n.a)(U,2),Y=X[0],Z=X[1],$=Object(a.useMemo)((function(){return V.filter((function(e){return e.name.toLocaleLowerCase().startsWith(Y.toLocaleLowerCase().trim())}))}),[Y]),ee=Y?$:V;return Object(a.useEffect)((function(){N(Object(x.g)({}))}),[]),Object(a.useEffect)((function(){var e=V.map((function(e){return JSON.parse(e.data).provider["@country"]}));A(null===e||void 0===e?void 0:e.filter((function(t,i){return e.indexOf(t)==i})))}),[V]),Object(a.useEffect)((function(){B.includes("\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d")?M("\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d"):M(B[0])}),[B]),Object(a.useEffect)((function(){F&&(document.title="Binance Pay")}),[]),Object(w.jsx)(c.a,{component:"section",sx:{minHeight:"85vh",pt:F&&4,pb:F&&4},children:Object(w.jsxs)(r.a,{maxWidth:"lg",children:[!F&&Object(w.jsx)(b.a,{}),Object(w.jsx)(j.a,{payment:!0,title:m("payments"),setFilter:Z,input:!0,placeHolder:"\u041f\u043e\u0438\u0441\u043a \u0443\u0441\u043b\u0443\u0433..."}),Object(w.jsxs)(h.a,{display:"flex",flexDirection:{xs:"column",lg:"row"},alignItems:"start",children:[Object(w.jsxs)(c.a,{sx:{background:"light"===C&&"#fff",boxShadow:"light"===C&&" 0px 1px 0px #E2E8F0",borderRadius:"13px",display:"flex",flexDirection:"column",padding:"24px",width:{xs:"100%",md:"30%"},rowGap:"16px",mr:{xs:0,lg:2},mb:{xs:2,lg:0}},children:[B.includes("\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d")&&Object(w.jsx)(o.a,{variant:"contained",className:"\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d"===z?k.button_active:k.button,size:"large",onClick:function(){return M("\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d")},children:"\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d"}),null===B||void 0===B?void 0:B.sort().reverse().filter((function(e){return B.includes("\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d")?"\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d"!==e:e})).map((function(e,t){return Object(w.jsx)(o.a,{variant:"contained",className:z===e?k.button_active:k.button,size:"large",onClick:function(){return M(e)},children:e},t)})).reverse()]}),Object(w.jsx)(O.a,{container:!0,spacing:2,children:q?Array.from(Array(20).keys()).map((function(e,t){return Object(w.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:Object(w.jsx)(p.a,{})},t)})):V&&ee.filter((function(e){return JSON.parse(e.data).provider["@country"]===z&&644!==e.id})).map((function(e,t){return Object(w.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:F||2==Q?"1"===e.active?Object(w.jsxs)(h.a,{sx:{position:"relative"},children:[Object(w.jsxs)("div",{style:{background:"light"===C&&"#FFF",boxShadow:"light"===C&&"0px 1px 0px #E2E8F0"},className:"".concat(k.box," disabled"),children:[Object(w.jsx)("img",{src:e.url_logo,alt:""}),Object(w.jsx)(s.a,{className:k.title,children:e.name})]}),Object(w.jsx)("div",{children:Object(w.jsx)(g.a,{PopperProps:{disablePortal:!0},arrow:!0,sx:{maxWidth:"unset"},title:m("unavailable"),placement:"top-start",onClose:G,open:D===(null===e||void 0===e?void 0:e.name),disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,children:Object(w.jsx)(y.a,{sx:{position:"absolute!important",bottom:8,right:8,color:"#777",fontSize:"12px",fontWeight:"600",display:"flex",alignItems:"center"},onClick:function(){return t=null===e||void 0===e?void 0:e.name,void H(t);var t},children:Object(w.jsx)(v.a,{})})})})]}):Object(w.jsxs)(d.b,{style:{background:"light"===C&&"#FFF",boxShadow:"light"===C&&"0px 1px 0px #E2E8F0"},className:k.box,to:F?"/main/payment-for-services/binance-pay/".concat(_,"/").concat(e.api_id):"/dashboard/payment-for-services/".concat(_,"/").concat(e.api_id),children:[Object(w.jsx)("img",{src:e.url_logo,alt:""}),Object(w.jsx)(s.a,{className:k.title,children:e.name})]}):Object(w.jsx)(h.a,{style:{background:"light"===C&&"#FFF",boxShadow:"light"===C&&"0px 1px 0px #E2E8F0"},sx:{position:"relative"},onClick:function(){return S(!0)},children:Object(w.jsxs)("div",{className:k.box,children:[Object(w.jsx)("img",{src:e.url_logo,alt:""}),Object(w.jsx)(s.a,{className:k.title,children:e.name})]})})},t)}))})]})]})})};var E=Object(f.a)((function(e){return{box:{position:"relative",display:"flex",height:"104px",padding:"8px 8px 8px 16px",justifyContent:"flex-start",alignItems:"center",overflow:"hidden",transition:"all 0.2s linear",borderRadius:"8px","&:hover":{boxShadow:"0px 0px 6px 2px #E2E8F0"},"&.disabled":{cursor:"not-allowed",opacity:.4,boxShadow:"0px 1px 0px #E2E8F0!important"},"& img":{width:"40px",height:"40px",objectFit:"contain",marginRight:16}},title:{fontWeight:"500",fontSize:"18px",lineHeight:"23px",letterSpacing:"-0.02em"},button:{width:"100%",background:"transparent",color:"#B8C0CC","&:hover":{"& .MuiButton-label":{color:"#000"}}},button_active:{width:"100%",background:"#FCE34D",color:"#000"}}}))}}]);
//# sourceMappingURL=35.6e21ee22.chunk.js.map