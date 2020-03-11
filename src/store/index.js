// vuex最核心的管理对象store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { // 状态对象
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token')
}
const mutations = { // 直接更新state的多个方法的对象
  // 将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
    console.log('dffffffffffffffffffffffffffffffff', data)
  },
  // 获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  // 登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  }
}

const actions = { // 通过mutation间接更新state的多个方法的对象

}

const getters = { // 基于state的getter计算属性的对象

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
