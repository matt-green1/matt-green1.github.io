(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{107:function(A,e,t){},108:function(A,e,t){},126:function(A,e,t){"use strict";t.r(e);var a=t(0),s=t.n(a),c=t(23),i=t.n(c),n=(t(107),t(15)),l=t(16),r=t(20),j=t(19),o=(t(108),t(77)),b=t(140),d=t(1),w=function(A){Object(r.a)(t,A);var e=Object(j.a)(t);function t(){return Object(n.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"nav",children:Object(d.jsxs)(b.a,{link:!0,children:[Object(d.jsx)(b.a.Item,{link:"about",className:"navButton",children:Object(d.jsx)(o.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:480,name:"about",id:"aboutnav",children:"About"})}),Object(d.jsx)(b.a.Item,{link:"projects",className:"navButton",children:Object(d.jsx)(o.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:175,duration:480,name:"projects",id:"projectsnav",children:"Projects"})})]})})}}]),t}(s.a.Component),g=t(143),h=t(144),u=t(141),p=function(A){Object(r.a)(t,A);var e=Object(j.a)(t);function t(){return Object(n.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsxs)(g.a,{as:"h1",id:"greeting",children:[Object(d.jsx)("span",{id:"wave",children:this.props.blurbStatus?Object(d.jsx)(d.Fragment,{children:"\ud83d\udc3d"}):Object(d.jsx)(d.Fragment,{children:"\u270b"})}),"\xa0",this.props.blurbStatus?Object(d.jsx)(d.Fragment,{children:"Eyhay, I'mway Attmay!"}):Object(d.jsx)(d.Fragment,{children:"Hey, I'm Matt!"}),Object(d.jsxs)("span",{id:"pigspan",children:[Object(d.jsx)(u.a,{className:"pigtoggle",toggle:!0,onChange:this.props.switchBlurb,checked:this.props.blurbStatus}),Object(d.jsx)("span",{id:"pigemoji",children:"\ud83d\udc16"})]})]})}}]),t}(s.a.Component),I=t(93),O=t(139),m=t.p+"static/media/github.bcd240e4.png",v=t.p+"static/media/linkedin.5c4c975d.png",Q=function(A){Object(r.a)(t,A);var e=Object(j.a)(t);function t(){var A;Object(n.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(A=e.call.apply(e,[this].concat(s))).state={value:"magreen118@gmail.com",copied:!1},A.emailCopyHelper=function(){A.setState({copied:!0}),setTimeout((function(){A.setState({copied:!1})}),800)},A}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return Object(d.jsx)(h.a,{divided:"vertically",children:Object(d.jsxs)(h.a.Row,{columns:3,id:"linkiconrow",children:[Object(d.jsx)(h.a.Column,{className:"linkicons",children:Object(d.jsx)(O.a,{src:v,alt:"linkedin",className:"hvr-skew",id:"linkedin",href:"https://linkedin.com/in/matthewgreen123",target:"_blank"})}),Object(d.jsx)(h.a.Column,{className:"linkicons",children:Object(d.jsx)(O.a,{src:m,alt:"github",className:"hvr-skew",id:"github",href:"https://github.com/matt-green1",target:"_blank"})}),Object(d.jsx)(h.a.Column,{className:"linkicons",children:Object(d.jsx)(I.CopyToClipboard,{text:this.state.value,onCopy:function(){return A.emailCopyHelper()},children:Object(d.jsx)(g.a,{as:"h1",id:"emailsymbol",className:"hvr-skew",children:"@"})})}),this.state.copied?Object(d.jsx)("span",{id:"emailcopytext",children:"Email Copied!"}):null]})})}}]),t}(s.a.Component),B=t.p+"static/media/circle.bb131881.png",D=function(A){Object(r.a)(t,A);var e=Object(j.a)(t);function t(){return Object(n.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"box",children:Object(d.jsx)("div",{className:"spin-container",children:Object(d.jsx)("div",{className:"shape",children:Object(d.jsx)("div",{className:"bgnowimage"})})})}),Object(d.jsx)("div",{id:"sliderspanholder",children:Object(d.jsxs)("span",{id:"sliderholder",children:[Object(d.jsx)(O.a,{src:B,alt:"circle",className:"blobmeter"}),Object(d.jsx)("input",{type:"range",min:"3",max:"103",id:"blobslider",step:"10",value:this.props.blobValue,onChange:function(e){A.props.blobHelper(e)}}),Object(d.jsx)(O.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDYtMDNUMTc6Mjg6NDctMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA2LTAzVDE3OjMxOjQ3LTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTAzVDE3OjMxOjQ3LTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA4YWUxOWQwLWU1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",alt:"blob",className:"blobmeter"})]})})]})}}]),t}(s.a.Component),y=function(A){Object(r.a)(t,A);var e=Object(j.a)(t);function t(){var A;Object(n.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(A=e.call.apply(e,[this].concat(s))).state={blurbStatus:!1,blobValue:100},A.switchBlurb=function(){!1===A.state.blurbStatus?A.setState({blurbStatus:!0}):A.setState({blurbStatus:!1})},A.blobHelper=function(e){A.setState({blobValue:e.target.value})},A}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{id:"about",children:[Object(d.jsx)(g.a,{as:"h1",id:"name",children:"Matt Green"}),Object(d.jsx)(Q,{}),Object(d.jsx)("div",{id:"aboutsection",style:{"--spin":"".concat(this.state.blobValue,"s")},children:Object(d.jsx)(h.a,{divided:"vertically",stackable:!0,id:"aboutgrid",children:Object(d.jsxs)(h.a.Row,{columns:2,centered:!0,children:[Object(d.jsxs)(h.a.Column,{width:7,id:"blurbcolumn",children:[Object(d.jsx)(p,{blurbStatus:this.state.blurbStatus,switchBlurb:this.switchBlurb}),this.state.blurbStatus?Object(d.jsx)(g.a,{as:"h4",id:"blurb",children:"I'mway away ullfay-ackstay eveloperday asedbay inway ycnay. I'mway assionatepay aboutway usingway ewnay echnologiestay otay uildbay elightfulday, intuitiveway ebway appsway. I'mway away ackjay ofway allway adestray, eadyray otay useway ymay isssway-armyway-ifeknay-ikelay illsetskay otay ackletay oughtay oblemspray andway implementway userway ocusedfay, isuallyvay easantplay olutionssay."}):Object(d.jsxs)(g.a,{as:"h4",id:"blurb",children:["I'm a full-stack developer based in nyc. I'm passionate about using new technologies to build delightful, intuitive web apps. I'm a jack of all trades, ready to use my swiss-army-knife-like skillset to tackle tough problems and implement user focused, visually pleasant solutions.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})]}),Object(d.jsx)(h.a.Column,{width:5,id:"photocolumn",children:Object(d.jsx)(D,{blobValue:this.state.blobValue,blobHelper:this.blobHelper})})]})})})]})}}]),t}(s.a.Component),f=t(145),R=t.p+"static/media/lifeletter_static.1198e5b6.png",M=t.p+"static/media/quiz_still.6037e636.png",x=t.p+"static/media/tamo_still.05c3fe50.png",E=t.p+"static/media/javascript.f81223a5.png",N=t.p+"static/media/rails.a2874be6.png",C=t.p+"static/media/react.0fceb1a0.png",P=t.p+"static/media/zapier.58a718f8.png";var S=function(){return Object(d.jsx)("div",{id:"projects",children:Object(d.jsx)(f.a,{id:"projectcontainer",children:Object(d.jsx)(h.a,{divided:"vertically",id:"projectgrid",stackable:!0,children:Object(d.jsxs)(h.a.Row,{columns:3,id:"projectrow",children:[Object(d.jsxs)(h.a.Column,{className:"projectcolumn",children:[Object(d.jsx)(O.a,{src:R,alt:"lifeletter",id:"lifeletterimage"}),Object(d.jsx)(g.a,{as:"h2",className:"projecttitle",children:"LifeLetter"}),Object(d.jsx)("p",{className:"projectblurb",children:"A will for your feelings in which users can write and store letters to be sent in the event they pass away. Letters are converted to pdfs and stored securely in dropbox along with distribution instructions for user-chosen 'executors'."}),Object(d.jsx)(h.a,{divided:"vertically",children:Object(d.jsxs)(h.a.Row,{columns:3,className:"techiconrow",children:[Object(d.jsx)(h.a.Column,{className:"techicons",children:Object(d.jsx)(O.a,{src:C,alt:"react"})}),Object(d.jsx)(h.a.Column,{className:"techicons",children:Object(d.jsx)(O.a,{src:N,alt:"rails"})}),Object(d.jsx)(h.a.Column,{className:"techicons",children:Object(d.jsx)(O.a,{src:P,alt:"zapier"})})]})}),Object(d.jsxs)("div",{className:"projectdiv",children:[Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=pYok3fufeUI&feature=youtu.be&ab_channel=MatthewGreen",target:"_blank",rel:"noreferrer",className:"projectlink",children:"Demo "}),Object(d.jsx)("span",{className:"linkdivider",children:"|"}),Object(d.jsx)("a",{href:"https://github.com/matt-green1/capstone_frontend",target:"_blank",rel:"noreferrer",className:"projectlink",children:" Github"})]})]}),Object(d.jsxs)(h.a.Column,{className:"projectcolumn",children:[Object(d.jsx)(O.a,{src:M,alt:"quiz",id:"quizimage"}),Object(d.jsx)(g.a,{as:"h2",className:"projecttitle",children:"Over / Under"}),Object(d.jsx)("p",{className:"projectblurb",children:"Trivia app featuring themed games where users guess if obscure facts and figures are above or below a provided number. Users can create and customize their account, and track their scores against other users on a leaderboard."}),Object(d.jsx)(h.a,{divided:"vertically",children:Object(d.jsxs)(h.a.Row,{columns:2,className:"techiconrow",children:[Object(d.jsx)(h.a.Column,{className:"techicons",children:Object(d.jsx)(O.a,{src:C,alt:"react"})}),Object(d.jsx)(h.a.Column,{className:"techicons",children:Object(d.jsx)(O.a,{src:N,alt:"rails"})})]})}),Object(d.jsxs)("div",{className:"projectdiv",children:[Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=JCH6onb_iUg&ab_channel=MatthewGreen",target:"_blank",rel:"noreferrer",className:"projectlink",children:"Demo "}),Object(d.jsx)("span",{className:"linkdivider",children:"|"}),Object(d.jsx)("a",{href:"https://github.com/matt-green1/overunder_frontend",target:"_blank",rel:"noreferrer",className:"projectlink",children:" Github"})]})]}),Object(d.jsxs)(h.a.Column,{className:"projectcolumn",children:[Object(d.jsx)(O.a,{src:x,centered:!0,id:"tamoimage"}),Object(d.jsx)(g.a,{as:"h2",className:"projecttitle",children:"Flatogatchi"}),Object(d.jsx)("p",{className:"projectblurb",children:"Virtual pet app inspired by the 90's-famous Tamagotchi toys. Users can choose a monster type to adopt and name. Once adopted they can save its progress as they feed, discipline, and train it to alter its attributes and mood."}),Object(d.jsx)(h.a,{divided:"vertically",children:Object(d.jsxs)(h.a.Row,{columns:2,className:"techiconrow",children:[Object(d.jsx)(h.a.Column,{className:"techicons",children:Object(d.jsx)(O.a,{src:E,alt:"javascript"})}),Object(d.jsx)(h.a.Column,{className:"techicons",children:Object(d.jsx)(O.a,{src:N,alt:"rails"})})]})}),Object(d.jsxs)("div",{className:"projectdiv",children:[Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=_1SBHhtt6L4&ab_channel=MatthewGreen",target:"_blank",rel:"noreferrer",className:"projectlink",children:"Demo "}),Object(d.jsx)("span",{className:"linkdivider",children:"|"}),Object(d.jsx)("a",{href:"https://github.com/brandongubitosa/FlatoGochi_FrontEnd",target:"_blank",rel:"noreferrer",className:"projectlink",children:" Github"})]})]})]})})})})},k=function(A){Object(r.a)(t,A);var e=Object(j.a)(t);function t(){return Object(n.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"page-header"}),Object(d.jsx)(w,{}),Object(d.jsx)(y,{}),Object(d.jsx)(S,{})]})}}]),t}(s.a.Component);t(125);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.01926bf3.chunk.js.map