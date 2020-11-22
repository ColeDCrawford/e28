import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import RoutePage from '@/components/pages/RoutePage.vue';
import RoutesPage from '@/components/pages/RoutesPage.vue';
import ProfilePage from '@/components/pages/ProfilePage.vue';
import ProfilesPage from '@/components/pages/ProfilesPage.vue';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/routes/:id', component: RoutePage, props: true},
    { path: '/routes', component: RoutesPage, props: true },
    { path: '/profiles/:id', component: ProfilePage, props: true},
    { path: '/profiles', component: ProfilesPage, props: true}
  ],
  linkActiveClass: 'active'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
