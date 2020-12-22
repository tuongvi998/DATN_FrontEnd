<template>
  <div class="content" ref="homeCont">
    <div class="md-layout">
      <div id="search" class="row w-100">
        <div class="md-layout-item ml-4 md-size-50 md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedName"
              :md-options="listName"
            >
              <label id="searLabel">Tìm...</label>
            </md-autocomplete>
          </div>
        </div>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-content>
            <table class="table table-borderless table-responsive-md">
              <thead>
                <tr>
                  <!-- <th v-for="header in listHeader" :key="header.index" scope="col" class="tb-header">{{header}}</th> -->
                  <!--  <th scope="col" class="tb-header"></th> -->
                  <th scope="col" class="tb-header"></th>
                  <th scope="col" class="tb-header">Tên</th>
                  <th scope="col" class="tb-header">Email</th>
                  <th scope="col" class="tb-hd"></th>
                </tr>
              </thead>
              <tbody
                v-for="user in pageOfItems"
                :key="user.id"
                slot="md-table-row"
              >
                <tr>
                  <td
                    @click="toggle(user.id, user.gender)"
                    :class="{ opened: opened.includes(user.id) }"
                    class="text-warning tb-content"
                  >
                    <i
                      v-if="!opened.includes(user.id)"
                      class="far fa-hand-point-right select-row"
                    ></i>
                    <i
                      v-if="opened.includes(user.id)"
                      class="far fa-hand-point-down select-row"
                    ></i>
                  </td>
                  <td class="tb-content">{{ user.name }}</td>
                  <td class="tb-content">{{ user.email }}</td>
                  <td>
                    <button
                      @click="deleUser(user.user_id, user.name)"
                      class="btn btn-outline-danger tb-content"
                      type="button"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <slot></slot>
                </tr>
                <tr v-if="opened.includes(user.id)">
                  <td colspan="1"></td>
                  <td colspan="5" class="tb-content">
                    <div class="row">
                      <div class="col-3 image">
                        <img :src="user.group_avatar_url" id="avatar" />
                      </div>
                      <div class="col-9">
                        <h5>
                          {{ user.name }}
                        </h5>
                        <small
                          ><i class="fas fa-map-marker-alt mr-2"></i
                          ><cite title="San Francisco, USA">{{
                            user.address
                          }}</cite></small
                        >
                        <span>
                          <i class="fas fa-align-center"></i>
                          {{ user.field_name }}
                        </span>
                        <span>
                          <i class="far fa-envelope mr-2"></i> {{ user.email }}
                        </span>
                        <span>
                          <i class="fas fa-phone-square-alt"></i>
                          {{ user.phone }}
                        </span>
                        <div class="btn-group"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row d-flex justify-content-center">
              <jw-pagination
              v-if="!select"
                :pageSize="20"
                :items="listGroup"
                :labels="customLabels"
                @changePage="onChangePage"
                :styles="customStyles"
              ></jw-pagination>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
// import { SimpleTable } from "@/components";
import { mapActions, mapGetters } from "vuex";
import http from "../../service/index";

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
  components: {
    // SimpleTable,
  },
  data() {
    return {
      id: "",
      name: "",
      listHeader: ["", "Tên", "Email", ""],
      listColumns: ["name", "email"],
      pageOfItems: [],
      customLabels,
      loader: "dots",
      customStyles,
      selected: [],
      opened: [],
      listName: [],
      selectedName: null,
      select: false
    };
  },
  computed: {
    ...mapGetters({
      listGroup: "getListGroup",
    }),
  },
  methods: {
    fillData() {
      if (this.selectedName == null) {
        this.select = false;
        this.pageOfItems = this.listGroup;
      } else if (this.selectedName != null) {
        this.select = true;
        var search = [];
        this.listGroup.forEach((group) => {
          if (group.name == this.selectedName) {
            search.push(group);
          }
        });
        this.pageOfItems = search;
      }
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    ...mapActions({
      deleteGroup: "deleteGroup",
    }),
    toggle(id, gender) {
      if (gender) {
        this.gender = "Nam";
      } else {
        this.gender = "Nữ";
      }
      const index = this.opened.indexOf(id);
      if (this.opened != null && !this.opened.includes(id)) {
        this.opened.splice(0, 1);
      }
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
    },
    deleUser(user_id, name) {
      this.$confirm({
        title: "Xoá tài khoản?",
        message: "Bạn có muốn xoá tài khoản " + name + " ?",
        button: {
          yes: "Có",
          no: "Không",
        },
        callback: (confirm) => {
          if (confirm == true) {
            this.$notify({
              group: "foo",
              type: "success",
              title: "Xoá tài khoản",
              text: "Xoá tài khoản người dùng thành công!",
              duration: 800,
              speed: 700,
              width: 1000,
            });
            this.$store.dispatch("deleteGroup", user_id);
          }
        },
      });
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
    this.list_user = this.$store.dispatch("showListGroup");
    this.listGroup.forEach((group) => {
      this.listName.push(group.name);
    });
    console.log("name", this.listName);
  },
  watch: {
    
    selectedName(val) {
      console.log(val);
      console.log(this.select)
      this.fillData();
    },
  },
};
</script>

<style scoped>
#searLabel {
}
#avatar {
  width: 180px;
  border-radius: 50%;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
}
.tb-header {
  font-size: 0.715rem;
  letter-spacing: 0.7px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #34495e;
  border-bottom: 1px solid #34495e;
}
.select-row:hover {
  cursor: pointer;
}
.tb-content {
  vertical-align: middle;
}
#avatar {
  width: 128px;
  height: 128px;
  border-radius: 50%;
}
.image {
  width: 100%;
  height: 100%;
}
.glyphicon {
  margin-bottom: 10px;
  margin-right: 10px;
}

small {
  display: block;
  line-height: 1.428571429;
  color: #999;
}
@media (max-width: 576px) {
  #avatar {
    width: 78px;
    height: 78px;
    border-radius: 50%;
  }
}
@media only screen and (max-width: 768px) and (min-width: 576px) {
  #avatar {
    width: 108px;
    height: 108px;
    border-radius: 50%;
  }
}
</style>