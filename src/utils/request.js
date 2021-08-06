import axios from 'axios'

// axios.create({}) 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,  // 基础路径
  timeout: 5000  // 请求超时
})

// 配置请求拦截器( config + error )
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 配置响应拦截器( response + error )
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service