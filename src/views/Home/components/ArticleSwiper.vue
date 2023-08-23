/**
* 当前代码编辑信息:
*     由用户 尘封 使用 WebStorm 在 “views” 中
*     于 2023/8/22 编写而成！
*     祝你食用愉快！！！
*/
<script>
import {defineComponent} from 'vue'

export default defineComponent({
	name: "ArticleSwiper",
	data() {
		return {
			// 当前轮播图的位置
			currentIndex: 0,
			// 是否使用过渡
			isTransition: true,
		}
	},
	components: {

	},
	methods: {
		/* 自动滑动 */
		autoSwiper() {
			const height = this.$refs.itemContainer.offsetHeight;

			// if (this.currentIndex === 0) {
			// 	this.currentIndex++;
			// 	return;
			// }


			this.isTransition = true;
			// 最开始还挪了一次 top = 0 的一次
			// this.$refs.itemContainer.style.animation = "none";
			this.$refs.itemContainer.style.top = this.currentIndex * -1 * height + 'px';
			this.currentIndex++;

			if (this.currentIndex === this.$refs.itemContainer.children.length + 1) {
				this.currentIndex = 0;
				this.isTransition = false;
				this.$refs.itemContainer.style.top = this.currentIndex * -1 * height + 'px';
				this.$refs.itemContainer.style.top = 0 + 'px';
				this.currentIndex++;
			}
		},
	},
	mounted() {
		setInterval(this.autoSwiper, 2000);
	}
})
</script>

<template>
	<!-- 轮播图组件 -->
	<div class="swiper-container">
		<ul class="item-container" :class="{ transition: isTransition }" ref="itemContainer">
			<li class="swiper-item">
				<div class="left"><img src="@/assets/images/b3a36dfaa9390fb5-ffe333713788d324-ab37281781489fda9b7f8ff3ca84ba67.jpg" alt=""></div>
				<div class="right">
					<div class="article-title">你好，这是文章的标题</div>
					<div class="article-author">文章的作者</div>
					<div class="article-tags">文章标签1</div>
					<div class="article-bio">这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，</div>
				</div>
			</li>
			<li class="swiper-item">
				<div class="left"><img src="@/assets/images/b3a36dfaa9390fb5-ffe333713788d324-ab37281781489fda9b7f8ff3ca84ba67.jpg" alt=""></div>
				<div class="right">
					<div class="article-title">你好，这是文章的标题</div>
					<div class="article-author">文章的作者</div>
					<div class="article-tags">文章标签2</div>
					<div class="article-bio">这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，</div>
				</div>
			</li>
			<li class="swiper-item">
				<div class="left"><img src="@/assets/images/b3a36dfaa9390fb5-ffe333713788d324-ab37281781489fda9b7f8ff3ca84ba67.jpg" alt=""></div>
				<div class="right">
					<div class="article-title">你好，这是文章的标题</div>
					<div class="article-author">文章的作者</div>
					<div class="article-tags">文章标签3</div>
					<div class="article-bio">这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，</div>
				</div>
			</li>
			<li class="swiper-item">
				<div class="left"><img src="@/assets/images/b3a36dfaa9390fb5-ffe333713788d324-ab37281781489fda9b7f8ff3ca84ba67.jpg" alt=""></div>
				<div class="right">
					<div class="article-title">你好，这是文章的标题</div>
					<div class="article-author">文章的作者</div>
					<div class="article-tags">文章标签1</div>
					<div class="article-bio">这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，这是一份带值得文章简介，请不要误会，</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="less">
.swiper-container {
	width: var(--home-left-card-width);
	height: 16%;
	position: absolute;
	top: var(--card-top);
	left: var(--home-card-left-position);
	border-radius: var(--card-border-radius);
	overflow: hidden;
	background-color: var(--home-card-background-color);
	backdrop-filter: var(--home-card-backdrop-filter);
}

.item-container {
	width: 100%;
	height: 100%;
	position: relative;
	top: 0;
	left: 0;
}

.transition {
	transition: all 1s;
}

.swiper-item {
	width: 100%;
	height: 100%;
	display: inline-flex;
	justify-content: center;

	.left {
		width: 50%;
		height: 100%;
		display: inline-flex;
		justify-content: start;
		align-items: center;
	}

	.right {
		width: 45%;
		height: 100%;
		display: inline-flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: var(--card-border-radius);
	}

	/* 文章标题 */
	.article-title {
		font-size: 20px;
		font-weight: 800;
		//margin-top: 55px;
		margin-top: 12%;
	}

	/* 文章作者 */
	.article-author {
		//margin-top: 24px;
		//margin-left: 16px;
		margin-top: 5%;
		margin-left: 3%;
		font-size: 18px;
		font-weight: 600;
		font-style: italic;
	}

	/* 文章标签 */
	.article-tags {
		//margin-top: 25px;
		//margin-left: 10px;
		margin-top: 6%;
		margin-left: 2%;
	}

	/* 文章简介 */
	.article-bio {
		//margin-top: 25px;
		margin-top: 6%;
		//padding: 0 5px;
		padding: 0 1%;
		text-indent: 2em;
	}
}


</style>