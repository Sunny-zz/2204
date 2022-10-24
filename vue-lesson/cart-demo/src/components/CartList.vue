<template>
  <div class="cart">
    <h3>your cart</h3>
    <div v-if="cartList.length === 0" class="empty">
      <p>please add some products to cart</p>
    </div>
    <div v-else class="cart-list">
      <ProductItem v-for="item in cartList" :key="item.id" v-bind="item" />
    </div>
    <p>Total:${{total}}</p>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components: { ProductItem },
  props: ['cartList', 'total']
  
}
</script>

<style>

</style>