import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

// import HelloWorld from './components/HelloWorld.vue'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
// import FirstRoute from '@/components/FirstRoute'
// import FirstRouteChild from '@/components/FirstRouteChild'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
Vue.use(ElementUI)

Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// new Vue({
//   el: '#app',
//   Router,
//   components: { App },
//   template: '<App/>'
// })

