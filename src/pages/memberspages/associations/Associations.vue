<template>
  <div class='Associations'>
    <mt-search class='search' v-model="value"></mt-search>
    <div class='associationbody'>
      <div class='associationitem'>
        <img class="associationlogo" src="../../../../static/MSite/007.png">
        <div class="associationtitle">南师大DIY手工社</div>
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
      this.myAjax.post('/getassociation', {
        MSno: this.$store.state.user
      })
        .then((response) => {
          // const temp = {
          //   name: response.data.aname

          // }
        })
        .catch(function (error) {
          alert(error)
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
.associationbody {
  height: 478px;
  width: 100%;
  padding-top: 10px;
  overflow: auto;
}
.associationitem {
  padding: 8px 42px 0 42px;
  height: 128px;
  width: 100px;
  float: left;
}
.associationlogo {
  height: 100px;
  width: 100px;
}
.associationtitle{
  font-size: 10px;
}
</style>
