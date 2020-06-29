<template>
  <div class="header">
    <h1>SPND</h1>

    <div class="menu">
      <router-link to="/importar" tag="a">Importar</router-link>
      <router-link to="/home" tag="a">Overview</router-link>
      <router-link to="/categorizar" tag="a">Categorizar</router-link>
      <router-link to="/gerenciar" tag="a">Gerenciar</router-link>
      <router-link to="/planejar" tag="a">Planejar</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header h1 {
  color: white;
  font-size: 35px;
  /* margin-top: 8rem; */
  margin: 0;
  letter-spacing: 0.6rem;
  padding-top: 8rem;
}

.header {
  background-color: black;
  height: 100%;
}

.menu {
  display: flex;
  flex-direction: column;
}

a {
  font-family: "Play", sans-serif;
  text-align: start;
  margin: 0.8rem 3rem;
  font-size: 25px;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 60px;
}

a:hover {
  background-color: rgba(204, 204, 204, 0.411);
}
</style>