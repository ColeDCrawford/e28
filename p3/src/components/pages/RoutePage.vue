<template>
    <div id='route-page'>
        <show-route
            :route="route"
            :individual="true"
            :ticks="ticks"
            :routes="routes">
        </show-route>
    </div>
</template>

<script>
import ShowRoute from '@/components/ShowRoute.vue';

export default {
    props: ['id', 'routes', "ticks"],
    components: {
        'show-route': ShowRoute,
    },
    data() {
        return {
        };
    },
    computed: {
        route() {
            return this.routes.filter((route) => {
                return route.id == this.id;
            }, this.id)[0];
        }
    }
};
</script>
<style>
    .tick:nth-child(even) {
        background-color:#e9e9e9
    }
</style>