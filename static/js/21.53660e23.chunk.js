(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[21],{235:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i(0),a=i(83),o=i(1),s=i(301),l=i(6),r=["onChange","id"],c=o.forwardRef((function(e,t){var i=e.onChange,o=e.id,c=Object(a.a)(e,r);return Object(l.jsx)(s.a,Object(n.a)(Object(n.a)({},c),{},{mask:o,definitions:{"#":/[1-9]/},inputRef:t,onAccept:function(t){return i({target:{name:e.name,value:t}})},overwrite:!0}))}))},248:function(e,t,i){"use strict";t.a=i.p+"static/media/commissionDark.c1451589.svg"},280:function(e,t,i){"use strict";t.a=i.p+"static/media/warning.f8c3592a.svg"},281:function(e,t,i){"use strict";t.a=i.p+"static/media/coin.f1bea9ad.svg"},285:function(e,t,i){"use strict";var n=i(7),a=i(2),o=i(1),s=i(32),l=i(204),r=i(27),c=i(34),d=i(184),u=i(205);function m(e){return Object(d.a)("MuiDialogContent",e)}Object(u.a)("MuiDialogContent",["root","dividers"]);var b=i(6),j=["className","dividers"],v=Object(r.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,i.dividers&&t.dividers]}})((function(e){var t=e.theme,i=e.ownerState;return Object(a.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},i.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}:{".MuiDialogTitle-root + &":{paddingTop:0}})})),p=o.forwardRef((function(e,t){var i=Object(c.a)({props:e,name:"MuiDialogContent"}),o=i.className,r=i.dividers,d=void 0!==r&&r,u=Object(n.a)(i,j),p=Object(a.a)({},i,{dividers:d}),h=function(e){var t=e.classes,i={root:["root",e.dividers&&"dividers"]};return Object(l.a)(i,m,t)}(p);return Object(b.jsx)(v,Object(a.a)({className:Object(s.a)(h.root,o),ownerState:p,ref:t},u))}));t.a=p},325:function(e,t,i){"use strict";var n=i(5),a=i(0),o=i(49),s=i(1),l=i.n(s),r=i(376),c=i(285),d=i(587),u=i(213),m=i(588),b=i(582),j=i(188),v=i(50),p=i(224),h=i(216),x=i(89),O=i(235),f=i(86),g=i(8),w=i(209),y=i(6);t.a=function(e){var t=e.t,i=e.open,n=e.login,w=e.setOpen,D=e.values,k=C(),N=Object(v.b)(),W=Object(g.useHistory)(),S=Object(s.useState)(!1),R=Object(o.a)(S,2),B=R[0],E=R[1],A=Object(v.c)((function(e){return e.loginReducer})).answerLoginAlert,F=Object(v.c)((function(e){return e.withdrawReducer})),T=F.withDrawDataConfirm,I=F.withDrawData,q=l.a.useRef(!0);return Object(s.useLayoutEffect)((function(){q.current?q.current=!1:(A.severity,E(!1))}),[A]),Object(s.useLayoutEffect)((function(){q.current?q.current=!1:500===T.severity?(E(!1),w(!1),setTimeout((function(){W.push("/dashboard/history"),N(Object(f.g)(Object(a.a)(Object(a.a)({},T),{},{severity:null,open:!1})))}),1e3)):E(!1)}),[T]),Object(y.jsx)(r.a,{open:i,classes:{paper:k.paper},onClose:function(){return w(!1)},scroll:"body",children:Object(y.jsxs)(c.a,{className:k.dialog,children:[Object(y.jsx)(d.a,{"aria-label":"close",onClick:function(){return w(!1)},className:k.close,children:Object(y.jsx)("img",{src:p.a,alt:""})}),Object(y.jsx)(u.a,{variant:"h4",className:k.title,children:t("f2a")}),Object(y.jsx)(u.a,{variant:"body1",className:k.subtitle,children:t("f2aSubtitle")}),Object(y.jsx)(h.c,{initialValues:n?{email:D.email,password:D.password}:{"2fa_otp":""},onSubmit:function(e){var t,i;E(!0),N(n?Object(x.b)(e):Object(f.a)(null===I||void 0===I||null===(t=I.message)||void 0===t||null===(i=t.confirm)||void 0===i?void 0:i.id,e))},children:function(e){var i=e.values,n=e.handleChange;return Object(y.jsxs)(h.b,{style:{width:"100%"},children:[Object(y.jsx)(m.a,{fullWidth:!0,name:"2fa_otp",type:"number",required:!0,onChange:n,value:i["2fa_otp"],id:"000000",className:k.input,label:t("LabelSecurityCode"),variant:"outlined",InputProps:{inputComponent:O.a}}),Object(y.jsx)(b.a,{variant:"contained",size:"large",disabled:B,color:"primary",type:"submit",className:k.button,children:B?Object(y.jsx)(j.a,{color:"secondary"}):t("continue")})]})}})]})})};var C=Object(w.a)((function(e){return{paper:{width:"100%",borderRadius:16,padding:"40px 19px 50px!important"},dialog:Object(n.a)({overflow:"hidden",display:"flex",margin:"0 auto",padding:"0!important",justifyContent:"center",maxWidth:"90%",alignItems:"center",flexDirection:"column"},e.breakpoints.down(992),{padding:"16px"}),close:{position:"absolute",top:0,right:0},title:Object(n.a)({fontSize:32,lineHeight:1,marginBottom:10,textAlign:"center"},e.breakpoints.down(992),{fontSize:28}),subtitle:{color:"#777",marginBottom:40,fontWeight:"400",textAlign:"center"},input:{background:"#F7F8F9",boxShadow:"0px 1px 0px #E2E8F0",marginTop:20},button:{width:"100%",height:56,marginTop:16}}}))},581:function(e,t,i){"use strict";i.r(t);var n=i(5),a=i(0),o=i(49),s=i(1),l=i(218),r=i(510),c=i(564),d=i(514),u=i(188),m=i(212),b=i(213),j=i(210),v=i(591),p=i(592),h=i(550),x=i(563),O=i(588),f=i(582),g=i(209),w=i(280),y=i(248),C=i(281),D=i(225),k=i(8),N=i(86),W=i(50),S=i(216),R=i(556),B=i(376),E=i(285),A=i(6),F=function(e){var t,i,n,l,r,c,d,m,j,v,p,h,x,O,g,w,y=e.t,C=e.confirm,D=e.setConfirm,S=e.sum,R=e.chosenNetwork,F=(e.open,e.setOpen),I=e.commission,q=T(),L=Object(W.b)(),_=Object(k.useHistory)(),z=Object(s.useState)(!1),M=Object(o.a)(z,2),H=M[0],P=M[1],V=Object(W.c)((function(e){return e.withdrawReducer})),J=V.withDrawDataConfirm,K=V.withDrawData,Y=Object(s.useRef)(!0);return Object(s.useLayoutEffect)((function(){var e;Y.current?Y.current=!1:((null===J||void 0===J||null===(e=J.message)||void 0===e?void 0:e.security)&&(F(!0),D(!1),P(!1)),200===J.severity&&(D(!1),P(!1),setTimeout((function(){_.push("/dashboard/history"),L(Object(N.g)(Object(a.a)(Object(a.a)({},J),{},{severity:null,open:!1})))}),1e3)))}),[J]),Object(A.jsx)(B.a,{open:C,onClose:function(){return D(!1)},scroll:"body",classes:{paper:q.paper},children:Object(A.jsxs)(E.a,{className:q.DialogContent,children:[Object(A.jsx)(b.a,{variant:"h2",className:q.title,children:y("payment\u0421onfirmation")}),Object(A.jsxs)("ul",{style:{listStyle:"none"},children:[Object(A.jsxs)(b.a,{variant:"h5",component:"li",children:[y("AmountToBeDebited"),Object(A.jsx)("div",{}),Object(A.jsxs)("span",{children:[null===K||void 0===K||null===(t=K.message)||void 0===t||null===(i=t.confirm)||void 0===i?void 0:i.amount," ",null===K||void 0===K||null===(n=K.message)||void 0===n||null===(l=n.confirm)||void 0===l?void 0:l.currency]})]}),Object(A.jsxs)(b.a,{variant:"h5",component:"li",children:[y("AmountReceivable"),Object(A.jsx)("div",{}),Object(A.jsxs)("span",{children:[S," ",null===K||void 0===K||null===(r=K.message)||void 0===r||null===(c=r.confirm)||void 0===c?void 0:c.currency]})]}),Object(A.jsxs)(b.a,{variant:"h5",component:"li",children:[y("Commission"),Object(A.jsx)("div",{}),Object(A.jsxs)("span",{children:[null===K||void 0===K||null===(d=K.message)||void 0===d||null===(m=d.confirm)||void 0===m?void 0:m.commission," ",null===K||void 0===K||null===(j=K.message)||void 0===j||null===(v=j.confirm)||void 0===v?void 0:v.currency]})]}),Object(A.jsxs)(b.a,{variant:"h5",component:"li",children:[y("OurCommission"),Object(A.jsx)("div",{}),Object(A.jsxs)("span",{children:[I," ",null===K||void 0===K||null===(p=K.message)||void 0===p||null===(h=p.confirm)||void 0===h?void 0:h.currency]})]}),Object(A.jsxs)(b.a,{variant:"h5",component:"li",children:[y("NetworkCommission"),Object(A.jsx)("div",{}),Object(A.jsxs)("span",{children:[null===R||void 0===R?void 0:R.commission," ",null===K||void 0===K||null===(x=K.message)||void 0===x||null===(O=x.confirm)||void 0===O?void 0:O.currency]})]}),Object(A.jsxs)(b.a,{variant:"h5",component:"li",children:[y("note"),":",Object(A.jsx)("div",{}),Object(A.jsx)("span",{children:null===K||void 0===K||null===(g=K.message)||void 0===g||null===(w=g.confirm)||void 0===w?void 0:w.description})]})]}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",disabled:H,onClick:function(){var e,t;P(!0),L(Object(N.a)(null===K||void 0===K||null===(e=K.message)||void 0===e||null===(t=e.confirm)||void 0===t?void 0:t.id))},children:H?Object(A.jsx)(u.a,{className:"progress",color:"secondary"}):y("confirm")})]})})},T=Object(g.a)((function(e){var t,i;return{paper:{borderRadius:16,width:"100%"},DialogContent:(t={padding:"40px 31px!important",display:"flex",justifyContent:"center",flexDirection:"column"},Object(n.a)(t,e.breakpoints.down(992),{padding:"16px"}),Object(n.a)(t,"& ul",{"& li":{fontWeight:300,marginBottom:16,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap",alignItems:"baseline","& div":{width:"100%",height:"fit-content",borderBottom:"2px dotted #B8C0CC",margin:"0 3px"},"&:last-child":{"& span":{textOverflow:"ellipsis",overflow:"hidden"}},"& span":{fontWeight:500,maxWidth:"50%"}}}),Object(n.a)(t,"& button",{width:"100%",height:56,marginTop:16,background:"#FCE34D",borderRadius:"8px",border:"none",fontSize:18,fontWeight:500}),t),close:{position:"absolute",top:0,right:0},title:(i={textAlign:"center",color:"#000",fontWeight:500,letterSpacing:"-0.04em",lineHeight:"56px",marginBottom:24},Object(n.a)(i,e.breakpoints.down(992),{fontSize:48}),Object(n.a)(i,e.breakpoints.down(768),{fontSize:34,lineHeight:"40px"}),i),subtitle:{color:"#64748B",marginLeft:10}}})),I=i(85),q=i(325),L=(t.default=Object(k.withRouter)((function(e){var t,i,n,g,B=e.t,E=e.match,T=L(),_=Object(l.a)(),z=Object(r.a)(_.breakpoints.down(768)),M=Object(W.b)(),H=Object(s.useState)(null),P=Object(o.a)(H,2),V=P[0],J=P[1],K=Object(s.useState)(""),Y=Object(o.a)(K,2),G=Y[0],Q=Y[1],U=Object(s.useState)(""),X=Object(o.a)(U,2),Z=X[0],$=X[1],ee=Object(s.useState)(!1),te=Object(o.a)(ee,2),ie=te[0],ne=te[1],ae=Object(s.useState)(!1),oe=Object(o.a)(ae,2),se=oe[0],le=oe[1],re=Object(s.useRef)(!0),ce=Object(W.c)((function(e){return e.\u0421urrenciesReducer})).\u0421urrenciesList,de=Object(W.c)((function(e){return e.withdrawReducer})),ue=de.withDrawParameters,me=de.networks,be=de.withDrawDataConfirm,je=de.withDrawData,ve=de.isLoading,pe=ce.filter((function(e){return e.currency===E.params.coin}))[0],he=Object(S.d)({initialValues:{sum:"",currency:"",wallet:"",network:""},onSubmit:function(e){e.currency=E.params.coin,M(Object(N.b)(e))}});return Object(s.useEffect)((function(){M(Object(N.d)(E.params.coin))}),[]),Object(s.useEffect)((function(){var e,t,i=null===me||void 0===me?void 0:me.find((function(e){return e.network==he.values.network})),n=he.values.sum/100*(null===ue||void 0===ue||null===(e=ue.data)||void 0===e||null===(t=e.parameters)||void 0===t?void 0:t.commission);$(n),Q(he.values.sum-n-(null===i||void 0===i?void 0:i.commission)),J(i)}),[he.values.sum,he.values.network]),Object(s.useLayoutEffect)((function(){var e;re.current?re.current=!1:(null===je||void 0===je||null===(e=je.message)||void 0===e?void 0:e.confirm)&&le(!0)}),[je]),Object(A.jsx)(A.Fragment,{children:400===ue.status?Object(A.jsx)(I.a,{}):403===ue.status?Object(A.jsx)(k.Redirect,{exact:!0,from:"/",to:"/dashboard/settings/verification"}):Object(A.jsxs)("section",{style:{color:"#000"},children:[Object(A.jsx)(F,{t:B,setConfirm:le,confirm:se,sum:G,commission:Z,chosenNetwork:V,open:ie,setOpen:ne}),Object(A.jsx)(q.a,{open:ie,setOpen:ne,t:B}),Object(A.jsx)(c.a,{open:(null===je||void 0===je?void 0:je.open)||(null===be||void 0===be?void 0:be.open),autoHideDuration:3e3,onClose:function(){(null===je||void 0===je?void 0:je.open)?M(Object(N.f)(Object(a.a)(Object(a.a)({},je),{},{open:!1}))):M(Object(N.g)(Object(a.a)(Object(a.a)({},be),{},{open:!1})))},anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(A.jsx)(R.a,{severity:200===(null===be||void 0===be?void 0:be.severity)?"success":"error",color:200===(null===be||void 0===be?void 0:be.severity)?"success":"error",variant:"filled",children:(null===je||void 0===je||null===(t=je.message)||void 0===t?void 0:t.messages)||(null===be||void 0===be||null===(i=be.message)||void 0===i?void 0:i.messages)})}),ve?Object(A.jsx)(d.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",children:Object(A.jsx)(u.a,{color:"secondary"})}):Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(b.a,{variant:"h3",className:T.WithdrawalDetailsTitle,children:[B("WithdrawFundsFrom")," ",E.params.coin," ",B("withdrawWallet")]}),(null===me||void 0===me?void 0:me.length)<2&&Object(A.jsxs)(d.a,{className:T.boxMb,children:[Object(A.jsx)("img",{src:w.a,style:{marginRight:16},alt:""}),Object(A.jsxs)(b.a,{variant:"h5",style:{color:"#F59E0B",fontWeight:"300"},children:["\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u0412\u044b\u0432\u043e\u0434 ",E.params.coin," \u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430"," ",null===V||void 0===V?void 0:V.network]})]}),Object(A.jsxs)(j.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(A.jsx)(j.a,{xs:12,sm:6,md:3,item:!0,children:Object(A.jsxs)(d.a,{className:T.whitebox,style:{height:210,flexDirection:"column"},children:[Object(A.jsx)("img",{className:"icon-lg",src:C.a,alt:""}),Object(A.jsx)(b.a,{variant:"h5",className:T.subtitle,children:B("MinAmount")}),Object(A.jsxs)(b.a,{variant:"h4",className:T.title,children:[V?null===V||void 0===V?void 0:V.min_qty:"-","\xa0",E.params.coin]})]})}),Object(A.jsx)(j.a,{xs:12,sm:6,md:3,item:!0,children:Object(A.jsxs)(d.a,{className:T.whitebox,style:{height:210,flexDirection:"column"},children:[Object(A.jsx)("img",{className:"icon-lg",src:y.a,alt:""}),Object(A.jsx)(b.a,{variant:"h5",className:T.subtitle,children:B("OurCommission")}),Object(A.jsxs)(b.a,{variant:"h4",className:T.title,children:[null===ue||void 0===ue||null===(n=ue.data)||void 0===n||null===(g=n.parameters)||void 0===g?void 0:g.commission," %"]})]})}),Object(A.jsx)(j.a,{xs:12,sm:6,md:3,item:!0,children:Object(A.jsxs)(d.a,{className:T.whitebox,style:{height:210,flexDirection:"column"},children:[Object(A.jsx)("img",{className:"icon-lg",src:y.a,alt:""}),Object(A.jsx)(b.a,{variant:"h5",className:T.subtitle,children:B("NetworkCommission")}),Object(A.jsxs)(b.a,{variant:"h4",className:T.title,children:[V?null===V||void 0===V?void 0:V.commission:"-","\xa0",E.params.coin]})]})})]}),Object(A.jsxs)("form",{onSubmit:he.handleSubmit,children:[Object(A.jsxs)(d.a,{mt:"40px",children:[Object(A.jsx)(d.a,{display:"flex",justifyContent:"flex-end",children:Object(A.jsxs)(D.a,{variant:"h4",className:T.BuyDetailsTitle,onClick:function(){he.setFieldValue("sum",null===pe||void 0===pe?void 0:pe.balance)},children:[B("availableAmount")," ",Object(A.jsx)("span",{children:null===pe||void 0===pe?void 0:pe.balance})," ",E.params.coin]})}),Object(A.jsxs)(d.a,{display:"flex",alignItems:"start",mb:2,style:z?{flexDirection:"column"}:null,sx:{flexDirection:{xs:"column",sm:"column",md:"row"}},children:[Object(A.jsxs)(v.a,{fullWidth:!0,className:T.formControl,children:[Object(A.jsx)(p.a,{children:B("network")}),Object(A.jsx)(h.a,{name:"network",required:!0,label:B("network"),variant:"outlined",value:he.values.network,onChange:he.handleChange,children:null===me||void 0===me?void 0:me.map((function(e,t){return Object(A.jsx)(x.a,{value:e.network,children:e.name},t)}))})]}),Object(A.jsxs)(d.a,{display:"flex",width:"100%",sx:{margin:{xs:"16px 0 0 0",md:"0 16px"}},children:[Object(A.jsx)(d.a,{className:T.WithdrawalDetailsLabel,children:E.params.coin}),Object(A.jsx)(O.a,{label:B("AmountDispatch"),name:"sum",fullWidth:!0,required:!0,type:"text",error:he.values.sum&&he.values.sum<+(null===V||void 0===V?void 0:V.min_qty)||he.values.sum>+(null===V||void 0===V?void 0:V.max_qty),helperText:he.values.sum&&he.values.sum<+(null===V||void 0===V?void 0:V.min_qty)||he.values.sum>+(null===V||void 0===V?void 0:V.max_qty)?"\u043c\u0438\u043d-".concat(+(null===V||void 0===V?void 0:V.min_qty),"/\u043c\u0430\u043a\u0441-").concat(+(null===V||void 0===V?void 0:V.max_qty)):null,InputProps:{inputProps:{pattern:"\\d*.\\d*"}},value:he.values.sum,onChange:he.handleChange,onKeyPress:function(e){/[0-9.]/.test(e.key)||e.preventDefault()},variant:"outlined",className:T.WithdrawalDetailsInput})]}),Object(A.jsxs)(d.a,{display:"flex",alignItems:"start",width:"100%",sx:{margin:{xs:"16px 0 0 0",md:"0 16px"}},children:[Object(A.jsx)(d.a,{className:T.WithdrawalDetailsLabel,children:E.params.coin}),Object(A.jsx)(O.a,{fullWidth:!0,label:B("AmountReceivable"),name:"sum",disabled:!0,value:he.values.sum?G:"",onChange:he.handleChange,onBlur:he.handleChange,variant:"outlined",className:T.WithdrawalDetailsInput})]})]})]}),Object(A.jsxs)(d.a,{mt:"24px",children:[Object(A.jsxs)(D.a,{style:{color:"#323A46"},children:[B("number")," ",E.params.coin," ",B("withdrawWallet")]}),Object(A.jsx)(O.a,{fullWidth:!0,label:"".concat(B("enterNumber")," ").concat(E.params.coin," ").concat(B("withdrawWallet")),style:{backgroundColor:"#fff",borderRadius:8,marginTop:16},required:!0,name:"wallet",value:he.values.wallet,onChange:he.handleChange,variant:"outlined"})]}),Object(A.jsx)(f.a,{variant:"contained",size:"large",type:"submit",disabled:!he.values.sum||!he.values.wallet||he.values.sum&&he.values.sum<+(null===V||void 0===V?void 0:V.min_qty)||he.values.sum>+(null===V||void 0===V?void 0:V.max_qty),color:"primary",className:T.button,children:B("Continue")})]})]})]})})})),Object(g.a)((function(e){return{WithdrawalDetailsDate:{backgroundColor:"#fff",boxShadow:"0px 1px 0px #E2E8F0",borderRadius:8,marginBottom:10,maxWidth:240,marginRight:40},whitebox:Object(n.a)({boxShadow:"0px 1px 0px #E2E8F0",borderRadius:8,background:"#FFF",height:167,display:"flex",justifyContent:"flex-start",alignItems:"center",padding:"30px",transition:"all 0.2s linear","&:hover":{boxShadow:"0px 0px 6px 2px #E2E8F0"}},e.breakpoints.down(576),{display:"flex",flexDirection:"column"}),WithdrawalDetailsDateText:{color:"#64748B",fontSize:23,fontWeight:300},subtitle:{color:"#323A46",fontWeight:300,textAlign:"center",margin:"22px 0 8px"},title:{color:"#323A46",fontWeight:600},WithdrawalDetailsLabel:{color:"#000000",fontWeight:600,height:"fit-content",display:"flex",flexDirection:"column",alignItems:"center !important",justifyContent:"center",padding:"19.8px 18px",backgroundColor:"#E7EAEE",borderRadius:"8px 0 0 8px",boxShadow:"0px 1px 0px #E2E8F0"},WithdrawalDetailsInput:{"& .MuiOutlinedInput-root":{borderRadius:"0 8px 8px 0"}},BuyDetailsTitle:{color:"#323A46",marginBottom:16,cursor:"pointer","& span":{transition:"all 0.2s linear",borderBottom:"1px solid transparent"},"&:last-child:hover":{"& span":{borderBottom:"2px solid #000"}}},boxMb:Object(n.a)({display:"flex",alignItems:"center",justifyContent:"center",marginBottom:40},e.breakpoints.down(992),{marginBottom:16}),button:Object(n.a)({margin:"30px auto",display:"block"},e.breakpoints.down(992),{width:"100%",marginTop:24}),WithdrawalDetailsTitle:Object(n.a)({textAlign:"center",marginBottom:24},e.breakpoints.down(992),{marginBottom:16})}})))}}]);
//# sourceMappingURL=21.53660e23.chunk.js.map