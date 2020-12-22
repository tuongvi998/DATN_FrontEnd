<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-44 p-5"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Hooạt động sắp tới</p>
            <h3 class="title">{{upcoming}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Danh sách
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-44 p-5"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">Hoạt động đã diễn ra</p>
            <h3 class="title">
              {{happen}}
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-warning">warning</md-icon>
              <a href="#pablo">Danh sách</a>
            </div>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsDashBoardCard,
  NavTabsTable,
  OrderedTable
} from "../index";
import http from "../../service/index";
export default {
  components: {
    StatsCard
  },
  data() {
    return {
      happen: null,
      upcoming: null
    };
  },
  created(){
    http.getNormal('/group/get-acti-info')
    .then(res => {
      this.happen = res.data.happen;
      this.upcoming = res.data.upcoming;
    })
    .catch(error =>{
      console.log(error);
    })
  }
};
</script>
