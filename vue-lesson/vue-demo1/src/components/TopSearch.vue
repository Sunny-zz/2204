<template>
  <div class="top-search">
    <input ref="mySearch" :value="searchText" type="text"><button @click="search">搜索</button>
    <br><br>
    <div>
      <input ref="isStock" :checked="isSeacrhStock" type="checkbox" name="" id="">
      <span>only show products in stock</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    // 父组件中想要使用子组件的数据
    // 1. 父组件定义好 data 子组件修改父组件的 data
    // 2. 将数据写到父组件中，传递给子组件使用，并修改

    // 子组件中需要点击搜索来修改父组件的 data
    // 需要父组件将修改的方法传递给子组件，然后子组件调用修改
    return {
      // searchText: '',
      // isSeacrhStock: false
    }
  },
  // props 是不允许被修改的， 所以一般不能绑定在 v-model 上， 而且我们想要点击确定才修改，并不是输入就修改
  props: ['isSeacrhStock','searchText'],
  methods: {
    search(){
      // this.$emit('事件名', '参数')
      // 接收父组件传递的方法，并调用
      this.$emit('changeSearchText', this.$refs.mySearch.value)
      this.$emit('changeIsSeacrhStock', this.$refs.isStock.checked)
    }
  }
}
</script>

<style>
  .top-search {
    margin-bottom: 20px;
  }
</style>