(this.webpackJsonpkantor=this.webpackJsonpkantor||[]).push([[0],{22:function(n,e,t){n.exports=t.p+"static/media/logo.5621c2a3.png"},32:function(n,e,t){n.exports=t(45)},37:function(n,e,t){},44:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(19),o=t.n(i),c=(t(37),t(8)),u=t(7),l=t(1),s=t(2);function d(){var n=Object(l.a)(["\n  display: block;\n  padding: 5px 10px;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-size: 1.5em;\n  padding: 0.2em;\n  margin-right: 3vw;\n  margin-top: 0.6em;\n  color: white;\n  border-bottom: 2.5px solid transparent;\n  &:hover {\n    animation: "," 0.2s linear forwards;\n  }\n  &.active {\n    animation: "," 0.2s linear forwards;\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(l.a)(["\n  from {\n  border-bottom: 2.5px solid transparent;\n  }\n\n  to {\n    border-bottom: 2.5px solid white;\n  }\n"]);return m=function(){return n},n}var f=Object(s.b)(m()),p=s.a.button(d(),f,f),b=t(22),h=t.n(b);function g(){var n=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n  padding-right: 4vw;\n  list-style: none;\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-end;\n"]);return g=function(){return n},n}function v(){var n=Object(l.a)(["\n  display: block;\n  width: 250px;\n  height: 10vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 110%;\n  margin: 1vh 50px;\n  border: none;\n"]);return v=function(){return n},n}function k(){var n=Object(l.a)(["\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  background-image: linear-gradient(to bottom right, #1169e1, #87ceeb);\n"]);return k=function(){return n},n}var w=s.a.div(k()),x=Object(s.a)(c.b)(v(),h.a),j=s.a.ul(g()),E=function(){return r.a.createElement(w,null,r.a.createElement(x,{to:"/"}),r.a.createElement(j,null,r.a.createElement("li",null,r.a.createElement(p,{exact:!0,as:c.b,to:"/"},"O stronie")),r.a.createElement("li",null,r.a.createElement(p,{as:c.b,to:"/check"},"kursy walut")),r.a.createElement("li",null,r.a.createElement(p,{as:c.b,to:"/convert"},"kalkulator"))))};function y(){var n=Object(l.a)(["\n  font-size: 1.1em;\n  text-align: center;\n  line-height: 1.5em;\n"]);return y=function(){return n},n}function O(){var n=Object(l.a)(["\n  z-index: 1;\n  position: relative;\n  width: 60%;\n  margin: 10vh auto;\n  text-align: center;\n"]);return O=function(){return n},n}function z(){var n=Object(l.a)(["\n  margin: auto auto;\n  margin-top: 5%;\n  padding: 2em;\n  width: 60%;\n  height: 70%;\n  /* background-color: rgba(17, 105, 225, 0.3); */\n  border-radius: 2em;\n"]);return z=function(){return n},n}var C=s.a.div(z()),D=s.a.h1(O()),A=s.a.p(y()),K=function(){return r.a.createElement(C,null,r.a.createElement(D,null,"Witam na mojej stronie"),r.a.createElement(A,null,"Klikaj\u0105c w zak\u0142adk\u0119 KURSY WALUT mo\u017cesz sprawdzi\u0107 aktualne kursy g\u0142\xf3wnych walut z aktualnymi danymi a klikaj\u0105c w KALKULATOR mo\u017cesz przeliczy\u0107 wybran\u0105 ilo\u015b\u0107 got\xf3wki na wybran\u0105 przez siebie walut\u0119."))};function M(){var n=Object(l.a)(["\n  margin: auto auto;\n  margin-top: 3.5%;\n  padding: 2em;\n  width: 80%;\n  height: 75%;\n  background-color: rgba(17, 105, 225, 0.3);\n  border-radius: 2em;\n"]);return M=function(){return n},n}var U=s.a.div(M()),P=function(){return r.a.createElement(U,null,r.a.createElement("h1",null,"kalkulator"))},S=t(17),B=t(25),L=t(26),N=t(28),F=t(27),J=t(31);function R(){var n=Object(l.a)(["\n  margin-top: 10%;\n  font-weight: bold;\n"]);return R=function(){return n},n}function H(){var n=Object(l.a)([""]);return H=function(){return n},n}function T(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  border: 2px solid black;\n  border-radius: 10px;\n  padding: 1% 2%;\n  margin: 2%;\n  min-width: 5%;\n  background-image: linear-gradient(to bottom right, #1169e1, #87ceeb);\n  align-items: center;\n"]);return T=function(){return n},n}function W(){var n=Object(l.a)(["\n  width: 100%;\n  max-height: 100%;\n  background-color: rgba(232, 123, 123, 0.8);\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-content: center;\n"]);return W=function(){return n},n}var Y=s.a.div(W()),_=s.a.li(T()),G=s.a.h3(H()),I=s.a.p(R()),X=function(n){function e(){var n,t;Object(B.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(N.a)(this,(n=Object(F.a)(e)).call.apply(n,[this].concat(i)))).state={base:4.24,MainCurrencies:[]},t.updateMainCurrencies=function(){fetch("http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&symbols=EUR,USD,CZK,AUD,CAD,MXN,GBP,UAH,NOK,SEK,CHF,JPY&format=1").then((function(n){return n.json()})).then((function(n){t.handleData(n)})).catch((function(n){return console.log(n)}))},t.updateBaseCurrency=function(){fetch("http://data.fixer.io/api/latest?access_key=db627f33cf55c037a2f4c566d0d3b5cc&symbols=PLN&format=1").then((function(n){return n.json()})).then((function(n){var e=Object.entries(n.rates).map((function(n){var e=Object(S.a)(n,2);return{name:e[0],value:e[1]}}));t.setState({base:e[0].value})})).catch((function(n){return console.log(n)}))},t.positions="",t.handleData=function(n){var e=t.convertData(n);t.setState({MainCurrencies:e})},t.convertData=function(n){var e=n.rates;return Object.entries(e).map((function(n){var e=Object(S.a)(n,2),t=e[0];return{id:t,name:t,value:e[1]}}))},t.renderPositions=function(){t.positions=t.state.MainCurrencies.map((function(n){return r.a.createElement(_,{key:n.name},r.a.createElement(G,null,n.name),r.a.createElement(I,null,(n.value/t.state.base).toFixed(4)))}))},t}return Object(J.a)(e,n),Object(L.a)(e,[{key:"componentDidMount",value:function(){this.updateMainCurrencies(),this.updateBaseCurrency()}},{key:"render",value:function(){return this.renderPositions(),r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null,this.positions))}}]),e}(a.Component);function Z(){var n=Object(l.a)(["\n  /* display: flex; */\n  /* flex-wrap: wrap; */\n  margin: auto auto;\n  margin-top: 3.5%;\n  padding: 2em;\n  width: 80%;\n  max-height: 75%;\n  background-color: rgba(17, 105, 225, 0.3);\n  border-radius: 2em;\n"]);return Z=function(){return n},n}var q=s.a.div(Z()),Q=function(){return r.a.createElement(q,null,r.a.createElement(X,null))},V=(t(44),function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(c.a,null,r.a.createElement(E,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:K}),r.a.createElement(u.a,{path:"/convert",component:P}),r.a.createElement(u.a,{path:"/check",component:Q}))))});o.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d6129eac.chunk.js.map