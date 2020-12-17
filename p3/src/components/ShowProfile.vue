<template>
    <div class="profile card">
        <h5 class="card-header" v-if="following">Following</h5>
        <router-link
            :key="profile.id"
            v-bind:to="'/profiles/' + profile.id"
            exact>
            <div class="card-img-top" v-if="profilePicNotFound">
                <img class="profile-avatar-img" src="@/assets/images/missing2.svg"/>
            </div>
            <div class="card-img-top" v-else>
                <img class="profile-avatar-img" :src="profile.avatar" />
            </div>
            <h5 class="card-title profile-name">{{profile.name}}</h5>
        </router-link>
        <div class="card-body">
            <div class="card-text">{{ profile.location }}</div>
            <div class="card-text">Most Recent Tick: {{ mostRecentTick }}</div>
            <div class="card-text" v-if="user">
                <button type="button" class="btn btn-outline-success" @click="unfollowProfile" @mouseover="hovertext='Unfollow'" @mouseleave="hovertext='Following'" v-if="followingBoolean">{{hovertext}} {{profile.name}}</button>
                <button type="button" class="btn btn-outline-primary" @click="followProfile" v-else>Follow {{profile.name}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { axios } from '@/app.js';

    export default {
        name: 'show-profile',
        props: ['profile','id'],
        data: function () {
            return {
                errors: null,
                hovertext: "Following"
            };
        },
        computed: {
            user() {
                return this.$store.state.user;
            },
            profilePicNotFound() {
                return this.profile.avatar == "/img/user/missing2.svg" || this.profile.avatar == null;
            },
            follow(){
                // returns a follow, not boolean
                return this.$store.getters.isFollowing(this.id);
            },
            followingBoolean(){
                console.log(this.$store.getters.isFollowing(this.id));
                if(this.$store.getters.isFollowing(this.id)){
                    console.log("followingBoolean true");
                    return true;
                } else {
                    console.log('followingBoolean false');
                    return false;
                }
            },
            // TODO lift this out into isFollowing Vuex getter function? 
            // following(){
            //     let following = this.follows.filter((f) => {
            //         return f.profile_id == this.id;
            //     }, this.id)[0];
            //     if(following == null) {
            //         return false;
            //     } else {
            //         return true;
            //     }
            // },
            // TODO lift this out into getMostRecentTickByProfileId()
            mostRecentTick(){
                // let sortedTicks = this.ticks.slice(0).filter(t => t.mp_user_id == this.profile.id);
                // let sortedTicks = this.ticks.sort(function(x,y){ // Need to copy the array to avoid mutating it
                //     return Date.parse(y.date) - Date.parse(x.date);
                // });
                let sorted = this.sortedTicks();
                return sorted[0].date;
            },
            userTicks() {
                return this.$store.getters.getTicksByProfileId(this.id);
            },
            // follows(){
            //     return this.$store.state.follows;
            // }
        },
        methods: {
            sortedTicks(){
                let sortedTicks = this.userTicks.sort(function(x,y){
                    return Date.parse(y.date) - Date.parse(x.date);
                })
                return sortedTicks;
            },
            followProfile(){
                // start following
                console.log('following profile');
                let f = {
                    user_id:this.user.id,
                    profile_id:this.profile.id
                };
                axios.post('/follow', f).then((response) => {
                    console.log("follow response");
                    console.log(response);
                    if(response.data.errors){
                        this.errors = response.data.errors;
                    } else {
                        // this.$emit('update-follows'); no need to pass this up?
                        this.$store.commit('setFollow', response.data.follow);
                    }
                });
            },
            unfollowProfile(){
                // stop following
                console.log('unfollow');
                axios.delete(`/follow/${this.follow.id}`).then((response) => {
                    console.log("delete response");
                    console.log(response);
                    if(response.data.errors){
                        this.errors = response.data.errors;
                    } else {
                        // this.$emit('update-follows');
                        this.$store.commit('deleteFollow', this.follow.id);
                    }
                });
            }
        }
    };
</script>

<style>
    .profile-avatar-img {
        max-height:200px;
    }
</style>