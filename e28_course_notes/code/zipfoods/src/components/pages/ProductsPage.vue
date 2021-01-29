<template>
    <div id="products">
        <h1>Products</h1>

        <router-link
            v-for="product in products"
            :key="product.id"
            v-bind:to="'/products/' + product.id"
            exact
        >
            <show-product :product="product"></show-product>
        </router-link>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';

export default {
    name: '',
    components: {
        'show-product': ShowProduct,
    },
    props: [],
    data: function () {
        return {};
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
};
</script>

<style scoped>
</style>