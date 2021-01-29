import VueRouter from 'vue-router';
import store from '@/common/store';

// Define all the routes of our application
const routes = [
    {
        path: '/',
        // Rather than having to have separate import statements at the top of this page for each component
        // Here's a simple way we can directly make our components available
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/practice',
        component: () => import('@/components/pages/PracticePage.vue'),
    },
    {
        path: '/products',
        component: () => import('@/components/pages/ProductsPage.vue'),
    },
    {
        path: '/categories',
        component: () => import('@/components/pages/CategoriesPage.vue'),
    },
    {
        path: '/products/new',
        component: () => import('@/components/pages/ProductCreatePage.vue'),
        // Note the addition of this meta attribute:
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/products/:id',
        component: () => import('@/components/pages/ProductPage.vue'),
        props: true,
    },
    {
        path: '/account',
        component: () => import('@/components/pages/AccountPage.vue'),
    },
    {
        path: '/cart',
        component: () => import('@/components/pages/CartPage.vue'),
    },
    {
        // This is a route we can direct the user to if they try to access a part of the site they don't have privileges for
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue'),
    },

];

// Initialize our router
const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const decide = () => {
        if (requiresAuth && !store.state.user) {
            next('/denied');
        }
        else {
            next();
        }
    }

    // If we don't have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        store.dispatch('authUser').then(() => {
            decide();
        });
    } else {
        decide();
    }

});


export default router;