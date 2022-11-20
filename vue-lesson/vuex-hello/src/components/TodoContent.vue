<template>
  <div>
    <TodoItem v-for="todo in showTodos" :key="todo.id" v-bind="todo" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoItem from './TodoItem.vue'
// 辅助函数
// 1. mapState  获取 state
// 2. mapActions 获取 action 函数
export default {
  components: { TodoItem },
  computed: {
    // todos() {
    //   return this.$store.state.todos 
    // }
    // ...mapState({
    //    可以换名字 不一定必须叫 todos
    //   // todos: state => state.todos
    //   todos: 'todos'
    // }),
    // ...mapState(['todos']),
    ...mapGetters(['showTodos'])
  },
  created () {
    // this.$store.dispatch('getTodos')
    this.getTodos()
  },
  methods: {
    ...mapActions(['getTodos']),
    // 换名字
    // ...mapActions({
    //   getTo: 'getTodos'
    // })
  },
}

</script>

<style>

</style>