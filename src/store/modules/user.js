import { login } from '@/api/user'
import { getToken } from "../../api/auth"

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token)=>{
    state.token = token
  }
}

const actions = {
  // login
  login({commit}, userInfo){
    const { username, password } = userInfo
    
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        console.log('respose',response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,  // 命名空间，使模块具有更高的封装度和复用性
  state,
  mutations,
  actions
}