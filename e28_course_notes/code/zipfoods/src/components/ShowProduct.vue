<template>
    <div class="product">
        <div class="product-name" data-test="product-name">
            {{ product.name }}
        </div>
        <img
            class="product-thumb"
            :data-test="'product-image-' + product.id"
            :src="imageSource"
            :alt="product.name"
        />

        <p class="description" v-if="includeDetails">
            {{ product.description }}
        </p>
        <p class="price" data-test="product-price" v-if="includeDetails">
            ${{ product.price }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'show-product',
    props: ['product', 'includeDetails'],
    data: function () {
        return {};
    },
    computed: {
        imageSource() {
            try {
                return require('@/assets/images/products/' +
                    this.product.id +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/products/image-not-available.jpg');
            }
        },
    },
};
</script>
