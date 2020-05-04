<template>
  <div class='Associations'>
    <!-- <mt-search class='search' v-model="value"></mt-search> -->
    <div class='association-body'>
      <div
      class='association-item'
      @click="gochat(item)"
      v-for="(item,index) in associationArray"
      :key="index"
      >
        <img class="association-logo" :src="item.img">
        <div class="association-title">{{item.name}}</div>
      </div>
      <div class='associationitem'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Associations',
  data () {
    return {
      associationArray: [],
      value: ''
    }
  },
  components: {},
  created () {
    this.getAssociation()
  },
  mounted () {},
  methods: {
    getAssociation: function () {
      this.myAjax.post('/getallassociation', {
        msid: this.$store.state.user
      })
        .then((response) => {
          this.associationArray = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    // gochat (item) {
    //   this.$router.push({
    //     name: 'groupchat',
    //     params: {
    //       title: item.name,
    //       id: item.id
    //     }
    //   })
    // }
  }
}
</script>
<style>
.association-body {
  clear: both;
  height: 500px;
  padding: 10px 20px 0 20px;
  overflow: auto;
}
.association-item {
  margin: 5px 13px 10px 13px;
  padding: 10px;
  height: 150px;
  width: 120px;
  float: left;
  background-color: #FDF5E6;
  border: teal 0.5px solid;
  border-radius: 5px;
}
.association-logo {
  height: 120px;
  width: 120px;
}
.association-title{
  font-size: 16px;
  text-align: center;
}
</style>
