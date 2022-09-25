<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 需要将 图片的 路径当作 prop 传递给子组件 让子组件展示 -->
    <!-- 在自定义的标签内写上属性名和属性值就相当于给组件传递 prop -->

    <!-- 当我们将地址当作 prop 传递下去的时候，地址使用之后会失败 -->
    <!-- 在 template 中要是地址的话，必须是直接写在对应的属性上，不能传递再使用 -->
    <!-- 只有在属性上才会将地址解析到 -->
    <MainSmallPic v-bind:picSrc="pic1" />
    <MainSmallPic picSrc="https://gwimages.acer.com.cn/uploads/inpic/000bfa734953c38d14e18830a1d48b16.jpg" />
    <MainSmallPic picSrc="https://gwimages.acer.com.cn/uploads/inpic/55804eec7d959802328a7ac2c553778b.jpg" />
    <hr>
    <!-- 有一个对象  {a:10,b:20}  希望传递给子组件 a 和 b 也就是说将对象内的所有属性全部传递过去，并不是将整个对象传递   v-bind="对象" -->
    <BtnDemo txt="登录" type="primary"  v-bind="{a:10,b:20}" />
    <BtnDemo txt="注册" type="secondary" v-bind="{a:10,b:20}" /> 
    <hr>
    <CountDemo />
    <hr>
    <ListDemo />
    <hr>
    <FormDemo />
  </div>
</template>

<script>
import MainSmallPic from './components/MainSmallPic.vue'
import pic1 from './assets/1.jpg'
import BtnDemo from './components/BtnDemo.vue'
import CountDemo from './components/CountDemo.vue'
import ListDemo from './components/ListDemo.vue'
import FormDemo from './components/FormDemo.vue'

export default {
  data(){
    return {
      pic1: pic1
    }
  },
  name: 'App',
  // 组件注册
  components: {
    MainSmallPic,
    BtnDemo,
    CountDemo,
    ListDemo,
    FormDemo
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
