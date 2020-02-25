/*
路由器对象模块
*/
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login/Login.vue'
import MSite from '../MSite/MSite.vue'
import Messages from '../Messages/Messages.vue'
import Associations from '../Associations/Associations.vue'
import Friends from '../Friends/Friends.vue'
import Personal from '../Personal/Personal.vue'

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
