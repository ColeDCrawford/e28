<template>
  <div id="app">
    <nav>
      <ul>
          <li v-for="link in links" :key="link">
              <router-link
                :to="paths[link]"
                exact
              >{{ link }}</router-link>
          </li>
      </ul>
    </nav>
    <router-view></router-view>

  </div>

</template>

<script>
// import ShowRoute from './components/ShowRoute.vue'
// import ShowUser from './components/ShowUser.vue'
// import ShowStream from '@/components/ShowStream.vue'

export default {
  name: 'App',
  components: {
    // ShowRoute,
    // ShowStream
  },
  data() {
    return {
        /* Store links in an array to maintain order */
        links: ['home', 'routes'],

        /* Map links to the appropriate component */
        paths: {
            home: '/',
            routes: '/routes'
        },
    };
  },
}
</script>

<style lang='scss'>
  @import '@/assets/scss/ww.scss';
</style>
