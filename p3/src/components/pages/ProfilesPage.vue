<template>
    <div id="profiles">
        <h1>Profiles</h1>
        <div class="card-columns">
            <show-profile
                v-for="profile in profiles"
                :key="profile.id"
                :id="profile.id"
                :profile="profile"
                @update-follows="updateFollows">
            </show-profile>
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
        props: ['ticks'],
        data: function(){
            return {};
        },
        methods: {
            updateFollows(){
                this.$emit('update-follows');
            }
        },
        computed: {
            profiles(){
                return this.$store.state.profiles;
            },
        }
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