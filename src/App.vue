<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <product-list-one />
    <product-list-two />
  </div>
</template>

<script>
import ProductListTwo from "./components/ProductListTwo.vue";
import ProductListOne from "./components/ProductListOne.vue";
export default {
  name: "App",
  components: { ProductListTwo, ProductListOne },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
