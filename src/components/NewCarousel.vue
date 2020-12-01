<template>
  <div>
    <b-row>
      <b-col cols="12">
        <carousel 
        :perPage="2"
        loop
        :speed="600"
        autoplay
        :autoplay-timeout="3000"
        :mouse-drag="false"
        navigationEnabled
        navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
        navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
        >
          <slide class="p-2">
            <div class="card h-100 shadow p-2 bg-white box-shadow text-center"
              tag="article"
            >
            <div class="card-title"> 
                Card Title 1
            </div>
            <div class="cad-body">
                <img src="https://picsum.photos/600/300/?image=25" alt="">
            </div>
              <button href="#" class="btn btn-default">Go somewhere</button>
            </div>
          </slide>
          <slide class="p-2">
            <b-card
              title="Card Title 2"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card
              title="Card Title 3"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card
              title="Card Title 4"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
    <div class="title">
      <h3>Carousel</h3>
    </div>
    <!-- <div class="md-layout">
      <div class="md-layout-item mx-auto md-small-size-100"> -->
    <md-card>
      <carousel
        :per-page="2"
        loop
        :speed="600"
        autoplay
        :autoplay-timeout="3000"
        :mouse-drag="false"
        navigationEnabled
        navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
        navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
      >
        <slide class="p-2" v-for="item in list"
          :key="item.index">
            <div
              class="card h-100 shadow p-2 bg-white box-shadow text-center"
              tag="article"
            >
              <div class="card-title">{{ item.title }}</div>
              <div class="cad-body">
                <img :src="item.img" alt="" />
              </div>
              <button href="#" class="btn btn-default">
                {{ item.content }}
              </button>
            </div>
          </slide>

        <!-- <slide>
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
        </slide> -->
      </carousel>
    </md-card>
  </div>
  <!-- </div>
  </div> -->
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// import ActivityList from './ActivityList.vue';
export default {
  data() {
    return {
      carousel1: require("@/assets/img/nature-2.jpg"),
      carousel2: require("@/assets/img/nature.jpg"),
      carousel3: require("@/assets/img/nature-3.jpg"),
      slide: 0,
      sliding: null,
      list: [
        {
          img: require("@/assets/img/handsup.jpg"),
          tittle: "Lorem ipsum dolor sit",
          content:
            "amet, consectetur adipis purus efficitur amet, consectetur adipis purus efficitur",
        },
        {
          img: require("@/assets/img/handsup.jpg"),
          tittle: "Lorem ipsum dolor sit",
          content:
            "amet, consectetur adipis purus efficitur amet, consectetur adipis purus efficitur",
        },
        {
          img: require("@/assets/img/handsup.jpg"),
          tittle: "Lorem ipsum dolor sit",
          content:
            "amet, consectetur adipis purus efficitur amet, consectetur adipis purus efficitur",
        },
      ],
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
  // components: {ActivityList},
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