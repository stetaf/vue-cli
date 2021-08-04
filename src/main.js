import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const Log = () => import('./components/core/auth/Login.vue')
const Reg = () => import('./components/core/auth/Register.vue')

const routes = [
  { path: '/login', component: Log },
  { path: '/register', component: Reg }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
