<template>
  <div class='Friends'>
    <mt-search
      class='search'
      v-model='searchValue'
      >
    </mt-search>
    <div class="friendsbody">
      <div
      v-for="(item,index) in friends" :key="index"
      class="friendsitem"
      @click="chat(item)"
      >
        <img class="friendjpg" src="../../../../static/MSite/001.jpg">
        <div class="friendtitle">{{item.remark}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Friends',
  data () {
    return {
      friends: [],
      searchValue: ''
    }
  },
  components: {},
  created () {
    this.getFriends()
  },
  mounted () {},
  methods: {
    getFriends () {
      this.friends.length = 0
      this.myAjax.post('/getfriends', {
        fown: this.$store.state.user
      })
        .then((response) => {
          response.data.map(item => {
            this.friends.push(item)
          })
          console.log('好友列表：', this.friends)
          this.$forceUpdate()
        })
        .catch(function (error) {
          alert(error)
        })
    },
    chat (item) {
      this.$router.push({
        name: 'chat',
        params: {
          id: item.id,
          remark: item.remark
        }
      })
    }

  }
}
</script>
<style>
.search {
  width: 100%;
  height: 52px;
  border-bottom: tan 2px solid;
}
.friendsbody {
  height: 478px;
  width: 100%;
  padding-top: 10px;
  overflow: auto;
}
.friendsitem {
  height: 50px;
  width: 100%;
  border: teal 1px solid;
  border-radius: 10px;
}
.friendjpg {
  height: 40px;
  margin: 5px 20px;
  border-radius: 60px;
  float: left;
}
.friendtitle{
  line-height: 40px;
  margin: 5px 20px;
}
</style>
