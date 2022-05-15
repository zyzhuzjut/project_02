<template>
  <div class="app-box">
    <h1>APP根组件</h1>
    <p>子right组件传给父的值-------{{countFromSon}}</p>
    <hr />

    <div class="box">
      <!-- 用来渲染子组件 -->
      <left :msg="message" :user="userinfo"></left>
      <right @numChange="getRightCount"></right>
    </div>
  </div>
</template>

<script>
// ____________________________________________________________________________________
// 父传子：自定义属性 props
// 子传父：自定义事件 $emit 
// 兄弟传值：1. 创建EventBus.js 
// 2. 发送方调用 bus.$emit('事件名称', 要发送的数据) 
// 3. 接收方调用 bus.$on('事件名称', 事件处理函数)
// ____________________________________________________________________________________  
import left from "@/components/left.vue";
import Right from "./components/right.vue";
export default {
  data() {
    return {
      message: "hello 姑娘们！",
      userinfo: { name: "zzy", age: 18 },

      countFromSon: 20
    };
  },
  components: {
    left,
    Right,
  },
  methods: {
    // 接收子组件传递过来的值
    getRightCount(val) {
      this.countFromSon = val
    },
  },
};
</script>

<style lang='less'>
.app-box {
  background-color: pink;
}
.box {
  display: flex;
}
</style>
