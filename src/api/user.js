import request from '@/utils/request'

// login——传 username/password，获取 token
export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

// getInfo —— 携带token去获取用户信息
export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    methods: 'get',
    params: { token }
  })
}