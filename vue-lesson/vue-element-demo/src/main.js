import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

// element 的使用
// 安装
// 1. 如果你的项目是使用 vuecli@3, 那就可以使用 element 插件的方式来安装
//    a. vue ui 找到插件选项 搜索 element ，找到 vue-cli-plugin-element 安装即可，安装的时候会提问几个问题
//    b. 使用命令行工具直接执行 vue add element ,执行之后也会提问几个问题
// 插件方式安装 element 会修改我们的项目， App.vue  main.js  babel.config.js(配置按需加载)  src/plugins/element.js 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
