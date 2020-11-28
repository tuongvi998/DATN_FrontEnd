<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-content>
            <simple-table
              table-header-color="green"
              :listUser="listVolunteer"
              :deleteUser="deleteVolunteer"
              :listHeader="listHeader"
              :listColumns="listColumns"
            >
            </simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <!-- <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table></ordered-table>
          </md-card-content>
        </md-card> -->
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable,  } from "@/components"; //OrderedTable
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    // OrderedTable,
    SimpleTable,
  },
  data() {
    return {
      id: '',
      name: '',
      listHeader: [
       '', 'ID', 'User ID', 'Tên', 'Email', '',''
      ],
      listColumns:[
        "id", "user_id", "name", "email"
      ]
    };
  },
  computed: {
    ...mapGetters({
      listVolunteer: "getListVolunteer",
    }),
  },
  methods: {
    ...mapActions({
      deleteVolunteer: "deleteVolunteer",
    }),
    // deleUser(id, name){
    //   this.id = id;
    //   this.name = name;
    //   alert( this.id, this.name);
    // }
    // deleUser(id, name) {
    //   this.$confirm({
    //     title: "Xoá tài khoản?",
    //     message: "Bạn có muốn xoá tài khoản " + name + " ?",
    //     button: {
    //       yes: "Có",
    //       no: "Không",
    //     },
    //     callback: (confirm) => {
    //       if (confirm == true) {
    //         alert("fasda");
    //         return deleUser(id);
    //       }
    //     },
    //   });
    // },
  },
  created() {
    this.list_user = this.$store.dispatch("showListVolunteer");
  },
};
</script>

<style scoped>
</style>