import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from "../../utils/auth"

const state = {
  token: getToken(),  //默认在cookie先获取已经保存下来的token
  name: '',
  avatar: '',
  introduction: '',
  roles: [], 
  // 拦截器response、request(方便在页面看，后期可以删除)
  axiosConfig: null,
  axiosResponse: null,
  
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_INTRODUCTION: (state, introduction) =>{
    state.introduction = introduction
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
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

  // getInfo——携带toke获取用户信息
  getInfo({commit, state}) {
    return new Promise((resolve,reject) => {
      getInfo(state.token).then(response=>{
        const { data } = response

        if(!data) {
          reject('token失效，请重新登录.')
        }

        const { name, avatar, introduction, roles } = data

        if(!roles || roles.length<=0) {
          reject('getInfo：roles必须为非空数组！')
        }

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        commit('SET_ROLES', roles)
        resolve(data) //注意这里返回data，因为后续可以直接去data里面的roles。在router.beforeEach用到了
      }).catch(error=>{
        reject(error)
      })
    })
  },

  // resetToken——设置vuex中token为空，cookie中的cookie也移除
  resetToken({commit}) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
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