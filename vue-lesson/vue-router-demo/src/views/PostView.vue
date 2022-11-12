<template>
  <div v-if="post">
    <h3>{{post.title}}</h3>
    <div class="content" v-html="post.content"></div>
  </div>
</template>

<script>
// 文章详情页面 要展示文章要展示文章详情数据 
// 动态路由页面  动态路由参数就是文章 id 
// 所以获取文章 id 就可以发送请求获取文章数据了  
export default {
  data() {
    return {
      post: null
    }
  },
  props: ['postId'],
  async created () {
    // 获取动态路由参数
    // $route 表示的是当前匹配的路由信息  包括当前地址 当前页面 等
    // console.log(this.$route.params)
    // const { postId } = this.$route.params
    const {postId}  = this
    // console.log(postId)
    const res = await this.$http.get(`/topic/${postId}`)
    // console.log(res)
    this.post = res.data
  },
}
</script>

<style>

</style>