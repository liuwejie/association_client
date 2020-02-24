<template>
    <div class="footer">
        <div class="footer-item">
            <i id="footer-icon-msite" :class="{'iconfont iconjianyuede': !isMiste, 'iconfont iconjianyuede-copy': isMsite}" @click="guide_msite"></i>
        </div>
        <div class="footer-item">
            <i id="footer-icon-messages" :class="{'iconfont iconduanxin': !isMessages, 'iconfont iconduanxin-copy':isMessages}" @click="guide_messages"></i>
        </div>
        <div class="footer-item">
            <i id="footer-icon-associations" :class="{'iconfont iconrenwen':!isAssociations, 'iconfont iconrenwen-copy':isAssociations}" @click="guide_associations"></i>
        </div>
        <div class="footer-item">
            <i id="footer-icon-friends" :class="{'iconfont iconshizhong':!isFriends, 'iconfont iconshizhong-copy':isFriends}" @click="guide_friends"></i>
        </div>
        <div class="footer-item">
            <i id="footer-icon-personal" :class="{'iconfont iconshenfenzheng':!isPersonal, 'iconfont iconshenfenzheng-copy':isPersonal}" @click="guide_personal"></i>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      clickFlage: 'msite',
      isMsite: false,
      isMessages: false,
      isAssociations: false,
      isFriends: false,
      isPersonal: true
    }
  },
  methods: {
    guide_msite: function () {
      if (this.clickFlage !== 'msite') {
        this.clickFlage = 'msite'
        this.$router.push({path: '/msite'})
      }
    },
    guide_messages: function () {
      if (this.clickFlage !== 'messages') {
        this.clickFlage = 'messages'
        this.$router.push({path: '/messages'})
      }
    },
    guide_associations: function () {
      if (this.clickFlage !== 'associations') {
        this.clickFlage = 'associations'
        this.$router.push({path: '/associations'})
      }
    },
    guide_friends: function () {
      if (this.clickFlage !== 'friends') {
        this.clickFlage = 'friends'
        this.$router.push({path: '/friends'})
      }
    },
    guide_personal: function () {
      if (this.clickFlage !== 'personal') {
        this.clickFlage = 'personal'
        this.$router.push({path: '/personal'})
      }
    }
  }
}
</script>

<style>
#footer-icon-msite{
    font-size: 40px;
    margin: 10px 17px;
}
#footer-icon-messages{
    font-size: 40px;
    margin: 10px 17px;
}
#footer-icon-associations{
    font-size: 40px;
    margin: 10px 17px;
}
#footer-icon-friends{
    font-size: 40px;
    margin: 10px 17px;
}
#footer-icon-personal{
    font-size: 40px;
    margin: 0 17px;
}
.footer{
    width: 100%;
    overflow: hidden;
    background-color:darksalmon;
}
.footer-item{
    width: 20%;
    height: 60px;
    float: left;
    padding-top: 20px;
}
</style>
