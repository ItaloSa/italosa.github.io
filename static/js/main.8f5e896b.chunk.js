(window["webpackJsonpitalosa.github.io"]=window["webpackJsonpitalosa.github.io"]||[]).push([[0],{31:function(e,t,n){e.exports=n(53)},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),l=n(9),u=n(54),i=n(57),s=n(64),m=n(58),f=n(59),b=n(60),p=n(6),d=n(7),E=n(55),h=n(56);function v(){var e=Object(p.a)(["\n  padding: 20px;\n  max-width: 640px !important;\n"]);return v=function(){return e},e}function g(){var e=Object(p.a)(["\n  background-color: ","\n"]);return g=function(){return e},e}var w=d.a.section(g(),function(e){return e.dark?"#262626":"#ffffff"}),j=Object(d.a)(u.a)(v());function x(){var e=Object(p.a)(["\n  border-color: #fff !important;\n"]);return x=function(){return e},e}function O(){var e=Object(p.a)(["\n  background-color: ",";\n  box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.24);\n"]);return O=function(){return e},e}var k=Object(d.a)(E.a)(O(),"#262626"),N=Object(d.a)(h.a)(x()),S=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(k,{dark:!0,expand:"md"},r.a.createElement(u.a,null,r.a.createElement(i.a,{href:"#",className:"navbar-brand"}," ","\xcdtalo Sousa"," "),r.a.createElement(N,{onClick:function(){return c(!n)}}),r.a.createElement(s.a,{isOpen:n,navbar:!0},r.a.createElement(m.a,{className:"ml-auto",navbar:!0},r.a.createElement(f.a,null,r.a.createElement(b.a,{target:"_blank",href:"https://github.com/ItaloSa"},"GitHub")))))))},y=n(63),I=n(61),_=n(62);function z(){var e=Object(p.a)(["\n  width: 80%;\n  border-radius: 100%;\n"]);return z=function(){return e},e}function F(){var e=Object(p.a)(["\n  padding-bottom: 20px;\n"]);return F=function(){return e},e}var B=Object(d.a)(I.a)(F()),H=Object(d.a)(_.a)(z()),J=n(10),W=n.n(J),C=n(14),G=n(27),P=n.n(G),R=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],o=n.followers,u=void 0===o?0:o,i=n.following,s=void 0===i?0:i,m=n.public_repos,f=void 0===m?0:m;Object(a.useEffect)(function(){b()},[]);var b=function(){var e=Object(C.a)(W.a.mark(function e(){var t,n;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.github.com","/users/italosa"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(I.a,{className:"mt-4"},r.a.createElement(y.a,{className:"d-flex flex-row"},r.a.createElement("a",{target:"_blank",href:"".concat("https://github.com/ItaloSa","?tab=followers"),rel:"noopener noreferrer"},r.a.createElement("p",null,"Followers ",u)),r.a.createElement("a",{className:"ml-3",target:"_blank",href:"".concat("https://github.com/ItaloSa","?tab=following"),rel:"noopener noreferrer"},r.a.createElement("p",null,"Following ",s)),r.a.createElement("a",{className:"ml-3",target:"_blank",href:"".concat("https://github.com/ItaloSa","?tab=repositories"),rel:"noopener noreferrer"},r.a.createElement("p",null,"Repos ",f)),r.a.createElement("p",{className:"ml-3"}," - "),r.a.createElement("a",{className:"ml-3",target:"_blank",href:"https://github.com/ItaloSa",rel:"noopener noreferrer"},r.a.createElement(P.a,{name:"github"}))))},$=function(){return r.a.createElement(w,{dark:!0},r.a.createElement(j,null,r.a.createElement(B,null,r.a.createElement(y.a,{md:"9"},r.a.createElement("h1",null," Hi, I'm \xcdtalo "),r.a.createElement("p",null,"I \u2764 code"),r.a.createElement("h4",null,"Passionate about the incredible world of software development, always seeking to develop and learn technologies that can positively impact society."),r.a.createElement(R,null)),r.a.createElement(y.a,{md:"3"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(H,{object:!0,src:"https://avatars2.githubusercontent.com/u/28374391?s=200",alt:"Italo Sousa"}))))))};function q(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 18px;\n  margin-bottom: 0;\n"]);return q=function(){return e},e}function A(){var e=Object(p.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 34px;\n"]);return A=function(){return e},e}function D(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return D=function(){return e},e}function K(){var e=Object(p.a)(["\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 23px 0;\n"]);return K=function(){return e},e}var L=d.a.div(K()),M=d.a.span(D(),"#7d7d7d"),Q=d.a.h1(A(),"#262626"),T=d.a.p(q(),"#262626"),U=function(e){var t=e.data,n=t.date,a=t.title,c=t.description;return r.a.createElement(L,{className:"mt-3 mb-4"},r.a.createElement(u.a,null,r.a.createElement(y.a,null,r.a.createElement(M,null,n)),r.a.createElement(y.a,null,r.a.createElement(Q,null,a)),r.a.createElement(y.a,null,r.a.createElement(T,null,c))))},V=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)(function(){o()},[]);var o=function(){var e=Object(C.a)(W.a.mark(function e(){var t,n;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/feed.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(w,null,r.a.createElement(j,null,n.length?n.map(function(e,t){return r.a.createElement(U,{data:e,key:"feed-item-".concat(t)})}):null))},X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement($,null),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(50),n(51),n(52);o.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.8f5e896b.chunk.js.map