(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cae7527"],{"3b8c":function(i,s,e){},5899:function(i,s){i.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(i,s,e){var o=e("1d80"),t=e("5899"),a="["+t+"]",r=RegExp("^"+a+a+"*"),n=RegExp(a+a+"*$"),u=function(i){return function(s){var e=String(o(s));return 1&i&&(e=e.replace(r,"")),2&i&&(e=e.replace(n,"")),e}};i.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(i,s,e){var o=e("861d"),t=e("d2bb");i.exports=function(i,s,e){var a,r;return t&&"function"==typeof(a=s.constructor)&&a!==e&&o(r=a.prototype)&&r!==e.prototype&&t(i,r),i}},a9e3:function(i,s,e){"use strict";var o=e("83ab"),t=e("da84"),a=e("94ca"),r=e("6eeb"),n=e("5135"),u=e("c6b6"),p=e("7156"),m=e("c04e"),v=e("d039"),c=e("7c73"),l=e("241c").f,f=e("06cf").f,_=e("9bf2").f,d=e("58a8").trim,b="Number",g=t[b],N=g.prototype,h=u(c(N))==b,C=function(i){var s,e,o,t,a,r,n,u,p=m(i,!1);if("string"==typeof p&&p.length>2)if(p=d(p),s=p.charCodeAt(0),43===s||45===s){if(e=p.charCodeAt(2),88===e||120===e)return NaN}else if(48===s){switch(p.charCodeAt(1)){case 66:case 98:o=2,t=49;break;case 79:case 111:o=8,t=55;break;default:return+p}for(a=p.slice(2),r=a.length,n=0;n<r;n++)if(u=a.charCodeAt(n),u<48||u>t)return NaN;return parseInt(a,o)}return+p};if(a(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var P,w=function(i){var s=arguments.length<1?0:i,e=this;return e instanceof w&&(h?v((function(){N.valueOf.call(e)})):u(e)!=b)?p(new g(C(s)),e,w):C(s)},x=o?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;x.length>I;I++)n(g,P=x[I])&&!n(w,P)&&_(w,P,f(g,P));w.prototype=N,N.constructor=w,r(t,b,w)}},b9b7:function(i,s,e){"use strict";var o=e("3b8c"),t=e.n(o);t.a},bad3:function(i,s,e){"use strict";e.r(s);var o=function(){var i=this,s=i.$createElement,e=i._self._c||s;return e("div",{staticClass:"fragment"},[e("div",{staticClass:"agreggate"},[e("div",{staticClass:"tile"},[e("h5",[i._v("Casos Suspeitos")]),e("p",[i._v(i._s(i.casosSuspeitos))])]),e("div",{staticClass:"tile"},[e("h5",[i._v("Casos Positivos")]),e("p",[i._v(i._s(i.casosPositivos))])]),e("div",{staticClass:"tile"},[e("h5",[i._v("Positivos Hospital")]),e("p",[i._v(i._s(i.positivosHospital))])]),e("div",{staticClass:"tile"},[e("h5",[i._v("Suspeitos Hospital")]),e("p",[i._v(i._s(i.suspeitosHospital))])])]),e("div",[e("div",{staticClass:"ui input"},[e("label",[i._v("Data")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.timestamp,expression:"informe.timestamp"}],attrs:{type:"number"},domProps:{value:i.informe.timestamp},on:{input:function(s){s.target.composing||i.$set(i.informe,"timestamp",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Óbitos Suspeitos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.obitos_suspeitos,expression:"informe.obitos_suspeitos"}],attrs:{type:"number"},domProps:{value:i.informe.obitos_suspeitos},on:{input:function(s){s.target.composing||i.$set(i.informe,"obitos_suspeitos",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Óbitos Positivos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.obitos_positivos,expression:"informe.obitos_positivos"}],attrs:{type:"number"},domProps:{value:i.informe.obitos_positivos},on:{input:function(s){s.target.composing||i.$set(i.informe,"obitos_positivos",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Óbitos Descartados")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.obitos_descartados,expression:"informe.obitos_descartados"}],attrs:{type:"number"},domProps:{value:i.informe.obitos_descartados},on:{input:function(s){s.target.composing||i.$set(i.informe,"obitos_descartados",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Recuperados")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.casos_recuperados,expression:"informe.casos_recuperados"}],attrs:{type:"number"},domProps:{value:i.informe.casos_recuperados},on:{input:function(s){s.target.composing||i.$set(i.informe,"casos_recuperados",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Positivos em Casa")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.positivo_casa,expression:"informe.positivo_casa"}],attrs:{type:"number"},domProps:{value:i.informe.positivo_casa},on:{input:function(s){s.target.composing||i.$set(i.informe,"positivo_casa",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Suspeitos em Casa")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.suspeitos_casa,expression:"informe.suspeitos_casa"}],attrs:{type:"number"},domProps:{value:i.informe.suspeitos_casa},on:{input:function(s){s.target.composing||i.$set(i.informe,"suspeitos_casa",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Positivos nas Enfermarias de Hospitais Públicos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.positivo_publico_enfermaria,expression:"informe.positivo_publico_enfermaria"}],attrs:{type:"number"},domProps:{value:i.informe.positivo_publico_enfermaria},on:{input:function(s){s.target.composing||i.$set(i.informe,"positivo_publico_enfermaria",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Positivos nas UTIs de Hospitais Públicos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.positivo_publico_uti,expression:"informe.positivo_publico_uti"}],attrs:{type:"number"},domProps:{value:i.informe.positivo_publico_uti},on:{input:function(s){s.target.composing||i.$set(i.informe,"positivo_publico_uti",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Positivos nas Enfermarias de Hospitais Privados")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.positivo_privado_enfermaria,expression:"informe.positivo_privado_enfermaria"}],attrs:{type:"number"},domProps:{value:i.informe.positivo_privado_enfermaria},on:{input:function(s){s.target.composing||i.$set(i.informe,"positivo_privado_enfermaria",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Positivos nas UTIs de Hospitais Privados")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.positivo_privado_uti,expression:"informe.positivo_privado_uti"}],attrs:{type:"number"},domProps:{value:i.informe.positivo_privado_uti},on:{input:function(s){s.target.composing||i.$set(i.informe,"positivo_privado_uti",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Suspeitos nas Enfermarias de Hospitais Públicos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.suspeito_publico_enfermaria,expression:"informe.suspeito_publico_enfermaria"}],attrs:{type:"number"},domProps:{value:i.informe.suspeito_publico_enfermaria},on:{input:function(s){s.target.composing||i.$set(i.informe,"suspeito_publico_enfermaria",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Suspeitos nas UTIs de Hospitais Públicos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.suspeito_publico_uti,expression:"informe.suspeito_publico_uti"}],attrs:{type:"number"},domProps:{value:i.informe.suspeito_publico_uti},on:{input:function(s){s.target.composing||i.$set(i.informe,"suspeito_publico_uti",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Suspeitos nas Enfermarias de Hospitais Privados")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.suspeito_privado_enfermaria,expression:"informe.suspeito_privado_enfermaria"}],attrs:{type:"number"},domProps:{value:i.informe.suspeito_privado_enfermaria},on:{input:function(s){s.target.composing||i.$set(i.informe,"suspeito_privado_enfermaria",s.target.value)}}})]),e("div",{staticClass:"ui input"},[e("label",[i._v("Casos Suspeitos nas UTIs de Hospitais Privados")]),e("input",{directives:[{name:"model",rawName:"v-model",value:i.informe.suspeito_privado_uti,expression:"informe.suspeito_privado_uti"}],attrs:{type:"number"},domProps:{value:i.informe.suspeito_privado_uti},on:{input:function(s){s.target.composing||i.$set(i.informe,"suspeito_privado_uti",s.target.value)}}})])]),e("div",[e("button",{staticClass:"ui green button",attrs:{id:"salvar"},on:{click:i.salvar}},[i._v("Salvar Informe")])])])},t=[],a=(e("a9e3"),e("96cf"),e("1da1")),r=e("bc3a"),n=e.n(r),u={data:function(){return{informe:{timestamp:(new Date).getTime(),casos_suspeitos:0,obitos_suspeitos:0,casos_positivos:0,obitos_positivos:0,obitos_descartados:0,casos_recuperados:0,positivo_casa:0,positivo_hospital:0,suspeitos_casa:0,suspeitos_hospital:0,positivo_publico_enfermaria:0,positivo_publico_uti:0,positivo_privado_enfermaria:0,positivo_privado_uti:0,suspeito_publico_enfermaria:0,suspeito_publico_uti:0,suspeito_privado_enfermaria:0,suspeito_privado_uti:0}}},computed:{casosSuspeitos:function(){return Number(this.informe.obitos_suspeitos)+Number(this.informe.suspeitos_casa)+this.suspeitosHospital},positivosHospital:function(){return Number(this.informe.positivo_privado_uti)+Number(this.informe.positivo_publico_enfermaria)+Number(this.informe.positivo_privado_enfermaria)+Number(this.informe.positivo_publico_uti)},suspeitosHospital:function(){return Number(this.informe.suspeito_publico_enfermaria)+Number(this.informe.suspeito_publico_uti)+Number(this.informe.suspeito_privado_enfermaria)+Number(this.informe.suspeito_privado_uti)},casosPositivos:function(){return Number(this.informe.positivo_casa)+Number(this.informe.obitos_positivos)+this.positivosHospital+Number(this.informe.casos_recuperados)}},methods:{salvar:function(){var i=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return document.querySelector("#salvar").classList.add("loading"),i.informe.casos_suspeitos=i.casosSuspeitos,i.informe.casos_positivos=i.casosPositivos,i.informe.positivo_hospital=i.positivosHospital,i.informe.suspeitos_hospital=i.suspeitosHospital,console.log(i.informe),s.next=8,n.a.post("https://covid19-sjc-api.herokuapp.com/informe",i.informe);case 8:e=s.sent,201===e.status&&document.querySelector("#salvar").classList.remove("loading");case 10:case"end":return s.stop()}}),s)})))()}}},p=u,m=(e("b9b7"),e("2877")),v=Object(m["a"])(p,o,t,!1,null,"2ff02511",null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2cae7527.5a7f6159.js.map