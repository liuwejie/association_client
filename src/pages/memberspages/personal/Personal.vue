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
    <div v-show='this.flag' style="overflow: scroll;">
      <!-- 基本资料 -->
      <div class='main-page-1'>
        <div class='basic-title'>基本资料:</div>
        <div class='basic-item'>姓名: {{basicData.sname}}</div>
        <div class='basic-item'>年龄: {{basicData.sage}}</div>
        <div class='basic-item'>学院: {{basicData.scollege}}</div>
        <div class='basic-item'>专业: {{basicData.smajor}}</div>
        <div class='basic-item'>年级: {{basicData.sgrade}}</div>
        <div class='basic-item'>家乡: {{basicData.shome}}</div>
      </div>

      <!-- 社团 -->
      <div class='main-page-1'>
        <div class='basic-title'>所在社团:</div>
        <div class="association-card">
          <div
          class='basic-association-item'
          v-for="(item,index) in associationArray"
          :key="index">
            <img class='basic-association-img' :src="item.img">
            <div
            class='basic-association-name'>
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <!-- 动态页面 -->
    <div v-show='!this.flag'>
      <div class="info-body">
      <div
        v-for="(item,index) in tempInfo"
        :key="index"
        class="info">
        <div class="info-title">
          <img class='head-img' :src="item.headimg" alt="">
          <div class='info-name-time'>
            <div class='info-name'>{{item.remark}}</div>
            <div class="info-time">发布时间:{{item.time}}</div>
          </div>
        </div>
        <div
          v-if='item.showContent'
          class="info-content">
          {{item.content}}
        </div>
        <div v-if="item.img.length === 1">
          <img class='info-img-one' :src='item.img[0]' alt="">
        </div>
        <div class='info-img-one' v-else-if="item.img.length ===2">
          <span
            v-for="(temp,indexs) in item.img"
            :key="indexs"
            class='info-img-four-pan'>
            <img class='info-img-two' :src='temp' alt="">
          </span>
        </div>
        <div class='info-img-one' v-else-if="item.img.length ===4">
          <span
            v-for="(temp,indexs) in item.img"
            :key="indexs"
            class='info-img-pan'>
            <img class='info-img-two' :src='temp' alt="">
          </span>
        </div>
         <div class='info-img-one' v-else>
          <span
            v-for="(temp,indexs) in item.img"
            :key="indexs"
            class='info-img-pan'>
            <img class='info-img-three' :src='temp' alt="">
          </span>
        </div>
        <div class='info-icon'>
          <div class='icon-div'>
            <i id='icon1' class='iconfont iconicon_likegood'></i>
          </div>
          <div class='icon-div'>
            <i id='icon2' class='iconfont iconicon_addmessage'></i>
          </div>
          <div class='icon-div'>
            <i id='icon3' class='iconfont iconicon_share'></i>
          </div>
        </div>
      </div>

    </div>
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
      headImg: '',
      tempInfo: [],
      associationArray: []
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
    this.getAssociation()
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
    getInfo () {
      this.myAjax.post('./getpersonalinfo', { id: this.$store.state.user })
        .then((response) => {
          var info = []
          response.data.map((item) => {
            var temp = {}
            temp.no = item.no
            temp.id = item.id
            temp.headimg = item.headimg
            temp.remark = item.remark
            temp.time = item.time
            temp.img = []
            if (item.content !== null) {
              temp.showContent = true
              temp.content = item.content
            } else {
              temp.showContent = false
            }
            if (item.imga !== null) {
              temp.img.push(item.imga)
            }
            if (item.imgb !== null) {
              temp.img.push(item.imgb)
            }
            if (item.imgc !== null) {
              temp.img.push(item.imgc)
            }
            if (item.imgd !== null) {
              temp.img.push(item.imgd)
            }
            if (item.imge !== null) {
              temp.img.push(item.imge)
            }
            if (item.imgf !== null) {
              temp.img.push(item.imgf)
            }
            if (item.imgg !== null) {
              temp.img.push(item.imgh)
            }
            if (item.imgh !== null) {
              temp.img.push(item.imgi)
            }
            if (item.imgi !== null) {
              temp.img.push(item.imga)
            }
            info.push(temp)
          })
          info.sort(this.compare)
          this.tempInfo = info
          console.log('好友动态', this.tempInfo)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getAssociation: function () {
      this.myAjax.post('/getassociation', {
        msid: this.$store.state.user
      })
        .then((response) => {
          this.associationArray = response.data
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
        this.getInfo()
        this.get()
        this.getAssociation()
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
  padding-bottom: 10px;
  background-color: white;
}
.basic{
  padding:10px 20px 0 20px;
  margin-bottom: 5px;
  border-bottom: #EEE5DE 1px solid;
}
.basic-title{
  font:bold;
  height: 20px;
  border-bottom: #EEE5DE 1px solid;
  padding: 10px 15px;
}
#basic-set{
  font-size: 20px;
}
.basic-item{
  padding:3px 0 3px 40px;
  font-size: 14px;
  font:bold;
  color: #2B2B2B;
}
.main-page-2{
  margin-top: 5px;
  height: 499px;
  width: 100%;
  background-color: white;
}
.info{
  width: 100%;
  padding-bottom:20px;
  border-bottom: rgb(212, 212, 212) 1px solid ;
}
.info-title{
  width: 100%;
  height: 50px;
}
.info-name{
  padding: 9px 0 0 15px;
  font-size: 15px;
}
.info-time{
  font-size: 10px;
  padding-left: 10px;
}
.info-name-time{
  float: left;
}
.info-content{
  margin: 2px 15px;
  font-size: 15px;
}
.info-img-one{
  margin: 2px 15px;
  width: 345px;
}
.info-img-two{
  margin: 2px;
  width: 168px;
  vertical-align:middle;
}
.info-img-three{
  margin: 2px;
  width: 111px;
  vertical-align:middle;
}
.info-img-span{
  display: inline-block;
}
.info-icon{
  margin: 10px 15px 0 15px;
  padding-top: 4px;
  height: 25px;
  border-top: rgb(212, 212, 212) 1px solid ;
}
.icon-div{
  float: left;
  width: 115px;
  height: 25px;
}
#icon1{
  font-size: 24px;
}
#icon2{
  font-size: 24px;
  padding-left: 48px;
}
#icon3{
  font-size: 24px;
  padding-left: 91px;
}
.info-body{
  overflow: auto;
  background-color: white;
  margin-top: 10px;
  padding-top: 5px;
  height: 485px;
}
.head-img{
  height: 40px;
  width: 40px;
  border-radius:50%;
  margin-top: 7px;
  margin-left: 10px;
  float: left;
}
.association-card{
  padding:10px 20px 20px 20px;
  background-color: white;

}
.basic-association-img{
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 5px;
  border-radius: 60px;
  margin-top: 1px;
}
.basic-association-item{
  float: left;
  background-color: #FDF5E6;
  border: teal 0.5px solid;
  border-radius: 5px;
  margin-left: 5px;
  margin-top: 5px;
  height: 32px;
}
.basic-association-name{
  float: left;
  font-size: 14px;
  font:bold;
  padding: 7px;
  color: #2B2B2B;
  width: 110px;
}
.clear{
  clear: both;
}
</style>
