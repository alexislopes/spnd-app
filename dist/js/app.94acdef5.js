(function(e){function t(t){for(var r,n,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,n=1;n<s.length;n++){var o=s[n];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=s[0]))}return e}var r={},n={app:0},i={app:0},a=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"99abd140","chunk-2cae7527":"5a7f6159"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"chunk-2cae7527":1};n[e]?t.push(n[e]):0!==n[e]&&s[e]&&t.push(n[e]=new Promise((function(t,s){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2cae7527":"704212f3"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===i))return t()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],d=u.getAttribute("data-href");if(d===r||d===i)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete n[e],l.parentNode.removeChild(l),s(a)},l.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){n[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,s){r=i[e]=[t,s]}));t.push(r[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var p=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var s=i[e];if(0!==s){if(s){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",p.name="ChunkLoadError",p.type=r,p.request=n,s[1](p)}i[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(s,r,function(t){return e[t]}.bind(null,r));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=d;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("85ec"),n=s.n(r);n.a},"3b63":function(e,t,s){s("d81d"),s("96cf");var r=s("c973"),n={suspeitos:function(e){return r(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.map((function(e){return[e.timestamp,e.casos_suspeitos]}));case 2:return s=t.sent,t.next=5,s.sort((function(e,t){return e[0]>t[0]?1:-1}));case 5:return s=t.sent,t.abrupt("return",{chart:{type:"spline"},title:{text:""},yAxis:{visible:!1},xAxis:{visible:!1,type:"datetime"},legend:{enabled:!1},credits:{enabled:!1},tooltip:{xDateFormat:"%d/%m/%Y",shared:!0},series:[{name:"Casos",data:s}]});case 7:case"end":return t.stop()}}),t)})))()},positivos:function(e){return r(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.map((function(e){return[e.timestamp,e.casos_positivos]}));case 2:return s=t.sent,t.next=5,s.sort((function(e,t){return e[0]>t[0]?1:-1}));case 5:return s=t.sent,t.abrupt("return",{chart:{type:"spline"},title:{text:""},yAxis:{visible:!1},xAxis:{visible:!1,type:"datetime"},legend:{enabled:!1},credits:{enabled:!1},tooltip:{xDateFormat:"%d/%m/%Y",shared:!0},series:[{name:"Casos",data:s}]});case 7:case"end":return t.stop()}}),t)})))()},obitos:function(e){return r(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.map((function(e){return[e.timestamp,e.obitos_positivos]}));case 2:return s=t.sent,t.next=5,s.sort((function(e,t){return e[0]>t[0]?1:-1}));case 5:return s=t.sent,t.abrupt("return",{chart:{type:"spline"},title:{text:""},yAxis:{visible:!1},xAxis:{visible:!1,type:"datetime"},legend:{enabled:!1},credits:{enabled:!1},tooltip:{xDateFormat:"%d/%m/%Y",shared:!0},series:[{name:"Casos",data:s}]});case 7:case"end":return t.stop()}}),t)})))()},recuperados:function(e){return r(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.map((function(e){return[e.timestamp,e.casos_recuperados]}));case 2:return s=t.sent,t.next=5,s.sort((function(e,t){return e[0]>t[0]?1:-1}));case 5:return s=t.sent,t.abrupt("return",{chart:{type:"spline"},title:{text:""},yAxis:{visible:!1},xAxis:{visible:!1,type:"datetime"},legend:{enabled:!1},credits:{enabled:!1},tooltip:{xDateFormat:"%d/%m/%Y",shared:!0},series:[{name:"Casos",data:s}]});case 7:case"end":return t.stop()}}),t)})))()},chartOptions:function(e){return r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,{chart:{type:"spline"},title:{text:""},yAxis:{visible:!1},xAxis:{visible:!1,type:"datetime"},legend:{enabled:!1},credits:{enabled:!1},tooltip:{xDateFormat:"%d/%m/%Y",shared:!0},series:[{name:"Casos",data:e}]};case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}};e.exports={config:n}},"56d7":function(e,t,s){"use strict";s.r(t);s("99af"),s("4de4"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),s("router-link",{attrs:{to:"/informe"}},[e._v("Administrador")])],1),s("router-view")],1)},i=[],a=(s("034f"),s("2877")),o={},c=Object(a["a"])(o,n,i,!1,null,null,null),u=c.exports,d=(s("d3b7"),s("8c4f")),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div"),null!=e.informe?s("div",{staticClass:"dashboard"},[s("h1",{staticClass:"title"},[e._v("Informe Coronavirus São José dos Campos")]),s("h1",[e._v(e._s(e._f("formatData")(e.informe[0].timestamp)))]),s("div",{staticClass:"dados-totais"},[s("div",{staticClass:"card"},[s("p",{staticClass:"card-title"},[e._v("Suspeitos")]),s("div",{staticClass:"dados"},[s("p",{staticClass:"dado"},[e._v(e._s(e.informe[0].casos_suspeitos))]),s("p",{staticClass:"diferenca"},[e._v(" "+e._s(e.modulate(e.diferencaSuspeitos))+" "),e.isPositive(e.diferencaSuspeitos)?s("i",{staticClass:"fas fa-sort-up ruim"}):""===e.isPositive(e.diferencaSuspeitos)?s("i",{staticClass:"far fa-window-minimize"}):s("i",{staticClass:"fas fa-sort-down bom"})])]),null!=e.suspeitos?s("highcharts",{staticClass:"chart",attrs:{options:e.suspeitos}}):e._e(),s("div",{staticClass:"porcentagens"},[s("p",{staticClass:"dado"},[e._v(e._s(e.populacao.toFixed(2))+"%")]),e._m(0)])],1),s("div",{staticClass:"card"},[s("p",{staticClass:"card-title"},[e._v("Positivos")]),s("div",{staticClass:"dados"},[s("p",{staticClass:"dado"},[e._v(e._s(e.informe[0].casos_positivos))]),s("p",{staticClass:"diferenca"},[e._v(" "+e._s(e.modulate(e.diferencaPositivos))+" "),e.isPositive(e.diferencaPositivos)?s("i",{staticClass:"fas fa-sort-up ruim"}):""===e.isPositive(e.diferencaPositivos)?s("i",{staticClass:"far fa-window-minimize"}):s("i",{staticClass:"fas fa-sort-down bom"})])]),null!=e.positivos?s("highcharts",{staticClass:"chart",attrs:{options:e.positivos}}):e._e(),s("div",{staticClass:"porcentagens"},[s("p",{staticClass:"dado"},[e._v(e._s(e.perPositivos.toFixed(2))+"%")]),s("p",{staticClass:"exp"},[e._v("da quantidade de Suspeitos.")])])],1),s("div",{staticClass:"card"},[s("p",{staticClass:"card-title"},[e._v("Óbitos")]),s("div",{staticClass:"dados"},[s("p",{staticClass:"dado"},[e._v(e._s(e.informe[0].obitos_positivos))]),s("p",{staticClass:"diferenca"},[e._v(" "+e._s(e.modulate(e.diferencaObitos))+" "),e.isPositive(e.diferencaObitos)?s("i",{staticClass:"fas fa-sort-up ruim"}):""===e.isPositive(e.diferencaObitos)?s("i",{staticClass:"far fa-window-minimize"}):s("i",{staticClass:"fas fa-sort-down bom"})])]),null!=e.obitos?s("highcharts",{staticClass:"chart",attrs:{options:e.obitos}}):e._e(),s("div",{staticClass:"porcentagens"},[s("p",{staticClass:"dado"},[e._v(e._s(e.perObitos.toFixed(2))+"%")]),s("p",{staticClass:"exp"},[e._v("da quantidade de Positivos.")])])],1),s("div",{staticClass:"card"},[s("p",{staticClass:"card-title"},[e._v("Recuperados")]),s("div",{staticClass:"dados"},[s("p",{staticClass:"dado"},[e._v(e._s(e.informe[0].casos_recuperados))]),s("p",{staticClass:"diferenca"},[e._v(" "+e._s(e.modulate(e.diferencaRecuperados))+" "),e.isPositive(e.diferencaRecuperados)?s("i",{staticClass:"fas fa-sort-up"}):""===e.isPositive(e.diferencaRecuperados)?s("i",{staticClass:"far fa-window-minimize"}):s("i",{staticClass:"fas fa-sort-down"})])]),null!=e.recuperados?s("highcharts",{staticClass:"chart",attrs:{options:e.recuperados}}):e._e(),s("div",{staticClass:"porcentagens"},[s("p",{staticClass:"dado"},[e._v(e._s(e.perRecuperados.toFixed(2))+"%")]),s("p",{staticClass:"exp"},[e._v("da quantidade de Positivos.")])])],1)]),e._m(1)]):e._e(),s("div")])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"exp"},[s("a",{attrs:{target:"_blank",href:"https://cidades.ibge.gov.br/brasil/sp/sao-jose-dos-campos/panorama"}},[e._v("da população estimada de São José dos Campos.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("p",{staticClass:"fonte"},[e._v(" Fonte: "),s("a",{attrs:{href:"https://www.sjc.sp.gov.br/servicos/saude/coronavirus/informe-epidemiologico/",target:"_blank"}},[e._v("Prefeitura de São José dos Campos")])]),s("p",{staticClass:"credits"},[e._v(" Developed with "),s("i",{staticClass:"fas fa-heart"}),e._v(" by "),s("a",{attrs:{href:"https://linktr.ee/alexislopes",target:"_blank"}},[e._v("Alexis Lopes")])])])}],f=(s("96cf"),s("1da1")),m=s("bc3a"),v=s.n(m),h=s("4452"),b=s.n(h),g=s("3b63"),_={name:"Home",data:function(){return{informes:[],informe:null,suspeitos:null,positivos:null,obitos:null,recuperados:null}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://covid19-sjc-api.herokuapp.com/informe");case 2:return s=t.sent,r=s.data.informes,e.informes=r,e.informe=[r[0],r[1]],t.next=8,g["config"].suspeitos(e.informes);case 8:return e.suspeitos=t.sent,t.next=11,g["config"].positivos(e.informes);case 11:return e.positivos=t.sent,t.next=14,g["config"].obitos(e.informes);case 14:return e.obitos=t.sent,t.next=17,g["config"].recuperados(e.informes);case 17:e.recuperados=t.sent;case 18:case"end":return t.stop()}}),t)})))()},methods:{isPositive:function(e){return e>0||0===e&&""},modulate:function(e){return e<0?-1*e:e},chartConfig:function(e){return{chart:{type:"spline"},title:{text:""},yAxis:{visible:!1},xAxis:{visible:!1,type:"datetime"},legend:{enabled:!1},credits:{enabled:!1},tooltip:{xDateFormat:"%d/%m/%Y",shared:!0},series:[{name:"Casos",data:e}]}},sortedInformes:function(){return this.informes.sort((function(e,t){return e.timestamp>t.timestamp?1:-1}))},stockSuspeitos:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["config"].suspeitos(e.informes);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},stockPositivos:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["config"].positivos(e.informes);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},stockObitos:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["config"].obitos(e.informes);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},stockRecuperados:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["config"].recuperados(e.informes);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},computed:{percent:function(){var e=100;return this.informe.casos_positivos*e/this.informe.casos_suspeitos},diferencaRecuperados:function(){return this.informe[0].casos_recuperados-this.informe[1].casos_recuperados},diferencaPositivos:function(){return this.informe[0].casos_positivos-this.informe[1].casos_positivos},diferencaSuspeitos:function(){return this.informe[0].casos_suspeitos-this.informe[1].casos_suspeitos},diferencaObitos:function(){return this.informe[0].obitos_positivos-this.informe[1].obitos_positivos},populacao:function(){var e=721944;return this.informe[0].casos_suspeitos/e*100},perPositivos:function(){return this.informe[0].casos_positivos/this.informe[0].casos_suspeitos*100},perObitos:function(){return this.informe[0].obitos_positivos/this.informe[0].casos_positivos*100},perRecuperados:function(){return this.informe[0].casos_recuperados/this.informe[0].casos_positivos*100}},components:{highcharts:h["Chart"]}},x=_,C=(s("887a"),Object(a["a"])(x,p,l,!1,null,"0a96d47a",null)),w=C.exports;r["a"].use(d["a"]);var y=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/informe",name:"Informe",component:function(){return s.e("chunk-2cae7527").then(s.bind(null,"bad3"))}}],k=new d["a"]({mode:"history",base:"/",routes:y}),P=k,O=s("2f62");r["a"].use(O["a"]);var R=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=s("9483");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].filter("formatData",(function(e){var t=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],s=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],r=new Date(e);return"".concat(r.getDate()," ").concat(t[r.getMonth()]," ").concat(r.getFullYear(),", ").concat(s[r.getDay()]," ")})),r["a"].use(b.a),new r["a"]({router:P,store:R,render:function(e){return e(u)}}).$mount("#app")},6208:function(e,t,s){},"85ec":function(e,t,s){},"887a":function(e,t,s){"use strict";var r=s("6208"),n=s.n(r);n.a}});
//# sourceMappingURL=app.94acdef5.js.map