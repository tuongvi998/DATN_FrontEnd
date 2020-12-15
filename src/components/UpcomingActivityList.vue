<template>
  <div>
    <div class="activity-list">
      <h3 class="pt-5 mb-4">Các dự án sắp diễn ra</h3>
      <div class="pb-5">
        <carousel class="p-4" :number_in_slide="number_in_slide">
          <slide
            class="p-4"
            v-for="item in list"
            :key="item.index"
            slot="slide-slot"
          >
            <div
              class="card h-100 border-0 bg-white"
              tag="article"
            >
              <div class="cad-body">
                <img :src="item.image" id="card-img" />
              </div>
              <div class="card-title">{{ item.title }}</div>
              <div class="card-content p-3">
                <div id="active-content">
                {{ item.content }}
              </div>
              </div>
              
            </div>
          </slide>
        </carousel>
        <router-link tag="a"
          :to="{name: 'activity'}"
          class="btn-primary btn-outline mr-2 ml-2 mt-3"
          id="activity-btn"
          >Xem thêm <i class="fas fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      number_in_slide: window.innerWidth > 768? 3 : 2,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  watch: {
    windowWidth(val) {
      if (val < 576) {
        this.number_in_slide = 1;
      } else if (val < 768) {
        this.number_in_slide = 2;
      } else if (val > 768) {
        this.number_in_slide = 3;
      }
    },
  },
  props: {
    list: {
      type: Array,
      require: true
    }
  }
};
</script>

<style scoped>
.card-content {
  text-align: left;
}
#active-content{
 /* display: block; */
 display: -webkit-box;
 max-width: 100%;
 margin: 0 auto;
 font-size: 14px;
 line-height: 1.5;
 -webkit-line-clamp: 5;
 -webkit-box-orient: vertical;
 overflow: hidden;
 text-overflow: ellipsis;
 color: #3C4858;
}
.activity-list {
  background: #e8ecf2;
  text-align: center;
}
.card-title {
  text-transform: uppercase;
}
.activity-list h3 {
  /* font-size: 0.715rem; */
  letter-spacing: 0.7px;
  line-height: 1.5;
  font-weight: 500;
  font-family: Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
  color: #3d4652;
  margin: 18px 0;
  text-align: center;
  margin-bottom: 0;
  transform: scale(1, 0.9);
}
#card-img {
  width: 100%;
  height: 230px;
}
@media (max-width: 576px) {
  #card-img {
    width: 100%;
    height: 80px;
  }
  .activity-list h3{
    font-size: 20px;
    font-weight: 500;
    transform: scale(1, 0.8);
  }
  .card-title{
    font-size: 14px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  #card-img {
    width: 100%;
    height: 170px;
  }
}
@media (max-width: 576px) {
  #card-img {
    width: 100%;
    height: 130px;
  }
}
#activity-btn {
  border-color: #435061;
  color: #435061;
}
#activity-btn:hover {
  border-color: #4ba64f;
  background: linear-gradient(60deg, #66bb6a, #388e3c);
  color: #fff;
  border: none;
}
.btn-primary {
  padding: 0 22px;
  border: 1px solid;
  border-radius: 3px;
  font: 700 12px/36px "Montserrat", sans-serif;
  text-transform: uppercase;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: inline-block;
  white-space: nowrap;
  text-shadow: none;
  text-align: center;
  -webkit-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}
.btn-primary.btn-outline {
  background: none;
}
</style>
