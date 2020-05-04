<template>
    <div class='apply-activity-body'>
      <div style="text-align: center;width: 315px; font-size: 30px; border-bottom: 1px rgba(0,0,0, 0.55) solid;"> 活动申报</div>
      <div class='apply-activity-item'>
        <div class='apply-activity-text'>活动标题:</div>
      <input class='apply-activity-input'>
      </div>
      <div class='apply-activity-item'>
        <div class='apply-activity-text'>活动内容:</div>
        <input class='apply-activity-input'>
      </div>
      <div class='apply-activity-item'>
        <div class='apply-activity-text'>活动封面:</div>
          <a href="javascript:;" class="upload">上传封面图片
            <input type="file" @change="add_img()" class='flie' ref="input_btn1" accept="image/*">
          </a>
          <div style='padding-top:20px;width: 100%;text-align: center;'>
            <img style='width: 200px' class="camera" src="" alt="" id="img_show2">
          </div>
      </div>
      <div class='apply-activity-item'>
        <div class='apply-activity-text'>活动地点:</div>
        <input class='apply-activity-input'>
        <div style="margin-top: 10px">
          <a href="javascript:;" class="upload">上传场地批条
            <input type="file" @change="add_mall_img()" class='flie' ref="input_btn2" accept="image/*">
          </a>
          <div style='padding-top:20px;width: 100%;text-align: center;'>
            <img style='width: 200px' class="camera" src="" alt="" id="img_show1">
          </div>
        </div>
      </div>
      <div class='apply-activity-item'>
        <div class='apply-activity-text'>活动时间:</div>
        <input class='apply-activity-input' readonly v-model="pickerValue" @click="open">
      <mt-datetime-picker
        type="datetime"
        ref="picker"
        v-model="pickerValue"
      >
      </mt-datetime-picker>
      </div>
      <div class='apply-activity-item'>
        <div class='apply-activity-text'>活动范围:</div>
        <input class='apply-activity-input' readonly v-model="value">
        <mt-radio
          title="单选框列表"
          v-model="value"
          style="width: 200px"
          :options="['全体社员', '全校学生']">
        </mt-radio>
      </div>
      <div style='text-align: center' class='apply-activity-item'>
         <mt-button class='modal-button' type="primary">提交</mt-button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      srca: '',
      srcb: '',
      pickerValue: '',
      value: ''
    }
  },
  created () {
  },
  methods: {
    add_mall_img () {
      this.clickPicture = false
      this.trueUpload = true
      let img1 = this.$refs.input_btn2.files[0]
      this.img1 = img1
      let reader = new FileReader()
      reader.readAsDataURL(img1)
      reader.onloadend = function (e) {
        let img = document.getElementById('img_show1')
        img.src = e.target.result
        this.srcb = e.target.result
      }
    },
    add_img () {
      this.clickPicture = false
      this.trueUpload = true
      let img1 = this.$refs.input_btn1.files[0]
      this.img1 = img1
      let reader = new FileReader()
      reader.readAsDataURL(img1)
      reader.onloadend = function (e) {
        let img = document.getElementById('img_show2')
        img.src = e.target.result
        this.srca = e.target.result
      }
    },
    open () {
      this.$refs.picker.open()
    }
  }
}
</script>

<style>
.apply-activity-body{
  padding: 0 30px;
  height: 529px;
  overflow: scroll;
}
.apply-activity-text{
  float: left;
  width: 70px;
  padding-right: 10px ;
  /* font-size: 20px; */
  /* line-height: 20px; */
}
.apply-activity-item{
  padding: 20px 0;
  width: 315px;
  border-bottom: 1px rgba(0,0,0, 0.15) solid;
  margin:5px 0 ;
}
.apply-activity-input{
  width: 160px;
  /* height: 25px; */
}
.flie{
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  opacity: 0;
}
.upload{
  padding: 4px 10px;
  height: 14x;
  line-height: 14px;
  position: relative;
  border: 1px solid #999;
  text-decoration: none;
  color: #666;
  margin-top: 10px ;
}
.modal-button{
  width: 160px;
  /* padding: 0 20px; */
  background-color: darksalmon;
}
</style>
