<template>
  <div id="material-kit">
    <vue-confirm-dialog></vue-confirm-dialog>
    <notifications class="notifi mr-3 mt-5" group="foo" />
    <notifications position="top center" group="noti"/>
    <!-- <circle2></circle2> -->
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer"/>
    </div>
  </div>
</template>
<script>
  // import Circle2 from 'vue-loading-spinner/src/components/Circle2.vue'

export default {
  name: "App",
  components: {
    // Circle2
  },
  data() {
    return {
      token: localStorage.getItem("access_token")
    }
  },
  watch: {
    token(){
        console('token null roi ne');
      
    }
  }
}
</script>
<style>
.notifi{
  z-index: 99;
}
</style>
