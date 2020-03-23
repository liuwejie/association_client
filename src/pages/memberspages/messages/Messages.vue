<template>
    <div>
      <div class="title">
        <div class="titleitem1" @click="itemFriends">好友</div>
        <div class="titleitem2" @click="itemAssociation">社团</div>
        <div class="titleitem3" @click="itemSystem">系统</div>
      </div>
      <div class="item" v-if = this.flag1>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>

      </div>
      <div class="item" v-if = this.flag2>
        <div class="message"></div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>

      </div>
      <div class="item" v-if = this.flag3>
        <div class="message"></div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>
        <div class="message">
        </div>

      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      flag1: true,
      flag2: false,
      flag3: false
    }
  },
  methods: {
    itemFriends () {
      this.flag1 = true
      this.flag2 = false
      this.flag3 = false
    },
    itemAssociation () {
      this.flag1 = false
      this.flag2 = true
      this.flag3 = false
    },
    itemSystem () {
      this.flag1 = false
      this.flag2 = false
      this.flag3 = true
    }
  }
}
</script>

<style>
.title {
  height: 50px;
  width: 100%;
  border-bottom: tan 3px solid;
}
.titleitem1 {
  position: absolute;
  left: 0;
  width: 50px;
  float: left;
  font-size: 20px;
  padding: 10px 0 0 40px;
}
.titleitem2 {
  position: absolute;
  left: 125px;
  width: 50px;
  float: left;
  font-size: 20px;
  padding: 10px 0 0 40px;
}
.titleitem3 {
  position: absolute;
  left: 250px;
  width: 50px;
  float: left;
  font-size: 20px;
  padding: 10px 0 0 40px;
}
.message {
  height: 40px;
  width: 100%;
  border: tan 1px solid;
}
.item{
  overflow: scroll;
  height: 475px;
}
</style>
