import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
Vue.config.productionTip = false

// 全局过滤器
Vue.filter('formatNum', (number, a) => {
  console.log(a)
  return number.toFixed(2)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
