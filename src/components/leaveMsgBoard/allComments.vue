<template>
	<div class="outer">
		<h1>留言板</h1>
		<div v-for="item in comments" :key="item.msgID">
			<commentItem :item="item"></commentItem>
		</div>
	</div>
</template>

<script>
/**
 * 1. 该组件显示所有的评论，评论区
 * 2. 评论的内容由时间决定，最新的评论放在最前面
 */
import commentItem from "@/components/leaveMsgBoard/commentItem.vue";

export default {
	name: "allComments",
	components: {
		commentItem
	},
	mounted() {
		console.log(this.$store.state.leaveMsgBoardStore.comments)
	},
	computed: {
		comments() {
			return this.$store.state.leaveMsgBoardStore.comments
		}
	}
}
</script>

<style lang="less" scoped>
.outer {
	width: 500px;
	height: 400px;

	h1 {
		width: 100%;
		height: 60px;
		line-height: 55px;
		padding-left: 8px;
		border-bottom: 1px dashed #333333;
	}
}
</style>