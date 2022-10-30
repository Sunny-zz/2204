<template>
  <div class="css-demo">
    <h3>css <span>预处理器</span></h3>
    <!-- css 的新写法(高级) -->
    <!-- sass  less  stylus -->
    <!-- less 的安装和使用 -->
    <!-- 需要安装两个包  less  以及   less-loader   ` npm  i  less   less-loader `-->

    <!-- sass 的安装的使用 -->
    <!-- 需要安装两个包  node-sass  以及   sass-loader   ` npm  i  node-sass   sass-loader ` -->
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
// @import "../assets/theme.less";
// // less 语法
// // 嵌套
// // 变量
// // 混合
// // 运算
// // 命名空间和访问
// // 样式导入
// @width: 200px;

// // 公共的边框样式
// .border-bottom {
//   // 可以写很多
//   border-bottom: 1px solid #ccc;
// }

// // 公共的样式集合
// #bundle {
//   .df {
//     display: flex;
//   }
//   .jcsb {
//     justify-content: space-between;
//   }
// }

// .css-demo {
//   width: @width + 20px;
//   #bundle.df();
//   #bundle.jcsb();
//   > h3 {
//     color: @pramary-color;
//     .border-bottom();
//     span {
//       color: aqua;
//     }
//     &:hover {
//       color: blue;
//     }
//   }
// }
@import '../assets/theme.scss';
.css-demo{
  h3{
    color: $pramary-color;
  }
}
</style>