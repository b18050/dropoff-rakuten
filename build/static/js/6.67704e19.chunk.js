(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[6],{105:function(e,t,a){"use strict";a(1);var n=a(90),c=a.n(n),i=a(266),s=a(25),r=a(5);t.a=Object(s.a)((function(e){return{main:{backgroundColor:e.palette.warning.light,border:"".concat(e.border.borderWidth,"px solid ").concat(e.palette.warning.main),padding:e.spacing(2),borderRadius:e.shape.borderRadius}}}),{withTheme:!0})((function(e){var t=e.className,a=e.children,n=e.classes;return Object(r.jsx)("div",{className:c()(n.main,t||null),children:Object(r.jsx)(i.a,{variant:"body2",children:a})})}))},108:function(e,t,a){"use strict";a(1);var n=a(307),c=a(295),i=a(25),s=a(5);t.a=Object(i.a)((function(e){return{circularProgress:{color:e.palette.secondary.main}}}),{withTheme:!0})((function(e){var t=e.size,a=e.classes;return Object(s.jsx)(n.a,{color:"secondary.main",pl:1.5,display:"flex",children:Object(s.jsx)(c.a,{size:t||24,thickness:t?t/5*24:5,className:a.circularProgress})})}))},120:function(e,t,a){"use strict";var n=1/0;function c(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&n>e?(n=e,window.requestAnimationFrame(c),window.scrollTo(0,e-e/8)):n=1/0}t.a=function(){setTimeout((function(){c()}),10)}},129:function(e,t,a){"use strict";var n=a(95),c=a(98),i=a(1),s=a.n(i),r=a(2),o=a(5);t.a=function(e){var t=e.component,a=Object(c.a)(e,["component"]);return Object(o.jsx)(r.a,Object(n.a)(Object(n.a)({},a),{},{render:function(e){return function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var c=Object.assign.apply(Object,[{}].concat(a));return s.a.createElement(e,c)}(t,e,a)}}))}},130:function(e,t,a){"use strict";var n=a(2),c=a(1),i=function(e){var t=e.pathname,a=e.search,n=e.hash;return t+(a?"?"+a:"")+(n?"#"+n:"")};t.a=function(){var e=Object(n.f)();Object(c.useEffect)((function(){return e.block((function(t,a){return"PUSH"!==a||i(t)!==i(e.location)}))}),[])}},131:function(e,t,a){"use strict";var n=a(1),c=a(33),i=a(323),s=a(322),r=a(274),o=a(273),l=a(280),d=a(269),j=a(278),b=a(279),u=a(266),h=a(25),m=a(119),p=a.n(m),g=a(5);t.a=Object(i.a)()(Object(h.a)((function(e){return{closeIcon:{marginRight:e.spacing(.5)},headSection:{width:200},blackList:{backgroundColor:e.palette.common.black,height:"100%"},noDecoration:{textDecoration:"none !important"}}}),{withTheme:!0})((function(e){var t=e.width,a=e.open,h=e.onClose,m=e.anchor,O=e.classes,x=e.menuItems,f=e.selectedItem,v=e.theme;return Object(n.useEffect)((function(){window.onresize=function(){Object(i.c)("sm",t)&&a&&h()}}),[t,a,h]),Object(g.jsxs)(s.a,{variant:"temporary",open:a,onClose:h,anchor:m,children:[Object(g.jsx)(r.a,{className:O.headSection,children:Object(g.jsx)(o.a,{style:{paddingTop:v.spacing(0),paddingBottom:v.spacing(0),height:"100%",justifyContent:"left"===m?"flex-start":"flex-end"},disableGutters:!0,children:Object(g.jsx)(l.a,{className:O.closeIcon,children:Object(g.jsx)(d.a,{onClick:h,"aria-label":"Close Navigation",children:Object(g.jsx)(p.a,{color:"primary"})})})})}),Object(g.jsx)(j.a,{className:O.blackList,children:x.map((function(e){return e.link?Object(g.jsx)(c.b,{to:e.link,className:O.noDecoration,onClick:h,children:Object(g.jsxs)(o.a,{button:!0,selected:f===e.name,disableRipple:!0,disableTouchRipple:!0,children:[Object(g.jsx)(l.a,{children:e.icon}),Object(g.jsx)(b.a,{primary:Object(g.jsx)(u.a,{variant:"subtitle1",className:"text-white",children:e.name})})]})},e.name):Object(g.jsxs)(o.a,{button:!0,onClick:e.onClick,children:[Object(g.jsx)(l.a,{children:e.icon}),Object(g.jsx)(b.a,{primary:Object(g.jsx)(u.a,{variant:"subtitle1",className:"text-white",children:e.name})})]},e.name)}))})]})})))},306:function(e,t,a){"use strict";a.r(t);var n=a(140),c=a.n(n),i=a(141),s=a(88),r=a(3),o=a(1),l=a.n(o),d=a(90),j=a.n(d),b=a(25),u=a(2),h=a(307),m=a(266),p=a(313),g=a(268),O=a(270),x=a(271),f=a(261),v=a(262),C=a(318),k=a(310),y=a(179),w=a.n(y),S=a(260),A=a(316),N=a(317),T=a(5);var D=Object(b.a)((function(e){return{tableSortLabel:{cursor:"text",userSelect:"auto",color:"inherit !important"},noIcon:{"& path":{display:"none !important"}},paddingFix:{paddingLeft:e.spacing(3)}}}),{withTheme:!0})((function(e){var t=e.order,a=e.orderBy,n=e.rows,c=e.onRequestSort,i=e.classes,s=Object(o.useCallback)((function(e){return function(t){c(t,e)}}),[c]);return Object(T.jsx)(S.a,{children:Object(T.jsx)(f.a,{children:n.map((function(e,n){return Object(T.jsx)(v.a,{align:e.numeric?"right":"inherit",padding:"default",sortDirection:a===e.name&&t,className:0===n?i.paddingFix:null,children:c?Object(T.jsx)(A.a,{title:"Sort",placement:e.numeric?"bottom-end":"bottom-start",enterDelay:300,children:Object(T.jsx)(N.a,{active:a===e.id,direction:t,onClick:s(e.id),children:Object(T.jsx)(m.a,{variant:"body2",children:e.label})})}):Object(T.jsx)(N.a,{className:j()(i.tableSortLabel,i.noIcon),children:Object(T.jsx)(m.a,{variant:"body2",className:i.label,children:e.label})})},n)}))})})}));var P=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))};function L(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var M=function(e,t){return"desc"===e?function(e,a){return L(e,a,t)}:function(e,a){return-L(e,a,t)}},R=a(105),B=[{id:"icon",numeric:!0,label:""},{id:"name",string:!1,label:"Name"},{id:"number1",string:!0,label:"Address"},{id:"number2",numeric:!1,label:"Compensation"}];var I=Object(b.a)((function(e){return{tableWrapper:{overflowX:"auto"},alignRight:{display:"flex",flexDirection:"row-reverse",alignItems:"center",paddingLeft:e.spacing(2)},blackIcon:{color:e.palette.common.black},avatar:{width:28,height:28},firstData:{paddingLeft:e.spacing(3)},iconButton:{padding:e.spacing(1)},dBlock:{display:"block"},dNone:{display:"none"}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.targets,n=Object(o.useState)("asc"),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(o.useState)(null),d=Object(s.a)(l,2),j=d[0],b=d[1],u=Object(o.useState)(0),y=Object(s.a)(u,2),S=y[0],A=y[1],N=Object(o.useCallback)((function(e,t){var a=t,n="desc";j===t&&"desc"===i&&(n="asc"),r(n),b(a)}),[r,b,i,j]),L=Object(o.useCallback)((function(e,t){A(t)}),[A]);return Object(T.jsxs)(p.a,{children:[Object(T.jsx)(g.a,{expandIcon:Object(T.jsx)(w.a,{}),children:Object(T.jsx)(m.a,{children:"Your previous orders"})}),Object(T.jsxs)(h.a,{width:"100%",children:[Object(T.jsx)("div",{className:t.tableWrapper,children:a.length>0?Object(T.jsxs)(O.a,{"aria-labelledby":"tableTitle",children:[Object(T.jsx)(D,{order:i,orderBy:j,onRequestSort:N,rowCount:a.length,rows:B}),Object(T.jsx)(x.a,{children:P(a,M(i,j)).slice(10*S,10*S+10).map((function(e,a){return Object(T.jsxs)(f.a,{hover:!0,tabIndex:-1,children:[Object(T.jsx)(v.a,{component:"th",scope:"row",className:t.firstData,children:Object(T.jsx)(C.a,{className:t.avatar,src:e.profilePicUrl})}),Object(T.jsx)(v.a,{component:"th",scope:"row",children:e.name}),Object(T.jsx)(v.a,{component:"th",scope:"row",children:e.address}),Object(T.jsx)(v.a,{component:"th",scope:"row",children:e.number2})]},a)}))})]}):Object(T.jsx)(h.a,{m:2,children:Object(T.jsx)(R.a,{children:"No previous posts added yet."})})}),Object(T.jsx)("div",{className:t.alignRight,children:Object(T.jsx)(k.a,{component:"div",count:a.length,rowsPerPage:10,page:S,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:L,classes:{select:t.dNone,selectIcon:t.dNone,actions:a.length>0?t.dBlock:t.dNone,caption:a.length>0?t.dBlock:t.dNone},labelRowsPerPage:""})})]})]})})),W=a(267),z=a(274),F=a(279),E=a(280),Y=a(281),J=a(282),H=a(149),U=a.n(H);var _=Object(b.a)((function(e){return{paper:{borderBottomLeftRadius:0,borderBottomRightRadius:0},toolbar:{justifyContent:"space-between"},scaleMinus:{transform:"scaleX(-1)"},"@keyframes spin":{from:{transform:"rotate(359deg)"},to:{transform:"rotate(0deg)"}},spin:{animation:"$spin 2s infinite linear"},listItemSecondaryAction:{paddingRight:e.spacing(1)}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.toggleAccountActivation,n=e.isAccountActivated;return Object(T.jsx)(W.a,{className:t.paper,children:Object(T.jsxs)(z.a,{className:t.toolbar,children:[Object(T.jsxs)(h.a,{display:"flex",alignItems:"center",children:[Object(T.jsx)(h.a,{mr:2,children:Object(T.jsx)(F.a,{primary:"MemberShip",secondary:n?"Premium":"Not premium",className:"mr-2"})}),Object(T.jsx)(E.a,{children:Object(T.jsx)(U.a,{className:j()(n?t.spin:null,t.scaleMinus)})})]}),Object(T.jsx)(Y.a,{className:t.listItemSecondaryAction,children:Object(T.jsx)(J.a,{color:"secondary",checked:n,onClick:a,inputProps:{"aria-label":n?"Deactivate Account":"Activate Account"}})})]})})}));var q=function(e){var t=e.selectDashboard,a=e.toggleAccountActivation,n=e.targets,c=e.isAccountActivated;return Object(o.useEffect)(t,[t]),Object(T.jsxs)(o.Fragment,{children:[Object(T.jsx)(h.a,{children:Object(T.jsx)(m.a,{style:{fontWeight:80},children:"Have somehting to drop, please go to posts."})}),Object(T.jsx)(h.a,{mt:4,children:Object(T.jsx)(m.a,{variant:"subtitle1",gutterBottom:!0,children:"Your Account"})}),Object(T.jsx)(_,{isAccountActivated:c,toggleAccountActivation:a}),Object(T.jsx)(h.a,{mt:4,children:Object(T.jsx)(m.a,{variant:"subtitle1",gutterBottom:!0,children:"History"})}),Object(T.jsx)(I,{targets:n})]})},G=a(95),Z=a(283),X=a(288),K=a(289),V=a(284),Q=a(287),$=a(286),ee=a(285),te=a(269),ae=a(185),ne=a.n(ae),ce=a(321),ie=a(272),se=a(24),re=a(290),oe=a(308),le=a(133),de=a(128),je=a.n(de),be=a(291),ue=a(186),he=a.n(ue);var me=Object(b.a)((function(e){return{paper:{borderBottomLeftRadius:0,borderBottomRightRadius:0},toolbar:{justifyContent:"space-between"},scaleMinus:{transform:"scaleX(-1)"},"@keyframes spin":{from:{transform:"rotate(359deg)"},to:{transform:"rotate(0deg)"}},spin:{animation:"$spin 2s infinite linear"},listItemSecondaryAction:{paddingRight:e.spacing(1)}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.isAccountActivated,n=e.toggleAccountActivation;return Object(T.jsx)(W.a,{className:t.paper,children:Object(T.jsxs)(z.a,{className:t.toolbar,children:[Object(T.jsxs)(h.a,{display:"flex",alignItems:"center",children:[Object(T.jsx)(h.a,{mr:2,children:Object(T.jsx)(F.a,{primary:"Status",secondary:a?"Open":"Not open",className:"mr-3"})}),Object(T.jsx)(E.a,{children:Object(T.jsx)(U.a,{className:j()(a?t.spin:null,t.scaleMinus)})})]}),Object(T.jsx)(Y.a,{className:t.listItemSecondaryAction,children:Object(T.jsx)(J.a,{color:"secondary",checked:a,onClick:n,inputProps:{"aria-label":a?"Deactivate Account":"Activate Account"}})})]})})}));je.a.workerClass=a(184).default;var pe={dBlock:{display:"block"},dNone:{display:"none"},toolbar:{justifyContent:"space-between"},formControl:{margin:30,minWidth:200},selectEmpty:{marginTop:50},root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},avatar:{backgroundColor:se.a[500]},button:{margin:1}};var ge=Object(b.a)(pe)((function(e){e.pushMessageToSnackbar,e.setPosts;var t=e.posts,a=e.openAddPostModal,n=e.classes,c=(e.isAccountActivated,e.toggleAccountActivation,Object(o.useState)(0)),i=Object(s.a)(c,2),r=i[0],d=(i[1],Object(o.useState)(!1)),j=Object(s.a)(d,2),b=j[0],u=j[1],p=l.a.useState(""),g=Object(s.a)(p,2),O=g[0],x=g[1],f=Object(o.useState)({latitude:31.5892,longitude:76.9182,zoom:6}),v=Object(s.a)(f,2),k=v[0],y=v[1],w=function(){u(!b)};return Object(T.jsxs)(W.a,{children:[Object(T.jsxs)(z.a,{className:n.toolbar,children:[Object(T.jsx)(m.a,{variant:"h6",children:"Have something to drop to a nearby city?"}),Object(T.jsx)(X.a,{variant:"contained",color:"secondary",onClick:a,disableElevation:!0,children:"Drop Here"})]}),Object(T.jsx)(K.a,{}),Object(T.jsx)(K.a,{}),Object(T.jsx)("div",{children:Object(T.jsxs)(re.a,{className:n.formControl,children:[Object(T.jsx)(ce.a,{id:"demo-simple-select-label",children:"Select City"}),Object(T.jsxs)(oe.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:O,onChange:function(e){x(e.target.value)},children:[Object(T.jsx)(ie.a,{value:"Mandi",children:"Mandi"}),Object(T.jsx)(ie.a,{value:"Shimla",children:"Shimla"}),Object(T.jsx)(ie.a,{value:"Delhi",children:"Delhi"}),Object(T.jsx)(ie.a,{value:"Chandigarh",children:"Chandigarh"})]})]})}),Object(T.jsxs)("div",{children:[Object(T.jsx)(m.a,{style:{color:"red",fontSize:20,marginLeft:250},children:"See all parcels locations"}),Object(T.jsx)(h.a,{border:1,style:{height:"70vh",width:"100%"},children:Object(T.jsx)(le.c,Object(G.a)(Object(G.a)({},k),{},{mapboxApiAccessToken:"pk.eyJ1IjoiYWJjaGFuZGFuMTEiLCJhIjoiY2tvdHU3ZWhjMDBmMDJ2bXZmdW54c3p5eiJ9.QNopaAC90pTKNW1bw-7bcg",width:"100%",height:"100%",transitionDuration:"70",mapStyle:"mapbox://styles/safak/cknndpyfq268f17p53nmpwira",onViewportChange:function(e){return y(e)},children:t.map((function(e){return Object(T.jsx)(le.a,{latitude:e.coordinate.latitude,longitude:e.coordinate.longitude,offsetLeft:-3.5*k.zoom,offsetTop:-7*k.zoom,children:Object(T.jsx)(be.a,{style:{fontSize:7*k.zoom,color:"tomato",cursor:"pointer"}})})}))}))})]}),Object(T.jsx)(m.a,{paragraph:!0,variant:"h4",color:"primary",align:"center",children:"Drop me and Earn money"}),t.length>0?Object(T.jsx)(h.a,{p:1,children:Object(T.jsxs)(Z.a,{xs:12,ls:6,children:[t.slice(25*r,25*r+25).map((function(e){return Object(T.jsxs)(V.a,{className:n.root,variant:"outlined",children:[Object(T.jsx)(ee.a,{avatar:Object(T.jsx)(C.a,{"aria-label":"recipe",className:n.avatar,children:e.title[0].toUpperCase()}),action:Object(T.jsx)(te.a,{"aria-label":"settings",children:Object(T.jsx)(ne.a,{})}),title:e.title,subheader:e.date.slice(0,10)}),Object(T.jsx)(me,{isPostOpen:b,togglePostOpen:w}),Object(T.jsxs)($.a,{children:[Object(T.jsx)(m.a,{variant:"h5",component:"h2",children:e.description}),Object(T.jsxs)(m.a,{variant:"h6",children:["LandMark: ",e.landmark]}),Object(T.jsxs)(m.a,{color:"textSecondary",children:["Amount: ",e.amount]}),Object(T.jsxs)(m.a,{variant:"body2",children:["Coordinates: ",e.coordinate.latitude,Object(T.jsx)("br",{}),"Coordinates: ",e.coordinate.longitude]})]}),Object(T.jsxs)(Q.a,{children:[Object(T.jsx)(he.a,{style:{fontSize:40},color:"primary"}),Object(T.jsx)(X.a,{variant:"contained",size:"medium",color:"secondary",children:"Drop Me"})]})]})})),Object(T.jsx)("br",{})]})}):Object(T.jsx)(h.a,{m:2,children:Object(T.jsx)(R.a,{children:'No posts added yet. Click on "NEW" to create your first one.'})})]})})),Oe=a(228),xe=a(292),fe=a(293),ve=a(294);var Ce=Object(b.a)((function(e){return{helpPadding:{"@media (max-width:  400px)":{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}},fullWidth:{width:"100%"}}}),{withTheme:!0})((function(e){var t=e.theme,a=e.classes,n=e.title,c=e.content,i=e.maxWidth,s=e.actions,r=e.helpPadding,o=e.fullWidthActions;return Object(T.jsx)(h.a,{pt:1,children:Object(T.jsxs)(W.a,{style:{maxWidth:t.breakpoints.values[i]},children:[n&&Object(T.jsx)(xe.a,{children:n}),c&&Object(T.jsx)(fe.a,{classes:r?{root:a.helpPadding}:null,children:c}),s&&Object(T.jsx)(h.a,{pb:2,pr:2,children:Object(T.jsx)(ve.a,{classes:{action:o?a.fullWidth:null},children:s})})]})})})),ke=a(108),ye=a(296),we=a(298),Se=a(312),Ae=Object(b.a)((function(e){return{mapboxglpopup:{maxWidth:400,fontWeight:12},bubble:{flexDirection:"column",alignSelf:"flex-start",backgroundColor:"#fff",borderRadius:6,borderColor:"#ccc",borderWidth:.5,padding:15,width:150},formControl:{margin:30,minWidth:200}}}),{withTheme:!0})((function(e){var t=e.handleTitleChange,a=e.handleDescriptionChange,n=e.handleCityChange,c=e.handlePinCodeChange,i=e.handleStateChange,r=e.handleAmountChange,l=e.handleLandMarkChange,d=e.handleDestinationChange,j=e.classes,b=31.5892,u=76.9182,p=Object(o.useState)({latitude:31.5892,longitude:76.9182,zoom:6}),g=Object(s.a)(p,2),O=g[0],x=g[1],f=Object(o.useState)(null),v=Object(s.a)(f,2),C=v[0],k=v[1],y=Object(o.useState)(!1),w=Object(s.a)(y,2),S=w[0],A=w[1],N=Object(o.useState)(!1),D=Object(s.a)(N,2),P=D[0],L=D[1];return Object(T.jsxs)(o.Fragment,{children:[Object(T.jsx)(m.a,{variant:"h6",gutterBottom:!0,children:"Shipping details"}),Object(T.jsxs)(Z.a,{container:!0,spacing:3,children:[Object(T.jsx)(Z.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(ye.a,{required:!0,id:"title",label:"Title",fullWidth:!0,autoComplete:"given-name",onChange:t})}),Object(T.jsx)(Z.a,{item:!0,xs:12,children:Object(T.jsx)(ye.a,{required:!0,id:"description",label:"Description",fullWidth:!0,autoComplete:"family-name",onChange:a})}),Object(T.jsx)(Z.a,{item:!0,xs:12,children:Object(T.jsx)(ye.a,{id:"landmark",label:"LandMark",fullWidth:!0,autoComplete:"shipping address-line2",onChange:l})}),Object(T.jsx)(Z.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)("div",{children:Object(T.jsxs)(re.a,{className:j.formControl,children:[Object(T.jsx)(ce.a,{id:"demo-simple-select-label",children:"Select City"}),Object(T.jsxs)(oe.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:n,children:[Object(T.jsx)(ie.a,{value:"Mandi",children:"Mandi"}),Object(T.jsx)(ie.a,{value:"Shimla",children:"Shimla"}),Object(T.jsx)(ie.a,{value:"Delhi",children:"Delhi"}),Object(T.jsx)(ie.a,{value:"Chandigarh",children:"Chandigarh"})]})]})})}),Object(T.jsx)(Z.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(ye.a,{id:"state",name:"state",label:"State/Province/Region",onChange:i,fullWidth:!0})}),Object(T.jsx)(Z.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(ye.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code",onChange:c})}),Object(T.jsx)(Z.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(ye.a,{required:!0,id:"amount",name:"amount",label:"Amount",fullWidth:!0,autoComplete:"shipping amount",onChange:r})}),Object(T.jsx)(Z.a,{item:!0,xs:12,sm:6,children:Object(T.jsx)(m.a,{children:"Country: India"})}),Object(T.jsx)(Z.a,{item:!0,xs:12,children:Object(T.jsx)(we.a,{control:Object(T.jsx)(Se.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(m.a,{children:"Set Location"}),Object(T.jsx)(h.a,{border:1,style:{height:"70vh",width:"100%"},children:Object(T.jsxs)(le.c,Object(G.a)(Object(G.a)({},O),{},{mapboxApiAccessToken:"pk.eyJ1IjoiYWJjaGFuZGFuMTEiLCJhIjoiY2tvdHU3ZWhjMDBmMDJ2bXZmdW54c3p5eiJ9.QNopaAC90pTKNW1bw-7bcg",width:"100%",height:"100%",transitionDuration:"70",mapStyle:"mapbox://styles/safak/cknndpyfq268f17p53nmpwira",onViewportChange:function(e){return x(e)},onDblClick:function(e){var t=Object(s.a)(e.lngLat,2),a=t[0],n=t[1];k({coordinate:{latitude:n,longitude:a}}),d(e),console.log(C)},children:[Object(T.jsx)(le.a,{latitude:b,longitude:u,offsetLeft:-3.5*O.zoom,offsetTop:-7*O.zoom,children:Object(T.jsx)(be.a,{style:{fontSize:7*O.zoom,color:"tomato",cursor:"pointer"},onClick:function(e){return A(!S)}})}),S&&Object(T.jsx)(le.b,{longitude:u,latitude:b,closeButton:!0,closeOnClick:!1,offsetLeft:10,offsetTop:-60,onClose:function(){return A(!1)},anchor:"bottom",style:{borderColor:"#fff",borderRadius:5},children:Object(T.jsx)(m.a,{children:"You are here"})}),C&&Object(T.jsx)(le.a,{latitude:C.coordinate.latitude,longitude:C.coordinate.longitude,offsetLeft:-3.5*O.zoom,offsetTop:-7*O.zoom,children:Object(T.jsx)(be.a,{style:{fontSize:7*O.zoom,color:"blue",cursor:"pointer"},onClick:function(){return function(e){x(Object(G.a)(Object(G.a)({},O),{},{latitude:e.coordinate.latitude,longitude:e.coordinate.longitude})),L(!P)}(C)}})}),C&&P&&Object(T.jsxs)(le.b,{longitude:C.coordinate.longitude,latitude:C.coordinate.latitude,closeButton:!0,closeOnClick:!1,offsetLeft:10,offsetTop:-60,onClose:function(){return L(!1)},anchor:"bottom",style:{borderColor:"#fff",borderRadius:5},children:[Object(T.jsx)(m.a,{children:"Destination coordinates:"}),Object(T.jsx)(m.a,{children:"Place: Shimla"}),Object(T.jsx)(m.a,{children:"Amount: 500"})]})]}))})]})]})})),Ne=a(152),Te=a.n(Ne);var De=function(e){var t=e.pushMessageToSnackbar,a=e.onClose,n=e.setPosts,r=e.posts,l=Object(o.useState)(!1),d=Object(s.a)(l,2),j=d[0],b=d[1],u=Object(o.useState)(""),m=Object(s.a)(u,2),p=m[0],g=m[1],O=Object(o.useState)(""),x=Object(s.a)(O,2),f=x[0],v=x[1],C=Object(o.useState)(""),k=Object(s.a)(C,2),y=k[0],w=k[1],S=Object(o.useState)(""),A=Object(s.a)(S,2),N=A[0],D=A[1],P=Object(o.useState)(""),L=Object(s.a)(P,2),M=L[0],R=L[1],B=Object(o.useState)(""),I=Object(s.a)(B,2),W=(I[0],I[1]),z=Object(o.useState)(""),F=Object(s.a)(z,2),E=F[0],Y=F[1],J=Object(o.useState)(null),H=Object(s.a)(J,2),U=H[0],_=H[1],q=function(){var e=Object(i.a)(c.a.mark((function e(){var i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=U){e.next=3;break}return alert("Select Destination coordinate Double click on the map to select a destination"),e.abrupt("return");case 3:return console.log(N),b(!0),i={title:p,description:f,landmark:y,coordinate:U.coordinate,pincode:M,amount:E,date:new Date},e.next=8,Te.a.post("/api/markers",i);case 8:s=e.sent,n([].concat(Object(Oe.a)(r),[s.data])),console.log(s.data),setTimeout((function(){t({text:"Your post has been uploaded"}),a()}),1500);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsx)(o.Fragment,{children:Object(T.jsx)(Ce,{helpPadding:!0,maxWidth:"md",content:Object(T.jsx)(Ae,{handleTitleChange:function(e){g(e.target.value)},handleDescriptionChange:function(e){v(e.target.value)},handleCityChange:function(e){D(e.target.value)},handleAmountChange:function(e){Y(e.target.value)},handleLandMarkChange:function(e){w(e.target.value)},handleStateChange:function(e){W(e.target.value)},handlePinCodeChange:function(e){R(e.target.value)},handleDestinationChange:function(e){console.log(e.lngLat);var t=Object(s.a)(e.lngLat,2),a=t[0],n=t[1];_({coordinate:{latitude:n,longitude:a}})}}),actions:Object(T.jsxs)(o.Fragment,{children:[Object(T.jsx)(h.a,{mr:1,children:Object(T.jsx)(X.a,{onClick:a,disabled:j,children:"Back"})}),Object(T.jsxs)(X.a,{onClick:q,variant:"contained",color:"secondary",children:["Upload ",j&&Object(T.jsx)(ke.a,{})]})]})})})};var Pe=function(e){var t=e.pushMessageToSnackbar,a=e.posts,n=e.setPosts,c=e.isAccountActivated,i=e.toggleAccountActivation,r=Object(o.useState)(!1),l=Object(s.a)(r,2),d=l[0],j=l[1],b=Object(o.useCallback)((function(){j(!0)}),[j]),u=Object(o.useCallback)((function(){j(!1)}),[j]);return d?Object(T.jsx)(De,{onClose:u,pushMessageToSnackbar:t,posts:a,setPosts:n}):Object(T.jsx)(ge,{openAddPostModal:b,posts:a,setPosts:n,pushMessageToSnackbar:t,isAccountActivated:c,toggleAccountActivation:i})},Le=a(129),Me=a(130);function Re(e){var t=e.classes,a=e.pushMessageToSnackbar,n=e.posts,c=e.toggleAccountActivation,i=(e.CardChart,e.statistics,e.targets),s=e.setTargets,r=e.setPosts,o=e.isAccountActivated,l=e.selectDashboard;return Object(Me.a)(),Object(T.jsx)("div",{className:t.wrapper,children:Object(T.jsxs)(u.c,{children:[Object(T.jsx)(Le.a,{path:"/c/posts",component:Pe,pushMessageToSnackbar:a,posts:n,setPosts:r,isAccountActivated:o,toggleAccountActivation:c}),Object(T.jsx)(Le.a,{path:"",component:q,toggleAccountActivation:c,pushMessageToSnackbar:a,targets:i,setTargets:s,isAccountActivated:o,selectDashboard:l})]})})}var Be=Object(b.a)((function(e){var t;return{wrapper:(t={margin:e.spacing(1),width:"auto"},Object(r.a)(t,e.breakpoints.up("xs"),{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(4),marginBottom:e.spacing(4)}),Object(r.a)(t,e.breakpoints.up("sm"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"90%",marginLeft:"auto",marginRight:"auto"}),Object(r.a)(t,e.breakpoints.up("md"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"82.5%",marginLeft:"auto",marginRight:"auto"}),Object(r.a)(t,e.breakpoints.up("lg"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"70%",marginLeft:"auto",marginRight:"auto"}),t)}}),{withTheme:!0})(Object(o.memo)(Re)),Ie=a(33),We=a(300),ze=a(314),Fe=a(273),Ee=a(323),Ye=a(322),Je=a(278),He=a(206),Ue=a.n(He),_e=a(207),qe=a.n(_e),Ge=a(208),Ze=a.n(Ge),Xe=a(162),Ke=a.n(Xe),Ve=a(209),Qe=a.n(Ve),$e=a(277),et=a(205),tt=a.n(et),at=a(299),nt=a(204),ct=a.n(nt),it=a(227);var st=function(e){var t=e.message,a=e.divider,n=Object(o.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(o.useCallback)((function(){r(!0)}),[r]);return Object(T.jsxs)(Fe.a,{divider:a,children:[Object(T.jsx)(at.a,{children:i?Object(T.jsx)(ct.a,{color:"secondary"}):Object(T.jsx)(C.a,{src:i?null:t.src,onError:l})}),Object(T.jsx)(F.a,{primary:t.text,secondary:"".concat(Object(it.a)(1e3*t.date,new Date)," ago")})]})};var rt=Object(b.a)((function(e){return{tabContainer:{overflowY:"auto",maxHeight:350},popoverPaper:Object(r.a)({width:"100%",maxWidth:350,marginLeft:e.spacing(2),marginRight:e.spacing(1)},e.breakpoints.down("sm"),{maxWidth:270}),divider:{marginTop:-2},noShadow:{boxShadow:"none !important"}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.messages,n=Object(o.useRef)(),c=Object(o.useState)(!1),i=Object(s.a)(c,2),r=i[0],l=i[1],d=Object(o.useCallback)((function(){l(!r)}),[r,l]),j=Object(o.useCallback)((function(){l(!1)}),[l]),b=r?"scroll-playground":null;return Object(T.jsxs)(o.Fragment,{children:[Object(T.jsx)(te.a,{onClick:d,buttonRef:n,"aria-label":"Open Messages","aria-describedby":b,color:"primary",children:Object(T.jsx)(tt.a,{})}),Object(T.jsxs)($e.a,{disableScrollLock:!0,id:b,open:r,anchorEl:n.current,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:t.popoverPaper},onClose:j,children:[Object(T.jsxs)(We.a,{position:"static",color:"inherit",className:t.noShadow,children:[Object(T.jsx)(h.a,{pt:1,pl:2,pb:1,pr:1,children:Object(T.jsx)(m.a,{variant:"subtitle1",children:"Messages"})}),Object(T.jsx)(K.a,{className:t.divider})]}),Object(T.jsx)(Je.a,{dense:!0,className:t.tabContainer,children:0===a.length?Object(T.jsx)(Fe.a,{children:Object(T.jsx)(F.a,{children:"You haven't received any messages yet."})}):a.map((function(e,t){return Object(T.jsx)(st,{message:e,divider:t!==a.length-1},t)}))})]})]})})),ot=a(119),lt=a.n(ot),dt={toolbar:{minWidth:240}};var jt=Object(b.a)(dt)((function(e){var t=e.classes,a=e.onClose,n=e.open;return Object(T.jsxs)(Ye.a,{anchor:"right",open:n,variant:"temporary",onClose:a,children:[Object(T.jsx)(z.a,{disableGutters:!0,className:t.toolbar,children:Object(T.jsxs)(h.a,{pl:3,pr:3,display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",children:[Object(T.jsx)(m.a,{variant:"h6",children:"Sidedrawer"}),Object(T.jsx)(te.a,{onClick:a,color:"primary","aria-label":"Close Sidedrawer",children:Object(T.jsx)(lt.a,{})})]})}),Object(T.jsx)(K.a,{})]})})),bt=a(131);var ut=Object(Ee.a)()(Object(b.a)((function(e){var t,a;return{appBar:Object(r.a)({boxShadow:e.shadows[6],backgroundColor:e.palette.common.white,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{width:"100%",marginLeft:0}),appBarToolbar:(t={display:"flex",justifyContent:"space-between",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},Object(r.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(r.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(r.a)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),accountAvatar:Object(r.a)({backgroundColor:e.palette.secondary.main,height:24,width:24,marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("xs"),{marginLeft:e.spacing(1.5),marginRight:e.spacing(1.5)}),drawerPaper:(a={height:"100%vh",whiteSpace:"nowrap",border:0,width:e.spacing(7),overflowX:"hidden",marginTop:e.spacing(8)},Object(r.a)(a,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(r.a)(a,"backgroundColor",e.palette.common.black),a),smBordered:Object(r.a)({},e.breakpoints.down("xs"),{borderRadius:"50% !important"}),menuLink:{textDecoration:"none",color:e.palette.text.primary},iconListItem:{width:"auto",borderRadius:e.shape.borderRadius,paddingTop:11,paddingBottom:11,marginLeft:e.spacing(1),marginRight:e.spacing(1)},textPrimary:{color:e.palette.primary.main},mobileItemSelected:{backgroundColor:"".concat(e.palette.primary.main," !important")},brandText:{fontFamily:"'Baloo Bhaijaan', cursive",fontWeight:400},username:{paddingLeft:0,paddingRight:e.spacing(2)},justifyCenter:{justifyContent:"center"},permanentDrawerListItem:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}}),{withTheme:!0})((function(e){var t=e.selectedTab,a=e.messages,n=e.classes,c=e.width,i=Object(o.useRef)([]),r=Object(o.useState)(!1),l=Object(s.a)(r,2),d=l[0],b=l[1],u=Object(o.useState)(!1),p=Object(s.a)(u,2),g=p[0],O=p[1],x=Object(o.useCallback)((function(){b(!0)}),[b]),f=Object(o.useCallback)((function(){b(!1)}),[b]),v=Object(o.useCallback)((function(){O(!0)}),[O]),k=Object(o.useCallback)((function(){O(!1)}),[O]),y=[{link:"/c/dashboard",name:"Dashboard",onClick:f,icon:{desktop:Object(T.jsx)(Ue.a,{className:"Dashboard"===t?n.textPrimary:"text-white",fontSize:"small"}),mobile:Object(T.jsx)(Ue.a,{className:"text-white"})}},{link:"/c/posts",name:"Posts",onClick:f,icon:{desktop:Object(T.jsx)(qe.a,{className:"Posts"===t?n.textPrimary:"text-white",fontSize:"small"}),mobile:Object(T.jsx)(qe.a,{className:"text-white"})}},{link:"/",name:"Logout",icon:{desktop:Object(T.jsx)(Ze.a,{className:"text-white",fontSize:"small"}),mobile:Object(T.jsx)(Ze.a,{className:"text-white"})}}];return Object(T.jsxs)(o.Fragment,{children:[Object(T.jsx)(We.a,{position:"sticky",className:n.appBar,children:Object(T.jsxs)(z.a,{className:n.appBarToolbar,children:[Object(T.jsxs)(h.a,{display:"flex",alignItems:"center",children:[Object(T.jsx)(ze.a,{smUp:!0,children:Object(T.jsx)(h.a,{mr:1,children:Object(T.jsx)(te.a,{"aria-label":"Open Navigation",onClick:x,color:"primary",children:Object(T.jsx)(Ke.a,{})})})}),Object(T.jsxs)(ze.a,{xsDown:!0,children:[Object(T.jsx)(m.a,{variant:"h4",className:n.brandText,display:"inline",color:"primary",children:"Drop"}),Object(T.jsx)(m.a,{variant:"h4",className:n.brandText,display:"inline",color:"secondary",children:"off"})]})]}),Object(T.jsxs)(h.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",children:[Object(T.jsx)(rt,{messages:a}),Object(T.jsxs)(Fe.a,{disableGutters:!0,className:j()(n.iconListItem,n.smBordered),children:[Object(T.jsx)(C.a,{alt:"profile picture",src:"".concat("","/images/logged_in/profilePicture.jpg"),className:j()(n.accountAvatar)}),Object(Ee.c)("sm",c)&&Object(T.jsx)(F.a,{className:n.username,primary:Object(T.jsx)(m.a,{color:"textPrimary",children:"Username"})})]})]}),Object(T.jsx)(te.a,{onClick:v,color:"primary","aria-label":"Open Sidedrawer",children:Object(T.jsx)(Qe.a,{})}),Object(T.jsx)(jt,{open:g,onClose:k})]})}),Object(T.jsx)(ze.a,{xsDown:!0,children:Object(T.jsx)(Ye.a,{variant:"permanent",classes:{paper:n.drawerPaper},open:!1,children:Object(T.jsx)(Je.a,{children:y.map((function(e,a){return Object(T.jsx)(Ie.b,{to:e.link,className:n.menuLink,onClick:e.onClick,ref:function(e){i.current[a]=e},children:Object(T.jsx)(A.a,{title:e.name,placement:"right",children:Object(T.jsx)(Fe.a,{selected:t===e.name,button:!0,divider:a!==y.length-1,className:n.permanentDrawerListItem,onClick:function(){i.current[a].click()},"aria-label":"Logout"===e.name?"Logout":"Go to ".concat(e.name),children:Object(T.jsx)(E.a,{className:n.justifyCenter,children:e.icon.desktop})})},e.name)},a)}))})})}),Object(T.jsx)(bt.a,{menuItems:y.map((function(e){return{link:e.link,name:e.name,icon:e.icon.mobile,onClick:e.onClick}})),anchor:"left",open:d,selectedItem:t,onClose:f})]})}))),ht=a(315);var mt=Object(b.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,paddingTop:0,paddingBottom:0}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.getPushMessageFromChild,n=Object(o.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(o.useState)({}),d=Object(s.a)(l,2),j=d[0],b=d[1],u=Object(o.useRef)([]),h=Object(o.useCallback)((function(){u.current.length>0&&(b(u.current.shift()),r(!0))}),[b,r,u]),m=Object(o.useCallback)((function(e,t){"clickaway"!==t&&r(!1)}),[r]),p=Object(o.useCallback)((function(e){u.current.push({message:e,key:(new Date).getTime()}),i?r(!1):h()}),[u,i,r,h]);return Object(o.useEffect)((function(){a(p)}),[a,p]),Object(T.jsx)(ht.a,{disableWindowBlurListener:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:i,autoHideDuration:6e3,onClose:m,onExited:h,ContentProps:{classes:{root:t.root}},message:Object(T.jsx)("span",{children:j.message?j.message.text:null})},j.key)})),pt=a(120),gt=[{src:"".concat("","/images/logged_in/image1.jpg"),name:"Markus",address:"C6 Alamara Hall, Delhi-6"},{src:"".concat("","/images/logged_in/image2.jpg"),name:"David",address:"Agarsen Hospital, New Delhi"},{src:"".concat("","/images/logged_in/image3.jpg"),name:"Arold",address:"TajMahal, Agra"},{src:"".concat("","/images/logged_in/image4.jpg"),name:"Joanic",address:"RedFort Metro station, Delhi"},{src:"".concat("","/images/logged_in/image5.jpg"),name:"Sophia",address:"Jama Masjid Colony, Delhi-6"},{src:"".concat("","/images/logged_in/image6.jpg"),name:"Aaron",address:"Atab Club, Sivaji Park,Chandigarh "},{src:"".concat("","/images/logged_in/image7.jpg"),name:"Steven",address:"H-4 Block, PunjabiBagh, Northwest delhi"},{src:"".concat("","/images/logged_in/image8.jpg"),name:"Felix",address:"Reliance Digital Mall, Kambhara"},{src:"".concat("","/images/logged_in/image9.jpg"),name:"Vivien",address:"Gali 4, PalamPur"},{src:"".concat("","/images/logged_in/image10.jpg"),name:"Leonie",address:"Mouse Colony, Civil lines, Mandi"}];function Ot(e){var t=e.classes,a=Object(o.useState)(null),n=Object(s.a)(a,2),r=n[0],l=n[1],d=Object(o.useState)([]),b=Object(s.a)(d,2),u=b[0],h=b[1],m=Object(o.useState)([]),p=Object(s.a)(m,2),g=p[0],O=p[1],x=Object(o.useState)([]),f=Object(s.a)(x,2),v=f[0],C=f[1],k=Object(o.useState)(!1),y=Object(s.a)(k,2),w=y[0],S=y[1],A=Object(o.useState)(null),N=Object(s.a)(A,2),D=N[0],P=N[1],L=Object(o.useCallback)((function(){for(var e=[],t=0;t<35;t+=1){var a=gt[Math.floor(Math.random()*gt.length)],n={id:t,address:a.address,number2:Math.floor(251*Math.random()),name:a.name,profilePicUrl:a.src,isActivated:!!Math.round(Math.random())};e.push(n)}O(e)}),[O]),M=["A carrier just messaged you","Your order is pciked Up.","Payment succesfully done.","You have upcoming posts to see.","Your trial will expire in 15 days.","Rate us and win awesome rewards"],R=Object(o.useCallback)((function(){!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(gt);for(var e=[],t=gt.length,a=Math.round((new Date).getTime()/1e3-86400*t),n=0;n<t;n+=1){var c={id:n,src:gt[n].src,date:a,text:M[n%M.length]};a+=86400,e.push(c)}e.reverse(),C(e)}),[C]),B=Object(o.useCallback)((function(){D&&D(w?{text:"You are now a trial member."}:{text:"You are now a premium member."}),S(!w)}),[D,w,S]),I=Object(o.useCallback)((function(e){P((function(){return e}))}),[P]);return Object(o.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Te.a.get("/api/markers");case 3:t=e.sent,console.log(t.data),h(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.useEffect)((function(){L(),R()}),[L,R]),Object(T.jsxs)(o.Fragment,{children:[Object(T.jsx)(ut,{selectedTab:r,messages:v}),Object(T.jsx)(mt,{getPushMessageFromChild:I}),Object(T.jsx)("main",{className:j()(t.main),children:Object(T.jsx)(Be,{isAccountActivated:w,toggleAccountActivation:B,pushMessageToSnackbar:D,posts:u,targets:g,selectDashboard:function(){Object(pt.a)(),document.title="Dropoff - Dashboard",l("Dashboard")},setPosts:h})})]})}t.default=Object(b.a)((function(e){return{main:Object(r.a)({marginLeft:e.spacing(9),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{marginLeft:0})}}),{withTheme:!0})(Object(o.memo)(Ot))}}]);
//# sourceMappingURL=6.67704e19.chunk.js.map