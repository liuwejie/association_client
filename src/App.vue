<template>
  <div id='app'>
    <div class='app-page'  v-if = this.footerFlag()>
      <HeaderGuide/>
      <router-view class='app-route'></router-view>
      <FooterGuide/>
    </div>
     <div v-if = !this.footerFlag()>
      <router-view></router-view>
    </div>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide.vue'
import HeaderGuide from './components/HeaderGuide.vue'
export default {
  components: {
    FooterGuide,
    HeaderGuide
  },
  methods: {
    footerFlag: function () {
      var path = this.$route.path
      if (path === '/msite' || path === '/messages' || path === '/associations' || path === '/friends') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  height: 667px;
  width: 375px;
  overflow: hidden;
  background-color: #EDEDED;
}
.app-page{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.app-route{
  height: 530px;
  width: 100%;
}
</style>
