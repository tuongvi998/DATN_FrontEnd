<template>
  <div class="w-100">
    <div class="row w-100 breadcrumb">
      <div class="col-md-5">
        <ul id="breadcrumb-menu">
          <li id="breadcrumb-item">Hoạt động</li>
          <li id="breadcrumb-item" v-if="this.$route.params.fieldname != ''">
            / {{ this.$route.params.fieldname }}
          </li>
        </ul>
      </div>
      <div class="col-md-7">
        <div class="datime text-right">
          <date-picker
            format="YYYY-MM"
            type="month"
            v-model="month"
            placeholder="Tháng diễn ra"
            valueType="format"
          ></date-picker>
        </div>
      </div>
    </div>
    <!-- <div v-if="!checkActi" class="row w-100 d-flex text-center">
      <h3>hhhhhhhhhhhhhh</h3>
    </div> -->
    <div
      class="col-md-12 col-sm-12 col-12 mt-4 d-flex text-center"
      v-for="activity in list"
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
        <router-link
          :to="{ name: 'activity-detail', params: { id: activity.id } }"
          ><button class="btn-primary text-center" id="detail-btn">
            Xem thêm<span>&rarr;</span>
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../service/index";
import { mapGetters, mapState } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "activity-card",
  data() {
    return {
      noti: "",
      checkActi: true,
      month: "",
      params: "",
      listActivity: [],
      list: [],
    };
  },
  components: {
    DatePicker,
  },
  computed: {
  },
  methods: {
    loadData() {
      this.month = "";
      this.checkActi = true;
      console.log("dsfdsfdsdfsdsfsdfsd", this.checkActi);
      this.params = this.$route.params.fieldname;
      http
        .getNormal("/activities/field", this.params)
        .then((response) => {
          if (response.data.data == null) {
          } else {
            this.listActivity = response.data.data;
            this.list = this.listActivity;
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filteredList() {
      var newList = [];
      this.listActivity.filter((acti) => {
        var dd = new Date(this.month);
        var at = new Date(acti.start_date);

        if (
          dd.getMonth() == at.getMonth() &&
          dd.getFullYear() == at.getFullYear()
        ) {
          newList.push(acti);
        }
      });
      if (newList.length == 0) {
        // this.checkActi = false;
        this.list = newList;
      } else {
        // this.checkActi = true;
        this.list = newList;
      }
    },
  },
  created() {
    // this.$store.dispatch("showActivityByField");
    
    this.loadData();
  },
  watch: {
    "$route.params.fieldname": function (fieldname) {
      // this.checkActi = true;
      this.loadData();
    },
    month(val) {
      this.filteredList();
      let dd = new Date(val);
      console.log(
        dd.getMonth(),
        dd.getFullYear(),
        dd.getUTCFullYear() + ", " + typeof dd
      );
    },
  },
};
</script>

<style scoped>
#breadcrumb-item {
  font-size: 12px;
  letter-spacing: 0.7px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #2e8034;
  margin: 20px 0;
  text-align: center;
  font-family: "Inter", sans-serif;
}
.breadcrumb {
  background-color: #fff;
}
#breadcrumb-menu {
  padding-left: 0;
}
ul#breadcrumb-menu li {
  display: inline;
}
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