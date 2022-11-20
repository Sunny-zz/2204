import Vue from 'vue'
import Vuex from 'vuex'

import todos from './modules/todos'
import showType from './modules/type'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 100
  },
  modules: {
    type: showType,
    todos: todos
  },
  getters: {
    showTodos(state) {
      // console.log(state)
      const { todos, type } = state
      return todos.todos.filter(todo => type.type === 'all' ? true : type.type === 'active' ? !todo.done : todo.done)
    },
  }
})

// delete   /todos/:id
// 没返回


// post  '/todos'    {text, done}
// 返回新添加的 todo 

// patch  /todos/:id    {done: value}
// 返回修改后的 todo
export default store