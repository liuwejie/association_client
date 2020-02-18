/*
路由器对象模块
*/
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login/Login.vue'
import MSite from '../memberpages/MSite/MSite.vue'
import Messages from '../memberpages/Messages/Messages.vue'
import Associations from '../memberpages/Associations/Associations.vue'
import Friends from '../memberpages/Friends/Friends.vue'
import Personal from '../memberpages/Personal/Personal.vue'

// 声明使用插件
Vue.use(Router)

export default new Router({
  // 所有路由
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/messages',
      component: Messages
    },
    {
      path: '/associations',
      component: Associations
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
