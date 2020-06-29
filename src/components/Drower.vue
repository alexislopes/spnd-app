<template>
  <div class="drower">
    <categoria-form v-if="escopo === 'categoria'" />
  </div>
</template>

<script>
export default {
  props: ["escopo"],
  components: {
    CategoriaForm: () => import("./CategoriaForm")
  }
};
</script>

<style scoped>
.drower {
  position: absolute;
  z-index: 1000;
  float: right;
  height: 100%;
  width: 20%;
  border: solid red 1px;
}
</style>