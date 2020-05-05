<template>
  <div id='app'>
    <!-- 社员页面头部导航尾部导航 -->
    <div class='app-page'  v-if = this.flaga>
      <HeaderGuide/>
      <router-view class='app-route'></router-view>
      <FooterGuide/>
    </div>
    <!-- 社团页面有头尾部导航 -->
    <div v-if = this.flagb>
      <AHeaderGuide/>
      <router-view class='app-route'></router-view>
      <AFooterGuide/>
    </div>
    <!-- 无头尾部导航 -->
     <div v-if = this.flagc>
      <router-view></router-view>
    </div>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide.vue'
import HeaderGuide from './components/HeaderGuide.vue'
import AHeaderGuide from './components/AHeaderGuide.vue'
import AFooterGuide from './components/AFooterGuide.vue'
export default {
  components: {
    FooterGuide,
    HeaderGuide,
    AHeaderGuide,
    AFooterGuide
  },
  data () {
    return {
      flaga: true,
      flagb: false,
      flagc: false
    }
  },
  methods: {
    setFlag () {
      this.flaga = false
      this.flagb = false
      this.flagc = false
    }
  },
  watch: {
    $route: {
      handler (val, old) {
        var path = this.$route.path
        if (path === '/msite' || path === '/messages' || path === '/associations' || path === '/friends') {
          this.setFlag()
          this.flaga = true
        } else if (path === '/amsite' || path === '/tool' || path === '/amessages' || path === '/aassociation') {
          this.setFlag()
          this.flagb = true
        } else {
          this.setFlag()
          this.flagc = true
        }
        console.log('path', this.flaga)
      },
      immediate: true
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
  background-color: #FDF5E6;
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
