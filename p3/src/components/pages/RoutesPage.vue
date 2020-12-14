<template>
    <div id="routes">
        <h1>Routes</h1>
        <div class="card-columns">
            <router-link
                v-for="route in routes"
                :key="route.id"
                v-bind:to="'/routes/' + route.id"
                exact
            >
                <show-route
                    :route="route"
                    :individual="false">
                </show-route>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ShowRoute from '@/components/ShowRoute.vue';

    export default {
        name: '',
        components: {
            'show-route': ShowRoute,
        },
        props: [],
        data: function(){
            return {};
        },
        computed: {
            routes(){
                return this.$store.state.routes;
            }
        }
    };

</script>

<style >
    /** Modify number of columns https://stackoverflow.com/questions/34140793/bootstrap-4-responsive-cards-in-card-columns */
    @media (min-width: 576px) {
        .card-columns {
            column-count: 2 !important;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 3 !important;
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 4 !important;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            column-count: 5 !important;
        }
    }
</style>