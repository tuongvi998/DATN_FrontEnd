<template>
  <div>
    <div class="title">
      <h3>Carousel</h3>
    </div>
    <!-- <div class="md-layout">
      <div class="md-layout-item mx-auto md-small-size-100"> -->
        <md-card>
          <carousel
            :per-page="1"
            loop
            :speed="600"
            autoplay
            :autoplay-timeout="3000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption">
                <h4>
                  <md-icon>location_on</md-icon>
                  Somewhere Beyond, United States
                </h4>
              </div>
              <img :src="carousel1" alt="carousel1" />
            </slide>
            <slide>
              <div class="carousel-caption">
                <h4>
                  <md-icon>location_on</md-icon>
                  Yellowstone National Park, United States
                </h4>
              </div>
              <img :src="carousel2" alt="carousel2" />
            </slide>
            <slide>
              <div class="carousel-caption">
                <h4>
                  <md-icon>location_on</md-icon>
                  Yellowstone National Park, United States
                </h4>
              </div>
              <img :src="carousel3" alt="carousel3" />
            </slide>
          </carousel>
        </md-card>
      </div>
    <!-- </div>
  </div> -->
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "SlickCarousel",
  data() {
    return {
      carousel1: require("@/assets/img/nature-2.jpg"),
      carousel2: require("@/assets/img/nature.jpg"),
      carousel3: require("@/assets/img/nature-3.jpg")
    };
  },
  components: {
  },
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