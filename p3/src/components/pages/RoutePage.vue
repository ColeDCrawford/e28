<template>
    <div id='route-page'>
        <show-route
            :route="route"
            :id="id"
            :individual="true"
        >
        </show-route>
    </div>
</template>

<script>
import ShowRoute from '@/components/ShowRoute.vue';

export default {
    props: ['id'],
    components: {
        'show-route': ShowRoute,
    },
    data() {
        return {
        };
    },
    computed: {
        route() {
            return this.$store.getters.getRouteById(this.id);
        }
    }
};
</script>
<style>
    .tick:nth-child(even) {
        background-color:#e9e9e9
    }
</style>