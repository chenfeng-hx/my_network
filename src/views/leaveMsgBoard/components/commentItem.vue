<template>
	<div class="out">
		<div class="msgRoot">
			<span>{{item.msgRoot}}</span><span>说:</span>
		</div>
		<p>{{item.msgContent}}</p>
		<div class="msgTime">{{item.msgTimer}}</div>
	</div>
</template>

<script>
/**
 * 1. 该组件用于每一条评论的设计
 */
export default {
	name: "commentItem",
	props: ['item']
}
</script>

<style lang="less" scoped>
.out {
	position: relative;
	width: 480px;
	height: 120px;
	margin: 3px auto 0 auto;
	border-bottom: 1px dashed #666666;

	.msgRoot {
		position: absolute;
		top: 8px;
		left: 10px;

		span {
			font-size: 15px;

			&:first-of-type {
				margin-right: 5px;
			}
		}
	}

	p {
		width: 450px;
		height: 60px;
		position: absolute;
		top: 36px;
		left: 10px;
		text-indent: 2em;
		font-size: 15px;
	}

	.msgTime {
		position: absolute;
		bottom: 5px;
		right: 10px;
		font-size: 14px;
	}
}
</style>