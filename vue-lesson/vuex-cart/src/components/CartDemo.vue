<template>
  <div>
    <h2>shopping cart</h2>
    <ProductsList />
    <CartList />
  </div>
</template>

<script>
import CartList from './CartList.vue'
import ProductsList from './ProductsList.vue'
export default {
  components: { ProductsList, CartList },

}
</script>

<style>

</style>