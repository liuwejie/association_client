<template>
  <div class='chat'>
    <div class='chat-head'>
      <div class='chat-back-div' @click="back">
        <i id='chat-back' class='iconfont iconback'></i>
      </div>
      <div class="chat-title">{{title}}</div>
    </div>

    <div
    id='scrolldIV'
    class='chat-body'>
      <div
      v-for="(item,index) in messageArray"
      :key="index"
      class='chat-item'>
        <div class='chat-time'>{{item.mtime}}</div>
        <div
        v-if="item.msendid == myid"
        class='chat-my'>
          <div class='chat-my-div'>
            <div class="chat-my-text">{{item.mcontent}}</div>
          </div>
          <img
          class='chat-my-img'
          src='../../../../static/MSite/001.jpg'>
        </div>

        <div
         v-if="item.msendid === friendsId"
         class='chat-other'>
          <img
          class='chat-other-img'
          src='../../../../static/MSite/001.jpg'>
          <div class='chat-other-div'>
            <div class="chat-other-text">{{item.mcontent}}</div>
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
  name: '',
  data () {
    return {
      title: '用户',
      message: '',
      friendsId: '',
      messageArray: [],
      myid: this.$store.state.user
    }
  },
  components: {},
  created () {
    this.title = this.$route.params.remark
    this.friendsId = this.$route.params.id
    console.log('进入聊天界面，对方昵称：', this.title, ',对方id：', this.friendsId)
    setInterval(() => {
      setTimeout(this.get(), 0)
    }, 1000)
  },
  mounted () {
  },
  updated () {
    this.$nextTick(function () {
      console.log('eeeeee')
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
        this.myAjax.post('/sendmessages', {
          msendid: this.$store.state.user,
          mgetid: this.friendsId,
          mcontent: this.message
        })
          .catch(function (error) {
            alert(error)
          })
        this.message = ''
      }
    },
    get () {
      this.myAjax.post('/getmessages', {
        msendid: this.$store.state.user,
        mgetid: this.friendsId
      })
        .then((response) => {
          var messages = []
          response.data.map((item) => {
            var time = item.mtime
            var d = new Date(time)
            var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            item.mtime = times
            messages.push(item)
          })
          messages.sort(this.compare)

          if (this.messageArray.length === 0) {
            this.messageArray = messages
          } else if (messages[messages.length - 1].mcontent !== this.messageArray[this.messageArray.length - 1].mcontent) {
            this.messageArray = messages
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    compare (obj1, obj2) {
      var val1 = obj1.mno
      var val2 = obj2.mno
      if (val1 < val2) {
        return -1
      } else if (val1 > val2) {
        return 1
      } else {
        return 0
      }
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
  padding: 18px 30px 10px 30px;
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
</style>
