import store from "../store";

const subCategorias = store.state.subCategorias;

export const subCategoriaServices = {
  pegaSubCategoriasPorCategoriaId(id) {
    return subCategorias.filter((subcat) => subcat.fk_categoria === id);
  },
};
