<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <group-activity-content></group-activity-content>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { Modal } from "@/components";
// import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import http from "../../service/index";
import GroupActivityContent from "./GroupActivityContent.vue"
// import GroupTable from "./Table.vue";
export default {
  components: {
    GroupActivityContent,
    // GroupTable,
    // Modal,
    // DatePicker,
  },
  data() {
    return {
      showAddActivityModal: false,
      listHeader: [
        "ID",
        "Tên Hoạt động",
        "Ngày diễn ra",
        "Ngày kết thúc",
        "Địa điểm",
        "",
      ],
      listColumns: ["id", "title", "start_date", "end_date", "address"],
      activity: {
        group_id: "131",
        title: "",
        start_date: "",
        end_date: "",
        close_date: "",
        content: "",
        require: "",
        benefit: "",
        address: "",
        cost: "1520077",
        donate: "0",
        image:
          "https://volunteeringaustralia.r.worldssl.net/wp-content/uploads/volunteering-australia-people-linked-together.jpg",
        min_register: "30",
        max_register: "50",
      },
    };
  },
  computed: {
    ...mapGetters({
      getActivityByGroup: "getActivityByGroup",
    }),
  },
  methods: {
    exitModal() {
      this.showAddActivityModal = false;
    },
    addActi() {
      if (
        this.activity.title == "" &&
        this.activity.content == "" &&
        this.activity.start_date == "" &&
        this.activity.end_date == "" &&
        this.activity.close_date == "" &&
        this.activity.address == "" &&
        this.activity.require == "" &&
        this.activity.benefit == ""
      ) {
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
      http
        .postNormal("/group/create-activity", this.activity)
        .then((responser) => {
          this.$store.dispatch("showActivityByGroup");
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
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.$store.dispatch("showActivityByGroup");
  },
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
