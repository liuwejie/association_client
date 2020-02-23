<template>
  <div class='Login'>
    <div>
      <img id="login-img" src="../../static\Login\login01.jpg">
    </div>
    <div id="login-form">
      <div class="login-input-div">
        <i id="login-icon-user" class="iconfont icongeren"></i>
        <div class="login-input">
          <input class="login-text" type="text" placeholder="请输入账号">
        </div>
      </div>
      <div class="login-input-div">
        <i id="login-icon-password" class="iconfont iconjiesuo"></i>
        <div class="login-input">
          <input class="login-text" type="password" placeholder="请输入密码">
        </div>
      </div>
      <div class="drag">
        <div class="bg"></div>
        <div class="text" onselectstart="return false;">请拖动滑块解锁</div>
        <div class="btn">&gt;&gt;</div>
      </div>
      <button class="login-button" type="button"  @click="go">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  components: {},
  created () {},
  mounted () {},
  methods: {
    go: function () {
      this.$router.push({path: '/msite'})
    }
  }
}
</script>
<style>
#login-img{
  width: 101%;
}
#login-form{
  margin: auto;
  margin-top: 10%;
  width: 70%;
  padding: 10px;
}
#login-icon-user{
  float: left;
  font-size: 40px;
  margin-right: 10px;
}
#login-icon-password{
  float: left;
  font-size: 40px;
  margin-right: 10px;
}
.login-input{
  float: left;
  border: 1px grey solid;
  height: 40px;
  width: 200px;
  border-radius: 40px;
}
.login-text{
  border: none;
  height: 36px;
  width: 160px;
  margin: 0 20px;
  font-size: 15px;
}
.login-text:focus{
  outline:none
}
.login-input-div{
  overflow: hidden;
  margin: 15px 0px;
}
.login-button{
  margin: 0 30px;
  height: 40px;
  width: 200px;
  border-radius: 40px;
  color: white;
  font-family: "宋体";
  font-size: 30px;
  background-color: firebrick;
}
 .drag{
            width: 100%;
            height: 40px;
            line-height: 40px;
            background-color: #e8e8e8;
            position: relative;
            margin:30px auto 20px auto;
        }
        .bg{
            width:40px;
            height: 100%;
            position: absolute;
            background-color: #75CDF9;
        }
        .text{
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
            user-select: none;
        }
        .btn{
            width:40px;
            height: 38px;
            position: absolute;
            border:1px solid #ccc;
            cursor: move;
            font-family: "宋体";
            text-align: center;
            background-color: #fff;
            user-select: none;
            color:#666;
        }

</style>
