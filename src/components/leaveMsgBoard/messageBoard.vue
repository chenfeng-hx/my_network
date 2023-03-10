<template>
  <div>
    <leave-message></leave-message>
    <all-comments></all-comments>
  </div>
</template>

<script>
import allComments from "@/components/leaveMsgBoard/allComments.vue";
import leaveMessage from "@/components/leaveMsgBoard/leaveMessage.vue";
export default {
  name: "messageBorad",
  components: {
    allComments,
    leaveMessage,
  }
}
</script>

<style scoped>

</style>