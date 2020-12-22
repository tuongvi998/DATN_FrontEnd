<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <!-- <li>
            <a href="https://www.creative-tim.com">Creative Tim</a>
          </li>
          <li>
            <a href="https://creative-tim.com/presentation">
              Giới thiệu
            </a>
          </li>
          <li>
            <a href="http://blog.creative-tim.com">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li> -->
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="https://www.creative-tim.com/?ref=mdf-vuejs" target="_blank"
          >Chia sẻ</a
        >, vơi <i class="fa fa-heart heart"></i> để thế giới tốt hơn
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.main-panel > .footer {
    /* border-top: 1px solid #e7e7e7; */
    /* position: fixed; */
    bottom: 0;
    width: 100%;
}
</style>
