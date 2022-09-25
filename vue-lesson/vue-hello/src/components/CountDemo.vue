<template>
  <div>
    <button v-on:click="sub" class="sub">-</button>
    <span class="number">{{ number }}</span>
    <!-- 事件绑定给的  v-on: 可以简写成 @ -->
    <button @click="add" class="add">+</button>
    <hr />
    <!-- <button @click="change" class="change">修改颜色</button> -->
    <!-- style的绑定 -->
    <!-- 1. 最普通的字符串拼接 -->
    <!-- <div class="box" :style="`background-color: ${bgc}`"></div> -->
    <!-- 2. 对象语法 -->
    <!-- <div class="box" :style="{backgroundColor: bgc}"></div> -->
    <!-- class 的绑定 -->
    <button @click="change1" class="change1">修改颜色1</button>
    <!-- 1. 最普通的字符串拼接-->
    <!-- <div :class="`box ${isActive? 'xxx' : ''}`"></div> -->
    <!-- 2. 数组语法 -->
    <!-- <div :class="['box', isActive ? 'xxx' : '']"></div> -->
    <!-- 3. 对象语法 -->
    <!-- <div :class="{box: true,xxx: isActive}"></div> -->
    <!-- 4. 对象数组语法 -->
    <div :class="['box',{xxx: isActive}]"></div>
  </div>
</template>

<script>
// 导出对象下的  props  methods  data 可以直接在 template 内使用   当成 js 变量去使用
// 之前修改 span 内的数值   先取出来  然后运算  最后将结果在放回去
// vue 中的修改，将需要修改的数据制作成组件的 data， 然后将 data 绑定到页面中，想要修改的话，直接修改 data 即可
// 如何修改组件的 data
// 在组件的事件中 直接使用  this.data名 = 新的值  即可。    this 需要指向的是 组件本身， 而在组件中事件的箭头函数  this 并不会指向函数本身，所以要写成普通函数

// 数据驱动视图的变化，任何的变化都应该由数据来控制

// 1. 制作 data   2. template中 绑定 data  3. 修改 data 在 js 中可以使用 this 找到对应的 data
export default {
  // data 必须是一个函数， 必须返回一个对象，返回的对象内的属性就是组件的 data
  data() {
    return {
      number: 100,
      bgc: "#ccc",
      isActive: false
    };
  },
  methods: {
    // vue 的事件函数只有写成普通函数里面的 this 才指的是组件本身
    sub() {
      // console.log('点击事件触发了')
      this.number--;
    },
    add() {
      this.number++;
    },
    change() {
      this.bgc = this.bgc === "red" ? "#ccc" : "red";
    },
    change1() {
      this.isActive = !this.isActive
    },
  },
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
.xxx {
  background-color: red;
}

</style>