<template>
  <div>
    <img class="camera" src="" alt="" id="img_show1">
    <input type="file" @change="img_upload1" ref="input_btn1" accept="image/png,image/gif,image/jpeg,image/jpg" capture="camera" multiple>点击拍照
    <input type="file" @change="add_mall_img" ref="input_btn2">上传本地照片
    <div @click="tureUpload">确认上传</div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      img1: []
    }
  },
  mounted () {
    this.isNoIos()
  },
  methods: {
    isNoIos () {
      // 获取浏览器的userAgent,并转化为小写
      var ua = navigator.userAgent.toLowerCase()
      // 判断是否是苹果手机，是则是true
      var isIos = (ua.indexOf('iphone') !== -1) || (ua.indexOf('ipad') !== -1)
      if (isIos) {
        this.$delete(this.$refs.input_btn1, 'capture')
      }
    },
    img_upload1 () {
      this.clickPicture = false
      this.trueUpload = true
      let img1 = this.$refs.input_btn1.files[0]
      this.img1 = img1
      let reader = new FileReader()
      reader.readAsDataURL(img1)
      reader.onloadend = function (e) {
        let img = document.getElementById('img_show1')
        img.src = e.target.result
      }
    },
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
        console.log(img.src)
      }
    },
    tureUpload () {
      if (this.img1) {
        var fd = new FormData()
        fd.append('file', this.img1)
      }
    }
  }
}
</script>
