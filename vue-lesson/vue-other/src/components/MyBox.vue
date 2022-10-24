<template>
  <div @click="handleClick" class="box">{{num}}</div>
</template>

<script>
export default {
  data() {
    return {
      num: 100
    }
  },
  methods: {
    handleClick() {
      // 获取父组件
      console.log(this.$parent)
    }
  },
}
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>