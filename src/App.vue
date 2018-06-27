<template>
<div>
<v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Neutron Scattering Plots Emporium</v-toolbar-title>
</v-toolbar>

  <div id="app">
    <Nav />
    <Graph />    
    <Tools />
  </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Graph from "./components/Graph.vue";
import Tools from "./components/Tools.vue";

export default {
  name: "app",
  components: {
    Nav,
    Graph,
    Tools
  }
};
</script>

<style>
</style>
