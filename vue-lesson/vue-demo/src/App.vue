<template>
  <div>
    <h2>hello</h2>
    <BannerDemo />
    <hr>
    <TabsDemo />
    <hr>
    <ArticleDemo />
  </div>
</template>

<script>
import ArticleDemo from './components/article/ArticleDemo.vue'
import BannerDemo from './components/banner/BannerDemo.vue'
import TabsDemo from './components/tabs/TabsDemo.vue'
export default {
  components: { BannerDemo, TabsDemo, ArticleDemo },

}
</script>

<style>

</style>