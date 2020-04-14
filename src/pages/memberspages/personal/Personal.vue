<template>
  <div class='personal'>
    <div class='per-head'>
       <div class='back-div' @click="back">
        <i id='back' class='iconfont iconback'></i>
      </div>
      <div class='per-title'>我</div>
    </div>
    <!-- 名片单 -->
    <div class='business-card'>
      <img class='img'  :src="this.headImg" alt="">
      <div class='card-div'>
        <div class='nickname'>{{basicData.snickname}}</div>
        <div class='introduction'>简介：{{basicData.sintroduction}}</div>
      </div>
    </div>
    <!-- 页面菜单 -->
    <div class='personal-menu'>
      <div id='item1' class='menu-item' @click="selectMenu('item1')">主页</div>
      <div id='item2' class='menu-item' @click="selectMenu('item2')">动态</div>
    </div>
    <!-- 主页 -->
    <div v-show='this.flag'  class='main-page-1'>
      <!-- 基本资料 -->
      <div class='basic'>
        <div class='basic-title'>基本资料:</div>
        <i id='basic-set' class='iconfont iconRight_line'></i>
      </div>
      <div class='basic-item'>姓名: {{basicData.sname}}</div>
      <div class='basic-item'>年龄: {{basicData.sage}}</div>
      <div class='basic-item'>学院: {{basicData.scollege}}</div>
      <div class='basic-item'>专业: {{basicData.smajor}}</div>
      <div class='basic-item'>年级: {{basicData.sgrade}}</div>
      <div class='basic-item'>家乡: {{basicData.shome}}</div>

      <!-- 社团 -->

    </div>

    <!-- 动态页面 -->
    <div v-show='!this.flag' class='main-page-2'>

    </div>
  </div>

</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      basicData: {},
      flag: true,
      headImg: ''
    }
  },
  components: {},
  created () {
    this.$nextTick(function () {
      const select = document.getElementById('item1')
      select.style.borderBottom = ' darksalmon 2px solid'
    })
    this.get()
    this.getHeadImg()
  },
  mounted () {},
  methods: {
    back () {
      this.$router.go(-1)
    },
    get () {
      this.myAjax.post('/getpersonal', {
        id: this.$store.state.user
      })
        .then((response) => {
          console.log('getpersonal', response)
          if (response) {
            this.basicData = response.data
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    selectMenu (temp) {
      let select = document.getElementById('item1')
      select.style.borderBottom = ''
      select = document.getElementById('item2')
      select.style.borderBottom = ''
      select = document.getElementById(temp)
      select.style.borderBottom = ' darksalmon 2px solid'
      if (temp === 'item1') {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    getHeadImg () {
      this.myAjax.post('/getpersonalimg', {id: this.$store.state.user})
        .then((response) => {
          this.headImg = response.data.img
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style>
.per-head{
  width: 100%;
  height: 50px;
  background-color: darksalmon;
}
.per-title{
  padding-top: 15px;
  font-size: 20px;
  margin-left: 140px;
  float: left;
}
.back-div{
  padding-top: 15px;
  padding-left: 10px;
  float: left;

}
#back{
  font-size: 25px;
}
.business-card{
  margin: 10px 0 0 0;
  height: 72px;
  background-color: white;
  border-bottom:gray 0.5px solid ;
}
.img{
  width: 50px;
  height: 50px;
  border-radius: 60px;
  border: gray 1px solid;
  float: left;
  margin: 10px 10px 10px 20px
}
.nickname{
  margin: 10px 0 0 0;
  font: bold;
}
.card-div{
  float: left;
}
.introduction{
  width: 220px;
  margin-top: 5px;
  font-size: 10px;
  line-height: 15px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.personal-menu{
  width: 40%;
  height: 30px;
  background: white;
  padding: 0 30%;
}
.menu-item{
  float: left;
  padding: 6px 21px 0 21px;
}
.main-page-1{
  margin-top: 5px;
  /* height: 504.5px; */
  height: 180px;
  width: 100%;
  background-color: white;
}
.basic{
  padding:10px 20px 0 20px;
  margin-bottom: 5px;
  border-bottom: #EEE5DE 1px solid;
}
.basic-title{
  float: left;
  font:bold;
  width: 310px;
}
#basic-set{
  font-size: 20px;
}
.basic-item{
  padding:2px 0 0 40px;
  font-size: 14px;
  color: #2B2B2B;
}
.main-page-2{
  margin-top: 5px;
  height: 499px;
  width: 100%;
  background-color: white;
}
</style>
