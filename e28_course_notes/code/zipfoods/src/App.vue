<template>
    <div id="app">
        <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png" />
        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                        exact
                        :data-test="link + '-link'"
                    >
                        <span data-test="cart-count" v-if="link == 'cart'">({{ cartCount }})</span>
                        {{ link }}
                    </router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
import { cart } from '@/common/app.js';

export default {
    name: 'App',
    data() {
        return {
            /* Store links in an array to maintain order */
            links: [
                'home',
                'products',
                'categories',
                'add a product',
                'account',
                'cart'
            ],

            /* Map links to the appropriate component */
            paths: {
                home: '/',
                products: '/products',
                categories: '/categories',
                'add a product': '/products/new',
                account: '/account',
                cart: '/cart'
            }
        };
    },
    mounted() {
        this.$store.dispatch('fetchProducts');

        this.$store.commit('setCartCount', cart.count());
    },
    computed: {
        cartCount() {
            return this.$store.state.cartCount;
        },
        products() {
            return this.$store.state.products;
        }
    }
};
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
