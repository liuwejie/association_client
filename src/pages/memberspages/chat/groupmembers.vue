<template>
  <div class="uploadImg">
    <div class="upload-content">
      <div class="upload-title">
        <p>{{upTitle}}</p>
        <p class="show-num">{{upNum}}/{{uploadNum}}</p>
      </div>
      <ul class="img-list">
        <li class="show-img" v-for="(item, index) in imgList" :key="index">
          <img :src="item" alt="">
          <kk-icon :class="isDel == true ? '' : 'hide-del'" name="error" color="#FF685D" size="0.4rem" @click.native="delImg(index)"></kk-icon>
        </li>
        <div class="uploadSec">
          <img :src="globalPath+'img/insurance/upload.png'" alt="上传图标">
          <input type="file" value="" id="choose" @change='onUpload' multiple>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'groupmembers',
  data () {
    return {
      groupId: ''
    }
  },
  components: {},
  created () {
    this.groupId = this.$route.params.id
    console.log('群聊Id:' + this.groupId)
  },
  mounted () {},
  methods: {
    onUpload (e) {
      let photoFile = e.target
      // let val = e.target.value // 判断是否符合上传条件
      if (photoFile.files.length === 0) return false
      for (let i = 0; i < photoFile.files.length; i++) {
        this.fileAdd(photoFile.files[i], i)
      }
    },
    fileAdd (file, index) {
      // let csrf_token = this.getCookie('XSRF-TOKEN')
      let formFile = new FormData()
      let imgName = 'img0'
      formFile.append(imgName, file)
      // formFile.append('_token', csrf_token)
      let name = file.name
      let size = file.size
      let types = '.jpg,.jpeg,.png,.gif' // 文件格式
      let fileExt = name.substring(name.lastIndexOf('.')).toLowerCase()
      let result = types.indexOf(fileExt)
      if (result < 0) { // 验证图片格式
        this.$dialog.toast({
          mes: '图片格式不正确',
          timeout: 1000
        })
        return false
      }
      if (size > 1 * 1024 * 1024) {
        this.$dialog.toast({
          mes: '图片大小不能大于1M',
          timeout: 1000
        })
        return false
      }
      if (this.fileList.length >= this.uploadNum) {
        this.$dialog.toast({
          mes: '图片最多只能上传' + this.uploadNum + '张',
          timeout: 1000
        })
        return false
      }
      // axios.post(this.upUrl, formFile)
      //   .then((res) => {
      //     this.upNum = this.fileList.length + 1 // 计算图片数量
      //     this.fileList.push(file) // 添加进图片数组
      //     let imgUrl = this.showUrl + res.data.data // 图片回显地址
      //     let upImg = res.data.data // 传给后台的图片地址
      //     this.imgList.push(imgUrl)
      //     this.upImgList.push(upImg)
      //     let upImgAll = this.upImgList.join(',')
      //     this.$emit('input', upImgAll)
      //   }).catch((err) => {
      //     console.log(err)
      //   })
    },
    delImg (index) {
      this.imgList.splice(index, 1)
      this.fileList.splice(index, 1)
      this.upNum = this.imgList.length
      let imgAll = this.imgList.join(',')
      this.$emit('input', imgAll)
    }
  }
}
</script>
<style>
.uploadImg{
  text-align: left;
}
.upload-content{
  margin-left: 0.3rem;
}
.upload-title{
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.3rem 0.3rem 0;
}
.show-num{
  color: #c9c9c9;
}
.img-list{
  display: inline-block;
  margin: 0.6rem 0.3rem 0.3rem 0;
}
.show-img{
  position: relative;
  display: inline-block;
  margin-right: 0.12rem;
  height: 1.3rem;
  width: 1.3rem;
}
img{
  width: 100%;
  height: 100%;
}
.hide-del{
   display: none;
}
.yd-icon-error{
  position: absolute;
  top: 0;
  right: 0;
}
.uploadSec{
  position: relative;
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  overflow: hidden;
}
.img{
  width: 100%;
  height: 100%;
}
#choose{
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
