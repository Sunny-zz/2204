import Vue from 'vue'
import App from './App.vue'
// 相当于初始化样式
import './assets/style.css'

Vue.config.productionTip = false

// 将 app 组件编译成 html 挂载到 #app(页面中有个 div id 是 app) 上
new Vue({
  render: h => h(App),
}).$mount('#app')
