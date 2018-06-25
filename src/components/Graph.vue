<template>

</template>

<script>
  created() {
    eventBus.$on('Toolssaid', (message) => {
      this.fromTools = message
    }),
  

  data() 
    return {
      thecardtitle: 'Child Component!',
      fromsister: '',
      
    }
  }
</script>

<style>
</style>