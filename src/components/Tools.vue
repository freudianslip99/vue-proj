<template>
  <div v-if="fromGraph" class="mt-3 alert alert-secondary" v-html="fromGraph"></div>

</template>

<script>
 import {eventBus} from "../main";

 methods: {
    messageGraph() {
        eventBus.$emit('Toolssaid', 'Tools said do your homework!');
    
}
}
</script>


