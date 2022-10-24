import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'

Vue.config.productionTip = false

// 全局指令
// Vue.directive('focus', {
//   inserted(el, { value }) {
//     console.log(value)
//     if (value || value === undefined) {
//       el.focus()
//     }
//   }
// });

// 全局混入  慎用
// 创建混入对象   要混入到组件的 script 的对象中
// 会自动混入到所有的组件中
// Vue.mixin({
//   created () {
//     console.log('哈哈哈哈')
//   },
//   data(){
//     return{
//       a: 1000
//     }
//   }
// })
new Vue({
  render: h => h(App),
}).$mount('#app')


