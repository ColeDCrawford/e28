<template>
    <div id='profile-page'>
        <div v-if="profile">
            <div>{{ id }}</div>
            <show-profile
                :profile="profile"
                :follows="follows"

            ></show-profile>
            <!-- <div v-for="tick in userTicks"
                :key="tick.id"
                :tick="tick"
            >
                {{tick.id}}
                <show-tick></show-tick>
            </div> -->
        <show-tick
            v-for="tick in userTicks"
            :key="tick.id"
            :tick="tick"
            :routes="routes"
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
    props: ['id', 'profiles', 'ticks', 'routes', 'follows'],
    components: {
        'show-profile': ShowProfile,
        'show-tick': ShowTick
    },
    data() {
        return {};
    },
    computed: {
        profile() {
            return this.profiles.filter((profile) => {
                return profile.id == this.id;
            }, this.id)[0];
        },
        profileNotFound(){
            return this.profile == null;
        },
        userTicks(){
            return this.ticks.filter(t => t.mp_user_id == this.id);
        }
    }
};
</script>