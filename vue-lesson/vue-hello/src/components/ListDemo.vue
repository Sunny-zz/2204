<template>
  <div>
    <button @click="change" class="btn1">消失和出现</button>
    <br>
    <img v-if="show" width="200" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01813b5bd028e4a8012099c8139172.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666598213&t=2c0a3211c5add862c333a8782b443f2f" alt="">
    <ul v-else>
      <!-- v-for 相当于循环    book   in    list      list是数组  book 就是数组中的项 -->
      <!-- 使用 v-for 的时候必须添加一个 key 属性，而且要保证 key 的值在这次循环里面是唯一的 -->
      <!-- <li v-for="book in list" :key="book.id" >
        {{book.txt}}
      </li> -->
      <li v-for="(book, index) in list" :key="book.id" >
        {{book.txt}}{{index}}
      </li>
    </ul>
  </div>
</template>

<script>

// 条件渲染

// 一个元素 消失了
// 1. display: none;   vue 中实现 display:none;  的简单写法   v-show="false |  true"  无需设置 class 和 style
// 2. 让标签在页面中删除  元素.remove()  vue 中实现的简单写法   v-if="false |  true"

// v-if  v-show 的区别
// if 相对于 show 的话有较高的切换渲染开销
// show 相对于 if 来说有较高的初始渲染开销

// v-if 可以搭配 v-else    v-else-if
export default {
  data(){
    return {
      show: true,
      list: [
        {
          id: 1,
          txt:'哈哈1'
        },
        {
          id: 2,
          txt:'哈哈2'
        },
        {
          id: 3,
          txt:'哈哈3'
        }
      ]
    }
  },
  methods: {
    change(){
      this.show = !this.show
    }
  }
}
</script>

<style>
  
</style>