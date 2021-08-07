import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

// 获取cookie中存起的 Token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 把 Token 存到cookie中
export function setToken(token) {
  return Cookies.set(TokenKey,token)
}

// 移除cookie中保存的 Token
export function removeToken() {
  return Cookies.remove(TokenKey)
}

