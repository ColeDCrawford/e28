<template>
    <div class="tick container">
        <router-link
            :key="tick.mp_user_id"
            v-bind:to="'/profiles/' + tick.mp_user_id"
            exact>
            <h6 v-if="displayProfile" class="tick-owner">{{ tick.mp_name }}</h6>
        </router-link>
        <div v-if="displayRouteInfo" class="route-info row">
            <span class="route-name">
                <router-link
                    :key="route.id"
                    v-bind:to="'/routes/' + route.id"
                    exact
                >{{ route.name}}
                </router-link>
            </span>
            <div class="route-info-details">
                <span class="route-grade">{{ route.rating }}</span>
                <span class="route-type">{{ route.type }}</span>
                <span class="route-pitches" v-if="route.pitches > 1">{{ route.pitches }} pitches</span>
                <span class="route-location">{{route.location}}</span>
                <span class="stars"><star-rating
                    v-model="route.stars"
                    :max-rating="4"
                    :increment="0.1"
                    :read-only="true"
                    :inline="true"
                    :star-size="25"
                    :show-rating="false"
                ></star-rating>({{route.star_votes}})</span>
            </div>
        </div>
        <div v-if="displayTickInfo" class="tick-info row">
            <span class="tick-date">{{tick.date}}</span>
            <span class="tick-style">{{tick.style}}</span>
            <span class="lead-style" v-if="tick.lead_style">/ {{tick.lead_style}}</span>
            <span class="pitches" v-if="tick.pitches > 1">{{tick.pitches}} pitches</span>
            <span class="notes">{{tick.notes}}</span>
        </div>
    </div>
</template>

<script>
    import StarRating from "vue-star-rating";

    export default {
        name: 'show-tick',
        components: {
            StarRating
        },
        props: {
            tick: {},
            displayProfile: {
                default: false
            },
            displayRouteInfo: {
                default: true
            },
            displayTickInfo: {
                default: true
            }
        },
        data: function () {
            return {};
        },
        computed : {
            // route() {
            //     return this.routes.filter((r) => {
            //         return r.id == this.tick.route_id;
            //     }, this.id)[0];
            // },
            route() {
                return this.$store.getters.getRouteById(this.tick.route_id);
            }
        }
    };
</script>

<style scoped>
    .route-name {
        font-weight: bolder;
    }
    .route-info-details > span, .tick-info > span {
        margin-left: 5px;
    }
    .tick-style, .lead-style {
        font-style: italic;
    }
    .tick-date {
        font-weight:500;
    }
    .tick-owner {
        margin-left: 0px;
    }
</style>