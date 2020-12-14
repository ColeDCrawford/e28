<template>
    <div id='profile-page' class="container">
        <div v-if="profile">
            <show-profile
                :profile="profile"
                :follows="follows"
                :id="id"
                @update-follows="updateFollows"
            ></show-profile>
        <show-tick
            v-for="tick in userTicks"
            :key="tick.id"
            :tick="tick"
        ></show-tick>
        </div>
        <div v-if="profileNotFound">
            <p>Profile {{id}} not found.</p>
        </div>
    </div>
</template>

<script>
import ShowProfile from '@/components/ShowProfile.vue';
import ShowTick from '@/components/ShowTick.vue';
export default {
    name: '',
    props: ['id', 'follows'],
    components: {
        'show-profile': ShowProfile,
        'show-tick': ShowTick
    },
    data() {
        return {};
    },
    computed: {
        // profile() {
        //     return this.profiles.filter((profile) => {
        //         return profile.id == this.id;
        //     }, this.id)[0];
        // },
        profile(){
            return this.$store.getters.getProfileById(this.id);
        },
        profileNotFound(){
            return this.profile == null;
        },
        // userTicks(){
        //     let filtered = this.ticks.filter(t => t.mp_user_id == this.id);
        //     return filtered.sort((x, y) => Date.parse(y.date) - Date.parse(x.date));
        // },
        userTicks() {
            return this.$store.getters.getTicksByProfileId(this.id);
        }
    },
    methods: {
        updateFollows(){
            this.$emit('update-follows');
        }
    }
};
</script>