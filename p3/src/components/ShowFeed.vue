<template>
    <div id="ticks">
        <h1 v-if="limit < 0">Following Tick Feed</h1>
        <show-tick
            v-for="tick in followingTicks"
            :key="tick.id"
            :tick="tick"
            :displayProfile="true"
        ></show-tick>
        <div>{{ followingTicksVuex }}</div>
    </div>
</template>

<script>
    import ShowTick from '@/components/ShowTick.vue';
    export default {
        name: 'show-feed',
        props: {
            'ticks': {},
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
                let followingTicksArr = [];
                followingIds.forEach(function(profile_id){
                    followingTicksArr.push(this.$store.getters.getTicksByProfileId(profile_id));
                })
                if(this.limit < 0){
                    return followingTicksArr;
                } else {
                    return followingTicksArr.slice(0,this.limit);
                }
            },
            follows(){
                return this.$store.state.follows;
            },
            followingTicksVuex(){
                return this.$store.getters.getFollowingTicks(10);
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>