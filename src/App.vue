<template>
  <div id="app">
    <Goals />
    <Graph />    
    <Skills />
    
  </div>
</template>

<script>

import Goals from './components/Goals.vue'
import Graph from './components/Graph.vue'
import Skills from './components/Skills.vue' 

export default {
  name: 'app',
  components: {
    Goals,
    Graph,
    Skills

  }
}

</script>

<style>


</style>
