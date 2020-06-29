<template>
  <div class="categoria">
    <p>Categoria / {{categoria.descricao}}</p>

    <div class="tags">
      <router-link
        :to="route(subcat.id)"
        v-for="subcat in subCategorias"
        :key="subcat.id"
        class="tag"
        tag="p"
      >{{subcat.descricao}}</router-link>
    </div>

    <p>{{produtos.length}}</p>
    <p>{{total | numeroPreco}}</p>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { produtoServices } from "../../services/produtoServices";
import { subCategoriaServices } from "../../services/subCategoriaServices";
import { categoriaServices } from "../../services/categoriaServices";
export default {
  created() {
    let id = window.location.pathname.split("/")[3];
    this.categoria = categoriaServices.pegaCategoriaPorId(id);
    this.subCategorias = subCategoriaServices.pegaSubCategoriasPorCategoriaId(
      this.categoria.id
    );
    this.produtos = produtoServices.pegaProdutosPorCategoriaId(
      this.categoria.id
    );

    this.total = produtoServices.precoTotal(this.produtos);
    console.log(this.subCategorias);
  },
  data() {
    return {
      categoria: {},
      subCategorias: [],
      produtos: [],
      total: 0
    };
  },
  methods: {
    route(id) {
      return "sub-categoria/" + id;
    }
  },
  computed: {}
};
</script>

<style scoped>
.categoria {
  height: 100vh;
}

p {
  text-align: start;
  color: black;
}

.tags {
  display: flex;
  padding: 0 15px;
}
</style>