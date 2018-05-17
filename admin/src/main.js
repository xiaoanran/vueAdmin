// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import VueRouter from 'vue-router'
import myPlugin from '@/plugins'
import store from './store'
import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// import '@/assets/css/animate.css'
// import '/static/fonts/iconfont/iconfont.css'
import '@/less/index.less'
import '@/less/share.less'

// 阻止 vue 在启动时(生产模式下)生成生产提示。
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(myPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    httpState: '404'
  },
  template: '<App/>',
  components: {
    App
  }
})
