<template>
  <div id="material-kit">
    <vue-confirm-dialog></vue-confirm-dialog>
    <notifications class="mr-3 mt-5" group="foo" />
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
export default {
  name: "App",
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
</style>
