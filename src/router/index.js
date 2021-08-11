import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'
import Home from '../views/Home.vue'

// 解决vue-router路由版本更新产生的问题,导致路由跳转失败抛出该错误，但并不影响程序功能
// 重定向去的路由本身也要重定向，即双重重定向问题
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    meta: { title:'Login',roles: ['admin'] }
  },
]

export const asyncRoutes = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/about',
    meta: { title:'Root',roles: ['admin'] },
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: { title:'About',roles: ['admin'] }
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title:'Home',roles: ['admin'] }
      },
      {
        path: '/sidebarPractice',
        name: 'SidebarPractice',
        component: () => import('../views/SidebarPractice.vue'),
        meta: { title:'SidebarPractice',roles: ['admin'] }
      },
      {
        path: '/mmUpFile',
        name: 'MmUpFile',
        component: () => import('../views/MmUpFile'),
        meta: { title:'MmUpFile',roles: ['admin'] }
      }
    ],
  },
]

const router = new VueRouter({
  routes: constantRoutes
})

export default router
