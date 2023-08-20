<template>
	<div>
		<!-- 头部导航 -->
		<div class="maxHeader">
			<!--logo-->
			<div class="title">生活碎片</div>
			<!--搜索框-->
			<div class="search">
				<input type="text" name="search" id="search" placeholder="请输入搜索信息..." v-model.trim="searchInfo">
				<button type="button" id="search_btn" @click="sendValue">
					<img src="../assets/icon_font/搜索.svg" alt="">
				</button>
			</div>
			<!--专栏导航-->
			<div class="toNav">
				<ul class="others">
					<li v-for="item in topBarData" :key="item.id">
						<span><img :src="require('../assets/icon_font/'+item.icon)" alt=""></span>
						<span>{{ item.label }}</span>
					</li>
				</ul>
				<!--个人中心-->
				<div class="personal-center">
					<el-dropdown>
						<img src="../assets/images/avatar.jpg" alt="">
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item style="display: flex;" >
								<img src="@/assets/icon_font/登录.svg" alt="" style="width: 25px;" @click="changeDialog"><span @click="changeDialog">登录</span>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
				<!-- 登录弹出框 -->
				<el-dialog
					:visible.sync="dialogLoginForm"
					center
					:append-to-body=true
					:show-close="false"
					top=45vh
				>
					<login />
				</el-dialog>

			</div>
		</div>
		<!-- 底下在垫一层，否则会出现下面的.top 元素上浮的现象，导致布局混乱 -->
		<div class="maxHeader" style="position: relative;"></div>
	</div>
</template>

<script>
import "@/assets/icon_font/首页.svg"
import Login from "@/components/Login.vue";
/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “my-network” 中
 *    于 2023-03-25 17:09:19 编写而成！
 *    祝你食用愉快！！！
 */
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Header",
	data() {
		return {
			// 路由 tab
			topBarData: [
				{
					label: '首页',
					icon: '房子.svg',
					path: '/home',
				},
				{
					label: '自习室',
					icon: '书籍.svg',
					path: '/class',
				},
				{
					label: '非礼勿言',
					icon: '话题.svg',
					path: '/msgBoard',
				},
				{
					label: '曲乐',
					icon: '耳机.svg',
					path: '/music',
				},
				{
					label: '百宝箱',
					icon: '书包.svg',
					path: '/magicBox',
				},
				{
					label: '关于',
					icon: '信封.svg',
					path: '/about',
				}
			],
			// 登录弹出框是否显示
			dialogLoginForm: false,
			searchInfo: '',
		}
	},
	methods: {
		sendValue() {
			console.log(this.searchInfo);
			this.searchInfo = '';
		},
		changeDialog() {
			this.dialogLoginForm = true;
		}
	},
	components: {
		Login,
	}
}
</script>

<style scoped lang="less">
@import "src/style/mixin/clear";
.maxHeader {
	z-index: 2;
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	position: fixed;

	//&:hover {
	//	background-color: rgba(3, 3, 3, 0.5);
	//}
	.title {
		position: relative;
		top: 12px;
		left: 22px;
		font-size: 20px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		user-select: none;
	}
	.search {
		position: relative;
		input {
			position: relative;
			top: 5px;
			width: 260px;
			height: 35px;
			border-radius: 5px;
			border: 2px solid #444444;
			background-color: transparent;
			&::placeholder {
				color: #333333;
			}
			&:focus::placeholder {
				color: #FFFFFF;
			}
		}
		button {
			position: relative;
			top: 11px;
			width: 40px;
			height: 35px;
			background-color: transparent;
			cursor: pointer;
			img {
				width: 25px;
				height: 25px;
			}
		}
	}
	.toNav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		right: 40px;
		user-select: none;

		.others {
			li {
				float: left;
				margin-right: 20px;
				cursor: pointer;
				img {
					width: 25px;
					height: 25px;
					vertical-align: -5px;
				}
				span {
					&:last-of-type {
						margin-left: 3px;
						font-size: 15px;
						line-height: 1.5;
					}
				}
			}
		}
		.personal-center {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			overflow: hidden;
			margin-left: 15px;
			cursor: pointer;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

}

::v-deep .el-dialog {
	background: transparent;
	box-shadow: none;
}
</style>