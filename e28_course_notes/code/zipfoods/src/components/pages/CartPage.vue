<template>
    <div id="cart-page">
        <h1>Your Cart</h1>

        <div v-if="items.length == 0">No items</div>

        <ul data-test="cart-contents" class="cleanList" v-if="productsLoaded">
            <li v-for="item in items" :key="item.id">
                {{ item.quantity }} x {{ getProductDetails(item.id).name }}
                <button
                    data-test="remove-from-cart-button"
                    @click="removeFromCart(item.id)"
                >
                    Remove
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { cart } from '@/common/app.js';

export default {
    props: [],
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        this.items = cart.getItems();
    },
    computed: {
        productsLoaded() {
            return this.products.length > 0;
        },
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        getProductDetails(id) {
            return this.products.filter((product) => {
                return product.id == id;
            }, id)[0];
        },
        removeFromCart(id) {
            cart.remove(id);

            this.$store.commit('setCartCount', cart.count());
        },
    },
};
</script>