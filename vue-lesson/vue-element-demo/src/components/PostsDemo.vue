<template>
  <div class="posts">
    <ul v-loading='loading'>
      <li v-for="post in posts" :key="post.id">
        <img :src="post.author.avatar_url" alt="" />
        <span>{{ post.reply_count }}</span>
        <span>/</span>
        <span>{{ post.visit_count }}</span>
        <h3>{{ post.title }}</h3>
        <span> {{ post.last_reply_at | moment("from", "now") }}</span>
      </li>
    </ul>
    <el-pagination background layout="prev, pager, next" :total="280" :page-size='40' @current-change='changePage'>
    </el-pagination>
    <!-- 书籍列表 -->
    <!-- 分页器 -->
    <!-- 点击分页器查看不同页的列表 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      loading: false
    };
  },
  async created() {
    const res = await this.$http.get("/topics?page=1");
    this.posts = res.data;
  },
  methods: {
    async changePage(page) {
      // console.log(page)
      // 根据当前页数发送对应请求获取对应数据展示
      this.loading = true
      const res = await this.$http.get(`/topics?page=${page}`);
      this.loading = false
      this.posts = res.data;
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
ul li {
  display: flex;
  padding: 5px 8px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
ul li img {
  width: 40px;
}
</style>