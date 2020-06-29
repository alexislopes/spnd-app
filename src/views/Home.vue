<template>
  <div class="home">
    <!-- <div class="nav">
      <h1>SPND</h1>

      <div class="menu">
        <router-link to="/importar" tag="a">Importar</router-link>
        <router-link to="/home" tag="a">Overview</router-link>
        <router-link to="/categorizar" tag="a">Categorizar</router-link>
        <router-link to="/gerenciar" tag="a">Gerenciar</router-link>
        <router-link to="/planejar" tag="a">Planejar</router-link>
      </div>
    </div>-->
    <div class="content">
      <!-- <router-view /> -->
    </div>
    <div class="complement"></div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.home {
  display: grid;
  /* grid-template-columns: 0.7fr 2fr 1fr;*/
  height: 100vh;
}

.nav {
  background-color: black;
}

.nav h1 {
  color: white;
  font-size: 35px;
  margin-top: 8rem;
  letter-spacing: 0.6rem;
}

.menu {
  display: flex;
  flex-direction: column;
}

h1 {
  font-family: "Audiowide", cursive;
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

.router-link-active {
  color: rgb(65, 65, 65);
}
</style>