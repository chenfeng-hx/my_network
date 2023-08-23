<script>
/**
 * 当前代码编辑信息:
 *     由用户 尘封 使用 WebStorm 在 “views” 中
 *     于 2023/8/19 编写而成！
 *     祝你食用愉快！！！
 */
import { defineComponent } from "vue";

export default defineComponent({
	name: "MusicPlayer",
	data() {
		return {
			musicSrc: 'http://blogs.xiaohai-hx.cn/view-default/default-music/Sample%20this%20-%20RJ%20Pasin.mp3',

		}
	},
	methods: {

	},
})

</script>

<template>
	<!-- 音乐转盘 -->
	<div class="music-container rotate-animation">
		<div class="min-circle-transport">
			<!--<audio :src="musicSrc" autoplay loop />-->
		</div>
	</div>

</template>

<style scoped lang="less">
.music-container {
	width: 50px;
	height: 50px;
	position: fixed;
	bottom: 50px;
	left: 30px;
	border-radius: 50%;
	display: inline-flex;
	background-image: url("@/assets/images/b3a36dfaa9390fb5-ffe333713788d324-ab37281781489fda9b7f8ff3ca84ba67.jpg");
	background-size: cover;
	background-position: center;
	cursor: pointer;

	&:hover, &:active {
		transform: scale(1.5);
	}
}

.rotate-animation {
	animation: rotate 2s infinite linear;
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

.min-circle-transport {
	border-radius: 50%;
	width: 15px;
	height: 15px;
	background-color: black;
	margin: auto;
}
</style>