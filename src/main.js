import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/iconfont/iconfont.css'
import store from './store/index'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8096/api'

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.myAjax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
