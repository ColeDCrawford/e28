import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/common/router.js';
import store from '@/common/store.js';
import VueCompositionApi from '@vue/composition-api';

Vue.config.productionTip = false

Vue.use(VueCompositionApi);
Vue.use(VueRouter);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
