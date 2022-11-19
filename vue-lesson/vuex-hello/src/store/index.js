import Vue from 'vue'
import Vuex from 'vuex'
import http from '../plugins/http'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
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
      console.log(id , newStatus)
      const todo = state.todos.find(todo => todo.id === id)
      console.log(todo)
      todo.done = newStatus
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
    }
  }
})

// delete   /todos/:id
// 没返回


// post  '/todos'    {text, done}
// 返回新添加的 todo 

// patch  /todos/:id    {done: value}
// 返回修改后的 todo
export default store