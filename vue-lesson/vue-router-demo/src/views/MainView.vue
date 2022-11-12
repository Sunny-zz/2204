<template>
  <div class="main">
    <HeaderTop />
    <!-- 展示  home 以及文章详情 就是 main 的子页面 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/HeaderTop.vue'
export default {
  components: { HeaderTop },

}
</script>

<style>
.main-content{
  width: 70%;
  margin: 0 auto;
  border: 1px solid #ccc;
  min-height: 800px;
}
</style>