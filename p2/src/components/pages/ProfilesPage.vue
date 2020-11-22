<template>
    <div id="profiles">
        <h1>Profiles</h1>
        <div class="card-columns">
            <router-link
                v-for="profile in profiles"
                :key="profile.id"
                v-bind:to="'/profiles/' + profile.id"
                exact
            >
                <show-profile :profile="profile" :follows="follows"></show-profile>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ShowProfile from '@/components/ShowProfile.vue';

    export default {
        name: '',
        components: {
            'show-profile': ShowProfile,
        },
        props: ['profiles', 'follows'],
        data: function(){
            return {};
        },
    };

</script>

<style>
    /** Modify number of columns https://stackoverflow.com/questions/34140793/bootstrap-4-responsive-cards-in-card-columns */
    @media (min-width: 576px) {
        .card-columns {
            column-count: 2;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 3;
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 4;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            column-count: 5;
        }
    }
</style>