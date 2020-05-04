<template>
  <div class='head'>
    <div class='header-body'>
      <div>
        <img class='head-img' :src='img'>
      </div>
       <div class='header-title'>{{title}}</div>
    </div>
      <i id='chat-add' class='iconfont iconicon_add' @click="changeshow"></i>
      <mt-popup
        v-model="popupVisible"
        position="right">
        <div class='modal-body'>
          <div class='modal-div'>
            <mt-button class='modal-button' type="primary" @click="toMaster">退出社团管理</mt-button>
          </div>
          <div class='modal-div'>
            <mt-button class='modal-button' type="primary">活动签到</mt-button>
          </div>
          <div class='modal-div'>
             <mt-button  class='modal-button' type="primary"></mt-button>
        </div>
          </div>
      </mt-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      img: '',
      popupVisible: false
    }
  },
  components: {},
  created () {
    this.getImg()
  },
  mounted () {},
  methods: {
    getImg () {
      this.myAjax.post('/getassociationimg', {id: this.$store.state.association})
        .then((response) => {
          console.log(response)
          this.img = response.data.img
          this.title = response.data.item
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changeshow () {
      this.popupVisible = true
    },
    toMaster () {
      this.$router.push({path: '/msite'})
    }
  },
  watch: {
    $route: {
      handler (val, old) {
        if (this.$route.path === '/amsite') {
          this.title = '首页'
        } else if (this.$route.path === '/amessages') {
          this.title = '消息'
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
  width: 270px;
  margin-top: 16px;
  text-align: center;
  font-family: '宋体';
  font-weight: bold

}
#chat-add{
  float: right;
  font-size: 24px;
  margin-right: 20px;
  margin-top: 20px;
}
.modal-body{
    height: 667px;
    width: 100%;
    /* padding-top: 60px; */
}
.modal-div{
  width: 160px;
  padding: 10px 10px;
}
.modal-button{
  width: 160px;
  /* padding: 0 20px; */
  background-color: darksalmon;
}
</style>
