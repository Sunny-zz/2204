// 创建路由

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

// 将路由的 
// 一些组件制作成全局的组件   router-link   router-view    
// 全局属性  $router  $route
Vue.use(VueRouter)


// routes  路由页面数组  数组内的一个对象表示的就是一个页面

// 一个页面由很多属性组成
// 1. path *   页面地址     / 表示的是服务器根地址也就是 http://localhost:8080/ 
// 2. name   页面的名称
// 3. component *  页面组件     组件的值写成 import()  称为懒加载(跳转到该页面才会加载该组件)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

// new VueRouter  根据路由数组创建一个路由实例   提供给 vue 项目使用
// routes   路由数组
// mode 路由模式 history(完全仿照浏览器历史记录)   hash(锚点方式)
const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
