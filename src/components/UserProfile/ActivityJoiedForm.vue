<template>
  <div>
    <div
      class="container"
      v-for="activity in getActivityJoined"
      :key="activity.index"
    >
      <div class="row mt-5">
        <div class="col-md-6 col-sm-6 col-8">
          <img :src="activity.image_url" class="rounded" alt="" />
        </div>
        <div class="col-md-6 col-sm-6 col-12">
          <h5>{{ activity.title }}</h5>
          <small class=""
            ><i class="fas fa-map-marker-alt mr-2"></i
            >{{ activity.address }}</small
          >
          <p class="mt-1" id="active-content">{{ activity.content }}</p>
          <router-link
            tag="a"
            :to="{ name: 'activity-detail', params: { id: activity.id } }"
            class="btn-primary btn-outline mr-2 ml-2 mt-3"
            id="activity-btn"
            >Chi tiết<i class="fas fa-arrow-right"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import { mapGetters } from "vuex";
export default {
  name: "ActivityJoinedForm",
  props: {
    img: {
      type: String,
      require: true,
    },
  },
  computed: {
    ...mapGetters({
      getActivityJoined: "getActivityJoined",
    }),
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token == null) {
      console.log("null");
    } else {
      var id = VueJwtDecode.decode(token);
      //   console.log("token   ", typeof(id.sub.toString()));
      this.$store.dispatch("showActivityJoined");
      // console.log(this.getActivityJoined);
    }
  },
};
</script>

<style scoped>
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
#active-content {
  display: -webkit-box;
  max-width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.5;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3c4858;
}
@media (max-width: 768px) {
  .btn-primary {
    padding: 0 14px;
    border: 1px solid;
    border-radius: 3px;
    font: 700 10px/32px "Montserrat", sans-serif;
  }
}
</style>
