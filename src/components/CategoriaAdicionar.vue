<template>
  <div class="categoria-adicionar">
    <div>
      <p>Adicione uma categoria!</p>
      <input v-model="descricao" type="text" placeholder="Descrição" />
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
import Categoria from "../models/Categoria";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      descricao: ""
    };
  },
  methods: {
    ...mapActions(["pushCategoria"]),
    salvar() {
      if (this.descricao != "") {
        let categoria = new Categoria({ descricao: this.descricao });
        this.pushCategoria(categoria);
        this.descricao = "";
        this.$emit("close");
      }
    }
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