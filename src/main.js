import Vue from 'vue'
import App from './App.vue'

import '@/main.scss'

import 'typeface-inter'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
