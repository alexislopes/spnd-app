import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

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
  let weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  let data = new Date(timestamp);
  return `${weekdays[data.getDay()]} ${data.getDate()} ${
    months[data.getMonth()]
  } ${data.getFullYear()}`;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
