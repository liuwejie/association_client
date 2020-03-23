<template>
  <div class='Friends'>
    <mt-search class='search' v-model="value"></mt-search>
    <div class="friendsbody">
      <div
      v-for="item in friends" :key="item"
      class="friendsitem">
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
      friends: []
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
        })
        .catch(function (error) {
          alert(error)
        })
    }

  }
}
</script>
<style>
.search {
  width: 100%;
  height: 52x;
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
