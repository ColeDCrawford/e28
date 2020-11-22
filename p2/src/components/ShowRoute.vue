<template>
  <div class="card">
    <img class="card-img-top" :src="route.img_medium" />
    <div class="card-body">
      <h5 class="card-title">
        {{ route.name}}
        <span id="rating">{{ route.rating }}</span> - <span v-for="(type, id) in types" :key="id">{{ type }}</span>
      </h5>
      <div class="card-text">
        <div id="stars"><star-rating
            v-model="route.stars"
            :max-rating="4"
            :increment="0.1"
            :read-only="true"
            :inline="true"
            :star-size="25"
            :show-rating="false"
        ></star-rating>({{route.star_votes}})</div>
        <div id="location">{{route.location}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// Star Rating
import StarRating from "vue-star-rating";

export default {
  name: "show-route",
  props: ["route"],
  data: function () {
    return {};
  },
  components: {
    StarRating,
  },
  computed: {
      types() {
          let types = this.route.type.split(',').map((r) =>
            r.trim()
          );
          return types;
      }
  }
};
</script>

<style>
    .vue-star-rating {
        margin-top: -5px;
    }
</style>