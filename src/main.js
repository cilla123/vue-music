import 'babel-polyfill'
import Vue from 'vue'
import fastclick from 'fastclick'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
