<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { postId: post.id } }">{{
          post.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getDocumentHeight,
  getWindowScrollHeight,
  getWindowScrollTop,
} from "../utils/scroll";
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
      loading: false,
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
        const res = await this.$http.get(
          `/topics?tab=${newValue ? newValue : "all"}`
        );
        this.posts = res.data;
      },
      immediate: true,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.load);
  },
  methods: {
    async load() {
      if (this.posts.length) {
        const scrollBottom =
          getDocumentHeight() - getWindowScrollHeight() - getWindowScrollTop();
        if (scrollBottom <= 20) {
          if (!this.loading) {
            console.log("加载中");
            this.loading = true;
            this.page++;

            const res = await this.$http.get(
              `/topics?tab=${this.tab ? this.tab : "all"}&page=${this.page}`
            );
            console.log("加载完毕");
            this.loading = false;
            this.posts = [...this.posts, ...res.data];
          }
        }
      }
    },
  },

  destroyed() {
    window.removeEventListener("scroll", this.load);
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