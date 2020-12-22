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

      <tbody
        v-for="activity in listActivity"
        :key="activity.id"
        slot="md-table-row"
      >
        <tr>
          <td class="tb-content" v-for="col in listColumns" :key="col">
            <router-link v-if="!happen" :to="{ name: 'Chi tiết hoạt động', params: {actiId: activity.id}}">{{ activity[col] }}</router-link>
          
            <router-link v-if="happen" :to="{ name: 'Chi tiết hoạt động đã diễn ra', params: {actiId: activity.id}}">{{ activity[col] }}</router-link>
          </td>
          <td>
            <button
            v-if="!happen"
              class="btn btn-outline-danger tb-content"
              type="button"
              @click="deleActivity(activity.id, activity.title)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <slot></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "activity-table",

  data() {
    return {
      selected: [],
      opened: [],
      gender: "",
    };
  },
  props: {
    listActivity: Array,
    // deleteUser: Function,
    listHeader: Array,
    listColumns: Array,
    happen: Boolean
  },
  methods: {
    ...mapActions({
      deleteActivity: "deleteActivity",
    }),
    deleActivity(id, title) {
      this.$confirm({
        title: "Xoá tài khoản?",
        message: "Bạn có muốn xoá hoạt động " + title + " ?",
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
            return this.deleteActivity(id);
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
