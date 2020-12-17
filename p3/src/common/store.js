import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routes: [],
        profiles: [],
        areas: [],
        ticks: [],
        follows: [],
        user: null,
        user_profile: null
    },
    mutations: {
        setRoutes(state, payload){
            state.routes = payload;
        },
        setAreas(state, payload){
            state.areas = payload;
        },
        setTicks(state, payload){
            state.ticks = payload;
        },
        setFollows(state, payload){
            state.follows = payload;
        },
        setProfiles(state, payload){
            state.profiles = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setUserProfile(state, payload){
            state.userProfile = payload;
        },
        editProfile(state, payload){
            const profile = state.profiles.find(profile => profile.id === payload.id);
            Object.assign(profile, payload);
        },
        setFollow(state, payload){
            state.follows.push(payload);
        },
        deleteFollow(state, payload){
            var index = state.follows.find(follow => follow.profile_id === payload.profile_id && follow.user_id === payload.user_id );
            state.follows.splice(index,1);
        }
    },
    actions: {
        fetchRoutes(context) {
            axios.get('route').then((response) => {
                let modprops = ["latitude","longitude","pitches", "stars", "star_votes"]
                let modRoutes = response.data.route.map(route => {
                    let newroute = route;
                    modprops.forEach(el => newroute[el] = parseFloat(route[el]));
                    return newroute;
                })
                context.commit('setRoutes', modRoutes);
            });
        },
        fetchProfiles(context){
            axios.get('profile').then((response) => {
                context.commit('setProfiles', response.data.profile);
            });
        },
        fetchUserProfile(context){
            axios.get('profile').then((response) => {
                let profile = null;
                for(var i = 0; i < response.data.profile.length; i++){
                    if(response.data.profile[i].id == this.state.user.id){
                        profile = response.data.profile[i];
                    }
                }
                if(profile){
                    context.commit('setUserProfile', profile);
                }
            });
        },
        fetchAreas(context){
            axios.get('area').then((response) => {
                context.commit('setAreas', response.data.area);
              });
        },
        fetchTicks(context){
            axios.get('tick').then((response) => {
                context.commit('setTicks', response.data.tick);
            });
        },
        fetchFollows(context){
            axios.get('follow').then((response) => {
                context.commit('setFollows', response.data.follow);
            });
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }
                    resolve();
                });
            });
        },
    },
    getters: {
        getRouteById(state) {
            return function (id) {
                return state.routes.filter((route) => {
                    return route.id == id;
                }, this.id)[0];
            }
        },
        getTicksByRouteId(state){
            return function(routeid){
                return state.ticks.filter((tick) => {
                    return tick.route_id == routeid
                }, this.routeid);
            }
        },
        getTicksByProfileId(state){
            return function(profileid){
                let filteredTicks = state.ticks.filter((tick) => {
                    return tick.mp_user_id == profileid           // this is the same as profile_id, update it
                }, this.id);
                return filteredTicks.sort(function(x,y){
                    return Date.parse(y.date) - Date.parse(x.date);
                })
            }
        },
        getProfileById(state) {
            return function (id) {
                return state.profiles.filter((profile) => {
                    return profile.id == id;
                }, this.id)[0];
            }
        },
        getProfileByWWId(state) {
            return function (ww_id) {
                return state.profiles.filter((profile) => {
                    return profile.ww_user_id == ww_id;
                }, this.id)[0];
            }
        },
        getFollowingTicks(state){
            return function(limit){
                let followingIds = state.follows.map(f => {
                    return f.profile_id;
                });
                let filteredTicks = state.ticks.filter((tick) => {
                    return followingIds.includes(tick.mp_user_id)
                });
                let sortedTicks = filteredTicks.sort(function(x,y){
                    return Date.parse(y.date) - Date.parse(x.date);
                })
                if(limit > 0){
                    return sortedTicks.slice(0, limit);
                } else {
                    return sortedTicks;
                }
            }
        },
        isFollowing(state){
            return function (id) { //profile_id
                var fol = state.follows.filter(function(f){
                    return f.profile_id == id && f.user_id == state.user.id;
                }, this.id)[0];       
                return fol;
            }
        }

        // getMostRecentTickByProfileId(state){
        //     //https://www.reddit.com/r/vuejs/comments/7dqlfc/vuex_best_practice_do_you_keep_sorted_data_in_the/
        //     const ticks = [...state.ticks].sort((a,b)) => {
        //         if()
        //     }
        //     return function(profileid){
        //         return state.ticks.filter((tick) => {
        //             return tick
        //         })
        //     }
        // }
    }

    // routeTicks(){
    //     let filtered = this.ticks.slice(0).filter(t => t.route_id == this.route.id);
    //     return filtered.sort((x, y) => Date.parse(y.date) - Date.parse(x.date));
    //   }
    
})