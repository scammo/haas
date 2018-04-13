import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Faq from './views/FAQ.vue'
import HackathonEdit from './views/hackathon/Edit.vue'
import HackathonList from './views/hackathon/List.vue'

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
      path: '/hackathon/list',
      name: 'hackathonList',
      component: HackathonList
    },
    {
      path: '/hackathon/create',
      name: 'HackathonEdit',
      component: HackathonEdit
    },
    {
      path: '/hackathon/edit/:hackathonId',
      name: 'hackathonEdit',
      component: HackathonEdit
    }
  ]
})
