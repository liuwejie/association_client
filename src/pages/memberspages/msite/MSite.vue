<template>
<div class="MSite">
  <mt-search class='search'></mt-search>
  <!-- 横向菜单 -->
  <div class='head-menu'>
    <div id='hfriends' class='head-menu-item' @click="changemenu('hfriends')">好友动态</div>
    <div id='hnews' class='head-menu-item' @click="changemenu('hnews')">社团新闻</div>
    <div id='hassociation' class='head-menu-item' @click="changemenu('hassociation')">社团动态</div>
    <div id='hactivity' class='head-menu-item' @click="changemenu('hactivity')">最近活动</div>
  </div>
  <!-- 内容 -->
  <div class='content-div'>
    <!-- 好友动态 -->
    <div v-show="this.flag === this.menu[0]">
      好友动态
    </div>

    <!-- 社团新闻 -->
    <div  v-show="this.flag === this.menu[1]">
      <div
        v-for="(item,index) in tempNews"
        :key="index"
        class='news-item'
        @click="to(item.nurl)">
        <img class='news-item-img' src=''>
        <div class='news-item-div'>
          <div class='news-item-title'>{{item.ntitle}}</div>
          <div class='news-item-text'>{{item.nintroduction}}</div>
        </div>
      </div>
    </div>

    <!-- 社团动态 -->
    <div v-show="this.flag === this.menu[2]" class='news-item'>
      社团动态
    </div>

    <!-- 最近活动 -->
    <div  v-show="this.flag === this.menu[3]">
      <div
        v-for="(item,index) in tempActivity"
        :key="index"
        class='news-item'>
        <img class='news-item-img' src=''>
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
  components: {
  },
  created () {
    this.getNews()
    this.getActivity()
    this.$nextTick(function () {
      const select = document.getElementById(this.flag)
      select.style.borderBottom = ' darksalmon 3px solid'
    })
  },
  data () {
    return {
      flag: 'hnews',
      menu: [
        'hfriends',
        'hnews',
        'hassociation',
        'hactivity'
      ],
      content: [],
      tempFriends: [],
      tempNews: [],
      tempAssociation: [],
      tempActivity: []
    }
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

      } else if (temp === this.menu[1]) {
        this.getNews()
      } else if (temp === this.menu[2]) {

      } else if (temp === this.menu[3]) {
        this.getActivity()
      }
    },
    to (e) {
      window.location.href = e
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
    }
  }
}
</script>

<style>
.search{
  width: 100%;
  height: 52px;
}
.head-menu{
  width: 100%;
  height: 40px;
  border-bottom: gray 2px solid;

}
.head-menu-item{
  width: 18%;
  height: 25px;
  float: left;
  padding-left: 4%;
  padding-right: 3%;
  padding-top: 10px;
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
</style>
