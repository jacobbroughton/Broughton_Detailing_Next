(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"7Rup":function(t,a,o){"use strict";o.r(a);var n=o("q1tI"),u=o.n(n),i=o("JAUf"),l=(o("4hkV"),u.a.createElement);a.default=function(){var t=Object(n.useState)(""),a=(t[0],t[1],Object(n.useState)("")),o=a[0],u=a[1],s=Object(n.useState)(""),c=s[0],r=s[1],d=Object(n.useState)(""),p=d[0],h=d[1],g=Object(n.useState)(""),m=g[0],f=g[1],b=Object(n.useState)(""),v=b[0],w=b[1],q=Object(n.useState)(""),y=q[0],N=q[1],S=Object(n.useState)(""),_=S[0],C=S[1];return l("div",{className:"quoteMother"},l(i.default,null),l("div",{className:"quoteMain"},l("section",{className:"leftSect"},l("div",{className:"headDiv"},l("h1",{className:"head"},"Get a Quote!"))),l("section",{className:"rightSect"},l("div",{className:"quoteDiv"},l("form",{onSubmit:function(){axios.post("https://www.broughtondetailing.com/api/addquote",{first_name:p,email:o,phone_number:c,car_make:m,car_model:v,detail:_,condition:y,date:formattedDate}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),quoteMsg.style.display="block",setTimeout((function(){quoteMsg.style.display="none"}),5e3),e.preventDefault()}},l("input",{placeholder:"First Name",onChange:function(e){h(e.target.value)},type:"text"}),l("input",{placeholder:"Email",onChange:function(e){u(e.target.value)},required:!0,type:"email"}),l("input",{placeholder:"Phone Number",onChange:function(e){r(e.target.value)},required:!0,type:"tel"}),l("input",{placeholder:"Your Car's Make",onChange:function(e){f(e.target.value)},required:!0,type:"text"}),l("input",{placeholder:"Your Car's Model",onChange:function(e){w(e.target.value)},required:!0,type:"text"}),l("input",{placeholder:"Requested Detail (Full, Exterior, or Interior)",onChange:function(e){console.log(e.target.value),C(e.target.value)}}),l("textarea",{placeholder:"How would you describe the condition of your vehicle? (optional, but appreciated)",onChange:function(e){console.log(e.target.value),N(e.target.value)},type:""}),l("input",{className:"quoteSubmit",type:"submit"})),l("h4",{id:"quoteMessage",className:"quoteMessage"},"We'll get back to you as soon as possible!")))))}},vw0U:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quote",function(){return a("7Rup")}])}},[["vw0U",0,1,2,3,4,5]]]);