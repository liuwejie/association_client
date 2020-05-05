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
import Chat from '../pages/memberspages/chat/chat.vue'
import GroupChat from '../pages/memberspages/chat/groupchat.vue'
import GroupMembers from '../pages/memberspages/chat/groupmembers.vue'
import Test from '../pages/memberspages/test.vue'
import JudgeMaster from '../pages/associationspages/judgemaster.vue'
import AMSite from '../pages/associationspages/AMsite.vue'
import Tool from '../pages/associationspages/tool.vue'
import Aassociation from '../pages/associationspages/aassociation.vue'
import Amessages from '../pages/associationspages/amessages.vue'
import ApplyActivity from '../pages/associationspages/applyactivity.vue'
import ApplyNews from '../pages/associationspages/applynews.vue'
import NewInfo from '../pages/memberspages/NewInfo.vue'

// 声明使用插件
Vue.use(Router)

const router = new Router({
  // 所有路由
  routes: [
    {
      path: '/',
      component: Login,
      name: 'login',
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/msite',
      component: MSite,
      name: 'msite',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/messages',
      component: Messages,
      name: 'messages',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/associations',
      component: Associations,
      name: 'associations',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/friends',
      component: Friends,
      name: 'friends',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      name: 'personal',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/chat',
      component: Chat,
      name: 'chat',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/groupchat',
      component: GroupChat,
      name: 'groupchat',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/groupmembers',
      component: GroupMembers,
      name: 'groupmembers',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/test',
      component: Test,
      name: 'test',
      meta: {
      }
    },
    {
      path: '/judgemaster',
      component: JudgeMaster,
      name: 'judgemaster'
      // meta: {
      // }
    },
    {
      path: '/amsite',
      component: AMSite,
      name: 'amsite',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/tool',
      component: Tool,
      name: 'tool',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/aassociation',
      component: Aassociation,
      name: 'aassociation',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/amessages',
      component: Amessages,
      name: 'amessages',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/applyactivity',
      component: ApplyActivity,
      name: 'applyactivity',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/applynews',
      component: ApplyNews,
      name: 'applynews',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/newInfo',
      component: NewInfo,
      name: ' newinfo',
      meta: {
        requireAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    console.log('判断该路由是否需要登录权限', token)
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
