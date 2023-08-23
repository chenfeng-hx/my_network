<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/23 编写而成！
 *     祝你食用愉快！！！
 */

import { defineComponent } from "vue";

export default defineComponent({
	name: 'ArticleClassification',
	data() {
		return {

		}
	},

})


</script>

<template>
	<div class="article-classification">
		<div class="class-item">
			<span>Linux操作系统</span>
			<img src="@/assets/icon_font/跳转.svg" alt="">
		</div>
		<div class="class-item">
			<span>Linux操作系统</span>
			<img src="@/assets/icon_font/跳转.svg" alt="">
		</div>
		<div class="class-item">
			<span>Linux操作系统</span>
			<img src="@/assets/icon_font/跳转.svg" alt="">
		</div>
		<div class="class-item">
			<span>Linux操作系统</span>
			<img src="@/assets/icon_font/跳转.svg" alt="">
		</div>
		<div class="class-item">
			<span>Linux操作系统</span>
			<img src="@/assets/icon_font/跳转.svg" alt="">
		</div>
		<div class="class-item">
			<span>Linux操作系统</span>
			<img src="@/assets/icon_font/跳转.svg" alt="">
		</div>
		<div class="more">查看更多...</div>
	</div>
</template>

<style scoped lang="less">
/* 总的文章分类容器 */
.article-classification {
	width: var(--home-left-card-width);
	height: 6%;
	background-color: var(--home-card-background-color);
	backdrop-filter: var(--home-card-backdrop-filter);
	border-radius: var(--card-border-radius);
	position: absolute;
	top: 22%;
	left: var(--home-card-left-position);
	padding: 1%;
}

/* 每一个文章分类 */
.class-item {
	width: 32%;
	padding: 0 5px;
	height: calc(28% + 5px);
	background-color: gray;
	box-sizing: border-box;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin-right: 1%;
	margin-bottom: 1%;
	border-radius: 5px;


	img {
		position: relative;
		width: 9%;
		right: -18%;
	}
}

/* 查看更多 */
.more {
	position: relative;
	transform: translate(50%, 0);
	font-size: 14px;
	cursor: pointer;
}





</style>