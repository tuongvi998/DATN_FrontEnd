<template>
  <div>
    <table
      class="table table-borderless table-responsive-md"
    >
      <thead class="w-100 text-right">asdasda</thead>
      <thead>
        <tr>
          <th v-for="header in listHeader" :key="header.index" scope="col" class="tb-header">{{header}}</th>
          <!-- <th scope="col" class="tb-header">ID</th>
          <th scope="col" class="tb-header">User_ID</th>
          <th scope="col" class="tb-header">Tên</th>
          <th scope="col" class="tb-header">Email</th>
          <th scope="col" class="tb-header"></th> -->
        </tr>
      </thead>

      <tbody v-for="user in listUser" :key="user.id" slot="md-table-row">
        <tr>
          <td
            @click="toggle(user.id, user.gender)"
            :class="{ opened: opened.includes(user.id) }"
            class="text-warning tb-content"
            v-if="isUser"
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
          <td class="tb-content" v-for="col in listColumns" :key="col">{{ user[col] }}</td>
          <td>
            <button
              @click="deleUser(user.id, user.name, isUser)"
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
                <img v-if="isgender" :src="user.user_avatar_url" id="avatar" />
                <img v-else :src="user.group_avatar_url" id="avatar">
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
                <p>
                  <i class="far fa-envelope mr-2"></i>{{ user.email }}
                </p>
                <p v-if="isgender">
                  <i class="fas fa-venus-mars mr-2"></i>{{gender}}</p>
                <p v-if="birthday">
                  <i class="far fa-calendar-alt mr-2"></i>{{ user.birthday }}
                </p>
                <!-- Split button -->
                <div class="btn-group"></div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  data() {
    return {
      selected: [],
      opened: [],
      gender: ''
    };
  },
  methods: {
    toggle(id, gender) {
      if(gender){
        this.gender = 'Nam'
      }else{
        this.gender = 'Nữ'
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
    deleUser(user_id, name, isUser) {
      if(isUser){
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
            return this.deleteUser(user_id);
          }
        },
      })
      }else{
        this.$confirm({
        title: "Xoá lĩnh vực hoạt động?",
        message: "Bạn có muốn xoá lĩnh vực " + name + " ?",
        button: {
          yes: "Có",
          no: "Không",
        },
        callback: (confirm) => {
          if (confirm == true) {
            this.$notify({
          group: "foo",
          type: "success",
          title: "Xoá lĩnh vực hoạt động",
          text: "Xoá thành công!",
          duration: 800,
          speed: 700,
          width: 1000,
        });
            return this.deleteUser(user_id);
          }
        },
      });
      }
    },
  },
  // props: ["listUser"]
  props: {
    listUser: Array,
    deleteUser: Function,
    listHeader: Array,
    listColumns: Array,
    isUser: Boolean,
    birthday: Boolean,
    isgender: Boolean
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
