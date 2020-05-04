<template>
    <div class="footer">
        <div class="footer-item">
            <i id="footer-icon-msite" v-if = !this.isMiste() class='iconfont iconjianyuede' @click="guide_msite"></i>
            <i id="footer-icon-msite-select" v-if = this.isMiste() class='iconfont iconjianyuede' @click="guide_msite"></i>
            <div class="footer-tips">首页</div>
        </div>
        <div class="footer-item">
            <i id="footer-icon-messages" v-if = !this.isMessages() class='iconfont iconduanxin' @click="guide_messages"></i>
            <i id="footer-icon-messages-select" v-if = this.isMessages() class='iconfont iconduanxin' @click="guide_messages"></i>
            <div class="footer-tips">消息</div>
        </div>
        <div class="footer-item">
            <i id="footer-icon-associations" v-if = !this.isAssociations() class='iconfont iconrenwen' @click="guide_associations"></i>
            <i id="footer-icon-associations-select" v-if = this.isAssociations() class='iconfont iconrenwen' @click="guide_associations"></i>
            <div class="footer-tips">社团</div>
        </div>
        <div class="footer-item">
            <i id="footer-icon-friends" v-if = !this.isFriends() class='iconfont iconshizhong' @click="guide_friends"></i>
            <i id="footer-icon-friends-select" v-if = this.isFriends() class='iconfont iconshizhong' @click="guide_friends"></i>
            <div class="footer-tips">好友</div>
        </div>
        <!-- <div class="footer-item">
            <i id="footer-icon-personal" v-if = !this.isPersonal() class='iconfont iconshenfenzheng' @click="guide_personal"></i>
            <i id="footer-icon-personal-select" v-if = this.isPersonal() class='iconfont iconshenfenzheng' @click="guide_personal"></i>
            <div class="footer-tips">我的</div>
        </div> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentFlage: this.$route.path
    }
  },
  methods: {
    guide_msite: function () {
      if (this.currentFlage !== '/msite') {
        this.currentFlage = '/msite'
        this.$router.push({path: '/msite'})
      }
    },
    guide_messages: function () {
      if (this.currentFlage !== '/messages') {
        this.currentFlage = '/messages'
        this.$router.push({path: '/messages'})
      }
    },
    guide_associations: function () {
      if (this.currentFlage !== '/associations') {
        this.currentFlage = '/associations'
        this.$router.push({path: '/associations'})
      }
    },
    guide_friends: function () {
      if (this.currentFlage !== '/friends') {
        this.currentFlage = '/friends'
        this.$router.push({path: '/friends'})
      }
    },
    // guide_personal: function () {
    //   if (this.currentFlage !== '/personal') {
    //     this.currentFlage = '/personal'
    //     this.$router.push({path: '/personal'})
    //   }
    // },
    isMiste: function () {
      if (this.currentFlage === '/msite') {
        return true
      } else {
        return false
      }
    },
    isMessages: function () {
      if (this.currentFlage === '/messages') {
        return true
      } else {
        return false
      }
    },
    isAssociations: function () {
      if (this.currentFlage === '/associations') {
        return true
      } else {
        return false
      }
    },
    isFriends: function () {
      if (this.currentFlage === '/friends') {
        return true
      } else {
        return false
      }
    }
    // isPersonal: function () {
    //   if (this.currentFlage === '/personal') {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  }
}
</script>

<style>
#footer-icon-msite{
    font-size: 40px;
    margin: 10px 20px;
}
#footer-icon-messages{
    font-size: 40px;
    margin: 10px 20px;
}
#footer-icon-associations{
    font-size: 40px;
    margin: 10px 20px;
}
#footer-icon-friends{
    font-size: 40px;
    margin: 10px 20px;
}
#footer-icon-personal{
    font-size: 40px;
    margin: 0 20px;
}
#footer-icon-msite-select{
    font-size: 40px;
    margin: 10px 20px;
    color: grey;
}
#footer-icon-messages-select{
    font-size: 40px;
    margin: 10px 20px;
    color: grey;
}
#footer-icon-associations-select{
    font-size: 40px;
    margin: 10px 20px;
    color: grey;
}
#footer-icon-friends-select{
    font-size: 40px;
    margin: 10px 20px;
    color: grey;
}
#footer-icon-personal-select{
    font-size: 40px;
    margin: 0 20px;
    color: grey;
}
.footer{
    width: 100%;
    overflow: hidden;
    background-color:darksalmon;
}
.footer-item{
    width: 25%;
    height: 67px;
    float: left;
    padding-top: 10px;
}
.footer-tips{
  margin-top: 1px;
  margin-left: 27px;
  font-size: 12px
}
</style>
