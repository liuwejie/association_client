<template>
    <div>
      <div class='apply-activity-head'>
        <i id='apply-activity-back' class='iconfont iconback' @click="back"></i>
        <div class="apply-activity-title"> 活动申报</div>
      </div>

      <div class="apply-activity-menu">
        <div id="apply-activity-menu-new" class="apply-activity-menu-item" @click="changeshow('new')">新增申请</div>
        <div id="apply-activity-menu-list" class="apply-activity-menu-item" @click="changeshow('list')">申请列表</div>
      </div>

      <div class='apply-activity-body' v-show="shownew">
        <div class='apply-activity-item'>
          <div class='apply-activity-text' >活动名称:</div>
          <textarea class='apply-activity-textarea' v-model="title" rows="3" cols="20"></textarea>
        </div>

        <div class='apply-activity-item'>
          <div class='apply-activity-text'>活动简介:</div>
          <textarea class='apply-activity-textarea' v-model="content" rows="3" cols="20"></textarea>
        </div>

        <div class='apply-activity-item'>
          <div class='apply-activity-text'>封面:</div>
          <a href="javascript:;" class="upload">上传封面图片
            <input type="file" @change="addimg('img1')" class='flie' ref="imga" accept="image/*">
          </a>
          <div style='width: 100%;text-align: center;'>
            <img style='padding-top:20px; width: 200px' class="camera" src="" alt="" id="img1">
          </div>
        </div>

        <div class='apply-activity-item'>
          <div class='apply-activity-text'>活动地点:</div>
          <input class='apply-activity-input' v-model="place"/>
          <div style="float: left">
            <a href="javascript:;" class="upload">上传批条
              <input type="file" @change="addimg('img2')" class='flie-place' ref="imgb" accept="image/*">
            </a>
          </div>
          <div style='width: 100%;text-align: center; clear: both'>
            <img style='padding-top:20px; width: 200px' class="camera" src="" alt="" id="img2">
          </div>
        </div>

        <div class='apply-activity-item' style="height: 37px">
          <div class='apply-activity-text'>活动时间:</div>
          <input class='apply-activity-input' style="width: 200px" readonly v-model="time" @click="open">
            <mt-datetime-picker
            type="datetime"
            ref="picker"
            :startDate="startDate"
            v-model="pickerValue">
            </mt-datetime-picker>
        </div>

        <div class='apply-activity-item' style="height: 37px">
          <div class='apply-activity-text'>活动时长:</div>
          <input class='apply-activity-input' style="width: 200px" v-model="hour">
        </div>

        <div class='apply-activity-item' style="height: 37px">
          <div class='apply-activity-text'>活动范围:</div>
          <div id='A' class='apply-activity-select-item' @click="changeRange('A')">本社社员</div>
          <div id='B' class='apply-activity-select-item' @click="changeRange('B')">全校学生</div>
        </div>

        <div style='text-align: center' class='apply-news-item-push'>
          <mt-button class='modal-button' type="primary" @click="push()">提交</mt-button>
        </div>

      </div>

    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      srca: '',
      srcb: '',
      pickerValue: '',
      value: '',
      select: 'apply-activity-menu-new',
      shownew: true,
      showlist: false,
      title: '',
      content: '',
      place: '',
      time: '请选择',
      startDate: new Date(),
      rangeFlage: 'A',
      hour: '',
      tempTime: true
    }
  },
  created () {
    this.$nextTick(function () {
      this.setSelect()
      const select = document.getElementById('A')
      select.style.backgroundColor = ' darksalmon'
    })
  },
  watch: {
    pickerValue: {
      handler (val, old) {
        console.log(val === this.tempTime)
        if (this.tempTime) {
          var d = new Date(val)
          this.time = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + d.getHours() + ':' + d.getMinutes()
          console.log('rrrrr', val, this.time)
        } else {
          this.time = '请选择'
        }
      }
    },
    rangeFlage: {
      handler (val, old) {
        const select = document.getElementById(val)
        select.style.backgroundColor = 'darksalmon'
      }
    }
  },
  methods: {
    changeshow (temp) {
      if (temp === 'new') {
        this.shownew = true
        this.showlist = false
        if (this.select !== 'apply-activity-menu-new') {
          this.clearSelect()
          this.select = 'apply-activity-menu-new'
          this.setSelect()
        }
      } else {
        this.shownew = false
        this.showlist = true
        if (this.select !== 'apply-activity-menu-list') {
          this.clearSelect()
          this.select = 'apply-activity-menu-list'
          this.setSelect()
        }
      }
    },
    nowDate () {
      var d = new Date()
      return d
    },
    setSelect () {
      const select = document.getElementById(this.select)
      select.style.borderBottom = ' darksalmon 2px solid'
    },
    clearSelect () {
      const select = document.getElementById(this.select)
      select.style.borderBottom = ''
    },
    back () {
      this.$router.go(-1)
    },
    addimg (temp) {
      if (temp === 'img1') {
        var img1 = this.$refs.imga.files[0]
        this.img1 = img1
        var reader = new FileReader()
        reader.readAsDataURL(img1)
        reader.onloadend = (e) => {
          var img = document.getElementById('img1')
          img.src = e.target.result
          this.setUrla(e.target.result)
        }
      } else {
        img1 = this.$refs.imgb.files[0]
        this.img1 = img1
        reader = new FileReader()
        reader.readAsDataURL(img1)
        reader.onloadend = (e) => {
          var img = document.getElementById('img2')
          img.src = e.target.result
          this.setUrlb(e.target.result)
        }
      }
    },
    setUrla (src) {
      this.srca = src
    },
    setUrlb (src) {
      this.srcb = src
    },
    open () {
      this.$refs.picker.open()
      this.tempTime = true
    },
    changeRange (temp) {
      const select = document.getElementById(this.rangeFlage)
      select.style.backgroundColor = 'white'
      this.rangeFlage = temp
    },
    push () {
      if (this.title === '' || this.content === '' || this.srca === '' || this.place === '' || this.pickerValue === '' || this.hour === '') {
        Toast({message: '请完善活动信息'})
      } else {
        const params = {
          name: this.title,
          id: this.$store.state.association,
          content: this.content,
          img: this.srca,
          place: this.place,
          imgplace: this.srcb,
          time: this.pickerValue,
          hour: this.hour,
          rang: this.rangeFlage
        }
        this.myAjax.post('/applyactivity', params)
          .then((response) => {
            if (response.status === 200) {
              Toast({message: '操作成功', iconClass: 'iconfont iconcheckmark'})
              this.changeshow('list')
              this.clearActivity()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    clearActivity () {
      this.title = ''
      this.content = ''
      this.srca = ''
      this.place = ''
      this.srcb = ''
      this.hour = ''
      this.rangeFlage = 'A'
      this.tempTime = false
      this.pickerValue = this.tempTime
      var img = document.getElementById('img2')
      img.src = ''
      img = document.getElementById('img1')
      img.src = ''
    }
  }
}
</script>

<style>
.apply-activity-head{
    background-color: darksalmon;
    height: 45px;
    padding-top: 15px;
}
#apply-activity-back{
  font-size: 30px;
  float: left;
  margin-top: 5px;
}
.apply-activity-title{
  text-align: center;
  width: 315px;
  font-size: 30px;
  float: left;
}
.apply-activity-menu{
  height: 40px;
  padding: 0 50px;
  width: 275px;
  border-bottom: gray 1px solid;
}
.apply-activity-menu-item{
  float: left;
  width: 137px;
  text-align: center;
  padding-top: 8px;
  height: 25px;
}
.apply-activity-body{
  overflow: scroll;
}
.apply-activity-item{
  padding: 10px 0;
  width: 315px;
  border-bottom: 1px#E0EEEE solid;
  margin:5px 0 ;
}
.apply-activity-textarea{
  width: 200px;
  border: teal 0.5px solid;
  border-radius: 5px;
  outline: none;
  padding: 0 4px;
}
.apply-activity-body{
  padding: 0 30px;
  height: 529px;
  overflow: scroll;
}
.apply-activity-text{
  float: left;
  width: 70px;
  padding-right: 10px ;
}
.upload{
  padding: 2px 3px;
  height: 14x;
  line-height: 14px;
  position: relative;
  border: teal 0.5px solid;
  text-decoration: none;
  color: #1A1A1A;
  margin-top: 10px ;
  background-color: white;
  font-size: 14px;
  border-radius: 5px;
}
.flie-place{
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  opacity: 0;
  width: 60px;
  float: right;
}
.flie{
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  opacity: 0;
}
.apply-activity-input{
  width: 130px;
  border: teal 0.5px solid;
  border-radius: 5px;
  outline: none;
  padding: 0 4px;
  height: 21px;
  float: left;
  margin-right: 5px;
}
.apply-activity-select-item{
  border: teal 0.5px solid;
  border-radius: 5px;
  float: left;
  margin: 0 5px;
  background-color: white;
  padding: 2px 5px;
}
.modal-button{
  width: 160px;
  /* padding: 0 20px; */
  background-color: darksalmon;
  margin-top: 15px;
  border-radius: 10px;
}
</style>
