<template>
    <div id="ticks">
        <h1>Ticks</h1>
        <show-tick
            v-for="tick in ticks"
            :key="tick.tickId"
            :tick="tick"
        ></show-tick>
    </div>
</template>

<script>
    import ShowTick from '@/components/ShowTick.vue';
    import { ticks } from '@/ticks.js';
    export default {
        name: 'show-stream',
        components: {
            'show-tick': ShowTick,
        },
        data: function() {
            return {
                ticks: ticks,
            };
        }
    }
</script>

<style lang='scss' scoped>

</style>