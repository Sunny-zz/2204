// es6 模块

// 模块导入   导入语句都必须写在文档顶部
// 1. 命名导入 名称和导出时必须一致，可以使用 as 改名
import x, { a as aa, b, c } from './a'
// 2. 默认导入  随便命名
// import x from './a'
// 第三方模块导入地址直接写包名    都是默认导入
import $ from 'jquery'
console.log(aa)
console.log(b)
console.log(c)
console.log(x)


$('.btn').on('click', function () {
  console.log('哈哈哈哈')
})



