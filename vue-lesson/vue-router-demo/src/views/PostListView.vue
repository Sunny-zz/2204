<template>
  <div>
    {{tab ? tab : 'all'}}文章列表
  </div>
</template>

<script>
export default {
  props: ['tab']
}
</script>

<style>

</style>