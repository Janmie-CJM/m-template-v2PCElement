import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

// 获取 Token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 设置 Token
export function setToken(token) {
  return Cookies.set(TokenKey,token)
}

// 移除 Token
export function removeToken() {
  return Cookies.remove(TokenKey)
}

