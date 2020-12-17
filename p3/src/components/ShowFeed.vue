<template>
    <div id="ticks">
        <h1 v-if="limit < 0">Following Tick Feed</h1>
        <show-tick
            v-for="tick in followingTicks"
            :key="tick.id"
            :tick="tick"
            :displayProfile="true"
        ></show-tick>
    </div>
</template>

<script>
    import ShowTick from '@/components/ShowTick.vue';
    export default {
        name: 'show-feed',
        props: {
            'limit': {
                default: -1
            }
        },
        components: {
            'show-tick': ShowTick,
        },
        data: function() {
            return {};
        },
        computed: {
            followingTicks(){
                // TODO This is not updating right away when the store state adds a new profile to follow
                return this.$store.getters.getFollowingTicks(this.limit);
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>