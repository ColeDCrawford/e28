<template>
    <div id="ticks">
        <h1 v-if="limit < 0">Following Tick Feed</h1>
        <show-tick
            v-for="tick in followingTicks"
            :key="tick.id"
            :tick="tick"
            :routes="routes"
            :follows="follows"
            :displayProfile="true"
        ></show-tick>
    </div>
</template>

<script>
    import ShowTick from '@/components/ShowTick.vue';
    export default {
        name: 'show-feed',
        props: {
            'ticks': {},
            'routes': {},
            'follows': {},
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
                let followingIds = this.follows.map(f => {
                    return f.profile_id;
                });
                let followingTicks = this.ticks.filter(({user_id}) => followingIds.includes(user_id));
                followingTicks = followingTicks.sort((x, y) => Date.parse(y.date) - Date.parse(x.date));
                if(this.limit < 0){
                    return followingTicks;
                } else {
                    return followingTicks.slice(0,this.limit);
                }
                
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>