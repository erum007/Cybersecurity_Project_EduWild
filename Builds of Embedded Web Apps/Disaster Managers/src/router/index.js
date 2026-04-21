import Vue from 'vue'
import Router from 'vue-router'
import App1 from '@/components/App1'

import '../assets/logo.png'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app1',
      name: 'App1',
      component: App1
    },
    
  ]
})
