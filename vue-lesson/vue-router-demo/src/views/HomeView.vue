<template>
  <div>
    <ul class="nav">
      <li><router-link :class="{active: $route.path === '/' || $route.path === '/list/all'}" to='/list/all'>全部</router-link></li>
      <li><router-link active-class="active" to='/list/good'>精华</router-link></li>
      <li><router-link active-class="active" to='/list/share'>分享</router-link></li>
      <li><router-link active-class="active" to='/list/ask'>问答</router-link></li>
      <li><router-link active-class="active" to='/list/job'>招聘</router-link></li>
      <li><router-link active-class="active" to='/list/dev'>客户端测试</router-link></li>
    </ul>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
  .nav {
    list-style: none;
    display: flex;
  }

  .nav li{
    margin-right: 10px;
  }

  .nav li a{
    text-decoration: none;
    color: #000;
  }

  .nav li a.active{
    color: red;
  }

  
</style>