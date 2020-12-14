<template>
  <div class="content">
    <div class="md-layout">
      <div class="add-btn">
        <md-button
          class="md-success"
          @click="
            showAddFieldModal = true;
            field_name = '';
          "
          ><i class="far fa-plus-square"></i
        ></md-button>
      </div>
      <modal class="modal-field" v-if="showAddFieldModal" @close="addField">
        <template slot="header">
          <h4 class="modal-title">Thêm lĩnh vực</h4>
          <md-button
            class="md-simple md-just-icon md-round modal-default-button"
            @click="addField"
          >
            <md-icon>clear</md-icon>
          </md-button>
        </template>
        <template slot="body">
          <md-field>
            <label>Initial Value</label>
            <md-input v-model="field_name"></md-input>
          </md-field>
        </template>
        <template slot="footer">
          <md-button class="md-danger md-simple" @click="exitModal">Thoát</md-button>
          <md-button class="md-success md-simple" @click="addField">Lưu</md-button>
        </template>
      </modal>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-content>
            <simple-table
              table-header-color="green"
              :listUser="listFieldControl"
              :deleteUser="deleteField"
              :listHeader="listHeader"
              :listColumns="listColumns"
              :isUser="false"
            ></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, Modal } from "@/components";
import { mapActions, mapGetters } from "vuex";
// import Modal from '../Modal.vue';

export default {
  name: "FieldList",
  components: {
    SimpleTable,
    Modal,
  },
  data() {
    return {
      field_name: "",
      showAddFieldModal: false,
      listHeader: ["ID", "Tên lĩnh vực", "Tổ chức", ""],
      listColumns: ["id", "name", "groups_count"],
    };
  },
  computed: {
    ...mapGetters({
      listFieldControl: "getListFieldController",
    }),
  },
  methods: {
    ...mapActions({
      deleteField: "deleteField",
      createField: "createField",
    }),
    exitModal() {
      this.showAddFieldModal = false;
    },
    addField() {
        if(this.field_name == ''){
            this.$notify({
          group: "foo",
          type: "error",
          title: "!!!!",
          text: "Vui lòng nhập tên lĩnh vực!",
          duration: 800,
          speed: 700,
          width: 1000,
        });
        }else{
      this.showAddFieldModal = false;
      return this.createField({ name: this.field_name });
        }
    },
  },
  created() {
    this.$store.dispatch("showListFieldController");
  },
};
</script>

<style scoped>
.main-panel > .content {
  padding: 0px 25px;
}
.modal-field{
    z-index: 20;
}
</style>