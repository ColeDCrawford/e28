<template>
  <div class="container" v-if="individual">
      <div class="row">
        <h3>
            {{ route.name}}
        </h3>
    </div>
    <div class="row">
        <div class="stars"><star-rating
            v-model="route.stars"
            :max-rating="4"
            :increment="0.1"
            :read-only="true"
            :inline="true"
            :star-size="25"
            :show-rating="false"
        ></star-rating>({{route.star_votes}})</div>
        <span class="rating">{{ route.rating }}</span> : <span v-for="(type, id) in types" :key="id">{{ type }}</span>
    </div>
    <div class="row route-image">
        <img :src="route.img_medium"/>
    </div>
    <div class="row location">
        {{route.location}}
    </div>
    <div class="row">
        <h4>Ticks</h4>
    </div>
    <div class="row ticks">
        <show-tick
            v-for="tick in routeTicks"
            :key="tick.id"
            :tick="tick"
            :routes="routes"
            :follows="follows"
            :displayRouteInfo="false"
            :displayProfile="true"
        ></show-tick>
    </div>

  </div>
  <div class="card" v-else>
    <img class="card-img-top" v-lazy="route.img_medium" />
    <div class="card-body">
      <h5 class="card-title">
        {{ route.name}}
        <span class="rating">{{ route.rating }}</span> - <span v-for="(type, id) in types" :key="id">{{ type }}</span>
      </h5>
      <div class="card-text">
        <div class="stars"><star-rating
            v-model="route.stars"
            :max-rating="4"
            :increment="0.1"
            :read-only="true"
            :inline="true"
            :star-size="25"
            :show-rating="false"
        ></star-rating>({{route.star_votes}})</div>
        <div class="location">{{route.location}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// Star Rating
import StarRating from "vue-star-rating";
import ShowTick from '@/components/ShowTick.vue';

export default {
  name: "show-route",
  props: ["route", "individual", "ticks", "routes"],
  data: function () {
    return {};
  },
  components: {
    StarRating,
    ShowTick
  },
  computed: {
      types() {
          let types = this.route.type.split(',').map((r) =>
            r.trim()
          );
          return types;
      },
      routeTicks(){
        let filtered = this.ticks.slice(0).filter(t => t.route_id == this.route.id);
        return filtered.sort((x, y) => Date.parse(y.date) - Date.parse(x.date));
      }
  }
};
</script>

<style>
    .vue-star-rating {
        margin-top: -5px;
    }
    .rating {
        font-weight: bold;
    }
</style>