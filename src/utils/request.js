import axios from 'axios'
import { MessageBox, Message, Notification } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth.js'

// axios.create({}) 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,  // 基础路径
  timeout: 5000  // 请求超时
})

// 配置请求拦截器( config + error )
service.interceptors.request.use(
  config => {
    if(store.getters.token){
      config.headers['X-Token'] = getToken()
    }
    store.commit('user/SET_AXIOS_CONFIG', config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 配置响应拦截器( response + error )
service.interceptors.response.use(
  response => {
    store.commit('user/SET_AXIOS_RESPONSE', response)
    const res = response.data

    // code 不为 20000，判断为错误
    if(res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration:5 * 1000
      })

      // 50008: token错误； 50012：其它用户登录；50014：token过期；
      if(res.code ==50008 || res.code === 50012 || res.code == 50014) {
        console.log('resetToken前-----',store.getters.token)
        MessageBox.confirm(`您已登出，您可选择取消并留在本页面，或重新登录${res.code}`,'登出确认框',{
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          store.dispatch('user/resetToken').then(()=>{
            location.reload() //刷新页面，绕过缓存，从服务器上重新下载该文档
          })
        })
      } 
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5*1000
    })
    return Promise.reject(error)
  }
)

export default service