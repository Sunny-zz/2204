<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <!-- 展示列表内容的时候 不一定使用什么标签展示，需要父组件提供 -->
      <!-- {{item.txt}} -->
      <slot :txt='item.txt' a='哈哈哈'/>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style>

</style>