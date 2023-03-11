<template>
  <div>
    <messageBoard></messageBoard>
  </div>
</template>

<script>
// 引入留言板组件
import messageBoard from "@/components/leaveMsgBoard/messageBoard.vue";

export default {
  name: 'App',
  components: {
    messageBoard,
  }
}
</script>

<style>
/*公共样式*/
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
/*公共字体样式*/
/*todo: 没有用*/
@font-face {
  font-family: '楷体','KaiTi', '楷体_GB2312';
}
</style>
