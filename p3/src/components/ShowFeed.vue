<template>
    <div id="ticks">
        <h1 v-if="limit < 0">Following Tick Feed</h1>
        <show-tick
            v-for="tick in followingTicks"
            :key="tick.id"
            :tick="tick"
            :displayProfile="true"
        ></show-tick>
        <div>{{ followingTicks }}</div>
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
            // followingTicks(){
            //     let followingIds = this.follows.map(f => {
            //         return f.profile_id;
            //     });
            //     console.log("I follow ...");
            //     console.log(followingIds);
            //     let followingTicksArr = [];
            //     for(var i = 0; i < followingIds.length; i++){
            //         let profile_id = followingIds[i];
            //         console.log("ticks of profileIds");
            //         console.log(this.$store.getters.getTicksByProfileId(profile_id));
            //         followingTicksArr.push(this.$store.getters.getTicksByProfileId(profile_id));
            //     }
            //     if(this.limit < 0){
            //         return followingTicksArr;
            //     } else {
            //         return followingTicksArr.slice(0,this.limit);
            //     }
            // },
            // follows(){
            //     return this.$store.state.follows;
            // },
            followingTicks(){
                return this.$store.getters.getFollowingTicks(this.limit);
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>