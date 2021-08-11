const getters = {
  // user
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles, 
   // 拦截器response、request(方便在页面看，后期可以删除)
   axiosConfig: state => state.user.axiosConfig,
   axiosResponse: state => state.user.axiosResponse,
  //  permission
  permission_routes: state => state.permission.routes
}
export default getters