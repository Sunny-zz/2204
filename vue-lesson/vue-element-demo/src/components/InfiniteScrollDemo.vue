<template>
   <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
   data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          console.log('123123123123')
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
}
</script>

<style scoped>
  .infinite-list-wrapper{
    overflow:auto;
    height: 300px;
  }
  ul li {
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
</style>