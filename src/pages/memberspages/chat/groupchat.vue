<template>
  <div class='groupchat'>
    <div class='chat-head'>
      <div class='chat-back-div' @click="back">
        <i id='chat-back' class='iconfont iconback'></i>
      </div>
      <div class="chat-title">{{title}}</div>
      <div
      class="chat-man-div"
      @click="toHomepage()">
        <i id='chat-man' class='iconfont iconbussiness-man'></i>
      </div>
    </div>

    <div
    id='scrolldIV'
    class='chat-body'>
      <div
      v-for="(item,index) in messageArray"
      :key="index"
      class='chat-item'>
        <div class='chat-time'>{{item.gmtime}}</div>
        <div
        v-if="item.gmsendid === myid"
        class='chat-my'>
          <div class='chat-my-div'>
            <div class="chat-my-text">{{item.gmcontent}}</div>
          </div>
          <img
          class='chat-my-img'
          src='../../../../static/MSite/001.jpg'>
        </div>

        <div
         v-if="item.gmsendid !== myid"
         class='chat-other'>
          <img
          class='chat-other-img'
          src='../../../../static/MSite/001.jpg'>
          <div class='chat-other-div'>
            <div class="chat-other-text">{{item.gmcontent}}</div>
          </div>
        </div>
      </div>

    </div>

    <div class='chat-foot'>
      <input class="chat-messages"
        type="text"
        v-model="message"
      >
      <div class='chat-button' @click="send()">
        发送
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'groupchat',
  data () {
    return {
      title: '用户',
      message: '',
      groupId: '',
      messageArray: [],
      myid: this.$store.state.user,
      timer: null
    }
  },
  components: {},
  created () {
    this.title = this.$route.params.title
    this.groupId = this.$route.params.id
    console.log('进入群聊界面，群聊名称：', this.title, ',群聊id：', this.groupId)
    this.timer = setInterval(() => { this.get() }, 1000)
  },
  mounted () {
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  updated () {
    this.$nextTick(function () {
      var div = document.getElementById('scrolldIV')
      div.scrollTop = div.scrollHeight
    })
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    send () {
      if (this.message !== '') {
        this.myAjax.post('/sendgroupmessages', {
          gmid: this.groupId,
          gmsendid: this.$store.state.user,
          gmcontent: this.message
        })
          .catch(function (error) {
            alert(error)
          })
        this.message = ''
      }
    },
    get () {
      this.myAjax.post('/getgroupmessages', {
        gmid: this.groupId
      })
        .then((response) => {
          var messages = []
          response.data.map((item) => {
            var time = item.gmtime
            var d = new Date(time)
            var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            item.gmtime = times
            messages.push(item)
          })
          messages.sort(this.compare)
          this.messageArray = messages
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    compare (obj1, obj2) {
      var val1 = obj1.gmno
      var val2 = obj2.gmno
      if (val1 < val2) {
        return -1
      } else if (val1 > val2) {
        return 1
      } else {
        return 0
      }
    },
    toHomepage () {
      this.$router.push({
        name: 'groupmembers',
        params: {
          id: this.groupId
        }
      })
    }
  }
}
</script>
<style>
.chat-head{
  background-color: darksalmon;
  height: 60px;
}
.chat-back-div{
  padding-top: 20px;
  padding-left: 10px;
  float: left;

}
#chat-back{
  font-size: 24px;
}
.chat-title{
  padding: 18px 0 10px 30px;
  float: left;
  width: 250px;
  text-align: center;
  font-size: 22px;
}
.chat-body{
  height: 547px;
  width: 100%;
  overflow:scroll;
}
.chat-foot{
  height: 60px;
  background-color: darksalmon;
}
.chat-messages{
  height: 25px;
  width: 270px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 25px;
  float:left;
}
.chat-button{
  float: left;
  height: 30px;
  width: 60px;
  margin-top: 15px;
  margin-left: 10px;
  text-align: center;
  background-color: lightseagreen;
  border-radius: 20px;
  line-height: 30px;
}
.chat-time{
  width: 100%;
  height: 15px;
  font-size: 5px;
  line-height: 15px;
  text-align: center;
  color: gray;
  margin-top: 10px;
}
.chat-my{
  width: 300px;
  height: 50px;
  margin: 0 20px 10px auto;
}
.chat-my-div{
  float: left;
  width: 255px;
  padding-right: 5px;
}
.chat-my-img{
  height: 40px;
  border-radius: 60px;
  float: left;

}
.chat-my-text{
  border-radius: 5px;
  background-color: lightcoral;
  max-width: 200px;
  min-height: 20px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 5px;
  outline: 0;
  border: 1px solid #a0b3d6;
  font-size: 12px;
  line-height: 24px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
  float: right;
}
.chat-other{
  width: 300px;
  height: 50px;
  margin: 0 auto 10px 20px;
}
.chat-other-div{
  float: right;
  width: 255px;
  padding-left: 5px;
}
.chat-other-img{
  height: 40px;
  border-radius: 60px;
  float: left;

}
.chat-other-text{
  border-radius: 5px;
  background-color: lightcoral;
  max-width: 200px;
  min-height: 20px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 5px;
  outline: 0;
  border: 1px solid #a0b3d6;
  font-size: 12px;
  line-height: 24px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
  float: left;
}
#chat-man{
  font-size: 30px;
}
.chat-man-div{
  padding: 18px 0 0 10px;
  float: left;
}
</style>
