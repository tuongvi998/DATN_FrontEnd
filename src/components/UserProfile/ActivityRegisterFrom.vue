<template>
  <div>
    <div
      class="container"
      v-for="activity in getActivityRegister"
      :key="activity.index"
    >
      <div class="row mt-5">
        <div class="col-md-6 col-sm-6 col-8">
          <img :src="activity.image" class="rounded pl-3 pr-3 pb-3" alt="" />
        </div>
        <div class="col-md-6 col-sm-6 col-12">
          <h5 class="pb-2">{{ activity.title }}</h5>
          <!-- <p id="active-content">{{activity.content}}</p> -->
          <div class="active-content">
            <p>Địa điểm: {{ activity.activity_address }}</p>
          <p>
            Thời gian: {{ activity.start_date }} đến {{ activity.end_date }}
          </p>
          <p>Trạng thái xác nhận: <i v-if="activity.isAccept" class="far fa-check-circle ml-2 text-success check-accept"></i></p>
          
          <h3><i v-if="activity.isAccept" class="far fa-check-circle text-success"></i></h3>
          <a
            href=""
            class="btn-primary btn-outline mr-2 ml-2 mt-1"
            id="activity-btn"
            >Chi tiết<i class="fas fa-arrow-right"></i
          ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import { mapGetters } from "vuex";
export default {
  name: "ActivityRegisterForm",
  props: {
    img: {
      type: String,
      require: true,
    },
  },
  computed: {
    ...mapGetters({
      getActivityRegister: "getActivityRegister",
    }),
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token == null) {
      console.log("null");
    } else {
      var id = VueJwtDecode.decode(token);
      //   console.log("token   ", typeof(id.sub.toString()));
      this.$store.dispatch("showActivityRegister", id.sub);
      console.log(this.getActivityRegister);
    }
  },
};
</script>

<style scoped>
.check-accept{
  font-size: 20px;
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
.active-content {
  max-width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.2;
  overflow: hidden;
  /* text-overflow: ellipsis; */
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
