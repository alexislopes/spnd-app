import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import HighchartsVue from "highcharts-vue";

Vue.config.productionTip = false;

Vue.filter("numeroPreco", (valor) => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return "";
  }
});

Vue.filter("formatData", (timestamp) => {
  let months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  let data = new Date(timestamp);
  return `${data.getDate()} ${months[data.getMonth()]} ${data.getFullYear()} `;
});

Vue.use(HighchartsVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
