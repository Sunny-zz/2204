<template>
  <div>
    <h4>我是最小组件small</h4>
    <p>祖先big的数据count: {{count()}}</p>
    <button @click="add()">修改祖先big的count</button>
  </div>
</template>

<script>
export default {
  inject: ['count', 'add']
}
</script>

<style>

</style>