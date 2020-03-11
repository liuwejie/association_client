/*
路由器对象模块
*/
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login.vue'
import MSite from '../pages/memberspages/msite/MSite.vue'
import Messages from '../pages/memberspages/messages/Messages.vue'
import Associations from '../pages/memberspages/associations/Associations.vue'
import Friends from '../pages/memberspages/friends/Friends.vue'
import Personal from '../pages/memberspages/personal/personal.vue'
import store from '../store/index'

// 声明使用插件
Vue.use(Router)

const router = new Router({
  // 所有路由
  routes: [
    {
      path: '/',
      component: Login,
      meta: {
        keepAlive: false,
        requireAuth: false
      }
    },
    {
      path: '/msite',
      component: MSite,
      meta: {
        keepAlive: true,
        requireAuth: true
      }
    },
    {
      path: '/messages',
      component: Messages,
      meta: {
        keepAlive: true,
        requireAuth: true
      }
    },
    {
      path: '/associations',
      component: Associations,
      meta: {
        keepAlive: true,
        requireAuth: true
      }
    },
    {
      path: '/friends',
      component: Friends,
      meta: {
        keepAlive: true,
        requireAuth: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        keepAlive: true,
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    console.log('dfafr', token)
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
