<template>
  <div class="todos">
    <TodoHead />
    <TodoContent />
    <TodoFoot />
  </div>
</template>

<script>
import TodoContent from './components/TodoContent.vue'
import TodoFoot from './components/TodoFoot.vue'
import TodoHead from './components/TodoHead.vue'
export default {
  components: { TodoHead, TodoContent, TodoFoot },
  
}
</script>

<style>
.todos{
  width: 400px;
  margin: 0 auto;
}
</style>