<template>
  <div class="form">
    <div class="ui input">
      <input v-model="cat" type="text" />
    </div>
    <button @click="pushCategoria(categoria)" class="ui blue button">
      Criar
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Categoria from "../models/Categoria";
export default {
  data() {
    return {
      cat: "",
    };
  },
  methods: {
    ...mapActions(["pushCategoria"]),
  },
  computed: {
    categoria() {
      return new Categoria({ descricao: this.cat });
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
}
</style>
