<template>
	<!-- 页尾 -->
	<div class="footer-container">
		<!-- ICP 备案 -->
		<div class="icp">
			<span>© 2023 生活碎片</span>&nbsp;&nbsp;
			<a href="https://beian.miit.gov.cn">宁ICP备2023000303号-1</a>
		</div>
		<!-- 所用技术展示 -->
		<div class="lib-container">
			<a class="icon-container">
				<span class="text">
					<img src="@/assets/icon_font/github.svg" alt="">
					github
				</span>
				<span class="another">5000Star</span>
			</a>
			<a class="icon-container">
				<span class="text">
					<img src="@/assets/icon_font/包子.svg" alt="">
					nodejs
				</span>
				<span class="another">youyuxi</span>
			</a>
			<a class="icon-container">
				<span class="text">
					<img src="@/assets/icon_font/棒棒糖.svg" alt="">
					vue
				</span>
				<span class="another">fs</span>
			</a>
		</div>
	</div>
</template>

<script>
/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “my-network” 中
 *    于 2023-03-25 18:46:57 编写而成！
 *    祝你食用愉快！！！
 */
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Footer",

}
</script>

<style scoped lang="less">
.footer-container {
	width: 100%;
	height: 20vh;
	background-color: rgba(0, 0, 0, .3);
	border-top: 2px dashed white;
	padding: 10px;

	.icp {
		display: flex;
		justify-content: center;
		font-size: 13px;
		color: #FFFFFF;
		a {
			color: #FFFFFF;
		}
	}
}

/* 技术展示 */
.lib-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
}

a.icon-container {
	width: auto;
	height: 25px;
	line-height: 25px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	transition: all .3s ease-in-out;

	&:hover {
		scale: 1.05;
	}
}

.text {
	width: auto;
	background-color: rgb(86, 86, 86);
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 8px;
	border-radius: 5px 0 0 5px;
	font-size: 15px;
}

.another {
	width: auto;
	padding:0 8px;
	background-color: rgb(19, 142, 203);
	border-radius: 0 5px 5px 0;
	font-size: 15px;
	color: #FFFFFF;
}


.icon-container span img {
	width: 20px;
	height: 20px;
	margin-right: 5px;
}
</style>