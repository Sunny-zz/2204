<template>
  <div class="product-list">
    <h3>products</h3>
    <ProductItem v-for="product in products" :key="product.id" v-bind="product" @addToCart="addToCart" />
    <!-- 自定义事件如果需要传递两次或多次直接 $emit() 向下传递出问题，因为 $emit() 是接收并调用。可以使用函数包裹, 要注意最外的自定义事件是否需要传递参数, 需要传递的话，上面包裹的函数就需要设置参数 -->
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components: { ProductItem },
  props: ['products'],
  methods: {
    addToCart(product) {
      this.$emit('addToCart', product)
    }
  },
}
</script>

<style>

</style>