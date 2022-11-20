<template>
  <div>
    <h3>products</h3>
    <ul v-if="products.length">
      <ProductItem v-for="product in products" :key="product.id" v-bind="product" />
    </ul>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['products'])
  },
  components: { ProductItem },
  methods: {
    ...mapActions(['getProducts'])
  },
  created () {
    this.getProducts()
  },
}
</script>

<style>

</style>