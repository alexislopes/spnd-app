<template>
  <div class="produtos">
    <div></div>
    <div class="content">
      <p>{{produtos.length}} Produtos</p>
      <div class="produto-item" v-for="produto in produtos" :key="produto.id">
        <input :value="produto.descricao" type="text" />
        <input :value="produto.data" type="text" />
        <input :value="produto.quantidade" type="text" />
        <input :value="produto.valorUnitario" type="text" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {},
  computed: mapState(["produtos"])
};
</script>

<style scoped>
.produtos {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
}

.produto-item {
  display: flex;
  flex-direction: row;
}

input {
  border: none;
  text-align: center;
}
</style>