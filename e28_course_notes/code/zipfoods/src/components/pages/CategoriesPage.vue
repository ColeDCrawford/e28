<template>
    <div>
        <h1>Categories</h1>
        <ul class="cleanList">
            <li
                data-test="category-name"
                v-for="(category, id) in categories"
                :key="id"
            >
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    props: [],
    data: function () {
        return {};
    },
    computed: {
        categories() {
            let categories = this.products.map((product) => {
                if (product.categories) {
                    return product.categories.split(',');
                }
            });

            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        },
        products() {
            return this.$store.state.products;
        },
    },
};
</script>

<style scoped>
</style>