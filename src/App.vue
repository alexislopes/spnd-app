<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/informe">Administrador</router-link>
    </div>-->
    <div class="header-grid">
      <Header />
    </div>
    <div class="content-grid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: { Header }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Play:wght@400;700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 0.7fr 3fr;
  height: 100vh;
}

.header-grid {
  /* position: fixed; */
  height: 100%;
}

.tags {
  padding: 0 9rem;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
}

#nav {
  padding: 30px;
  width: 100%;
}

h1,
h2 {
  font-family: "Audiowide", cursive;
  color: black;
}

h2 {
  font-size: 18px;
  color: rgb(138, 138, 138);
  margin-top: 10px;
}

h1 {
  font-size: 35px;
  margin-top: 5rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  font-family: "Play", sans-serif;
  font-size: 24px;
  margin: 20px;
}

.button {
  font-family: "Play", sans-serif;
  border: none;
  border-radius: 60px;
  padding: 5px 20px;
  cursor: pointer;
  width: auto;
}

.button.classic {
  background-color: #e5e5e5;
}

.button.black {
  color: white;
  background-color: black;
}

.button.red {
  color: white;
  background-color: #e65032;
}

.button.green {
  color: white;
  background-color: #8bed45;
}

.ui {
  margin: 5px;
}

.ui.classic {
  background-color: #a8a8a8;
}

.ui.black {
  background-color: #525252;
}

.ui.red {
  background-color: #691200;
}

.ui.green {
  background-color: #5e9e2f;
}

/*HOVER STUFF*/

.ui {
  position: relative;
  display: inline-block;
  background-color: #9147ff;
  border-radius: 60px;
}

.button {
  display: block;
  transform: translate(0, 0);
  transition: all 0.15s ease;
  position: relative;
  z-index: 10;
}

.ui:hover .button {
  transform: translate(2px, -2px);
}

.ui:hover:before {
  transform: rotate(-45deg) scale(1);
}

.ui:hover:after {
  transform: rotate(45deg) scale(1);
}

/************/

body {
  margin: 0;
}

input {
  font-family: "Play", sans-serif;
  border: none;
  padding: 0.8rem;
  font-size: 16px;
  background-color: #f2f2f2;
  border-radius: 5px;
  color: #757575;
}

.tag {
  font-size: 15px;
  width: auto;
  margin: 5px 3px;
  background-color: #ccc;
  text-align: start;
  padding: 10px 15px;
  border-radius: 60px;
  color: black;
  cursor: pointer;
}
</style>
