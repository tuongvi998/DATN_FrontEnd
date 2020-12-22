<template>
  <div>
    <table class="table table-borderless table-responsive-md">
      <thead>
        <tr>
          <th
            v-for="header in listHeader"
            :key="header.index"
            scope="col"
            class="tb-header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody v-for="user in listUser" :key="user.index" slot="md-table-row">
        <tr>
          <td
            @click="toggle(user.id)"
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
          <td class="tb-content" v-for="col in listColumns" :key="col">
            <router-link
              :to="{
                name: 'Group Acti Detail',
                params: { actiId: user.id },
              }"
              >{{ user[col] }}</router-link
            >
          </td>
          <td>
            <button
              v-if="isJoined"
              @click="chanceAccept(user.id, user.name)"
              class="btn btn-outline-success tb-content"
              type="button"
            >
              <i class="fas fa-exchange-alt"></i>
            </button>
          </td>
          <slot></slot>
        </tr>
        <tr v-if="opened.includes(user.id)">
          <td colspan="1"></td>
          <td colspan="5" class="tb-content">
            <div class="row">
              <div class="col-3">
                <h5>
                  {{ user.name }}
                </h5>
                <p><i class="far fa-envelope mr-2"></i>{{ user.email }}</p>
                <p v-if="user.gender == 0">
                  <i class="fas fa-venus-mars mr-2"></i>Nữ
                </p>
                <p v-if="user.gender == 1">
                  <i class="fas fa-venus-mars mr-2"></i>Nam
                </p>
                <p>
                  <i class="far fa-calendar-alt mr-2"></i>{{ user.birthday }}
                </p>
                <!-- Split button -->
                <div class="btn-group"></div>
              </div>
              <div class="col-9">
                <p>Giới thiệu: {{ user.introduction }}</p>
                <p>Kinh nghiệm: {{ user.experience }}</p>
                <p>Sở thích: {{ user.interest }}</p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <md-button class="md-success" @click="sendMail()" v-if="!isJoined" >Lấy danh sách</md-button>
  </div>
</template>

<script>
import http from "../../service/index";
export default {
  data() {
    return {
      selected: [],
      opened: [],
      gender: "",
    };
  },
  props: {
    listUser: Array,
    listHeader: Array,
    listColumns: Array,
    isJoined: Boolean,
    deleteUser: Function,
  },
  methods: {
    sendMail(){
      console.log(this.$route.params.actiId)
      var id = this.$route.params.actiId;
      http.getNormal('/group/export',id)
      .then(res => {
        this.$notify({
              group: "foo",
              type: "success",
              title: "Lấy dữ liệy",
              text: "Gửi dữ liểu thành công, vui lòng kiểm tra email của bạn!",
              duration: 800,
              speed: 700,
              width: 1000,
            });
      })
    },
    toggle(id) {
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

    chanceAccept(id, name) {
      const activity_id = this.$route.params.actiId;
      this.$confirm({
        title: "Duyệt tình nguyện viên",
        message: "Thêm " + name + " vào danh sách tình nguyện viên?",
        button: {
          yes: "Có",
          no: "Không",
        },
        callback: (confirm) => {
          if (confirm == true) {
            http
              .putNormal("/group/change-accept-status", id)
              .then((result) => {
                this.$store.dispatch("showListUserRegisterActivity",activity_id);
                this.$store.dispatch("showListUserJoinedActivity",activity_id);
                this.$notify({
                  group: "foo",
                  type: "success",
                  title: "Duyệt tình nguyện viên",
                  text: "Thêm tình nguyện viên thành công!",
                  duration: 800,
                  speed: 700,
                  width: 1000,
                });
              })
              .catch((err) => {
                this.$notify({
                  group: "foo",
                  type: "error",
                  title: "Duyệt tình nguyện viên",
                  text: "Không thể thêm tình nguyện viên!",
                  duration: 800,
                  speed: 700,
                  width: 1000,
                });
              });
          }
        },
      });
    },

    deleUser(user_id, name) {
      this.$confirm({
        title: "Xoá tình nguyện viên?",
        message:
          "Bạn có muốn xoá " + name + " khỏi danh sách tình nguyện viên ?",
        button: {
          yes: "Có",
          no: "Không",
        },
        callback: (confirm) => {
          if (confirm == true) {
            this.$notify({
              group: "foo",
              type: "success",
              title: "Xoá tình nguyện viên",
              text: "Xoá tình nguyện viên thành công!",
              duration: 800,
              speed: 700,
              width: 1000,
            });
            return this.deleteUser(user_id);
          }
        },
      });
    },
  },
};
</script>

<style scoped>
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