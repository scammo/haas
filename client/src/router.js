import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Faq from './views/FAQ.vue'
import HackathonEdit from './views/hackathon/Edit.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/Faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/hackathon/create',
      name: 'hackathonEdit',
      component: HackathonEdit
    },
    {
      path: '/hackathon/edit/:hackathonId',
      name: 'hackathonCreate',
      component: HackathonEdit
    }
  ]
})
