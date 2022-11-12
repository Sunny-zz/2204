<template>
  <div id="app">
    <nav>
      <!-- router-link 路由跳转组件  to 是地址 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/contact">Contact</router-link>
    </nav>
    <!-- router-view 根据当前页面地址展示对应的页面组件 -->
    <router-view />
  </div>
</template>
<script>
  // vue-router  路由
  // 在 vue 项目中制作多个页面
  // 安装  
  // 1. 如果使用的四 vuecli 搭建的项目  可以利用 vue-router 的插件方式安装
  // 2. 手动使用 npm 在项目中安装

  
</script>


<style>
#app {
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
