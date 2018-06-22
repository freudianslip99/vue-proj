<template>
<div>
<v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Neutron Scattering Plots Emporium</v-toolbar-title>
</v-toolbar>

  <div id="app">
    <Goals />
    <Graph />    
    <Tools />
  </div>
  </div>
</template>

<script>
import Goals from "./components/Goals.vue";
import Graph from "./components/Graph.vue";
import Tools from "./components/Tools.vue";

export default {
  name: "app",
  components: {
    Goals,
    Graph,
    Tools
  }
};
</script>

<style>
</style>
