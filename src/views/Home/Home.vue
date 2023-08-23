<template>
	<!-- 网页首页 -->
	<div class="home-max-container">
		<!-- 打字机效果 -->
		<type-writer />
		<!-- 波浪效果 -->
		<Wave />
		<!-- 展示主页 -->
		<div class="show">
			<!-- 个人信息卡片展示 -->
			<UserCard :avatar=avator />
			<!-- 轮播图 -->
			<ArticleSwiper />
			<!-- 文章分类 -->
			<ArticleClassification />
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
import { defineComponent } from "vue";
import typeWriter from "@/views/Home/components/TypeWriter.vue";
import Wave from "@/components/Wave.vue";
import UserCard from "@/views/Home/components/UserCard.vue";
import ArticleSwiper from "@/views/Home/components/ArticleSwiper.vue";
import ArticleClassification from "@/views/Home/components/ArticleClassification.vue";

export default defineComponent({
	// 主页面
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Home",
	data() {
		return {
			avator: "@/assets/images/avatar.jpg"

		}
	},
	computed: {

	},
	methods: {

	},
	components: {
		ArticleClassification,
		ArticleSwiper,
		Wave,
		typeWriter,
		UserCard,
	}

})
</script>

<style scoped lang="less">
.show {
	width: 100%;
	height: 2000px;
	background: linear-gradient(rgba(255, 255, 255, .5), rgba(0, 0, 0, .3));
	display: inline-flex;
	position: relative;
}
</style>