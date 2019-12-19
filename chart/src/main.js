import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/font.css"
import "@/assets/css/reset-mobile.css"
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
