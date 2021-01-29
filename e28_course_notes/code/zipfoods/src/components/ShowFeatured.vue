<!-- src/components/ShowFeatured.vue -->
<template>
    <div id="featured">
        <h2>Featured Products</h2>
        <ul class="cleanList">
            <li
                data-test="featured-product"
                v-for="product in featuredProducts"
                :key="product.id"
            >
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { products } from '@/products.js';

export default {
    name: 'show-featured',
    props: ['category'],
    data: function () {
        return {
            products: products,
        };
    },
    computed: {
        featuredProducts() {
            return this.products.filter((product) => {
                return product.categories.includes(this.category);
            }, this.category);
        },
    },
};
</script>
