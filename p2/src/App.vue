<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav mr-auto">
            <router-link
              v-for="link in links"
              :key="link"
              :to="paths[link]"
              exact
              class="nav-link"
            >{{ link }}</router-link>
        </div>
      </div>
    </nav>
    <router-view
      :routes="routes"
      :profiles="profiles"
      :areas="areas"
      :ticks="ticks"
      :follows="follows"
      v-on:update-follows="updateFollows()"
    ></router-view>

  </div>

</template>

<script>

import { axios } from '@/app.js';

export default {
  name: 'App',
  components: {},
  data() {
    return {
        /* Store links in an array to maintain order */
        links: ['Home', 'Routes', 'Profiles', 'Feed'],

        /* Map links to the appropriate component */
        paths: {
            Home: '/',
            Routes: '/routes',
            Profiles: '/profiles',
            Feed: '/feed'
        },

        routes: [],
        profiles: [],
        areas: [],
        ticks: [],
        follows: []
    };
  },
  mounted() {
    axios.get('route').then((response) => {
      this.routes = response.data.route;
    });
    axios.get('profile').then((response) => {
      this.profiles = response.data.profile;
    });
    axios.get('area').then((response) => {
      this.areas = response.data.area;
    });
    axios.get('tick').then((response) => {
      this.ticks = response.data.tick;
    });
    this.updateFollows();
  },
  methods: {
    updateFollows(){
      axios.get('follow').then((response) =>{
        this.follows = response.data.follow;
      });
    }
  }
}
</script>

<style lang='scss'>
  @import '@/assets/scss/ww.scss';
</style>
