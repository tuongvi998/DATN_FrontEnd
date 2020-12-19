<template>
  <div class="content" ref="homeCont">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-content>
            <simple-table
              table-header-color="green"
              :listUser="pageOfItems"
              :deleteUser="deleteVolunteer"
              :listHeader="listHeader"
              :listColumns="listColumns"
              :isUser="true"
            >
            </simple-table>
            <div class="row d-flex justify-content-center" > <jw-pagination :pageSize ="20" :items="listVolunteer" :labels="customLabels" @changePage="onChangePage"></jw-pagination></div>
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

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
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
       '','Tên', 'Email', '',
      ],
      listColumns:[
        "name", "email"
      ],
      customLabels,
      pageOfItems:[],
      loader: "dots"
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
    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
  },
  created() {
    let homeCont = this.$refs.homeCont;
    let loader = this.$loading.show({
      container: homeCont,
      loader: this.loader,
    });
    setTimeout(() => {
      loader.hide();
    }, 1000);
    this.list_user = this.$store.dispatch("showListVolunteer");
  },
};
</script>

<style scoped>
</style>