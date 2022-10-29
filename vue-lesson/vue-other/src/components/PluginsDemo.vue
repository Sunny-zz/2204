<template>
  <div>
    <h3>插件功能</h3>
    <input type="text" v-focus>
  </div>
</template>

<script>
// 插件功能就是将某些内容制作成 vue 项目中全局的东西或者说 vue 的所有组件都可以使用的
// 1. 自定义全局指令|过滤器
// 2. 利用 Vue.prototype 添加     (所有的 vue 组件都是 Vue 类的实例)
// 3. 全局混入 mixins 
// 4. 直接给 Vue 添加属性或方法

// 使用插件的方法 use
// Vue.use 

import Vue from 'vue'
export default {
  created () {
    console.log(this.a)
    this.b()
    console.log(Vue.$count)
  },
}
</script>

<style>

</style>