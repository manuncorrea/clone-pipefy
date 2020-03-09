(this.webpackJsonppipefy=this.webpackJsonppipefy||[]).push([[0],{32:function(e,n,t){e.exports=t(42)},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(21),o=t.n(i),c=t(44),l=t(26),s=t(3),d=t(4);function p(){var e=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');\n\n  *{\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body #root{\n    height: 100%;\n  }\n\n  body{\n    font: 14px 'Roboto', sans-serif;\n    background: #ecf1f8;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  ul{\n    list-style: none;\n  }\n"]);return p=function(){return e},e}var u=Object(d.a)(p());function b(){var e=Object(s.a)(["\n  height: 80px;\n  padding: 0 30px;\n  background: #7159c1;\n  color: #fff;\n\n  display: flex;\n  align-items: center;\n"]);return b=function(){return e},e}var g=d.c.div(b());function m(){return r.a.createElement(g,null,r.a.createElement("h1",null,"Pipefy - Clone"))}var f=t(9),x=t(24);var h=Object(a.createContext)({}),v=t(27),j=t(45),E=t(46);function w(){var e=Object(s.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  display: inline-block;\n  background: ",";\n"]);return w=function(){return e},e}function y(){var e=Object(s.a)(["\n    border: 2px dashed rgba(0, 0, 0, 0.2);\n    padding-top: 31px;\n    border-radius: 0;\n    background: transparent;\n    box-shadow: nome;\n    cursor: grabbing;\n\n    p, img, header{\n      opacity: 0;\n    }\n  "]);return y=function(){return e},e}function O(){var e=Object(s.a)(["\n  position: relative;\n  background: #fff;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);\n  border-top: 20px solid rgba(230, 236, 245, 0.4);\n  cursor: pointer;\n\n  header{\n    position: relative;\n    top: -22px;\n    left:15px;\n  }\n\n  p{\n    font-weight: 500;\n    line-height: 20px;\n  }\n\n\n  img{\n    width: 24px;\n    height: 24px;\n    border-radius: 2px;\n    margin-top: 5px;\n  }\n\n  ","\n\n"]);return O=function(){return e},e}var R=d.c.div(O(),(function(e){return e.isDragging&&Object(d.b)(y())})),_=d.c.span(w(),(function(e){return e.color}));function k(e){var n=e.data,t=e.index,i=e.listIndex,o=Object(a.useRef)(),c=Object(a.useContext)(h).move,l=Object(j.a)({item:{type:"CARD",index:t,listIndex:i},collect:function(e){return{isDragging:e.isDragging()}}}),s=Object(f.a)(l,2),d=s[0].isDragging,p=s[1],u=Object(E.a)({accept:"CARD",hover:function(e,n){var a=e.listIndex,r=i,l=e.index,s=t;if(l!==s||a!==r){var d=o.current.getBoundingClientRect(),p=(d.bottom-d.top)/2,u=n.getClientOffset().y-d.top;l<s&&u<p||l>s&&u>p||(c(a,r,l,s),e.index=s,e.listIndex=r)}}});return p((0,Object(f.a)(u,2)[1])(o)),r.a.createElement(R,{ref:o,isDragging:d},r.a.createElement("header",null,n.labels.map((function(e){return r.a.createElement(_,{key:e,color:e})}))),r.a.createElement("p",null,n.content),n.user&&r.a.createElement("img",{src:n.user,alt:""}))}function C(){var e=Object(s.a)(["\n  padding: 0 15px;\n  height: 100%;\n  flex: 0 0 320px;\n  opacity: ",";\n\n  & + div{\n    border-left: 1px solid rgba(0, 0, 0, 0.05);\n  }\n\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 42px;\n\n    h2{\n      font-weight: 500;\n      font-size: 16px;\n      padding: 0 10px;\n    }\n\n    button{\n      width: 42px;\n      height: 42px;\n      border-radius: 18px;\n      background: #3b5bfd;\n      border: 0;\n      cursor: pointer;\n    }\n  }\n\n  ul{\n    margin-top: 30px;\n  }\n"]);return C=function(){return e},e}var J=d.c.div(C(),(function(e){return e.done?.6:1}));function z(e){var n=e.data,t=e.index;return r.a.createElement(J,{done:n.done},r.a.createElement("header",null,r.a.createElement("h2",null,n.title),n.creatable&&r.a.createElement("button",{type:"button"},r.a.createElement(v.a,{size:24,color:"#FFF"}))),r.a.createElement("ul",null,n.cards.map((function(e,n){return r.a.createElement(k,{key:e.id,listIndex:t,index:n,data:e})}))))}function S(){var e=Object(s.a)(["\n  display: flex;\n  padding: 30px 0;\n  height: calc(100% - 80px);\n"]);return S=function(){return e},e}var D=d.c.div(S()),I=[{title:"Tarefas",creatable:!0,cards:[{id:1,content:"Estudar m\xf3dulo 01 de NodeJS",labels:["#7159c1"],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"},{id:2,content:"Escrever  TCC sobre Metodos Ageis",labels:["#7159c1"],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"},{id:3,content:"Estudar m\xf3dulo 03 de React Native",labels:["#7159c1"],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"},{id:4,content:'"NextJS: Utilizando server-side rendering com ReactJS"',labels:["#54e1f7"],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"},{id:5,content:"Fazer testes e deploy ReactJS",labels:["#54e1f7"],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"}]},{title:"Fazendo",creatable:!1,cards:[{id:6,content:"Estudar React Native",labels:[],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"}]},{title:"Pausado",creatable:!1,cards:[{id:7,content:"Estudar sobre Geolocaliza\xe7\xe3o e mapas com React Native",labels:["#7159c1"],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"},{id:8,content:"Gerar testes e deploy ReactJS",labels:["#54e1f7"],user:"https://pbs.twimg.com/profile_images/1149996247719321600/a4oaw3vm_400x400.jpg"},{id:9,content:"Ajustes na biblioteca unform",labels:[]}]},{title:"Conclu\xeddo",creatable:!1,done:!0,cards:[{id:10,content:"Recriando clone do Pipefy",labels:[]},{id:12,content:"Estudar testes e deploy ReactJS",labels:["#54e1f7"]},{id:13,content:'Estudar "Internacionaliza\xe7\xe3o de aplica\xe7\xf5es Node.js, ReactJS e React Native"',labels:["#7159c1"]}]}];function N(){var e=Object(a.useState)(I),n=Object(f.a)(e,2),t=n[0],i=n[1];return r.a.createElement(h.Provider,{value:{lists:t,move:function(e,n,a,r){i(Object(x.a)(t,(function(t){var i=t[e].cards[a];t[e].cards.splice(a,1),t[n].cards.splice(r,0,i)})))}}},r.a.createElement(D,null,t.map((function(e,n){return r.a.createElement(z,{key:e.title,index:n,data:e})}))))}var F=function(){return r.a.createElement(c.a,{backend:l.a},r.a.createElement(m,null),r.a.createElement(N,null),r.a.createElement(u,null))};o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1a36ea5f.chunk.js.map