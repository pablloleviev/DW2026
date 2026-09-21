<template>
  <div>
    <HomeComponent />
    <UsuarioComponent />
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";
import UsuarioComponent from "./components/UsuarioComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
    UsuarioComponent,
  },
  mounted() {
    console.log("Minha Aplicação criou minha tela e todos os elemetos do DOM");
  },
  created() {
    console.log("Minha aplicação criou meus Objetos JS");
  },
  errorCaptured() {
    alert("Erro!!!");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>