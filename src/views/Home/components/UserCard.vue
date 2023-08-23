<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/21 编写而成！
 *     祝你食用愉快！！！
 */

import {defineComponent} from "vue";

export default defineComponent({
	name: 'UserCard',
	props: [ 'avatar' ],
	data() {
		return {
			isFollow: false,
			followIcon: "@/assets/icon_font/关注.svg",
		}
	},
	computed: {
		followText: function () {
			return this.isFollow ? "已关注" : "未关注"
		},
	},
	methods: {
		// 用户点击更改是否关注此人
		changeFollow() {
			this.isFollow = !this.isFollow;
		}
	}
})
</script>

<template>
	<!-- 个人卡片信息展示 -->
	<div class="user-info-card">
		<!-- 彩带 -->
		<div class="confetti">
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
			<div class="confetti-piece"></div>
		</div>
		<!-- 卡片背景 -->
		<div class="user-bg-img"></div>
		<!-- 下方的容器 -->
		<div class="mini-container">
			<!-- 个人头像 -->
			<div class="user-avatar"><img src="@/assets/images/avatar.jpg" alt=""></div>
			<!-- 作者名称 -->
			<div class="name">旅行者!</div>
			<!-- 个人简介 -->
			<p class="bio">Hello world, 我是一个web工程师！哈哈哈哈哈</p>
			<!-- 当前的成就 -->
			<div class="Achievements">
				<div class="mini-box">
					<div>文章</div>
					<div>45</div>
				</div>
				<div class="vertical"></div>
				<div class="mini-box">
					<div>归档</div>
					<div>5</div>
				</div>
			</div>
			<!-- 关联账号 -->
			<div class="release">
				<a href="https://github.com/chenfeng-hx" target="_blank"><img src="@/assets/icon_font/github.svg" alt=""></a>
				<a href="https://gitee.com/chenfenghx" target="_blank"><img src="@/assets/icon_font/gitee.svg" alt=""></a>
				<a href="https://github.com/chenfeng-hx" target="_blank"><img src="@/assets/icon_font/微信.svg" alt=""></a>
				<a href="https://github.com/chenfeng-hx" target="_blank"><img src="@/assets/icon_font/github.svg" alt=""></a>
			</div>
			<!-- 是否关注 -->
			<div class="follow" @click="changeFollow">
				<div class="follow-icon"><img src="@/assets/icon_font/关注.svg" alt=""></div>
				<div>{{ followText }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
/* 总体结构 */
.user-info-card {
	width: var(--home-right-card-width);
	height: 21%;
	position: absolute;
	right: var(--home-card-right-position);
	top: var(--card-top);
	border-radius: var(--card-border-radius);
}

/* 卡片背景 */
.user-bg-img {
	width: 100%;
	height: 40%;
	background-image: url("@/assets/images/b3a36dfaa9390fb5-ffe333713788d324-ab37281781489fda9b7f8ff3ca84ba67.jpg");
	background-size: cover;
	background-position: center;
	border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
	backdrop-filter: blur(1px);
}

/* 主体结构 */
.mini-container {
	width: 100%;
	height: 60%;
	background-color: var(--home-card-background-color);
	backdrop-filter: var(--home-card-backdrop-filter);
	display: inline-flex;
	align-items: center;
	flex-direction: column;
	border-radius: 0 0 var(--card-border-radius) var(--card-border-radius);
}

/* 个人头像 */
.user-avatar {
	width: 25%;
	height: 32%;
	border-radius: 50%;
	//background-color: #FFFFFF;
	// 保证比彩带的层级高
	z-index: 3;
	position: relative;
	top: -19%;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	img {
		width: 90%;
		border-radius: 50%;
	}
}

/* 个人姓名 */
.name {
	position: relative;
	top: -16%;
}

/* 个人简介的简略形式 */
.bio {
	width: 100%;
	height: auto;
	font-size: 14px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	padding: 0 10px;
	position: relative;
	top: -13%;
}

/* 当前的成就 */
.Achievements {
	width: 90%;
	height: 20%;
	display: inline-flex;
	justify-content: space-around;
	top: -5%;
	position: relative;

	.mini-box {
		width: 48%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.vertical {
		height: 90%;
		width: 1px;
		background-color: rgba(0, 0, 0, .3);
		border-radius: 12px;

	}
}

/* 关联账号 */
.release {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		margin-right: 5px;

		img {
			width: 25px;
		}
	}
}

/* 关注 */
.follow {
	width: 40%;
	height: 10%;
	border-top: 1px dashed #333333;
	border-left: 1px dashed #333333;
	position: absolute;
	bottom: 0;
	right: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;

	.follow-icon {
		img {
			width: 25px;
		}
	}
}

/* 彩带 */
.confetti {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 40%;
	overflow: hidden;
	z-index: 2;
}

.confetti-piece {
	position: absolute;
	width: 10px;
	height: 20px;
	background-color: hsl(39, 100%, 56%);
	top: 0;
	opacity: 0;
	animation: makeItRain 3000ms infinite ease-in-out;
}

.confetti-piece:nth-child(1) {
	left: 7%;
	transform: rotate(-10deg);
	animation-delay: 182ms;
	animation-duration: 2000ms;
}

.confetti-piece:nth-child(2) {
	left: 14%;
	transform: rotate(20deg);
	animation-delay: 161ms;
	animation-duration: 2076ms;
}

.confetti-piece:nth-child(3) {
	left: 21%;
	transform: rotate(-51deg);
	animation-delay: 481ms;
	animation-duration: 2103ms;
}

.confetti-piece:nth-child(4) {
	left: 28%;
	transform: rotate(61deg);
	animation-delay: 334ms;
	animation-duration: 1008ms;
}

.confetti-piece:nth-child(5) {
	left: 35%;
	transform: rotate(-52deg);
	animation-delay: 302ms;
	animation-duration: 1776ms;
}

.confetti-piece:nth-child(6) {
	left: 42%;
	transform: rotate(38deg);
	animation-delay: 180ms;
	animation-duration: 1168ms;
}

.confetti-piece:nth-child(7) {
	left: 49%;
	transform: rotate(11deg);
	animation-delay: 395ms;
	animation-duration: 1200ms;
}

.confetti-piece:nth-child(8) {
	left: 56%;
	transform: rotate(49deg);
	animation-delay: 14ms;
	animation-duration: 1887ms;
}

.confetti-piece:nth-child(9) {
	left: 63%;
	transform: rotate(-72deg);
	animation-delay: 149ms;
	animation-duration: 1805ms;
}

.confetti-piece:nth-child(10) {
	left: 70%;
	transform: rotate(10deg);
	animation-delay: 351ms;
	animation-duration: 2059ms;
}

.confetti-piece:nth-child(11) {
	left: 77%;
	transform: rotate(4deg);
	animation-delay: 307ms;
	animation-duration: 1132ms;
}

.confetti-piece:nth-child(12) {
	left: 84%;
	transform: rotate(42deg);
	animation-delay: 464ms;
	animation-duration: 1776ms;
}

.confetti-piece:nth-child(13) {
	left: 91%;
	transform: rotate(-72deg);
	animation-delay: 429ms;
	animation-duration: 1818ms;
}

.confetti-piece:nth-child(14) {
	left: 94%;
	transform: rotate(-72deg);
	animation-delay: 429ms;
	animation-duration: 818ms;
}

.confetti-piece:nth-child(15) {
	left: 96%;
	transform: rotate(-72deg);
	animation-delay: 429ms;
	animation-duration: 2818ms;
}

.confetti-piece:nth-child(16) {
	left: 98%;
	transform: rotate(-72deg);
	animation-delay: 429ms;
	animation-duration: 2818ms;
}

.confetti-piece:nth-child(17) {
	left: 50%;
	transform: rotate(-72deg);
	animation-delay: 429ms;
	animation-duration: 2818ms;
}

.confetti-piece:nth-child(18) {
	left: 60%;
	transform: rotate(-72deg);
	animation-delay: 429ms;
	animation-duration: 1818ms;
}

.confetti-piece:nth-child(odd) {
	background-color: hsl(0, 100%, 67%);
}

.confetti-piece:nth-child(even) {
	z-index: 1;
}

.confetti-piece:nth-child(4n) {
	width: 6px;
	height: 14px;
	animation-duration: 4000ms;
	background-color: #c33764;
}

.confetti-piece:nth-child(5n) {
	width: 3px;
	height: 10px;
	animation-duration: 4000ms;
	background-color: #b06ab3;
}

.confetti-piece:nth-child(3n) {
	width: 4px;
	height: 12px;
	animation-duration: 2500ms;
	animation-delay: 3000ms;
	background-color: #dd2476;
}

.confetti-piece:nth-child(3n-7) {
	background-color: hsl(166, 100%, 37%);
}

@keyframes makeItRain {
	from {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	to {
		transform: translateY(200px);
	}
}
</style>