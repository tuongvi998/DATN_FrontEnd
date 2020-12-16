<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-content>
            <group-table
              :listColumns="listColumns"
              :listHeader="listHeader"
              :listActivity="getActivityByGroup"
              :happen="true"
            ></group-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "vue2-datepicker/index.css";
import http from "../../service/index";
import GroupTable from "./ListActivityTable.vue";
export default {
  components: {
    GroupTable,
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
    };
  },
  computed: {
    ...mapGetters({
      getActivityByGroup: "getActivityByGroup_happen",
    }),
  },
  methods: {

  },
  created() {
    this.$store.dispatch("showActivityByGroup_happen");
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
