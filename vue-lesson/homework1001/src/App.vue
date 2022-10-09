<template>
  <div class="app">
    <h2>购物车</h2>
    <ShoppingCart />
    <hr>
    <h2>todo</h2>
    <TodoMvc />
    <hr>
    <h2>书籍表格</h2>
    <TableDemo />
  </div>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue'
import TableDemo from './components/TableDemo.vue'
import TodoMvc from './components/TodoMvc.vue'
export default {
  components: { ShoppingCart, TodoMvc, TableDemo },
  
}
</script>

<style>

</style>