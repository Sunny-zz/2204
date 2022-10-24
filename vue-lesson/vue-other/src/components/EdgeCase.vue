<template>
  <div>
    <h3>处理边界情况</h3>
    <h4>获取元素或者组件</h4>
    <!-- 访问子组件实例或子元素  ref -->
    <button ref='btn' @click="handleClick">按钮</button>
    <MyBox ref='myBox' />
    <!-- 获取父组件  $parent -->
  </div>
</template>

<script>
import MyBox from './MyBox.vue'
export default {
  components: { MyBox },
  methods: {
    handleClick() {
      console.log(this.$refs.btn)
      // console.log(this.$refs.myBox.num)
      // 不提倡获取子组件来修改子组件的数据等
      this.$refs.myBox.num ++
      console.log(this.$root)
    }
  },
}
</script>

<style>

</style>