import Vue from 'vue'
//noinspection JSUnresolvedVariable
import App from './App'
import VueRouter from 'vue-router'
import store from './components/vuex/store'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/login': {
    name: 'login',
    component: function (resolve) {
      require(['./components/main/Login'], resolve)
    }
  },
  '/main': {
    name: 'mail',
    component: function (resolve) {
      require(['./components/view/main'], resolve)
    },
    subRoutes: {
      '/': {
        name: 'viewone',
        component: function (resolve) {
          require(['./components/content/ViewOne'], resolve)
        }
      },
      '/navigation': {
        name: 'navigation',
        component: function (resolve) {
          require(['./components/content/Navigation'], resolve)
        }
      },
      '/userHome': {
        name: 'userHome',
        component: function (resolve) {
          require(['./components/content/UserHome'], resolve)
        }
      }
    }
  },
  '/watchExample': {
    name: 'watchExample',
    component: function (resolve) {
      require(['./components/main/watchExample'], resolve)
    }
  }
})

// 挂载到#app
router.start(App, '#app')

require('./assets/css/style.css')
require('./assets/css/vux.css')
require('./dependencies/css/font-awesome.css')
require('./dependencies/js/axios.min.js')
require('./dependencies/js/lodash.min.js')

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
// 路由重定向：除了路由配置的地址全部跑/main页面
router.redirect({
  '*': '/login'
})
