/**
* 当前代码编辑信息:
*     由用户 尘封 使用 WebStorm 在 “views” 中
*     于 2023/8/14 编写而成！
*     祝你食用愉快！！！
*/
<script>
import {defineComponent} from 'vue'

export default defineComponent({
	name: "FixedBar"
})
</script>

<template>
	<!-- 固定功能栏 -->
	<div class="fixed-bar-container">
		<div class="icon rotate"><img src="../assets/icon_font/分享.svg" alt=""></div>
		<div class="icon"><img src="../assets/icon_font/向上箭头.svg" alt=""></div>
		<div class="icon"><img src="../assets/icon_font/向下箭头粗小.svg" alt=""></div>
		<div class="icon"><img src="../assets/icon_font/设置.svg" alt=""></div>
	</div>
</template>

<style scoped lang="less">
div {
	box-sizing: border-box;
}
.fixed-bar-container {
	width: 50px;
	height: 185px;
	background-color: red;
	position: fixed;
	bottom: 70px;
	right: 20px;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	padding: 5px;

	/* 做个毛玻璃效果 */
	border-radius: 5px;
	backdrop-filter: blur(10px); /* 设置毛玻璃效果的模糊程度 */
	background-color: rgba(255, 255, 255, 0.3); /* 设置背景颜色和透明度 */


	.icon {
		width: 40px;
		height: auto;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		margin-top: 5px;
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 12px;
		cursor: pointer;

		&:last-child {
			margin-bottom: 5px;
		}
	}
}

.rotate {
	animation: rotate 1s infinite;
}

</style>