<template>
  <div>
    <input type="checkbox" v-model='allTodoIsDone' >
    <input v-model.trim='text' type="text">
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    allTodoIsDone: {
      get(){
        return this.$store.getters.allTodoIsDone
      },
      set(value){
        this.changeAllTodoStatus(value)
      }
    }
  },
  methods: {
    ...mapMutations(['changeAllTodoStatus']),
    ...mapActions(['addTodo']),
    async add() {
      const {text} = this
      if(text){
        await this.addTodo({text, done: false })
        console.log('清空')
        this.text = ''
      }
    }
  },
}
</script>

<style>

</style>