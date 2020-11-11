<template>
    <div class="tick">
        <div class="tick-owner">User - Cole Crawford</div>
        <div class="tick-info">
            <li class="tick-date">Date: {{ tick.date }}</li>
            <li class="tick-style">Style: {{ tick.style }}</li>
            <li class="tick-id">Id: {{ tick.routeId }}</li>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'show-tick',
        props: ['tick'],
        data: function () {
            return {};
        },
    };
</script>

<style lang='scss' scoped>

</style>