<template>
    <div class="container">
         
      {{message}}
    
    </div>
</template>

<script>
import Goals from './Goals.vue'


export default {
  data() {
    return {
      message: "These are the goals of this project: "
    }
  },
  components: {
    Goals
  }
}

</script>

<style>
</style>