<template>
  <div class="article-wrap">
    <div class="article">
      <h3>我是一个文章标题</h3>
      <p>
        我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落我是文章段落
      </p>
    </div>
    <div class="comments">
      <textarea v-model.trim="txt"></textarea>
      <br />
      <button @click="submit">提交评论</button>
      <ul>
        <li v-for="comment in comments" :key="comment.id" class="comment">
          {{ comment.txt }}  <button @click="del">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          id: 1,
          txt: "777",
        },
        {
          id: 2,
          txt: "666",
        },
        {
          id: 3,
          txt: "哈哈哈",
        },
      ],
      txt: "",
    };
  },
  methods: {
    submit() {
      // console.log(this.txt);
      if (this.txt) {
        this.comments.push({
          // id: this.comments.length + 1,
          id: new Date().getTime(),
          txt: this.txt,
        });

        this.txt = "";
      }
    },
    del(){
      // console.log('删除')
      // [1,2,3,4,5]   
    }
  },
};
</script>

<style>
.article-wrap {
  width: 500px;
  margin: 0 auto;
}
</style>