import router from './router'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import store from '@/store'
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

// 判断是否有token，判断to.path是否在白名单中。
router.beforeEach(async (to, from, next) => {
  NProgress.start() // start progress bar

  document.title = getPageTitle(to.meta.title) // 设置pagetitle

  const hasToken = getToken() // 判断用户是否已经登录

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // throw new Error('000没有roles')
          const { roles } = await store.dispatch('user/getInfo')

          // 根据roles生成权限路由
          const accessedRutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessedRutes)

          next({...to, replace:true})
        } catch(error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) ///login?redirect=%2Fhome
      // next({path:'/login',  query:{redirect: to.path}}) //同上——/login?redirect=%2Fhome
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
