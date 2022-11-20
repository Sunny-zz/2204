<template>
  <li>
    <div>
      <span>{{ title }}</span
      >-$<span>{{ price | formatNum }}</span>
      <span v-if="num"> x{{num}}</span>
    </div>
    <button v-if="!num">add to cart</button>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "price", "inventory" ,'num'],
};
</script>

<style>
</style>