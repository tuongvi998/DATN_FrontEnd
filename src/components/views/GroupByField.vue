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
                <!-- <date-picker
            format="YYYY-MM"
            type="month"
            v-model="month"
            placeholder="Tháng diễn ra"
            valueType="format"
          ></date-picker> -->
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
                  class="img-responsive group-ava"
                  :src="group.avatar"
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
              </div>
            </div>
          </div>
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
.group-ava {
  /* position: absolute;
  top: 50%; */
  left: 0;
  /* margin-top: -57px; */
  width: 115px;
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