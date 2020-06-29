import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const initState = () => {
  return {
    produtos: [],
    cupons: [],
    categorias: [],
    subCategorias: [],
    produtoCategorias: [],
    cupomCategorias: [],
  };
};

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "SPEND",
  storage: localStorage,
});

export default new Vuex.Store({
  strict: true,
  plugins: [vuexPersist.plugin],
  state: initState(),
  mutations: {
    PUSH_CATEGORIA(state, payload) {
      state.categorias.push(payload);
    },
    PUSH_SUBCATEGORIA(state, payload) {
      state.subCategorias.push(payload);
    },
    UPDATE_PRODUTOS(state, payload) {
      state.produtos = payload;
    },
    CONCAT_PRODUTOS(state, payload) {
      payload.forEach((produto) => {
        state.produtos.push(produto);
      });
    },
    CONCAT_CUPONS(state, payload) {
      payload.forEach((cupom) => {
        state.cupons.push(cupom);
      });
    },
    PUSH_PRODUTOCATEGORIA(state, payload) {
      payload.forEach((prodcat) => {
        state.produtoCategorias.push(prodcat);
      });
    },
  },
  actions: {
    pushCategoria(context, payload) {
      context.commit("PUSH_CATEGORIA", payload);
    },
    pushSubCategoria(context, payload) {
      context.commit("PUSH_SUBCATEGORIA", payload);
    },
    concatProdutos(context, payload) {
      context.commit("CONCAT_PRODUTOS", payload);
    },
    concatCupons(context, payload) {
      context.commit("CONCAT_CUPONS", payload);
    },
    pushProdutosCategoria(context, payload) {
      context.commit("PUSH_PRODUTOCATEGORIA", payload);
    },
  },
  modules: {},
});
