import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export const eventBus = new Vue();

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
});
