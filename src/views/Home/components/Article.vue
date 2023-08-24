<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/23 编写而成！
 *     祝你食用愉快！！！
 */

import {defineComponent} from "vue";
import Pager from "@/views/Home/components/Pager.vue";

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Article',
	components: {Pager},
	data() {
		return {
			// 热度
			heat: 100,
			// 评论
			comments: 0,
			// 点赞
			like: 2,
			// 收藏
			collect: 0,
			// 创建时间
			createTime: '2023-03-26 17:29:56',
			// 修改时间
			updateTime: '2023-03-26 17:29:56',
		}
	},
})

</script>

<template>
	<!-- 文章展示组件 -->
	<div class="article-container">
		<div class="article-item">
			<!-- 背景图片 -->
			<div class="bg"></div>
			<!-- 文章标题 -->
			<div class="title">这是标题这是标题这是标题这是标题这是标题</div>
			<!-- 各项数据 -->
			<div class="hot-container">
				<span class="hot">
					<img src="http://blogs.xiaohai-hx.cn/view-default/icon/%E7%83%AD%E5%BA%A6red.svg" alt="">{{ heat }}热度
				</span>
				<span class="hot">
					<img src="http://blogs.xiaohai-hx.cn/view-default/icon/%E8%AF%84%E8%AE%BAblue.svg" alt="">{{ comments }}评论
				</span>
				<span class="hot">
					<img src="http://blogs.xiaohai-hx.cn/view-default/icon/%E8%B5%9E.svg" alt="">{{ like }}点赞
				</span>
				<span class="hot">
					<img src="http://blogs.xiaohai-hx.cn/view-default/icon/%E6%94%B6%E8%97%8F.svg" alt="">{{ collect }}收藏
				</span>
			</div>
			<!-- 文章分类 -->
			<div class="classification">
				<span><img src="@/assets/icon_font/标签.svg" alt="">Linux操作系统</span>
				<span><img src="@/assets/icon_font/标签.svg" alt="">小明</span>
				<span><img src="@/assets/icon_font/标签.svg" alt="">小明</span>
			</div>
			<!-- 文章时间 -->
			<div class="time">
				<div class="create">
					<img src="@/assets/icon_font/发布时间.svg" alt="">发布时间: {{ createTime }}
				</div>
				<div class="update">
					<img src="@/assets/icon_font/修改.svg" alt="">修改时间: {{ updateTime }}
				</div>
			</div>

		</div>
		<div class="article-item">

		</div>
		<div class="article-item">

		</div>
		<div class="article-item">

		</div>
		<div class="article-item">
			分页器
		</div>
		<div class="article-item">

		</div>
		<div class="article-item">

		</div>
		<div class="article-item">

		</div>

		<!-- 分页器 -->
		<Pager :total-pages=10 />
	</div>
</template>

<style scoped lang="less">
/* 总的容器 */
.article-container {
	width: var(--home-left-card-width);
	height: 70%;
	background-color: var(--home-card-background-color);
	backdrop-filter: var(--home-card-backdrop-filter);
	position: absolute;
	top: 30%;
	left: var(--home-card-left-position);
	border-radius: var(--card-border-radius);
	overflow: auto;
}

/* 每个文章 */
.article-item {
	//width: 32%;
	height: 30%;
	width: 326px;
	background-color: #FFFFFF;
	border-radius: 5px;
	margin-left: 1%;
	box-sizing: border-box;
	margin-top: 1%;
	float: left;

}

/* 文章背景 */
.bg {
	width: 100%;
	height: 50%;
	background-image: url("@/assets/images/b3a36dfaa9390fb5-ffe333713788d324-ab37281781489fda9b7f8ff3ca84ba67.jpg");
	background-size: cover;
	background-position: center;
	border-radius: 5px 5px 0 0;
	clip-path: polygon(0 130px, 0 0, 100% 0, 100% 130px, 50% 100%);
}

/* 文章标题 */
.title {
	font-size: 22px;
	font-weight: 800;
	text-align: center;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	//margin-top: 15px;
	margin-top: 32px;
	padding: 0 5px;
}

/* 热度容器 */
.hot-container {
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
}

/* 热度 items */
.hot {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: 13px;
	text-align: center;
	line-height: 4px;
	padding: 0 2px;

	img {
		width: 15px;
		margin-right: 5px;
	}
}

/* 分类 */
.classification {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;


	span {
		background-color: rgb(240, 255, 240);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
		border-radius: 3px;
		margin-top: 2px;
		margin-left: 2px;
		font-size: 13px;

		img {
			width: 20px;
			margin-right: 2px;
		}
	}
}

/* 文章时间 */
.time {
	width: 100%;
	height: 14%;
	padding: 5px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	img {
		width: 20px;
	}

	.create, .update {
		display: flex;
		justify-content: start;
		align-items: center;
		font-style: italic;
		font-size: 14px;
	}

	.update {
		margin-top: 5px;
	}
}





</style>