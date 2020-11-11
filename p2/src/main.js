import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import RoutePage from '@/components/pages/RoutePage.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/routes/:id', component: RoutePage, props: true}, 
  ]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
