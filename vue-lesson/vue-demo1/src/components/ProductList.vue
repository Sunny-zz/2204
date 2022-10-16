<template>
  <div class="product-list">
    <ListTitle :title='title' />
    <!-- <ProductItem v-for="product in products" :key="product.id" :name="product.name" :price="product.price" :stocked="product.stocked" /> -->

    <!-- v-bind='对象'  意思是将对象下的所有属性当作 props 全传递给子组件 -->
    <ProductItem v-for="product in products" :key="product.id" v-bind='product' />
  </div>
</template>

<script>
import ListTitle from './ListTitle.vue'
import ProductItem from './ProductItem.vue'

export default {
  components: { ListTitle, ProductItem },
  // 由于搜索组件需要对列表数据进行搜索
  // 但是搜索组件根本获取不到列表数据
  // 需要将列表数据共享到共同的祖先组件中
  data(){ 
    return {
      // products: []
    }
  },
  props: ['products', 'title']
  
}
</script>

<style>

</style>