<template>
  <div class="left-container">
    <h1>left</h1>
    <p>父传子的值message： {{ message }}</p>
    <p>父传子的值userinfo： {{ userinfo }}</p>
    <button @click="msgBtn">修改 msg</button>
    <button @click="userBtn">修改 user</button>
    <hr />
    <button @click="send">把诗句发送给right</button>
  </div>
</template>

<script>
import bus from "@/components/EventBus.js"
export default {
  props: ["msg", "user"],
  data() {
    return {
      // 子传父的数据
      message: this.msg,
      userinfo: this.user,
// 兄弟传值数据
      str: '别人笑我太疯癫，我笑他人看不穿'
    };
  },
  methods: {
    msgBtn() {
      this.message = '真不错啊'
    },
    userBtn() {
      this.userinfo.name = '郝开心',
      this.userinfo.age = '22'
    },
    send() {
      bus.$emit('share', this.str)
    }
  }
};
</script>

<style lang='less'>
.left-container {
  padding: 0 20px 20px;
  min-width: 250px;
  background-color: rgb(112, 216, 112);
  flex: 1;
}
</style>

