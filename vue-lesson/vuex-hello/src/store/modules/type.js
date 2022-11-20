// type 模块


const type = {
  namespaced: true,
  // 加了命名空间之后 mutations actions getters 就变成 模块内的，不是全局的了
  state: () =>({
    type: 'all'
  }),
  mutations: {
    changeType(state, newType){
      state.type = newType
    }
  },

  actions: {

  },
  getters: {

  }
}

export default type