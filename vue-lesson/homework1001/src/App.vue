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
    <hr>
    <h2>侦听器</h2>
    <WatchDemo />
    <br>
    <hr>
    <h2>生命周期</h2>
    <button @click="show = false">消失</button>
    <LifeCircle v-show="show" />
  </div>
</template>

<script>
import LifeCircle from './components/LifeCircle.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import TableDemo from './components/TableDemo.vue'
import TodoMvc from './components/TodoMvc.vue'
import WatchDemo from './components/WatchDemo.vue'
export default {
  components: { ShoppingCart, TodoMvc, TableDemo, WatchDemo, LifeCircle },
  data(){
    return {
      show: true
    }
  }
}
</script>

<style>

</style>