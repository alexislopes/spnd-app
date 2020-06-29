<template>
  <div class="gerenciar">
    <div class="content">
      <h1>GERENCIAR</h1>
      <div class="nav">
        <router-link to="/gerenciar/produtos">Produtos</router-link>
        <router-link to="/gerenciar/cupons">Cupons</router-link>
        <router-link to="/gerenciar/categorias">Categorias</router-link>
        <router-link to="/gerenciar/sub-categorias">Sub Categorias</router-link>
      </div>
      <div class="corpo">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  components: {}
};
</script>

<style scoped>
a {
  font-family: "Play", sans-serif;
  font-size: 20px;
  margin: 20px;
  color: black;
  text-decoration: none;
}

.nav {
  margin: 20px;
}
.corpo {
  width: 100%;
  height: 100%;
}
</style>