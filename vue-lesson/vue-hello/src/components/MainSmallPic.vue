<template>
  <div class="pic">
    <!-- 模板语法 -->
    <img :src="picSrc" alt="" />
    <!-- <span>{{picSrc}}</span> -->
  </div>
</template>

<script>
export default {
  // 组件可以接收一个 prop 名字是 picSrc
  // 子组件接收 prop 方式很多
  // 1. 数组
  // props: ['picSrc']
  // 2. 对象
  props: {
    // 接收 picSrc ， 并规定这个属性的值必须是字符串类型
    // 检验的第一种写法
    // picSrc: String,
    // 第二中写法
    picSrc: {
      type: String,
      // 必须
      required: true,
      // 默认值  和  必须  一般只存在一个
      // default: '默认图片地址',
      // 自定义校验函数
      // validator: function (value) {
      //   return [1,2,3].includes(value)
      // }
    }

  }
};
</script>

<style>
.pic {
  overflow: hidden;
  width: 710px;
  margin-bottom: 20px;
}
.pic:last-child {
  margin-bottom: 0;
}
.pic img {
  display: block;
  transition: all 1s;
}

.pic img:hover {
  transform: scale(1.1);
}
</style>