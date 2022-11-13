import axios from 'axios'
import Vue from 'vue'

const instance = axios.create({
  baseURL:'https://cnodejs.org/api/v1',
  timeout: 100000,
  // headers
})

instance.interceptors.request.use((config) => {
  // 修改 config
  return config
})

instance.interceptors.response.use((res) => {
  // res是请求的结果（被 axios 封装过了）
  return res.data
})

// 取消请求

Vue.prototype.$http = instance
// export default instance