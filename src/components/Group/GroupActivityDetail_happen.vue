<template>
  <div>
    <div
      class="-fluid bg-white p-3 rounded"
      v-for="activity in activityDetail"
      :key="activity.index"
    >
      <div class="row w-100">
        <div class="col-md-4 col-sm-6 col-12 text-left">
          <h2 id="activity-title">
            {{ activity.title }}
          </h2>
        </div>
        <div class="col-md-8 col-sm-6 col-12 d-flex text-center">
          <img
            id="card-image"
            class="rounded"
            :src="activity.image"
            alt="Snowy Mountains"
          />
        </div>
      </div>
      <div class="content p-3 mt-4">
        <div class="row w-100 justify-content-center">
          <div class="col-md-12">
            <md-field>
              <label>Nội dung</label>
              <md-input disabled v-model="activity.content"></md-input>
            </md-field>
          </div>
        </div>
        <div class="row w-100 justify-content-center">
          <div class="col-md-12">
            <md-field>
              <label>Địa chỉ:</label>
              <md-input disabled v-model="activity.address"></md-input>
            </md-field>
          </div>
        </div>
        <div class="row w-100 mt-3 justify-content-center">
          <div class="col-md-4">
            <small  class="mr-2">Hạn đăng ký: </small>
            <br />
            <date-picker
            disabled
              format="YYYY-MM-DD"
              type="date"
              v-model="activity.close_date"
              placeholder="Tháng diễn ra"
              valueType="format"
            ></date-picker>
          </div>
          <div class="col-md-4">
            <small class="mr-2">Ngày diễn ra: </small>
            <br />
            <date-picker
            disabled
              format="YYYY-MM-DD"
              type="date"
              v-model="activity.start_date"
              placeholder="Ngày diễn ra"
              valueType="format"
            ></date-picker>
          </div>
          <div class="col-md-4">
            <small class="mr-2">Ngày kết thúc: </small>
            <br />
            <date-picker
            disabled
              format="YYYY-MM-DD"
              type="date"
              v-model="activity.end_date"
              placeholder="Ngày kết thúc: "
              valueType="format"
            ></date-picker>
          </div>
        </div>
        <div class="row w-100 mt-3 justify-content-center">
          <div class="col-md-12">
            <md-field>
              <label>Yêu cầu:</label>
              <md-input disabled v-model="activity.require"></md-input>
            </md-field>
          </div>
        </div>
        <div class="row w-100 justify-content-center">
          <div class="col-md-12">
            <md-field>
              <label>Quyền lợi:</label>
              <md-textarea disabled v-model="activity.benefit"></md-textarea>
            </md-field>
          </div>
        </div>
      </div>
    </div>
    <div class="md-layout-item md-size-100 md-small-size-100 bg-light">
        <div class=" bg-white mt-5 rounded">
            <list-volunteer-table
            class=" p-3"
            :isJoined="false"
            :listUser="joinedUser"
            :listHeader="joinedTableHeader"
            :listColumns="joinedTableColumns"
          ></list-volunteer-table>
        </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import ListVolunteerTable from "./ListVolunteerTable.vue";

export default {
  name: "groupactivitydetail",
  components: {
    DatePicker,
    ListVolunteerTable
  },
  data() {
    return {
      activity_id: "",
      joinedTableHeader: [
          "", "Tên", "Email", "Số điện thoại", "Ngày đăng ký",""
      ],
      joinedTableColumns: [
          'name', 'email', 'phone', 'register_date'
      ],
      registerTableHeader: [
          "", "Tên", "Email", "Số điện thoại", "Ngày đăng ký",""
      ],
      registerTableColumns: [
        'name', 'email', 'phone', 'register_date'
      ],
    };
  },
  methods: {
    ...mapActions({
    })
  },
  computed: {
    ...mapGetters({
      activityDetail: "getActivityDetail",
      joinedUser: "getListUserJoinedActivity"
    }),
  },
  created() {
    this.activity_id = this.$route.params.actiId;
    this.$store.dispatch("showListUserJoinedActivity", this.activity_id);
    this.$store.dispatch("showActivityDetail", this.activity_id);
  },
};
</script>

<style scoped>
</style>