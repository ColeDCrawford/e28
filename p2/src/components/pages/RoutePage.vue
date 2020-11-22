<template>
    <div id='route-page'>
        <h1>Route {{ id }}</h1>
        <show-route :route="route"></show-route>
    </div>
</template>

<script>
import ShowRoute from '@/components/ShowRoute.vue';
export default {
    props: ['id', 'routes'],
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