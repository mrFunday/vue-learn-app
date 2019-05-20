import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import ZeroProcess from './components/ZeroProcess.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/zero-process',
      name: 'zero-process',
      component: ZeroProcess
    }
  ]
})
