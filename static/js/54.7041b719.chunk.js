(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[54],{530:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(49),i=n(514),s=n(212),r=n(213),l=n(210),o=n(582),j=n(1),d=n(225),x=n(54),m=n(50),b=n(8),h=n(209),u=n(87),O=n(6);t.default=function(e){var t=e.t,n=f(),c=Object(m.b)(),h=Object(b.useHistory)(),p=Object(m.c)((function(e){return e.internalReducer})),g=p.internalList,v=p.isLoading,y=Object(j.useState)([]),N=Object(a.a)(y,2),w=N[0],I=N[1],C=Object(j.useState)([]),B=Object(a.a)(C,2),F=B[0],E=B[1];return Object(j.useEffect)((function(){c(Object(x.e)()),c(Object(x.g)(null))}),[]),Object(j.useEffect)((function(){if(Array.isArray(null===g||void 0===g?void 0:g.data)){var e,t,n=null===g||void 0===g||null===(e=g.data)||void 0===e?void 0:e.filter((function(e){return e.status})),c=null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.filter((function(e){return!e.status}));I(n),E(c)}}),[g]),Object(O.jsxs)(i.a,{component:"section",sx:{minHeight:"82vh"},children:[v&&Object(O.jsx)(u.a,{}),Object(O.jsxs)(s.a,{maxWidth:"lg",children:[Object(O.jsx)(d.a,{style:{marginBottom:16},children:t("allFundsReceived")}),Object(O.jsx)(r.a,{variant:"h5",className:"red",children:t("newFunds")}),Object(O.jsxs)(i.a,{mt:"16px",children:[Object(O.jsxs)(l.a,{container:!0,className:n.grid,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(r.a,{variant:"h5",className:n.title,children:t("fromWhom")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(r.a,{variant:"h5",className:n.title,children:t("date")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(r.a,{variant:"h5",className:n.title,children:t("amount")})})]}),null===F||void 0===F?void 0:F.map((function(e,c){return Object(O.jsxs)(i.a,{className:n.boxItem,children:[Object(O.jsxs)(l.a,{container:!0,className:n.box,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(d.a,{className:n.text,children:e.owner})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(d.a,{className:n.text,children:e.create_at})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsxs)(d.a,{className:n.text,children:[e.sum_with_commission," ",e.currency]})})]}),Object(O.jsx)(o.a,{variant:"contained",onClick:function(){h.push("/dashboard/transaction/get/".concat(e.id))},color:"primary",children:t("acceptFunds")})]},c)}))]}),Object(O.jsxs)(i.a,{mt:"16px",className:n.boxWithBd,children:[Object(O.jsx)(r.a,{variant:"h5",style:{color:"#000"},children:t("oldFunds")}),Object(O.jsxs)(l.a,{container:!0,className:n.grid,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(r.a,{variant:"h5",className:n.title,children:t("fromWhom")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(r.a,{variant:"h5",className:n.title,children:t("date")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(r.a,{variant:"h5",className:n.title,children:t("amount")})})]}),null===w||void 0===w?void 0:w.map((function(e,c){return Object(O.jsxs)(i.a,{className:n.boxItem,children:[Object(O.jsxs)(l.a,{container:!0,className:n.box,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(d.a,{className:n.text,style:{color:"#64748B"},children:e.owner})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(d.a,{className:n.text,style:{color:"#64748B"},children:e.create_at})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(d.a,{className:n.text,style:{color:"#64748B"},children:e.sum_with_commission})})]}),Object(O.jsx)(o.a,{variant:"contained",color:"primary",disabled:!0,children:t("acceptedFunds")})]},c)}))]})]})]})};var f=Object(h.a)((function(e){return{title:{color:"#64748B"},boxWithBd:{paddingTop:24,marginTop:24,borderTop:"1px solid #E7EAEE"},boxItem:Object(c.a)({marginBottom:8,display:"flex","& button":{width:187,height:60,marginLeft:16}},e.breakpoints.down(992),{flexDirection:"column","& button":{width:"100%",margin:"16px 0 0 0"}}),text:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},grid:Object(c.a)({marginBottom:16,width:"84%"},e.breakpoints.down(992),{width:"100%"}),box:{background:"#FFF",boxShadow:" 0px 1px 0px #E2E8F0",borderRadius:8,padding:"16px ",height:"60px","&:last-child":{marginBottom:0}}}}))}}]);
//# sourceMappingURL=54.7041b719.chunk.js.map