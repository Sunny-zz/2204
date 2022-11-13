// 创建路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

// routes 的匹配规则是 从 上到下匹配， 匹配到一个就不继续了
const routes = [
  {
    path: '/login',
    // 别名
    alias: '/start',
    component: LoginView,
    // 路由对象的 name 属性可以用来做路由跳转
    name: 'login'
  },
  {
    path: '/',
    component: () => import('../views/MainView.vue'),
    // 子页面
    children: [
      // 默认子路由
      {
        path: '',  // path 写成空 进入到 MainView 就展示 HomeView
        component: () => import('../views/HomeView.vue'),
        // HomeView 页面是 MainView 页面的默认子路由， 写 name 属性的话 直接给 HomeView, 不给 MainView 写
        children: [
          {
            path: '',
            component: () => import('../views/PostListViewOther.vue'),
            name: 'home',
          },
          {
            // localhost:8080/list/goods
            path: 'list/:tab',
            component: () => import('../views/PostListViewOther.vue'),
            props: true
          }
        ]
      },
      // 重定向
      {
        path: 'post/:postId',
        redirect: '/article/:postId'
      },
      {
        // 当网站要改版 地址可能会改变 比如 文章详情地址 修改成了 /article/id
        path: '/article/:postId',
        // 动态路由参数一般都需要在路由组件中获取， 获取方式一般是 $route.params.postId
        // 我们可以使用路由传参来简化

        // 如果 props 被设置为 true，$route.params 将会被设置为组件属性
        // 也就是会将动态路由参数当作 props 传递给组件
        props: true,
        component: () => import('../views/PostView.vue'),
        name: 'post'
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue'),
  }
]



const router = new VueRouter({
  mode: 'history',
  routes,
  // scrollBehavior() {
  //   console.log(121312)
  //   // return 期望滚动到哪个的位置
  //   // console.log(savedPosition)
  //   // if (savedPosition) {
  //   //   return savedPosition
  //   // } else {
  //   //   return { x: 0, y: 0 }
  //   // }

  //   return {x: 0, y: 200}
  // }
})

// 创建好路由之后可以设置全局守卫了
// 全局前置守卫  只要是路由跳转那么全局前置守卫就会在跳转之前触发

// 守卫函数内 最后必须使用 next 放行
// 直接 next 是直接放行
// next('地址') 放行到别的地址

router.beforeEach((to, from, next) => {
  // to 是要跳转到哪
  // form 是从哪来的
  // next 是放行的方法 
  // console.log(to)
  // console.log(from)
  const isLogin = sessionStorage.getItem('isLogin') === 'true'
  if (to.path === '/login' || isLogin) {
    next()
  } else {
    next('/login')
  }
})

export default router