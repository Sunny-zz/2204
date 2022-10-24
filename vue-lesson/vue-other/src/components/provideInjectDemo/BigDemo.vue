<template>
  <div>
    <h3>我是最大组件</h3>
    <p>我自己的数据count: {{count}}</p>
    <button @click="add">+</button>
    <hr>
    <NormalDemo />
  </div>
</template>

<script>
import NormalDemo from './NormalDemo.vue'


// 在 script 内使用 vue 的 data methods  computed 等等内容的时候 都要加 this  而在 template 中则不需要加 this 直接用即可
export default {
  components: { NormalDemo },
  data() {
    return {
      count: 100
    }
  },
  // 依赖注入
  // provide 是提供者
  provide(){
    return {
      // 如果直接提供 this.count 那么 count 变化了，提供的 count 并不会随之改变， 需要写成函数 返回 this.count, 但是后代组件注入的后需要调用才能获取到值
      count: () => this.count,
      add: this.add
    }
  },
  methods: {
    add() {
      this.count ++
    }
  },
}
</script>

<style>

</style>