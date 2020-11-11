<template>
    <div class="route">
        <div class="route-header">
            <h1>{{route.name}} <span id="grade">({{route.grade}})</span> <span id="rating">{{route.rating}}</span></h1>
        </div>
        <div class="images">
            <img
                class="route-image"
                :src="route.image"
            />
        </div>
        <div class="details">

        
        </div>
        <div class="user-details">


        </div>
    </div>
</template>

<script>
export default {
  name: 'show-route',
  props: ['route'],
  data: function(){
      return {};
  }
}
</script>

<style lang='scss' scoped>

</style>