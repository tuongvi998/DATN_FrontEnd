<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {

  },
  created() {
    // this.$store.dispatch("showAllUpcomingActivity");
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

 {
  opacity: 0;
}
</style>
