<template>
<div class="MSite">
  <!-- <mt-search class='search'></mt-search> -->
  <!-- 横向菜单 -->
  <div class='a-head-menu'>
    <div id='hfriends' class='a-head-menu-item' @click="changemenu('hfriends')">好友动态</div>
    <div id='hnews' class='a-head-menu-item' @click="changemenu('hnews')">社团新闻</div>
    <div id='hactivity' class='a-head-menu-item' @click="changemenu('hactivity')">最近活动</div>
  </div>
  <!-- 内容 -->
  <div class='content-div'>
    <!-- 好友动态 -->
    <div v-show="this.flag === this.menu[0]">
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

    <!-- 社团新闻 -->
    <div  v-show="this.flag === this.menu[1]">
      <div
        v-for="(item,index) in tempNews"
        :key="index"
        class='news-item'
        @click="to(item.nurl)">
        <img class='news-item-img' :src='item.nimg'>
        <div class='news-item-div'>
          <div class='news-item-title'>{{item.ntitle}}</div>
          <div class='news-item-text'>{{item.nintroduction}}</div>
        </div>
      </div>
    </div>

    <!-- 最近活动 -->
    <div  v-show="this.flag === this.menu[2]">
      <div
        v-for="(item,index) in tempActivity"
        :key="index"
        class='news-item'>
        <img class='news-item-img' :src='item.acimg'>
        <div class='news-item-div'>
          <div class='activity-item-title'>活动：{{item.acname}}</div>
          <div class='activity-item-title'>主办：{{item.acassociation}}</div>
          <div class='activity-item-title'>地点：{{item.acplace}}</div>
          <div class='activity-item-title'>开始时间：{{item.actime}}</div>
        </div>
      </div>
    </div>
  </div>
<div>

</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      flag: 'hfriends',
      menu: [
        'hfriends',
        'hnews',
        'hactivity'
      ],
      content: [],
      tempFriends: [],
      tempNews: [],
      tempAssociation: [],
      tempActivity: [],
      tempInfo: []
    }
  },
  created () {
    this.getInfo()
    this.$nextTick(function () {
      const select = document.getElementById(this.flag)
      select.style.borderBottom = ' darksalmon 3px solid'
    })
  },
  methods: {
    changemenu (temp) {
      this.menu.map((item) => {
        var other = document.getElementById(item)
        other.style.borderBottom = ''
      })
      this.flag = temp
      const select = document.getElementById(temp)
      select.style.borderBottom = ' darksalmon 3px solid'
      if (temp === this.menu[0]) {
        this.tempInfo = []
        this.getInfo()
      } else if (temp === this.menu[1]) {
        this.getNews()
      } else if (temp === this.menu[2]) {
        this.getActivity()
      }
    },
    getNews () {
      this.myAjax.post('/getnews')
        .then((response) => {
          console.log('news', response)
          this.tempNews = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getActivity () {
      this.myAjax.post('/getactivity')
        .then((response) => {
          console.log('activity', response)
          this.tempActivity = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getInfo () {
      this.myAjax.post('/getinfo', { id: this.$store.state.user })
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
    compare (obj1, obj2) {
      var val1 = obj1.no
      var val2 = obj2.no
      if (val1 < val2) {
        return 1
      } else if (val1 > val2) {
        return -1
      } else {
        return 0
      }
    }
  }
}
</script>

<style>
.a-head-menu{
  width: 100%;
  height: 40px;
  border-bottom: gray 2px solid;

}
.a-head-menu-item{
  width: 125px;
  height: 25px;
  float: left;
  padding-top: 10px;
  text-align: center;
}
.content-div{
  width: 100%;
  height: 436px;
  overflow: auto;
}
.news-item{
  width: 100%;
  height: 60px;
  padding: 15px 0;
  border-bottom: rgba(221, 219, 219, 0.884) 1px solid;
}
.news-item-img{
  margin: 0 20px 0 30px;
  width: 90px;
  height: 60px;
  float: left;
}
.news-item-div{
  float: left;
  height: 60px;
}
.news-item-title{
  width: 220px;
  height: 20px;
  line-height: 20px;
  font-size: 15px ;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-item-text{
  width: 220px;
  margin-top: 5px;
  font-size: 6px;
  line-height: 12px;
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.activity-item-title{
  width: 220px;
  height: 15px;
  line-height: 15px;
  font-size: 10px ;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.head-img{
  height: 40px;
  width: 40px;
  border-radius:50%;
  margin-top: 7px;
  margin-left: 10px;
  float: left;
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

</style>
