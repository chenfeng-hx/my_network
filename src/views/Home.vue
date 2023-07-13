<template>
	<div class="container">
		<!-- 注释 -->
		<!--背景展示文字-->
		<div class="top">
			<!--描述性文字-->
			<div class="show-text">
				<p>想要一个舒服的小窝吗</p>
				<p>来就对了！！！</p>
				<!--自动打字机效果实现-->
				<div class="machine">{{ wordStr }}</div>
				<div class="down animate__animated animate__slideOutDown" name="down"><img src="../assets/icon_font/关闭_向下.svg" alt=""></div>
			</div>
		</div>

	</div>
</template>

<script>
/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “my-network” 中
 *    于 2023-03-25 16:57:08 编写而成！
 *    祝你食用愉快！！！
 */
export default {
	// 主页面
	name: "Home",
	data() {
		return {
			wordStr: '2023年，喜迎新春，玉兔吉祥',

		}
	},
	computed: {

	},
	methods: {
		typeWriter() {},

	}

}
</script>

<style scoped lang="less">
.container {
	.top {
		position: relative;
		width: 100%;
		height: 750px;
		display: flex;
		flex-direction: column;
		.show-text {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin: auto;
			text-align: center;
			font-size: 25px;
			align-items: center;

			p {
				margin-bottom: 10px;
			}
			.machine {
				width: auto;
				height: 45px;
				border-radius: 8px;
				background-color: rgba(3, 3, 3, 0.5);
				margin-top: 10px;
				padding: 2px 10px;
				font-size: 26px;
				color: #FFF;
				font-weight: bold;
				text-align: center;
				line-height: 45px;
			}
			.down {
				position: absolute;
				bottom: 20px;
				margin-top: 20px;
				img {
					width: 25px;
					height: 25px;
				}
			}
		}
	}

}
</style>