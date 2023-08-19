<template>
	<div class="outer">
		<h1>来踩一踩</h1>
		<h3>您的大名</h3>
		<input type="text" v-model="msgRoot" placeholder="请输入您的姓名...">
		<h3>您的留言</h3>
		<textarea v-model="msgContent" id="" cols="30" rows="10" placeholder="请留言..."></textarea>
		<button type="button" @click="shiftMsg">发表</button>
	</div>
</template>

<script>
/**
 * 该组件为输入并发送留言组件
 */
import {nanoid} from "nanoid";
import getDate from "@/untils/getDate";
export default {
	name: "leaveMessage",
	data() {
		return {
			msgRoot: '',
			msgContent: '',
		}
	},
	methods: {
		shiftMsg() {
			this.$store.dispatch('leaveMsgBoardStore/shiftMsg',
				{msgID: nanoid(), msgRoot: this.msgRoot, msgContent: this.msgContent, msgTimer: getDate(new Date())})
		}
	}
}
</script>

<style lang="less" scoped>
.outer {
	position: relative;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	border: 1px solid #333333;
	padding: 5px 8px;
	border-radius: 12px;

	h1 {
		width: 100%;
		height: 70px;
		border-bottom: 1px solid #666666;
		line-height: 65px;
	}

	h3 {
		margin-top: 18px;
	}

	input {
		width: 60%;
		height: 35px;
		border: 1px solid #444444;
		margin-top: 10px;
		padding-left: 8px;
		line-height: 35px;
		font-size: 16px;
		color: #333333;
		border-radius: 7px;

		&::placeholder {
			color: #999999;
			font-size: 13px;
		}
	}

	textarea {
		border: 1px solid #444444;
		width: 80%;
		height: 160px;
		margin-top: 10px;
		border-radius: 7px;
		font-size: 16px;
		color: #333333;
		scroll-behavior: auto;
		padding: 5px;

		&::placeholder {
			color: #999999;
			font-size: 13px;
		}
	}

	button {
		position: absolute;
		bottom: 17px;
		right: 15px;
		width: 70px;
		height: 33px;
		line-height: 33px;
		text-align: center;
		background-color: skyblue;
		color: #555555;
		border-radius: 5px;
		cursor: pointer;
	}
}
</style>