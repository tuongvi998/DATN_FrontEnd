<template>
  <div class="bg-light">
    <!-- <main-navbar class="mt-0"></main-navbar> -->
    <div class="container-fluid pt-">
      <div class="content pt-5">
        <div class="md-layout pt-5">
          <div v-if="showFields" class="col-md-3 col-sm-3 col-12">
            <div class="sidebar-normal">
              <md-list class="sidebar-normal">
                <li
                  class="md-list-item"
                  v-for="field in listField"
                  :key="field.index"
                >
                  <router-link
                   @click="hideSidebar(field.name )"
                    :to="{ name: 'field-name', params:  {fieldname: (field.name.normalize('NFD').replace(/\s+/g, '-').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')) } }"
                    class="md-list-item-router md-list-item-container md-button-clean"
                  >
                    <div class="md-list-item-content md-ripple">
                      <!-- <md-icon>{{ link.icon }}</md-icon> -->
                      <p>{{ field.name }}</p>
                    </div>
                  </router-link>
                </li>
              </md-list>
            </div>
          </div>
          <div class="col-md-9 col-sm-9 col-12">
            <div class="container row bg-white pt-4 pb-4">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions, mapState } from "vuex";
// import {ActivityCard} from "@/components";

export default {
  components: {
    // ActivityCard
  },
  props: {},
  data() {
    return {
      showFields: true,
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
      widthWindown: window.innerWidth,
      activityList: [],
      fieldname_link: ''
    };
  },
  methods: {
    getActivity(id) {
      console.log(id);
      return this.showActivityByField({
        id: id
      });
    },
  },
  computed: {
    ...mapGetters({
      listField: "getListField",
      listAllUpcomingActivity: "getAllUpcomingActivity",
      listActivityByField: "getListAvtivityByField"
    }),
  },
  created() {
    this.$store.dispatch("showListField");
    this.$store.dispatch("showAllUpcomingActivity");
    // this.activityList = this.listAllUpcomingActivity;
    console.log(this.listField);
  },
  methods: {
    ...mapActions({
      showActivityByField: "showActivityByField"
    })
  },
  watch: {
    widthWindown(newval) {
      if (newval < 578) {
        this.showFields = false;
      }
    },
  },
};
</script>
<style scoped>

.sidebar-normal {
  border-color: #4ba64f;
  background-color: #4ba64f;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}


@media (max-width: 60em) {
  body {
    padding: 3rem;
  }
}

@media (max-width: 60em) {
  .grid {
    grid-gap: 3rem;
  }
}
.grid__item {
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
}
.grid__item:hover {
  transform: translateY(-0.9%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
}

.card__img {
  display: block;
  width: 100%;
  /* height: 18rem; */
  object-fit: cover;
}
.card__content {
  padding: 1rem 1rem;
}
/* .card__header {
  font-size: 3rem;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 1.5rem;
} */
.card__text {
  /* font-size: 1.5rem; */
  letter-spacing: 0.7;
  line-height: 1.8;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
}
.card__btn {
  /* display: block; */
  width: 50%;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  color: #138f51;
  background-color: #caf1c5;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
}
.card__btn span {
  margin-left: 1rem;
  transition: 0.2s;
}
.card__btn:hover,
.card__btn:active {
  background-color: #dce4ff;
}
.card__btn:hover span,
.card__btn:active span {
  margin-left: 1.5rem;
}
</style>
<!-- <div class="grid__item">
                  <div class="card">
                    <img
                      class="card__img"
                      :src="activity.image"
                      alt="Snowy Mountains"
                    />
                    <div class="card__content text-center">
                      <h3 class="card__header">A starry night</h3>
                      <p class="card__text">
                        Look up at the night sky, and find yourself in the
                        amazing mountain range of Aspen.
                      </p>
                      <button class="btn-primary text-center" id="detail-btn">
                        Explore<span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div> -->