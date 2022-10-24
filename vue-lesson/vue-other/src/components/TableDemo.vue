<template>
  <table>
    <thead>
      <!-- 需要父组件传递 -->
      <slot name='thead' />
    </thead>
    <tbody>
      <!-- 这个 tbody 需要父组件传递过来 列表数据循环展示 -->
      <tr v-for="(item, index) in tableData" :key="index">
        <td v-for="(propValue, propName) in item" :key="propValue">
          <span v-if="propName !== x">{{propValue}}</span>
          <slot v-else :name='x' :value='propValue' />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['tableData', 'x']
}
</script>

<style>

</style>