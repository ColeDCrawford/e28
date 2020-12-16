<template>
    <div id="account-page" class="container">
        <div v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

            <div id="following">
                <strong>Your Follows</strong>
                <p v-if="follows && follows.length == 0">
                    No follows yet.
                </p>
                <li v-for="(follow, key) in follows" v-bind:key="key">
                    {{ follow }}
                </li>
            </div>
            <div id="profile">
                <div>
                    <label id="profile">
                        Linked Profile from Mountain Project
                        <vSelect
                            label="name"
                            :options="profiles"
                            :value="this.$store.state.userProfile"
                            @input="setProfile"
                        ></vSelect>
                    </label>
                </div>
            </div>
            <button class="btn btn-secondary" @click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <div>
                <label
                    >Email:
                    <input
                        type="text"
                        data-test="email-input"
                        v-model="data.email"
                /></label>
            </div>
            <div>
                <label
                    >Password:
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="data.password"
                /></label>
            </div>

            <button class="btn btn-primary" @click="login" data-test="login-button">Login</button>
            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
import vSelect from 'vue-select';

export default {
    components:{
        vSelect
    },
    data() {
        return {
            data: {
                // email: 'cole_crawford@fas.harvard.edu',
                // password: '12345', - left here for easy access ...
                profile_id: null,
                errors: null,
                follows: [],
            },

        };
    },
    computed: {
        // Get our user and products state from the Vuex store
        user() {
            return this.$store.state.user;
        },
        profiles(){
            return this.$store.state.profiles;
        },
    },
    methods: {
        loadFollows() {
            if (this.user) {
                // Because follows is a auth-protected resource, this will
                // only return follows belonging to the authenticated user
                axios.get('follow').then((response) => {
                    this.follows = response.data.follow.map((follow) => {
                        return this.$store.getters.getProfileById(
                            follow.profile_id
                        );
                    });
                });
            }
        },
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                    this.setProfile();
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
        setProfile(ww_profile){
            console.log(ww_profile); // new profile we are linking (set ww_user_id to user.id)
            console.log(this.$store.state.userProfile); //currentProfile we are unlinking (set ww_user_id to null)
            let fullProfile = { ...ww_profile};
            fullProfile['ww_user_id'] = parseInt(this.user.id);

            let oldProfile = {...this.$store.state.userProfile};
            if(oldProfile){
                oldProfile.ww_user_id = null;
                axios.put(`profile/${oldProfile.id}`, oldProfile).then((response) => {
                    console.log("old profile res", response);
                    if(response.data.success){
                        console.log("old profile unlinked");
                        this.$store.commit('editProfile', oldProfile);
                    }
                })
            }

            for(const prop in fullProfile){
                if(fullProfile[prop] === null || fullProfile[prop] === undefined){
                    delete fullProfile[prop];
                }
            }
            axios.put(`profile/${fullProfile.id}`, fullProfile).then((response) => {
                console.log("new profile res: ", response);
                if(response.data.success){
                    this.$store.commit('setUserProfile', fullProfile);
                    console.log("store updated with new profile")
                }
            })
        },
    },
    watch: {
        user() {
            this.loadFollows();
        },
    },
    mounted() {
        this.loadFollows();
    },
};
</script>
<style src="vue-select/dist/vue-select.css"></style>
<style scoped>

</style>