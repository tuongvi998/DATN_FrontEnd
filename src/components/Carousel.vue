<template>
  <div>
    <carousel
      :per-page="number_in_slide"
      loop
      :speed="500"
      autoplay
      :autoplay-timeout="3000"
      :mouse-drag="true"
    >
      <!-- navigationEnabled
        navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
        navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>" -->
      <slot name="slide-slot"></slot>
    </carousel>
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// import ActivityList from './ActivityList.vue';
export default {
  name: "SlickCarousel",
  data() {
    return {
      carousel1: require("@/assets/img/nature-2.jpg"),
      carousel2: require("@/assets/img/nature.jpg"),
      carousel3: require("@/assets/img/nature-3.jpg"),
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  props: ["number_in_slide"],
};
</script>

<style lang="scss" scoped>
.slick-slider {
  width: 500px;
  div {
    outline: none;
  }
  h1 {
    text-align: center;
    background-color: #2f3241;
    color: #abe8f6;
    line-height: 100px;
    margin: 3px;
  }
  ::v-deep .slick-arrow:before {
    color: #2f3241;
    opacity: 1;
  }
}
</style>