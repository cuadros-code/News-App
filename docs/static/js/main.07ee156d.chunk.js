(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(6),r=c.n(s),l=(c(13),c(5)),i=c.n(l),o=c(7),b=c(2),j=c(3),u=c.n(j),d=[{value:"general",label:"general"},{value:"business",label:"business"},{value:"entertainment",label:"entertainment"},{value:"health",label:"health"},{value:"science",label:"science"},{value:"sports",label:"sports"},{value:"technology",label:"technology"}],h=function(e){var t=e.setSaveCategorie,c=function(e,t){var c=Object(a.useState)(e),s=Object(b.a)(c,2),r=s[0],l=s[1],i=function(e){l(e.target.value)};return[r,function(){return Object(n.jsxs)("select",{className:"browser-default",value:r,onChange:i,children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"Select Option"}),t.map((function(e){return Object(n.jsx)("option",{value:e.value,children:e.label},e.value)}))]})}]}("general",d),s=Object(b.a)(c,2),r=s[0],l=s[1];return Object(n.jsx)("div",{className:" row ".concat(u.a.buscador),children:Object(n.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(n.jsx)("h3",{className:u.a.heading,children:" categories"}),Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"input-field col s12",children:Object(n.jsx)("input",{type:"submit",className:"btn-large amber darken-2 ".concat(u.a.btn_block),value:"Search"})})]})})})},v=function(e){var t=e.title;return Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{className:"brand-logo center",children:t})})},m=function(e){var t=e.item,c=t.urlToImage,a=t.url,s=t.title,r=t.description;return Object(n.jsx)("div",{className:"col s12 m6 l4 card-style",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{src:c,alt:s})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsxs)("h5",{children:[" ",s," "]}),Object(n.jsx)("p",{children:r})]}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"waves-effect waves-light btn",children:"View more.."})})]})})},O=function(e){var t=e.news;return Object(n.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(n.jsx)(m,{item:e},t)}))})};var p=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([]),l=Object(b.a)(r,2),j=l[0],u=l[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://newsapi.org/v2/top-headlines?country=co&category=".concat(c,"&apiKey=276435fcbb2a42768c0276a9b2dd57a5"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,s=a.articles,u(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(n.jsxs)("div",{className:"content-app",children:[Object(n.jsx)(v,{title:"App News"}),Object(n.jsxs)("div",{className:"container\r white",children:[Object(n.jsx)(h,{setSaveCategorie:s}),Object(n.jsx)(O,{news:j})]})]})};r.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))},3:function(e,t,c){e.exports={heading:"Form_heading__3VhXj",buscador:"Form_buscador__2203L",btn_block:"Form_btn_block__2dorE",content:"Form_content__2ZTQV"}}},[[15,1,2]]]);
//# sourceMappingURL=main.07ee156d.chunk.js.map