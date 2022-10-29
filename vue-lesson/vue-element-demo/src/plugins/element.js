import Vue from 'vue'
import { Button, Link,Rate,Loading,Message,Menu,MenuItem,MenuItemGroup,Submenu,Divider } from 'element-ui'

Vue.use(Button)
Vue.use(Link)
Vue.use(Rate)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Divider)

// 全局指令
Vue.use(Loading)


// Vue.prototype
Vue.prototype.$message = Message

// Vue.use({
//   install(Vue){
//     // 制作 vue 全局组件
//     // Vue.component('标签名',组件)
//     Vue.component(Button.name, Button)
//   }
// })
