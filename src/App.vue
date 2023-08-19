<template>
	<div>
		<Header></Header>
		<Main></Main>
		<Footer class="footer"></Footer>
		<!-- 鼠标点击组件 -->
		<MouseClick />
		<!--<Login />-->
		<!--<Hello />-->
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
// import Login from "@/components/Login.vue";
import Hello from "@/components/Hello.vue";
import FixedBar from "@/components/FixedBar.vue";
import RightClickMenu from "@/components/RightClickMenu.vue"
export default {
	name: 'App',
	components: {
		FixedBar,
		// Login,
		MouseClick,
		// messageBoard,
		Main,
		Header,
		Footer,
		Hello,
		RightClickMenu,
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
</style>
