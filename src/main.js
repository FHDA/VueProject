import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

// import HelloWorld from './components/HelloWorld.vue'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Search from '@/components/Search'
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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      props: true
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

