<template>
  <div class="product-item">
    <span :class="{'no-stock': !stocked}">{{name}}</span>
    <span>{{price}}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'stocked']
}
</script>

<style>
  .no-stock {
    color: red;
  }
</style>