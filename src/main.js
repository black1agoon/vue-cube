import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
/* eslint-disable no-unused-vars */
import { Style, ScrollNavBar } from 'cube-ui'
Vue.config.productionTip = false
Vue.use(ScrollNavBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
