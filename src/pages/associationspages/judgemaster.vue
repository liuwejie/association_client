<template>
  <div>
    <div class="judge-master-header">
      社团管理模块入口
    </div>
    <div class="judge-master-none" v-if='this.association.length === 0'>
      暂无相关权限
    </div>
    <div class="judge-master-body" v-if='this.association.length !== 0'>
       <div
        v-for="(item,index) in association"
        :key="index"
        class='association'
        @click="toassociation(item.aid)"
      >
        <img style='width: 140px;' :src='item.aimg'/>
        <div style=" text-align: center;">
          {{item.aname}}
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      association: []
    }
  },
  created () {
    this.myAjax.post('/getmaster', {id: this.$store.state.user})
      .then((response) => {
        this.association = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    toassociation (id) {
      this.$router.push({path: '/amsite'})
      this.$store.commit('GET_ASSOCIATION', id)
    }
  }
}
</script>

<style>
.judge-master-header{
  height: 70px;
  width: 100%;
  background-color: darksalmon;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  padding-top: 30px;
}
.judge-master-none{
  height: 70px;
  width: 100%;
  /* background-color: darksalmon; */
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  padding-top: 30px;
}
.judge-master-body{
  padding: 0 30px;
  height: 567px;
}
.association{
  width: 150;
  float: left;
  padding: 10px 7.5px;
}
</style>
