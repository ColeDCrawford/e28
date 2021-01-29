<template>
    <div class="container-fluid">
        <div class="row">
            <h1 class="title">Weekend Warrior</h1>
        </div>
        <div class="row">
            <div class="col">
                <h2>Featured Routes</h2>
                <div><router-link to="/routes/">See all climbs</router-link></div>
                <div class="card-columns">
                    <router-link
                        v-for="route in featuredRoutes"
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
            <div class="col"
                v-if="user"
            >
                <h2>Recent Following Ticks</h2>
                <div><router-link to="/feed/">See full feed</router-link></div>
                <div><router-link to="/profiles/">Follow / unfollow profiles</router-link></div>
                <show-feed
                    :limit="10"
                >
                </show-feed>
            </div>
            <div class="col"
                v-else>
                <h2><router-link to="/account">Sign in to Follow Climber Profiles</router-link></h2>
            </div>
        </div>

    </div>
</template>

<script>
    import ShowFeed from '@/components/ShowFeed.vue'
    import ShowRoute from '@/components/ShowRoute.vue';

    export default {
        name: 'App',
        props: ['ticks', 'follows'],
        components: {
            ShowFeed,
            ShowRoute
        },
        computed: {
            featuredRoutes(){
                let featured = []
                for(var i = 0; i < 8; i++){
                    featured.push(this.routes[Math.floor(Math.random() * this.routes.length)]);
                }
                return featured;
            },
            routes(){
                return this.$store.state.routes;
            },
            user() {
                return this.$store.state.user;
            }
        }
    }
</script>

<style>
    .title {
        text-align: center;
    }
</style>