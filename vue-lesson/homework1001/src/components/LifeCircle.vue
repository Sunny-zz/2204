<template>
  <div>
    <span ref="num">{{ num }}</span>
    <button @click="add">+</button>
    <ul>
      <!-- 书籍列表 -->
      <li v-for="book in books" :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// 每一个 vue 组件都是有生命周期的
// 初始渲染 组件第一次展示到页面上
// 更新 组件的 data 或者其他相关的数据发生改变，导致 组件页面发生改变
// 销毁 组件在页面消失（不是 display: none）

// 生命周期其实就是一些函数 会自动在组件的各个时期执行
import axios from "axios";
export default {
  data() {
    return {
      num: 1,
      books: [],
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
  // 初始渲染
  beforeCreate() {
    console.log("我是生命周期-----beforeCreate");
  },
  created() {
    // 一般是进入页面就需要修改 data 的话，写到这里面
    console.log("我是生命周期-----created");
    this.num = 100;
    console.log(this.$refs.num);
    // 生命周期其实是同步函数， 而我们的请求是异步的，所以所有该执行的生命周期结束了，请求才会结束
    // 那么有的时候有人会把请求放在 mounted 中
    axios.get("http://localhost:3008/books").then((res) => {
      // console.log(res.data)
      this.books = res.data;
    });
  },
  beforeMount() {
    console.log("我是生命周期-----beforeMount");
  },
  mounted() {
    // 一般进入页面就需要获取 真实 dom 进行操作在这里面
    console.log("我是生命周期-----mounted");
    console.log(this.$refs.num);
  },
  // 更新
  beforeUpdate() {
    console.log("我是生命周期-----beforeUpdate");
  },
  updated() {
    // 可以获取到更新之后的 data 以及 更新后的 真实 dom
    console.log("我是生命周期-----updated");
  },
  // 销毁
  beforeDestroy() {
    console.log("我是生命周期-----beforeDestory");
  },
  destroyed() {
    console.log("我是生命周期-----destoryed");
  },
};
</script>

<style>
</style>