const a = 100
const b = 200
const c = 300

const obj = {
  name: 'xxx',
  age: 20
}
// 模块导出   一般写在文档最后
// 1. 命名导出  可以使用多次
export {a,b}
export {c}

// 2. 默认导出  只能使用一次
export default obj

