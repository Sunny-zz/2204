// 封装 axios 
// 因为所有的请求可能都需要对 请求头等做配置修改
import axios from 'axios'

// 封装 axios 可以直接对 axios 进行修改
// 或者新创建一个 axios 实例，对实例进行修改
const instance = axios.create({
  // 公共的请求配置
  // 基地址
  baseURL: 'https://cnodejs.org/api/v1',
  // 自定义请求头
  // headers: {'X-Requested-With': 'XMLHttpRequest'},
  // `timeout` 指定请求超时的毫秒数。
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 10000, // 默认值是 `0` (永不超时)

})

// 拦截器 对应阶段请求会被拦截，执行对应的拦截器
// 请求拦截器    
instance.interceptors.request.use(function (headersConfig) {
  // 修改 headers 然后再返回
  console.log('请求拦截器')
  return headersConfig
})

// 响应拦截器
instance.interceptors.response.use(function (res) {
  // res 表示的是 axios 包装之后的请求结果
  console.log('响应拦截器')
  return res.data
})


export default instance 

