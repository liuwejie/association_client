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

// 声明使用插件
Vue.use(Router)

export default new Router({
  // 所有路由
  routes: [
    {
      path: '/',
      component: Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/msite',
      component: MSite,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/messages',
      component: Messages,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/associations',
      component: Associations,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/friends',
      component: Friends,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        keepAlive: true
      }
    }
  ]
})
