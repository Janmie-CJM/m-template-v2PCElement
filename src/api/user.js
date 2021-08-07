import request from '@/utils/request'

// login——传 username/password，获取 token
export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}