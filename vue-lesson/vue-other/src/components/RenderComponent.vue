<template>
  <div>
    <TitleDemo :level='2'>父组件提供的标题</TitleDemo>
  </div>
</template>

<script>
import TitleDemo from './TitleDemo.vue'
export default {
  components: { TitleDemo },

}
</script>

<style>

</style>