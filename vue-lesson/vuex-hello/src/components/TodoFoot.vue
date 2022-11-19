<template>
  <div class="todo-foot">
    <span>1 item left</span>
    <div>
      <button>all</button>
      <button>active</button>
      <button>completed</button>
    </div>
    <button>clear completed</button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .todo-foot{
    display: flex;
    justify-content: space-between;
  }
</style>