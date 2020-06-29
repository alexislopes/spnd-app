<template>
  <div class="categoria-adicionar">
    <div>
      <p>Adicione uma sub-categoria!</p>
      <input v-model="descricao" type="text" placeholder="Descrição" />
      <select v-model="id" name="categorias" id="categorias">
        <option
          v-for="categoria in categorias"
          :key="categoria.id"
          :value="categoria.id"
        >{{categoria.descricao}}</option>
      </select>
    </div>
    <div class="buttons">
      <div class="ui green">
        <button @click="salvar" class="button green">Salvar</button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import SubCategoria from "../models/SubCategoria";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      descricao: "",
      id: ""
    };
  },
  methods: {
    ...mapActions(["pushSubCategoria"]),
    salvar() {
      if (this.descricao != "" && this.id != "") {
        let subCategoria = new SubCategoria({
          descricao: this.descricao,
          fk_categoria: this.id
        });
        this.pushSubCategoria(subCategoria);
        this.descricao = "";
        this.id = "";
        this.$emit("close");
      }
    }
  },
  computed: {
    ...mapState(["categorias"])
  }
};
</script>

<style scoped>
.buttons {
  display: flex;
  margin-top: 25px;
}

p {
  text-align: start;
}

input {
  width: 90%;
}

.ui.green {
  margin-left: 0;
}

.categoria-adiconar {
  display: block;
  height: 100%;
  /* flex-direction: column; */
  justify-content: space-between;
}

div {
  width: auto;
}
</style>