(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(19),n=a.n(i),r=(a(110),a(37)),l=a(38),o=a(46),j=a(44),b=(a(111),a(50)),d=a(142),h=a(1),u=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"nav",children:Object(h.jsxs)(d.a,{link:!0,children:[Object(h.jsx)(d.a.Item,{link:"about",className:"navButton",children:Object(h.jsx)(b.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:490,name:"about",id:"aboutnav",children:"About"})}),Object(h.jsx)(d.a.Item,{link:"projects",className:"navButton",children:Object(h.jsx)(b.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:160,duration:490,name:"projects",id:"projectsnav",children:"Projects"})})]})})}}]),a}(c.a.Component),m=a.p+"static/media/github.52e073c0.png",p=a.p+"static/media/linkedin.ee17cbc4.png",O=a.p+"static/media/circle.503b787a.png",x=a.p+"static/media/blob.3f348a72.png",y=a(146),g=a(147),v=a(96),w=a(143),f=a(144),k=a(95),N=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={blurbStatus:!1,blobValue:100,value:"magreen118@gmail.com",copied:!1},e.switchBlurb=function(){!1===e.state.blurbStatus?e.setState({blurbStatus:!0}):e.setState({blurbStatus:!1})},e.blobHelper=function(t){e.setState({blobValue:t.target.value})},e.emailCopyHelper=function(){e.setState({copied:!0}),setTimeout((function(){e.setState({copied:!1})}),800)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{id:"about",children:[Object(h.jsx)(y.a,{as:"h1",id:"name",children:"Matt Green"}),Object(h.jsx)(g.a,{divided:"vertically",children:Object(h.jsxs)(g.a.Row,{columns:3,id:"linkiconrow",children:[Object(h.jsx)(g.a.Column,{className:"linkicons",children:Object(h.jsx)(v.a,{src:p,alt:"linkedin",className:"hvr-skew",id:"linkedin",href:"https://linkedin.com/in/matthewgreen123",target:"_blank"})}),Object(h.jsx)(g.a.Column,{className:"linkicons",children:Object(h.jsx)(v.a,{src:m,alt:"github",className:"hvr-skew",id:"github",href:"https://github.com/matt-green1",target:"_blank"})}),Object(h.jsx)(g.a.Column,{className:"linkicons",children:Object(h.jsx)(k.CopyToClipboard,{text:this.state.value,onCopy:function(){return e.emailCopyHelper()},children:Object(h.jsx)(y.a,{as:"h1",id:"emailsymbol",className:"hvr-skew",children:"@"})})}),this.state.copied?Object(h.jsx)("span",{id:"emailcopytext",children:"Email Copied!"}):null]})}),Object(h.jsx)("div",{id:"aboutsection",style:{"--spin":"".concat(this.state.blobValue,"s")},children:Object(h.jsx)(g.a,{divided:"vertically",stackable:!0,id:"aboutgrid",children:Object(h.jsxs)(g.a.Row,{columns:2,centered:!0,children:[Object(h.jsxs)(g.a.Column,{width:6,id:"blurbcolumn",children:[Object(h.jsxs)(y.a,{as:"h1",id:"greeting",children:[Object(h.jsx)("span",{id:"wave",children:this.state.blurbStatus?Object(h.jsx)(h.Fragment,{children:"\ud83d\udc3d"}):Object(h.jsx)(h.Fragment,{children:"\u270b"})}),"\xa0",this.state.blurbStatus?Object(h.jsx)(h.Fragment,{children:"Eyhay, I'mway Attmay!"}):Object(h.jsx)(h.Fragment,{children:"Hey, I'm Matt!"}),Object(h.jsxs)("span",{id:"pigspan",children:[Object(h.jsx)(w.a,{className:"pigtoggle",toggle:!0,onChange:this.switchBlurb,checked:this.state.blurbStatus}),Object(h.jsx)("span",{id:"pigemoji",children:"\ud83d\udc16"})]})]}),this.state.blurbStatus?Object(h.jsx)(y.a,{as:"h4",id:"blurb",children:"I'mway away ullfay-ackstay eveloperday asedbay inway ycnay. I'mway assionatepay aboutway usingway ewnay echnologiestay otay uildbay elightfulday, intuitiveway ebway appsway. I'mway away ackjay ofway allway adestray, eadyray otay useway ymay isssway-armyway-ifeknay-ikelay illsetskay otay ackletay oughtay oblemspray andway implementway userway ocusedfay, isuallyvay easantplay olutionssay."}):Object(h.jsxs)(y.a,{as:"h4",id:"blurb",children:["I'm a full-stack developer based in nyc. I'm passionate about using new technologies to build delightful, intuitive web apps. I'm a jack of all trades, ready to use my swiss-army-knife-like skillset to tackle tough problems and implement user focused, visually pleasant solutions.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})]}),Object(h.jsxs)(g.a.Column,{width:5,id:"interestscolumn",children:[Object(h.jsx)("div",{className:"box",children:Object(h.jsx)("div",{className:"spin-container",children:Object(h.jsx)("div",{className:"shape",children:Object(h.jsx)("div",{className:"bgnowimage"})})})}),Object(h.jsx)("div",{id:"sliderspanholder",children:Object(h.jsxs)("span",{id:"sliderholder",children:[Object(h.jsx)(v.a,{src:O,alt:"circle",className:"blobmeter"}),Object(h.jsx)("input",{type:"range",min:"3",max:"103",id:"blobslider",step:"10",value:this.state.blobValue,onChange:function(t){e.blobHelper(t)}}),Object(h.jsx)(v.a,{src:x,alt:"blob",className:"blobmeter"})]})})]})]})})}),Object(h.jsx)(b.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:160,duration:490,children:Object(h.jsx)(f.a,{name:"triangle down",className:"scrollbutton",children:Object(h.jsx)("span",{className:"buttontext",children:"\u25f9 \xa0PROJECTS\xa0 \u25f8"})})})]})}}]),a}(c.a.Component),C=a.p+"static/media/lifeletter_static.1198e5b6.png",_=a.p+"static/media/quiz_still.6037e636.png",S=a.p+"static/media/tamo_still.05c3fe50.png",I=a(148),G=a.p+"static/media/javascript.ba078473.png",z=a.p+"static/media/rails.0507ef42.png",F=a.p+"static/media/react.2adec2c0.png",H=a.p+"static/media/zapier.66d8b8a1.png";var L=function(){return Object(h.jsx)("div",{id:"projects",children:Object(h.jsx)(I.a,{id:"projectcontainer",children:Object(h.jsx)(g.a,{divided:"vertically",id:"projectgrid",stackable:!0,children:Object(h.jsxs)(g.a.Row,{columns:3,id:"projectrow",children:[Object(h.jsxs)(g.a.Column,{className:"projectcolumn",children:[Object(h.jsx)(v.a,{src:C,alt:"lifeletter",id:"lifeletterimage"}),Object(h.jsx)(y.a,{as:"h2",className:"projecttitle",children:"LifeLetter"}),Object(h.jsx)("p",{className:"projectblurb",children:"A will for your feelings. Letter writing app that allows users to write and store notes to be sent to loved ones in the event they pass away. Once finalized, letters are converted to pdfs and stored securely in a dropbox folder whose password is emailed to user-chosen 'executors' along with distribution instructions."}),Object(h.jsx)(g.a,{divided:"vertically",children:Object(h.jsxs)(g.a.Row,{columns:3,className:"techiconrow",children:[Object(h.jsx)(g.a.Column,{className:"techicons",children:Object(h.jsx)(v.a,{src:F,alt:"react"})}),Object(h.jsx)(g.a.Column,{className:"techicons",children:Object(h.jsx)(v.a,{src:z,alt:"rails"})}),Object(h.jsx)(g.a.Column,{className:"techicons",children:Object(h.jsx)(v.a,{src:H,alt:"zapier"})})]})}),Object(h.jsxs)("div",{className:"projectdiv",children:[Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=pYok3fufeUI&feature=youtu.be&ab_channel=MatthewGreen",target:"_blank",rel:"noreferrer",className:"projectlink",children:"Demo "}),"|",Object(h.jsx)("a",{href:"https://github.com/matt-green1/capstone_frontend",target:"_blank",rel:"noreferrer",className:"projectlink",children:" Github"})]})]}),Object(h.jsxs)(g.a.Column,{className:"projectcolumn",children:[Object(h.jsx)(v.a,{src:_,alt:"quiz",id:"quizimage"}),Object(h.jsx)(y.a,{as:"h2",className:"projecttitle",children:"Over / Under"}),Object(h.jsx)("p",{className:"projectblurb",children:"Trivia app featuring themed games that involve guessing if an answer is above or below a provided number. Users can create an account, customize their profile, and track their average score against other users on a leaderboard."}),Object(h.jsx)("br",{}),Object(h.jsx)(g.a,{divided:"vertically",children:Object(h.jsxs)(g.a.Row,{columns:2,className:"techiconrow",children:[Object(h.jsx)(g.a.Column,{className:"techicons",children:Object(h.jsx)(v.a,{src:F,alt:"react"})}),Object(h.jsx)(g.a.Column,{className:"techicons",children:Object(h.jsx)(v.a,{src:z,alt:"rails"})})]})}),Object(h.jsxs)("div",{className:"projectdiv",children:[Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=JCH6onb_iUg&ab_channel=MatthewGreen",target:"_blank",rel:"noreferrer",className:"projectlink",children:"Demo "}),"|",Object(h.jsx)("a",{href:"https://github.com/matt-green1/overunder_frontend",target:"_blank",rel:"noreferrer",className:"projectlink",children:" Github"})]})]}),Object(h.jsxs)(g.a.Column,{className:"projectcolumn",children:[Object(h.jsx)(v.a,{src:S,centered:!0,id:"tamoimage"}),Object(h.jsx)(y.a,{as:"h2",className:"projecttitle",children:"Flatogatchi"}),Object(h.jsx)("p",{className:"projectblurb",children:"Virtual pet app inspired by the 90's Tamagotchi toys. Users can create an account, adopt a monster, and save its progress. Users can feed, discipline, and train their monster to alter its attributes and mood."}),Object(h.jsx)("br",{}),Object(h.jsx)(g.a,{divided:"vertically",children:Object(h.jsxs)(g.a.Row,{columns:2,className:"techiconrow",children:[Object(h.jsx)(g.a.Column,{className:"techicons",children:Object(h.jsx)(v.a,{src:G,alt:"javascript"})}),Object(h.jsx)(g.a.Column,{className:"techicons",children:Object(h.jsx)(v.a,{src:z,alt:"rails"})})]})}),Object(h.jsxs)("div",{className:"projectdiv",children:[Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=_1SBHhtt6L4&ab_channel=MatthewGreen",target:"_blank",rel:"noreferrer",className:"projectlink",children:"Demo "}),"|",Object(h.jsx)("a",{href:"https://github.com/brandongubitosa/FlatoGochi_FrontEnd",target:"_blank",rel:"noreferrer",className:"projectlink",children:" Github"})]})]})]})})})})},R=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"page-header"}),Object(h.jsx)(u,{}),Object(h.jsx)(N,{}),Object(h.jsx)(L,{})]})}}]),a}(c.a.Component);a(128),a.p,a.p;n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.21f91150.chunk.js.map