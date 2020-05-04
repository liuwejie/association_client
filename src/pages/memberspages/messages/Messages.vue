<template>
    <div>
      <div class="title">
        <div class="titleitem1" @click="itemFriends">私聊</div>
        <div class="titleitem2" @click="itemAssociation">群聊</div>
        <div class="titleitem3" @click="itemSystem">通知</div>
      </div>
      <div class="message-body" v-if = this.flag1>
        <div
        v-for="(item,index) in records"
        :key="index"
        @click="chat(item)"
        class='records-item'>
          <img
          :src="item.img"
          class='records-item-img'>
          <div class='records-item-body'>
            <div>{{item.title}}</div>
            <div class='records-item-cotent-body'>
              <div class='records-item-content'>{{item.content}}</div>
              <div class='records-item-time'>{{item.time}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="message-body" v-if = this.flag2>
        <div
        v-for="(item,index) in grouprecords"
        :key="index"
        @click="gochat(item)"
        class='records-item'>
          <img
          :src="item.img"
          class='records-item-img'>
          <div class='records-item-body'>
            <div>{{item.title}}</div>
            <div class='records-item-cotent-body'>
              <div class='records-item-content'>{{item.name + ": " + item.content}}</div>
              <div class='records-item-time'>{{item.time}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="message-body" v-if = this.flag3>
        通知
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      flag1: true,
      flag2: false,
      flag3: false,
      records: [],
      grouprecords: []
    }
  },
  created () {
    this.getRecords()
  },
  methods: {
    itemFriends () {
      this.flag1 = true
      this.flag2 = false
      this.flag3 = false
      this.getRecords()
    },
    itemAssociation () {
      this.flag1 = false
      this.flag2 = true
      this.flag3 = false
      this.getRecordsRecords()
    },
    itemSystem () {
      this.flag1 = false
      this.flag2 = false
      this.flag3 = true
    },
    getRecords () {
      this.myAjax.post('/getrecords', { id: this.$store.state.user })
        .then((response) => {
          var date = new Date()
          var year = date.getFullYear()
          var month = date.getMonth() + 1
          var day = date.getDate()
          this.records.length = 0
          response.data.map((item) => {
            var time = item.time
            var d = new Date(time)
            if (d.getFullYear() !== year) {
              item.time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
            } else if (d.getMonth() + 1 !== month) {
              item.time = (d.getMonth() + 1) + '-' + d.getDate()
            } else if (d.getDate() !== day) {
              item.time = (d.getMonth() + 1) + '-' + d.getDate()
            } else {
              item.time = d.getHours() + ':' + d.getMinutes()
            }
            this.records.push(item)
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getRecordsRecords () {
      this.myAjax.post('/getgrouprecords', { id: this.$store.state.user })
        .then((response) => {
          var date = new Date()
          var year = date.getFullYear()
          var month = date.getMonth() + 1
          var day = date.getDate()
          this.grouprecords.length = 0
          response.data.map((item) => {
            var time = item.time
            var d = new Date(time)
            if (d.getFullYear() !== year) {
              item.time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
            } else if (d.getMonth() + 1 !== month) {
              item.time = (d.getMonth() + 1) + '-' + d.getDate()
            } else if (d.getDate() !== day) {
              item.time = (d.getMonth() + 1) + '-' + d.getDate()
            } else {
              item.time = d.getHours() + ':' + d.getMinutes()
            }
            this.grouprecords.push(item)
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    chat (item) {
      this.$router.push({
        name: 'chat',
        params: {
          id: item.id,
          remark: item.title
        }
      })
    },
    gochat (item) {
      this.$router.push({
        name: 'groupchat',
        params: {
          title: item.title,
          id: item.id
        }
      })
    }
  }
}
</script>

<style>
.title {
  height: 40px;
  width: 100%;
  border-bottom: tan 3px solid;
  background-color: #FAF0E6;
}
.titleitem1 {
  position: absolute;
  left: 0;
  width: 50px;
  float: left;
  font-size: 20px;
  padding: 10px 0 0 40px;
}
.titleitem2 {
  position: absolute;
  left: 125px;
  width: 50px;
  float: left;
  font-size: 20px;
  padding: 10px 0 0 40px;
}
.titleitem3 {
  position: absolute;
  left: 250px;
  width: 50px;
  float: left;
  font-size: 20px;
  padding: 10px 0 0 40px;
}
.message-body{
  overflow: scroll;
  height: 475px;
  padding: 10px 10px 0 10px;
}
.records-item{
  height: 50px;
  border: teal 0.5px solid;
  border-radius: 5px;
}
.records-item-img{
  height: 40px;
  margin: 5px 20px;
  border-radius: 60px;
  float: left;
}
.records-item-body{
  height: 50px;
  float: left;
  padding-top: 2px;
}
.records-item-content{
  float: left;
  font-size: 14px;
  padding-top: 3px;
  color: #636363;
  height: 21px;
  width: 190px;
  overflow: hidden;
}
.records-item-time{
  float: left;
  color: #969696;
  padding: 4px;
  font-size: 12px;
  width: 61px;
  text-align: right;
}
</style>
