<template>
	<div>
		<Header></Header>
		<Main></Main>
		<Footer class="footer"></Footer>
	</div>
</template>

<script>
// 引入留言板组件
import messageBoard from "@/views/messageBoard.vue";
import Main from "@/views/Main.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	name: 'App',
	components: {
		messageBoard,
		Main,
		Header,
		Footer,
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
