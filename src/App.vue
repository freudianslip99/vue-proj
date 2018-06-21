<template>
  <div id="app">
    <Goals />
    <Graph />    
    <Tools />
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
