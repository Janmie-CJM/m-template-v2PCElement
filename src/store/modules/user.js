import { login } from '@/api/user'
import axios from 'axios'
import { getToken, setToken, removeToken } from "../../utils/auth"

const state = {
  token: getToken(),  //默认在cookie先获取已经保存下来的token
  // 拦截器response、request(方便在页面看，后期可以删除)
  axiosConfig: null,
  axiosResponse: null,
  
}

const mutations = {
  SET_TOKEN: (state, token)=>{
    state.token = token
  },
  // 拦截器response、request(方便在页面看，后期可以删除)
  SET_AXIOS_CONFIG: (state, axiosConfig)=>{
    state.axiosConfig = axiosConfig
  },
  SET_AXIOS_RESPONSE: (state, axiosResponse)=>{
    state.axiosResponse = axiosResponse
  },
  

}

const actions = {
  // login——发送username/password获取token，更新vuex及cookie中token值
  login({commit}, userInfo){
    const { username, password } = userInfo
    
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token) // 通过mutations更改state中token值，保存token值
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // resetToken——设置vuex中token为空，cookie中的cookie也移除
  resetToken({commit}) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,  // 命名空间，使模块具有更高的封装度和复用性
  state,
  mutations,
  actions
}