<template>
  <div class='head'>
    <div class='header-body'>
      <div>
        <img class='head-img' src="../../static/HeaderGuide/HeaderGuide.jpg" @click="goPersonal">
      </div>
       <div class='header-title'>{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  components: {},
  created () {},
  mounted () {},
  methods: {
    goPersonal: function () {
      this.$router.push({path: '/personal'})
    }
  },
  watch: {
    $route: {
      handler (val, old) {
        if (this.$route.path === '/msite') {
          this.title = '首页'
        } else if (this.$route.path === '/messages') {
          this.title = '消息'
        } else if (this.$route.path === '/associations') {
          this.title = '社团'
        } else if (this.$route.path === '/friends') {
          this.title = '好友'
        }
      },
      immediate: true
    }
  }

}
</script>

<style>
.head{
  background-color: darksalmon;
  height: 60px;
}
.head-img{
  height: 45px;
  width: 45px;
  border-radius:50%;
  -webkit-border-radius:50%;
  -moz-border-radius:50%;
  margin-top: 7px;
  margin-left: 12px;
  float: left;
}
.header-title{
  float: left;
  font-size: 30px;
  height: 45px;
  margin-top: 16px;
  margin-left: 25.5%;
  font-family: '宋体';
  font-weight: bold

}
</style>
