<template>
<div>
  <div class='apply-news-head'>
     <i id='apply-news-back' class='iconfont iconback' @click="back"></i>
    <div class="apply-news-title"> 新闻申报</div>
  </div>
  <div class="apply-news-menu">
    <div id="apply-news-menu-new" class="apply-news-menu-item" @click="changeshow('new')">新增申请</div>
    <div id="apply-news-menu-list" class="apply-news-menu-item" @click="changeshow('list')">申请列表</div>
  </div>
  <div class='apply-news-body' v-show="shownew">
    <div class='apply-news-item'>
      <div class='apply-news-text' >新闻标题:</div>
      <textarea class='apply-news-textarea' v-model="title" rows="3" cols="20"></textarea>
    </div>
    <div class='apply-news-item'>
      <div class='apply-news-text'>新闻概要:</div>
      <textarea class='apply-news-textarea' v-model="content" rows="3" cols="20"></textarea>
    </div>
    <div class='apply-news-item'>
      <div class='apply-news-text'>新闻链接:</div>
      <textarea class='apply-news-textarea' v-model="url" rows="3" cols="20"></textarea>
    </div>
    <div class='apply-news-item'>
      <div class='apply-news-text'>新闻封面:</div>
      <a href="javascript:;" class="upload">上传封面图片
        <input type="file" @change="add_img()" class='flie' ref="input_btn" accept="image/*">
      </a>
      <div style='padding-top:20px;width: 100%;text-align: center;'>
        <img style='width: 200px' class="camera" src="" alt="" id="img_show">
      </div>
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
      title: '',
      content: '',
      url: '',
      srca: '',
      img1: '',
      shownew: true,
      showlist: false,
      select: 'apply-news-menu-new'
    }
  },
  created () {
    this.$nextTick(function () {
      this.setSelect()
    })
  },
  methods: {
    changeshow (temp) {
      if (temp === 'new') {
        this.shownew = true
        this.showlist = false
        if (this.select !== 'apply-news-menu-new') {
          this.clearSelect()
          this.select = 'apply-news-menu-new'
          this.setSelect()
        }
      } else {
        this.shownew = false
        this.showlist = true
        if (this.select !== 'apply-news-menu-list') {
          this.clearSelect()
          this.select = 'apply-news-menu-list'
          this.setSelect()
        }
      }
    },
    setSelect () {
      const select = document.getElementById(this.select)
      select.style.borderBottom = ' darksalmon 2px solid'
    },
    clearSelect () {
      const select = document.getElementById(this.select)
      select.style.borderBottom = ''
    },
    setUrl (src) {
      this.srca = src
    },
    clearNews () {
      this.title = ''
      this.content = ''
      this.url = ''
      this.srca = ''
      var img = document.getElementById('img_show')
      img.src = ''
    },
    add_img () {
      var img1 = this.$refs.input_btn.files[0]
      this.img1 = img1
      var reader = new FileReader()
      reader.readAsDataURL(img1)
      reader.onloadend = (e) => {
        var img = document.getElementById('img_show')
        img.src = e.target.result
        this.setUrl(e.target.result)
      }
    },
    push () {
      const params = {
        ntitle: this.title,
        nurl: this.url,
        nimg: this.srca,
        nassociation: this.$store.state.association,
        nintroduction: this.content
      }
      if (this.title === '' || this.content === '' || this.url === '' || this.srca === '') {
        Toast({message: '请完善新闻信息'})
      } else {
        this.myAjax.post('/addnewapply', params)
          .then((response) => {
            if (response.status === 200) {
              Toast({message: '操作成功', iconClass: 'iconfont iconcheckmark'})
              this.changeshow('list')
              this.clearNews()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.apply-news-body{
  padding: 0 30px;
  height: 529px;
  overflow: scroll;
}
.apply-news-text{
  float: left;
  width: 70px;
  padding-right: 10px ;
}
.apply-news-item{
  padding: 10px 0;
  width: 315px;
  border-bottom: 1px#E0EEEE solid;
  margin:5px 0 ;
}
.apply-news-input{
  width: 200px;
  height: 20px;
  border: teal 0.5px solid;
  border-radius: 5px;
  outline: none;
  padding: 0 4px;
}
.apply-news-textarea{
  width: 200px;
  border: teal 0.5px solid;
  border-radius: 5px;
  outline: none;
  padding: 0 4px;
}
.flie{
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  opacity: 0;
}
.upload{
  padding: 2px 10px;
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
.modal-button{
  width: 160px;
  /* padding: 0 20px; */
  background-color: darksalmon;
  margin-top: 15px;
  border-radius: 10px;
}
.apply-news-head{
    background-color: darksalmon;
    height: 45px;
    padding-top: 15px;
}
.apply-news-title{
  text-align: center;
  width: 315px;
  font-size: 30px;
  float: left;
}
#apply-news-back{
  font-size: 30px;
  float: left;
  margin-top: 5px;
}
.apply-news-menu-item{
  float: left;
  width: 137px;
  text-align: center;
  padding-top: 8px;
  height: 25px;
}
.apply-news-menu{
  height: 40px;
  padding: 0 50px;
  width: 275px;
  border-bottom: gray 1px solid;
}
</style>
