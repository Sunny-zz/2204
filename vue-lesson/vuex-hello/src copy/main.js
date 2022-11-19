import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')



// vuex 
// 创建
// store    new Vuex.Store({})   main.js 

// state, mutation, action  getters

// this.$store.get

