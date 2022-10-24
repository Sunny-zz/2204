<template>
  <ul >
    <li v-for="item in treeData" :key="item.label">
      <span>{{item.label}}</span>
      <TreeItem v-if="item.children" :treeData='item.children' />
    </li>
  </ul>
</template>

<script>
export default {
  // 组件内想要使用组件本身的话，需要添加 name 属性， 属性值和组件名一致
  name: 'TreeItem',
  props: ['treeData']
}
</script>

<style>

</style>