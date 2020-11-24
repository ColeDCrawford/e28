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
            <div class="card-text">
                <button type="button" class="btn" :class="{'btn-outline-success':following}" @click="followUser" v-if="following">Following {{profile.name}}</button>
                <button type="button" class="btn" :class="{'btn-outline-primary':!following}" @click="followUser" v-else>Follow {{profile.name}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { axios } from '@/app.js';

    export default {
        name: 'show-profile',
        props: ['profile','follows', 'ticks'],
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
            },
            mostRecentTick(){
                let sortedTicks = this.ticks.slice(0).filter(t => t.mp_user_id == this.profile.id);
                sortedTicks = sortedTicks.sort(function(x,y){ // Need to copy the array to avoid mutating it
                    return Date.parse(y.date) - Date.parse(x.date);
                });
                return sortedTicks[0].date;
            },
            userTicks(){
                return this.ticks.filter(t => t.mp_user_id == this.id);
            },

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
                            this.$emit('update-follows');
                        }
                    });
                } else {
                    // stop following
                    axios.delete(`/follow/${follow.id}`).then((response) => {
                        if(response.data.errors){
                            this.errors = response.data.errors;
                        } else {
                            this.$emit('update-follows');
                        }
                    });
                }
            }
        }
    };
</script>

<style>
    .profile-avatar-img {
        max-height:200px;
    }
</style>