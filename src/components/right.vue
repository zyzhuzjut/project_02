<template>
  <div class="right-container">
    <h3>Right 组件------{{ count }}</h3>
    <button @click="add">+1</button>
    <hr />
    <p>接收兄弟传值数据-----{{ msgFromLeft }}</p>
  </div>
</template>

<script>
import bus from "@/components/EventBus.js";
export default {
  created() {
    // 为bus绑定自定义事件
    bus.$on('share', (val) => {
      console.log(val);
      this.msgFromLeft = val
    })
  },
  data() {
    return {
      count: 0,
      msgFromLeft: "",
    };
  },
  methods: {
    add() {
      this.count += 1;
      // 修改数据时，通过$emit() 触发自定义事件
      // 通过自定义事件 numChange，将自增结果传递给父组件
      this.$emit("numChange", this.count);
    },
  },
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
