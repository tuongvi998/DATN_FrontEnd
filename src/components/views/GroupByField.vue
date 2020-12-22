<template>
  <div class="bg-light" ref="homeCont">
    <div class="container">
      <div class="content mt-5">
        <div class="md-layout bg-white rounded mt-5 mb-2">
          <div class="row w-100 ml-2 breadcrumb">
            <div class="col-md-5">
              <ul id="breadcrumb-menu">
                <li id="breadcrumb-item">Danh sách các tổ chức</li>
                <li
                  id="breadcrumb-item"
                  v-if="this.$route.params.fieldname != ''"
                >
                  / {{ this.$route.params.fieldname }}
                </li>
              </ul>
            </div>
            <div class="col-md-7">
              <div class="datime text-right">

              </div>
            </div>
          </div>
          <div class="row w-100 p-4">
            <div
              class="col-md-6 item d-flex pl-4 p-2 text-center"
              v-for="group in pageOfItems"
              :key="group.index"
            >
              <div class="card-image p-1">
                <img
                id=""
                  class="img-responsive group-ava"
                  :src="group.group_avatar_url"
                  alt="..."
                />
              </div>
              <div class="group-detail pl-3 pb-5 pt-3 text-left">
                <router-link
                  :to="{
                    name: 'activity-by-group',
                    params: { groupname: group.name, groupid: group.id },
                  }"
                >
                  <h5 class="">
                    {{ group.name }}
                  </h5>
                </router-link>

                <small
                  ><i class="fas fa-map-marker-alt"></i> {{ group.address }}
                </small>
                <br>
                <md-button class="md-success md-sm" 
              ><small @click="getGroupInfo(group.id)" class="text-white" v-b-modal.modal-lg variant="primary">Thông tin</small></md-button
            >
              </div>
            </div>
          </div>
          <b-modal id="modal-lg" size="lg">
            <div v-for="gr in listgroup" :key="gr.index">
                <div class="row pr-4 pl-4">
              <div class="card-image p-1">
                <img
                id=""
                  class="img-responsive group-ava"
                  :src="gr.group_avatar_url"
                  alt="..."
                />
              </div>
              <div class="group-detail pl-3 pb-5 pt-3 text-left">
              <h5 class="group-name">
                    {{ gr.name }}
                  </h5>
                  <small>{{ gr.email }}</small><br>
                  <small
                  ><i class="fas fa-map-marker-alt"></i> {{ gr.address }}
                </small>
                <br>
                <small><i class="fas fa-phone-square-alt"></i> {{gr.phone}}</small>
              </div>
            </div>
            <div class="row pl-4">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <p id="title">Sứ mệnh:</p>
              </div>
              <div class="col-md-8">
                <p>{{gr.mission}}</p>
              </div>
            </div>
            <div class="row pl-4">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <p id="title">Tầm nhìn:</p>
              </div>
              <div class="col-md-8">
                <p>{{gr.vision}}</p>
              </div>
            </div>
            <div class="row pl-4">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <p id="title">Một số hoạt động:</p>
              </div>
              <div class="col-md-8">
                <p>{{gr.activity}}</p>
              </div>
            </div>
            </div>
            <template #modal-footer class="text-center">
            <!-- <md-button class="md-danger md-simple" @click="exitModal">Thoát</md-button> -->
            <md-button class="md-success md-simple"
              ></md-button
            >
          </template>
          </b-modal>
          <div class="row w-100 d-flex justify-content-center">
            <jw-pagination
              :pageSize="20"
              :items="getListGroupByField"
              :labels="customLabels"
              @changePage="onChangePage"
              :styles="customStyles"
            ></jw-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import http from "../../service/index"
const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">",
};
const customStyles = {
  ul: {
    // border: '2px solid red'
  },
  li: {
    display: "inline-block",
  },
  a: {
    color: " #22a024",
    padding: "0 0",
  },
  "a.active": {
    backgroundColor: "blue",
  },
};
export default {
  name: "group by field",
  data() {
    return {
      field: "",
      image: require("@/assets/img/allgr_card.jpg"),
      loader: "dots",
      pageOfItems: [],
      customLabels,
      customStyles,
      listgroup: null
    };
  },
  computed: {
    ...mapGetters({
      getListGroupByField: "getListGroupByField",
    }),
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    getGroupInfo(id){
      http.getNormal('/group',id)
      .then(res => {
        this.listgroup = res.data.data
        console.log( this.listgroup)
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  created() {
    let homeCont = this.$refs.homeCont;
    let loader = this.$loading.show({
      container: homeCont,
      loader: this.loader,
    });
    setTimeout(() => {
      loader.hide();
    }, 2000);
    this.field = this.$route.params.fieldname;
    console.log(this.field);
    this.$store.dispatch("showListGroupByField", this.field);
  },
  watch: {
    "$route.params.fieldname"(val) {
      console.log(val);
      this.$store.dispatch("showListGroupByField", val);
    },
  },
};
</script>

<style scoped>
#title{
      font-size: 17px;
    color: #32672f;
    font-weight: 500;
}
.group-ava {
  /* position: absolute;
  top: 50%; */
  left: 0;
  /* margin-top: -57px; */
      min-width: 120px;
    max-width: 122px;
  border-radius: 100%;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2);
  padding: 0px;
}
.group-detail {
  max-width: 84%;
}
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
.page-link {
  background-color: #22a024;
}

.pagination .page-item.active a,
.pagination .page-item.active a:focus,
.pagination .page-item.active a:hover,
.pagination .page-item.active span,
.pagination .page-item.active span:focus,
.pagination .page-item.active span:hover {
  background-color: #22a024;
}
</style>