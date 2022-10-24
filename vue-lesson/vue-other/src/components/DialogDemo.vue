<template>
  <!-- 弹窗组件 -->
  <div v-show="show" @click.self="$emit('update:show', false)" class="dialog-wrap">
    <div class="dialog">
      <!-- 这里面需要展示什么 父组件说了算 -->
      <!-- 接收父组件传递的插槽展示 -->
      <div class="dialog-header">
        <slot name="header" />
      </div>
      <div class="dialog-content">
        <slot name="content" />
      </div>
      <div class="dialog-footer">
        <!-- 不设置 name 就是默认插槽 -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 如果弹窗是 v-if 的那么滚动条的消失出现可以写在生命周期
  // 如果是样式的消失那么生命周期就没用了
  // mounted() {
  //   window.document.body.style.overflowY = "hidden";
  //   window.document.body.style.paddingRight = "17px";
  // },
  // destroyed() {
  //   window.document.body.style.overflowY = "auto";
  //   window.document.body.style.paddingRight = "0";
  // },

  props: ['show']
};
</script>

<style>
.dialog-wrap {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: start;
}

.dialog {
  width: 420px;
  padding: 15px;
  background-color: #fff;
  min-height: 200px;
}

.dialog > div {
  margin-bottom: 30px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>