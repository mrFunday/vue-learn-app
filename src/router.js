import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import FirstLeftLinkMain from './components/leftside/FirstLeftLinkMain'
import FirstRightLinkMain from './components/rightside/FirstRightLinkMain'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'firstPorn',
      components: {
        a1: FirstLeftLinkMain,
        b1: FirstRightLinkMain
      }
    }
  ]
})
