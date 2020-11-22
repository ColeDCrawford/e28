<template>
    <div class="tick">
        <div v-if="stream" class="tick-owner">User - </div>
        <div class="route-info">
            <span class="route-name">{{ route.name }}</span>
            <span class="route-grade">{{ route.rating }}</span>
            <span class="route-type">{{ route.type }}</span>
            <span class="route-pitches" v-if="route.pitches > 1">{{ route.pitches }} pitches</span>
            <span class="route-location">{{route.location}}</span>
            <span class="stars">{{route.stars}}</span>
        </div>
        <div class="tick-info">
            <span class="tick-date">{{tick.date}}</span>
            <span class="tick-style">{{tick.style}}</span>
            <span class="lead-style" v-if="tick.lead_style">/ {{tick.lead_style}}</span>
            <span class="pitches" v-if="tick.pitches > 1">{{tick.pitches}} pitches</span>
            <span class="notes">{{tick.notes}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'show-tick',
        props: ['tick', 'routes'],
        data: function () {
            return {};
        },
        computed : {
        route() {
            return this.routes.filter((r) => {
                return r.id == this.tick.route_id;
            }, this.id)[0];
        },
        }
    };
</script>

<style lang='scss' scoped>

</style>