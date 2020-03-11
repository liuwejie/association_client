<template>
  <div class='Login'>
    <div>
      <img id="login-img" src="../../../static\Login\login01.jpg">
    </div>
    <div id="login-form">
      <div class="login-input-div">
        <i id="login-icon-user" class="iconfont icongeren"></i>
        <div class="login-input">
          <input class="login-text"
            type="text"
            v-model="loginForm.username"
            placeholder="请输入账号">
        </div>
      </div>
      <div class="login-input-div">
        <i id="login-icon-password" class="iconfont iconjiesuo"></i>
        <div class="login-input">
          <input class="login-text"
            :type='pwdType'
            v-model="loginForm.password"
            placeholder="请输入密码">
          <i id="login-icon-eye" v-if = !showFlage @click="showPwd" class="iconfont iconicon-test"></i>
          <i id="login-icon-eye1" v-if = showFlage @click="showPwd" class="iconfont iconicon-test1"></i>
        </div>
      </div>
      <div class="drag">
        <div class="bg"></div>
        <div class="text" onselectstart="return false;">请拖动滑块解锁</div>
        <div class="btn">&gt;&gt;</div>
      </div>
      <button class="login-button" type="button"  @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loading: false,
      pwdType: 'password',
      showFlage: true
    }
  },
  components: {},
  created () {},
  mounted () {},
  methods: {
    handleLogin: function () {
      if (this.loginForm.password === '' || this.loginForm.password === '') {
        alert('请补全登录信息')
      } else {
        this.myAjax.post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
          .then((response) => {
            console.log('dff0', response)
            if (response.status === 200) {
              this.$store.commit('SET_TOKEN', response.status)
              this.$store.commit('GET_USER', this.loginForm.username)
              this.$router.push({path: 'msite'})
            }
          })
          .catch(function (error) {
            alert(error)
          })
      }
    },
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
        this.showFlage = false
      } else {
        this.pwdType = 'password'
        this.showFlage = true
      }
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
  margin: 1px;
}
.login-text{
  border: none;
  height: 36px;
  width: 150px;
  margin: 0 0 0 20px;
  font-size: 15px;
  float: left;
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
#login-icon-eye{
  margin-top: 10px;
  float: left;
  font-size: 20px
}
#login-icon-eye1{
  margin-top: 10px;
  float: left;
  font-size: 20px
}
</style>
