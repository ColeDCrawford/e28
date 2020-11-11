<template>
    <div id='route-page'>
        <h1>Route {{ id }}</h1>
    </div>
</template>

<script>
export default {
    props: ['id'], // comes from our dynamic segment
    data() {
        return {
        };
    }
};
</script>