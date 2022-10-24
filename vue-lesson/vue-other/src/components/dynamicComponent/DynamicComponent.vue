<template>
  <div>
    <h3>动态组件</h3>
    <div class="tabs">
      <div class="nav">
        <button @click="currentTabComponent = 'PostsShow'" :class="{ active: currentTabComponent === 'PostsShow' }">
          posts
        </button>
        <button @click="currentTabComponent = 'ArchiveShow'" :class="{ active: currentTabComponent === 'ArchiveShow' }">
          archive
        </button>
      </div>
      <!-- 展示对应的组件 -->
      <!-- <PostsShow v-show="tabIndex === 0" />
      <ArchiveShow v-show="tabIndex === 1" /> -->

      <!-- <PostsShow v-if="tabIndex === 0" />
      <ArchiveShow v-else /> -->

      <!-- 利用动态组件 切换的时候 让 PostsShow 保持原来 data -->
      <!-- 动态组件  keep-live组件  配合 component 组件的 is 属性来实现， is 属性的值是一个组件名， 是哪个组件名展示哪个组件-->
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ArchiveShow from "./ArchiveShow.vue";
import PostsShow from "./PostsShow.vue";
export default {
  components: { PostsShow, ArchiveShow },
  data() {
    return {
      // tabIndex: 1, // 0--posts   1---archive
      currentTabComponent: 'PostsShow'
    };
  },
};
</script>

<style>
.tabs {
  width: 480px;
  height: 130px;
  margin-left: 200px;
}

.tabs .nav button {
  outline: none;
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  background-color: transparent;
}
.tabs .nav .active {
  background-color: #e0e0e0;
}
</style>