<template>
    <div class="profile">
        <div class="image" v-if="profilePicNotFound">
            <img src="@/assets/images/missing2.svg"/>
        </div>
        <div class="image" v-else>
            <img :src="profile.avatar" />
        </div>
        <router-link
            :key="profile.id"
            v-bind:to="'/profiles/' + profile.id"
            exact
        > {{ profile.name }} </router-link>
        <!-- <div>{{ profile.name }}</div> -->
        <div>{{ profile.location }}</div>
        <div>
            <button type="button" class="btn" :class="{'btn-outline-success':following}" @click="followUser" v-if="following">Following {{profile.name}}</button>
            <button type="button" class="btn" :class="{'btn-outline-primary':!following}" @click="followUser" v-else>Follow {{profile.name}}</button>
        </div>
        <div v-for="tick in userTicks"
            :key="tick.id"
        >
            {{tick.id}}
        </div>
    </div>
</template>

<script>
    import { axios } from '@/app.js';

    export default {
        name: 'show-profile',
        props: ['profile', 'ticks', 'follows'],
        data: function () {
            return {};
        },
        computed: {
            profilePicNotFound() {
                return this.profile.avatar == "/img/user/missing2.svg" || this.profile.avatar == null;
            },
            following(){
                let following = this.follows.filter((f) => {
                    return f.follow_mp_user_id == this.profile.id;
                }, this.profile.id)[0];
                if(following == null) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        methods: {
            followUser(){
                let follow = this.follows.filter((f) => {
                    return f.follow_mp_user_id == this.profile.id;
                }, this.profile.id)[0];
                if(follow == null){
                    // start following
                    let f = { mp_user_id:200157044, follow_mp_user_id:this.profile.id };
                    axios.post('/follow', f).then((response) => {
                        if(response.data.errors){
                            this.errors = response.data.errors;
                        } else {
                            console.log("success!");
                            this.$emit('update-follows');
                        }
                    });
                } else {
                    // stop following
                    axios.delete(`/follow/${follow.id}`).then((response) => {
                        if(response.data.errors){
                            this.errors = response.data.errors;
                        } else {
                            console.log("success! deleted follow");
                            this.$emit('update-follows');
                        }
                    });
                }
            }
        }
    };
</script>

<style>

</style>