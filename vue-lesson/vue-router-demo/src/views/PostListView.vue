<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { postId: post.id } }">{{
          post.title
        }}</router-link>
      </li>
    </ul>

    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page.sync="page"
      :total="total"
      :page-size="40"
      @current-change="pageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["tab"],
  data() {
    return {
      posts: [],
      page: 1,
      pageNumbers: [
        {
          tab: "good",
          total: 720,
        },
        {
          tab: "all",
          total: 280,
        },
        {
          tab: "share",
          total: 200,
        },
        {
          tab: "ask",
          total: 80,
        },
        {
          tab: "job",
          total: 80,
        },
        {
          tab: "dev",
          total: 280,
        },
      ],
    };
  },
  computed: {
    total() {
      const tab = this.tab ? this.tab : "all";
      return this.pageNumbers.find((ele) => ele.tab === tab).total;
    },
  },

  // 先选择 第5页，然后查看一篇文章，再点击返回 还要看 5 
  // 除了上面流程 只要进入到列表页 默认展示的就是 第一页
  watch: {
    tab: {
      async handler(newValue) {
        const page = sessionStorage.getItem('page') || 1
        const tab = sessionStorage.getItem('tab') || 'all'
        // console.log(tab, this.tab ? this.tab : 'all')
        this.page = tab === (this.tab ? this.tab : 'all') ? page*1 : 1
        const res = await this.$http.get(
          `/topics?tab=${newValue ? newValue : "all"}&page=${this.page}`
        );
        // console.log(res.data)
        this.posts = res.data;
      },
      immediate: true,
    },
  },
  // async created() {
  //   const { tab } = this;
  //   const res = await this.$http.get(`/topics?tab=${tab ? tab : "all"}`);
  //   // console.log(res.data)
  //   this.posts = res.data;
  // },
  methods: {
    async pageChange(page) {
      // console.log(page)
      const tab = this.tab ? this.tab : "all"
      sessionStorage.setItem('page', page)
      sessionStorage.setItem('tab', tab)
      const res = await this.$http.get(
        `/topics?tab=${tab}&page=${page}`
      );
      // console.log(res.data)
      this.posts = res.data;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
ul li {
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}

ul li a {
  text-decoration: none;
  color: #000;
}
</style>