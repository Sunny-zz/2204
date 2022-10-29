import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'

Vue.config.productionTip = false

// 全局指令
// Vue.use 需要传递一个对象作为参数，这个对象下的 install 方法会自动执行
Vue.use({
  install(Vue) {
    Vue.directive('focus', {
      inserted(el, { value }) {
        console.log(value)
        if (value || value === undefined) {
          el.focus()
        }
      }
    });
  }
})

//#region 
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
//#endregion

Vue.prototype.a = 'xxxxxx'
Vue.prototype.b = function () {
  console.log('xxxxxxxxxxxxxxxxxx')
}
Vue.$count = 1000
new Vue({
  render: h => h(App),
}).$mount('#app')


