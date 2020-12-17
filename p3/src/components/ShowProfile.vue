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
                <button type="button" class="btn" :class="{'btn-outline-success': !hovering, 'btn-outline-danger': hovering}" @click="unfollowProfile" @mouseover="hoverIn" @mouseleave="hoverOut" v-if="followingBoolean">{{hovertext}} {{profile.name}}</button>
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
                hovertext: "Following",
                hovering: false
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
                    return true;
                } else {
                    return false;
                }
            },
            // TODO lift this out into getMostRecentTickByProfileId()
            mostRecentTick(){
                let sorted = this.sortedTicks();
                return sorted[0].date;
            },
            userTicks() {
                return this.$store.getters.getTicksByProfileId(this.id);
            },
        },
        methods: {
            hoverIn(){
                this.hovertext='Unfollow';
                this.hovering=true;
            },
            hoverOut(){
                this.hovertext='Following';
                this.hovering=false;
            },
            sortedTicks(){
                let sortedTicks = this.userTicks.sort(function(x,y){
                    return Date.parse(y.date) - Date.parse(x.date);
                })
                return sortedTicks;
            },
            followProfile(){
                // start following
                let f = {
                    user_id:this.user.id,
                    profile_id:this.profile.id
                };
                axios.post('/follow', f).then((response) => {
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
                axios.delete(`/follow/${this.follow.id}`).then((response) => {
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