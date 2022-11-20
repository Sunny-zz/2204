<template>
  <div>
    <h3>your cart</h3>
    <ul v-if="products.length && cartList.length">
      <ProductItem v-for="product in cartList" :key="product.id" v-bind="product" />
    </ul>

    <span>Total:$ 100.01</span>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import {mapGetters, mapState} from 'vuex'
export default {
  components: { ProductItem },
  computed: {
    ...mapGetters(['cartList']),
    ...mapState(['products'])
  },

}
</script>

<style>

</style>