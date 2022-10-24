<template>
  <li class="product">
    <span>
      <span>{{ title }}</span>
      <span>-</span>
      <span>${{ price }}</span>
      <span v-if="count">x {{count}}</span>
    </span>
    <br />
    <button :disabled='inventory === 0' v-if="!count" @click="add">add to cart</button>
  </li>
</template>

<script>
export default {
  props: ["title", "price", "id", "inventory", "count"],
  methods: {
    add() {
      const {title, price, id, inventory} = this
      this.$emit("addToCart", { title, price, id, inventory });
    },
  },
};
</script>

<style>
</style>