<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1>Volunteer</h1>
            <h3>DATN</h3>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-help pt-5">
        <div class="container pt-3">
          <help-process></help-process>
        </div>
      </div>
      <div class="section section-activity-list">
        <div class="contai">
          <upcoming-activity-list :list="upcoming_activity"></upcoming-activity-list>
        </div>
      </div>
      <div class="section section-download pt-4" id="downloadSection">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 id="title">Tình nguyện cho tương lai</h2>
              <h4 class="pt-4">
                Chúng tôi tin rằng, thông tin là nhân tố quan trọng trong mục
                tiêu xây dựng một cộng đồng tốt đẹp hơn. Khi càng có nhiều người
                biết đến các vấn đề xã hội tồn tại tại khu vực mình sinh sống,
                sẽ càng có nhiều người trong chúng ta muốn chung tay giúp sức.
                Đồng thời, sự hiểu biết giúp chúng ta định hướng hành động. Vì
                khi hiểu rõ các nhu cầu mà địa phương cần giúp sức và xác định
                được trọng tâm thiện nguyện mà bạn quan tâm, bạn sẽ có thể đầu
                tư thời gian và nguồn lực sẵn có theo cách hiệu quả nhất.
              </h4>
            </div>
          </div>
          <div
            class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
          >
            <md-button class="md-success"
              ><router-link to="/register">ĐĂNG KÝ NGAY</router-link>
              </md-button
            ><br />
          </div>
        </div>
      </div>
      <div class="section section-field-list">
        <div class="">
          <div class="parallax vc_parallax">
            <div class="dark-opacity">
              <div class="row p-5">
                <div class="col-md-4 d-flex justify-content-center">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. L
                  </h5>
                </div>
                <div class="col-md-4">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium id modi sapiente provident aliquam ut. Ducimus
                  </h5>
                </div>
                <div class="col-md-4">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium id modi sapiente provident aliquam ut. Ducimus
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="pb-5 pt-1">
          <contact></contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard, HelpProcess, UpcomingActivityList, Contact } from "@/components";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    HelpProcess,
    Contact,
    UpcomingActivityList,
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      // default: require("@/assets/img/vue-mk-header.jpg"),
      default: require("@/assets/img/handsup.jpg"),
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png"),
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png"),
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png"),
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png"),
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg"),
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg"),
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg"),
    },
  },
  data() {
    return {
      leafShow: false,
      helpinghand: require("@/assets/img/helping-hand.png"),
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
  },
  computed: {
    ...mapGetters({
      upcoming_activity: "getUpcomingActivity",
    }),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`,
      };
    },
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  created() {
    this.$store.dispatch("showUpcomingActivity");
    // console.log(this.upcoming_activity);
  },
};
</script>
<style lang="scss">
// number about volunteer
.hepl-hand {
  color: red;
}
.parallax {
  z-index: 1;
  background-size: cover;
  opacity: 0.95;
  background-repeat: no-repeat, repeat;
  background-image: url("http://wp1.themexlab.com/wp/volunteer/wp-content/uploads/2015/10/image-2.jpg");
}
.dark-opacity {
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}
.vc_parallax {
  position: relative;
  overflow: hidden;
}

.tpath-vc-section {
  margin-bottom: 0;
  position: relative;
}

.section {
  padding: 20px 0;
}
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
#title {
  font-family: Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
