import Vue from 'vue'
import App from './App'
import router from './router'
import vant from 'vant'

Vue.use(vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
