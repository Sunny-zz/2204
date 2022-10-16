<template>
  <div class="article-demo">
    <div class="article-nav">
      <!-- vue 中的 超链接 a 一般主要就是跳转用，所以不是超链接的最好不要用 -->
      <!-- 其实 vue 中基本不写 a， 用别人写好的 -->
      <span :class="{active: type === 'all' }" @click="type = 'all'">全部</span>
      <span :class="{active: type === 'good' }" @click="type = 'good'">精华</span>
      <span :class="{active: type === 'share' }" @click="type = 'share'">分享</span>
      <span :class="{active: type === 'ask' }" @click="type = 'ask'">问答</span>
      <span :class="{active: type === 'job' }" @click="type = 'job'">招聘</span>
      <span :class="{active: type === 'dev' }" @click="type = 'dev'">客户端测试</span>
    </div>
    <div v-if="articles.length" class="article-list">
      <div class="article" v-for="article in showArticles" :key="article.id">
        <img :src="article.img" alt="" />
        <div>
          <span>{{ article.reply_count }}</span>
          /
          <span>{{ article.visit_count }}</span>
        </div>
        <!-- <span :class="{active: article.top || article.good }">{{ article.top ? '置顶' :  article.good ? '精华' :  article.type === 'share' ? '分享' : '客户端测试' }}</span> -->
        <!-- template 中写太多的计算过程比较麻烦， 他是 html 并不应该写太多的运算 -->
        <span :class="{active: article.top || article.good }">{{ article | transformTxt }}</span>
        <h3>{{ article.title }}</h3>
      </div>
    </div>
    <div v-else>
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01813b5bd028e4a8012099c8139172.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668477291&t=c56c0b2983fbedb9b365596a90bff301"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articles: [],
      type: 'good'   //all  good  share  job  ask  dev
    };
  },
  computed: {
    showArticles(){
      const {articles, type} = this
      return articles.filter( article => type === 'all' ? true :  type === 'good' ? article.good : type === 'share' ? article.type === 'share' :  type === 'job' ? article.type === 'job' : type === 'ask' ? article.type ==='ask' : article.type === 'dev' )
    }
  },
  filters: {
    transformTxt({top, good, type}) {
      return top
        ? "置顶"
        : good
        ? "精华"
        : type === "share"
        ? "分享"
        : type === "ask"
        ? "问答"
        : type === "job"
        ? "招聘"
        : "客户端测试";
    },
  },
  async created() {
    const res = await axios.get("http://localhost:3008/books");
    // console.log(res.data)
    this.articles = res.data;
  },
};
</script>

<style>
  .article{
    display: flex;
    align-items: center;
  }
  .article img {
    width: 50px;
  }

  .active {
    background-color: rgb(96, 240, 39);
    color: #fff;
  }
</style>