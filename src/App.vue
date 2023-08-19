<template>
	<div>
		<Header></Header>
		<Main></Main>
		<Footer class="footer"></Footer>
		<!-- 鼠标点击组件 -->
		<MouseClick />
		<!-- 进入首页特效展示 -->
		<Hello v-if="showHello" />
		<div class="mark" v-if="showHello"></div>
		<FixedBar />
		<!--<RightClickMenu />-->

	</div>
</template>

<script>
// 引入留言板组件
// import messageBoard from "@/views/leaveMsgBoard/messageBoard.vue";
import Main from "@/views/Main.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MouseClick from "@/components/MouseClick.vue";
import Hello from "@/components/Hello.vue";
import FixedBar from "@/components/FixedBar.vue";
// import RightClickMenu from "@/components/RightClickMenu.vue"
export default {
	name: 'App',
	data() {
		return {
			showHello: true,
		}
	},
	components: {
		FixedBar,
		MouseClick,
		// messageBoard,
		Main,
		Header,
		Footer,
		Hello,
		// RightClickMenu,
	},
	mounted() {
		// 销毁 Hello 组件
		setTimeout(() => {
			this.showHello = false
		}, 8500)
	}
}
</script>

<style scoped lang="less">
@import "style/mixin/clear";
.max {
	.el-header {
		.clearfix();
	}
	.footer {
		position: relative;
		bottom: 0;
	}
}

.mark {
	background-color: rgba(255, 255, 255, .7);
	backdrop-filter: blur(10px);
	z-index: 999;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
