<template>
  <div id="app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>

</script>
<style>
  .move-enter{
    transform: translateX(100%);
    opacity: 0;
  }
  .move-leave-to{
    transform: translateX(-100%);
    opacity: 0;
  }
  .move-enter-active, .move-leave-active{
    transition: all .5s linear;
  }
</style>
