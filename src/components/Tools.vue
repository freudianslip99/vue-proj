<template>
  <div>
        <div class="card m-2" style="width: 40rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <button @click="sendMessage" class="btn btn-info">Send Graph.vue A Message</button>
                <Graph :parentmessage="parentmessage"></Graph>
            </div>
        </div>
    </div>

</template>

<script>
import Graph from './Graph.vue';

export default{
  components: {Graph},

  data(){
    return{
      thecardtitle:'Tools.vue card title',
      parentmessage:"Tools.vue message prior to button click"
    }
  },

  methods: {
    sendMessage(){
      this.parentmessage = '<b>Message:</b> Graph reveal' 
    }
  }
};
</script>


