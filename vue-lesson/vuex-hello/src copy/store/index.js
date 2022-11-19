import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 就是 store 中存 公共数据的地方
  state: {
    count: 10,
    arr: [1,2,3,4,5],
    userInfo: null
  },
  mutations: {
    // mutation 函数会自动接收 state 作为参数， 内部直接修改即可
    add(state){
      state.count ++
    },
    getUserInfo(state, userInfo){
      state.userInfo = userInfo
    }
  },
  // 异步操作写在 actions 内，异步结束之后在执行对应的 mutation
  // action 函数接收 context 作为参数
  // context 是一个对象内有 commit 方法
  actions: {
    getUserInfo(context){
      setTimeout(() => {
        const userInfo = {username: 'x', userage: 20}
        context.commit('getUserInfo', userInfo)
      }, 1000)
    }
  },
  // store 中的计算属性
  getters: {
    total(state){
      return state.arr.reduce((res , ele) => res+=ele, 0)
    }
  }
})

// 组件如何获取 store 数据
// 组件内可以使用 this.$store.state  获取 state
// 一般是将 state 获取之后写成组件的计算属性 

// 组件中想要修改 store 数据的话，需要先在 store 的 mutations 内定义修改的函数
// 然后在组件内使用 this.$store.commit('对应的 mutation 函数') 来修改