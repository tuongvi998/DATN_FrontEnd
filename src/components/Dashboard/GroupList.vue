<template>
  <div class="content" ref="homeCont">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-content >
            <simple-table
              table-header-color="green"
              :listUser="pageOfItems"
              :deleteUser="deleteGroup"
              :listHeader="listHeader"
              :listColumns="listColumns"
              :isUser="true"
            >
            <!-- <td class="tb-content">{{ user.id }}</td>
            <td class="tb-content">{{ user.user_id }}</td>
            <td class="tb-content">{{ user.name }}</td>
            <td class="tb-content">{{ user.email }}</td> -->
            </simple-table>
            <div class="row d-flex justify-content-center" > <jw-pagination :pageSize ="20" :items="listGroup" :labels="customLabels" @changePage="onChangePage"></jw-pagination></div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, } from "@/components";
import { mapActions, mapGetters } from "vuex";
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
  components: {
    SimpleTable,
  },
  data() {
    return {
      id: '',
      name: '',
      listHeader: [
       '', 'Tên', 'Email', ''
      ],
      listColumns:[
       "name", "email"
      ],
      pageOfItems:[],
      customLabels,
      loader: "dots"
    };
  },
  computed: {
    ...mapGetters({
      listGroup: "getListGroup",
    }),
  },
  methods: {
    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
    ...mapActions({
      deleteGroup: "deleteGroup",
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
    let homeCont = this.$refs.homeCont;
    let loader = this.$loading.show({
      container: homeCont,
      loader: this.loader,
    });
    setTimeout(() => {
      loader.hide();
    }, 1000);
    this.list_user = this.$store.dispatch("showListGroup");
  },
};
</script>

<style scoped>
</style>