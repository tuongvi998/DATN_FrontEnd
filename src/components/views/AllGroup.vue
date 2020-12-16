<template>
  <div class="bg-light">
    <div class="container">
      <div class="content mt-5">
        <div class="md-layout bg-white rounded mt-5 mb-2">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consequatur possimus laudantium quidem laboriosam est odio eius
            facere non doloremque atque eum assumenda, unde saepe a facilis
            repellendus magni hic.
          </h1>
          <div class="container mt-2">
            <div class="row w-100 p-3" >
              <div class="col-md-3 col-sm-6 item" v-for="field in listFieldGroup" :key="field.id" >
                <div class="card item-card card-block p-2 m-3">
                  <h4 class="item-card-title text-right">
                    <i class="material-icons">settings</i>
                  </h4>
                  <div id="image">
                    <img :src="image" alt="Tinh nguyen vien" />
                  </div>
                  <router-link :to="{name: 'group by field', params: {fieldname: field.name}}"><h5 class="card-title mt-3 mb-3">{{field.name}}</h5></router-link>
                  <p class="card-text">
                    Có {{field.groups_count}} Tổ chức
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "all-group",
  data() {
    return {
      image: require("@/assets/img/allgr_card.jpg"),
    };
  },
  computed: {
      ...mapGetters({
          listFieldGroup: "getListFieldGroup"
      })
  },
  created() {
      this.$store.dispatch("showListFieldGroup");
  }
};
</script>

<style scoped>
.card-text{
        font-size: 16px;
    font-weight: 500;
    color: #459e2f;
    text-align: center;
      height: 40px;
}
img {
  height: 150px;
  width: 100%;
}
#image {
  opacity: 0.95;
  background-color: rgba(0, 0, 0, 0.3);
}
.item {
  padding-left: 5px;
  padding-right: 5px;
}
.item-card {
  transition: 0.5s;
  cursor: pointer;
      border: aliceblue;
    border-radius: 50%;
}
.card-title{
    text-align: center;
    font-size: 24px;
    color: #43884b;
}
.item-card-title {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
}
.item-card-title i {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
}
.card-title i:hover {
  transform: scale(1.25) rotate(100deg);
  color: #18d4ca;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

.card::before,
.card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: "";
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before,
.card:hover::after,
.card:focus::before,
.card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>