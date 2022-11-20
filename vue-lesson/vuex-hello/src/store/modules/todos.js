// todo 模块

// 划分了模块之后
// 如果模块没有设置命名空间  namespaced: true
// 那么模块内的 mutations actions getters 还都是全局的
// 就是依然可以使用  this.$store.commit 等触发或者使用，或者用辅助函数获取

import http from '../../plugins/http'
const todos = {
  state: () =>({
    todos: []
  }),
  mutations: {
    getTodos(state, todos){
      state.todos = todos
    },
    delTodo(state, id){
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    addTodo(state, newTodo){
      state.todos.push(newTodo)
    },
    changeTodoStatus(state, {id , newStatus}){
      const todo = state.todos.find(todo => todo.id === id)
      todo.done = newStatus
    },
    changeTodoText(state, {id, text}){
      const todo = state.todos.find(todo => todo.id === id)
      todo.text = text
    },
    changeAllTodoStatus(state, newStatus) {
      state.todos.forEach( todo => {
        todo.done = newStatus
      })
    },
    delCompletedTodo(state){
      state.todos = state.todos.filter(todo => !todo.done)
    }
  },
  
  actions: {
    async getTodos({commit}){
      const res = await http.get('/todos')
      commit('getTodos', res)
    },
    async delTodo({commit} , id){
      await http.delete(`/todos/${id}`)
      commit('delTodo', id)
    },
    async addTodo({commit}, newTodo){
      const res = await http.post('/todos', newTodo)
      console.log('添加成功')
      commit('addTodo', res)
    },
    // action 函数直接接受两个参数 第一个是 context 第二个是用户自定义的
    async changeTodoStatus({commit}, {id, newStatus}){
      // console.log(id)
      // console.log(newStatus)
      await http.patch(`/todos/${id}`, {done: newStatus})
      commit('changeTodoStatus',{ id , newStatus})
    },
    async changeTodoText({commit}, {id, text}){
      await http.patch(`/todos/${id}`, {text})
      commit('changeTodoText',{ id , text})
    },
     async delCompletedTodo({commit, state}){
      // state.todos.forEach( todo => {
      //   if(todo.done){
      //     setTimeout(() => {
      //        http.delete(`/todos/${todo.id}`)
      //     }, 10)
      //   }
      // });
      // Promise.all([请求1，2， 3， 4 ....])
      // await Promise.all(state.todos.filter(todo => todo.done).map(todo => http.delete(`/todos/${todo.id}`)))
      // commit('delCompletedTodo')

    }
  },
  getters: {
    activeTodoNums(state){
      return state.todos.filter(todo => !todo.done).length
    },
    allTodoIsDone(state) {
      return state.todos.every(todo => todo.done)
    }
  }
}

export default todos