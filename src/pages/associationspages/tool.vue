<template>
<div>
  <div class="tool-body">
  <div class="tool-item">
    <img style='width: 140px; height:140px' @click="tonews()" src='../../../static/applynews.png'/>
    <div style=" text-align: center;">
        申报新闻
    </div>
  </div>
  <div class="tool-item">
    <img style='width: 140px; height:140px' @click="toactivity()" src='../../../static/applyactivity.png'/>
    <div style=" text-align: center;">
        申报活动
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    toactivity () {
      this.$router.push({path: '/applyactivity'})
    },
    tonews () {
      this.$router.push({path: '/applynews'})
    }
  }
}
</script>

<style>
.tool-body{
  padding: 0 30px;
  height: 567px;
}
.tool-item{
  width: 150;
  float: left;
  padding: 10px 7.5px;
}
</style>
