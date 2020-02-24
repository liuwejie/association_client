<template>
<div class="MSite">
  <div class="page">
  </div>
  <FooterGuide class="footer"/>
</div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style>
.MSite{
  height: 667px;
  width: 375px;
  overflow: hidden;
}
.page{
  height: 590px;
  width: 100%;
}
</style>
