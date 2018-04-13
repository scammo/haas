import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vSelect from 'vue-select'
import Notifications from 'vue-notification'
import VueTruncate from 'vue-truncate-filter'

Vue.use(require('vue-moment'));
Vue.use(VueTruncate)
Vue.component('v-select', vSelect)
Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
