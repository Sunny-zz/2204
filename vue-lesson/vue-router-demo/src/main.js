import Vue from 'vue'
import App from './App.vue'
import './plugins/http'
import router from './router'
import './assets/style.css'
import './plugins/element'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// 路由导航守卫
// 1. 全局   用的最多
// 全局前置  用的最多

// 全局解析

// 全局后置

// 2. 组件内的

// 3. 路由独享