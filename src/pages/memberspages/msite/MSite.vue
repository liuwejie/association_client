<template>
<div class="MSite">
  <div class="title">活动通知</div>
  <div class="page1">
    <div class="item">
      <div style="float: left">
        <img src="../../../../static/MSite/001.jpg" class="jpg">
      </div>
      <div style="float: left; padding: 2px 10px">
        <div>活动内容: 化学讲座</div>
        <div>活动地点-时间: 学海321</div>
        <div>举办方: 化学协会</div>
      </div>
    </div>
    <div class="item">
      <div style="float: left">
        <img src="../../../../static/MSite/002.jpg" class="jpg">
      </div>
      <div style="float: left; padding: 2px 10px">
        <div>活动内容: 英语讲座</div>
        <div>活动地点-时间: 学海411</div>
        <div>举办方: 英语协会</div>
      </div>
    </div>
     <div class="item">
      <div style="float: left">
        <img src="../../../../static/MSite/003.jpg" class="jpg">
      </div>
      <div style="float: left; padding: 2px 10px">
        <div>活动内容: 绘画讲座</div>
        <div>活动地点-时间: 学海411</div>
        <div>举办方: 绘画协会</div>
      </div>
    </div>
    <div class="item">
      <div style="float: left">
        <img src="../../../../static/MSite/004.jpg" class="jpg">
      </div>
      <div style="float: left; padding: 2px 10px">
        <div>活动内容: 绘画讲座</div>
        <div>活动地点-时间: 学海411</div>
        <div>举办方: 绘画协会</div>
      </div>
    </div>
  </div>
  <div class="title">社团新闻</div>
  <div class="page2">
     <div class="item">
       <div style="float: left">
        <img src="../../../../static/MSite/001.jpg" class="jpg">
      </div>
      <div style="float: left; padding: 2px 10px">
        <div>活动内容: 化学讲座</div>
        <div>活动地点-时间: 学海321</div>
        <div>举办方: 化学协会</div>
      </div>

     </div>
     <div class="item">

     </div>
     <div class="item">

     </div>
     <div class="item">

     </div>
  </div>

</div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.Ms {
}
.page1 {
  height: 200px;
  width: 375px;
  overflow-y: auto;
}
.page2 {
  height: 288px;
  width: 375px;
  overflow-y: auto;

}
.title {
  margin: 0 150px;
  height: 20px;
}
.item {
  background-color: lightcyan;
  width: 295px;
  height: 70px;
  padding: 5px 40px;
  border: 1px gray solid;
   border-radius: 10px;
}
.jpg {
  height: 70px;
  width: 70px;
  border-radius: 60px;
}
</style>
