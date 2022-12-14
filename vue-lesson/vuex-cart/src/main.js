import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

Vue.filter('formatNum', (value) => {
  // console.log(value)
  return value.toFixed(2)
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
