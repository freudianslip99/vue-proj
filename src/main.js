import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});