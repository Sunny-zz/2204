<template>
  <div>
    <input v-model.trim='text' type="text">
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
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