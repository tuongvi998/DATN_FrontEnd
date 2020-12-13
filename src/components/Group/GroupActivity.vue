<template>
    <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      
      <div class="add-btn">
        <!-- <md-button
          class="md-success"
          @click="showAddActivityModal = true;"
          ><i class="far fa-plus-square"></i
        ></md-button> -->
        <md-button class="md-success" v-b-modal.modal-1>+</md-button>
      </div>
      <b-modal id="modal-1"  class="modal-field">
        <!-- <template slot="header"> -->
          <template #modal-title>
      <h4 class="modal-title">Thêm hoạt động</h4>
    </template>
        <!-- </template>
        <template slot="body"> -->
          <md-field>
            <label>Tên hoạt động</label>
            <md-input v-model="activity.title"></md-input>
          </md-field>
          <md-field>
          <label>Nội dung</label>
            <md-input v-model="activity.content"></md-input>
          </md-field>
          <div class="row">
            <div class="col-md-4">
              <date-picker v-model="activity.start_date" format="YYYY-DD-MM"
        type="date"
        placeholder="Ngày bắt đầu" valueType="format"></date-picker>
            </div>
            <div class="col-md-4">
              <date-picker v-model="activity.end_date" format="YYYY-DD-MM"
        type="date"
        placeholder="Ngày kết thúc" valueType="format"></date-picker>
            </div>
            <div class="col-md-4">
              <date-picker v-model="activity.close_date" format="YYYY-DD-MM"
        type="date"
        placeholder="Hạn đăng ký" valueType="format"></date-picker>
            </div>
          </div>
          <md-field>
          <label>Địa điểm:</label>
            <md-input v-model="activity.address"></md-input>
          </md-field>
          <!-- <div class="row">
              <div class="col-md-6">
                <md-field>
          <label>Địa điểm:</label>
            <md-input v-model="activity.address"></md-input>
          </md-field>
              </div>
            </div> -->
          <md-field>
            
          <label>Yêu cầu</label>
            <md-input v-model="activity.require"></md-input>
          </md-field>
          <md-field>
          <label>Quyền lợi</label>
            <md-input v-model="activity.benefit"></md-input>
          </md-field>
        <!-- </template> -->
        <template #modal-footer class="text-center">
          <!-- <md-button class="md-danger md-simple" @click="exitModal">Thoát</md-button> -->
          <md-button @click="addActi" class="md-success md-simple">Lưu</md-button>
        </template>
      </b-modal>
        <md-card>
          <md-card-content>
            <group-table 
        :listColumns="listColumns"
        :listHeader="listHeader"
        :listActivity="getActivityByGroup"
        ></group-table>
          </md-card-content>
        </md-card>
      </div>
        
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { Modal } from "@/components";
import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import http from '../../service/index';
import GroupTable from "./Table.vue"
export default {
  components: {
GroupTable,
// Modal,
DatePicker 
  },
  data() {
    return {
      showAddActivityModal: false,
      listHeader: ["ID", "Tên Hoạt động", "Ngày diễn ra", "Ngày kết thúc", "Địa điểm", ""],
      listColumns: ['id','title','start_date', 'end_date','address'],
      activity: {
        group_id: '131',
        title: '',
        start_date: '',
        end_date: '',
        close_date: '',
        content: '',
        require: '',
        benefit: '',
        address: '',
        cost: '1520077',
        donate: '0',
        image: 'https://volunteeringaustralia.r.worldssl.net/wp-content/uploads/volunteering-australia-people-linked-together.jpg',
        min_register: '30',
        max_register: '50'
      }
    };
  },
  computed:{
    ...mapGetters({
      getActivityByGroup: "getActivityByGroup"
    })
  },
  methods:{
    exitModal(){
      this.showAddActivityModal = false;
    },
    addActi(){
      if(this.activity.title == '' && this.activity.content == '' && this.activity.start_date =='' && this.activity.end_date == ''
      && this.activity.close_date == '' && this.activity.address == '' && this.activity.require == '' && this.activity.benefit == ''){
        this.$notify({
          group: "foo",
          type: "error",
          title: "Lỗi",
          text: "Vui lòng nhập đầy đủ thông tin!",
          duration: 1000,
          speed: 1000,
          width: 1000,
        });
      }
      http.postNormal('/group/create-activity',this.activity)
      .then(responser => {
        this.$store.dispatch('showActivityByGroup');
        this.$notify({
          group: "foo",
          type: "success",
          title: "Thêm thành công",
          text: "Bạn đã thêm hoạt động thành công!",
          duration: 1000,
          speed: 1000,
          width: 1000,
        });
      })
      .catch( error=> {
        console.log(error);
      })
    }
  },
  created() {
    this.$store.dispatch("showActivityByGroup");
  }
};
</script>
<style scoped>
.modal-mask {
    z-index: 20;
    }
    .mx-datepicker {
width: 100%;
}
</style>
