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

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "group by field",
  data() {
    return {
      image: require("@/assets/img/allgr_card.jpg"),
    };
  },
  computed: {

  },
  created() {
      this.$store.dispatch("showListFieldGroup");
  }
};
</script>

<style scoped>
</style>