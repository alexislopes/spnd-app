<template>
  <div class="produtos">
    <div></div>
    <div class="content">
      <p>{{cupons.length}} Cupons</p>
      <div class="produto-item" v-for="cupon in cupons" :key="cupon.id">
        <input :value="cupon.data" type="text" />
        <input :value="cupon.emitente" type="text" />
        <input :value="cupon.chave" type="text" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {},
  computed: mapState(["cupons"])
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