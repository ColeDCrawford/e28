import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routesListCount: 0,
        routesList: [],
        routes: [],
        profiles: [],
        areas: [],
        ticks: [],
        follows: []
    },
    mutations: {
        setRoutesListCount(state, payload) {
            state.routesListCount = payload;
        },
        setRoutesList(state, payload){
            state.routesList = payload;
        },
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
        }
    },
    actions: {
        fetchRoutes(context) {
            axios.get('route').then((response) => {
                context.commit('setRoutes', response.data.route);
            });
        },
        fetchProfiles(context){
            axios.get('profile').then((response) => {
                context.commit('setProfiles', response.data.profile);
            });
        },
        fetchAreas(context){
            axios.get('area').then((response) => {
                context.commit('setAreas', response.data.area);
              });
        },
        fetchTicks(context){
            axios.get('tick').then((response) => {
                console.log("ticks fetched");
                context.commit('setTicks', response.data.tick);
            });
        }
    },
    getters: {
        // getRouteById(state) {
        //     return function (id) {
        //         return state.routes.filter((route) => {
        //             return route.id == id;
        //         }, this.id)[0];
        //     }
        // },
    }
    
})