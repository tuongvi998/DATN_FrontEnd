<template>
  <div>
    <div
      class="col-md-12 col-sm-12 col-12 mt-5 d-flex text-center"
      v-for="activity in listAllUpcomingActivity"
      :key="activity.index"
    >
      <div class="card-image p-1">
        <img class="rounded" :src="activity.image" alt="Snowy Mountains" />
      </div>
      <div class="activity-detail pl-3 text-left">
        <h3 class="card-title">{{ activity.title }}</h3>
        <small>{{ activity.field_name }}</small>
        <br />
        <small>{{ activity.start_date }} ~ {{ activity.end_date }}</small>
        <div id="activity-content">
          {{ activity.content }}
        </div>
        <router-link :to="{name: 'activity-detail', params: {id: activity.id}}"><button class="btn-primary text-center" @click="detail" id="detail-btn">
          xem them<span>&rarr;</span>
        </button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "activity-card",
  props: {
    activity_list: {
      type: Array,
      require: true,
    },
  },
computed: {
    ...mapGetters({
      listAllUpcomingActivity: "getAllUpcomingActivity",
    }),
  },
  methods:{
    detail(){
      alert('hdajdas')
    }
  },
  created() {
    this.$store.dispatch("showAllUpcomingActivity");
  },
};
</script>

<style scoped>
.card-image {
  width: 38%;
}
.card-title {
  text-transform: uppercase;
  letter-spacing: 0.7px;
  line-height: 1.5;
  font-weight: 500;
  font-family: Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  color: #3d4652;
  /* margin: 18px 0; */
  /* text-align: center; */
  margin-bottom: 0;
  transform: scale(1, 0.9);
}
#activity-content {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3c4858;
}
.activity-detail {
  width: 60%;
}
.btn-primary {
  margin-top: 25px;
  /* padding: 0 22px; */
  padding: 0 12px;
  border: 1px solid;
  border-radius: 3px;
  font: 700 11px/30px "Montserrat", sans-serif;
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
#detail-btn {
  border-color: #4ba64f;
  background: #4ba64f;
  /* linear-gradient(60deg, #66bb6a, #388e3c); */
  color: #fff;
  border: none;
}
</style>
