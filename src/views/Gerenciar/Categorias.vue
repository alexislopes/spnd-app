<template>
  <div class="categorias">
    <div class="content">
      <div class="ui black">
        <button @click="showModal" class="button black">Criar</button>
      </div>

      <div class="tags">
        <router-link
          :to="route(categoria.id)"
          v-for="categoria in categorias"
          :key="categoria.id"
          class="tag"
          tag="p"
        >
          {{categoria.descricao}}
          <!-- {{contaCategorias(categoria.id)}} -->
        </router-link>
      </div>

      <modal v-show="show" @close="closeModal">
        <categoria-adicionar @close="closeModal">
          <div class="ui classic">
            <button @click="closeModal" class="button classic">Esquece!</button>
          </div>
        </categoria-adicionar>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from "../../components/Modal";
import CategoriaAdicionar from "../../components/CategoriaAdicionar";
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    },
    contaCategorias(id) {
      let count = this.produtoCategorias.filter(
        prodcat => prodcat.categoria_id === id
      );

      return count.length;
    },
    route(id) {
      return "categoria/" + id;
    }
  },
  computed: {
    ...mapState(["categorias", "produtoCategorias"])
  },
  components: {
    Modal,
    CategoriaAdicionar
  }
};
</script>