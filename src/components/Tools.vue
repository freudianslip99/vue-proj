<template>
  <div class="tools">
    <div class="holder">
      <ul>
        <li v-for="(data, index) in tools" :key='index'>{{index}}>{{data.tool}}</li>
      </ul>
    </div>  
    
  </div>
</template>

<script>
export default {
  name: "tools",
  data() {
    return {
      tools: [
        { "tool": "Vue.js" }, 
        { "tool": "Frontend Developer" }
      ]
    };
  }
};
</script>


<style scoped>
</style>