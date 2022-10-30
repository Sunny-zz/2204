<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button
        type="primary"
        icon="iconfont icon-shouye"
        :round="true"
        size="mini"
        @click="login"
        >登录</el-button
      >
      <el-button type="primary" icon="el-icon-edit" :round="true" size="mini"
        >注册</el-button
      >
      <el-link type="danger">危险链接</el-link>
      <el-rate v-model="value2" :colors="colors"> </el-rate>
      <div class="box" v-loading="loading"></div>

      <el-button type="primary" @click="showTip">提示信息</el-button>
      <el-divider content-position="center">分割线</el-divider>
      <ElementMenu />
      <el-divider content-position="center">分割线</el-divider>
      <PostsDemo />
      <el-divider content-position="center">分割线</el-divider>
      <InfiniteScrollDemo />
      <el-divider content-position="center">分割线</el-divider>
      <CssDemo />
      <el-divider content-position="center">分割线</el-divider>
      <SwiperDemo />
    </div>
  </div>
</template>

<script>
import CssDemo from './components/CssDemo.vue';
import ElementMenu from "./components/ElementMenu.vue";
import InfiniteScrollDemo from "./components/InfiniteScrollDemo.vue";
import PostsDemo from "./components/PostsDemo.vue";
import SwiperDemo from './components/SwiperDemo.vue';
export default {
  components: { ElementMenu, PostsDemo, InfiniteScrollDemo, CssDemo, SwiperDemo },
  name: "app",
  data() {
    return {
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      loading: true,
    };
  },
  methods: {
    login() {
      console.log("登录");
    },
    showTip() {
      this.$message({
        showClose: true,
        message: "错了哦，这是一条错误消息",
        type: "error",
      });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  margin-top: 60px;
}
.icon-shouye {
  font-size: 12px;
  margin-right: 5px;
}
.box {
  width: 300px;
  height: 300px;
  background-color: #ccc;
}
</style>
