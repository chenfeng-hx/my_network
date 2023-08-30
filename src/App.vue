<template>
	<div>
		<!-- 头部导航 -->
		<Header></Header>
		<!-- 路由页面出口 -->
		<Main></Main>
		<!-- 页脚 -->
		<Footer />
		<!-- 鼠标点击组件 -->
		<MouseClick />
		<!-- 进入首页特效展示 -->
		<!--<Hello v-if="showHello" />-->
		<!--<div class="mark" v-if="showHello"></div>-->
		<!-- 右键鼠标菜单展示 -->
		<RightClickMenu />
		<!-- 侧边固定栏 -->
		<FixedBar />
		<!-- 音乐播放 -->
		<MusicPlayer />
		<SnowDown />
	</div>
</template>

<script>
import Main from "@/views/Main.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MouseClick from "@/components/MouseClick.vue";
import Hello from "@/components/Hello.vue";
import FixedBar from "@/components/FixedBar.vue";
import RightClickMenu from "@/components/RightClickMenu.vue"
import MusicPlayer from "@/components/MusicPlayer.vue";
import SnowDown from "@/components/SnowDown.vue";
import {validatorUser} from "@/api/base/user";
export default {
	name: 'App',
	data() {
		return {
			showHello: true,
		}
	},
	components: {
		SnowDown,
		MusicPlayer,
		FixedBar,
		MouseClick,
		Main,
		Header,
		Footer,
		Hello,
		RightClickMenu,
	},
	methods: {
		// 用户无感登录 token
		getUser() {
			validatorUser().then(res => {
				if (res.status === 200) {
					// 关闭某个路由可能出现的一进入就请求数据但是身份验证失败导致的登录框弹出问题
					this.$store.commit('setDialog', false);
					this.$store.commit('setUserName', { 'username' : res.data.username, 'userId' : res.data.userId });
				}
			}).catch(err => {
				console.log(err);
			})
		}
	},
	created() {
		// 进行登录验证
		this.getUser();
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
@import "@/static/css/clear";
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
