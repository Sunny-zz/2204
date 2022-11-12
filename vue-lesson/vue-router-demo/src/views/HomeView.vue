<template>
  <div>
    <ul class="nav">
      <li><router-link to='/list/all'>全部</router-link></li>
      <li><router-link to='/list/goods'>精华</router-link></li>
      <li><router-link to='/list/share'>分享</router-link></li>
      <li><router-link to='/list/ask'>问答</router-link></li>
      <li><router-link to='/list/job'>招聘</router-link></li>
      <li><router-link to='/list/dev'>客户端测试</router-link></li>
    </ul>
    <router-view></router-view>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{name: 'post', params: {postId: post.id}}">{{post.title}}</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async created () {
    const res = await this.$http.get('/topics')
    this.posts = res.data
  },
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


  /* ul {
    list-style: none;
  }
  ul li{
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }

  ul li a{
    text-decoration: none;
    color: #000;
  } */
</style>