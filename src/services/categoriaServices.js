import store from "../store";

// const produtos = store.state.produtos;
// const produtoCategorias = store.state.produtoCategorias;
const categorias = store.state.categorias;

export const categoriaServices = {
  pegaTodos() {
    return categorias;
  },
  pegaCategoriaPorId(id) {
    return categorias.find((categoria) => categoria.id === id);
  },
};
