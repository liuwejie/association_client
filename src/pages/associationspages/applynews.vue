<template>
<div>
  <div class='apply-news-head'>
     <i id='apply-news-back' class='iconfont iconback' @click="back"></i>
    <div class="apply-news-title"> 新闻申报</div>
  </div>
  <div class="apply-news-menu">
    <div class="apply-news-menu-item">新增申请</div>
    <div class="apply-news-menu-item">申请列表</div>
  </div>
  <div class='apply-news-body'>
    <div class='apply-news-item'>
      <div class='apply-news-text' >新闻标题:</div>
      <input class='apply-news-input' v-model="title">
    </div>
    <div class='apply-news-item'>
      <div class='apply-news-text'>新闻概要:</div>
      <input
        class='apply-news-input'
      v-model="content">
    </div>
    <div class='apply-news-item'>
      <div class='apply-news-text'>新闻链接:</div>
      <input class='apply-news-input' v-model="url">
    </div>
    <div class='apply-news-item'>
      <div class='apply-news-text'>活动封面:</div>
        <a href="javascript:;" class="upload">上传封面图片
          <input type="file" @change="add_img()" class='flie' ref="input_btn" accept="image/*">
        </a>
        <div style='padding-top:20px;width: 100%;text-align: center;'>
          <img style='width: 200px' class="camera" src="" alt="" id="img_show">
        </div>
      </div>
      <div style='text-align: center' class='apply-news-item'>
         <mt-button class='modal-button' type="primary" @click="push()">提交</mt-button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: '',
      url: '',
      srca: '',
      img1: ''
    }
  },
  created () {
  },
  methods: {
    setUrl (src) {
      this.srca = src
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
        console.log('请完善新闻信息')
      } else {
        console.log(params)
        this.myAjax.post('/addnewapply', params)
          .then((response) => {
            if (response.status === 200) {
              console.log('申请成功')
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
  /* font-size: 20px; */
  /* line-height: 20px; */
}
.apply-news-item{
  padding: 20px 0;
  width: 315px;
  border-bottom: 1px rgba(0,0,0, 0.15) solid;
  margin:5px 0 ;
}
.apply-news-input{
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
}
.apply-news-menu{

}
</style>
