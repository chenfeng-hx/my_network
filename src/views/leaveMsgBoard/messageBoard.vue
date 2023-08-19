<template>
  <div class="outer">
    <div class="top">留言板</div>
    <leaveMessage></leaveMessage>
    <allComments class="comments"></allComments>
  </div>
</template>

<script>
/**
 * 1. 该页面用于显示留言板总体架构
 *
 */
import allComments from "@/views/leaveMsgBoard/components/allComments.vue";
import leaveMessage from "@/views/leaveMsgBoard/components/leaveMessage.vue";
export default {
  name: "messageBorad",
  components: {
    allComments,
    leaveMessage,
  }
}
</script>

<style lang="less" scoped>
    .top {
      width: 100%;
      height: 40px;
      background-color: #f2f5a6;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      margin: 12px 0;
      border-bottom: 2px solid #333333;
      border-top: 2px solid #333333;
    }
    .comments {
      margin: 30px auto;
    }
</style>