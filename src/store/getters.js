const getters = {
  // user
  token: state => state.user.token,
   // 拦截器response、request(方便在页面看，后期可以删除)
   axiosConfig: state => state.user.axiosConfig,
   axiosResponse: state => state.user.axiosResponse,
}
export default getters