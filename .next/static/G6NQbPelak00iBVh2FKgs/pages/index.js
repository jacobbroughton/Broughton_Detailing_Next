(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/h46":function(e,t,n){n("cHUd")("Map")},"8iia":function(e,t,n){var r=n("QMMT"),i=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},LX0d:function(e,t,n){e.exports=n("UDep")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("c6qP"),a=n.n(o),s=n("YFqc"),c=n.n(s),l=(n("86HX"),i.a.createElement);t.default=function(){Object(r.useEffect)((function(){!function(){var e=document.getElementById("dropDown"),t=document.getElementById("overlay");e.classList.remove("active"),t.classList.remove("active")}()}));return l("div",{className:"home1Mother"},l("div",{className:"home1Main"},l("section",{className:"leftSect"},l("div",{className:"headDiv"},l("h3",{className:"subHead"},"Mobile"),l("h1",{className:"head"},"Auto Detailing"))),l("section",{className:"rightSect"},l("div",{className:"rightSectChild"},l("div",{className:"imgDiv"},l("img",{src:a.a,alt:"Broughton Detailing"})),l("div",{className:"addrParent"},l("div",{className:"addrDiv"},l("h1",{className:"addrTextSmall"},"Mobile Auto Detailing"),l("h1",{className:"addrText"},"Located in Matthews, NC"),l("h1",{className:"addrText2"},"I'll come to you"),l("div",{className:"buttonsDiv"},l("a",{href:"mailto:broughtondetailing@gmail.com?subject=Detail Inquiry"},l("button",{className:"CTA"},"Lets talk!")),l(c.a,{to:"/services"},l("button",{className:"CTA"},"Services"))))),l("div",{className:"FAQDiv"},l("div",{className:"FAQHeadDiv"},l("h2",{className:"FAQHead"},"FAQ")),l("div",{className:"FAQListDiv"},[{question:"Why not use a drive-thru carwash?",answer:"Drive-thru car washes may potentially damage your paint, leaving micro-scratches from the large bristled brushes."},{question:"Will my paint get damaged?",answer:"Not at all! We use proven techniques to avoid any paint damage."},{question:"Will I have to drop my car off?",answer:"Nope, we'll come to you!"},{question:"How much do you charge?",answer:"Broughton Detail's rates start at just $35!",link:"/services",topic:"services and pricing"},{question:"Do you accept credit cards?",answer:"At the moment, no. Only cash or paypal/venmo is accepted."},{question:"How long will the detail take??",answer:"It really depends which package is chosen and what type of car you have, but average time ranges from about 1.5 hours to 4 hours.",link:"/services",topic:"service time-frames"}].map((function(e){return l("div",{key:e.question,className:"faqItem"},l("h2",{className:"faqQuestion"},'"',e.question,'"'),l("p",{className:"faqAnswer"},e.answer),e.link&&e.topic&&l("p",{className:"faqLink"},"Click ",l(c.a,{to:e.link},"here")," for more info on ",e.topic,"."))})))),l("div",{className:"reviewsParent"},l("div",{className:"reviewsHeadDiv"},l("h2",{className:"reviewsHead"},"Here's what people are saying!")),l("div",{className:"reviewsDiv"},l("div",{className:"reviewsScroll"},[{name:"Trent B.",text:"10/10 very professional and quick, cleaned my interior so good it looked new. Would recommend."},{name:"Geoffrey S.",text:"Great guy, professional attitude. Worked around my schedule, and came to me. Car looks great!"},{name:"Tanner H.",text:"Very professional detail, genuine guy who cares about his work. My car came out looking new."},{name:"Louis M.",text:"Great job on our 96 truck, looks like new. Worked with our schedule. Thanks again!!"},{name:"Kori T.",text:"Broughton Detailing did an amazing job with my husband's SUV. Jacob did a wonderful job, I will definitely be using his services again and highly recommend him for all your car cleanliness needs!"},{name:"Luidmila B.",text:"Jacob did a fantastic job cleaning my car and it\u2019s never looked this good! Very convenient and very thorough, would 100% recommend. Thank you!"}].map((function(e){return l("div",{key:e.text,className:"revItem"},l("p",{className:"revText"},e.text),l("p",{className:"revName"},e.name))})))))))))}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),a=n("2GTP"),s=n("EXMj"),c=n("oioR"),l=n("MPFp"),u=n("UO39"),f=n("TJWN"),d=n("jmDH"),h=n("6/1s").fastKey,p=n("n3ko"),v=d?"_s":"size",m=function(e,t){var n,r=h(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,l){var u=e((function(e,r){s(e,u,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=r&&c(r,n,e[l],e)}));return o(u.prototype,{clear:function(){for(var e=p(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=p(this,t),r=m(n,e);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(e){p(this,t);for(var n,r=a(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(p(this,t),e)}}),d&&r(u.prototype,"size",{get:function(){return p(this,t)[v]}}),u},def:function(e,t,n){var r,i,o=m(e,t);return o?o.v=n:(e._l=o={i:i=h(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[v]++,"F"!==i&&(e._i[i]=o)),e},getEntry:m,setStrong:function(e,t,n){l(e,t,(function(e,n){this._t=p(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},c6qP:function(e,t){e.exports="/_next/static/images/genesisWithTitle-59f4f0e06bd0027addd312ef81a4fd14.jpg"},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),i=n("WaGi"),o=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),c=n("LX0d"),l=n("KI45"),u=n("5Uuq");t.__esModule=!0,t.default=void 0;var f,d=n("CxY0"),h=u(n("q1tI")),p=l(n("nOHt")),v=n("g/15");function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new c,y=window.IntersectionObserver,w={};function k(){return f||(y?f=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var N=function(e){function t(e){var n;return r(this,t),(n=o(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var a=e(i,o);return t=i,n=o,r=a,a}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),a=o.href,s=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),s=s?(0,d.resolve)(c,s):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),p.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,d.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=w[this.getHref()];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();p.default.prefetch(e),w[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),a={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),h.default.cloneElement(o,a)}}]),t}(h.Component);t.default=N},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(i(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(i(this,"Map"),0===e?0:e,t)}},r,!0)},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,3,4,2]]]);