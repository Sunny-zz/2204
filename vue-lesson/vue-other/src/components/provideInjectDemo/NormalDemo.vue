<template>
  <div>
    <h4>我是正常组件 normal</h4>
    <!-- <p>父组件Big的数据count: {{count}}</p> -->
    <hr>
    <SmallDemo />
  </div>
</template>

<script>
import SmallDemo from './SmallDemo.vue'
export default {
  components: { SmallDemo }
}
</script>

<style>

</style>